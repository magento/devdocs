---
group: contributor-guide
title: Code Contributions
redirect_from:
- guides/v2.3/contributor-guide/contributing.html
- guides/v2.4/contributor-guide/contributing.html
---

The following topics are included in this guide:

-  [Contribute to Magento 2 code](#contribute)
-  [Community Backlog Priority](#backlog)
-  [GitHub and Two-Factor authentication](#two-factor)
-  [Questions or enhancement requests?](#question)
-  [Accepted pull requests and ported code](#rules)
-  [Contribution requirements](#requirements)
-  [Forks and pull requests](#forks-and-pull-requests)
-  [Squash commits](#squash-commits)
-  [Magento Contributor Assistant](#contributor-assist)
-  [Report an issue](#report)
-  [Help triage issues](#triage)
-  [Labels applied by the Community Engineering team](#labels)
-  [Contribution awards and points](#points)

{:.bs-callout-tip}
Connect with Magento Contributors and Maintainers to learn more about Magento contributions and special projects. Join us in our [Slack workspace](https://tinyurl.com/engcom-slack), in the [#general](https://magentocommeng.slack.com/messages/C4YS78WE6) channel, follow the [#announcements](https://magentocommeng.slack.com/messages/C7FA71S3V), and browse for more [channels](https://devdocs.magento.com/community/resources/resources.html#community-engineering-slack)!

## Contribute to Magento 2 code {#contribute}

We use the [fork and pull](#forks-and-pull-requests) model to contribute to the Magento 2 codebase. This method allows contributors to maintain their own copy of the forked codebase, which can be easily synced with the main copy. The forked repository is then used to submit a pull request to the base repository to merge a set of changes from the fork into the main repository.

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions.

The Community Engineering Team reviews all issues and contributions submitted by the community developers. During the review we might require clarifications from the contributor. If there is no response from the contributor in two weeks (14 days) time, the issue might be closed.

When the Community Engineering Team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like the status or who is working the issue. See [Labels](#labels) to learn more.

{:.bs-callout-tip}
Refer to [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca) for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms.

## Community Backlog Priority {#backlog}

In order to provide timely resolution on the most critical issues and pull requests, the Magento team has implemented Severity/Priority concepts to our community driven projects. This approach makes open-source collaboration more transparent for all participants.
Having clear contribution rules in place helps to build clear expectations for Community Contributors and establish clear priorities for Community Maintainers and the Magento team.

If you would like to contribute improvements or bug fixes to Magento, and make sure it is valuable for the Community and Magento as well, we highly recommend that Community Contributors to take issues from the backlog based on **Priority**.
Magento and Community Maintainers process contributions based on the issue/pull requests priority starting from P0, P1 to P4.

{:.bs-callout-tip}
**Priority** signifies how important or detrimental a defect is. The defect priority status is set by Product Managers. Priority also helps to determine the scheduling of the fix: Higher priority bugs will be fixed and merged first. It is a reflection on how bad the bug is for the system and also for business or marketing requirements.

{:.bs-callout-tip}
**Severity** is a measure of how ‘bad’ the bug is and how much disruption it causes, without regard to remaining work or the release schedule.

### Priority and severity descriptions

| Severity | Description |
| -------- | ------------- |
| Severity: S0 | -  Affects critical data or functionality and leaves users with no workaround.<br>-  Significant catastrophic impact.<br>-  A problem that is blocking the ability to work. An immediate fix is needed.<br> |
| Severity: S1 | -  Affects critical data or functionality and forces users to employ a workaround.<br>-  Impact to the key product qualities.<br>-  An immediate fix is needed.<br> |
| Severity: S2 | -  Affects non-critical data or functionality and forces users to employ a workaround.<br>-  Impact to the product qualities that makes the product more usable.<br>-  Major restrictions or short-term circumventions are required until a fix is available. A fix is important.<br> |
| Severity: S3 | -  Affects non-critical data or functionality and does not force users to employ a workaround.<br>-  Problem has moderate impact requiring some restrictions. The fix is in an area that is not critical.<br> |
| Severity: S4 | -  A minor problem, annoyance, or technical issue with minimal impact.<br>-  Impact that does not prevent or hinder functionality.<br>-  Affects aesthetics, professional look and feel, “quality” or “usability”.<br> |

| Priority | Description |
| ------------- | ------------- |
| Priority: P0 | -  The defect needs to be fixed right now, everything else can wait.<br> - This generally occurs in cases when the entire functionality is blocked. |
| Priority: P1 | -  Needs to be fixed before any other issues.<br>-  Once P0 defects have been fixed, a defect having this priority is the next candidate for fixing. |
| Priority: P2 | -  Should be fixed as early as possible<br>-  A defect with this priority could have functionality issues which are not to expectations. |
| Priority: P3 | -  May be fixed according to the position in the backlog.|
| Priority: P4 | -  No current plan to fix. Fixing can be deferred as a logical part of more important work.|

### Who and how can define severity and priority?

#### Priority
The Magento team defines priorities during regular triage review meetings, based on the community assessment for severity.

#### Severity

-  Community Maintainers are allowed to set Severity labels during the initial issue triage according to the [Issue Processing Workflow](https://github.com/magento/magento2/wiki/GitHub-Issues-Processing-Workflow).
-  The Magento team can set or edit severity and priority based on our internal triage process and information provided in the initial community triage.
-  Issue reporters can provide their own evaluation for severity by selecting a checkbox in the Issue description.

The following list consists of questions you can ask to help determine the proper severity:

-  Does the system stop working after defect occurs?
-  Can the system recover from the defect?
-  If the defect is recoverable, does the system require external effort to recover from the defect? (i.e. it will not recover on its own)
-  Does the defect affect other related sections (or the entire system)?
-  Can I repeat the defect in some other system having same configuration (O/S, Browsers) as that of the system where I found the defect?
-  Does the defect show up in other configurations?
-  Does the defect affect all users/roles? (i.e. Only a particular category of users will face the defect)
-  Does the defect occurs frequently?
-  Are the inputs to make the defect easy to reproduce? (i.e. special data is not required)

The number of 'Yes' answers should help you to determine the severity.

### Pull request risk assessment:

The 'Risk:' label highlights the risk that the suggested changes may bring to the platform.
It helps maintainers decide:

-  to which version the pull requests should be delivered
-  which reviewers should see it
-  whether a request should be approved or not

| Risk | Description |
| ------------- | ------------- |
| High | A pull request that makes changes on the framework or changes that will affect multiple areas. |
| Medium | A pull request that makes changes which may affect multiple areas or makes considerable changes on a specific area. |
| Low | A pull request that will probably not affect other areas. |

## GitHub and Two-Factor authentication {#two-factor}

Magento **requires all Partners** who contribute code to enable 2FA on their GitHub accounts. You can use a mobile device or 2FA application for added protection. See [Configuring two-factor authentication](https://help.github.com/en/articles/configuring-two-factor-authentication) in the GitHub help.

We also recommend creating a personal access token for your account to use when interacting with GitHub in scripts and on the command line. See [Creating a personal access token for the command line](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) in the GitHub help.

## Questions or enhancement requests? {#question}

We capture code-related issues in the the [Magento 2 repo](https://github.com/magento/magento2) and documentation-related issues in the [Magento DevDocs repo](https://github.com/magento/devdocs). If you have questions about Magento functionality or processes, we recommend posting them to a question-and-answer site, such as [Stack Exchange](https://magento.stackexchange.com/) and the [Magento Forums](https://community.magento.com/), where Magento community members can quickly provide recommendations and advice.

Submit feature requests or enhancement suggestions to the [Magento 2 Feature Requests and Improvements forum](https://community.magento.com/t5/Magento-2-Feature-Requests-and/idb-p/feature-requests). For details about how requests are managed, see [Improvements to GitHub Management](https://community.magento.com/t5/News-Announcements/Improvements-to-GitHub-Management/m-p/44572#M96).

## Accepted pull requests and ported code {#rules}

{% include contributor/2-4-submission.md %}

Review the following supported and accepted pull request rules. We defined these rules to simplify and accelerate your submissions, ensure code consistency, manage current and backlog tasks, and so on.

{% include contributor/pull-request-table.md %}

## Contribution requirements {#requirements}

1. Contributions must adhere to [Magento coding standards]({{ site.gdeurl }}/coding-standards/bk-coding-standards.html).
1. Refer to the Magento development team's [Definition of Done]({{ site.baseurl }}/contributor-guide/contributing_dod.html). We use these guidelines internally to ensure that we deliver well-tested, well-documented, and solid code. We encourage you to use this as well!
1. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
1. Commits must be accompanied by meaningful commit messages.
1. PRs that include bug fixes must be accompanied by a step-by-step description of how to reproduce the bug.
1. PRs that include new logic or new features must be submitted along with:
   -  Unit/integration test coverage (we will be releasing more information about writing test coverage in the near future).
   -  Follow the [Magento DevDocs contribution work flow and guidelines](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md) to submit proposed documentation updates to the [Magento DevDocs Github repository](https://github.com/magento/devdocs).
1. For large features or changes, [open an issue](https://github.com/magento/magento2/issues) to discuss your proposal first.  Notifying us in advance can prevent duplicate or unnecessary effort, and also offers an opportunity to get additional background information and help from other contributors.
1. To report a bug, [open an issue](https://github.com/magento/magento2/issues) and follow the [Issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines).
1. Verify that all automated tests on your pull request pass successfully.

## Forks and pull requests

For complete information about contributing to Magento projects, see the [Beginner Guides](https://github.com/magento/magento2/wiki/Getting-Started) on the Magento 2 repository. These guides help you:

-  Fork a repository
-  Create a branch
-  Find and work issues
-  Create tests
-  Submit a pull request

## Squash commits {#squash-commits}

Sometimes your pull request may have more than one commit (the main commit, then changes to it after review, etc). A good practice is to deliver commits that bring finalized, functional parts/bugfixes. In that case, all intermediate commits like "static test fix", "typo fix", "minor refactoring" should be squashed into a single commit. This helps keep a clean history and makes the repo easier to read. There is no requirement to have only one commit per PR. However, the intermediate commits in most cases bring no value into the commits history, which is why it is a good to keep the history clean and useful.

## Magento contributor assistant {#contributor-assist}

The Magento Contributor Assistant is a bot that runs on all GitHub `magento` repositories. It helps automate issue and pull request workflows by using commands entered as comments.

### Assigning an issue

If you would like to have an issue assigned to you, add a comment and the contribution assistant will do the work.

**Command:** To assign as issue to your GitHub account, add the following command as a comment to the issue:

```text
@magento I am working on this
```

This command has several variations:

```text
@magento I am working on this
@magento I am working on it
@magento I'm working on this
@magento I'm working on it
```

**Actions:** The following actions occur:

-  If the user is a member of the Magento GitHub organization, the user will be assigned to the ticket automatically.
-  If the user is not yet a member of the Magento GitHub organization, an invitation will be sent to the user. Check your email or accept the [Github invitation](https://github.com/orgs/magento/invitation). Once the user has joined the Magento GitHub organization, the user should repeat the command to get assigned to the ticket.

**Permissions:**

-  All permissions granted for all users.

Currently, the Magento Contributor Assistant automatically deploys a test instance based on a contributor's pull request, or, it provides a vanilla Magento instance on the `magento/magento2` repository. This is used to test pull requests or reported issues.

-  [Deploy vanilla Magento instance](#vanilla-pr)
-  [Deploy instance based on PR changes](#deploy-pr)
-  [Combine multiple pull requests](#combine-pr)

### Deploy vanilla Magento instance {#vanilla-pr}

When you want to verify an issue or pull request, use the `instance` command to generate a Magento instance. This is a clean installation of a specified version tag or branch of a specified release line.

**Command:** To deploy a Magento instance, add the following command as a comment to the GitHub pull request or issue:

```text
@magento give me {$version} instance
```

Replace `{$version}` with the version tag or branch. The following values are supported: the version tag for the latest release and `2.4-develop` for the development branch.

```text
@magento give me 2.4.0 instance
```

**Actions:** The following actions complete the command:

-  If the instance does not exist, it is deployed. Deployment takes approximately 2 minutes.
-  If the instance exists, a fresh instance is redeployed.
-  By default, instances have a lifetime of 3 hours. All deployments are then terminated.

**Admin access:**

Admins access is shared via comment on GitHub.

**Permissions:**

-  All permissions granted for all users.

### Deploy instance based on PR changes {#deploy-pr}

To verify and test changes within a pull request, enter a command to generate a Magento instance using code based on the PR.

**Command:** To deploy, [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers), a Magento EngCom Team member, or a contributor under the existing Pull Request enters the following command as a comment to the pull request:

```text
@magento give me test instance
```

**Actions:**

-  It deploys a new Magento instance based on Pull Request changes.
-  Deployment takes approximately 2 minutes.
-  By default, instances have a lifetime of 3 hours. All deployments are then terminated.

**Admin access:**

Admins access will be shared via comment on GitHub.

**Permissions:**

-  [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers)
-  Magento EngCom Team
-  [Contributor]({{ site.baseurl }}/contributor-guide/contributors.html)

### Customize deployed instances {#customize-deployed-instances}

In some cases a custom environment is required to test an issue or a pull request. You can create a custom environment by appending custom configuration settings to the PR comment to [Deploy a vanilla Magento instance](#vanilla-pr) or [Deploy an instance based on PR changes](#deploy-pr).

#### Magento edition

Append the following text to your PR comment to specify the Magento Commerce edition to use when you [Deploy a vanilla Magento instance](#vanilla-pr) or [Deploy an instance based on PR changes](#deploy-pr).

```text
with edition {$edition}
```

Replace `{$edition}` with either of the following values:

-  `ee` deploys the Magento Commerce edition
-  `b2b` deploys Magento Commerce with B2B modules.

For example, append the following text to the PR comment to deploy a {{site.data.var.ee}} instance with B2B modules:

```text
with edition b2b
```

#### Add extensions

Append the following text to your PR comment to specify extensions to add to an instance when you [Deploy a vanilla Magento instance](#vanilla-pr) or [Deploy an instance based on PR changes](#deploy-pr).

```text
with extensions {$extensionRepo}
```

Replace `{$extensionRepo}` with one or more extension repositories to include when compiling your instance.  If you specify multiple repositories, use a comma after each repository. You can specify a specific branch in a repository using the pattern: `org/repo-name:branch-name`. For example:

```text
with extensions magento/security-package:1.0-develop, magento/security-package-ee
```

#### Remove extensions

Append the following text to your PR comment to specify extensions that you want to remove from the instance when you [Deploy a vanilla Magento instance](#vanilla-pr) or [Deploy an instance based on PR changes](#deploy-pr).

```text
without extensions {$extensionRepo}
```

Replace `{$extensionRepo}` with one or more extension repositories to remove before compiling your instance. If you specify multiple repositories, use a comma after each repository. For example:

```text
without extensions magento/adobe-stock-integration
```

### Combine multiple pull requests {#combine-pr}

To optimize the pull request queue, enter a command with a series of related pull request numbers to merge and test the code. If all tests pass, the entered PRs are merged into the current PR.

**Command:** To combine pull requests, a member of the [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers) or Magento EngCom Team under the existing Pull Request will enter the following command:

```text
@magento combine {xxx} {yyy} {zzz}
```

The command merges the listed related pull requests (`xxx`, `yyy`, `zzz`) into the current pull request. For example: `@magento combine 1234 1238 1239`.

**Actions:** When all conditions are passed, all related pull requests will be closed and merged to the current PR:

-  Current pull request allows changes from maintainers.
-  All mentioned pull requests are open.
-  All mentioned pull requests have been created by the same contributor (author).
-  All mentioned pull requests have same target (base) branch.
-  All mentioned pull requests can be merged with each other.

**Permissions:**

-  [Community Maintainers](https://github.com/magento/magento2/wiki/Community-Maintainers)
-  Magento EngCom Team

### Import source code to specific repository {#import}

The import command provides the ability to copy a contributor's code or pull request into an internal fork.  The internal team can then proceed with additional fixes or delivery.

**Command:** To import code or a pull request, a member of the Magento team controlling the pull request enters the following command:

```text
@magento import {code|pr} to {organizationName}/{repositoryName}
```

**Usage Examples:**

-  To import the code only use

```text
@magento import code to magento-team/magento2
@magento import code to https://github.com/magento-team/magento2
```

-  To import the pull request use

```text
@magento import pr to magento-team/magento2
@magento import pull request to magento-team/magento2
@magento import pr to https://github.com/magento-team/magento2
@magento import pull request to https://github.com/magento-team/magento2
```

**Actions:**

-  Code: A branch with a copy of the contributor's source code is created within the target repository.
-  PR: A copy of the pull request is created within the target repository.

**Permissions:**

-  Magento team

## Report an issue {#report}

If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

Before creating an issue:

1. Read the [Issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines) to learn how to create an issue that can be processed in a timely manner.
1. Check the [documentation]({{site.baseurl}}/) to make sure the behavior you are reporting is really a bug, not a feature.
1. Review the [existing issues](https://github.com/magento/magento2/issues) to make sure you are not duplicating another contributor's work.

To add an issue:

1. In the Magento 2 public repository, click the **Issues** tab.

    ![Issues tab]({{site.baseurl}}/common/images/issues.png)
1. Click **New issue**.

    ![Create new issue]({{site.baseurl}}/common/images/new_issue.png)
1. Select a type of issue: Bug report, Developer experience issue, or Feature request.
1. Fill in the Title, description, and additional information for the template.
1. Click **Submit new issue**.

When you submit the issue, a validation process begins. If the issue doesn't have enough information, you as the Reporter may need to add more information. See [GitHub Issues Processing Workflow](https://github.com/magento/magento2/wiki/GitHub-Issues-Processing-Workflow) for complete details on issue verification.

## Help triage issues  [![](https://www.codetriage.com/magento/magento2/badges/users.svg)](https://www.codetriage.com/magento/magento2) {#triage}

In addition to contributing code, you can help triage issues. This can include reproducing bug reports or asking for vital information, such as affected versions or instructions to reproduce bugs.  If you want to triage issues, you can begin by subscribing to [Magento on CodeTriage](https://www.codetriage.com/magento/magento2).

## Labels applied by the Community Engineering team {#labels}

We apply labels to public pull requests and issues to help other participants retrieve additional information about current progress, component assignments, Magento release lines, and much more. The following information details global labels used in Magento 2 repositories and across Community Engineering contributions.

{% include contributor/labels.md %}

## Contribution awards and points {#points}

{% include contributor/rewards.md %}
