---
group: config-guide
subgroup: 03_Bootstrap
title: Magento application initialization and bootstrap
menu_title: Magento application initialization and bootstrap
menu_order: 1
menu_node: parent
version: 2.0
redirect_from: /guides/v1.0/config-guide/bootstrap/magento-bootstrap.html
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of bootstrapping   {#config-boot-overview}

To run the Magento application, the following actions are implemented in <a href="{{ site.mage2000url }}index.php" target="_blank">index.php</a>:

*	Include <a href="{{ site.mage2000url }}app/bootstrap.php" target="_blank">app/bootstrap.php</a> which performs essential initialization routines, such as error handling, initializing the autoloader, setting profiling options, setting the default timezone, and so on.
*	Create an instance of <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Bootstrap.php" target="_blank">\Magento\Framework\App\Bootstrap</a>. <!-- It requires initialization parameters to be specified in constructor.  Normally, the $_SERVER super-global variable is supposed to be passed there. -->
*	Create a Magento application instance (<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/AppInterface.php" target="_blank">\Magento\Framework\AppInterface</a>).
*	Run Magento

## Bootstrap run logic   {#config-boot-logic}

<a href="{{ site.mage2000url }}app/bootstrap.php" target="_blank">The bootstrap object</a> uses the following algorithm to run the Magento application:

1.	Initializes the error handler.
2.	Creates the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/ObjectManager" target="_blank">object manager</a> and basic shared services that are used everywhere and are affected by the environment. The environment parameters are injected properly into these objects.
3.	Asserts that maintenance mode is *not* enabled; otherwise, terminates.
4.	Asserts that the Magento application is installed; otherwise, terminates.
5.	Starts the Magento application.

	Any uncaught exception during application launch is automatically passed back to Magento in the `catchException()` method which you can use to handle the exception. The latter must return either `true` or `false`:

    *	If `true`: Magento handled exception successfully. No need to do anything else.
    *	If `false` (or any other empty result): Magento did not handle the exception. The bootstrap object performs the default exception handling subroutine.
6.	Sends the response provided by the application object.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The assertions that the Magento application is installed and not in maintenance mode is the default behavior of the <code>\Magento\Framework\App\Bootstrap</code> class. You can modify it using an entry point script when creating the bootstrap object.</p></span>
</div>

Sample entry point script that modifies the bootstrap object:

{% highlight php startinline=true %}
use Magento\Framework\App\Bootstrap;
require __DIR__ . '/app/bootstrap.php';
$params = $_SERVER;
$params[Bootstrap::PARAM_REQUIRE_MAINTENANCE] = true; // default false
$params[Bootstrap::PARAM_REQUIRE_IS_INSTALLED] = false; // default true
$bootstrap = Bootstrap::create(BP, $params);
/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication('Magento\Framework\App\Http');
$bootstrap->run($app);
{% endhighlight %}

## Default exception handling   {#config-boot-exception}

The bootstrap object specifies how the Magento application handles uncaught exceptions as follows:

*	In <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode">developer mode</a>, displays the {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} as-is.
*	In any other mode, attempts to log exception and display a generic error message.
*	Terminates Magento with error code `1`

## Entry point applications   {#config-boot-entry}

We have the following entry point applications (that is, applications defined by Magento that are used by the web server as a directory index):

*	<a href="#config-boot-entry-http">HTTP entry point</a>
*	<a href="#config-boot-entry-static">Static resource entry point</a>
*	<a href="#config-boot-entry-media">Media resource entry point</a>

### HTTP entry point   {#config-boot-entry-http}

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Http" target="_blank">\Magento\Framework\App\Http</a> operates as follows:

1.	Determines the <a href="{{ page.baseurl }}/architecture/archi_perspectives/components/modules/mod_and_areas.html">application area</a>.
2.	Starts the front controller and routing systems in order to find and execute a controller action.
3.	Uses an HTTP response object to return result obtained from the controller action.
4.	Error handling (in the following priority order):
	1.	If you're using <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode">developer mode</a>:
		*	If the Magento application is not installed, redirect to Setup Wizard.
		*	If the Magento application is installed, display an error and HTTP status code 500 (Internal Server Error).
	2.	If the Magento application is in maintenance mode, display a user-friendly "Service Unavailable" landing page with HTTP status code 503 (Service Temporary Unavailable).
	3.	If the Magento application is *not* installed, redirect to Setup Wizard.
	4.	If the session is invalid, redirect to the home page.
	5.	If there is any other application initialization error, display a user-friendly "Page Not Found" page with HTTP status code 404 (Not Found).
	6.	On any other error, display a user-friendly "Service Unavailable" page with HTTP response 503 and generate an error report and display its ID on the page.

### Static resource entry point   {#config-boot-entry-static}

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/StaticResource.php" target="_blank">\Magento\Framework\App\StaticResource</a> is an application for retrieving static resources (for example, CSS, JavaScript, and images). It postpones any actions with a static resource until the resource is requested.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The entry point for static view files is not used in <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode">production mode</a> to avoid potential exploits on the server. In production mode, the Magento application expects that all necessary resources already exist in the <code>&lt;your Magento install dir>/pub/static</code> directory.</p></span>
</div>

In default or developer mode, a request for a non-existent static resource is redirected to the static entry point according to the rewrite rules specified by the appropriate `.htaccess`.
When the request is redirected to the entry point, the Magento application parses the requested {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} based on retrieved parameters and finds the requested resource.

*	In developer mode, the content of the file is returned so that every time the resource is requested, the returned content is up to date.
*	In <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode">default</a> mode, the retrieved resource is published so it is accessible by the previously requested URL.

	All future requests for the static resource are processed by the server the same as static files; that is, without involving the entry point. If it's necessary to synchronize published files with original ones, the `pub/static` directory should be removed; as a result, files are automatically republished with the next request.

### Media resource entry point   {#config-boot-entry-media}

<a href="{{ site.mage2000url }}app/code/Magento/MediaStorage/App/Media.php" target="_blank">Magento\MediaStorage\App\Media</a> retrieves media resources (that is, any files uploaded to media storage) from the database. It is used whenever the database is configured as a {% glossarytooltip d95142d7-023f-451c-a2e9-dd88763dcd70 %}media storage{% endglossarytooltip %}.

`\Magento\Core\App\Media` attempts to find the media file in the configured database storage and write it into the `pub/static` directory, then return its contents. On error, it returns an HTTP 404 (Not Found) status code in the header with no contents.

#### Related topics

This topic discussed the basics of Magento application initialization and bootstrapping. To find out how to set bootstrap environment variables, see one of the following topics:

*	<a href="{{ page.baseurl }}/config-guide/bootstrap/mage-dirs.html">Customize base directory paths (MAGE_DIRS)</a>
*	<a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html">Set the mode (MAGE_MODE)</a>
*	<a href="{{ page.baseurl }}/config-guide/bootstrap/mage-profiler.html">Enable an HTML profiler (MAGE_PROFILER)</a>
