---
layout: default
group: get-started
subgroup: C_REST
title: Review the response
menu_title: Review the response
menu_order: 3
version: 2.1
github_link: get-started/gs-web-api-response.md
---

<p>Each web API call returns an <a href="#http-status-codes">HTTP status code</a> that reflects the result of a request.</p>
<p><code>POST</code>, <code>PUT</code>, and <code>GET</code> web API calls return a <a href="#response-payload">response payload</a>.</p>
<!-- <p>When an error occurs, the response body contains an <code>Error</code> element that contains the error code returned by the service and an error message. For authentication or authorization error occurs, the error code denotes the authentication or authorization error code.</p> -->
<h2 id="http-status-codes">HTTP status codes</h2>
<p>Each web API call returns an HTTP status code that reflects the result of a request:</p>
<table style="width:100%">
   <colgroup>
      <col width="10%">
      <col width="20%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>HTTP code</th>
         <th>Meaning</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td>Success</td>
         <td>The framework returns HTTP 200 to the caller upon success.</td>
      </tr>
      <tr>
         <td>400</td>
         <td>Bad Request</td>
         <td>If service implementation throws either <code>Magento_Service_Exception</code> or its derivative, framework returns a HTTP 400 with a error response including the service-specific error code and message.</td>
      </tr>
      <tr>
         <td>401</td>
         <td>Unauthorized</td>
         <td>If an error occurs during credential validation or if service throws <code>Magento_Service_AuthorizationException</code>, framework returns HTTP 401.</td>
      </tr>
      <tr>
         <td>404</td>
         <td>Incorrect URI/Resource not found</td>
         <td>If the request endpoint is not correct, framework returns HTTP 404. If service throws <code>Magento_Service_ResourceNotFoundException</code>, framework returns HTTP 404.</td>
      </tr>
      <tr>
         <td>500</td>
         <td>System Errors</td>
         <td>If service implementation throws any other exception like network errors, database communication, framework returns HTTP 500.</td>
      </tr>
   </tbody>
</table>
<h2 id="response-payload">Response payload</h2>
<p><code>POST</code>, <code>PUT</code>, and <code>GET</code> web API calls return a response payload. This payload is a JSON- or XML-formatted response body. The <code>Accept: application/&lt;FORMAT&gt;</code> header in the request determines the format of the response body, where <code>&lt;FORMAT&gt;</code> is either <code>json</code> or <code>xml</code>.</p>
<p>The response payload depends on the call.</p>
<p>For example, a <code>GET /V1/customers/:customerId</code> call returns the following payload:</p>

{% highlight json %}
{
    "customers": {
        "customer": {
            "email": "user@example.com",
            "firstname": "John",
            "lastname": "Doe"
        },
        "addresses": [
            {
                "defaultShipping": true,
                "defaultBilling": true,
                "firstname": "John",
                "lastname": "Doe",
                "region": {
                    "regionCode": "CA",
                    "region": "California",
                    "regionId": 12
                },
                "postcode": "90001",
                "street": ["Zoe Ave"],
                "city": "Los Angeles",
                "telephone": "555-000-00-00",
                "countryId": "US"
            }
        ]
    }
}
{% endhighlight %}
<p>This JSON-formatted response body includes a <code>customer</code> object with the customer email, first name, and last name, and customer address information. The information in this response body shows account information for the specified customer.</p>

<!--
<h2 id="error-format">Error format</h2>
<p>When an error occurs, the web API returns an <code>Error</code> element in the response body that contains an error code, error message, and parameters that enable you to generate an error message inside the client.</p>
<table style="width:100%">
   <colgroup>
      <col width="30%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Part</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>errorCode</td>
         <td>The error code representing the error.</td>
      </tr>
      <tr>
         <td>errorMessage</td>
         <td>The message explaining the error.</td>
      </tr>
      <tr>
         <td>parameters</td>
         <td>Optional. An array of attributes used to generate a different and/or localized error message for the client.</td>
      </tr>
   </tbody>
</table>
 -->
