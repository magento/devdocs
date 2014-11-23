---
layout: default
group: dev-guide
subgroup: Integration
title: Code an integration
menu_title: Code an integration
menu_order: 3
github_link: config-guide/integration/integration-code.md
---

This topic discusses how to code your integration with Magento. Eventually, you will be able to market your integration as an extension on Magento Connect; however, it's not possible to do that now for Magento 2 integrations.

<div class="bs-callout bs-callout-info" id="info">
  <p>Throughout this guide, the term <em>integration configuration</em> is used to mean the integration's <code>[your magento install dir]/app/code/vendor/module/etc/config.xml</code> and the term _API configuration_ is used to mean the integration's <code>[your magento install dir]/app/code/vendor/module/etc/integration/api.xml</code></p>
  </div>

<h2 id="code-step1">Step 1: Creating data scripts</h2>

Creating and updating an integration module are triggered by data setup scripts. You must add the following code to your integration's `[your magento install dir]/app/code/vendor/module/etc/di.xml` file for the data setup script:

<script src="https://gist.github.com/xcomSteveJohnson/9750817.js"></script>

After that, the `[Vendor]/[Module]/data/[module]_setup]/data-install-[version].php` class is used to initiate processing of the integration configuration file. (Upgrade scripts work the same way; for an example, see <a href="{{ site.mage2000url }}app/code/Magento/Customer/data/customer_setup/data-upgrade-1.6.2.0.1-1.6.2.0.2.php" target="_blank">app/code/Magento/Customer/data/customer_setup/data-upgrade-1.6.2.0.1-1.6.2.0.2.php</a>.)

<script src="https://gist.github.com/xcomSteveJohnson/9750864.js"></script>

This creates a new integration is created or updates an existing integration.

<h2 id="code-step2">Step 2: Creating the configuration and API configuration files</h2>

An integration requires the integration configuration and API configuration files.

Configuration files should follow the general requirements for configuration files and be placed in the `[Vendor]/[Module]/etc/integration` directory. The validation schema for these files should be placed in the `[Vendor]/[Module]/Integration/etc/integration/config.xsd` (configuration file) and in `[vendor]/[module]/etc/integration/api.xsd` (API configuration file).

Sample `config.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/9752169.js"></script>

The validation schema for `config.xml` is `Integration/etc/integration/config.xsd`

<script src="https://gist.github.com/xcomSteveJohnson/9752169.js"></script>

Sample `api.xml`:

<script src="https://gist.github.com/xcomSteveJohnson/9752191.js"></script>

All integration identifiers (specified by `<integration name=`) reference an appropriate entity in the integration's `config.xml`.

<h2 id="code-step3">Step 3: Assigning API configurations to the newly created integration module</h2>

Magento's `/app/code/Magento/Webapi/Model/Plugin/Setup.php` plug-in passes an integration's name from this file, creates permissions due to information in the integration API file, and associates the API with your integration.

A snippet follows:

<script src="https://gist.github.com/xcomSteveJohnson/9752298.js"></script>
