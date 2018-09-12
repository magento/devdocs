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

[PHP Hypertext Preprocessor (PHP)](http://php.net/manual/en/faq.general.php){:target="_blank"} is a scripting language that Magento is authored in. Magento requires {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} version 5.5 or 5.6 to run.

To configure PHP:

1.	If necessary, start the cPanel and click **Home** to return to the {% glossarytooltip 2f4a0fcd-4106-4194-b47b-018ffbce3ac0 %}home page{% endglossarytooltip %}.
2.	In the Software section, click **Select PHP Version**.

    ![Start out configuring PHP]({{ site.baseurl }}/common/images/install-merch_php.png){:width="550px"}

3.	From the **PHP Version** list at the top of the page, click either **5.5** or **5.6**.

4.	Click **Set as current**.

    The checkboxes following the PHP version are referred to as *PHP extensions*.

4.	Select all of the following checkboxes: **gd**, **intl**, **mbstring**, **mcrypt**, **opcache**, **pdo**, **pdo_mysql**, and **xsl**.

    You can optionally select other PHP extensions if you want.

    ![Select PHP extensions]({{ site.baseurl }}/common/images/install-merch_php-ext.png){:width="750px"}

5.	Click **Save**.

#### Next step

[Transfer the Magento software to your hosted system]({{ page.baseurl }}/install-gde/install/hosted/hosted_get-ftp.html)
