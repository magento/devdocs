---
group: contributor-guide
title: Code Contributions
---

The following topics are included in this guide:

-  [Contribute to Magento 2 code](#contribute)
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

The Community Engineering Team reviews all issues and contributions submitted by the community developers. During the review we might require clarifications from the contributor. If there is no response from the contributor in two weeks (14 days) time, the issue is closed.

When the Community Engineering Team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like the status or who is working the issue. See [Labels](#labels) to learn more.

{:.bs-callout-tip}
Refer to [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca) for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms.

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

1. Contributions must adhere to [Magento coding standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html).
1. Refer to the Magento development team's [Definition of Done]({{page.baseurl}}/contributor-guide/contributing_dod.html). We use these guidelines internally to ensure that we deliver well-tested, well-documented, and solid code. We encourage you to use this as well!
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

The Magento Contributor Assistant is a bot that currently runs on the GitHub `magento/magento2` repository. It helps automate different issue and pull request workflows using commands entered as comments.

Currently, the Magento Contributor Assistant automatically deploys test instances on Magento's hosting based on a contributor's pull request or provide a vanilla Magento instance. This gives a GitHub user an instance to test pull requests or reported issues. We plan on adding features in the future.

-  [Deploy vanilla Magento instance](#vanilla-pr)
-  [Deploy instance based on PR changes](#deploy-pr)
-  [Combine multiple pull requests](#combine-pr)

### Deploy vanilla Magento instance {#vanilla-pr}

When you need to verify an issue or pull request, enter a command to generate an issue verification instance, or vanilla Magento. This instance is a clean Magento installation of a specified version tag or the develop branch of a specified release line.

**Command:** To deploy a vanilla Magento instance, add the following command as a comment to the GitHub Pull Request or Issue:

```text
@magento give me {$version} instance
```

For `version`, the currently supported values are latest [version tags](https://github.com/magento/magento2/tags) and 2.4-develop branch.

**Actions:** The following actions complete for the command:

-  If the instance does not exist, it will be deployed. Deployment takes ~2 minutes.
-  If the instance exists, a fresh instance will be redeployed.
-  By default, instances have a lifetime of 3 hours. All deployments are terminated after that.

**Admin access:**

-  https://i-{$issue_number}.{branch}.instances.magento-community.engineering/admin
-  Admin Credentials:
   -  Username: admin
   -  Password: 123123q

**Permissions:**

-  All permissions granted for all users.

### Deploy instance based on PR changes {#deploy-pr}

To verify and test changes completed in a pull request, enter a command to generate a Magento instance using the code based in the PR.

**Command:** To deploy, [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members), a [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) member, or contributor under the existing Pull Request enters the following command as a comment to the pull request:

```text
@magento give me test instance
```

**Actions:**

-  It deploys a new Magento instance based on Pull Request changes.
-  Deployment takes ~2 minutes.

**Admin access:**

-  http://pr-xxx.engcom.dev.magento.com/admin
-  Admin Credentials:
   -  Username: admin
   -  Password: 123123q

**Permissions:**

-  [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
-  [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)
-  Contributor

### Combine multiple pull requests {#combine-pr}

To optimize the pull request queue, enter a command with a series of related pull requests to verify and combine the code. If all tests pass, the entered PRs are merged into the current PR.

**Command:** To combine pull requests, a member of the [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members) or [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) under the existing Pull Request enters the following command:

```text
@magento combine {xxx} {yyy} {zzz}
```

The command merges the listed related pull requests (`xxx`, `yyy`, `zzz`) into the current pull request. For example: `@magento combine 1234 1238 1239`

**actions:** When all conditions are passed, all related pull requests will be closed and merged to the current PR:

-  Current pull request allows changes from maintainers.
-  All mentioned pull requests are open.
-  All mentioned pull requests have been created by the same contributor (author).
-  All mentioned pull requests have same target (base) branch.
-  All mentioned pull requests can be merged with each other.

**Permissions:**

-  [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
-  [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)

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
