---
group: configuration-guide
title: Configure Magento to use Varnish
functional_areas:
  - Configuration
  - System
  - Setup
---

To configure Magento to use Varnish:

1.	Log in to the [Magento Admin](https://glossary.magento.com/magento-admin) as an administrator.
2.	Click **STORES** > **Settings** > **Configuration** > **ADVANCED** > **System** > **Full Page Cache**.
3.	From the **Caching Application** list, click **Varnish Caching**.
4.	Enter a value in the **TTL for public content** field.
5.	Expand **Varnish Configuration** and enter the following information:

    |Field|Description|
    |--- |--- |
    |Access list|Enter the fully qualified hostname, IP address, or [Classless Inter-Domain Routing (CIDR)](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking) notation IP address range for which to invalidate content.<br><br>[More information](https://www.varnish-cache.org/docs/3.0/tutorial/purging.html)|
    |Backend host|Enter the fully qualified hostname or IP address and listen port of the Varnish backend or origin server; that is, the server providing the content Varnish will accelerate. Typically, this is your web server.<br><br>[More information](https://www.varnish-cache.org/docs/trunk/users-guide/vcl-backends.html)|
    |Backend port|Origin server's listen port.|
    

6.	Click **Save Config**.


You can also activate Varnish from the command line--instead of logging in to the Magento Admin--using MySQL statement syntax:

```bash
mysql -u root -p -D magento -e "INSERT INTO core_config_data ( scope, scope_id, path, value ) VALUES ( 'default', '0', 'system/full_page_cache/caching_application', '2') ON DUPLICATE KEY UPDATE value = 2;"
```

Where `magento` is the name of your database.'

## Export a Varnish configuration file

This step is optional and should only be necessary if you changed the backend host and/or port number that you specified in the [previous section]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html).

To export a Varnish configuration file from the Admin panel:

1.	Click one of the export buttons to create a <code>default.vcl</code> you can use with Varnish.

	For example, if you have Varnish 4, click **Export VCL for Varnish 4**

	The following figure shows an example.<br><br>
	![Configure Magento to use Varnish in the Admin]({{ site.baseurl }}/common/images/config_varnish_admin.png)

2.	Replace your existing <code>default.vcl</code> with the one you just exported.
3.	We recommend you open `default.vcl` and change the value of `acl purge` to the IP address of the Varnish host. (You can specify multiple hosts on separate lines or you can use CIDR notation as well.)

	For example,

		acl purge {
		   "localhost";
		}

4.	Restart Varnish and your web server:

		service varnish restart
		service httpd restart

#### Last step

[Final verification]({{ page.baseurl }}/config-guide/varnish/config-varnish-final.html)
