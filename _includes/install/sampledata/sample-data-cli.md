<div markdown="1">

<h2 id="install-sample-cli">Install sample data using the command line</h2>
This topic discusses how to install optional Magento 2 sample data using the command line. You can use this method either before or after you install the Magento software.

First, you must get the Magento software in one of the ways discussed in TBD.

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

If the error displays, you can do any of the following:

*	Change to your Magento installation directory and run `composer update`, which will prompt you for your credentials.
*	Create `auth.json` in the Magento file system owner's `<home dir>/.composer` directory with the following contents:

        {
           "http-basic": {
              "repo.magento.com": {
                 "username": "<username>",
                 "password": "<password>"
              }
            }
        }
        
        For example, if your user name is `magento_user`, create `/home/magento_user/.composer/auth.json`

<h3 id="sample-data-modules">Complete list of modules</h3>

The complete list of sample data modules follows:

{% include install/sampledata/sample-data_list-of-modules.md %}

