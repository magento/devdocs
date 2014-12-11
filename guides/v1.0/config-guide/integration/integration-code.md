---
layout: default
group: 
subgroup: Integration
title: Code an integration
menu_title: Code an integration
menu_order: 3
github_link: config-guide/integration/integration-code.md
---

Read this topic to learn how to code your integration with Magento. Eventually, you will be able to market your integration as an extension on Magento Connect; however, it's not possible to do that now for Magento integrations.

<p>The term <em>integration configuration</em> refers to the integration's <code>&lt;MAGENTO_INSTALL_DIR&gt;/app/code/vendor/module/etc/config.xml</code>.</p>
<p>The term <em>API configuration</em> refers to the integration's <code>&lt;MAGENTO_INSTALL_DIR&gt;/app/code/vendor/module/etc/integration/api.xml</code>.</p>

<h2 id="code-step1">Step 1. Create data scripts</h2>

<p>Creating and updating an integration module are triggered by data setup scripts. You must add the following code to your integration's <code>&lt;MAGENTO_INSTALL_DIR&gt;/app/code/vendor/module/etc/di.xml</code> file for the data setup script:</p>

<script src="https://gist.github.com/xcomSteveJohnson/9750817.js"></script>

<p>After that, the <code>&lt;VENDOR&gt;/&lt;MODULE_NAME&gt;/data/&lt;MODULE_NAME&gt;_setup]/data-install-&lt;VERSION&gt;.php</code> class is used to initiate processing of the integration configuration file. (Upgrade scripts work the same way; for an example, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/data/customer_setup/data-upgrade-1.6.2.0.1-1.6.2.0.2.php" target="_blank">app/code/Magento/Customer/data/customer_setup/data-upgrade-1.6.2.0.1-1.6.2.0.2.php</a>.)</p>

<script src="https://gist.github.com/xcomSteveJohnson/9750864.js"></script>

This creates a new integration is created or updates an existing integration.

<h2 id="code-step2">Step 2. Create the configuration and API configuration files</h2>

An integration requires the integration configuration and API configuration files.

<p>Configuration files should follow the general requirements for configuration files and be placed in the <code>&lt;VENDOR&gt;/&lt;MODULE_NAME&gt;/etc/integration</code> directory. The validation schema for these files should be placed in the <code>&lt;VENDOR&gt;/&lt;MODULE_NAME&gt;/Integration/etc/integration/config.xsd</code> (configuration file) and in <code>&lt;VENDOR&gt;/&lt;MODULE_NAME&gt;/etc/integration/api.xsd</code> (API configuration file).</p>

<p>Sample <code>config.xml</code>:</p>

<script src="https://gist.github.com/xcomSteveJohnson/9752169.js"></script>

<p>The validation schema for <code>config.xml</code> is <code>Integration/etc/integration/config.xsd</code></p>

<script src="https://gist.github.com/xcomSteveJohnson/9752169.js"></script>

<p>Sample <code>api.xml</code>:</p>

<script src="https://gist.github.com/xcomSteveJohnson/9752191.js"></script>

<p>All integration identifiers (specified by <code><integration name=</code>) reference an appropriate entity in the integration's <code>config.xml</code>.</p>

<h2 id="code-step3">Step 3. Assign API configurations to integration module</h2>

<P>Magento's <code>/app/code/Magento/Webapi/Model/Plugin/Setup.php</code> plug-in passes an integration's name from this file, creates permissions due to information in the integration API file, and associates the API with your integration.</p>

<p>A snippet follows:</p>

<script src="https://gist.github.com/xcomSteveJohnson/9752298.js"></script>
