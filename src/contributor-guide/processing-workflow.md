---
group: contributor-guide
title: GitHub issue processing workflow
migrated_to: https://developer.adobe.com/commerce/contributor/guides/code-contributions/processing-workflow/
layout: migrated
---

The GitHub issue workflow ensures that issues are clear, well written, and thoroughly vetted. Following these procedures allows valid issues to get the attention they deserve.

Issues that are reported on the public [GitHub](https://github.com/magento/magento2/issues) must pass through a series of gates, or stages of quality assessment, to ensure that their quality meets our standards. There are three gates, and an issue must pass through all three of these assessments before we will transfer it to either core developers or community developers.
The purpose of these gates is to identify core technical issues common to all reported tickets, and to show the progress on each reported issue.

## Issue Gates

Issue gates are a series of steps that are run to make sure the issue has all the information needed to reproduce the bug. This includes system configurations, required configurations, reproduction steps and any other required information.

*  Gate 1: Verification of the report format - ensures that report content and structure meet all of our requirements.
*  Gate 2: Manual verification - Someone manually confirms that all necessary information has been provided: steps to reproduce, system configs, etc.
*  Gate 3: Reproduce the bug - Someone sets up an environment and tries to reproduce the bug. The issue is then confirmed or closed.

### Gate 1 - Verification of the report format

The main goal of this initial verification stage is to be sure that the report has well-structured content that meets the requirements from [Issue Reporting Guidelines](contributing.html#report). This stage looks trivial and formal, but it will definitely affect processing speed. Generally, an issue that has the expected structure and clear information will be processed faster than the same report with a poor format.
The reported issue must contain **all** the following keywords in the description section:

*  _Preconditions_
*  _Steps to Reproduce_
*  _Actual Result_
*  _Expected Result_

A maintainer can request the reporter to update the issue description and provide additional information. The maintainer will add the `Issue: needs update` label. A reporter has 14 days to update the issue description; otherwise, the issue will be closed. The maintainer may update the issue description format if sufficient information is provided.

### Gate 2 - Manual verification

Gate 2 verifies a submitted issue is ready for development.
By the end of the process, it has been vetted for development including all labels for Functional Areas, Affected Versions, and so on. The reproduction steps are correct and the reported issue is a defect that should be fixed and not due to misuse or a misconfiguration.

Working on an issue report as a reporter, maintainer, or developer is always a commitment. It is beneficial for every participating party to monitor activity and comments on the ticket during its lifetime, and provide any needed information or insights.

#### Preparation

These are steps for reviewing the issue, verifying reproduction steps, and assigning a maintainer to work it.

1. A maintainer selects an unprocessed ticket from the GitHub tracker. The recommended tool is the [Issue Confirmation and Triage Board](https://github.com/magento/magento2/projects/23).
1. The maintainer reviews the list from the "Ready for Confirmation" column and selects an issue to begin processing.
1. After selecting the ticket, the maintainer checks the description and reproduction steps.
1. When the maintainer is ready to start processing the issue, the maintainer should assign the ticket to him/her self. This indicates someone is actively working on the issue.

#### Validation

These are the steps for validating the issue format and all information provided checks out:

1. When the issue is entered, verify that it meets all requirements from the [templates](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE) and [Issue Reporting Guidelines](contributing.html#report).
1. If the format is not valid, the maintainer should read the report carefully and edit the issue to better match one of the required [templates](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE).
1. The maintainer can select the issue and review all information, reproduction steps, etc. If the information is incomplete, the maintainer requests more information from the reporter and applies the label `Issue: needs update`. All work pauses on this ticket until the reporter provides more information.
1. If the ticket has enough information, the maintainer analyzes the problem described in the ticket: described steps to reproduce are valid, expected behavior is valid, the configuration described in preconditions is valid.
1. Is it validated?

   *  If all provided information is clear and sufficient, it is validated.
   *  If it is not validated, the maintainer adds the label `Issue: needs update` and requests more information from the reporter.

### Gate 3: Reproduce the issue

In gate 3, the issue is reproduced in the code.
Currently, we only accept pull requests for the `2.4-develop` branch.

1. The maintainer checks if the issue exists on the `2.4-develop` branch with a clean installation, configured by the described preconditions, and following the exact reproduction steps.

   *  If the described behavior **is** reproduced, the maintainer should apply the `Reproduced on 2.4` label to the ticket, indicating that issue was reproduced and specific version.
   *  If the issue **is not**  reproducible on `2.4-develop`, the maintainer should close the issue and **stop the verification process here**.

1. If the steps required to reproduce the issue are different from the initially described reproduction steps, update the ticket description with the actual steps.
1. Based on the verification flow, add only one `Area: xxx` label to the issue. Use your best judgment to determine the functional area affected.
1. (optional if possible) Based on the original issue report add one `Reported on: XXX` label to indicate the original Open Source version for the Issue report.

## Finalization

Steps for final review of an issue for contributors/developers to work the issue.

1. Please make sure that all required conditions are met:
   *  [ ] Issue format is valid.
   *  [ ] Issue is reproducible with one of the supported versions and labeled appropriately.
   *  [ ]  `Area: XXX` is label applied to the ticket.
   *  [ ]  (optional if possible) `Reported on: XXX` label is applied to the ticket.
   *  [ ]  (optional if possible) `Severity: XX` label is applied to the ticket. See more in [Community Backlog Priority](contributing.html#backlog)

1. Add the label `Issue: Confirmed` to the ticket.
1. Wait for a response from the Automated Contributor Assistant, which normally takes 30-60 seconds.
1. If all required information was provided, the Automated Contributor Assistant will comment with reference ticket numbers and a link in the internal backlog. Otherwise, the label `Issue: Confirmed` will be removed, and information on what is missing in the report will be provided to the maintainer.
1. Un-assign the ticket from yourself so that developers can claim the issue and start development.

If the issue was reproduced on `Gate 3`, we will create an internal `AC-XXXX` ticket to track the progress of the issue.

Once an issue has been acknowledged and confirmed, it goes through the Triage Process and be [prioritized(triaged)](contributing.html#backlog).
After triage, either core developers or community developers may fix it. We encourage everyone to join the Community Contribution Team and submit Pull Request with the bug fix to [magento/magento2](https://github.com/magento/magento2/pulls) repository.

## Tips and tricks

*  If you need a proper testing environment, a verification instance with limited capabilities may be [requested](contributing.html#vanilla-pr) from the Automated Contributor Assistant.
*  In most cases, we do not recommend verifying issues on older patch versions, even if it was supplied in the preconditions. Generally, fixes can only be provided with the next patch version, and not with any of the older patches.
*  Always follow the [Code of Conduct](https://github.com/magento/magento2/blob/2.4-develop/.github/CODE_OF_CONDUCT.md) in issue comments and discussions.

## Glossary

The following terms help define the process:

*  `Reporter` – The user who filed the initial issue report.
*  `Maintainer` – A member of Community Maintainers Team who is working on the issue report to update and confirm report in accordance with all requirements.
*  `Automated Contributor Assistant` – Non-human users/bots that perform automatic checks and provide assistance to human users.
*  `Label` – The GitHub label applied to the ticket.

Label descriptions:

*  `Issue: Confirmed` – The maintainer has reproduced the issue using the latest `2.4-develop` branch.
*  `Issue: Cannot reproduce` – The described issue is not reproducible by the described scenario or reproduction steps.
*  `non-issue` – The described behavior in the report is correct or expected behavior, and is not an issue.
*  `Area: xxx` – The {{site.data.var.ce}} functional area that might be the origin of the issue. There is a specific label for each major area.
*  `Reproduced on 2.4.x` - The release line where the maintainer reproduced the issue.
*  `Issue: needs update` – The issue is pending a response from the reporter.
*  `Reported on 2.x.x` - The original {{site.data.var.ce}} version for the issue report.

## Questions and Discussion

If you have any questions, feedback, or proposals for this workflow, join the [Community Engineering Slack Workspace](https://opensource.magento.com/slack). We have a [#backlog-maintainers](https://magentocommeng.slack.com/messages/CCV2S9P7S) channel specifically for these discussions.
