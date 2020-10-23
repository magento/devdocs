---
group: marketplace-sellers
title: Semantic Version Check
---

## Overview

The Semantic Version Check (SVC) is a quality check that validates the change level of an extension submission against the change level declared by the extension developer.

## Why we test?

[Semantic Versioning](https://semver.org/) is a good way to communicate what kind of changes were introduced between software releases. This way, clients may estimate the risk level of upgrading a particular software package and how much effort is required to adopt the new version.

Magento follows Semantic Versioning and encourages all 3rd-party vendors to apply this versioning strategy for their Magento extensions as well.

Magento Marketplace uses version information to fast-track the extension validation process for submissions that introduce patch level changes, as these are expected to be backwards compatible bug fixes without any new functionality.

## When we test?

For this check to be applied, the following conditions must be met:

1. A new submission must update an already existing version of an extension that has been previously published to the Marketplace storefront.
1. The extension developer must declare the new submission as a "PATCH" level change.

## What we are looking for?

The SemVer check will analyze and determine the change level of the new submission and validate if, in fact, the change level is a "PATCH" level change.

If the submission is a "PATCH" level change, the submission is fast-tracked and is exempt from the Manual QA process. Otherwise, this check fails.

A failed SemVer check has no impact on extension approval. If a submission receives Manual QA approval, then the extension will be published.

## What tools and environment we are using?

The Semantic Version Check is implemented using the publicly available, [magento/magento-semver](https://github.com/magento/magento-semver) tool.

Magento SemVer is a static analysis tool that validates the change level of Magento source code based on the [Semantic Versioning Specification](https://semver.org/) and makes suggestions on what the version increment should be.

Magento SemVer can:

1. Detect, PATCH, MINOR and MAJOR change levels and suggest the appropriate change level for a new version.
1. Validate an update against a desired change level.

## How read an error report?

The error report will list minor and major changes detected in an extension's source. To fix an error, the implementation should be refactored so it no longer introduces non-patch level changes.

## Troubleshooting

To perform a check, the Magento SemVer is run as follows :

```bash
php magento-semver/bin/svc compare <path-to-latest-published-extension-version> <path-to-submitted-extension-version> 1
```

This command may be executed for any environment with PHP 7.2.29 and above.

If any issues are detected with the Semantic Version Check, [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so support will be able assist you. Specify the relevant Submission ID in the ticket.

As the check is solely based on [Magento SemVer open source project](https://github.com/magento/magento-semver), submitting an issue or pull request on GitHub is highly recommended.

Feedback on the [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel is always welcome.
