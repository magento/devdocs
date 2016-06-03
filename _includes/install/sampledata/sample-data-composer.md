<div markdown="1">

## Install sample data using Composer
This section discusses how to install sample data if you got the Magento software in any of the following ways:

*   Downloaded a compressed archive
*   Used `composer create-project`

You can use this method of getting sample data if you used Magento Community Edition (CE) or Enterprise Edition (EE). You can use it either before or after you install the Magento software; however, there might be [additional tasks]({{ site.gdeurl21 }}install-gde/install/sample-data.html) for installing sample data after you install the Magento software.

If you're a contributing developer, see one of the other topics on the left side of this page.

To install sample data using the command line, enter the following command as the Magento file system owner:

    php <your Magento install dir>/bin/magento sampledata:deploy

<!-- where `[module-list]` is an optional space-separated list of <a href="#sample-data-modules">sample data modules</a> to install. Omit this parameter to install all sample data modules.
 -->
You are required to <a href="{{ site.gdeurl21 }}install-gde/prereq/connect-auth.html">authenticate</a> to complete the action.

### Authentication error

The following error might display:

    [Composer\Downloader\TransportException]
    The 'https://repo.magento.com/packages.json' URL required authentication.
    You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your <a href="{{ site.gdeurl21 }}install-gde/prereq/connect-auth.html">authentication keys</a>.

### Install the Magento software {#magento-install}
After downloading sample data packages, install the Magento software in any of the following ways:

*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/web/install-web.html">Setup Wizard</a>


<!-- <h3 id="sample-data-modules">Complete list of modules</h3>
The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %} -->

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
