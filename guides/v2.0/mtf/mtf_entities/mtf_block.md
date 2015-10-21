---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Block
menu_order: 4
github_link: mtf/mtf_entities/mtf_block.md
---

<h3>Contents</h3>

* TOC
{:toc}

## Block overview {#mtf_block_overview}

Block is the area of user interface aimed to perform concrete functionality, for example, Search Box, Header, Footer.

The block object pattern is used in the Magento Testing Framework to avoid unnecessary duplication of code and makes tests easier to support.

A block can have the following features:

- Block can contain other blocks.
- Block can be used in several pages and blocks.

This topic shows how to create new block and explore its structure. It discusses how to use mapping for forms in blocks and forms in tabs.

## Create block {#mtf_block_types} 

A basic flow is the following:

* get name and path of the block you want to test
* create block class with logic you need for the tests
* add block to the page
* run page generator

### How to determine a block name and a path {#mtf_block_path}

The block name and path in the Magento functional tests (`magento2/dev/tests/functional/tests/app`) should reflect a corresponding block in the Magento code base (`magento2/app/code`) for your convenience.
For example, you develop a functional test for the bundle product creation, that uses the Bundle Items section. In the Magento code base, the block, which is responsible for the bundle option, is the `Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Bundle\Option.php`, so in the Magento functional tests you can create a new file `Magento\Bundle\Block\Test\Adminhtml\Catalog\Product\Edit\Tab\Bundle\Option.php`.

Magento can show you a full class name of the block and path to the PHTML template right on the UI of the Magento page (influences web design) or implicitly in the HTML code of the page.

#### Get the name and the path of blocks in UI {#mtf_block_path_ui}

To enable this feature follow:

1. Login to Magento Admin as administrator
1. Follow **STORES > Configuration**
1. Change **Store View** to **Main Website** (the Template Path and Block name will only appear for current website)
1. Follow **ADVANCED > Developer**
1. Expand **Debug** tab
1. Set **Template Path Hints** to **Yes**
1. Set **Add Block Name to Hints** to **Yes**
1. **Save Config**

Voilà!

<a href="{{ site.baseurl }}common/images/mtf_block_name_path_in_ui.png"><img src="{{ site.baseurl }}common/images/mtf_block_name_path_in_ui.png" /></a>

<div class="bs-callout bs-callout-tip">
  <p>If name and path cover partially each other, then navigate on the name or the path (whatever you need) with mouse pointer to see the full phrase.</p>
</div>

#### Get the name and the path of blocks in the code {#mtf_block_path_code}

If you want to change representation of block details, you can change a <a href="{{site.mage2000url}}lib/internal/Magento/Framework/View/Element/Template.php"><code>Template.php</code></a>:

* Open `magento2/lib/internal/Magento/Framework/View/Element/Template.php`

* Find the method

{% highlight php5 %}
<?php
protected function _toHtml()
{
    if (!$this->getTemplate()) {
        return '';
    }
    return $this->fetchView($this->getTemplateFile());
}
?>
{% endhighlight php %}

* Change the code to the following

{% highlight php %}
<?php
protected function _toHtml()
{
    if (!$this->getTemplate()) {
        return '';
    }
    $name = $this->getNameInLayout();
    $template = $this->getTemplateFile();
    $class = get_class($this);
    return "<!-- BEGIN $name using $template \n" . $class . "-->"
        . $this->fetchView($template)
        . "<!-- END $name using $template -->";
}
?>
{% endhighlight php %}

* Save the file

Ta-da!

<a href="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png"><img src="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png" /></a>

### Block class {#mtf_block_class}

The block class contains all logic you want to apply to the Magento block under test.

#### Block identifier {#mtf_block_identifier}

Each block has identifier that includes selector and search strategy. This identifier is determined by [Mtf\Client\Element\Locator](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Locator.php) class and is stored in the `_rootElement` property of the [Magento\Mtf\Block\Block](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Block.php) class.

You can use `_rootElement` to find an element in current block.

Example from the <a href="https://github.com/magento/magento2/blob/c08a78b50230e6840099530cd57bfaf13902f27d/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/Instance/Edit/Tab/WidgetInstance.php"><code>WidgetInstance.php</code></a> block:

{%highlight php%}
<?php
protected function addLayoutUpdates()
{
   $this->_rootElement->find($this->addLayoutUpdates)->click();
}
?>
{%endhighlight%}

This code uses `_rootElement` to search the button element by the `$this->addLayoutUpdates` selector. The advantage of the `_rootElement` is that it enables to search in context of the block to which the element is belong.

#### Use blocks inside blocks {#mtf_block_in_block}

You can get other blocks in the block using the <a href="https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/BlockFactory.php"><code>BlockFactory</code></a> class and a selector.

See the following example:

{%highlight php%}
<?php
protected function getTemplateBlock()
{
    return $this->blockFactory->create(
        'Magento\Backend\Test\Block\Template',
        ['element' => $this->_rootElement->find($this->templateBlock, Locator::SELECTOR_XPATH)]
    );
}
?>
{%endhighlight%}

In this code we are creating the `Magento\Backend\Test\Block\Template` block with the selector `$this->templateBlock`.

#### Basic blocks {#mtf_block_basic}

Magento contains basic blocks for the functional testing with a logic that you can reuse. The most popular are the following:

* [Magento\Mtf\Block\Block](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Block.php)
* [Magento\Mtf\Block\Form](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Form.php)
* [Magento\Backend\Test\Block\Widget\Tab]({{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Tab.php)
* [Magento\Backend\Test\Block\Widget\FormTabs]({{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/FormTabs.php)
* [Magento\Backend\Test\Block\Widget\Grid]({{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Grid.php)

* [Magento\Ui\Test\Block\Adminhtml\DataGrid]({{site.mage2000url}}dev/tests/functional/tests/app/Magento/Ui/Test/Block/Adminhtml/DataGrid.php)

For example, <a href="https://github.com/magento/magento2/blob/9d4c58e77126ae448eda81aa5e3206a16568fc5c/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/WidgetGrid.php"><code>WidgetGrid.php</code></a>. This block simply reuses methods of <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Grid.php"><code>Magento\Backend\Test\Block\Widget\Grid</code></a> class.

### Add block to the page {#mtf_block_to-page}

Blocks are tested as part of the [page][] object. To add the block to the page you must add a corresponding node to the XML file of the page object.

For example, the <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/WidgetGrid.php">WidgetGrid.php</a> is a part of the page that is defined in <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Widget/Test/Page/Adminhtml/WidgetInstanceIndex.xml"><code>WidgetInstanceIndex.xml</code></a>.

`block` is the node that adds the block to the page:

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="WidgetInstanceIndex" area="Adminhtml" mca="admin/widget_instance/index" module="Magento_Widget">
        ...
        <block name="widgetGrid" class="Magento\Widget\Test\Block\Adminhtml\Widget\WidgetGrid" locator="#widgetInstanceGrid" strategy="css selector" />
        ...
    </page>
</config>
{%endhighlight%}

{% include mtf/block_attributes.md %}

#### Run the page generator {#mtf_run_page_gen}

{% include mtf/page-generator.html %}

## Form mapping {#mtf_block_mapping}

Often you need to test the Magento block that contains a form. And of course, tests require entering the data in the forms. The MTF has [Magento\Mtf\Block\Form][] class that enables you to fill the forms automatically. One of the advantages of using this class is that you can list elements that must be automatically filled. This elements can be grouped in separate XML files. In the MTF we call this process "a mapping". You can use mapping to transfer data to the block from the <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html">fixture</a>.

A mapping file is an XML file which has the same name and path as the block does, and contains fields that represent form fields. Field name in the mapping file shall match the one in the fixture.

Let's see the [Customer Login]({{site.mage2000url}}app/code/Magento/Customer/Block/Form/Login.php) block. The block has two input fields: `email` and `password`.

<a href="{{site.baseurl}}common/images/mtf_block_login_ui.png"><img src="{{site.baseurl}}common/images/mtf_block_login_ui.png" /></a>

The mapping file for the block is stored in `magento2/dev/tests/functional/tests/app/Magento/Customer/Test/Block/Form/Login.xml`, along with the block.

<img src="{{site.baseurl}}common/images/mtf_block_login_dir.png" />

The mapping file defines the fields from the form.

{%highlight xml%}
<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<mapping strict="1">
    <wrapper>login</wrapper>
    <fields>
        <email>
            <selector>[name='login[username]']</selector>
        </email>
        <password />
    </fields>
</mapping>
{%endhighlight%}

See a description of the nodes in the following table.
{:#mtf_block_form_xml_nodes}

|Node|Description|Value from example|
|---|---|---|
|`mapping`|Root node with a `strict` attribute. If `strict` equals 0, then all the FIXTURE field data MUST be entered in the block form. If `strict` equals 1, then ONLY the MAPPING file fields data MUST be entered in the block form.| `"1"`. ONLY the MAPPING file fields data MUST be entered in the block form. |
|`wrapper`|Automatically adds `group_name` to the selector of the field, when `selector` has not been specified.|`login`|
|`fields`| The node containing mapping fields. |`<email>`, `<password />`. |
|`selector`|Value for the selector that is used to find the field. Default: `[name='group_name[field_node_name]']`. Default value is assigned automatically if the node is absent in the field.| For the `<email>`, the `[name='login[username]']`. For the `<password />`, the `[name='login[password]']` that is the default value where `wrapper="login"`.|
|`strategy`|The strategy of the selection. Available values: `css selector`, `xpath`. Default: `css selector`. |`css selector` as a default value. |
|`input`|Type of the input element. Available values: `select`, `checkbox`, `typified element`, `simple`. `simple` is for simple input element. Default: `simple`. Do not use `class` node, if you use `input` in the field. | `simple` as a default value. |
|`class`|Class of the element. Applicable if non of the `input` options fits. Do not use `input`, if you use `class` in the field.| This node has not been used in the example.|

All nodes are optional. Default value is assigned automatically if a node (`selector`, `strategy`, `input`) is absent in the `field`.

The general structure of the form mapping file:

<img src="{{site.baseurl}}common/images/mtf_block_map_form_xml.png" />

### Form tab mapping {#mtf_block_map_form_tab}

You can use mapping for the forms on tabs (a form tab) that enables you to automatize switching between tabs and entering the data.
To get the block class with form tab mapping, extend your class from <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/FormTabs.php" ><code>Magento\Backend\Test\Block\Widget\FormTabs</code> </a>. If you want to use custom tab logic you can extend your class from <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Tab.php"><code>Magento\Backend\Test\Block\Widget\Tab</code></a> class.

For example, let's see tabs for the Magento Widget: **Settings**, **Storefront properties**, **Frontend App Options**, **Layout Updates** .

<img src="{{site.baseurl}}common/images/mtf_block_tabs_ui.png" />

Four tabs are mapped in the `magento2/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/Instance/Edit/WidgetForm.xml` file, which is stored along with the block class. 

<img src="{{site.baseurl}}common/images/mtf_block_tab_struc.png" />

The file contains the following mapping:

{%highlight xml%}
<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<tabs>
    <settings>
        <class>\Magento\Widget\Test\Block\Adminhtml\Widget\Instance\Edit\Tab\Settings</class>
        <selector>#widget_instace_tabs_settings_section</selector>
        <strategy>css selector</strategy>
        <fields>
            <code>
                <input>select</input>
            </code>
            <theme_id>
                <input>select</input>
            </theme_id>
        </fields>
    </settings>
    <frontend_properties>
        <class>\Magento\Backend\Test\Block\Widget\Tab</class>
        <selector>#widget_instace_tabs_main_section</selector>
        <strategy>css selector</strategy>
        <fields>
            <title />
            <store_ids>
                <input>multiselectgrouplist</input>
                <selector>[id="store_ids"]</selector>
            </store_ids>
        </fields>
    </frontend_properties>
    <widget_options>
        <class>\Magento\Widget\Test\Block\Adminhtml\Widget\Instance\Edit\Tab\Parameters</class>
        <selector>#widget_instace_tabs_properties_section</selector>
        <strategy>css selector</strategy>
    </widget_options>
    <widget_instance>
        <class>\Magento\Widget\Test\Block\Adminhtml\Widget\Instance\Edit\Tab\WidgetInstance</class>
        <selector>#widget_instace_tabs_main_section</selector>
        <strategy>css selector</strategy>
    </widget_instance>
</tabs>
{% endhighlight %}

See the following table to understand the nodes purpose.

|`tabs` nodes |Description|
|-----|------|
|`wrapper`|Automatically adds `group_name` to the selector of the field, when `selector` has not been specified.|
|`class`|Reference to the class that handles tab's behavior.|
|`selector`| Identifier for the selector of the tab in the HTML code, used to open the tab.|
|`strategy`|Strategy of the selector. Can be `css selector` or `xpath`.|
|`fields`|List of fields with parameters, that are the same as in the [form mapping](#mtf_block_form_xml_nodes). Also field in tab can include more then one field, in this case add `field` attribute `composite="1"`.|

Example of `composite` field from [ProductForm.xml]({{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/Block/Adminhtml/Product/ProductForm.xml):

In the mapping file: 

{%highlight xml%}
<quantity_and_stock_status composite="1">
    <qty>
        <selector>[name="product[quantity_and_stock_status][qty]"]</selector>
    </qty>
    <is_in_stock>
        <selector>[name="product[quantity_and_stock_status][is_in_stock]"]</selector>
        <input>select</input>
    </is_in_stock>
</quantity_and_stock_status>
{%endhighlight%}

On the UI:

![Example of `composite` field]({{site.baseurl}}common/images/mtf_block_tab_composite_ui.png)

The general structure of the form tab mapping file:

<img src="{{site.baseurl}}common/images/mtf_block_map_form_tab_xml.png" />

### Merge of form tab mapping files {#mtf_block_map_form_tab_merge}

When you test a module that extends functionality of the other module by adding a tab to the testing module entity, you can use merge of form tab mapping files.

The form tab mapping files that have the same name and path inside different modules are merged automatically.

Form tab mapping files in the following example will be merged automatically:

<img src="{{site.baseurl}}common/images/mtf_block_formtab_merge.png" />

## Renders {#mtf_block_render}

Renders help to unify a polymorphic behavior of the block. If you want to test a functionality of the object, which behavior differs depending on the type of the object, you can create a separate class for each type and call the corresponding class using render.

### How to use renders {#mtf_block_render_handl}

**Use case**: We want to test the "Add to cart" functionality. To add different types of products we need to configure each type in a different way. For the configuration we need options of the type, which we want to configure. We can use render to get product options. Render will specify which class to use for specific type of product.

Let's see the `CatalogProductView.xml `page. For the better readability we reduced a list of blocks to one block.

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogProductView" area="Product" mca="catalog/product/view" module="Magento_Catalog">
        <block name="viewBlock" class="Magento\Catalog\Test\Block\Product\View" locator="#maincontent" strategy="css selector" module="Magento_Catalog"/>        
    </page>
</config>
{%endhighlight%}

This page relates to the Magento_Catalog module and contains `ViewBlock`. This block has reference to the `Magento\Catalog\Test\Block\Product\View.php` class, that is responsible to enter data in Product form fields. But different types of products such as bundle have own `ViewBlock` in a corresponding module. And that is where you can use render!

#### Create a render {#mtf_block_render_create}
Let's create render for the bundle product.

**Step 1**. Create `Bundle/Test/Page/Product/CatalogProductView.xml` page to merge with the basic page `Catalog/Test/Page/Product/CatalogProductView.xml`. [Learn more about page merging]({{site.gdeurl}}mtf/mtf_entities/mtf_page.html#mtf_page_merge).

**Step 2**. In the `Bundle/Test/Page/Product/CatalogProductView.xml`, copy `page` node from the `Catalog/Test/Page/Product/CatalogProductView.xml` without `module` attribute

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogProductView" area="Product" mca="catalog/product/view">
                
    </page>
</config>
{%endhighlight%}

**Step 3**. Insert `block` with the same name of block and add a render that indicates the type of product and the class that processes this block

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 -->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="CatalogProductView" area="Product" mca="catalog/product/view">
        <block name="viewBlock">
            <render name="bundle" class="Magento\Bundle\Test\Block\Catalog\Product\View" />
        </block>
    </page>
</config>
{%endhighlight%}

Details:

* The PHP class for the page will be generated in the Magento_Catalog module, because we did not mention module attribute in the `page` node
* In the viewBlock `block`, we indicate `name` attribute only

**Step 4**. Run the page generator

{%include mtf/page-generator.html%}

#### Use a render {#mtf_block_render_use}

In the following example we have used the render to call the `getOptions()` method from `Magento\Bundle\Test\Block\Catalog\Product\View.php`.

Let's take a look at the basic class `Magento\Catalog\Test\Block\Product\View.php`.

{%highlight php5%}
<?php
public function getOptions(FixtureInterface $product)
{
    /** @var CatalogProductSimple $product */
    $dataConfig = $product->getDataConfig();
    $typeId = isset($dataConfig['type_id']) ? $dataConfig['type_id'] : null;
    
    return $this->hasRender($typeId)
        ? $this->callRender($typeId, 'getOptions', ['product' => $product])
        : $this->getCustomOptionsBlock()->getOptions($product);
}
?>
{%endhighlight%}

 It contains the `getOptions()` method that:
 
 * Gets from the `Bundle/Test/Fixture/BundleProduct.php` fixture the `type_id` field value - `$dataConfig['type_id']`. In our case, `type_id='bundle'`.
 
 * Calls the `hasRender()` method to check if there is a render with the name `bundle`
 
 * Calls the render if there is a render with the name `bundle`
 
 {%highlight php5 startinline=1%}
 $this->callRender($typeId, 'getOptions', ['product' => $product])
 {%endhighlight%}
 
 * Calls a default method if the render is absent
 
 {%highlight php5 startinline=1%}
 $this->getCustomOptionsBlock()->getOptions($product);
 {%endhighlight%}
 
 
 
[page]: {{site.gdeurl}}mtf/mtf_entities/mtf_page.html
[CatalogProductView.xml]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Bundle/Test/Page/Product/CatalogProductView.xml
[Magento\Mtf\Block\Form]: https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Form.php
[Magento\Catalog\Test\Block\Product\View]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Catalog/Test/Block/Product/View.php
