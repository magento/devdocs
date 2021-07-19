---
group: php-developer-guide
title: SSRF
---

Server-side Request Forgery is a type of attack when a server could be tricked into sending a request to an
internally accessible server. This type of attack is not only limited to HTTP protocol, depending on the network client
library the targeted server is using, it could be forced to send requests using other protocols like TCP, FTP etc.
This means that an attacker can force an application to send a request to FLUSHALL to an internally accessible Redis
instance, or to load a file from internal file host instead of a publicly accessible one provided by a user.

## Identifying potentially vulnerable functionality
Any functionality that allows a user to provide a URL that will later be request on server-side is vulnerable without
proper validation.

An example of such functionality would be an ability for a user to specify a URL for their profile image.
Your application will attempt to download the image to allow the user to crop it and then user it as an avatar.
If there is also some internal service that exposes a web API accessible by GET HTTP method then an attacker can
craft a URL that will call the endpoint. If the API is not RESTful then calling the endpoint might actually modify state.
PHP's `file_get_contents('http://internal-service/mess-my-store')` with the crafted URL used by the application will
achieve this.

Another example would be an integration with a 3rd-party tax info provider service. We want to display accurate tax
info during checkout but keeping tax DB ourselves is too much of a responsibility. We decide to rely on a 3rd party
service. Admin users now have the ability to set the tax service base URL just in case it changes in the future, or
there is a standard tax info API that can be provided by multiple service providers and we want for admin users
to be able to choose any. Now a malicious admin user can craft a base URL that will be requested by our application
later on and the request is not limited to GET method.

## Prevention measures
Find the list of measures starting from the most reliable ones below:

### Do not accept URLs from users
The most effective measure to avoid potential SSRF attacks completely. Do not allow users to provide URLs that will be
accessed by the application, or at least limit this functionality to the most trusted users.

### Limit URL parts that are accepted

* Do not accept protocol/schema

  When accepting URL from users accept host and query, but not the protocol (schema). If it's an avatar upload then allow
  only http:// and maybe ftp://, but not phar:// or tcp://.

* Do not accept host

  Only accept query, but not host. If the host is always known and only the route can change then only accept route.
  Or try to limit host to the list of trusted hosts

### Do not expose responses
Your application logic may try to show a response in the exception message when it's structure is not expected. Response
structure may be unexpected when the URL was forged to access some internal service. If the response is not exposed
then the attacker, while having successfully tricked the application to sending the request, won't get the sensitive data.
