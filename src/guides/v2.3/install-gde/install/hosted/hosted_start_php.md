---
group: installation-guide
subgroup: 02_config-hosted
title: Configure PHP
menu_title: Configure PHP
menu_order: 3
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

[PHP Hypertext Preprocessor (PHP)](http://php.net/manual/en/faq.general.php){:target="_blank"} is a scripting language that Magento is authored in. Magento requires [PHP](https://glossary.magento.com/php) version 5.5 or 5.6 to run.

To configure PHP:

1. If necessary, start the cPanel and click **Home** to return to the [home page](https://glossary.magento.com/home-page).
1. In the Software section, click **Select PHP Version**.

   ![Start out configuring PHP]({{ site.baseurl }}/common/images/install-merch_php.png){:width="550px"}

1. From the **PHP Version** list at the top of the page, click either **5.5** or **5.6**.

1. Click **Set as current**.

   The checkboxes following the PHP version are referred to as *PHP extensions*.

1. Select all of the following checkboxes: **gd**, **intl**, **mbstring**, **mcrypt**, **opcache**, **pdo**, **pdo_mysql**, and **xsl**.

   You can optionally select other PHP extensions if you want.

   ![Select PHP extensions]({{ site.baseurl }}/common/images/install-merch_php-ext.png){:width="750px"}

1. Click **Save**.

{:.ref-header}
Related topics

[Transfer the Magento software to your hosted system]({{ page.baseurl }}/install-gde/install/hosted/hosted_get-ftp.html)
