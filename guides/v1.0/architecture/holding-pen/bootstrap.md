---
layout: howtom2devgde_chapters
title: Module bootstrapping 
---
 
<h1 id="m2devgde-boot">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}architecture/holding-pen/bootstrap.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-bootstrap">Boostrapping</h2>

<p class="q">Reviewer: Globally, all file system paths must be verified.</p>
<p class="q">Also, the information on this page is useless without more detail. What of this is important to users, configurable, and requires developers to understand? It seems like a lot of general information with no user impact at all.</p>

Module bootstrapping includes: 

*	Initialization of code 
*	Initialization of the Magento software

Modules, cron, media synchronization, and so on each has its own entry point and goes through a different workflow at during bootstrap, as follows:

*	`index.php` is a default conventional entry point for any web application powered by PHP.
*	The `pub` subdirectory is the only directory that public access using the web server. This subdirectory can serve a document root.
*	`pub/cron.php` is an entry point for cron jobs such as reindexing.
*	`pub/get.php` is an entry point for retrieving media files from the database if media files are stored in the database. 

	<p class="q">Reviewer: What are other options for storing media files?</p>

*	`pub/index.php` has the same role as `index.php` if the `pub` directory is configured as the document root.

	<p class="q">Reviewer: That statement makes no sense. Please clarify.</p>

<p class="q">Reviewer: In the following, what means "the script"?</p>
	
All entry points share the same bootstrap algorithm at first. Then, based on the script, they perform individual actions to initialize Magento.

<h3 id="m2devgde-bootstrap-algo">Boostrap algorithm</h3>

Boostrapping performs the following actions in order:

<p class="q">Reviewer: HOW does an entry point do these things? Is the behavior configurable? Why is this information presented? It seems meaningless.</p>

1.	An entry point checks whether PHP version is accurate. If not, the module is terminated.
2.	An entry point defines constants for the directory separator specific to the operating system and the absolute path to the Magento root directory.
3.	An entry point checks whether `maintenance.flag` file exists in the Magento root directory. 

	If it does, a message displays informing the user that the store is in maintenance mode along with an HTTP 503 (Service Unavailable) status code.
	
4.	An entry point sets the value in the error reporting configurations to `E_ALL`.
4.	An entry point sets the value of the default time zone configuration to `Magento\Framework\Stdlib\DateTime\TimezoneInterface::DEFAULT_TIMEZONE` (UTC).
5.	An entry point initializes autoload.
6.	An entry point initializes a mode for the application according to the setting of the `MAGE_MODE` environment variable.
7.	An entry point enables mapping the autoload class. The mapping reads from `var/classmap.ser` file in the Magento root directory.
8.	An entry point enables the Magento profiler according to the setting of the `MAGE_PROFILER` environment variable.

<h3 id="m2devgde-bootstrap-init">Initialize and run a module</h3>

<p class="q">Reviewer: I cannot locate a class like Magento\App\EntryPoint\EntryPoint. Please clarify.</p>
<p class="q">There is an astonishing lack of detail (e.g., reads environment variables which, from where, how? Sets the default error callback how? Clarify.</p>

After the code base is initialized, the module is initialized by TBD, which is the default implementation of TBD. TBD performs the following steps:

1.	Reads all environment variables.
2.	Initializes the object manager and passes to it all defined environment variables.
3.	Sets the default error handler callback.
4.	Loads dependency injection configuration modules.
5.	Runs the initialized module.

TBD also creates necessary directories and verifies whether these directories have the write access.

After an application is initialized, the entry point runs it. For example, if the entry point is `index.php`:

<pre>return $entryPoint->run('Magento\App\Http');</pre>

Then `EntryPoint::run()` returns the result.

<p class="q">Reviewer: The result is what?</p>

<h3 id="m2devgde-bootstrap-vars">Boostrap environment variables</h3>

<p class="q">Reviewer: How and where do you set these values? Values for these variables are not specified on the public wiki! I am guessing; please verify.</p>
<p class="q">These descriptions are not good. Why would anyone use MAGE_CONFIG_FILE or MAGE_CONFIG_DATA, for example. What is the difference between 'production' and 'default' for MAGE_MODE? Please clarify.</p>

<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>MAGE_MODE</td>
		<td><p>Specifies one of the following:</p>
			<ul><li>`developer` to display errors in the web browser when possible. Use this mode only if you're extending Magento.</li>
			<li>`production` to write errors to the log if logging is enabled.</li>
			<li>`default` TBD</li></ul></td>
	</tr>
	<tr>
		<td>MAGE_PROFILER</td>
		<td>Causes the Magento profiler to run (IF SET TO WHAT VALUE? TBD) WHAT IS THE MAGENTO PROFILER?</td>
	</tr>
	<tr>
		<td>MAGE_RUN_CODE</td>
		<td><p>Specifies scope:</p>
		<ul><li>`website` specifies website scope.</li>
		<li>`storeview` specifies store view scope.</li></ul></td>
	</tr>
	<tr>
		<td>MAGE_RUN_TYPE</td>
		<td>Displays the value of <code>MAGE_RUN_CODE</code>.</td>
	</tr>
	<tr>
		<td>MAGE_CONFIG_FILE</td>
		<td>To use a non-default <code>local.xml</code>, specify its absolute file system path and file name. (Value is blank by default.)</td>
	</tr>
	<tr>
		<td>MAGE_CONFIG_DATA</td>
		<td>To use additional data in your configuration, specify string values for the data to use. (Value is blank by default.)</td>
	</tr>
	</tbody>
</table>


