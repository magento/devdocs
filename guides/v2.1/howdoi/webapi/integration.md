---
layout: default
group: howdoi
subgroup: Web APIs
title: Create an integration
menu_title: Create an integration
menu_order: 1
version: 2.1
github_link: howdoi/webapi/integration.md

---


An **integration** enables third-party services to call the Magento web APIs. The Magento APIs currently supports Accounting, Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Product Information Management (PIM), and marketing automation systems out of the box.  

Implementing an integration requires little knowledge of PHP or Magento internal processes. However, you will need a working knowledge of

* [Magento REST or SOAP Web APIs](../../get-started/bk-get-started-api.html)
* [Web API authentication](../../get-started/authentication/gs-authentication.html)


Before you begin creating a module, make sure that you have a working installation of Magento 2.0, and the [Magento System Requirements](../../install-gde/system-requirements.html).

To create an integration, follow these general steps:

1. [Create a module with the minimal structure and configuration.](#skeletal)
2. [Add files specific to the integration.](#files)
3. [Install the module.](#install)
4. [Check the integration.](#check)

<h2 id="skeletal">Create a skeletal module</h2>

To develop a module, you must:

1. **Create the module file structure.** The module for an integration can be placed anywhere under the Magento root directory, but the recommended location is `<magento_base_dir>/vendor/<vendor_name>/module-<module_name>`.

   Also create  `etc`, `etc/integration`, and `Setup` subdirectories under `module-<module_name>`, as shown in the following example:

    <pre>
    cd &lt;magento_base_dir>
    mkdir -p vendor/&lt;vendor_name>/module-&lt;module_name>/etc/integration
    mkdir -p vendor/&lt;vendor_name>/module-&lt;module_name>/Setup
   </pre>
   For more detailed information, see [Create the module file structure](../../extension-dev-guide/module-file-structure.html).

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
   The following example shows an example `etc/module.xml` file.

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
               &lt;sequence>
                   &lt;module name="Magento_Integration"/>
               &lt;/sequence>
          &lt;/module>
        &lt;/config>
   </pre>

   Module "Magento_Integration" is added to "sequence" to be loaded first. It helps to avoid the issue, when a module with integration config loaded, that leads to a malfunction.


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


    For more information, see [Create a component]({{ site.gdejrl }}extension-dev-guide/build/create_component.html).

4. **Create a `registration.php` file** The `registration.php` registers the module with the Magento system. It must be placed in the module's root directory.

      <pre>
      &lt;?php
        /**
        * Copyright © 2015 Magento. All rights reserved.
        * See COPYING.txt for license details.
        */

        \Magento\Framework\Component\ComponentRegistrar::register(
        \Magento\Framework\Component\ComponentRegistrar::MODULE,
        'Vendor1_Module1',
        __DIR__
        );
      </pre>

5. **Create an install class.**
Change directories to your `Setup` directory. Create a `InstallData.php` file that installs the integration configuration data into the Magento integration table.

    The following sample is boilerplate and requires minor changes to make your integration work.

    <pre>
    &lt;?php
    namespace Vendor1\Module1\Setup;

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
            $this->integrationManager->processIntegrationConfig(['testIntegration']);
        }
    }
    </pre>


    In the following line

    `$this->integrationManager->processIntegrationConfig(['testIntegration']);`

    `testIntegration` must refer to your `etc/integrations/config.xml` file, and the integration name value must be the same.

    Also, be sure to change the path after `namespace` for your vendor and module names.


<h2 id="files">Create integration files</h2>
Magento provides the Integration module, which simplifies the process of defining your integration. This module automatically performs functions such as:

* Managing the third-party account that connects to Magento.
* Maintaining OAuth authorizations and user data.
* Managing security tokens and requests.

To customize your module, you must create multiple XML files and read through others files to determine what resources existing Magento modules have access to.

The process for customizing your module includes

* [Define the required resources](#resources)
* [Pre-configure the integration](#preconfig)


<h3 id="resources">Define the required resources</h3>
The `etc/integration/api.xml` file defines which API resources the integration has access to.

To determine which resources an integration needs access to, review the permissions defined in each module's `etc/acl.xml` file.

In the following example, the test integration requires access to the following resources in the Sales module:

{% highlight xml %}
<integrations>
    <integration name="testIntegration">
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
</integrations>
{% endhighlight %}

<h3 id="preconfig">Pre-configure the integration</h3>

Your module can optionally provide a configuration file `config.xml` so that the integration can be automatically pre-configured with default values. To enable this feature, create the `config.xml` file in the `etc/integration` directory.

<div class="bs-callout bs-callout-info" id="info">
  <p>If you pre-configure the integration, the values cannot be edited from the admin panel.</p>
</div>

The  file defines which API resources the integration has access to.

{% highlight xml %}
<integrations>
   <integration name="TestIntegration">
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
<td>integrations</td>
<td>Contains one or more integration definitions.</td>
</tr>
<tr>
<td>integration name=""</td>
<td>Defines an integration. The <code>name</code> must be specified.</td>
</tr>
<tr>
<td>email</td>
<td>Optional. An email to associate with this integration.</td>
</tr>
<tr>
<td>endpoint_url</td>
<td><p>Optional. The URL where OAuth credentials can be sent when using OAuth for token exchange. We strongly recommend using <code>https://</code>.</p>
<p>See [OAuth-based authentication](../../get-started/authentication/gs-authentication-oauth.html) for details.</p></td>
</tr>
<tr>
<td>identity_link_url</td>
<td>Optional. The URL that redirects the user to link their 3rd party account with the Magento integration.</td>
</tr>
</table>
<h2 id="install">Install your module</h2>
Use the following steps to install your module:

1. Run the following command to update the Magento database schema and data.

    <code>bin/magento setup:upgrade</code>

2. Run the following command to generate the new code.

    <code>bin/magento setup:di:compile</code>

<h2 id="check">Check your integration</h2>
Log in to Magento and navigate to **Settings > Extensions > Integrations**. The integration should be displayed in the grid.

<h2>Related Topics</h2>
- [Web API authentication](../../get-started/authentication/gs-authentication.html)
- [Magento System Requirements](../../install-gde/system-requirements.html)
- [Create the module file structure](../../extension-dev-guide/module-file-structure.html)
- [Create a component](../../extension-dev-guide/create_component.html)
