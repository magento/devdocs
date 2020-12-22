---
group: ui-components-guide
title: InsertForm component
---

The InsertForm component inserts the [Form component]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) into other components.

## Configuration options

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| `autoRender` | When set to true, the Form component is automatically rendered during InsertForm initialization. Otherwise, insertListing's `render` method should be called to render the Form. | Boolean | `false` |
| `class` | Path to the PHP class responsible for the backend implementation of the component. | String | `Magento\Ui\Component\Container` |
| `component` | The path to the component’s JS constructor file in terms of RequireJS. | String | `Magento_Ui/js/form/components/insert-form` |
| `dataLinks`.`exports` | Enable export from the insertForm's externalValue to the inserted Form aggregated value. | Boolean | `false` |
| `dataLinks`.`imports` | Enable import from the inserted Form value to the insertForm's externalValue. | Boolean | `false` |
| `externalProvider` | DataSource of the inserted Form. | String | `''` |
| `formSubmitType` | Expect that Form will save data using AJAX. Links responseData and responseStatus with form. Export to form submit type. | Boolean | `false` |
| `ns` | Namespace of the inserted form. | String | `''` |
| `realTimeLink` | Enables a link between the externalValue and value of insertForms. Here 'link' means the two-way [links property]({{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_linking_concept.html#links-property) of UI components, which allows immediate update. | Boolean | `false` |
| `render_url` | With default `render_url(mui/index/render)` form will be without form buttons. To get Form with buttons, url must be changed to `mui/index/render_handle` and next GET parameters: <br/> `buttons=1` (flag to get buttons) <br/> `handle=%layout namespace%/` (buttons scope) | String | `mui/index/render` |
| `showSpinner` | Show spinner while the Form is rendered. | Boolean | `true` |
| `toolbarContainer` | Path to component that has toolbarSection property with reference to HTML element. Component will insert Form buttons to this section. | String | `''` |

## Source files

Extends [`Insert`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/components/insert.js):

-  [`app/code/Magento/Ui/view/base/web/js/form/components/insert-form.js`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/view/base/web/js/form/components/insert-form.js)
-  [`app/code/Magento/Ui/Component/Container.php`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Ui/Component/Container.php)

## Examples

### Integrate InsertForm component with Form component

Here is an example of how the InsertForm component integrates with the [Form]({{ page.baseurl }}/ui_comp_guide/components/ui-form.html) component:

```xml
<form>
    ...
    <fieldset>
        <settings>
            <level>1</level>
            <collapsible>true</collapsible>
            <label translate="true">Fieldset with form</label>
        </settings>
        <insertForm name="insert_form_example_loader">
            <settings>
                <formSubmitType>ajax</formSubmitType>
                <renderUrl path="mui/index/render">
                    <param name="handle">insert_form_example</param>
                    <param name="buttons">1</param>
                </renderUrl>
                <loading>true</loading>
                <autoRender>true</autoRender>
                <toolbarContainer>${ $.parentName }</toolbarContainer>
                <ns>insert_form_example</ns>
            </settings>
        </insertForm>
    </fieldset>
</form>
```

The form example insert_form_example.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<form xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">
    <argument name="data" xsi:type="array">
        <item name="js_config" xsi:type="array">
            <item name="provider" xsi:type="string">insert_form_example.insert_form_example_data_source</item>
        </item>
        <item name="label" xsi:type="string" translate="true">Insert </item>
        <item name="template" xsi:type="string">templates/form/collapsible</item>
    </argument>
    <settings>
        <namespace>insert_form_example</namespace>
        <dataScope>data</dataScope>
        <deps>
            <dep>insert_form_example.insert_form_example_data_source</dep>
        </deps>
    </settings>
    <dataSource name="insert_form_example_data_source">
        <argument name="data" xsi:type="array">
            <item name="js_config" xsi:type="array">
                <item name="component" xsi:type="string">Magento_Ui/js/form/provider</item>
            </item>
        </argument>
        <dataProvider class="Vendor\Module\Ui\Config\CustomDataProvider" name="insert_form_example_data_source">
            <settings>
                <requestFieldName>scope</requestFieldName>
                <primaryFieldName>scope</primaryFieldName>
            </settings>
        </dataProvider>
    </dataSource>
    <fieldset name="fields" sortOrder="30">
        <settings>
            <label translate="true">Insert Form Example Fieldset</label>
        </settings>
        <field name="name" formElement="input">
            <settings>
                <dataType>text</dataType>
                <label translate="true">Name</label>
            </settings>
        </field>
    </fieldset>
</form>
```

Data provider:

```php
<?php

declare(strict_types=1);

namespace Vendor\Module\Ui\Config;

use Magento\Ui\DataProvider\AbstractDataProvider;
use Vendor\Module\Model\ResourceModel\Entity\Collection;
use Vendor\Module\Model\ResourceModel\Entity\CollectionFactory;

/**
 * Class CustomDataProvider
 */
class CustomDataProvider extends AbstractDataProvider
{
    /**
     * CustomDataProvider constructor.
     *
     * @param $name
     * @param $primaryFieldName
     * @param $requestFieldName
     * @param CollectionFactory $collectionFactory
     * @param array $meta
     * @param array $data
     */
    public function __construct(
        $name,
        $primaryFieldName,
        $requestFieldName,
        CollectionFactory $collectionFactory,
        array $meta = [],
        array $data = []
    ) {
        $this->collection = $collectionFactory->create();

        parent::__construct(
            $name,
            $primaryFieldName,
            $requestFieldName,
            $meta,
            $data
        );
    }

    /**
     * Get data
     *
     * @return array
     */
    public function getData()
    {
        return [
            // return the form data here
        ];
    }
}
```

#### Result

![InsertForm Component example]({{ site.baseurl }}/common/images/ui_comps/ui-insertform-result.png)

### Integrate InsertForm component with Modal component

Here is an example of how the InsertForm component integrates with the [Modal]({{ page.baseurl }}/ui_comp_guide/components/ui-modal.html) component:

```xml
<form>
    ...
    <fieldset>
        ...
        <button name="insert_form_example_modal_button" component="Magento_Ui/js/form/components/button">
            <argument name="data" xsi:type="array">
                <item name="config" xsi:type="array">
                    <item name="buttonClasses" xsi:type="string">open-insert-form-example-modal-button</item>
                    <item name="actions" xsi:type="array">
                        <item name="0" xsi:type="array">
                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_form_example_modal.insert_form_example_loader</item>
                            <item name="actionName" xsi:type="string">destroyInserted</item>
                        </item>
                        <item name="1" xsi:type="array">
                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_form_example_modal</item>
                            <item name="actionName" xsi:type="string">openModal</item>
                        </item>
                        <item name="2" xsi:type="array">
                            <item name="targetName" xsi:type="string">${ $.parentName}.insert_form_example_modal.insert_form_example_loader</item>
                            <item name="actionName" xsi:type="string">render</item>
                        </item>
                    </item>
                </item>
            </argument>
            <settings>
                <title translate="true">Open Insert Form Example</title>
            </settings>
        </button>
        <modal name="insert_form_example_modal">
            <settings>
                <options>
                    <option name="title" xsi:type="string">Insert Form Example Modal</option>
                </options>
            </settings>
            <insertForm name="insert_form_example_loader">
                <settings>
                    <formSubmitType>ajax</formSubmitType>
                    <renderUrl path="mui/index/render">
                        <param name="handle">insert_form_example</param>
                        <param name="buttons">1</param>
                    </renderUrl>
                    <loading>false</loading>
                    <toolbarContainer>${ $.parentName }</toolbarContainer>
                    <ns>insert_form_example</ns>
                </settings>
            </insertForm>
        </modal>
    </fieldset>
</form>
```

#### Result

As a result, we see the button which opens the modal pop-up with the form:

![Button that opens the modal pop-up with InsertForm Component]({{ site.baseurl }}/common/images/ui_comps/ui-insertform-open-button-result.png)
![InsertForm Component in the Modal Component example]({{ site.baseurl }}/common/images/ui_comps/ui-insertform-modal-result.png)
