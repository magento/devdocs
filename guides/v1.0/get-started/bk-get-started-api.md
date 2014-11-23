---
layout: default
group: get-started
title: Get Started with Magento Web APIs
menu_title: Introduction
menu_order: 1
github_link: get-started/bk-get-started-api.md
---

<p class="q">Reviewer: SOAP is not supported for Dev Beta, so I've omitted it for now.</p>
<p>The Magento web API framework enables Magento and third-party developers to <a href="{{ site.gdeurl }}extension-dev-guide/service-contracts/service-to-web-service.html">configure services as web APIs</a> To access these web APIs, you make REST calls.</p>
<p>This guide introduces web API, REST, and cURL command concepts. It also provides examples that show you how to construct REST web API calls and execute them through either a REST client or cURL commands. You can modify these examples to construct other calls.</p>
<h2>Web API requests</h2>
<p>To make a Magento web API call, you combine these components in the request:</p>
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
<h2>Web API responses</h2>
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
         <a href="{{ site.gdeurl }}get-started/gs-web-api-concepts.html">Web API concepts</a>
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






