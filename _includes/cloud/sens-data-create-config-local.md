<div markdown="1">

1.	Find the integration server's SSH URL.

		magento-cloud environment:ssh --pipe -e master
2.	Create `config.local.php` on the integration server.

		ssh -k <SSH URL>@ssh.us.magentosite.cloud "php bin/magento app:config:dump"

	For example,

		ssh -k itnu84v4m4e5k-prod1-ouhx5wq@ssh.us.magentosite.cloud "php bin/magento app:config:dump"
3.	If you haven't done so already, change to the project root directory.
4.	Transfer `config.local.php` to your local system.

		rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress <SSH URL>@ssh.us.magentosite.cloud:/app/app/etc/config.local.php ./app/etc