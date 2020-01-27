### Release Lines
{:.no_toc}

Release line labels indicate the specific Magento release lines affected by the issue or PR. For example, if working on a fix for 2.4.0 you would apply the Release Line: 2.4. This effectively includes all releases in this line.

*  `Release Line: 2.3`
*  `Release Line: 2.4`

### Progress
{:.no_toc}

Progress labels indicate the Pull Request status on each review stage:

*  `Progress: needs update` - The Community Engineering Team needs additional information from the reporter to properly prioritize and process the pull request. <!-- needs update -->
*  `Progress: on hold` - The pull request is on hold due and will be further reviewed to accept or reject.
*  `Progress: accept` - The pull request has been accepted and will be merged into mainline code. <!-- accept -->
*  `Progress: reject` - The pull request has been rejected and will not be merged into mainline code. Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution. <!-- reject -->

### Contribution awards
{:.no_toc}

The level of investigation, research, and work required for a task may differ. Contribution Rewards labels  indicate what type of contribution awards will be applied when completing an issue and PR. Some awards will provide higher points and rewards than others.

*  `Award: complex`
*  `Award: advanced`
*  `Award: special achievement`
*  `Award: category of expertise`
*  `Award: test coverage`
*  `Award: devdocs update`
*  `Award: MFTF test coverage`
*  `Award: bug fix`
*  `Cleanup`
*  `Port`

### Partners
{:.no_toc}

All partners Pull Requests should be marked with label `partners-contribution`. Additionally, add a partner label for PRs submitted by specific Partners. Use the format: `Partner: <PartnerName>`. The following are Partner examples:

Example labels:

*  `partners-contribution`
*  `Partner: Atwix`
*  `Partner: Comwrap`
*  `Partner: Interactiv4`
*  `Partner: Wagento`

### Components
{:.no_toc}

Component labels indicate the components affected by the Pull Request. To learn more about available components and assigned architects, see [Magento Components Assignment](https://github.com/magento/architecture/wiki/Component-Assignments).

Example labels:

*  `Component: Catalog`
*  `Component: Report`
*  `Component: Checkout`

For edge cases, `Component: Other` and `Component: Multiple` may be used.

### Events
{:.no_toc}

Event labels mark recommended issues and submitted PRs for a specific event. Events may include Contribution Days, Hackathons, Imagine, special events like Smashtoberfest, and others. Contributors and Maintainers can easily locate code when attending those events. Some events may also have a [Community Engineering Slack](https://magentocommeng.slack.com) channel using the same label.

Example labels:

*  `Event: mm18in`
*  `Event: mm17es`
*  `Event: mlau18`

### General
{:.no_toc}

General labels include a variety of tasks and definitions for pull requests and issues.

*  `good first issue` - Indicates a good issue for first-time contributors.
*  `help wanted` - Indicates the creator or author needs help with a decision, advice for resolving, and so on.
*  `triage wanted` - Indicates the issues are under triage. See this information to learn more about the [Triage Wanted program](https://github.com/magento/magento2/wiki/Triage-Wanted).

### Issue resolution status
{:.no_toc}

Labels applied to issues through verification and completion. For details on the process, see [GitHub Issues Processing Workflow](https://github.com/magento/magento2/wiki/GitHub-Issues-Processing-Workflow).

*  `Issue: Format is not valid` - Gate 1 failed. Automatic verification by the Automated Contributor Assistant failed and the issue needs updates. The [format](https://github.com/magento/magento2/tree/2.4-develop/.github/ISSUE_TEMPLATE) of the issue description and minimum required information is not provided: Preconditions, Steps to Reproduce, Actual Result, Expected Result. Previous label `G1 Failed`.
*  `Issue: Format is valid` - Gate 1 passed. Automatic verification by the Automated Contributor Assistant passed for all issue content. Previous label `G1 Passed`.
*  `Issue: Clear Description` - Gate 2 passed. The Community Engineering Team has confirmed that this issue contains the minimum required information to reproduce. Previous label `G2 Passed`.
*  `Issue: Cannot Reproduce` - Gate 3 failed. The issue could not be reproduced or validated. Previous label `Cannot Reproduce`.
*  `Issue: Confirmed` - Gate 3 passed. Manual verification of the issue description and reproduction steps was confirmed. Previous label `G3 Passed`.
*  `Issue: Ready for Work` - Gate 4 passed. The issue is acknowledged and added to the backlog for open development. Previous label `acknowledged`.
*  `Reproduced on 2.3.x` - The Community Engineering Team reproduced the issue on latest 2.3.x release.
*  `Reproduced on 2.4.x` - The Community Engineering Team reproduced the issue on latest 2.4.x release.

*  `Fixed in 2.3.x` - The issue has been fixed in one of the 2.3.x releases.
*  `Fixed in 2.4.x` - The issue has been fixed in one of the 2.4.x releases or in 2.4-develop branch and will be available with the upcoming patch release.
*  `non-issue` - A described behavior in the issue description is valid and shouldn't be changed in Magento code base.

### DevDocs
{:.no_toc}

All [contributions to DevDocs](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md) receive the following labels:

*  `New topic`- New topic submissions for content that has never existed on DevDocs such as tutorials, references, instructions, and so on
*  `Major update` - Significant original updates to existing content
*  `Technical` - Updates to the code or processes that alter the technical content of the document, such as code snippets, reference documentation, parameter names and values, and other relevant content
*  `Editorial` - Fixes for typos, grammatical inconsistencies, or minor rewrites to correct inaccuracies
