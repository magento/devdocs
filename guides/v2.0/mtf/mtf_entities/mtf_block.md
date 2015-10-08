---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Block
menu_order: 4
github_link: mtf/mtf_entities/mtf_block.md
---

<h2>Contents</h2>

* <a href="#mtf_block_overview">Block overview</a>

* <a id="#mtf_block_types">Create block for the test</a>

  * <a href="#mtf_block_path">How to determine a block name and a path</a>

    * <a href="#mtf_block_path_ui">Get name and path of blocks in the GUI</a>

    * <a href="#mtf_block_path_code">Get name and path of blocks in the code</a>

  * <a href="#mtf_block_ceate">Create a block class</a>

  * <a href="#mtf_block_to-page">Add block to the page</a>

  * <a href="#mtf_block_gen">Run the page generator</a>

* <a href="#mtf_block_struct">Block structure</a>

* <a href="#mtf_block_mapping">Mapping</a>

  * <a href="#mtf_block_mapping">Forms</a>

  * <a href="#mtf_block_mapping">Form Tabs</a>


<h2 id="mtf_block_overview">Block overview</h2>

Block is the area of user interface aimed to perform concrete functionality, for example, Search Box, Header, Footer.

The block object pattern is used in the MTF to avoid unnecessary duplication of code and makes tests easier to support.

A block can have the following features:

- Block can contain other blocks.
- Block can be used in several pages and blocks.

This topic shows how to create new block and explore its structure. It discusses how to use mapping for forms in blocks and forms in tabs.

<h2 id="mtf_block_types">Create block for the test</h2>

A basic flow is the following:

* see name and path of the block you want to test
* create block class with logic you need for the tests
* add block to the page
* run page generator

<h3 id="mtf_block_path">How to determine a block name and a path</h3>

Magento can show you a full class name of the block and path to the PHTML template right on the UI  of the Magento page (influences web design) or implicitly in the HTML code of the page.

<h4 id="mtf_block_path_ui">See name and path of blocks in GUI</h4>

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

<h4 id="mtf_block_path_code">Get the name and the path of blocks in the code</h4>

If you want to see block details in the code, you can change a <a href="https://github.com/magento/magento2/blob/master/lib/internal/Magento/Framework/View/Element/Template.php"><code>Template.php</code></a>:

* Open `magento2/lib/internal/Magento/Framework/View/Element/Template.php`

* Find the method

{% highlight php %}
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

<a href="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png"><img src="{{ site.baseurl }}common/images/mtf_block_name_path_in_code.png" /></a>

Ta-da!

<h3 id="mtf_block_class">Block class</h3>

The block class contains all logic you want to apply to the Magento block under test.

<h4 id="mtf_block_name_path">Name and path</h4>

The testing block name and path in the MTF (`magento2/dev/tests/functional/tests/app`) should reflect a <a href="#mtf_block_path">corresponding block in the Magento code base</a> (`magento2/app/code`) for your convenience.
For example, you develop a functional test for the bundle product creation, that uses the Bundle Items section. In the Magento code base, the block, which is responsible for the bundle option, is the `Magento\Bundle\Block\Adminhtml\Catalog\Product\Edit\Tab\Bundle\Option.php`, so in the MTF you can create a new file `Magento\Bundle\Block\Test\Adminhtml\Catalog\Product\Edit\Tab\Bundle\Option.php`.

<h4>Block locator</h4>

To find an element in the block use the block context `_rootElement`, that is a locator of the block used in the block initialization process.

The object [Mtf\Client\Element\Locator](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Client/Locator.php) enables you to use different types of search strategies.

Example from the <a href="https://github.com/magento/magento2/blob/345a280fce98844d31f8dd1133cf0bfbb1762ef2/dev/tests/functional/tests/app/Magento/Widget/Test/Block/WidgetView.php"><code>WidgetView.php</code></a> block:

{%highlight php%}
<?php
public function clickToWidget(Widget $widget, $widgetText)
{
    $widgetType = $this->getWidgetType($widget);
    if ($this->hasRender($widgetType)) {
        $this->callRender($widgetType, 'clickToWidget', ['widget' => $widget, 'widgetText' => $widgetText]);
    } else {
        if (isset($this->widgetSelectors[$widgetType])) {
            $this->_rootElement->find(
                sprintf($this->widgetSelectors[$widgetType], $widgetText),
                Locator::SELECTOR_XPATH
            )->click();
        } else {
            throw new \Exception('Determine how to find the widget on the page.');
        }
    }
}
?>
{%endhighlight%}

<h4>Use blocks inside blocks</h4>

You can get other blocks in the block.

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

<h4>Basic blocks</h4>

As a class, a block can be extended from the other block. The basic blocks in the MTF are:

* [Magento\Mtf\Block\Block](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Block.php)
* [Magento\Mtf\Block\Form](https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Form.php)
* [Magento\Backend\Test\Block\Widget\Tab](https://github.com/magento/magento2/blob/master/dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Tab.php)
* [Magento\Backend\Test\Block\Widget\FormTabs](https://github.com/magento/magento2/blob/master/dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/FormTabs.php)
* [Magento\Backend\Test\Block\Widget\Grid](https://github.com/magento/magento2/blob/master/dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Grid.php)

<h4>Examples</h4>

Let's consider <a href="https://github.com/magento/magento2/blob/9d4c58e77126ae448eda81aa5e3206a16568fc5c/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/WidgetGrid.php"><code>WidgetGrid.php</code></a>. This block simply reuses methods of <a href="https://github.com/magento/magento2/blob/master/dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Grid.php"><code>Magento\Backend\Test\Block\Widget\Grid</code></a> class.

For more complex example, see the <a href="https://github.com/magento/magento2/blob/9d4c58e77126ae448eda81aa5e3206a16568fc5c/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/ChosenOption.php"><code>ChosenOption.php</code></a> block. The block reuses the methods of the other classes and contains own public method `setValue()`.

<h3 id="mtf_block_to-page">Add block to the page</h3>

The block can be tested only inside the page object. To add the block to the page you must add a corresponding node to the XML file of the page object.

For example, the <a href="https://github.com/magento/magento2/blob/master/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/WidgetGrid.php">WidgetGrid.php</a> is a part of the page that is defined in <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Widget/Test/Page/Adminhtml/WidgetInstanceIndex.xml"><code>WidgetInstanceIndex.xml</code></a>.

`block` is the node that adds the block to the page:

{%highlight xml%}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/etc/pages.xsd">
    <page name="WidgetInstanceIndex" area="Adminhtml" mca="admin/widget_instance/index" module="Magento_Widget">
        ...
        <block name="widgetGrid"
        class="Magento\Widget\Test\Block\Adminhtml\Widget\WidgetGrid"
        locator="#widgetInstanceGrid"
        strategy="css selector" />
        ...
    </page>
</config>
{%endhighlight%}

See the `block` node attributes details in the following table:

|Attribute | Description | Is required|Values| Example|
|---|---|---|---|---|
|`name`| Name of the block| Required|Name of Magento block . <a href="#mtf_block_name_path"> More details about block name and path</a> |`widgetGrid`|
|`class`| Full name of the block class |Required| The name structure is similar to the Magento block class name. <a href="#mtf_block_name_path"> More details about block name and path</a>| `Magento\Widget\Test\Block\Adminhtml\Widget\WidgetGrid`|
|`locator`| CSS selector or XPath locator of the block.|Required|[CSS Selectors](http://www.w3.org/TR/selectors/), <a href="http://www.w3.org/TR/xpath-31/">XPath</a>|CSS: `#widgetInstanceGrid`, XPath: `//*[@id="widgetInstanceGrid"`]|
|`strategy` |locating strategy| Required|`css selector` or `xpath`| `css selector`|

<h3 id="mtf_run_page_gen">Run the page generator</h3>

{% include /mtf/page-generator.html %}

The page will be updated in the `magento2\tests\functional\generated` directory.

<h2 id="mtf_block_mapping">Form mapping</h2>

Some blocks requires entering a data in the fields. You can get data from <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html">fixtures</a> and <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html">data sets</a> using mapping.

In the MTF you can use mapping for the form in a block, extending from class <a href="https://github.com/magento/mtf/blob/develop/Magento/Mtf/Block/Form.php">Magento\Mtf\Block\Form</a>.

The mapping file is an XML file which has the same name and path as the block does, and contains fields that represent form fields. Field name in the mapping file shall match the one in the fixture.

Let's see the <a href="{{site.mage2000url}}app/code/Magento/Customer/Block/Form/Login.php">Customer Login block</a>. The block has two input fields: `email` and `password`.

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

<div id="mtf_block_form_xml_nodes">
See a description of the nodes in the following table.
</div>

|Node|Description|Value from example|
|---|---|---|
|`mapping`|Root node with a `strict` attribute. If `strict` equals 0, then all the FIXTURE fields MUST be specified in the block form. If `strict` equals 1, then ONLY the MAPPING file fields MUST be specified in the block form.| `"1"`. Fields mapped in the XML file must be specified in the form. |
|`wrapper`|If fields of the form are grouped and have the format `name='group_name[field_name]`, then you can use wrapper that will automatically add `group_name` to the `selector` of all daughter fields, if applicable.|`login`|
|`fields`| The node containing mapping fields. |`<email>`, `<password />`. |
|`selector`|Value for the selector that is used to find the field. Default: `name=wrapper_value[field_node_name]`.| For `<email>`, the `[name='login[username]']`. For `<password />`, the default value, where `wrapper="login"` `[name='login[password]']` implicitly.|
|`strategy`|The strategy of the selection. Available values: `css selector`, `xpath`. Default: `css selector`. |`css selector` as a default value. |
|`input`|Type of input element. Available values: `select`, `checkbox`, `typified element`, `simple`. Default: `simple`. | `simple` as a default value. |

The general structure of the form mapping file:

<img src="{{site.baseurl}}common/images/mtf_block_map_form_xml.png" />

<h3 id="mtf_block_mapping">Form tab mapping</h3>

You can use form tab mapping, when the form that you want to enter data in is split on a few tabs in UI. To get the block class with form tab mapping you should extend from the <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/FormTabs.php" ><code>Magento\Backend\Test\Block\Widget\FormTabs</code></a> or <a href="{{site.mage2000url}}dev/tests/functional/tests/app/Magento/Backend/Test/Block/Widget/Tab.php"><code>Magento\Backend\Test\Block\Widget\Tab</code></a> class.

Let's see **Settings** tab for Magento Widget.

<img src="{{site.baseurl}}common/images/mtf_ent_fixt_repo_cms_set_ui.png" />

The tab is mapped in the `magento2/dev/tests/functional/tests/app/Magento/Widget/Test/Block/Adminhtml/Widget/Instance/Edit/WidgetForm.xml` file. It is stored along with the block class. 

<img src="{{site.baseurl}}common/images/mtf_block_tab_struc.png" />

The file contains mapping for four tabs: `settings`, `frontend_properties`, `widget_options`, `widget_instance`.

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

|Tab node|Description|
|-----|------|
|`wrapper`|If all fields in the tab are the elements of one group and have format `group_name[field_name]`, then you can use wrapper, that will add `group_name` to all mapped fields of the tab form.|
|`class`|Reference to the class that handles tab's behavior.|
|`selector`| Selector or locator of the tab in the HTML code, used to open the tab.|
|`strategy`|Strategy of the selector. Can be `css selector` or `xpath`.|
|`fields`|List of fields with parameters, that are the same as in the [form mapping](#mtf_block_form_xml_nodes)|


The general structure of the form tab mapping file:

<img src="{{site.baseurl}}common/images/mtf_block_map_form_tab_xml.png" />