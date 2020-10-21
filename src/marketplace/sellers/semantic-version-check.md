# Semantic Version Check

## Overview

The Semantic Version Check (SVC) is a quality check that validates the change level of an extension submission against the change level declared by the extension developer.

## Why we test?

[Semantic Versioning](https://semver.org/) is a good way to communicate what kind of changes were introduced between software releases. So clients may estimate how risky is upgrade software and how many effort is required to adopt new version.

Magento follow Semantic Versioning and encourage all 3rd party vendors apply this versioning strategy for their Magento extensions as well.

Magento Marketplace uses version information to fast-track extension validation process for these that have only patch level changes as these expected to be backward compatibility bug fixes without added new functionality. 

## When we test?

For this check to be applied, the following conditions must be met:

1. A new submission must update an already existing version of an extension that has been previously published to the Marketplace storefront.
2. The extension developer must declare the new submission is a "PATCH" level change.

## What we are looking for?

The SVC check will analyze and determine the change level of the new submission and validate if, in fact, the change level is a "PATCH" level change.

If the a submission is a "PATCH" level change, the submission is fast-tracked and is exempt from the Manual QA process. Otherwise, this check fails.

Failed SVC has no impact on extension approval. If Manual QA is passed than extension will be published.

## What tools and environment we are using?

The Semantic Version Check is implemented using the publicly available, [magento/magento-semver](https://github.com/magento/magento-semver) tool.

Magento SemVer is a static analysis tool that validates the change level of Magento source code based on the [Semantic Versioning Specification](https://semver.org/) and makes suggestions on what the version increment should be.

Magento SemVer can:

1. Detect, PATCH, MINOR and MAJOR change levels.
2. Validate an update against a desired change level.

## How read an error report?

Error report will list minor and major changes detected in a code. To fix anr error implementation should be refactored to have only patch level changes.

## Troubleshooting

To perform a check we run Magento SemVer as following:

```
php magento-semver/bin/svc compare <path-to-latest-published-extension-version> <path-to-submitted-extension-version> 1 
```

This command will may be executed at any environment with PHP 7.2.29 and above.

If you detect any issues with Semantic Version Check please [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so we will be able assist you. Please specify your Submission ID in a ticket.

As our check solely based on [Magento SemVer open source project](https://github.com/magento/magento-semver) submitting issue or pull request at GitHub is highly welcoming.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
