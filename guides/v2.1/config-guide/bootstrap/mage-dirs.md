---
group: config-guide
subgroup: 03_Bootstrap
title: Customize base directory paths (MAGE_DIRS)
menu_title: Customize base directory paths (MAGE_DIRS)
menu_order: 5
menu_node:
version: 2.1
redirect_from: /guides/v1.0/config-guide/bootstrap/mage-dirs.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Introduction to Magento base directory paths {#dirs-introduction}

The `MAGE_DIRS` environment variable enables you to specify custom base directory paths and fragments of base URLs that are used by the Magento application to build absolute paths to various files or for generating URLs. 

## Set MAGE_DIRS {#dirs-set}

Specify an associative array where keys are constants from [\\Magento\\App\\Filesystem\\DirectoryList]({{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem/DirectoryList.php){:target="&#95;blank"} and values are absolute paths of directories or their {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} paths, respectively.

You can set `MAGE_DIRS` in any of the following ways:

*	[Set the value of bootstrap parameters]({{ page.baseurl }}/config-guide/bootstrap/magento-how-to-set.html)
*	Use a custom entry point script such as the following:

	```php?start_inline=1
	use Magento\Framework\App\Filesystem\DirectoryList;
	use Magento\Framework\App\Bootstrap;
 
	require __DIR__ . '/app/bootstrap.php';
	$params = $_SERVER;
	$params[Bootstrap::INIT_PARAM_FILESYSTEM_DIR_PATHS] = [
 	    DirectoryList::PUB => [DirectoryList::URL_PATH => '',
 	    DirectoryList::MEDIA => [DirectoryList::PATH => '/mnt/nfs/media', DirectoryList::URL_PATH => ''],
 	    DirectoryList::STATIC_VIEW => [DirectoryList::URL_PATH => 'static'],
 	    DirectoryList::UPLOAD => [DirectoryList::URL_PATH => '/mnt/nfs/media/upload'],
 	    DirectoryList::CACHE => [DirectoryList::PATH => '/mnt/nfs/cache'],
	];
	$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
	/** @var \Magento\Framework\App\Http $app */
	$app = $bootstrap->createApplication('Magento\Framework\App\Http');
	$bootstrap->run($app);
	```
	
The preceding example sets paths for `[cache]` and `[media]` directories to `/mnt/nfs/cache` and `/mnt/nfs/media`, respectively.
