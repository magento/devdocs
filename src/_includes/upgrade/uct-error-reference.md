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
### Custom code

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
