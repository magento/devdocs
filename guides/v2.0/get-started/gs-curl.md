---
layout: default
group: get-started
subgroup: 20_REST
title: Use cURL to run the request
menu_title: Use cURL to run the request
menu_order: 2

version: 2.0
github_link: get-started/gs-curl.md
redirect_from: /guides/v1.0/get-started/gs-curl.html
---

<p>cURL is a command-line tool that lets you transmit and receive HTTP requests and
   responses from the command line or a shell script. It is available for Linux distributions,
   Mac OS X, and Windows.
</p>

<p>To use cURL to run your REST web API call, use the <a href="{{page.baseurl}}get-started/authentication/gs-authentication-token.html#curl-command-syntax">cURL command syntax</a> to construct the cURL command.</p>
<p>To create the endpoint in the call, append the REST URI that you constructed in <a href="{{page.baseurl}}get-started/gs-web-api-request.html">Step 3. Construct a request</a> to this URL:</p>
<pre>https://&lt;MAGENTO_HOST_OR_IP&gt;/&lt;MAGENTO_BASE_INSTALL_DIR&gt;/rest/</pre>
<p>To pass the customer data object in the POST call payload, specify a JSON or XML request body on the call.</p>
<p>For a complete list of cURL command options, see <a href="http://curl.haxx.se/docs/manpage.html">curl.1 the man page</a>.</p>
<p>The cURL examples in this guide
   use the following command-line options:
</p>
<table style="width:75%">
   <tr bgcolor="lightgray">
      <th>Option</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>
         <p>
            <code>-d</code>
         </p>
      </td>
      <td>
         <p>Sends the specified data in a POST request to the HTTP server. Use this option to send a JSON or XML request body to the server.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-H</code>
         </p>
      </td>
      <td>
         <p>Specifies an extra HTTP header in the request. Precede each header with the
            <code>-H</code>option. You can specify any number of extra
            headers.
         </p>
         <p>For a list of common headers used in Magento web API requests, see <a href="{{page.baseurl}}get-started/gs-web-api-request.html#http-headers">HTTP headers</a>.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-i</code>
         </p>
      </td>
      <td>
         <p>Includes the HTTP header in the output.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-s</code>
         </p>
      </td>
      <td>
         <p>Specifies silent or quiet mode, which makes cURL mute. Progress and error messages
            are suppressed.
         </p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-T</code>
         </p>
      </td>
      <td>
         <p>Transfers the specified local file to the remote URL.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-X</code>
         </p>
      </td>
      <td>
         <p>Specifies the request method to use when communicating with the HTTP server. The
            specified request method is used instead of the default GET method.
         </p>
      </td>
   </tr>
</table>

<h2>Next step</h2>
<ul>
   <li><a href="{{page.baseurl}}/get-started/gs-web-api-response.html">Status codes and responses</a></li>
</ul>
