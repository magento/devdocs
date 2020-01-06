---
group: functional-testing-framework-guide
title: Test suite in the Functional Testing Framework
---

## Overview {#overview}

In the Functional Testing Framework (FTF), you can run a group of tests, which is called **test suite**. A test suite is a collection of tests, grouped by a specified rule, that is used to test a custom scope of functionality.

You can group the [test cases][test case], [variations][variation] or [constraints][constraint] in any combination during the test run.

There are two rule types available:

-  **allow**, specifying what must be included during the test run
-  **deny**, specifying what must be excluded during the test run

The rules for a test case are defined in a separate `.xml` file. (Recommended naming: use lowercase letters and underscore as a separator). One file contains rules for one test suite. All files are stored in the `<magento2>/dev/tests/functional/testsuites/Magento/Mtf/TestSuite/InjectableTests` directory by default. Only one test suite can be run at a time.

The example of the default test suite:

```xml

<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../vendor/magento/mtf/Magento/Mtf/TestRunner/etc/testRunner.xsd">
    <rule scope="testcase">
        <allow>
            <tag group="test_type" value="acceptance_test" />
        </allow>
        <deny>
            <tag group="stable" value="no" />
        </deny>
    </rule>
    <rule scope="variation">
        <allow>
            <tag group="test_type" value="acceptance_test" />
        </allow>
        <deny>
            <tag group="stable" value="no" />
        </deny>
    </rule>
</config>

```

This set of rules selects functional tests that accepts the following criteria:

-  WITH the tag `const test_type = 'acceptance_test'`
-  EXCEPT test cases with the tag `const stable = 'no'`

AND runs variations

-  WITH the tag `test_type:acceptance_test`
-  EXCEPT variations with the tag `stable:no`".

Learn more details in next topics.

## Configure `phpunit.xml` {#configure}

Define the test suite to be run in the `<magento2>dev/tests/functional/phpunit.xml`:

```xml
<env name = "testsuite_rule" value = <test_suite_name> />
<env name = "testsuite_rule_path" value = <test_suite_directory> />
```

The default test suite is `<magento2>/dev/tests/functional/testsuites/Magento/Mtf/TestSuite/InjectableTests/basic.xml`.

In `phpunit.xml`:

```xml
<env name="testsuite_rule" value="basic" />
<env name="testsuite_rule_path" value="Magento/Mtf/TestSuite/InjectableTests" />
```

## Run your test suite  {#run}

To run a test suite enter the following commands from your terminal:

```bash
cd <magento2>/dev/tests/functional
```

```bash
vendor/bin/phpunit testsuites/Magento/Mtf/TestSuite/InjectableTests.php
```

## Rule {#rule}

Each test suite can be defined by the rules that **allow** or **deny** running of a [test case][], a [variation][], or a [constraint][].

The only attribute of a rule node is the `scope`, which enables you to use the following options:

-  [`scope = "testsuite"`][]. Enables you to filter the test cases by a namespace, a module, a class.
-  [`scope = "testcase"`][]. Enables you to select the test cases with a specified tag.
-  [`scope = "variation"`][]. Enables you to use in a test run only variations with a specified tag.
-  [`scope = "constraint"`][]. Enables you to run only assertions with a specified tag.

### `scope = "testsuite"` {#scope-testsuite}

This scope enables you to filter functional tests using the following criteria:

| Option | Description | Occurrence | Example
|---|---|---|---
| `<class>` | Apply a rule to the test case with the specified class name. | multiple |`<class value = "Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest" />`
| `<module>` | Apply a rule to all test cases from the specified module. Some test cases may refer to other modules using merging functionality of variations, fixtures etc. You can restrict such reference to other modules adding the `strict="1"` argument. The default value is `strict="0"`. |multiple|`<module value = "Magento_Tax" strict="1" />`
| `<namespace>` | Apply a rule to all test cases with the specified namespace. | multiple | `<namespace value = "Magento\Catalog\Test\TestCase\Product" />`

The [namespace](https://glossary.magento.com/namespace) filter example:

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../vendor/magento/mtf/Magento/Mtf/TestRunner/etc/testRunner.xsd">
    <rule scope="testsuite">
        <allow>
            <namespace value="Magento\Catalog\Test\TestCase\Product" />
        </allow>
    </rule>
</config>
```

The [module](https://glossary.magento.com/module) filter example:

```xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../vendor/magento/mtf/Magento/Mtf/TestRunner/etc/testRunner.xsd">
    <rule scope="testsuite">
        <allow>
            <module value="Magento_Catalog" strict="1" />
            <module value="Magento_Cms" />
        </allow>
    </rule>
</config>

```

The class filter example:

```xml

<?xml version="1.0"?>
<!--
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="../../../../../vendor/magento/mtf/Magento/Mtf/TestRunner/etc/testRunner.xsd">
    <rule scope="testsuite">
        <allow>
            <class value="Magento\Catalog\Test\TestCase\Product\CreateSimpleProductEntityTest" />
            <class value="Magento\ConfigurableProduct\Test\TestCase\CreateConfigurableProductEntityTest" />
        </allow>
    </rule>
</config>

```

### `scope = "testcase"` {#scope-testcase}

In this scope, you can group test cases using tags.

You can use `group` and `value` parameters in the test case scope. In a test case, they are provided as a constant name and its value respectively. See the following example:

-  Any tags that are used in the test case should be added to the beginning of a class definition:

```php

/* tags */
const TEST_TYPE = '3rd_party_test_deprecated';
/* end tags */

```

-  The tag in the rule:

```xml

<rule scope="testcase">
    <deny>
        <tag group="test_type" value="3rd_party_test_deprecated" />
    </deny>
</rule>

```

A test case can contain multiple tag groups, and a group can have multiple values. For example:

```php

/* tags */
const MVP = 'yes';
const DOMAIN = 'PS';
const TEST_TYPE = 'extended_acceptance_test, 3rd_party_test_deprecated';
/* end tags */

```

### `scope = "variation"` {#scope-variation}

You can use a variation `name` or assign a `tag` node to a [data set][] variation. This enables you to use customized sets of variations during the test run. You can **allow** the variation to use in test run those variations which are specified with tag, or **deny** the variations to omit them.

#### Variation name filter

You can filter tests by variation name using the `<name value="{name_of_variation}">` rule.

**Example of a variation:**

```xml

<variation name="ExampleTestCaseVariation1"...>
    <data ...>
</variation>
<variation name="ExampleTestCaseVariation2"...>
    <data ...>
</variation>
<variation name="ExampleTestCaseVariation3"...>
    <data ...>
</variation>
```

**Example of the `<allow>` rule:**

Allow a variation `ExampleTestCaseVariation1` only:

```xml
<rule scope="variation">
    <allow>
        <name value="ExampleTestCaseVariation1" />
    </allow>
</rule>
```

**Example of the `<deny>` rule:**

Allow all variations except the `ExampleTestCaseVariation1`:

```xml
<rule scope="variation">
    <deny>
        <name value="ExampleTestCaseVariation1" />
    </deny>
</rule>
```

#### Variation tag filter

You can use `group` and `value` parameters in the variation scope.

Example variation

```xml

<variation name="ExampleTestCaseVariation1"...>
    <data name="tag" xsi:type="string">group_1:value, group_2:value</data>
    <data ...>
</variation>
```

For example, you have a data set with the following variation:

```xml
<variation name="CreateSimpleProductEntityTestVariation3" summary="Create product with special price and custom options(fixed price)">
    <data name="tag" xsi:type="string">test_type:extended_acceptance_test</data>
    <data name="product/data/url_key" xsi:type="string">simple-product-%isolation%</data>
    ... ... ...
    <constraint name="Magento\Catalog\Test\Constraint\AssertProductSaveMessage" />
    <constraint name="Magento\Catalog\Test\Constraint\AssertProductInGrid" />
    ... ... ...
</variation>
```

By using the `<allow>` element, you can create a rule to use only the `CreateSimpleProductEntityTestVariation3` variation:

```xml
<rule scope="variation">
    <allow>
        <tag group="test_type" value="extended_acceptance_test" />
    </allow>
</rule>
```

or use all variations except the `CreateSimpleProductEntityTestVariation3` variation:

```xml
<rule scope="variation">
    <deny>
        <tag group="test_type" value="extended_acceptance_test" />
    </deny>
</rule>
```

### `scope = "constraint"` {#scope-constraint}

You can select constraints from the variation that will be run after a test flow using tags and rules with `scope="constraint"`.

A tag has two parameters: `group` and `value`. In a constraint, they are provided as a constant name and its value respectively. See the following example:

-  Any tags that are used in the constraint should be added to the beginning of a class definition:

```php

class AssertProductView extends AbstractConstraint
{
    /* tags */
    const SEVERITY = 'low';
    /* end tags */

    // ...
}

```

-  The rule that allows constraints with this tag only:

```xml
<rule scope="testcase">
    <allow>
        <tag group="severity" value="low" />
    </allow>
</rule>
```

-  The rule that allows all constraints except those having this tag:

```xml
<rule scope="testcase">
    <deny>
        <tag group="severity" value="low" />
    </deny>
</rule>
```

<!-- LINKS DEFINITION -->

[test case]: {{ page.baseurl }}/mtf/mtf_entities/mtf_testcase.html
[variation]: {{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html
[constraint]: {{ page.baseurl }}/mtf/mtf_entities/mtf_constraint.html
[data set]: {{ page.baseurl }}/mtf/mtf_entities/mtf_dataset.html

[`scope = "testsuite"`]: #scope-testsuite
[`scope = "testcase"`]: #scope-testcase
[`scope = "variation"`]: #scope-variation
[`scope = "constraint"`]: #scope-constraint
