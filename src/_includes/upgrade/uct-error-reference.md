<!--Note: The error code tables in this file are auto-generated from source code. To request changes to error code descriptions or suggestions, submit a GitHub issue to [Adobe Commerce repository](https://repo.magento.com/).-->
## Error type

The error types yoy can encounter when running Upgrade Compatibility Tool are:

*  Custom code
*  Core code
*  GraphQL Schema
*  Database

### Custom code

The following digits are unique for custom code errors and warning that appear when the merchant has customized code in their Adobe Commerce instance.

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 1104 | Using %s class | Use interface %s instead |
| 1110 | Instantiating non-existent Adobe Commerce class/interface | - |
| 1111 | Extending from non-existent Adobe Commerce class | The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use Adobe Commerce class marked as `@api` |
| 1112 | Importing non Adobe Commerce class | - |
| 1113 | Loading non Adobe Commerce class | - |
| 1114 | Using non Adobe Commerce class | - |
| 1121 | Extending from non Adobe Commerce API class | The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use Adobe Commerce class marked as `@api` |
| 1122 | Importing non Adobe Commerce API class | - |
| 1123 | Loading non Adobe Commerce API class | - |
| 1124 | Using non Adobe Commerce API class | - |
| 1131 | Extending from Adobe Commerce ``@deprecated`` class | The extended class will be removed in upcoming versions. Inheritance is not recommended way of extending Adobe Commerce functionality. Update code to use Adobe Commerce class marked as `@api` |
| 1132 | Importing Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Please consider using Adobe Commerce class marked as `@api` instead |
| 1133 | Loading Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Please consider using Adobe Commerce class marked as `@api` instead |
| 1134 | Using Adobe Commerce `@deprecated` class | The extended class will be removed in upcoming versions. Please consider using Adobe Commerce class marked as `@api` instead |
| 1214 | Using non-existent Adobe Commerce constant | - |
| 1215 | Overriding non-existent Adobe Commerce constant | - |
| 1216 | Assignation of non-existent Adobe Commerce constant | - |
| 1224 | Using non Adobe Commerce API constant | - |
| 1225 | Overriding non Adobe Commerce API constant | - |
| 1226 | Assignation of non Adobe Commerce API constant | - |
| 1234 | Using Adobe Commerce `@deprecated` constant | - |
| 1235 | Overriding Adobe Commerce `@deprecated` constant | - |
| 1236 | Assignation of Adobe Commerce `@deprecated` constant | - |
| 1312 | Imported non-existent Adobe Commerce interface | - |
| 1314 | Used non-existent Adobe Commerce interface | - |
| 1317 | Inherited non-existent Adobe Commerce interface | - |
| 1318 | Implemented non-existent Adobe Commerce interface | - |
| 1322 | Imported non Adobe Commerce API interface | - |
| 1324 | Used non Adobe Commerce API interface | - |
| 1327 | Inherited non Adobe Commerce API interface | - |
| 1328 | Implemented non Adobe Commerce API interface | - |
| 1332 | Imported Adobe Commerce `@deprecated` interface | - |
| 1334 | Used Adobe Commerce `@deprecated` interface | - |
| 1337 | Inherited from Adobe Commerce `@deprecated` interface | - |
| 1338 | Implemented Adobe Commerce `@deprecated` interface | - |
| 1410 | Call non-existent Adobe Commerce method | - |
| 1420 | Instantiating non Adobe Commerce API class/interface | - |
| 1428 | Possible dependency on implementation details | Usage of `%s` should be declared instead of `%s`.Called a method from the nonapi class that extends api class |
| 1429 | Call non Adobe Commerce API methods | - |
| 1430 | Call not declared dataobject method | - |
| 1439 | Call Adobe Commerce `@deprecated` method | - |
| 1514 | Using non-existent Adobe Commerce property | - |
| 1515 | Overriding non-existent Adobe Commerce property | - |
| 1516 | Assignation of non-existent Adobe Commerce property | - |
| 1524 | Using non Adobe Commerce API property | - |
| 1525 | Overriding non Adobe Commerce API property | - |
| 1526 | Assignation of non Adobe Commerce API property | - |
| 1534 | Using Adobe Commerce `@deprecated` property | - |
| 1535 | Overriding Adobe Commerce `@deprecated` property | - |
| 1536 | Assignation of Adobe Commerce `@deprecated` property | - |

### Core modification

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 2001 |Core file was not found | Run the `composer install` command from the project's root directory |
| 2002 | Core file was modified | Run the `composer install` command from the project's root directory |

### GraphQL Schema

{:.error-table}
| Error code | Error description | Suggested action |
| 3101 | TYPE_REMOVED | - |
| 3102 | TYPE_REMOVED_FROM_UNION | - |
| 3103 | FIELD_REMOVED | - |
| 3105 | IMPLEMENTED_INTERFACE_REMOVED | - |
| 3106 | VALUE_REMOVED_FROM_ENUM | - |
| 3107 | ARG_REMOVED | - |
| 3109 | DIRECTIVE_REMOVED | - |
| 3110 | DIRECTIVE_ARG_REMOVED | - |
| 3111 | DIRECTIVE_REPEATABLE_REMOVED | - |
| 3112 | DIRECTIVE_LOCATION_REMOVED | - |
| 3201 | TYPE_CHANGED_KIND | - |
| 3203 | FIELD_CHANGED_KIND | - |
| 3206 | ARG_DEFAULT_VALUE_CHANGE | - |
| 3207 | ARG_CHANGED_KIND | - |
| 3302 | TYPE_ADDED_TO_UNION | - |
| 3303 | REQUIRED_INPUT_FIELD_ADDED | - |
| 3304 | OPTIONAL_INPUT_FIELD_ADDED | - |
| 3305 | IMPLEMENTED_INTERFACE_ADDED | - |
| 3306 | VALUE_ADDED_TO_ENUM | A value added to an enum. If clients contain a switch statement on the enum's value and do not include a default case, this change might cause unexpected behavior |
| 3307 | REQUIRED_ARG_ADDED | - |
| 3308 | OPTIONAL_ARG_ADDED | - |
| 3310 | REQUIRED_DIRECTIVE_ARG_ADDED | - |
