---
group: graphql
title: Resolvers
---

A resolver performs GraphQL request processing. In general, it is responsible for constructing a query, fetching data and performing any calculations, then transforming the fetched and calculated data into a GraphQL array format. Finally, it returns the results wrapped by a callable function.

A GraphQL resolver must implement the [`\Magento\Framework\GraphQl\Query\ResolverInterface`]({{ site.mage2300url }}lib/internal/Magento/Framework/GraphQl/Query/ResolverInterface.php) interface. This interface returns [`\Magento\Framework\GraphQl\Query\Resolver\Value`]({{ site.mage2300url }}lib/internal/Magento/Framework/GraphQl/Query/Resolver/Value.php) or any type of data (mixed). This value takes in a callable function to its constructor that will be invoked at the latest possible time for the resolver to require its data. As a result, a list of items being resolved can be retrieved all at once by establishing a buffer that contains all relevant parent data to filter and fetch for the children list data.

You can view an example inside the [`\Magento\BundleGraphQl\Model\Resolver\BundleItemLinks`]({{ site.mage2300url }}app/code/Magento/BundleGraphQl/Model/Resolver/BundleItemLinks.php) resolver. This resolver takes each bundle option ID and its corresponding parent product ID and stores them in a collection's filter buffer (in this case, using the [`\Magento\BundleGraphQl\Model\Resolver\Links\Collection::addIdFilters()`]({{ site.mage2300url }}app/code/Magento/BundleGraphQl/Model/Resolver/Links/Collection.php#L62-L70) function). Each resolver then returns a callable that invokes this collection. The collection caches the result of all link entities it fetched for all the option_id/parent_id combinations. This fetch only needs to occur once for the whole `BundleItemLink` list, and each resulting callable that is invoked for every link in the list returns an item from the collections cached result.

A `Value` object wraps a callable object, and you can use [`\Magento\Framework\GraphQl\Query\Resolver\ValueFactory`]({{ site.mage2300url }}lib/internal/Magento/Framework/GraphQl/Query/Resolver/ValueFactory.php) to create a value.
