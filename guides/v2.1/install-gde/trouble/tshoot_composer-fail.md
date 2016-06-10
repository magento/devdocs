---
layout: default 
group: install_trouble
subgroup: Errors during installation
title: Download fails because of changes in Composer
menu_title: Download fails because of changes in Composer
menu_node: 
menu_order: 300
version: 2.1
github_link21: install-gde/trouble/tshoot_composer-fail.md
---

<h2 id="install-trouble-composer">Download fails because of changes in Composer</h2>

### Symptom
During download, the following error displays:

	[ErrorException]
  	file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory

### Description
This happens because of changes in certain versions of Composer.

The workaround is to downgrade Composer to an earlier version and try your Magento download again.

Any version of Composer dated between November 21 and November 26, 2015 has this issue. To confirm this issue is related to the Composer version, enter the following command:

	composer -v

The version displays similar to the following:

	Composer version 1.0-dev (2b14f0a047dd4f3545ec82381f65c36ea93a4c81) 2015-11-25 17:13:09

Note the date is 2015-11-25, which indicates Composer has this issue.

To work around it:

1.	Change your version of Composer to enable you to download the Magento software by doing any of the following:

	*	Downgrade Composer using the following command:

			composer self-update 1.0.0-alpha11

	*	Upgrade Composer to a version later than November 26, 2015:

			composer self-update

2.	Delete your Magento 2 directory and subdirectories.
3.	Try the download again using either <a href="{{ site.gdeurl21 }}install-gde/prereq/integrator_install.html">`composer create-project`</a> or <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">`git clone`</a>.
4.	After successfully downloading the Magento software, update Composer:

		composer self-update
