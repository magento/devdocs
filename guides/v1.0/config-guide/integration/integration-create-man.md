---
layout: default
group: config-guide
subgroup: Integration
title: Manually create an integration
menu_title: Manually create an integration
menu_order: 4
github_link: config-guide/integration/integration-create-man.md
---

Creating a new integration manually implies that the administrative user previously contacted the third-party system's developers and got all necessary information.

To create a new integration:

1.	Log in to the Magento Admin as an administrator.

2.	Click **System** > **Integrations**.

	The Integrations page displays, as shown in the following figure.

	![Click **System** > **Integrations** to start]({{ site.baseurl }}common/images/integration.png)

3.	Click ![Click the plus icon to add an integration]({{ site.baseurl }}common/images/integration_plus.png).

	The New Integration page displays as shown in the following figure.

	![Integration information consists of a unique name, optional e-mail address, and identity information]({{ site.baseurl }}common/images/integration_new_info.png)

4.  Enter the following information:

	<table>
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
		</tr>
	<tr class="even">
		<td>Name</td>
		<td>Enter a globally unique name for the integration.</td>
	</tr>
	<tr class="odd">
		<td>Email</td>
		<td>Enter a contact e-mail address.</td>
	</tr>
	<tr class="even">
		<td>Name</td>
		<td>Enter a globally unique name for the integration.</td>
	</tr>
	<tr class="odd">
		<td>Callback URL</td>
		<td>If you use OAuth for token exchange, enter a URL to use in the oauth_callback parameter in your authentication request. This field is optional; however, if you choose to use OAuth, Magento strongly recommends the URL use HTTPS.</td>
	</tr>
	<tr class="even">
		<td>Identity Link URL</td>
		<td>Enter a URL to which the Magento merchant goes to securely retrieve the access token and access token secret. This field is optional; you can provide this information to the merchant in another way. Magento strongly recommends you use HTTPS for this URL.</td>
	</tr>
	</tbody>
	</table>


5. Click the **API** tab.

	The API tab page displays as the following figure shows.

	![Select which resources to grant on the API tab page]({{ site.baseurl }}common/images/integration_roleResources.png)

	Defining the access to right resources for the third-party systems is critical for effective and secure work of your online store. There are two ways of how you can limit the access to your store for the third-party systems or some user roles:

	*  Managing access control list for user roles

	*  Managing access to resources for API calls

	In the Magento system, the access control list (ACL) for the API and internal user roles is the same.

	Roles are organized hierarchically; granting access to a parent also grants access to children unless you choose not to do so. Select the check box next to each item that your integration needs access. Leave the check box cleared for any resource to which your integration does not need access.

	Each resource in the ACL tree grants access to something. For instance, for an administrative user this could mean viewing or placing an order, viewing or changing the product details, viewing or creating CMS blocks, banners, or pages, and so on.

	<div class="bs-callout bs-callout-info" id="info">
  <p>ACLs across Magento can contain different sets of resources. That is, in some cases the ACL can be shortened for usability and security reasons.</p>
  </div>

6.  In the API section, specify which Magento resources the third-party system can have access.

	You can click either **All** from the **Resource Access** list to provide access to all available resources or you can click Custom and select the check box next to each resource you need access to.

7.	Click **Save** to save the changes or click **Save and Activate** to also activate the integration.
