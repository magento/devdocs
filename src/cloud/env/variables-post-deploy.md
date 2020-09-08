---
group: cloud-guide
title: Post-deploy variables
functional_areas:
  - Cloud
  - Configuration
---
The following _post\_deploy_ variables control actions in the post-deploy phase and can inherit and override values from the [Global variables]({{ site.baseurl }}/cloud/env/variables-global.html). Insert these variables in the `post-deploy` stage of the `.magento.env.yaml` file:

```yaml
stage:
  post-deploy:
    POST-DEPLOY_VARIABLE_NAME: value
```

{% include cloud/customize-build-deploy.md %}

### `TTFB_TESTED_PAGES`

-  **Default**— `[]` (an empty array)
-  **Version**—Magento 2.1.4 and later

Configure _Time To First Byte_ (TTFB) testing for specified pages to test your {{ site.data.var.ece }} site performance. Specify an absolute path reference, or URL with protocol and host, for each page that requires the test.

```yaml
stage:
  post-deploy:
    TTFB_TESTED_PAGES:
       - "index.php"
       - "index.php/customer/account/create"
       - "https://example.com/catalog/some-category"
```

After you specify the pages to test and commit your changes, the _Time To First Byte_ test runs during the post-deploy phase and posts results for each path to the cloud log:

```terminal
[2019-06-20 20:42:22] INFO: TTFB test result: 0.313s {"url":"https://staging-tkyicst-xkmwgjkwmwfuk.us-4.magentosite.cloud/customer/account/create","status":200}
[2019-06-20 20:42:22] INFO: TTFB test result: 0.408s {"url":"https://staging-tkyicst-xkmwgjkwmwfuk.us-4.magentosite.cloud/checkout/cart","status":200}
```
{:.no-copy}

For redirected paths, the log reports the path of the redirect target instead of the one configured in the environment variable. If you specify an invalid path, the log displays a warning message.

### `WARM_UP_CONCURRENCY`

-  **Default**—_Not set_
-  **Version**—Magento 2.1.4 and later

Specify the number of concurrent requests to send during cache warmup operations to reduce server load. This value limits the number of parallel connections and is useful for environment configurations where the `WARM_UP_PAGES` post-deploy variable specifies a large number of pages for cache preloading.

```yaml
stage:
  post-deploy:
    WARM_UP_CONCURRENCY: 4
```

### `WARM_UP_PAGES`

-  **Default**— `index.php`
-  **Version**—Magento 2.1.4 and later

Customize the list of pages used to preload the cache in the `post_deploy` stage. You must configure the post-deploy hook. See the [hooks section][] of the `.magento.app.yaml` file.

-  **single pages**—Specify a single page to add to the cache. You do not have to indicate the default base URL. The following example caches the `BASE_URL/index.php` page:

   ```yaml
   stage:
     post-deploy:
       WARM_UP_PAGES:
         - "index.php"
   ```

-  **multiple domains**—List multiple URLs. The following example caches pages from two domains:

   ```yaml
   stage:
     post-deploy:
       WARM_UP_PAGES:
         - 'http://example1.com/test'
         - 'http://example2.com/test'
   ```

-  **multiple pages**—Use the following format to cache multiple pages according to a specific regular expression pattern:

   ```terminal
   <entity_type>:<pattern|url|product_sku>:<store_id|store_code>
   ```

   -  `entity_type`: Possible variants `category`, `cms-page`, `product`, `store-page`
   -  `pattern|url|product_sku`: Use a `regexp` pattern or an exact match `url` to filter the URLs, or use an asterisk (\*) for all pages. Use product sku for the `product` entity type
   -  `store_id|store_code`: Use the ID or Code of the store or an asterisk (\*) for all stores, you can pass several store IDs or codes separated with `|`

   The following example caches for `category` and `cms-page` entity types based on these criteria:
   -  all category pages for store with ID `1`
   -  all category pages for stores with code `store1` and `store2`
   -  category page `cars` for store with code `store_en`
   -  cms page `contact` for all stores
   -  cms page `contact` for stores with ID `1` and `2`
   -  any category page that contains `car_` and ends with `html` for store with ID 2
   -  any category page that contains `tires_` for store with code `store_gb`

      ```yaml
      stage:
        post-deploy:
          WARM_UP_PAGES:
            - "category:*:1"
            - "category:*:store1|store2"
            - "category:cars:store_en"
            - "cms-page:contact:*"
            - "cms-page:contact:1|2"
            - "category:|car_.*?\\.html$|:2"
            - "category:|tires_.*|:store_gb"
      ```

   The following example caches for the `product` entity type based on these criteria:
   -  all products for all store (programmatically limited to 100 per store to avoid performance issues)
   -  all products for store `store1`
   -  products with `sku1` for all stores
   -  products with `sku1` for stores with code `store1` and `store2`
   -  products with `sku1`, `sku2` and `sku3` for stores with code `store1` and `store2`

      ```yaml
      stage:
        post-deploy:
          WARM_UP_PAGES:
            - "product:*:*"
            - "product:*:store1"
            - "product:sku1:*"
            - "product:sku1:store1|store2"
            - "product:sku1|sku2|sku3:store1|store2"
      ```

   The following example caches for the `store-page` entity type based on these criteria:
   -  page `/contact-us` for all stores
   -  page `/contact-us` for store with ID `1`
   -  page `/contact-us` for stores with code `code1` and `code2`

   ```yaml
         stage:
           post-deploy:
             WARM_UP_PAGES:
               - "store-page:/contact-us:*"
               - "store-page:/contact-us:1"
               - "store-page:/contact-us:code1|code2"
   ```

[hooks section]: {{site.baseurl}}/cloud/project/magento-app-properties.html#hooks
[CMS]: https://glossary.magento.com/cms/
[Content elements]: https://docs.magento.com/m2/ce/user_guide/cms/content-elements.html
