<div markdown="1">

## Install sample data using Composer
This section discusses how to install sample data if you got the Magento software in any of the following ways:

*   Downloaded a compressed archive
*   Used `composer create-project`

You can use this method of getting sample data if you used Magento Community Edition (CE) or Enterprise Edition (EE).

If you're a contributing developer, see one of the other topics on the left side of this page.

See the following sections:

*   [Sample data prerequisites](#sample-data-rel-prereq)
*   [Install released version sample data](#sample-data-rel-inst)

### Sample data prerequisites {#sample-data-rel-prereq}
Before you install sample data, you must update Magento's `composer.json` to get components from `https://repo.magento.com`.

1.  Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
4.  <a href="{{ site.gdeurl21 }}install-gde/prereq/dev_install.html">Clone the Magento 2 GitHub repository</a>.

5.  <a href="{{ site.gdeurl21 }}install-gde/install/prepare-install.html">Update dependencies</a> by running `composer install`.

2.  Change to your Magento installation directory.

    For example, `/var/www/html/magento2`
3.  Require the `https://repo.magento.com` repository, which contains the sample data code:

        composer config repositories.magento composer https://repo.magento.com

4.  Continue with the next section.

### Install released version sample data {#sample-data-rel-inst}
To install sample data using the command line, enter the following command as the Magento file system owner:

    php <your Magento install dir>/bin/magento sampledata:deploy [module-list]

where `[module-list]` is an optional space-separated list of <a href="#sample-data-modules">sample data modules</a> to install. Omit this parameter to install all sample data modules.

You are required to <a href="{{ site.gdeurl21 }}install-gde/prereq/connect-auth.html">authenticate</a> to complete the action.

### Authentication error

The following error might display:

    [Composer\Downloader\TransportException]
    The 'https://repo.magento.com/packages.json' URL required authentication.
    You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your <a href="{{ site.gdeurl21 }}install-gde/prereq/connect-auth.html">authentication keys</a>.

<h3 id="sample-data-modules">Complete list of modules</h3>
The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %}

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
*[Contributing developers]: Developers who contribute code to the Magento 2 CE codebase
