---
group: functional-testing-framework-guide
title: Quick start. Adjust configuration
---

### Edit `phpunit.xml` to configure PHPUnit {#mtf_quickstart_config_phpunitxml}

Find `phpunit.xml` in `<magento2_root_dir>/dev/tests/functional`, and open it in editor.

 {:.bs-callout-info}
If you cannot find `phpunit.xml`, create it from `phpunit.xml.dist`.

#### Set URL for Magento storefront under test {#mtf_quickstart_config_phpunitxml_frontend}

Find `<php>` element.
For `name="app_frontend_url"` set `value` that is your actual [URL](https://glossary.magento.com/url) for Magento [storefront](https://glossary.magento.com/storefront) under test.

Example:
`<env name="app_frontend_url" value="http://example.com/magento2/"/>`

#### Set URL for Magento Admin URL under test {#mtf_quickstart_config_phpunitxml_backend}

For `name="app_backend_url"` set `value` that is your actual URL for [Magento Admin](https://glossary.magento.com/magento-admin) URL under test.

Example:
`<env name="app_backend_url" value="http://example.com/magento2/admin/"/>`

### Edit `config.xml` to configure Functional Testing Framework {#mtf_quickstart_config_configxml}

 {:.bs-callout-info}
The default configuration is set in [`<magento2>/dev/tests/functional/etc/config.xml.dist`]({{ site.mage2bloburl }}/{{ page.guide_version }}/dev/tests/functional/etc/config.xml.dist). It should be copied as `config.xml` for further changes.

Find `config.xml` in `<magento2_root_dir>/dev/tests/functional/etc`, and open it in editor.

#### Set credentials for Magento Admin under test {#mtf_quickstart_config_configxml_credent-backend}

In `<application>` element find elements `<backendLogin>` and `<backendPassword>`. Change content of these elements to your actual credentials for Magento [Admin](https://glossary.magento.com/admin) URL.

#### Set browser that the FTF will use for tests {#mtf_quickstart_config_configxml_browser}

The default browser is **Mozilla Firefox**.

If you want to use another browser for tests you have to specify it in `config.xml`.

Copy `<server>` element from `<magento2_root_dir>/dev/tests/functional/vendor/magento/mtf/etc/config.xml>` and paste it in `<magento2_root_dir>/dev/tests/functional/etc/config.xml` after `<install>` element.

Enter actual data in `<browserName>` and `<browser>` attributes.

Example for Google Chrome:

```xml

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

```

### Edit `credentials.xml` to work with Magento modules that requires credentials {#mtf_quickstart_config_credentialsxml}

Find `credentials.xml` in `<magento2_root_dir>/dev/tests/functional`, and open it in editor.

 {:.bs-callout-info}
If you cannot find `credentials.xml`, create it from `credentials.xml.dist`.

#### Set credentials for Magento modules under test {#mtf_quickstart_config_credentialsxml-set}

Open `credentials.xml`.

Find block of elements for the Magento [module](https://glossary.magento.com/module) you want to test.

Enter actual data in `value` attribute of corresponding `field` element.

## Next Steps {#mtf_install_pre}

[Prepare Magento application &gt;&gt;]({{ page.baseurl }}/mtf/mtf_quickstart/mtf_quickstart_magento.html)
