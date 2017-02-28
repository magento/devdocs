<div markdown="1">

1.	On your local system, find the integration server's SSH URL.

		magento-cloud environment:ssh --pipe
2.	On your local system, create an SSH tunnel to the integration server.

		magento-cloud ssh
3.	Create `config.local.php` on the integration server.

		bin/magento app:config:scd-dump

	<!-- A message similar to the following displays if you have any sensitive settings configured in your system:

	<pre class="no-copy">
	The configuration file doesn't contain the sensitive data by security reason. The sensitive data can be stored in the next environment variables:
	CONFIG__DEFAULT__DEV__RESTRICT__ALLOW_IPS for dev/restrict/allow_ips</pre> -->
4.	Enter `exit` to close the SSH tunnel.
5.	If you haven't done so already, change to the project root directory.
6.	Transfer `config.local.php` to your local system.

		rsync "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress <SSH URL>:/app/app/etc/config.local.php ./app/etc