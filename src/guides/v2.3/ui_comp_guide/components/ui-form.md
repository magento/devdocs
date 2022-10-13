---
group: ui-components-guide
title: Form component
redirect_from:
   - /guides/v2.3/ui-components/ui-form.html
---

The Form component is a collection of fields that can be grouped in tabs and fieldsets. It enables [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations.

Form is a [basic component]({{ page.baseurl }}/ui_comp_guide/bk-ui_comps.html#general-structure).

## Related components

The following components can be used in the scope of the Form component:

*  [ActionDelete]({{ page.baseurl }}/ui_comp_guide/components/ui-actiondelete.html)
*  [Checkbox]({{ page.baseurl }}/ui_comp_guide/components/ui-checkbox.html)
*  [Checkboxset]({{ page.baseurl }}/ui_comp_guide/components/ui-checkboxset.html)
*  DataSource
*  [Email]({{ page.baseurl }}/ui_comp_guide/components/ui-email.html)
*  [FieldSet]({{ page.baseurl }}/ui_comp_guide/components/ui-fieldset.html)
*  [File]({{ page.baseurl }}/ui_comp_guide/components/ui-file.html)
*  [FileUploader]({{ page.baseurl }}/ui_comp_guide/components/ui-fileuploader.html)
*  [Hidden]({{ page.baseurl }}/ui_comp_guide/components/ui-hidden.html)
*  [HtmlContent]({{ page.baseurl }}/ui_comp_guide/components/ui-htmlcontent.html)
*  [Input]({{ page.baseurl }}/ui_comp_guide/components/ui-input.html)
*  [Multiline]({{ page.baseurl }}/ui_comp_guide/components/ui-multiline.html)
*  [Multiselect]({{ page.baseurl }}/ui_comp_guide/components/ui-multiselect.html)
*  [Radioset]({{ page.baseurl }}/ui_comp_guide/components/ui-radioset.html)
*  [Select]({{ page.baseurl }}/ui_comp_guide/components/ui-select.html)
*  [Text]({{ page.baseurl }}/ui_comp_guide/components/ui-text.html)
*  [Textarea]({{ page.baseurl }}/ui_comp_guide/components/ui-textarea.html)
*  [Wysiwyg](https://glossary.magento.com/wysiwyg)

## Configuration options

<table>
  <tbody>
    <tr>
      <th>
        Option
      </th>
      <th>
        Description
      </th>
      <th>
        Type
      </th>
      <th>
        Default
      </th>
    </tr>
    <tr>
      <td>
        <code>ajaxSave</code>
      </td>
      <td>
        Save Form values by AJAX.
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
        <code>ajaxSaveType</code>
      </td>
      <td>There are two possible approaches to collect form data for ajaxSave:
<ul>
<li><code>default</code> - collects data using native FormData JavaScript class</li>
<li><code>simple</code> - collects data to simple key value pairs object</li>
</ul>
</td>
      <td>
        <code>default</code>|<code>simple</code>
      </td>
      <td>
        <code>default</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>buttons</code>
      </td>
      <td>
        A list of buttons that should be added to form.
      </td>
      <td>
        Object
      </td>
      <td>
        <code>{}</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>component</code>
      </td>
      <td>
        The path to the component’s JS constructor in terms of RequireJS.
      </td>
      <td>
        String
      </td>
      <td>
        <code>Magento_Ui/js/form/form</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>exports</code>
        <ul>
          <li><code>selectorPrefix</code>
          </li>
          <li><code>messagesClass</code>
          </li>
        </ul>
      </td>
      <td>
        Used to notify some external entity about property
        changing. <code>exports</code> value is an object, composed of the
        following:
        <ul>
          <li><code>key</code>: name of the internal property or method which
          is tracked for changes.
          </li>
          <li><code>value</code>: name of the property or method which
          receives the notification. Can use string templates.
          </li>
        </ul>
For more details see the <a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html">Linking properties of UI components</a> topic.
      </td>
      <td>
        Object
        <ul>
          <li>String
          </li>
          <li>String
          </li>
        </ul>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td>
        <code>listens</code>
        <ul>
          <li><code>selectorPrefix</code>
          </li>
        </ul>
      </td>
      <td>
        Used for events listening.
      </td>
      <td>String</td>
      <td>
        <code>'destroyAdapter initAdapter'</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>errorClass</code>
      </td>
      <td>The CSS class added to the component's DOM block if an error appears.</td>
      <td>
        String
      </td>
      <td>
        <code>'.admin__field._error'</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>imports</code>
        <ul>
          <li><code>reloadUrl</code>
          </li>
        </ul>
      </td>
      <td>
        Used for tracking changes of an external entity property.
        <code>imports</code>’s value is an object, composed of the following:
        <ul>
          <li><code>key</code>: name of the internal property or method which
          receives the notifications.
          </li>
          <li><code>value</code>: name of the property or method which is
          tracked for changes. Can use string templates.
          </li>
        </ul>
For more details see the <a href="{{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html">Linking properties of UI components</a> topic.
      </td>
      <td>
        Object
        <ul>
          <li>String
          </li>
        </ul>
      </td>
      <td>
        <code>'${ $.provider}:reloadUrl'</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>messagesClass</code>
      </td>
      <td>The CSS class assigned to the <code>&lt;div&gt;</code> element, where the form elements validation error is rendered.</td>
      <td>
        String
      </td>
      <td>
        <code>'messages'</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>namespace</code>
      </td>
      <td>Form identifier that is passed to backend when performing actions, e.g. validate or submit.</td>
      <td>
        String
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        <code>selectorPrefix</code>
      </td>
      <td>
        The name that can be used to address the block to which this
        attribute is assigned. The name must be unique per
        generated page. If not specified, the name is
        assigned automatically in the following format: <code>ANONYMOUS_<em>n</em></code>
      </td>
      <td>
        String
      </td>
      <td>
        <code>'.page-content'</code>
      </td>
    </tr>
    <tr>
      <td>
        <code>template</code>
      </td>
      <td>
        The path to the component’s <code>.html</code> template.
      </td>
      <td>
        String
      </td>
      <td>
        <code>'ui/form/field'</code>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Create an instance

To create an instance of the Form component, you need to do the following:

1. In your custom module, add a configuration file for the instance, for example: `customer_form.xml`.
1. Add a set of fields (the Fieldset component with the component of the Field) for [entity](https://glossary.magento.com/entity) or     to implement the upload of meta info in the DataProvider.
1. Create the DataProvider class for the entity that implements DataProviderInterface

   *  Add a component in Magento [layout](https://glossary.magento.com/layout) as a node: `<uiComponent name="customer_form"/>`

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceContainer name="content">
            ...
            <uiComponent name="customer_form"/>
        </referenceContainer>
    </body>
</page>
```

### Configure the component

Component could be configured in two ways:

*  globally: using any module's `view/ui_component/etc/definition.xml` file. All settings declared in     this file will be applied to all component's instances
*  locally: using concrete component instance configuration, such as `<your module root dir>view/base/ui_component/customer_form`

Create configuration file: `<your module root dir>view/base/ui_component/customer_form.xml`

```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">customer_form.customer_form_data_source</item>
        </item>
        <item name="label" xsi:type="string" translate="true">Customer Information</item>
        <item name="reverseMetadataMerge" xsi:type="boolean">true</item>
    </argument>
    <settings>
        <buttons>
            <button name="save_and_continue" class="Magento\Customer\Block\Adminhtml\Edit\SaveAndContinueButton"/>
            <button name="save" class="Magento\Customer\Block\Adminhtml\Edit\SaveButton"/>
            <button name="reset" class="Magento\Customer\Block\Adminhtml\Edit\ResetButton"/>
            <button name="order" class="Magento\Customer\Block\Adminhtml\Edit\OrderButton"/>
            <button name="resetPassword" class="Magento\Customer\Block\Adminhtml\Edit\ResetPasswordButton"/>
            <button name="unlock" class="Magento\Customer\Block\Adminhtml\Edit\UnlockButton"/>
            <button name="invalidateToken" class="Magento\Customer\Block\Adminhtml\Edit\InvalidateTokenButton"/>
            <button name="delete" class="Magento\Customer\Block\Adminhtml\Edit\DeleteButton"/>
            <button name="back" class="Magento\Customer\Block\Adminhtml\Edit\BackButton"/>
        </buttons>
        <layout>
            <navContainerName>left</navContainerName>
            <type>tabs</type>
        </layout>
        <deps>
            <dep>customer_form.customer_form_data_source</dep>
        </deps>
        ...
    </settings>
</form>
```

Nodes are optional and contain parameters required for component:

*  settings -> deps - sets the dependency on component initialization

*  js_config -> provider - specifies the name of the component data

*  settings -> layout - configuration class meets the visualization component. Names for deps and provider are specified with a complete path from the root component with the separator "."

Add a description of the fields in the form using components and Field Fieldset:

```xml
...
<fieldset name="customer">
    <settings>
        <label translate="true">Account Information</label>
    </settings>
    <field name="entity_id" formElement="input">
        <argument name="data" xsi:type="array">
            <item name="config" xsi:type="array">
                <item name="source" xsi:type="string">customer</item>
            </item>
        </argument>
        <settings>
            <dataType>text</dataType>
            <visible>false</visible>
        </settings>
    </field>
    ...
</fieldset>
```

To group components you can use the component container as in example below:

```xml
<container name="container_group" component="Magento_Ui/js/form/components/group" sortOrder="20">
    <argument name="data" xsi:type="array">
        <item name="type" xsi:type="string">group</item>
        <item name="config" xsi:type="array">
            <item name="label" xsi:type="string" translate="true">Group</item>
            <item name="required" xsi:type="boolean">true</item>
            <item name="dataScope" xsi:type="boolean">false</item>
            <item name="validateWholeGroup" xsi:type="boolean">true</item>
        </item>
    </argument>
    <field name="group_id">
    ...
    </field>
    <field name="disable_auto_group_change">
    ...
    </field>
</container>
```

### Configure DataSource

You must configure a component's DataSource in order to provide data and meta information for your Form component.

DataSource aggregates an object of class implements the interface `\Magento\Framework\View\Element\UiComponent\DataProvider\DataProviderInterface`

An example of the configuration of the DataSource object:

```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        ...
    </argument>
    <dataSource name="customer_form_data_source">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
        <settings>
            <validateUrl path="customer/index/validate"/>
            <submitUrl path="customer/index/save"/>
        </settings>
        <dataProvider class="Magento\Customer\Model\Customer\DataProvider" name="customer_form_data_source">
            <settings>
                <requestFieldName>id</requestFieldName>
                <primaryFieldName>entity_id</primaryFieldName>
            </settings>
        </dataProvider>
    </dataSource>
</form>
```

Component configuration:

*  argument `"dataProvider"` - contains configuration, class name, and arguments

*  `"js_config"` -> `"component"` -> JavaScript indication of a responsible component

Data provided by data source is shared and available for all components in the Assembly (in this case for all child components of UI Form).

Data Source is another [UI Component](https://glossary.magento.com/ui-component) that provides data in specific format which is shared among all UI Components.

### Replace instances of component

 {:.bs-callout-info}
Replacing principles are the same for all UI Components.

#### Global replacement

To replace all instances, globally, of a UI Form with a custom implementation redefine link to a constructor in `definition.xml`.

`app/code/Magento/Ui/view/base/ui_component/etc/definition.xml`

```xml
<form class="Magento\Ui\Component\Form">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Ui/js/form/customFormConstructor</item>
        </item>
    </argument>
</form>
```

#### Single replacement

To replace one instance of a UI Form Component redefine link to a constructor in your module's form configuration file:

`app/code/Magento/Customer/view/base/ui_component/customer_form.xml`

```xml
<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Ui/etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="component" xsi:type="string">Magento_Customer/js/form/customFormConstructor</item>
        </item>
    </argument>
</form>
```

## Source files

Extends [`uiCollection`]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_uicollection_concept.html):

*  [app/code/Magento/Ui/view/base/web/js/form/form.js]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/form.js)
