---
layout: default
group: config-guide
subgroup: Solr
title: Install and configure Solr
menu_title: Install and configure Solr (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-guide/solr/solr-overview.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#overview">Overview</a>
*	<a href="#dev">Assumptions for using Solr in a development environment</a>
*	<a href="#prereq">Prerequisites</a>
* 	<a href="{{ site.gdeurl }}config-guide/solr/solr-magento.html">Configure Solr and Magento</a>
*	<a href="{{ site.gdeurl }}config-guide/solr/solr-script.html">Prepare Solr for production</a>

<h2 id="overview">Overview</h2>
Magento Enterprise Edition (EE) version 2.x enables you to configure either of the following as a catalog search engine:

*	Full text search using the MySQL database (the default)
*	The <a href="http://lucene.apache.org/solr/" target="_blank">Apache Solr search engine</a>
Solr enables you to provide your web store users with a powerful full-text search engine that includes:

*	<a href="http://wiki.apache.org/solr/SolrFacetingOverview" target="_blank">Faceted search</a>
*	<a href="https://cwiki.apache.org/confluence/display/solr/SolrCloud" target="_blank">Dynamic clustering using SolrCloud</a>
*	Database integration

See one of the following sections for more information:

*	<a href="#overview-this-topic">Intended audience and purpose of this topic</a>
*	<a href="#overview-example">Comparing the search options</a>
*	<a href="#overview-solr">More information about the Solr solution</a>

<h3 id="overview-this-topic">Intended audience and purpose of this topic</h3>
This topic is intended for Magento EE administrators and systems integrators who have some familiarity with search engines&mdash;ideally, who also have Solr configuration experience. No programming is required to perform the tasks discussed in this topic.

This topic discusses a simple Solr configuration that uses the example Solr configuration provided with Solr, default Solr integration options provided with Magento EE, and also explains how to configure Magento EE to use Solr. Advanced configuration tasks&mdash;such as setting up dictionaries&mdash;are beyond the scope of this topic.

<div class="bs-callout bs-callout-warning">
		<p>The example Solr configuration is <em>not</em> intended to be used in a production site. It's for testing and development only. Because it's simple to use, it's a great way for you to learn more about Solr.</p>
</div>

<h3 id="overview-example">Comparing the search options</h3>
The following table provides a quick comparison between Magento with the default MySQL full text search and Magento with Solr search.

<table>
<tbody>
	<tr><th>Feature</th>
	<th>Magento with MySQL full-text search</th>
	<th>Magento with Solr search</th>
</tr>
<tr>
	<td>Full text search</td>
	<td>Yes and also supports two additional search modes:
	<ul><li>Like</li>
			<li>Combined (like and full text)</li></ul></td>
	<td>Yes&dagger;</td>
</tr>
<tr>
	<td>Search recommendations</td>
	<td>Yes</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Faceted search (used in layered navigation)</td>
	<td>Yes</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Range (such as price range)</td>
	<td>Yes</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Sort-by options (for example, sort by relevance)</td>
	<td>Yes</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Zero results tips or results correction</td>
	<td>No</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Suggestions</td>
	<td>No</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Clustering</td>
	<td>No</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Attribute weight based on attribute settings</td>
	<td>Yes</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Search localized characters</td>
	<td>No</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Word delimiter (for example, searching for <code>spider man</code> or <code>spiderman</code> return <code>spider-man</code>)</td>
	<td>No</td>
	<td>Yes</td>
</tr>
</tbody>
</table>
&dagger;&mdash;"Like" searching is supported by MySQL full text search but not by Solr. <!-- Defined by the <a href="http://doc4dev.net/doc/Magento/1/class-Mage_CatalogSearch_Model_Resource_Fulltext.html" target="_blank"><code>Mage_CatalogSearch_Model_Resource_Fulltext::prepareResult()</code></a> class, like searching joins each term in your search using LIKE statements combined by OR. Like searching is best used in stores that have simple products where users search for specific terms. -->

<h3 id="overview-solr">More information about the Solr solution</h3>
Solr runs as a standalone full-text search server in a servlet container such as Jetty (which is used by the Solr example configuration) and Tomcat.

Solr uses the Lucene Java search library for full-text indexing and search. Your applications interact with Solr using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">HTTP POST</a> (in JSON, <a href="http://wiki.apache.org/solr/UpdateXmlMessages" target="_blank">XML</a>, CSV, or binary formats) to index documents and using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">HTTP GET</a> to retrieve search results back as <a href="http://wiki.apache.org/solr/SolJSON?highlight=%28json%29%7C%28solr%29" target="_blank">JSON</a>, XML, or a variety of other formats (Python, Ruby, <a href="http://wiki.apache.org/solr/SolPHP?highlight=%28php%29%7C%28solr%29" target="_blank">PHP</a>, <a href="http://wiki.apache.org/solr/CSVResponseWriter?highlight=%28solr%29%7C%28csv%29" target="_blank">CSV</a>, binary, and so on). If you're a programmer, try the <a href="https://lucene.apache.org/solr/4_10_0/tutorial.html" target="_blank">Solr tutorial</a>. Whether you're a programmer or not, read the <a href="http://wiki.apache.org/solr/FAQ" target="_blank">Solr FAQ</a>.

No programming is required to implement Solr as discussed in this topic.

Solr's powerful external configuration allows it to be tailored to almost any type of application without Java coding, and it has an extensive plug-in architecture when more advanced customization is required. Solr is highly scalable, providing distributed search and index replication. 


<div class="bs-callout bs-callout-warning">
	<p>Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the <a href="http://wiki.apache.org/solr/" target="_blank">Apache Solr Wiki</a>.</p>
</div>

In this topic, you'll use the example configuration provided with Solr and Magento's provided Solr configuration to implement a simple, quick integration with Solr.

Some reasons to use Solr with Magento include:

*	Magento ships with a sample Solr configuration that enables you to provide users with a powerful search engine without your needing to customize any code.
*	You get better performance of search, catalog views, and <a href="http://www.magentocommerce.com/knowledge-base/entry/how-does-layered-navigation-work" target="_blank">layered navigation</a>.
*	When the system is under load, Solr avoids frequent updates of the MySQL <code>catalogsearch_fulltext</code> table and alleviates issues with database table locks.

<h2 id="dev">Assumptions for using Solr in a development environment</h2>
This topic discusses a simple way to set up Solr in a development environment. No coding is required.

The following suggestions in this topic should *not* be used in a production environment because they're potentially unsafe:

*	Starting the example Solr web application using `java -jar start.jar` because it's not maintainable. You should script starting and stopping Solr instead.
*	Using the example Solr web application is not recommended because you should customize a new web application for your use. You can also <a href="https://dzone.com/articles/top-open-source-javaEE-application-servers" target="_blank">compare application servers</a> to determine if the bundled Jetty application server is appropriate for your needs.
*	Turning off your UNIX firewall is not recommended in production. (As an alternative, you can set up firewall rules to allow Magento and Solr to communicate.)
*	Setting SELinux to `permissive` 

	SELinux settings are entirely up to you. Magento does not recommend particular settings; however, be aware that setting up SELinux is very complex. 

<h2 id="prereq">Prerequisites</h2>
The tasks discussed in this topic require the following:

*	<a href="#prereq-secy">Disable the UNIX firewall and SELinux</a>
*	<a href="#prereq-java">Latest available Java version</a>
*	<a href="#install-prereq-solr">Latest available version of Solr 4</a>

<h3 id="prereq-secy">Firewall and SELinux</h3>
By default, UNIX systems generally enable a firewall with restrictive rules and also enable SELinux, which imposes other types of security on the operating system. It's easier to run Solr in development by disabling the firewall and SELinux but that choice is up to you.

If you choose to enable your firewall and SELinux, you must set up rules to allow TCP traffic between Magento and Solr on Solr's listen port (8983 by default).

#### Disable iptables and SELinux
To stop the `iptables` (firewall) service, enter the following command as a user with `root` privileges:

	service iptables stop

To set SELinux for permissive mode:

1.	To determine if SELinux is enabled, enter the following command:

		getenforce

	`Enforcing` displays to confirm that SELinux is running. (If `Permissive` displays, continue with the next section.)
2.	To change to permissive mode, enter:

		setenforce 0

#### Set up rules for iptables and SELinux
To set up rules to allow communication with the firewall or SELinux enabled, consult the following resources:

*	<a href="https://help.ubuntu.com/community/IptablesHowTo" target="_blank">iptables how-to</a>
*	<a href="https://fedoraproject.org/wiki/How_to_edit_iptables_rules" target="_blank">How to edit iptables rules (fedora project)</a>
*	<a href="http://www.thegeekstuff.com/2011/06/iptables-rules-examples/" target="_blank">25 Most Frequently Used Linux IPTables Rules Examples</a>
*	<a href="https://www.centos.org/docs/5/html/Deployment_Guide-en-US/ch-selinux.html" target="_blank">Introduction to SELinux (CentOS.org)</a>
*	<a href="https://wiki.centos.org/HowTos/SELinux" target="_blank">SELinux How-To Wiki (CentOS.org)</a>

{% include config/install-java.md %}

<h3 id="install-prereq-solr">Install Solr 4 and Jetty</h3>
The Apache Solr package installs both Solr and Jetty. If Jetty is already installed, see the <a href="https://cwiki.apache.org/confluence/display/solr/Running+Solr+on+Jetty" target="_blank">Solr with Jetty Wiki</a> for more information.

This topic discusses using Jetty, which comes with Solr. Consult another resource, such as the <a href="http://wiki.apache.org/solr/SolrTomcat" target="_blank">Solr Wiki</a>, to use Tomcat with Solr. To see if you're currently running Jetty and to check the version, see <a href="https://wiki.eclipse.org/Jetty/FAQ#How_do_I_know_which_version_of_Jetty_I_am_running.3F" target="_blank">How to find out the version of Jetty</a>.

<div class="bs-callout bs-callout-info" id="info">
	<p>Tomcat is also a supported servlet container for Solr but discussing how to set up Tomcat with Solr is beyond the scope of this topic. For more information, see the <a href="http://wiki.apache.org/solr/SolrTomcat" target="_blank">Solr With Tomcat Wiki</a>.</p>
</div>

To install Solr and Jetty:

1.  As a user with `root` privileges, use `wget` or a similar command to download the latest version of Solr 4 to an empty directory such as `/opt/solr`. 

	An example follows.

		mkdir -p <empty-directory<>  
		cd <directory>
		wget http://www.trieuvan.com/apache/lucene/solr/4.10.4/solr-4.10.4.tgz

	Messages similar to the following display to confirm a successful download.

		wget http://www.trieuvan.com/apache/lucene/solr/4.10.4/solr-4.10.4.tgz
		--2015-07-11 14:39:05--  http://www.trieuvan.com/apache/lucene/solr/4.10.4/solr-4.10.4.tgz
		Resolving www.trieuvan.com... 66.201.46.168
		Connecting to www.trieuvan.com|66.201.46.168|:80... connected.
		HTTP request sent, awaiting response... 200 OK
		Length: 35866329 (34M) [application/x-gzip]
		Saving to: “solr-4.10.4.tgz”

		100%[==============================================================================================>] 35,866,329  8.63M/s   in 4.3s
		2015-07-11 14:39:09 (8.04 MB/s) - "solr-4.10.4.tgz" saved [35866329/35866329]0

2.  Unpack the Solr installation; an example follows.

		tar -xvf solr-4.10.4.tgz

#### Next step
<a href="{{ site.gdeurl }}config-guide/solr/solr-magento.html">Configure Solr to work with Magento</a>

