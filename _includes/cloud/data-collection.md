<div markdown="1">

To help export Production data as test data to use in Staging and Integration environments, [Run the support utilities]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-spt-util.html) including:

* [CLI commands]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-spt-util.html) for creating a protected backup of customer and store data using your Magento encryption key
* [Data Collection](http://docs.magento.com/m2/ee/user_guide/system/support-data-collector.html){:target="_blank"} tool for generating and exporting data 

We recommend using the CLI commands to best create Production data backups. The special backup commands uses your Magento encryption key to protect customer data in the backup. You can import as test data in non-Production environments. For detailed instructions, see [Create a database backup]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-spt-util.html#config-cli-spt-utils-db). You can migrate this data using [these instructions]({{ page.baseurl }}cloud/live/stage-prod-migrate.html).
