---
group: cloud-guide
title: Optimize cloud deployment
functional_areas:
  - Cloud
  - Configuration
  - Deploy
  - SCD
---

The deployment process begins when you perform a merge, push, or synchronization of your environment, or when you trigger a [manual redeployment]({{page.baseurl}}/cloud/reference/cli-ref-topic.html#git-commands). The deployment process takes time, but there are ways to optimize deployment that depend on whether you are developing and testing or working with a live site. Most notably, you can control the [static content deployment]({{page.baseurl}}/cloud/deploy/static-content-deployment.html).

There are three, distinct phases of the deployment process: build, deploy, and post-deploy. Each phase performs specific actions with limited resources:

## ![Build phase] Build phase

The _build_ phase assembles containers for the services defined in the configuration files, updates the `composer.lock` file accordingly, and runs the build hooks defined in the `.magento.app.yaml` file. Without the ability to connect to any services or access the database, the build phase is entirely environment dependent.

## ![Deploy phase] Deploy phase

The _deploy_ phase places a temporary hold on incoming requests and brings the site down. The deploy phase uses the new containers and, after mounting the file system, opens network connections, activates the services defined in the `relationships` section of the `.magento.app.yaml` file, and runs the deploy hooks defined in the `.magento.app.yaml` file. Everything is _read only_, accept for the following directories:

-  `app/etc`—contains the `env.php` and `config.php` configuration files
-  `pub/media`—contains all media data, such as Magento products or categories
-  `pub/static`—contains generated static files
-  `var`—contains temporary files created during Magento runtime

All other directories have read-only permissions. The new site becomes active and releases the temporary hold on incoming requests.

## ![Post-deploy phase] Post-deploy phase

The _post-deploy_ phase runs the post-deploy hooks defined in the `.magento.app.yaml` file. The site is live, so performing any action on this phase can dramatically affect site performance.

## ![Verify state] Verify configurations

You can test the optimal state of your project by running the [Smart wizards]({{page.baseurl}}/cloud/env/smart-wizards.html).

[Build phase]: {{site.baseurl}}/common/images/cloud/status-build.png
{: width="80px"}
[Deploy phase]: {{site.baseurl}}/common/images/cloud/status-deploy.png
{: width="80px"}
[Post-deploy phase]: {{site.baseurl}}/common/images/cloud/status-post-deploy.png
{: width="80px"}
[Verify state]: {{site.baseurl}}/common/images/cloud/status-verify.png
{: width="80px"}