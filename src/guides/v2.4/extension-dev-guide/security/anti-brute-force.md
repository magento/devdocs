---
group: php-developer-guide
title: Protecting against brute force attacks
migrated_to: https://developer.adobe.com/commerce/php/development/security/brute-force/
layout: migrated
---

In a brute force attack, the attacker tries to guess a value/secret stored on a server by cycling through
all possible variations. Attackers may also use dictionaries (rainbow tables) of previously-exposed correct values,
such as known passwords from other applications or accounts.

## Identifying vulnerable functionality

The first step is to determine where the application can be vulnerable against brute force attacks. The vulnerabilities
can be divided into human-readable and machine-readble secrets.

Human-readable secrets require a challenge for the user to provide a secret, possibly from memory. Examples include:

*  Login-password pairs
*  Gift card codes
*  **Forgot Password** functionality that asks for an email address or phone number

Machine-readable secrets use randomly genrated strings. Examples include:

*  Authorization tokens
*  A secret link to a shared document

## Protection

### Are you a robot?

One of the most effective ways to stop a script from automatically guessing secrets is to verify that a client is
indeed a real person: you present the client with a challenge that can only be solved by a human.
[Google ReCaptcha]({{ site.user_guide_url }}/stores/security-google-recaptcha.html) is a recommended provider
to use for these challenges, although [CAPTCHA]({{ site.user_guide_url }}/stores/security-captcha.html) implementation
is also available. ReCaptcha is less intrusive and can even be completely invisible by end users.

When protecting a functionality with ReCaptcha, it is vital that you cover all interfaces that expose
it, including the route (controller) and any applicable RESTful and GraphQL endpoints. For example, Magento provides an
HTML interface and controllers for login. It also provides a RESTful endpoint and a GraphQL mutation for
creating an authentication token. If only the controller is protected, then attackers will be able to use the RESTful
or GraphQL endpoint to guess emails and passwords.

### Too long to guess

Another strategy is to make the secrets too long for attackers to be able to cycle through possible values. Use
a recommended safe hashing algorithm for hash-based tokens/secrets, and use cryptographically secure randomizers for
long random secrets of at least 16 characters. A minimum of 32 characters is preferable.

### Leverage infrastructure

Sometimes, secret values cannot be lengthy, or introducing friction in form of ReCaptcha is undesirable. In these cases,
you can mitigate brute force attacks by leveraging your infrastructure. Some hosting or cloud providers have built-in
defenses against denial of service (DoS) and brute for attacks. The hosting and cloud providers might allow you to simply
configure throttling for specific routes. Identify the routes that need to be protected and configure your server accordingly.

## When to use each strategy

### ReCaptcha

Use ReCaptcha when:

*  A secret value cannot be too long and users enter the value manually
*  Having legitimate users occasionally solve a challenge is acceptable from a product perspective

### Long random values

Use long random values when:

*  The secret or token can be random or a hash and is not entered by users manually. For example, when it is part of a URL or a cookie.

### Infrastructure-level protection

Use infrastructure-level protection:

*  When other means fail
*  Alongside ReCaptcha or long values when throttling is acceptable

## Related information

An example of how to cover a route (controller) alongside RESTful and GraphQL endpoints can be found in our
[SecurityPackage](https://github.com/magento/security-package/tree/develop/ReCaptchaCustomer).
