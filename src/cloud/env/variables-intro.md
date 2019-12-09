---
group: cloud-guide
title: Environment variables
functional_areas:
  - Cloud
  - Configuration
---

{{site.data.var.ece}} enables you to assign environment variables to override configuration options:

-  [ADMIN]({{ site.baseurl }}/cloud/env/environment-vars_magento.html)—variables override project ADMIN variables
-  [Global]({{ site.baseurl }}/cloud/env/variables-global.html)—variables affect each stage
-  [Build]({{ site.baseurl }}/cloud/env/variables-build.html)—variables control build actions
-  [Cloud]({{ site.baseurl }}/cloud/env/variables-cloud.html)—variables specific to {{site.data.var.ece}}
-  [Deploy]({{ site.baseurl }}/cloud/env/variables-deploy.html)—variables control deploy actions
-  [Post-deploy]({{ site.baseurl }}/cloud/env/variables-post-deploy.html)—variables control actions after deploy

Variables are _hierarchical_, which means that if a variable is not overridden, it is inherited from the parent environment.

You can set [ADMIN variables]({{ site.baseurl }}/cloud/env/environment-vars_magento.html) from the Project Web interface or using the Magento CLI. You can manage other environment variables from the [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html) file to manage build and deploy actions across all of your environments—including Pro Staging and Production—without requiring a support ticket.