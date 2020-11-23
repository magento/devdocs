---
group: php-developer-guide
title: Searching with Repositories
functional_areas:
  - Search
---

## What is a repository? {#m2devgde-repository-intro}

Repositories give service requestors the ability to perform create, read, update, and delete (CRUD) operations on entities or a list of entities.
A repository is an example of a [service contract]({{ page.baseurl }}/extension-dev-guide/service-contracts/design-patterns.html), and its implementation is part of the domain layer.

### Repository state

A repository should be stateless after instantiation.
This means that every method call should not rely on previous calls nor should it affect later method calls.
Any field contained in the repository class must also be stateless.

If your repository needs to provide functionality that requires state, such as for caching,  use the registry pattern.
A good example that uses this pattern is the [`CustomerRepository`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php) class.

## Search Criteria {#m2devgde-search-criteria}

A Search Criteria is an implementation of the [`SearchCriteriaInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteriaInterface.php) class that allows you to build custom requests with different conditions.

Repositories use this class to retrieve entities based on a matching criteria.

### Filter

The [`Filter`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/Filter.php) class is the smallest part of a Search Criteria.
It allows you to add a custom field, value, and condition type to the criteria.

Example of how to define a Filter:

```php
$filter
    ->setField("url")
    ->setValue("%magento.com")
    ->setConditionType("like");
```

This filter will find all urls with the suffix of "magento.com".

### Filter Group

The [`FilterGroup`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/Search/FilterGroup.php) class acts like a collection of Filters that apply one or more criteria to a search.

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

The code above creates a Search Criteria with the Filters put together in the following way: `(url like %magento.com OR store_id eq 1) AND (url_type eq 1)`

### Sorting

To apply sorting to the Search Criteria, use the [`SortOrder`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SortOrder.php) class.

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

### Pagination

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

## Search Result

The `getList(SearchCriteria $searchCriteria)` method defined in your repository should return a Search Result object.
This object is an instance of a class that implements the interface [`SearchResultInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchResultsInterface.php).

Search Result objects hold the Search Criteria object and the retrieved entities along with information about the total count of found entities regardless of any limitations set in the criteria.

The search engine determines the maximum number of results that a query can return. For SQL searches, the maximum is the value  of the `PHP_INT_MAX` environment variable. For Elasticsearch, the value is defined in the `Elasticsearch/etc/di.xml` file. The default is 10000.

The example below uses **getList** with the [`ProductRepositoryInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Api/ProductRepositoryInterface.php).
We use the [`FilterBuilder`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/FilterBuilder.php) and the [`SearchCriteriaBuilder`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteriaBuilder.php) to avoid shared instances.

```php
$filter = $this->filterBuilder
    ->setField(ProductInterface::NAME)
    ->setConditionType('like')
    ->setValue('%hoodie%')
    ->create();

$this->searchCriteriaBuilder->addFilters([$filter]);
$this->searchCriteriaBuilder->setPageSize(20);

$searchCriteria = $this->searchCriteriaBuilder->create();
$productsItems  = $this->productRepository->getList($searchCriteria)->getItems();
```

## Search Criteria Unify Processing {#m2devgde-searchcriteria-unify-processing}

A Collection Processor is an implementation of the [`CollectionProcessorInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessorInterface.php) interface that unifies the application of custom filters, sorting, and paginating.
It contains a one method process that applies a Search Criteria object to an abstract database collection.

You can use [virtual typing]({{ page.baseurl }}/extension-dev-guide/depend-inj.html#dependency-types) in your `di.xml` file to specify the processors used in the Collection Processor.

### Filter Processor

The [`FilterProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor.php) class applies Filter Groups and their filters to a collection.

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
The example below uses [dependency injection](https://glossary.magento.com/dependency-injection) to create a [virtual type](https://glossary.magento.com/virtual-type) from a Filter Processor that applies the module-specific [`ProductCategoryFilter`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Model/Api/SearchCriteria/CollectionProcessor/FilterProcessor/ProductCategoryFilter.php) on a particular field mapping.

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
| `customFilters` | An array of filters implementing the [`CustomFilterInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/FilterProcessor/CustomFilterInterface.php). These filters allow you to apply custom logic to a particular abstract database collection. |
| `fieldMapping` | Maps field names defined in the search Criteria to the names in an abstract database collection |

### Sorting Processor

The [`SortingProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/SortingProcessor.php) class applies the sorting order of a search criteria to an abstract database collection.

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

### Pagination Processor

The [`PaginationProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/PaginationProcessor.php) class applies the current page and page size of the search criteria to an abstract database collection.

### Join Processor

The [`JoinProcessor`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor.php) class allows you to join fields from other tables into an abstract database collection.
To join a table, implement `Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor\CustomJoinInterface::apply(AbstractDb $collection)`. Inside the class, use the `$collection->join(…)` method.

Below is an example of creating a Join Processor:
The virtual type in the `di.xml` class named `Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleJoinProcessor`:

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

The Join Processor aggregates the Custom Joins objects, implementing the interface [`CustomJoinInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Api/SearchCriteria/CollectionProcessor/JoinProcessor/CustomJoinInterface.php).
Below is `Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\Rate` as a Custom Join:

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

In the `apply` method the object calls `joinCalculationData` method of `Magento\Tax\Model\ResourceModel\Calculation\Rule\Collection` class.

```php
/**
 * Join calculation data to result
 *
 * @param string $alias table alias
 * @return \Magento\Tax\Model\ResourceModel\Calculation\Rule\Collection
 */
public function joinCalculationData($alias)
{
    $this->getSelect()->joinLeft(
        [$alias => $this->getTable('tax_calculation')],
        "main_table.tax_calculation_rule_id = {$alias}.tax_calculation_rule_id",
        []
    );
    $this->getSelect()->group('main_table.tax_calculation_rule_id');

    return $this;
}
```

The `rate` is alias of table, the alias is used in the Join.
In this case the `joinCalculationData(...)` is LEFT JOIN on `tax_calculation_rule_id` and group by `tax_calculation_rule_id`

The other case `Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\RateCode` class
provides additional LEFT JOIN except `joinCalculationData`

```php
/**
 * @param AbstractDb $collection
 * @return true
 */
public function apply(AbstractDb $collection)
{
    $taxCalculationTableAlias = 'tc';

    $collection->joinCalculationData($taxCalculationTableAlias);

    $collection->getSelect()->joinLeft(
        ['rc' => $collection->getTable('tax_calculation_rate')],
        "{$taxCalculationTableAlias}.tax_calculation_rate_id = rc.tax_calculation_rate_id",
        []
    );

    return true;
}
```

As result the processors will be used in the `Magento\Tax\Model\TaxRuleRepository`:

```xml
<type name="Magento\Tax\Model\TaxRuleRepository">
    <arguments>
        <argument name="collectionProcessor" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\TaxRuleCollectionProcessor</argument>
    </arguments>
</type>
```

The `Magento\Tax\Model\Api\SearchCriteria\TaxRuleCollectionProcessor`:

```xml
<virtualType name="Magento\Tax\Model\Api\SearchCriteria\TaxRuleCollectionProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor">
    <arguments>
        <argument name="processors" xsi:type="array">
            <item name="joins" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleJoinProcessor</item>
            <item name="filters" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleFilterProcessor</item>
            <item name="sorting" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\TaxRuleSortingProcessor</item>
            <item name="pagination" xsi:type="object">Magento\Framework\Api\SearchCriteria\CollectionProcessor\PaginationProcessor</item>
        </argument>
    </arguments>
</virtualType>
```

## Using Collection Processors in Repositories

Below is an example of how the [`CustomerRepositoryInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Customer/Model/ResourceModel/CustomerRepository.php) repository class uses a Collection Processor.

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

{:.bs-callout-info}
When building an EAV Model that needs to implement the `Repository::getList` method, use the EAV Filter Processor; otherwise the custom filters will not be added to the collection.
