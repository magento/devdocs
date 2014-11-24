---
layout: default
group: get-started
subgroup: D_Web API responses
title: Web API responses
menu_title: Web API responses
menu_order: 1
menu_node: parent
github_link: get-started/gs-web-api-responses.md
---

<p>A web API call is made up of a <a href={{ site.gdeurl }}get-started/gs-web-api-requests.html">request</a> and a response.</p>
<a name="responses"></a>
<h2>Web API responses</h2>
<h3>Error handling</h3>
<h4>Service errors</h4>
<p>Service operations always throw exceptions with a service-specific error code and an optional error message. Exceptions enable in-process PHP calls to handle the exception and behave accordingly.</p>
<p>Exceptions contain fields for error codes, error messages, service name, and parameters to generate a different localized error message. You can add base exceptions as needed.</p>
<p>The base exceptions are:</p>
<ul>
   <li><code>Magento_Service_Exception</code>. The client is notified of all business logic violations when this exception or one of its derivative is thrown.</li>
   <li><code>Magento_Service_AuthorizationException</code>. All authorization check failures should be notified to the caller by throwing this exception or one of its derivative.</li>
   <li><code>Magento_Service_ResourceNotFoundException</code>. If the requested resource does not exist, service should throw this exception or one of its derivative.</li>
</ul>
<p>Services do not wrap system exceptions such as network exceptions or database connection exceptions into a service exception. Those exceptions are thrown to the client as-is so the root cause is identified.</p>
<p>Error codes are service-specific. The service name field in the exception helps the caller identify the service. The combination of service name and error code provides a unique error. The service name is a namespace for all errors, including the ones introduced by extensions.</p>
<h4>Web API error-related behavior</h4>
<ul>
   <li>Web API catches all the exceptions thrown by a service and returns an appropriate error response.</li>
   <li>Web API maintains a mapping of base service exceptions to HTTP return codes. This mapping helps determine the HTTP return code.</li>
   <li>Apart from HTTP codes, service error codes and error messages are returned to the caller.</li>
   <li>Every Response object contains an error structure that sends an error response. The error structure contains ErrorCode and ErrorMessage.</li>
   <li>The importance of the service-specific error codes and backward compatibility may vary for each service. The service-specific error codes are helpful for debugging.</li>
   <li>In case of errors, response contains an <code>Error</code> element with error code returned by the service and with the error message in the payload.</li>
   <li>In case of authentication or authorization errors, response contains an <code>Error</code> element with an error code denoting authentication or authorization error codes and error messages in the payload.</li>
</ul>
<h3>HTTP status codes</h3>
<p>The web API returns relevant HTTP return codes, such as 200, 400, and 500, that reflect the result of a request.</p>
<table style="width:100%">
   <colgroup>
      <col width="10%">
      <col width="20%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>HTTP code</th>
         <th>Description</th>
         <th>Notes</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>200</td>
         <td>Success</td>
         <td>Framework returns HTTP 200 to the caller upon success.</td>
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
<h4>Error format</h4>
<p>Errors returned by the Web API contain an error code, an error message, and parameters that enable you to generate an error message inside the client.</p>
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
