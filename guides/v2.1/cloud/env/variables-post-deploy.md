---
group: cloud
title: Post-deploy variables
version: 2.1
github_link: cloud/env/variables-post-deploy.md
functional_areas:
  - Cloud
  - Configuration
---
The following _post\_deploy_ variables control actions in the post-deploy phase and can inherit and override values from the [Global stage]({{ page.baseurl }}/cloud/env/variables-intro.html#global-variables).  Insert these variables in the `post-deploy` stage of the `.magento.env.yaml` file:

```yaml
stage:
  post-deploy:
    POST-DEPLOY_VARIABLE_NAME: value
```

For more information about customizing the build and deploy process:

-  [Manage build and deploy actions]({{ page.baseurl }}/cloud/project/magento-env-yaml.html)
-  [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)

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