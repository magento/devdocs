---
group: cloud-guide
title: Cloud deployment process
functional_areas:
  - Cloud
  - Deploy
  - SCD
---

The deployment process begins when you perform a merge, push, or synchronization of your environment, or when you trigger a [manual redeployment]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html#git-commands). The deployment process takes time, but there are ways to optimize deployment that depend on whether you are developing and testing or working with a live site. Most notably, you can control the [static content deployment]({{ site.baseurl }}/cloud/deploy/static-content-deployment.html).

There are three, distinct phases of the deployment process: build, deploy, and post-deploy. Each phase performs specific actions with limited resources:

## ![Build phase] Build phase

The _build_ phase assembles containers for the services defined in the configuration files, installs dependencies based on the `composer.lock` file, and runs the build hooks defined in the `.magento.app.yaml` file. Without the ability to connect to any services or access the database, the build phase depends on the resources limited to the environment.

## ![Deploy phase] Deploy phase

The _deploy_ phase places a temporary hold on incoming requests and transitions the site to [maintenance mode]({{site.baseurl}}/guides/v2.3/config-guide/bootstrap/magento-modes.html). The deploy phase uses the new containers and, after mounting the file system, opens network connections, activates the services defined in the `relationships` section of the `.magento.app.yaml` file, and runs the deploy hooks defined in the `.magento.app.yaml` file. Everything is _read only_, except for directories defined in the `.magento.app.yaml` file. By default, the [`mounts` property]({{ site.baseurl }}/cloud/project/magento-app-properties.html#mounts) includes the following directories:

-  `app/etc`—contains the `env.php` and `config.php` configuration files
-  `pub/media`—contains all media data, such as Magento products or categories
-  `pub/static`—contains generated static files
-  `var`—contains temporary files created during Magento runtime

All other directories have read-only permissions. The new site becomes active at the end of the deploy phase as it transitions out of maintenance mode and releases the temporary hold on incoming requests.

## ![Post-deploy phase] Post-deploy phase

The _post-deploy_ phase runs the post-deploy hooks defined in the `.magento.app.yaml` file. Performing any action on this phase can affect site performance; however, you can use the [WARM_UP_PAGES]({{ site.baseurl }}/cloud/env/variables-post-deploy.html#warm_up_pages) environment variable to populate the cache.

## ![Verify state] Verify configurations

You can test the optimal configuration for the state of your project by running the [Smart wizards]({{ site.baseurl }}/cloud/deploy/smart-wizards.html).

{% include cloud/note-ece-tools-custom-deployment.md %}

[Build phase]: {{site.baseurl}}/common/images/cloud/status-build.png
{:width="80px"}
[Deploy phase]: {{site.baseurl}}/common/images/cloud/status-deploy.png
{:width="80px"}
[Post-deploy phase]: {{site.baseurl}}/common/images/cloud/status-post-deploy.png
{:width="80px"}
[Verify state]: {{site.baseurl}}/common/images/cloud/status-verify.png
{:width="80px"}

[Scenario-based deployment]: {{site.baseurl}}/cloud/deploy/scenario-based-deployment.html