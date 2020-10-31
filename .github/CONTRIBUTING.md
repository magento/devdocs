## Contribute to Magento DevDocs

Share your knowledge with the community by contributing to Magento DevDocs!
You can contribute by creating an issue or pull request (PR) on our [DevDocs](https://github.com/magento/devdocs) GitHub repository.
We welcome all types of contributions; from minor typo fixes to new topics.

DevDocs staff members and [Community Maintainers](https://devdocs.magento.com/contributor-guide/contributors.html#/community-maintainers) review issues and pull requests on a regular basis. We do our best to address all issues as soon as possible, but working through the backlog takes time. We appreciate your patience.

## Rewards for contributions

DevDocs works with Magento Community Engineering teams and projects.
As you contribute PRs, you gain [Contribution Points](https://devdocs.magento.com/contributor-guide/contributing.html#points).

If you write and contribute a full topic, we will add your name (or your company's name) at the top of the DevDocs page and link it to your blog or website!

## Get started

![Get started workflow](https://devdocs.magento.com/common/images/contribute-prerequisites.png)

1. Make sure you have a [GitHub account](https://github.com/signup/free).

    **Note for partners:** Add [2FA](https://devdocs.magento.com/contributor-guide/contributing.html#two-factor) protection when contributing to Magento repositories.

1. [Fork](https://help.github.com/articles/fork-a-repo/) the [DevDocs repository](https://github.com/magento/devdocs). Remember to [sync your fork](https://help.github.com/articles/syncing-a-fork/) and update branches as needed.
1. Review the [DevDocs guidelines](#contribution-guidelines).

**Note:** If you use a fork instead of a branch, please set permissions to allow maintainers to edit and update the PR. See [Allowing changes to a pull request branch created from a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) in the _GitHub documentation_.

## Contribute documentation

The following diagram shows the contribution workflow:

![Contributing workflow](https://devdocs.magento.com/common/images/contribute-write-submit-pr.png)

**Tip!** If you are not sure where to start contributing, search for issues with the [`help wanted`](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22), [`good first issue`](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22), and [`groomed`](https://github.com/magento/devdocs/issues?q=is:issue+is:open+label:%22groomed%22) labels. These issues receive higher priority for processing.

### Create a branch

1. Create a new branch from your fork using a name that best describes the work or references a GitHub issue number.
1. Edit or create markdown (`.md`) files in your branch.
1. Push your branch to your fork.

### Create a pull request

1. Create a pull request to the [magento/devdocs](https://github.com/magento/devdocs) repository.

   In general, you should use `master` as the base branch when creating a PR. If your contribution is related to a release that is in progress, use a version-specific integration branch, such as `develop`.

1. Complete the pull request template. Review the [Pull Request Process page](https://github.com/magento/devdocs/wiki/Pull-Request-Process) to learn how to complete a PR (with info about completing the template, adding a `whatsnew`, and more.)

    **We will close your pull request if you do not complete the template.**

1. After creating a pull request, a DevDocs staff member or maintainer will review it and may ask you to make revisions.

    **We will close your pull request if you do not respond to feedback in two weeks.**

**Note:** If you have not signed the [Adobe Contributor License Agreement](https://opensource.adobe.com/cla.html), the pull request provides a link. You must sign the CLA before we can accept your contribution.

## Contribution guidelines

The following guidelines may answer most of your questions and help you get started:

-  Write content using Markdown. See the [Templates](#templates) section for examples.
-  Review existing [pull requests](https://github.com/magento/devdocs/pulls) and [issues](https://github.com/magento/devdocs/issues) to avoid duplicating work.
-  For large contributions, or changes that include multiple files, [open an issue](#report-an-issue) and discuss it with us first. This helps prevent duplicate or unnecessary work.
-  Do not make global find-and-replace changes without first [creating an issue](https://github.com/magento/devdocs/issues/new/choose) and discussing it with us. Global changes can have unintended consequences.
-  Do not make changes to content in the [`_data/codebase`](https://github.com/magento/devdocs/tree/master/src/_data/codebase) directory, which contains auto-generated data from Magento source code. Any manual changes will be lost when the file regenerates.
-  Combine multiple small changes (such as minor editorial and technical changes) into a single pull request. This helps us efficiently and effectively facilitate your contribution.
-  Familiarize yourself with the organization and conventions of our existing documentation before creating a pull request. Changes that are consistent with our style and conventions have a higher acceptance rate.

   -  If you need to update the site navigation, ask for help in Slack ([#devdocs](https://magentocommeng.slack.com/messages/CAN932A3H)).

-  Ensure that you update the correct version(s) of documentation (v2.3). If you are not sure what directory to put your content in, just do your best. We can help re-locate it (if necessary) during the review process.
-  Review your work for basic typos, formatting errors, or ambiguous sentences before opening a pull request.
-  Revise pull requests according to review feedback. We will close pull requests that require an inordinate amount of time to review and process (especially for minor changes) if you fail to make revisions according to review feedback.
-  Do not directly contact DevDocs team members or maintainers on Slack to review your pull request unless it has been open for more than five days. We have a process and queue for pull requests that everyone must follow.
-  Get recognized on the DevDocs web site for writing new topics! Add your name and a link to your company website or GitHub profile to the file metadata so that we can display it on the page. See [Edit metadata](#edit-metadata).
-  We no longer recognize individual community members who contribute features to the Magento 2 codebase in the corresponding feature topic(s) on the DevDocs website. Magento recognizes these contributions in more appropriate channels (for example, the [Magento DevBlog](https://community.magento.com/t5/Magento-DevBlog/bg-p/devblog)).

## Tips for writing content

Use the following guidelines to help you with the writing process:

-  Focus your efforts on providing useful information for your fellow Magento developers and community members. For example, consider providing or revising code samples, important notes, and clarifying vague or ambiguous content.
-  Define the goal of your topic. What exactly do you want to teach the reader?
-  Make the title of your topic reflect the content.
-  Keep your sentences concise. Separate conceptual information from procedural steps.
-  Batch several small changes into a single pull request (instead of separate ones) to ensure your contributions are approved and merged quickly. Have several typo fixes across several areas of documentation? Combine them into a single PR.
-  Remember to write in present tense, use the second person, and use active voice (not passive). For example, _"The log captures commands, output..."_.
-  Use notes to alert readers about important details.
-  Use cross-references to other topics sparingly. We can help you with the syntax if it is not clear. The template provides an example you can use.
-  Need help with markdown? See our [templates](#templates).

### Review changes locally

_(Optional)_ To review your changes in HTML output, follow the instructions in the [README](https://github.com/magento/devdocs/blob/master/README.md) to build the devdocs site locally using Jekyll.

### Templates

We provide templates to help you get started writing new content and understanding Markdown formatting:

-  **General topic template** - [Markdown](https://github.com/magento/devdocs/blob/master/contributor-guide/templates/basic_template.md) | [HTML](https://devdocs.magento.com/contributor-guide/templates/basic_template.html): This is a template for writing any topic with example formats and styles.
-  **Tutorial templates**: These templates provide example formats and styles for step-by-step instructions (like how-tos). Each file adds navigation buttons when content is generated. Templates include:
   -  First introduction topic - [Markdown](https://github.com/magento/devdocs/blob/master/contributor-guide/templates/tutorial-template-first.md) | [HTML](https://devdocs.magento.com/contributor-guide/templates/tutorial-template-first.html): Introduction to a tutorial for prerequisites and listing steps
   -  Middle topic - [Markdown](https://github.com/magento/devdocs/blob/master/contributor-guide/templates/tutorial-template-middle.md) |  [HTML](https://devdocs.magento.com/contributor-guide/templates/tutorial-template-middle.html): Use for each step in a tutorial.
   -  Final step topic - [Markdown](https://github.com/magento/devdocs/blob/master/contributor-guide/templates/tutorial-template-last.md) | [HTML](https://devdocs.magento.com/contributor-guide/templates/tutorial-template-last.html): Use for the last step of the tutorial.

### Edit metadata

The Markdown (.md) file's metadata is a set of YAML key-value pairs. The metadata section is located at the top of each file. For more info, see the [Basic Template](https://devdocs.magento.com/contributor-guide/templates/basic_template.html).

```yaml
---
group:
title:
contributor_name:
contributor_link:
---
```

> Key-value pair reference:

| Property  | Description |
| ------------- | ---------- |
| `group`       | Defines the topic's guide or section. Use the table of contents `.yml` file name. This loads your left-side navigation. We will help during the PR process to add new files to the `.yml` file. |
| `title`       | Sets the title of the page in the HTML metadata and the main title on the page.  |
| `contributor_name` | Sets the name of the contributor who wrote the topic and displays it on the page. |
| `contributor_link` | Creates a link to the contributor's GitHub profile or company website. |

## Report an issue

If you find a typo or errors in Magento DevDocs, you can either fix it with a pull request (as described above) or you can report it by creating an issue in the DevDocs GitHub repository.

You must complete the issue template. We will close your issue if you fail to complete the template. Enter as much information as you can, including content corrections, steps to reproduce, command or code updates, or questions for clarifications.

**Note:** Check the existing [issues](https://github.com/magento/devdocs/issues) on GitHub to see if someone has already reported the issue.

You can provide feedback using the following options:

-  Have general feedback? Create an issue on [GitHub DevDocs](https://github.com/magento/devdocs/issues/new/choose).
-  Have feedback on a specific DevDocs page? Click the **Give us feedback** link at the top right of the page to report on the currently open topic.

   ![Report an issue](https://devdocs.magento.com/common/images/contribute-feedback-link.png)

-  Have a Community code contribution that needs documentation? Create an issue to [request DevDocs content](https://github.com/magento/devdocs/issues/new?template=COMMUNITY_ISSUE_TEMPLATE.md).

## Contact DevDocs

Have a question? Need help? Magento DevDocs, Maintainers, and other Contributors are available through:

-  [Slack](https://magentocommeng.slack.com/messages/CAN932A3H) ([Join us](http://tinyurl.com/engcom-slack))
-  [Twitter @MagentoDevDocs](https://twitter.com/MagentoDevDocs)

Thank you for contributing your brilliance to Magento DevDocs!!
