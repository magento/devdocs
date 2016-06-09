---
layout: default
group: config-guide
subgroup: 03_Bootstrap
title: Customize base directory paths (MAGE_DIRS)
menu_title: Customize base directory paths (MAGE_DIRS)
menu_order: 5
menu_node: 
version: 2.0
github_link: config-guide/bootstrap/mage-dirs.md
redirect_from: /guides/v1.0/config-guide/bootstrap/mage-dirs.html
---

#### Contents
*	<a href="#dirs-introduction">Introduction to Magento base directory paths</a>
*	<a href="#dirs-set">Set MAGE_DIRS</a>


<h2 id="dirs-introduction">Introduction to Magento base directory paths</h2>
The `MAGE_DIRS` environment variable enables you to specify custom base directory paths and fragments of base URLs that are used by the Magento application to build absolute paths to various files or for generating URLs. 

<h2 id="dirs-set">Set MAGE_DIRS</h2>
Specify an associative array where keys are constants from <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem/DirectoryList.php" target="_blank">\Magento\App\Filesystem\DirectoryList</a> and values are absolute paths of directories or their URL paths, respectively.

You can set `MAGE_DIRS` in any of the following ways:

*	<a href="{{ site.gdeurl }}config-guide/bootstrap/magento-how-to-set.html">Set the value of bootstrap parameters</a>
*	Use a custom entry point script such as the following:

	{% highlight php %}
	<?php
	use Magento\Framework\App\Filesystem\DirectoryList;
	use Magento\Framework\App\Bootstrap;
 
	require __DIR__ . '/app/bootstrap.php';
	$params = $_SERVER;
	$params[Bootstrap::INIT_PARAM_FILESYSTEM_DIR_PATHS] = [
       DirectoryList::CACHE => [DirectoryList::PATH => '/mnt/nfs/cache'],
       DirectoryList::MEDIA => [DirectoryList::PATH => '/mnt/nfs/media', DirectoryList::URL_PATH => ''],
	];

	$params[Bootstrap::INIT_PARAM_FILESYSTEM_DIR_PATHS] = [
	DirectoryList::PUB => [DirectoryList::URL_PATH => ''],	
	DirectoryList::MEDIA => [DirectoryList::URL_PATH => 'media'],
	DirectoryList::STATIC_VIEW => [DirectoryList::URL_PATH => 'static'],
	DirectoryList::UPLOAD => [DirectoryList::URL_PATH => 'media/upload'],
	];
	$bootstrap = \Magento\Framework\App\Bootstrap::create(BP, $params);
	/** @var \Magento\Framework\App\Http $app */
	$app = $bootstrap->createApplication('Magento\Framework\App\Http');
	$bootstrap->run($app);
	?>
	{% endhighlight %}

The preceding example sets paths for `[cache]` and `[media]` directories to `/mnt/nfs/cache` and `/mnt/nfs/media`, respectively.
