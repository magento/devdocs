---
group: php-developer-guide
title: Extension Repository Structure
---

## Extension Repository Structure

For Magento 2.3 module, theme, and language pack extension repositories, we recommend five best practices:

*  Flatter hierarchy
*  One *extension type* (module, theme, or language pack) per repository
*  Multiple components per repository
*  One component per repository
*  One functional test suite per module component

### Flatter hierarchy

Your repository structure should no longer include `app/code/<Vendor>/` directories.

*Before:*

```tree
<extension_repo_root\>
└── app/code/<Vendor>/
    └── <Module1>
```

*After:*

```tree
<extension_repo_root>/
└── <Module1>
```

### One extension type per repository

You cannot mix extension types (modules, themes, and language packs) in the same extension repository. Each component type must have its own repository. For example, *you cannot do this*:

```tree
// This is not supported
<extension_repo_root>
├── <Module1>
├── <theme1>
└── <language1>
```

### Multiple components per repository

If your extension is complex and requires several components, you can keep those components in the same repository to make the extension easy to package and maintain:

```tree
<extension_repo_root>
├── <Module1>
├── <Module2>
├── <Module1SampleData>
└── <Module2SampleData>
```

You can do the same for theme and language pack extensions:

```tree
<extension_repo_root>/
├── <theme1>
└── <theme2>
```
```tree
<extension_repo_root>/
├── <language1>
└── <language2>
```
### One component per repository

If your extension requires only one component, your `<component_root>` directory and your `<repo_root>` directory will be the same to reduce unnecessary hierarchy in the directory structure:

```tree
<MyModule_repo_root>
├── Api
├── Block
├── Controller
├── Console
├── etc
├── Helper
├── i18n
├── Model
├── Plugin
├── Test
├── view
├── composer.json
├── LICENSE.txt
└── ...
```

### Test Suites

Function tests can be added to a `Test` directory within each module of your extension.

Note: Currently, only Unit and MFTF tests can be run from within a `<Module>` directory.

```tree
<extension_repo_root>
├── <Module1>
│   ├── ...
│   ├── Test
│   │   ├── Unit
│   │   ├── Integration
│   │   └── Mftf
│   │       ├── TestSuite
│   │       └── composer.json
│   └── ...
├── <Module2>
├── <Module1SampleData>
└── <Module2SampleData>
```