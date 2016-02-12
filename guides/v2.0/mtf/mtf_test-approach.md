---
layout: default
group: mtf-guide
subgroup: 40_Approach
title: Test Approach in the Magento Testing Framework
menu_title: TESTING TUTORIAL
menu_node: parent
github_link: mtf/mtf_test-approach.md
---

* TOC
{:toc}

## Preface {#preface}

Magento testing framework works with functional tests only. Functional testing means checking that an application met specified business requirements. These requirements usually are collected in functional specifications that describe expected behaviour of the application. Role of functional testing is to validate this behavior.

Tests are used to cover functionality of a business entity. A goal is to find discrepancies between expected and real behaviour of the product.
    Magento already contains functional test in `<magento2>/dev/tests/functional/tests/app/Magento`. In this guide they are called `out-of-the-box` tests. You can use them to test default Magento functionality.

If you want to extend functionality you can modify existing tests or create your own functional tests using the MTF.
    
## Out-of-the-box test {#out-of-the-box-test}

The out-of-the-box tests are the ready to use functional tests developed by Magento. You can find them in the `<magento2>/dev/tests/functional` directory.

### Coverage {#coverage}

Test coverage of the out-of-the-box test depends on a module which it belongs to. The out-of-the-box tests cover basic functionality of Magento application. They test the CRUD functionality for all basic entities.  The most important modules are covered better.

### Usage {#oob-usage}

You can use out-of-the-box tests in:

- Regression testing
    - if new changes didn't break functionality
    - before release
    - for deep testing
    
- Sanity testing
    - after any changes were made
    - test the basic functionality
    
- Acceptance testing
    - in combination with own tests
    - to test new feature: show that feature works and it didn't break any functionality of the Magento application (all other tests passed)
 
### How to use {#how-to-use}

Step 1. Check the functionality manually

Pass all the test steps defined in a test case you want to use.

Step 2. [Run the test][]

## New test {#new-test}
    
### Extending an out-of-the-box test {#extending-oob-test}

You can create a test extending from an out-of-the-box test. It is stored in the `<magento2>/dev/tests/functional/tests/app/Magento/<testing_module>` directory.

#### Usage {#ext-usage}

This approach is useful when the Magento functionality was extended, for example the minor changes were added to the existing functionality of a module. Also you can extend an out-of-the-box test to extend the current test coverage if functionality that you are interested in is not completely covered by the out-of-the-box test.

Example use cases:

- [variation addition][]
- [variation extension][]
- [fixture extension][]
- [repository addition][]
- [block overriding][]
- [handler overriding][]

### Creating a test {#create-test}

When new functionality or/and new modules were added to Magento you would need to create an absolutely new test to check the functionality. 

New tests must be stored in corresponding modules `<magento2>/dev/tests/functional/tests/app/Magento/<testing_module>`.

Each test consists of four main components: test object, test data, test flow, test assertions.

#### Test object {#test-object}

Test object is an object that you are going to test. All test actions will be performed under this object.
Test object is represented as a [fixture][].  The fixture defines properties of an object.

#### Test data {#test-data}

Test data are data for the test and data for preconditions

 - Data for a test are stored in [data set][]
 - Preconditions include sample data that are stored in a [fixture repository][] and sample test entity that can be created by a [handler][]. 

#### Test flow {#test-flow}

Test flow is a set of test steps that you want to perform under the test object to check required functionality. Test steps are declared in a [test case][]. Each test step contains actions on a [page][]. Each action is managed by a corresponding method declared in a [block][].

#### Test assertions {#test-assertions}

Test assertions are represented in [constraints][].

To create the test entity you must fill a product creation form with data from a data set. To do it correctly you need a fixture for the simple product entity. Learn more about Fixture.
Связать в рамках одного теста. Создаваемый продукт можно назначить существующей категории или создать новую категорию для этого продукта. Чтобы создать новую категорию нужен хендлер.
Often you need to create some entity in precondition of your test case. To do this you need to create handler for Category creation in Handler directory of your module.  Learn more about Handler.

## Let's create a new test {#create-new-test}

To demonstrate usage of test components from previous sections in the test creation process we will create a new test step-by-step. Before creating automated test, try to pass it manually.

### Test description {#example-test-description}

Create a synonym group with:

- Scope: All Websites; All Store Views; Default Store View
- Synonyms: shoes, foot wear, men shoes, women shoes. For each variation the synonyms must have unique identifiers

### Manual testing scenario {#manual-test}

1. Log in to Admin
2. Browse to "Marketing" > "SEO & Search" > "Search Synonyms"
3. Click on the "New Synonyms Group" button
4. Enter data in the "Synonyms" field
5. Click the "Save Synonym Group" button
6. Check the newly created entity

### Automated testing scenario {#auto-test}

1. Log in to Admin
2. Open Search Synonym page
3. Click on the "New Synonym Group" button
4. Enter data according to a data set.
5. Click the "Save Synonym Group" button.
6. Perform assertions.

### Test creation {#test-creation}

#### Step 1. Check the MTF configuration and environment {#check-mtf}
 
[Adjust configuration][]
[Prepare environment for test run][]

#### Step 2. Create testing object - a [fixture][] {#create-test-object}

This step is applicable if a fixture doesn't exist in a module.

Use a [`generateFixtureXml.php` tool][] to create a new [fixture][].

Enter in your terminal:

    cd <magento2>/dev/tests/functional/utils
    php -f generateFixtureXml.php -- --name synonym --entity search_synonyms --collection Magento\\Search\\Model\\ResourceModel\\Query\\Collection

Probably you are curious about where we got that values from. See the following explanations.

|Parameter|Value|Explanation
|-|-|-
|`--name`|`synonym`|It can have any name. `synonym` seems to be logical.
|`--entity`|`search_synonyms`|You can track database input when you perform a [manual test][]. A new record will be created in a table that you need.
|`--collection`|`Magento\\Search\\Model\\ResourceModel\\Query\\Collection`|Synonyms are the entities of a Magento_Search module. Collection can always be find somewhere in model resources. All slashes must be escaped, that's why we use double slash `\\`.

A newly created fixture can be found in the `<magento2>/dev/tests/functional/tests/app/Magento/Search/Test/Fixture` directory.

![A new Synonym fixture]({{site.baseurl}}common/images/mtf_tut_fixt.png)

The following is a code of the new Synonym fixture.

{%highlight xml%}
<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/fixture.xsd">
    <fixture name="synonym"
             module="Magento_Search"
             entity_type="search_synonyms"
             type="flat"
             collection="Magento\Search\Model\ResourceModel\Query\Collection"
             repository_class="Magento\Search\Test\Repository\Synonym"
             handler_interface="Magento\Search\Test\Handler\Synonym\SynonymInterface"
             class="Magento\Search\Test\Fixture\Synonym">
        <field name="group_id" is_required="1 "/>
        <field name="synonyms" is_required="0" />
        <field name="store_id" is_required="0" />
        <field name="website_id" is_required="0" />
    </fixture>
</config>
{%endhighlight%}

If we open a New Synonym Group page in a browser

![New Synonym Group page]({{ site.baseurl }}common/images/mtf_tutorial_new_syn_ui.png)

we see that `store_id` and `website_id` both are combined in the "Scope" fields. To set `store_id` and `website_id` we have to perform some more logic than just entering the data. That's why we should use a [data source][].

As you probably recall, the same field is present in Magento_Widget module. It means that data source has been already written and we can e-use it.

Let's check the functional tests for the Magento_Widget module.

![ScopeID data source alternative from Magento_Widget]({{ site.baseurl }}common/images/mtf_tutorial_storeIds-widget.png)

It contains a `StoreIds.php` data source, that is exactly what we are looking for. It has the following code:

{% highlight php %}

<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Widget\Test\Fixture\Widget;

use Magento\Store\Test\Fixture\Store;
use Magento\Mtf\Fixture\FixtureFactory;
use Magento\Mtf\Fixture\DataSource;

/**
 * Prepare Store.
 */
class StoreIds extends DataSource
{
    /**
     * Return stores.
     *
     * @var Store
     */
    protected $stores = [];

    /**
     * @constructor
     * @param FixtureFactory $fixtureFactory
     * @param array $params
     * @param array $data
     */
    public function __construct(FixtureFactory $fixtureFactory, array $params, array $data = [])
    {
        $this->params = $params;
        if (isset($data['dataset'])) {
            $dataset = explode(',', $data['dataset']);
            foreach ($dataset as $store) {
                /** @var Store $store */
                $store = $fixtureFactory->createByCode('store', ['dataset' => $store]);
                if (!$store->hasData('store_id')) {
                    $store->persist();
                }
                $this->stores[] = $store;
                $this->data[] = $store->getName();
            }
        } else {
            $this->data[] = null;
        }
    }

    /**
     * Return stores.
     *
     * @return Store
     */
    public function getStores()
    {
        return $this->stores;
    }
}

{% endhighlight %}

The difference is that it is designed for multiple stores, but we don't need that. Adding some changes we can get our data source.

{% highlight php %}

<?php

namespace Magento\Search\Test\Fixture\Synonym;

use Magento\Store\Test\Fixture\Store;
use Magento\Mtf\Fixture\FixtureFactory;
use Magento\Mtf\Fixture\DataSource;

/**
 * Prepare Store.
 */
class ScopeId extends DataSource
{
    /**
     * Return store.
     *
     * @var Store
     */
    protected $store = null;

    /**
     * @constructor
     * @param FixtureFactory $fixtureFactory
     * @param array $params
     * @param array $data
     */
    public function __construct(FixtureFactory $fixtureFactory, array $params, array $data = [])
    {
        $this->params = $params;
        if (isset($data['dataset'])) {
            $store = $fixtureFactory->createByCode('store', ['dataset' => $data['dataset']]);
            if (!$store->hasData('store_id')) {
                $store->persist();
            }
            $this->store = $store;
            $this->data = $store->getName();
        } else {
            $this->data = null;
        }
    }

    /**
     * Return store.
     *
     * @return Store
     */
    public function getStore()
    {
        return $this->store;
    }
}

{% endhighlight %}

This data source:
 
 1. Creates a Store object `<magento2>/dev/tests/functional/generated/Magento/Store/Test/Fixture/Store.php` with `scope_id` data from a data set that we will create later. This data from a data set is a name of repository `dataset` in `<magento2>/dev/tests/functional/generated/Magento/Store/Test/Repository/Store.php`. A Store fixture to be generated is stored in a Store module `<magento2>/dev/tests/functional/tests/app/Magento/Store/Test/Fixture/Store.xml` with a corresponding repository
`magento2/dev/tests/functional/tests/app/Magento/Store/Test/Repository/Store.xml`. 
 2. Gets a `name` of the `store_id`.

Now we should change the fixture. Instead of `store_id` and `website_id` we must use `scope_id` with the `Magento\Search\Test\Fixture\Synonym\ScopeId` data source class.

{% highlight xml %}

... ... ...
<field name="group_id" is_required="0" />
<field name="synonyms" is_required="0" />
<field name="scope_id" is_required="0" source="Magento\Search\Test\Fixture\Synonym\ScopeId" />
... ... ...

{% endhighlight %}

Then, we can generate a PHP class for the fixture. Just run:

    php <magento2>/dev/tests/functional/utils/generate.php

And the new PHP class `Synonym.php` is generated in `<magento2>/dev/tests/functional/generated/Magento/Search/Test/Fixture`.

{%highlight php%}
<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

namespace Magento\Search\Test\Fixture;

/**
 * Class Synonym
 */
class Synonym extends \Magento\Mtf\Fixture\InjectableFixture
{
    /**
     * @var string
     */
    protected $repositoryClass = 'Magento\Search\Test\Repository\Synonym';

    /**
     * @var string
     */
    protected $handlerInterface = 'Magento\Search\Test\Handler\Synonym\SynonymInterface';


    /**
     * @var array
     */
    protected $group_id = [
        'is_required' => '0',
    ];

    /**
     * @var array
     */
    protected $synonyms = [
        'is_required' => '0',
    ];

    /**
     * @var array
     */
    protected $scope_id = [
        'is_required' => '0',
        'source' => 'Magento\Search\Test\Fixture\Synonym\ScopeId',
    ];

    /**
     * @return mixed
     */
    public function getGroupId()
    {
        return $this->getData('group_id');
    }

    /**
     * @return mixed
     */
    public function getSynonyms()
    {
        return $this->getData('synonyms');
    }

    /**
     * @return mixed
     */
    public function getScopeId()
    {
        return $this->getData('scope_id');
    }
}

{%endhighlight php%}

#### Step 4. Create an initial [test case][] {#create-test-case}

Now we can start creation of a test case.

From the [test case topic][] we know about structure, location and name of the test case.
So, let it be `<magento2>/dev/tests/functional/tests/app/Magento/Search/Test/TestCase/CreateSynonymEntityTest.xml`. And we know that we must open a Search Synonym Index page and a new New Synonym Group page during the test flow. It means that we should initialize these pages in the test using the `__inject()` method of the `Magento\Mtf\TestCase\Injectable` class. Also we will definitely use the [fixture][] from the previous step.

{% highlight php %}

<?php

namespace Magento\Search\Test\TestCase;

use Magento\Mtf\TestCase\Injectable;
use Magento\Search\Test\Fixture\Synonym;

/**
 * Steps:
1. Log in to Admin
2. Open Search Synonym page
3. Click on the 'New Synonym Group' button
4. Enter data according to a data set.
5. Click the 'Save Synonym Group' button.
 */
class CreateSynonymEntityTest extends Injectable
{
    /**
     * Search Synonyms Index page
     *
     * @var SearchSynonymsIndex
     */
    private $searchSynonymsIndex;

    /**
     * New Synonym Group page
     *
     * @var SearchSynonymsNew
     */
    private $searchSynonymsNew;

    /**
     * Inject synonym pages.
     *
     * @param SearchSynonymsIndex $searchSynonymsIndex
     * @param SearchSynonymsNew $searchSynonymsNew
     * @return void
     */
    public function __inject(
        SearchSynonymsIndex $searchSynonymsIndex,
        SearchSynonymsNew $searchSynonymsNew
    ) {
        $this->searchSynonymsIndex = $searchSynonymsIndex;
        $this->searchSynonymsNew = $searchSynonymsNew;
    }

    /**
     * @param Synonym $synonym
     * @return void
     */
    public function test(Synonym $synonym)
    {
        // Steps
    }
        
}

{% endhighlight %}

#### Step 5. Create a [data set][] {#create-data-set}

Now we can add a data set with variations that cover cases in [test description][]: `<magento2>/dev/tests/functional/tests/app/Magento/Search/Test/TestCase/CreateSynonymEntityTest.xml`

![Created data set]({{site.baseurl}}common/images/mtf_tutor_dataset.png)

The following code contains data set, but don't have data yet

{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Search\Test\TestCase\CreateSynonymEntityTest" summary="Create Synonyms">
        <variation name="CreateCategoryEntityTestVariation1_all_websites_all_store_views" summary="Create synonym for all websites and all store views">
        enter data and constraints for vaiation 1
        </variation>
        <variation name="CreateCategoryEntityTestVariation2_main_website_all_store_views" summary="Create synonyms for main website and all store views">
        enter data and constraints for vaiation 2
        </variation>
        <variation name="CreateCategoryEntityTestVariation3_main_website_default_store_view" summary="Create synonyms for main website and default store views">
        enter data and constraints for vaiation 3
        </variation>
    </testCase>
</config>

{% endhighlight %}

There is no need to enter a `group_id` field, because it is assigned automatically by application. We need to set `synonyms` and `scope_id` fields.

- `synonyms` field. We need to [set data to a fixture field][]. So, name of the field should be `<name of a fixture>/data/<name of the field>`, or in our case it is `name = "synonym/data/synonyms"`. To make data unique in each variation we can use the [`%isolation%` placeholder][].
- `scope_id` field. We need to [set data to a fixture field from a repository][]. So, name of the field should be `<name of a fixture>/data/<name of the field>/dataset`, or in our case it is `name="synonym/data/scope_id/dataset"`. As you recall, we use data source to process this field. Data source creates Store fixture with Store repository to enter data to this field. It means that in this field we should insert name of the Store repository `dataset name` from `<magento2>/dev/tests/functional/tests/app/Magento/Store/Test/Repository/Store.xml`.

|   |`synonyms`|`scope_id`
|---
|variation 1|`shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%`|In this variation we won't use this field to cover `All Website` case, because it is selected automatically when the New Synonym Group page is opened
|variation 2|`shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%`|`all_store_views`
|variation 3|`shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%`|`default_store_view`

OK, let's see the data set with data.
 
{% highlight xml %}

<?xml version="1.0" encoding="utf-8"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../../../vendor/magento/mtf/etc/variations.xsd">
    <testCase name="Magento\Search\Test\TestCase\CreateSynonymEntityTest" summary="Create Synonyms">
        <variation name="CreateCategoryEntityTestVariation1_all_websites_all_store_views" summary="Create synonym for all websites and all store views">
            <data name="synonym/data/synonyms" xsi:type="string">shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%</data>
        </variation>
        <variation name="CreateCategoryEntityTestVariation2_main_website_all_store_views" summary="Create synonyms for main website and all store views">
            <data name="synonym/data/synonyms" xsi:type="string">shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%</data>
            <data name="synonym/data/scope_id/dataset" xsi:type="string">all_store_views</data>
        </variation>
        <variation name="CreateCategoryEntityTestVariation3_main_website_default_store_view" summary="Create synonyms for main website and default store views">
            <data name="synonym/data/synonyms" xsi:type="string">shoes %isolation%, foot wear %isolation%, men shoes %isolation%, women shoes %isolation%</data>
            <data name="synonym/data/scope_id/dataset" xsi:type="string">default_store_view</data>
        </variation>
    </testCase>
</config>

{% endhighlight %}


<!-- LINK DEFINITIONS -->

[Run the test]: {{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html
[variation addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#add_variation
[variation extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#extend_variation
[fixture extension]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend
[repository addition]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy
[block overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html
[handler overriding]: {{site.gdeurl}}mtf/mtf_entities/mtf_handler.html

[fixture]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html
[data set]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html
[fixture repository]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html
[handler]: {{site.gdeurl}}mtf/mtf_entities/mtf_handler.html
[test case]: {{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html
[test case topic]: {{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html
[block]: {{site.gdeurl}}mtf/mtf_entities/mtf_block.html
[page]: {{site.gdeurl}}mtf/mtf_entities/mtf_page.html
[constraints]: {{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html
[data source]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source

[Adjust configuration]: http://devdocs.magento.com/guides/v2.0/mtf/mtf_quickstart/mtf_quickstart_config.html
[Prepare environment for test run]: http://devdocs.magento.com/guides/v2.0/mtf/mtf_quickstart/mtf_quickstart_environmemt.html

[`generateFixtureXml.php` tool]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_create
[set data to a fixture field]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#fixture_field
[set data to a fixture field from a repository]: {{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html#fixture_field_repository
[`%isolation%` placeholder]: {{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repo_isolation

[manual test]: #manual-test
[test description]: #example-test-description






<!-- ABBREVIATIONS -->
*[MTF]: Magento Testing Framework
*[CRUD]: Create Read Update Delete