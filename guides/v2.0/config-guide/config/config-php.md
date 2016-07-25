---
layout: default
group: config-guide
subgroup: 07_conf
title: Magento's deployment configuration
menu_title: Magento's deployment configuration
menu_order: 1
version: 2.0
github_link: config-guide/config/config-php.md
redirect_from: /guides/v1.0/config-guide/config/config-php.html
---


#### Contents

*  <a href="#config-php-overview">Purpose of the deployment configuration</a>
*  <a href="#config-php-contents">Details about the deployment configuration</a>

<h2 id="config-php-overview">Purpose of the deployment configuration</h2>
{% include install/deployment-config.html %}

<h2 id="config-php-contents">Details about the deployment configuration</h2>
`config.php` and `env.php` are PHP files that return a <a href="http://www.w3schools.com/php/php_arrays.asp" target="_blank">multi-dimensional associative array</a>, which is basically a hierarchical arrangement of configuration parameters and values.

On the top level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished by an arbitrary key&mdash;where both the key and its value are defined by the Magento framework. 

<a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/DeploymentConfig.php" target="_blank">Magento\Framework\App\DeploymentConfig</a> merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the module sequence definition, which is obtained by merging all modules' configuration files, with the exception of disabled modules. 

The following sections discusses the structure and contents of the deployment configuration&mdash;`config.php` and `env.php`.

* <a href="#config-php-contents-config-php">Manage installed modules</a>
* <a href="#config-php-contents-env-php">Environmental configuration</a>

<h3 id="config-php-contents-config-php">Manage installed modules</h3>
`config.php` lists your installed components (modules, themes, and language packages). Magento provides both command-line and web-based utilities to manage components (install, uninstall, enable, disable, or upgrade).

Examples:

* Uninstall components: <a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html">bin/magento setup:uninstall</a> 
* Enable or disable components: <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:enable</a>, <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:disable</a>.
* Component Manager: coming soon
* System Upgrade: coming soon

`config.php` snippet:

{% highlight php startinline=true %}
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
);
{% endhighlight %}

The value `1` or `0` indicates whether a module is enabled or disabled. 

Disabled modules are not recognized by the Magento application; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not modify the storefront or Admin and don't affect routing. 

The only practical difference of a module being disabled and being completely absent in the code base is that a disabled module is found by the autoloader, enabling its classes and constants to be reused in other code.

<h3 id="config-php-contents-env-php">Environmental configuration</h3>
The following table provides details about each `env.php` segment and its structure.

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
   |__/See <a href="{{page.baseurl}}config-guide/config/caching_frontend-cache-types.html">frontend options</a></pre></td>
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

#### Related topic
<a href="{{page.baseurl}}config-guide/config/config-files.html">Module configuration files</a>
