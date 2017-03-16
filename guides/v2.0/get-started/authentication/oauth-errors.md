---
layout: default
group: get-started
subgroup: 40_Authentication
title: OAuth error codes
menu_title: OAuth error codes
menu_order: 3
version: 2.0
github_link: get-started/authentication/oauth-errors.md
---

When the third-party application makes an invalid request to Magento, the following OAuth-related errors can occur:

<table style="width:100%">
   <tr bgcolor="lightgray">
      <th>HTTP code</th>
      <th>Error code</th>
      <th>Text representation</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>400</td>
      <td>1</td>
      <td>version_rejected</td>
      <td>The oauth_version parameter does not correspond to the "1.0" value.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>2</td>
      <td>parameter_absent</td>
      <td>A required parameter is missing in the request. The name of the missing parameter is specified additionally in the response.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>3</td>
      <td>parameter_rejected</td>
      <td>The type of the parameter or its value do not meet the protocol requirements (for example,  array is passed instead of the string).</td>
   </tr>
   <tr>
      <td>400</td>
      <td>4</td>
      <td>timestamp_refused</td>
      <td>The timestamp value in the oauth_timestamp parameter is incorrect.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>5</td>
      <td>nonce_used</td>
      <td>The nonce-timestamp combination has already been used.</td>
   </tr>
   <tr>
      <td>400</td>
      <td>6</td>
      <td>signature_method_rejected</td>
      <td>The signature method is not supported. The following methods are supported: HMAC-SHA1.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>7</td>
      <td>signature_invalid</td>
      <td>The signature is invalid.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>8</td>
      <td>consumer_key_rejected</td>
      <td>The Consumer Key has incorrect length or does not exist.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>9</td>
      <td>token_used</td>
      <td>An attempt of authorization of an already authorized token or an attempt to exchange a not temporary token for a permanent one.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>10</td>
      <td>token_expired</td>
      <td>The temporary token has expired. At the moment, the mechanism of expiration of temporary tokens is not implemented and the current error is not used.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>11</td>
      <td>token_revoked</td>
      <td>The token is revoked by the user who authorized it.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>12</td>
      <td>token_rejected</td>
      <td>The token is not valid, or does not exist, or is not valid for using in the current type of request.</td>
   </tr>
   <tr>
      <td>401</td>
      <td>13</td>
      <td>verifier_invalid</td>
      <td>The confirmation string does not correspond to the token.</td>
   </tr>
</table>

## Related topic
<a href="{{page.baseurl}}get-started/authentication/gs-authentication-oauth.html">OAuth-based authentication</a>
