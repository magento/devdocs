---
group: get-started
subgroup: 20_REST
title: Use REST APIs
menu_order: 1
menu_node: parent
version: 2.0
redirect_from: /guides/v1.0/get-started/rest_front.html
---

The Magento REST {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} defines a set of functions that a developer can use to perform requests and receive responses. These interactions are performed using the HTTP protocol.

The caller issues an HTTP request, which contains the following elements:

* An HTTP header that provides authentication and other instructions
* A verb, which can be one of GET, POST, PUT, or DELETE.
* An endpoint, which is a Uniform Resource Indicator (URI) that identifies the server, the web service, and the resource being acted on.
* The call payload, which is set of input parameters and attributes that you supply with the request.

Magento returns a response payload as well as an HTTP status code.

This guide introduces web API, REST, and cURL command concepts. It shows you how to authenticate and construct and run REST {% glossarytooltip 377dc0a3-b8a7-4dfa-808e-2de37e4c0029 %}web API{% endglossarytooltip %} calls. You run REST web API calls through <a href="{{ page.baseurl }}/get-started/gs-curl.html">cURL commands</a> or a REST client.


Read the following sections to get up and running with the Magento web APIs:
<ul>
   <li>
      <p>
         <a href="{{ page.baseurl }}/get-started/authentication/gs-authentication.html"> Authentication</a>
      </p>
   </li>
   <li>
      <p>
         <a href="{{ page.baseurl }}/get-started/gs-web-api-request.html">Construct a request</a>
      </p>
   </li>
   <li>
      <p>
         <a href="{{ page.baseurl }}/get-started/gs-curl.html">Use cURL to run the request</a>
      </p>
   </li>
   <li>
      <p>
         <a href="{{ page.baseurl }}/get-started/gs-web-api-response.html">Review the response</a>
      </p>
   </li>

</ul>

   <!--
      <li>
         <p>
            <a href="{{ page.baseurl }}/get-started/soap/soap-web-api-calls.html">SOAP web API calls</a>
         </p>
      </li>
      -->
