---
group: marketplace-sellers
title: Code Validation
---

During technical review, all submissions are checked to ensure that the code meets Magento standards.

| Type | Severity | Description |
|----------
| Error | 10 | A critical error with severity level 10 prevents an extension from passing technical review. |
| Warning | 8 | A severity level 8 warning does not prevent an extension from passing technical review. Developers are encouraged to resolve any issues that trigger a level 8 warning. |
| Warning | 6 | A severity level 6 warning does not prevent an extension from passing technical review. Developers are encouraged to resolve any issues that trigger a level 6 warning. |

## Magento 2.x Rules

### Critical Errors - Severity 10

`Generic.Functions.CallTimePassByReference.NotAllowed`|Call-time pass-by-reference calls are prohibited.
`Generic.PHP.CharacterBeforePHPOpeningTag.Found`|The opening PHP tag must be the first content in the file.
`Generic.PHP.DeprecatedFunctions.Deprecated`|Function has been deprecated.
`MEQP1.Exceptions.Namespace.NotFoundNamespace`|Namespace is not specified.
`MEQP1.PHP.Goto.FoundGoto`|Use of <code>goto</code> is discouraged.
`MEQP1.Security.LanguageConstruct.DirectOutput`|Use of <code>echo</code> and print language construct is discouraged.
`MEQP1.Security.LanguageConstruct.ExitUsage`|Use of exit language construct is discouraged.
`MEQP1.Security.LanguageConstruct.WrongBackQuotesUsage`|Incorrect usage of back quote string constant. Back quotes should be always inside strings.
`MEQP1.Strings.RegEx.PossibleExecutableRegEx`|Possible executable regular expression. Make sure that the pattern doesn’t contain “e” modifier.
`MEQP1.Strings.StringPosition.ImproperValueTesting`|Identical operator <code>===</code> is not used for testing the return value of <code>%s</code> function.
`MEQP2.PHP.Syntax.PHPSyntax`|PHP syntax error.
`MEQP2.Security.Superglobal.SuperglobalUsageError`|Direct use of Superglobal detected.
`PSR1.Classes.ClassDeclaration.MissingNamespace`|Each class must be in a namespace of at least one level (a top-level vendor name).
`PSR1.Classes.ClassDeclaration.MultipleClasses`|Each class must be in a file by itself.
`PSR2.Files.ClosingTag.NotAllowed`|A closing tag is not permitted at the end of a PHP file.
`Squiz.PHP.Eval.Discouraged`|Use of <code>eval()</code> is discouraged.

### Warnings - Severity 8

`Generic.Arrays.DisallowLongArraySyntax.Found`|Short array syntax must be used to define arrays.
`Generic.Classes.DuplicateClassName.Found`|Duplicate class name found.
`Generic.CodeAnalysis.JumbledIncrementer.Found`|Loop incrementor jumbling with inner loop.
`Generic.Files.LineEndings.InvalidEOLChar`|End of line character is invalid.
`Generic.Metrics.CyclomaticComplexity.MaxExceeded`|The cyclomatic complexity of the function exceeds allowed maximum of 20.
`Generic.Metrics.CyclomaticComplexity.TooHigh`|The cyclomatic complexity of the function exceeds 10; consider refactoring the function.
`Generic.Metrics.NestingLevel.MaxExceeded`|The nesting level of the function exceeds allowed maximum of 10.
`Generic.Metrics.NestingLevel.TooHigh`|The nesting level of the function exceeds 5; consider refactoring the function.
`Generic.PHP.NoSilencedErrors.Discouraged`|Silencing errors is discouraged.
`MEQP1.Performance.CollectionCount.FoundCollectionCount`|Unnecessary loading of a Magento data collection. Use the `getSize()` method instead.
`MEQP1.PHP.Var.FoundVar`|Use of `var` class variables is discouraged.
`MEQP1.Security.IncludeFile.FoundIncludeFile`|File manipulations are discouraged.
`MEQP1.SQL.RawQuery.FoundRawSql`|Possible raw SQL statement detected.
`MEQP1.Strings.StringConcat.ImproperStringConcatenation`|Use of `+` operator to concatenate two strings detected.
`MEQP2.Classes.ObjectInstantiation.FoundDirectInstantiation`|Direct object instantiation is discouraged in Magento 2.
`MEQP2.Classes.ResourceModel.OutsideOfResourceModel`|Data access method detected outside of Resource Model.
`MEQP2.Exceptions.DirectThrow.FoundDirectThrow`|Direct throw of exception is discouraged.
`MEQP2.SQL.MissedIndexes.MissedIndexes`|No index found in database schema file.
`MEQP2.Templates.RawJavaScript.FoundRawJS`|Missing JS component initialization. Use `x-magento-init` or `x-magento-template`.
`MEQP2.Templates.XssTemplate.FoundUnescaped`|Unescaped output detected.
`Squiz.Functions.GlobalFunction.Found`|Consider putting global function in a static class.
`Squiz.PHP.GlobalKeyword.NotAllowed`|Use of the `global` keyword is forbidden.

## Magento 1.x Rules

### Critical Errors - Severity 10

`Generic.Arrays.DisallowShortArraySyntax.Found`|Short array syntax is not allowed.
`Generic.Functions.CallTimePassByReference.NotAllowed`|Call-time pass-by-reference calls are prohibited.
`Generic.PHP.CharacterBeforePHPOpeningTag.Found`|The opening PHP tag must be the first content in the file.
`Generic.PHP.DeprecatedFunctions.Deprecated`|Function has been deprecated.
`MEQP1.Exceptions.Namespace.NotFoundNamespace`|Namespace for `%s` class is not specified.
`MEQP1.PHP.Goto.FoundGoto`|Use of `goto` is discouraged.
`MEQP1.PHP.Syntax.PHPSyntax`|PHP syntax error.
`MEQP1.Security.Acl.MissingAclMethod`|Missing the `_isAllowed()` ACL method in the class.
`MEQP1.Security.LanguageConstruct.DirectOutput`|Use of `echo` and print language construct is discouraged.
`MEQP1.Security.LanguageConstruct.ExitUsage`|Use of `exit` language construct is discouraged.
`MEQP1.Security.LanguageConstruct.WrongBackQuotesUsage`|Incorrect usage of back quote string constant. Back quotes should be always inside strings.
`MEQP1.Security.Superglobal.SuperglobalUsageError`|Direct use of `Superglobal` detected.
`MEQP1.Strings.RegEx.PossibleExecutableRegEx`|Possible executable regular expression. Make sure that the pattern doesn’t contain “e” modifier.
`MEQP1.Strings.StringPosition.ImproperValueTesting`|Identical operator `===` is not used for testing the return value of `%s` function.
`PSR1.Classes.ClassDeclaration.MultipleClasses`|Each class must be in a file by itself.
`Squiz.PHP.Eval.Discouraged`|Use of `eval()` is discouraged.
`Zend.Files.ClosingTag.NotAllowed`|A closing tag is not permitted at the end of a PHP file.

### Warnings - Severity 8

`Generic.Classes.DuplicateClassName.Found`|Duplicate class name found.
`Generic.CodeAnalysis.JumbledIncrementer.Found`|Loop incrementor jumbling with inner loop.
`Generic.Metrics.CyclomaticComplexity.MaxExceeded`|The cyclomatic complexity of the function exceeds allowed maximum of 20.
`Generic.Metrics.CyclomaticComplexity.TooHigh`|The cyclomatic complexity of the function exceeds 10; consider refactoring the function.
`Generic.Metrics.NestingLevel.MaxExceeded`|The nesting level of the function exceeds allowed maximum of 10.
`Generic.Metrics.NestingLevel.TooHigh`|The nesting level of the function exceeds 5; consider refactoring the function.
`Generic.PHP.NoSilencedErrors.Discouraged`|Silencing errors is discouraged.
`MEQP1.Classes.ObjectInstantiation.FoundDirectInstantiation`|Direct object instantiation is discouraged in Magento.
`MEQP1.Classes.ResourceModel.OutsideOfResourceModel`|Data access method detected outside of Resource Model.
`MEQP1.Performance.CollectionCount.FoundCollectionCount`|Unnecessary loading of a Magento data collection. Use the `getSize()` method instead.
`MEQP1.Performance.FetchAll.FoundFetchAll`|`fetchAll()` can be memory inefficient for large data sets.
`MEQP1.Performance.GetFirstItem.FoundGetFirstItem`|`getFirstItem()` does not limit the result of collection load to one item.
`MEQP1.Performance.Loop.ArraySize`|Array size calculation function detected in loop.
`MEQP1.Performance.Loop.DataLoad`|Data load method detected in loop.
`MEQP1.Performance.Loop.ModelLSD`|Model LSD method detected in loop.
`MEQP1.PHP.Var.FoundVar`|Use of `var` class variables is discouraged.
`MEQP1.SQL.RawQuery.FoundRawSql`|Possible raw SQL statement detected.
`MEQP1.SQL.SlowQuery.FoundSlowSql`|Possible slow SQL method detected.
`MEQP1.SQL.SlowQuery.FoundSlowRawSql`|Possible slow SQL method detected.
`MEQP1.Strings.StringConcat.ImproperStringConcatenation`|Use of `+` operator to concatenate two strings detected.
`MEQP1.Security.IncludeFile.FoundIncludeFile`|File manipulations are discouraged.
`MEQP1.SQL.MissedIndexes.MissedIndexes`|There was not found any index in database schema file.
`Squiz.Functions.GlobalFunction.Found`|Consider putting global function in a static class.
`Squiz.PHP.GlobalKeyword.NotAllowed`|Use of the `global` keyword is forbidden.

### Code Quality Issues and Solutions

#### Copy Paste Detector (CPD)

Issue |The Copy Paste Detector indicates that the extension contains duplicate code from Magento native products or from other extensions.
Solution|The Marketplace team will provide a list of places in your extension code that were identified as duplicate. If the extension is found to duplicate Magento code, review the list, and remove each instance of duplicate code. Then, upload a new package and resubmit the extension.Any extension that is found to duplicate code from another extension will be rejected. To prove that you own the code in question, see [Magento Marketplace Support][1].

#### Sniffs

Issue|The extension contains code elements that are not allowed to be used in Marketplace extensions. See the Technical Report for a list of elements in your code that are not allowed.
Solution|To duplicate the tests locally, use the MEQP [CodeSniffer][2] tool. Remove all disallowed code elements. Then, upload a new package and resubmit the extension. To learn more, see [Magento Extension Quality Program Coding Standard][3].

#### Inconsistency

Issue|The extension conflicts with other extensions.
Solution|The Marketplace team will provide you with a list of the identified conflicts. Correct the code that is causing the conflict. Then, upload a new package and resubmit the extension.

#### M1 Package Missing

Issue|The package file was not submitted, or is missing from the Magento repository. It's possible that the package file was not included correctly during the migration.
Solution|Upload a new package, and resubmit the extension.

#### Hidden Files in Archive

Issue|Hidden files were detected in the archive. It is possible that configuration files from the development environment were included in the distribution package. Such hidden files can cause configuration problems for the end user.
Solution|Remove the hidden files. Then, upload a new package, and resubmit the extension.

[1]: https://marketplacesupport.magento.com/
[2]: https://github.com/squizlabs/PHP_CodeSniffer
[3]: https://github.com/magento/marketplace-eqp
