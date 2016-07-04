---
layout: default
group: cloud
subgroup: 08_env
title: Magento application environment variables
menu_title: Magento application environment variables
menu_order: 80 
menu_node: 
level3_menu_node: level3child
level3_subgroup: vars
version: 2.0
github_link: cloud/env/environment-vars_magento.md
---

#### Contents
*   [Magento application environment variables](#cloud-env-vars-magento) 
*   [Troubleshooting](#cloud-env-vars-tshoot)
*   [Tutorial&mdash;Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html) 

## Magento application environment variables {#cloud-env-vars-magento}
<!-- The Magento application enables you to customize the values of many settings, including payment processors, shipping methods, and so on.
 -->
The following table lists variables that you can override using environment variables.  

<table>
    <tbody>
        <tr>
            <th>Variable name</th>
            <th>Description</th>
            <th>Default value</th>
        </tr>
    <tr>
        <td>ADMIN_USERNAME</td>
        <td>User name for a Magento administrative user. This user is an administrator and can create other users, including other administrative users.</td>
        <td>admin</td>
    </tr>
    <tr><td>ADMIN_FIRSTNAME</td>
    <td>Administrative user's first name.</td>
    <td>John</td>
    </tr>
    <tr><td>ADMIN_LASTNAME</td>
    <td>Administrative user's last name.</td>
    <td>Doe</td>
    </tr>
    <tr><td>ADMIN_EMAIL</td>
    <td>Administrative user's e-mail address.</td>
    <td>john@example.com</td>
    </tr>
    <tr><td>ADMIN_PASSWORD</td>
    <td>Administrative user's password.</td>
    <td>admin12</td>
    </tr>
    <tr><td>ADMIN_URL</td>
    <td>Enter the relative URL by which to access the Magento Admin. For security reasons, we recommend you choose a value other than <code>admin</code> or <code>backend</code> or another term that is easy to guess.</td>
    <td>admin</td>
    </tr>
    <tr><td>APPLICATION_MODE</td>
    <td>Determines whether or not Magento operates in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a> or in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>. During development, we recommend the default setting.</td>
    <td>MAGENTO_DEVELOPER_MODE</td>
    </tr>
</tbody>
</table>

For an example, see [Tutorial&mdash;Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html).

## Troubleshooting {#cloud-env-vars-tshoot}
In the event something goes wrong and you can't access your environment after it deploys, try the following:

*   [SSH to the environment]({{page.baseurl}}cloud/env/environments-start.html#env-start-tunn) and make sure [services]({{page.baseurl}}cloud/env/environments-start.html#cloud-ssh-tunnel-service) are running.
*   Restore your snapshot: 

        magento-cloud snapshot:list
        magento-cloud snapshot:restore <snapshot>

#### Related topics
*   [Tutorial&mdash;Set Magento environment variables]({{page.baseurl}}cloud/howtos/environment-tutorial-set-mage-vars.html) 
*   [Magento Cloud environment variables]({{page.baseurl}}cloud/env/environment-vars_cloud.html)
*   [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*   [`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
*   [`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
