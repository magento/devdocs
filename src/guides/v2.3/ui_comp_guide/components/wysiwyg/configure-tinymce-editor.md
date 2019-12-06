---
subgroup: howtos
group: ui-components-guide
title: Configure the TinyMCE editor
---
You can extend and fully customize the TinyMCE editor to match the style and look-and-feel of your custom theme.
This enables richer content editing capabilities and ensures that content created in the Page Builder <span term-uuid="98cf4fd5-59b6-4610-9c1f-b84c8c0abd97" class="glossary-term" data-toggle="popover">WYSIWYG</span> is seamlessly integrated and consistent with your other content.

## Edit the module's `di.xml` file {#edit-di}

Revise the `di.xml` file, adding the configuration settings as an argument to `Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider`, to customize the TinyMCE editor present in Page Builder.

The following code shows an example of configuration settings in the `di.xml` file that determine the font sizes available for selection and add a paragraph menu option associated with the `<p>` tag:

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
See a list of possibly TinyMCE settings on their [website](https://www.tinymce.com/docs/configure/).

Once you have edited the `di.xml` file you can apply custom styling for the settings you implemented in the related CSS file.
