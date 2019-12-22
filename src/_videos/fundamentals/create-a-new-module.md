---
youtube_id: 682p52tFcmY
duration: "5:18"
group: "Fundamentals of Magento 2 Development"
title: "Create a New Module"
thumbnail: "fundamentals/thumbs/create-new-module.png"
menu_order: 1
---

Module is a structural element of Magento 2 – the whole system is built upon modules. Typically, the first step in creating a customization is building a module.

To create a module, you need to complete the following high-level steps:

1. Create the module folder.
1. Create the `etc/module.xml` file.
1. Create the `registration.php` file.
1. Run the `bin/magento setup:upgrade` script to install the new module.
1. Check that the module is working.

Let’s go through each of these steps in detail.

## Create the module folder

### There are two possible locations for modules in Magento 2: the app/code folder and the vendor folder

Depending on how Magento 2 has been installed, core modules can either be located in the `vendor/magento/magento-*`folders (for composer installation) or in the `app/code/Magento/` folder (for cloning GitHub).

### Which of these locations should you choose for your new module?

If you build a module for a specific project, it is best to choose the app/code folder and commit to the project's repository.

If you build an extension to be reused, it is better to use composer to create it, and put your module in the `vendor/<YOUR_VENDOR>/module-something` folder.

Each module name in Magento 2 consists of two parts – the vendor and the module itself. In other words, modules are grouped into vendors, so you need to define the vendor and module names. For this example, let’s name the vendor “Learning” and the module “FirstUnit”.

Let’s create the folder app/code/Learning and inside this folder place another folder: FirstUnit. If you're using the command line, the code would be:

1. `cd` to the root folder
1. `mkdir app/code/Learning`
1. `mkdir app/code/Learning/FirstUnit`

## Make sure you have permission to create files and folders in your installation

Next, you need to create an `etc/module.xml` file. This file is required for the module to exist.

This file contains the following information:

*  Module name
*  Module version
*  Dependencies

Module name is defined by the folders we just created, because in Magento 2, class names must follow the folder structure. Because we created the folders `Learning/FirstUnit`, our module name will be `Learning_FirstUnit` and all classes that belong to this module will begin with `Learning\FirstUnit` – for example: `Learning\FirstUnit\Observer\Test`.

Module version indicates the current version of the database schema and data, and is used in upgrading. For example, assume you decide to modify a table's schema in your module. How can you be sure that this change will happen on all instances where the code is deployed? Altering the database by direct SQL queries won't work. Instead, Magento 2 has install and upgrade scripts in every module (optionally). These scripts contain commands to modify the database schema or data. To track whether to execute a script or not, Magento 2 uses module versions. Every time you implement a new database change, you implement a new version of a module and change the corresponding `module.xml`. Magento saves the current module's version in a database, and if the database value and the one in the `module.xml` do not match, it will execute the upgrade code.

Dependencies. If one module depends on another, the `module.xml` file will have a special declaration that defines a list of modules that the current module depends on. For this example, we will make our module dependent on Magento_Catalog.

Using the following command-line code, create the folder `app/code/Learning/FirstUnit/etc`:

```bash
mkdir app/code/Learning/FirstUnit/etc
```

Then put the following code into it:

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
<module name="Learning_FirstUnit" setup_version="0.0.1"> <sequence>
<module name="Magento_Catalog"/> </sequence>
    </module>
</config>
```

Note that in the XML file we specified:

*  Module name: `Learning_FirstUnit` (based on the folders we created)
*  Version: 0.0.1 (initial version of our module)
*  Dependency: Magento_Catalog. We could have multiple dependencies. In this case, we would put `<module name=”..” />` nodes under the sequence node.

## Create the registration.php file

Each module must have this file, which tells Magento how to locate the module. Continuing our example, create the file
`app/code/Learning/FirstUnit/registration.php`. Then put the following content into it:

```php
<?php \Magento\Framework\Component\ComponentRegistrar::register(
\Magento\Framework\Component\ComponentRegistrar::MODULE, 'Learning_FirstUnit',
__DIR__
);
```

The `registration.php` is a standardized file that follows the same pattern for all modules.

The only thing that varies is the module name, which in our case is `Learning_FirstUnit`.

## Run the “setup:upgrade” command

Running this command makes your new module active, notifying Magento of its presence.

```bash
php bin/magento setup:upgrade
```

It should echo a large amount of output, one line of which should be `Learning_FirstUnit`. Verify that this line of code is there.

## Check that the new module is active

So far, we haven't added any useful code to our module – it is still empty (and therefore invisible). In order to verify that it has been recognized, check the file `app/etc/config.php`. It has a list of auto-generated modules that are active.

Never change this list manually!

```bash
grep Learning_FirstUnit app/etc/config.php
```

Employing these steps, you can successfully create a new module in Magento 2.
