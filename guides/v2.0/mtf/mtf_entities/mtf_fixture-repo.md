---
layout: default
group: mtf-guide
subgroup: 50_Entities
title: Entities of the Functional Testing Framework
menu_title: Fixture Repository
menu_order: 2
version: 2.0
github_link: mtf/mtf_entities/mtf_fixture-repo.md
---

<h2>Fixture repository</h2>

* TOC
{:toc}

## Repository overview {#mtf_repository_overview}

The repository stores pre-defined data for the fixture.
It contains only data sets that are used in the test along with the associated field data.
Repositories are stored in the `Repository` directory in the module to which they belong.
Reference to the repository is placed in the fixture XML file in attribute named `repository`.

In this topic you will learn how to create, use, and merge a repository.

## Create a repository for the entire fixture {#mtf_repository_create}

Let's create a repository for the Widget fixture `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`.

<a href="{{page.baseurl}}mtf/mtf_entities/mtf_fixture.html">More details about fixtures</a>.

Assume that we have the following fixture:

{%highlight xml%}

<?xml version="1.0" encoding="utf-8"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="widget"
             module="Magento_Widget"
             type="flat"
             entity_type="widget_instance"
             collection="Magento\Widget\Model\Resource\Widget\Instance\Collection"
             identifier="parameters"
             repository_class="Magento\Widget\Test\Repository\Widget"
             handler_interface="Magento\Widget\Test\Handler\Widget\WidgetInterface"
             class="Magento\Widget\Test\Fixture\Widget">
        <field name="code" group="settings" />
        <field name="theme_id" group="settings" />
        <field name="anchor_text" />
        <field name="title" group="frontend_properties" />
        <field name="template" />
        <field name="chosen_option" source="Magento\Widget\Test\Fixture\Widget\ChosenOption" />
        <field name="display_type" />
        <field name="show_pager" />
        <field name="products_count" />
        <field name="cache_lifetime" />
        <field name="page_size" />
        <field name="store_ids" source="Magento\Widget\Test\Fixture\Widget\StoreIds" group="frontend_properties" />
        <field name="widget_instance" />
        <field name="parameters" />
        <field name="id" />
        <field name="page_id" source="Magento\Widget\Test\Fixture\Widget\PageIds" />
        <field name="layout" source="Magento\Widget\Test\Fixture\Widget\LayoutUpdates" repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates" group="layout_updates" />
        <field name="widgetOptions" source="Magento\Widget\Test\Fixture\Widget\WidgetOptions" repository="Magento\Widget\Test\Repository\Widget\WidgetOptions" group="widget_options" />
    </fixture>
</config>

{% endhighlight %}

The `repository_class="Magento\Widget\Test\Repository\Widget"` attribute tells us that this fixture uses data from the `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget.xml` repository.

In this section we will show the logic of how to create this repository.

Also `layout` and `widgetOptions` fields use `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml` and `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/WidgetOptions.xml` repositories respectively.

<a href="#mtf_repository_create-field"> Learn how to create repository for the fixture field</a>.

We want to specify data sets for two cases of submitting Widget forms: `default` with minimum data, and `cms_page_link` with data needed to create new CMS page link.

To create a new CMS page link the user must enter data of all required fields. The widget has three forms with fields to specify: <a href="#mtf_repo_ex_set">**Settings**</a>, <a href="#mtf_repo_ex_store">**Storefront Properties**</a>, <a href="#mtf_repo_ex_front">**Frontend Apps Options**</a>. The following text along with screenshots gives an example of how to create a data set of the repository.

<a href="#mtf_repo_widgetxml">See entire repository code</a>.

<h4 id="mtf_repo_ex_set">Settings form</h4>

![cms_page_link "Settings" data set for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui.png)

- Set the **Type** field (`field name="code"`) to "CMS Page Link". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<field name="code" xsi:type="string">CMS Page Link</field>`.
- Set the **Design Theme** field (`field name="theme_id"`) to "Magento Blank". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<field name="theme_id" xsi:type="string">Magento Blank</field>`.

<h4 id="mtf_repo_ex_store">Storefront Properties form</h4>

![cms_page_link "Storefront properties" data set for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui_storefront.png)

- Set the **Frontend App Title** field to "Cms Page Link [random integer value]". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<field name="title" xsi:type="string">Cms Page Link %isolation%</field>`.
- Set the **Assign to Store Views** field to "All Store Views". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a>:

{% highlight xml %}

 <field name="store_ids" xsi:type="array">
    <item name="dataset" xsi:type="string">all_store_views</item>
</field>

{% endhighlight xml %}

- Provide data for the **Layout Updates** complex field. In the repository code, complex fields are represented as arrays of items. An item can be an array of items also, depending on the hierarchy of fields. This field is defined as `<field name="widget_instance" xsi:type="array"></field>`. As it is possible to create more than one instance of a layout update, we define our instance as the first element of an array with index "0" as `<item name="0" xsi:type="array"></item>`.
  - Set the **Display on** field to "All pages:. It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="page_group" xsi:type="string">All Pages</item>`. Daughter fields are appeared, when **Display on** field is specified. All daughter fields must be wrapped in `<item name="all_pages" xsi:type="array"></item>`.
    - Set the **Container** field to "Main content area". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="block" xsi:type="string">Main Content Area</item>`.
    - Set the **Template** field to "CMS Page Link Block Template". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="template" xsi:type="string">CMS Page Link Block Template</item>`.

<h4 id="mtf_repo_ex_front">Frontend App Options</h4>  

![cms_page_link "Frontend App Options" data set for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui_frontend-app.png)

- Set the **Anchor Custom Text** field to "text".
- Set the **Anchor Custom Title** field to "anchor title".
- Choose in the **CMS Page** grid newly created CMS page.

{% highlight xml %}

<field name="widgetOptions" xsi:type="array">
    <item name="0" xsi:type="array">
       <item name="type_id" xsi:type="string">cmsPageLink</item>
    </item>
</field>

{% endhighlight xml %}

This simple code contains a bit more complex logic, where <a href="#mtf_repository_create-field">the repository is applied to the fixture field</a>. Just to remind you, how this field is represented in the fixture: `<field name="widgetOptions" source="Magento\Widget\Test\Fixture\Widget\WidgetOptions" repository="Magento\Widget\Test\Repository\Widget\WidgetOptions" group="widget_options" />`.

In brief, we reference another repository `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/WidgetOptions.xml`, and a <a href="{{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source">source</a> that is `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget/WidgetOptions.php`.

The `WidgetOptions.xml` repository includes `cmsPageLink` data set:

{% highlight xml %}

<dataset name="cmsPageLink">
    <field name="anchor_text" xsi:type="string">text</field>
    <field name="title" xsi:type="string">anchor title/field>
    <field name="entities" xsi:type="array">
        <item name="0" xsi:type="string">cmsPage::default</item>
    </field>
</dataset>

{% endhighlight xml %}

The source understands the `entities` field as an instruction to create a CMS Page using `<dataset name="default">` from the `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Cms/Test/Repository/CmsPage.xml` repository.

<h4 id="mtf_repo_widgetxml">Widget.xml</h4>

Now we can create a repository XML file `Widget.xml`. In our case the file should be placed in `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository`. The full name must be specified in the `repository_class` attribute of the fixture: `repository_class="Magento\Widget\Test\Repository\Widget"`.

See the entire repository sample so far:

{% highlight xml %}

<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/Magento/Mtf/Repository/etc/repository.xsd">
    <repository class="Magento\Widget\Test\Repository\Widget">
        <dataset name="default">
            <field name="title" xsi:type="string">Test Frontend App</field>
            <field name="store_ids" xsi:type="array">
                <item name="0" xsi:type="string">All Store Views</item>
            </field>
            <field name="widget_instance" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="page_group" xsi:type="string">all_pages</item>
                    <item name="all_pages" xsi:type="array">
                        <item name="layout_handle" xsi:type="string">default</item>
                        <item name="for" xsi:type="string">all</item>
                        <item name="block" xsi:type="string">content</item>
                        <item name="template" xsi:type="string">widget/block.phtml</item>
                    </item>
                </item>
            </field>
            <field name="theme_id" xsi:type="number">2</field>
        </dataset>

        <dataset name="cms_page_link">
            <field name="code" xsi:type="string">CMS Page Link</field>
            <field name="title" xsi:type="string">Cms Page Link %isolation%</field>
            <field name="store_ids" xsi:type="array">
                <item name="dataset" xsi:type="string">all_store_views</item>
            </field>
            <field name="widget_instance" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="page_group" xsi:type="string">All Pages</item>
                    <item name="all_pages" xsi:type="array">
                        <item name="block" xsi:type="string">Main Content Area</item>
                        <item name="template" xsi:type="string">CMS Page Link Block Template</item>
                    </item>
                </item>
            </field>
            <field name="theme_id" xsi:type="string">Magento Blank</field>
            <field name="widgetOptions" xsi:type="array">
                <item name="0" xsi:type="array">
                    <item name="type_id" xsi:type="string">cmsPageLink</item>
                </item>
            </field>
        </dataset>
    </repository>
</config>

{% endhighlight %}

### Repository structure {#mtf_repository_structure}

Let's look at the repository structure.

- `<config>` is a root node that defines the path to the `repository.xsd` schema.
- `<repository>` specifies a repository class in the required `class` attribute and stores data sets. `class` contains the full name of the repository class. The repository contains data sets.
  - In case of an entire fixture repository, the full name of the class (including the namespace) must be built as `<path to module where the fixture is placed>\Repository\<file with the name of fixture>`. Example: `Magento\Widget\Test\Repository\Widget`
  - In case of a fixture field repository, the full name of the class (including the namespace) must be built as `<path to module where the fixture is placed>\Repository\<directory with the name of fixture>\<file with the name of field>`. Example: `Magento\Widget\Test\Repository\Widget\LayoutUpdates`.
- `<dataset>` specifies the name of data set in the required `name` attribute. This name serves as a reference to the data set that will be used in the test. Each data set contains fields.
- `<field>` defines the value of the field. Field can contain either value, or items if the field is complex.
    
|`field` attribute   |Semantics   | Is required?  |
|---|---|---|
| `name`  | Field name in fixture |Required  |
| `xsi:type` |Type of field value |Required|

|`field` daughter element   |Semantics   | Is required?  |
|---|---|---|
| `<item>`  | Element of complex field. Items can be complex like fields. Complex items contain items. Item has `key=>value` structure.  |Required if `<field xsi:type="array" ...>` |

|`item` attribute |Semantics   | Is required?  |
|---|---|---|
| `name`  | Key name of the item  |Required  |
| `xsi:type` |Type of the item value |Required|

The `default` data set is used in the test when the repository hasn't been specified in the test, although you can explicitly specify `default`. If repository name in the test is `cms_page_link`, then fields will be filled with data from `<dataset name="cms_page_link">`.

## Create a repository for the fixture field {#mtf_repository_create-field}

In the preceding section, the Widget fixture code contains fields with the links for repositories. Let's consider the field `layout` with `repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates`.

The repository value is a reference to the repository XML file. Therefore, we should create `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml`. The XML structure of this repository is the same as of <a href="#mtf_repository_create">repository for the entire fixture</a>.

Assume that we want to provide data for the Layout Update block for the following cases shown on the screenshots (name of data sets have orange font, fields defined in repository are highlighted in orange).

Case 1. **all_pages** data set:

* Set the **Display on** field (`item name="page_group"`) to "All Pages", which is the subcategory of "Generic Pages" (see drop-down menu on the following screenshot). It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="page_group" xsi:type="string">Generic Pages/All Pages</item>`
* Set the **Container** field (`item name="block"`) to "Main content Area". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a>  `<item name="block" xsi:type="string">Main Content Area</item>`

![all_pages data set view on GUI]({{ site.baseurl }}common/images/mtf_repository_layout-allpages_w_dropd.png)

Case 2. **on_category** data set:

* Set the **Display on** field (`item name="page_group"`) to "Non-Anchor Categories" that is item of "Categories". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="page_group" xsi:type="string">Categories/Non-Anchor Categories</item>`.
* Set the **Categories** field (`item name="for"`) to "Specific Categories". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="for" xsi:type="string">Yes</item>`.
* Set the in a tree of categories the **Default Category** (`item name="entities"`). It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="entities" xsi:type="string">category::default_subcategory</item>`.
* Set the **Container** field (`item name="block"`) to "Main content Area". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="block" xsi:type="string">Main Content Area</item>`.

![on_category data set view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-oncategory_w_dropd.png)

Case 3. **for_cms_page_link** data set:

* Set the **Display on** field (`item name="page_group"`) to "All Pages" that is item of "Generic Pages". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="page_group" xsi:type="string">Generic Pages/All Pages</item>`.
* Set the **Container** field (`item name="block"`) to "Main content Area". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<item name="block" xsi:type="string">Main Content Area</item>`.
* Set the **Template** field (`item name="template"`) to "CMS Page Link Block Template". It corresponds to the following code in <a href="#mtf_repo_widgetxml">the repository data set</a> `<`item name="template" xsi:type="string"`>CMS Page Link Block Template</item>`.

![layout_for_cms_page_link data set view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-for-cms-page-link_w_dropd.png)

The repository code for these cases follows:

{% highlight xml %}
<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../../vendor/magento/mtf/Magento/Mtf/Repository/etc/repository.xsd">
    <repository class="Magento\Widget\Test\Repository\Widget\LayoutUpdates">
        <dataset name="all_pages">
            <field name="0" xsi:type="array">
                <item name="page_group" xsi:type="string">Generic Pages/All Pages</item>
                <item name="block" xsi:type="string">Main Content Area</item>
            </field>
        </dataset>

        <dataset name="on_category">
            <field name="0" xsi:type="array">
                <item name="page_group" xsi:type="string">Categories/Non-Anchor Categories</item>
                <item name="for" xsi:type="string">Yes</item>
                <item name="entities" xsi:type="string">category::default_subcategory</item>
                <item name="block" xsi:type="string">Main Content Area</item>
            </field>
        </dataset>

        <dataset name="for_cms_page_link">
            <field name="0" xsi:type="array">
                <item name="page_group" xsi:type="string">Generic Pages/All Pages</item>
                <item name="block" xsi:type="string">Main Content Area</item>
                <item name="template" xsi:type="string">CMS Page Link Block Template</item>
            </field>
        </dataset>
    </repository>
</config>

{% endhighlight %}

## Configuration repository {#mtf_repository_config}

The configuration repository stores predefined data sets for Magento configuration settings. It is the repository for the <a href="{{site.mage2000url}}app/code/Magento/Config">Magento_Config module</a> and is named `ConfigData.xml`.

Let's see the following example of configuration settings for <a href="{{site.mage2000url}}app/code/Magento/Authorizenet">Authorize.Net module</a> `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/Authorizenet/Test/Repository/ConfigData.xml`.

{% highlight xml %}

<?xml version="1.0"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/Magento/Mtf/Repository/etc/repository.xsd">
    <repository class="Magento\Config\Test\Repository\ConfigData">
        <dataset name="authorizenet">
            <field name="payment/authorizenet/active" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string">Yes</item>
                <item name="value" xsi:type="number">1</item>
            </field>
            <field name="payment/authorizenet/login" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string"/>
                <item name="value" xsi:type="string">PAYMENT_AUTHORIZENET_LOGIN</item>
            </field>
            <field name="payment/authorizenet/trans_key" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string"/>
                <item name="value" xsi:type="string">PAYMENT_AUTHORIZENET_TRANS_KEY</item>
            </field>
            <field name="payment/authorizenet/test" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string">No</item>
                <item name="value" xsi:type="number">0</item>
            </field>
            <field name="payment/authorizenet/cgi_url" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string"/>
                <item name="value" xsi:type="string">https://test.authorize.net/gateway/transact.dll</item>
            </field>
            <field name="payment/authorizenet/debug" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string">Yes</item>
                <item name="value" xsi:type="number">1</item>
            </field>
            <field name="payment/authorizenet/useccv" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string">Yes</item>
                <item name="value" xsi:type="number">1</item>
            </field>
        </dataset>
        <dataset name="authorizenet_rollback">
            <field name="payment/authorizenet/active" xsi:type="array">
                <item name="scope" xsi:type="string">payment</item>
                <item name="scope_id" xsi:type="number">1</item>
                <item name="label" xsi:type="string">No</item>
                <item name="value" xsi:type="number">0</item>
            </field>
        </dataset>
    </repository>
</config>

{% endhighlight %}

Path to the `Authorizenet` UI form in Admin is **STORES > Configuration > SALES > Payment Methods > Authorize.net Direct Post**.

This repository contains two data sets: `authorizenet` that covers seven fields, and `authorizenet_rollback` that covers one field.

Semantics of the field attributes:

|`field` attribute|Semantics|Value|
|---|---|---|---|
|`name`| Path to the Magento UI element | Example: `payment/authorizenet/active`. |
|`xsi:type`|Type of the field content| `array` |

Each field contains 4 items:

|Item name|Semantics|
|---|---|
|`scope`|Magento configuration section|
|`scope_id`|Magento scope identifier. UI representation is shown on the screenshot following this table. |
|`label`|Text represented in the UI field|
|`value`|Value of the field|

The following screenshot helps to understand the `scope_id` attribute.

![authorizenet data set view on GUI]({{site.baseurl}}common/images/mtf_ent_fixt_repo_config_scope-id.png)

Let's see the `authorizenet` data set in action. Fields defined in repository are in orange. Other fields are set in default values.

![authorizenet data set view on GUI]({{site.baseurl}}common/images/mtf_repo_config_ex.png)

## Merging repositories {#mtf_repository_merge}

The FTF enables you to split data sets among different modules. The configuration repository is a good example.

Modules that require configuration adjustment store `ConfigData.xml` in their `Repository` directory. All `ConfigData.xml` repositories have reference to the `Config` repository class. See the example on the following screenshot:

<a href="{{site.baseurl}}common/images/mtf_repo_merge_ex.png"><img src="{{site.baseurl}}common/images/mtf_repo_merge_ex.png" /></a>

As you can see, the `ConfigData.xml` of the [`Magento_Authorizenet` module]({{site.mage2000url}}app/code/Magento/Authorizenet) and the `ConfigData.xml` of the [`Magento_Backend` module]({{site.mage2000url}}app/code/Magento/Backend) have the same reference to the repository class; that is `Magento\Config\Test\Repository\ConfigData`.

`ConfigData.php` will be generated in `<magento2_root_dir>/dev/tests/functional/generated/Magento/Config/Test/Repository`. This PHP repository will contain repository data sets from all Magento modules that have a `ConfigData.xml` repository.

To run the generator, enter the following command in your terminal:

    php <magento2_root_dir>/dev/tests/functional/utils/generate.php

The preceding is an example of repository merging. Using the approach from the example you can merge repositories for any other fixture, not `Config` only.

## Credentials and `%isolation%` in repository {#mtf_repository_credent_iso}

Credentials are stored in an `*.xml` file that is specified in `phpunit.xml`.

You can find a template for credentials in [`<magento2_root_dir>/dev/tests/functional/credentials.xml.dist`]({{site.mage2000url}}dev/tests/functional/credentials.xml.dist).

Credentials always should stay invisible for security reasons. The FTF implicitly pastes credentials during the test run only.
There are two ways to paste credentials:

- **Using path**. If a field in a repository has a `name` that matches field `path` in `credentials.xml`, then the value of this field will be substituted for the value from `credential.xml` during the test.
- **Using placeholder**. If a field in a repository has value wrapped in `% %` that matches the value of the `replace` field attribute in `credentials.xml`, then the value of this field will be substituted with the value from `credential.xml` during the test.

### Example with substitution by <code>path</code> {#mtf_repo_credent_path}

Assume, that you have the following credentials in `credentials.xml`.

{%highlight xml%}

<field path="carriers/ups/password" value="strong_password" />
<field path="carriers/ups/username" value="my_name" />
<field path="carriers/ups/access_license_number" value="20150825" />
<field path="carriers/ups/shipper_number" value="321852741789" />

{%endhighlight%}

In the repository these fields can be defined as:

{%highlight xml%}

<field name="carriers/ups/password" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">CARRIERS_UPS_PASSWORD</item>
</field>
<field name="carriers/ups/username" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">CARRIERS_UPS_USERNAME</item>
</field>
<field name="carriers/ups/access_license_number" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">CARRIERS_UPS_ACCESS_LICENSE_NUMBER</item>
</field>
<field name="carriers/ups/shipper_number" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">CARRIERS_UPS_SHIPPER_NUMBER</item>
</field>

{%endhighlight%}

During the test run these fields are filled with values from `credentials.xml`.

### Example with replacement by <code>replace</code> {#mtf_repo_credent_replace}

For example, you have the following credentials in `credentials.xml`:

{%highlight xml%}

<field replace="carriers_dhl_id_eu" value="123654987" />
<field replace="carriers_dhl_password_eu" value="my_dh1_pas$worD" />
<field replace="carriers_dhl_account_eu" value="8521236987452" />

{%endhighlight%}

Then you should define repository fields as the following:

{%highlight xml%}

<field name="carriers/dhl/id" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">%carriers_dhl_id_eu%</item>
</field>
<field name="carriers/dhl/password" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">%carriers_dhl_password_eu%</item>
</field>
<field name="carriers/dhl/account" xsi:type="array">
    <item name="scope" xsi:type="string">carriers</item>
    <item name="scope_id" xsi:type="number">1</item>
    <item name="label" xsi:type="string"/>
    <item name="value" xsi:type="string">%carriers_dhl_account_eu%</item>
</field>

{%endhighlight%}

When the test is run, credentials from `credentials.xml` are transferred to the defined fields.

### `%isolation%` placeholder {#mtf_repo_isolation}

You can use `%isolation%` placeholder where you want to put a random value. It is useful when you need a unique value, for example `sku`, that has to be unique each test cycle.

Some examples:

{%highlight xml%}
<field name="title" xsi:type="string">Cms Page Link %isolation%</field>
<field name="sku" xsi:type="string">sku_simple_product_%isolation%</field>
<field name="url_key" xsi:type="string">simple-product-%isolation%</field>

{%endhighlight%}

All placeholders `%isolation%` will be replaced with [`mt_rand()`](http://php.net/manual/en/function.mt-rand.php) function during the test run.
