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
| 1112 | Importing non existing Adobe Commerce class | Update code to use a class marked as `@api`. |
| 1113 | Loading non existing Adobe Commerce class | Update code to use a class marked as `@api`. |
| 1114 | Using non existing Adobe Commerce class | Update code to use a class marked as `@api`. |
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
| 1122 | Importing non Adobe Commerce API class | The extended class is no longer present in the codebase. Update code to use a class marked as `@api`. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
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
| 1428 | Possible dependency on implementation details. | Classes that are not marked as `@api` may be changed. Consider updating the code to rely on the interface marked as `@api` instead. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1429 | Call non Adobe Commerce API methods | Methods that are not marked as `@api` or are not declared within API class/interface may be changed. Even if the interface of the method is not updated in the new version, its behaviour or output can be different. Consider relying on an interface method. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1449 | Call to non-interface method (that is present in implementation) | Methods that are not declared in the interface may be changed. Consider relying on an interface method. Otherwise, the functionality relying on this implementation should be tested after the upgrade. |
| 1524 | Using non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |
| 1525 | Overriding non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |
| 1526 | Assignation of non Adobe Commerce API property | Values of the properties that are not marked as `@api` may be changed. Consider relying on the API interface method instead. |

### Compatibility issues

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 5001 | Call-time pass-by-reference calls are prohibited | Passing by reference is not supported after PHP 5.6 |
| 5002 | The opening PHP tag must be the first content in the file | Ensure there is no content in the file before the PHP opening tag |
| 5003 | Function has been deprecated | Please use a replacement suggested in the error message. If the message does not provide the replacement suggestion, this case requires a close review to select an alternative safe function or implementation |
| 5005 | PHP syntax error | The code requires to be updated to comply with the PHP interpretation |
| 5006 | Proxies and interceptors MUST never be explicitly requested in constructors | The original class should be declared as a type of the constructor parameter, the Interceptor/Proxy class will be passed by the framework dependency injection implemtation |
| 5007 | The use of function `sizeof()` is discouraged | Use `count()` instead |
| 5007 | The use of function `delete()` is discouraged | Use `unset()` instead |
| 5008 | Possible Magento 2 design violation. Detected typical Magento 1.x construction | The code requires review and refactoring. Magento 1 constructions may no longer be supported by Magento 2 framework. |
| 5009 | Template directives may not invoke methods. Only scalar array access is allowed | Remove method invocations from template |
| 5010 | Template `@vars` comment block contains invalid JSON | Fix invalid JSON |
| 5011 | Template `@vars` comment block contains invalid label | Fix invalid label |
| 5012 | Template `@vars` comment block is missing a variable used in the template | Add missing variable to @vars comment block |
| 5013 | Avoid using self-closing tag with non-void html element | Use close tag instead |
| 5014 | The `"active"` attribute is obsolete | The list of active modules is defined in deployment configuration |
| 5015 | The `<param>` node is obsolete | Use `<argument name="..." xsi:type="...">` instead |
| 5016 | The `<instance>` node is obsolete | Use `<argument name="..." xsi:type="object">` instead |
| 5017 | The `<array>` node is obsolete | Use `<argument name="..." xsi:type="array">` instead |
| 5018 | The `<item key="...">` node is obsolete | Use `<item name="..." xsi:type="...">` instead |
| 5019 | The `<value>` node is obsolete | Instead, provide the actual value as a text literal. |
| 5020 | Obsolete node: `<supported_blocks>` | To be replaced with `<supported_containers>` |
| 5021 | Obsolete node: `<block_name>` | To be replaced with `<container_name>` |
| 5022 | Factory name detected | Widget type should not begin with / |
| 5023 | Obsolete ACL structure detected in line | Check lib/internal/Magento/Framework/Acl/etc/acl.xsd |
| 5024 | Obsolete menu structure detected in line | Check app/code/Magento/Backend/etc/menu.xsd |
| 5025 | Obsolete system configuration structure detected in file | Check app/code/Magento/Config/etc/system_file.xsd |
| 5026 | Please do not use `"text/javascript"` type attribute | Use only public members |
| 5027 | Access to members and methods of Block class through $this is obsolete in phtml templates | Use only `$block` instead of `$this` |
| 5028 | Access to protected and private members of `Block` class is obsolete in phtml templates | Use only public members |
| 5029 | Please do not use `"jquery/ui"` library in templates | Use needed jquery ui widget instead |
| 5030 | Please do not initialize JS component in PHP | initialize JS component in template |
| 5031 | Contains obsolete method `xx` | Please use `getConnection()` method instead. |
| 5032 | `loadLayout` method is deprecated | Please use `\Magento\Framework\View\Layout\Builder::build` instead. |
| 5033 | `renderLayout` method is deprecated | Please use `\Magento\Framework\Controller\ResultInterface::renderResult` instead. |
| 5034 | `_redirect` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Redirect::render` instead. |
| 5035 | `_forward` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Forward::forward` instead. |
| 5036 | `_setActiveMenu` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::setActiveMenu` instead. |
| 5037 | `_addBreadcrumb` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::addBreadcrumb` instead. |
| 5038 | `_addContent` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::addContent` instead. |
| 5039 | `_addLeft` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::addLeft` instead. |
| 5040 | `_addJs` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::addJs` instead |
| 5041 | `_moveBlockToContainer` method is deprecated | Please use `\Magento\Backend\Model\View\Result\Page::moveBlockToContainer` instead. |
| 5042 | Incorrect format of PHP class reference | Check that class is referenced using only camelCased letters, numbers and no leading slash |
| 5043 | Incorrect format of module reference | Check that module is referenced using only letters, numbers, underscores and no leading slash |
| 5044 | Class `Zend_Db_Select` is restricted | Suggested replacement: `\Magento\Framework\DB\Select` |
| 5045 | Class `Zend_Db_Adapter_Pdo_Mysql` is restricted | Suggested replacement: `\Magento\Framework\DB\Adapter\Pdo\Mysql` |
| 5046 | Class `Magento\Framework\Serialize\Serializer\Serialize` is restricted | Suggested replacement: `Magento\Framework\Serialize\SerializerInterface` |
| 5047 | Class `ArrayObject` is restricted | Suggested replacement: Custom class, extended from `ArrayObject` with overwritten serialize/unserialize methods |
| 5048 | Class `Magento\Framework\View\Element\UiComponent\ArrayObjectFactory` is restricted | Suggested replacement: Factory that creates custom class, extended from `ArrayObject` with overwritten serialize/unserialize methods |
| 5049 | Blocks `\Magento\Theme\Block\Html\Head\{Css,Link,Script}` are allowed within the "head" block only | Verify integrity of the nodes nesting |
| 5050 | The block being referenced is removed | Remove reference to block |
| 5051 | `output="toHtml"` is obsolete | Use `output="1"` |
| 5052 | The class `\Magento\Framework\View\Element\Text\ListText` is not supposed to be used in layout anymore | Remove class `\Magento\Framework\View\Element\Text\ListText` from layout |
| 5053 | Call of method `xx` via layout instruction `<action>` is not allowed | Avoid using offending method in <action> |
| 5054 | `helper` attribute contains `/` | Remove `/` from helper attribute |
| 5055 | `helper` attribute does not contain `::` | Add `::` to helper attribute |
| 5056 | Install scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5057 | InstallSchema scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5058 | InstallData scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5059 | Install scripts are obsolete | Please create class InstallData in module\'s Setup folder |
| 5060 | Upgrade scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5061 | UpgradeSchema scripts are obsolete | Please use declarative schema approach in module\'s etc/db_schema.xml file |
| 5062 | UpgradeData scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5063 | Upgrade scripts are obsolete | Please use data patches approach in module\'s Setup/Patch/Data dir |
| 5064 | Recurring scripts are obsolete | Please create class Recurring in module\'s Setup folder |
| 5065 | 'data' is in an invalid directory | Create a data patch within module's Setup/Patch/Data folder for data upgrades or use declarative schema approach in module's etc/db_schema.xml file for schema changes. |
| 5066 | 'sql' is in an invalid directory | Create a data patch within module's Setup/Patch/Data folder for data upgrades or use declarative schema approach in module's etc/db_schema.xml file for schema changes. |
| 5067 | Nodes identified by XPath `xx` are obsolete | Use suggestion from error message itself |
| 5068 | Directive `{{htmlescape}}` is obsolete | Use `{{var}}` instead |
| 5069 | Directive `{{escapehtml}}` is obsolete | Use `{{var}}` instead |
| 5070 | 3rd parameter is not needed anymore for `getChildHtml()` | Remove 3rd parameter from call to `getChildHtml()` |
| 5071 | 4th parameter is not needed anymore for `getChildHtml()` | Remove 4th parameter from call to `getChildHtml()` |
| 5072 | Possible Magento 2 design violation. Detected typical Magento 1.x construction | Update construction to Magento 2 standards |
| 5073 | Legacy table names with slash must be fixed to direct table names | Use direct table name instead |
| 5074 | Use of deprecated method `getResource()` to (save / load / delete) data detected. | Use a repository instead |
| 5075 | Application modules should not use classes from test modules | Remove usage of classes from test modules |
| 5076 | Cannot use `xx` in namespace as it is reserved since PHP 7 | Remove usage of `xx` from namespace |
| 5077 | Cannot use `xx` as class name as it is reserved since PHP 7 | Remove usage of `xx` from class name |
| 5078 | Class needs to be requested in constructor, otherwise compiler will not be able to find and generate these classes | Add class to constructor |
| 5079 | Use of var class variables is discouraged | Avoid using 'var' to declare class variable |
| 5080 | Possible raw SQL statement `xx` detected | Use repositories or data patches instead |
| 5081 | The use of helpers in templates is discouraged | Use ViewModel instead |
| 5082 | The use of $this in templates is deprecated | Use $block instead |
| 5083 | Constants are not allowed as the first argument of translation function | use string literal instead |
| 5084 | Please do not initialize JS component in php | Initialize JS component in template |
| 6001 | `jQuery.andSelf()` removed | Use `jQuery.addBack()` |
| 6002 | jQuery `$.bind` and `$.unbind` are deprecated | Use `$.on` and `$.off` instead |
| 6003 | Instead of `.blur(fn)`, `.focus(fn)`, `.focusin(fn)`, `.focusout(fn)`, `.resize(fn)`, `.scroll(fn)`, `.dblclick(fn)`, `.mousedown(fn)`, `.mouseup(fn)`, `.mousemove(fn)`, `.mouseover(fn)`, `.mouseout(fn)`, `.mouseenter(fn)`, `.mouseleave(fn)`, `.change(fn)`, `.select(fn)`, `.submit(fn)`, `.keydown(fn)`, `.keypress(fn)`, `.keyup(fn)`, `.contextmenu(fn)` or `.click(fn)` | Use `.on("blur", fn)`, `.on("focus", fn)`, `.on("focusin", fn)`, `.on("focusout", fn)`, `.on("resize", fn)`, `.on("scroll", fn)`, `.on("dblclick", fn)`, `.on("mousedown", fn)`, `.on("mouseup", fn)`, `.on("mousemove", fn)`, `.on("mouseover", fn)`, `.on("mouseout", fn)`, `.on("mouseenter", fn)`, `.on("mouseleave", fn)`, `.on("change", fn)`, `.on("select", fn)`, `.on("submit", fn)`, `.on("keydown", fn)`, `.on("keypress", fn)`, `.on("keyup", fn)`, `.on("contextmenu", fn)` or `.on("click", fn)` |
| 6003 | Instead of `.blur()`, `.focus()`, `.focusin()`, `.focusout()`, `.resize()`, `.scroll()`, `.dblclick()`, `.mousedown()`, `.mouseup()`, `.mousemove()`, `.mouseover()`, `.mouseout()`, `.mouseenter()`, `.mouseleave()`, `.change()`, `.select()`, `.submit()`, `.keydown()`, `.keypress()`, `.keyup()`, `.contextmenu()` or `.click()` | Use `.trigger("blur")`, `.trigger("focus")`, `.trigger("focusin")`, `.trigger("focusout")`, `.trigger("resize")`, `.trigger("scroll")`, `.trigger("dblclick")`, `.trigger("mousedown")`, `.trigger("mouseup")`, `.trigger("mousemove")`, `.trigger("mouseover")`, `.trigger("mouseout")`, `.trigger("mouseenter")`, `.trigger("mouseleave")`, `.trigger("change")`, `.trigger("select")`, `.trigger("submit")`, `.trigger("keydown")`, `.trigger("keypress")`, `.trigger("keyup")`, `.trigger("contextmenu")` or `.trigger("click")` |
| 6004 | jQuery `$.delegate` and `$.undelegate` are deprecated | Use `$.on` and `$.off` instead |
| 6005 | (`jQuery.load()` / `jQuery.unload()` / `jQuery.error()`) was removed | Use (`.on("load", fn)` / `.on("unload", fn)` / `.on("error", fn)`) instead |
| 6006 | `jQuery.size()` removed | Use `jQuery.length` |
| 6007 | `jQuery.trim` is deprecated | Use `String.prototype.trim` |
| 6008 | (`addButton`, `addContextToolbar`, `addMenuItem`, `addSidebar`, `file_browser_callback`, `insert_button_items`, 'inlite' theme, 'mobile' theme, 'modern' theme) is removed | Update code to be compatible with tinymce5 |

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
| 1332 | Imported Adobe Commerce `@deprecated` interface | The deprecated interface will be removed in upcoming versions. Consider using an interface or class marked as `@api` instead. |
| 1334 | Used Adobe Commerce `@deprecated` interface | The deprecated interface will be removed in upcoming versions. Consider using an interface or class marked as `@api` instead. |
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
