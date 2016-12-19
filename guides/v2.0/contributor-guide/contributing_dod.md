---
layout: default
group: contributor
subgroup: contributor
title: Magento Definition of Done
menu_title: Magento Definition of Done
menu_order: 2
menu_node:
version: 2.0
github_link: contributor-guide/contributing_dod.md
redirect_from: /guides/v1.0/contributor-guide/contributing_dod.html
---


<h2 id="dod">Magento Definition of Done</h2>

### Overview

The "Definition of Done" (DoD) is a collective term for a set of acceptance criteria that is applied to any changes in the product code base. The requirements that result from our DoD are applied by default to all user stories and to each task within this user story.  Internally, the Magento development teams follow the DoD to ensure that all work meets consistent release criteria. We encourage our community contributors to also follow the Magento DoD.

At a high level, the criteria defined in our "definition of done" revolve around the principle of writing clean code that is reviewed and includes unit tests and solid documentation along with the code.

The following sections provide additional details about each of these criteria:


### Functional Backward Compatibility

Existing product features and functionality must be retained during any changes to the code. If backward-incompatible functional changes are made, the documentation should explain the justification and provide the "business value".

For more information, see [Magento's backward compatibility policy]({{page.baseurl}}architecture/back-compatibility.html)

### Documentation

All changes, additions, and extensions to the product should be documented by the author. The documentation should provide an overview of the change, and information about standard use cases, audience, and procedural instructions for implementing the feature.

Ideally, the information about the submitted code should be added to the official Magento DevDocs library. Contributors are asked to submit the doc as a Pull Request to the <a href="https://github.com/magento/devdocs" target="_blank">DevDocs Github repo</a>.

When submitting either code or documentation, a brief summary of the work should be included in the commit message.

Additionally, the code itself should contain high-quality comments/descriptions for all classes and methods.

Any backwards-incompatible changes must also be recorded in the accompanying documentation, using the following format:

<table>
<tr>
<th><u>Change</u></th>
<th><u>Was in Magento 1.x</u></th>
<th><u>Became in Magento 2.x</u></th>
</tr>
<tr>
<td>description</td>
<td>example</td>
<td>example</td>
</tr>
</table>

<h3>Tests</h3>

<h4>Automated Tests</h4>

Code changes must be covered by automated tests according to Classification of Magento Automated Tests.

Before committing code changes, author must ensure successful execution of all tests by running all tests or at least those which might be affected by code changes. Continuous integration enforces execution of all tests and author is accountable for broken builds.

#### Functional Tests
Must cover new or changed application behavior (functional).
Added/updated functionality should be covered by a functional autotest(s) related to previous sprint commitment in scope of current sprint.

#### Unit Tests

Code to cover:

* new code (except auto-generated code) MUST BE covered by unit tests
* modified legacy code:

New and modified code MUST BE covered if it changes the system's behavior, and MAY BE covered if it does not change system's behavior (class/method renamed, class moved, other minor changes)

In cases where it is impossible to cover, replace with integration tests.

It is not necessary to cover classes created by auto-generation and methods that don't have any business logic.

#### Integration Tests

Code to cover:

* Must cover code that interacts with operating system environment, database or any other 3rd-party system directly
* Must cover code in "Model" layer that interacts with database indirectly
* Must be used as alternative of unit tests in legacy code in the following cases:

	*	If it is impossible to cover due to high code coupling
	*	If code had only minor modification and in order to cover it with unit test it would require refactoring of code, not related to the original modification

#### Integrity Tests

Code to cover:

* Must cover any code which introduces convention in scope of a particular implementation, violation of which would lead to runtime error.

Expected code coverage: must cover all files applicable to this convention.

For example:

Scan for all XML-files of certain type and validate them using appropriate XML-schema
Scan for declarations of templates and invoke "fallback" mechanism to ensure they resolve

**Static Code Analysis**

Code to cover:

* must cover all new code files (or whatever qualifies as "new").

Expected code coverage: must cover all applicable files in entire code base.

**Legacy Tests**

Code to cover:

* Must cover any formal backwards-incompatible changes on code level. For more information, see
<a href="{{page.baseurl}}architecture/back-compatibility.html">Magento's backward compatibility policy</a>.

A failure in legacy test must provide comprehensive explanation of an alternative, if there is any.

Expected code coverage:

* Must cover majority of occurrences of the backwards-incompatible change
* Should cover 100% of occurrences

Not all changes can be covered. For example, it is possible to scan a file for literals, but it is unfeasible to analyze string concatenation or any other dynamic way of building variable.

#### Functional Manual Tests
Must cover new or changed application behavior (functional).
Added/updated functionality should be covered by a functional Zephyr test(s) related to current sprint commitment.

### Review
A task, when complete by the author, should be reviewed by another Magento community member through a process of formal code review. The reviewer should check whether the task meets the original acceptance criteria and verify that there are no code defects and that other points of this definition of done are met:

* There are no unauthorized backward-incompatible functional changes
* All changes are documented properly
* All changes are covered with automated tests
* Determine if code changes caused any failure in continuous integration builds.

The work cannot be considered as complete unless all the criteria are verified.
