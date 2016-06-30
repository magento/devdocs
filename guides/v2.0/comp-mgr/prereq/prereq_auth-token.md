---
layout: default
group: compman
subgroup: 02_prereq
title: Enter your authentication keys in the Admin
menu_title: Enter your authentication keys in the Admin
menu_order: 2
menu_node: 
version: 2.0
github_link: comp-mgr/prereq/prereq_auth-token.md
---

#### Contents

*	<a href="#auth-overview">Overview of Magento Marketplace authentication</a>
*	<a href="#auth-get">Get your authentication tokens</a>
*	<a href="#compman-token-admin">Enter the tokens in the Admin</a>

{% include install/auth-tokens.md %}

<div class="bs-callout bs-callout-info" id="info">
	<p>To upgrade your Magento Enterprise Edition (EE) version or to upgrade from Magento Community Edition (CE) to Magento EE, you must be authorized for Magento EE. Contact <a href="http://support.magentocommerce.com" target="_blank">Magento Support</a> if you have questions.</p>
</div>

<h2 id="compman-token-admin">Enter the tokens in the Admin</h2>
To enter your authentication tokens:

1.	Log in to the Magento Admin as an administrator.
2.	Click **System** > Tools > **Web Setup Wizard**.
3.	Click **System Configuration**.

	<img src="{{ site.baseurl }}common/images/cman_system-config.png" width="550px">

4.	Enter your public and private authentication keys in the provided fields.
5.	Click **Save Config**.

	<img src="{{ site.baseurl }}common/images/cman_keys.png" width="550px">
