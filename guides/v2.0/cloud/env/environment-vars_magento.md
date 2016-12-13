---
layout: default
group: cloud
subgroup: 12_env
title: Magento application environment variables
menu_title: Magento application environment variables
menu_order: 80 
menu_node: 
level3_menu_node: level3child
level3_subgroup: vars
version: 2.0
github_link: cloud/env/environment-vars_magento.md
---

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
    <tr><td>ADMIN_LOCALE</td>
    <td>Specifies the default locale used by the Magento Admin.</td>
    <td>en_US</td>
    </tr>
    <tr><td>APPLICATION_MODE</td>
    <td><p>Determines whether or not Magento operates in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a> or in <a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>. During development, we recommend the default setting.</p>
        <p>For production, set to <code>MAGENTO_PRODUCTION_MODE</code>.</p></td>
    <td>MAGENTO_DEVELOPER_MODE</td>
    </tr>
    <tr><td>CLEAN_STATIC_FILES</td>
    <td><p>The default value, <code>true</code>, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a> when you perform an action like enabling or disabling a component. We recommend the default value in development.</p>
    <p>Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. </p>
    <p>In other words, because of <a href="{{page.baseurl}}architecture/view/static-process.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named <code>logo.gif</code> that are different, fallback might cause the wrong file to display.</p></td>
    <td>true</td>
    </tr>
    <tr><td>UPDATE_URLS</td>
    <td><p>On deployment, replace Magento base URLs in the database with project URLs. This is useful for local development, where base URLs are set up for your local environment. When you deploy to a Cloud environment, we change the URLs so you can access your storefront and Magento Admin using project URLs.</p>
        <p>You should set this variable to <code>disabled</code> <em>only</em> in staging or production, where the base URLs can't change.</p></td>
    <td>enabled</td>
    </tr>
</tbody>
</table>

<!-- <tr><td>RECOMPILE_DI</td>
    <td>The default value, <code>true</code>, enables <a href="{{ page.baseurl }}config-guide/cli/config-cli-subcommands-compiler.html">code compilation</a>. We recommend the default value in development.</td>
    <td>true</td>
    </tr> -->


For an example, see [Step 2: Change the Admin URI, user name, and password in the master branch]({{page.baseurl}}cloud/access-acct/set-up-env.html#setup-env-adminurl).

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
