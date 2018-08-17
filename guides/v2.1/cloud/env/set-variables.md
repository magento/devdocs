---
group: cloud
subgroup: 120_env
title: Example setting variables
menu_title: Example setting variables
menu_order: 15
menu_node:
version: 2.1
---

For security reasons, we strongly recommend you change the Magento Admin URI, administrator username, and the administrator's password. This makes it harder for someone else to log in to the Magento Admin and change settings.

Environment variables are inherited from the parent environment to child environments. You should make these changes in the `master` environment so all other environments start with the same values.

You can use the same tasks to change any variable discussed in the preceding section.

To get started, you need a branch to work in. For details, see

To change the Admin URI and administrator password:

1.  Set the variable values.

        magento-cloud variable:set <name> <value> -e <environment ID>
2.  To set the administrator's username to `meister_x2U8` in the `master` environment, enter:

        magento-cloud variable:set ADMIN_USERNAME meister_x2U8 -e master
3.  Wait for the project to redeploy.
4.  To set the administrator's password to `admin_A456`, enter:

        magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
5.  Wait while the project redeploys.
6.  To set the Admin URI to `magento_A8v10`, enter:

        magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
7.  Wait while the project redeploys.
8.  Log in to the Magento Admin using the values you just changed.

    The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. An example follows:

        Waiting for the activity ksvciptxnzfto (Bob Smith added variable ADMIN_URL):
            Building application 'mymagento' (runtime type: php:7.0, tree: 07263ba)
            Slug already built for this tree id, skipping.

        Re-deploying environment k4wtvm7zogr5s-master.
        Environment configuration:
            mymagento (type: php:7.0, size: S, disk: 2048)
            mysql (type: mysql:10.0, size: S, disk: 2048)
            redis (type: redis:3.0, size: S)
            solr (type: solr:4.10, size: S, disk: 1024)

        Environment routes:
            http://master-k4wtvm7zogr5s.us.magentosite.cloud/ is served by application `mymagento`
            https://master-k4wtvm7zogr5s.us.magentosite.cloud/ is served by application `mymagento`

    In this example, go to `http://master-k4wtvm7zogr5s.us.magentosite.cloud/magento_g8v10` and log in using the username `admin` and password `admin_A456`

Optional: You can also create an environment and list the environment variables.

    magento-cloud environment:branch <new branch name>

After the environment deploys, enter

  	magento-cloud variable:get -e <environment ID>

A sample result follows:

ID|Value|Inherited|JSON
---------|-----------|----------|--------
ADMIN_PASSWORD|admin_A456|Yes|No
ADMIN_USERNAME|meister_x2U8|Yes|No
ADMIN_URL|magento_A8v10|Yes|No
