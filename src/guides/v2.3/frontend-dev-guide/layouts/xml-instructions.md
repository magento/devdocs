---
group: frontend-developer-guide
title: Layout instructions
functional_areas:
  - Frontend
---

## What's in this topic {#fedg_layout_xml-instruc_overview}

There are two possible ways to customize page layout in Magento:

-  Changing [layout](https://glossary.magento.com/layout) files.
-  Altering templates.

To change the page wireframe, modify the [page layout] files; all other customizations are performed in the [page configuration] or [generic layout] files.

## Manage layouts

To make layout changes available on every page, modify the `default.xml` file.
For example, layout changes added to `app/code/Vendor/Module/view/frontend/layout/default.xml` are loaded on all pages.
To add layout changes to a specific page, use a layout file that corresponds to the page's path.
For example, changes to the `app/code/Vendor/Module/view/frontend/layout/catalog_product_view.xml` page are loaded on the product details page.

Use these [layout instructions](https://glossary.magento.com/layout-instructions) to:

-  Move a page element to another parent element.
-  Add content.
-  Remove a page element.
-  Arrange the element position.

The basic set of instructions is the same for all types of layout files. This topic describes these basic instructions. For details about how they are used in a particular layout file type, please refer to the [Layout file types] topic.

## Common layout instructions {#fedg_layout_xml-instruc_ex}

Use the following layout instructions to customize your layout:

-  [`<block>`](#fedg_layout_xml-instruc_ex_block)
-  [`<container>`](#fedg_layout_xml-instruc_ex_cont)
-  [`before` and `after` attributes](#fedg_xml-instrux_before-after)
-  [`<action>`](#fedg_layout_xml-instruc_ex_act)
-  [`<referenceBlock>` and `<referenceContainer>`](#fedg_layout_xml-instruc_ex_ref)
-  [`<move>`](#fedg_layout_xml-instruc_ex_mv)
-  [`<remove>`](#fedg_layout_xml-instruc_ex_rmv)
-  [`<update>`](#fedg_layout_xml-instruc_ex_upd)
-  [`<argument>`](#argument)
-  [`<block> vs <container>`](#block_vs_container)

### block {#fedg_layout_xml-instruc_ex_block}

Defines a block.

**Details:** A block is a unit of page output that renders some distinctive content (anything visually tangible for the end-user), such as a piece of information or a user interface element.

Blocks are a foundational building unit for layouts in Magento. They are the link between a PHP block class (which contains logic) and a template (which renders content). Blocks can have children and grandchildren (and so on). Information can be passed from layout XML files to blocks using the `<arguments/>` child node.

Blocks employ templates to generate HTML. Examples of blocks include a [category](https://glossary.magento.com/category) list, a mini cart, product tags, and product listing.

{:.bs-callout-info}
We recommend always adding a `name` to blocks. Otherwise, it is given a random name.

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `class` | Name of a class that implements rendering of a particular block. An object of this class is responsible for actual rendering of block output. | A fully-qualified class name, such as `Vendor\Module\Block\Class`. Defaults to `Magento\Framework\View\Element\Template`. | no |
| `display` | Prevents a block from displaying (the associated PHP classes are still loaded). | `true` or `false` | no |
| `name` | Name that can be used to address the block to which this attribute is assigned. The name must be unique per generated page. If not specified, an automatic name will be assigned in the format <code>ANONYMOUS_<em>n</em></code> | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive. | no |
| `before` | Used to position the block before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See [before and after attributes](#fedg_xml-instrux_before-after) for details. | Element name or dash (-) | no |
| `after` | Used to position the block after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See [before and after attributes](#fedg_xml-instrux_before-after) for details. | Element name or dash (-) | no |
| `template` | A template that represents the functionality of the block to which this attribute is assigned. If the attribute is omitted, the block will not render any output unless the block class (or a parent class) has the `$_template` property defined correctly. | `Vendor_Module::path/to/template.phtml` (Scope is already in the `templates` directory of the module) | no |
| `as` | An alias name that serves as identifier in the scope of the parent element. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| `cacheable` | Defines whether a block element is cacheable. This can be used for development purposes and to make needed elements of the page dynamic. | `true` or `false`. Defaults to `true`. | no |
| `ifconfig` | Makes the block's visibility dependent on a system configuration field. | XPath to the system configuration field. E.g. `contact/contact/enabled` | no |

To pass parameters use the [`<argument></argument>`](#argument) instruction.

Sample of usage in the product listing page layout:

```xml
<block class="Magento\Catalog\Block\Product\ListProduct" name="category.products.list" as="product_list" template="Magento_Catalog::product/list.phtml"/>
```

### container {#fedg_layout_xml-instruc_ex_cont}

A structure without content that holds other layout elements such as blocks and containers.

**Details:**
A container renders child elements during view output generation. It can be empty or it can contain an arbitrary set of `<container>` and `<block>` elements. If the `<container>` is empty, and there is no child `<block>` available, it will not be displayed in the frontend source code.

{:.bs-callout-info}
We recommend always adding a `name` to containers. Otherwise, it is given a random name.

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `name` | A name that can be used to address the container in which this attribute is assigned. The name must be unique per generated page. If not specified, it will be auto-generated. | A-Z, a-z, 0-9, underscore (_), period (.), dash (-). Should start with a letter. Case-sensitive. | No |
| `label` | Describes the purpose of the container. | Any | No |
| `before` | Used to position the container before an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block before all other elements of its level of nesting. See [before and after attributes](#fedg_xml-instrux_before-after) for details. | Element name or dash (`-`) | No |
| `after` | Used to position the container after an element under the same parent. The element name or alias name is specified in the value. Use dash (-) to position the block after all other elements of its level of nesting. See [before and after attributes](#fedg_xml-instrux_before-after) for details. | Element name or dash (-). | No |
| `as` | An alias name that serves as identifier in the scope of the parent element. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | No |
| `output` | Defines whether to output the root element. If specified, the element will be added to output list. (If not specified, the parent element is responsible for rendering its children.) | Any value except the obsolete `toHtml`. Recommended value is `1`. | No |
| `htmlTag` | Output parameter. If specified, the output is wrapped into specified HTML tag. | Any of the following: `aside`, `dd`, `div`, `dl`, `fieldset`, `main`, `nav`, `header`, `footer`, `ol`, `p`, `section`, `table`, `tfoot`, `ul` | No, Yes - if `htmlClass` or `htmlId` is specified |
| `htmlId` | Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect. | Any valid HTML 5 `id` value. | No |
| `htmlClass` | Output parameter. If specified, the value is added to the wrapper element. If there is no wrapper element, this attribute has no effect. | Any valid HTML 5 `class` value. | No |

Sample of usage in layout:

```xml
<container name="div.sidebar.additional" htmlTag="div" htmlClass="sidebar sidebar-additional" after="div.sidebar.main">
    <container name="sidebar.additional" as="sidebar_additional" label="Sidebar Additional"/>
</container>
```

This would add a new column to the page layout.

#### Controlling children visibility

The `output` attribute controls the visibility of the container's children elements.
Set this value to `1` to render children content or `0` to disable the output of the entire container.

Use this feature to make temporary changes to a store, such as disabling a section of the page for a sales event and re-enabling it after the event ends.

### block vs. container {#block_vs_container}

-  Blocks represents the end of the chain in rendering HTML for Magento.
-  Containers contain blocks and can wrap them in an HTML tag.
-  Containers do not render any output if there are no children assigned to them.

### before and after attributes {#fedg_xml-instrux_before-after}

To help you to position elements in a specific order suitable for design, SEO, usability, or other requirements, Magento software provides the `before` and `after` layout attributes.
These optional attributes can be used in layout XML files to control the order of elements in their common parent.

The following tables give a detailed description of the results you can get using the `before` and `after` attributes. The first table uses a block a as positioned element.

| Attribute | Value | Description |
|:------- |:------ |:------ |
| `before` | Dash (-) | The block displays before all other elements in its parent node. |
| `before` | [element name] | The block displays before the named element. |
| `before` | Empty value or [element name] is absent | Use the value of `after`. If that value is empty or absent as well, the element is considered as non-positioned. |
| `after` | Dash (-) | The block displays after all other elements in its parent node. |
| `after` | [element name] | The block displays after the named element. |
| `after` | Empty value or [element name] is absent | Use the value of `before`. If that value is empty or absent as well, the block is considered as non-positioned. |

#### Examples {#examples}

| Situation | Result |
|:------- |:------ |
| Both `before` and `after` attributes are present | `after` takes precedence. |
| Both `before` and `after` attributes are absent or empty | The element is considered as non-positioned. All other elements are positioned at their specified locations. The non-positioned element displays at a random position that doesn't violate requirements for the positioned elements. |
| Several elements have `before` or `after` set to dash (-) | All elements display at the top (or bottom, in case of the after attribute), but the ordering of group of these elements is undefined. |
| The `before` or `after` attribute's value refers to an element that is not located in the parent node of the element being defined. | The element displays at a random location that doesn't violate requirements for the correctly positioned elements. |

### action {#fedg_layout_xml-instruc_ex_act}

{:.bs-callout-warning}
The `<action>` instruction is deprecated. If the method implementation allows, use the [`<argument>`](#argument) for [`<block>`](#fedg_layout_xml-instruc_ex_block) or [`<referenceBlock>`](#fedg_layout_xml-instruc_ex_ref) to access the block public API.

Calls public methods on the block API.

**Details:** Used to set up the execution of a certain method of the block during block generation; the `<action>` node must be located in the scope of the `<block>` node.

```xml
<block class="Magento\Module\Block\Class" name="block">
    <action method="setText">
        <argument name="text" translate="true" xsi:type="string">Text</argument>
    </action>
    <action method="setEnabled">
        <argument name="enabled" xsi:type="boolean">true</argument>
    </action>
</block>
```

`<action>` child nodes are translated into block method arguments. Child nodes names are arbitrary. If there are two or more nodes with the same name under `<action>`, they are passed as one array.

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `method` | The public method that is called during block generation. | The method name in the block | yes |

To pass parameters, use the [`<argument></argument>`](#argument) instruction.

### referenceBlock and referenceContainer {#fedg_layout_xml-instruc_ex_ref}

Updates in `<referenceBlock>` and `<referenceContainer>` are applied to the corresponding `<block>` or `<container>`.

For example, if you make a reference by `<referenceBlock name="right">`, you are targeting the block `<block name="right">`.

To pass parameters to a block use the [`<argument></argument>`](#argument) instruction.

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `remove` | Allows to remove or cancel the removal of the element. When a container is removed, its child elements are removed as well. | `true` or `false` | no |
| `display` | Allows you to disable rendering of specific block or container with all its children (both set directly and by reference). The PHP objects of the block or container and its children are still generated and available for manipulation. | `true` or `false` | no |

-  The `remove` attribute is optional and its default value is `false`.

    This implementation allows you to remove a block or container in your layout by setting the remove attribute value to `true`, or to cancel the removal of a block or container by setting the value to `false`.

    ```xml
    <referenceBlock name="block.name" remove="true" />
    ```

-  The `display` attribute is optional and its default value is true.

    You are always able to overwrite this value in your layout.
    In situation when remove value is true, the display attribute is ignored.

    ```xml
    <referenceContainer name="container.name" display="false" />
    ```

### move {#fedg_layout_xml-instruc_ex_mv}

Sets the declared block or container element as a child of another element in the specified order.

```xml
<move element="name.of.an.element" destination="name.of.destination.element" as="new_alias" after="name.of.element.after" before="name.of.element.before"/>
```

-  `<move>` is skipped if the element to be moved is not defined.
-  If the `as` attribute is not defined, the current value of the element alias is used. If that is not possible, the value of the `name` attribute is used instead.
-  During layout generation, the `<move>` instruction is processed before the removal (set using the `remove` attribute). This means if any elements are moved to the element scheduled for removal, they will be removed as well.

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `element` | Name of the element to move. | Element name | yes |
| `destination` | Name of the target parent element. | Element name | yes |
| `as` | Alias name for the element in the new location. | 0-9, A-Z, a-z, underscore (_), period (.), dash (-). Case-sensitive. | no |
| `after` or `before` | Specifies the element's position relative to siblings. Use dash (-) to position the block before or after all other siblings of its level of nesting. If the attribute is omitted, the element is placed after all siblings. | Element name | no |

### remove {#fedg_layout_xml-instruc_ex_rmv}

`<remove>` is used only to remove the static resources linked in a page `<head>` section.
For removing blocks or containers, use the `remove` attribute for [`<referenceBlock>` and `<referenceContainer>`](#fedg_layout_xml-instruc_ex_ref).

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
   <head>
      <!-- Remove local resources -->
      <remove src="css/styles-m.css" />
      <remove src="my-js.js"/>
      <remove src="Magento_Catalog::js/compare.js" />

      <!-- Remove external resources -->
      <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"/>
      <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"/>
      <remove src="http://fonts.googleapis.com/css?family=Montserrat" />
   </head>
</page>
```

### update {#fedg_layout_xml-instruc_ex_upd}

Includes a certain layout file.

```xml
<update handle="{name_of_handle_to_include}"/>
```

The specified [handle] is "included" and executed recursively.

### argument {#argument}

 {:.bs-callout-info}
Magento 2.3.2 added the `shared` attribute. Now, instances of the view models are shared by default. If a view model is required to be a new instance each time, you must add the attribute `shared="false"` on the argument node in the layout xml file.

Used to pass an argument. Must be always enclosed in [`<arguments>`](#arguments).

| Attribute | Description | Values | Required? |
|:------- |:------ |:------ |:------ |
| `name` | Argument name. | unique | yes |
| `shared` | If false, creates a new instance of the block. | `false` | no |
| `translate` | | `true` or `false` | no |
| `xsi:type` | Argument type. | `string`, `boolean`, `object`, `number`, `null`, `array`, `options`, `url`, `helper` | yes |

To pass multiple arguments use the following construction:

```xml
<arguments>
   <argument name="item1" xsi:type="string">Custom string</argument>
   <argument name="item2" xsi:type="boolean">true</argument>
   ...
</arguments>
```

Arguments values set in a layout file can be accessed in [templates] using the `getData('{ArgumentName}')` and `hasData('{ArgumentName}')` methods. The latter returns a boolean defining whether there's any value set.
`{ArgumentName}` is obtained from the `name` attribute the following way: for getting the value of `<argument name="some_string">` the method name is `getData('some_string')`.

**Example:**

Setting a value of `css_class` in the `[app/code/Magento/Theme/view/frontend/layout/default.xml]` layout file:

```xml
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
```

Using the value of `css_class` in `[app/code/Magento/Theme/view/frontend/templates/html/title.phtml]`:

```php
$cssClass = $this->hasCssClass() ? ' ' . $this->getCssClass() : '';
```

#### Argument types examples

As was described above the argument attribute can be added with different types.
There are examples of all argument types.

-  The *string* type:

```xml
<argument name="some_string" xsi:type="string">Some String</argument>
```

-  The *boolean* type:

```xml
<argument name="is_active" xsi:type="boolean">true</argument>
```

-  The *object* type:

```xml
<argument name="viewModel" xsi:type="object">Vendor\CustomModule\ViewModel\Class</argument>
```

The `Vendor\CustomModule\ViewModel\Class` class should implement the `\Magento\Framework\View\Element\Block\ArgumentInterface` interface.

-  The *number* type:

```xml
<argument name="some_number" xsi:type="number">100</argument>
```

-  The *null* type:

```xml
<argument name="null_value" xsi:type="null" />
```

-  The *array* type:

```xml
<argument name="custom_array" xsi:type="array">
   <item name="array_key_one" xsi:type="string">First Item</item>
   <item name="array_key_two" xsi:type="string">Second Item</item>
   ...
</argument>
```

-  The *options* type:

```xml
<argument name="options" xsi:type="options">Vendor\CustomModule\Source\Options\Class</argument>
```

The `Vendor\CustomModule\Source\Options\Class` class should implement the `\Magento\Framework\Data\OptionSourceInterface` interface.

-  The *url* type:

```xml
<argument name="shopping_cart_url" xsi:type="url" path="checkout/cart/index" >
    <param name="param1">param1value</param>
    <param name="param2">param2value</param>
    ...
</argument>
```

The *url* may have parameters, but they are optional.

-  The *helper* type:

```xml
<argument name="helper_method_result" xsi:type="helper" helper="Vendor\CustomModule\Helper\Class::someMethod">
  <param name="firstParam">firstValue</param>
  <param name="secondParam">secondValue</param>
    ...
</argument>
```

The *helper* can use only public methods. In this example the `someMethod()` method should be public.
The argument with *helper* type can contain `param` items which can be passed as a helper method parameters.

#### Obtain arguments examples in template

These argument examples can be taken in the template by *getData* method. Another way to take these arguments is using the magic method *get* followed by the name of argument in CamelCase format. Here is an example to retrieve the arguments from above example:

```php
<?php
/** @var \Magento\Framework\View\Element\Template $block */

/** @var string $someString */
$someString = $block->getData('some_string'); //or $block->getSomeString()

/** @var bool $isActive */
$isActive = $block->getData('is_active'); //or $block->getIsActive()

/** @var Vendor\CustomModule\ViewModel\Class|\Magento\Framework\View\Element\Block\ArgumentInterface $viewModel */
$viewModel = $block->getData('viewModel'); //or $block->getViewModel()

/** @var string|int|float $someNumber */
$someNumber = $block->getData('some_number'); //or $block->getSomeNumber()

/** @var null $nullValue */
$nullValue = $block->getData('null_value'); //or $block->getNullValue()

/** @var array $customArray */
$customArray = $block->getData('custom_array'); //or $block->getCustomArray()

/** @var array $options */
$options = $block->getData('options'); //or $block->getoptions()

/** @var string $shoppingCartUrl */
$shoppingCartUrl = $block->getData('shopping_cart_url'); //or $block->getShoppingCartUrl()

/** @var mixed $helperMethodResult */
$helperMethodResult = $block->getData('helper_method_result'); // or $block->getHelperMethodResult()
```

### arguments {#arguments}

`<arguments>` is a required container for `<argument>`. It does not have its own attributes.

```xml
<arguments>
    <argument name="css_class" xsi:type="string">header links</argument>
</arguments>
```

[page layout]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-page
[page configuration]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf
[generic layout]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-gen
[handle]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-over-terms
[templates]: {{page.baseurl}}/frontend-dev-guide/templates/template-overview.html
[app/code/Magento/Theme/view/frontend/layout/default.xml]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/layout/default.xml
[app/code/Magento/Theme/view/frontend/templates/html/title.phtml]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Theme/view/frontend/templates/html/title.phtml
[Layout file types]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html
