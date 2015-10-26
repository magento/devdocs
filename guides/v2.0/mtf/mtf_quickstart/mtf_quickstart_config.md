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

* TOC
{:toc}

### Edit `phpunit.xml` to configure PHPUnit {#mtf_quickstart_config_phpunitxml}

Find `phpunit.xml` in `<magento2>/dev/tests/functional`, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>phpunit.xml</code>, create it from <code>phpunit.xml.dist</code>.</p>
</div>

#### Set URL for Magento storefront under test {#mtf_quickstart_config_phpunitxml_frontend}

Find `<php>` element.
For `name="app_frontend_url"` set `value` that is your actual URL for Magento storefront under test.

#### Set URL for Magento Admin URL under test {#mtf_quickstart_config_phpunitxml_backend}

For `name="app_backend_url"` set `value` that is your actual URL for Magento Admin URL under test.

Example:
`<env name="app_backend_url" value="http://example.com/magento2/admin"/>`.

#### Windows only! Set full path for `basedir` and `credentials_file_path` parameters {#mtf_quickstart_config_phpunitxml_win-credent}

Find `<php>` element.

For `<env name="basedir"` set `value="<full_path_to_directory>" />` (that is directory for error logs). For example, `<env name="basedir" value="C:\magento2\dev\tests\functional\var\log" />`.

For `name="credentials_file_path" ` set `value="<full_path_to_directory>"` (that is file with credentials for Magento modules, if required). For example, `<env name="credentials_file_path" value="C:\magento2\dev\tests\functional\credentials.xml" />`.

### Edit `config.xml` to configure Magento Testing Framework {#mtf_quickstart_config_configxml}

<div class="bs-callout bs-callout-info" id="info">
  <p>The default configuration is set in <a href="{{site.mage2000url}}dev/tests/functional/etc/config.xml.dist"><code>magento2/dev/tests/functional/etc/config.xml.dist</code></a>. It should be copied as <code>config.xml</code> for further changes.</p>
</div>

Find `config.xml` in `<magento2>/dev/tests/functional/etc`, and open it in editor.

#### Set credentials for Magento Admin under test {#mtf_quickstart_config_configxml_credent-backend}
In `<application>` element find elements `<backendLogin>` and `<backendPassword>`. Change content of these elements to your actual credentials for Magento Admin URL.

#### Set browser that the MTF will use for tests {#mtf_quickstart_config_configxml_browser}
The default browser is **Mozilla Firefox**.

If you want to use another browser for tests you have to specify it in `config.xml`.

Copy `<server>` element from `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/config.xml>` and paste it in `<magento2>/dev/tests/functional/config.xml` after `<install>` element.

Enter actual data in `<browserName>` and `<browser>` attributes.

Example for Google Chrome:

{% highlight xml %}

<server>
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


### Edit `credentials.xml` to work with Magento modules that requires credentials {#mtf_quickstart_config_credentialsxml}

Find `credentials.xml` in `<magento2>/dev/tests/functional`, and open it in editor.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you cannot find <code>credentials.xml</code>, create it from <code>credentials.xml.dist</code>.</p>
</div>

#### Set credentials for Magento modules under test {#mtf_quickstart_config_credentialsxml-set}
Open `credentials.xml`.

Find block of elements for the Magento module you want to test.

Enter actual data in `value` attribute of corresponding `field` element.

<h2 id="mtf_install_pre">Next Steps</h2> <a href="{{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_environmemt.html">Prepare environment for test run</a>
