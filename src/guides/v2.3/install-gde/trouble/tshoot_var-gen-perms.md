---
group: installation-guide
subgroup: 02_access
title: Cannot write to the generated/code directory
menu_title: Cannot write to the generated/code directory
menu_node:
menu_order: 9
functional_areas:
  - Install
  - System
  - Setup
---

### Symptom

After you successfully install Magento, exceptions display when you try to access the [storefront](https://glossary.magento.com/storefront) or [Admin](https://glossary.magento.com/admin). You might have to
[enable developer mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html#change-to-developer-mode) to see the exceptions.

Sample exceptions follow:

```terminal
Directory "/var/www/html/magento2/pub/static/_requirejs/adminhtml/Magento/backend/en_US" cannot be created Warning!mkdir(): Permission denied

Error filtering template: Unable to write file into directory /var/www/html/magento2/pub/media/catalog/product/cache/1/small_image/240x300/beff4985b56e3afdbeabfc89641a4582/m/b. Access forbidden.

exception 'Magento\Framework\Exception\LocalizedException' with message 'Can't create directory /var/www/html/magento2/generated/code/Magento/Framework/App/ResourceConnection/.' in /var/www/html/magento2/vendor/magento/framework/Code/Generator.php:103 Stack trace:
#0 /var/www/html/magento2/vendor/magento/framework/Code/Generator/Autoloader.php(35): Magento\Framework\Code\Generator->generateClass('Magento\\Framewo...')
#1 [internal function]: Magento\Framework\Code\Generator\Autoloader->load('Magento\\Framewo...')
#2 [internal function]: spl_autoload_call('Magento\\Framewo...')
#3 /var/www/html/magento2/vendor/magento/framework/Code/Reader/ClassReader.php(19): ReflectionClass->__construct('Magento\\Framewo...')
#4 /var/www/html/magento2/vendor/magento/framework/ObjectManager/Definition/Runtime.php(44): Magento\Framework\Code\Reader\ClassReader->getConstructor('Magento\\Framewo...')
#5 /var/www/html/magento2/vendor/magento/framework/ObjectManager/Factory/Dynamic/Developer.php(71): Magento\Framework\ObjectManager\Definition\Runtime->getParameters('Magento\\Framewo...')
#6 /var/www/html/magento2/vendor/magento/framework/ObjectManager/ObjectManager.php(71): Magento\Framework\ObjectManager\Factory\Dynamic\Developer->create('Magento\\Framewo...')
#7
... more ...
```

### Details

Magento recommends different ownership and permissions settings based on if you use one user or two to run the Magento application.

Typically, you have one user on shared hosting and two users on private hosting (or if you have your own server). There could be exceptions to this, however.

### Suggestion

Review our recommendations in [Overview of ownership and permissions]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
