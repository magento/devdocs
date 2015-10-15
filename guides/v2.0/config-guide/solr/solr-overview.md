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
*	<a href="#install-prereq-software">Install prerequisite software</a>
* 	<a href="{{ site.gdeurl }}config-guide/solr/solr-magento.html">Configure Solr and Magento</a>
*	<a href="{{ site.gdeurl }}config-guide/solr/solr-script.html">Script Solr startup and shutdown</a>

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
		<p>The example Solr configuration is <em>not</em> intended to be used in a production site. It's for testing and development only. Because it's simple to use which, it's a great way for you to learn more about Solr.</p>
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
	<td>No</td>
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
*	Using the example Solr web application is not recommended because you probably need to customize a new web application for your use. Also, the provided Jetty application server isn't intended for production use.
*	Turning off your UNIX firewall is not recommended in production. (As an alternative, you can set up firewall rules to allow Magento and Solr to communicate on the default listen port 8983.)
*	Setting SELinux to `permissive` 

<h2 id="prereq">Prerequisites</h2>
The tasks discussed in this topic require the following:

*	Latest available version of Solr 4
*	Latest available Java version

	To determine if Java is already installed, enter the following command:

		java -version

If the message <code>java: command not found</code> displays, you must install the Java SDK as discussed in the next section. 

This topic discusses using Jetty, which comes with Solr. Consult another resource, such as the <a href="http://wiki.apache.org/solr/SolrTomcat" target="_blank">Solr Wiki</a>, to use Tomcat with Solr.

To see if you're currently running Jetty and to check the version, see <a href="https://wiki.eclipse.org/Jetty/FAQ#How_do_I_know_which_version_of_Jetty_I_am_running.3F" target="_blank">How to find out the version of Jetty</a>.

<h2 id="install-prereq-software">Installing prerequisite software</h2>
The following sections discuss how to install the prerequisite software: 

*	<a href="#install-prereq-java">Install Java</a>
*	<a href="#install-prereq-solr">Install Solr 4 and Jetty</a>

<h3 id="install-prereq-java">Install the latest Java JDK</h3>
See one of the following sections:

* <a href="#install-prereq-java-centos">Install the latest JDK on CentOS</a>
* <a href="#install-prereq-java-ubuntu">Install the latest JDK on Ubuntu</a>

<h4 id="install-prereq-java-centos">Install the JDK on CentOS</h4>
See <a href="https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8" target="_blank">this article on digitalocean</a>.

Be sure to install the JDK and *not* the JRE.

<h4 id="install-prereq-java-ubuntu">Install the Java 6 or 7 SDK on Ubuntu</h4>
To install the Java 6 SDK, enter the following command as a user with <code>root</code> privileges:

<pre>apt-get install openjdk-6-jdk</pre>
To install Java 7, enter the following command as a user with <code>root</code> privileges:

<pre>apt-get install openjdk-7-jdk</pre>

<div class="bs-callout bs-callout-info" id="info">
	<p>Java version 7 might not be available for all operating systems. For example, you can search the list of available packages for Ubuntu <a href="http://packages.ubuntu.com/" target="_blank">here</a>.</p>
</div>

<h3 id="install-prereq-solr">Install Solr 4 and Jetty</h3>
The Apache Solr package installs both Solr and Jetty. If Jetty is already installed, see the <a href="https://cwiki.apache.org/confluence/display/solr/Running+Solr+on+Jetty" target="_blank">Solr with Jetty Wiki</a> for more information.

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

