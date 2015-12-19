<div markdown="1">

<h2 id="sample-clone">Install sample data by cloning repositories</h2>
This topic discusses how to get the Magento sample data by cloning the Magento GitHub repository and the sample data repository. This method is intended only for contributing developers (that is, developers who plan to contribute to the Magento 2 codebase).

If you're not a contributing developer, choose one of the other options displayed in the table of contents on the left side of the page.

<div class="bs-callout bs-callout-warning">
    <p>You can use sample data with either the <code>develop</code> branch (more current) or the <code>2.0</code> branch (more stable) but only if you <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-clone">cloned</a> the corresponding branch of the Magento 2 GitHub repository.</p>
    <p>We recommend you use the <code>2.0</code> branch because it's more stable. If you're contributing code to the Magento 2 repository and you need the most recent code, use the <code>develop</code> branch.</p>
</div>

<h2 id="sample-prereq">Sample data prerequisites</h2>
Before you install sample data, make sure you have done the following:

1.  Decide which branch of the code to use:

    *  `2.0`, which is more stable (we recommend this branch unless you're contributing code to the Magento 2 project)
    *   `develop`, which is more recent
    
    <div class="bs-callout bs-callout-warning">
        <p>You must clone the <em>same branch</em> of both Magento 2 and sample data repositories. If you cloned the <code>2.0</code> branch of the Magento 2 repository, you must clone the <code>2.0</code> branch of the sample data repository.</p>
        <p>Use the <code>git branch</code> command in the Magento 2 clone directory to display which branch you have.</p>
    </div>

1.  Log in to the Magento server as, or switch to, the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
4.  <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Clone the Magento 2 GitHub repository</a>.

5.  <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update dependencies</a> by running <code>composer install</code>.

2.  Change to your Magento installation directory.

    For example, `/var/www/html/magento2`
3.  Require the `https://repo.magento.com` repository, which contains the sample data code:

        composer config repositories.0 composer https://repo.magento.com
4.  Continue with the next section.

<h2 id="clone-sample-data-deploy">Install sample data modules</h2>
To install sample data using the command line, enter the following command as the Magento file system owner:

    php <your Magento install dir>/bin/magento sampledata:deploy [module-list]

where `[module-list]` is an optional space-separated list of <a href="#sample-data-modules">sample data modules</a> to install. Omit this parameter to install all sample data modules.

### Authentication error

The following error might display:

    [Composer\Downloader\TransportException]
    The 'https://repo.magento.com/packages.json' URL required authentication.
    You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your <a href="{{ site.gdeurl }}install-gde/prereq/connect-auth.html">authentication keys</a>.

<h3 id="sample-data-modules">Complete list of modules</h3>

The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %}

<h2 id="clone-file-perms">Set file system ownership and permissions</h2>
Change to your Magento installation directory and <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#instgde-prereq-compose-access">set file system ownership and permissions</a>.
    
#### Next step
Install the Magento software:

*   <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Command line</a>
*   <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>