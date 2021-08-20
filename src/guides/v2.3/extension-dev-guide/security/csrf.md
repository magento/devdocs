---
group: php-developer-guide
title: Cross-site request forgery (CSRF)
---

CSRF is an attack that tricks a user's browser into executing actions on a web application in which the user is currently
authenticated. This attack can be achieved in multiple ways by crafting a form, or a resource reference,
like \<img\/\> "src" attribute, that will trigger a browser to send the request to the targeted website where a user
may already be authenticated and posses the authentication cookies. The target website will consider this request
genuine and will execute the action, like transferring money to an account.

The most effective way of protecting against these attacks are, so called, CSRF tokens. These tokens are generated on
the server side and inserted into forms. When receiving a form, server then verifies that a valid CSRF token is
present in the request.

## Adobe Commerce and CSRF
Adobe Commerce has anti-CSRF measures, like CSRF tokens, implemented within it's framework. Only minimum action is
required from developers to make these mechanisms work.

The framework cannot be sure which controller is intended to change state and thus needs to be protected. A developer
has to inform the framework whether a controller needs protection by making the implement one, or multiple
of `Http<Method>ActionInterface` interfaces. In most scenarios controllers that accept forms would expect _POST_
requests and have to marked by the `Magento\Framework\App\Action\HttpPostActionInterface` interface. These are
marker-interfaces that require no additional implementation. If a controller implements at least one of them,
Magento framework will deny requests with HTTP methods that do not correspond to one of the interfaces. CSRF protection
mechanism will become active for controllers that expect any HTTP method other than _GET_.

CSRF tokens will be added to all forms automatically by `lib/web/mage/common.js`. If the file was disabled for
some reason or at any other case, CSRF token can be added to a form by developers manually by grabbing it from
the global _FORM_KEY_ variable on JS side, or by using `Magento\Framework\Data\Form\FormKey` on backend.

### Exceptions
There may be some cases when a controller expects POST, or any other non-GET, requests but is not supposed to be
protected from CSRF. For instance - a webhook, that expect a request from another service. For such cases CSRF
protection can be disabled for a controller by it implementing `Magento\Framework\App\CsrfAwareActionInterface`.
By doing so developers are also able to customize failed CSRF challenge exception or modify the validation logic.
