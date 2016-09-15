---
layout: default
group: config-guide
subgroup: 15_Solr
title: Prepare Solr for production
menu_title: Prepare Solr for production
menu_order: 3
menu_node:
version: 2.0
github_link: config-guide/solr/solr-script.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">

<h2 id="solr-prod">Prepare Solr for production</h2>
After you've tested the Solr solution, you should perform the following tasks to get it ready for production:

*	See more Solr configuration options in the Magento EE User Guide (available with the Magento 2 EE release)
*	Set up <a href="https://fedoraproject.org/wiki/How_to_edit_iptables_rules" target="_blank">firewall rules</a> to enable Solr and Magento to communicate
*	Implement a custom web application deployed to a scalable application server
*	Consider a dedicated Solr server, or at least deploying Solr to a different server than Magento
*	Consider scalability by <a href="https://cwiki.apache.org/confluence/display/solr/SolrCloud" target="_blank">clustering Solr</a>
*	[Customize Solr](http://wiki.apache.org/solr){:target="_blank"}

	<div class="bs-callout bs-callout-warning">
		<p>Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the <a href="http://wiki.apache.org/solr/" target="_blank">Apache Solr Wiki</a>.</p>
	</div>
*	If you choose to enable SELinux, set up <a href="http://wiki.centos.org/HowTos/SELinux" target="_blank">rules</a> to allow Magento and Solr to communicate with each other

	SELinux settings are entirely up to you; Magento does not recommend either enabling it or disabling it. Because SELinux is very complex, make sure you have an experienced system administrator who can configure it.
*	Script Solr startup and shutdown as discussed in <a href="#solr-script">Script Solr startup and shutdown</a>

<h3 id="cores">Multiple core configuration</h3>

If you have created multiple cores, make sure the value of the `maxBooleanClauses` parameter is the same on each. This parameter is defined in each core's `solrconfig.xml` file. Solr uses the value defined for the core that initialized most recently as the value for all cores. The default value for the Magento installation is 10240.

If one or more of the `maxBooleanClauses` parameters is set too low, the search results page could display no results.

<h3 id="solr-script">Script Solr startup and shutdown</h3>
In a production environment, you should start and stop Solr using a script.

<div class="bs-callout bs-callout-info" id="info">
	<p>You must perform all tasks discussed in this section as a user with <code>root</code> privileges.</p>
</div>

Create a script named <code>/etc/init.d/solr</code> with options similar to the following:

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

All parameters shown in the following table are required.

<table>
<col width="200">
<col width="300">
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

  For more information, see <a href="https://wiki.eclipse.org/Jetty/Howto/Configure_SSL" target="_blank">Securing Jetty</a>.
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

To complete the script:

*	Make sure you saved the edited version of the script.
*	Give the script executable permissions as follows:

		chmod +x /etc/init.d/solr
*	You can now start, stop, and restart Solr as follows:

	Start Solr: `/etc/init.d/solr start`

	Stop Solr: `/etc/init.d/solr stop`
*	Restart Solr: `/etc/init.d/solr restart`

<!-- <h2 id="next"></a>Next steps</h2>
For additional information about Solr, see the following:

*	For more information about performance, see "Using Solr as a Search Engine" in <a href="http://info.magento.com/rs/magentocommerce/images/Magento_PerformanceWhitepaper-EEv1-9.1.pdf" target="_blank">Maximizing Performance and Scalability with Magento Enterprise Edition</a>
*	<a href="http://wiki.apache.org/solr/#Operations_and_Production" target="_blank">Customize Solr</a> -->

<!-- <h2 id="related">Related Information</h2>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-faq" target="_blank">Frequently Asked Questions (FAQ) About Using Solr with Magento Enterprise Edition (EE)</a>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-best-practices" target="_blank">Solr and Magento Enterprise Edition (EE) Best Practices</a> -->
