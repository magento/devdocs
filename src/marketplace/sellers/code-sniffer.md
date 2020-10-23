---
group: marketplace-sellers
title: Code Sniffer
---

## Overview

Code Sniffer is a static test that allows the detection of violations of the [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) and prevents common issues by static code analysis.

## Why we test?

It is typical for Magento project to use source code from several vendors. By adopting [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) we solve two problems:

1. Identify common coding errors and pitfalls on early stage before code execution.
1. Standardize and unify the way how code is written so it may be easily read by engineers from different organizations.

## When we test?

Code Sniffer is mandatory for extensions of any type. Entire code base of a submitted extension is analysed regardless a scope of changes. Only extensions that passed Code Sniffer may be listed on [Magento Marketplace](https://marketplace.magento.com/).

## What we are looking for?

Code Sniffer validate that implementation of submitted extension adhere [Magento Coding Standard](https://github.com/magento/magento-coding-standard/).

## What tools and environment we are using?

Our Code Sniffer is based on the [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) and use [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) as a ruleset.

Configuration may be easily reproduced locally by installing PHPCS and Magento Codign Standard via Composer as a global dependency or for particular project.

We run the [PHPCS CLI command](https://github.com/squizlabs/PHP_CodeSniffer/blob/master/bin/phpcs) against the provided extension's version to detect violations of the [[Magento Coding Standard]](https://github.com/magento/magento-coding-standard/) as following:

```bash
phpcs --standard=Magento2 --extensions=php,phtml --error-severity=10 --ignore-annotations --report=json --report-file=report.json <path-to-extension>
```
If PHPCS finds any errors, the provided extension's version is rejected.

## How read an error report?

All detected errors are self-explained and has reference to location in a code where they were detected.

Magento Coding Standard constantly evolves so please reference to [its implementation](https://github.com/magento/magento-coding-standard/blob/develop/Magento2/ruleset.xml) for up-to-date list of implemented rules.

According to Magento Coding Standard Code Sniffer distinguish several levels of detected violations:

| Type | Severity | Description |
|------|----------|-------------|
| Error | 10 | Critical code issues that indicate bug or security vulnerability. |
| Warning | 9 | Possible security and issues that may cause bugs. |
| Warning | 8 | Magento specific code issues and design violations. |
| Warning | 7 | General code issues. |
| Warning | 6 | Code style issues. |
| Warning | 5 | PHPDoc formatting and commenting issues. |

Only violations of type "Error" (severity >= 10) prevent submissions to be published at Magento Marketplace. While all other reported issues do not block delivery of the extension we highly encourage developers review and fix them.

## Troubleshooting

As a best practice all developers should adopt [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) and [Magento Coding Standard](https://github.com/magento/magento-coding-standard/) in their development workflow and CI/CD infrastructure and verify coding standard before submission.

[Magento Coding Standard](https://github.com/magento/magento-coding-standard/) is an open source project so please report any issues or pull requests with enhancements directly at GitHub.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
