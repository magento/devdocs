---
layout: default
group: howdoi
subgroup: AA_Top
title: How do I...?
menu_title: How do I...?
menu_node: parent
menu_order: 1
github_link: howdoi/bk-how-do-i.md
---

These topics provide step-by-step instructions for common tasks you're likely to perform developing the Magento application and deploying it to a live production server.

Please help us keep this list up-to-date by providing feedback in any of the following ways:

*	Click **Edit this page in GitHub** to open a pull request with a solution of your own.
*	Open an <a href="https://github.com/magento/devdocs/issues" target="_blank">issue</a> in the devdocs GitHub repository.
*	Send us a <a href="https://twitter.com/MagentoDevDocs" target="_blank">tweet</a> or <a href="mailto:DL-Magento-Doc-Feedback@ebay.com">e-mail</a>.

## PHP developers
*	<a href="{{ site.gdeurl }}howdoi/php/php_clear-dirs.html">Clear directories during development</a>

## Frontend developers


- <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html">Add a theme</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-apply.html">Apply and configure a theme in Admin</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-images.html">Configure product images</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html">Define which layouts, templates and stylesheets are used for a certain page</a>
- Customize theme layout files:
	- 	<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_columns">Set the page layout</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_css">Include static resources (JavaScript, CSS, fonts) in &lt;head&gt;</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_css_remove">Remove static resources (JavaScript, CSS, fonts) in &lt;head&gt;</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#create_cont">Create a container</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#ref_container">Reference a container</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#xml-manage-block">Create a block</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#set_template">Set the template used by a block</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_modify-block">Modify block arguments</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#xml-manage-ref-block">Reference a block</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_block-properties">Use block object methods to set block properties</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_rearrange">Rearrange elements</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_remove_elements">Remove elements</a>
	- 		<a href="{{site.gdeurl}}frontend-dev-guide/themes/xml-manage.html#layout_markup_replace_elements">Replace elements</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/template-walkthrough.html">Customize theme .phtml templates</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/template-email.html">Customize email templates</a>
- <a href="{{site.gdeurl}}frontend-dev-guide/themes/css_quick_guide_approach.html">Extend and override parent styles</a>


## JavaScript developers

- <a href="{{site.gdeurl}}javascript-dev-guide/javascript/js-resources.html">Configure JavaScript resources</a>
- <a href="{{site.gdeurl}}javascript-dev-guide/javascript/custom_js.html#js_replace">Replace a default JS component</a>
- <a href="{{site.gdeurl}}javascript-dev-guide/javascript/custom_js.html#extend_js">Extend a default JS component</a>
- <a href="{{site.gdeurl}}javascript-dev-guide/javascript/custom_js.html#disable_default_js">Disable default Magento JS</a>
- <a href="{{site.gdeurl}}javascript-dev-guide/javascript/js_debug.html">Define which JavaScript components and widgets are used on a particular page.</a>

## Migration
*	<a href="{{ site.gdeurl }}howdoi/migrate/migrate.html">Migrate to Magento 2 store</a>

## QA

### Functional testing using the Magento Testing Framework

* <a href="{{site.gdeurl}}mtf/mtf_installation.html">Install the MTF</a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_phpunitxml">Edit phpunit.xml to configure PHPUnit</a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_configxml">Edit config.xml to start using Magento Testing Framework</a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_config.html#mtf_quickstart_config_credentialsxml">Edit credentials.xml to work with Magento modules that requires credentials </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html#mtf_quickstart_env_selenium">Run the Selenium Server </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html#mtf_quickstart_env_selenium-non-def">Run the Selenium Server with WebDriver </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_environmemt.html#mtf_quickstart_env_generator">Run the MTF generator </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html#mtf_quickstart_testrun_all">Run all functional tests </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html#mtf_quickstart_testrun_one">Run one functional test </a>
* <a href="{{site.gdeurl}}mtf/mtf_quickstart/mtf_quickstart_logs.html">See logs for failed functional tests </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_merge#mtf_fixture_create">Create new fixture with generateFixtureXml tool in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy">Add a repository to the fixture field in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source">Add the data source to the fixture field in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_merge">Merge fixtures in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend">Extend fixture in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repository_create">Create a repository for the entire fixture in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repository_create">Create a repository for the fixture field in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repository_merge">Merge repositories in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html#mtf_repository_credent_iso">Use credentials and placeholders in the MTF repositories </a>  
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html#mtf_handler_howto-create-curl">Create cURL handler in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html#mtf_handler_decor">Use BackendDecorator and FrontendDecorator classes </a>  
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html#mtf_handler_howto-create-ui">Create a UI Handler in the MTF </a>
* <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html#mtf_handler_howto-create-webapi">Create a WebAPI Handler </a>