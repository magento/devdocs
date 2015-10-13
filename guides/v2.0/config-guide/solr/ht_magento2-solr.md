---
layout: default
group: config-guide
subgroup: Solr
title: Install and configure Solr
menu_title: Install and configure Solr (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-topic/solr/ht_magento2-solr.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">


#### Contents

*	<a href="#overview">Overview</a>
<!-- *	<a href="#simple-demo">Simple comparison of Solr and MySQL search engines</a> -->
*	<a href="#prereq">Prerequisites</a>
*	<a href="#install-prereq-software">Install prerequisite software</a>
<!-- *	<a href="#solr-config-tweaks">Basic Solr configuration</a> -->
*	<a href="#solr-reindex">Reindexing catalog search and refreshing the full page cache</a>
<!-- *	<a href="#solr-script">Script Solr startup and shutdown</a> -->
<!-- *	<a href="#next">Next steps</a> -->
<!-- *	<a href="#related">Related information</a> -->

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
The Apache Solr package installs both Solr and Jetty. If Jetty is already installed, see the <a href="http://wiki.apache.org/solr/SolrJetty" target="_blank">Solr with Jetty Wiki</a> for more information.

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

3.  Continue with the next section.

<h2 id="config-solr">Configure Solr to work with Magento</h2>
The following topics discuss how to configure Solr to work with Magento EE:

* <a href="#config-solr-copy-config-files">Copy the Magento Solr configuration and start Solr</a>
* <a href="#config-solr-magento">Configure Magento to work with Solr</a>

<h3 id="config-solr-copy-config-files">Copy the Magento Solr configuration and start Solr</h3>
Magento comes packaged with a sample Solr configuration you can use and customize. To get started, you'll copy the Magento configuration to Solr, replacing any existing files. After that you can start Solr and begin configuring Magento to work with it.

<div class="bs-callout bs-callout-info" id="info">
  <p>The example Solr configuration is <em>not</em> intended to be used in a production site. It's for testing and development only. It's simple to use which makes it a great way for you to learn more about Solr.</p>
</div>

As a user with <code>root</code> privileges, enter the following commands in the order shown to copy over the Solr configuration with the one packaged with Magento EE:

    cd <your Solr install dir>/example/solr
    cp -R collection1 magento2
    cd magento2
    cp -R <your Magento EE install dir>/app/code/Magento/Solr/conf/* .

For example, if Solr is installed in <code>/opt/solr/solr-4.10.4</code> and Magento EE is installed in <code>/var/www/magento/html/magento2ee</code>, enter:

    cd /opt/solr/solr/solr-4.10.4
    cp -R collection1 magento2
    cd magento2
    cp -R /var/www/html/magento2ee/app/code/Magento/Solr/conf/* .

<div class="bs-callout bs-callout-info" id="info">
  <p>If you're prompted to overwrite files, try the command <code>\cp -R &lt;your Magento EE install dir>/app/code/Magento/Solr/conf/* .</code></p>
</div>

After copying files, open `example/solr/core.properties` in a text editor and change:

  name=collection1

to

  name=magento2

#### Task for Tomcat 6 with CentOS only
If you're using Tomcat 6 on CentOS, you must modify `<your Solr install dir>/example/solr/conf/solrconfig.xml`

Locate the following line:

    <dataDir>${solr.data.dir:./solr/data}</dataDir>

Change it to:

    <dataDir>${solr.data.dir:}</dataDir>

#### Start Solr
As a user with <code>root</code> privileges, enter the following command to start Solr:

    java -jar <your Solr install dir>/example/start.jar

<div class="bs-callout bs-callout-warning">
    <p>This method for starting Solr is for convenience and testing purposes only. <!-- In a production environment, you should start and stop Solr using a script as discussed in <a href="#solr-script">Script Solr startup and shutdown</a>. --></p>
</div>



<h3 id="config-solr-magento">Configure Magento to work with Solr</h3>
This section discusses how to configure Magento EE to use the Solr search engine.

To configure Magento to work with Solr:

1.  Log in to the Magento Admin as an administrator.
2.  Click <strong>STORES</strong> > <strong>Configuration</strong> > CATALOG > <strong>Catalog</strong> > <strong>Catalog Search</strong>.
3.  In the right pane, expand <strong>Catalog Search</strong>.
4.  The following table shows the minimum amount of information to enter to test the connection to your Solr search engine. Leave all other values at their defaults.<br />
<table>
<col width="30%">
<col width="70%">
<tbody>
  <tr><th>Option</th>
  <th>Description</th>
</tr>
<tr>
  <td>Search Engine</td>
  <td>Click <strong>Solr</strong></td>
</tr>
<tr>
  <td>Solr Server Hostname</td>
  <td>Enter the fully qualified host name or IP address of the machine running Solr. (If Solr is running on the same host as Magento, you can optionally use <code>localhost</code>.)</td>
</tr>
<tr>
  <td>Solr Server Port</td>
  <td>Enter Solr's listen port. (The example Jetty servlet container uses 8983. The default for Tomcat is usually 8080.)</td>
</tr>
<tr>
  <td>Solr Server Username</td>
  <td><em>Optional.</em> Enter a user name for <a href="http://wiki.apache.org/solr/SolrSecurity" target="_blank">Solr authentication</a>, if desired.</td>
</tr>
<tr>
  <td>Solr Server Password</td>
  <td><em>Optional.</em> Enter the user's password, if desired.</td>
</tr>
<tr>
  <td>Solr Server Timeout</td>
  <td>Enter a connection timeout value, in seconds.</td>
</tr>
<tr>
  <td>Solr Server Path</td>
  <td>Specifies the path and name of the Solr web application. The path used by the example Solr configuration is <code>solr/magento2</code>.

  If you customized Solr, the value you enter in this field must exactly match the value of <code>webapp_name=&lt;value></code> in <code>&lt;your Solr install dir>/example/solr/magento2/conf/conf/scripts.conf</code>.
</td>
</tr>
</tbody>
</table>

The following figure shows an example.
<img src="{{ site.baseurl }}common/images/solr_config-admin.png" alt="Configure Magento to use Solr">

Click <strong>Test Connection</strong>.

The button changes as follows.

<table>
<col width="20%">
<col width="80%">
<tbody>
<tr>
  <th>Button state</th>
  <th>Meaning</th>
</tr>
<tr>
  <td><img src="{{ site.baseurl }}common/images/solr_test-success.png" width="97px" height="17px"></td>
  <td>The test connection succeeded. Click <strong>Save Config</strong> and continue with the next section.</td>
</tr>
<tr>
 <td><img src="{{ site.baseurl }}common/images/solr_test-fail.png" width="116px" height="16px"></td>
 <td><p>The test connection failed. Try the following:</p>
  <ul><li>Examine the command window in which you started Solr for stack traces and exceptions. You must resolve those before you continue.<br />
  In particular, make sure you started Solr as a user with <code>root</code> privileges.</li>
  <li>Verify that <a href="http://php.net/manual/en/filesystem.configuration.php" target="_blank"><code>allow_url_fopen = On</code></a> is present in your server's <code>php.ini</code>.<br />
  If you are not sure where <code>php.ini</code> is located, you can <a href="http://kb.mediatemple.net/questions/764/How+can+I+create+a+phpinfo.php+page%3F#gs" target="_blank">create a <code>phpinfo.php</code> page</a> to locate it.</li>
  <li>Verify the value of the <strong>Solr Server Hostname</strong> field. Make sure the server is available. You can try the server's IP address instead.</li>
  <li>Use the command <code>netstat -an | grep <em>listen-port</em></code> command to verify that the port specified in the <strong>Solr Server Port</strong> field is not being used by another process.<br />
  For example, to see if Solr is running on its default port, use the following command:
  <pre>netstat -an | grep 8983</pre>
  If Solr is running on port 8983, it displays similar to the following:
  <pre>tcp        0      0 :::8983            :::*          LISTEN</pre></li>
  <li>If Solr is installed on a remote machine, use the <code>ping</code> command to verify that machine is reachable from your Magento server.</li>
  <li>If SELinux is enabled, make sure the Solr servlet container's listen port is available; otherwise, Magento cannot communicate with the servlet container. For example, you can consult the <a href="http://wiki.centos.org/HowTos/SELinux" target="_blank">SELinux Centos wiki</a>.</li></ul>
  </td>
</tr>
</tbody>
</table>

Only after the test connection succeeds, click <strong>Save Config</strong> and continue with the next section.

<h2 id="solr-reindex">Reindexing catalog search and refreshing the full page cache</h2>
After you change the Solr configuration, you must reindex the catalog search index and refresh the full page using the Admin or command line.

To refresh the cache using the Admin:

1.  In the Admin, click <strong>System</strong> > <strong>Cache Management</strong>.
2.  Select the check box next to <strong>Page Cache</strong>. 
3.  From the <strong>Actions</strong> list in the upper right, click <strong>Refresh</strong>.<br />
    The following figure shows an example.<br />
    <img src="{{ site.baseurl }}common/images/solr_refresh-cache.png" width="500px">

To clean the cache using the command line, use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean">`magento cache:clean`</a> command.

<div class="bs-callout bs-callout-info" id="info">
  <p>Unlike the cache, indexers are updated by a cron job. Make sure <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cron.html">cron is enabled</a> before you start using Solr.</p>
</div>

<h2 id="next"></a>Next steps</h2>
For additional information about Solr, see the following:

*	For more information about performance, see "Using Solr as a Search Engine" in <a href="http://info.magento.com/rs/magentocommerce/images/Magento_PerformanceWhitepaper-EEv1-9.1.pdf" target="_blank">Maximizing Performance and Scalability with Magento Enterprise Edition</a>
*	<a href="http://wiki.apache.org/solr/#Operations_and_Production" target="_blank">Customize Solr</a>

<!-- <h2 id="related">Related Information</h2>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-faq" target="_blank">Frequently Asked Questions (FAQ) About Using Solr with Magento Enterprise Edition (EE)</a>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-best-practices" target="_blank">Solr and Magento Enterprise Edition (EE) Best Practices</a> -->