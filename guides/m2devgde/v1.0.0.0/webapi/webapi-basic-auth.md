---
layout: howtom2devgde_chapters
title: Authorizing Web API Requests
---

# Authorizing Web API Requests

<p><a href="https://github.com/magento/devdocs/blob/master/guides/m2devgde/v1.0.0.0/webapi/webapi-basic-auth.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}/common/images/newWindow.gif"/></p>

**Note**: The `AuthorizationV1Interface` interface discussed in this topic is not implemented yet.

This topic provides basic information about how to authorize Web API requests.

When a merchant installs an integration, they must be informed which Magento resources the Magento integration needs access to. To see how a merchant authorizes an integration, go to [What is the Web API Framework?]({{ site.baseurl }}/guides/m2devgde/v1.0.0.0/integration/integration-auth.html)).

Service developers declare the list of permissions required in the integration's `webapi.xml`. This is discussed in more detail in [What is the Web API Framework?]({{ site.baseurl }}/guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html)).

**Note**: The Web API framework only verifies that the user (Magento administrator, anonymous user, API user, and so on) is authorized to invoke the API. Any business logic specific authorizations must be implemented at the service level.

The following table shows what we expect <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Authz/Service/AuthorizationV1Interface.php" target="_blank">AuthorizationV1Interface</a> methods to perform. _(`AuthorizationV1Interface` is not implemented yet.)_ 

<table>
	<tbody>
		<tr class="table-headings">
			<th>Method</th>
			<th>Expected function</th>
		</tr>
	<tr class="even">
		<td>grantPermissions()</td>
		<td>Stores custom permissions.</td>
	</tr>
	<tr class="odd">
		<td>grantAllPermissions()</td>
		<td>Stores permissions to all available resources.</td>
	</tr>
	<tr class="even">
		<td>getAllowedResources()</td>
		<td>Gets the names of permissions for rendering in the Magento Admin.</td>
	</tr>
	<tr class="odd">
		<td>removePermissions()</td>
		<td>Removes all ACL-related entities on integration removal.</td>
	</tr>
</tbody>
</table>


## Authorization Checking in REST Calls

REST resources are speicifed in `webapi.xml` by `route` objects. A snippet follows:

<script src="https://gist.github.com/xcomSteveJohnson/13436bc6c977f82e2a8f.js"></script>

When a client requests access to the `/V1/testmodule1` route, the resources it requires must be checked: `Magento_TestModule1::resource1` and `Magento_TestModule1::resource2`.

The authorization checks are performed by the `dispatch` method in <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/Webapi/Controller/Rest.php" target="_blank">\Magento\Webapi\Controller\Rest</a>.

For the call to succeed, _all_ resources must be authorized; otherwise, an authorization exception is thrown.

#### Related Topics:

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/svcs-framework/build-svc.html">Basics of Building a Service</a>

*	<a href="{{ site.baseurl }}/guides/m2devgde/v1.0.0.0/webapi/what-is-webapi.html">What Is the Web API Framework?</a>