---
layout: default
group: get-started
subgroup: A_Concepts
title: Create an integration temp
menu_title: Create an integration
menu_order: 9
github_link: get-started/integrations.md
---


An **integration** enables third-party services to call the Magento web APIs. For example, you can create an integration so that an SaaS (Software as a Service) application such as Salesforce can perform tasks such as creating Magento customer accounts or fetching data about orders.

Implementing an integration requires little knowledge of PHP or Magento internal processes. However, you must have a working knowledge of the Magento REST or SOAP Web APIs. In addition, interactions between Magento and the third-party service require [Web API authentication](authentication/gs-authentication.html).

Before you begin creating a module, make sure that you have a working installation of Magento 2.0, and the [Magento System Requirements](../install-gde/system-requirements.html).

To create an integration, follow these general steps:

1. Create a module with the minimal structure and configuration.
2. Add files specific to the integration.
3. Install the module.

<h2>Create a skeletal module</h2>

Magento expects that a component's files be locatedTo develop a module, you must:

1. **Create the module file structure.** The module for an integration can be placed anywhere under the Magento root directory, but the recommended location is `<magento_base_dir>/vendor/<vendor_name>/module-<module_name>`.

   Also create  `etc`, `integration`, and `setup` subdirectories under `module-<module_name>`, as shown in the following example:

    <pre>
    cd &lt;magento_base_dir>
    mkdir vendor/&lt;vendor_name>/module-&lt;module_name>
    cd vendor/&lt;vendor_name>/module-&lt;module_name>
    mkdir etc
    mkdir integration
    mkdir setup
    </pre>
   For more detailed information, see [Create the module file structure](../extension-dev-guide/module-file-structure.html).

2. **Define your module configuration file.** The `etc/module.xml` file provides basic information about the module. Change directories to the `etc` directory and create the `module.xml` file. You must specify values for the following attributes:

   <table>
   <tr>
   <th>Attribute</th><th>Description</th>
   </tr>
   <tr>
   <td>name</td>
   <td>A string that uniquely identifies the module.</td>
   </tr>
   <tr>
   <td>setup_version</td>
   <td>The version of Magento the component uses</td>
   </tr>
   </table>
   The following example shows an example `module.xml` file.

   <pre>
   &lt;?xml version="1.0"?>
   &lt;!--
      /**
      * Copyright © 2015 Magento. All rights reserved.
      * See COPYING.txt for license details.
      */
      -->
      &lt;config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">
          &lt;module name="Vendor1_Module1" setup_version="2.0.0">
          &lt;/module>
        &lt;/config>
   </pre>


3. **Add your module's `composer.json` file.** Composer is a dependency manager for PHP. You must create a `composer.json` file for your module so that Composer can install and update the libraries your module relies on. Place the `composer.json` file in the `module-<module_name>` directory.

    The following example demonstrates a minimal `composer.json` file.


    <pre>
      {
      "name": "Vendor1_Module1",
      "description": "create integration from config",
      "require": {
        "php": "~5.5.0|~5.6.0|~7.0.0",
        "magento/framework": "2.0.0",
        "magento/module-integration": "2.0.0"
      },
      "type": "magento2-module",
      "version": "1.0",
      "autoload": {
        "files": [ "registration.php" ],
        "psr-4": {
          "Vendor1\\Module1\\": ""
        }
      }
    }
    </pre>


    For more information, see [Create a component](../extension-dev-guide/create_component.html).
4. **Create an install class.**
Change directories to your `setup` directory. Create a file `InstallData.php` that contains the following code. Be sure to change the path after `namespace`.

    <pre>
    &lt;?php
    namespace &lt;Vendor_name>\Module-&lt;module_name>\Setup;

    use Magento\Framework\Setup\ModuleContextInterface;
    use Magento\Framework\Setup\ModuleDataSetupInterface;
    use Magento\Integration\Model\ConfigBasedIntegrationManager;
    use Magento\Framework\Setup\InstallDataInterface;

    class InstallData implements InstallDataInterface
    {
        /**
         * @var ConfigBasedIntegrationManager
         */

        private $integrationManager;

        /**
         * @param ConfigBasedIntegrationManager $integrationManager
         */
        public function __construct(ConfigBasedIntegrationManager $integrationManager)
        {
            $this->integrationManager = $integrationManager;
        }

        /**
         * {@inheritdoc}
         */
        public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
        {
            $this->integrationManager->processIntegrationConfig(['test_integration']);
        }

    }
    </pre>

<h2>Create integration files</h2>
Magento provides the Integration module, which simplifies the process of defining your integration. This module automatically performs functions such as:

* Managing the third-party account that connects to Magento.
* Maintaining OAuth authorizations and user data.
* Managing security tokens and requests.

To customize your module, you must create multiple XML files and read through others files to determine what resources existing Magento modules have access to.

The process for customizing your module includes

* [Define the required resources](#resources)
* [Pre-configure the integration](#preconfig)


<h3 id="resources">Define the required resources</h3>
The `integration/api.xml` file defines which API resources the integration has access to.

To determine which resources an integration needs access to, review the permissions defined in each module's `etc/acl.xml` file.

In the following example, the test integration requires access to the following resources in the Sales module:

{% highlight xml %}
<integrations>
    <integration name="Test Integration">
        <resources>
            <!-- To grant permission to Magento_Log::online, its parent Magento_Customer::customer needs to be declared as well-->
            <resource name="Magento_Customer::customer" />
            <resource name="Magento_Log::online" />
            <!-- To grant permission to Magento_Sales::reorder, all its parent resources need to be declared-->
            <resource name="Magento_Sales::sales" />
            <resource name="Magento_Sales::sales_operation" />
            <resource name="Magento_Sales::sales_order" />
            <resource name="Magento_Sales::actions" />
            <resource name="Magento_Sales::reorder" />
        </resources>
    </integration>
    <integration name="Test Integration2">
        <resources>
            <resource name="Magento_Sales::sales" />
            <resource name="Magento_Sales::sales_operation" />
            <resource name="Magento_Sales::transactions" />
        </resources>
    </integration>
</integrations>
{% endhighlight %}

<h3 id="preconfig">Pre-configure the integration</h3>

Your module can optionally provide a configuration file so that the integration can be automatically pre-configured with default values. To enable this feature, create the `config.xml` file in the `integration` directory.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you pre-configure the integration, the values cannot be edited from the admin panel.</p>
</div>

{% highlight xml %}
<integrations>
   <integration name="TestIntegration1">
       <email></email>
       <endpoint_url></endpoint_url>
       <identity_link_url></identity_link_url>
   </integration>
</integrations>
{% endhighlight %}

<table>
<tr>
<th>Element</th>
<th>Description</th>
</tr>
<tr>
<td><code>integrations</code></td>
<td>Contains one or more integration definitions.</td>
</tr>
<tr>
<td><code>integration name=""</code></td>
<td>Defines an integration. The <code>name</code> must be specified.</td>
</tr>
<tr>
<td>email</td>
<td>Optional. An email to associate with this integration.</td>
</tr>
<tr>
<td>endpoint_url</td>
<td>Optional. The URL where OAuth credentials can be sent when using OAuth for token exchange. We strongly recommend using <code>https://</code>.</td>
</tr>
<tr>
<td>identity_link_url</td>
<td>Optional. The URL that redirects the user to link their 3rd party account with the Magento integration.</td>
</tr>
</table>
<h2 id="install">Install your module</h2>
Use the following steps to install your module:

1. Change directories to the `var` directory and remove its contents.

  `cd <magento_install_dir>/`
  `rm -rf var/*`

2. Run the following command to update the Magento database schema and data.

  `bin/magento setup:upgrade`

3. Run the following command to generate the new code.

  `bin/magento setup:di:compile-multi-tenant`

<h2 id="check">Check your integration</h2>
Log in to Magento and navigate to **Settings > Extensions > Integrations**. The integration should be displayed in the grid.
