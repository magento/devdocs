---
layout: default
group: mtf-guide
subgroup: C. Quick Start
title: Quick start with Magento Testing Framework
menu_title: Adjust configuration
menu_order: 1
github_link: guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_config.md
---
<h2 id="mtf_quickstart_config">Adjust configuration</h2>

<h3 id="mtf_quickstart_config_phpunitxml">1. Edit <code>phpunit.xml</code> to configure PHPUnit</h3>

Find <code>phpunit.xml</code> in <code>&lt;magento_root&gt;/dev/tests/functional</code>, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>phpunit.xml</code>, create it from <code>phpunit.xml.dist</code>.</p>
</div>

<h4 id="mtf_quickstart_config_phpunitxml_frontend">Set URL for Magento Store Front under test</h4>

Find `php` element.
For `name="app_frontend_url"` set `value` that is your actual URL for Magento Store Front under test.

Example: <code>&lt;env name="app_frontend_url" value="http://example.com/magento2/"/&gt;</code>

<h4 id="mtf_quickstart_config_phpunitxml_backend">Set URL for Magento Admin Front under test</h4>

For `name="app_backend_url"` set `value` that is your actual URL for Magento Admin Front under test.

Example:
<code>&lt;env name="app_backend_url" value="http://example.com/magento2/admin"/&gt;</code>

<h4 id="mtf_quickstart_config_phpunitxml_win-credent">Windows only! Set full paths for <code>basedir</code> and <code>credentials_file_path</code> parameters</h4>
For Windows you need also to change path to full path for environment variables `credentials_file_path` (file with credentials required by Magento Modules) and `basedir` (folder for error logs).

<h3 id="mtf_quickstart_config_configxml">2. Edit <code>config.xml</code> to configure Magento Testing Framework</h3>
Find <code>config.xml</code> in <code>&lt;magento_root&gt;/dev/tests/functional/etc</code>, and open it in editor.

<h4 id="mtf_quickstart_config_configxml_credent-backend">Set credentials for Magento Admin under test</h4>
In <code>&lt;application&gt;</code> element find elements <code>&lt;backendLogin&gt;</code> and <code>&lt;backendPassword&gt;</code>. Change content of these elements to your actual credentials for Magento Admin Front.

<h4 id="mtf_quickstart_config_configxml_credent-backend">Set browser that MTF will use for tests</h4>
The default browser is **Mozilla Firefox**.

<div class="bs-callout bs-callout-info" id="info">
  <p>Default settings are specified in <code>&lt;magento_root>/dev/tests/functional/vendor/etc/config.xml&gt;</code>. Do not change this file.</p>
</div>

If you want to use another browser for tests you have to specify it in <code>config.xml</code>.

Copy <code>&lt;server&gt;</code> element from <code>&lt;magento_root>/dev/tests/functional/vendor/etc/config.xml&gt;</code> and paste it in <code>&lt;magento_root&gt;/dev/tests/functional/config.xml</code> after <code>&lt;install&gt;</code> element.

Enter actual data in <code>&lt;browserName&gt;</code> and <code>&lt;browser&gt;</code> attributes.


<h3 id="mtf_quickstart_config_credentialsxml">3. Edit <code>credentials.xml</code> to configure Magento Testing Framework to work with Magento Modules that requires credentials</h3>

Find <code>credentials.xml</code> in <code>&lt;magento_root&gt;/dev/tests/functional</code>, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>credentials.xml</code>, create it from <code>credentials.xml.dist</code>.</p>
</div>

<h4 id="mtf_quickstart_config_credentialsxml-set">Set credentials for Magento Modules under test</h4>
Open <code>credentials.xml</code>.

Find block of elements for the Magento Module you want to test.

Enter actual data in <code>value</code> attribute of corresponding <code>field</code> element.