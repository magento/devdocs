---
group: extension-best-practices
title: Create Access Control List(ACL) Rule
contributor_name: Ziffity
contributor_link: https://www.Ziffity.com/
---

Access Control List(ACL) rules allows admin to limit the permissions of users in Magento. We can use ACL rules for authorize the users to access menu and controllers.

## Step 1. Create acl.xml

> `etc/acl.xml`

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

##Step 2. Create user role with custom resources

1. Navigate to **SYSTEM** > Permissions > **User Roles** 
1. After click Role Resources tab select Resource Access as Custom.
![Resource access as custom]({{ site.baseurl }}/common/images/ext-best-practices/resource-access-custom-create-acl-rule.png)
1. Select the resources and save the role.
![Resource tree]({{ site.baseurl }}/common/images/ext-best-practices/role-resources-create-acl-rule.png)

##Step 3. Use ACL in Menu and Controllers

Admin menu:

We can hide the menu to the users by adding the `resource` attribute to `add` nodes in menu.xml.

> `etc/adminhtml/menu.xml`

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
Admin controllers:

We can restrict the access to admin controllers by overriding the `_isAllowed` method of \Magento\Framework\App\Action\Action class.

> `Controller/Adminhtml/Create/Index.php`

```php
protected function _isAllowed()
{
 return $this->_authorization->isAllowed('Vendor_MyModule::create');
}
```

> `Controller/Adminhtml/Delete/Index.php`

```php
protected function _isAllowed()
{
 return $this->_authorization->isAllowed('Vendor_MyModule::delete');
}
```


If user doesn't have permission, the action page will be like below.

![Not allowed user action page]({{ site.baseurl }}/common/images/ext-best-practices/not_allowed_users_create_acl_rule.png)


