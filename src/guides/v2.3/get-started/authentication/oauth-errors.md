---
group: web-api
title: OAuth error codes
functional_areas:
  - Integration
---

When the third-party application makes an invalid request to Magento, the following OAuth-related errors can occur:

HTTP code | Error code | Text representation | Description
--- | --- | --- | ---
400 | 1 | `version_rejected` | The `oauth_version` parameter does not correspond to the "1.0" value.
400 | 2 | `parameter_absent`  | A required parameter is missing in the request. The name of the missing parameter is specified additionally in the response.
400 | 3 | `parameter_rejected` | The type of the parameter or its value do not meet the protocol requirements (for example,  array is passed instead of the string).
400 | 4 | `timestamp_refused` | The timestamp value in the oauth_timestamp parameter is incorrect.
401 | 5 | `nonce_used` | The nonce-timestamp combination has already been used.
400 | 6 | `signature_method_rejected`| The signature method is not supported. The following methods are supported: HMAC-SHA1.
401 | 7 | `signature_invalid` | The signature is invalid.
401 | 8 | `consumer_key_rejected` | The Consumer Key has incorrect length or does not exist.
401 | 9 | `token_used` | An attempt of authorization of an already authorized token or an attempt to exchange a not temporary token for a permanent one.
401 | 10 | `token_expired` | The temporary token has expired. At the moment, the mechanism of expiration of temporary tokens is not implemented and the current error is not used.
401 | 11 | `token_revoke` | The token is revoked by the user who authorized it.
401 | 12 | `token_rejected` | The token is not valid, or does not exist, or is not valid for using in the current type of request.
401 | 13 | `verifier_invalid` |The confirmation string does not correspond to the token.
403 | 14 | `permission_unknown` |The consumer permission is unknown.
403 | 15 | `permission_denied` |The consumer does not authorized to access the resource.
405 | 16 | `method_not_allowed` |The method is not supported or not allowed.
403 | 17 | `consumer_key_invalid` |The Consumer Key is invalid.

## Related topic

[OAuth-based authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-oauth.html)
