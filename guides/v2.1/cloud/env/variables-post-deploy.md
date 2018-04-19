---
layout: default
group: cloud
title: Post-deploy variables
version: 2.1
github_link: cloud/env/variables-post-deploy.md
functional_areas:
  - Cloud
  - Configuration
---
The following _post\_deploy_ variables control actions in the post-deploy phase and can inherit and override values from the [Global stage]({{page.baseurl}}/cloud/env/variables-intro.html#global-variables). See [Manage build and deploy actions](http://devdocs.magento.com/guides/v2.1/cloud/project/magento-env-yaml.html) for more information about using these options in the `.magento.env.yaml` file.
For information on the build and deploy process, see [Deployment process]({{page.baseurl}}/cloud/reference/discover-deploy.html).

### `WARM_UP_PAGES`

-  **Default**— `index.php`
-  **Version**—Magento 2.1.4 and later

Customize the list of pages used to preload the cache in the `post_deploy` stage.

```
stage:
  post-deploy: 
    WARM_UP_PAGES:
       - "index.php"
       - "index.php/customer/account/create"
```