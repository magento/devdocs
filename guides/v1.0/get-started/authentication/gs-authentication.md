---
layout: default
group: get-started
subgroup: B_Authentication
title: Step 1. Authenticate
menu_title: Step 1. Authenticate
menu_order: 1
menu_node: parent
github_link: get-started/authentication/gs-authentication.md
---

<h2 id="overview-authenticate">Overview</h2>
<p>The Magento web API framework enables you to make a web API call through various <a href="#webapi-clients">web API clients</a>. You authenticate access to the web APIs by using the
<a href="#auth-method">authentication method for the client</a>.</p>
<p>Depending on whether you are a customer, admin, or guest user, you can access certain <a href="#resources">resources</a>.
Customers can access resources that are configured with <code>anonymous</code> or <code>self</code> permission in the <code>webapi.xml</code> configuration file.
Admins can access resources for which they are authorized.</p>
<div class="bs-callout bs-callout-info" id="info">
<p>The Magento web API framework enables guest users to access resources that are configured with <code>anonymous</code> permission. Any user that the framework cannot authenticate through existing authentication mechanisms is considered a guest user.</p></div>
<p>For more information, see <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html#configuration-options">webapi.xml configuration options</a>.</p>

<p>Learn <a href="#authenticate">how to authenticate</a>.</p>
<h2 id="webapi-clients">Web API clients</h2>
<p>You can make web API calls through one of these clients:</p>
<ul>
<li>A mobile application</li>
<li>A Magento frontend or backend JavaScript widget</li>
<li>A third-party application</li>
</ul>
<p>To make an API call, you must first authenticate by using the authentication method for your client.</p>

<h2 id="auth-methods">Authentication methods by client</h2>
<p>The following table lists the clients through which you can access the web APIs as either a customer or admin user.</p>
<p>Use the authentication method for the client through which you access the APIs:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Client</th>
      <th>Authentication method</th>
      <th>Authentication process</th>
   </tr>
   <tr>
      <td>
         <p>Mobile application</p>
      </td>
       <td>
         <p><a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-token.html">Token-based authentication</a></p>
      </td>
      <td>
         <p>Registered users use token-based authentication to make web API calls through a mobile application. The token acts like an electronic key that provides access the API.</p>
         <ol>
            <li>
               <p>As a registered Magento user, you request a token from the Magento token service at the endpoint that is defined for your user type.</p>
            </li>
            <li>
               <p>The token service returns a unique authentication token in exchange for a user name and password for a Magento account.</p>
            </li>
            <li>
               <p>
                  To prove your identity, specify this token in the <code>Authorization</code> request header <!-- with the <code>Bearer</code> HTTP authorization scheme  -->on web API calls.
               </p>
            </li>
         </ol>
         <p>The token never expires but it can be revoked.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>JavaScript widget on the Magento frontend or backend </p>
      </td>
       <td>
         <p><a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-session.html">Session-based authentication</a></p>
      </td>
      <td>
         <p>Registered users use session-based authentication to log in to the Magento frontend or backend.</p>
         <ol>
            <li>
              <p>As a customer, you log in to the Magento frontend with your customer credentials. As an admin, you log in to the Magento backend with your admin credentials.</p>
            </li>
            <li>
               <p>
                  The Magento web API framework identifies you and controls access to the requested resource.
               </p>
            </li>
         </ol>
      </td>
   </tr>
   <tr>
      <td>
         <p>Third-party application</p>
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a></p>
      </td>
      <td>
         <p>Third-party applications use OAuth-based authentication to access the web APIs.</p>
         <ol>
            <li>
               <p>The third-party add-on registers with Magento.</p>
            </li>
            <li>
               <p>Merchants authorize extensions and applications to access or update store data.</p>
            </li>
         </ol>
      </td>
   </tr>
</table>

<h2 id="authenticate">How to authenticate</h2>
<p>Depending on how you plan to access the web APIs, read the appropriate authentication section:</p>
<ul>
   <li>
      <p>Mobile application:
         <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-token.html">Token-based authentication</a>
      </p>
   </li>
   <li>
      <p>Magento frontend or backend:
         <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-session.html">Session-based authentication</a>
      </p>
   </li>
   <li>
      <p>Third-party application:
         <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a>
      </p>
   </li>
</ul>
