---
group: configuration-guide
title: Customize base directory paths (MAGE_DIRS)
functional_areas:
  - Configuration
  - System
  - Setup
---

## Introduction to Magento base directory paths {#dirs-introduction}

The `MAGE_DIRS` environment variable enables you to specify custom base directory paths and fragments of base URLs that are used by the Magento application to build absolute paths to various files or for generating URLs.

## Set MAGE_DIRS {#dirs-set}

Specify an associative array where keys are constants from [\\Magento\\App\\Filesystem\\DirectoryList]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Filesystem/DirectoryList.php){:target="_blank"} and values are absolute paths of directories or their [URL](https://glossary.magento.com/url) paths, respectively.

You can set `MAGE_DIRS` in any of the following ways:

*  [Set the value of bootstrap parameters]({{ page.baseurl }}/config-guide/bootstrap/magento-how-to-set.html)
*  Use a custom entry point script such as the following:

   ```php
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
