---
group: graphql
version: 2.3
title: GraphQL request headers
github_link: graphql/send-request.md
---

Magento accepts the following headers in a GraphQL request:

<table>
<tr>
<th>Header name</th>
<th>Description/Value</th>
</tr>
<tr>
<td><code>Authorization</code></td>
<td><p><code>Bearer <i>authorization-token</i></code></p>
<p>An integration, admin, or customer token. See <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication-token.html">Token-based authentication</a> for more information.</p>
</td>
</tr>
<tr>
<td><code>Store</code></td>
<td><p>The store code on which to perform the request. The value can be one of the following:</p>
<ul>
<li><code>default</code></li>
<li>A store code, which is defined when a store view is created.</li>
<!--
<li><p><code>all</code>. This value only applies to the CMS and Product modules. If this value is specified, the API call affects all the merchant's stores.</p></li>
-->
</ul>
</td>
</tr>
</table>
