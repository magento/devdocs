---
group: ui-components-guide
title: FileUploader component
---

The File Uploader component is an [adapter](https://glossary.magento.com/adapter) for the [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki) plugin used in Magento. This component integrates file upload functionality with UI components.

## Configuration options

<table>
  <tbody>
    <tr>
      <th>
        Title
      </th>
      <th>
        Description
      </th>
      <th>
        Type
      </th>
      <th>
        Default Value
      </th>
    </tr>
    <tr>
      <td>
        <code>allowedExtensions</code>
      </td>
      <td>
        List of allowed file extensions. For example, <code>'jpg
        jpeg gif png svg'</code>. If set to "false" - then no
        extension is allowed, "true" - any extension is allowed.
      </td>
      <td>
        Boolean/String
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>component</code>
      </td>
      <td>
        The path to the component’s JS constructor in terms of
        RequireJS.
      </td>
      <td>
        String
      </td>
      <td>
        <code>Magento_Ui/js/form/element/file-uploader</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>dropZone</code>
      </td>
      <td>
        CSS selector of a drop zone element.
      </td>
      <td>
        String
      </td>
      <td>
        <code>[data-role=drop-zone]</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>isMultipleFiles</code>
      </td>
      <td>
        Defines whether multiple files can be uploaded.
      </td>
      <td>
        Boolean
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>maxFileSize</code>
      </td>
      <td>
        Defines the maximum allowed file size in bytes.
      </td>
      <td>
        Boolean/Number
      </td>
      <td>
        <code>false</code>
      </td>
    </tr>
     <tr>
      <td>
        <code>previewTmpl</code>
      </td>
      <td>
        Path to the file's preview <code>.html</code> template
      </td>
      <td>
        String
      </td>
      <td>
        <code>ui/form/element/uploader/preview</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>template</code>
      </td>
      <td>
        The path to the field’s general <code>.html</code>
        template.
      </td>
      <td>
        String
      </td>
      <td>
        <code>ui/form/element/uploader/uploader</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>uploaderConfig</code>
        <ul>
          <li><code>dataType</code>
          </li>
          <li><code>sequentialUploads</code>
          </li>
          <li><code>formData</code>
          </li>
        </ul>
      </td>
      <td>
        Configuration passed to jquery-file-upload plugin:
        <ul>
          <li>type of data
          </li>
          <li>sequential data uploads
          </li>
          <li>additional form data
          </li>
        </ul>
      </td>
      <td>
        Object
        <ul>
          <li>String
          </li>
          <li>Boolean
          </li>
          <li>Object
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <code>json</code>
          </li>
          <li><code>true</code>
          </li>
          <li>
            <code>{ 'form_key': window.FORM_KEY }</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Example {#example}

Here is an example of how File Uploader component integrates with [Form]({{ site.baseurl }}/guides/v2.1/ui_comp_guide/components/ui-form.html) component:

```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    ...
    <fieldset name="foo">
        ...
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="label" xsi:type="string"/>
            </item>
        </argument>
        <field name="bar">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="label" xsi:type="string">Sound Check</item>
                    <item name="visible" xsi:type="boolean">true</item>
                    <item name="formElement" xsi:type="string">fileUploader</item>
                    <item name="uploaderConfig" xsi:type="array">
                        <item name="url" xsi:type="url" path="path/to/controller"/>
                    </item>
                </item>
            </argument>
        </field>
    </fieldset>
</form>
```

## Source files

Extends `abstract`:

- [`<Magento_Ui_module_dir>/view/base/web/js/form/element/file-uploader.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/element/file-uploader.js)
- [`jquery/fileUploader/jquery.fileupload-fp`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/jquery/fileUploader/jquery.fileupload-fp.js)
- [`<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/uploader.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/uploader.html)
- [`<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/preview.html`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/templates/form/element/uploader/preview.html)


