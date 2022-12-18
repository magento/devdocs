---
group: php-developer-guide
title: Cross-site request forgery (CSRF)
redirect_to: https://developer.adobe.com/commerce/php/development/security/cross-site-request-forgery/
status: migrated
---

CSRF is an attack that tricks a user's browser into executing actions on a web application in which the user is currently
authenticated. This attack can be achieved in multiple ways by crafting a form, or a resource reference,
like \<img\/\> "src" attribute, that will trigger a browser to send the request to the targeted website where a user
may already be authenticated and posses the authentication cookies. The target website will consider this request
genuine and will execute the action, like transferring money to an account.

The most effective way of protecting against these attacks is with CSRF tokens. These tokens are generated
server-side and inserted into forms. When receiving a form, the server verifies that a valid CSRF token is
included in the request.

## Built-in CSRF protection
There are anti-CSRF measures, like CSRF tokens, built into the framework. Only minimum action is
required from developers to make these mechanisms work.

The framework cannot be sure which controller is intended to change state and thus needs to be protected. A developer
must inform the framework whether a controller needs protection by implementing one, or multiple,
 `Http<Method>ActionInterface` interfaces. In most scenarios, controllers that accept forms would expect _POST_
requests and must be marked by the `Magento\Framework\App\Action\HttpPostActionInterface` interface. These are
marker-interfaces that require no additional implementation. If a controller implements at least one of them,
the framework will deny requests with HTTP methods that do not correspond to one of the interfaces. The CSRF protection
mechanism will become active for controllers that expect any HTTP method other than _GET_.

CSRF tokens will be added to all forms automatically by the `lib/web/mage/common.js` file. If the file is disabled,
you can manually add the CSRF token to a form by getting it from
the global `FORM_KEY` variable on JS side, or by using `Magento\Framework\Data\Form\FormKey` on backend.

### Exceptions
There may be some cases when a controller expects POST requests, or any other non-GET HTTP method, but those requests are not supposed to be
protected from CSRF. For example, a webhook that expect a request from another service. In such cases, you can disable CSRF protection for a controller by implementing the `Magento\Framework\App\CsrfAwareActionInterface interface`.
By doing so, you can also customize failed CSRF challenge exceptions or modify the validation logic.
