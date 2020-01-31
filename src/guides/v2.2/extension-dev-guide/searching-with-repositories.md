---
group: php-developer-guide
subgroup: 99_Module Development
title: Searching with Repositories
menu_title: Searching with Repositories
menu_order: 35
functional_areas:
  - Search
---

### What is a repository? {#m2devgde-repository-intro}

Repositories give service requestors the ability to perform create, read, update, and delete (CRUD) operations on entities or a list of entities.
A repository is an example of a [service contract]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html), and its implementation is part of the domain layer.

#### Repository state

A repository should be stateless after instantiation.
This means that every method call should not rely on previous calls nor should it affect later method calls.
Any field contained in the repository class must also be stateless.

If your repository needs to provide functionality that requires state, such as for caching,  use the registry pattern.
A good example that uses this pattern is the [`CustomerRepository`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php){:target="_blank"} class.

### Search Criteria {#m2devgde-search-criteria}

A Search Criteria is an implementation of the [`SearchCriteriaInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteriaInterface.php){:target="_blank"} class that allows you to build custom requests with different conditions.

Repositories use this class to retrieve entities based on a matching criteria.

#### Filter

The [`Filter`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/Filter.php){:target="_blank"} class is the smallest part of a Search Criteria.
It allows you to add a custom field, value, and condition type to the criteria.

Example of how to define a Filter:

```php
$filter
    ->setField("url")
    ->setValue("%magento.com")
    ->setConditionType("like");
```

This filter will find all urls with the suffix of "magento.com".

#### Filter Group

The [`FilterGroup`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/Search/FilterGroup.php){:target="_blank"} class acts like a collection of Filters that apply one or more criteria to a search.

The boolean `OR` statement joins Filters inside a single **Filter Group**.

The boolean `AND` statement joins Filter Groups inside a **Search Criteria**.

For example:

```php
$filter1
    ->setField("url")
    ->setValue("%magento.com")
    ->setConditionType("like");

$filter2
    ->setField("store_id")
    ->setValue("1")
    ->setConditionType("eq");

$filterGroup1->setFilters([$filter1, $filter2]);

$filter3
    ->setField("url_type")
    ->setValue(1)
    ->setConditionType("eq");

$filterGroup2->setFilters([$filter3]);

$searchCriteria->setFilterGroups([$filterGroup1, $filterGroup2]);
```

The code above creates a Search Criteria with the Filters put together in the following way:\\
`(url like %magento.com OR store_id eq 1) AND (url_type eq 1)`

#### Sorting

To apply sorting to the Search Criteria, use the [`SortOrder`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SortOrder.php){:target="_blank"} class.

Field and direction make up the two parameters that define a Sort Order object.
The field is the name of the field to sort.
The direction is the method of sorting whose value can be `ASC` or `DESC`.

The example below defines a Sort Order object that will sort the customer email in ascending order:
```php
$sortOrder
    ->setField("email")
    ->setDirection("ASC");

$searchCriteria->setSortOrders([$sortOrder]);
```

#### Pagination

The `setPageSize` function paginates the Search Criteria by limiting the amount of entities it retrieves:

```php
$searchCriteria->setPageSize(20); //retrieve 20 or less entities

```

The `setCurrentPage` function sets the current page:

```php
$searchCriteria
    ->setPageSize(20)
    ->setCurrentPage(2); //show the 21st to 40th entity

```

### Search Result

The `getList(SearchCriteria $searchCriteria)` method defined in your repository should return a Search Result object.
This object is an instance of a class that implements the interface [`SearchResultsInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchResultsInterface.php){:target="_blank"}.

Search Result objects hold the Search Criteria object and the retrieved entities along with information about the total count of found entities regardless of any limitations set in the criteria.

### Search Criteria Unify Processing {#m2devgde-searchcriteria-unify-processing}

A Collection Processor is an implementation of the [`CollectionProcessorInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessorInterface.php){:target="_blank"} interface that unifies the application of custom filters, sorting, and paginating.
It contains a one method process that applies a Search Criteria object to an abstract database collection.

You can use [virtual typing]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#dependency-types) in your `di.xml` file to specify the processors used in the Collection Processor.

#### Filter Processor

The [`FilterProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor.php){:target="_blank"} class applies Filter Groups and their filters to a collection.

Below is the code that applies filters to a collection.
The method applies custom filters for some fields, otherwise it applies `$collection->addFieldToFilter($fields, $conditions)`.

{% collapsible Show Code for addFilterGroupToCollection %}

```php
    /**
     * Add FilterGroup to the collection
     *
     * @param FilterGroup $filterGroup
     * @param AbstractDb $collection
     */
    private function addFilterGroupToCollection(
        FilterGroup $filterGroup,
        AbstractDb $collection
    ) {
        $fields = [];
        $conditions = [];
        foreach ($filterGroup->getFilters() as $filter) {
            $isApplied = false;
            $customFilter = $this->getCustomFilterForField($filter->getField());
            if ($customFilter) {
                $isApplied = $customFilter->apply($filter, $collection);
            }

            if (!$isApplied) {
                $condition = $filter->getConditionType() ? $filter->getConditionType() : 'eq';
                $fields[] = $this->getFieldMapping($filter->getField());
                $conditions[] = [$condition => $filter->getValue()];
            }
        }

        if ($fields) {
            $collection->addFieldToFilter($fields, $conditions);
        }
    }
```

{% endcollapsible %}

You can configure this class to use a specific custom field mapping and custom filter in the `di.xml` file.
The example below uses [dependency injection](https://glossary.magento.com/dependency-injection) to create a [virtual type](https://glossary.magento.com/virtual-type) from a Filter Processor that applies the module-specific [`ProductCategoryFilter`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Api/SearchCriteria/CollectionProcessor/FilterProcessor/ProductCategoryFilter.php){:target="_blank"} on a particular field mapping.

```xml
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\GroupFilterProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\FilterProcessor">
        <arguments>
            <argument name="customFilters" xsi:type="array">
                <item name="category_id" xsi:type="object">Magento\Catalog\Model\Api\SearchCriteria\CollectionProcessor\FilterProcessor\ProductCategoryFilter</item>
            </argument>
            <argument name="fieldMapping" xsi:type="array">
                <item name="code" xsi:type="string">main_table.customer_group_code</item>
                <item name="id" xsi:type="string">main_table.customer_group_id</item>
                <item name="tax_class_name" xsi:type="string">tax_class_table.class_name</item>
            </argument>
        </arguments>
    </virtualType>
```

{% collapsible Show code for ProductCategoryFilter %}

```php
namespace Magento\Catalog\Model\Api\SearchCriteria\CollectionProcessor\FilterProcessor;

use Magento\Catalog\Model\ResourceModel\Product\Collection;
use Magento\Framework\Api\Filter;
use Magento\Framework\Api\SearchCriteria\CollectionProcessor\FilterProcessor\CustomFilterInterface;
use Magento\Framework\Data\Collection\AbstractDb;

class ProductCategoryFilter implements CustomFilterInterface
{
    /**
     * Apply category_id Filter to Product Collection
     *
     * @param Filter $filter
     * @param AbstractDb $collection
     * @return bool Whether the filter is applied
     */
    public function apply(Filter $filter, AbstractDb $collection)
    {
        $value = $filter->getValue();
        $conditionType = $filter->getConditionType() ?: 'in';
        if (($conditionType === 'in' || $conditionType === 'nin') && is_string($value)) {
            $value = explode(',', $value);
        } else {
            $value = [$value];
        }
        $categoryFilter = [$conditionType => $value];

        /** @var Collection $collection */
        $collection->addCategoriesFilter($categoryFilter);

        return true;
    }
}

```

{% endcollapsible %}

| Argument | Description |
| --- | --- |
| `customFilters` | An array of filters implementing the [`CustomFilterInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor/CustomFilterInterface.php){:target="_blank"}. These filters allow you to apply custom logic to a particular abstract database collection. |
| `fieldMapping` | Maps field names defined in the search Criteria to the names in an abstract database collection |

#### Sorting Processor

The [`SortingProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/SortingProcessor.php){:target="_blank"} class applies the sorting order of a search criteria to an abstract database collection.

Below is an example of how you can configure a Sorting Processor virtual type in the `di.xml` file to use a custom field mapping and default sorting orders.

```xml
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\GroupSortingProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\SortingProcessor">
        <arguments>
            <argument name="fieldMapping" xsi:type="array">
                <item name="code" xsi:type="string">customer_group_code</item>
                <item name="id" xsi:type="string">customer_group_id</item>
                <item name="tax_class_name" xsi:type="string">class_name</item>
            </argument>
            <argument name="defaultOrders" xsi:type="array">
                <item name="id" xsi:type="string">ASC</item>
            </argument>
        </arguments>
    </virtualType>
```

| Argument | Description |
|--- | --- |
| `fieldMapping` | Maps field names defined in the search Criteria to the names in an abstract database collection |
| `defaultOrders`| The ordering applied when there are none defined in a search criteria. |

#### Pagination Processor

The [`PaginationProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/PaginationProcessor.php){:target="_blank"} class applies the current page and page size of the search criteria to an abstract database collection.

#### Join Processor

The [`JoinProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor.php){:target="_blank"} class allows you to join fields from other tables into an abstract database collection.

Below is an example of creating a Join Processor virtual type in the `di.xml` file named `Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleJoinProcessor`:

```xml
<virtualType name="Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleJoinProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor">
  <arguments>
    <argument name="customJoins" xsi:type="array">
      <item name="rate.tax_calculation_rate_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\Rate</item>
      <item name="rc.code" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\RateCode</item>
      <item name="ctc.customer_tax_class_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\CustomerTaxClass</item>
      <item name="ptc.product_tax_class_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\ProductTaxClass</item>
      <item name="cd.customer_tax_class_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\CalculationData</item>
      <item name="cd.product_tax_class_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\CalculationData</item>
    </argument>
    <argument name="fieldMapping" xsi:type="array">
      <item name="id" xsi:type="string">tax_calculation_rule_id</item>
      <item name="tax_rate_ids" xsi:type="string">tax_calculation_rate_id</item>
      <item name="customer_tax_class_ids" xsi:type="string">cd.customer_tax_class_id</item>
      <item name="product_tax_class_ids" xsi:type="string">cd.product_tax_class_id</item>
      <item name="tax_calculation_rate_id" xsi:type="string">rate.tax_calculation_rate_id</item>
    </argument>
  </arguments>
</virtualType>
```

The Join Processor aggregates Custom Joins objects implementing the interface [`CustomJoinInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor/CustomJoinInterface.php){:target="_blank"}.

{% collapsible Show Custom Join implementation example %}

```php
    namespace Magento\Tax\Model\Api\SearchCriteria\JoinProcessor;

    use Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor\CustomJoinInterface;
    use Magento\Framework\Data\Collection\AbstractDb;

    /**
     * Class Rate
     * @package Magento\Tax\Model\Api\SearchCriteria\JoinProcessor
     **/
    class Rate implements CustomJoinInterface
    {
        /**
         * @param \Magento\Tax\Model\ResourceModel\Calculation\Rule\Collection $collection
         * @return true
         **/
        public function apply(AbstractDb $collection)
        {
            $collection->joinCalculationData('rate');
            return true;
        }
    }
```

{% endcollapsible %}

### Using Collection Processors in Repositories

Below is an example of how the [`CustomerRepositoryInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php){:target="_blank"} repository class uses a Collection Processor.

```php

    namespace Magento\Customer\Model\ResourceModel;

    ...

    /**
     * Customer repository.
     * @SuppressWarnings(PHPMD.CouplingBetweenObjects)
     **/
    class CustomerRepository implements \Magento\Customer\Api\CustomerRepositoryInterface
    {
        ...

        /**
         * @var \Magento\Framework\Api\SearchCriteria\CollectionProcessorInterface
         **/
        private $collectionProcessor;

        ...

        public function __construct(
            ...
            CollectionProcessorInterface $collectionProcessor = null
        ) {
            ...
            $this->collectionProcessor = $collectionProcessor ?: $this->getCollectionProcessor();
        }

        ...

        /**
         * {@inheritdoc}
         **/
        public function getList(SearchCriteriaInterface $searchCriteria)
        {
            ...

            $this->getCollectionProcessor()->process($searchCriteria, $collection);

            ...
        }

        ...

        /**
         * Retrieve collection processor
         *
         * @deprecated
         * @return \Magento\Framework\Api\SearchCriteria\CollectionProcessorInterface
         **/
        private function getCollectionProcessor()
        {
            if (!$this->collectionProcessor) {
                $this->collectionProcessor = \Magento\Framework\App\ObjectManager::getInstance()->get(
                    'Magento\Eav\Model\Api\SearchCriteria\CollectionProcessor'
                );
            }
            return $this->collectionProcessor;
        }
    }
```

The `di.xml` configuration file excerpt below shows how you can create a virtual type for the Collection Processor by passing in a custom Filter Processor and a custom Sorting Processor.

```xml
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\CustomerFilterProcessor" type="Magento\Eav\Model\Api\SearchCriteria\CollectionProcessor\FilterProcessor">
        <arguments>
            <argument name="customFilters" xsi:type="array">
                <item name="category_id" xsi:type="object">Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\FilterProcessor\CustomerCategoryFilter</item>
            </argument>
            <argument name="fieldMapping" xsi:type="array">
                <item name="code" xsi:type="string">customer_group_code</item>
                <item name="id" xsi:type="string">customer_group_id</item>
                <item name="tax_class_name" xsi:type="string">class_name</item>
            </argument>
        </arguments>
    </virtualType>
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\CustomerSortingProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\SortingProcessor">
        <arguments>
            <argument name="fieldMapping" xsi:type="array">
                <item name="code" xsi:type="string">customer_group_code</item>
                <item name="id" xsi:type="string">customer_group_id</item>
                <item name="tax_class_name" xsi:type="string">class_name</item>
            </argument>
            <argument name="defaultOrders" xsi:type="array">
                <item name="id" xsi:type="string">ASC</item>
            </argument>
        </arguments>
    </virtualType>
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CustomerCollectionProcessor" type="Magento\Eav\Model\Api\SearchCriteria\CollectionProcessor">
        <arguments>
            <argument name="processors" xsi:type="array">
                <item name="filters" xsi:type="object">Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\CustomerFilterProcessor</item>
                <item name="sorting" xsi:type="object">Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\CustomerSortingProcessor</item>
                <item name="pagination" xsi:type="object">Magento\Framework\Api\SearchCriteria\CollectionProcessor\PaginationProcessor</item>
            </argument>
        </arguments>
    </virtualType>
    <type name="Magento\Customer\Model\ResourceModel\CustomerRepository">
        <arguments>
            <argument name="collectionProcessor" xsi:type="object">Magento\Customer\Model\Api\SearchCriteria\CustomerCollectionProcessor</argument>
        </arguments>
    </type>
```
