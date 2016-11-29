---
layout: default
group: mtf-guide
subgroup: 55_Config
title: Functional Testing Framework Configuration and Structure
menu_title: Configuration
menu_node: parent
version: 2.0
github_link: mtf/configuration.md
---

#### Contents

* TOC
{:toc}

## Configuration files

The Functional Testing Framework configuration setting are concentrated in two XML files:

- `phpunit.xml`
- `config.xml`

### `phpunit.xml` {#phpunit_xml}

`<magento2_root_dir>/dev/tests/functional/phpunit.xml` contains PHPUnit configuration settings. Almost all blocks of settings are described in [PHPUnit documentation] except `<php>` that contain parameters described in the following table.

<table>
<thead>
<tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Format</th>
    <th>Usage</th>
    <th>Default</th>
</tr>
</thead>
<tbody>
<tr>
    <td><code>app_frontend_url</code></td>
    <td>URL to Magento storefront under test.</td>
    <td>{%highlight xml%}<env name="app_frontend_url" value="http://<name>.<domain>/" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_frontend" target="_blank">Set URL for Magento storefront under test</a></td>
    <td>{%highlight xml%}<env name="app_frontend_url" value="http://localhost/" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>app_backend_url</code></td>
    <td>URL to Magento Admin under test.</td>
    <td>{%highlight xml%}<env name="app_backend_url" value="http://<name>.<domain>/<path to Admin>/" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_backend" target="_blank">Set URL for Magento Admin URL under test</a></td>
    <td>{%highlight xml%}<env name="app_backend_url" value="http://localhost/backend/" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>testsuite_rule</code></td>
    <td>Test suite name to be run.</td>
    <td>{%highlight xml%}<env name="testsuite_rule" value="<test suite name>" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/features/test_suite.html#configure" target="_blank" >Set a test suite</a></td>
    <td>{%highlight xml%}<env name="testsuite_rule" value="basic" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>testsuite_rule_path</code></td>
    <td>Path to a test suite.</td>
    <td>{%highlight xml%}<env name="testsuite_rule_path" value="<path to test suite>" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/features/test_suite.html#configure" target="_blank" >Set a path to test suite</a></td>
    <td>{%highlight xml%}<env name="testsuite_rule_path" value="Magento/Mtf/TestSuite/InjectableTests" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>log_directory</code></td>
    <td>Path to a directory with testing reports.</td>
    <td>{%highlight xml%}<env name="log_directory" value="<path to the reporting directory>" /> {% endhighlight %}</td>
    <td><a href="http://localhost:4000/guides/v2.0/mtf/features/reporting.html#report-directory" target="_blank">Set a reporting directory</a></td>
    <td>{%highlight xml%}<env name="log_directory" value="var/log" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>events_preset</code></td>
    <td>Name of a reporting event preset.</td>
    <td>{%highlight xml%}<env name="events_preset" value="<event preset name>" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/features/reporting.html#set-preset" target="_blank">Set a preset</a></td>
    <td>{%highlight xml%}<env name="events_preset" value="base" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>module_whitelist</code></td>
    <td>List of special FTF modules which are present in functional tests only, not in Magento application.</td>
    <td>{%highlight xml%}<env name="module_whitelist" value="<names of modules>" /> {% endhighlight %}</td>
    <td></td>
    <td>{%highlight xml%}<env name="module_whitelist" value="Magento_Install,Magento_Setup" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>basedir</code></td>
    <td>A directory where PHPUnit reports are stored.</td>
    <td>{%highlight xml%}<env name="basedir" value="<PHPUnit reports directory>" /> {% endhighlight %}</td>
    <td></td>
    <td>{%highlight xml%}<env name="basedir" value="var/log" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>credentials_file_path</code></td>
    <td>Relative path to the file with credentials required by services such as payment and shipment.</td>
    <td>{%highlight xml%}<env name="credentials_file_path" value="./credentials.xml.dist" /> {% endhighlight %}</td>
    <td><a href="{{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html" target="_blank">Edit credentials.xml to work with Magento modules that requires credentials</a></td>
    <td>{%highlight xml%}<env name="credentials_file_path" value="./credentials.xml.dist" /> {% endhighlight %}</td>
</tr>
<tr>
    <td><code>mage_mode</code></td>
    <td>Magento mode (<a href="{{page.baseurl}}config-guide/bootstrap/magento-modes.html" target="_blank">About Magento modes</a>).</td>
    <td>{%highlight xml%}<env name="mage_mode" value="developer" /> {% endhighlight %}</td>
    <td>This parameter is intended to be used directly in a test. The FTF doesn't use it. Example: <code>&lt;magento2_root_dir&gt;/dev/tests/functional/tests/app/Magento/PageCache/Test/TestCase/FlushAdditionalCachesTest.php</code></td>
    <td>{%highlight xml%}<env name="mage_mode" value="developer" /> {% endhighlight %}</td>
</tr>
</tbody>
</table>

### `config.xml` {#config_xml}

The FTF configuration settings are declared and specified in two places:

{% collapsible in the Framework %}

The file is located in `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc`.

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
- [`<install>`]

#### `<application>` {#application}

**Description:** Application configuration settings.

|Parameter|Description |Values|Default value|Explanation of the default value|
|---|---|---|---|---|
|`<reopenBrowser>`|Type of entity that restarts browser.|`test` or `testCase`.|`<reopenBrowser>test</reopenBrowser>`|The FTF restarts browser after each test case.|
|`<backendLogin>`|Magento Admin login that is used during functional testing.| |`<backendLogin>admin</backendLogin>`|Magento Admin login is set to `admin`.|
|`<backendPassword>`|Magento Admin password that is used during functional testing.| |`<backendPassword>123123q</backendPassword>`|Magento Admin password is set to `123123q`|
|`<appBackendUrl>`|Base URL of the Magento Admin. Reserved for future use. Not applicable currently.| | | |
|`<backendLoginUrl>`|Relative path to the Admin login page.| |`<backendLoginUrl>admin/auth/login</backendLoginUrl>`|Relative path to the Admin login page is `admin/auth/login`.|

#### `<isolation>` {#isolation}

**Description:** Settings of a script to be run during functional testing.

|Parameter|Description |Values|Default value|Explanation of the default value|
|---|---|---|---|---|
|`<resetUrlPath>`|URL of a script to be run. The UPL is opened as a usual web page in a browser, so that corresponding permissions must be set to the file.| |`<resetUrlPath>dev/tests/mtf/isolation.php</resetUrlPath>`|Relative path to the script is `dev/tests/mtf/isolation.php`.|
|`<testSuite>`|When the script must be called relatively to [test suite] run.|`none`, `before`, `after`, `both`|`<testSuite>none</testSuite>`|The script must never be run.|
|`<testCase>`|When the script must be called relatively to [test case] run.|`none`, `before`, `after`, `both`|`<testCase>none</testCase>`|The script must never be run.|
|`<test>`|When the script must be called relatively to test run.|`none`, `before`, `after`, `both`|`<test>none</test>`|The script must never be run.|

#### `<server>` {#server}

**Description:** Selenium server settings. [Open settings declarations in Selenium repository]

|Parameter|Description |Values|Default value|Explanation of the default value|
|---|---|---|---|---|
|`name`|Name of an item.|`"selenium"`|`"selenium"`|Item containing Selenium Server settings.|
|`type`|Required Selenium setting. The FTF doesn't use it.|`"default"`|`"default"`| |
|`browser`|A browser full name to be shown where you needed it. The FTF doesn't use it.| |`"Mozilla Firefox"`| |
|`browserName`|A browser being used for functional testing.|`android`, `chrome`, `firefox`, `htmlunit`, `internet explorer`, `iPhone`, `iPad`, `opera`, `safari`|`"firefox"`|Mozilla Firefox is used by a web driver during test run.|
|`host`| | |`"localhost"`| |
|`port`| | |`"4444"`| |
|`seleniumServerRequestsTimeout`| | |`"90"`| |
|`sessionStrategy`| | |`"shared"`| |

##### **&lt;desiredCapabilities&gt;**

[Learn about desiredCapabilities in Selenium official documentation.][desiredCapabilities]


#### **&lt;handler&gt;** {#handler}

Specifies priorities for different types of handler. The less the value, the higher the priority. The highest priority has value 0. token contains access token (used by WebAPI handlers only). [Learn more about handlers.][handler]

|Parameter|Description |Values|Default value|
|---|---|---|---|
|`<webapi priority>`|Value of a WebAPI handler.|Decimal.|`"0"`|
|`<curl priority>`|Value of a curl handler priority.|Decimal.|`"1"`|
|`<ui priority>`|Value of a UI handler priority.|Decimal.|`"2"`|


##### `<token>`

`<token>integration_token</token>`

        placeholder
        добавить в топик по хендлерам
 
#### **&lt;install&gt;** {#install}

|Parameter|Description|Default value|
|---|---|---|
|`<host>`|Database host IP address required during Magento installation.|`127.0.0.1`|
|`<user>`|Name of a database user.| `root`|
|`<password>`| Password of a database user.|`123123q`|
|`<dbName>`|Name of a database.|`default`|
|`<baseUrl>`|Magento installation base URL.|`http://magento2ce.com/`|
|`<backendName>`|Magento installation Admin relative URL.|`backend`|

<!-- LINK DEFINITIONS -->

<!-- External -->
[desiredCapabilities]: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
[Open Selenium code]: https://github.com/giorgiosironi/phpunit-selenium/blob/master/PHPUnit/Extensions/Selenium2TestCase.php#L233-L238
[PHPUnit documentation]: https://phpunit.de/manual/current/en/appendixes.configuration.html

<!-- Internal -->
[handler]: {{page.baseurl}}mtf/mtf_entities/mtf_handler.html
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