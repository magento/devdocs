---
subgroup: howtos
group: ui-components-guide
title: Configure the TinyMCE editor
---
You can extend and fully customize the TinyMCE editor to match the style and look-and-feel of your custom theme.
This enables richer content editing capabilities and ensures that content created in the Page Builder <span term-uuid="98cf4fd5-59b6-4610-9c1f-b84c8c0abd97" class="glossary-term" data-toggle="popover">WYSIWYG</span> or CMS content is seamlessly integrated and consistent with your other content.

The config of the TinyMCE editor builds by `CompositeConfigProvider`
The class `CompositeConfigProvider` loads required config by adapter specified in system configuration General > Content Management >WYSIWYG Options > WYSIWYG Editor, this class is the configuration provider class and aggregates the data in the array.
For example `Magento\Cms\Model\Wysiwyg\CompositeConfigProvider` of Magento_Cms module.

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

Or the Magento_PageBuilder module

```xml
<type name="Magento\Cms\Model\Wysiwyg\CompositeConfigProvider">
    <arguments>
        <argument name="variablePluginConfigProvider" xsi:type="array">
            <item name="Magento_PageBuilder/pageBuilderAdapter" xsi:type="string">Magento\Cms\Model\WysiwygDefaultConfig</item>
        </argument>
        <argument name="widgetPluginConfigProvider" xsi:type="array">
            <item name="Magento_PageBuilder/pageBuilderAdapter" xsi:type="string">Magento\Cms\Model\WysiwygDefaultConfig</item>
        </argument>
        <argument name="wysiwygConfigPostProcessor" xsi:type="array">
            <item name="Magento_PageBuilder/pageBuilderAdapter" xsi:type="string">Magento\Cms\Model\WysiwygDefaultConfig</item>
            <item name="default" xsi:type="string">Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider</item>
        </argument>
        <argument name="galleryConfigProvider" xsi:type="array">
            <item name="Magento_PageBuilder/pageBuilderAdapter" xsi:type="string">Magento\Cms\Model\WysiwygDefaultConfig</item>
        </argument>
    </arguments>
</type>
```

The class DefaultConfigProvider returns data required to render TinyMCE editor.
From the example the class `Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider` overrides existing configuration provided by `Magento_CMS` module.

## Extending the TinyMCE editor

Revise the `di.xml` file, adding the configuration settings as an argument to `Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider`, to customize the TinyMCE editor present in Page Builder.
The following code shows an example of configuration settings in the `di.xml` file that determine the font sizes available for selection and add a paragraph menu option associated with the `<p>` tag:
The example of `Magento\PageBuilder\etc\adminhtml\di.xml`

```xml
<type name="Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider">
    <arguments>
        <argument name="additionalSettings" xsi:type="array">
            <item name="fontsize_formats" xsi:type="string">10px 12px 14px 16px 18px 20px 24px 26px 28px 32px 34px 36px 38px 40px 42px 48px 52px 56px 64px 72px</item>
            <item name="style_formats" xsi:type="array">
                <item name="paragraph" xsi:type="array">
                    <item name="title" xsi:type="string">Paragraph</item>
                    <item name="block" xsi:type="string">p</item>
                </item>
            </item>
      </argument>
  </arguments>
</type>
```

Once you have edited the `di.xml` file you can apply custom styling for the settings you implemented in the related CSS file.

Also, the config of the TinyMCE editor can be extended by a plugin.
Configuration providers are classes with a `getConfig()` method that returns the configuration for a specific entity.

For example, in the `Magento\Cms\Model\Wysiwyg\DefaultConfigProvider` the method `getConfig()`
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

In this case, the `Magento\Cms\Model\Wysiwyg\Gallery\DefaultConfigProvider` enables the image plugin.
See a list of possibly TinyMCE settings on their [website](https://www.tinymce.com/docs/configure/).

The following example shows how you can extend the TinyMCE editor configuration by creating a plugin for `DefaultConfigProvider` which extends  `getConfig()` method of the original class.
For example:

```php
...

/**
 * @param \Magento\Cms\Model\Wysiwyg\Gallery\DefaultConfigProvider $subject
 * @param \Magento\Framework\DataObject $result
 * @return \Magento\Framework\DataObject $result
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
public function afterGetConfig(\Magento\Cms\Model\Wysiwyg\Gallery\DefaultConfigProvider $subject, \Magento\Framework\DataObject $result)
{
    $result->addData([
                'tinymce4' => [
                    ...
                ]
            ]);

    return $result;
...
}
```
