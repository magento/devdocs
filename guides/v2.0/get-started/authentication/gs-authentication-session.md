---
layout: default
group: get-started
subgroup: 40_Authentication
title: Session-based authentication
menu_title: Session-based authentication
menu_order: 4
version: 2.0
github_link: get-started/authentication/gs-authentication-session.md
redirect_from: /guides/v1.0/get-started/authentication/gs-authentication-session.html
---

<p>As a customer, you log in to the Magento storefront with your customer credentials. As an admin, you log in to the Magento Admin with your admin credentials.</p>

<p>The Magento web API framework uses your logged-in session information to verify your identity and authorize access to the requested resource.</p>

<p>Customers can access resources that are configured with <code>anonymous</code> or <code>self</code> permission in the <code>webapi.xml</code> configuration file.</p>
<p>Admins can access resources that are assigned to their Magento Admin profile.</p>

<div class="bs-callout bs-callout-info" id="info">
<p>The Magento web API framework enables guest users to access resources that are configured with <code>anonymous</code> permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user.</p></div>

<p>For example, if a customer is logged in to the Magento storefront and the JavaScript widget invokes the <code>self</code> API, details for the logged-in customer are fetched:</p>

<pre>GET /rest/V1/customers/me</pre>

<p>Similarly, if an admin is logged in to the Magento Admin
and the JavaScript widget <code>Magento_Customer::group</code> API, details for the logged-in admin are fetched.
The web API framework establishes the identity of the admin user based on logged-in session information and authorizes access to the <code>Magento_Customer::group</code> resource.</p>

<h2>Next step</h2>
<ul>
   <li><a href="{{page.baseurl}}/get-started/gs-web-api-request.html">Step 2. Construct a request</a></li>

</ul>
<h2>Related topic</h2>
<ul>

   <li><a href="{{page.baseurl}}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a></li>
</ul>
