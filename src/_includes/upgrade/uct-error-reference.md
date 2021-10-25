## Critical issues

### Core code

These errors are reported when some of the core files are missing or do not match the original.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 2001 | Core file was not found | Run the `composer install` command from the project's root directory. |
| 2002 | Core file was modified | Run the `composer install` command from the project's root directory. |
| 2003 | Composer dependency is not installed | Missing composer dependency may potentially result in issues. Restore dependency by running `composer require package_name`. |
| 2005 | Core folder was not found | Run the `composer install` command from the project's root directory. |

### Custom code

Critical errors of custom code compatibility are raised when the custom code is referencing entities that are not present in the target {{site.data.var.ee}} version.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 1110 | Instantiating non-existent Adobe Commerce class/interface | Update code to use a class marked as `@api`. Instantiating non-existent Adobe Commerce class/interface |
| 1111 | Extending from non-existent Adobe Commerce class | The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use a class marked as `@api`. |
| 1112 | Importing non Adobe Commerce class | Update code to use a class marked as `@api`. |
| 1113 | Loading non Adobe Commerce class | Update code to use a class marked as `@api`. |
| 1114 | Using non Adobe Commerce class | Update code to use a class marked as `@api`. |
| 1214 | Using non-existent Adobe Commerce constant | Consider introducing and using a private constant of the required value within the custom code instead. |
| 1215 | Overriding non-existent Adobe Commerce constant | Consider introducing and using a private constant of the required value within the custom code instead. |
| 1216 | Assignation of non-existent Adobe Commerce constant | Consider introducing and using a private constant of the required value within the custom code instead. |
| 1312 | Imported non-existent Adobe Commerce interface | Consider removing the inheritance or replacing it with the interface introduced in the scope of the customization. |
| 1314 | Used non-existent Adobe Commerce interface | Consider removing the inheritance or replacing it with the interface introduced in the scope of the customization. |
| 1317 | Inherited non-existent Adobe Commerce interface | Consider removing the inheritance or replacing it with the interface introduced in the scope of the customization. |
| 1318 | Implemented non-existent Adobe Commerce interface | Consider removing the inheritance or replacing it with the interface introduced in the scope of the customization. |
| 1410 | Call non-existent Adobe Commerce method | Update code to use a class marked as `@api`. |
| 1514 | Using non-existent Adobe Commerce property | Update code to use a class marked as `@api`. |
| 1515 | Overriding non-existent Adobe Commerce property | Update code to use a class marked as `@api`. |
| 1516 | Assignation of non-existent Adobe Commerce property | Update code to use a class marked as `@api`. Update the property access level to private if it can be used within a single class only. |

### GraphQL Schema

GraphQL Schema critical issues are raised if the schema items are not present in the target version.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 3101 | Type was removed | List all queries that are referencing this field. Check if these queries are used by the customization implementation. Update the client code to handle the changed query interface. |
| 3102 | Type removed from union | If the union type is used in the GraphQL request constructing or response processing implementation it may need to be updated. |
| 3103 | Field removed | Check if the field is referenced in the customization codebase. Adjust the implementation to correctly handle the new field type. |
| 3105 | Implemented interface removed | Check if the type implementing the removed interface is used in the cusomization. The implementation may need to be updated if it is relying on the removed interface. |
| 3106 | Value removed from enum | If the removed enum value is used in the GraphQL request constructing or response processing implementation it may need to be updated. |
| 3107 | Argument removed | Check if the field is used in the customization codebase. Remove the argument for this field. |
| 3109 | Directive removed | Check if the directive is used in the customization codebase. Adjust the implementation to remove the reference to the directive. |
| 3110 | Directive argument removed | Check if the directive is used in the customization codebase. Remove the directive argument. |
| 3111 | Directive repeatable removed | Check if the directive is used in the customization codebase. Adjust the implementation to handle the interface changes. |
| 3112 | Directive location removed | Check if the directive is used in the customization codebase. Adjust the implementation to handle the interface changes. |
| 3201 | Type changed kind | List all queries that are referencing this field. Check if these queries are used by the customization implementation. Update the client code to handle the changed query interface. |
| 3203 | Field changed kind | Check if the field is referenced in the customization codebase. Adjust the implementation to correctly handle the new field type. |
| 3207 | Argument changed kind | Check if the field is used in the customization codebase. Update the argument type for this field. |
| 3303 | Required input field added | The field should be added to the request if the query including this field is used for the customization. |
| 3307 | Required argument added | Check if the field is used in the customization codebase. The new required argument should be specified when using the field. |
| 3310 | Required directive argument added | Check if the directive is used in the customization codebase. Add the directive argument. |

## Errors
### Non API references

Custom code errors are raised when custom code is using the Adobe Commerce entry points that are not considered/marked as `@api`. The preserved behavior of such entry points is not guaranteed. The customization should rely on `@api` entry points instead. The functionality that is based on non-API Adobe Commerce code should be tested after the upgrade.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 1104 | Using non API class that is inheriting API interface | Classes that are not marked as `@api` may be changed. Consider updating the code to rely on the interface marked as `@api` instead. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1121 | Extending from non Adobe Commerce API class | The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use a class marked as `@api`. |
| 1122 | Importing non Adobe Commerce API class | The extended class is no longer present in the codebase. Update code to use a class marked as `@api`. Otherwise, the functionality relying on this implementation should be tested after the upgrade.  |
| 1123 | Loading non Adobe Commerce API class | The extended class is no longer present in the codebase. Update code to use a class marked as `@api`. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1124 | Using non Adobe Commerce API class | The extended class is no longer present in the codebase. Update code to use a class marked as `@api`. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1224 | Using non Adobe Commerce API constant | Constants that are not marked as `@api` may be changed. Consider introducing and using a private constant of the required value within the custom code instead. |
| 1225 | Overriding non Adobe Commerce API constant | Constants that are not marked as `@api` may be changed. Consider introducing and using a private constant of the required value within the custom code instead. |
| 1226 | Assignation of non Adobe Commerce API constant | Constants that are not marked as `@api` may be changed. Consider introducing and using a private constant of the required value within the custom code instead. |
| 1322 | Imported non Adobe Commerce API interface | Interfaces not marked as `@api` may be changed. Consider removing this inheritance or replacing it with inheritance from the Adobe Commerce interface that is marked as `@api` or an interface introduced in the scope of customization code. |
| 1324 | Used non Adobe Commerce API interface | Interfaces not marked as `@api` may be changed. Consider removing this inheritance or replacing it with inheritance from the Adobe Commerce interface that is marked as `@api` or an interface introduced in the scope of customization code. |
| 1327 | Inherited non Adobe Commerce API interface | Constants that are not marked as `@api` may be changed. Consider introducing and using a private constant of the required value within the custom code instead. |
| 1328 | Implemented non Adobe Commerce API interface | Interfaces not marked as `@api` may be changed. Consider removing this inheritance or replacing it with inheritance from the Adobe Commerce interface that is marked as `@api` or an interface introduced in the scope of customization code. |
| 1420 | Instantiating non Adobe Commerce API class/interface | Classes that are not marked as `@api` may be changed. Consider updating the code to rely on the interface marked as `@api` instead. Otherwise, the functionality relying on this implementation should be tested after the upgrade. Also, the recommended way of retrieving an instance of the class is using DI. Consider using a factory if a new instance of the class is required. |
| 1428 | Possible dependency on implementation details. Usage of `%s` should be declared instead of `%s` | Classes that are not marked as `@api` may be changed. Consider updating the code to rely on the interface marked as `@api` instead. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1429 | Call non Adobe Commerce API methods | Methods that are not marked as `@api` or are not declared within API class/interface may be changed. Even if the interface of the method is not updated in the new version, its behaviour or output can be different. Consider relying on an interface method. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1449 | Call to non-interface method (that is present in implementation) | Methods that are not declared in the interface may be changed. Consider relying on an interface method. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1524 | Using non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |
| 1525 | Overriding non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |
| 1526 | Assignation of non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |

### Compatibility issues

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 5001 | Call-time pass-by-reference calls are prohibited | TODO |
| 5002 | The opening PHP tag must be the first content in the file | Put PHP opening tag in first line of file |
| 5003 | Function has been deprecated | TODO |
| 5005 | PHP syntax error | TODO |
| 5006 | Proxies and interceptors MUST never be explicitly requested in constructors | TODO |
| 5007 | The use of function sizeof() is discouraged | Use count() instead |
| 5007 | The use of function delete() is discouraged | Use unset() instead |
| 5008 | Possible Magento 2 design violation. Detected typical Magento 1.x construction | TODO |
| 5009 | Template directives may not invoke methods. Only scalar array access is allowed | TODO |
| 5010 | Template @vars comment block contains invalid JSON | Fix invalid JSON |
| 5011 | Template @vars comment block contains invalid label | Fix invalid label |
| 5012 | Template @vars comment block is missing a variable used in the template | TODO |
| 5013 | Avoid using self-closing tag with non-void html element | |
| 5014 | The "active" attribute is obsolete. The list of active modules is defined in deployment configuration | TODO |
| 5015 | The <param> node is obsolete | Use <argument name="..." xsi:type="..."> instead |
| 5015 | The <instance> node is obsolete | Use <argument name="..." xsi:type="object"> instead |
| 5015 | The <array> node is obsolete | Use <argument name="..." xsi:type="array"> instead |
| 5015 | The <item key="..."> node is obsolete | Use <item name="..." xsi:type="..."> instead |
| 5015 | The <value> node is obsolete | Instead, provide the actual value as a text literal. |
| 5016 | Obsolete node: <supported_blocks> | To be replaced with <supported_containers> |
| 5016 | Obsolete node: <block_name> | To be replaced with <container_name> |
| 5017 | Factory name detected | TODO |
| 5018 | Obsolete ACL structure detected in line | TODO |
| 5019 | Obsolete menu structure detected in line | TODO |
| 5020 | Obsolete system configuration structure detected in file | TODO |
| 5021 | Please do not use "jquery/ui" library in templates | Use needed jquery ui widget instead |
| 5021 | Please do not initialize JS component in PHP | initialize JS component in template |
| 5021 | Access to protected and private members of Block class is obsolete in phtml templates | Use only public members |
| 5021 | Access to members and methods of Block class through $this is obsolete in phtml templates | Use only $block instead of $this |
| 5021 | Please do not use "text/javascript" type attribute | Use only public members |
| 5022 | Contains obsolete method '_getReadConnection' | Please use getConnection method instead. |
| 5022 | Contains obsolete method '_getWriteConnection' | Please use getConnection method instead. |
| 5022 | Contains obsolete method '_getReadAdapter' | Please use getConnection method instead. |
| 5022 | Contains obsolete method '_getWriteAdapter' | Please use getConnection method instead. |
| 5022 | Contains obsolete method 'getReadConnection' | Please use getConnection method instead. |
| 5022 | Contains obsolete method 'getWriteConnection' | Please use getConnection method instead. |
| 5022 | Contains obsolete method 'getReadAdapter' | Please use getConnection method instead. |
| 5022 | Contains obsolete method 'getWriteAdapter' | Please use getConnection method instead. |
| 5023 | loadLayout method is deprecated | Please use \Magento\Framework\View\Layout\Builder::build instead. |
| 5023 | renderLayout method is deprecated | Please use \Magento\Framework\Controller\ResultInterface::renderResult instead. |
| 5023 | _redirect method is deprecated | Please use \Magento\Backend\Model\View\Result\Redirect::render instead. |
| 5023 | _forward method is deprecated | Please use \Magento\Backend\Model\View\Result\Forward::forward instead. |
| 5023 | _setActiveMenu method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::setActiveMenu instead. |
| 5023 | _addBreadcrumb method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::addBreadcrumb instead. |
| 5023 | _addContent method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::addContent instead. |
| 5023 | _addLeft method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::addLeft instead. |
| 5023 | _addJs method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::addJs instead |
| 5023 | _moveBlockToContainer method is deprecated | Please use \Magento\Backend\Model\View\Result\Page::moveBlockToContainer instead. |
| 5024 | Incorrect format of PHP class reference | TODO |
| 5025 | Incorrect format of module reference | TODO |
| 5026 | Class 'Zend_Db_Select' is restricted | Suggested replacement: \Magento\Framework\DB\Select |
| 5026 | Class 'Zend_Db_Adapter_Pdo_Mysql' is restricted | Suggested replacement: \Magento\Framework\DB\Adapter\Pdo\Mysql |
| 5026 | Class 'Magento\Framework\Serialize\Serializer\Serialize' is restricted | Suggested replacement: Magento\Framework\Serialize\SerializerInterface |
| 5026 | Class 'ArrayObject' is restricted | Suggested replacement: Custom class, extended from ArrayObject with overwritten serialize/unserialize methods |
| 5026 | Class 'Magento\Framework\View\Element\UiComponent\ArrayObjectFactory' is restricted | Suggested replacement: Factory that creates custom class, extended from ArrayObject with overwritten serialize/unserialize methods |
| 5027 | Blocks \Magento\Theme\Block\Html\Head\{Css,Link,Script} are allowed within the "head" block only | Verify integrity of the nodes nesting |
| 5028 | The block being referenced is removed | Remove reference to block |
| 5028 | output="toHtml" is obsolete | Use output="1" |
| 5029 | The class \Magento\Framework\View\Element\Text\ListText' is not supposed to be used in layout anymore | TODO |
| 5030 | Call of method "xx" via layout instruction <action> is not allowed | TODO |
| 5031 | 'helper' attribute contains '/' | Remove '/' from helper attribute |
| 5032 | 'helper' attribute does not contain '::' | Add '::' to helper attribute |
| 5033 | Install scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5033 | InstallSchema scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5033 | InstallData scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5033 | Install scripts are obsolete | Please create class InstallData in module\'s Setup folder |
| 5033 | Upgrade scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5033 | UpgradeSchema scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5033 | UpgradeData scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5033 | Upgrade scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5033 | Recurring scripts are obsolete | Please create class Recurring in module\'s Setup folder |
| 5033 | 'data' is in an invalid directory | Create a data patch within module's Setup/Patch/Data folder for data upgrades or use declarative schema approach in module's etc/db_schema.xml file for schema changes. |
| 5033 | 'sql' is in an invalid directory | Create a data patch within module's Setup/Patch/Data folder for data upgrades or use declarative schema approach in module's etc/db_schema.xml file for schema changes. |
| 5034 | Nodes identified by XPath '/config/global/fieldsets' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/cache/betatypes' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/admin/fieldsets' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/general/locale' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\Locale\ConfigInterface |
| 5034 | Nodes identified by XPath '/config/global/can_use_base_url' are obsolete | This configuration has been moved to DI configuration of \Magento\Backend\App\Action\Context class |
| 5034 | Nodes identified by XPath '/config/global/locale/allow/codes' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\Locale\ConfigInterface |
| 5034 | Nodes identified by XPath '/config/global/locale/allow/currencies' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\Locale\ConfigInterface |
| 5034 | Nodes identified by XPath '/config/global/mime/types' are obsolete | This configuration has been moved to DI configuration for \Magento\Downloadable\Helper\File class |
| 5034 | Nodes identified by XPath '/config/global/models/*/deprecatedNode' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/models/*/entities/*/table' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/models/*/class' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/helpers/*/class' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/blocks/*/class' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/models/*/resourceModel' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/page/layouts' are obsolete | Moved to page_layouts.xml |
| 5034 | Nodes identified by XPath '/config/global/cms/layouts' are obsolete | This was never used and is no longer supported |
| 5034 | Nodes identified by XPath '/config/global/payment/cc/types/*/validator' are obsolete | This configuration was moved to DI configuration of \Magento\Centinel\Model\StateFactory |
| 5034 | Nodes identified by XPath '/config/global/payment' are obsolete | Move them to payment.xml. |
| 5034 | Nodes identified by XPath '/config/adminhtml/menu' are obsolete | Move them to adminhtml.xml. |
| 5034 | Nodes identified by XPath '/config/adminhtml/acl' are obsolete | Move them to adminhtml.xml. |
| 5034 | Nodes identified by XPath '/config/adminhtml/global_search' are obsolete | This configuration has been moved to DI configuration of \Magento\Backend\Controller\Index |
| 5034 | Nodes identified by XPath '/config/*[self::global|self::adminhtml|self::frontend]/di' are obsolete | This configuration has been moved to DI.xml file |
| 5034 | Nodes identified by XPath '/config/*[self::global|self::adminhtml|self::frontend]/events' are obsolete | This configuration moved to events.xml file |
| 5034 | Nodes identified by XPath '/config/*[self::global|self::adminhtml|self::frontend]/routers' are obsolete | outers list can be set through Di configuration of \Magento\Framework\App\RouterList model |
| 5034 | Nodes identified by XPath '/config/global/importexport' are obsolete | This configuration moved to import.xml and export.xml files |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/type' are obsolete | This configuration moved to product_types.xml file |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/options' are obsolete | This configuration moved to product_options.xml file |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/media/image_types' are obsolete | This configuration has been moved to DI configuration of \Magento\Backend\Block\Catalog\Product\Frontend\Product\Watermark |
| 5034 | Nodes identified by XPath '/config/global/eav_attributes' are obsolete | This configuration moved to eav_attributes.xml file |
| 5034 | Nodes identified by XPath '/config/global/index' are obsolete | This configuration moved to indexers.xml file |
| 5034 | Nodes identified by XPath '/config/global/catalogrule' are obsolete | This configuration has been moved to DI configuration of \Magento\CatalogRule\Model\Rule |
| 5034 | Nodes identified by XPath '/config/global/salesrule' are obsolete| This configuration has been moved to DI configuration of \Magento\SalesRule\Helper\Coupon |
| 5034 | Nodes identified by XPath '/config/global/session' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\Session\Validator |
| 5034 | Nodes identified by XPath '/config/global/ignore_user_agents' are obsolete | This configuration has been moved to DI configuration of \Magento\Log\Model\Visitor |
| 5034 | Nodes identified by XPath '/config/global/request' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\App\RequestInterface |
| 5034 | Nodes identified by XPath '/config/global/secure_url' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\Url\SecurityInfo |
| 5034 | Nodes identified by XPath '/config/global/dev' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\App\Action\Context |
| 5034 | Nodes identified by XPath '/config/global/webapi' are obsolete | This configuration has been moved to DI configuration of \Magento\Webapi\Controller\Request\Rest\Interpreter\Factory' and \Magento\Webapi\Controller\Response\Rest\Renderer\Factory |
| 5034 | Nodes identified by XPath '/config/global/cms' are obsolete | This configuration has been moved to DI configuration of \Magento\Cms\Model\Wysiwyg\Images\Storage' .' and \Magento\Cms\Model\Wysiwyg\Config |
| 5034 | Nodes identified by XPath '/config/global/widget' are obsolete | This configuration has been moved to DI configuration of \Magento\Cms\Model\Template\FilterProvider |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/flat/max_index_count' are obsolete | This configuration has been moved to DI configuration of '.'\Magento\Catalog\Model\ResourceModel\Product\Flat\Indexer |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/flat/attribute_groups' are obsolete | This configuration has been moved to DI configuration of '.'\Magento\Catalog\Model\ResourceModel\Product\Flat\Indexer |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/flat/add_filterable_attributes' are obsolete | This configuration has been moved to DI configuration of \Magento\Catalog\Helper\Product\Flat\Indexer |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/flat/add_child_data' are obsolete | This configuration has been moved to DI configuration of \Magento\Catalog\Helper\Product\Flat\Indexer |
| 5034 | Nodes identified by XPath '/config/global/catalog/content/template_filter' are obsolete | This configuration has been moved to DI configuration of \Magento\Catalog\Helper\Data |
| 5034 | Nodes identified by XPath '/config/frontend/catalog/per_page_values/list' are obsolete | This configuration has been moved to DI configuration of \Magento\Catalog\Model\Config\Source\ListPerPage |
| 5034 | Nodes identified by XPath '/config/frontend/catalog/per_page_values/grid' are obsolete | This configuration has been moved to DI configuration of \Magento\Catalog\Model\Config\Source\GridPerPage |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/design' are obsolete | This configuration has been moved to DI configuration of' .' \Magento\Catalog\Model\Entity\Product\Attribute\Design\Option\Container |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/attributes' are obsolete | This configuration moved catalog_attributes.xml |
| 5034 | Nodes identified by XPath '/config/global/eav_frontendclasses' are obsolete | This configuration was removed. ' .'Please pluginize \Magento\Eav\Helper\Data::getFrontendClasses to extend frontend classes list |
| 5034 | Nodes identified by XPath '/config/global/resources' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\App\ResourceConnection |
| 5034 | Nodes identified by XPath '/config/global/resource' are obsolete | This configuration has been moved to DI configuration of \Magento\Framework\App\ResourceConnection |
| 5034 | Nodes identified by XPath '/config/*/events/core_block_abstract_to_html_after' are obsolete | Event has been replaced with "core_layout_render_element" |
| 5034 | Nodes identified by XPath '/config/*/events/catalog_controller_product_delete' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config//observers/*/args' are obsolete | This was an undocumented and unused feature in event subscribers |
| 5034 | Nodes identified by XPath '/config/default/design/theme' are obsolete | Relocated to /config/<area>/design/theme |
| 5034 | Nodes identified by XPath '/config/global/theme' are obsolete | Configuration moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/default/web/*/base_js_url' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/default/web/*/base_skin_url' are obsolete | /config/default/web/*/base_static_url |
| 5034 | Nodes identified by XPath '/config/default/web/*/base_cache_url' are obsolete | /config/default/web/*/base_static_url |
| 5034 | Nodes identified by XPath '/config/global/cache/types/*/tags' are obsolete | use /config/global/cache/types/*/class node instead |
| 5034 | Nodes identified by XPath '/config/global/disable_local_modules' are obsolete | TODO |
| 5034 | Nodes identified by XPath '/config/global/newsletter/tempate_filter' are obsolete | Use DI configs to setup model for template processing |
| 5034 | Nodes identified by XPath '/config/*/layout' are obsolete | Use convention for layout files placement instead of configuration |
| 5034 | Nodes identified by XPath '/config/frontend/product/collection/attributes' are obsolete | Use /config/group[@name="catalog_product"] of catalog_attributes.xml |
| 5034 | Nodes identified by XPath '/config/frontend/category/collection/attributes' are obsolete | Use /config/group[@name="catalog_category"] of catalog_attributes.xml |
| 5034 | Nodes identified by XPath '/config/global/sales/quote/item/product_attributes' are obsolete | Use /config/group[@name="quote_item"] of catalog_attributes.xml |
| 5034 | Nodes identified by XPath '/config/global/wishlist/item/product_attributes' are obsolete | Use /config/group[@name="wishlist_item"] of catalog_attributes.xml |
| 5034 | Nodes identified by XPath '/config/global/catalog/product/flat/attribute_nodes' are obsolete | Use /config/global/catalog/product/flat/attribute_groups |
| 5034 | Nodes identified by XPath '/config/global/customer/address/formats' are obsolete | Use /config/format of address_formats.xml |
| 5034 | Nodes identified by XPath '/config/global/pdf' are obsolete | Use configuration in pdf.xml |
| 5034 | Nodes identified by XPath '/config/install' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/install/design' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/adminhtml/design' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/frontend/design' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/crontab' are obsolete | All cron configurations moved to crontab.xml |
| 5034 | Nodes identified by XPath '/config/global/areas' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/vde' are obsolete | Was moved to di |
| 5034 | Nodes identified by XPath '/config/global/ignoredModules' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/global/helpers' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/global/external_cache' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/global/currency/import/services' are obsolete | Configurations moved to DI file settings |
| 5034 | Nodes identified by XPath '/config/global/template' are obsolete | Use /config/template of email_templates.xml |
| 5034 | Nodes identified by XPath '/config/default/general/file/sitemap_generate_valid_paths' are obsolete | /config/default/sitemap/file/valid_paths |
| 5034 | Nodes identified by XPath '/config/dev/css/minify_adapter' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/dev/js/minify_adapter' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/global/full_page_cache' are obsolete | /config/global/cache_advanced/full_page |
| 5034 | Nodes identified by XPath '/config/adminhtml/enterprise/admingws' are obsolete | This configuration moved to admingws.xml file |
| 5034 | Nodes identified by XPath '/config/adminhtml/enterprise/websiterestriction' are obsolete | This configuration moved to websiterestrictions.xml file |
| 5034 | Nodes identified by XPath '/config/global/enterprise_cms' are obsolete | This configuration moved to menu_hierarchy.xml file |
| 5034 | Nodes identified by XPath '/config/global/enterprise/banner' are obsolete | This configuration has been moved to DI configuration of \Magento\Banner\Model\Config |
| 5034 | Nodes identified by XPath '/config/global/enterprise/giftcardaccount' are obsolete | This configuration has been moved to DI configuration of \Magento\GiftCardAccountModelPool |
| 5034 | Nodes identified by XPath '/config/global/skip_process_modules_updates' are obsolete | Was replaced using DI |
| 5034 | Nodes identified by XPath '/config/system/page_cache' are obsolete | Module is eliminated. Use PageCache module instead |
| 5034 | Nodes identified by XPath '/config/system/cms/content/versioning' are obsolete | Functionality is eliminated |
| 5035 | Directive {{htmlescape}} is obsolete | Use {{var}} instead |
| 5035 | Directive {{escapehtml}} is obsolete | Use {{var}} instead |
| 5036 | 3rd parameter is not needed anymore for getChildHtml() | Remove 3rd parameter from call to getChildHtml() |
| 5036 | 4th parameter is not needed anymore for getChildHtml() | Remove 4th parameter from call to getChildHtml() |
| 5037 | Possible Magento 2 design violation. Detected typical Magento 1.x construction | TODO |
| 5038 | Legacy table names with slash must be fixed to direct table names | Use direct table name instead |
| 5039 | The use of the deprecated method 'getResource()' to (save|load|delete) the data detected. | TODO |
| 5040 | Application modules should not use classes from test modules | Remove usage of classes from test modules |
| 5041 | Cannot use "int" in namespace as it is reserved since PHP 7 | Remove usage of "int" from namespace |
| 5041 | Cannot use "float" in namespace as it is reserved since PHP 7 | Remove usage of "float" from namespace |
| 5041 | Cannot use "bool" in namespace as it is reserved since PHP 7 | Remove usage of "bool" from namespace |
| 5041 | Cannot use "string" in namespace as it is reserved since PHP 7 | Remove usage of "string" from namespace |
| 5041 | Cannot use "true" in namespace as it is reserved since PHP 7 | Remove usage of "true" from namespace |
| 5041 | Cannot use "false" in namespace as it is reserved since PHP 7 | Remove usage of "false" from namespace |
| 5041 | Cannot use "null" in namespace as it is reserved since PHP 7 | Remove usage of "null" from namespace |
| 5041 | Cannot use "void" in namespace as it is reserved since PHP 7 | Remove usage of "void" from namespace |
| 5041 | Cannot use "iterable" in namespace as it is reserved since PHP 7 | Remove usage of "iterable" from namespace |
| 5041 | Cannot use "resource" in namespace as it is reserved since PHP 7 | Remove usage of "resource" from namespace |
| 5041 | Cannot use "object" in namespace as it is reserved since PHP 7 | Remove usage of "object" from namespace |
| 5041 | Cannot use "mixed" in namespace as it is reserved since PHP 7 | Remove usage of "mixed" from namespace |
| 5041 | Cannot use "numeric" in namespace as it is reserved since PHP 7 | Remove usage of "numeric" from namespace |
| 5042 | Cannot use "int" as class name as it is reserved since PHP 7 | Remove usage of "int" from class name |
| 5042 | Cannot use "float" as class name as it is reserved since PHP 7 | Remove usage of "float" from class name |
| 5042 | Cannot use "bool" as class name as it is reserved since PHP 7 | Remove usage of "bool" from class name |
| 5042 | Cannot use "string" as class name as it is reserved since PHP 7 | Remove usage of "string" from class name |
| 5042 | Cannot use "true" as class name as it is reserved since PHP 7 | Remove usage of "true" from class name |
| 5042 | Cannot use "false" as class name as it is reserved since PHP 7 | Remove usage of "false" from class name |
| 5042 | Cannot use "null" as class name as it is reserved since PHP 7 | Remove usage of "null" from class name |
| 5042 | Cannot use "void" as class name as it is reserved since PHP 7 | Remove usage of "void" from class name |
| 5042 | Cannot use "iterable" as class name as it is reserved since PHP 7 | Remove usage of "iterable" from class name |
| 5042 | Cannot use "resource" as class name as it is reserved since PHP 7 | Remove usage of "resource" from class name |
| 5042 | Cannot use "object" as class name as it is reserved since PHP 7 | Remove usage of "object" from class name |
| 5042 | Cannot use "mixed" as class name as it is reserved since PHP 7 | Remove usage of "mixed" from class name |
| 5042 | Cannot use "numeric" as class name as it is reserved since PHP 7 | Remove usage of "numeric" from class name |
| 5043 | Class needs to be requested in constructor, otherwise compiler will not be able to find and generate these classes | TODO |
| 5044 | Use of var class variables is discouraged | TODO |
| 5045 | Possible raw SQL statement %s detected | TODO |
| 5046 | The use of helpers in templates is discouraged | Use ViewModel instead |
| 5047 | The use of $this in templates is deprecated | Use $block instead |
| 5048 | Constants are not allowed as the first argument of translation function | use string literal instead |

## Warnings

### Core code

These warnings are reported when there are minor inconsistencies in the core codebase.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 2004 | Composer dependency version mismatch | Issue indicates that composer depency version in etalon and actual project is different. Update dependency by running `composer update <package_name>`. |

### Custom code

Custom code warnings are raised when the references to deprecated code are detected. Such references should be replaced with the supported extension points. Pay attention to the `@see` annotation of deprecated item for recommendations.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 1131 | Extending from Adobe Commerce ``@deprecated`` class | The extended class will be removed in upcoming versions. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use a class marked as `@api`. |
| 1132 | Importing Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Consider using Adobe Commerce class marked as `@api` instead. |
| 1133 | Loading Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Consider using Adobe Commerce class marked as `@api` instead. |
| 1134 | Using Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Consider using Adobe Commerce class marked as `@api` instead. |
| 1234 | Using Adobe Commerce `@deprecated` constant | The deprecated constant will be removed in upcoming versions. Consider using a constant marked as `@api` or a private constant within your implementation instead. |
| 1235 | Overriding Adobe Commerce `@deprecated` constant | The deprecated constant will be removed in upcoming versions. Consider using a constant marked as `@api` or a private constant within your implementation instead. |
| 1236 | Assignation of Adobe Commerce `@deprecated` constant | The deprecated constant will be removed in upcoming versions. Consider using a constant marked as `@api` or a private constant within your implementation instead. |
| 1332 | Imported Adobe Commerce `@deprecated` interface | The  deprecated interface will be removed in upcoming versions. Consider using an interface or class marked as `@api` instead. |
| 1334 | Used Adobe Commerce `@deprecated` interface | The  deprecated interface will be removed in upcoming versions. Consider using an interface or class marked as `@api` instead. |
| 1337 | Inherited from Adobe Commerce `@deprecated` interface | The deprecated interface will be removed in upcoming versions. Consider removing the interface inheritance, using an interface marked as `@api` or an interface introduced within your implementation instead. |
| 1338 | Implemented Adobe Commerce `@deprecated` interface | The deprecated interface will be removed in upcoming versions. Consider removing the interface inheritance, using an interface marked as `@api` or an interface introduced within your implementation instead. |
| 1430 | Call not declared dataobject method | The magic methods that are not declared may be changed. Consider relying on interface methods instead. |
| 1439 | Call Adobe Commerce `@deprecated` method | The deprecated method will be removed in upcoming versions. Consider relying on methods declared in API interfaces instead. |
| 1534 | Using Adobe Commerce `@deprecated` property | The deprecated method will be removed in upcoming versions. Consider relying on methods declared in API interfaces instead. |
| 1535 | Overriding Adobe Commerce `@deprecated` property | The deprecated property will be removed in upcoming versions. Consider relying on methods declared in API interfaces or using a private property within your implementation instead. |
| 1536 | Assignation of Adobe Commerce `@deprecated` property | The deprecated method will be removed in upcoming versions. Consider relying on methods declared in API interfaces instead. |

### GraphQL Schema

GraphQL Schema warnings are raised when the additional items are added to the schema in the new version. It is recommended to review the implementation to see if they should be used for requests.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 3206 | Argument default value changed | If the query is used in the customization the argument value may have to be specified explicitly. |
| 3302 | Type added to union | The type was added to the union. Check the implementation processing the result of the query returning this union type and ensure it is able to handle the added type. |
| 3304 | Optional input field added | Optional input field added. Check the implementation to ensure. |
| 3305 | Implemented interface added | The field can accept/provide more information that can be considered in the implementation. |
| 3306 | Value added to enum | A value was added to an enum. If clients contain a switch statement on the enum's value and do not include a default case, this change might cause unexpected behavior. |
| 3308 | Optional argument added | If the query is using a new argument in the customization it may need to be added to the request. |
