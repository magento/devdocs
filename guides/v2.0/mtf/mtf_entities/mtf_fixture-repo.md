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

- <a href="mtf_repository_create-field"> Create repository for fixture field</a>

<h2 id="mtf_repository_overview">Repository overview</h2>

Repository stores pre-defined data for the fixture.
It contains only data sets with fields data that are used in test.
Repositories are stored in `Repository` directory within the module they belong to.
Reference to the repository is placed in fixture XML file in attribute named `repository`.

From this topic you will know how to create, use and merge a repository.

<h2 id="mtf_repository_create">Create repository for entire fixture</h2>

Let's create repository for the Widget fixture `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Fixture/Widget.xml`.
<a href="{{site.gdeurl}}mtf/mtf_fixture.html">More details about fixtures</a>.

Assume that we have the following fixture:

{% highlight xml %}

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

Then, create repository XML file by the pass that specified in `repository_class` attribute. 
In our case it is `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget.xml`.

Let's see an example of repository content for our Widget fixture.

{% highlight xml %}

<?xml version="1.0" ?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/Magento/Mtf/Repository/etc/repository.xsd">
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
            <field name="parameters" xsi:type="array">
                <item name="display_mode" xsi:type="string">catalogrule</item>
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

- `<config>` is a root node that defines path to `repository.xsd` schema
- `<repository>` specifies repository class (in required `class` attibute) that processes defined data sets
- `<dataset>` specifies name of data set in required `name` attribute
- `<field>` defines value of the field
    
|`field` attribute   |Semantics   | Is required?  |
|---|---|---|
| `name`  | corresponding field name in fixture |Required  |
| `xsi:type` |type of field value |Required|

|`field` element   |Semantics   | Is required?  |
|---|---|---|
| `<item>`  | array item when field type is array |Required if `<field xsi:type="array" ...>` |

|`item` attribute |Semantics   | Is required?  |
|---|---|---|
| `name`  | key name of array item  |Required  |
| `xsi:type` |type of item value |Required|

For this example if repository name in the test is not specified, then fields will be filled with data from `<dataset name="default">`. If repository name in the test is `cms_page_link`, then fields will be filled with data from `<dataset name="cms_page_link">`.

<h2 id="mtf_repository_create-field"> Create repository for fixture field</h2>

In Widget fixture code above there are fields with links for repositories. Let's see closer at field `layout` with `repository="Magento\Widget\Test\Repository\Widget\LayoutUpdates`.

`repository` value tells us where to create repository XML file and what name to give it.

Therefore, we should create `<magento_root>/dev/tests/functional/tests/app/Magento/Widget/Test/Repository/Widget/LayoutUpdates.xml`.

XML structure of this repository is the same as in entire fixture repository.

Assume that we want to create datasets of Layout Updates field for the following cases:




![all_pages dataset view on GUI]({{ site.baseurl }}common/images/mtf_repository_layout-allpages.png)

![on_category dataset view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-oncategory.png)

![layout_for_cms_page_link dataset view on GUI]({{site.baseurl}}common/images/mtf_repository_layout-for-cms-page-link.png)

{% highlight xml %}

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

Конфигурационный репозиторий

Конфигурация представлена фикстурой.

Если репозиториев нет в модуле репозиторий, они могут быть разбросаны по модулям и мерджиться по класу, указанному в атрибуте repository.

Для мерджа приветси пример репозитория конфига.

Credentials всегда подтягивается для фикстур неявно. Заменяет данные в репозитории. Доступ к данным имеет только фикстура.

Конфигурационные репо отличаются только именем, другой подход к формированию, имя это путь.
Конфигурационые репо мерджатся.
Конфигурационны репо это те что для модуля Config.
Как пример использовать виджет репозиторий для фикстуры и лейаут апдейт для поля.
Для примера мерджа использовать конфигурационные репозитории, они использованы в вики.
Креденшалз неявно подставляются к каждой фикстуре.
В репозитроии используется плейсхолдер. Значение подхватывается из крденшалз во время теста в целях безопасности.