---
group: contributor-guide
title: Commerce Definition of Done
redirect_from:
- guides/v2.3/contributor-guide/contributing_dod.html
- guides/v2.4/contributor-guide/contributing_dod.html
---

## Overview

The "Definition of Done" (DoD) is a collective term for a set of acceptance criteria that is applied to any changes in the product code base.
The requirements that result from our DoD are applied by default to all Magento-owned repositories.

Internally, the Magento development teams follow the DoD to ensure that all work meets consistent release criteria.
We encourage our community contributors to also follow the Magento DoD.

At a high level, the criteria defined in our "definition of done" revolve around the principle of writing clean code that is reviewed and includes automated tests and solid documentation along with the code.

## Definition of Done

The checklist that can be used to evaluate if the DoD has been met:

- All changes must be approved by reviewer.
- All changes must be covered by automated tests if that is possible.
- All functional changes should be documented.
- All backward incompatible changes should be approved and covered by static tests if that is possible. Static tests should be delivered to the [magento-coding-standard][5] repository.
- TCO impact should be defined for all changes.

The following sections provide additional details about each of these criteria:

## Review

A task, when complete by the author, should be reviewed by a maintainer through a process of formal code review.

The reviewer should check whether the task meets the original acceptance criteria, verify that there are no code defects and that all points of this definition of done are met.

## Tests

All changes to Adobe Commerce projects should be covered by automated tests to meet the "Definition of Done" (DoD).

The details on backward compatiblity criterias included in the "Definition of Done" (DoD) can be found on [DoD - Automated Tests page][3]

## Documentation

All changes, additions, and extensions to the product should be documented by the author.
The documentation should provide an overview of the change, and information about standard use cases, audience, and procedural instructions for implementing the feature.

Documentation for the submitted code should be submitted as a pull request to the official Magento DevDocs [repository](https://github.com/magento/devdocs).

When submitting either code or documentation, a brief summary of the work should be included in the commit message.

Additionally, the code itself should follow our [DocBlock standard][1] and contain high-quality comments and descriptions for all classes and methods.

For documenting backward-incompatible changes, please see [Backwards Compatible Development][2].

## Backward Compatibility

All backward incompatible changes should be approved and covered by static tests to meet the "Definition of Done" (DoD).

The details on backward compatiblity criterias included in the "Definition of Done" (DoD) can be found on [DoD - Backward Compatibility page][0]

## TCO Analysis

All functional changes should analysed for the impact on merchant total cost of ownership (TCO) and the results of the analysis should be added to the issue or pull request description to meet the "Definition of Done" (DoD).

The details on TCO analysis required to meet the "Definition of Done" (DoD) can be found on [DoD - TCO Analysis][4]

The work cannot be considered as complete unless all the criteria are verified.

[0]:{{ site.gdeurl }}/contributor-guide/dod/backward-compatibility.html
[1]:{{ site.gdeurl }}/coding-standards/docblock-standard-general.html
[2]:{{ site.baseurl }}/contributor-guide/backward-compatible-development/index.html#where-to-document
[3]:{{ site.gdeurl }}/contributor-guide/dod/automated-tests.html
[4]:{{ site.gdeurl }}/contributor-guide/dod/tco-analysis.html
[5]:https://github.com/magento/magento-coding-standard
