---
layout: default
group:  UI Library
subgroup: C_Listing/Grid Secondary Components
title: File Uploader Component
menu_title: File Uploader Component
menu_node:
menu_order: 13
version: 2.0
github_link: ui-components/ui-secondary-uploader.md
redirect_from: /guides/v2.0/ui-library/ui-secondary-uploader.html
---

<h2 id="filter">Overview</h2>

UI File Uploader component is an adapter for <a href="https://github.com/blueimp/jQuery-File-Upload/wiki">jQuery-File-Upload</a> plugin used in Magento. Component is used to integrate file upload functionality with UI components.

<h2 id="elements">Component elements</h2>

* Constructor: `<Magento_Ui_module_dir>/view/base/web/js/form/element/file-uploader.js`
* JQuery file upload plugin: `jquery/fileUploader/jquery.fileupload-fp`
* Default template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/uploader.html`
* Preview template: `<Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/preview.html`

<h2 id="structure">Component options</h2>

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
    <td>previewTmpl</td>
    <td>Path to the files' preview template</td>
    <td>No</td>
    <td>String</td>
    <td><Magento_Ui_module_dir>/view/base/web/templates/form/element/uploader/preview.html
</td>
</tr>
<tr>
    <td>maxFileSize</td>
    <td>Defines maximum size of a file (in bytes</td>
    <td>No</td>
    <td>Number</td>
    <td>Infinite</td>
</tr>
<tr>
    <td>isMultipleFiles</td>
    <td>Flag which indicates whether multiple files can be uploaded or not</td>
    <td>No</td>
    <td>Boolean</td>
    <td>false</td>
</tr>
<tr>
    <td>allowedExtensions</td>
    <td>List of allowed file extensions</td>
    <td>No</td>
    <td>String/Array</td>
    <td>*</td>
</tr>
<tr>
    <td>dropZone</td>
    <td>CSS selector of a drop zone element relative to a file input element</td>
    <td>No</td>
    <td>String</td>
    <td>[data-role=drop-zone]</td>
</tr>
<tr>
    <td>uploaderConfig</td>
    <td>Configuration which will be passed to jquery-file-upload plugin</td>
    <td>Yes</td>
    <td>Object</td>
    <td></td>
</tr>
<tr>
    <td>uploaderConfig.url</td>
    <td>Route to server controller which will handle file uploading process</td>
    <td>Yes</td>
    <td>String</td>
    <td>null</td>
</tr>
</tbody>
</table>

<h2 id="example">Integration</h2>

Here is an example of how File Uploader component integrates with <a href="{{page.baseurl}}ui-components/ui-form.html">Form</a> component:

{% highlight xml %}
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    ...
    <fieldset name="foo" xsi:type="array">
        ...
        <field name="bar" xsi:type="array">
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
