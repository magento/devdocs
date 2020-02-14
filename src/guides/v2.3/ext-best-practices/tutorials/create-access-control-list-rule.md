---
group: extension-best-practices
title: Creating an Access Control List (ACL) rule
contributor_name: Ziffity
contributor_link: https://www.Ziffity.com/
---

Access Control List (ACL) rules allow an admin to limit the permissions of users in Magento. For example, you can use ACL rules to authorize the users to access menus, controllers, and API endpoints.

This tutorial creates three custom resources (Custom Menu, Create, Delete) as well as a role that has access to these resources. The tutorial also restricts access for three entities (Admin users, controllers, and web APIs).

## Step 1. Define the custom resources

Create the `etc/acl.xml` file in your module. This file adds the custom resources in resource tree.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Acl/etc/acl.xsd">
    <acl>
        <resources>
            <resource id="Magento_Backend::admin">
                <resource id="Vendor_MyModule::menu" title="Custom Menu" sortOrder="10" >
                    <resource id="Vendor_MyModule::create" title="Create" sortOrder="0" />
                    <resource id="Vendor_MyModule::delete" title="Delete" sortOrder="100" />
                </resource>
            </resource>
        </resources>
    </acl>
</config>
```

| Attribute | Description |
| --------- | ----------- |
| `id` | Unique string that defines the resource. The value should be in the format `Vendor_ModuleName::resourceName` |
| `title` | The title that is displayed on menu bar |
| `sortOrder` | A number that determines the position in which a menu option is displayed |

Clean the cache by clicking **System** > **Cache Management** > **Flush Magento Cache** or by entering the following command:

```bash
bin/magento cache:clean
```

You can verify what the merchant will see on the Admin by performing these steps:

1. Navigate to **System** > Permissions > **User Roles**.

1. Click the **Add New Role** button, then enter a value in the **Role Name** and **Your Password** fields.

1. Click on a **Role Resources** tab and select **Resource Access as Custom**.
![Resource access as custom]({{ site.baseurl }}/common/images/ext-best-practices/resource-access-custom-create-acl-rule.png)

1. Select the **Custom Menu**, **Create**, and **Delete** resources and save the role.
![Resource tree]({{ site.baseurl }}/common/images/ext-best-practices/role-resources-create-acl-rule.png)

## Step 2. Restrict access to Admin users

Now, we will restrict access on the Admin and for admin controllers.

### Restrict the menu on the Admin

In your module, create the `etc/adminhtml/menu.xml` file. This file defines a menu that will be hidden from unauthorized users. The `resource` attributes in the `add` nodes determine which resource each action accesses.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">
    <menu>
     <add id="Vendor_MyModule::menu" title="Custom Menu" module="Vendor_MyModule" sortOrder="10" resource="Vendor_MyModule::menu"/>
     <add id="Vendor_MyModule::create" title="Create" module="Vendor_MyModule" sortOrder="10" parent="Vendor_MyModule::menu" action="custommenu/create/index" resource="Vendor_MyModule::create"/>
     <add id="Vendor_MyModule::delete" title="Delete" module="Vendor_MyModule" sortOrder="20" parent="Vendor_MyModule::menu" action="custommenu/delete/index" resource="Vendor_MyModule::delete"/>
    </menu>
</config>
```

| Attribute | Description |
| --------- | ----------- |
| `id` | The value should be in the format `Vendor_ModuleName::resourceName` |
| `title` | The title displayed on the menu bar |
| `module` | Module that contains the current menu |
| `sortOrder` | A number that determines the position in which a menu option is displayed |
| `parent` | The ID of the parent menu option |
| `action` | The URL of the page to display when the merchant clicks this option. It should be in the format `front_name/controller_path/action` |
| `resource` | The resource ID to be restricted |

The example renders as follows:

![custom menu]({{ site.baseurl }}/common/images/ext-best-practices/custom_menu.png)

### Restrict admin controllers

We can restrict the access to admin controllers by overriding the `_isAllowed` method of the `\Magento\Framework\App\Action\Action` class. In this example, since we defined Create and Delete resources, we need to override this method in two places.

Add the following to your module's `Controller/Adminhtml/Create/Index.php` file:

```php
protected function _isAllowed()
{
 return $this->_authorization->isAllowed('Vendor_MyModule::create');
}
```

Add the following to your module's `Controller/Adminhtml/Delete/Index.php` file:

```php
protected function _isAllowed()
{
 return $this->_authorization->isAllowed('Vendor_MyModule::delete');
}
```

If user doesn't have permission, the action page displays an "Access Denied" message.

## Step 4. Restrict web API access

We can restrict users from accessing API endpoints by using an ACL rule. By creating a Web API configuration file (`etc/webapi.xml`), the rules defined in `acl.xml` can restrict the access to API endpoints.

```xml
<?xml version = "1.0"?>
<routes xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Webapi:etc/webapi.xsd">
    <route url="/V1/admin/create" method="POST">
        <service class="Vendor\MyModule\Api\Create" method="execute"/>
        <resources>
            <resource ref="Vendor_MyModule::create" />
        </resources>
    </route>
</routes>
```
