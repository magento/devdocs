---
group: UI_Components_guide
subgroup: components
title: FileUploader component
menu_title: FileUploader component
version: 2.2
github_link: ui_comp_guide/components/ui-fileuploader.md
---

## Overview 

The File Uploader component is an {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} for the <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">jQuery-File-Upload</a> plugin used in Magento. This component integrates file upload functionality with UI components.

## Structure {#structure}

* Constructor: `<Magento_Ui_module_dir>/view/base/web/js/form/element/file-uploader.js`
* JQuery file upload plugin: `jquery/fileUploader/jquery.fileupload-fp`
* Default template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/uploader.html`
* Preview template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/preview.html`

## Configuration settings

Extends all `abstract` configuration.

Fileuploader-specific configuration:

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
        extion is allowed, "true" - any extension is allowed.
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
        <code>placeholderType</code>
      </td>
      <td>
        Defines the preview type. (When set to
        <code>document</code>, the file information is displayed.)
      </td>
      <td>
        <code>document</code> | <code>image</code> |
        <code>video</code>
      </td>
      <td>
        <code>document</code>
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

## Integration {#example}

Here is an example of how File Uploader component integrates with <a href="{{ page.baseurl }}/ui_comp_guide/components/ui-form.html">Form</a> component:

{% highlight xml %}
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
{% endhighlight %}
