# Development <Badge type="warning" text="beta" />
Welcome to the paperback extension development docs, here, we will teach you how to create your own Extension.

## Requirements

<<<<<<< HEAD
# Development <Badge type="warning" text="beta" />
Welcome to the paperback extension development docs, here, we will teach you how to create your own Extension.

## Requirements

=======
>>>>>>> 8005f89 (Development Page Progress)
To get started developing extensions for Paperback you will need:

- [`Node.js`](https://nodejs.org/en/) `v18.x.x` or higher
- A text editor ([`VS Code`](https://code.visualstudio.com) recommended)
- Github account
- [`Git`](https://git-scm.com/downloads)
- Basic `TypeScript` knowledge

## Getting Started
To get started, you need to fork the extension template on github https://github.com/paperback-community/template-extensions

Copy the forks link

In the folder you want to create your extension, Example: E:\projects\extension name

```bash
git clone https://github.com/yourusername/yourextension.git .
```

## Installation
Now you want to make sure to install all your node packages.

In your extension folder, run:
```bash
npm install
```

That should install all of required node packages to run the extension.

## Source Creation
#### Setting up your source
Now this is the part were you will actually start making your own sources.

Once you have selected the source that you want to add to paperback,
Duplicate the ContentTemplate folder inside the src.

Rename it to your desired source name

You should now have a folder structure like this:

```
extension
├── src
│   └── YourSource
│       ├── static
│       ├── SettingsForm.ts
│       ├── main.ts
│       └── pbconfig.ts
│   └── ContentTemplate
│       ├── static
│       ├── SettingsForm.ts
│       ├── main.ts
│       └── pbconfig.ts
└── Etc
```

In pbconfig.ts change the name and description to match your source.

To show file changes in markdown, we can add a ```diff block. Here's a suggested addition to the documentation:

#### Making changes in order for your source to work

Here are the key changes you need to make in main.ts:

```diff
+ baseUrl = "htts://YourSourceUrl.com";

- type ContentTemplateImplementation = SettingsFormProviding &
+ type YourSourceNameImplementation = SettingsFormProviding &

- export class ContentTemplateExtension implements ContentTemplateImplementation {}
+ export class YourSourceExtension implements ContentTemplateImplementation {}

- export const ContentTemplate = new ContentTemplateExtension();
+ export const YourSourceName = new YourSourceExtension();
```

#### Finding your sections
Let's help you find the sections for your source.

Recommended Sections:
> Popular Section

> Recently Changed Section

> Popular Today Section

> New Manga Section

# Docs Not Finisheds
#### Coding your sections
