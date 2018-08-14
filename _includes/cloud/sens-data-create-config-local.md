#### To create and transfer `config.local.php`:

1.	On your local workstation, find the integration server SSH URL.

            magento-cloud environment:ssh --pipe

2.	Create `config.local.php` on the integration server.

		ssh <SSH URL> "php bin/magento magento-cloud:scd-dump"

	For example,

		ssh itnu84v4m4e5k-master-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento magento-cloud:scd-dump"

	<!-- A message similar to the following displays if you have any sensitive settings configured in your system:

	<pre class="no-copy">
	The configuration file doesn't contain the sensitive data by security reason. The sensitive data can be stored in the next environment variables:
	CONFIG__DEFAULT__DEV__RESTRICT__ALLOW_IPS for dev/restrict/allow_ips</pre> -->
5.	Change to the project root directory.

6.	Transfer the `config.local.php` file to your local workstation.

		rsync <SSH URL>:app/etc/config.local.php ./app/etc/config.local.php