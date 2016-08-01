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
  - /guides/v2.0/cloud/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
---

## Set Magento Admin environment variables {#cloud-env-vars-magento-admin-tut}
For security reasons, we strongly recommend you change the Magento Admin URI, administrator user name, and the administrator's password. This makes it harder for someone else to log in to the Magento Admin and change settings.

Environment variables are inherited from the parent environment to child environments. You should make these changes in the `master` environment so all other environments start with the same values.

### Get started

{% collapsible To get started:}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Change the Admin URI, user name, and password
To change the Admin URI, user name, and administrator password:

1.  Set the variable values.

        magento-cloud variable:set <name> <value> -e <environment ID>
2.  To set the administrator's user name to `meister_x2U8` in the `master` environment, enter:

        magento-cloud variable:set ADMIN_USERNAME meister_x2U8 -e master
3.  Wait for the project to redeploy.
2.  To set the administrator's password to `admin_A456`, enter:

        magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
6.  Wait while the project redeploys.
7.  To set the Admin URI to `magento_A8v10`, enter:

        magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait while the project redeploys.
7.  Log in to the Magento Admin using the values you just changed.

    The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. An example follows:

        Waiting for the activity ksvciptnzxfto (Steve Johnson added variable ADMIN_URL):
            Building application 'mymagento' (runtime type: php:7.0, tree: 07263ba)
            Slug already built for this tree id, skipping.

        Re-deploying environment k4wtvm7ogzr5s-master.
        Environment configuration:
            mymagento (type: php:7.0, size: S, disk: 2048)
            mysql (type: mysql:10.0, size: S, disk: 2048)
            redis (type: redis:3.0, size: S)
            solr (type: solr:4.10, size: S, disk: 1024)

        Environment routes:
            http://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`
            https://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`

    In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_A8v10` and log in using the user name `meister_x2U8` and password `admin_A456`
8.  (Optional.) Create an environment for your development work and list the environment variables.

        magento-cloud environment:branch <new branch name>

    After the environment deploys, enter

    	magento-cloud variable:get -e <environment ID>

    A sample result follows:

    	+----------------+---------------+-----------+------+
        | ID             | Value         | Inherited | JSON |
        +----------------+---------------+-----------+------+
        | ADMIN_PASSWORD | admin_A456    | Yes       | No   |
        | ADMIN_URL      | magento_A8v10 | Yes       | No   |
        | ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
        +----------------+---------------+-----------+------+


#### Next steps
*   [Manage your environments]({{ page.baseurl }}cloud/env/environments.html)
*   [Use the Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html)
*   Configure your project:

    *   [`.magento.app.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)
    *   [`routes.yaml`]({{ page.baseurl}}cloud/project/project-conf-files_routes.html)
    *   [`services.yaml`]({{ page.baseurl }}cloud/project/project-conf-files_services.html)

