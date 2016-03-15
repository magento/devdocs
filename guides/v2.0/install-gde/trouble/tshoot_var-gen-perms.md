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
For security reasons, Magento recommends a particular set of file system ownership and permissions rules. These rules require you to give ownership and permissions to two users:

*	Web server user
*	A local user on the Magento server

In addition, Magento code creates files with permissions consistent with our recommendations. For details, see:

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Create the Magento file system owner</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/integrator_install.html#instgde-prereq-compose-access">Set file system ownership and permissions</a>
 
### Suggestion
First, make sure you completed all tasks discussed in the preceding section. In particular, make sure the Magento file system owner and the web server user share groups in one of the ways discussed in <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-group">Options for shared groups</a>.

If that still does not resolve the issue, try setting the <a href="https://en.wikipedia.org/wiki/Setuid#setuid_and_setgid_on_directories" target="_blank">setgid bit</a> (set group-id bit) for problem directories, such as `var/generation`, as follows:

1.	Identify the directory that does not allow write access.
2.	As a user with `root` privileges (or with sufficient privileges to set permissions), enter the following command:

		chmod g+s <directory-path>

	For example, to set the sticky bit for the `/var/www/magento2/var/generation` directory, enter:

		find /var/www/magento2/var/generation -type d -exec chmod g+s {} \;

