---
layout: default 
group: install_trouble
subgroup: Errors during installation
title: Errors installing optional sample data
menu_title: Errors installing optional sample data
menu_node: 
menu_order: 500
version: 2.1
github_link21: install-gde/trouble/tshoot_sample-data.md
---

<h2 id="install-trouble-sample">Errors installing optional sample data</h2>

### Symptom
Error in the console log during sample data installation using the Setup Wizard:

	Module 'Magento_CatalogRuleSampleData':
	[ERROR] exception 'Magento\Framework\Exception\LocalizedException' with message 'Can't create directory /var/www/html/magento2/var/generation/Magento/CatalogRule/Model/.' in /var/www/html/magento2/lib/internal/Magento/Framework/Code/Generator.php:103

	(more)

	Next exception 'ReflectionException' with message 'Class Magento\CatalogRule\Model\RuleFactory does not exist' in /var/www/html/magento2/lib/internal/Magento/Framework/Code/Reader/ClassReader.php:29

	(more)

These exceptions result from file system permissions settings.

#### Solution
<a href="{{ site.gdeurl21 }}install-gde/install/web/install-web-sample-data.html#instgde-prereq-compose-clone-perms">Set file system ownership and permissions again</a> as a user with `root` privileges.

### Symptom

During installation of optional sample data, a  message similar to the following displays: 

	PHP Fatal error: Call to undefined method Magento\Catalog\Model\Resource\Product\Interceptor::getWriteConnection() in /var/www/magento2/app/code/Magento/SampleData/Module/Catalog/Setup/Product/Gallery.php on line 144

#### Solution

During sample data installation, disable SELinux using a resource such as:

*	<a href="http://www.crypt.gen.nz/selinux/disable_selinux.html#DIS2" target="_blank">crypt.gen.nz</a>
*	<a href="https://www.centos.org/docs/5/html/5.1/Deployment_Guide/sec-sel-enable-disable.html" target="_blank">CentOS documentation</a>

### Symptom
Other errors display, such as:

	[Magento\Setup\SampleDataException] Error during sample data installation: Class Magento\Sales\Model\Service\OrderFactory does not exist

#### Solution

There are known issues with using sample data with the Magento 2 develop branch. Use the master branch instead. You can switch to the master branch as follows:

	cd <your Magento install dir>
	git checkout master
	git pull origin master

