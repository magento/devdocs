---
layout: default
group: mtf-guide
subgroup: 30_Quickstart
title: Quick start with the Functional Testing Framework
menu_title: Adjust configuration
menu_order: 1
version: 2.0
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

Example:
`<env name="app_backend_url" value="http://example.com/magento2/"/>`

#### Set URL for Magento Admin URL under test {#mtf_quickstart_config_phpunitxml_backend}

For `name="app_backend_url"` set `value` that is your actual URL for Magento Admin URL under test.

Example:
`<env name="app_backend_url" value="http://example.com/magento2/admin/"/>`

### Edit `config.xml` to configure Functional Testing Framework {#mtf_quickstart_config_configxml}

<div class="bs-callout bs-callout-info" id="info">
  <p>The default configuration is set in <a href="{{site.mage2000url}}dev/tests/functional/etc/config.xml.dist"><code>&lt;magento2&gt;/dev/tests/functional/etc/config.xml.dist</code></a>. It should be copied as <code>config.xml</code> for further changes.</p>
</div>

Find `config.xml` in `<magento2>/dev/tests/functional/etc`, and open it in editor.

#### Set credentials for Magento Admin under test {#mtf_quickstart_config_configxml_credent-backend}
In `<application>` element find elements `<backendLogin>` and `<backendPassword>`. Change content of these elements to your actual credentials for Magento Admin URL.

#### Set browser that the FTF will use for tests {#mtf_quickstart_config_configxml_browser}
The default browser is **Mozilla Firefox**.

If you want to use another browser for tests you have to specify it in `config.xml`.

Copy `<server>` element from `<magento2>/dev/tests/functional/vendor/magento/mtf/etc/config.xml>` and paste it in `<magento2>/dev/tests/functional/etc/config.xml` after `<install>` element.

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

<h2 id="mtf_install_pre">Next Steps</h2>

[Prepare Magento application &gt;&gt;]({{ site.gdeurl }}mtf/mtf_quickstart/mtf_quickstart_magento.html)
