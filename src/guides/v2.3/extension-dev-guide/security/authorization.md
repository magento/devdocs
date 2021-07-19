---
group: php-developer-guide
title: Authorization
---

## Configuration based authorization

Through configuration, Magento provides a number of ways to mark a page (controller) or an endpoint as accessible to guests,
logged in customers, or administrators with roles that allow access to certain resources.

### Pages (controllers)

*  Distinction by user type

   To make a page accessible to customers (both guests and registered) coming from storefront, place a controller
   in the `<Vendor>\\<Module>\\Controller\\**` namespace.

   To make a page accessible only to administrators, place a controller in the
   `<Vendor>\\<Module>\\Controller\\Adminhtml\\**` namespace.

*  Requiring specific resource access for administrators

   Each administrator is assigned an ACL role that provides them access only to selected resources.
   To mark your page (route/controller) as one that requires access to a specific resource, the controller
   must extend `Magento\Backend\App\Action` and override the `ADMIN_RESOURCE` constant with the name of the resource.

### RESTful/SOAP web API endpoints

RESTful/SOAP web API endpoints are configured in a module's `webapi.xml` configuration file. An endpoint is defined as
a `route` tag and authorization for each is configured by `resource` tags in `routes.route.resources` path.

Endpoints can be configured to be accessible by specific users as follows:

*  For guest customer access:
  `<resource>anonymous</resource>`

*  For authenticated customers:
  `<resource>self</resource>`

*  For administrators or 3rd-party integration clients by one or multiple `resource` tags:
  `<resource>Module_Name::resource1</resource>`
  `<resource>Module_Name::resource2</resource>`

### UI Components

To mark UI components as accessible by customers or administrators, place the UI component XML config files
in the `<Module>/view/**` and `<Module>/view/adminhtml/**` folders, respectively.

To require specific ACL resource access for administrators, UI component tags allow `aclResource` tags and attributes
accepting string values with resource names such as `Module_Name::resource`.

It is important to provide a `aclResource` configuration when a UI component (or data provider)
exposes sensitive information, since any UI component can be rendered on its own through `mui/render` without
going through a controller first.

## Explicit authorization

However, some cases cannot be covered by configuration. Authorization must be verified explicitly.

### Page (controller) for authenticated customers

The `UserContextInterface` can be utilized to verify that a customer has logged in:

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

### GraphQL node for authenticated customers

A `Magento\GraphQl\Model\Query\ContextInterface` instance is always available for GraphQL resolvers and can help with authorizing customers.

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

There are cases when you want to limit read/write access to information to a user who owns the related entities.
For instance, customers must have access only to their own wishlists. When serving this type of information or accepting an update,
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

When explicit authorization is required for tasks such as ownership verification, it is important to remember
that blocks and UI components can be used with different controllers or rendered on their own.

Consider the example above: you have a page that is supposed to display a specific wishlist. The URL for this page
has a required parameter `wishlist_id`. Inside the controller, you verify ownership before moving forward with
rendering. But, inside the block or the UI component data provider that is supposed to fetch the wishlist data and
render it, you simply find the data by ID. This particular page will be protected but when the UI component is rendered independently
through `/mui/render`, or when the block is used on a different page with a different controller, no ownership authorization will occur,
and any wishlist data may be retrieved through the ID.

### Temporal authorization

There are cases where it is either impossible to authorize a user via login/password, or access to a resource must
be issued temporarily. For instance, when a protected page needs to be accessible from an e-mail link immediately without
requiring the user to have a valid session or go through sign-up/login. For situations such as this, a self-signed token with a
limited lifespan can be utilized. Self-signed tokens have advantages over randomized secrets stored in the database in that you do not
have to store them and maintain their lifespan. They can be verified without accessing storage and the TTL information that is embedded inside of them.

Let's take the "page accessible from e-mail" example. Imagine that there is a requirement to remind customers that have
not finished registration to complete the process. Your store needs to send such customers an e-mail with a link
to a sign-up form with fields containing previously entered information. These customers cannot login, and it cannot be
expected for them to have the same session cookie when they follow the e-mail link. This issue can be solved by
embedding a self-signed token inside the link that contains the "unfinished sign up data" ID and expiration datetime
to protect the token from brute force attack. Then when customer follows the link, the Magento store would verify its
signature or decrypt it, verify that token has not yet expired, and then pre-fill the form with customer data retrieved from
the database by ID. If the form is not too big, then it would be possible to even avoid storing data in persistent storage, but
instead embed it inside the token itself using an encrypted token to protect sensitive data.

When the only client of a self-signed token is the application itself, it is not absolutely necessary to follow
a certain standard when generating self-signed tokens, but it would be easier and more secure to utilize one, like JWT.
The Magento framework provides a tool to help with this process. See `Magento\Framework\Jwt\JwtManagerInterface`
and its usage within {{site.data.var.ce}}.

An example of using `JwtManagerInterface` for the e-mail link case above:

```php
class FinishSignUpTokenManager {
  ...

  private JwtManagerInterface $jwtManager;

  private EncryptionSettingsInterface $jwtEncSettings;

  private string $secret;

  public function construct(JwtManagerInterface $jwtManager, JwkFactory $jwtFactory, string $secret) {
    $this->jwtManager = $jwtManager;
    //Configure JWT encryption settings
    $this->jwtEncSettings = new JweEncryptionJwks(
      $jwkFactory->createA128KW($secret),
      JweEncryptionSettingsInterface::CONTENT_ENCRYPTION_ALGO_A128_HS256
    );
  }

  public function generate(SignUpFormData $data): string {
    //Embed signUp data array into JWT claims
    $jwt = new Jwe(
      new JweHeader([]),
      new ClaimsPayload(
        [
          new PrivateHeaderParameter('signup-data', $data->getData()),
          new ExpirationTime((new \DateTimeImmutable())->add(new \DateInterval('P7D')))
        ]
      )
    );

    return $this->jwtManager->create($jwt, $this->jwtEncSettings);
  }

  public function readToken(string $token): SignUpFormData
  {
    $jwt = $this->jwtManager->read($token, $this->jwtEncSettings);
    /** @var ClaimsPayloadInterface $payload */
    $payload = $jwt->getPayload();
    if ($payload instanceof ClaimsPayloadInterface) {
      if (((int) $payload->getClaims()['exp']->getValue()) <= time()) {
        throw new LocalizedException(__('Token expired'));
      }

      return new SignUpFormData($payload->getClaims()['signup-data']->getValue());
    } else {
      throw new LocalizedException(__('Invalid token'));
    }
  }
}

class FinishSignUpNotifier {
  ...

  private FinishSignUpTokenManager $tokenManager;

  ...

  public function notify(SignUpFormData $data) {
    ...

    //Generating link for E-mails
    $link .= '?token=' .$this->tokenManager->generate($data);

    ...
  }
}

class SignUp implements ActionInterface, HttpPostActionInterface {
  ...

  private FinishSignUpTokenManager $tokenManager;

  ...

  public function execute() {
    //Retrieving previously filled data from token inside the controller to display SignUp form
    try {
      $signUpPrefilled = $this->tokenManager->readToken($this->request->getParam('token'));
    } catch (LocalizedException $ex) {
      $signUpPrefilled = null;
      $this->messages->addWarning($ex->getPhrase());
    }

    ...
  }
}
```
