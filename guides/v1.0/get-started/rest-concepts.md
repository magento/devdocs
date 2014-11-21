---
layout: default
title: REST concepts
---

<div class="container bs-docs-container">
  <div class="row">
    <div class="jumbotron">
      <h1 class="api1" id="rest-web-api-calls">{{ page.title }}</h1>
    </div>
    <div class="col-xs-3">
      <p>
        &nbsp;
      </p>
    </div>
    <div class="col-xs-9" role="main">
      <div class="bs-docs-section">
        <p><a href="{{ site.githuburl }}get-started-with-apis/bk-get-started-api.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;
          <img src="{{ site.baseurl }}common/images/newWindow.gif" />
        </p>
<h2 id="formats">Request and response formats</h2>

<ul>
<li>JSON</li>
<li>XML</li>
</ul>

<p>The decision to use JSON- or XML-formatted data depends on your data integration requirements. For example, if you are writing a Magento 2 service consumer, the consumer drives the decision to use either JSON or XML.</p>

<p>The JSON response format is the default.</p>

<p>To request an XML response:</p>
<ul>
<li>Set the HTTP </code>Accept</code> header to </code>text/xml</code>.</li>
<li>Set the HTTP </code>Content-Type</code> header to </code>text/xml</code>.</li>
</ul>

<a name="http-headers"></a>
<h2>HTTP headers</h2>
        <p>Magento has many services and some require that you specify a set of HTTP headers
          in your calls.</p>
        <table style="width:100%">
          <tr bgcolor="lightgray">
            <th>HTTP header</th>
            <th>Description</th>
            </tr>
            <tr>
              <td>
                <code>Authorization: Bearer</code>
              </td>
              <td>The authentication token.</td>
            </tr>
            <tr>
              <td>
                <code>Accept</code>
              </td>
              <td>The API password. This is one of the Authentication token assigned to your account.</td>
            </tr>
            <tr>
              <td><p>
                <code>Content-Type</code></p>
              </td>
              <td><p>Required for operations with a request body.</p>

<p>Specifies the format of the request body. The following example shows the syntax for the header, where format is either <code>json</code> or <code>xml</code>:</p>

<pre>Content-Type: application/format</pre></td>
            </tr>
        </table>
        <p>Be aware that different Magento APIs use different sets of HTTP headers (and some
          don't use any at all). Refer to the Developer documentation for the definitive list
          of HTTP headers for the Magento operation(s) you plan to use.
        </p>

<h2>Error handling</h2>

<h3>Service errors</h3>

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
<h3>Web API error-related behavior</h3>
<ul>
<li>Web API catches all the exceptions thrown by a service and returns an appropriate error response.</li>
<li>Web API maintains a mapping of base service exceptions to HTTP return codes. This mapping helps determine the HTTP return code.</li>
<li>Apart from HTTP codes, service error codes and error messages are returned to the caller.</li>
<li>Every Response object contains an error structure that sends an error response. The error structure contains ErrorCode and ErrorMessage.</li>
<li>The importance of the service-specific error codes and backward compatibility may vary for each service. The service-specific error codes are helpful for debugging.</li>
<li>In case of errors, response contains an <code>Error</code> element with error code returned by the service and with the error message in the payload.</li>
<li>In case of authentication or authorization errors, response contains an <code>Error</code> element with an error code denoting authentication or authorization error codes and error messages in the payload.</li>
</ul>
<h2>HTTP status codes</h2>

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

<h3>Error format</h3>

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
   </div>
    </div>
  </div>
</div>
