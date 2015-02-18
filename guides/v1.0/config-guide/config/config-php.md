---
layout: default
group: config-guide
subgroup: Magento configuration files
title: Magento's deployment configuration, config.php
menu_title: Magento's deployment configuration, config.php
menu_order: 1
github_link: config-guide/config/config-php.md
---


#### Contents

*  <a href="#config-php-overview">What is config.php?</a>
*  <a href="#config-php-contents">config.php contents</a>

<h2 id="config-php-overview">What is config.php?</h2>
`<your Magento install dir>/app/etc/config.php` is referred to as Magento's *deployment configuration* because it's created during installation and has information required to start Magento.

<div class="bs-callout bs-callout-info" id="info">
  <p><code>config.php</code> is the replacement for <code>local.xml</code> in earlier Magento versions. It contains a declarative array of configuration values.</p>
</div>

Unlike other configuration files discussed in <a href="{{ site.gdeurl }}config-guide/config/config-files.html">Module configuration files</a>, `config.php` is loaded into memory when Magento initializes, is not merged with any other files, and cannot be extended.

`config.php` includes the following information:

*	Database credentials and connection settings
*	Cache storage settings 
*	Enabled cache types
*	Your encryption key 
*	Web routing parameters (base URLs, URL path to Magento Admin)
*	List of enabled modules 
*	File system paths

<h2 id="config-php-contents">config.php contents</h2>
`config.php` is a PHP-file that returns a multi-dimensional associative array. This section discusses its structure and contents.

<h3 id="config-php-contents-segments">Segments</h3>

On the first hierarchy level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished from each other by an arbitrary key&mdash;both the key and its value are defined by the Magento framework. 

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig.php" target="_blank">Magento\Framework\App\DeploymentConfig</a> merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the module sequence definition, which is obtained by merging all modules' configuration files, with the exception of disabled modules. 

Disabled modules are not recognized by Magento; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not display in the storefront or Admin and don't affect routing. The only practical difference of a module being disabled and being completely absent in the code base is that a disabled module is found by the autoloader, enabling its classes and constants to be reused in other code.

The value `1` or `0` indicates whether a module is enabled or disabled. 

A snippet follows:

{% highlight PHP %}
<?php
return array (
  'modules' =>
  array (
    'Magento_Core' => 1,
    'Magento_Store' => 1,
    'Magento_Theme' => 1,
    'Magento_Authorization' => 1,
    'Magento_Directory' => 1,
    'Magento_Backend' => 1,
    'Magento_Backup' => 1,
    'Magento_Eav' => 1,
    'Magento_Customer' => 1,
...
  ),
); ?>
{% endhighlight %}

<h3 id="config-php-segments-detail">Segment details</h3>
The following table provides details about each `config.php` segment and its structure.

<table>
  <tbody>
    <tr>
      <th>Segment</th>
      <th>Key</th>
      <th>Structure</th>
    </tr>
    <tr>
      <td>Database</td>
      <td><code>db</code></td>
      <td><pre>__/db
|__/connection
| |__/[default]
|   |-- host
|   |-- dbname
|   |-- username
|   |-- password
|   |-- model [mysql4]
|   |-- initStatements [SET NAMES utf8;]
|   |-- active [1]
|-- table_prefix</pre></td>
    </tr>
    <tr>
      <td>Resources</td>
      <td><code>resource</code></td>
      <td><pre>__/resource
 |__/default_setup
   |-- connection [default]</pre></td>
    </tr>
    <tr>
      <td>Session storage</td>
      <td><code>session</code></td>
      <td><pre>__/session
 |__/save
   |-- &lt;files|db></pre></td>
    </tr>
    <tr>
      <td>Admin URL path</td>
      <td><code>backend</code></td>
      <td><pre>__/backend
 |-- frontName</pre></td>
    </tr>
    <tr>
      <td>Cache storage</td>
      <td><code>cache</code></td>
      <td><pre>__/cache
 |__/frontend
   |__/&lt;for future documentation></pre></td>
    </tr>
    <tr>
      <td>Installation date</td>
      <td><code>install</code></td>
      <td>Not currently implemented</td>
    </tr>
    <tr>
      <td>Encryption key</td>
      <td><code>encrypt</code></td>
      <td><pre>__/crypt
 |-- key</pre></td>
    </tr>
    <tr>
      <td>Module list</td>
      <td><code>modules</code></td>
      <td><pre>__/modules
 |-- &lt;enumerated modules></pre></td>
    </tr>
    <tr>
      <td>Cache types</td>
      <td><code>cache_types</code></td>
      <td><pre>__/cache_types
 |-- &lt;enumerated cache types></pre></td>
    </tr>
  </tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
  <p>We're working to improve this topic. Use the <strong>Edit this page in GitHub</strong> link at the top of this page to give us feedback and suggestions.</p>
</div>

#### Related topic

<a href="{{ site.gdeurl }}config-guide/config/config-files.html">Module configuration files</a>