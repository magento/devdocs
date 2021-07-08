<!--Note: The error code tables in this file are auto-generated from source code. To request changes to error code descriptions or suggestions, submit a GitHub issue to [Adobe Commerce repository](https://repo.magento.com/).-->

## Critical Errors

Critical errors indicate a problem with the {{ site.data.var.ece }} project configuration that causes deployment failure, for example incorrect, unsupported, or missing configuration for required settings. Before you can deploy, you must update the configuration to resolve these errors.

### Build stage

{:.error-table}
| Error code | Build step | Error description (Title) | Suggested action |
| - | - | - | - |
| 2 |  | Cannot write to the `./app/etc/env.php` file | Deployment script cannot make required changes to the `/app/etc/env.php` file. Check your filesystem permissions. |
| 3 |  | Configuration isn't defined in the `schema.yaml` file | Configuration is not defined in the `./vendor/magento/ece-tools/config/schema.yaml` file. Check that the config variable name is correct, and that it is defined. |

Levels and code defined for each error
The first digit in the error code corresponds to the error type, the subject of the error:

Custom Code - 1
Core Code - 2
GraphQL Schema - 3
Database - 4
Customization compatibility
Error code construction principles

2nd digit is based on the type of used entity:

Class - 1
Constant - 2
Interface - 3
Mehtod - 4
Property - 5
Other - 0
3rd digit is based on the issue with the used entity:

Nonexistent - 1
Non API - 2
Deprecated - 3
Other - 4
4th digit is based on the way problematic entity is used:

Extending - 1
Importing - 2
Loading - 3 
Using - 4
Overriding - 5
Assignation - 6
Inheritance - 7
Implemented - 8
Call - 9
Other - 0
Type: Custom Code

Code	Level	Message	Suggested action
1121	Error	Extending from non Magento API class	Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition.
1122	Error	Importing non Magento API class	
1124	Error	Using non Magento API class	
1123	Error	Loading non Magento API class	
1111	Critical	Extending from nonexistent Magento class	The extended class is no longer present in the codebase. Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition.
1112	Critical	Importing nonexistent Magento class	
1114	Critical	Using nonexistent Magento class	
1113	Critical	Loading nonexistent Magento class	
1131	Warning	Extending from Magento @deprecated class	The extended class will be removed in upcoming versions. Inheritance is not recommended way of extending Adobe Commerce functionality. Please consider updating the code to use Magento class maked as "@api" using composition.
1132	Warning	Importing Magento @deprecated class	The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead.
1134	Warning	Using Magento @deprecated class	The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead.
1133	Warning	Loading Magento @deprecated class	The extended class will be removed in upcoming versions. Please consider using Magento class marked as "@api" instead.
1104	Error	You are using %s class, please use interface %s instead	
1224	Error	Using non Magento API constant	
1226	Error	Assignation of non Magento API constant	
1225	Error	Overriding non Magento API constant	
1214	Critical	Using nonexistent Magento constant	
1216	Critical	Assignation of nonexistent Magento constant	
1215	Critical	Overriding nonexistent Magento constant	
1234	Warning	Using Magento @deprecated constant	
1236	Warning	Assignation of Magento @deprecated constant	
1235	Warning	Overriding Magento @deprecated constant	
1327	Error	Inherited non Magento API interface	
1328	Error	Implemented non Magento API interface	
1322	Error	Imported non Magento API interface	
1324	Error	Used non Magento API interface	
1317	Critical	Inherited nonexistent Magento interface	
1318	Critical	Implemented nonexistent Magento interface	
1312	Critical	Imported nonexistent Magento interface	
1314	Critical	Used nonexistent Magento interface	
1337	Warning	Inherited from Magento @deprecated interface	
1338	Warning	Implemented Magento @deprecated interface	
1332	Warning	Imported Magento @deprecated interface	
1334	Warning	Used Magento @deprecated interface	
1428	Error	Possible dependency on implementation details. Usage of '%s' should be declared instead of '%s'	Called a method from the nonapi class that extends api class
1429	Error	Call non Magento API method	
1420	Error	Instantiating non Magento API class/interface	
1410	Critical	Call nonexistent Magento method	
1430	Warning	Call not declared dataobject method	
1428	Error	Call to non-interface method (that is present in implementation)	
1110	Critical	Instantiating nonexistent Magento class/interface	
1439	Warning	Call Magento @deprecated method	
1534	Warning	Using Magento @deprecated property	
1536	Warning	Assignation of Magento @deprecated property	
1535	Warning	Overriding Magento @deprecated property	
1524	Error	Using non Magento API property	
1526	Error	Assignation of non Magento API property	
1525	Error	Overriding non Magento API property	
1514	Critical	Using nonexistent Magento property	
1516	Critical	Assignation of nonexistent Magento property	
1515	Critical	Overriding nonexistent Magento property	
Core modification
Type: Core Code

Code	Level	Message	Suggested action
2001	Critical	Core file was not found	The core code can be fixed by running "composer install" command from the root directory of the project
2002	Critical	Core file was modified	The core code can be fixed by running "composer install" command from the root directory of the project
GraphQL Schema
Type: GraphQL

Second digit are based on change type:

Removed - 1
Changed - 2
Added - 3
Third and fourth digit are based on changed entity type:

Type - 01
Type from union - 02
Field - 03
Field optional - 04
Implemented Interface - 05
Value - 06
Argument - 07
Optional Argument - 08
Directive - 09
Directive Argument - 10
Directive Repeatable - 11
Direcative Location - 12

Code	Level	Message	Suggested action
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
3109	Critical	
DIRECTIVE_REMOVED


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
