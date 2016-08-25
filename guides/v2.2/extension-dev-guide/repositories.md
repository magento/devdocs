---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Searching with Repositories
menu_title: Searching with Repositories
menu_order: 25
version: 2.2
github_link: extension-dev-guide/repositories.md
redirect_from: /guides/v2.2/extension-dev-guide/repositories.html
---

#### Contents
*	<a href="#m2devgde-repository-intro">What is Repository?</a>
*	<a href="#m2devgde-search-criteria">Search Criteria</a>
*	<a href="#m2devgde-searchcriteria-unify-processing">Search Criteria Unify Processing</a>

<h2 id="m2devgde-repository-intro">What is Repository?</h2>

Repository is one of the <a href="{{page.baseurl}}extension-dev-guide/service-contracts/design-patterns.html">service contracts</a>.
It provide CRUD operations for service requestors. Its possible to delete, save (create or update) and read (entity or list of entities) with help of repository.
 
Repository implementation is part of Domain Layer. 

### Repository and state

Repository should be stateless. In order to keep state, its highly recommended to use Registry pattern.
 
<h3 id="m2devgde-search-criteria">Search Criteria</h3>
Search Criteria is represented by <code>Magento\Framework\Api\SearchCriteriaInterface</code>. 
Search Criteria allows to build custom requests with different conditions. 

#### Filter

Filter is atomic part of Search Criteria, represented by <code>Magento\Framework\Api\Filter</code>.
It allows to add custom field, value and condition type to search criteria. 
Here is an example of Filter: 

{% highlight php startinline=true %}
<?php
$filter
    ->setField("url")
    ->setValue("%magento.com")
    ->setConditionType("like");
{% endhighlight %}

This filter will find all urls with magento.com suffix. 

#### Filter Group

Filter Group is collection of filters, represented by <code>Magento\Framework\Api\Search\FilterGroup</code>.
Filters in one filter group apply via <code>OR</code> statement. 
Different filter groups applies by <code>AND</code> statement. 

{% highlight php startinline=true %}
<?php
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
            
$filterGroup1->setFilters([$filter3]);   
$searchCriteria->setFilterGroups([$filterGroup1, $filterGroup2]);
{% endhighlight %}

The code above demonstrate filtering like: <code>(url OR store_id) AND (url_type)</code>

#### Sorting 

In order to apply one or few sortings to Search Criteria, need to create Sort Order object, 
represented by <code>Magento\Framework\Api\SortOrder</code>. 

Sort Order has 2 params: field and direction. Direction can be <code>ASC</code> or <code>DESC</code>. 

Sorting by customer email is presented below: 
{% highlight php startinline=true %}
<?php
$sortOrder
    ->setField("email")
    ->setDirection("ASC");
    
$searchCriteria->setSortOrders([$sortOrder]);
{% endhighlight %}

#### Pagination

Its possible to set limit to Search Criteria by using: 
{% highlight php startinline=true %}
<?php
$searchCriteria->setPageSize(20); //retrieve 20 or less entities
    
{% endhighlight %}

Also its possible to set limit offset to Search Criteria by using: 

{% highlight php startinline=true %}
<?php
$searchCriteria
    ->setCurrentPage(20)
    ->setCurrentPage(15); //will show entities from 15-th to 20-th
    
{% endhighlight %}


### Search Result

Repositories <code>getList(SearchCriteria $searchCriteria)</code> method should return 
Search Result, represented by <code>Magento\Framework\Data\SearchResultInterface</code>. 

Search Result hold information about total count of found entities. Total count should ignore all limitations.
Search Result also hold Search Criteria and items.

<h3 id="m2devgde-searchcriteria-unify-processing">Search Criteria Unify Processing</h3>

In order to unify appling of custom filters, sortings and pagination, was designed Collection Processor service, represented by 
<code>Magento\Framework\Api\SearchCriteria\CollectionProcessorInterface</code>. 
It defines one method process which allows to apply $searchCriteria to abstract $collection. 

Collection Processor can hold different types of processors, represented below. It is configurated through DI. 
For it configuration virtual types are used. 

#### Filter Processor

Filter processor apply Filter Groups and their filters to a collection.
Implementation of <code>Magento\Framework\Api\SearchCriteria\CollectionProcessor\FilterProcessor</code>

{% highlight php startinline=true %}
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
{% endhighlight %}

For some fields custom filters can be used, otherwise <code>$collection->addFieldToFilter($fields, $conditions)</code> is applied. 
It can be configured to use custom field mapping and custom filter processing like.

{% highlight XML %}
    <virtualType name="Magento\Customer\Model\Api\SearchCriteria\CollectionProcessor\GroupFilterProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\FilterProcessor">
        <arguments>
            <argument name="customFilters" xsi:type="array">
                <item name="category_id" xsi:type="object">Magento\Catalog\Model\Api\SearchCriteria\CollectionProcessor\FilterProcessor\ProductCategoryFilter</item>
            </argument>
            <argument name="fieldMapping" xsi:type="array">
                <item name="code" xsi:type="string">customer_group_code</item>
                <item name="id" xsi:type="string">customer_group_id</item>
                <item name="tax_class_name" xsi:type="string">class_name</item>
            </argument>
        </arguments>
    </virtualType>
{% endhighlight %}

Example of ProductCategoryFilter:
{% highlight php startinline=true %}
<?php
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
        $conditionType = $filter->getConditionType() ? $filter->getConditionType() : 'eq';
        $categoryFilter = [$conditionType => [$filter->getValue()]];

        /** @var Collection $collection */
        $collection->addCategoriesFilter($categoryFilter);

        return true;
    }
}

{% endhighlight %}

Field mapping allows to map field names defined in search criteria into names in a collection.
Custom filters allow to apply custom logic to a particular collection. Its interface is like 
<code>Magento\Framework\Api\SearchCriteria\CollectionProcessor\FilterProcessor\CustomFilterInterface:</code>

#### Sorting Processor

Sorting processor applies sorting order of search criteria to a collection.
Its implementation may be like in <code>Magento\Framework\Api\SearchCriteria\CollectionProcessor\SortingProcessor</code>

It can be configured to use custom field mapping and default sorting orders like

{% highlight XML %}
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
{% endhighlight %}  

Field mapping allows to map field names defined in search criteria into names in a collection.
Default orders allow to apply some default sorting orders in case there are no ones in a search criteria.

#### Pagination Processor 

Pagination processor applies current page and page size of search criteria to a collection.
Its implementation may be like in <code>Magento\Framework\Api\SearchCriteria\CollectionProcessor\PaginationProcessor</code>. 

#### Join Processor

Join Processor is kind of processors, which allows to find fields from another tables, and join them to collection. 
Join Processor implementation is represented below <code>(Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor)</code>

The way of configuring: 

{% highlight XML %}
    <virtualType name="Magento\Tax\Model\Api\SearchCriteria\CollectionProcessor\RuleJoinProcessor" type="Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor">
        <arguments>
            <argument name="customJoins" xsi:type="array">
                <item name="rate.tax_calculation_rate_id" xsi:type="object">Magento\Tax\Model\Api\SearchCriteria\JoinProcessor\Rate</item>
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
    <virtualType name="Magento\Tax\Model\Api\SearchCrtieria\TaxRuleCollectionProcessor type="Magento\Framework\Api\SearchCriteria\CollectionProcessor">
        <arguments>
            <argument name="processors" xsi:type="array">
                <item name="joins" xsi:type="object">Magento\Tax\Model\Rule\Api\SearchCriteria\CollectionProcessor\JoinProcessor</item>
                <item name="filters" xsi:type="object">Magento\Tax\Model\Rule\Api\SearchCriteria\CollectionProcessor\FilterProcessor</item>
                <item name="sorting" xsi:type="object">Magento\Tax\Model\Rule\Api\SearchCriteria\CollectionProcessor\SortingProcessor</item>
                <item name="pagination" xsi:type="object">Magento\Framework\Api\SearchCriteria\CollectionProcessor\PaginationProcessor</item>
            </argument>
        </arguments>
    </virtualType>
{% endhighlight %}  

JoinProcessor is aggregator for custom joins. Custom Join should implement <code>Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor\CustomJoinInterface</code>. 
Example of Custom Join:

{% highlight php startinline=true %}
    <?php 
    namespace Magento\Tax\Model\Api\SearchCriteria\JoinProcessor;
     
    use Magento\Framework\Api\SearchCriteria\CollectionProcessor\JoinProcessor\CustomJoinInterface;
    use Magento\Framework\Data\Collection\AbstractDb;
     
    /**
     * Class Rate
     * @package Magento\Tax\Model\Api\SearchCriteria\JoinProcessor
     */
    class Rate implements CustomJoinInterface
    {
        /**
         * @param \Magento\Tax\Model\ResourceModel\Calculation\Rule\Collection $collection
         * @return true
         */
        public function apply(AbstractDb $collection)
        {
            $collection->joinCalculationData('rate');
            return true;
        }
    }
{% endhighlight %}  

#### Example of generic usage

The generic usage of Collection Processor may be implemented like in 
{% highlight php startinline=true %}
    <?php
     
    namespace Magento\Customer\Model\ResourceModel;
     
    ...
     
    /**
     * Customer repository.
     * @SuppressWarnings(PHPMD.CouplingBetweenObjects)
     */
    class CustomerRepository implements \Magento\Customer\Api\CustomerRepositoryInterface
    {
        ...
     
        /**
         * @var \Magento\Framework\Api\SearchCriteria\CollectionProcessorInterface
         */
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
         */
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
         */
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
{% endhighlight %}  

Example of DI configuration may be like

{% highlight XML %}
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
{% endhighlight %}  