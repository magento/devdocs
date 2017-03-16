---
layout: default
group: config-guide
subgroup: 999_prod
title: Deployment overview
menu_title: Deployment overview
menu_node: 
menu_order: 11
version: 2.2
github_link: config-guide/prod/prod_deploy-over.md
---

Notes:

*	Configuration management _and_ static asset deployment
*	Shared configuration and environment-specific configuration (which includes sensitive values)

	*	Updated flow diagram
*	What a PHP developer needs to know
*	Pointers to configuration references
*	Deployment rules and guidelines

	*	Code in source control, assume Git
	*	TBD
	*	TBD
	*	Can't set Stores > Configuration > Advanced > Developer options in production mode (verify path)


Procedure notes:

*	`.gitignore` includes both `config.php` and `env.php`
*	

On production machine:

*	`git clone -b` into docroot
*	Edit env.php to point to correct DB (make sure it's empty)
*	composer install
*	Set perms
*	Add SSH key from Magento machine to ~/authorized_keys so you can rsync DB dump
*	zcat ~/db/EE2.2.sql.gz | mysql -u magento -pmaG3nTo! magento
*	Change base URL: cloud/access-acct/first-time-setup_import-import.md

	UPDATE core_config_data SET value='http://10.235.32.11/magento2/' WHERE path='web/unsecure/base_url';
*	Test
*	Set production mode

On Magento machine:
*	Comment `generated/*` from .gitignore
*	mysqldump -h <database host> --user=<database user name> --password=<password> --single-transaction <database name> | gzip - > ~/database.sql.gz
*	Create dir for rsync
*	rsync -azvP ~/EE2.2.sql.gz magento_user@10.235.32.11:~/db

Build machine:

*	Prereq: Git, PHP, Composer

*	Check out from Git
*	Modify .gitignore
*	composer install
*	prod mode?
*	php bin/magento setup:di:compile
*	php bin/magento setup:static-content:deploy -f (if in developer or default mode)

Scenarios:

1) Change setting neither sensitive nor specific (e.g., locale). app:config:dump, transfer config.php, generate static and compile on build, Git pull on prod

2) Add website, store, store view: app:config:dump on dev, pull to build, then to production, run app:config:import (nothing imported).

3) Set sensitive value in dev, run app:config:sensitive:set on production to enable same setting