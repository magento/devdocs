---
group: install_trouble
subgroup: 03_install
title: Errors installing optional sample data
menu_title: Errors installing optional sample data
menu_node:
menu_order: 500
version: 2.0
functional_areas:
  - Install
  - System
  - Setup
---

This topic discusses solutions to errors you might encounter installing optional sample data.

#### Contents

*	[Symptom (file system permissions)](#trouble-samp-perms)
*	[Symptom (production mode)](#trouble-samp-prod)
*	[Symptom (security)](#trouble-samp-secy)
*	[Symptom (develop branch)](#trouble-samp-dev)
*	[Symptom (max_execution_time)](#trouble-samp-max)

### Symptom (file system permissions) {#trouble-samp-perms}

Error in the console log during sample data installation using the Setup Wizard:

	Module 'Magento_CatalogRuleSampleData':
	[ERROR] exception 'Magento\Framework\Exception\LocalizedException' with message 'Can't create directory /var/www/html/magento2/var/generation/Magento/CatalogRule/Model/.' in /var/www/html/magento2/lib/internal/Magento/Framework/Code/Generator.php:103

	(more)

	Next exception 'ReflectionException' with message 'Class Magento\CatalogRule\Model\RuleFactory does not exist' in /var/www/html/magento2/lib/internal/Magento/Framework/Code/Reader/ClassReader.php:29

	(more)

These exceptions result from file system permissions settings.

#### Solution

<a href="{{ page.baseurl }}/install-gde/install/web/install-web-sample-data.html#samp-data-perms">Set file system ownership and permissions again</a> as a user with `root` privileges.

### Symptom (production mode) {#trouble-samp-prod}

If you're currently set for [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode), sample data installation fails if you use the [`magento sampledata:deploy`]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-composer.html) command:

	PHP Fatal error: Uncaught TypeError: Argument 1 passed to Symfony\Component\Console\Input\ArrayInput::__construct() must be of the type array, object given, called in /<path>/vendor/magento/framework/ObjectManager/Factory/AbstractFactory.php on line 97 and defined in /<path>/vendor/symfony/console/Symfony/Component/Console/Input/ArrayInput.php:37

#### Solution

Don't install sample data in production mode. Switch to developer mode and clear some `var` directories and try again.

Enter the following commands in the order shown as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html):

	cd <your Magento install dir>
	php bin/magento deploy:mode:set developer
	rm -rf var/generation/* var/di/*
	php bin/magento sampledata:deploy

### Symptom (security) {#trouble-samp-secy}

During installation of optional sample data, a  message similar to the following displays:

	PHP Fatal error: Call to undefined method Magento\Catalog\Model\Resource\Product\Interceptor::getWriteConnection() in /var/www/magento2/app/code/Magento/SampleData/Module/Catalog/Setup/Product/Gallery.php on line 144

#### Solution

During sample data installation, disable SELinux using a resource such as:

*	<a href="http://www.crypt.gen.nz/selinux/disable_selinux.html#DIS2" target="_blank">crypt.gen.nz</a>
*	<a href="https://www.centos.org/docs/5/html/5.1/Deployment_Guide/sec-sel-enable-disable.html" target="_blank">CentOS documentation</a>

### Symptom (develop branch) {#trouble-samp-dev}

Other errors display, such as:

	[Magento\Setup\SampleDataException] Error during sample data installation: Class Magento\Sales\Model\Service\OrderFactory does not exist

#### Solution

There are known issues with using sample data with the Magento 2 develop branch. Use the master branch instead. You can switch to the master branch as follows:

	cd <your Magento install dir>
	git checkout master
	git pull origin master

### Symptom (max_execution_time) {#trouble-samp-max}

The installation stops before the sample data installation finishes. An example follows:

	(more)

	Module 'Magento_CustomerSampleData':
	Installing data...

Sample data installation does not finish.

This error occurs when the maximum configured execution time of your {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} scripts is exceeded. Because sample data can take a long time to load, you can increase the value during your installation.

#### Solution

As a user with `root` privileges, modify `php.ini` to increase the value of `max_execution_time` to 600 or more. (600 seconds is 10 minutes. You can increase the value to whatever you want.) You should change `max_execution_time` back to its previous value after the installation is successful.

If you're not sure where `php.ini` is located, enter the following command:

	php --ini

The value of `Loaded Configuration File` is the `php.ini` you must modify.
