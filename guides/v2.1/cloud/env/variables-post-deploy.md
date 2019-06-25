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

Customize the list of pages used to preload the cache in the `post_deploy` stage.

```yaml
stage:
  post-deploy: 
    WARM_UP_PAGES:
      - "index.php"
      - "index.php/customer/account/create"
```

You must configure the post-deploy hook. See [hooks section of the `.magento.app.yaml` file]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#hooks).

Also, you can configure the cache to preload pages for [multiple domains]({{ page.baseurl }}/cloud/project/project-multi-sites.html).

```yaml
stage:
  post-deploy:
    WARM_UP_PAGES:
      - 'test'
      - 'http://example1.com/test'
      - 'http://example2.com/test'
```