---
group: dod
title: DoD - Automated Tests
---

## Overview

All changes to Adobe Commerce projects should be covered by automated tests to meet the "Definition of Done" (DoD).

### Understanding black, white, and gray tests

*  A black box test does not have any knowledge of how the subject of the test is built.
*  A white box has knowledge of how the subject of the test is built. The test logic is usually coupled to the implementation and will typically be sensitive to changes.
*  A gray box is similar to black box testing where the test is not directly coupled to the subject's implementation but the test cases may be designed in a way to assert that sensitive portions of the implementation will work correctly.

For example:

Assume there is a method with the signature `function removeLetterFromString(string $letter, string $string): string`:

*  A black box test would test the obvious cases both normal cases such as `removeLetterFromString('a', 'fooabar') === 'foobr'` and edge cases such as when `$letter` or `$string` are empty or `$letter` contains multiple or multibyte characters. It would probably test several variations of string lengths. Notice there is no knowledge of how this function is written.
*  A white box test would look into the implementation of the method and see that it calls a microservice API and make sure that each condition of the code has test coverage. For example, this test may force the microservice client to return an error and have a test for the expected handling of that scenario. This would not be a reusable test and it is directly coupled to the implementation.
*  A gray box test would look at the implementation of the method and see that it calls a microservice API and injects the `$string` into the URL so it may add some extra test coverage for strings that contain unsafe URL characters such as `&?=%/`. This is not coupled to the implementation as the implementation could be changed and the test should still pass.

### Automated tests

Code changes must be covered by automated tests according to Classification of Magento Automated Tests.
When choosing how to cover your changes, pick the most lightweight (execution-time wise) test type that will provide sufficient coverage.
If you encounter an existing test that insufficiently covers your changes, you can delete that test but you must write a proper test to replace it. For example, a method that interacts with database has a unit test. You can replace it with an integration test.

Be aware that while high-level tests may provide coverage to code, it is only indirect coverage. Tests with more direct usage of the changed code will likely still needs to be written to ensure that regardless of the which components are actually used in the black box, the individual components still have coverage.

High level testing policy:

*  Any code that is added or changed must have explicit tests to validate the behavior. To clarify, this policy is intended to prove that the integrity of the code is verified regardless of which implementations are loaded in a black box environment. This may be done through unit or integration testing as appropriate.
*  Code must be also shown to work with known collaborators. This must be done through integration tests and ideally should involve as few components as possible per test case. This level of tests ensures that the code will work with its known associates. Specific examples can be subject but such associates would include composites, chains, pools, etc. but also include cases like a Template filter working with a specific processor loaded.
*  In addition, regardless of the interpretation of the testing strategy below: Any class marked with an `@api` annotation MUST be covered with explicit test coverage via integration or unit tests.

These tests must test the concrete implementation's behavior in a way that can not be inadvertently changed outside of the test itself.

For example: testing a concrete class through DI preference is not safe because it could be overridden via configuration of another loaded module. The test should not ask for the interface but rather the concrete implementation.

### Integration tests

An integration test should be used to cover any code that does not meet the requirements of a unit test or functional test and should be thought of as essentially the default test type.

Integration tests come in many forms and can drastically vary in definition depending on what the intention of the test is. Generally speaking an integration test verifies that two or more things work together correctly; we are testing the _integration_ of one thing with another thing.
For the purpose of Magento testing, there are essentially two broad categories of integration tests: narrow-form and broad-form.

*  Narrow-form integration tests focus on testing something mostly in isolation an can be as simple as a unit test as described in this guide except without mocked dependencies.
*  Broad-form integration tests focus on testing something with less isolation and will involve multiple components explicitly collaborating, compared to narrow-form where the dependencies are implicit collaborating.

Integration test policy:

*  Methods and classes must have black box or gray box test coverage, including all variations for normal use, as well as edge-cases.
*  SPIs must have test coverage. Often times Magento has extension points that may only be utilized by extension developers. Use TestModules to implement those SPI extension points and verify they are used correctly.
*  As mentioned above, classes marked with `@api` must contain coverage. Integration tests must be used cover these classes unless a unit test is more appropriate. This includes JS modules and components.
*  Consumers of default SPI implementations should have at least basic coverage that ensures the default implementations of the SPI are correctly configured and loaded.

For example, `Magento\Framework\SomeClassFilter` may contain a `FilterPool` that comes with default `FilterInterface`'s from `Magento\Framework`. Each of these implementations would have their own coverage pursuant to this document. However, there should also be some basic assertions within the test coverage for `Magento\Framework\SomeClassFilter` that ensure each of the default filters are loaded correctly.
This should not be explicit coverage such as `$filter->isLoaded('someDefaultFilter')`.

See: [Running Integration Tests][1].

### Functional tests

UI functional tests are inherently unstable regardless of platform or testing framework. For this reason, along with reasons of maintainability and quality assurance delivery time, these tests should be prioritized below all other tests types.

Functional test policy:

*  Web API endpoints must have functional test coverage via api-functional tests. These tests should ensure that the endpoints behave in accordance to their service contracts regardless of the actual concrete implementation that may be loaded.
*  For UI-related code, there are some circumstances where it is not possible to cover changes with unit or integration tests. In these cases the appropriate type of coverage would be a functional test but this is a last resort only.

However, aside from those cases, UI functional tests should only be used to cover P0/P1 testing scenarios. If there are no scenarios available to make this decision, a product owner must be consulted for approval of new tests.

If there is a scenario that is not classified as a P0/P1 but should be, have a discussion with the product owner to get it elevated.

See [Functional Tests][0].

### Unit tests

There are a small number of use cases for unit tests in Magento. The nature of our code and development practices make it increasingly hard to write and maintain high-quality unit tests.
Many of them end up being replaced by integration tests or are practically useless from the beginning due to how much mocking is needed to make them pass.
Generally, an integration test is the preferred test type.

A unit test may be preferred when you have classes or methods that:

*  Have few or no dependencies.
   *  The test must not be directly coupled to the collaborators of the test subject. If the collaborators are solely responsible for the behavior of the tested subject, it will not be a good unit test.
*  Do not interact with resources such as databases, the file system, 3rd party systems, etc.
*  Can be covered by a black box test.
   *  The test must not be a mirror of the code. Instead, the test must validate that the contract of the method or class is upheld by the implementation. Specific implementations may be weak in certain areas so specific corner cases could cover that logic while still being a black box test.
*  Would not be easily foreseen to have dependencies in the future.
   *  This can be hard to predict but a good example of when it would be unlikely is a simple utility class that performs some standalone operation. By contrast, a helper would be very likely to have dependencies.

Examples:

*  Utility classes such as `\Magento\Framework\Math\Random`.
*  Simple classes that can also be used independently such as `\Magento\Framework\Api\SortOrder`.
*  Algorithms that perform calculation or parsing.

And by explicit contrast here are some things NOT to cover:

*  Classes/methods with numerous dependencies.
   *  Creation of unit tests for such classes will result in the creation of many mocks and writing complex test logic (that most likely follows code to large extend and as a result we will have fragile and hard to maintain tests)
*  Classes/methods interacting with resources directly or indirectly.
*  Glue/wiring
   *  Mostly passing data between collaborators and has no or small amount of logic so it can be covered indirectly by integration/functional tests.

Examples:

*  Controllers
   *  They are the "glue" that connects different app layers. They should not contain any business logic and should only be responsible for directing request/response information to/from services. They can be tested via integration or functional tests. Also, controller-specific tests will likely be rendered useless and ultimately deleted at some point in the context of the service isolation initiative which makes this idea much more important.
*  Model triad classes (Model/Resource Model/Collection) as they have many dependencies and interact with resources.
*  Factories

### Integrity tests

Code to cover:

*  Must cover any code which introduces convention in scope of a particular implementation, a violation of which would lead to runtime error.

Expected code coverage:

*  Must cover all files applicable to this convention.

For example:

*  Scan for all XML-files of certain type and validate them using appropriate XML-schema.
*  Scan for declarations of templates and invoke "fallback" mechanism to ensure they resolve.

### Static tests

Code to cover:

*  Must cover all introduced conventions and discovered faulty or insecure code structures.
*  Must cover any formal backward-incompatible changes on code level, if possible. Applies only to BIC of the code in our repositories. There is no requirement to cover third-party dependencies BIC in scope of DoD. The replacement suggestion should be provided in static test message. For more information, see [Magento's backward compatibility policy][2].

Expected code coverage:

*  Must cover the majority of occurrences of the backward-incompatible change.
*  Should cover 100% of occurrences.

The static tests should be delivered to the Magento Coding Standard [repository](https://github.com/magento/magento-coding-standard).

See [Magento Coding Standard contributing guide][3] for details.

Not all changes can be covered.
For example, it is possible to scan a file for literals, but it is unfeasible to analyze string concatenation or any other dynamic way of building a variable.

### Functional Manual Tests

Must cover new or changed application behavior (functional).
Added/updated functionality should be covered by a functional Zephyr test(s) related to current sprint commitment.

The work cannot be considered as complete unless all the criteria are verified.

[0]:{{ site.gdeurl }}/test/testing.html
[1]:{{ site.gdeurl }}/test/integration/integration_test_execution.html
[2]:{{ site.gdeurl }}/contributor-guide/backward-compatible-development/
[3]:{{ site.gdeurl }}/coding-standards/contributing.html
