---
layout: default
group: cloud
subgroup: 04_setup
title: Set Magento Admin environment variables
menu_title: Set Magento Admin environment variables
menu_order: 11
menu_node: 
version: 2.0
github_link: cloud/access-acct/admin-env-vars.md
redirect_from: 
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
---


## Set Magento Admin environment variables {#cloud-env-vars}
We strongly recommend you change the Magento Admin URI, administrator user name, and the administrator's password. This makes it harder for someone else to log in to the Magento Admin and change settings.

Environment variables are inherited from the parent environment to child environments. You should make these changes in the `master` environment so all other environments start with the same values.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}


#### Next step
*   [Set up Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html)

