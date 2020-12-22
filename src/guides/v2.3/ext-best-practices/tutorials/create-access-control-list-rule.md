---
group: extension-best-practices
title: Creating an Access Control List (ACL) rule
contributor_name: Ziffity
contributor_link: https://www.Ziffity.com/
---

Access Control List (ACL) rules allow an admin to limit the permissions of users in Magento. For example, you can use ACL rules to authorize the users to access menus, controllers, API endpoints and conditionally render [layout](https://glossary.magento.com/layout) [blocks](https://glossary.magento.com/block).

In this tutorial, we are creating four custom resources (Custom Menu, Create, Delete, View), then creating a role that has access to these resources, and taking steps to restrict access by four entities (Admin users, controllers, web APIs and layout block).

## Step 1. Define the custom resources

1. Create the `etc/acl.xml` file in your module. This file adds the custom resources in resource tree.

   ```xml
   <?xml version="1.0"?>
   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Acl/etc/acl.xsd">
      <acl>
        <resources>
           <resource id="Magento_Backend::admin">
              <resource id="Vendor_MyModule::menu" title="Custom Menu" sortOrder="10" >
                 <resource id="Vendor_MyModule::create" title="Create" sortOrder="50" />
                 <resource id="Vendor_MyModule::delete" title="Delete" sortOrder="100" />
                 <resource id="Vendor_MyModule::view" title="View" sortOrder="150">
                    <resource id="Vendor_MyModule::view_additional" title="View Additional Information" sortOrder="10" />
                 </resource>
              </resource>
           </resource>
        </resources>
      </acl>
   </config>
   ```

   | Attribute | Description |
   | --------- | ----------- |
   | `id` | Unique string. Should be in the format `Vendor_ModuleName::resourceName` |
   | `title` | Title which is displayed in the menu bar |
   | `sortOrder` | Position in which menu is displayed |

1. Clean the cache by clicking **System** > **Cache Management** > **Flush Magento Cache** or by entering the following command:

   ```bash
   bin/magento cache:clean
   ```

1. Navigate to **System** > Permissions > **User Roles**.

1. After clicking the **Add New Role** button, enter values for **Role Name** and **Your Password**.

1. Then, click a Role Resources tab and select **Resource Access as Custom**.

   ![Resource access as custom]({{ site.baseurl }}/common/images/ext-best-practices/resource-access-custom-create-acl-rule.png)

1. Select the **Custom Menu**, **Create**, and **Delete** resources and save the role.

   ![Resource tree]({{ site.baseurl }}/common/images/ext-best-practices/role-resources-create-acl-rule.png)

## Step 2. Restrict access to Admin users

### Restrict the admin menu

In your module, create the `etc/adminhtml/menu.xml` file. This file defines a menu that will be hidden from unauthorized users. The `resource` attributes in the `add` nodes determine which resource each action accesses.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">
    <menu>
     <add id="Vendor_MyModule::menu" title="Custom Menu" module="Vendor_MyModule" sortOrder="10" resource="Vendor_MyModule::menu"/>
     <add id="Vendor_MyModule::create" title="Create" module="Vendor_MyModule" sortOrder="10" parent="Vendor_MyModule::menu" action="custommenu/create/index" resource="Vendor_MyModule::create"/>
     <add id="Vendor_MyModule::delete" title="Delete" module="Vendor_MyModule" sortOrder="20" parent="Vendor_MyModule::menu" action="custommenu/delete/index" resource="Vendor_MyModule::delete"/>
     <add id="Vendor_MyModule::view" title="View" module="Vendor_MyModule" sortOrder="30" parent="Vendor_MyModule::menu" action="custommenu/view/index" resource="Vendor_MyModule::view"/>
    </menu>
</config>
```

| Attribute | Description |
| --------- | ----------- |
| `id` | Unique string. Should be in the format: `Vendor_ModuleName::resourceName` |
| `title` | Title which is displayed in menu bar|
| `module` | Module which containing the current menu |
| `sortOrder` | Position in which menu to be displayed |
| `parent` | The another menu which is parent of current menu |
| `action` | Url of the page which needs to be displayed after clicking the menu. It should be in following format: `front_name/controller_path/action` |
| `resource` | ACL rule to restrict the access |

Clean the cache by clicking **System** > **Cache Management** > **Flush Magento Cache** or by entering the following command:

```bash
bin/magento cache:clean
```

The menu displays as follows:

![custom menu]({{ site.baseurl }}/common/images/ext-best-practices/custom_menu.jpg)

### Restrict admin controllers

We can restrict the access to admin controllers by overriding the `_isAllowed` method of the `\Magento\Framework\App\Action\Action` class.

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

If the user does not have permission, the action page displays an "Access Denied" message.

### Content restrictions for admin users

With the ACL it is also possible to [render layout blocks dynamically]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#ref_config_block) on the page.

It is enough to set the block's value for `aclResource` attribute:

```xml
<block class="Vendor\MyModule\Block\Adminhtml\Type" name="block.example" aclResource="Vendor_MyModule::view_additional">
    <!-- ... -->
</block>
```

The `view/adminhtml/layout/custommenu_view_index.xml` example file below contains two blocks that display information to the end-user, one of which is accessible only to users with ACL `Vendor_MyModule::view_additional` permissions.

```xml
<?xml version="1.0"?>
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <referenceBlock name="page.title">
        <action method="setPageTitle">
            <argument name="title" xsi:type="string">View</argument>
        </action>
    </referenceBlock>
    <body>
        <referenceContainer name="content">
            <block class="Magento\Framework\View\Element\Text">
                <arguments>
                    <argument name="text" xsi:type="string">Page Content </argument>
                </arguments>
            </block>
            <block class="Magento\Framework\View\Element\Text" aclResource="Vendor_Module::view_additional">
                <arguments>
                    <argument name="text" xsi:type="string"> - additional</argument>
                </arguments>
            </block>
        </referenceContainer>
    </body>
</page>
```

When the ACL resource for `Vendor_ModuleName::view_additional` is enabled, the result is:

![admin page full content]({{ site.baseurl }}/common/images/ext-best-practices/acl-admin-page-content-full-access.jpg)

When the ACL resource is disabled, the content on the page differs:

![admin page content limited]({{ site.baseurl }}/common/images/ext-best-practices/acl-admin-limited-page-content.jpg)

## Step 3. Restrict web API access

We can restrict users from accessing API endpoints by using the ACL rule. By creating a Web API configuration file (`etc/webapi.xml`), the rules defined in `acl.xml` can restrict the access to API endpoints.

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

### Related topics

*  [Creating a Magento admin page]({{ page.baseurl }}/ext-best-practices/extension-coding/example-module-adminpage.html)

*  [Authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication.html)

*  [Layout block dynamic visibility using ACL Resource]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#ref_config_block)
