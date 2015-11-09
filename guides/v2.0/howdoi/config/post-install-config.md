---
layout: default
group: howdoi
subgroup: Config
title: Configure the Magento application
menu_title: Configure the Magento application
menu_node: parent
menu_order: 1
github_link: howdoi/config/post-install-config.md
---

## Configure the Magento application
Now that you've finished installing the Magento application, you need to configure it. This topic provides some recommended configuration settings for Magento; the list is not complete so watch this space.

<h3 id="post-install-cron">Set up cron</h3>
cron&mdash;the UNIX task scheduler&mdash;is critical to Magento's day-to-day operations. It schedules things like reindexing, newsletters, e-mails, sitemaps, and so on.

Immediately after finishing your Magento installation, set up a *crontab* for the Magento file system owner.

As a user with `root` privileges, enter the following command:

	crontab -u <magento file system owner> -e

For example,

	crontab -u magento_user -e

A text editor displays. Enter the following:

	*/1 * * * * php <your Magento install dir>/bin/magento cron:run &
	*/1 * * * * php <your Magento install dir>/update/cron.php &
	*/1 * * * * php <your Magento install dir>/bin/magento setup:cron:run &

The first line enables cron for general use (reindexing, e-mails, and so on). The other lines run cron for the <a href="{{ site.gdeurl }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager and System Upgrade utilities</a>.

For example, if you installed Magento in `/var/www/html/magento2`, enter

	*/1 * * * * php /var/www/html/magento2/bin/magento cron:run &
	*/1 * * * * php /var/www/html/magento2/update/cron.php &
	*/1 * * * * php /var/www/html/magento2/bin/magento setup:cron:run &

<h3 id="post-install-secy">Security settings</h3>
After installation, we recommend the following:

*	Make sure your file ownership and permissions are set properly
*	We strongly recommend <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-adminurl.html">changing the default Admin URL</a> from `admin` to something else
*	Make sure the <a href="{{ site.gdeurl }}config-guide/secy/secy-xframe.html">`X-Frame-Option` HTTP header</a> is set properly.
*	Take precautions against cross-site scripting (XSS) by <a href="{{ site.gdeurl }}frontend-dev-guide/templates/template-security.html">securing your templates</a>
<!-- Set up roles and restricted users (Admin) -->


Set up the root category at least (Admin) 


GORDON

Set up payment processors (Admin)
Enable the flat catalog if it’s not by default (Admin)-->     
3.       SEO settings; specifically, setting up robots.txt (do not want scans in development, do want scans in production) (combination)
4.       
5.       Verify server rewrites (devdocs)
7.       File system permissions in dev and production (other security settings? Gordon?)
8.       Logging (server config; things like log rotation, archiving, syslog if it still exists) (devdocs)
9.       Set up an e-mail server (devdocs)
10.   Various cleanup things like clearing the quotes table periodically, cleaning up flat category table (Admin)
11.   Caching mainly for production (devdocs)



RICHARD BAIK

Setup email addresses and templates. There are quite a few, located in different spots so they are sometimes overlooked.
o   Sys > config 
  Store email addresses
  Contacts
  Sales emails
  ?
-          Tax rules and classes
-          Shipping settings
-          Store logo/favicon. I occasionally see EE and CE sites with the default Magento favicon.
-          Probably more of a best practice and falls under #7 on the list, but maybe suggest changing the admin URL instead of using the default /admin


SERGEY NOSOV

1. google tags/analytics;
2. setup payment/shipment methods with enabled logging;
3. change default CMS pages
4. contact us form
5. SOLR
6. custom rewrites


