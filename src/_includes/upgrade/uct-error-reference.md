<!--Note: The error code tables in this file are auto-generated from source code. To request changes to error code descriptions or suggestions, submit a GitHub issue to [Adobe Commerce repository](https://repo.magento.com/).-->
## Error type

The first digit is common for all codes and correspond to the error type:

*  Custom Code - 1
*  Core Code - 2
*  GraphQL Schema - 3
*  Database - 4

### Core modification

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 2001 |Core file was not found | The core code can be fixed by running "composer install" command from the root directory of the project |
| 2002 | Core file was modified | The core code can be fixed by running "composer install" command from the root directory of the project |
	
### Custom code

The following digits are unique for custom code errors and warning that appear when the merchant has customized code in their Adobe Commerce instance.

Second digit is based on the used entity type:

*  Class - 1
*  Constant - 2
*  Interface - 3
*  Method - 4
*  Property - 5
*  Other - 0

Third digit is based on the used entity issue:

*  Nonexistent - 1
*  Non API - 2
*  Deprecated - 3
*  Other - 4

Fourth digit is based on the entity resolution:

*  Extending - 1
*  Importing - 2
*  Loading - 3 
*  Using - 4
*  Overriding - 5
*  Assignation - 6
*  Inheritance - 7
*  Implemented - 8
*  Call - 9
*  Other - 0

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
| 1121 | Extending from non Magento API class | Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition |
| 1122 | Importing non Magento API class | - |
| 1123 | Loading non Magento API class | - |
| 1124 | Using non Magento API class | - |
| 1111 | Extending from nonexistent Magento class | The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition |
| 1112 | Importing non Magento class | - |
| 1114 | Using non Magento class | - |
| 1113 | Loading non Magento class | - |
| 1131 | Extending from Magento @deprecated class | The extended class will be removed in upcoming versions. Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition |
| 1132 | Importing Magento @deprecated class | The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead |
| 1133 | Loading Magento @deprecated class | The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead |
| 1134 | Using Magento @deprecated class | The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead |
| 1104 | You are using %s class | please use interface %s instead |
| 1224 | Using non Magento API constant	 | - |
| 1226 | Assignation of non Magento API constant | - |
| 1225 | Overriding non Magento API constant | - |
| 1214 | Using nonexistent Magento constant | - |
| 1216 | Assignation of nonexistent Magento constant | - |
| 1215 | Overriding nonexistent Magento constant | - |
| 1234 | Using Magento @deprecated constant | - |
| 1236 | Assignation of Magento @deprecated constant | - |
| 1235 | Overriding Magento @deprecated constant | - |
| 1327 | Inherited non Magento API interface	 | - |
| 1328 | Implemented non Magento API interface | - |
| 1322 | Imported non Magento API interface | - |
| 1324 | Used non Magento API interface | - |
| 1317 | Inherited nonexistent Magento interface | - |
| 1318 | Implemented nonexistent Magento interface | - |
| 1312 | Imported nonexistent Magento interface | - |
| 1314 | Used nonexistent Magento interface | - |
| 1337 | Inherited from Magento @deprecated interface | - |
| 1338 | Implemented Magento @deprecated interface | - |
| 1332 | Imported Magento @deprecated interface | - |
| 1334 | Used Magento @deprecated interface | - |
| 1428 | Possible dependency on implementation details | Usage of '%s' should be declared instead of '%s'	Called a method from the nonapi class that extends api class |
| 1429 | Call non Magento API methods | - |
| 1420 | Instantiating non Magento API class/interface | - |
| 1410 | Call nonexistent Magento method | - |
| 1430 | Call not declared dataobject method | - |
| 1110 | Instantiating nonexistent Magento class/interface | - |
| 1439 | Call Magento @deprecated method	 | - |
| 1534 | Using Magento @deprecated property | - |
| 1536 | Assignation of Magento @deprecated property | - |
| 1535 | Overriding Magento @deprecated property | - |
| 1524 | Using non Magento API property | - |
| 1526 | Assignation of non Magento API property | - |
| 1525 | Overriding non Magento API property | - |
| 1514 | Using nonexistent Magento property | - |
| 1516 | Assignation of nonexistent Magento property | - |
| 1515 | Overriding nonexistent Magento property | - |

### GraphQL Schema

Second digit are based on change type:

*  Removed - 1
*  Changed - 2
*  Added - 3

Third and fourth digit are based on changed entity type:

*  Type - 01
*  Type from union - 02
*  Field - 03
*  Field optional - 04
*  Implemented Interface - 05
*  Value - 06
*  Argument - 07
*  Optional Argument - 08
*  Directive - 09
*  Directive Argument - 10
*  Directive Repeatable - 11
*  Direcative Location - 12

{:.error-table}
| Error code | Error description | Suggested action |
| - | - | - |
3101	Critical	TYPE_REMOVED	
3201	Critical	TYPE_CHANGED_KIND	
3102	Critical	TYPE_REMOVED_FROM_UNION	
3106	Critical	VALUE_REMOVED_FROM_ENUM	
3303	Critical	REQUIRED_INPUT_FIELD_ADDED	
3105	Critical	IMPLEMENTED_INTERFACE_REMOVED	
3103	Critical	FIELD_REMOVED	
3203	Critical	FIELD_CHANGED_KIND	
3307	Critical	REQUIRED_ARG_ADDED	
3107	Critical	ARG_REMOVED	
3207	Critical	ARG_CHANGED_KIND	
3109	Critical	DIRECTIVE_REMOVED
3110	Critical	DIRECTIVE_ARG_REMOVED	
3310	Critical	REQUIRED_DIRECTIVE_ARG_ADDED	
3111	Critical	DIRECTIVE_REPEATABLE_REMOVED	
3112	Critical	DIRECTIVE_LOCATION_REMOVED	
3306	Warning	VALUE_ADDED_TO_ENUM	A value was added to an enum. If clients contain a switch statement on the enum's value and do not include a default case, this change might cause unexpected behavior.
3302	Warning	TYPE_ADDED_TO_UNION	
3304	Warning	OPTIONAL_INPUT_FIELD_ADDED	
3308	Warning	OPTIONAL_ARG_ADDED	
3305	Warning	IMPLEMENTED_INTERFACE_ADDED	
3206	Warning	ARG_DEFAULT_VALUE_CHANGE	
