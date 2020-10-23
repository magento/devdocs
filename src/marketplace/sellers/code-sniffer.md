---
group: marketplace-sellers
title: Code Sniffer
---

## Overview

Code Sniffer is a static test that allows the detection of violations of the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) and prevents common issues by static code analysis.

## What testing is for

It is typical for a Magento project to use source code from several vendors. By adopting [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) we solve two problems :

1. Identify common coding errors and pitfalls at an early stage before code execution.
1. Standardize and unify the way how code is written, so it may be easily read by developers from different organizations.

## When testing is done

Code Sniffer is mandatory for extensions of any type. The entire code base of a submitted extension is analysed regardless of the scope of changes. Only extensions that have passed Code Sniffer may be listed on [Magento Marketplace](https://marketplace.magento.com/).

## What is being checked

Code Sniffer validates that the implementation of the submitted extension adheres to the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/).

## Tools and environments used

Our Code Sniffer is based on the [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) and uses [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) as a ruleset.

The configuration may be easily reproduced locally by installing PHPCS and Magento Coding Standard via Composer as a global dependency for a particular project.

The [PHPCS CLI command](https://github.com/squizlabs/PHP_CodeSniffer/blob/master/bin/phpcs) is run against the provided extension's version to detect violations of the [[Magento Coding Standard]](https://github.com/magento/magento-coding-standard/) as following:

```bash
phpcs --standard=Magento2 --extensions=php,phtml --error-severity=10 --ignore-annotations --report=json --report-file=report.json <path-to-extension>
```
If PHPCS finds any errors, the provided extension's version is rejected.

## Reading the error report

All detected errors are self-explanatory and have references to the locations in the code where they were detected.

Magento Coding Standard constantly evolves, so please reference [its implementation](https://github.com/magento/magento-coding-standard/blob/develop/Magento2/ruleset.xml) for an up-to-date list of implemented rules.

According to the Magento Coding Standards, Code Sniffer distinguishes several levels of detected violations :

| Type | Severity | Description |
|------|----------|-------------|
| Error | 10 | Critical code issues that indicate a bug or security vulnerability. |
| Warning | 9 | Possible security issues that may cause bugs. |
| Warning | 8 | Magento specific code issues and design violations. |
| Warning | 7 | General code issues. |
| Warning | 6 | Code style issues. |
| Warning | 5 | PHPDoc formatting and commenting issues. |

Only violations of type "Error" (severity >= 10) will prevent submissions being published on the Magento Marketplace. Whilst all other reported issues do not block delivery of the extension, we encourage developers to review and fix them.

## Troubleshooting

For best practise, all developers should adopt [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) and [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) in their development workflow and CI/CD infrastructure and verify coding standards before submission.

[Magento Coding Standard](https://github.com/magento/magento-coding-standard/) is an open source project so please report any issues or pull requests with enhancements directly on GitHub.

Feedback and communication on the [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel is always welcomed.
