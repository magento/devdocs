## Contribute to Magento DevDocs

Share your knowledge with the community by contributing to Magento DevDocs!
You can contribute by creating an issue or pull request (PR) on our [DevDocs](https://github.com/magento/devdocs) GitHub repository.
We welcome all types of contributions; from minor typo fixes to new topics.

Magento's tech writer team and [Community Maintainers](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributors.html#/community-maintainers) review issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible.
Working through the backlog takes time, though, so we appreciate your patience.

## Rewards for contributions

DevDocs works with Magento Community Engineering teams and projects.
As you contribute PRs, you gain [Contribution Points](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#points). We track [Contributors](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributors.html#/individual-contributors) and [Maintainers](https://devdocs.magento.com/guides/v2.3/contributor-guide/maintainers.html) with Community Engineering.

If you write and contribute a full topic, we will add your name (or your company's name) at the top of the DevDocs page and link it to your blog or website!

## Get started

![Get started workflow](https://devdocs.magento.com/common/images/contribute-prerequisites.png)

1. Make sure you have a [GitHub account](https://github.com/signup/free) with [Two-Factor Authentication](https://devdocs.magento.com/guides/v2.3/contributor-guide/contributing.html#two-factor)(2FA) to your account. Partners are required to add 2FA protection when contributing to Magento repositories.
1. Sign the [Magento Contributor Agreement](https://magento.com/content/magento-contributor-agreement).
1. [Fork](https://help.github.com/articles/fork-a-repo/) the [DevDocs repository](https://github.com/magento/devdocs). Remember to [sync your fork](https://help.github.com/articles/syncing-a-fork/) and update branches as needed.
1. Review the [DevDocs guidelines](#contribution-guidelines).

## Contribute docs

![Contributing workflow](https://devdocs.magento.com/common/images/contribute-write-submit-pr.png)

1. Create a new branch on your fork. Use a name that best describes the work, or references a GitHub issue number.
1. Edit or create markdown (`.md`) files in your branch.
1. When ready, push your branch to your fork.
1. Create a PR to the [magento/devdocs repo](https://github.com/magento/devdocs). Fill out as much info as possible and link any GitHub issues.

   In general, you should use `master` as the base branch when creating a PR. If your contribution is related to a release that is in progress, use a version-specific integration branch, like `2.3.1-integration`.

The DevDocs team and Maintainers will review the PR and help with formatting and navigation.

**Note:** If you have not signed the [Magento Contributor Agreement](https://magento.com/content/magento-contributor-agreement), the PR provides a link. We require a signed form and agreement to the terms for contribution.

**Tip!** If you are not sure where to start contributing, check out our GitHub issues labeled [help wanted](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) and [good first issue](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

## Contribution guidelines

Write content using [kramdown](https://kramdown.gettalong.org/), which is a simple markup language. We use kramdown, Liquid, and [Jekyll](https://jekyllrb.com/) to generate a static site hosted through [GH Pages](https://help.github.com/articles/what-is-github-pages/). Check [Templates](#templates) for examples of styles and markdown.

You can update existing or add new topics in their respective Magento 2 versioned directories (2.1, 2.2, 2.3, and onward). If you need help finding a directory for your content, we can help in your PR.

The following guidelines may answer most of your questions and help you get started:

1.  Check [existing pull requests](https://github.com/magento/devdocs/pulls) and make sure you are not duplicating work!
1.  For large contributions or changes that include multiple files, [open an issue](#report-an-issue) and discuss it with us first. This may further prevent duplicate or unnecessary effort.
1.  [Chunk many small/medium changes](#tips-for-writing-content) into one or two PRs. This helps us to efficiently and effectively facilitate your contribution.
1.  Familiarize yourself with the existing documentation. Look through and search the guides to decide where to add your topics.

    -   The DevDocs team can find the best home for your new topics and add it to the navigation.
    -   If a topic has a symlink, you can remove it with Git commands and add a new file. Copy and paste a previous version of the topic to get started.

## Tips for writing content

Focus on the content with useful information, code samples, and important notes for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

Use the following guidelines to help you with the writing process:

-   Define the goal of your topic. What exactly do you want to teach the reader?
-   Make the title of your topic reflect the content.
-   Keep your sentences concise and try to separate conceptual information from procedural steps.
-   Batch several small changes into a single pull request (instead of separate ones) to ensure your contributions get approved and merged quickly. Have several typo fixes across several areas of documentation? Batch them into on PR.
-   Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"The log captures commands, output..."_.
-   Use notes to alert readers about important details.
-   Use cross-references to other topics if appropriate. We can help you with the syntax if it is not clear. The template provides an example you can use.
-   Need help with markdown? See our [templates](#templates).

### Preview your work on local

Optional. To preview your changes in HTML output, follow the instructions in the [README](https://github.com/magento/devdocs/blob/master/README.md) to build the devdocs site locally using Jekyll.

### Templates

We provide templates to help you started writing new content and understanding markdown formatting:

- **General topic template** - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/basic_template.md) | [HTML](https://devdocs.magento.com/guides/v2.3/contributor-guide/templates/basic_template.html): This is a template for writing any topic with example formats and styles.
- **Tutorial templates**: These templates provide example formats and styles for step-by-step instructions (like how-tos). Each file adds navigation buttons when content is generated. Templates include:
  - First introduction topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-first.md) | [HTML](https://devdocs.magento.com/guides/v2.3/contributor-guide/templates/tutorial-template-first.html): Introduction to a tutorial for prerequisites and listing steps
  - Middle topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-middle.md) |  [HTML](https://devdocs.magento.com/guides/v2.3/contributor-guide/templates/tutorial-template-middle.html): Use for each step in a tutorial.
  - Final step topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-last.md) | [HTML](https://devdocs.magento.com/guides/v2.3/contributor-guide/templates/tutorial-template-last.html): Use for the last step of the tutorial.

### Edit metadata

The Markdown (.md) file's metadata is a set of YAML key-value pairs. The metadata section is located at the top of each file. For more info, see the [Basic Template](https://devdocs.magento.com/guides/v2.3/contributor-guide/templates/basic_template.html).

```yaml
---
group: install2
title: Continue with your installation
---
```

> Key-value pair reference:

| Property  | Description |
| ------------- | ---------- |
| `group`       | Defines the topic's guide. Use the table of contents `.yml` file name. This loads your left-side navigation. We will help during the PR process to add new files to the `.yml` file. |
| `title`       | Sets the title of the page in the HTML meta and the main title on the page.  |

## Report an issue

If you find a typo or errors in Magento DevDocs, you can either fix it with a pull request (as described above) or you can report it by creating an issue in the DevDocs GitHub repository. 
Enter as much information as you can including content corrections, steps to reproduce, command or code updates, or questions for clarifications.

**Note:** Check the [existing issues](https://github.com/magento/devdocs/issues) on GitHub to see if someone has already reported the issue.

You have a couple of options to enter an issue:
- Have general feedback? Create an issue on [GitHub DevDocs](https://github.com/magento/devdocs/issues/new/choose).
- Have feedback on a specific DevDocs page? Click the **Give us feedback** link at the top right of the page to report on the currently open topic.

     ![Report an issue](https://devdocs.magento.com/common/images/contribute-feedback-link.png)

- Have a Community code contribution that needs documentation? Create an issue to [request DevDocs content](https://github.com/magento/devdocs/issues/new?template=COMMUNITY_ISSUE_TEMPLATE.md).

## Contact DevDocs

Have a question? Need help? Magento DevDocs, Maintainers, and other Contributors are available through:

- [Slack](https://magentocommeng.slack.com/messages/CAN932A3H) ([Join us](http://tinyurl.com/engcom-slack))
- [Twitter @MagentoDevDocs](https://twitter.com/MagentoDevDocs)
- [E-mail](mailto:DL-Magento-Doc-Feedback@magento.com)

Thank you for contributing your brilliance to Magento DevDocs!!
