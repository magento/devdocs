---
layout: default
group: mtf-guide
subgroup: 55_Config
title: Functional Testing Framework Configuration
menu_title: Configuration
menu_node: parent
version: 2.0
github_link: mtf/configuration.md
---

The Functional Testing Framework configuration settings are located in two XML files:

- `phpunit.xml`
- `config.xml`

## `phpunit.xml` {#phpunit_xml}

The `<magento2_root_dir>/dev/tests/functional/phpunit.xml` contains PHPUnit configuration settings. Blocks of settings are described in [PHPUnit documentation], except `<php>` that contains parameters described in the following table.

{% collapsible Show/hide the default phpunit.xml code %}

{% highlight xml %}
{% remote_markdown  https://raw.githubusercontent.com/magento/magento2/2.0/dev/tests/functional/phpunit.xml.dist %}
{% endhighlight %}
{% endcollapsible %}

<table>
<thead>
<tr>
    <th>Parameter</th>
    <th>Description</th>
    <th><code>value</code></th>
    <th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
    <td><code>app_frontend_url</code></td>
    <td>URL to Magento storefront under test.</td>
    <td><code>http://&lt;name&gt;.&lt;domain&gt;/</code></td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_frontend" target="_blank">Set URL for Magento storefront under test</a></td>
</tr>
<tr>
    <td><code>app_backend_url</code></td>
    <td>URL to Magento Admin under test.</td>
    <td><code>"http://&lt;name&gt;.&lt;domain&gt;/&lt;path to Admin&gt;/"</code></td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_backend" target="_blank">Set URL for Magento Admin URL under test</a></td>
</tr>
<tr>
    <td><code>testsuite_rule</code></td>
    <td>Test suite name to be run.</td>
    <td><code>"&lt;test suite name&gt;"</code></td>
    <td><a href="{{page.baseurl}}mtf/features/test_suite.html#configure" target="_blank" >Set a test suite</a></td>
</tr>
<tr>
    <td><code>testsuite_rule_path</code></td>
    <td>Path to a test suite.</td>
    <td><code>"&lt;path to test suite&gt;"</code></td>
    <td><a href="{{page.baseurl}}mtf/features/test_suite.html#configure" target="_blank" >Set a path to test suite</a></td>
</tr>
<tr>
    <td><code>log_directory</code></td>
    <td>Path to a directory with testing reports.</td>
    <td><code>"&lt;path to the reporting directory&gt;"</code></td>
    <td><a href="http://localhost:4000/guides/v2.0/mtf/features/reporting.html#report-directory" target="_blank">Set a reporting directory</a></td>
</tr>
<tr>
    <td><code>events_preset</code></td>
    <td>Name of a reporting event preset.</td>
    <td><code>"&lt;event preset name&gt;"</code></td>
    <td><a href="{{page.baseurl}}mtf/features/reporting.html#set-preset" target="_blank">Set a preset</a></td>
</tr>
<tr>
    <td><code>module_whitelist</code></td>
    <td>List of special FTF modules which are present in functional tests but are not enabled in the Magento application.</td>
    <td><code>"&lt;names of modules&gt;"</code></td>
    <td>Make listed modules (that are not enabled in Magento) visible for the FTF.</td>
</tr>
<tr>
    <td><code>basedir</code></td>
    <td>A directory where PHPUnit reports are stored.</td>
    <td><code>"&lt;directory for PHPUnit reports&gt;"</code></td>
    <td></td>
</tr>
<tr>
    <td><code>credentials_file_path</code></td>
    <td>Path to the file with credentials required by services such as payment and shipment.</td>
    <td><code>"./credentials.xml.dist"</code></td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html" target="_blank">Edit <code>credentials.xml</code> to work with Magento modules that require credentials</a></td>
</tr>
<tr>
    <td><code>mage_mode</code></td>
    <td>Magento mode (<a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html" target="_blank">About Magento modes</a>).</td>
    <td><code>"default", "developer", "production"</code></td>
    <td>This parameter is intended to be used directly in a test. The FTF doesn't use it.</td>
</tr>
<tr>
    <td><code>module_filter</code></td>
    <td>Applicable for <a href="{{page.baseurl}}mtf/features/test_suite.html">test suites</a> only. Enables you to select test cases for specific modules. <a href="{{page.baseurl}}mtf/features/test_suite.html#scope-testsuite" target="_blank">Learn more about the &lt;module&gt; filter in a test suite.</a></td>
    <td><code>"Magento_&lt;name_of_module&gt;"</code></td>
    <td>Use it when you don't want to modify the test suite. </td>
</tr>
<tr>
    <td><code>module_filter_strict</code></td>
    <td>Applicable for a <a href="{{page.baseurl}}mtf/features/test_suite.html">tests suite</a> only. It has the same effect as <code>strict</code> in the <code>&lt;module&gt;</code>. <a href="{{page.baseurl}}mtf/features/test_suite.html#scope-testsuite" target="_blank">Learn more about <code>strict</code> parameter of the &lt;module&gt; filter in a test suite.</a></td>
    <td><code>"1"</code>, <code>"0"</code></td>
    <td>Use it when you don't want to modify the test suite.</td>
</tr>
</tbody>
</table>

## `config.xml` {#config_xml}

The FTF configuration settings are declared and specified in two places:

{% collapsible in the Framework %}

The file is located in `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc`

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/mtf/2.0/etc/config.xml.dist%}
{% endhighlight %}

![image]({{site.baseurl}}common/images/ftf/ftf_mtf-config-xsd-dia.svg)

Figure 1. - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`.

{%endcollapsible%}

{% collapsible in Magento functional tests %}

The file is located in `<magento2_root_dir>dev/tests/functional/`

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/dev/tests/functional/etc/config.xml.dist %}
{% endhighlight %}

![image]({{site.baseurl}}common/images/ftf/ftf_config-xsd-dia.svg)

Figure 2. - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`.

{% endcollapsible %}

The FTF merges settings from both files with the following priority:

- `config.xml` in Magento has higher priority then `config.xml` in the Framework
- `config.xml.dist` is omitted if `config.xml` exists

Settings are grouped into the following blocks:

- [`<application>`]
- [`<isolation>`]
- [`<server>`]
- [`<handler>`]
- [`<install>`] (set in Magento functional tests only)

### `<application>` {#application}

**Description:** Application configuration settings.

|Parameter|Description |
|---|---|
|`<reopenBrowser>`|Determines that a browser is to be restarted after each `test` or `testCase`.|
|`<backendLogin>`|Magento Admin username that is used during functional testing.|
|`<backendPassword>`|Magento Admin password that is used during functional testing.|
|`<appBackendUrl>`|Base URL of the Magento Admin. Not applicable currently.|
|`<backendLoginUrl>`|Relative path to the Magento Admin login page.|

### `<isolation>` {#isolation}

[Learn about isolation management][isolation management]

**Description:** Settings of a script to be run during functional testing.

|Parameter|Description|Values|
|---|---|---|
|`<resetUrlPath>`|Relative path of a script to be run. The URL is opened as usual web page in a browser, so that corresponding permissions must be set to the file.|`<resetUrlPath>dev/tests/mtf/isolation.php</resetUrlPath>`|
|`<testSuite>`|When the script must be called relatively to [test suite] run.|`none`, `before`, `after`, `both`|
|`<testCase>`|When the script must be called relatively to [test case] run.|`none`, `before`, `after`, `both`|
|`<test>`|When the script must be called relatively to test run.|`none`, `before`, `after`, `both`|

Values description:

- `none` - never run
- `before` - run before the entity to which it concerns
- `after` - run after the entity to which it concerns
- `both` - run before and after the entity to which it concerns

### `<server>` {#server}

[Open settings declarations in Selenium repository][Open Selenium code]

**Description:** Selenium server settings.

|Parameter|Description |Values|
|---|---|---|
|`name`|Name of an item.|`"selenium"`|
|`type`|Required Selenium setting. The FTF doesn't use it.|`"default"`|
|`browser`|A browser full name to be displayed where you needed it. The FTF doesn't use it.| |
|`browserName`|A browser that can be used for functional testing.|`android`, `chrome`, `firefox`, `htmlunit`, `internet explorer`, `iPhone`, `iPad`, `opera`, `safari`|
|`host` and `port`|Address of a Selenium Server.| |
|`seleniumServerRequestsTimeout`|A specified period of time to process a request.| |
|`sessionStrategy`|Standard Selenium Server parameter that sets a session strategy. Recommended to use `"shared"` only.|`"shared"`, `"isolated"`|

#### **&lt;desiredCapabilities&gt;**

[Learn about desiredCapabilities in Selenium official documentation.][desiredCapabilities]


### **&lt;handler&gt;** {#handler}

Specifies priorities for different types of handlers. The lower the value, the higher the priority. The highest priority has value 0. `token` contains access token (used by WebAPI handlers only). [Learn more about handlers.][handler]

|Parameter|Description |Values|
|---|---|---|
|`<webapi>`|`priority` value of a WebAPI handler.|Integer|
|`<curl>`|`priority` value of a curl handler priority.|Integer|
|`<ui>`|`priority` value of a UI handler priority.|Integer|

### **&lt;install&gt;** {#install}

Set of parameters to be used for [installation test case].

|Parameter|Description|
|---|---|
|`<host>`|Magento database host name or IP address.|
|`<user>`|Magento database user name.|
|`<password>`| Magento database user password.|
|`<dbName>`|Name of a database.|
|`<baseUrl>`|Magento application base URL, starting with the scheme (`http://` or `https://`) and ending with a slash character (`/`).|
|`<backendName>`|Admin URI (following the base URL).|

[Learn more about installation parameters][installation parameters]

<!-- LINK DEFINITIONS -->

<!-- External -->
[desiredCapabilities]: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
[Open Selenium code]: https://github.com/giorgiosironi/phpunit-selenium/blob/master/PHPUnit/Extensions/Selenium2TestCase.php#L233-L238
[PHPUnit documentation]: https://phpunit.de/manual/current/en/appendixes.configuration.html
[installation test case]: {{site.mage2000url}}dev/tests/functional/tests/app/Magento/Install/Test/TestCase/InstallTest.php#L60-L77

<!-- Internal -->
[handler]: {{page.baseurl}}mtf/mtf_entities/mtf_handler.html
[installation parameters]: {{page.baseurl}}install-gde/install/cli/install-cli-install.html#instgde-install-cli-magento
[isolation management]: {{page.baseurl}}mtf/features/isolation.html
[test case]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html
[test suite]: {{page.baseurl}}mtf/features/test_suite.html#configure

["app_frontend_url"]: #app_frontend_url
["app_backend_url"]: #app_backend_url
["testsuite_rule"]: #testsuite_rule
["testsuite_rule_path"]: #testsuite_rule_path
["log_directory"]: #log_directory
["events_preset"]: #events_preset
["module_whitelist"]: #module_whitelist
["basedir"]: #basedir
["credentials_file_path"]: #credentials_file_path
["mage_mode"]: #mage_mode

[`<application>`]: #application
[`<isolation>`]: #isolation
[`<server>`]: #server
[`<handler>`]: #handler
[`<install>`]: #install

<!-- ABBREVIATIONS -->
*[FTF]: Functional Testing Framework