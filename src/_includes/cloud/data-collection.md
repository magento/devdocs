To help export Production data as test data to use in Staging and Integration environments, [Run the support utilities]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-spt-util.html):

*  [CLI commands]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-spt-util.html#config-cli-spt-utils-db) (Recommended) to export a protected backup of customer and store data using your {{site.data.var.ee}} encryption key
*  [Data Collection]({{ site.user_guide_url }}/system/support-data-collector.html) tool for generating and exporting data

To migrate this data, see [Migrate and deploy static files and data]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html).