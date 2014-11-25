---
layout: default
group: get-started
subgroup: A_intro
title: Get Started with Magento Web APIs
menu_title: Get Started
menu_order: 1
menu_node: parent
github_link: get-started/bk-get-started-api.md
---

<!-- <p class="q">Reviewer: SOAP is not supported for Dev Beta, so I've omitted it for now.</p> -->
<h2>Get started</h2>
<p>The Magento web API framework enables Magento and third-party developers to <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">configure services as web APIs</a>. To access these web APIs, you make REST web API calls.</p>
<p>This guide introduces web API, REST, and cURL command concepts and shows you how to construct REST web API calls. You can modify these examples to construct other calls.</p>
<p>You execute REST web API calls through cURL commands or a REST client.</p>

<h2>Step 1. Authenticate</h2>
<p>To make a Magento web API call, you must first request an <a href="{{ site.gdeurl }}get-started/gs-authentication.html">authentication</a> token from the Magento token service.</p>
<h2>Step 2. Construct a web API request</h2>
<h2>Web API requests</h2>
<p>Then, you combine these components in a request:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Description</th>
      <th>See</th>
   </tr>
   <tr>
      <td>
         <p>Authentication token</p>
      </td>
      <td>
         <p>A token that proves you as the owner of a Magento
            account.
         </p>
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-authentication.html">Authentication</a>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Endpoint</p>
      </td>
      <td>
         <p>A combination of the server that fulfills the request and the resource against which the request is being made. For example:</p>
         <pre>http://magento.ll/index.php/rest/V1/customerGroups/:id</pre>
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#endpoints">Endpoints</a></p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Call payload</p>
      </td>
      <td>
         <p>A set of input fields that you supply with the request.
            API operations have both
            <em>required</em> and
            <em>optional</em> inputs. You specify some inputs in the URI, and some in a request body. You can specify a JSON- or XML-formatted request body.
         </p>
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#payload">Call payload</a></p>
      </td>
   </tr>
   <tr>
      <td>
         <p>HTTP headers</p>
      </td>
      <td>
         <p>Headers specify authentication credentials, the call request and response formats,
            and other information.
         </p>
      </td>
      <td>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#http-headers">HTTP headers</a></p>
      </td>
   </tr>
   </tbody>
</table>
<h2>Step 3. Run a web API request</h2>
<h2>Step 4. Look at the web API response</h2>
<p>A Magento web API call returns these components:</p>
<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>Component</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <p>Response body</p>
      </td>
      <td>
         <p>A token that proves you as the owner of a Magento
            account.
         </p>
         <p><a href="{{ site.gdeurl }}get-started/gs-authentication.html">Authentication</a>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Exception</p>
      </td>
      <td>
         <p>A token that proves you as the owner of a Magento
            account.
         </p>
         <p><a href="{{ site.gdeurl }}get-started/gs-authentication.html">Authentication</a>
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p>HTTP status code</p>
      </td>
      <td>
         <p>A combination of the server that fulfills the request and the resource against which the request is being made. For example:</p>
         <pre>http://magento.ll/index.php/rest/V1/customerGroups/:id</pre>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#service-endpoint">Service endpoint</a></p>
      </td>
   </tr>
   <tr>
      <td>
         <p>Error message</p>
      </td>
      <td>
         <p>A set of input fields that you supply with the request.
            API operations have both
            <em>required</em> and
            <em>optional</em> inputs.
         </p>
         <p><a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html#payload">Call payload</a></p>
      </td>
   </tr>
</table>
<p>Read the following sections to get up and running with the Magento web APIs:</p>
<ul>
   <li>
      <p>
         <a href="{{ site.gdeurl }}get-started/gs-authentication.html">Authentication</a>
      </p>
   </li>
   <li>
      <p>
         <a href="{{ site.gdeurl }}get-started/gs-web-api-requests.html">Web API requests</a>
      </p>
   </li>
   <li>
      <p><a href="{{ site.gdeurl }}get-started/gs-curl.html">How cURL commands work</a></p>
   </li>
   <li>
      <p>
         <a href="{{ site.gdeurl }}get-started/gs-rest-overview.html">Putting it all together</a>
      </p>
   </li>
   <li>
      <p>
         <a href="{{ site.gdeurl }}get-started/gs-rest-ff-rest-client.html">Firefox REST client</a>
      </p>
   </li>
   <!--
      <li>
         <p>
            <a href="{{ site.gdeurl }}get-started/soap/soap-web-api-calls.html">SOAP web API calls</a>
         </p>
      </li>
      -->
</ul>






