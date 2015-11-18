<div markdown="1">

<h2 id="install-sample-cli">Install sample data using the command line</h2>
This topic discusses how to install optional Magento 2 sample data using the command line. You can use this method either before or after you install the Magento software.

First, you must <a href="{{ site.gdeurl }}install-gde/install/get-software.html">get the Magento software</a>.

<h2 id="install sample-cli-first">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="install-sample-cli-run">Install sample data command</h2>
To install sample data using the command line, enter the following command as the Magento file system owner:

	php <your Magento install dir>/bin/magento sampledata:deploy [module-list]

where `[module-list]` is an optional space-separated list of <a href="#sample-data-modules">sample data modules</a> to install. Omit this parameter to install all sample data modules.

### Authentication error

The following error might display:

	[Composer\Downloader\TransportException]
	The 'https://repo.magento.com/packages.json' URL required authentication.
	You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your credentials.

<h3 id="sample-data-modules">Complete list of modules</h3>

The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %}

