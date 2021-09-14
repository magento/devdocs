---
group: extension-best-practices
title: Adding Code Inspections
functional_areas:
  - Standards
redirect_from:
- guides/v2.3/ext-best-practices/phpstorm/inspections.html
---

The IntelliJ Platform provides tools designed for static code analysis called code inspections, which help the user maintain and clean up code without actually executing it.
Read more in the [official documentation](https://plugins.jetbrains.com/docs/intellij/code-inspections.html).

The plugin inspections could be found in the `Settings | Preferences... | Editor | Inspections`.
Use a filter to find only the plugin inspections: `Magento 2`.

![Image of the Magento 2 Group Inspections]({{site.baseurl}}/common/images/phpstorm/Intellij-idea-plugin-editor-local-inspections.png)

See [Inspections topic](https://jetbrains.design/intellij/text/inspections/) in the IntelliJ Platform UI Guidelines
on naming, writing description, and message texts for inspections to avoid basic naming conventions issues before code review.

### To add a new inspection

1. Declaring an inspection in the plugin configuration file
1. Implementing a local inspection class to inspect code in the IntelliJ Platform-based IDE editor
1. Creating a visitor to traverse the PSI tree of the file being edited and inspecting for problematic syntax
1. Writing an HTML description of the inspection for display in the inspection preferences panel
1. Create a unit test for the inspection
1. Implementing a quick fix class to correct syntax problems by altering the PSI tree as needed
1. Implementing an inspection preferences panel to display information about the inspection

### Declaring an inspection in the plugin configuration file

All plugin inspections declared in the `<extensions defaultExtensionNs="com.intellij">` XML node of the plugin configuration file.

For example, we will implement a local inspection tool for checking preference XML tag attributes (`di.xml` file)
if they are valid classes FQNs.

```xml
<localInspection language="XML" groupPath="XML"
                 shortName="InvalidDiTypeInspection"
                 bundle="magento2.inspection" key="inspection.displayName.InvalidDiTypeInspection"
                 groupBundle="magento2.inspection" groupKey="inspection.group.name"
                 enabledByDefault="true" level="WARNING"
                 implementationClass="com.magento.idea.magento2plugin.inspections.xml.InvalidDependencyInjectionTypeInspection"/>
```

The `<localInspection/>` tag attributes:

1. `language` - desired file language (ex.: XML, PHP, CSS, JavaScript, etc.)
1. `groupPath` - the first level group in the inspection preferences panel
1. `shortName` - local inspection identity
1. `bundle` - which bundle to use to display name in the inspection preferences panel, constant value: `magento2.inspection`
1. `key` - which bundle message to use to display name in the inspection preferences panel
1. `groupBundle` - the second level group bundle, constant value: `magento2.inspection`
1. `groupKey` - group bundle message, constant value: `inspection.group.name`
1. `enabledByDefault` - is it should be enabled by default
1. `level` - inspection severity level
1. `ImplementationClass` - inspection implementation class

Add a new bundle message with key `inspection.displayName.InvalidDiTypeInspection` to the [InspectionBundleMessagesFile]:

```properties
inspection.displayName.InvalidDiTypeInspection=Invalid type configuration in the `etc/di.xml` file
```

### Implementing a local inspection class to inspect code in the IntelliJ Platform-based IDE editor

The base class for all local inspections is `com.intellij.codeInspection.LocalInspectionTool`.

**Plugin extension points:**

| Language                           | Example Implementation                                | Extension Point Class |
| ------------------------------ | --------------------------------------------- | --------------------- |
| `PHP` | [PluginInspection] | `com.jetbrains.php.lang.inspections.PhpInspection` |
| `XML` | [ModuleDeclarationInModuleXmlInspection] | `com.intellij.codeInspection.XmlSuppressableInspectionTool` |

Implement `InvalidDependencyInjectionTypeInspection` inspection that extends `XmlSuppressableInspectionTool`:

```java
/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

package com.magento.idea.magento2plugin.inspections.xml;

import com.intellij.codeInspection.ProblemsHolder;
import com.intellij.codeInspection.XmlSuppressableInspectionTool;
import com.intellij.psi.PsiElementVisitor;
import org.jetbrains.annotations.NotNull;

public class InvalidDependencyInjectionTypeInspection extends XmlSuppressableInspectionTool {

    @Override
    public @NotNull PsiElementVisitor buildVisitor(
            final @NotNull ProblemsHolder holder,
            final boolean isOnTheFly
    ) {
        // TODO: Implement visitor for InvalidDependencyInjectionTypeInspection type.
        return super.buildVisitor(holder, isOnTheFly);
    }
}
```

### Creating a visitor to traverse the PSI tree of the file being edited and inspecting for problematic syntax

All visitors should extend `com.intellij.psi.PsiElementVisitor`.

**Visitors implementations for different languages:**

| Language | Visitor Implementation Class |
| ------------------------------ | --------------------- |
| `PHP` | `com.jetbrains.php.lang.psi.visitors.PhpElementVisitor` |
| `XML` | `com.intellij.psi.XmlElementVisitor` |
| `JSON` | `com.intellij.json.psi.JsonElementVisitor` |
| `JavaScript` | `com.intellij.psi.PsiElementVisitor` |

Let's implement new `XmlElementVisitor` that overrides `visitXmlTag` method. That visitor will check all xml tags
in the all xml files. We should dedicate it to check only expected xml files (`di.xml`) and expected xml tags (`<type/>`).
That could be easily be done with the next part of code:

```java
final PsiFile file = xmlTag.getContainingFile();

if (!file.getName().equals(ModuleDiXml.FILE_NAME)
        || !xmlTag.getName().equals(ModuleDiXml.TYPE_TAG)) {
    return;
}
```

Now we can access `<type/>` tag's `name` attribute to check its value:

```java
final XmlAttribute nameAttribute = xmlTag.getAttribute(ModuleDiXml.NAME_ATTR);
```

The `XmlTag.getAttribute()` method returns `@Nullable` value. We should check if our attribute is accessible for working with it.
Also, later we will need to use `XmlTag.getValueElement()` method to register problem by `ProblemsHolder` if it occurs.
The `XmlTag.getValueElement()` method also returns `@Nullable` value. Let's use this code to skip visiting not correct XML attributes:

```java
if (nameAttribute == null || nameAttribute.getValue() == null || nameAttribute.getValueElement() == null) {
    return;
}
```

Now we can access attributes values. We can check if attribute value is existing class by using [PhpClassExistenceValidator] type instance.
To report problem on the `name` attribute value you can use the next code snippet:

```java
problemsHolder.registerProblem(
        nameAttribute.getValueElement(),
        inspectionBundle.message(
                "inspection.error.idAttributeCanNotBeEmpty",
                nameAttribute.getName()
        ),
        ProblemHighlightType.ERROR
);
```

You cannot access tag value of PsiElement type.
So you can just report problem for tag element, as it is done by Intellij Idea inspections, for example: `com.intellij.xml.util.CheckEmptyTagInspection`.

So, there is a full example: [InvalidDependencyInjectionTypeInspection]

### Writing an HTML description of the inspection for display in the inspection preferences panel

You must describe all inspections in the description file. To do this you can add a new HTML file by the next path:
`./resources/inspectionDescriptions/{shortName}.html`, where `{shortName}` is a `shortName` attribute value in the
local inspection declaration. Or you can just use Intellij Idea automation for this (preferred way ).
All inspection implementation classes have highlighted class name if they don't have description file and quick fix to create it:
![Create Inspection Description File Quick Fix]({{site.baseurl}}/common/images/phpstorm/Intellij-idea-plugin-create-inspection-description-quick-fix.png)

Use [Inspections topic](https://jetbrains.design/intellij/text/inspections/) to write better descriptions for inspections using naming conventions.

### Create a unit test for the inspection

You must deliver each inspection with the unit test for it. The root folder for all inspections unit tests is a `./tests/com/magento/idea/magento2plugin/inspections`. As base classes for your tests you should use predefined implementations based on languages.

**Base classes implementations for different languages:**

| Language | Abstract Class |
| ------------------------------ | --------------------- |
| `php` | `com.magento.idea.magento2plugin.inspections.php.InspectionPhpFixtureTestCase` |
| `xml` | `com.magento.idea.magento2plugin.inspections.xml.InspectionXmlFixtureTestCase` |
| `graphql` | `com.magento.idea.magento2plugin.inspections.graphqls.InspectionGraphqlsFixtureTestCase` |

If you cover new language area, please extend `com.magento.idea.magento2plugin.inspections.BaseInspectionsTestCase` class and add new abstract class for that area.
All test classes names should have a suffix Test and all testing methods should have a prefix test and detailed description in the annotation.
Also, you should enable testing inspection in the `setUp()` method.

```java
public class TypeConfigurationTagTypesInspectionTest extends InspectionXmlFixtureTestCase {

    @Override
    public void setUp() throws Exception {
        super.setUp();
        myFixture.enableInspections(InvalidDependencyInjectionTypeInspection.class);
    }

    /**
     * Test type doesn't exists highlighting: <type name="TestingType"/>.
     */
    public void testNameAttributeValueTypeDoesNotExists() {
        // TODO: write a test.
    }
}
```

The root folder for your test data is: `./testData/inspections`. The internal folder structure is the same as for your test cases, accordingly to the testing file language.
To add data for your new test case use the next rule: create directory inside tested language folder that has the same name as your testing class **without suffix Test** (for the example above it is folder with the name: `TypeConfigurationTagTypesInspection`).
For each testing method create folder in it that has a name the same as method name **without test prefix** in the camel case format (for the example above it is folder with the name: `nameAttributeValueTypeDoesNotExists` inside the `TypeConfigurationTagTypesInspection` folder).

Magento 2 SandBox that used for the tests is in the `./testData/project/magento2` folder.

[InspectionBundleMessagesFile]: https://github.com/magento/magento2-phpstorm-plugin/blob/4.0.0-develop/resources/magento2/inspection.properties
[PluginInspection]: https://github.com/magento/magento2-phpstorm-plugin/blob/4.0.0-develop/src/com/magento/idea/magento2plugin/inspections/php/PluginInspection.java
[ModuleDeclarationInModuleXmlInspection]: https://github.com/magento/magento2-phpstorm-plugin/blob/4.0.0-develop/src/com/magento/idea/magento2plugin/inspections/xml/ModuleDeclarationInModuleXmlInspection.java
[PhpClassExistenceValidator]: https://github.com/magento/magento2-phpstorm-plugin/blob/4.0.0-develop/src/com/magento/idea/magento2plugin/inspections/validator/PhpClassExistenceValidator.java
[InvalidDependencyInjectionTypeInspection]: https://github.com/magento/magento2-phpstorm-plugin/blob/4.0.0-develop/src/com/magento/idea/magento2plugin/inspections/xml/InvalidDependencyInjectionTypeInspection.java
