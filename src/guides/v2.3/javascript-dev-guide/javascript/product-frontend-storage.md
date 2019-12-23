---
group: javascript-developer-guide
subgroup: 1_Javascript
title: Use the Frontend Product Repository
menu_title: Use the Frontend Product Repository
menu_order: 10
---

The frontend product repository is a storage service that uses the local cache to get product information without making additional requests to the server.
The product information it provides is useful for optimal mini-cart, widgets, and checkout customizations.

This article contains code samples for common tasks when working with the frontend product repository.

## The product data storage

The frontend product repository uses the `product_data_storage` section of the data storage cache as its data source.
This section is responsible for holding all product data that come from the server when a customer visits a product page.

## Instantiate the repository

The following code snippet uses the [`Magento_Catalog/js/product/storage/storage-service`][storage-service]{:target="_blank"} to initialize the repository when the data storage cache itself initializes:

```javascript
define([
    'Magento_Catalog/js/product/storage/storage-service'
]), function(storage){
    'use strict';

    return {

        ...

        identifiersConfig: {
            namespace: 'product_data_storage'
        },

        productStorageConfig: {
            namespace: 'product_data_storage',
            customerDataProvider: 'product_data_storage',
            className: 'DataStorage'
        },

        initIdsStorage: function(){
            storage.onStorageInit(this.identifiersConfig.namespace, this.idsStorageHandler.bind(this));
            return this;
        },

        idsStorageHandler: function(idsStorage){
            this.productStorage = storage.createStorage(this.productStorageConfig);
        },

        ...

    }

}
```

## Use the repository

Subscribe a callback function to the product repository data to work with the cached data from recent server requests.

```javascript

...

idsStorageHandler: function(idsStorage){
    this.productStorage = storage.createStorage(this.productStorageConfig);
    this.productStorage.data.subscribe(this.dataCollectionHandler.bind(this));
},

dataCollectionHandler: function(data){
    //Code to handle the data
},

...

```

## Get data from the server

Use the [`loadDataFromServer`][load-data-from-server]{:target="_blank"} method from the `data-storage` class to get product data from a list of IDs.

```javascript

...

idsStorageHandler: function(idsStorage, currency, storeId){
    this.productStorage = storage.createStorage(this.productStorageConfig);
    this.productStorage.data.subscribe(this.dataCollectionHandler.bind(this));
    this.productStorage.loadDataFromServer(currency, storeId, idsStorage.get());
},

...

```

| Parameter  | Description                                     |
| ---------- | ----------------------------------------------- |
| `currency` | The currency data to get for the product        |
| `store`    | The ID of the store associated with the product |
| `ids`      | An object that contains the list of IDs as keys |

In the preceding example the data is handled by the subscribed function `dataCollectionHandler`.

### Specify REST resource

Use the following REST endpoint to get product information:

`/V1/products-render-info`

For UI Components, add this information in the [`dataProvider`][datasource-component] entry inside your `etc/view/frontend/ui_component/<ui-component-name>.xml` file.

The following example is from the [recently-viewed widget][recently-viewed-widget]{:target="_blank"}:

```xml

<argument name="dataProvider" xsi:type="configurableObject">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="productStorageConfig" xsi:type="array">
                <item name="namespace" xsi:type="string">product_data_storage</item>
                <item name="className" xsi:type="string">DataStorage</item>
                <item name="updateRequestConfig" xsi:type="array">
                    <item name="url" xsi:type="serviceUrl" path="/products-render-info"/>
                </item>
            </item>
            <item name="identifiersConfig" xsi:type="array">
              <item name="namespace" xsi:type="string">recently_viewed_product</item>
            </item>
        </item>
    </argument>
</argument>

```

This sets the appropriate information inside the `updateRequestConfig` object in the product storage configuration(`productStorageConfig` in the example code).

The object structure for this REST response is represented by [`\Magento\Catalog\Api\Data\ProductRenderInterface`][product-render-interface]{:target="_blank"}:

{% collapsible Show Object Structure %}

```javascript
[
   item_id: {
        //@see: \Magento\Catalog\Api\Data\ProductRender\ButtonInterface
        'add_to_*_button': { //Any product button will be represented by this interface
            post_data: {...},
            required_options: boolean,
            url: string
        },
        //\Magento\Catalog\Api\Data\ProductRenderExtensionInterface
        'extension_attributes': {
            'review_html': '...'
        },
        //@see: \Magento\Catalog\Api\Data\ProductRender\ImageInterface[]
        'images': [
            {
                'url': '...',
                'code': '...',
                'height': ...,
                'width': ...,
                'resized_height': ...,
                ...
            }
        ],
        'is_salable': boolean,
        'name': '...',
        //@see: \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface
        'price_info': {
            //@see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface
            //All prices are kind of html with currency symbol and rounding rules
            'formatted_prices': {
                'final_price': ...,
                'max_price': ...,
                'max_regular_price': ...,
                'minimal_regular_price': ...,
                ...
            },
            'final_price': ...,
            'max_price': ...,
            'max_regular_price': ...,
            'minimal_regular_price': ...,
            ...
        },
        'url': '...',
        'type': '...', //enum: configurable, simple, virtual, etc
        'currency_code': '...', //e.g. USD
        'store_id': ... //integer
   }
]
```

{% endcollapsible %}

[datasource-component]: {{ page.baseurl }}/ui_comp_guide/concepts/ui_comp_data_source.html
[recently-viewed-widget]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/ui_component/widget_recently_viewed.xml
[product-render-interface]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Api/Data/ProductRenderInterface.php
[storage-service]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/web/js/product/storage/storage-service.js
[load-data-from-server]: {{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/view/frontend/web/js/product/storage/data-storage.js#L213
