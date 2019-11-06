---
group: graphql
title: Resolvers
---

A resolver performs GraphQL request processing. In general, it is responsible for constructing a query, fetching data and performing any calculations, then transforming the fetched and calculated data into a GraphQL array format. Finally, it returns the results wrapped by a callable function.

A GraphQL request is represented by the following arguments to processed by a resolver:

Field | Type | Description
--- | --- | ---
$field | [`Magento\Framework\GraphQl\Config\Element\Field`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Config/Element/Field.php) | Fields are used to describe possible values for a type/interface
$context | [`Magento\Framework\GraphQl\Query\Resolver\ContextInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/ContextInterface.php) | Resolver context is used as a shared data extensible object in all resolvers that implement [`ResolverInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/ResolverInterface.php).
$info | [`Magento\Framework\GraphQl\Schema\Type\ResolveInfo`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Schema/Type/ResolveInfo.php) | Structure containing information useful for field resolution process.
$value | array | Contains additional query parameters. `Null` in most cases.
$args | array | Contains input arguments of query.

A GraphQL resolver must implement either [`\Magento\Framework\GraphQl\Query\Resolver\BatchResolverInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/BatchResolverInterface.php) interface or 
[`\Magento\Framework\GraphQl\Query\Resolver\BatchServiceContractResolverInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/BatchServiceContractResolverInterface.php) interface or
[`\Magento\Framework\GraphQl\Query\ResolverInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/ResolverInterface.php) interface. First 2 interfaces provide a way to resolve multiple branches/leaves at once known as batching while the last one is meant to resolve 1 request at a time. It is recommened to use batch resolvers for queries in order to improve performance by fetching information required to resolve multiple GraphQL requests with a single operation.

## Query resolvers

### BatchResolverInterface
Batch resolvers gather GraphQL requests for the same field until there is no way to process the tree further without resolving previous requests.
 
Consider the following example:
 
```text
query ($filter: ProductAttributeFilterInput!) {
  products (filter: $filter) {
    items {
      id
      sku
      related_products {
        sku
        related_products {
          sku
        }
      }
    }
    total_count
  }
}
```
 
Here we try to load a list of products, their related product SKUs and then related to related product SKUs. Loading related products list for each product at a time would be expensive performance-wise but with batch resolvers we can load linked products for all of products that we initially found and then group them by root products. After `items` branch is resolved a batch resolver for `related_products` will be called for the 1st product found but instead of resolving the list right away it will just add the 1st product to the list of products that require related ones loaded. After we line all the products from `items` branch as products that we need to load related products for we can see that we cannot proceed further without loading the lists. Then `BatchResolverInterface::resolve()` will be executed with gathered list of previous requests to `related_products` branches. At this point the resolver is able to extract product DTOs from each GraphQL request, load all product links, sort them by root products and generate GraphQL values for each branch. After this is done the same batching will take place when resolving child `related_products` branches.
 
Pseudo-code of such related-products branch resolver will look like this:
```php
class RelatedProducts implements BatchResolverInterface
{
    ...
    
    public function resolve(ContextInterface $context, Field $field, array $requests): BatchResponse
    {
        //Get the list of products we need to load related products for
        $rootProductIds = array_map(function ($request) { return $request->getValue()['model']->getId(); }, $requests);
        
        //Load the links
        $productLinks = $this->service->getRelatedProductLinks($rootProductIds);
        
        //Sort the links
        $response = new BatchResponse();
        foreach ($requests as $request) {
            $response->addResponse($request, $productLinks[$request->getValue()['model']->getId()]);
        }
        
        return $response;
    }
}
```
 
Each GraphQL request object must be assigned a result of type [`\Magento\Framework\GraphQl\Query\Resolver\Value`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/Value.php) or any type of data (mixed). This value takes in a callable function to its constructor that will be invoked at the latest possible time for the resolver to require its data. As a result, a list of items being resolved can be retrieved all at once by establishing a buffer that contains all relevant parent data to filter and fetch for the children list data.
 
You can examine an existing example of batch resolver implementation at [`\Magento\RelatedProductGraphQl\Model\Resolver\Batch\AbstractLinkedProducts`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/RelatedProductGraphQl/Model/Resolver/Batch/AbstractLikedProducts.php)
 
### BatchServiceContractResolverInterface
Requests for this interface to resolve are being gathered into batches in the same way as for _BatchResolverInterface_ with the difference that the resolving itself is delegated to a batch service contract. The job of _BatchServiceContractResolverInterface_ resolver is only to convert GraphQL requests into DTOs acceptable by the service contract and then convert results returned by the contract into GraphQL response.
 
Consider the same example query:
```text
query ($filter: ProductAttributeFilterInput!) {
  products (filter: $filter) {
    items {
      id
      sku
      related_products {
        sku
        related_products {
          sku
        }
      }
    }
    total_count
  }
}
```
 
Here we will delegate loading of all related products to our service that accepts a list of root product IDs and then returns individual
lists for each.
 
Pseudo-code for a GraphQL resolver delegating the work to a service contract may look like this:
```php
class RelatedProductsResolver implements BatchServiceContractResolverInterface
{
    ...
    
    public function getServiceContract(): array
    {
        return [ProductLinksRetriever::class, 'getRelatedProducts'];
    }
    
    public function convertToServiceArgument(ResolveRequestInterface $request)
    {
        return new RootProductCriteria($request->getValue()['model']->getId());
    }
    
    public function convertFromServiceResult($result, ResolveRequestInterface $request)
    {
        return $result->getLinkedProducts();
    }
}
```
 
_getServiceContract()_ method's responsiblity is to point to a service contract to be used.
_convertToServiceArgument()_ method's responsiblity is to convert GraphQL request to a criteria item to be passed in a list as the argument to the contract. Remember that batch service contract methods have to follow a certain convention - they accept a single argument - a list (array) of criteria objects.
_convertFromServiceResult()_ method's responsibility is to convert one of the result items into a GraphQL response (a [`\Magento\Framework\GraphQl\Query\Resolver\Value`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/Value.php) instance or an array). Remember that batch service contracts have to return result items in the same order as were the criteria items passed as the method's list argument i.e. if the 1st root product had ID#555 then the 1st result item will contain the list of related products to product #555.
 
The batch service contract used in the example would look something like this:
```php
class ProductLinksRetriever
{
    ...
    
    /**
     * @param RootProductCriteria[] $criteriaList
     * @return RelatedProductsFound[]
     */
    public function getRelatedProducts(array $criteriaList): array
    {
        ....
    }
}

class RootProductCriteria
{
    ....
    
    public function __construct(int $rootProductId)
    {
        $this->productId = $rootProductId;
    }
    
    public function getRootProductId(): int
    {
        return $this->productId;
    }
}

class RelatedProductsFound
{
    ....
    
    public function getLinkedProducts(): array
    {
        ....
    }
    
    public function getRootProductId(): int
    {
        ....
    }
}
```
 
A real example can be found at [\Magento\CatalogGraphQl\Model\Resolver\Product\BatchProductLinks]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/CatalogGraphQl/Model/Resolver/Product/BatchProductLinks.php)
 
### ResolverInterface
This resolver resolves one branch/leaf at a time. The interface returns [`\Magento\Framework\GraphQl\Query\Resolver\Value`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/Value.php) or any type of data (mixed). This value takes in a callable function to its constructor that will be invoked at the latest possible time for the resolver to require its data. As a result, a list of items being resolved can be retrieved all at once by establishing a buffer that contains all relevant parent data to filter and fetch for the children list data.

You can view an example inside the [`\Magento\BundleGraphQl\Model\Resolver\BundleItemLinks`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/BundleGraphQl/Model/Resolver/BundleItemLinks.php) resolver. This resolver takes each bundle option ID and its corresponding parent product ID and stores them in a collection's filter buffer (in this case, using the [`\Magento\BundleGraphQl\Model\Resolver\Links\Collection::addIdFilters()`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/BundleGraphQl/Model/Resolver/Links/Collection.php#L62-L70) function). Each resolver then returns a callable that invokes this collection. The collection caches the result of all link entities it fetched for all the option_id/parent_id combinations. This fetch only needs to occur once for the whole `BundleItemLink` list, and each resulting callable that is invoked for every link in the list returns an item from the collections cached result.

A `Value` object wraps a callable object, and you can use [`\Magento\Framework\GraphQl\Query\Resolver\ValueFactory`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/GraphQl/Query/Resolver/ValueFactory.php) to create a value.

## Mutation requirements

Like queries, mutations are also defined within the `<module_name>/etc/schema.graphqls` file.

### Mutation syntax

```text
type Mutation {
    mutationQueryName(inputParamName: MutationQueryInputType, inputParamName2: MutationQueryInputType2, ...): MutationQueryOutput @resolver(class: "Magento\\<module_name>\\Model\\Resolver\\MutationResolverModel") @doc(description:"Mutation query description")
}
```

Syntax option | Description
--- | ---
`mutationQueryName` | The name of mutation
`inputParamName` | Input parameters for the mutation (optional)
`MutationQueryInputType` | The type of input parameter, such as `String`, `Int`, or a custom type, like `MyCustomInput`
`MutationQueryOutput` | The mutation's result type, such as  `String`, `Int`, or a custom type, like `MyCustomOutput`
`@resolver(class)` | The class of the resolver
`@doc(description)` | Describes the purpose of the mutation
`@deprecated(reason: "description")` | Use `@deprecated` to mark a query, mutation, or attribute as deprecated

{:.bs-callout .bs-callout-tip}
It is a good practice to define separate types for input and output data. This practice permits additional extension points, so every input and output type can be extended by adding additional fields to the definition.

#### Example

**Wrong approach**

```text
type Mutation {
    mutationQueryName(param1: String, param2: Int, ...): MutationQueryOutput @resolver(class: "Magento\\<module_name>\\Model\\Resolver\\MutationResolverModel") @doc(description:"Mutation query description")
}
```

**Correct approach**

```text
type Mutation {
    mutationQueryName(inputParam: InputParamsType): MutationQueryOutput @resolver(class: "Magento\\<module_name>\\Model\\Resolver\\MutationResolverModel") @doc(description:"Mutation query description")
}

type InputParamsType {
    param1: String
    param2: Int
}
```

### Resolver class
Use the following sample code as a template for the GraphQl resolver mutation class

```php
<?php
/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
declare(strict_types=1);

namespace Magento\<module_name>\Model\Resolver;

use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;

/**
 * @inheritdoc
 */
class MutationResolverModel implements ResolverInterface
{
    /**
     * @inheritdoc
     */
    public function resolve(Field $field, $context, ResolveInfo $info, array $value = null, array $args = null)
    {
        // resolver functionality ...
    }
}
```

### Example usage

The mutation query below creates an empty cart and returns a cart unique identifier

```text
type Mutation {
    createEmptyCart: String @resolver(class: "\\Magento\\QuoteGraphQl\\Model\\Resolver\\CreateEmptyCart") @doc(description:"Creates an empty shopping cart for a guest or logged in user")
}
```

Notice that a `MutationQueryInput` parameter is not specified here and `MutationQueryOutput` is defined as `String` type.

The mutation to create a customer's account is more complex:

```text
type Mutation {
    createCustomer (input: CustomerInput!): CustomerOutput @resolver(class: "\\Magento\\CustomerGraphQl\\Model\\Resolver\\CreateCustomer") @doc(description:"Create customer account")
}
```

The `!` character indicates `CustomerInput` is a required input parameter. `CustomerInput` is defined as follows:

```text
input CustomerInput {
    prefix: String @doc(description: "An honorific, such as Dr., Mr., or Mrs.")
    firstname: String @doc(description: "The customer's first name")
    middlename: String @doc(description: "The customer's middle name")
    lastname: String @doc(description: "The customer's family name")
    suffix: String @doc(description: "A value such as Sr., Jr., or III")
    email: String @doc(description: "The customer's email address. Required")
    date_of_birth: String @doc(description: "The customer's date of birth")
    taxvat: String @doc(description: "The customer's Tax/VAT number (for corporate customers)")
    gender: Int @doc(description: "The customer's gender(Male - 1, Female - 2)")
    password: String @doc(description: "The customer's password")
    is_subscribed: Boolean @doc(description: "Indicates whether the customer is subscribed to the company's newsletter")
}
```

The `createCustomer` mutation returns `CustomerOutput` object

```text
type CustomerOutput {
    customer: Customer!
}
```

The `customer` parameter of the `CustomerOutput` object is a type of `Customer` object:

```text
type Customer @doc(description: "Customer defines the customer name and address and other details") {
    created_at: String @doc(description: "Timestamp indicating when the account was created")
    prefix: String @doc(description: "An honorific, such as Dr., Mr., or Mrs.")
    firstname: String @doc(description: "The customer's first name")
    middlename: String @doc(description: "The customer's middle name")
    lastname: String @doc(description: "The customer's family name")
    suffix: String @doc(description: "A value such as Sr., Jr., or III")
    email: String @doc(description: "The customer's email address. Required")
    default_billing: String @doc(description: "The ID assigned to the billing address")
    default_shipping: String @doc(description: "The ID assigned to the shipping address")
    date_of_birth: String @doc(description: "The customer's date of birth")
    taxvat: String @doc(description: "The customer's Tax/VAT number (for corporate customers)")
    id: Int @doc(description: "The ID assigned to the customer")
    is_subscribed: Boolean @doc(description: "Indicates whether the customer is subscribed to the company's newsletter") @resolver(class: "\\Magento\\CustomerGraphQl\\Model\\Resolver\\IsSubscribed")
    addresses: [CustomerAddress] @doc(description: "An array containing the customer's shipping and billing addresses")
}
```

The following example shows the `createCustomer` mutation in action:

```text
mutation {
    createCustomer(
        input: {
            firstname: "John"
            lastname: "Doe"
            email: "j.doe@example.com"
            password: "1w2E3R456"
            is_subscribed: true
        }
    ) {
        customer {
            id
            firstname
            lastname
            email
            is_subscribed
        }
    }
}
```

A sample response:

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": 5,
        "firstname": "John",
        "lastname": "Doe",
        "email": "j.doe@example.com",
        "is_subscribed": true
      }
    }
  }
}
```
