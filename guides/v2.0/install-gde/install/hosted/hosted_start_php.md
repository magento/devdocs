---
layout: default
group: install_hosted
subgroup: 02_config-hosted
title: Configure PHP
menu_title: Configure PHP
menu_order: 3
menu_node: 
version: 2.0
github_link: install-gde/install/hosted/hosted_start_php.md
---

<h2 id="newbie-db">Configure PHP</h2>
<a href="http://php.net/manual/en/faq.general.php" target="_blank">PHP Hypertext Preprocessor (PHP)</a> is a scripting language that Magento is authored in. Magento requires PHP version 5.5 or 5.6 to run.

To configure PHP:

1.	If necessary, start the cPanel and click **Home** to return to the home page.
2.	In the Software section, click **Select PHP Version**.

	<img src="{{ site.baseurl }}common/images/install-merch_php.png" width="550px" alt="Start out configuring PHP">

3.	From the **PHP Version** list at the top of the page, click either **5.5** or **5.6**.

4.	Click **Set as current**.

	The check boxes following the PHP version are referred to as *PHP extensions*. 

4.	Select all of the following check boxes: **gd**, **intl**, **mbstring**, **mcrypt**, **opcache**, **pdo**, **pdo_mysql**, and **xsl**.

	You can optionally select other PHP extensions if you want.

	<img src="{{ site.baseurl }}common/images/install-merch_php-ext.png" width="750px" alt="Select PHP extensions">

5.	Click **Save**.

#### Next step
<a href="{{ site.gdeurl }}install-gde/install/hosted/hosted_get-ftp.html">Transfer the Magento software to your hosted system</a>
