---
layout: default
group: mtf-guide
subgroup: 43_Config
title: Functional Testing Framework Configuration and Structure
menu_title: Configuration and Structure
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

`<magento2_root_dir>/dev/tests/functional/phpunit.xml` contains PHPUnit configuration settings. Almost all blocks of settings are described in [PHPUnit documentation] except `<php>`, which contains the following settings:

- ["app_frontend_url"]
- ["app_backend_url"]
- ["testsuite_rule"]
- ["testsuite_rule_path"]
- ["log_directory"]
- ["events_preset"]
- ["module_whitelist"]
- ["basedir"]
- ["credentials_file_path"]
- ["mage_mode"]

#### `"app_frontend_url"` {#app_frontend_url}

**Format:** `<env name="app_frontend_url" value="http://<name>.<domain>/" />`

**Description:** URL to Magento storefront under test.

**Usage:** [Set URL for Magento storefront under test]

**Default:** `<env name="app_frontend_url" value="http://localhost/" />`


#### `"app_backend_url"` {#app_backend_url}

**Format:** `<env name="app_backend_url" value="http://<name>.<domain>/<path to Admin>/" />`

**Description:** URL to Magento Admin under test.

**Usage:** [Set URL for Magento Admin URL under test]

**Default:** `<env name="app_backend_url" value="http://localhost/backend/" />`

#### `"testsuite_rule"` {#testsuite_rule}

**Format:** `<env name="testsuite_rule" value="<test suite name>" />`

**Description:** Test suite name to be run.

**Usage:** [Set a test suite][test suite]

**Default:** `<env name="testsuite_rule" value="basic" />`

#### `"testsuite_rule_path"` {#testsuite_rule_path}

**Format:** `<env name="testsuite_rule_path" value="<path to test suite>" />`

**Description:** Path to a test suite.

**Usage:** [Set a path to test suite][test suite]

**Default:** `<env name="testsuite_rule_path" value="Magento/Mtf/TestSuite/InjectableTests" />`

#### `"log_directory"` {#log_directory}

**Format:** `<env name="log_directory" value="<path to the reporting directory>" />`

**Description:** Path to a directory with testing reports.

**Usage:** [Set a reporting directory]

**Default:** `<env name="log_directory" value="var/log" />`

#### `"events_preset"` {#events_preset}

**Format:** `<env name="events_preset" value="<event preset name>" />`

**Description:** Name of a reporting event preset.

**Usage:** [Set a preset]

**Default:** `<env name="events_preset" value="base" />`

#### `"module_whitelist"` {#module_whitelist}

**Format:** `<env name="module_whitelist" value="<names of modules>" />`

**Description:** List of special FTF modules which are present in functional tests only, not in Magento application.

**Default:** `<env name="module_whitelist" value="Magento_Install,Magento_Setup" />`

#### `"basedir"` {#basedir}

**Format:** `<env name="basedir" value="<PHPUnit reports directory>" />`

**Description:** A directory where PHPUnit reports are stored.

**Default:** `<env name="basedir" value="var/log" />`

#### `"credentials_file_path"` {#credentials_file_path}

**Format:** `<env name="credentials_file_path" value="./credentials.xml.dist" />`

**Description:** Relative path to the file with credentials required by services such as payment and shipment.

**Usage:** [Edit credentials.xml to work with Magento modules that requires credentials][credentials]

**Default:** <env name="credentials_file_path" value="./credentials.xml.dist" />

#### `"mage_mode"` {#mage_mode}

**Format:** `<env name="mage_mode" value="developer" />`

**Description:** Magento mode ([About Magento modes]).

**Usage:** This parameter is intended to be used directly in a test. The FTF doesn't use it. Example: `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/PageCache/Test/TestCase/FlushAdditionalCachesTest.php`
 
**Default:** `<env name="mage_mode" value="developer" />`

### `config.xml` {#config_xml}

The FTF configuration settings are declared and specified in two places:

- **in the Framework: `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc`**

  {% collapsible Show/hide XML code %}

  {% highlight xml %}
  {% remote_markdown https://raw.githubusercontent.com/magento/mtf/2.0/etc/config.xml.dist%}
  {% endhighlight %}
  {% endcollapsible %}
  
  {% collapsible Show/hide XML Schema %}
  ![image]({{site.baseurl}}common/images/ftf/ftf_mtf-config-xsd-dia.svg)
  {% endcollapsible %}

  Figure 1 - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`

- **in Magento functional tests: `<magento2_root_dir>dev/tests/functional/`**

  {% collapsible Show/hide XML code %}

  {% highlight xml %}
  {% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/dev/tests/functional/etc/config.xml.dist %}
  {% endhighlight %}
  {% endcollapsible %}

  {% collapsible Show/hide XML Schema %}
  ![image]({{site.baseurl}}common/images/ftf/ftf_config-xsd-dia.svg)

  Figure 2 - XML Schema for the `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc/config.xml`

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

- **&lt;reopenBrowser>`**
{: #reopenBrowser}

   **Description:** Type of entity that restarts browser.

   **Values:** `test` or `testCase`.

   **Default value:** `<reopenBrowser>test</reopenBrowser>`.

   **Explanation of the default value:** The FTF restarts browser after each test case.


- **&lt;backendLogin&gt;**
{: #backendLogin}

   **Description:** Magento Admin login that is used during functional testing.

   **Default value:** `<backendLogin>admin</backendLogin>`

   **Explanation of the default value:** Magento Admin login is set to `admin`.


- **&lt;backendPassword&gt;**
{: #backendPassword}

   **Description:** Magento Admin password that is used during functional testing.

   **Default value:** `<backendPassword>123123q</backendPassword>`

   **Explanation of the default value:** Magento Admin password is set to `123123q`

- **&lt;appBackendUrl&gt;**
{: #appBackendUrl}

   **Description:** Base URL of the Magento Admin. Reserved for future use. Not applicable currently.

- **&lt;backendLoginUrl&gt;**
{: #backendLoginUrl}

   **Description:** Relative path to the Admin login page

   **Default value:** `<backendLoginUrl>admin/auth/login</backendLoginUrl>`

   **Explanation of the default value:** Relative path to the Admin login page is `admin/auth/login`.
   

#### `<isolation>` {#isolation}

**Description:** Settings of a script to be run during functional testing.

- **&lt;resetUrlPath&gt;**
{: #isolation-resetUrlPath}

   **Description:** URL of a script to be run. The UPL is opened as a usual web page in a browser, so that corresponding permissions must be set to the file.

   **Default value:** `<resetUrlPath>dev/tests/mtf/isolation.php</resetUrlPath>`

   **Explanation of the default value:** Relative path to the script is `dev/tests/mtf/isolation.php`.

- **&lt;testSuite&gt;**
{: #isolation-testSuite}
 
   **Description:** When the script must be called relatively to [test suite] run.

   **Values:** `none`, `before`, `after`, `both`.
 
   **Default value:** `<testSuite>none</testSuite>`

   **Explanation of the default value:** The script must never be run.

- **&lt;testCase&gt;**
{: #isolation-testCase}

   **Description:** When the script must be called relatively to [test case] run.

   **Values:** `none`, `before`, `after`, `both`
 
   **Default value:** `<testCase>none</testCase>`

   **Explanation of the default value:** The script must never be run.

- **&lt;test&gt;**
{: #isolation-test}

   **Description:** When the script must be called relatively to test run.

   **Values:** `none`, `before`, `after`, `both`.
 
   **Default value:** `<test>none</test>`

   **Explanation of the default value:** The script must never be run.

#### `<server>` {#server}

**Description:** Selenium server settings. [Open settings declarations in Selenium repository]

- **name**
{: #server-name}

   **Description:** Name of an item.

   **Constant value:** `"selenium"`

- **type** 
{: #server-type}

   **Description:** Required Selenium setting. The FTF doesn't use it.

   **Constant value:** `"default"`

- **browser** 
{: #server-browser}

   **Description:** Web browser full name to be shown where it is needed. The FTF doesn't use it.

   **Default value:** `"Mozilla Firefox"`

- **browserName**
{: #server-browserName}

   **Description:** The name of the browser being used for functional testing.

   **Values:** `android, chrome, firefox, htmlunit, internet explorer, iPhone, iPad, opera, safari`.

   **Default value:** `"firefox"`

   **Explanation of the default value:** Mozilla Firefox is used by a web driver during test run.

- **host**
{#server-host}

   **Description:**
 
   **Default value:** `"localhost"`

   **Explanation of the default value:**
 
- **port**
{#server-port}

   **Description:**

   **Default value:** `"4444"

   **Explanation of the default value:**

- **seleniumServerRequestsTimeout**
{: #server-seleniumServerRequestsTimeout}

   **Description:**

   **Default value:** `"90"`

   **Explanation of the default value:**

- **sessionStrategy**
{: #server-sessionStrategy}

   **Description:**

   **Default value:** `"shared"`

   **Explanation of the default value:**

- **&lt;desiredCapabilities&gt;**
{: #server-desiredCapabilities}

   [Learn about desiredCapabilities in Selenium official documentation.][desiredCapabilities]

#### **&lt;handler&gt;** {#handler}

	http://devdocs.magento.com/guides/v2.1/mtf/mtf_entities/mtf_handler.html#mtf_handler_configxml

- `<curl priority=`
- `<ui priority=`
- `<webapi priority="0">`
   
   - `<token>integration_token</token>`
      placeholder
      добавить в топик по хендлерам
 
#### **&lt;install&gt;** {#install}

        <host>127.0.0.1</host>
	Параметр для MySQL
        <user>root</user>
	Параметр для MySQL
        <password>123123q</password>
	Параметр для MySQL
        <dbName>default</dbName>
	Параметр для MySQL
        <baseUrl>http://magento2ce.com/</baseUrl>
	Значение для установки
        <backendName>backend</backendName>
	Значение для установки



<!-- LINK DEFINITIONS -->

<!-- External -->
[desiredCapabilities]: https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
[Open Selenium code]: https://github.com/giorgiosironi/phpunit-selenium/blob/master/PHPUnit/Extensions/Selenium2TestCase.php#L233-L238
[PHPUnit documentation]: https://phpunit.de/manual/current/en/appendixes.configuration.html

<!-- Internal -->
[About Magento modes]: {{page.baseurl}}config-guide/bootstrap/magento-modes.html
[credentials]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html
[Set a preset]: {{page.baseurl}}mtf/features/reporting.html#set-preset
[Set a reporting directory]: http://localhost:4000/guides/v2.0/mtf/features/reporting.html#report-directory
[Set URL for Magento storefront under test]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_frontend
[Set URL for Magento Admin URL under test]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml_backend
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