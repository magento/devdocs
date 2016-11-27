---
layout: default
group: release-notes
subgroup: 05_BC
title: Magento 2.0 Backward Incompatible Changes
menu_title: Backward incompatible changes
menu_node: parent
version: 2.0
github_link: release-notes/changes_2.0.md
---

## Preface
{:.no_toc}

This topic discusses the most important backward incompatible changes made after Magento 2.0.0 release in scope of 2.0 version.

Be aware that no @api code has been modified.

To see all backward incompatible changes follow:

 - [Magento CE backward incompatible changes][]
 - [Magento EE backward incompatible changes][]

For more information about backward compatibility, see [Magento’s backward compatibility policy][].

### Contents
{:.no_toc}


## Framework changes

* A `convertConfigTimeToUtc()` method is added to the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface` interface. To implement this interface, please implement the method.
* A `convertConfigTimeToUtc` method is added to the  `lib/internal/Magento/Framework/Stdlib/DateTime/Timezone`.

## Magento_CatalogRule module changes

### DB schema changes

* From the `catalogrule` table the following rows were deleted: `sub_is_enable`, `sub_simple_action`, `sub_discount_amount`.
* From the `catalogrule_product` table the following rows were deleted: `sub_simple_action`, `sub_discount_amount`.

### UI changes

* The **Subproduct discounts** dropdown on a catalog price rule was deleted, including **Apply** and **Discount Amount** subfields.

|---
| Setup version 2.0.0  | Setup version 2.0.1
|-|:-
| ![OLD - Adding a new catalog price rule]({{site.baseurl}}common/images/backw_chang_cat_pr_rul_200.png 'OLD - Adding a new catalog price rule') | ![NEW - Adding a new catalog price rule]({{site.baseurl}}common/images/backw_chang_cat_pr_rul_201.png 'NEW - Adding a new catalog price rule')

### Flow changes

* The functionality of adding a price rule to the subproduct was deleted.

## Magento_Catalog module changes

### Code changes

* General changes
  * **Reset** button has been removed.
* POST data structure changed
  * The parent category ID `parent_id` is now posted in the `general` field.
  * The category data from the `general` array is split to the specific arrays by a field set name.

<table>
  <tr>
    <th><code>setup_version</code> version 2.0.3</th>
    <th><code>setup_version</code> version 2.0.4</th>
  </tr>
  <tr>
    <td>
    {%highlight php startinline=1%}
    [
        'general' => [
            'name' => 'Category',
            'is_enabled' => 1,
            'layout_update' => '<XML CODE>',
            'enabled' => 1
        ],
        ...
    ]
    {%endhighlight%}
    </td>
    <td>
    {%highlight php startinline=1%}
    [
        'general' => [
            'name' => 'Category',
            'is_enabled' => 1,
            'parent_id' => 3
        ],
        'custom_layout' => [
            'layout_update' => '<XML CODE>',
            'enabled' => 1
        ],
        ...
    ]
    {%endhighlight%}
    </td>
  </tr>
</table>

You can find a `setup_version` parameter in the `<your_Magento_module_dir>/etc/module.xml` file.

* The Google Optimizer POST data moved to a specific array.
* `On/Off` fields
  * The input type has been changed from `select` to `switcher`.
  * A web page sends POST message with attribute `value = "true"` if the field is checked or `value = "false"` if it is not.
  * A server converts `value` attribute to the PHP `true/false` boolean type value.

<table>
  <tr>
    <th><code>setup_version</code> version 2.0.3</th>
    <th><code>setup_version</code> version 2.0.4</th>
  </tr>
  <tr>
    <td>
    Select option value (int, string)
    </td>
    <td>
    String:{'true'|'false'}
    </td>
  </tr>
</table>

* Check boxes and radio buttons work as `on/off` fields.
* Category products grid
  * Rendered by a UI component as a standalone block
  * Initialized using the `magento-init` event
* To join EAV attributes use `linkField`.

{% highlight php startinline=1 %}
Magento\Framework\Model\Entity\MetadataPool::getMetadata(Magento\Catalog\Api\Data\CategoryInterface) -> getLinkField()
{% endhighlight %}

* To set a relation with another entities such as `category_product_entity` use `identifierField`.

{% highlight php startinline=1 %}
Magento\Framework\Model\Entity\MetadataPool::getMetadata(Magento\Catalog\Api\Data\CategoryInterface) -> getIdentifierField()
{% endhighlight %}

### Form initialization changes

* A form is built with UI components ([more info about a form component][]).
* The form is extended using a form configuration file [`<magento2>/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml`][] (see [Overview of UI components][]).
* A data provider `\Magento\Catalog\Model\Category\DataProvider` is used to set data and fields metadata for the form.
* Default form data is now a part of metadata that is fetched from the `\Magento\Catalog\Model\Category\DataProvider`.

### Flow changes

When **Products -> Categories** menu item in the Magento Admin is chosen, the first root category is selected for editing by default now. You can create a new category or a root category manually only. Use the corresponding button **Add Root Category** or **Add Subcategory**.

<!-- LINK DEFINITIONS -->

[Magento’s backward compatibility policy]: http://devdocs.magento.com/guides/v2.0/architecture/backward-compatibility.html

[`<magento2>/app/code/Magento/Catalog/etc/module.xml`]: https://github.com/magento/magento2/blob/bbc0e893539cad4ee415dd458dece7cd36d44cdc/app/code/Magento/Catalog/etc/module.xml
[`<magento2>/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml`]: https://github.com/magento/magento2/blob/bbc0e893539cad4ee415dd458dece7cd36d44cdc/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml

[Magento CE backward incompatible changes]: {{page.baseurl}}release-notes/changes/ce_changes.html
[Magento EE backward incompatible changes]: {{page.baseurl}}release-notes/changes/ee_changes.html
[Overview of UI components]: {{page.baseurl}}ui-components/ui-definition.html
[more info about a form component]: {{page.baseurl}}ui-components/ui-form.html

<!-- ABBREVIATIONS -->

*[EAV]: Entity Attribute Value
