# Mass Assignment
  
  Mass Assignment is a type of attack when a client is able to insert or update data that not is meant to be writable
by a user or requires additional authorization.
  
  Example:
  
You have an endpoint or a page where users can edit their own personal information, you have a user table in your DB
that consists of the following columns:
*  id
*  first_name
*  last_name
*  email
*  password_hash
*  is_admin
  
On your page or through the endpoint you want users to be able to edit only their name, but inside the
controller/service contract you have code looking something like this:
```php
$user = $repository->findById($authContext->getUserId());
$user->setData($request->getPostData());
$dbConnection->updateTable('users', $user->getData(), ['id' => $user->getId()]);
```
  
When a client only provides `first_name` and `last_name` properties this will work fine but this code is vulnerable
to mass assignment attacks.
  
First one is possible through the `id` property. Users are only meant ot be able to edit their own data BUT here
an attacker can set an `id` in their request and then `$user` object's ID will be overwritten so when you call
`$dbConnection->updateTable()` instead of having ID from `$authContext` you'll have an arbitrary ID from the HTTP request
which will allow an attacker to override data of any user in your system!
  
The second one is possible via `is_admin` property. Clearly the property was meant to be writable only by other admins
and maybe even by using another page/endpoint. So again, given the code above an attacker can send `"is_admin": true`
inside a request and give themselves admin access when you save the user record.
  
Given the `users` table structure and depending on your application's logic `email` can also be a vulnerable property
through which an attacker will be able to change their email to any other email without confirming it first.
  
## Magento
If you are not careful and, especially, if you use legacy approach it is easy to make yourself vulnerable to mass
assignment.
  
### Legacy approach
Legacy approach of exposing data to be writable by users is to have a controller that uses
`Magento\Framework\Model\AbstractModel` and sets request data directly instead of doing so with a DTO
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
  
As you can see, this example is similar to the generic example with users before. We take all data from the request
thus allowing client to override ANY property that the model (table) has and then store it.
  
### Newer approach
More recent practice is to have service contracts and DTOs that are directly exposed as REST API, used inside related
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
  
In this example `UserInterface` is the DTO for the operation, `UserManagerInterface` is the service contract. From
the xml snippet above you can see that `isAdmin` property is added to `UserInterface` DTO as an extension attribute.
You can also see that `UserManagerInterface::save()` can be invoked directly by accessing a REST endpoint
`PUT /V1/users`. We also use the service contract inside `Save` controller which handles some personal info edit page.
  
This approach is better because we do not accept all data coming from client request blindly but rather only properties
strictly defined inside `UserInterface` with getters. For REST APIs this is ensured by Magento framework automatically
and inside the controller we hydrate the user object retrieved from DB with DataObjectHelper.
  
However, because our DTO is also implemented by a class that extends `AbstractModel` it means that it's de facto an active record
of `users` table. Meaning that we still have the issue where we exposed `id`, `is_admin` and `email` properties to be overridden by
clients. Same vulnerabilities persist.
  
## Solution
The vulnerability can be relatively easily fixed by having strict list of properties accepted by your
controllers/service contracts that do not necessarily correlate with storage schema.
That can be achieved by utilizing operation specific DTOs instead of persistence-layer DTOs.
  
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
  
From the example you can see that `UpdatedUserDataInterface` only contains properties that we want users to be able to
update. It is also not an `AbstractModel` but rather a simple data container (`DataObject`) so we won't have to add any
new properties to it even if we add new columns to the table - we'll only update `UpdatedUserDataInterface` explicitly
when we want to make a property writeable by clients.
  
However we still have
`getId` as a part of the DTO which we need to identify which user to update. That means that we need to ensure that the
property will contain the value we want and not a user defined value. For REST API we achieve this with the `parameter`
tag which will find a registered `ParamOverrider` and use it to override whatever client has provided. In the controller
we do this by explicitly setting `id` as current user ID.
  
Note that `UserManagerInterface` returns `UserInfoInterface` - that's another DTO, which is not an `AbstractModel` and
it serves similar purpose: to only expose properties to clients that we want them to see. Notice that it does not contain
`getPasswordHash()` for instance.
  
### Authorization
In the example above we've skipped one user property - `isAdmin()`. We don't want users to access this property themselves,
but we do want this property to be writeable by other admin users.
  
The best solution here would be to have a separate service, controller and DTOs meant for admin users that would expose
more properties like `isAdmin()` with the endpoints/pages requiring authorization to related resources.
  
See example below:
  
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
  
Notice how both the endpoint and the controller now require authorization for `Magento_User::manage`. Remember how in the
beginning we had `isAdmin()` property added to `UserInterface` as an extension attribute? If we have the same DTOs
for operations that do require additional authorization and those that do not, we risk other extensions exposing
vulnerable data. With this approach another extension can decide to only add certain properties to DTOs available
only to admin users by providing extension attributes for `UserFullDataInterface` only.
  
### GraphQL
With GraphQL Magento does not rely on interfaces to generate schema but rather for explicit GraphQl schemas so there is
no risk of exposing fields accidentally when you update data storage schema. However, if for some reason some fields
do require additional authorization you'd still need to verify it explicitly.
