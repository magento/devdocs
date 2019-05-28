---
group: configuration-guide
subgroup: 07_conf
title: Magento's deployment configuration
menu_title: Magento's deployment configuration
menu_order: 1
functional_areas:
  - Configuration
  - System
  - Setup
---

## Purpose of the deployment configuration {#config-php-overview}

Magento's deployment configuration consists of the shared and system-specific configuration for your installation. Magento's deployment configuration is divided between:

*	`<Magento base dir>/app/etc/config.php`, referred to as the _shared_ configuration file, because you can check it in to source control and use it in your development, staging, and production systems

	`config.php` contains the list of installed modules, themes, and language packages; and shared configuration settings
*	`<Magento base dir>/app/etc/env.php`, which contains system-specific settings, such as:

Together, `config.php` and `env.php` are referred to as Magento's _deployment configuration_ because they are created during installation and are required to start Magento.

{: .bs-callout .bs-callout-info }
The Magento 2 deployment configuration replaces `local.xml` in Magento 1.x.

Unlike other [module configuration files]({{ page.baseurl }}/config-guide/config/config-files.html), Magento's deployment configuration is loaded into memory when Magento initializes, is not merged with any other files, and cannot be extended. (`config.php` and `env.php` are merged with each other, however.)

## Details about the deployment configuration {#config-php-contents}
`config.php` and `env.php` are {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} files that return a <a href="http://www.w3schools.com/php/php_arrays.asp" target="_blank">multi-dimensional associative array</a>, which is basically a hierarchical arrangement of configuration parameters and values.

On the top level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished by an arbitrary key&mdash;where both the key and its value are defined by the Magento framework.

<a href="{{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/DeploymentConfig.php" target="_blank">Magento\Framework\App\DeploymentConfig</a> merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} sequence definition, which is obtained by merging all modules' configuration files, with the {% glossarytooltip 53da11f1-d0b8-4a7e-b078-1e099462b409 %}exception{% endglossarytooltip %} of disabled modules.

The following sections discusses the structure and contents of the deployment configuration&mdash;`config.php` and `env.php`.

* <a href="#config-php-contents-config-php">Manage installed modules</a>
* <a href="#config-php-contents-env-php">Environmental configuration</a>

## Manage installed modules {#config-php-contents-config-php}
`config.php` lists your installed modules. Magento provides both command-line and web-based utilities to manage modules (install, uninstall, enable, disable, or upgrade).

Examples:

* Uninstall components: <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html">bin/magento setup:uninstall</a>
* Enable or disable components: <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:enable</a>, <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable">bin/magento module:disable</a>.
* [Component Manager]({{ page.baseurl }}/comp-mgr/module-man/compman-main-pg.html)
* [System Upgrade]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html)

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

Disabled modules are not recognized by the Magento application; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not modify the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} and don't affect routing.

The only practical difference of a module being disabled and being completely absent in the code base is that a disabled module is found by the autoloader, enabling its classes and constants to be reused in other code.

## Environmental configuration {#config-php-contents-env-php}

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
   |__/See <a href="{{ page.baseurl }}/config-guide/cache/cache-types.html">frontend options</a></pre></td>
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
 |-- &lt;enumerated {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} types></pre></td>
    </tr>
  </tbody>
</table>

## Related topic

<a href="{{ page.baseurl }}/config-guide/config/config-files.html">Module configuration files</a>
