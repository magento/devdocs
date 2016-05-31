---
layout: default
group: cloud
subgroup: 10_howto
title: Tutorial&mdash;Set Magento environment variables
menu_title: Tutorial&mdash;Set Magento environment variables
menu_order: 6
menu_node: 
level3_menu_node: level3child
level3_subgroup: env-tut
github_link: cloud/howtos/environment-tutorial-set-mage-vars.md
redirect_from: guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
---

## Tutorial: change the Magento Admin URI and password {#cloud-env-vars-magento-admin-tut}
For security reasons, we strongly recommend you change the Magento Admin URI and the administrator's password. This makes it harder for someone else to log in to the Magento Admin and change settings.

Environment variables are inherited from the parent environment to child environments. You should make these changes in the `master` environment so all other environments start with the same values.

You can use the same tasks to change any variable discussed in the preceding section.

To get started:

{% include cloud/cli-get-started.md %}

To change the Admin URI and administrator password:

1.  Set the variable values.

        magento-cloud variable:set <name> <value> -e <environment ID>

9.  For example, to set the administrator's password to `admin_A456` in an environment with ID `admin`, enter:

        magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e admin
6.  Wait while the project redeploys.
7.  Set the Admin URI to `magento_A8v10`, enter:

        magento-cloud variable:set ADMIN_URL magento_A8v10 -e admin
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

    In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_g8v10` and log in using the user name `admin` and password `admin_A456`
8.  (Optional.) Create an environment and list the environment variables.

        magento-cloud environment:branch <new branch name>

    After the environment deploys, enter

    	magento-cloud variable:get -e <environment ID>

    A sample result follows:

    	+----------------+---------------+-----------+------+
		| ID             | Value         | Inherited | JSON |
		+----------------+---------------+-----------+------+
		| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
		| ADMIN_URL      | magento_A8v10 | Yes       | No   |
		+----------------+---------------+-----------+------+

#### Related topic
[Tutorial&mdash;Merge an environment]({{ site.gdeurl }}cloud/env/environment-tutorial-env-merge.html)