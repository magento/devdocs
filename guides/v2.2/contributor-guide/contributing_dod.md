---
group: contributor-guide
title: Magento Definition of Done
---

## Overview

The "Definition of Done" (DoD) is a collective term for a set of acceptance criteria that is applied to any changes in the product code base.
The requirements that result from our DoD are applied by default to all user stories and to each task within this user story.

Internally, the Magento development teams follow the DoD to ensure that all work meets consistent release criteria.
We encourage our community contributors to also follow the Magento DoD.

At a high level, the criteria defined in our "definition of done" revolve around the principle of writing clean code that is reviewed and includes unit tests and solid documentation along with the code.

The following sections provide additional details about each of these criteria:

## Backward Compatibility

### Functional Backward Compatibility

**Functional backward compatibility** means behaviour of the application is preserved.

Existing product features and functionality must be retained during any changes to the code.
Any backward-incompatible functional changes must be approved by a product owner.
The documentation should explain the justification and provide the "business value".

### Technical Backward Compatibility

**Technical backward compatibility** means technical interfaces are preserved.
Technical interfaces include PHP interfaces or classes, CLI commands, URLs or any other interfaces that can be used by 3rd-party developer, system integrator or user of Magento.
Any change in the interfaces that can lead to a broken integration is a breaking technical change.
Technical interfaces and corresponding level of change is described in [Code Changes][6] and [Module Version Dependencies][7] documents in more details.

Technical backward compatibility must be retained between PATCH (marketing) versions of Magento products. It should also be retained between MINOR (marketing) releases if possible.
Any breaking changes must be approved by an architect, product owner and release manager.

For more information, see [Magento's backward compatibility policy][1] and [Versioning][5] documents.

## Documentation

All changes, additions, and extensions to the product should be documented by the author.
The documentation should provide an overview of the change, and information about standard use cases, audience, and procedural instructions for implementing the feature.

Ideally, the information about the submitted code should be added to the official Magento DevDocs [library](https://glossary.magento.com/library).
Contributors are asked to submit the doc as a Pull Request to the [DevDocs GitHub repo][4].

When submitting either code or documentation, a brief summary of the work should be included in the commit message.

Additionally, the code itself should follow our [DocBlock standard][0] and contain high-quality comments and descriptions for all classes and methods.

Any backward-incompatible changes must also be recorded in the accompanying documentation, using the following format:

| Change      | Was in Magento 1.x | Became in Magento 2.x |
| ----------- | ------------------ | --------------------- |
| description | example            | example               |

## Tests

### Automated Tests

Code changes must be covered by automated tests according to Classification of Magento Automated Tests.
When choosing how to cover your changes, pick the most lightweight (execution time wise) test type that will provide sufficient coverage.
If you encounter an existing test that insufficiently covers your changes, you can delete that test but you must write a proper test to replace it. For example, a method that interacts with database has a unit test. You can replace it with an integration test.

Before committing code changes, author must ensure successful execution of all tests by running all tests or at least those which might be affected by code changes.
Continuous integration enforces execution of all tests and author is accountable for broken builds.

### Functional Tests

Must cover new or changed application behavior (functional).
Added/updated functionality should be covered by a functional autotest(s) related to previous sprint commitment in scope of current sprint.

See [Functional Tests][2].

### Unit Tests

Cover classes and methods that:

* Have little to no dependencies
* Do not interact with resources like database, file system, 3rd party systems etc.
* Underlying functionality cannot be properly covered indirectly by an integration test
* Can be covered by a [black box test](https://en.wikipedia.org/wiki/Black-box_testing)

Examples:

* Utils (like `\Magento\Framework\Math\Random`)
* Simple classes that can also be used (at least initiated) independently (like `\Magento\Framework\Api\SortOrder`)
* Algorithms that perform calculation, parsing

Code NOT to cover:

* Classes/methods with numerous dependencies.
  - Creation of Unit tests for such classes will result in creation of a lot of mocks and writing complex test logic (that most likely follows code to large extend and as a result we will have fragile and hard to maintain tests)
* Classes/methods interacting with resources directly or indirectly.
  - It is impossible to test the resources affected within a Unit test.
* Glue code.
  - Mostly passing data between collaborators and has no or small amount of logic so it can be covered indirectly by integration/functional tests.

Examples:

* Controllers - They can only be properly covered by functional tests because they are the "glue" that connects different app layers. Only controller final result matter.
* Most models - They usually have many dependencies and interact with resources.
* Simple DTOs
* Factories

### Integration Tests

Cover classes and methods that:

* Cannot be covered with a black box unit test
* Have many dependencies (unit test would require complex mocking)
* Interact with resources (database, file system, 3rd party systems etc.)

Examples:

* APIs:
  - Cover only an interface if it suggests a single active implementation (thus the active implementation will be used implicitly).
  - Cover each implementation if an interface suggests multiple implementations.
* SPIs:
  - Same as APIs.
  - We recommend creating tests with fake implementations and execution of methods that are using the SPI you’re covering to make sure the interface’s implementations can be swapped without breaking the application.
* Models/Resource Models:
  - Usually have numerous dependencies, interacting with resources (database, cache, file system, 3rd party systems etc.) and sometimes can substitute an API

See: [Running Integration Tests][3].

### Integrity Tests

Code to cover:

* Must cover any code which introduces convention in scope of a particular implementation, violation of which would lead to runtime error.

Expected code coverage:

* Must cover all files applicable to this convention.

For example:

* Scan for all XML-files of certain type and validate them using appropriate XML-schema.
* Scan for declarations of templates and invoke "fallback" mechanism to ensure they resolve.

**Static Code Analysis**

Code to cover:

* Must cover all new code files (or whatever qualifies as "new").

Expected code coverage: must cover all applicable files in entire code base.

**Legacy Tests**

Code to cover:

* Must cover any formal backward-incompatible changes on code level.
For more information, see
[Magento's backward compatibility policy]({{ page.baseurl }}/contributor-guide/backward-compatible-development/).

A failure in a legacy test must provide comprehensive explanation of an alternative, if there is any.

Expected code coverage:

* Must cover majority of occurrences of the backward-incompatible change
* Should cover 100% of occurrences

Not all changes can be covered.
For example, it is possible to scan a file for literals, but it is unfeasible to analyze string concatenation or any other dynamic way of building variable.

### Functional Manual Tests

Must cover new or changed application behavior (functional).
Added/updated functionality should be covered by a functional Zephyr test(s) related to current sprint commitment.

## Review

A task, when complete by the author, should be reviewed by another Magento community member through a process of formal code review.
The reviewer should check whether the task meets the original acceptance criteria and verify that there are no code defects and that all points of this definition of done are met.

The work cannot be considered as complete unless all the criteria are verified.

[0]:{{ page.baseurl }}/coding-standards/docblock-standard-general.html
[1]:{{ page.baseurl }}/contributor-guide/backward-compatible-development/
[2]:{{ page.baseurl }}/test/testing.html
[3]:{{ page.baseurl }}/test/integration/integration_test_execution.html
[4]:https://github.com/magento/devdocs
[5]:{{ page.baseurl }}/extension-dev-guide/versioning/index.html
[6]:{{ page.baseurl }}/extension-dev-guide/versioning/codebase-changes.html
[7]:{{ page.baseurl }}/extension-dev-guide/versioning/dependencies.html