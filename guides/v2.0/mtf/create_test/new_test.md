---
layout: default
group: mtf-guide
subgroup: 40_Approach
title: Create a test in the Functional Testing Framework
menu_title: New functional test. Theory
menu_order: 2
version: 2.0
github_link: mtf/create_test/new_test.md
---

The FTF helps to create a new test, you can extend an out-of-the-box test, or create a completely new test.

### Extend an out-of-the-box test {#extending-oob-test}

You can extend a test by adding or replacing a [test entity][]. Test entities for the module are stored in the `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/<testing_module>` directory.

#### Usage {#ext-usage}

This approach is useful when the Magento functionality was extended. For example, the minor changes were made in the existing functionality of a module. Also you can extend an out-of-the-box test to extend the current test coverage if the target functionality is not completely covered by the out-of-the-box test.

Example use cases:

- [variation addition][]
- [variation extension][]
- [fixture extension][]
- [repository addition][]
- [block overriding][]

### Create a functional test {#create-test}

If new modules are added to Magento you would need to create a new test to check the functionality.

New test must be stored in the corresponding module `<magento2_root_dir>/dev/tests/functional/tests/app/Magento/<testing_module>`.

Each test consists of four main components: a test object, test data, a test flow, a test assertion.

#### Test object {#test-object}

A test object is an object that you are going to test. Most of the test actions are performed under this object.
The test object is represented by a [fixture][].  The fixture defines properties of an object.

#### Test data {#test-data}

There are two types of test data:

 - Data for the test, stored in a [data set][].
 - Preconditions:
    - Sample data that is stored in a [fixture repository][]. In a data set, it is stored as a name of the fixture repository. 
    - A sample test entity that can be created by a [handler][].

#### Test flow {#test-flow}

A test flow is a set of test steps that you want to perform under the test object to check required functionality. Test steps are defined in a [test case][]. Usually, a test step contains a set of actions. Each action is managed by a method defined in a [block][]. A [page][] is a container for blocks. It stores selectors to identify blocks on an HTML page. 

#### Test assertions {#test-assertions}

A test assertion compares the test flow results with the expected ones. Test assertions are represented by [constraints][].

[Learn more in the "Create a new test" topic.]

<!-- LINK DEFINITIONS -->

[test entity]: {{page.baseurl}}mtf/mtf_entities.html
[variation addition]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html#add_variation
[variation extension]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html#extend_variation
[fixture extension]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_merge
[repository addition]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy
[block overriding]: {{page.baseurl}}mtf/mtf_entities/mtf_page.html#override-blocks

[fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html
[data set]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html
[fixture repository]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture-repo.html
[handler]: {{page.baseurl}}mtf/mtf_entities/mtf_handler.html
[test case]: {{page.baseurl}}mtf/mtf_entities/mtf_testcase.html
[block]: {{page.baseurl}}mtf/mtf_entities/mtf_block.html
[page]: {{page.baseurl}}mtf/mtf_entities/mtf_page.html
[constraints]: {{page.baseurl}}mtf/mtf_entities/mtf_constraint.html

[Learn more in the "Create a new test" topic.]: {{page.baseurl}}mtf/create_test/create_new_test.html
