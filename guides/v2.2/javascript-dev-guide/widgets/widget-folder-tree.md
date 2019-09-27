---
group: javascript-developer-guide
title: FolderTree widget
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The FolderTree [widget](https://glossary.magento.com/widget/) allows creating a dynamic hierarchical tree structure with folders.

The FolderTree widget can be used only in the [adminhtml](https://glossary.magento.com/adminhtml) area.

The FolderTree widget source is [`<Magento_Cms_module_dir>/view/adminhtml/web/js/folder-tree.js`][].

## Initialize the FolderTree widget

For information about how to initialize a widget in a JS component or `.phtml` template, see the [Initialize JavaScript][] topic.

```javascript
$("#folder-tree").folderTree({
    rootName: 'Root',
    url: 'some/url',
    currentPath: ['root']
});
```
Where:

- `#folder-tree` is the selector of the element which will display FolderTree.

The following example shows a [PHTML](https://glossary.magento.com/phtml) file using the script:

```html
<script>
    require([
        'jquery',
        'Magento_Cms/js/folder-tree'
    ], function ($) {
        'use strict';

        $("#folder-tree").folderTree({
            rootName: 'Root',
            url: 'some/url',
            currentPath: ['root']
        });
    });
</script>
```

## Options

- [currentPath](#currentpath)
- [root](#root)
- [rootName](#rootname)
- [tree](#tree)
- [url](#url)

### `currentPath`

The array path of folders IDs to the current opened folder.

**Type**: Array

**Default value**: `['root']`

### `root`

The id for the root folder [HTML](https://glossary.magento.com/html) element.

**Type**: String

**Default value**: `'root'`

### `rootName`

The name of the root folder.

**Type**: String

**Default value**: `'Root'`

### `tree`

The configuration for [jstree](https://www.jstree.com) widget.

The FolderTree widget used the [jstree](https://www.jstree.com) widget to build a hierarchical tree with folders.

**Type**: String

**Default value**:

```json
{
    'plugins': ['themes', 'json_data', 'ui', 'hotkeys'],
    'themes': {
        'theme': 'default',
        'dots': false,
        'icons': true
    }
}
```

### `url`

The endpoint URL for getting the folders JSON data.

The example of the JSON response:

```json
[
  {
    "text": "Folder #1",
    "id": "1",
    "path": "some/path/",
    "cls": "folder folder-1"
  },
  {
    "text": "Folder #2",
    "id": "2",
    "path": "some/path/2",
    "cls": "folder folder-2"
  }
]
```

**Type**: String

**Default value**: `undefined`

## Code sample

The following example shows the initialization of FolderTree widget.

```html
<div data-role="tree" data-mage-init='{
    "folderTree": {
        "rootName": "Root",
        "url": "/some/path/jsontree",
        "currentPath": ["root"]
    }
}'>
```

### Result

![FolderTree widget example]({{ site.baseurl }}/common/images/widget/folder-tree-widget.png)

<!-- Link Definitions -->
[`<Magento_Cms_module_dir>/view/adminhtml/web/js/folder-tree.js`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/view/adminhtml/web/js/folder-tree.js
[Initialize JavaScript]: {{page.baseurl}}/javascript-dev-guide/javascript/js_init.html
