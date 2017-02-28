---
layout: default
group: UI_Components_guide
subgroup: components
title: FileUploader component
menu_title: Textarea component
version: 2.2
github_link: ui_comp_guide/components/ui-textarea.md
---

## Overview {#filter}

UI File Uploader component is an adapter for <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">jQuery-File-Upload</a> plugin used in Magento. Component is used to integrate file upload functionality with UI components.

## Component elements {#elements}

* Constructor: `<Magento_Ui_module_dir>/view/base/web/js/form/element/file-uploader.js`
* JQuery file upload plugin: `jquery/fileUploader/jquery.fileupload-fp`
* Default template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/uploader.html`
* Preview template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/preview.html`

## Component options {#structure}

<table>
<tbody>
<tr>
    <th>Title</th>
    <th>Description</th>
    <th>Required For Correct Work</th>
    <th>Type</th>
    <th>Default Value</th>
</tr>
<tr>
    <td>allowedExtensions</td>
    <td>List of allowed file extensions. For example, 'jpg jpeg gif png svg'/ <p class="q">What true/false means in this case? True - any, false - none</p></td>
    <td>No</td>
    <td>Boolean/String</td>
    <td>false</td>
</tr>
  <tr>
    <td>component</td>
    <td>The path to the component’s .js file in terms of RequireJS.</td>
    <td></td>
    <td>String</td>
    <td>Magento_Ui/js/form/element/file-uploader</td>
  </tr>
<tr>
    <td>dropZone</td>
    <td>CSS selector of a drop zone element.</td>
    <td>No</td>
    <td>String</td>
    <td>[data-role=drop-zone]</td>
</tr>
<tr>
    <td>isMultipleFiles</td>
    <td>Define whether multiple files can be uploaded.</td>
    <td>No</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>maxFileSize</td>
    <td>Define the maximum allowed file size in bytes<p class="q">What true/false means in this case?</p></td>
    <td>No</td>
    <td>Boolean/Number</td>
    <td>false</td>
</tr>
   <tr>
    <td>placeholderType</td>
    <td>Defines the preview type.</td>
    <td></td>
    <td>'document'|'image'|'video'</td>
    <td>document</td>
  </tr>
<tr>
    <td>previewTmpl</td>
    <td>Path to the file's preview .html template</td>
    <td>No</td>
    <td>String</td>
    <td>ui/form/element/uploader/preview</td>
</tr>
  <tr>
    <td>template</td>
    <td>The path to the field’s general .html template.</td>
    <td></td>
    <td>String</td>
    <td>ui/form/element/uploader/uploader</td>
  </tr>
<tr>
    <td>uploaderConfig 
<ul>
<li>dataType</li>
<li>sequentialUploads</li>
<li>formData</li>
</ul>
</td>
    <td>Configuration passed to jquery-file-upload plugin:
<ul>
<li>type of data</li>
<li>sequential data uploads</li>
<li>additional form data</li>
</ul>
</td>
    <td>Yes</td>
    <td>Object
<ul>
<li>String</li>
<li>Boolean</li>
<li>Object</li>
</ul>
</td>
    <td>
<ul>
<li>json</li>
<li>true</li>
<li>
{
'form_key': window.FORM_KEY
}
</li>
</ul>
</td>
</tr>

</tbody>
</table>

<h2 id="example">Integration</h2>

Here is an example of how File Uploader component integrates with <a href="{{page.baseurl}}ui-components/ui-form.html">Form</a> component:

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
