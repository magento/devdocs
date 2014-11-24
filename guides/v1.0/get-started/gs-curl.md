---
layout: default
group: get-started
subgroup: C_How cURL commands work
title: How cURL commands work
menu_title: How cURL commands work
menu_order: 1
menu_node: parent
github_link: get-started/gs-curl.md
---

<p>cURL is a command-line tool that lets you transmit and receive HTTP requests and
   responses from the command line or a shell script. It is available for Linux distributions,
   Mac OS X, and Windows.
</p>
<p>This guide shows you how to use cURL commands to make Magento web API calls. The cURL examples
   use the following command-line options:
</p>
<table style="width:100%">
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
         <p>Sends the specified data in a POST request to the HTTP server.</p>
         <p>Use this option to send a JSON or XML request body to the server.</p>
      </td>
   </tr>
   <tr>
      <td>
         <p>
            <code>-H</code>
         </p>
      </td>
      <td>
         <p>Specifies an extra HTTP header in the request. You can specify any number of extra
            headers. Precede each header with the
            <code>-H</code>option.
         </p>
         <p>Common headers in Magento web API requests are:</p>
         <ul>
            <li>
               <p>
                  <code>Content-Type</code>. Required for operations with a request body.
               </p>
               <p>Specifies the format of the request body. Following is the syntax for the header
                  where
                  <code>format</code>is either
                  <code>json</code>or
                  <code>xml</code>.
               </p>
               <pre>Content-Type: application/format</pre>
            </li>
            <li>
               <p>
                  <code>Authorization</code>. Required. Specifies the authentication token.
               </p>
            </li>
            <li>
               <p>
                  <code>Accept</code>. Optional.
               </p>
               <p>Specifies the format of the response body. Following is the syntax for the header
                  where
                  <code>format</code>is either
                  <code>json</code>or
                  <code>xml</code>. The default is
                  <code>json</code>.
               </p>
               <pre>Accept: application/format</pre>
            </li>
         </ul>
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
         <p>Specifies silent or quiet mode, which makes cURL mute. No progress or error messages
            are shown.
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
<p>For complete information about cURL, see
   <a href="http://curl.haxx.se/" target="_top">http://curl.haxx.se/</a>.
</p>






