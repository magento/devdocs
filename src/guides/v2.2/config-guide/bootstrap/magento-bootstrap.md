---
group: configuration-guide
title: Magento application initialization and bootstrap
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of bootstrapping {#config-boot-overview}

To run the Magento application, the following actions are implemented in [index.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/index.php){:target="_blank"}:

*  Include [app/bootstrap.php]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/bootstrap.php){:target="_blank"} which performs essential initialization routines, such as error handling, initializing the autoloader, setting profiling options, setting the default timezone, and so on.
*  Create an instance of [\Magento\Framework\App\Bootstrap]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Bootstrap.php){:target="_blank"}. <!-- It requires initialization parameters to be specified in constructor.  Normally, the $_SERVER super-global variable is supposed to be passed there. -->
*  Create a Magento application instance ([\Magento\Framework\AppInterface]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/AppInterface.php){:target="_blank"}).
*  Run Magento

## Bootstrap run logic {#config-boot-logic}

[The bootstrap object]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/bootstrap.php){:target="_blank"} uses the following algorithm to run the Magento application:

1. Initializes the error handler.
1. Creates the [object manager]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/ObjectManager){:target="_blank"} and basic shared services that are used everywhere and are affected by the environment. The environment parameters are injected properly into these objects.
1. Asserts that maintenance mode is *not* enabled; otherwise, terminates.
1. Asserts that the Magento application is installed; otherwise, terminates.
1. Starts the Magento application.

   Any uncaught exception during application launch is automatically passed back to Magento in the `catchException()` method which you can use to handle the exception. The latter must return either `true` or `false`:

   *  If `true`: Magento handled exception successfully. No need to do anything else.
   *  If `false` (or any other empty result): Magento did not handle the exception. The bootstrap object performs the default exception handling subroutine.

1. Sends the response provided by the application object.

 {:.bs-callout-info}
The assertions that the Magento application is installed and not in maintenance mode is the default behavior of the `\Magento\Framework\App\Bootstrap` class. You can modify it using an entry point script when creating the bootstrap object.

Sample entry point script that modifies the bootstrap object:

```php
<?php
use Magento\Framework\App\Bootstrap;
require __DIR__ . '/app/bootstrap.php';

$params = $_SERVER;
$params[Bootstrap::PARAM_REQUIRE_MAINTENANCE] = true; // default false
$params[Bootstrap::PARAM_REQUIRE_IS_INSTALLED] = false; // default true
$bootstrap = Bootstrap::create(BP, $params);

/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication('Magento\Framework\App\Http');
$bootstrap->run($app);
```

## Default exception handling {#config-boot-exception}

The bootstrap object specifies how the Magento application handles uncaught exceptions as follows:

*  In [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode), displays the [exception](https://glossary.magento.com/exception) as-is.
*  In any other mode, attempts to log exception and display a generic error message.
*  Terminates Magento with error code `1`

## Entry point applications {#config-boot-entry}

We have the following entry point applications (that is, applications defined by Magento that are used by the web server as a directory index):

*  [HTTP entry point](#config-boot-entry-http)
*  [Static resource entry point](#config-boot-entry-static)
*  [Media resource entry point](#config-boot-entry-media)

### HTTP entry point {#config-boot-entry-http}

[\Magento\Framework\App\Http]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Http){:target="_blank"} operates as follows:

1. Determines the [application area]({{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html).
1. Starts the front controller and routing systems in order to find and execute a controller action.
1. Uses an HTTP response object to return result obtained from the controller action.
1. Error handling (in the following priority order):

   1. If you're using [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode):
     *  If the Magento application is not installed, redirect to Setup Wizard.
     *  If the Magento application is installed, display an error and HTTP status code 500 (Internal Server Error).
   1. If the Magento application is in maintenance mode, display a user-friendly "Service Unavailable" landing page with HTTP status code 503 (Service Temporary Unavailable).
   1. If the Magento application is *not* installed, redirect to Setup Wizard.
   1. If the session is invalid, redirect to the home page.
   1. If there is any other application initialization error, display a user-friendly "Page Not Found" page with HTTP status code 404 (Not Found).
   1. On any other error, display a user-friendly "Service Unavailable" page with HTTP response 503 and generate an error report and display its ID on the page.

### Static resource entry point {#config-boot-entry-static}

[\Magento\Framework\App\StaticResource]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/StaticResource.php){:target="_blank"} is an application for retrieving static resources (for example, CSS, JavaScript, and images). It postpones any actions with a static resource until the resource is requested.

 {:.bs-callout-info}
The entry point for static view files is not used in [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode) to avoid potential exploits on the server. In production mode, the Magento application expects that all necessary resources already exist in the `<your Magento install dir>/pub/static` directory.

In default or developer mode, a request for a non-existent static resource is redirected to the static entry point according to the rewrite rules specified by the appropriate `.htaccess`.
When the request is redirected to the entry point, the Magento application parses the requested [URL](https://glossary.magento.com/url) based on retrieved parameters and finds the requested resource.

*  In developer mode, the content of the file is returned so that every time the resource is requested, the returned content is up to date.
*  In [default]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode) mode, the retrieved resource is published so it is accessible by the previously requested URL.

   All future requests for the static resource are processed by the server the same as static files; that is, without involving the entry point. If it's necessary to synchronize published files with original ones, the `pub/static` directory should be removed; as a result, files are automatically republished with the next request.

### Media resource entry point {#config-boot-entry-media}

[Magento\MediaStorage\App\Media]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/MediaStorage/App/Media.php){:target="_blank"} retrieves media resources (that is, any files uploaded to media storage) from the database. It is used whenever the database is configured as a [media storage](https://glossary.magento.com/media-storage).

`\Magento\Core\App\Media` attempts to find the media file in the configured database storage and write it into the `pub/static` directory, then return its contents. On error, it returns an HTTP 404 (Not Found) status code in the header with no contents.

{:.ref-header}
Related topics

This topic discussed the basics of Magento application initialization and bootstrapping. To find out how to set bootstrap environment variables, see one of the following topics:

*  [Customize base directory paths (MAGE_DIRS)]({{ page.baseurl }}/config-guide/bootstrap/mage-dirs.html)
*  [Set the mode (MAGE_MODE)]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html)
*  [Enable an HTML profiler (MAGE_PROFILER)]({{ page.baseurl }}/config-guide/bootstrap/mage-profiler.html)
