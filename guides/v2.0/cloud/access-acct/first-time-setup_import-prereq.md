---
layout: default
group: cloud
subgroup: 080_setup
title: Find the information you need for your import
menu_title: Find the information you need for your import
menu_order: 152
menu_node: 
level3_menu_node: level3child
level3_subgroup: import
version: 2.0
github_link: cloud/access-acct/first-time-setup_import-prereq.md
---
 
This topic discusses how to find the information necessary to import Magento EE into Magento Enterprise Cloud Edition. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You must enter all Magento Enterprise Cloud Edition commands on the machine on which your Cloud SSH keys are stored. For more information, see [Step 4, Enable Secure Shell (SSH)]({{ page.baseurl }}cloud/before/before-workspace-ssh.html).
</div>

## Cloud SSH URL {#cloud-import-pre-sshurl}
To transfer the database dump and files to Magento Enterprise Cloud Edition, you must know its SSH {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

You can find it using:

*   The command line:

        magento-cloud environment:ssh --pipe

*   The project [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html).

## Magento EE database login information {#cloud-import-pre-eedb}
You must know the name of the Magento EE database as well as the database user's user name and password.

## Cloud database login information {#cloud-import-pre-cloudb}
To import the Magento EE database dump into Magento Enterprise Cloud Edition, you must know the Cloud database login information.

The name of the database can be found in the `$MAGENTO_CLOUD_RELATIONSHIPS` environment variable. Display the variable with the following command. The database name is stored under `databases->path`. The password is found under `databases->password`.

To find database access information:

1.  SSH to your integration system:

        magento-cloud environment:ssh
3.  At the command prompt, enter the following command:

        echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp

The database connection information is displayed:

<pre class="no-copy">database" : [
      {
         "username" : "user",
         "query" : {
            "is_master" : true
         },
         "path" : "main",
         "port" : 3306,
         "host" : "database.internal",
         "password" : "",
         "scheme" : "mysql",
         "ip" : "192.0.2.150"
      }
   ]</pre>

In the preceding example, the database name is `main`, its listen port is `3306`, its host name is `database.internal`, its root user name is `user` and the user has no password.

## Cloud integration system's unsecure base URL {#cloud-import-pre-baseurl}
After you import the Magento EE database into Magento Enterprise Cloud Edition, you must change the base URL so you can access the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

You can find it using:

*   The command line:

        magento-cloud url

*   The project [Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html).

#### Next step
[Prepare your existing Magento EE system]({{ page.baseurl }}cloud/access-acct/first-time-setup_import-prepare.html)