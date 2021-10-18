---
group: contributor-guide
title: Github Issue Processing Workflow
---

The Github issue workflow ensures that issues are clear, well written, and thoroughly vetted. Following these procedures allows valid issues to get the attention they deserve.

Magento issues that are reported on the public [GitHub](https://github.com/magento/magento2/issues) must pass through a series of gates, or stages of quality assessment, to ensure that their quality meets our standards. There are three gates, and an issue must pass through all three of these assessments before we will transfer it to either Magento core developers or community developers.
The purpose of these gates is to identify core technical issues common to all reported tickets, and to show the progress on each reported issue.

## Issue Gates

Issue gates are a series of steps that are run to make sure the issue has all the information needed to reproduce the bug. This includes system configurations, required Magento configurations, reproduction steps and any other required information.

*  Gate 1: Automatic verification - an automated process that confirms that the issue contains all the required items.
*  Gate 2: Manual verification - Someone manually confirms that all necessary information has been provided: steps to reproduce, sys configs.
*  Gate 3: Reproduce the bug - Someone sets up a Magento environment and tries to reproduce the bug. The issue is then confirmed or closed.

### Gate 1 - Automatic verification

Gate 1 automatically verifies that the reported issue follows the [Issue Reporting Guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines).
The reported issue must contain **all**  the following keywords in the description section:

*  _Preconditions_
*  _Steps to Reproduce_
*  _Actual Result_
*  _Expected Result_

**Results**:

*  Label `Issue: Format is valid` is added if the issue passes the automatic format verification
*  Label `Issue: Format is not valid` is added if the issue fails the automatic format verification
*  Maintainer can fix the issue description and add missing information. Label `Progress: needs update` will be added. Reporter has 14 days to update the issue description; otherwise, we will close the issue.
*  Maintainer can update the issue description format if sufficient information is provided.

### Gate 2 - Manual verification

Gate 2 verifies a submitted issue is ready for development.
By the end of the process, it has been vetted for development including all labels for components, affected versions, and so on, reproduction steps are correct, and all the format passes automated review.

**Supporting the Process**: Working on an issue report as a reporter, maintainer, or developer is always a commitment. It is beneficial for every participating party to monitor activity and comments on the ticket during it's lifetime, and provide necessary information or insights.

#### Preparation

Steps for reviewing the issue, verifying reproduction steps, and assigning a Maintainer to work it.

1. Maintainer picks a ticket from the GitHub tracker which is not yet processed. The recommended tool is [Community Backlog](https://github.com/magento/magento2/projects/20) Dashboard.
1. A maintainer reviews the list from "Ready for QA" column and selects an issue to begin processing.
1. After selecting the ticket, the maintainer checks the description and reproduction steps.
1. When the maintainer is ready to start processing the issue, the maintainer should assign the ticket to himself. This indicates someone is actively working on the issue.

#### Validation

Steps for validating the issue format and all information provided checks out: described steps to reproduce are valid, expected behavior is valid, configuration described in preconditions is valid.

1. When the issue is entered, the Automated Contributor Assistant automatically checks the format and assigns one of the following labels after review: `Issue: Format is valid` or `Issue: Format is not valid`.
1. If the format is not valid (receives `Issue: Format is not valid`), the maintainer should read the report carefully and edit the issue to better match one of the required [templates](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE). The maintainer edits the report content to comply with requirements.
1. After saving any changes, the Automated Contributor Assistant runs again and updates the format label (usually less than one minute).
1. A maintainer can select the issue and review all information, reproduction steps, etc. If the information is incomplete, the maintainer requests more information from the reporter and applies the label `Progress: needs update`. All work pauses on this ticket until the reporter provides more information.
1. If the ticket has enough information, the maintainer analyzes the problem described in the ticket: described steps to reproduce are valid, expected behavior is valid, configuration described in preconditions is valid.
1. Is it validated?

    *  If all provided information is clear and sufficient, it is validated. The maintainer applies the `Issue: Clear description` label to indicate that ticket is ready for manual testing.
    *  If it is not validated, the maintainer adds the label `Progress: needs update` and requests more information from the reporter.

### Gate 3: Reproduce the issue

In gate 3, the issue is reproduced in the code.
Be advised, we only accept pull requests for `2.4-develop`.

1. Maintainer checks if the issue exists on the `2.4-develop` branch with a clean installation, configured by described preconditions, following the exact reproduction steps.

    *  If the described behavior **was**  reproduced, the maintainer should apply the `Reproduced on 2.4` label to the ticket, indicating that issue was reproduced and specific version.
    *  If the issue **was not**  reproducible with `2.4-develop`, the maintainer should close the issue and **stop verification process here!**
    *  
1. If steps required to reproduce were different from the initially described reproduction steps, update the ticket description with the actual information.
1. Based on the verification flow, add at least one or more `Component: xxx` labels to the issue. See [Magento Components Assignment](https://github.com/magento/magento2/wiki/Magento-Components-Assignment) for a list. Use your best judgment to determine the components affected.

## Finalization

Steps for final review of issue for contributors/developers to work the issue.

1. Please make sure that all required conditions are met:
   * [ ] Issue format is considered valid by automatic system.
   * [ ] Issue is reproducible at least with one of the supported versions and labeled appropriately.
   * [ ] At least one `Component` label(s) applied to the ticket.
1. Add the label `Issue: Confirmed` to the ticket.
1. Wait for the response from the Automated Contributor Assistant, which normally takes 30-60 seconds.
1. If all required information was provided Automated Contributor Assistant will apply label `Issue: Ready for work` and comment with reference ticket numbers. Otherwise, label `Issue: Confirmed` will be removed and information on what's missing in the report will be provided to the maintainer.
1. Un-assign the ticket from yourself so that developers can claim the issue and start development.

If the issue was reproduced on `Gate 3`, we’ll create an internal `MAGETWO` ticket to track the progress of the issue.

Once an issue has been acknowledged, either Magento core developers or Magento community developers may fix it. We encourage everyone to join the Magento Community Contribution Team and submit Pull Request with the bug fix to [magento/magento2](https://github.com/magento/magento2/pulls) repository.

## Tips and tricks

*  If you need a proper testing environment, a verification instance with limited capabilities may be [requested](https://devdocs.magento.com/guides/v2.4/contributor-guide/contributing.html#contributor-assist) from the Automated Contributor Assistant.
*  In most of the cases, we don't recommend verifying issues on older patch versions, even if it was supplied in the preconditions. Generally, fixes can only be provided with the next patch version, and not with any of the older patches.
*  Always follow the [Code of Conduct](https://github.com/magento/magento2/blob/2.4-develop/.github/CODE_OF_CONDUCT.md) in issue comments and discussions.

## Glossary

The following terms help define the process:

*  `Reporter` – User who filed initial issue report.
*  `Maintainer` – User a member of Community Maintainers Team who is and working on the issue report to update and confirm report in accordance with all requirements.
*  `Automated Contributor Assistant` – Non-human user that performs automatic checks and provides assistance to human users.
*  `Label` – GitHub label applied to the ticket.

Label descriptions:

*  `Issue: Format is valid` – label assigned when the issue report content has all required [fields](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE). This label is controlled by Automated Contributor Assistant.
*  `Issue: Format is not valid` – Label assigned when the issue report content does not match the [format](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE) or content required for issues. This label is controlled by Automated Contributor Assistant.
*  `Issue: Clear Description` – Label assigned when human proof-reads the issue report and confirms that it is meaningful and may be sufficient to reproduce the issue.
*  `Issue: Confirmed` – Label assigned when the Maintainer reproduced the issue with at least one of active Magento release lines.
*  `Issue: Ready for Work` – Label assigned by the Automated Contributor Assistant, when ticket was added to Magento's internal issue tracker.
*  `Issue: Cannot reproduce` – Label assigned when the described issue is not reproducible by the described scenario or reproduction steps.
*  `non-issue` – Label assigned when the described behavior in the report is correct, expected behavior and not an issue. <!-- was Issue: Not a bug -->
*  `Component: xxx` – Multitude of labels indicating Magento components that may be the origin of the issue. There is a specific label for each major component. For edge cases, `Component: Other` and `Component: Multiple` may be used. See [Magento Components Assignment](https://github.com/magento/magento2/wiki/Magento-Components-Assignment) for a list.
*  `Reproduced on 2.x` - Label indicating the release line where the Maintainer can reproduce the issue.
*  `Progress: needs update` – Label indicating that the issue is pending a response from the reporter.

For additional labels, see the [Contributor's Guide](https://devdocs.magento.com/guides/v2.4/contributor-guide/contributing.html#labels).

## Questions and Discussion

If you have any questions, feedback, or proposals for this workflow, please join the [Community Engineering Slack Workspace](https://opensource.magento.com/slack). We have a [#backlog-maintainers](https://magentocommeng.slack.com/messages/CCV2S9P7S) channel specifically for these discussions.