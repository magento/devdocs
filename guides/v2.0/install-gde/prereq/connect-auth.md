---
layout: default
group: install_pre
subgroup: Prerequisites
title: Get your authentication tokens
menu_title: Get your authentication tokens
menu_order: 12
menu_node: 
github_link: install-gde/prereq/connect-auth.md
---

#### Contents

*	<a href="#auth-overview">Overview of Magento Connect authentication</a>
*	<a href="#auth-get">Get your authentication tokens</a>

<h2 id="auth-overview">Overview of Magento Connect authentication</h2>
The <a href="https://repo.magento.com">repo.magento.com</a> repository, where Magento 2 and third-party component Composer packages are stored, requires authentication. To provide secure authentication, we enable to to generate a pair 32-character *authentication tokens* you can use to access the repository.

You get your credentials by logging in to <a href="http://www.magentocommerce.com/magento-connect" target="_blank">Magento Connect</a> with a user name and password, then going to TBD > TBD. There, you can generate, regenerate, or delete your authentication tokens to use to:

*	Download the Magento software using Composer
*	Install, update, or upgrade third-party components; and upgrade the Magento software using the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade</a> utilities.

<h2 id="auth-get">Get your authentication tokens</h2>
To get your authentication tokens:

1.	If you haven't done so already, create an account on <a href="http://www.magentocommerce.com/magento-connect">Magento Connect</a>.

	(It's the same as an account on `magento.com`.)

	*	Click **My Account** in the upper right corner of the page.
	*	In the New Customer section, click **Register**.

		If you already have an account, make sure you know your user name and password, then continue with the next step.

2.	In the left pane, expand **Developers** as the following figure shows.

	<img src="{{ site.baseurl }}common/images/connect_keys1.png">

3.	Click **Developers** > **Keys TBD**.
4.	You have the following options in the right pane:

	*	option
	*	option
	*	option

5.	Copy keys / write them down TBD



#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Determine your installation or upgrade path</a>

