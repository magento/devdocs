---
layout: default
group: config-guide
subgroup: 03_Bootstrap
title: Magento application initialization and bootstrap
menu_title: Magento application initialization and bootstrap
menu_order: 1
menu_node: parent
github_link21: config-guide/bootstrap/magento-bootstrap.md
---

#### Contents
*	<a href="#config-boot-overview">Overview of bootstrapping</a>
*	<a href="#config-boot-logic">Bootstrap run logic</a>
*	<a href="#config-boot-exception">Default exception handling</a>
*	<a href="#config-boot-entry">Entry point applications</a>


<h2 id="config-boot-overview">Overview of bootstrapping</h2>
To run the Magento application, the following actions are implemented in <a href="{{ site.mage2100url }}index.php" target="_blank">index.php</a>:

*	Include `<your Magento install dir>/app/bootstrap.php` which performs essential initialization routines, such as error handling, initializing the autoloader, setting profiling options, setting the default timezone, and so on.
*	Create an instance of <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/App/Bootstrap.php" target="_blank">\Magento\Framework\App\Bootstrap</a>. <!-- It requires initialization parameters to be specified in constructor.  Normally, the $_SERVER super-global variable is supposed to be passed there. -->
*	Create a Magento application instance (<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/AppInterface.php" target="_blank">\Magento\Framework\AppInterface</a>).
*	Run Magento

<h2 id="config-boot-logic">Bootstrap run logic</h2>

<a href="{{ site.mage2100url }}app/bootstrap.php" target="_blank">The bootstrap object</a> uses the following algorithm to run the Magento application:

1.	Initializes the error handler.
2.	Creates the <a href="{{ site.mage2100url }}lib/internal/Magento/Framework/ObjectManager" target="_blank">object manager</a> and basic shared services that are used everywhere and are affected by the environment. The environment parameters are injected properly into these objects.
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

{% highlight php %}
<? php
use Magento\Framework\App\Bootstrap;
require __DIR__ . '/app/bootstrap.php';
$params = $_SERVER;
$params[Bootstrap::PARAM_REQUIRE_MAINTENANCE] = true; // default false
$params[Bootstrap::PARAM_REQUIRE_IS_INSTALLED] = false; // default true
$bootstrap = Bootstrap::create(BP, $params);
/** @var \Magento\Framework\App\Http $app */
$app = $bootstrap->createApplication('Magento\Framework\App\Http');
$bootstrap->run($app);
?>
{% endhighlight %}

<h2 id="config-boot-exception">Default exception handling</h2>
The bootstrap object specifies how the Magento application handles uncaught exceptions as follows:

*	In <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a>, displays the exception as-is.
*	In any other mode, attempts to log exception and display a generic error message.
*	Terminates Magento with error code `1`

<h2 id="config-boot-entry">Entry point applications</h2>
We have the following entry point applications (that is, applications defined by Magento that are used by the web server as a directory index):

*	<a href="#config-boot-entry-http">HTTP entry point</a>
*	<a href="#config-boot-entry-static">Static resource entry point</a>
*	<a href="#config-boot-entry-media">Media resource entry point</a>

<h3 id="config-boot-entry-http">HTTP entry point</h3>
<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/App/Http" target="_blank">\Magento\Framework\App\Http</a> operates as follows:

1.	Determines the <a href="{{ site.gdeurl21 }}architecture/modules/mod_and_areas.html">application area</a>.
2.	Starts the front controller and routing systems in order to find and execute a controller action.
3.	Uses an HTTP response object to return result obtained from the controller action.
4.	Error handling (in the following priority order):
	1.	If you're using <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-developer">developer mode</a>:
		*	If the Magento application is not installed, redirect to Setup Wizard.
		*	If the Magento application is installed, display an error and HTTP status code 500 (Internal Server Error).
	2.	If the Magento application is in maintenance mode, display a user-friendly "Service Unavailable" landing page with HTTP status code 503 (Service Temporary Unavailable).
	3.	If the Magento application is *not* installed, redirect to Setup Wizard.
	4.	If the session is invalid, redirect to the home page.
	5.	If there is any other application initialization error, display a user-friendly "Page Not Found" page with HTTP status code 404 (Not Found).
	6.	On any other error, display a user-friendly "Service Unavailable" page with HTTP response 503 and generate an error report and display its ID on the page.

<h3 id="config-boot-entry-static">Static resource entry point</h3>
<a href="{{ site.mage2100url }}lib/internal/Magento/Framework/App/StaticResource.php" target="_blank">\Magento\Framework\App\StaticResource</a> is an application for retrieving static resources (for example, CSS, JavaScript, and images). It postpones any actions with a static resource until the resource is requested.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The entry point for static view files is not used in <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a> to avoid potential exploits on the server. In production mode, the Magento application expects that all necessary resources already exist in the <code>&lt;your Magento install dir>/pub/static</code> directory.</p></span>
</div>
	
In default or developer mode, a request for a non-existent static resource is redirected to the static entry point according to the rewrite rules specified by the appropriate `.htaccess`. 
When the request is redirected to the entry point, the Magento application parses the requested URL based on retrieved parameters and finds the requested resource.

*	In developer mode, the content of the file is returned so that every time the resource is requested, the returned content is up to date.
*	In <a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html#mode-default">default</a> mode, the retrieved resource is published so it is accessible by the previously requested URL. 

	All future requests for the static resource are processed by the server the same as static files; that is, without involving the entry point. If it's necessary to synchronize published files with original ones, the `pub/static` directory should be removed; as a result, files are automatically republished with the next request.

<h3 id="config-boot-entry-media">Media resource entry point</h3>
<a href="{{ site.mage2100url }}app/code/Magento/MediaStorage/App/Media.php" target="_blank">Magento\MediaStorage\App\Media</a> retrieves media resources (that is, any files uploaded to media storage) from the database. It is used whenever the database is configured as a media storage.

`\Magento\Core\App\Media` attempts to find the media file in the configured database storage and write it into the `pub/static` directory, then return its contents. On error, it returns an HTTP 404 (Not Found) status code in the header with no contents.

#### Related topics
This topic discussed the basics of Magento application initialization and bootstrapping. To find out how to set bootstrap environment variables, see one of the following topics:

*	<a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-dirs.html">Customize base directory paths (MAGE_DIRS)</a>
*	<a href="{{ site.gdeurl21 }}config-guide/bootstrap/magento-modes.html">Set the mode (MAGE_MODE)</a>
*	<a href="{{ site.gdeurl21 }}config-guide/bootstrap/mage-profiler.html">Enable an HTML profiler (MAGE_PROFILER)</a>

