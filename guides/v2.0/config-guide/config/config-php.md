---
layout: default
group: config-guide
subgroup: Magento configuration files
title: Magento's deployment configuration
menu_title: Magento's deployment configuration
menu_order: 1
github_link: config-guide/config/config-php.md
redirect_from: /guides/v1.0/config-guide/config/config-php.html
---


#### Contents

*  <a href="#config-php-overview">What is the Magento deployment configuration?</a>
*  <a href="#config-php-contents">config.php and env.php contents</a>
* <a href="#config-php-upgrade">Updating to build 0.74-beta10</a>

<h2 id="config-php-overview">What is the Magento deployment configuration?</h2>
{% include install/deployment-config.html %}

<h2 id="config-php-contents">config.php and env.php contents</h2>
`config.php` and `env.php` are PHP files that return a multi-dimensional associative array. 

On the first hierarchy level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished from each other by an arbitrary key&mdash;both the key and its value are defined by the Magento framework. 

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig.php" target="_blank">Magento\Framework\App\DeploymentConfig</a> merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the module sequence definition, which is obtained by merging all modules' configuration files, with the exception of disabled modules. 

The following sections discusses the structure and contents of `config.php` and `env.php`.

* <a href="#config-php-contents-config-php">config.php contents</a>
* <a href="#config-php-contents-env-php">env.php contents</a>

<h3 id="config-php-contents-config-php">config.php contents</h3>
Starting with build 0.74-beta10, `config.php` contains the list of modules only.

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

<h3 id="config-php-contents-env-php">env.php contents</h3>
`env.php` was introduced in build 0.74-beta10; before that build, `config.php` contained this data in addition to the list of enabled modules. The following table provides details about each `env.php` segment and its structure.

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
      <td><pre>__/install
 |-- date</pre></td>
    </tr>
    <tr>
      <td>Encryption key</td>
      <td><code>encrypt</code></td>
      <td><pre>__/crypt
 |-- key</pre></td>
    </tr>
    <tr>
      <td>Cache types</td>
      <td><code>cache_types</code></td>
      <td><pre>__/cache_types
 |-- &lt;enumerated cache types></pre></td>
    </tr>
  </tbody>
</table>

<h2 id="config-php-upgrade">Updating to build 0.74-beta10</h2>
{% include install/deployment-config_upgrade.html %}

#### Related topic

<a href="{{ site.gdeurl }}config-guide/config/config-files.html">Module configuration files</a>