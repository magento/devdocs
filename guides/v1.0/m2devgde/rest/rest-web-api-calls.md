---
layout: howtom2devgde_chapters
title: REST web API calls
---

<h1 id="m2devgde-data-type-schema">{{ page.title }}</h1>
<p><a href="{{ site.githuburl }}m2devgde/view/view-lib.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>
<h2 id="formats">Request and response formats</h2>

* JSON
* XML

The decision to use JSON- or XML-formatted data depends on your data integration requirements. For example, if you are writing a Magento 2 service consumer, the consumer drives the decision to use either JSON or XML.

The JSON response format is the default.

To request an XML response:

* Set the HTTP `Accept` header to `text/xml`.
* Set the HTTP `Content-Type` header to `text/xml`.

## Error handling

### Service errors

Service operations always throw exceptions with a service-specific error code and an optional error message. Exceptions enable in-process PHP calls to handle the exception and behave accordingly.

Exceptions contain fields for error codes, error messages, service name, and parameters to generate a different localized error message. You can add base exceptions as needed.

The base exceptions are:

* `Magento_Service_Exception`. The client is notified of all business logic violations when this exception or one of its derivative is thrown.
* `Magento_Service_AuthorizationException`. All authorization check failures should be notified to the caller by throwing this exception or one of its derivative.
* `Magento_Service_ResourceNotFoundException`. If the requested resource does not exist, service should throw this exception or one of its derivative.

Services do not wrap system exceptions such as network exceptions or database connection exceptions into a service exception. Those exceptions are thrown to the client as-is so the root cause is identified.

Error codes are service-specific. The service name field in the exception helps the caller identify the service. The combination of service name and error code provides a unique error. The service name is a namespace for all errors, including the ones introduced by extensions.
### Web API error-related behavior

* Web API catches all the exceptions thrown by a service and returns an appropriate error response.
* Web API maintains a mapping of base service exceptions to HTTP return codes. This mapping helps determine the HTTP return code.
* Apart from HTTP codes, service error codes and error messages are returned to the caller.
* Every Response object contains an error structure that sends an error response. The error structure contains ErrorCode and ErrorMessage.
* The importance of the service-specific error codes and backward compatibility may vary for each service. The service-specific error codes are helpful for debugging.
* In case of errors, response contains an `Error` element with error code returned by the service and with the error message in the payload.
* In case of authentication or authorization errors, response contains an `Error` element with an error code denoting authentication or authorization error codes and error messages in the payload.

## HTTP status codes

The web API returns relevant HTTP return codes, such as 200, 400, and 500, that reflect the result of a request.

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
         <td>If service implementation throws either `Magento_Service_Exception` or its derivative, framework returns a HTTP 400 with a error response including the service-specific error code and message.</td>
      </tr>
      <tr>
         <td>401</td>
         <td>Unauthorized</td>
         <td>If an error occurs during credential validation or if service throws `Magento_Service_AuthorizationException`, framework returns HTTP 401.</td>
      </tr>
      <tr>
         <td>404</td>
         <td>Incorrect URI/Resource not found</td>
         <td>If the request endpoint is not correct, framework returns HTTP 404. If service throws `Magento_Service_ResourceNotFoundException`, framework returns HTTP 404.</td>
      </tr>
      <tr>
         <td>500</td>
         <td>System Errors</td>
         <td>If service implementation throws any other exception like network errors, database communication, framework returns HTTP 500.</td>
      </tr>
   </tbody>
</table>

### Error format

Errors returned by the Web API contain an error code, an error message, and parameters that enable you to generate an error message inside the client.

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
