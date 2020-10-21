# Copy Paste Detector

## Overview

Copy Past Detector check validates that implementation of the submitted extension is unique and not duplicate code from already known extension.

## Why we test?

At Magento, an Adobe company, we take seriously about authorship. So while supporting open collaboration we strictly guard our community from malicious members and forbid any kind of plagiarism.

## When we test?

All submissions is subject of Copy Past Detector check regardless of extension type and scope of changes.

## What we are looking for?

Copy Past Detector perform static analysis of source code and tries to detect similar code snippets. 

If we detect a lot of similarities between submitted extension an previously known extension we may mark check as failed if there are strong evidences of plagiarism or schedule submissions for human code review if there are some concerns regarding code fragments but expert judgement is required for final decision.

## What tools and environment we are using?

Copy Past Detector include but not limited to [PHPCPD](https://github.com/sebastianbergmann/phpcpd). On top of PHPCPD we use proprietary solution to search for duplicates across multiple extensions and their versions ignoring irrelevant implementation details such as variable, class and method names, etc.

## How read an error report?



## Troubleshooting

Implementing solution for detecting plagiarism in source code is not a trivial task. So we expect that sometimes our solution will give incorrect result:
- We may not detect copy paste if code was changed significantly or only idea of the extension are taken. We are still consider such use-case as a plagiarism and hope here on original extension authors and Magento community to report such unworthy behavior.
- We may claim as duplication code fragment that follow some common pattern. To reduce amount of such false-negative results we perform manual code review. But as we all humans mistakes still may happens. 

For both kind of issues please [create a Support ticket](https://marketplacesupport.magento.com/hc/en-us) so we will be able to resolve your case and keep our community healthy. Please specify your Submission ID in a ticket.

We also always glad for feedback and communication at [Magento Community Engineering Slack](https://magentocommeng.slack.com/archives/C7SL5CGDN) #marketplace channel.
