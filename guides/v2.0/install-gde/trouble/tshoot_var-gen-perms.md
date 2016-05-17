---
layout: default
group: install_trouble
subgroup: Access issues
title: Cannot write to the var/generation directory
menu_title: Cannot write to the var/generation directory
menu_node: 
menu_order: 9
github_link: install-gde/trouble/tshoot_var-gen-perms.md
---


<h2 id="trouble-install-gen">Cannot write to the <code>var/generation</code> directory</h2>

### Symptom
After you successfully install Magento, exceptions display when you try to access the storefront or Admin. (You might have to <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-mode.html#config-mode">
enable developer mode</a> to see the exceptions.)

Sample exceptions follow:

	Directory "/var/www/html/magento2/pub/static/_requirejs/adminhtml/Magento/backend/en_US" cannot be created Warning!mkdir(): Permission denied

	Error filtering template: Unable to write file into directory /var/www/html/magento2/pub/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/m/b. Access forbidden.

	exception 'Magento\Framework\Exception\LocalizedException' with message 'Can't create directory /var/www/html/magento2/var/generation/Magento/Framework/App/ResourceConnection/.' in /var/www/html/magento2/vendor/magento/framework/Code/Generator.php:103 Stack trace: 
	#0 /var/www/html/magento2/vendor/magento/framework/Code/Generator/Autoloader.php(35): Magento\Framework\Code\Generator->generateClass('Magento\\Framewo...') 
	#1 [internal function]: Magento\Framework\Code\Generator\Autoloader->load('Magento\\Framewo...') 
	#2 [internal function]: spl_autoload_call('Magento\\Framewo...') 
	#3 /var/www/html/magento2/vendor/magento/framework/Code/Reader/ClassReader.php(19): ReflectionClass->__construct('Magento\\Framewo...') 
	#4 /var/www/html/magento2/vendor/magento/framework/ObjectManager/Definition/Runtime.php(44): Magento\Framework\Code\Reader\ClassReader->getConstructor('Magento\\Framewo...') 
	#5 /var/www/html/magento2/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php(71): Magento\Framework\ObjectManager\Definition\Runtime->getParameters('Magento\\Framewo...') 
	#6 /var/www/html/magento2/vendor/magento/framework/ObjectManager/ObjectManager.php(71): Magento\Framework\ObjectManager\Factory\Dynamic\Developer->create('Magento\\Framewo...') 
	#7 
	... more ...

### Details
Magento recommends different ownership and permissions settings based on if you use one user or two to run the Magento application.

Typically, you have one user on shared hosting and two users on private hosting (or if you have your own server). There could be exceptions to this, however.
 
### Suggestion
Review our recommendations in [Overview of ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html).

