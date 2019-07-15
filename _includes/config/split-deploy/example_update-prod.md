To update the production system:

1.	Log in to your production system as, or switch to, the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner).
2.	Start maintenance mode:

		cd <Magento root dir>
		php bin/magento maintenance:enable

	For additional options, such as the ability to set an IP address whitelist, see [`magento maintenance:enable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html).
3.	If you use {{site.data.var.ee}}, stop queue workers. TBD
3.	Pull code from source control.

	The Git command follows:

		git pull mconfig m2.2_deploy
4.	Update the configuration:

		php bin/magento app:config:import
5.	Clean the cache:

		php bin/magento cache:clean
4.	End maintenance mode:

		php bin/magento maintenance:disable
