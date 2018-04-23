---
layout: default
group: config-guide
subgroup: 11_sites
title: Tutorial&mdash;Set up multiple websites or stores with nginx
menu_title: Tutorial&mdash;Set up multiple websites or stores with nginx
menu_order: 3
menu_node:
version: 2.1
github_link: config-guide/multi-site/ms_nginx.md
functional_areas:
  - Configuration
  - System
  - Setup
---

## Set up multiple websites with nginx {#ms-nginx-over}
This tutorial shows you step-by-step how to set up multiple websites using {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %}.

### Assumptions
We assume the following:

*	You're working on a development machine (laptop, virtual machine, and so on)

	Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.

	Additional tasks are required to set up {{site.data.var.ece}}. After you complete the tasks discussed in this topic, see [Set up multiple {{site.data.var.ece}} websites or stores]({{ page.baseurl}}/cloud/project/project-multi-sites.html).
*	You use one virtual host per website; the virtual host configuration files are located in `/etc/nginx/sites-available`
*	You use `nginx.conf.sample` provided by Magento with only the modifications discussed in this tutorial
*	The Magento software is installed in `/var/www/html/magento2`
*	You have two websites other than the default:

	*	`french.mysite.mg` with website code `french` and store view code `fr`
	*	`german.mysite.mg` with website code `german` and store view code `de`

    <div class="bs-callout bs-callout-tip" markdown="1">
Refer to [Create websites]({{page.baseurl}}/config-guide/multi-site/ms_websites.html#step-2-create-websites) and [Create store views]({{page.baseurl}}/config-guide/multi-site/ms_websites.html#step-4-create-store-views) for help locating these values.
    </div>

### Roadmap for setting up multiple websites with nginx
Setting up multiple stores consists of the following tasks:

1.	[Set up websites, stores, and store views]({{ page.baseurl}}/config-guide/multi-site/ms_websites.html) in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}.
2.	Create one [nginx virtual host](#ms-nginx-vhosts) per Magento {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}.
3.  Pass the values of the [Magento variables]({{page.baseurl}}/config-guide/multi-site/ms_over.html) `$MAGE_RUN_TYPE` and `$MAGE_RUN_CODE` to nginx using the Magento-provided `nginx.conf.sample`.

    *   `$MAGE_RUN_TYPE` can be either `store` or `website`

        *   Use `website` to load your website in your storefront.
        *   Use `store` to load any store view in your storefront.

    *   `$MAGE_RUN_CODE` is the unique website or store view code that corresponds to `$MAGE_RUN_TYPE`

## Step 2: Create nginx virtual hosts {#ms-nginx-vhosts}
This section discusses how to load websites on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. You can use either websites or store views; if you use store views, you must adjust parameter values accordingly. You must complete the tasks in this section as a user with `root` privileges.

{% collapsible To create virtual hosts: %}

1.	Open a text editor and add the following contents to a new file named `/etc/nginx/sites-available/french.mysite.mg.conf`:

		map $http_host $MAGE_RUN_CODE {
           french.mysite.mg french;
		}

		server {
           listen 80;
           server_name french.mysite.mg;
           set $MAGE_ROOT /var/www/html/magento2;
           set $MAGE_MODE developer;
           include /var/www/html/magento2/nginx.conf;
		}
3.	Create another file named `german.mysite.mg.conf` in the same directory with the following contents:

		map $http_host $MAGE_RUN_CODE {
           german.mysite.mg german;
		}

		server {
           listen 80;
           server_name german.mysite.mg;
           set $MAGE_ROOT /var/www/html/magento2;
           set $MAGE_MODE developer;
           include /var/www/html/magento2/nginx.conf;
		}
4.	Save your changes to the files and exit the text editor.
5.	Verify the server configuration:

		nginx -t
6.	If successful, the following message displays:

		nginx: configuration file /etc/nginx/nginx.conf test is successful

	If errors display, check the syntax of your virtual host configuration files.

7.	Create symbolic links in the `/etc/nginx/sites-enabled` directory:

		cd /etc/nginx/sites-enabled
		ln -s /etc/nginx/sites-available/french.mysite.mg french.mysite.mg
		ln -s /etc/nginx/sites-available/german.mysite.mg german.mysite.mg

For more detail about the map directive, see [nginx documentation on the map directive](http://nginx.org/en/docs/http/ngx_http_map_module.html#map){:target="_blank"}.


{% endcollapsible %}

## Verify your site  {#ms-nginx-verify}
{% include config/multi-site_verify.md %}
