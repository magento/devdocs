<div markdown="1">

## Install sample data using Composer
This section discusses how to install sample data if you got the Magento software in any of the following ways:

*   Downloaded a compressed archive
*   Used `composer create-project`

You can use this method of getting sample data if you used Magento Community Edition (CE) or Enterprise Edition (EE). You can use it either before or after you install the Magento software; however, there might be [additional tasks]({{page.baseurl}}install-gde/install/sample-data.html) for installing sample data after you install the Magento software.

If you're a contributing developer, see one of the other topics on the left side of this page.

To install sample data using the command line, enter the following command as the Magento file system owner:

    php <your Magento install dir>/bin/magento sampledata:deploy

<!-- where `[module-list]` is an optional space-separated list of <a href="#sample-data-modules">sample data modules</a> to install. Omit this parameter to install all sample data modules.
 -->
You are required to <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authenticate</a> to complete the action.

### Authentication error

The following error might display:

    [Composer\Downloader\TransportException]
    The 'https://repo.magento.com/packages.json' URL required authentication.
    You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>.

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
