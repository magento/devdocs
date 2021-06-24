---
group: php-developer-guide
title: Authorization
---

## Configuration based authorization
  Magento provides a number of ways to mark a page (controller) or an endpoint as accessible to everybody,
logged in customers or administrators with roles that allow access to certain resources through configuration.

### Pages (controllers)
* Distinction by user type

To make a page accessible to customers (guests and registered) coming from storefront a controller simply
needs to be placed in `<Vendor>\\<Module>\\Controller\\**` namespace.

To make a page only accessible by administrators a controller needs to reside in
`<Vendor>\\<Module>\\Controller\\Adminhtml\\**` namespace.

* Requiring specific resource access for administrators

Each administrator has an ACL role assigned to them which provides them access only to selected resources.
To mark your page (route/controller) as one that requires access to a specific resource the controller
has to extend `Magento\Backend\App\Action` and override `ADMIN_RESOURCE` constant with the name of the resource.

### RESTful/SOAP web API endpoints
RESTful/SOAP web API endpoints are configured in a module's `webapi.xml` configuration file. An endpoint is defined as
a `route` tag and authorization for each is configured by `resource` tags in `routes.route.resources` path.

Endpoint can be configured to be accessible by specific users as follows:
* For guest customer access

  `<resource>anonymous</resource>`
* For authenticated customers

  `<resource>self</resource>`
* For administrators or 3rd-party integration clients by one or multiple `resource` tags:

  `<resource>Module_Name::resource1</resource>`

  `<resource>Module_Name::resource2</resource>`

### UI Components
To mark UI Components as accessible by customers or administrators UI component XML config files need to be placed
in `<Module>/view/**` and `<Module>/view/adminhtml/**` folders respectively.

To require specific ACL resource access from administrators UI component tags allow `aclResource` tags and attributes
accepting string values with resource names like `Module_Name::resource`.

It is important not to forget to provide `aclResource` configuration when a UI component (or rather data provider)
exposes sensitive information since any UI component can be rendered on it's own through `mui/render` without
going through a controller first.

## Explicit authorization
Some cases are however cannot be covered by a configuration an authorization has to be verified explicitly
 
### Page (controller) is meant only for authenticated customers
`UserContextInterface`  can be utilized to verify that a customer has logged in:
```php
class MyController implements \Magento\Framework\App\ActionInterface, \Magento\Framework\App\Action\HttpGetActionInterface {
    private \Magento\Authorization\Model\UserContextInterface $userContext;

    ...

    public function construct(\Magento\Authorization\Model\UserContextInterface $userContext) {
        $this->userContext = $userContext;
    }

    ...

    public function execute() {
        ...

        if ($this->userContext->getUserType() == UserContextInterface::USER_TYPE_CUSTOMER
            && $this->userContext->getUserId()) {
            ...
        } else {
            throw new AuthorizationException(__('Please log in'));
        }
    }
}
```

### A GraphQL node is meant only for authenticated customers
`Magento\GraphQl\Model\Query\ContextInterface` instance is always available for GraphQL resolvers and it can help
with authorizing customers.
```php
class MyResolver implements \Magento\Framework\GraphQl\Query\ResolverInterface
{
    ...

    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
        /** @var \Magento\GraphQl\Model\Query\ContextInterface $context */
        if (false === $context->getExtensionAttributes()->getIsCustomer()) {
            throw new GraphQlAuthorizationException(__('The current customer isn\'t authorized.'));
        }

        ...
    }
}
```

### Ownership verification
There are cases when you want to limit read/write access to information only to a user who owns the related entities.
For instance customers must only have access to their own wishlists. So when serving such info or accepting an update
manual verification is required.

```php
if ($userContext->getUserType() === UserContextInterface::USER_TYPE_CUSTOMER
    && $userContext->getUserId() === $wishListItem->getCustomerId()) {
    return $wishListItem;
} else {
    throw new AuthorizationException(__('Not authorized'));
}
```

### Explicit authorization in blocks and UI component data providers
When explicit authorization, like ownership verification, is required it is extremely important not to forget
that blocks and UI components can be used with different controllers or rendered on their own.

Consider example above: you have a page that is supposed to display a specific wishlist. The URL for this page
has a required parameter `wishlist_id`. Inside the controller you do verify ownership before moving forward with
rendering. But, inside the block or the UI component data provider, that is supposed to fetch wishlist data and
render it you simply find the data by ID. This particular page will be protected but when the UI component will
be rendered independently through `/mui/render` or the block used on a different page with a different controller
no ownership authorization will occur and any wishlist data could be retrieved by ID.

### Temporal authorization
There are cases it is either impossible to authorize user via login and password or an access to a resource must
be issued temporary. For instance when a protected page needs to be accessible from an E-mail link immediately without
requiring user to have a valid session or go through sign up/login. For situations like this self-signed tokens with
limited lifespan can be utilized. Self-signed tokens have advantages over randomized secrets stored in DB - you don't
have to store them and maintain their lifespan. They can be verified without accessing a storage and
TTL information is embedded inside of them.

Let's take page accessible from E-mail example. Imagine that there is a requirement to remind customers that have
not finished registration to complete the process. Your store needs to send such customers and E-mail with a link
to SignUp form with fields containing previously entered information. These customers cannot login and it cannot be
expected for them to have the same session cookie when they follow the E-mail link. This issue can be solved by
embedding a self-signed token inside the link that will contain "unfinished signUp data" ID and expiration datetime
to protect the token from bruteForce attack. Then when customer follows the link Magento store would verify it's
signature/decrypt it, verify that token has not yet expired and then prefill the form with customer data retrieved from
DB by ID. If the form is not too big then it would be possible to even avoid storing data in persistent storage, but
instead embed it inside the token itself using encrypted token to protect sensitive data.

When the only client of a self-signed token is the application itself it is not absolutely necessary to follow
a certain standard when generating self-signed tokens, but it would be easier and more secure to utilize one, like JWT.
Thankfully Magento framework provides a tool to help with this process - see `Magento\Framework\Jwt\JwtManagerInterface`
and it's usages from Community Edition.
