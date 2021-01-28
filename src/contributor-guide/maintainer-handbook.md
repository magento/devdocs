---
group: contributor-guide
title: Maintainer's Handbook
---

This document aims to describe the activities performed by a Community Maintainer, provide some insights and description on the tools integrated with our GitHub that helps our Maintainers during their journey.

### Magento Repositories and Projects

Within our GitHub organization there are many repositories that our Maintainers can interact with, the repository that has most activity is the [magento2](https://github.com/magento/magento2), but depending on your interest you may also interact with some of our other repositories, like:

-  [pwa-studio](https://github.com/magento/pwa-studio)
-  [magento2-phpstorm-plugin](https://github.com/magento/magento2-phpstorm-plugin)
-  [inventory](https://github.com/magento/inventory)
-  [adobe-stock-integration](https://github.com/magento/adobe-stock-integration)
-  and [many others](https://github.com/magento)

Because most of our contributions are to [magento2](https://github.com/magento/magento2) repository, we have created several GitHub projects to help us to manage these contributions.

![Repository and Projects]({{ site.baseurl }}/contributor-guide/img/repo-and-projects.png)

Each project has its own description that will help you to understand their responsibility, one important project that we focus most of our attention is the **High Priority Pull Request Dashboard**, where you can find the Pull Requests that will bring most value for the community and will be delivered first.

### Pull Request Dashboard

Within your projects we have the Pull Request Dashboards, there you will find our Kanban board which has several columns that represents our Pull Request delivery workflow. The columns title are self-explained and should represent the action required for the Pull Requests on that column.

![Pull Request Dashboard]({{ site.baseurl }}/contributor-guide/img/pr-dashboard.png)

### Pull Request Review Process

The first step towards the review process is to pick and self-assign one Pull Request from our dashboard. To help Maintainers to choose a Pull Request to be reviewed we have several labels, the most important one is the **Priority** label and, we encourage our Maintainers to choose the Pull Requests with the highest priority from the **High Priority Pull Request Dashboard** on the **Pending Review** column.

Once you have chosen the Pull Request, there are some steps to be followed during the review process.

#### Check CLA and Builds

The first thing we encourage our Maintainer to check is if the Contributor has signed the Adobe CLA, without this signature we cannot accept the contribution. If the Contributor has not signed the CLA yet, that specific check will be red and, we should add a comment to the Pull Request requesting the Contributor to sign the CLA.

Once the CLA is signed, we can check the other builds, those builds are run based on Contributors Pull Request and will highlight if the proposed changes are causing some existing functionality to break or aren’t fully compliant with our requirements. In case Magento Heath Index or Semantic Version Checker fails, the approach should either be changed or the proposed changes has to be approved by the internal team through the approval process. More information can be found on our [Contributor Guide]({{ site.baseurl }}/contributor-guide/pull-request-tests.html).

![Check CLA and Builds]({{ site.baseurl }}/contributor-guide/img/builds-and-checks.png)

#### Check Pull Request Target

It is important to make sure the pull request is being targeted to the right branch, for example, if the Contributor’s Pull Request does not bring backwards incompatible changes, these changes should be targeted at the current minor release branch, if the Contributor’s Pull Request brings backwards incompatible changes or it is part of a separate project, it may need to be target to a different branch.

![Check Pull Request Target]({{ site.baseurl }}/contributor-guide/img/pr-target-branch.png)

#### Code review

The code review is one of the most important part of the review process, our Community Maintainers are responsible to review the proposed changes and evaluate if they are following the [Magento Technical Guidelines]({{ site.baseurl }}/guides/v2.4/coding-standards/technical-guidelines.html). It is also important to evaluate if the proposed changes are backward compatible and follow the rules and best practice of our [Backward Compatible Development Guide]({{ site.baseurl }}/contributor-guide/backward-compatible-development/), we also trust our Maintainers judgement for other recommendations to increase contribution quality.

![Code review]({{ site.baseurl }}/contributor-guide/img/pr-code-review.png)

#### Test coverage

As described on our [Definition of Done]({{ site.baseurl }}/contributor-guide/contributing_dod.html), all the code changes must be covered by automated tests, it is also part of the review process to guarantee the changes are covered, make sure the type of test used to cover the changes is the most adequate and add the appropriate label to the Pull Request. If the Pull Request is not covered with tests, we recommend the Maintainer to communicate and advice the Contributor on how to add test coverage to the changes.

![Test coverage]({{ site.baseurl }}/contributor-guide/img/test-coverage-labels.png)

#### Approve Changes

Once all the steps above are done the Maintainer can approve the Contributor’s Pull Request. After approving the Pull Request, it will proceed through our delivery process and will be tested to guarantee it’s quality.

![Approve Changes]({{ site.baseurl }}/contributor-guide/img/approve-changes.png)

#### Set Award Labels

We are thankful for all contributions, and we always recognize our most active members. Contributors can earn points in numerous ways with a focus on Pull Requests to the backlog and special projects. We have a set of labels that highlight different types of achievements, we encourage our Maintainers to review all the [existing awards]({{ site.baseurl }}/contributor-guide/contributing.html#points) and based on the information provided decide which award is most suitable.

![Set Award Labels]({{ site.baseurl }}/contributor-guide/img/award-labels.png)

### Other useful information

Besides, the repositories, projects and code review process, there are more information, tools and processes that are important for our Maintainers to know about.

#### Related Pull Requests

Magento is a complex platform and, some changes may require changes on multiple repositories. For example, if a Contributor’s Pull Request performs a change on a feature that is being used on Magento Commerce edition, it may be required to create a Pull Request on a separate repository.

If that is the case, our builds need to run using the changes from both Pull Requests, to do so we must use the Related Pull Requests feature, this feature can be used by adding the link to the related Pull Request on the main Pull Request description, more details on this is available on our [Contributor Guide]({{ site.baseurl }}/contributor-guide/pull-request-tests.html#related-pull-requests).

![Related Pull Requests]({{ site.baseurl }}/contributor-guide/img/related-prs.png)

#### Pull Request Deployment Tool

The deployment tool assists Contributors and Maintainers to test their changes or validate if an issue exists on clean Magento installation. More information on deployment tool can be found [here]({{ site.baseurl }}/contributor-guide/contributing.html#contributor-assist).

![Pull Request Deployment Tool]({{ site.baseurl }}/contributor-guide/img/deployment-comments.png)

#### Maintainers Slack Channel

We gather our Community Maintainers on our Slack channel, once you are on-boarded as a Maintainer we will add you to this channel and, you will be able to discuss questions related to contributions and share your ideas or information with other Maintainers.

![Maintainers Slack Channel]({{ site.baseurl }}/contributor-guide/img/slack-channel.png)

#### Regular Meetings

Currently, we have two meetings that we encourage our Maintainers to participate and engage with the Community Engineering team:

-  Maintainer’s Call – Schedule to happen once a month.
-  [Community Contributions Triage](https://github.com/magento/magento2/wiki/Public-Triage-Meeting) – Schedule to happen twice a week.
