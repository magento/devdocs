---
group: marketplace-sellers
title: Copy Paste Detector
---

## Overview

The Copy Paste Detector check validates that implementation of the submitted extension is unique and not duplicated code from an already known extension.

## Why testing is done

At Magento, an Adobe company, we take authorship seriously. So while supporting an open collaboration, we strictly guard our community from malicious members and forbid any kind of plagiarism.

## When do we test?

All submissions is subject of Copy Past Detector check regardless of extension type and scope of changes.

## What is being checked

Copy Paste Detector performs a static analysis of the source code and tries to detect similar code snippets.

If the Detector find  many similarities between the submitted extension and a previously known extension, we may mark the check as failed if there are strong evidences of plagiarism. We may schedule submissions for human code review if there are some concerns regarding code fragments, but expert judgement is required for the final decision.

##  Tools and environments used

Copy Paste Detector includes, but is not limited to, [PHPCPD](https://github.com/sebastianbergmann/phpcpd). On top of PHPCPD we use a proprietary solution to search for duplicates across multiple extensions and their versions ignoring irrelevant implementation details such as variables, classes and method names, etc.

## Reading an error report

Copy Paste Detector will provide a list of places in your extension code that were identified as duplicates. If the extension is found to duplicate Magento code, review the list and remove each instance of duplicated code. Then, upload a new package and resubmit the extension. Any extension that is found to duplicate code from another extension will be rejected.

## Troubleshooting

Implementing a solution for detecting plagiarism in source code is not a trivial task. So we expect that sometimes our solution will give an incorrect result :

-  We may not detect 'copy paste' if the code was changed significantly or only the concept of the extension was copied. We are still considering such use-cases as plagiarism and hope the the original extension authors and Magento community will report such behavior.

-  We may claim as duplication code fragment that follow some common pattern. To reduce amount of such false-negative results we perform manual code review. But as we all humans mistakes still may happens.

For both kind of issues please [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so we will be able to resolve your case and keep our community healthy. Please specify your Submission ID in a ticket.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
