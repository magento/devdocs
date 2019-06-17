---
group: configuration-guide
title: Install and configure Solr
ee_only: True
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{:.bs-callout .bs-callout-warning}
Solr is deprecated in Magento 2.1 and will not be supported in 2.2. In a future release, Solr compatibility will be removed. If possible, use [Elastic Search](../../../v2.1/config-guide/elasticsearch/es-overview.html) as an alternative catalog search engine.

{{site.data.var.ee}} version 2.x enables you to configure either of the following as a [catalog](https://glossary.magento.com/catalog) search engine:

*	Full text search using the MySQL database (the default)
*	The [Apache Solr search engine](http://lucene.apache.org/solr/)
Solr enables you to provide your web store users with a powerful full-text search engine that includes:

*	[Faceted search](http://wiki.apache.org/solr/SolrFacetingOverview)
*	[Dynamic clustering using SolrCloud](https://cwiki.apache.org/confluence/display/solr/SolrCloud)
*	Database integration

See one of the following sections for more information:

*	[Intended audience and purpose of this topic](#overview-this-topic)
*	[More information about the Solr solution](#overview-solr)

### Intended audience and purpose of this topic {#overview-this-topic}

This topic is intended for {{site.data.var.ee}} administrators and systems integrators who have some familiarity with search engines&mdash;ideally, who also have Solr configuration experience.
No programming is required to perform the tasks discussed in this topic.

This topic discusses a simple Solr configuration that uses the example Solr configuration provided with Solr, default Solr integration options provided with {{site.data.var.ee}}, and also explains how to configure {{site.data.var.ee}} to use Solr.
Advanced configuration tasks&mdash;such as setting up dictionaries&mdash;are beyond the scope of this topic.

{:.bs-callout .bs-callout-warning}
The example Solr configuration is _not_ intended to be used in a production site. It's for testing and development only. Because it's simple to use, it's a great way for you to learn more about Solr.

### More information about the Solr solution {#overview-solr}

Solr runs as a standalone full-text search server in a servlet container such as Jetty (which is used by the Solr example configuration) and Tomcat.

Solr uses the Lucene Java search [library](https://glossary.magento.com/library) for full-text indexing and search.
Your applications interact with Solr using [HTTP POST](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) (in JSON, [XML](http://wiki.apache.org/solr/UpdateXmlMessages), CSV, or binary formats) to index documents and using [HTTP GET](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3) to retrieve search results back as [JSON](http://wiki.apache.org/solr/SolJSON?highlight=%28json%29%7C%28solr%29), XML, or a variety of other formats (Python, Ruby, [PHP](http://wiki.apache.org/solr/SolPHP?highlight=%28php%29%7C%28solr%29), [CSV](http://wiki.apache.org/solr/CSVResponseWriter?highlight=%28solr%29%7C%28csv%29), binary, and so on).
If you're a programmer, try the [Solr tutorial](https://lucene.apache.org/solr/4_10_0/tutorial.html).
Whether you're a programmer or not, read the [Solr FAQ](http://wiki.apache.org/solr/FAQ).

No programming is required to implement Solr as discussed in this topic.

Solr's powerful external configuration allows it to be tailored to almost any type of application without Java coding, and it has an extensive [plug-in](https://glossary.magento.com/plug-in) architecture when more advanced customization is required.
Solr is highly scalable, providing distributed search and index replication.

{:.bs-callout .bs-callout-warning}
Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the [Apache Solr Wiki](http://wiki.apache.org/solr/).

In this topic, you'll use the example configuration provided with Solr and Magento's provided Solr configuration to implement a simple, quick integration with Solr.

Some reasons to use Solr with Magento include:

*	Magento ships with a sample Solr configuration that enables you to provide users with a powerful search engine without your needing to customize any code.
*	You get better performance of search, catalog views, and [layered navigation](http://www.magentocommerce.com/knowledge-base/entry/how-does-layered-navigation-work).
*	When the system is under load, Solr avoids frequent updates of the MySQL <code>catalogsearch_fulltext</code> table and alleviates issues with database table locks.

## Assumptions for using Solr in a development environment {#dev}

This topic discusses a simple way to set up Solr in a development environment.
No coding is required.

The following suggestions in this topic should *not* be used in a production environment because they're potentially unsafe:

*	Starting the example Solr web application using `java -jar start.jar` because it's not maintainable.
  You should script starting and stopping Solr instead.
*	Using the example Solr web application is not recommended because you should customize a new web application for your use.
  You can also [compare application servers](https://dzone.com/articles/top-open-source-javaEE-application-servers) to determine if the bundled Jetty application server is appropriate for your needs.
*	Turning off your UNIX firewall is not recommended in production.
  (As an alternative, you can set up firewall rules to allow Magento and Solr to communicate.)
*	Setting SELinux to `permissive`

	SELinux settings are entirely up to you.
Magento does not recommend particular settings; however, be aware that setting up SELinux is very complex.

## Prerequisites {#prereq}

The tasks discussed in this topic require the following:

*	[Disable the UNIX firewall and SELinux](#prereq-secy)
*	[Latest available Java version](#prereq-java)
*	[Latest available version of Solr 4](#install-prereq-solr)

### Firewall and SELinux {#prereq-secy}

By default, UNIX systems generally enable a firewall with restrictive rules and also enable SELinux, which imposes other types of security on the operating system.
It's easier to run Solr in development by disabling the firewall and SELinux but that choice is up to you.

If you choose to enable your firewall and SELinux, you must set up rules to allow TCP traffic between Magento and Solr on Solr's listen port (8983 by default).

#### Disable iptables and SELinux

To stop the `iptables` (firewall) service, enter the following command as a user with `root` privileges:

	service iptables stop

To set SELinux for permissive mode:

1.	To determine if SELinux is enabled, enter the following command:

		getenforce

	`Enforcing` displays to confirm that SELinux is running.
  (If `Permissive` displays, continue with the next section.)
2.	To change to permissive mode, enter:

		setenforce 0

#### Set up rules for iptables and SELinux

To set up rules to allow communication with the firewall or SELinux enabled, consult the following resources:

*	[iptables how-to](https://help.ubuntu.com/community/IptablesHowTo)
*	[How to edit iptables rules (fedora project)](https://fedoraproject.org/wiki/How_to_edit_iptables_rules)
*	[25 Most Frequently Used Linux IPTables Rules Examples](https://www.thegeekstuff.com/2011/06/iptables-rules-examples/)
*	[Introduction to SELinux (CentOS.org)](https://www.centos.org/docs/5/html/Deployment_Guide-en-US/ch-selinux.html)
*	[SELinux How-To Wiki (CentOS.org)](https://wiki.centos.org/HowTos/SELinux)

### Install the Java Software Development Kit (JDK) {#prereq-java}

To determine if Java is already installed, enter the following command:

	java -version

If the message <code>java: command not found</code> displays, you must install the Java SDK as discussed in the next section.


This topic discusses using Jetty, which comes with Solr.
Consult another resource, such as the [Solr Wiki](http://wiki.apache.org/solr/SolrTomcat), to use Tomcat with Solr.

To see if you're currently running Jetty and to check the version, see [How to find out the version of Jetty](https://wiki.eclipse.org/Jetty/FAQ#How_do_I_know_which_version_of_Jetty_I_am_running.3F).

See one of the following sections:

* [Install the latest JDK on CentOS](#install-prereq-java-centos)
* [Install the latest JDK on Ubuntu](#install-prereq-java-ubuntu)

#### Install the JDK on CentOS {#install-prereq-java-centos}

See [this article on digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8).

Be sure to install the JDK and *not* the JRE.

#### Install the Java 6 or later SDK on Ubuntu {#install-prereq-java-ubuntu}

To install the Java 6 SDK, enter the following command as a user with <code>root</code> privileges:

<pre>apt-get install openjdk-6-jdk</pre>
To install Java 7, enter the following command as a user with <code>root</code> privileges:

<pre>apt-get install openjdk-7-jdk</pre>

{:.bs-callout .bs-callout-info}
Java version 7 might not be available for all operating systems.
For example, you can search the list of available packages for Ubuntu [here](http://packages.ubuntu.com/).

To install JDK 1.8 on Ubuntu, see [Oracle documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html).

### Install Solr 4 and Jetty {#install-prereq-solr}

The Apache Solr package installs both Solr and Jetty.
If Jetty is already installed, see the [Solr with Jetty Wiki](https://cwiki.apache.org/confluence/display/solr/Running+Solr+on+Jetty) for more information.

{:.bs-callout .bs-callout-info}
Tomcat is also a supported servlet container for Solr but discussing how to set up Tomcat with Solr is beyond the scope of this topic.
For more information, see the [Solr With Tomcat Wiki](http://wiki.apache.org/solr/SolrTomcat).

To install Solr and Jetty:

1.  As a user with `root` privileges, use `wget` or a similar command to download the latest version of Solr 4 to an empty directory such as `/opt/solr`.

	An example follows.

		mkdir -p <empty-directory<>  
		cd <directory>
		wget http://archive.apache.org/dist/lucene/solr/4.10.4/solr-4.10.4.tgz

	Messages similar to the following display to confirm a successful download.

		wget http://archive.apache.org/dist/lucene/solr/4.10.4/solr-4.10.4.tgz
		--2016-10-01 15:54:37--  http://archive.apache.org/dist/lucene/solr/4.10.4/solr-4.10.4.tgz
		Resolving archive.apache.org... 163.172.17.199
		Connecting to archive.apache.org|163.172.17.199|:80... connected.
		HTTP request sent, awaiting response... 200 OK
		Length: 150059757 (143M) [application/x-gzip]
		Saving to: "solr-4.10.4.tgz"

		100%[==========================================================>] 150,059,757 8.99M/s   in 4.5s
		2016-10-01 15:55:23 (3.18 MB/s) - "solr-4.10.4.tgz" saved [150059757/150059757]

2.  Unpack the Solr installation; an example follows.

		tar -xvf solr-4.10.4.tgz

#### Next step
[Configure Solr to work with Magento]({{ page.baseurl }}/config-guide/solr/solr-magento.html)
