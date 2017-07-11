---
layout: default
group: jsdg
subgroup: 1_Javascript
title: Frontend Product Repository
menu_title: Frontend Product Repository
menu_order: 10
version: 2.2
---

Sometimes it is important to render products on frontend without making additional requests to server.
It can be useful in mini-cart, in some-widgets (recently viewed and recently compared) and in checkout, during customizations.

So lets assume you need to retrieve product data anywhere on frontend. What you should do for this?

## Frontend data storage (Product Repository)

From the interface represented below, you can see that there is ability to get all products we have saved in data storage.
Data storage is high level interface of Javascript local storage. 
Data storage has 2 sections:

1) It is subsection of customer data (<a href="{{page.baseurl}}config-guide/cache/cache-priv-priv.html">Customer data (Public and private content)</a>), named 'product_data_storage'.
The main responsibility of this section is to get and to hold all products data, that come from server. It is useful, when 
you have the list of product ids on front and on backend, and you need to get products data by this ids from the backend. 
For example, if you need to get product data on front for "New products widget", you can pluginize or decorate <code>\Magento\Catalog\CustomerData\ProductsRenderInfoSection</code>

2) This section is just a cache. It saves all visited products by a customer, in order to reuse them in future.
It can be useful in rendering customer specific information, e.g. recently viewed products. This section is named 'product_data_storage',
and is situated in local storage root.

If you want to get data for your product ids, you need to initialize your own instance of data-storage and set ids on what 
you want to subscribe too.

   ``` javascript
/**
             * {Object} prototype - methods that will be added to all storage classes to prototype property.
             */
            prototype = {

                /**
                 * Sets data to storage
                 *
                 * @param {*} data
                 */
                set: function (data) {
                    ////Persisting data in data storage
                },

                /**
                 * Adds some data to current storage data
                 *
                 * @param {*} data
                 */
                add: function (data) {
                    ///Adding new data be merging existing and new one
                },

                /**
                 * Gets current storage data
                 *
                 * @returns {*} data
                 */
                get: function () {
                    //Retrieve current data
                },
                
                setIds: function(productIds) {
                    //set product ids
                },
                
                loadDataFromServer: function(currency, storeIds, ids) {
                    //
                }
            },
   ```

### Instantiating frontend product repository

You can instantiate repository with storage-service: <code>Magento_Catalog/js/product/storage/storage-service</code>, 
using code like this:

``` javascript
    /**
             * Initializes ids storage handler.
             *
             * @param {Object} idsStorage
             */
            idsStorageHandler: function (idsStorage) {
                this.productStorage = storage.createStorage(this.productStorageConfig);
                this.productStorage.data.subscribe(this.dataCollectionHandler.bind(this));
            },
   ```
   
Of course, also you can subscribe on any data mutation.   

### Reusing product repository

So the code of reusing product repository will looks like this:
``` javascript
    /**
             * Initializes ids storage handler.
             *
             * @param {Object} idsStorage
             */
            idsStorageHandler: function (idsStorage) {
                this.productStorage = storage.createStorage(this.productStorageConfig);
                this.productStorage.setIds(idsStorage.get());
                this.productStorage.data.subscribe(this.dataCollectionHandler.bind(this));
            },
            
            /**
             * Product storage data handler
             *  
             * @param {Object} data - The latest version of your ids
             */
            dataCollectionHandler: function (data) {
                data = this.filterData(data);// It is up to you
                this.processData(data);// how implement this functions
            },
   ```
   
### Getting product data from the server
   
Also you should be possible to fetch products data from server by IDs, aggregated on store front.
In this case you need to use <code>this.productDataStorage.loadDataFromServer(currency, storeId, ids)</code> method.
What you should know about fetching products data:

1) Products data has 3 dimensions: currency, scope (store or website) IDs and product IDs. 
As data came from the server with formatted prices, we should be able to refresh price data according to chosen currency.
The same for the store.
2) You can handle the data, came from server, only in one way - subscribing on product data storage mutation.
   
``` javascript
    /**
             * Initializes ids storage handler.
             *
             * @param {Object} idsStorage
             */
            idsStorageHandler: function (idsStorage, currency, storeId) {
                this.productStorage = storage.createStorage(this.productStorageConfig);
                this.productStorage.data.subscribe(this.dataCollectionHandler.bind(this));
                this.productStorage.loadDataFromServer(currency, storeId, idsStorage.get());
            },
   ```   
   
### Product Render Data Information Api

In order to get all information about the products, you can run next API method: 

```
GET    /V1/products-render-info
```

You should pass entity_id of the products as the parameter in searchCriteria.
You should receive such response as:

<img src="{{ site.baseurl }}common/images/product_render_request.png" alt="Response Result"/>

