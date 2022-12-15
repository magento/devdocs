---
group: php-developer-guide
title: Server-side Request Forgery
redirect_to: https://developer.adobe.com/commerce/php/development/security/server-side-request-forgery/
status: migrated
---

Server-side Request Forgery (SSRF) is a type of attack in which a server is tricked into sending a request to an
internally-accessible server. This type of attack is not limited to the HTTP protocol. Depending on the network client
library the targeted server is using, it could be forced to send requests using other protocols such as TCP or FTP.
An SSRF attacker could force an application to send a request to FLUSHALL to an internally accessible Redis
instance, or to load a file from an internal file host instead of a publicly accessible one provided by a user.

## Identifying potentially vulnerable functionality

Any functionality that allows a user to provide a URL that will later be requested on the server is vulnerable without
proper validation.

An example of such functionality would be an ability for a user to specify a URL for their profile image.
Your application might attempt to download the image to allow the user to crop it so that it can be used as an avatar.
If there is also some internal service that exposes a web API accessible by GET HTTP method then an attacker can
craft a URL that will call the endpoint. If the API is not RESTful then calling the endpoint might actually modify state.
For example, calling the PHP `file_get_contents('http://internal-service/mess-my-store')` method with a malicious URL
that is subsequently used by the application will achieve this.

Another example would be an integration with a 3rd-party service that provides tax information. Your module might need
to display accurate tax information during checkout, but your company does not specialize in calculating taxes. Therefore,
your module provides a field in which an Admin user can set the tax service base URL or the path to a standard tax
API. Now, a malicious Admin user can craft a base URL that will be requested by our application
later on, and the request is not using a GET method.

## Prevention measures

Follow these measures to prevent SSRF attacks. They are listed in order of effectiveness.

### Do not accept URLs from users

The most effective measure to avoid potential SSRF attacks completely: do not allow users to provide URLs that will be
accessed by the application. If you must allow users to provide URLs, limit this functionality to the most trusted users.

### Limit which URL parts are accepted

*  Do not accept protocols/schemas

   When accepting URL from users, accept the host and query, but not the protocol (schema). If it's an avatar upload, then allow
   only `http://` and maybe `ftp://`, but not `phar://` or `tcp://`.

*  Do not accept hosts

   Only accept the query, but not the host. If the host is always known and only the route can change, then only accept routes.
   Otherwise, try to limit the host to a list of trusted hosts

### Do not expose responses

Your application logic may try to show a response in the exception message when its structure is not expected. A response
structure may be unexpected if the URL was forged in order to access some internal service. If the response is not exposed
then the attacker, while having successfully tricked the application to sending the request, won't get the sensitive data.
