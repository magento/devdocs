---
group: marketplace-sellers
title: Copy Paste Detector
---

## Overview

The Copy Paste Detector check validates that implementation of the submitted extension is unique and not duplicated code from an already known extension.

## What testing is for

Only original extensions can be listed in the [Magento Marketplace](https://marketplace.magento.com/). We test submitted extensions to detect duplication of code from Magento or from another extension available in the Magento Marketplace. If duplication is extensive, the extension submission is rejected on the grounds that the content is plagiarized.

## When testing is done

All submissions are subject to the Copy Past Detector check regardless of extension type and scope of changes.

## What is being checked

Copy Paste Detector performs a static analysis of the source code and tries to detect similar code snippets.

If the Detector identifies many similarities between the submitted extension and a previously known extension, we may mark the check as failed if there is strong evidence of plagiarism. We can also schedule problematic submissions for human code review if there are concerns regarding code fragments. Expert judgement is required to make final decisions about plagiarism.

## Tools and environments used

Copy Paste Detector includes, but is not limited to, [PHPCPD](https://github.com/sebastianbergmann/phpcpd). We also use a proprietary solution to search for duplicates across multiple extensions and their versions. This solution ignores irrelevant implementation details such as variables, classes and method names, and so on.

## Reading an error report

Copy Paste Detector provides a list of places in your extension code that were identified as duplicates. If the extension is found to duplicate Magento code, review the list and remove each instance of duplicated code. Then, upload a new package and resubmit the extension. We reject any extension submission that has duplicate code from another extension.

## Troubleshooting

Implementing a solution for detecting plagiarism in source code is not a trivial task. As a result, we expect that the test results will sometimes be inaccurate, for example:

-  We may not detect 'copy paste' if the code was changed significantly, or if only the concept of the extension was copied. We still consider such use-cases as plagiarism and hope that the original extension authors and the Magento community will report such behavior.

-  We might incorrectly identify code fragments that follow a common pattern as duplicates.  To prevent an extension submission from being rejected due to incorrect results, we also perform manual code review. Even with manual reviews, we can still make mistakes.

If you notice an extension submission that is rejected or approved based on inaccurate information from the Copy Paste Detector, [create a Marketplace Support ticket](https://marketplacesupport.magento.com/hc/en-us) so that we can resolve your case and keep our community healthy. Please specify your Submission ID in a ticket.

We always welcome feedback and discussion on the [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
