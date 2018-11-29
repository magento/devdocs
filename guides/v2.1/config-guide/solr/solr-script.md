---
group: configuration-guide
title: Prepare Solr for production
ee_only: True
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{:.bs-callout .bs-callout-warning}
Solr is deprecated in Magento 2.1 and will not be supported in 2.2. In a future release, Solr compatibility will be removed. If possible, use [Elastic Search]({{ site.baseurl }}/guides/v2.1/config-guide/elasticsearch/es-overview.html) as an alternative catalog search engine.

After you've tested the Solr solution, you should perform the following tasks to get it ready for production:

*	See more Solr configuration options in the {{site.data.var.ee}} User Guide (available with the {{site.data.var.ee}} release)
*	Set up [firewall rules](https://fedoraproject.org/wiki/How_to_edit_iptables_rules) to enable Solr and Magento to communicate
*	Implement a custom web application deployed to a scalable application server
*	Consider a dedicated Solr server, or at least deploying Solr to a different server than Magento
*	Consider scalability by [clustering Solr](https://cwiki.apache.org/confluence/display/solr/SolrCloud)
*	[Customize Solr](http://wiki.apache.org/solr)

	{:.bs-callout .bs-callout-warning}
	Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the [Apache Solr Wiki](http://wiki.apache.org/solr/).

*	If you choose to enable SELinux, set up [rules](http://wiki.centos.org/HowTos/SELinux) to allow Magento and Solr to communicate with each other

	SELinux settings are entirely up to you; Magento does not recommend either enabling it or disabling it. Because SELinux is very complex, make sure you have an experienced system administrator who can configure it.
*	Script Solr startup and shutdown as discussed in [Script Solr startup and shutdown](#solr-script)

### Multiple core configuration {#cores}

If you have created multiple cores, make sure the value of the `maxBooleanClauses` parameter is the same on each. This parameter is defined in each core's `solrconfig.xml` file. Solr uses the value defined for the core that initialized most recently as the value for all cores. The default value for the Magento installation is 10240.

If one or more of the `maxBooleanClauses` parameters is set too low, the search results page could display no results.

### Script Solr startup and shutdown {#solr-script}

In a production environment, you should start and stop Solr using a script.

{:.bs-callout .bs-callout-info}
You must perform all tasks discussed in this section as a user with `root` privileges.

Create a script named <code>/etc/init.d/solr</code> with options similar to the following:

```shell
#!/bin/sh

#Starts, stops, and restarts Apache Solr.
#chkconfig: 35 92 08
#description: Starts and stops Apache Solr

SOLR_DIR="<your Solr install dir>"
JAVA_OPTIONS="-Xmx1024m -DSTOP.PORT=<jetty-stop-port> -DSTOP.KEY=<jetty-stop-key> -jar  start.jar"
LOG_FILE="<path-to-solr-log-file>"
JAVA="<java_home>"

case $1 in
start)
echo -n "Starting Solr"
cd $SOLR_DIR
$JAVA $JAVA_OPTIONS 2> $LOG_FILE &
;;
stop)
echo -n "Stopping Solr"
cd $SOLR_DIR
$JAVA $JAVA_OPTIONS --stops
;;
restart)
$0 stop
sleep 1
$0 start
;;
*)
echo "Usage: $0 {start|stop|restart}" >&2
exit 1
;;
esac
```

All parameters shown in the following table are required.

<table>
<col width="200" />
<col width="300" />
<tbody>
<tr>
  <th>Value</th>
  <th>Description</th>
</tr>
<tr>
  <td>&lt;your Solr install dir></td>
  <td>The absolute file system path to your Solr installation. (For example, <code>/etc/solr/apache-solr-3.6.2</code></td>
</tr>
<tr>
  <td>&lt;jetty-stop-port><br />
  &lt;jetty-stop-key></td>
  <td>Security parameters used to prevent malicious attempts to stop Jetty.

  For <code>-DSTOP.PORT=</code>, specify any unused port.

  For <code>-DSTOP.KEY=</code>, specify a string. If you omit a value for <code>-DSTOP.KEY=</code>, Jetty generates a random key you must enter to stop Jetty.

  For more information, see <a href="https://wiki.eclipse.org/Jetty/Howto/Configure_SSL">Securing Jetty.</a>
</td>
</tr>
<tr>
  <td>&lt;path-to-solr-log-file></td>
  <td>Absolute file system path to the Solr log file. (For example, <code>/var/log/solr.log</code>)</td>
</tr>
<tr>
  <td>&lt;java_home></td>
  <td>Absolute file system path to your Java executable. (For example, <code>/usr/bin/java</code>)</td>
</tr>
</tbody>
</table>

An example follows:

```shell
#!/bin/sh

#Starts, stops, and restarts Apache Solr.
#chkconfig: 35 92 08
#description: Starts and stops Apache Solr

SOLR_DIR="/opt/solr/apache-solr-4-10-4/example"
JAVA_OPTIONS="-Xmx1024m -DSTOP.PORT=8079 -DSTOP.KEY=mykey -jar  start.jar"
LOG_FILE="/var/log/solr.log"
JAVA="/usr/bin/java"

case $1 in
start)
echo -n "Starting Solr"
cd $SOLR_DIR
$JAVA $JAVA_OPTIONS 2> $LOG_FILE &
;;
stop)
echo -n "Stopping Solr"
cd $SOLR_DIR
$JAVA $JAVA_OPTIONS --stop
;;
restart)
$0 stop
sleep 1
$0 start
;;
*)
echo "Usage: $0 {start|stop|restart}" >&2
exit 1
;;
esac
```

To complete the script:

*	Make sure you saved the edited version of the script.
*	Give the script executable permissions as follows:

		chmod +x /etc/init.d/solr
*	You can now start, stop, and restart Solr as follows:

	Start Solr: `/etc/init.d/solr start`

	Stop Solr: `/etc/init.d/solr stop`
*	Restart Solr: `/etc/init.d/solr restart`
