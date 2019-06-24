---
group: configuration-guide
title: Magento's deployment configuration
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

	*	Database credentials and connection settings
	*	i18n TBD
	*	Cache storage settings
	*	Session storage settings
	*	[x-frame-options]({{ page.baseurl }}/config-guide/secy/secy-xframe.html) setting
	*	Enabled cache types
	*	Your encryption key
	*	Web routing parameters (base URLs, Magento Admin URI)
	*	[Magento mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html)
	*	Magento installation date
	*	System-specific and sensitive configuration settings TBD

Together, `config.php` and `env.php` are referred to as Magento's _deployment configuration_ because they are created during installation and are required to start Magento.

{:.bs-callout .bs-callout-info}
The Magento 2 deployment configuration replaces `local.xml` in Magento 1.x.

Unlike other [module configuration files]({{ page.baseurl }}/config-guide/config/config-files.html), Magento's deployment configuration is loaded into memory when Magento initializes, is not merged with any other files, and cannot be extended. (`config.php` and `env.php` are merged with each other, however.)

## Details about the deployment configuration {#config-php-contents}

`config.php` and `env.php` are [PHP](https://glossary.magento.com/php) files that return a [multi-dimensional associative array](http://www.w3schools.com/php/php_arrays.asp), which is basically a hierarchical arrangement of configuration parameters and values.

On the top level of this array are *configuration segments*. A segment has arbitrary content (a scalar value or a nested array) distinguished by an arbitrary key&mdash;where both the key and its value are defined by the Magento framework.

[Magento\Framework\App\DeploymentConfig]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/DeploymentConfig.php) merely provides access to these sections but does not allow you to extend them.

On the next hierarchy level, items in each segment are ordered according to the [module](https://glossary.magento.com/module) sequence definition, which is obtained by merging all modules' configuration files, with the [exception](https://glossary.magento.com/exception) of disabled modules.

The following sections discusses the structure and contents of the deployment configuration&mdash;`config.php` and `env.php`.

* [Manage installed modules](#config-php-contents-config-php)
* [Environmental configuration](#config-php-contents-env-php)

## Manage installed modules {#config-php-contents-config-php}
`config.php` lists your installed components (modules, themes, and language packages). Magento provides both command-line and web-based utilities to manage components (install, uninstall, enable, disable, or upgrade).

Examples:

* Uninstall components: [`bin/magento setup:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html)
* Enable or disable components: [`bin/magento module:enable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable), [`bin/magento module:disable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-disable).
* Component Manager: coming soon
* System Upgrade: coming soon

`config.php` snippet:

```php
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
```

The value `1` or `0` indicates whether a module is enabled or disabled.

Disabled modules are not recognized by the Magento application; in other words, they don't participate in merging configuration, in dependency injection, events, plug-ins, and so on. Disabled modules do not modify the [storefront](https://glossary.magento.com/storefront) or [Admin](https://glossary.magento.com/admin) and don't affect routing.

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
 |-- &lt;enumerated [cache](https://glossary.magento.com/cache) types></pre></td>
    </tr>
    <tr>
            <td>Message queues</td>
            <td><code>queue</code></td>
            <td><pre>__/queue
        |__/amqp
        |-- host
        |-- port
        |-- user
        |-- password
        |-- virtualhost
        |-- ssl
        </pre></td>
          </tr>
  </tbody>
</table>

## Related topic

[Module configuration files]({{ page.baseurl }}/config-guide/config/config-files.html)
