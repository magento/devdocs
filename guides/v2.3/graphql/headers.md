---
layout: default
group: graphql
version: 2.3
title: GraphQL headers
github_link: graphql/headers.md
---

Magento accepts the following GraphQL headers:

<table>
<tr>
<th>Header name</th>
<th>Value</th>
</tr>
<tr>
<td><code>Authorization</code></td>
<td><p><code>Bearer <i>authorization-token</i></code></p>
<p>An integration, admin, or customer token. See <a href="{{page.baseurl}}get-started/authentication/gs-authentication-token.html">Token-based authentication</a> for more information.<p>
</td>
</tr>
<tr>
<td><code>Store</code></td>
<td><p>Specifies the store code on which to perform the request. The value can be one of the following:</p>
<ul>
<li><code>default</code></li>
<li>A store code, which is defined when a store view is created.</li>
<li><code>all</code>. This value only applies to the CMS and Product modules. If this value is specified, the API call affects all the merchant's stores.</li>
</ul>
</td>
</tr>
</table>
