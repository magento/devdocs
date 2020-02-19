---
subgroup: howtos
group: ui-components-guide
title: Configure the TinyMCE editor
---
The config of the TinyMCE editor builds by `CompositeConfigProvider` 

For example:

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

In the `Magento\Cms\Model\Wysiwyg\DefaultConfigProvider` implements `Magento\Framework\Data\Wysiwyg\ConfigProviderInterfacemethod` and in the method `getConfig`
adds the additional configuration and enable list of plugins:

```php
/**
 * Class DefaultConfigProvider returns data required to render tinymce4 editor
 */
class DefaultConfigProvider implements \Magento\Framework\Data\Wysiwyg\ConfigProviderInterface
{
    ...

    /**
     * {@inheritdoc}
     */
    public function getConfig(\Magento\Framework\DataObject $config) : \Magento\Framework\DataObject
    {
        $config->addData([
            'tinymce4' => [
                'toolbar' => 'formatselect | bold italic underline | alignleft aligncenter alignright | '
                    . 'bullist numlist | link table charmap',
                'plugins' => implode(
                    ' ',
                    [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'charmap',
                        'media',
                        'noneditable',
                        'table',
                        'contextmenu',
                        'paste',
                        'code',
                        'help',
                        'table'
                    ]
                ),
                'content_css' => $this->assetRepo->getUrl('mage/adminhtml/wysiwyg/tiny_mce/themes/ui.css')
            ]
        ]);
        return $config;
    }
}
```

In the case the `Magento\Cms\Model\Wysiwyg\Gallery\DefaultConfigProvider` enables the image plugin.

See a list of possibly TinyMCE settings on their [website](https://www.tinymce.com/docs/configure/).

You can extend and fully customize the TinyMCE editor to match the style and look-and-feel of your custom theme.

First way is implementing `DefaultConfigProvider` class implements `Magento\Framework\Data\Wysiwyg\ConfigProviderInterfacemethod` in the custom module and implement the method `getConfig` where specify necessary configuration. 

Other way the developers can use the after plugin for add or overwrite the configuration values.
