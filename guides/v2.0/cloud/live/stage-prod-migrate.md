---
layout: default
group: cloud
subgroup: 40_live
title: Migrate data
menu_title: Migrate data
menu_order: 10
menu_node: 
level3_menu_node: level3child
level3_subgroup: stage-prod
version: 2.0
github_link: cloud/live/stage-prod-migrate.md
---

## Migrate data {#cloud-live-migrate}
To migrate your database and code:

*	[Migrate static files](#cloud-live-migrate-static)
*	[Migrate the database](#cloud-live-migrate-db)

	In the event of issues, make fixes in your integration system, test them, and push updated code to your staging repository using Git commands.

### Migrate static files {#cloud-live-migrate-static}
This section discusses how to migrate static files from your `pub/media` directory to staging or production. We recommend using the Linux remote synchronization and file transfer command [`rsync`](https://en.wikipedia.org/wiki/Rsync){:target="_blank"}. rsync uses an algorithm that minimizes the amount of data by moving only the portions of files that have changed; in addition, it supports compression.

We suggest using the following syntax:

	rsync -azvP <source> <destination>

Options:

	`a` archive
	`z` compress
	`v` verbose
	`P` partial progress

For additional options, see the [rsync man page](http://linux.die.net/man/1/rsync){:target="_blank"}.

To migrate static files:

1.	Log in to your local development machine.
2.	Log in to your Magento Enterprise Cloud account:

		magento-cloud login
3.	If necessary, change to the project directory.
4.	If necessary, check out the master branch:

		magento-cloud environment:checkout master
5.	Pull any changes from the server:

		git pull origin master
6.	Open an SSH connection to your staging or production server:

	*	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
6.	rsync the `pub/media` directory from your local Magento server to staging or production:

		rsync -azvP pub/media/ <developmemt machine user name>@<development machine host or IP>:pub/media/ 

### Migrate the database {#cloud-live-migrate-db}
To migrate the database:

1.	SSH to the master branch of your integration environment:

		magento-cloud environment:ssh
2.	Find the database login information:

		php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"]))->database);'
3.	Create a database dump:

		mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction main | gzip - > /tmp/database.sql.gz
4.	Transfer the database dump to staging or production:

	*	Staging: `rsync -azvP /tmp/database.sql.gz <project ID>_stg@<project ID>.ent.magento.cloud:/tmp`
	*	Production: `rsync -azvP /tmp/database.sql.gz <project ID>@<project ID>.ent.magento.cloud:/tmp`
8.	Enter `exit` to terminate the SSH connection.
9.	Open an SSH connection to your staging or production server:

	*	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
	*	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`
10.	Import the database dump:

		zcat database.sql.gz | mysql -u <username> -p<password> <database name>

	Using the example from step 2,

		zcat database.sql.gz | mysql -u user main

#### Next step
[Test]({{ page.baseurl }}cloud/live/stage-prod-test.html)