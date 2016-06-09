---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Configure Magento to use Varnish
menu_title: Configure Magento to use Varnish
menu_order: 15
menu_node: 
github_link: config-guide/varnish/config-varnish-magento.md
---

<h2 id="config-varnish-magento">Configure Magento to use Varnish</h2>
To configure Magento to use Varnish:

1.	Log in to the Magento Admin as an administrator.
2.	Click **STORES** > **Configuration** > ADVANCED > **System** > **Full Page Cache**
3.	From the **Caching Application** list, click **Varnish Caching**
4.	Enter a value in the **TTL for public content** field.
5.	Expand **Varnish Configuration** and enter the following information:

	<table>
	<col width="30%">
  	<col width="70%">
	<tbody>
		<tr>
			<th>Field</th>
			<th>Description</th>
		</tr>
	<tr>
		<td>Access list</td>
		<td><p>Enter the fully qualified host name, IP address, or <a href="https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking" target="_blank">Classless Inter-Domain Routing (CIDR)</a> notation IP address range for which to invalidate content.</p>
			<p><a href="https://www.varnish-cache.org/docs/3.0/tutorial/purging.html" target="_blank">More information</a></p></td>
	</tr>	
	<tr>
		<td>Backend host</td>
		<td><p>Enter the fully qualified host name or IP address and listen port of the Varnish <em>backend</em> or <em>origin server</em>; that is, the server providing the content Varnish will accelerate. Typically, this is your web server. </p>
		<p><a href="https://www.varnish-cache.org/docs/trunk/users-guide/vcl-backends.html" target="_blank">More information</a></p></td>
	</tr>
	<tr>
		<td>Backend port</td>
		<td>Origin server's listen port.</td>
	</tr>
	
	</tbody>
	</table>

6.	Click **Save Config**.
7.	Click one of the export buttons to create a <code>default.vcl</code> you can use with Varnish.

	For example, if you have Varnish 4, click **Export VCL for Varnish 4**

	The following figure shows an example.<br><br>
	<img src="{{ site.baseurl }}common/images/config_varnish_admin.png" alt="Configure Magento to use Varnish in the Admin">

8.	Replace your existing <code>default.vcl</code> with the one you just exported.
9.	We recommend you open `default.vcl` and change the value of `acl purge` to the IP address of the Varnish host. (You can specify multiple hosts on separate lines or you can use CIDR notation as well.)

	For example,

		acl purge {
		   "localhost";
		}
		
9.	Restart Varnish and your web server:

		service varnish restart
		service httpd restart

#### Last step
<a href="{{ site.gdeurl }}config-guide/varnish/config-varnish-final.html">Final verification</a>