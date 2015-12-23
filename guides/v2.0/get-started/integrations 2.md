---
layout: default
group: get-started
subgroup: A_Concepts
title: Create an integration
menu_title: Create an integration
menu_order: 8
github_link: get-started/bk-get-started-api.md
---

An **integration** enables third-party services to call the Magento web APIs. For example, you can create an integration so that an SaaS (Software as a Service) application such as Salesforce can perform tasks such as creating Magento customer accounts or fetching data about orders.

Implementing an integration requires little knowledge of PHP or Magento internal processes. However, you must have a working knowledge of the Magento REST or SOAP Web APIs. Interactions between Magento and the third-party service require [Web API authentication](authentication/gs-authentication.html).

To create an integration, follow these general steps:

1. Create a module with the minimal configuration.
2. Add files specific to the integration.
3. Test and package your module.


<h2>Create a skeletal module</h2>

Before you begin creating a module, make sure that you have a working installation of Magento 2.0, and the [Magento System Requirements](../install-gde/system-requirements.html).

To develop a module, you must:

* **Create the module file structure.** The module for an integration can be placed anywhere under the Magento root directory, but the recommended location is `<magento_base_dir>/vendor/<vendor_name>/module-<module_name>`.

Also create an `etc` and `integration` subdirectories under `module-<module_name>`, as shown in the following example:

{% highlight xml %}
cd <magento_base_dir>
mkdir vendor/<vendor_name>/module-<module_name>
cd vendor/<vendor_name>/module-<module_name>
mkdir etc
mkdir integration
{% endhighlight %}

For more detailed information, see [Create the module file structure](../extension-dev-guide/module-file-structure.html).

* **Define your configuration files.** Magento requires several configuration

* [Define configuration files](../extension-dev-guide/required-configuration-files.html)
* [Register the module in a registration.php file](../extension-dev-guide/enable-module.html)
* [Create the module](../extension-dev-guide/create_module.html)
* [Enable the module](../extension-dev-guide/enable-module.html)

<h2>Customize your module for an integration</h2>

Magento provides the Integration module, which simplifies the process of defining your integration. This module automatically performs functions such as:

* Managing the third-part account that connects to Magento.
* Maintaining OAuth authorizations and user data.
* Managing security tokens and requests.

To customize your module, you must create multiple XML files and read through others files to determine what resources existing Magento modules have access to.

The process for customizing your module includes

* [Add the integration directory](#adddir)
* [Define the required resources](#resources)
* [Pre-configure the integration](#preconfig)

<h3 id="adddir">Add the integration directory</h3>

The `integration` directory contains files that are required to configure your integration.  Create this directory in the `<Vendor>/<ModuleName>/etc` directory.

{% highlight xml %}
cd <Vendor>/<ModuleName>/etc
mkdir integration
{% endhighlight %}


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

Your module can provide a configuration file so that the integration can be automatically pre-configured with default values. To enable this feature, create the `config.xml` file in the `integration` directory.

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

<h2>Test and package your module</h2>
Follow the steps provided in the [PHP Developer Guide](../extension-dev-guide/bk-extension-dev-guide.html) for information on making sure that your module and integration work as expected.


* [Test your module](../extension-dev-guide/test-module.html)
* [Package your module](../extension-dev-guide/package.html)
