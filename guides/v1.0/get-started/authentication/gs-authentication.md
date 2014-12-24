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

<h2 id="overview-authenticate">Authentication overview</h2>
<p>Before you can make web API calls, you must authenticate your identity. Authentication ensures that you have permission to access a requested resource.</p>
<p>You use a client, such as a mobile application or an external batch job, to access Magento services through web APIs. Each type of client has a preferred authentication method.</p>
<p>Developers define web API resources and their permissions in a <code>webapi.xml</code> configuration file. The resources that you can access depend on your user type and the configured permission of the resource:</p>
<ul><li>Customers can access resources with <code>anonymous</code> or <code>self</code> permission.</li>
<li><p>Admins can access resources for which they are authorized. For example, if the admin is authorized for the <code>Magento_Customer::group</code> resource, he or she can make a <code>GET&nbsp;/V1/customerGroups/:id</code> call.</p>
<p>The <code>acl.xml</code> file for the module defines the access control list (ACL) for resources.</p><pre>
&lt;route url="/V1/customerGroups/:id" method="GET">
    &lt;service class="Magento\Customer\Api\GroupRepositoryInterface" method="get"/>
    &lt;resources>
        &lt;resource ref="Magento_Customer::group"/>
    &lt;/resources>
&lt;/route></pre>
</li>
<li>A guest user, who is any user that the Magento web API framework cannot authenticate through existing authentication mechanisms, can access resources with <code>anonymous</code> permission.</li>
</ul>
<p>For details, see <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">Configure services as web APIs</a>.</p>
<p>To authenticate, use the authentication method for your preferred client:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Client</th>
      <th>Authentication method and process</th>
   </tr>
   <tr>
      <td>
         <p>Mobile application</p>
      </td>
       <td>
         <p>Registered users use <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-token.html">token-based authentication</a> to make web API calls through a mobile application. The token acts like an electronic key that provides access the API.</p>
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
        <!--  <p>The token never expires but it can be revoked.</p> -->
      </td>
   </tr>

   <tr>
      <td>
         <p>Third-party application</p>
      </td>
      <td>
         <p>Third-party applications use <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a> to access the web APIs.</p>
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
    <tr>
      <td>
         <p>JavaScript widget on the Magento frontend or backend</p>
      </td>
       <td>
         <p>Registered users use <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-session.html">session-based authentication</a> to log in to the Magento frontend or backend.</p>
         <p>A session is identified by a cookie and time out after a period of inactivity. Additionally, you can have a session as a guest user without logging in.</p>
         <ol>
            <li>
              <p>As a customer, you log in to the Magento frontend with your customer credentials. As an admin, you log in to the Magento backend with your admin credentials.</p>
            </li>
            <li>
               <p>The Magento web API framework identifies you and controls access to the requested resource.
               </p>
            </li>
         </ol>
      </td>
   </tr>
</table>
<h2 id="next-step-auth">Next step</h2>
<p>Proceed to the authentication method for your preferred client:</p>
<ul>
<li>Mobile application. <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-token.html">Token-based authentication</a>.</li>
<li>Third-party application. <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a>.</li>
<li>JavaScript widget on the Magento frontend or backend. <a href="{{ site.gdeurl }}get-started/authentication/gs-authentication-session.html">Session-based authentication</a>.</li>
</ul>


