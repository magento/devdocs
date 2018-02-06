---
layout: default
group: graphql
version: 2.3
title: Resolvers
github_link: graphql/develop/resolvers.md
---

A resolver performs GraphQL request processing. In general, it is responsible for constructing a query, fetching data and performing any calculations, then transforming the fetched and calculated data into a GraphQL array format. Finally, it returns the results to the query for rendering.

The following code sample shows the top-level `Resolver` class for the `Customer` module. The query for this module is simply `customer: Customer`, so it's only necessary to resolve the `customer` object. Other module queries can require full text search strings, filters, and pagination to be resolved.

``` php
class Customer implements ResolverInterface
{
    /**
     * @var Customer\CustomerDataProvider
     */
    private $customerResolver;

    /**
     * @param \Magento\CustomerGraphQl\Model\Resolver\Customer\CustomerDataProvider $customerResolver
     */
    public function __construct(
        \Magento\CustomerGraphQl\Model\Resolver\Customer\CustomerDataProvider $customerResolver
    ) {
        $this->customerResolver = $customerResolver;
    }

    /**
     * {@inheritdoc}
     */
    public function resolve(array $args, ResolverContextInterface $context)
    {

        return $this->customerResolver->getCustomerById($context->getUserId());
    }
}
```

Note the following:

* `ResolverInterface` is defined in the `GraphQL` module.

* `CustomerDataProvider` retrieves customer data, transforms it to an array, and returns the customer object.
