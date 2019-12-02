To help export Production data as test data to use in Staging and Integration environments, [Run the support utilities]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-spt-util.html):

*  [CLI commands]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-spt-util.html#config-cli-spt-utils-db) (Recommended) to export a protected backup of customer and store data using your Magento encryption key
*  [Data Collection](http://docs.magento.com/m2/ee/user_guide/system/support-data-collector.html) tool for generating and exporting data

To migrate this data, see [Migrate and deploy static files and data]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html).