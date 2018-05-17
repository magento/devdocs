---
group: release-notes
title: Magento 2.0 Backward Incompatible Changes
github_link: release-notes/backward-incompatible-changes/index.md
version: 2.0
redirect_from: guides/v2.0/release-notes/backward-incompatible-changes.html
---

This topic discusses the most important backward incompatible changes made after Magento 2.0.0 release in scope of 2.0 version.

Be aware that no @api code has been modified.

To see all backward incompatible changes follow:

 - [{{site.data.var.ce}} backward incompatible changes][]
 - [{{site.data.var.ee}} backward incompatible changes][]

For more information about backward compatibility, see [Magento’s backward compatibility policy][].

## Framework changes

* A `convertConfigTimeToUtc()` method is added to the `lib/internal/Magento/Framework/Stdlib/DateTime/TimezoneInterface` interface. To implement this interface, please implement the method.
* A `convertConfigTimeToUtc` method is added to the  `lib/internal/Magento/Framework/Stdlib/DateTime/Timezone`.

## Magento_CatalogRule module changes

### DB schema changes

* From the `catalogrule` table the following rows were deleted: `sub_is_enable`, `sub_simple_action`, `sub_discount_amount`.
* From the `catalogrule_product` table the following rows were deleted: `sub_simple_action`, `sub_discount_amount`.

### UI changes

* The **Subproduct discounts** dropdown on a {% glossarytooltip 8d40d668-4996-4856-9f81-b1386cf4b14f %}catalog{% endglossarytooltip %} price rule was deleted, including **Apply** and **Discount Amount** subfields.

|---
| Setup version 2.0.0  | Setup version 2.0.1
|-|:-
| ![OLD - Adding a new catalog price rule]({{ site.baseurl }}/common/images/backw_chang_cat_pr_rul_200.png 'OLD - Adding a new catalog price rule') | ![NEW - Adding a new catalog price rule]({{ site.baseurl }}/common/images/backw_chang_cat_pr_rul_201.png 'NEW - Adding a new catalog price rule')

### Flow changes

* The functionality of adding a price rule to the subproduct was deleted.

## Magento_Catalog module changes

### Code changes

* General changes
  * **Reset** button has been removed.
* POST data structure changed
  * The parent {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} ID `parent_id` is now posted in the `general` field.
  * The category data from the `general` array is split to the specific arrays by a field set name.

<table>
  <tr>
    <th><code>setup_version</code> version 2.0.3</th>
    <th><code>setup_version</code> version 2.0.4</th>
  </tr>
  <tr>
    <td>
    {% highlight php %}
    [
        'general' => [
            'name' => 'Category',
            'is_enabled' => 1,
            'layout_update' => '<XML CODE>',
            'enabled' => 1
        ],
        ...
    ]
    {% endhighlight %}
    </td>
    <td>
    {% highlight php %}
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
    {% endhighlight %}
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
  * Rendered by a {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %} as a standalone block
  * Initialized using the `magento-init` {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %}
* To join EAV attributes use `linkField`.

``` php?start_inline=1
Magento\Framework\Model\Entity\MetadataPool::getMetadata(Magento\Catalog\Api\Data\CategoryInterface) -> getLinkField()
```

* To set a relation with another entities such as `category_product_entity` use `identifierField`.

``` php?start_inline=1
Magento\Framework\Model\Entity\MetadataPool::getMetadata(Magento\Catalog\Api\Data\CategoryInterface) -> getIdentifierField()
```

### Form initialization changes

* A form is built with UI components ([more info about a form component][]).
* The form is extended using a form configuration file [`<magento2>/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml`][] (see [Overview of UI components][]).
* A data provider `\Magento\Catalog\Model\Category\DataProvider` is used to set data and fields {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} for the form.
* Default form data is now a part of metadata that is fetched from the `\Magento\Catalog\Model\Category\DataProvider`.

### Flow changes

When **Products -> Categories** menu item in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} is chosen, the first root category is selected for editing by default now. You can create a new category or a root category manually only. Use the corresponding button **Add Root Category** or **Add Subcategory**.

<!-- LINK DEFINITIONS -->

[Magento’s backward compatibility policy]: http://devdocs.magento.com/guides/v2.0/contributor-guide/backward-compatible-development/index.html

[`<magento2>/app/code/Magento/Catalog/etc/module.xml`]: https://github.com/magento/magento2/blob/bbc0e893539cad4ee415dd458dece7cd36d44cdc/app/code/Magento/Catalog/etc/module.xml
[`<magento2>/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml`]: https://github.com/magento/magento2/blob/bbc0e893539cad4ee415dd458dece7cd36d44cdc/app/code/Magento/Catalog/view/adminhtml/ui_component/category_form.xml

[{{site.data.var.ce}} backward incompatible changes]: {{ page.baseurl }}/release-notes/backward-incompatible-changes/open-source.html
[{{site.data.var.ee}} backward incompatible changes]: {{ page.baseurl }}/release-notes/backward-incompatible-changes/commerce.html
[Overview of UI components]: {{ page.baseurl }}/ui-components/ui-definition.html
[more info about a form component]: {{ page.baseurl }}/ui-components/ui-form.html

<!-- ABBREVIATIONS -->

*[EAV]: {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}Entity{% endglossarytooltip %} Attribute Value
