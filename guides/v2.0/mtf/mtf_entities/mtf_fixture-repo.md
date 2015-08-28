---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Fixture Repository
menu_order: 2
github_link: mtf/mtf_entities/mtf_fixture-repo.md
---
<h2>Content</h2>

- <a href="#mtf_repository_overview">Repository overview</a>

- <a href="#mtf_repository_create">Create repository for entire fixture</a>

- <a href="#mtf_repository_create-field"> Create repository for the fixture field</a>

- <a href="#mtf_repository_config">Configuration repository</a>

- <a href="#mtf_repository_merge">Merge of repositories</a>

- <a href="#mtf_repository_credent_iso">Credentials and %isolation% in repository</a>

<h2 id="mtf_repository_overview">Repository overview</h2>

The repository stores pre-defined data for the fixture.
It contains only data sets that are used in the test along with the associated field data.
Repositories are stored in the `Repository` directory in the module to which they belong.
Reference to the repository is placed in the fixture XML file in attribute named `repository`.

In this topic you will learn how to create, use and merge a repository.

<h2 id="mtf_repository_create">Create repository for entire fixture</h2>

Let's create repository for the Widget fixture `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`.
<a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html">More details about fixtures</a>.

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

Assume that we want to specify data sets for two cases of filling out Widget forms: `default` with minimum data, and `cms_page_link` with data needed to create new CMS page link. Let's see details of second one. To create new CMS page link user must enter data of all required fields. Widget has three forms with fields to specify: **Settings**, **Storefront Properties**, **Frontend Apps Options**. The following text along with pictures gives an example of how to create a dataset of repository.

![cms_page_link "Settings" data set for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui.png)

- Set **Type** field (`field name="code"`) to *CMS Page Link*. It corresponds to the following code `<field name="code" xsi:type="string">CMS Page Link</field>`.
- Set **Design Theme** field (`field name="theme_id"`) to *Magento Blank*. It corresponds to the following code `<field name="theme_id" xsi:type="string">Magento Blank</field>`.

![cms_page_link "Storefront properties" dataset for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui_storefront.png)

- Set **Frontend App Title** field to *Cms Page Link <random integer value>*. It corresponds to the following code `<field name="title" xsi:type="string">Cms Page Link %isolation%</field>`.
- Set **Assign to Store Views** field to *All Store Views*. It corresponds to the following code:

{% highlight xml %}

 <field name="store_ids" xsi:type="array">
    <item name="dataset" xsi:type="string">all_store_views</item>
</field>

{% endhighlight xml %}

- Fill out **Layout Updates** complex field. In the repository code complex field are represented as arrays of items. Item can be an array of items also, depending on hierarchy of fields. This field is defined as `<field name="widget_instance" xsi:type="array"></field>`. As it is possible to create more than one instance of layout update, we define our instance as first element of array with index "0" as `<item name="0" xsi:type="array"></item>`.
  - Set **Display on** field to *All pages*. It corresponds to the following code `<item name="page_group" xsi:type="string">All Pages</item>`. Depending on value of this field, different fields to define this value appears. That's why all daughter fields must be wrapped in `<item name="all_pages" xsi:type="array"></item>`.
    - Set **Container** field to *Main content area*. It corresponds to the following code `<item name="block" xsi:type="string">Main Content Area</item>`.
    - Set **Template** field to *CMS Page Link Block Template*. It corresponds to the following code `<item name="template" xsi:type="string">CMS Page Link Block Template</item>`.
  
![cms_page_link "Frontend App Options" dataset for entire fixture view on GUI]({{ site.baseurl }}common/images/mtf_ent_fixt_repo_cms_set_ui_frontend-app.png)

**Anchor Custom Text** and **Anchor Custom Title** can be coded as complex fields as `<field name="parameters" xsi:type="array"></field>`:

- Set **Anchor Custom Text** field to *text*. It corresponds to the following code `<item name="anchor_text" xsi:type="string">text</item>`.
- Set **Anchor Custom Title** field to *anchor title*. It corresponds to the following code `<item name="title" xsi:type="string">anchor title</item>`.
- Create CMS Page using `default` data set. <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html">Learn more about data sets.</a>

{% highlight xml %}

<field name="page_id" xsi:type="array">
    <item name="dataset" xsi:type="string">default</item>
</field>

{% endhighlight xml %}

- Choose in **CMS Page** grid newly created *cmsPageLink*.

{% highlight xml %}

<field name="widgetOptions" xsi:type="array">
    <item name="0" xsi:type="array">
       <item name="type_id" xsi:type="string">cmsPageLink</item>
    </item>
</field>

{% endhighlight xml %}

Then, create repository XML file by the path specified in `repository_class` attribute. 
In our case it is `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget.xml`.

And now let's see the whole repository example.

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
            <field name="parameters" xsi:type="array">
                <item name="display_mode" xsi:type="string">fixed</item>
                <item name="anchor_text" xsi:type="string">text</item>
                <item name="title" xsi:type="string">anchor title</item>
            </field>
            <field name="page_id" xsi:type="array">
                <item name="dataset" xsi:type="string">default</item>
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

<h3 id="mtf_repository_structure">Repository structure</h3>

Let's look at repository structure.

- `<config>` is a root node that defines path to the `repository.xsd` schema.
- `<repository>` specifies a repository class in required `class` attribute and stores the defined data sets. `class` contains the full name of repository class, so you can guess where to place your repository. The repository contains datasets.
  - In case of entire fixture repository the full name of class (including namespace) must be built as `<path to module where the fixture is placed>\Repository\<file with the name of fixture>`. Example: `Magento\Widget\Test\Repository\Widget`
  - In case of fixture field repository the full name of class (including namespace) must be built as `<path to module where the fixture is placed>\Repository\<directory with the name of fixture>\<file with the name of field>`. Example: `Magento\Widget\Test\Repository\Widget\LayoutUpdates`.
- `<dataset>` specifies name of data set in required `name` attribute. This name serves as a reference of which data set will be used in the test. Dataset contains fields.
- `<field>` defines value of the field. Field may contain either value, or items if the field is complex.
    
|`field` attribute   |Semantics   | Is required?  |
|---|---|---|
| `name`  | field name in fixture |Required  |
| `xsi:type` |type of field value |Required|

|`field` daughter element   |Semantics   | Is required?  |
|---|---|---|
| `<item>`  | array item (when field type is array) |Required if `<field xsi:type="array" ...>` |

|`item` attribute |Semantics   | Is required?  |
|---|---|---|
| `name`  | key name of array item  |Required  |
| `xsi:type` |type of item value |Required|

`default` dataset is used by the test when the repository hasn't been specified in the test. Though you can explicitly specify 'default'. If repository name in the test is `cms_page_link`, then fields will be filled with data from `<dataset name="cms_page_link">`.

<h2 id="mtf_repository_create-field"> Create repository for the fixture field</h2>

In Widget fixture code above there are fields with the links for repositories. Let's see closer at the field `layout` with `repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates`.

The repository value is a reference to the repository XML file.

Therefore, we should create `magento2ce/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml`.

The XML structure of this repository is the same as of <a href="#mtf_repository_create">repository for the entire fixture</a>.

Assume that we want to fill out the Layout Update block for the following cases shown on the pictures (name of datasets have orange font, fields defined in repository are highlighted in orange):

Case 1. **all_pages** dataset:

* set **Display on** field (item name="page_group") to *All Pages* that is item of *Generic Pages*. It corresponds to the following code `<item name="page_group" xsi:type="string">Generic Pages/All Pages</item>`
* set **Container** field (item name="block") to *Main content Area*. It corresponds to the following code `<item name="block" xsi:type="string">Main Content Area</item>`

![all_pages dataset view on GUI]({{ site.baseurl }}common/images/mtf_repository_layout-allpages_w_dropd.png)

Case 2. **on_category** dataset:

* set **Display on** field (item name="page_group") to *Non-Anchor Categories* that is item of *Categories*. It corresponds to the following code `<item name="page_group" xsi:type="string">Categories/Non-Anchor Categories</item>`.
* set **Categories** field (item name="for") to *Specific Categories*. It corresponds to the following code `<item name="for" xsi:type="string">Yes</item>`.
* set in a tree of categories the **Default Category** (item name="entities"). It corresponds to the following code `<item name="entities" xsi:type="string">category::default_subcategory</item>`.
* set **Container** field (item name="block") to *Main content Area*. It corresponds to the following code `<item name="block" xsi:type="string">Main Content Area</item>`.

![on_category dataset view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-oncategory_w_dropd.png)

Case 3. **for_cms_page_link** dataset:

* set **Display on** field (item name="page_group") to *All Pages* that is item of *Generic Pages*. It corresponds to the following code `<item name="page_group" xsi:type="string">Generic Pages/All Pages</item>`.
* set **Container** field (item name="block") to *Main content Area*. It corresponds to the following code `<item name="block" xsi:type="string">Main Content Area</item>`.
* set **Template** field (item name="template") to *CMS Page Link Block Template*. It corresponds to the following code `<item name="template" xsi:type="string">CMS Page Link Block Template</item>`.

![layout_for_cms_page_link dataset view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-for-cms-page-link_w_dropd.png)

The repository code for these cases looks as the following:

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

<h2 id="mtf_repository_config">Configuration repository</h2>

Configuration repository is `ConfigData.xml` file that is the repository for `Config` module. It stores predefined data sets of the Magento configuration settings.

Let's see the following example of configuration settings for `Authorizenet` module `magento2ce/dev/tests/functional/tests/app/Magento/Authorizenet/Test/Repository/ConfigData.xml`.

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

Path to the `Authorizenet` UI form in Admin is **STORES > Configuration > SALES > Payment Methods > Authorize.net Direct Post**).

This repository contains two datasets: `authorizenet` that covers 7 fields, and `authorizenet_rollback` that covers one field.

Semantics of the field attributes:

|`field` attribute|Semantics|Value|
|---|---|---|---|
|`name`| Path to the Magento UI element | Example: `payment/authorizenet/active`. |
|`xsi:type`|Type of the field content| `array` |

Each field contains 4 items:

|Item name|Semantics|
|---|---|
|scope|Magento configuration section|
|scope_id|Magento scope identifier. UI representation is shown on the picture following this table. |
|label|Text represented in the UI field.|
|value|Value of the field.|

The following picture helps to understand the `scope_id` attibute.

![authorizenet dataset view on GUI]({{site.baseurl}}common/images/mtf_admin_scope-id.png)]

Let's see `authorizenet` data set in action. Fields defined in repository are in orange. Other fields are set in default values.

![authorizenet dataset view on GUI]({{site.baseurl}}common/images/mtf_repo_config_ex.png)

<h2 id="mtf_repository_merge">Merge of repositories</h2>

The MTF enables you to split data sets between different modules. Configuration repository is a good example.

Modules that require configuration adjustment stores `ConfigData.xml` in their `Repository`. All `ConfigData.xml` repositories have reference to the `Config` repository class. See example on the following picture:

<a href="{{site.baseurl}}common/images/mtf_repo_merge_ex.png"><img src="{{site.baseurl}}common/images/mtf_repo_merge_ex.png" /></a>

As you can see, `ConfigData.xml` of the `Authorizenet` module and `ConfigData.xml` of the `Backend` module have same reference to the repository class, that is `Magento\Config\Test\Repository\ConfigData`.

`ConfigData.php` will be generated in `magento2ce/dev/tests/functional/generated/Magento/Config/Test/Repository`. This PHP repository will contain repository data sets from all Magento modules that have `ConfigData.xml` repository.

To run generator, enter the following command:

    php magento2ce/dev/tests/functional/utils/generate.php

Preceding is the example of a use case of the repository merging. Using approach from example you can merge repositories for any other fixture, not `Congig` only.

<h2 id="mtf_repository_credentials">Credentials and %isolation% in repository</h2>

Credentials are stored in XML file specified in `phpunit.xml`.

You can find a template for credentials in `magento2ce/dev/tests/functional/credentials.xml.dist`.

Credentials always should stay invisible for security reasons. The MTF implicitly pastes credentials during the test run only. 
There are two ways to paste credentials:

- Using path. If field in repository has `name` that matches field `path` in `credentials.xml`, then value of this field will be substituted to the value from `credential.xml` during the test.
- Using placeholder. If field in repository has value wrapped in `% %` that matches the value of field `replace` attribute in `credentials.xml`, then value of this field will be substituted to the value from `credential.xml` during the test.

<h3 id="mtf_repo_credent_path">Example with substitution by <code>path</code></h3>

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

<h3 id="mtf_repo_credent_replace">Example with replacement by <code>replace</code></h3>

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

When the test is run, credentials from `credentials.xml` are transfered to defined fields.

<h3 id="mtf_repo_isolation"><code>%isolation%</code> placeholder</h3>

You can use `%isolation%` placeholder in repository fields where you want to put a random value. It is useful when you need a unique value, for example `sku`, that has to be unique each test cycle.

Some examples:

{%highlight xml%}
<field name="title" xsi:type="string">Cms Page Link %isolation%</field>
<field name="sku" xsi:type="string">sku_simple_product_%isolation%</field>
<field name="url_key" xsi:type="string">simple-product-%isolation%</field>

{%endhighlight%}

All placeholders `%isolation%` will be replaced with [mt_rand()](http://php.net/manual/en/function.mt-rand.php) function during test run.
