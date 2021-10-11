---
group: rest-api
title: Create a custom REST API
contributor_name: Nitish Ranjan (Ziffity)
contributor_link: https://www.Ziffity.com/
---

## Overview

The REST API in Magento 2 defines a set of functions used by developers to perform requests and get responses using the HTTP protocol. By default, Magento 2 provides predefined REST APIs such as Product API, Order API, and Customer data API, with which you can control everything happening on the site.

Even though Magento 2 has a number of REST APIs, they may not be not enough when it comes to using the custom data. To manage custom data and fields, you need to create a custom REST API in Magento 2. This tutorial describes how you can create such a custom REST API.

## 1. Create a custom module

`Dev_RestApi` will be the namespace for this tutorial.

Create these files to get started:

`app/code/Dev/RestApi/etc/module.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
    <module name="Dev_RestApi">
        <sequence>
            <module name="Magento_Webapi" />
            <module name="Magento_Catalog" />
        </sequence>
    </module>
</config>
```

`app/code/Dev/RestApi/registration.php`:

```php
<?php

\Magento\Framework\Component\ComponentRegistrar::register(
    \Magento\Framework\Component\ComponentRegistrar::MODULE,
    'Dev_RestApi',
    __DIR__
);
```

## 2. Create custom ACL entries

`app/code/Dev/RestApi/etc/acl.xml`:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:Acl/etc/acl.xsd">
    <acl>
        <resources>
            <resource id="Magento_Backend::admin">
                <resource id="Dev_RestApi::products" title="Dev API - Products"
                          translate="title" sortOrder="110">
                    <resource id="Dev_RestApi::products_get" title="Get product"
                              translate="title" sortOrder="10" />
                    <resource id="Dev_RestApi::products_set_description" title="Set description"
                              translate="title" sortOrder="20" />
                </resource>
            </resource>
        </resources>
    </acl>
</config>
```

In this tutorial, we have defined ACL entries for each endpoint which gives full control over who can access them.

## 3. Define custom endpoints

`app/code/Dev/RestApi/etc/webapi.xml`:

```xml
<?xml version="1.0"?>
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/rest_dev/getProduct/:id" method="GET">
        <service class="Dev\RestApi\Api\ProductRepositoryInterface" method="getItem" />
        <resources>
            <resource ref="Dev_RestApi::products_get" />
        </resources>
    </route>
    <route url="/V1/rest_dev/setDescription" method="PUT">
        <service class="Dev\RestApi\Api\ProductRepositoryInterface" method="setDescription" />
        <resources>
            <resource ref="Dev_RestApi::products_set_description" />
        </resources>
    </route>
</routes>
```

Where:

*  `route.url` is the URL of the endpoint. The full address would be: `<domain>/rest/<store_code><route.url>`
*  `route.method` defines the request method. You should follow the rules of the REST API specification:

| Method | Description |
| --------- | ----------- |
| `GET` | To receive data |
| `POST` | To create new object(s) |
| `PUT` | To update existing object(s) |
| `DELETE` | To delete object(s) |

*  `service` describes the interface and the method to be called when the endpoint is reached.
*  `resource` sets the ACL resource that is required to access the endpoint. If you want to make it public (no authentication), use: `<resource ref="anonymous" />`

## 4. Create Interfaces

In this example, we have created the interfaces for the request and response.

`app/code/Dev/RestApi/Api/RequestItemInterface.php`:

```php
<?php

namespace Dev\RestApi\Api;

interface RequestItemInterface
{
    const DATA_ID = 'id';
    const DATA_DESCRIPTION = 'description';

    /**
     * @return int
     */
    public function getId();

    /**
     * @return string
     */
    public function getDescription();

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id);

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description);
}
```

`app/code/Dev/RestApi/Api/ResponseItemInterface.php`:

```php
<?php

namespace Dev\RestApi\Api;

interface ResponseItemInterface
{
    const DATA_ID = 'id';
    const DATA_SKU = 'sku';
    const DATA_NAME = 'name';
    const DATA_DESCRIPTION = 'description';

    /**
     * @return int
     */
    public function getId();

    /**
     * @return string
     */
    public function getSku();

    /**
     * @return string
     */
    public function getName();

    /**
     * @return string|null
     */
    public function getDescription();

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id);

    /**
     * @param string $sku
     * @return $this
     */
    public function setSku(string $sku);

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name);

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description);
}
```

`app/code/Dev/RestApi/Api/ProductRepositoryInterface.php`:

```php
<?php

namespace Dev\RestApi\Api;

interface ProductRepositoryInterface
{
    /**
     * Return a filtered product.
     *
     * @param int $id
     * @return \Dev\RestApi\Api\ResponseItemInterface
     * @throws \Magento\Framework\Exception\NoSuchEntityException
     */
    public function getItem(int $id);

    /**
     * Set descriptions for the products.
     *
     * @param \Dev\RestApi\Api\RequestItemInterface[] $products
     * @return void
     */
    public function setDescription(array $products);
}
```

## 4. Create Models

Models create classes that implement interfaces and process data.
In this example, we have created models for request, response and process data. In each model we have defined two methods: `getItem`, which provides product details of the given product id, and `setDescription` which updates the description of the given product.

`app/code/Dev/RestApi/Model/Api/RequestItem.php`:

```php
<?php

namespace Dev\RestApi\Model\Api;

use Dev\RestApi\Api\RequestItemInterface;
use Magento\Framework\DataObject;

/**
 * Class RequestItem
 */
class RequestItem extends DataObject implements RequestItemInterface
{
    public function getId() : int
    {
        return $this->_getData(self::DATA_ID);
    }

    public function getDescription() : string
    {
        return $this->_getData(self::DATA_DESCRIPTION);
    }

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id) : mixed
    {
        return $this->setData(self::DATA_ID, $id);
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description) : mixed
    {
        return $this->setData(self::DATA_DESCRIPTION, $description);
    }
}
```

`app/code/Dev/RestApi/Model/Api/ResponseItem.php`:

```php
<?php

namespace Dev\RestApi\Model\Api;

use Dev\RestApi\Api\ResponseItemInterface;
use Magento\Framework\DataObject;

/**
 * Class ResponseItem
 */
class ResponseItem extends DataObject implements ResponseItemInterface
{
    public function getId() : int
    {
        return $this->_getData(self::DATA_ID);
    }

    public function getSku() : string
    {
        return $this->_getData(self::DATA_SKU);
    }

    public function getName() : string
    {
        return $this->_getData(self::DATA_NAME);
    }

    public function getDescription() : string
    {
        return $this->_getData(self::DATA_DESCRIPTION);
    }

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id) : mixed
    {
        return $this->setData(self::DATA_ID, $id);
    }

    /**
     * @param string $sku
     * @return $this
     */
    public function setSku(string $sku) : mixed
    {
        return $this->setData(self::DATA_SKU, $sku);
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name) : mixed
    {
        return $this->setData(self::DATA_NAME, $name);
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description) : mixed
    {
        return $this->setData(self::DATA_DESCRIPTION, $description);
    }
}
```

`app/code/Dev/RestApi/Model/Api/ProductRepository.php`:

```php
<?php

namespace Dev\RestApi\Model\Api;

use Dev\RestApi\Api\ProductRepositoryInterface;
use Dev\RestApi\Api\RequestItemInterfaceFactory;
use Dev\RestApi\Api\ResponseItemInterfaceFactory;
use Magento\Catalog\Api\Data\ProductInterface;
use Magento\Catalog\Model\ResourceModel\Product\Action;
use Magento\Catalog\Model\ResourceModel\Product\CollectionFactory;
use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Store\Model\StoreManagerInterface;

/**
 * Class ProductRepository
 */
class ProductRepository implements ProductRepositoryInterface
{
    /**
     * @var Action
     */
    private $productAction;

    /**
     * @var CollectionFactory
     */
    private $productCollectionFactory;

    /**
     * @var RequestItemInterfaceFactory
     */
    private $requestItemFactory;

    /**
     * @var ResponseItemInterfaceFactory
     */
    private $responseItemFactory;

    /**
     * @var StoreManagerInterface
     */
    private $storeManager;

    /**
     * @param Action $productAction
     * @param CollectionFactory $productCollectionFactory
     * @param RequestItemInterfaceFactory $requestItemFactory
     * @param ResponseItemInterfaceFactory $responseItemFactory
     * @param StoreManagerInterface $storeManager
     */
    public function __construct(
        Action $productAction,
        CollectionFactory $productCollectionFactory,
        RequestItemInterfaceFactory $requestItemFactory,
        ResponseItemInterfaceFactory $responseItemFactory,
        StoreManagerInterface $storeManager
    ) {
        $this->productAction = $productAction;
        $this->productCollectionFactory = $productCollectionFactory;
        $this->requestItemFactory = $requestItemFactory;
        $this->responseItemFactory = $responseItemFactory;
        $this->storeManager = $storeManager;
    }

    /**
     * {@inheritDoc}
     *
     * @param int $id
     * @return ResponseItemInterface
     * @throws NoSuchEntityException
     */
    public function getItem(int $id) : mixed
    {
        $collection = $this->getProductCollection()
            ->addAttributeToFilter('entity_id', ['eq' => $id]);

        /** @var ProductInterface $product */
        $product = $collection->getFirstItem();
        if (!$product->getId()) {
            throw new NoSuchEntityException(__('Product not found'));
        }

        return $this->getResponseItemFromProduct($product);
    }

    /**
     * {@inheritDoc}
     *
     * @param RequestItemInterface[] $products
     * @return void
     */
    public function setDescription(array $products) : void
    {
        foreach ($products as $product) {
            $this->setDescriptionForProduct(
                $product->getId(),
                $product->getDescription()
            );
        }
    }

    /**
     * @return Collection
     */
    private function getProductCollection() : mixed
    {
        /** @var Collection $collection */
        $collection = $this->productCollectionFactory->create();

        $collection
            ->addAttributeToSelect(
                [
                    'entity_id',
                    ProductInterface::SKU,
                    ProductInterface::NAME,
                    'description'
                ],
                'left'
            );

        return $collection;
    }

    /**
     * @param ProductInterface $product
     * @return ResponseItemInterface
     */
    private function getResponseItemFromProduct(ProductInterface $product) : mixed
    {
        /** @var ResponseItemInterface $responseItem */
        $responseItem = $this->responseItemFactory->create();

        $responseItem->setId($product->getId())
            ->setSku($product->getSku())
            ->setName($product->getName())
            ->setDescription($product->getDescription());

        return $responseItem;
    }

    /**
     * Set the description for the product.
     *
     * @param int $id
     * @param string $description
     * @return void
     */
    private function setDescriptionForProduct(int $id, string $description) : void
    {
        $this->productAction->updateAttributes(
            [$id],
            ['description' => $description],
            $this->storeManager->getStore()->getId()
        );
    }
}
```

## 5. Test your custom endpoint

*  You can use any REST client to send calls to Magento. [Postman](https://www.getpostman.com/) is recommended.
*  Obtain an admin authorization token. All calls in this tutorial require administrator privileges. See [Generate the admin token]({{ page.baseurl }}/rest/tutorials/prerequisite-tasks/create-admin-token.html) for more information.

### Example 1

#### Endpoint

```GET``` ```<domain>rest/V1/rest_dev/getProduct/<product_id>```

### Response

```json
{
    "id": 1,
    "sku": "24-MB01",
    "name": "Joust Duffle Bag",
    "description": "<p>The sporty Joust Duffle Bag can't be beat - not in the gym, not on the luggage carousel, not anywhere. Big enough to haul a basketball or soccer ball and some sneakers with plenty of room to spare, it's ideal for athletes with places to go.<p>\n<ul>\n<li>Dual top handles.</li>\n<li>Adjustable shoulder strap.</li>\n<li>Full-length zipper.</li>\n<li>L 29\" x W 13\" x H 11\".</li>\n</ul>"
}
```

The above endpoint is tested with Magento sample data for `product_id: 1` and the endpoint given as ```http://local.magentoee.com/rest/V1/rest_dev/getProduct/1```

### Example 2

#### Endpoint

```PUT``` ```<domain>/rest/V1/rest_dev/setDescription```

### Payload

```json
{
   "products":[
      {
         "id":2,
         "description":"Test description"
      }
   ]
}
```
### Response

`[]`

### Related Topic

*  [REST Tutorials]({{ page.baseurl }}/rest/tutorials/index.html)
