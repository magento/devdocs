---
group: php-developer-guide
title: Sensitive Information
migrated_to: https://developer.adobe.com/commerce/php/development/security/sensitive-information/
layout: migrated
---

Sensitive information is information that either requires additional permissions for read/write operations
or is meant to be accessed only programmatically for various reasons.
Examples of sensitive information include customer passwords, addresses, date of birth, and the number of orders for a product.

## Exposing sensitive information to users without permissions

Let's focus on the case when an endpoint, or a page, is configured only for authenticated customers or
admin users with certain permissions, yet still exposes information that it shouldn't.

### Customer information example

Imagine a page or an endpoint that allows admin users to read data of a customer with the specified ID.
The controller/endpoint is properly configured to be accessible only by admin users that have
`Magento_Customer::read_customer` permission for their role. When developing this functionality, a responsible service
would probably look something like this:

```php
interface CustomerQueryServiceInterface {
    public function findById(string $id): CustomerInterface;
}
```
The service is really abstract. Most likely, it's actively used in other places where there's a need to get customer
data by ID. However, the `dob` and `addresses` properties also require the `Magento_Customer::personal_info` permission,
which is intended for the most trusted admin users only. This creates a problem for the customer read endpoint/page:
`CustomerQueryServiceInterface::findById()` always returns the full set of customer info, including `dob` and `addresses`.

Here's how the sensitive information will be exposed through various interfaces.

#### REST web API

The Magento framework serializes all properties defined in `CustomerInterface` into JSON and exposes them. If the endpoint
is configured to require `Magento_Customer::personal_info`, then admin users without it won't be able to read basic
customer data. If it is configured to require `Magento_Customer::read_customer`, then admin users without
`Magento_Customer::personal_info` can see `dob` and `addresses`.

#### GraphQL

If there are `dob` and `addresses` nodes available in the `schema.graphqls`, then these properties will be exposed to
all admin users.

#### HTML page using blocks

A block gets all customer data from `CustomerQueryServiceInterface` with a high chance that the necessary
authorization that occurs before rendering any HTML code that contains `dob` and `addresses` will be forgotten.

#### HTML page using UI components

UI components read data from a global JS object that contains all data retrieved from data providers.
The object is rendered into JS on the backend and is available in response HTML.
The data provider that uses `CustomerQueryServiceInterface` will expose full customer data inside the response HTML.

### A solution for the example

The solution is to have operation-specific DTOs and a case-specific service.

The first step is to make a case-specific service for customer data retrieval by admin users:

```php
interface AdminCustomerQueryServiceInterface {}
```
The second step is to define operation specific DTOs:

```php
interface ReadCustomerDataInterface {
    public function getId(): string;
    public function getName(): string;
}

interface ReadPersonalCustomerDataInterface {
    public function getId(): string;
    public function getDob(): \DateTime;
    public function getAddresses(): array;
}
```

The final step is to define case-specific operations:

```php
interface AdminCustomerQueryServiceInterface {
    public function findById(string $id): ReadCustomerDataInterface;
    public function findPersonalDataById(string $id): ReadPersonalCustomerDataInterface;
}
```

This service belongs in the business logic layer, so inside both these methods, you might use the same repository::method
from the persistence layer. To avoid redundant calls to the repository, consider having an identity-map with full customer info
to reuse when `findPersonalDataById()` is executed after `findById()` with the same ID.

With this approach, it is harder to expose the sensitive data accidentally. `findPersonalDataById()` will only be called
when there's an explicit need to read sensitive data.

Here's how it will work for different interfaces.

#### HTML rendered with backend blocks

The block will have a condition: when the user has `Magento_Customer::personal_info`, call the`findPersonalDataById()` method.
Otherwise, leave the personal data empty.

#### HTML rendered on frontend

Inside the data provider for the UI component, the same condition listed above is present.

#### REST/SOAP web API

Both `findById()` and `findPersonalDataById()` have their own endpoints. The first requires `Magento_Customer::read_customer`,
while the second requires `Magento_Customer::personal_info`. A client that wants to render the customer info page will issue two requests:

1. Fetch basic customer data from the `findById()` endpoint
1. Fetch personal customer data from the  `findPersonalDataById()` endpoint

The second may fail with a 403 status. In this case, the client ignores the status and displays basic customer data only, assuming
the current admin user does not have access to `Magento_Customer::personal_info`.

#### GraphQL

The `dob` and `addresses` fields have their own resolvers, which will validate access to `Magento_Customer::personal_info`. If successful,
the resolvers call `findPersonalDataById()` and return the results.

## Exposing sensitive information through a persistent storage

There is always a possibility of bad actors gaining access to persistent storage either through injection attacks,
through misconfigured environment, or any other way. For that reason, you must protect sensitive information while
it's in storage and while it's being transported by APIs or a HTML interface.

### Hashed sensitive information

Sensitive information that is never exposed in plain text after creation and is only used for comparison can be safely
stored in the form of a hash.

Good examples include passwords, tokens, and secrets. After a password (or similar entity) is created, there is no need to ever
display it to a user again. Later on, there's only a need to compare user input to the existing password.
A hash allows allows you to compare a value to a hashed one and to avoid exposing the original value. A salt is often used with
hashes for passwords to prevent attacks using rainbow tables.

`\Magento\Framework\Encryption\EncryptorInterface` helps with hashes. Use `getHash()` method to generate a hash with
or without a salt, depending on the second argument. (Using a salt is recommended.) Subsequently, use `isValidHash()` to
compare the user-provided value to an existing hash. These methods handle salts, choose a secure algorithm, and
will work after the Magento encryption key is updated by an admin user.

### Encrypted sensitive information

Extremely sensitive information that is only accessible to authorized users must be stored encrypted.

Private information such as addresses are good candidates for encryption, depending on your application requirements.
Encrypting such information involves having an encryption key that is not stored in the same storage as the encrypted
information.

Magento handles encryption with `\Magento\Framework\Encryption\EncryptorInterface`. The `encrypt()` and `decrypt()`
methods use the Magento encryption key for encryption and choose the most secure algorithm with decent performance.
It also handles old and new encryption keys and emerging best practices to encryption with regards to the algorithm.
