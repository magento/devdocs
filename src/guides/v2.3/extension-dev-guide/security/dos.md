---
group: php-developer-guide
title: Denial-of-Service (DoS)
---

A __Denial-of-Service (DoS) attack__ is an attack meant to shut down (halt) servers serving an application to make it
inaccessible to users. It's accomplished by flooding a server with an excess amount of traffic or triggering heavy
operations that cannot be handled efficiently by the server.

DoS mitigation is usually handled on the infrastructure level by identifying suspicious traffic and throttling.
However, there are cases when application knowledge is required to effectively protect against DoS attacks and it's
developers job to identify them and take appropriate measures - these cases are the scope of this article.

## Identifying vulnerable functionality
There are a couple of types of functionality that are especially vulnerable to DoS attacks and cannot be identified
by the infrastructure level mechanisms:

*  Heavy operations

Meaning routes/endpoints that take a lot of processing power or storage operations to complete. Identify operations
that issue a big amount of, potentially heavy, requests to the DB, work extensively with files or perform heavy
calculations.

*  Using other services through the network

Routes or endpoints that send requests to other services, for example to send a push notification to a mobile client.
By sending an
excess amount of requests to such endpoints an attacker can get the application to exceed usage limit for that other
service, get the application banned from using the service and effectively render the functionality unusable.
Alternatively an attack on such routes or endpoints can make the server hang for too long waiting responses.

*  Persisting/updating multiple entities

Routes and endpoints that allow client to provide multiple entities to be created or updated can be tricked into
performing an excessive amount of write operations in a single request halting the server and/or flooding
the persistent storage.

*  Querying multiple entries

Routes and endpoints that allow to query a list of entities can be tricked into trying to load and render too much
data for the server to handle in a single request.

Routes/endpoints described above are indistinguishable from any other endpoint that is a part of the application by
an infrastructure level anti-DoS mechanism . Developers have to take measures to protect the functionality on
a case-by-case basis.

## Protection from DoS
Below are a couple of measures that can be taken to protect against DoS:

### ReCaptcha/CAPTCHA
"Are you a robot?" challenges can stop automated traffic from going through by verifying that a client is a real person.
The downside of this approach is the friction created by requiring legitimate users to solve a challenge while
using the store.

[Google ReCaptcha](https://docs.magento.com/user-guide/stores/security-google-recaptcha.html) is an example of a
challenge provider. One of the biggest advantages of ReCaptcha is that it tries really hard to avoid actually presenting
a user with a challenge unless suspicious behavior is detected. There's a list of forms/endpoints
for which ReCaptcha can be enabled out-of-the-box and it's easy to extend the list with store's own endpoints and
forms. Example on how to add coverage can be found in our
[SecurityPackage](https://github.com/magento/security-package/tree/develop/ReCaptchaCustomer).

Our own [CAPTCHA](https://docs.magento.com/user-guide/stores/security-captcha.html) implementation is also available.

### Limited input/output
Each endpoint or route that allows querying multiple entities or creating/updating multiple entities must have a reasonable
maximum number of accepted/returned items set.
Only by inspecting the functionality a limit that will be enough for legitimate users can be determined.

### Configuring infrastructure
Some proxies/load-balancers allow to configure specific throttling rules on a route-by-route basis. A developer must
identify especially vulnerable routes and provide configuration accordingly.

## When to apply
### ReCaptcha (or other type of challenge)

*  For heavy operations
*  For routes/endpoints using other services over network

### Input/output limit

*  For endpoints/routes accepting multiple entities to create or update
*  For endpoints/routes that return a list of entities

### Infrastructure configuration

*  Instead of ReCaptcha when having friction is absolutely unacceptable from a product standpoint
*  Alongside ReCaptcha to prevent malicious traffic from reaching the server in the first place
*  For input/output limited endpoints that are still vulnerable under an excessive amount of requests complying with the set limit
