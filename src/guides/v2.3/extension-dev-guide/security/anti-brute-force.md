---
group: php-developer-guide
title: Protecting against BruteForce attacks
---

BruteForce is a type of attack when an attacker tries to guess a value/secret stored on a server by cycling through
all possible variations. Attackers may also use dictionaries (rainbow tables) of previously exposed correct values
like known passwords for other applications.

## Identifying vulnerable functionality
The first step is to find where the application can be vulnerable against BruteForce.

### Human-readable secrets
Most obvious case is when there is a challenge for a user to provide a secret, possibly from memory. Examples are
login-password pairs, gift card codes, Forgot-Password functionality that asks for E-mail or phone number.

### Machine-readable secrets
Meaning tokens, randomly generated secrets. Examples are authorization tokens or a secret link to a shared document.

## Protection
### Are you a robot?
One of the most effective ways to stop a script from automatically guessing secrets is to verify that a client is
indeed a real person. Present the client with a challenge that can only be solved by a human.
Google ReCaptcha is a recommended provider to use for the challenges, although Magento CAPTCHA implementation is also
available. ReCaptcha is less intrusive and can even be completely invisible by end users.

When protecting a functionality with ReCaptcha it is really important to remember to cover all interfaces that expose
it - not only the route (controller) but RESTful and GraphQL endpoints as well. Consider login functionality - while
Magento has HTML interface and controllers for login, it also has a RESTful endpoint and a GraphQL mutation for
creating an authentication token. If only the controller is protected then attackers will be able to use the RESTful
or GraphQL endpoint to guess E-mails and passwords.

### Too long to guess
Another strategy is to make the secrets too long for attackers to be able to cycle through possible values. Use
a recommended safe hashing algorithm for hash based tokens/secrets and use cryptographically secure randomizers for
long random secrets of at least 16 or preferably 32 characters minimum.

### Leverage infrastructure
Sometimes secret values cannot be too long or it is undesirable to introduce friction in form of ReCaptcha, then it is
still possible to mitigate BruteForce attacks by leveraging infrastructure. Some hosting or cloud providers have built-in
anti DoS and BruteForce smart detection mechanisms, other allow to simply configure throttling for specific routes.
Identify the routes that need to be protected and configure your server accordingly.

## When to use what
### ReCaptcha

*  When the secret value cannot be too long and is entered by users manually
*  When having legit users solving the challenge occasionally is acceptable from product perspective

### Long random values

*  When the secret or token can be random or a hash and is not entered by users manually (part of URL, a cookie etc.)

### Infrastructure level protection

*  When other means fail
*  Alongside ReCaptcha or long values when throttling is acceptable

## Additional information
More information about configuring ReCaptcha as and admin user can be found
[here](https://docs.magento.com/user-guide/stores/security-google-recaptcha.html)

Example how to cover a route (controller) alongside RESTful and GraphQL endpoints can be found in our SecurityPackage
[here (covering customer signIn/signUp)](https://github.com/magento/security-package/tree/develop/ReCaptchaCustomer)
