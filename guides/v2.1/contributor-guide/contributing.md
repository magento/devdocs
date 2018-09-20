---
group: contributor-guide
title: Code Contributions
---

{% include contributor/2-1-end.md %}

The following topics are included in this guide:

- [Contribute to Magento 2 code](#contribute)
- [Questions or enhancement requests?](#question)
- [Accepted pull requests and ported code](#rules)
- [Contribution requirements](#requirements)
- [Fork a repository](#fork)
- [Create a pull request](#pull_request)
- [Magento Contributor Assistant](#contributor-assist)
- [Porting code contributions across Magento versions](#porting)
- [Report an issue](#report)
- [Help triage issues](#triage)
- [Labels applied by the Community Engineering Team](#labels)

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

{% include contributor/2-1-end.md %}

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
1. All automated tests must pass successfully (all builds on [Travis CI](https://travis-ci.org/magento/magento2){:target="_blank"} must be green).

## Fork a repository {#fork}

To fork a repository on Github:

1. Create or log in to your account on GitHub.
2. Navigate to the [Magento 2 repository](https://github.com/magento/magento2){:target="_blank"}.
3. Click **Fork** at the top right:

    ![Fork a Repository]({{site.baseurl}}/common/images/fork.png)

4. Clone the repo into your development environment and start playing.

### Update the fork with the latest changes {#sync}

As community and Magento writers' changes are merged to the repository, your fork becomes outdated and pull requests might result in conflicts. To see if your fork is outdated, open the fork page in GitHub and if a `This branch is NUMBER commits behind magento:2.2-develop.` message is displayed at the top of the page. If so, your fork must be updated.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.github.com/articles/syncing-a-fork){:target="_blank"}. Make sure to update from the correct branch!

You can also use the GitHub interface to update forks, referred to as a *reverse pull request*. Though this method does have a downside: it inserts unnecessary information into your fork commit history.

1. On your fork GitHub page, click **New pull request**. You should see the following message:

   ```terminal
   There isn’t anything to compare.
   magento:2.2-develop is up to date with all commits from <your fork>:2.2-develop. Try switching the base for your comparison.
   ```

1. Click the base link and then click **Create pull request**.
1. Provide a descriptive name for your pull request in the provided field.
1. Scroll to the bottom of the page and click **Merge pull request**, then click **Confirm Merge**.

Check out this video to see the process in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mJDCL0uzIpY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Create a pull request {#pull_request}

{% include contributor/2-1-end.md %}

First, check the [existing PRs](https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr){:target="_blank"} and make sure you are not duplicating others’ work.

To create a pull request:

1. Create a feature branch for your changes and push those changes to the copy of your repository on GitHub. This is the best way to organize and even update your PR.
1. In your repository, click **Pull requests** on the right, and then click **New pull request**. <br><img src="{{ site.baseurl }}/common/images/pr.png" target="_blank">
1. Ensure that you are creating a PR to the one of following  branches: `magento:2.3-develop`, `magento:2.2-develop` or `magento:2.1-develop` branch. We accept PRs to these branches only.
1. Review the changes, then click **Create pull request**. Fill out the form, and click **Create pull request** again to submit the PR&mdash;that’s it!

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
@magento-engcom-team give me {$version} instance
```

For `version`, the currently supported values are [version tags](https://github.com/magento/magento2/tags) and develop branches starting with 2.2.0 and 2.2-develop.

**Actions:** The following actions complete for the command:

- If the instance does not exist, it will be deployed. Deploymnent takes ~2 minutes.
- If the instance exists, a fresh instance will be redeployed.
- By default, instances have a lifetime of 3 hours. All deployments are terminated after that.

**Admin access:**

- http://i-xxx.engcom.dev.magento.com/admin
- Credentials: Username: admin | Password: 123123q

**Permissions:**

- All permissions granted for all users

### Deploy instance based on PR changes {#deploy-pr}

To verify and test changes completed in a pull request, enter a command to generate a Magento instance using the code based in the PR.

**Command:** To deploy, [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members), a [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) member, or contributor under the existing Pull Request enters the following command as a comment to the pull request:

```
@magento-engcom-team give me test instance
```

**Actions:**
* It deploys a new Magento instance based on Pull Request changes.
* Deployment takes ~2 minutes.

**Admin access:**

- http://pr-xxx.engcom.dev.magento.com/admin
- Credentials: Username: admin | Password: 123123q

**Permissions:**

- [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
- [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)
- Contributor

### Combine multiple pull requests {#combine-pr}

To optimize the pull request queue, enter a command with a series of related pull requests to verify and combine the code. If all tests pass, the entered PRs are merged into the current PR.

**Command:** To combine pull requests, a member of the [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members) or [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members) under the existing Pull Request enters the following command:

```
@magento-engcom-team combine {xxx} {yyy} {zzz}
```

The command merges the listed related pull requests (`xxx`, `yyy`, `zzz`) into the current pull request. For example: `@magento-engcom-team combine 1234 1238 1239`

**actions:** When all conditions are passed, all related pull requests will be closed and merged to the current PR:

- Current pull request allows changes from maintainers
- All mentioned pull requests are open
- All mentioned pull requests have been created by the same contributor (author)
- All mentioned pull requests have same target (base) branch
- All mentioned pull requests are mergeable with each other

**Permissions:**

- [Community Maintainers](https://github.com/orgs/magento/teams/open-source-maintainers/members)
- [Magento EngCom Team](https://github.com/orgs/magento/teams/core-maintainers/members)


## Porting code contributions across Magento versions {#porting}

In order to keep consistency between Magento release lines (2.1, 2.2, 2.3, etc), there are two techniques of code delivery: back-port and/or up-port. Every Magento Contributor, who wants to deliver their solution across all Magento versions, faces the same problem. How do you port fixes easily?

We provide two options to create back-ports and up-ports for your code contributions:

- [Magento Porting Tool](#porting-tool) - Quick and easy method with a few clicks in a Magento tool
- [Manual porting](#porting-manual) - Manual process requiring a strong understanding of git

{: .bs-callout .bs-callout-info }
Creating back-ports and up-ports are recommended and a best practice, but not required to contribute code. Anyone can create a back-port and up-port for an already merged pull request.

### What are up-ports and back-ports?

As a best practice, we recommend creating back-ports and up-ports for your code contributions.

**Back-ports** (or Backports) contribute your code and fixes to a lower release line. You want to create a back-port if the issue exists in a lower release line. If you fixed an issue in a release line and there is a supported lower version, create a pull request to that lower release line to address the issue. For example, you may have contributed a fix to 2.3 and back-port to 2.2 and 2.1.

**Up-ports** (or Forwardports) contribute your code and fixes to a higher release line. You want to create an up-port if the issue exists in a higher release line. If you have an issue fixed in a non-latest release line, create a pull request to the latest branch in order to address that issue in an upcoming minor release. For example, you may have contributed a fix to 2.1 and up-port to 2.2 and 2.3. We recommend contributors create an up-port for every pull request delivered to a lower release line.

### Magento Porting Tool {#porting-tool}

This tool ports fixes automatically across versions with a few simple steps. It allows you to create ports only for _merged_ pull requests.

Access the tool at [porting.engcom.dev.magento.com](https://porting.engcom.dev.magento.com/){:target="_blank"}. The first time you visit, you need to login and authorize with GitHub credentials. The tool performs all actions using your token.

1. Visit [porting.engcom.dev.magento.com](https://porting.engcom.dev.magento.com/){:target="_blank"} and **Login with GitHub**.
1. Copy and paste the pull request URL in **Select Pull Request for porting** and click **Next**.
1. Select the target version for your port: **Up Port** or **Back Port**.
1. Verify the summary of changes in **Port information**.
1. Click **Create Job**. A job is created and started shortly after.

![Magento Porting Tool]({{ site.baseurl }}/common/images/porting-tool-steps.png)

The results of porting include the following:

- Done - Your port has been successfully created.
- Fail - The patch failed to apply automatically, usually due to merge conflict.

In case of failure, porting artifacts will be available for download and review:

- Log - Includes information on actions and results. Find the reason why the porting job failed.
- Patch - Use to manually apply the patch and resolve all merge conflicts.

The **Activity Log** provides a tracked list of all ported pull requests and details. You can track the port job status and view results. Refresh and review the list automatically per a selected interval (10 sec, 30 sec, 1 min, 5 min) or manually.

The tool includes configuration settings through the gear icon located top right.

- **Use my fork as target** - When checked, your fork is used to push the result. This is selected by default.
- **Target options** - If you do not use your fork as a target (not checked), manually specify an organization and repository for ported commits.
- **Porting strategy** - Sets the git commands and method for committing the code port:
    - `git am` – Recommended. When selected, authorship and original commit message will be saved. This command is used to port.
    - `git apply` – A new commit will be created with a default message. GitHub provided patch is applied with `git apply`. **Important**: This is an experimental strategy and results may vary.

![Magento Porting Tool Settings]({{ site.baseurl }}/common/images/porting-tool-setting.png){:width="600px"}

### Manual porting {#manual-porting}

When manually porting, you use git commands to create branches and pull requests. This option may require a strong understanding of git.

The following is an example "Forwardport" (up-port) pull request for https://github.com/magento/magento2/pull/13528 from the `2.2-develop` branch to the `2.3-develop` branch:

1. Checkout the `2.3-develop` branch. Make sure that you have the latest changes from the magento/magento2 repository.
1. Create a new branch for your fix: `git checkout -b up-port-pull-13528`.
1. Apply changes from the existing pull request: `curl -L https://github.com/magento/magento2/pull/13528.patch | git am`.
1. Push changes to your repository: `git push origin up-port-pull-13528:up-port-pull-13528`.
1. Create a pull request from `<your-fork>:up-port-pull-13528` to m`agento:2.3-develop`.
1. In the up-port pull request description, add the full path to the original pull request (for example: https://github.com/magento/magento2/pull/13528) to help the Magento team link these pull requests.

The following git commands detail how to up-port to `2.3-develop` branch from `2.2-develop` branch:

```
git checkout 2.3-develop
git checkout -b up-port-pull-<PR_NUMBER>
curl -L https://github.com/magento/magento2/pull/<PR_NUMBER>.patch | git am
git push origin up-port-pull-<PR_NUMBER>:up-port-pull-<PR_NUMBER>
```

The following git commands detail how to back-port to `2.2-develop` branch from `2.3-develop` branch:

```
git checkout 2.2-develop
git checkout -b back-port-pull-<PR_NUMBER>
curl -L https://github.com/magento/magento2/pull/<PR_NUMBER>.patch | git am
git push origin back-port-pull-<PR_NUMBER>:back-port-pull-<PR_NUMBER>
```

## Report an issue {#report}

If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

Before creating an issue:

1. Read the [issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines) to learn how to create an issue that can be processed in a timely manner.
1. Check the [documentation]({{site.baseurl}}/) to make sure the behavior you are reporting is really a bug, not a feature.
1. Check the [existing issues](https://github.com/magento/magento2/issues){:target="_blank"} to make sure you are not duplicating somebody's work.


To add an issue:

1. In the Magento 2 public repository, click the **Issues** link on the right. <br><img src="{{ site.baseurl }}/common/images/issues.png" alt="the Issues link at the right"/>
1. Click **New issue**.<br><img src="{{ site.baseurl }}/common/images/new_issue.png" alt="the New Issue button"/>
1. Fill in the Title and Issue description.
1. Click **Submit new issue**.

## Help triage issues  [![](https://www.codetriage.com/magento/magento2/badges/users.svg)](https://www.codetriage.com/magento/magento2) {#triage}

In addition to contributing code, you can help to triage issues. This can include reproducing bug reports or asking for vital information, such as affected versions or instructions to reproduce bugs. If you would like to start triaging issues, one easy way to get started is to [subscribe to Magento on CodeTriage](https://www.codetriage.com/magento/magento2){:target="_blank"}.

## Labels applied by the Magento team {#labels}

We apply labels to public Pull Requests and Issues to help other participants retrieve additional information about current progress, component assignments, Magento release lines, and much more. The following information details global labels used in Magento 2 repositories and across Community Engineering contributions.

### Release Lines

Release line labels indicate the specific Magento release lines affected by the issue or PR. For example, if working on a fix for 2.2.6, you would apply the Release Line: 2.2. This effectively includes all releases in this line.

* `Release Line: 2.1`
* `Release Line: 2.2`
* `Release Line: 2.3`

### Progress

Progress labels indicate the Pull Request status on each review stage:

* `Progress: needs update` - The Community Engineering Team needs additional information from the reporter to properly prioritize and process the pull request. <!-- needs update -->
* `Progress: on hold` - The pull request is on hold due and will be further reviewed to accept or reject.
* `Progress: accept` - The pull request has been accepted and will be merged into mainline code. <!-- accept -->
* `Progress: reject` - The pull request has been rejected and will not be merged into mainline code. Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution. <!-- reject -->

### Contribution Rewards

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

All partners Pull Requests should be marked with label `partners-contribution`. Additionally, add a partner label for PRs submitted by specific Partners. Use the format: `Partner: <PartnerName>`. The following are Partner examples:

* `partners-contribution`
* `Partner: Atwix`
* `Partner: Comwrap`
* `Partner: Interactiv4`
* `Partner: Wagento`
* `etc`

### Components

Component labels indicate the components affected by the Pull Request. To learn more about available components and assigned architects, see [Magento Components Assignment](https://github.com/magento/magento2/wiki/Magento-Components-Assignment).

* `Component: Catalog`
* `Component: Report`
* `Component: Checkout`
* `etc`

### Events

Event labels mark recommended issues and submitted PRs for a specific event. Events may include Contribution Days, Hackathons, Imagine, special events like Smashtoberfest, and others. Contributors and Maintainers can easily locate code when attending those events. Some events may also have a [Community Engineering Slack](https://magentocommeng.slack.com) channel using the same label.

* `Event: mm18in`
* `Event: mm17es`
* `Event: mlau18`
* `etc`

### General Labels

General labels include a variety of tasks and definitions for pull requests and issues.

* `good first issue` - Indicates a good issue for first-time contributors.
* `help wanted` - Indicates the creator or author needs help with a decision, advice for resolving, and so on.
* `triage wanted` - Indicates the issues are under triage. See this information to learn more about the [Triage Wanted program](https://github.com/magento/magento2/wiki/Triage-Wanted).

### Issue Resolution Status
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
