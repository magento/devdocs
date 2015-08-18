---
layout: default
group: mtf-guide
subgroup: C_Quickstart
title: Quick start with the Magento Testing Framework
menu_title: Adjust configuration
menu_order: 1
github_link: mtf/mtf_quickstart/mtf_quickstart_config.md
redirect_from: /guides/v1.0/mtf/mtf_quickstart/mtf_quickstart_config.html
---
<h2 id="mtf_quickstart_config">Adjust configuration</h2>

<h3 id="mtf_quickstart_config_phpunitxml">1. Edit <code>phpunit.xml</code> to configure PHPUnit</h3>

Find `phpunit.xml` in `<magento_root>/dev/tests/functional`, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>phpunit.xml</code>, create it from <code>phpunit.xml.dist</code>.</p>
</div>

<h4 id="mtf_quickstart_config_phpunitxml_frontend">Set URL for Magento storefront under test</h4>

Find `<php>` element.
For `name="app_frontend_url"` set `value` that is your actual URL for Magento storefront under test.

<h4 id="mtf_quickstart_config_phpunitxml_backend">Set URL for Magento Admin URL under test</h4>

For `name="app_backend_url"` set `value` that is your actual URL for Magento Admin URL under test.

Example:
`<env name="app_backend_url" value="http://example.com/magento2/admin"/>`.

<h4 id="mtf_quickstart_config_phpunitxml_win-credent">Windows only! Set full path for <code>basedir</code> and <code>credentials_file_path</code> parameters</h4>
Find `<php>` element.

For `<env name="basedir"` set `value="<full_path_to_directory>" />` (that is directory for error logs). For example, `<env name="basedir" value="C:\magento2ce\dev\tests\functional\var\log" />`.

For `name="credentials_file_path" ` set `value="<full_path_to_directory>"` (that is file with credentials for Magento modules, if required). For example, `<env name="credentials_file_path" value="C:\magento2ce\dev\tests\functional\credentials.xml" />`.

<h3 id="mtf_quickstart_config_configxml">2. Edit <code>config.xml</code> to configure Magento Testing Framework</h3>
Find `config.xml` in `<magento_root>/dev/tests/functional/etc`, and open it in editor.

<h4 id="mtf_quickstart_config_configxml_credent-backend">Set credentials for Magento Admin under test</h4>
In `<application>` element find elements `<backendLogin>` and `<backendPassword>`. Change content of these elements to your actual credentials for Magento Admin URL.

<h4 id="mtf_quickstart_config_configxml_browser">Set browser that MTF will use for tests</h4>
The default browser is **Mozilla Firefox**.

<div class="bs-callout bs-callout-info" id="info">
  <p>Default settings are specified in
   <code>&lt;magento_root>/dev/tests/functional/vendor/magento/mtf/etc/config.xml&gt;</code>. Do not change this file.</p>
</div>

If you want to use another browser for tests you have to specify it in `config.xml`.

Copy `<server>` element from `<magento_root>/dev/tests/functional/vendor/magento/mtf/etc/config.xml>` and paste it in `<magento_root>/dev/tests/functional/config.xml` after `<install>` element.

Enter actual data in `<browserName>` and `<browser>` attributes.

Example for Google Chrome:

{% highlight xml %}

<item name="selenium"
      type="default"
      browser="Google Chrome"
      browserName="chrome"
      host="localhost"
      port="4444"
      seleniumServerRequestsTimeout="90"
      sessionStrategy="shared">
    <desiredCapabilities>
        <platform>ANY</platform>
    </desiredCapabilities>
</item>
</server>

{% endhighlight %}


<h3 id="mtf_quickstart_config_credentialsxml">3. Edit <code>credentials.xml</code> to work with Magento modules that requires credentials</h3>

Find `credentials.xml` in `<magento_root>/dev/tests/functional`, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>credentials.xml</code>, create it from <code>credentials.xml.dist</code>.</p>
</div>

<h4 id="mtf_quickstart_config_credentialsxml-set">Set credentials for Magento modules under test</h4>
Open `credentials.xml`.

Find block of elements for the Magento module you want to test.

Enter actual data in `value` attribute of corresponding `field` element.

<h2 id="mtf_install_pre">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_environmemt.html">Prepare environment for test run</a>
