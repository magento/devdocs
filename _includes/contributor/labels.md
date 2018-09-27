### Release Lines
{:.no_toc}

Release line labels indicate the specific Magento release lines affected by the issue or PR. For example, if working on a fix for 2.2.6, you would apply the Release Line: 2.2. This effectively includes all releases in this line.

* `Release Line: 2.1`
* `Release Line: 2.2`
* `Release Line: 2.3`

### Progress
{:.no_toc}

Progress labels indicate the Pull Request status on each review stage:

* `Progress: needs update` - The Community Engineering Team needs additional information from the reporter to properly prioritize and process the pull request. <!-- needs update -->
* `Progress: on hold` - The pull request is on hold due and will be further reviewed to accept or reject.
* `Progress: accept` - The pull request has been accepted and will be merged into mainline code. <!-- accept -->
* `Progress: reject` - The pull request has been rejected and will not be merged into mainline code. Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution. <!-- reject -->

### Contribution awards
{:.no_toc}

The level of investigation, research, and work required for a task may differ. Contribution Rewards labels  indicate what type of contribution awards will be applied when completing an issue and PR. Some awards will provide higher points and rewards than others.

* `Award: complex`
* `Award: advanced`
* `Award: special achievement`
* `Award: category of expertise`
* `Award: test coverage`
* `Award: devdocs update`
* `Award: MFTF test coverage`
* `Award: bug fix`
* `Cleanup`
* `Port` - For up-port and back-port work
<!-- For more information on awards and points, see our [Contribution Rewards](http://test.com). -->

### Partners
{:.no_toc}

All partners Pull Requests should be marked with label `partners-contribution`. Additionally, add a partner label for PRs submitted by specific Partners. Use the format: `Partner: <PartnerName>`. The following are Partner examples:

* `partners-contribution`
* `Partner: Atwix`
* `Partner: Comwrap`
* `Partner: Interactiv4`
* `Partner: Wagento`
* `etc`

### Components
{:.no_toc}

Component labels indicate the components affected by the Pull Request. To learn more about available components and assigned architects, see [Magento Components Assignment](https://github.com/magento/magento2/wiki/Magento-Components-Assignment).

* `Component: Catalog`
* `Component: Report`
* `Component: Checkout`
* `etc`

### Events
{:.no_toc}

Event labels mark recommended issues and submitted PRs for a specific event. Events may include Contribution Days, Hackathons, Imagine, special events like Smashtoberfest, and others. Contributors and Maintainers can easily locate code when attending those events. Some events may also have a [Community Engineering Slack](https://magentocommeng.slack.com) channel using the same label.

* `Event: mm18in`
* `Event: mm17es`
* `Event: mlau18`
* `etc`

### General
{:.no_toc}

General labels include a variety of tasks and definitions for pull requests and issues.

* `good first issue` - Indicates a good issue for first-time contributors.
* `help wanted` - Indicates the creator or author needs help with a decision, advice for resolving, and so on.
* `triage wanted` - Indicates the issues are under triage. See this information to learn more about the [Triage Wanted program](https://github.com/magento/magento2/wiki/Triage-Wanted).

### Issue Resolution Status
{:.no_toc}
<!-- old labels -->

* `G1 Passed` - Automatic verification of the issue description successfully passed. Minimum required information is provided (Preconditions, Steps to Reproduce, Actual Result, Expected Result).
* `G1 Failed` - Automatic verification of the issue description failed. Minimum required information is not provided (Preconditions, Steps to Reproduce, Actual Result, Expected Result).
* `G2 Passed` - The Community Engineering Team has confirmed that this issue contains the minimum required information to reproduce.
* `G3 Passed` - The Community Engineering Team has validated and confirmed the issue.
* `Reproduced on 2.1.x` - The Community Engineering Team reproduced the issue on latest 2.1.x release.
* `Reproduced on 2.2.x` - The Community Engineering Team reproduced the issue on latest 2.2.x release.
* `Reproduced on 2.3.x` - The Community Engineering Team reproduced the issue on latest 2.3.x release.
* `Fixed in 2.1.x` - The issue has been fixed in one of the 2.1.x releases or in 2.1-develop branch and will be available with the upcoming patch release.
* `Fixed in 2.2.x` - The issue has been fixed in one of the 2.2.x releases or in 2.2-develop branch and will be available with the upcoming patch release.
* `Fixed in 2.3.x` - The issue has been fixed in one of the 2.3.x releases or in 2.3-develop branch and will be available with the upcoming patch release.
* `acknowledged` - The Community Engineering Team has created internal ticket.
* `needs update` - The Community Engineering Team needs additional information from the reporter to properly prioritize and process the issue.
* `Cannot Reproduce` - The Community Engineering Team cannot reproduce the issue with the given steps to reproduce.
* `non-issue` - A described behavior in the issue description is valid and shouldn't be changed in Magento code base.

### DevDocs
{:.no_toc}

All [contributions to DevDocs](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md) receive the following labels:

* `New topic`- New file submissions for content that has never existed on devdocs
* `Major update` - Significant updates to existing content, such as a new section or example
* `Technical` - Updates to the code or processes that alter the technical content of the document
* `Editorial` - Fixes for typos, grammatical inconsistencies, or minor rewrites to correct inaccuracies.
