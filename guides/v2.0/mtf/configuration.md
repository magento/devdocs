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

The Functional Testing

### `config.xml`

The FTF configuration settings are declared and specified in two places:

- in the Framework: `<magento2_root_dir>dev/tests/functional/vendor/magento/mtf/etc`

{% collapsible Show/hide XML code and schema %}

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/mtf/2.0/etc/config.xml.dist%}
{% endhighlight %}

![image]({{site.baseurl}}common/images/ftf/ftf_mtf-config-xsd-dia.svg)

{% endcollapsible %}

- in Magento (higher priority): `<magento2_root_dir>dev/tests/functional/`

{% collapsible Show/hide XML code and schema %}

{% highlight xml %}
{% remote_markdown https://raw.githubusercontent.com/magento/magento2/2.0/dev/tests/functional/etc/config.xml.dist %}
{% endhighlight %}

![image]({{site.baseurl}}common/images/ftf/ftf_config-xsd-dia.svg)

{% endcollapsible %}

The FTF merges settings from both with the following priorities:

- `config.xml` in Magento has higher prioity then `config.xml` in the Framework
- `config.xml.dist` is ommited if `config.xml` exists


### `config.xml`



mtf
	<application>
		Description: Application configuration settings
		        <reopenBrowser>
			values
				test
					Browser restarts for each test run
				testCase
					Browser restarts for each test case run
		        <backendLogin>admin</backendLogin>
			описано в Quick start
		        <backendPassword>123123q</backendPassword>
			описано в Quick start
		        <backendLoginUrl>admin/auth/login</backendLoginUrl>
			Relative path to the Admin login page
	    <isolation>
		Description:
			https://wiki.corp.magento.com/pages/viewpage.action?pageId=80735585#MTFGuidelines(Deprecated)-IsolatingthetestIsolatingthetest
			Скрипт, который запускается в соотвтествии с заданной стратегией
		        <resetUrlPath>dev/tests/mtf/isolation.php</resetUrlPath>
			URL
				дергается как веб-страница веб сервером
				должен быть доступ для веб сервера
		        <testSuite>
			none
			before
			after
			both
		        <testCase>
			none
			before
			after
			both
		        <test>
			none
			before
			after
			both
	    <server>
		        <item name="selenium" type="default" browser="Mozilla Firefox" browserName="firefox" host="localhost" port="4444" seleniumServerRequestsTimeout="90" sessionStrategy="shared">
			            <desiredCapabilities>
				                <platform>ANY</platform>
		найти описание в доках селениума
			https://github.com/giorgiosironi/phpunit-selenium/blob/master/PHPUnit/Extensions/Selenium2TestCase.php#L232
	    <handler>
		http://devdocs.magento.com/guides/v2.1/mtf/mtf_entities/mtf_handler.html#mtf_handler_configxml
		        <curl priority=
		        <ui priority=




### `phpunit.xml`







<!-- LINK DEFINITIONS -->

<!-- ABBREVIATIONS -->
