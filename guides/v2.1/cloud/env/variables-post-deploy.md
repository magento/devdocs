---
group: cloud-guide
title: Post-deploy variables
functional_areas:
  - Cloud
  - Configuration
---
The following _post\_deploy_ variables control actions in the post-deploy phase and can inherit and override values from the [Global variables]({{ page.baseurl }}/cloud/env/variables-global.html). Insert these variables in the `post-deploy` stage of the `.magento.env.yaml` file:

```yaml
stage:
  post-deploy:
    POST-DEPLOY_VARIABLE_NAME: value
```

{% include cloud/customize-build-deploy.md %}

### `WARM_UP_PAGES`

-  **Default**— `index.php`
-  **Version**—Magento 2.1.4 and later

Customize the list of pages used to preload the cache in the `post_deploy` stage. You must configure the post-deploy hook. See the [hooks section][] of the `.magento.app.yaml` file.

-   **single pages**—Specify a single page to add to the cache. You do not have to indicate the default base URL. The following example caches the `BASE_URL/index.php` page:

    ```yaml
    stage:
      post-deploy: 
        WARM_UP_PAGES:
          - "index.php"
    ```

-   **multiple domains**—List multiple URLs. The following example caches pages from two domains:

    ```yaml
    stage:
      post-deploy:
        WARM_UP_PAGES:
          - 'http://example1.com/test'
          - 'http://example2.com/test'
    ```

-   **multiple pages**—Use the following format to cache multiple pages according to a specific regular expression pattern:

    ```terminal
    <entity_type>:<store_id>:<pattern>
    ```

    -  `entity_type`: Choose `category` or `cms-page`
    -  `store_id`: Use the ID of the store or an asterisk (\*) for all stores
    -  `pattern`: Use a `regexp` pattern to filter the URLs or an asterisk (\*) for all pages 

    The following example caches all category pages for store 1, any category pages that begin with `car_` and do not end with `html` for store 2, any category pages that begin with `tires_` for store 3, and all `cms` pages:

    ```yaml
    stage:
      post-deploy: 
        WARM_UP_PAGES:
          - "category:1:*"
          - "category:2:|car_.*?\.html|"
          - "category:3:|tires_.*|"
          - cms-page:*:*
    ```

[hooks section]: {{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#hooks
[CMS]: https://glossary.magento.com/cms/
[Content elements]: https://docs.magento.com/m2/ce/user_guide/cms/content-elements.html