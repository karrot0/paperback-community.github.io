// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        document.querySelectorAll('.code-toggle').forEach(toggle => {
          toggle.addEventListener('click', () => {
            const container = toggle.parentElement
            if (container?.classList.contains('collapsed')) {
              container.classList.remove('collapsed')
              toggle.textContent = 'Show less'
            } else {
              container?.classList.add('collapsed')
              toggle.textContent = 'Show more'
            }
          })
        })
      }
    }
  }
} satisfies Theme
