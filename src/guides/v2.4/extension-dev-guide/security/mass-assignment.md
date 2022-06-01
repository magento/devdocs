---
group: php-developer-guide
title: Mass assignment
migrated_to: https://developer.adobe.com/commerce/php/development/security/mass-assignment/
layout: migrated
---

Mass Assignment is a type of attack in which a client inserts or updates data that either should not be available
to the user, or should require additional authorization.

Example:

You have an endpoint or a page where users can edit their own personal information. The user table in your DB
contains the following columns:

*  `id`
*  `first_name`
*  `last_name`
*  `email`
*  `password_hash`
*  `is_admin`

You want users to be able to edit their first and last names only on a page or through the endpoint, but inside the
controller/service contract, you have code looking something like this:

```php
$user = $repository->findById($authContext->getUserId());
$user->setData($request->getPostData());
$dbConnection->updateTable('users', $user->getData(), ['id' => $user->getId()]);
```

When a client only provides `first_name` and `last_name` properties, this code will perform as expected, but it is vulnerable
to mass assignment attacks.

The first vulnerability is through the `id` property. Users are meant to be able to edit only their own data, but here
an attacker can set an `id` in their request. The`$user` object's ID will be overwritten, so when you call
`$dbConnection->updateTable()`, instead of having the ID from `$authContext`, you will have an arbitrary ID from the HTTP request.
This will allow an attacker to override data of any user in your system!

The second possible vulnerability is through the `is_admin` property. Clearly, the property was meant to be writable only by other admins,
and maybe even by using another page/endpoint. Using the code above, an attacker can set `"is_admin": true`
inside a request and gain admin access when you save the user record.

Given the `users` table structure, and depending on your application's logic, `email` can also be a vulnerable property.
An attacker might be able to change their email to any other address without confirming it first.

## Mass Assignment and Magento

If you are not careful and, especially, if you use the legacy approach described below, it is easy to make yourself vulnerable to mass
assignment.

### Legacy approach

The legacy approach of exposing data to be writable by users means having a controller that uses
`Magento\Framework\Model\AbstractModel` and sets request data directly, instead of doing so with a DTO
and a service contract.

```php
class Save extends \Magento\Backend\App\Action implements HttpPostActionInterface
{
    ...


    public function execute()
    {
        $data = $this->getRequest()->getPostValue();
        /** @var MyModel $model */
        $model = $this->modelFactory->create()
            ->load($this->getRequest()->getParam('id'));
        $model->setData($data);
        $model->save();

        return $this->generateRedirect();
    }
}
```

As you can see, this example is similar to the generic example with users before. We take all data from the request,
thus allowing the client to override ANY property that the model (table) has and then store it.

### Newer approach

A more recent practice is to have service contracts and DTOs that are directly exposed as REST APIs, used inside related
controllers and GraphQL resolvers.

```xml
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">
    <extension_attributes for="\MyStore\MyModule\Api\Data\User">
        <attribute code="is_admin" type="boolean" />
    </extension_attributes>
</config>

<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/users" method="PUT">
        <service class="MyStore\MyModule\Api\UserManagerInterface" method="save"/>
        <resources>
            <resource ref="self"/>
        </resources>
    </route>
</routes>
```

```php
interface UserInterface extends ExtensibleDataInterface
{
    public function getId(): int;
    public function getFirstName(): string;
    public function getLastName(): string;
    public function getEmail(): string;
    public function getPasswordHash(): string;
    public function getExtensionAttributes(): \MyStore\MyModule\Api\Data\UserExtensionInterface;
    public function setExtensionAttributes(\MyStore\MyModule\Api\Data\UserExtensionInterface $extensionAttributes): void;
}

class UserModel extends AbstractModel implements UserInterface
{
    ...
}

interface UserManagerInterface
{
    public function save(\MyStore\MyModule\Api\Data\UserInterface $user): \MyStore\MyModule\Api\Data\UserInterface;
}

class Save extends \Magento\Framework\App\Action\Action implements HttpPostActionInterface
{
    ...

    /**
     * @var DataObjectHelper
     */
    private $dataObjectHelper;

    /**
     * @var UserManagerInterface
     */
    private $manager;

    ...

    public function execute()
    {
        $data = $this->getRequest()->getPostValue();
        /** @var UserInterface|UserModel $user */
        $user = $this->repo->findById($this->userContext->getUserId());
        //hydration
        $this->dataObjectHelper->populateWithArray($user, $data, UserInterface::class);

        //Saving
        $this->manager->save($user);

        return $this->generateRedirect();
    }
}
```

In this example, `UserInterface` is the DTO for the operation, and `UserManagerInterface` is the service contract. From
the XML snippet above, you can see that the `isAdmin` property is added to the `UserInterface` DTO as an extension attribute.
You can also see that `UserManagerInterface::save()` can be invoked directly by accessing the REST endpoint
`PUT /V1/users`. We also use the service contract inside the `Save` controller, which handles a page that enables a user to edit personal info.

This approach is better because we do not accept all data coming from client request blindly, but rather only those properties
strictly defined inside `UserInterface` with getters. For REST APIs, this is ensured by the Magento framework automatically,
and inside the controller, we hydrate the user object retrieved from the DB with `DataObjectHelper`.

However, because our DTO is also implemented by a class that extends `AbstractModel`, it's a de facto active record
of the `users` table. As a result, we still have the issue where we exposed the `id`, `is_admin`, and `email` properties.
The same vulnerabilities persist.

## Solution

The vulnerability can be fixed relatively easily by having a strict list of properties accepted by your
controllers/service contracts that do not necessarily correlate with the storage schema.
This can be achieved by using operation-specific DTOs instead of persistence-layer DTOs.

Example:

```xml
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/users" method="PUT">
        <service class="MyStore\MyModule\Api\UserManagerInterface" method="update"/>
        <resources>
            <resource ref="self"/>
        </resources>
        <data>
            <!-- Enforcing UpdatedUserDataInterface::getId() to always equal to current user's ID -->
            <parameter name="user.id" force="true">%user_id%</parameter>
        </data>
    </route>
</routes>
```

```php
interface UpdatedUserDataInterface extends ExtensibleDataInterface
{
    //This property will be enforced by controller/webapi
    public function getId(): int;
    //Only having properties that you wish to be writable by users themselves
    public function getFirstName(): string;
    public function getLastName(): string;
    public function getExtensionAttributes(): \MyStore\MyModule\Api\Data\UpdatedUserDataExtensionInterface;
    public function setExtensionAttributes(\MyStore\MyModule\Api\Data\UpdatedUserDataExtensionInterface $extensionAttributes): void;
}

//Read-only DTO
interface UserInfoInterface extends ExtensibleDataInterface
{
    public function getId(): int;
    public function getFirstName(): string;
    public function getLastName(): string;
    public function getEmail(): string;
    public function getExtensionAttributes(): \MyStore\MyModule\Api\Data\UserInfoExtensionInterface;
    public function setExtensionAttributes(\MyStore\MyModule\Api\Data\UserInfoExtensionInterface $extensionAttributes): void;
}

//Notice the implementation extending simple DataObject instead of the model.
class UpdatedUserData extends DataObject implements UpdatedUserDataInterface
{
    ...
}

interface UserManagerInterface
{
    public function update(\MyStore\MyModule\Api\Data\UpdatedUserDataInterface $user): \MyStore\MyModule\Api\Data\UserInfoInterface;
}

class Save extends \Magento\Framework\App\Action\Action implements HttpPostActionInterface
{
    ...

    /**
     * @var DataObjectHelper
     */
    private $dataObjectHelper;

    /**
     * @var UserManagerInterface
     */
    private $manager;

    ...

    public function execute()
    {
        $data = $this->getRequest()->getPostValue();
        //Enforcing user ID.
        $data['id'] = $this->userContext->getUserId();
        $updatedData = new UpdatedUserData();
        //hydration
        $this->dataObjectHelper->populateWithArray($updatedData, $data, UpdatedUserDataInterface::class);

        //Saving
        $this->manager->update($updatedData);

        return $this->generateRedirect();
    }
}
```

You can see that `UpdatedUserDataInterface` only contains properties that we want users to be able to
update. It is not an `AbstractModel`, but rather a simple data container (`DataObject`), so we won't have to add any
new properties, even if we add new columns to the table. We'll only update `UpdatedUserDataInterface` explicitly
when we want to make a property writeable by clients.

However, we still have
`getId` as a part of the DTO in order to identify which user to update. That means that we need to ensure that the
property will contain the value we want, and not a user defined value. For REST APIs, we achieve this with the `parameter`
tag, which will find a registered `ParamOverrider` and use it to override whatever the client has provided. In the controller,
we do this by explicitly setting `id` as current user ID.

Note that `UserManagerInterface` returns `UserInfoInterface`, which is another DTO, and not an `AbstractModel`.
It serves a similar purpose: to expose only the properties to clients that we want them to see. This example does not contain
`getPasswordHash()`, for instance.

### Authorization

In the example above, we skipped the `isAdmin()` user property. We don't want users to access this property themselves,
but we do want this property to be writeable by other admin users.

The best solution here would be to have a separate service, controller, and DTOs meant for admin users that would expose
more properties like `isAdmin()` with the endpoints/pages requiring authorization to related resources.

For example:

```xml
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/admin/users" method="PUT">
        <service class="MyStore\MyModule\Api\AdminUserManagerInterface" method="save"/>
        <resources>
            <resource ref="Magento_User::manage"/>
        </resources>
    </route>
</routes>
```

```php
interface UserFullDataInterface extends ExtensibleDataInterface
{
    //Properties we wish admins have access to
    public function getId(): int;
    public function getFirstName(): string;
    public function getLastName(): string;
    public function isAdmin(): bool;
    public function isActive(): bool;
    public function getExtensionAttributes(): \MyStore\MyModule\Api\Data\UserFullDataExtensionInterface;
    public function setExtensionAttributes(\MyStore\MyModule\Api\Data\UserFullDataExtensionInterface $extensionAttributes): void;
}


//Read-only DTO
interface FullUserInfoInterface extends ExtensibleDataInterface
{
    public function getId(): int;
    public function getFirstName(): string;
    public function getLastName(): string;
    public function getEmail(): string;
    public function isAdmin(): boolean;
    public function isActive(): string;
    public function getExtensionAttributes(): \MyStore\MyModule\Api\Data\FullUserInfoExtensionInterface;
    public function setExtensionAttributes(\MyStore\MyModule\Api\Data\FullUserInfoExtensionInterface $extensionAttributes): void;
}

//Notice the implementation extending simple DataObject instead of the model.
class UserFullData extends DataObject implements UserFullDataInterface
{
    ...
}

interface AdminUserManagerInterface
{
    public function save(\MyStore\MyModule\Api\Data\UserFullDataInterface $user): \MyStore\MyModule\Api\Data\FullUserInfoInterface;
}

class Save extends \Magento\Backend\App\Action implements HttpPostActionInterface
{
    ...

    const ADMIN_RESOURCE = 'Magento_User::manage';

    /**
     * @var DataObjectHelper
     */
    private $dataObjectHelper;

    /**
     * @var AdminUserManagerInterface
     */
    private $manager;

    ...

    public function execute()
    {
        $data = $this->getRequest()->getPostValue();
        $userData = new UserFullData();
        //hydration
        $this->dataObjectHelper->populateWithArray($userData, $data, UserFullDataInterface::class);

        //Saving
        $this->manager->save($userData);

        return $this->generateRedirect();
    }
}
```

Notice how both the endpoint and the controller now require authorization for `Magento_User::manage`. In an earlier example,
we had `isAdmin()` property added to `UserInterface` as an extension attribute. If we have the same DTOs
for operations that require additional authorization and those that do not, we risk other extensions exposing
vulnerable data. With this approach, another extension can decide to only add certain properties to DTOs available
only to admin users by providing extension attributes for `UserFullDataInterface` only.

### GraphQL

For GraphQL APIs, Magento does not rely on interfaces to generate schema. Instead, we have explicit GraphQL schemas, and there is
no risk of exposing fields accidentally when you update data storage schema. However, if for some reason some fields
do require additional authorization, you would still need to verify it explicitly.
