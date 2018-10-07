## How to contribute

Share your knowledge with the community by contributing to Magento DevDocs!
You can contribute by creating an issue or pull request (PR) on our [devdocs](https://GitHub.com/magento/devdocs) GitHub repository.
We welcome all types of contributions; from minor typo fixes to new topics.

Magento's tech writer team and [Community Maintainers](https://devdocs.magento.com/contributor-guide/devdocs-maintainers.html) review issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible.
Working through the backlog takes time, though, so we appreciate your patience.

## Rewards for contributions

DevDocs works with the Community Engineering teams and projects.
As you contribute PRs, you gain [Contribution Points](https://devdocs.magento.com/guides/v2.2/contributor-guide/contributing.html#points).

If you write and contribute a full topic, we will add your name (or your company's name) at the top of the DevDocs page and link it to your blog or website! We post your picture and a link to your GitHub account on the [Top recent contributors](https://devdocs.magento.com/guides/v2.2/contributor-guide/quarterly-contributors.html) page.

## Prerequisites

* Make sure you have a [GitHub account](https://github.com/signup/free). We recommend adding [Two-Factor Authentication](https://devdocs.magento.com/guides/v2.2/contributor-guide/contributing.html#two-factor)(2FA) to your account. Partners are required to add 2FA protection when contributing to Magento repositories.
* Make sure you sign the [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca).
* Check the [guidelines](#contribution-guidelines).
* [Fork](https://help.github.com/articles/fork-a-repo/) or [clone](https://help.github.com/articles/cloning-a-repository/) the [DevDocs repository](GitHub.com/magento/devdocs). Remember to [sync your fork](https://help.github.com/articles/syncing-a-fork/) and update branches as needed.

**Note:** If you have not signed the [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca), the PR will provide a link to complete. All contributors are required to submit the form and agree to the terms to complete it.

**Tip!** If you are not sure where to start contributing, check out our GitHub issues labeled [help wanted](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) and [good first issue](https://github.com/magento/devdocs/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

## Contribution guidelines

Write content using [Kramdown](https://kramdown.gettalong.org/), which is a simple markup language. We use Kramdown, Liquid, and [Jekyll](https://jekyllrb.com/) to generate a static site hosted through [GH Pages](https://help.github.com/articles/what-is-github-pages/). Check [Templates](#templates) for examples of styles and markdown.

You can update existing or add new topics in their respective Magento 2 versioned directories (2.1, 2.2, 2.3, and onward). If you need help finding a directory for your content, we can help in your PR.

The following guidelines may answer most of your questions and help you get started:

1.  Check [existing pull requests](https://GitHub.com/magento/devdocs/pulls) and make sure you are not duplicating work!

2.  For large contributions or changes that include multiple files, [open an issue](#report-an-issue) and discuss it with us first. This may further prevent duplicate or unnecessary effort.

3.  Familiarize yourself with the existing documentation. Look through and search the guides to decide where to add your topics.

    -   The DevDocs team can find the best home for your new topics and add it to the navigation.
    -   If a topic has a symlink, you can remove it with Git commands and add a new file. Copy and paste a previous version of the topic to get started.

## Write and submit PRs

1.  Create a branch and start writing content in existing or new files.

1.  Focus on the content with useful information, code samples, and important notes for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

1.  Use the following guidelines to help you with the writing process:

    -   Define the goal of your topic. What exactly do you want to teach the reader?
    -   Make the title of your topic reflect the content.
    -   Keep your sentences concise and try to separate conceptual information from procedural steps.
    -   Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"The log captures commands, output..."_.
    -   Use notes to alert readers about important details.
    -   Use cross-references to other topics if appropriate. We can help you with the syntax if it is not clear. The template provides an example you can use.
    -   Need help with markdown? See our [templates](#templates).

1.  Create a [pull request](https://help.github.com/articles/creating-a-pull-request/). Fill out as much info as possible and link any GitHub issues. DevDocs and Maintainers will review the PR. Watch for comments and requests for changes. We will merge the content when ready with appropriate labels.

## Preview HTML locally

To preview your changes in HTML output, follow the instructions in the [README](https://GitHub.com/magento/devdocs/blob/develop/README.md) to build the devdocs site locally using Jekyll.

## Templates

We provide templates to help you started writing new content and understanding markdown formatting:

* **General topic template** - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/basic_template.md) | [HTML](https://devdocs.magento.com/guides/v2.2/contributor-guide/templates/basic_template.html): This is a template for writing any topic with example formats and styles.
* **Tutorial templates**: These templates provide example formats and styles for step-by-step instructions (like how-tos). Each file adds navigation buttons when content is generated. Templates include:
  - First introduction topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-first.md) | [HTML](https://devdocs.magento.com/guides/v2.2/contributor-guide/templates/tutorial-template-first.html): Introduction to a tutorial for prerequisites and listing steps
  - Middle topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-middle.md) |  [HTML](https://devdocs.magento.com/guides/v2.2/contributor-guide/templates/tutorial-template-middle.html): Use for each step in a tutorial.
  - Final step topic - [Markdown](https://github.com/magento/devdocs/blob/master/guides/v2.1/contributor-guide/templates/tutorial-template-last.md) | [HTML](https://devdocs.magento.com/guides/v2.2/contributor-guide/templates/tutorial-template-last.html): Use for the last step of the tutorial.

### Edit metadata

The Markdown (.md) file's metadata is a set of YAML key-value pairs. The metadata section is located at the top of each file. For more info, see the [Basic Template](https://devdocs.magento.com/guides/v2.2/contributor-guide/templates/basic_template.html).

```yaml
---
group: install2
title: Continue with your installation
---
```


> Key-value pair reference:

| Property      | Description                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------- |
| `group`       | Defines which guide the file belongs to and which left-hand menu collection the to use.                              |
| `title`       | Sets the title of the page in the HTML meta and the main title on the page.                                          |

## Report an issue

If you find a typo or erroneous information in Magento DevDocs, you can either fix it with a pull request (as described above) or you can report it by creating an issue in the DevDocs GitHub repository.
GitHub issues use templates for requested information. Enter as much information as you can including content corrections, steps to reproduce, command or code updates, or questions for clarifications.

**Note:** Check the [existing issues](https://GitHub.com/magento/devdocs/issues) on GitHub to see if someone has already reported the issue.

You have a couple of options to enter an issue:
* Have general feedback? Create an issue on [GitHub DevDocs](https://GitHub.com/magento/devdocs/issues/new/choose).
* Have feedback on a specific DevDocs page? Click the **Report an Issue** link at the top right of the page to report on the currently open topic.
* Have a Community code contribution that needs documentation? Create an issue to [request DevDocs content](https://GitHub.com/magento/devdocs/issues/new?template=COMMUNITY_ISSUE_TEMPLATE.md).

## Contact DevDocs

Have a question? Need help? Magento DevDocs, Maintainers, and other Contributors are available through:

* [Slack](https://magentocommeng.slack.com/messages/CAN932A3H) ([Join us](http://tinyurl.com/engcom-signup))
* [Twitter @MagentoDevDocs](https://twitter.com/MagentoDevDocs)
*	[E-mail](mailto:DL-Magento-Doc-Feedback@magento.com)

Thank you for contributing your brilliance to Magento DevDocs!!
