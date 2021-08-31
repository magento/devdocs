---
group: ui-components-guide
title: WYSIWYG Extension Points
---

This topic goes over the extension points for Magento entities.
You can use these connection points to integrate Magento entities into third-party WYSIWYG editors.

See [Add a third-party editor] for instructions on how to add a third-party WYSIWYG editor to Magento.

## Entity Integration

The specific steps needed to create an editor plugin vary between different editors, but
for most editors, it usually involves creating an icon or button for the plugin and executing JavaScript code when clicked.

Use the following steps as a starting point for integrating entities into your custom WYSIWYG editor.

### Step 1. Create plugin directory structure

Create the appropriate plugin directory structure for the entity inside your editor's directory.

For example, both TinyMCE and CKEditor editors both have a `plugins` directory that holds all available plugins.

This folder should be inside your module's `/view/<area>` directory so it will be published to the `pub/static` directory.

### Step 2. Add editor icon

Add the appropriate icon file into your plugin's specific icon or image directory.

For example, in a CKEditor4 plugin, these icons would be added to the following locations:

*  `app/code/CKEditor/CKEditor4/view/base/web/js/ckeditor4/plugins/variable/icons/variable.png`
*  `app/code/CKEditor/CKEditor4/view/base/web/js/ckeditor4/plugins/widget/icons/widget.png`

### Step 3. Implement plugin functionality

#### Variable Entity

Use the [`MagentovariablePlugin`] object to implement the plugin functionality for the variable entity.

**Example:** `lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentovariable/editor_plugin.js` for `magentovariable`

``` js
/**
 * Initialize editor plugin.
 *
 * @param {tinymce.editor} editor - Editor instance that the plugin is initialized in.
 */
init: function (ed) {
    var self = this;
    /**
    * Add new command to open variables selector slideout.
    */
    editor.addCommand('openVariablesSlideout', function (commandConfig) {
        var selectedElement;

        if (commandConfig) {
            selectedElement = commandConfig.selectedElement;
        } else {
            selectedElement = tinymce.activeEditor.selection.getNode();
        }
        MagentovariablePlugin.setEditor(editor);
        MagentovariablePlugin.loadChooser(
            config.url,
            wysiwyg.getId(),
            selectedElement
        );
    });

    editor.ui.registry.addToggleButton('magentovariable', {
        icon: 'magentovariable',
        tooltip: jQuery.mage.__('Insert Variable'),

        /**
         * execute openVariablesSlideout for onAction callback
         */
        onAction: function () {
            editor.execCommand('openVariablesSlideout');
        },

        /**
         * Highlight or dismiss Insert Variable button when variable is selected or deselected.
         */
        onSetup: function (api) {
            /**
             * Toggle active state of Insert Variable button.
             *
             * @param {Object} e
             */
            var toggleVariableButton = function (e) {
                api.setActive(false);

                if (jQuery(e.target).hasClass('magento-variable')) {
                    api.setActive(true);
                }
            };

            editor.on('click', toggleVariableButton);
            editor.on('change', toggleVariableButton);
        }
    });
    ......
},
```

**Example:** `plugin.js` for `variable` plugin for CKEditor4

``` js
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* global CKEDITOR, MagentovariablePlugin, varienGlobalEvents, Base64 */
/* eslint-disable strict */
CKEDITOR.plugins.add('variable', {
    icons: 'variable',

    /**
     * Initialize editor plugin.
     */
    init: function (editor) {

        /**
         * Add new command to open variables selector slideout.
         */
        editor.addCommand('openVariablesSlideout', {
            exec: function (editor) {

                require([
                    'CKEditor_CKEditor4/js/ckeditor4/ckeditor'
                ], function (ckeditor) {
                    //we need this code to transfer config
                    var pluginSettings = ckeditor.settings.magentoPluginsOptions.get('variable');

                    MagentovariablePlugin.setEditor(editor);
                    MagentovariablePlugin.loadChooser(pluginSettings.url, ckeditor.settings.elements);
                });
            }
        });

        /**
         * Add button to the editor toolbar.
         */
        editor.ui.addButton('variable', {
            label: jQuery.mage.__('Insert Variable'),
            command: 'openVariablesSlideout',
            toolbar: 'insert'

        });
    },
});
```

To integrate the default Magento UI for variable, you must have access to the following data:

*  backend URL to load the `variable_modal`

  **Example:** method that returns this url
  ``` js
public function getVariablesWysiwygActionUrl()
{
    return $this->_url->getUrl('mui/index/render', ['namespace' => 'variables_modal']);
}
  ```

*  htmlId of the WYSIWYG editor.
  For CKEditor4, you can get this by calling `editor.element.getId()`.

#### Widget Entity

Use the global [`widgetTools`] object to implement the plugin functionality for the widget entity.

**Example:** `lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentowidget/editor_plugin.js` for `magentowidget`

``` js
/**
 * @param {tinymceDeprecated.Editor} ed - Editor instance that the plugin is initialized in.
 * @param {String} url - Absolute URL to where the plugin is located.
 */
init: function (ed, url) {
    ....
    editor.addCommand('mceMagentowidget', function (img) {
        if (self.activePlaceholder) {
            img = self.activePlaceholder;
        }

        widgetTools.setActiveSelectedNode(img);
        widgetTools.openDialog(
            config['window_url'] + 'widget_target_id/' + editor.getElement().id + '/'
        );
    });

    editor.ui.registry.addToggleButton('magentowidget', {
        icon: 'magentowidget',
        tooltip: jQuery.mage.__('Insert Widget'),

        /**
         * execute openVariablesSlideout for onAction callback
         */
        onAction: function () {
            editor.execCommand('mceMagentowidget');
        },

        /**
         * Add a node change handler, selects the button in the UI when a image is selected
         * @param {ToolbarToggleButtonInstanceApi} api
         */
        onSetup: function (api) {
            /**
             * NodeChange handler
             */
            editor.on('NodeChange', function (e) {
                var placeholder = e.element;

                if (self.isWidgetPlaceholderSelected(placeholder)) {
                    widgetTools.setEditMode(true);
                    api.setActive(true);
                } else {
                    widgetTools.setEditMode(false);
                    api.setActive(false);
                }
            });
        }
    });
.......
},
```

**Example:** `plugin.js` for `widget` plugin for CKEditor4

``` js
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* global CKEDITOR, MagentovariablePlugin, varienGlobalEvents, Base64 */
/* eslint-disable strict */
CKEDITOR.plugins.add('widget', {
    icons: 'widget',

    /**
     * Initialize editor plugin.
     *
     * @param {tinymce.editor} editor - Editor instance that the plugin is initialized in.
     * @param {String} url - Absolute URL to where the plugin is located.
     */
    init: function (editor) {
        var self = this;

        require([
            'Magento_Variable/js/config-directive-generator',
            'Magento_Variable/js/custom-directive-generator'
        ], function (configDirectiveGenerator, customDirectiveGenerator) {
            self.configDirectiveGenerator = configDirectiveGenerator;
            self.customDirectiveGenerator = customDirectiveGenerator;
        });

        /**
         * Add new command to open variables selector slideout.
         */
        editor.addCommand('mceMagentowidget', {
            exec: function (editor) {

                require([
                    'CKEditor_CKEditor4/js/ckeditor4/ckeditor'
                ], function (ckeditor) {
                    widgetTools.openDialog(
                        ckeditor.settings['widget_window_url'] + 'widget_target_id/' + editor.element.getId()+ '/'
                    );
                });
            }
        });

        /**
         * Add button to the editor toolbar.
         */
        editor.ui.addButton('widget', {
            label: jQuery.mage.__('Insert Widget'),
            command: 'mceMagentowidget',
            toolbar: 'insert'

        });
    }
});
```

To integrate the default Magento UI for widgets, you need access to the following data:

*  The backend `widget_window_url` (`\Magento\Widget\Model\Widget\Config::getWidgetWindowUrl`)
*  htmlId of the WYSIWYG editor. For CKEditor4, you can get this by calling `editor.element.getId()`.

#### Media Gallery Entity

Use the global [`MediabrowserUtility`] object to implement or override image browsing functionality in the editor.

**Example:** `lib/web/mage/adminhtml/wysiwyg/tiny_mce/tinymce5Adapter.js`

``` js
.....
/**
 * @param {Object} o
 */
openFileBrowser: function (o) {
    var typeTitle = this.translate('Select Images'),
        storeId = this.config['store_id'] ? this.config['store_id'] : 0,
        frameDialog = jQuery('div.mce-container[role="dialog"]'),
        self = this,
        wUrl = this.config['files_browser_window_url'] +
            'target_element_id/' + this.getId() + '/' +
            'store/' + storeId + '/';

    this.mediaBrowserOpener = o.callback;

    if (typeof o.meta.filetype !== 'undefined' && o.meta.filetype !== '') { //eslint-disable-line eqeqeq
        wUrl = wUrl + 'type/' + o.meta.filetype + '/';
    }

    frameDialog.hide();
    jQuery('.tox-tinymce-aux').hide();

    require(['mage/adminhtml/browser'], function () {
        MediabrowserUtility.openDialog(wUrl, false, false, typeTitle, {
                /**
                 * Closed.
                 */
                closed: function () {
                    frameDialog.show();
                    jQuery('.tox-tinymce-aux').show();
                },

                targetElementId: self.activeEditor() ? self.activeEditor().id : null
            }
        );
    });
},
.....
```

#### Step 4. Register plugin

Use the editor specific command or steps needed to register your plugin with the editor.

For example, TinyMCE3 has a `PluginManager.add()` method while CKEditor requires you to modify a configuration file.

## Configuration

Configuration for the WYSIWYG editor and available entities is implemented in the following class:

[`Magento\Cms\Model\Wysiwyg\Config`]

This class has a `getConfig()` method that returns the all available configurations as an array.

The class that aggregates the data in the array is the configuration provider class:

`Magento\Cms\Model\Wysiwyg\CompositeConfigProvider`

In your module's [`di.xml`] file, you can define a [virtual type] of this class to substitute or modify the following configuration providers:

| Argument name                  | Description                                  |
| ------------------------------ | -------------------------------------------- |
| `variablePluginConfigProvider` | Provider for variable plugin configuration   |
| `widgetPluginConfigProvider`   | Provider for widget plugin configuration     |
| `galleryConfigProvider`        | Provider for the media gallery configuration |
| `wysiwygConfigPostProcessor`   | Provider for WYSIWYG editor configuration    |

If your implementation does not require any modifications to the configuration, you can use the default implementation:

`Magento\Cms\Model\WysiwygDefaultConfig`

**Example di.xml file entry for TinyMCE editor:**

```xml
<type name="Magento\Cms\Model\Wysiwyg\CompositeConfigProvider">
    <arguments>
        <argument name="variablePluginConfigProvider" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Variable\Model\Variable\ConfigProvider</item>
        </argument>
        <argument name="widgetPluginConfigProvider" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Widget\Model\Widget\Config</item>
        </argument>
        <argument name="wysiwygConfigPostProcessor" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Cms\Model\Wysiwyg\DefaultConfigProvider</item>
        </argument>
        <argument name="galleryConfigProvider" xsi:type="array">
            <item name="default" xsi:type="string">Magento\Cms\Model\Wysiwyg\Gallery\DefaultConfigProvider</item>
        </argument>
    </arguments>
</type>
```

### Configuration providers

Configuration providers are classes with a `getConfig()` method that returns the configuration for a specific entity.
These classes are implementations of the following interface:

`Magento\Framework\Data\Wysiwyg\ConfigProviderInterface`

The `name` attribute for the configuration provider in the `di.xml` entry must match the editor's registered option value.
In the example provided, this value is `default`

[`Magento\Cms\Model\Wysiwyg\Config`]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Cms/Model/Wysiwyg/Config.php
[virtual type]: {{page.baseurl }}/extension-dev-guide/build/di-xml-file.html#virtual-types
[`di.xml`]: {{page.baseurl }}/extension-dev-guide/build/di-xml-file.html
[Integrate third-party editors]: {{page.baseurl }}/ui_comp_guide/components/ui-wysiwyg.html#add-a-custom-editor
[`widgetTools`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentowidget/editor_plugin.js
[`MagentovariablePlugin`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/mage/adminhtml/wysiwyg/tiny_mce/plugins/magentovariable/editor_plugin.js
[`MediabrowserUtility`]: {{ site.mage2bloburl }}/{{page.guide_version}}/lib/web/mage/adminhtml/browser.js
[Add a third-party editor]: {{page.baseurl }}/ui_comp_guide/components/wysiwyg/add-custom-editor/
