---
layout: default
group: release-notes
subgroup: Magento 2.2.0 Release Candidate Alpha
title: Magento 2.2.0 Alpha Testing Environments
menu_title: Magento 2.2.0 Alpha Testing Environments
menu_order: 
level3_menu_node: 
level3_subgroup: 
version: 2.2
github_link: alpha/alpha-testing-environments.md
---

We encourage you to download and use Magento 2.2.0 Release Candidate Alpha in whichever environment you typically run your Magento installations. For informational purposes, though, we are sharing specifications for some of our 2.2.0 testing environments.

Here's an overview of how we use these terms in the following tables:

* Enterprise 

* Medium

* Hobbyist

* Developer



### Environment and server settings 

<table>
  <tr>
    <th><b>Regression environment</b></th>
    <th><b>Enterprise</b></th>
    <th><b>Medium</b></th>
    <th><b>Hobbyist</b></th>
    <th><b>Developer</b></th>
  </tr>

  <tr>
    <td>Docker (AWS as needed)</td>
    <td>Docker (AWS as needed)</td>
    <td>Docker (AWS as needed)</td>
    <td>Docker (AWS as needed)</td>

   </tr>


  <tr>
    <td><b>OS</b></td>
    <td>CentOS</td>
    <td>CentOS</td>
    <td>CentOS</td>
    <td>Ubuntu</td>
  </tr>

<tr>
    <td><b>Web Server</b></td>
    <td>NginX 1.11</td>
    <td>Apache 2.4x</td>
    <td>Apache 2.2x</td>
    <td>Apache 2.4x</td>
  </tr>

<tr>
    <td><b>Web Server Port</b></td>
    <td>80</td>
    <td>80</td>
    <td>80</td>
    <td>8080</td>
  </tr>


<tr>
    <td><b>PHP version</b></td>
    <td>7.1</td>
    <td>7.0.16 (PHP_fpm)</td>
    <td>7.0.16 (mod_fpm)</td>
    <td>7.1 (mod_fpm)</td>
  </tr>

<tr>
    <td><b>XDebug</b></td>
    <td>FALSE</td>
    <td>FALSE</td>
    <td>FALSE</td>
    <td>TRUE</td>
  </tr>

  <tr>
    <td><b>Database</b></td>
    <td>Percona 5.6 </td>
    <td>MySQL 5.6</td>
    <td>MariaDB 10.2</td>
    <td>MySQL 5.7</td>
  </tr>

  <tr>
    <td><b>DB configuration</b></td>
    <td>one master, one slave (catalog, quote)</td>
    <td>Single DB</td>
    <td>Single DB</td>
    <td>Single DB</td>
  </tr>
</table>

### Services

<table>
  <tr>
    <th><b>Regression environment</b></th>
    <th><b>Enterprise</b></th>
    <th><b>Medium</b></th>
    <th><b>Hobbyist</b></th>
    <th><b>Developer</b></th>
  </tr>

  <tr>
    <td><b>Page cache</b></td>
    <td>Varnish 5.0</td>
    <td>Varnish 4.1</td>
    <td>built-in cache</td>
    <td>FALSE</td>
  </tr>

  <tr>
    <td><b>Search</b></td>
    <td>Elastic 2.x (512M)</td>
    <td>Elastic 2.x (512M)</td>
    <td>MySQL</td>
    <td>MySQL</td>
  </tr>


  <tr>
    <td><b>Message queue</b></td>
    <td>RabbitMQ 3.6</td>
    <td>RabbitMQ 3.5</td>
    <td>MySQL</td>
    <td>FALSE</td>
  </tr>

  <tr>
    <td><b>Cache storage</b></td>
    <td>Redis 3.2 (256M)</td>
    <td>Redis 3.0 (256M)</td>
    <td>Filesystem (RAM FS)</td>
    <td>Filesystem + REDIS 3.0 (configuration)</td>
  </tr>


<tr>
    <td><b>Session storage</b></td> 
    <td>Redis  3.2 (128M)</td>
    <td>Memcached latest stable</td>
    <td>DB</td>
    <td>Filesystem</td>
  </tr>
</table>

### Magento settings


<table>
  <tr>
    <th><b>Regression environment</b></th>
    <th><b>Enterprise</b></th>
    <th><b>Medium</b></th>
    <th><b>Hobbyist</b></th>
    <th><b>Developer</b></th>
  </tr>


  <tr>
    <td><b>Edition</b></td>
    <td>EE + B2B</td>
    <td>EE</td>
    <td>EE</td>
    <td>CE</td>
  </tr>

<tr>
    <td><b>Deploy via</b></td>
    <td>Composer</td>
    <td>Composer</td>
    <td>Composer</td>
    <td>Git</td>
  </tr>


<tr>
    <td><b>SSL HTTPS</b></td>
    <td>FULL (all areas)</td>
    <td>FULL (all areas)</td>
    <td>HTTS and HTTP</td>
    <td>HTTP</td>
  </tr>



<tr>
    <td><b>Data profile (store fulfillment)</b></td>
    <td>Generated data (B2B medium)</td>
    <td>Generated data (B2C medium)</td>
    <td>Sample date</td>
    <td>False (empty)</td>
  </tr>


<tr>
    <td><b>Indexer mode</b></td>
    <td>Update on schedule</td>
    <td>Update on schedule</td>
    <td>Update on schedule</td>
    <td>Update on save</td>
  </tr>


<tr>
    <td><b>Cache</b></td>
    <td>ALL TRUE</td>
    <td>ALL TRUE</td>
    <td>ALL TRUE</td>
    <td>ALL TRUE (except FPC)</td>
  </tr>


<tr>
    <td><b>Mode</b></td>
    <td>production</td>
    <td>production</td>
    <td>production (-- skip-compilation)</td>
    <td>developer</td>
  </tr>


<tr>
    <td><b>Compilation</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>


  <tr>
    <td><b>Static content deployment</b></td>
    <td>"quick" is used during mode set</td>
    <td>Yes (-s compact)</td>
    <td>Yes (-s quick -f)</td>
    <td>No (generating on fly)</td>
  </tr>


<tr>
    <td><b>Multi-website</b></td>
    <td>TRUE</td>
    <td>TRUE</td>
    <td>FALSE</td>
    <td>FALSE</td>
  </tr>

<tr>
    <td><b>Docroot at pub/index.php</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>
</table>


### Magento installation settings


<table>
  <tr>
    <th><b>Regression environment</b></th>
    <th><b>Enterprise</b></th>
    <th><b>Medium</b></th>
    <th><b>Hobbyist</b></th>
    <th><b>Developer</b></th>
  </tr>


<tr>
    <td><b>Table prefix</b></td>
    <td>FALSE</td>
    <td>FALSE</td>
    <td>FALSE</td>
    <td>FALSE</td>
  </tr>

<tr>
    <td><b>Admin secret key</b></td>
    <td>TRUE</td>
    <td>TRUE</td>
    <td>TRUE</td>
    <td>FALSE</td>
  </tr>

<tr>
    <td><b>Website rewrites</b></td>
    <td>TRUE</td>
    <td>TRUE</td>
    <td>FALSE</td>
    <td>FALSE</td>
  </tr>
</table>


### Magento configuration settings

<table>
  <tr>
    <th><b>Regression environment</b></th>
    <th><b>Enterprise</b></th>
    <th><b>Medium</b></th>
    <th><b>Hobbyist</b></th>
    <th><b>Developer</b></th>
  </tr>

<tr>
    <td><b>JS minification</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
  </tr>

<tr>
    <td><b>JS bundling</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td></td>
    <td>No</td>
  </tr>

<tr>
    <td><b>JS merge</b></td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
    <td>No</td>
  </tr>

<tr>
    <td><b>CSS minification</b></td>
    <td>Yes</td>
    <td>No</td>
    <td></td>
    <td>No</td>
  </tr>

  <tr>
    <td><b>CSS merge</b></td>
    <td>Yes</td>
    <td>No</td>
    <td>Yes</td>
    <td>No</td>
  </tr>

  <tr>
    <td><b>HTML minification</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>

  <tr>
    <td><b>Flat catalog product</b></td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
  </tr>

  <tr>
    <td><b>Flat catalog category</b></td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    <td>No</td>
  </tr>

  <tr>
    <td><b>Asynchronous sending</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>

<tr>
    <td><b>Asynchronous grid fulfillment</b></td>
    <td>Yes</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
  </tr>


</table>