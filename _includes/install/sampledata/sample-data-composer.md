<div markdown="1">

This section discusses how to install sample data if you got the Magento software in any of the following ways:

*   Downloaded a compressed archive from [Magento](https://magento.com/tech-resources/download).

    If you downloaded an archive from Github, this method won't work because the `composer.json` file doesn't contain the `repo.magento.com` URL.
*   Used `composer create-project`

You can use this method of getting sample data for both {{site.data.var.ce}} or {{site.data.var.ee}}, but you must use the same [authentication keys]({{page.baseurl}}/install-gde/prereq/connect-auth.html) you used to install Magento.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you encounter errors, such as `Could not find package...` or `...no matching package found...`, make sure there aren’t any typos in your command. If you still encounter errors, you may not have access to the right Composer repositories, especially if your using {{site.data.var.ee}}. Contact [Magento support](https://magento.com/support){:target="&#95;blank"} for help.
</div>

You can use Composer to install sample data either before or after installing Magento; however, there might be [additional tasks]({{page.baseurl}}/install-gde/install/sample-data.html).

If you're a contributing developer, refer to [Install by cloning repositories]({{install-gde/install/sample-data-after-clone.html}}).

<div class="bs-callout bs-callout-warning">
    <p>Do not install sample data if your Magento application is set for <a href="{{ page.baseurl}}/config-guide/bootstrap/magento-modes.html#production-mode">production mode</a>. Switch to <a href="{{ page.baseurl}}/config-guide/bootstrap/magento-modes.html#developer-mode">developer mode</a> first. Installing sample data in production mode <a href="{{ page.baseurl}}/install-gde/trouble/tshoot_sample-data.html#trouble-samp-prod">fails</a>.</p>
</div>

To install sample data using the command line, enter the following command as the Magento file system owner:

    php <your Magento install dir>/bin/magento sampledata:deploy

<div class="bs-callout bs-callout-warning" markdown="1">
If you're installing sample data _after_ installing Magento, you must also run the following command to update the database and schema:

	php <your Magento install dir>/bin/magento setup:upgrade
</div>

You are required to <a href="{{page.baseurl}}/install-gde/prereq/connect-auth.html">authenticate</a> to complete the action.

## Authentication error
The following authentication error might display:

    [Composer\Downloader\TransportException]
    The 'https://repo.magento.com/packages.json' URL required authentication.
    You must be using the interactive console to authenticate

If the error displays, change to your Magento installation directory and run `composer update`, which will prompt you for your <a href="{{page.baseurl}}/install-gde/prereq/connect-auth.html">authentication keys</a>.
