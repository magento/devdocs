---
layout: default
group: config-topic
subgroup: Solr
title: Install and configure Solr
menu_title: Install and configure Solr
menu_order: 1
menu_node: parent
github_link: config-topic/solr/ht_magento2-solr.md
---


<!-- Title: How to Use the Solr Search Engine With Magento Enterprise Edition -->
<!-- URL: how-to-use-the-solr-search-engine-with-magento-enterprise-edition -->

#### Contents

*	<a href="#overview">Overview</a>
*	<a href="#simple-demo">Simple comparison of Solr and MySQL search engines</a>
*	<a href="#prereq">Prerequisites</a>
*	<a href="#install-prereq-software">Installing prerequisite software</a>
*	<a href="#solr-config-tweaks">Basic Solr configuration</a>
*	<a href="#solr-reindex">Reindexing catalog search and refreshing the fll page cache</a>
*	<a href="#solr-script">Script Solr startup and shutdown</a>
*	<a href="#next">Next steps</a>
*	<a href="#related">Related information</a>

<h2 id="overview">Overview</h2>
Magento Enterprise Edition (EE) versions 2.x enable you to configure either of the following as a catalog search engine:

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
  <td>Word delimiter (for example, searching for <tt>spider man</tt> or <tt>spiderman</tt> return <tt>spider-man</tt>)</td>
  <td>No</td>
  <td>Yes</td>
</tr>
</tbody>
</table>
&dagger;&mdash;"Like" searching is supported by MySQL full text search but not by Solr. Defined by the <a href="http://doc4dev.net/doc/Magento/1/class-Mage_CatalogSearch_Model_Resource_Fulltext.html" target="_blank"><tt>Mage_CatalogSearch_Model_Resource_Fulltext::prepareResult()</tt></a> class, like searching joins each term in your search using LIKE statements combined by OR. Like searching is best used in stores that have simple products where users search for specific terms.

<h3 id="overview-solr">More information about the Solr solution</h3>
Solr runs as a standalone full-text search server in a servlet container such as Jetty (which is used by the Solr example configuration) and Tomcat.

Solr uses the Lucene Java search library for full-text indexing and search. Your applications interact with Solr using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">HTTP POST</a> (in JSON, <a href="http://wiki.apache.org/solr/UpdateXmlMessages" target="_blank">XML</a>, CSV, or binary formats) to index documents and using <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">HTTP GET</a> to retrieve search results back as <a href="http://wiki.apache.org/solr/SolJSON?highlight=%28json%29%7C%28solr%29" target="_blank">JSON</a>, XML, or a variety of other formats (Python, Ruby, <a href="http://wiki.apache.org/solr/SolPHP?highlight=%28php%29%7C%28solr%29" target="_blank">PHP</a>, <a href="http://wiki.apache.org/solr/CSVResponseWriter?highlight=%28solr%29%7C%28csv%29" target="_blank">CSV</a>, binary, and so on). If you're a programmer, try the <a href="http://lucene.apache.org/solr/api-3_6_2/doc-files/tutorial.html" target="_blank">Solr tutorial</a>. Whether you're a programmer or not, read the <a href="http://wiki.apache.org/solr/FAQ" target="_blank">Solr FAQ</a>.

No programming is required to implement Solr as discussed in this topic.

Solr's powerful external configuration allows it to be tailored to almost any type of application without Java coding, and it has an extensive plug-in architecture when more advanced customization is required. Solr is highly scalable, providing distributed search and index replication. 


<div class="bs-callout bs-callout-warning">
    <p>Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the <a href="http://wiki.apache.org/solr/" target="_blank">Apache Solr Wiki</a>.</p>
</div>

In this topic, you'll use the example configuration provided with Solr and Magento's provided Solr configuration to implement a simple, quick integration with Solr.

Some reasons to use Solr with Magento include:

*	Magento ships with a sample Solr configuration that enables you to provide users with a powerful search engine without your needing to customize any code.
*	You get better performance of search, catalog views, and <a href="http://www.magentocommerce.com/knowledge-base/entry/how-does-layered-navigation-work" target="_blank">layered navigation</a>.
*	When the system is under load, Solr avoids frequent updates of the MySQL <tt>catalogsearch_fulltext</tt> table and alleviates issues with database table locks.
<!-- The options discussed in this topic start with you reindexing catalog search index as follows:

1.  Make a change to a product&mdash;anything, including adding products, removing products, adding or removing attributes, changing prices, descriptions, and so on.
2.  In the Admin, click <strong>System</strong> > <strong>Index Management</strong>.
3.  Select the <strong>Catalog Search Index</strong> check box.
4.  From the <strong>Actions</strong> list, click <strong>Reindex Data</strong>.
5.  Click <strong>Submit</strong>.

<h2 id="simple-demo">Simple comparison of Solr and MySQL search engines</h2>
Following is a simple comparison of the default MySQL full-text search and Solr search using Magento EE 2.0 and Solr 4.TBD. Magento EE catalog content is provided by sample data you can download from Magento.

Among the many options Solr gives you is the option to <em>suggest</em> names of products in the event the user enters an incomplete or incorrect search term in your Magento store's <strong>Search</strong> field.


<h4 id="overview-example-default"></a>Default MySQL Full-Text Search Using an Incorrect Search Term</h4>
Using the default MySQL full-text search, if a user enters an incorrect search term (such as <tt>shirrt</tt> instead of <tt>shirt</tt>, no results display as the following figure shows.

<img src="{{ site.baseurl }}common/images/TBD" width="650px" height="469px">

<h4 id="overview-example-solr"></a>Solr Search Using an Incorrect Search Term</h4>
Using Solr, if a user enters an incorrect search term, suggestions display as the following figure shows.

<img src="{{ site.baseurl }}common/images/TBD" width="650px" height="469px">
In addition, if a user enters an incomplete search term, Magento provides dictionary-based suggestions as the following figure shows.

<img src="{{ site.baseurl }}common/images/TBD" width="650px" height="469px">

<h2 id="prereq">Prerequisites</h2>
The tasks discussed in this topic require the following:

*	Latest available version of Solr 4
*	Latest available Java version

  To determine if Java is already installed, enter the following command:

    java -version

If the message <tt>java: command not found</tt> displays, you must install the Java SDK as discussed in the next section. 
*	Tomcat or Jetty servlet container. This topic discusses using Jetty, which comes with Solr. Consult another resource, such as the <a href="http://wiki.apache.org/solr/SolrTomcat" target="_blank">Solr Wiki</a>, to use Tomcat with Solr.<br />
To see if you're currently running Jetty and to check the version, see <a href="https://wiki.eclipse.org/Jetty/FAQ#How_do_I_know_which_version_of_Jetty_I_am_running.3F" target="_blank">How to find out the version of Jetty</a>.


<h2 id="install-prereq-software">Installing prerequisite software</h2>
The following sections discuss how to install the prerequisite software: 

*	<a href="#install-prereq-java">Installing Java</a>
*	<a href="#install-prereq-solr">Installing Solr 4 and Jetty</a>

<h3 id="install-prereq-java">Install the latest Java JDK</h3>
See one of the following sections:

* <a href="#install-prereq-java-centos">Install the latest JDK on CentOS</a>
* <a href="#install-prereq-java-ubuntu">Install the latest JDK on Ubuntu</a>

<h4 id="install-prereq-java-centos">Install the JDK on CentOS</h4>
See <a href="https://www.digitalocean.com/community/tutorials/how-to-install-java-on-centos-and-fedora#install-oracle-java-8" target="_blank">this article on digitalocean</a>.

Be sure to install the JDK and *not* the JRE.

<h4 id="install-prereq-java-ubuntu">Install the Java 6 or 7 SDK on Ubuntu</h4>
To install the Java 6 SDK, enter the following command as a user with <tt>root</tt> privileges:

<pre>apt-get install openjdk-6-jdk</pre>
To install Java 7, enter the following command as a user with <tt>root</tt> privileges:

<pre>apt-get install openjdk-7-jdk</pre>
<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: Java version 7 might not be available for all operating systems. For example, you can search the list of available packages for Ubuntu <a href="http://packages.ubuntu.com/" target="_blank">here</a>.</div>

<h3 id="install-prereq-solr">Install Solr 4 and Jetty</h3>
The Apache Solr package installs both Solr and Jetty. If Jetty is already installed, see the <a href="http://wiki.apache.org/solr/SolrJetty" target="_blank">Solr with Jetty Wiki</a> for more information.

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: Tomcat is also a supported servlet container for Solr but discussing how to set up Tomcat with Solr is beyond the scope of this topic. For more information, see the <a href="http://wiki.apache.org/solr/SolrTomcat" target="_blank">Solr With Tomcat Wiki</a>.</div>
To install Solr and Jetty:

<ol>*	As a user with <tt>root</tt> privileges, use <tt>wget</tt> or a similar command to download the latest version of Solr 4 to an empty directory such as <tt>/etc/solr</tt>. An example follows.
  cd <em>empty-directory</em>
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

  2015-07-11 14:39:09 (8.04 MB/s) - "solr-4.10.4.tgz" saved [35866329/35866329]
*	Unpack the Solr installation; an example follows.<br><br>
  tar -xvf solr-4.10.4.tgz
*	Continue with the next section.</ol>

<h2 id="config-solr">Configuring Solr to Work With Magento</h2>
The following topics discuss how to configure Solr to work with Magento EE:

* <a href="#config-solr-copy-config-files">Copying the Magento Solr Configuration and Starting Solr</a>
* <a href="#config-solr-magento">Configuring Magento to Work With Solr</a>

<h3 id="config-solr-copy-config-files">Copying the Magento Solr Configuration and Starting Solr
Magento comes packaged with a sample Solr configuration you can use and customize. To get started, you'll copy the Magento configuration to Solr, replacing any existing files. After that you can start Solr and begin configuring Magento to work with it.

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: The example Solr configuration is <em>not</em> intended to be used in a production site. It's for testing and development only. It's simple to use which makes it a great way for you to learn more about Solr.</div>
To copy the Magento Solr configuration:

<ol>*	As a user with <tt>root</tt> privileges, enter the following commands in the order shown to copy over the Solr configuration with the one packaged with Magento EE:<br><br>
    cd <your Solr install dir>/example/solr
    mkdir -p magento2/conf magento2/data
    cd magento2/conf
    cp -R ../../collection1/conf .
    cp <your Magento EE install dir>/app/code/Magento/Solr/conf/* .

For example, if Solr is installed in <tt>/etc/solr/solr-4.10.4</tt> and Magento EE is installed in <tt>/var/www/magento/html/magento2ee</tt>, enter:
  cd /etc/solr/solr-4.10.4/solr/example/solr/magento/conf
  cp /var/www/html/magento2ee/app/code/Magento/Solr/conf/* .

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: If you're prompted to overwrite files, try the command <tt>\cp -R [your Magento install dir]/lib/Apache/Solr/conf/* .</tt></div>


*	<em>CentOS with Tomcat 6 only</em>. If you're using Tomcat 6 on CentOS, you must modify <tt>[your Solr install dir]/example/solr/conf/solrconfig.xml</tt><br />
Locate the following line:<br />
<pre>&lt;dataDir>${solr.data.dir:./solr/data}&lt;/dataDir></pre>
Change it to:<br />
<pre>&lt;dataDir>${solr.data.dir:}&lt;/dataDir></pre>

*	As a user with <tt>root</tt> privileges, enter the following command to start Solr:
  java -jar <your Solr install dir>/example/start.jar

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: This method for starting Solr is for convenience and testing purposes only. In a production environment, you should start and stop Solr using a script as discussed in <a href="#solr-script">Script Solr startup and shutdown</a>.</div>

Enter the following URL in your browser's location or address bar to start the Solr management console:

  http://<solr host or ip>:8983/solr

In the left navigation bar, click **Core Admin**.

Click **Add Core**.

Enter the following information:

* **name** field: Enter `magento2`
* **instanceDir** field: Enter `magento2/conf`

Leave all other fields at their default values or see TBD for more information about changing them.

Click **Save Core**.

You must resolve any issues before you continue.

<h3 id="config-solr-magento"></a>Configuring Magento to Work With Solr</h3>
This section discusses how to configure Magento EE to use the Solr search engine.

To configure Magento to work with Solr:

<ol>*	Log in to the Magento Admin as an administrator.
*	Click <strong>Stores</strong> > <strong>Configuration</strong> > CATALOG > <strong>Catalog Search</strong>.
*	In the right pane, expand <strong>Catalog Search</strong>.
*	The following table shows the minimum amount of information to enter to test the connection to your Solr search engine. Leave all other values at their defaults.<br />
<table>
<!-- <colgroup><col width="200">
<col width="300">
</colgroup> --><tbody>
<!-- <tr> -->
  <tr><th>Option</th>
  <th>Description</th>
</tr>
<tr>
  <td>Search Engine</td>
  <td>Click <strong>Solr</strong></td>
</tr>
<tr>
  <td>Solr Server Hostname</td>
  <td>Enter the fully qualified host name or IP address of the machine running Solr. (If Solr is running on the same host as Magento, you can optionally use 127.0.0.1.)</td>
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
  <td><!-- Unless you customized the Solr web application or changed its deployment path, leave the value of this field at its default.
 -->
  Specifies the path and name of the Solr web application. The path used by the example Solr configuration is <tt>solr</tt>.

  If you customized Solr, the value you enter in this field must exactly match the value of <tt>webapp_name=<em>value</em> in <tt>[your Solr install dir]/example/solr/conf/scripts.conf</tt>.</tt>
</td>
</tr>
<tr>
  <td>Indexation Mode</td>
  <td>Specifies how Solr processes indexed content.

  From the <strong>Indexation Mode</strong> list, click one of the following:

  *	<strong>Final commit</strong> (<em>Default, recommended</em>): After you reindex the content search index, Solr starts processing content. Users see results from content that was searchable before indexing started and the Magento store remains available for other requests.

  Final commit has much better performance then partial commit, and does not require any additional Solr configuration as does engine autocommit.
  
  Indexing begins after all unneeded data is removed and new data is added. At that point, users see results from newly indexed data immediately.

  *	<strong>Partial commit</strong>: All content is removed from Solr after you reindex the content search index and users at that time see no search results. As content is gradually reindexed, users see only the results of content that has been indexed.
  *	<strong>Engine autocommit</strong>: Content is put in the index queue but is not committed. You must configure Solr to commit at regular intervals (for example, every 5 minutes) or when a certain number of uncommitted items is reached.

  For more information, see the discussion of the <tt>&lt;autoCommit&gt;</tt> XML element in the <a href="http://wiki.apache.org/solr/SolrConfigXml" target="_blank"><tt>solrconfig.xml</tt> section of the Solr Wiki</a>.

    
  </td>
</tr>
</tbody>
</table><br />
The following figure shows an example.<br />
<img src="{{ site.baseurl }}common/images/m1x/ht_magento-solr_catalog-searchMock.png">
*	Click <strong>Test Connection</strong>.<br />
The button changes as follows.<br />
<table>
<col width="100">
<col width="300">
<tbody>
<tr>
  <th>Button state</th>
  <th>Meaning</th>
</tr>
<tr>
  <td><img src="{{ site.baseurl }}common/images/m1x/ht_magento-solr_test-connect_succeed.png" width="97px" height="17px"></td>
  <td>The test connection succeeded. Click <strong>Save Config</strong> and continue with the next section.</td>
</tr>
<tr>
 <td><img src="{{ site.baseurl }}common/images/m1x/ht_magento-solr_test-connect_fail.png" width="116px" height="16px"></td>
 <td>The test connection failed. Try the following:
  *	Examine the command window in which you started Solr for stack traces and exceptions. You must resolve those before you continue.<br />
  In particular, make sure you started Solr as a user with <tt>root</tt> privileges.
  *	Verify that <a href="http://php.net/manual/en/filesystem.configuration.php" target="_blank"><tt>allow_url_fopen = On</tt></a> is present in your server's <tt>php.ini</tt>.<br />
  If you are not sure where <tt>php.ini</tt> is located, you can <a href="http://kb.mediatemple.net/questions/764/How+can+I+create+a+phpinfo.php+page%3F#gs" target="_blank">create a <tt>phpinfo.php</tt> page</a> to locate it.
  *	Verify the value of the <strong>Solr Server Hostname</strong> field. Make sure the server is available. You can try the server's IP address instead.
  *	Use the command <tt>netstat -an | grep <em>listen-port</em></tt> command to verify that the port specified in the <strong>Solr Server Port</strong> field is not being used by another process.<br />
  For example, to see if Solr is running on its default port, use the following command:
  <pre>netstat -an | grep 8983</pre>
  If Solr is running on port 8983, it displays similar to the following:<br />
  <tt>tcp        0      0 :::8983            :::*          LISTEN</tt>
  *	If Solr is installed on a remote machine, use the <tt>ping</tt> command to verify that machine is reachable from your Magento instance.
  *	If SELinux is enabled, make sure the Solr servlet container's listen port is available; otherwise, Magento cannot communicate with the servlet container. For example, you can consult the <a href="http://wiki.centos.org/HowTos/SELinux" target="_blank">SELinux Centos wiki</a>.
  </td>
</tr>
</tbody>
</table>
*	Only after the test connection succeeds, click <strong>Save Config</strong> and continue with the next section.
</ol>

<h2 id="solr-config-tweaks"></a>Basic Solr configuration</h2>
This section discusses how to configure Magento to work with Solr using options in the Admin. Although additional Solr customization is possible, it is beyond the scope of this topic.

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-important.png" alt="important" align="left" width="40"><span><strong>Important</strong>: Customize the Solr search engine at your own risk. Magento supports only the options displayed in the Admin. Customizing the Solr engine itself, while potentially useful, can cause issues with Magento. If you encounter problems with your customizations, do not contact Magento Support; instead, consult the resources available from the <a href="http://wiki.apache.org/solr/" target="_blank">Apache Solr Wiki</a>.</span></div>
To configure Magento to work with Solr:

<ol>*	Start the Magento Admin and log in as an administrator.
*	Click <strong>System</strong> > <strong>Configuration</strong>.
*	In the left navigation bar, under the CATALOG group, click <strong>Catalog</strong> > <strong>Catalog Search</strong>.
*	The following table shows the minimum amount of information to enter to test the connection to your Solr search engine. Leave all other values at their defaults.<br />
<table>
<col width="200">
<col width="300">
<tbody>
<tr>
  <th>Option</th>
  <th>Description</th>
</tr>
<tr>
 <td>Minimal Query Length</td>
 <td>Enter the minimum number of characters permitted for a catalog search.</font>
</td>
</tr>
<tr>
 <td>Maximum Query Length</td>
 <td>Enter the maximum number of characters permitted for a catalog search.</td>
</tr>
<tr>
 <td>Search Engine<br />
  Solr Server Hostname<br />
  Solr Server Port<br />
  Solr Server Username<br />
  Solr Server Password<br />
  Solr Server Timeout<br />
  Solr Server Path<br />
  Indexation Mode  
  </td>
 <td>Discussed in <a href="#config-solr">Configuring Solr to Work With Magento</a>.</td>
</tr>
<tr>
 <td>Enable Search Suggestions</td>
 <td><em>Suggestions</em> are the native Solr mechanism of advising users in the event they enter incomplete or incorrect user input. Suggestions, when enabled, are automatically provided as part of any search request.

  Solr completes incomplete or incorrect input using a dictionary that is based on the main index (and can be customized using configuration files to use any other arbitrary dictionary). Suggestions display with default text "Did you mean:" in the search results page if needed.

  <strong>Notes</strong>:
  *	Search suggestions are not the same as AJAX hints.
  *	Enabling suggestions negatively affects performance because they result in more complex queries to Solr.
</td>
</tr>
<tr>
 <td>Search Suggestions Count</td>
 <td>Enter the maximum number of suggestions to return.</td>
</tr>
<tr>
 <td>Show Results Count for Each Suggestion</td>
 <td>The default option, <strong>No</strong>, displays only the suggestion and not the number of results for each suggestion.

  Click <strong>Yes</strong> to display the number of results for each suggestion.
</td>
</tr>
<tr>
 <td>Enable Search Recommendations</td>
 <td><em>Recommendations</em> display terms related to a requested word or phrase on the search results page.

  This functionality is not based on third party engine functionality, but is implemented as part of the <tt>Enterprise_Search</tt> module and can be shown with the Solr search suggestions block.

  By default, Magento uses the <tt>Enterprise_Search_Model_Adapter_HttpStream</tt> module for recommendations. If you install the <a href="http://pecl.php.net/package/solr" target="_blank">Apache Solr PHP extension</a>, Magento automatically uses the <tt>Enterprise_Search_Model_Adapter_PhpExtension</tt> adapter instead. Both adapters function in the same way with no difference in performance. However, the <tt>PhpExtension</tt> adapter is not tested by Magento so you must thoroughly test any modifications you make to it before deploying it in a production environment.

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: Enabling recommendations negatively affects performance because they result in more complex queries to Solr and more database calls.</div>
  </td>
</tr>
<tr>
 <td>Search Recommendations Count</td>
 <td>Enter the maximum number of recommendations to return.</td>
</tr>
<tr>
 <td>Show Results Count for Each Recommendation</td>
 <td>The default option, <strong>No</strong>, displays only the recommendation and not the number of results for each recommendation.

  Click <strong>Yes</strong> to display the number of results for each recommendation.
</td>
</tr>
<tr>
 <td>Enable Solr Engine for Catalog Navigation</td>
 <td>Click <strong>Yes</strong> (the default) to use Solr to enable <a href="http://www.magentocommerce.com/knowledge-base/entry/how-does-layered-navigation-work" target="_blank">layered navigation</a> in the category view.

  Click <strong>No</strong> to use the database for layered navigation in the category view.
</td>
</tr>
</tbody>
</table></ol>

<h2 id="solr-reindex">Reindexing catalog search and refreshing the fll page cache</h2>
After you change the Solr configuration, you must reindex the catalog search index and refresh the full page cache as follows:

<ol>*	In the Admin, click <strong>System</strong> > <strong>Cache Management</strong>.
*	Select the check box next to <strong>Page Cache</strong>. 
*	From the <strong>Actions</strong> list in the upper right, click <strong>Refresh</strong>.<br />
The following figure shows an example.<br />
<img src="{{ site.baseurl }}common/images/m1x/ht_magento-solr_refresh-fpc.png" height="188px" width="600px">
*	To update the catalog search index, open a command prompt window.
*	Change to the <tt>shell</tt> subdirectory of your Magento installation directory.<br />
For example, on CentOS:
<pre>cd /var/www/html/magento/shell</pre>
*	Enter the following command:
<pre>php indexer.php --reindex catalogsearch_fulltext</tt>
</ol>

<h2 id="solr-script"></a>Script Solr startup and shutdown</h2>
In a production environment, you should start and stop Solr using a script.

<div class="msg-box important"><img src="{{ site.baseurl }}common/images/m1x/icon-note.png" alt="note" align="left" width="40"><span><strong>Note</strong>: You must perform all tasks discussed in this section as a user with <tt>root</tt> privileges.</div>
Create a script named <tt>/etc/init.d/solr</tt> with options similar to the following:

<pre>#!/bin/sh
 
#Starts, stops, and restarts Apache Solr.
#chkconfig: 35 92 08
#description: Starts and stops Apache Solr
 
SOLR_DIR="[your Solr install dir]"
JAVA_OPTIONS="-Xmx1024m -DSTOP.PORT=<em>jetty-stop-port</em> -DSTOP.KEY=<em>jetty-stop-key</em> -jar  start.jar"
LOG_FILE="<em>path-to-solr-log-file</em>"
JAVA="<em>java_home</em>"
 
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
esac</pre>
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
  <td>[your Solr install dir]</td>
  <td>The absolute file system path to your Solr installation. (For example, <tt>/etc/solr/apache-solr-3.6.2</tt></td>
</tr>
<tr>
  <td><em>jetty-stop-port</em><br />
  <em>jetty-stop-key</em></td>
  <td>Security parameters used to prevent malicious attempts to stop Jetty.

  For <tt>-DSTOP.PORT=</tt>, specify any unused port.

  For <tt>-DSTOP.KEY=</tt>, specify a string. If you omit a value for <tt>-DSTOP.KEY=</tt>, Jetty generates a random key you must enter to stop Jetty.
 
  For more information, see <a href="https://wiki.eclipse.org/Jetty/Howto/Configure_SSL" target="_blank">Securing Jetty</a>.
</td>
</tr>
<tr>
  <td><em>path-to-solr-log-file</em></td>
  <td>Absolute file system path to the Solr log file. (For example, <tt>/var/log/solr.log</tt>)</td>
</tr>
<tr>
  <td><em>java_home</em></td>
  <td>Absolute file system path to your Java executable. (For example, <tt>/usr/bin/java</tt>)</td>
</tr>
</tbody>
</table>

An example follows:

<pre>#!/bin/sh
 
#Starts, stops, and restarts Apache Solr.
#chkconfig: 35 92 08
#description: Starts and stops Apache Solr
 
SOLR_DIR="/etc/solr/apache-solr-3.6.2/example"
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
esac</pre>
To complete the script:

<ol>*	Make sure you saved the edited version of the script.
*	Give the script executable permissions as follows:<br>
<pre>chmod +x /etc/init.d/solr</pre>
*	You can now start, stop, and restart Solr as follows:
<ul class="level2">*	Start Solr: <tt>/etc/init.d/solr start</tt>
*	Stop Solr: <tt>/etc/init.d/solr stop</tt>
*	Restart Solr: <tt>/etc/init.d/solr restart</tt>
</ol>

<h2 id="next"></a>Next Steps</h2>
For additional information about Solr, see the following:

*	For more information about performance, see "Using Solr as a Search Engine" in <a href="http://info.magento.com/rs/magentocommerce/images/Magento_PerformanceWhitepaper-EEv1-9.1.pdf" target="_blank">Maximizing Performance and Scalability with Magento Enterprise Edition</a>
*	<a href="http://wiki.apache.org/solr/#Operations_and_Production" target="_blank">Customize Solr</a>

<!-- <h2 id="related">Related Information</h2>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-faq" target="_blank">Frequently Asked Questions (FAQ) About Using Solr with Magento Enterprise Edition (EE)</a>
*	<a href="http://www.magentocommerce.com/knowledge-base/entry/solr-ee-best-practices" target="_blank">Solr and Magento Enterprise Edition (EE) Best Practices</a> -->