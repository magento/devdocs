---
group: marketplace-sellers
title: Code Sniffer
---

## Overview

Code Sniffer is a static test that uses static code analysis to detect violations of the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) to prevent common coding errors.

## What testing is for

Magento projects typically use source code from several vendors. By adopting the [Magento Coding Standard](https://github.com/magento/magento-coding-standard), we solve two problems:

1. Identify common coding errors and pitfalls at an early stage before code execution.
1. Standardize and unify the way code is written, so that it can  be read easily by developers from different organizations.

## When testing is done

Code Sniffer is mandatory for extensions of any type. When you submit an extension, Magento uses Code Sniffer to analyze the entire code base regardless of the scope of changes. Only extensions that have passed Code Sniffer testing can be listed in the [Magento Marketplace](https://marketplace.magento.com/).

## What is being checked

Code Sniffer validates that the implementation of the submitted extension adheres to the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/).

## Tools and environments used

The Magento EQP Code Sniffer is based on the [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) and uses [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) as a ruleset.

You can complete Code Sniffer testing in a development environment by using Composer to install PHPCS and the Magento Coding Standard as a global dependency for a particular project.

You can test an extension to detect violations of the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) using the following [PHPCS CLI command](https://github.com/squizlabs/PHP_CodeSniffer/blob/master/bin/phpcs):

```bash
phpcs --standard=Magento2 --extensions=php,phtml --error-severity=10 --ignore-annotations --report=json --report-file=report.json <path-to-extension>
```
If PHPCS finds any errors, the extension in `<path-to-extension>`  is rejected.

## Reading the error report

All detected errors include a description of the problem with references to the locations in the code where the errors were detected.

The Magento Coding Standard evolves continuously and the rules change. You can find the most current version with an up-to-date list of implemented rules in the [Magento Coding Standard GitHub repository](https://github.com/magento/magento-coding-standard/blob/develop/Magento2/ruleset.xml).

According to the Magento Coding Standard, Code Sniffer classifies detected violations in the following type categories:

| Type | Severity | Description |
|------|----------|-------------|
| Error | 10 | Critical code issues that indicate a bug or security vulnerability. |
| Warning | 9 | Possible security issues that can cause bugs. |
| Warning | 8 | Magento specific code issues and design violations. |
| Warning | 7 | General code issues. |
| Warning | 6 | Code style issues. |
| Warning | 5 | PHPDoc formatting and commenting issues. |

Only violations of type "Error" (severity >= 10) prevent a submitted extension from being published on the Magento Marketplace. Although other reported issues do not block delivery of the extension, we encourage developers to review and fix them.

## Troubleshooting

As a best practice, we recommend that developers include [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) and the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) in their development workflow and CI/CD infrastructure to verify that code complies with the coding standards before submitting to the Magento Marketplace.

The [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) is an open source project. You can report issues or submit pull requests with enhancements directly on GitHub.

We welcome feedback and discussion on the [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
