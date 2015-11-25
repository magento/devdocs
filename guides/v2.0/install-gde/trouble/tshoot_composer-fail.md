---
layout: default 
group: install_trouble
subgroup: Errors during installation
title: Download fails because of changes in Composer
menu_title: Download fails because of changes in Composer
menu_node: 
menu_order: 300
github_link: install-gde/trouble/tshoot_composer-fail.md
---

<h2 id="install-trouble-composer">Download fails because of changes in Composer</h2>

### Symptom
During download, the following error displays:

	[ErrorException]
  	file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory

### Description
This happens because of recent changes in Composer; it is not an issue with the Magento application.

The workaround is to downgrade Composer to an earlier version and try your Magento download again.

To confirm this issue is related to the Composer version, enter the following command:

	composer -v

The following version has this issue:

	Composer version 1.0-dev (2b14f0a047dd4f3545ec82381f65c36ea93a4c81) 2015-11-25 17:13:09

To work around it:

1.	Downgrade Composer using the following command:

		composer self-update 1.0.0-alpha11

2.	Delete your Magento 2 directory and subdirectories.
3.	Try the download again using either `composer create-project` or `git clone`.