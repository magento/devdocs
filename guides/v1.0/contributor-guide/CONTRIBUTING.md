---
layout: default
group: Contributor Guide
subgroup: Contributor Guide
title: Contributor Guide
menu_title: Contribute to Magento 2 code
menu_order: 1
menu_node: parent
github_link: contributor-guide/CONTRIBUTING.md
---

<h2>Contribute to Magento 2 code</h2>

Use the <a href="#fork">fork</a> & <a href="#pull_request">pull</a> model to contribute to the Magento 2 codebase.
This contribution model has contributors maintaining their own copy of the forked codebase (which can easily be synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions.

The Magento 2 development team reviews all issues and contributions submitted by the community of developers in a first-in, first-out basis. During the review we might require clarifications from the contributor. If there is no response from the contributor for two weeks, the issue is closed.

<h2>Contribution requirements</h2>

1. Contributions must adhere to <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html" target="_blank">Magento coding standards</a>.
2. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
3. Commits must be accompanied by meaningful commit messages.
4. PRs that include bug fixing must be accompanied by a step-by-step description of how to reproduce the bug.
3. PRs that include new logic or new features must be submitted along with:
	* Unit/integration test coverage (we will be releasing more information on writing test coverage in the near future).
	* Proposed <a href="{{ site.baseurl }}" target="_blank">documentation</a> update. Documentation contributions can be submitted <a href="https://github.com/magento/devdocs" target="_blank">here</a>.
4. For large features or changes, please <a href="https://github.com/magento/magento2/issues" target="_blank">open an issue</a> and discuss first. This may prevent duplicate or unnecessary effort, and it may gain you some additional contributors.

5. All automated tests must pass successfully (all builds on <a href="https://travis-ci.org/magento/magento2" target="_blank">Travis CI</a> must be green).

<h2 id="fork">Fork a repository</h2>
To fork a repository on Github, do the following:

1. Create or log in to your free account on GitHub. <!-- necessarily free?-->
2. Navigate to the <a href="https://github.com/magento/magento2" target="_blank">Magento 2 repository</a>.
3. Click **Fork** at the top right: <br><img src="{{ site.baseurl }}common/images/fork.png" alt="fork a repository">

4. Clone the repo into your development environment, get the app installed, and start playing.

<h2 id="pull_request">Create a pull request</h2>

First, check the <a href="https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr" target="_blank">existing PRs</a> and make sure you are not duplicating others’ work!

To create a pull request do the following: 

1. Create a feature branch for your changes and push those changes to the copy of your repository on GitHub. This is the best way to organize and even update your PR.
2. In your repository, click **Pull requests** on the right, and then click **New pull request**: <br><img src="{{ site.baseurl }}common/images/pr.png" target="_blank">
3. Ensure that you are creating a PR to the `magento:develop` branch. We accept PRs to this branch only.
4. Review the changes, then click **Create pull request**. Fill out the form, and click **Create pull request** again to submit the PR&mdash;that’s it!


After submitting your PR, you can head over to the Magento 2 repository’s <a href="https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr" target="_blank">Pull Requests panel</a> to see your PR along with the others. Your PR undergoes automated testing, and if it passes, the core team considers it for inclusion in the Magento 2 core. If some tests fail, please make the corresponding corrections in your code.

<h2>Report an issue</h2>
If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

**Note**: Before creating an issue, please do the following:

 1. Check the <a href="{{ site.baseurl }}">documentation</a> to make sure the behavior you are reporting is really a bug, not a feature.
 2. Check the <a href="https://github.com/magento/magento2/issues" target="_blank"> existing issues</a> to make sure you are not duplicating somebody's work.

To add an issue:

1. In the Magento 2 public repository, click the **Issues** link on the right. <br><img src="{{ site.baseurl }}common/images/issues.png" alt="the Issues link at the right"/>
2. Click **New issue**.<br><img src="{{ site.baseurl }}common/images/new_issue.png" alt="the New Issue button"/>
3. Fill in the Title and issue description.
4. Click **Submit new issue**.

