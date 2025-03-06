# Quick Setup

### 1. Fork the Template
1. Visit the [Paperback Extension Template](https://github.com/paperback-community/template-extensions)
2. Click the "Fork" button in the top-right corner
3. Name your fork and click "Create fork"

### 2. Clone Your Fork
Once you've created your fork, clone it locally:

::: code-group
```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/YOUR_FORK_NAME.git

# Navigate to project directory
cd YOUR_FORK_NAME

# Install dependencies
npm install
```
:::


## Project Structure
Your extension project will look like this:

```text
Extension/
├── src/                   # Source code directory
│   ├── YourSource/       # Your source implementation
│   │   ├── static/       # Static assets
│   │   ├── main.ts      # Main source code
│   │   └── pbconfig.ts  # Source configuration
│   └── tests/           # Test files
└── package.json         # Project configuration
```