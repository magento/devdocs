---
group: php-developer-guide
title: Denial-of-Service (DoS) attacks
---

A __Denial-of-Service (DoS) attack__ attempts to shut down (halt) servers serving an application to make it
inaccessible to users. It's accomplished by flooding a server with an excess amount of traffic or triggering heavy
operations that cannot be handled efficiently by the server.

DoS mitigation is usually handled on the infrastructure level by identifying suspicious traffic and throttling.
However, there are cases when application knowledge is required to effectively protect against DoS attacks, and it's
the developer's job to identify them and take appropriate measures. These cases are the scope of this article.

## Identifying vulnerable functionality

There are several types of functionality that are especially vulnerable to DoS attacks and cannot be identified
by the infrastructure level mechanisms:

*  Heavy operations

   Heavy operations are routes/endpoints that take a lot of processing power or storage operations to complete. Identify operations
that issue a large number of requests (potentially heavy requests) to the database, work extensively with files, or perform intensive
calculations.

*  Using other services through the network

   Routes or endpoints can send requests to other services, such as push notifications to a mobile client.
By sending an excessive amount of requests to these endpoints, an attacker can cause the application to exceed usage limits for the
external service. As a result, the application is banned from using the service, effectively rendering the functionality as unusable.
Alternatively, an attack on such routes or endpoints can make the server hang for a long time while waiting for responses.

*  Persisting/updating multiple entities

   Routes and endpoints that allow the client to create or update multiple entities can be tricked into
performing an excessive amount of write operations in a single request. This trickery could halting the server and/or flood
the persistent storage.

*  Querying multiple entries

   Routes and endpoints that allow querying a list of entities can be tricked into trying to load and render too much
data for the server to handle in a single request.

Infrastructure-level anti-DoS mechanisms cannot distinguish the routes/endpoints described above from any other endpoint that is part
of the application. Developers must take measures to protect the functionality on a case-by-case basis.

## Protection from DoS

The following sections describe measures you can take to protect against DoS attacks.

### ReCaptcha/CAPTCHA

"Are you a robot?" challenges can stop automated traffic from going through by verifying that a client is a real person.
The downside of this approach is the friction created by requiring legitimate users to solve a challenge while
shopping.

[Google ReCaptcha]({{ site.user_guide_url }}/stores/security-google-recaptcha.html) is an example of a
challenge provider. One of the biggest advantages of ReCaptcha is that it avoids actually presenting
a user with a challenge, unless it detects suspicious behavior. [Protected endpoints]({{page.baseurl}}/rest/protected-endpoints.html)
contains a list of forms/endpoints can be enabled for ReCaptcha out-of-the-box. You can extend the list by following the example
on how to add coverage can be found in the [SecurityPackage](https://github.com/magento/security-package/tree/develop/ReCaptchaCustomer) repo.

Our own [CAPTCHA]({{ site.user_guide_url }}/stores/security-captcha.html) implementation is also available.

### Limited input/output

Each endpoint or route that allows querying multiple entities or creating/updating multiple entities must have a reasonable
maximum number of accepted/returned items set. You must inspect the functionality of your code to determine
how many create/update are enough for legitimate users.

### Configure infrastructure

Some proxies/load-balancers allow you to configure specific throttling rules on a route-by-route basis. A developer must
identify especially vulnerable routes and configure the infrastructure accordingly.

## When to apply these protections

Use the following guidelines to determine when to apply each protection method.

### ReCaptcha (or other type of challenge)

*  For heavy operations
*  For routes/endpoints using other services over the network

### Input/output limit

*  For endpoints/routes accepting multiple entities to create or update
*  For endpoints/routes that return a list of entities

### Infrastructure configuration

*  Instead of ReCaptcha when having friction is absolutely unacceptable from a product standpoint
*  Alongside ReCaptcha to prevent malicious traffic from reaching the server in the first place
*  For input/output limited endpoints that are still vulnerable under an excessive amount of requests complying with the set limit
