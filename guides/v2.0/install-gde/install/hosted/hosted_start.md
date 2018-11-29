---
group: installation-guide
subgroup: 02_config-hosted
title: Configure your hosted system
menu_title: Configure your hosted system
menu_order: 1
menu_node: parent
functional_areas:
  - Install
  - System
  - Setup
---

## Hosted installation

Before you can install the Magento software, you must get your hosted system ready.  

If your hosted system is already set up, go to [Get the Magento software packages]({{ page.baseurl }}/install-gde/install/hosted/hosted_get-ftp.html#get-archive).

#### Contents

*	[Verify the software on your system](#newbie-verify)
<!-- *	[Start the cPanel configuration utility](#newbie-cpanel) -->
*	[Configure a database and a database user]({{ page.baseurl }}/install-gde/install/hosted/hosted_start_db.html)
*	[Configure PHP]({{ page.baseurl }}/install-gde/install/hosted/hosted_start_php.html)
*	[Transfer the Magento software to your hosted system]({{ page.baseurl }}/install-gde/install/hosted/hosted_get-ftp.html)
*	[Install the Magento software]({{ page.baseurl }}/install-gde/install/hosted/hosted_install.html)

## Verify the software on your system   {#newbie-verify}

Magento requires the following software to run:

*	Web server: Apache 2.2 or 2.4
*	Programming language: {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} 5.6.x or 5.5.x 
*	Database: MySQL 5.6.x

{: .bs-callout .bs-callout-info }
We recommend you contact your shared hosting provider's technical support to verify all of the preceding are installed and get their assistance if any of the software is not installed.

For complete details, see [System requirements]({{ page.baseurl }}/install-gde/system-requirements.html).

#### Next step

[Configure a database and a database user]({{ page.baseurl }}/install-gde/install/hosted/hosted_start_db.html)

<!-- <h2 id=\"newbie-cpanel\">Start the cPanel configuration utility</h2>

To start configuring your hosted system:

1.	Log in with your provided credentials.
2.	On the first page, in the Web Hosting row, click **Manage**.
3.	If necessary, log in to cPanel.
 -->

