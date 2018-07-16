---
group: cloud
title: Build and deploy
version: 2.1
github_link: cloud/project/magento-env-yaml.md
functional_areas:
  - Cloud
  - Configuration
---

The `.magento.env.yaml` file centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables. 

Unlike other YAML configuration files, such as [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html), [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html), and [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html), you can use the `.magento.env.yaml` file to manage configuration settings without opening a support ticket.

{% include note.html type="info" content="If you want to configure unique actions in each environment, you must modify this file in each environment branch."%}

The `.magento.env.yaml` file includes the following sections:

-   **`stage`**—Accommodates the following stages of deployment:
    -   `global`—Controls actions in both the build, deploy, and post-deploy phases. You can override these settings in the build, deploy, and post-deploy sections.
    -   `build`—Controls actions in the build phase only. If you do not specify settings in this section, the build phase uses settings from the global section. Settings in the `build_options.ini` file override settings in this section.
    -   `deploy`—Controls actions in the deploy phase only. If you do not specify settings in this section, the deploy phase uses settings from the global section.
    -   `post-deploy`—Controls actions _after_ deploying your application and _after_ the container begins accepting connections.
-   **`log`**—Controls notifications, including notification types and level of detail.
    -   `slack`—Configure a message to send to a Slack bot.
    -   `email`—Configure an email to send to one or more email recipients.
    -  [logging handlers]({{ page.baseurl }}/cloud/env/log-handlers.html)—Configure hardware and software application messages sent to a remote logging server.

The latest sample of the `.magento.env.yaml` file is in the [`magento-cloud` template repository](https://github.com/magento/magento-cloud/blob/master/.magento.env.yaml){:target="\_blank"}. You can find a detailed definition for each variable in the following reference topics:

-   [Application]({{ page.baseurl }}/cloud/env/environment-vars_magento.html)—variables control administrative credentials
-   [Cloud]({{ page.baseurl }}/cloud/env/variables-cloud.html)—variables specific to {{site.data.var.ece}}
-   [Global]({{ page.baseurl }}/cloud/env/variables-intro.html)—variables control actions in the following stages:
    -   [Build]({{ page.baseurl }}/cloud/env/variables-build.html)—variables control build actions
    -   [Deploy]({{ page.baseurl }}/cloud/env/variables-deploy.html)—variables control deploy actions
    -   [Post-deploy]({{ page.baseurl }}/cloud/env/variables-post-deploy.html)—variables control actions after deploy