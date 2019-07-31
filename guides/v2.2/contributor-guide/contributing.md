---
group: contributor-guide
title: Code Contributions
---

The following topics are included in this guide:

- [Contribute to Magento 2 code](#contribute)
- [Questions or enhancement requests?](#question)
- [Accepted pull requests and ported code](#rules)
- [Contribution requirements](#requirements)
- [Fork a repository](#fork)
- [Create a pull request](#pull_request)
- [Magento Contributor Assistant](#contributor-assist)
- [Report an issue](#report)
- [Help triage issues](#triage)
- [Labels applied by the Community Engineering Team](#labels)
- [Contribution awards and points](#points)

{:.bs-callout .bs-callout-tip}
Connect with Magento Contributors and Maintainers to learn more about Magento contributions and special projects. Join us in our [Slack workspace](https://tinyurl.com/engcom-slack), in the [#general](https://magentocommeng.slack.com/messages/C4YS78WE6) channel, follow the [#announcements](https://magentocommeng.slack.com/messages/C7FA71S3V), and browse for more [channels](https://devdocs.magento.com/community/resources/resources.html#community-engineering-slack)!

## Contribute to Magento 2 code {#contribute}

Use the [fork](#fork) and [pull](#pull_request) model to contribute to the Magento 2 codebase.

This contribution model allows contributors to maintain their own copy of the forked codebase (which can be easily synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions. We recommend also creating back-ports and up-ports as needed with your pull requests if the issue occurs in higher or lower line releases.

The Community Engineering Team reviews all issues and contributions submitted by the community developers. During the review we might require clarifications from the contributor. If there is no response from the contributor in two weeks (14 days) time, the issue is closed.

Often when the Community Engineering Team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like the status or who is working the issue. If you're ever curious what the different labels mean, see the [table](#labels) below for an explanation of each one.

{:.bs-callout .bs-callout-tip}
Please refer to [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca) for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms.

## GitHub and Two-Factor Authentication {#two-factor}

When setting up access and tokens for Magento GitHub repositories, we recommend adding Two-Factor Authentication (2FA) to enhance security. Magento **requires all Partners** who contribute code to enable Two-Factor Authentication (2FA) on their accounts. You can use a mobile device or 2FA application for added protection.

2FA adds an additional layer of security beyond just a username/password when you access GitHub. With 2FA enabled, you log into a service with your credentials then complete an additional step providing a 2FA code. This second form of authentication helps us ensure that a malicious user will not be able to gain access to your GitHub account or any private Magento GitHub repositories.

For details, see [Configuring Two-Factor Authentication via a mobile app guide](https://help.github.com/articles/configuring-two-factor-authentication-via-a-totp-mobile-app/) to add 2FA protection to your GitHub account.

## Questions or enhancement requests? {#question}

We use this repository (the Magento 2 GitHub repository) to capture code and documentation issues. We recommend that you post all questions to a question-and-answer site, such as [Stack Exchange](https://magento.stackexchange.com/){:target="_blank"} and the [Magento Forums](https://community.magento.com/){:target="_blank"}, where Magento community members can quickly provide recommendations and advice.

Submit feature requests or enhancement suggestions to the new [Magento 2 Feature Requests and Improvements forum](https://community.magento.com/t5/Magento-2-Feature-Requests-and/idb-p/feature-requests){:target="_blank"} (see details [here](https://community.magento.com/t5/News-Announcements/Improvements-to-GitHub-Management/m-p/44572#M96){:target="_blank"}).

## Accepted pull requests and ported code {#rules}

{% include contributor/2-3-submission.md %}

Please review the following supported and accepted pull request rules. We defined these rules to simplify and accelerate your submissions, follow code consistency, manage current and backlog tasks, and so on.

{% include contributor/pull-request-table.md %}

## Contribution requirements {#requirements}

1. Contributions must adhere to [Magento coding standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html){:target="_blank"}.
1. Refer to the Magento development team's [Definition of Done]({{page.baseurl}}/contributor-guide/contributing_dod.html). We use these guidelines internally to ensure that we deliver well-tested, well-documented, and solid code. We encourage you to use this as well!
1. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
1. Commits must be accompanied by meaningful commit messages.
1. PRs that include bug fixes must be accompanied by a step-by-step description of how to reproduce the bug.
1. PRs that include new logic or new features must be submitted along with:
  * Unit/integration test coverage (we will be releasing more information about writing test coverage in the near future).
  * Proposed [documentation](https://github.com/magento/devdocs/blob/master/.github/CONTRIBUTING.md){:target="_blank"} updates. [Documentation]({{site.baseurl}}/){:target="_blank"} contributions can be submitted [here](https://github.com/magento/devdocs){:target="_blank"}.
1. For large features or changes, please [open an issue](https://github.com/magento/magento2/issues){:target="_blank"} and discuss it with us first. This may prevent duplicate or unnecessary effort, and it may gain you some additional contributors.
1. To report a bug, please [open an issue](https://github.com/magento/magento2/issues){:target="_blank"}, and follow these [guidelines about bugfix issues](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines){:target="_blank"}.
1. All automated tests must pass successfully (all [Pull Request checks](https://github.com/magento/magento2/wiki/Magento-Automated-Testing){:target="_blank"} must be green).

## Fork a repository {#fork}

To fork a repository on GitHub:

1. Create or log in to your account on GitHub.
2. Navigate to the [Magento 2 repository](https://github.com/magento/magento2){:target="_blank"}.
3. Click **Fork** at the top right:

    ![Fork a Repository]({{site.baseurl}}/common/images/fork.png)

4. Clone the repo into your development environment and start playing.

### Update the fork with the latest changes {#sync}

As community and Magento writers' changes are merged to the repository, your fork becomes outdated and pull requests might result in conflicts. To see if your fork is outdated, open the fork page in GitHub and if a `This branch is NUMBER commits behind magento:2.3-develop.` message is displayed at the top of the page. If so, your fork must be updated.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.github.com/articles/syncing-a-fork){:target="_blank"}. Make sure to update from the correct branch!

You can also use the GitHub interface to update forks, referred to as a *reverse pull request*. Though this method does have a downside: it inserts unnecessary information into your fork commit history.

1. On your fork GitHub page, click **New pull request**. You should see the following message:

   ```terminal
   There isn’t anything to compare.
   magento:2.3-develop is up to date with all commits from <your fork>:2.3-develop. Try switching the base for your comparison.
   ```

1. Click the base link and then click **Create pull request**.
1. Provide a descriptive name for your pull request in the provided field.
1. Scroll to the bottom of the page and click **Merge pull request**, then click **Confirm Merge**.

Check out this video to see the process in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mJDCL0uzIpY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Create a pull request {#pull_request}

{% include contributor/2-3-submission.md %}

First, check the [existing PRs](https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr){:target="_blank"} and make sure you are not duplicating others’ work.

To create a pull request:

1. Create a feature branch for your changes and push those changes to the copy of your repository on GitHub. This is the best way to organize and even update your PR.
1. In your repository, click **Pull requests** on the right, and then click **New pull request**.

    ![Create a Pull Request]({{ site.baseurl }}/common/images/pr.png)
1. Ensure that you are creating a PR to `magento:2.3-develop` branch. We accept PRs to this branch only.
1. Review the changes, then click **Create pull request**.
1. Fill out the PR form, and click **Create pull request** again to submit the PR&mdash;that’s it!

After submitting your PR, you can head over to the Magento 2 repository’s [Pull Requests panel](https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr){:target="_blank"} to see your PR. Your PR undergoes automated testing, and if it passes, the Community Engineering Team considers it for inclusion in the Magento 2 core. If some tests fail, please make the corresponding corrections in your code.

## Magento Contributor Assistant {#contributor-assist}

The Magento Contributor Assistant is a bot that currently runs on the GitHub `magento/magento2` repository. It helps automate different issue and pull request workflows using commands entered as comments.

Currently, the Magento Contributor Assistant automatically deploys test instances on Magento's hosting based on a contributor's pull request or provide a vanilla Magento instance. This gives a GitHub user an instance to test pull requests or reported issues. We plan on adding features in the future.

* [Deploy vanilla Magento instance](#vanilla-pr)
* [Deploy instance based on PR changes](#deploy-pr)
* [Combine multiple pull requests](#combine-pr)

### Deploy vanilla Magento instance {#vanilla-pr}

When you need to verify an issue or pull request, enter a command to generate an issue verification instance, or vanilla Magento. This instance is a clean Magento installation of a specified version tag or the develop branch of a specified release line.

**Command:** To deploy a vanilla Magento instance, add the following command as a comment to the GitHub Pull Request or Issue:

```
@magento give me {$version} instance
```

For `version`, the currently supported values are [version tags](https://github.com/magento/magento2/tags) and 2.3-develop branch.

**Actions:** The following actions complete for the command:

- If the instance does not exist, it will be deployed. Deployment takes ~2 minutes.
- If the instance exists, a fresh instance will be redeployed.
- By default, instances have a lifetime of 3 hours. All deployments are terminated after that.

**Admin access:**

- https://pr-{$id_pr}.instances.magento-community.engineering/admin
- Admin Credentials:
    - Username: admin
    - Password: 123123q

**Permissions:**

- All permissions granted for all users

### Deploy instance based on PR changes {#deploy-pr}

To verify and test changes completed in a pull request, enter a command to generate a Magento instance using the code based in the PR.

**Command:** To deploy, [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members), a [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) member, or contributor under the existing Pull Request enters the following command as a comment to the pull request:

```
@magento give me test instance
```

**Actions:**
* It deploys a new Magento instance based on Pull Request changes.
* Deployment takes ~2 minutes.

**Admin access:**

- http://pr-xxx.engcom.dev.magento.com/admin
- Admin Credentials:
    - Username: admin
    - Password: 123123q

**Permissions:**

- [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
- [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)
- Contributor

### Combine multiple pull requests {#combine-pr}

To optimize the pull request queue, enter a command with a series of related pull requests to verify and combine the code. If all tests pass, the entered PRs are merged into the current PR.

**Command:** To combine pull requests, a member of the [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members) or [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) under the existing Pull Request enters the following command:

```
@magento combine {xxx} {yyy} {zzz}
```

The command merges the listed related pull requests (`xxx`, `yyy`, `zzz`) into the current pull request. For example: `@magento combine 1234 1238 1239`

**actions:** When all conditions are passed, all related pull requests will be closed and merged to the current PR:

- Current pull request allows changes from maintainers
- All mentioned pull requests are open
- All mentioned pull requests have been created by the same contributor (author)
- All mentioned pull requests have same target (base) branch
- All mentioned pull requests can be merged with each other

**Permissions:**

- [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
- [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)

## Report an issue {#report}

If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

Before creating an issue:

1. Read the [issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines) to learn how to create an issue that can be processed in a timely manner.
1. Check the [documentation]({{site.baseurl}}/) to make sure the behavior you are reporting is really a bug, not a feature.
1. Check the [existing issues](https://github.com/magento/magento2/issues){:target="_blank"} to make sure you are not duplicating somebody's work.

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

In addition to contributing code, you can help to triage issues. This can include reproducing bug reports or asking for vital information, such as affected versions or instructions to reproduce bugs. If you would like to start triaging issues, one easy way to get started is to [subscribe to Magento on CodeTriage](https://www.codetriage.com/magento/magento2){:target="_blank"}.

## Labels applied by the Magento team {#labels}

We apply labels to public Pull Requests and Issues to help other participants retrieve additional information about current progress, component assignments, Magento release lines, and much more. The following information details global labels used in Magento 2 repositories and across Community Engineering contributions.

{% include contributor/labels.md %}

## Contribution awards and points {#points}

{% include contributor/rewards.md %}
