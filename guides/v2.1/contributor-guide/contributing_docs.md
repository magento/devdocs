---
group: contributor
title: DevDocs Contributions
contributor_name: Staffan Palopää from Vaimo
contributor_link: http://www.vaimo.com/
version: 2.1
github_link: contributor-guide/contributing_docs.md
redirect_from:
  -  /guides/v2.1/extension-dev-guide/Contribute_edg.html
  -  /guides/v2.2/extension-dev-guide/Contribute_edg.html
  -  /guides/v2.3/extension-dev-guide/Contribute_edg.html
  -  /guides/v2.1/howdoi/howdoicontribute.html
  -  /guides/v2.2/howdoi/howdoicontribute.html
  -  /guides/v2.3/howdoi/howdoicontribute.html
---

Share your knowledge with the community by contributing to Magento DevDocs! You can contribute by creating an issue or pull request (PR) on our [devdocs](https://GitHub.com/magento/devdocs){:target="_blank"} GitHub repository. We welcome all types of contributions; from minor typo fixes to new topics. As you contribute PRs, you can also gain Contribution Points with Community Engineering.

Magento's team of technical writers reviews all issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible. Working through the backlog takes time, though, so we appreciate your patience.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you are not sure where to start contributing, you can review our list of [suggested topics]({{ page.baseurl }}/contributor-guide/contributing_docs_suggested.html).
</div>

If you write and contribute a full topic, we will put your name (or your company's name) at the top of the page right under the title, and link it to your blog or website! We will also add your picture and a link to your GitHub account on the [Top recent contributors]({{ page.baseurl }}/contributor-guide/quarterly-contributors.html#top-recent-contributors) page.

## Contribution guidelines
We use [Markdown](http://daringfireball.net/projects/markdown/){:target="_blank"} to write our documentation, which is a simple markup language that we convert to HTML using [Kramdown](http://kramdown.gettalong.org/syntax.html){:target="_blank"}.

You can update, or add content to, existing topics in their respective versioned directories (for 2.0, 2.1, 2.2, and onward).

We provide templates to help get you started writing a new topic:

* [General topic template]({{ page.baseurl }}/contributor-guide/templates/basic_template.html): This is a template for writing any topic with example formats and styles.
* Tutorial templates: These templates provide example formats and styles for step-by-step instructions (like how-tos). Templates include a [first introduction topic]({{ page.baseurl }}/contributor-guide/templates/tutorial-template-first.html), [middle topic]({{ page.baseurl }}/contributor-guide/templates/tutorial-template-middle.html) for each step, and a [final step topic]({{ page.baseurl }}/contributor-guide/templates/tutorial-template-last.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Refer to the [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca) for detailed information about licensing. All contributors are required to submit the form and agree to the terms.
</div>

The following guidelines may answer most of your questions and help you get started:

1.  Check [existing pull requests](https://GitHub.com/magento/devdocs/pulls){:target=\_blank"} and make sure you are not duplicating work!

1.  For large contributions or changes that include multiple files, [open an issue](https://GitHub.com/magento/devdocs/issues){:target="_blank"} and discuss it with us first. This may further prevent duplicate or unnecessary effort.

1.  Familiarize yourself with the existing documentation. Look through the guides to decide where to add your topics.

    -   The DevDocs team can find the best home for your new topics and add it to the navigation.
    -   If a topic has a symlink, you can remove it with git commands and add a new file. Copy and paste a previous version of the topic to get started.

1.  Focus on the content and on creating useful information for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

1.  Use the following guidelines to help you with the writing process:

    -   Define the goal of your topic. What exactly do you want to teach the reader?
    -   Make the title of your topic reflect the content.
    -   Keep your sentences concise and try to separate conceptual information from procedural steps.
    -   Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"You can now view the output..."_.
    -   Use notes to alert readers about important details.
    -   Use cross-references to other topics if appropriate. We can help you with the syntax if it is not clear. The template provides an example you can use.

## Fork and clone a repository {#fork}
Use the [fork](#fork) and [pull](#pull-request) model to contribute to Magento DevDocs. This model requires you to keep your forked repository in sync with the upstream repository. You submit pull requests to _pull_ a set of changes from your forked repository to the upstream repository.

To fork the devdocs repository on GitHub, do the following:

1.  Create or log into your development environment account on GitHub.

1.  Navigate to the <a href="https://GitHub.com/magento/devdocs" target="\_blank">DevDocs repository</a>.

1.  Click **Fork** at the top right.

1.  Clone the repository into your development environment and start writing and committing your changes. Optionally, create a branch first if you plan to work on multiple changes.

1.  To preview your changes in HTML output, follow the instructions in the [README](https://GitHub.com/magento/devdocs/blob/develop/README.md){:target="_blank"} to build the devdocs site locally using Jekyll.

1.  Before opening a pull request, don't forget to review your work for typos, formatting errors, code sample formatting, or sentences that need clarifying.

## Update your fork {#sync}
As we merge changes with the upstream repository, your fork becomes outdated and pull requests might result in merge conflicts.

To see if your fork is outdated, open the fork page in GitHub. If you see the following message at the top of the page, update your fork: `This branch is <number> commits behind develop`.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.GitHub.com/articles/syncing-a-fork){:target="_blank"}. Ensure you are updating your fork from the correct branch.

It is also possible to use the GitHub interface to update your fork. This is referred to as a *reverse pull request*. This method has the downside of inserting unnecessary information into fork commit history.

1.  Navigate to the GitHub page for your forked repository and click **New pull request**. You should see the following message:

        There isn’t anything to compare.
        magento:2.1 is up to date with all commits from <your fork>:2.1. Try switching the base for your comparison.

1.  Click the base link and then click **Create pull request**.

1.  Enter a name for your pull request.

1.  Scroll to the bottom of the page and click **Merge pull request**.

1.  Click **Confirm Merge**.

## Create a pull request {#pull-request}
To create a pull request do the following:

1.  Push your changes to your forked repository on GitHub.

1.  In your forked repository, click **New pull request**.

1.  Be sure to create the pull request on the `develop` branch. We do not accept pull requests on other branches, like `gh-pages`.

1.  Review the changes, then click **Create pull request**.

1.  Fill out the form and click **Create pull request** again to submit the pull request&mdash;that’s it!

## Report an issue {#issues}
If you find a typo or erroneous information in Magento DevDocs, you can either fix it with a pull request (as described above) or you can report it by creating an issue in the DevDocs GitHub repository.

GitHub issues use templates for requested information. Enter as much information as you can including content corrections, steps to reproduce, command or code updates, or questions for clarifications.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Check the [existing issues](https://GitHub.com/magento/devdocs/issues) on GitHub to see if someone has already reported the issue.
</div>

You have a couple of options to enter an issue:
* Have general feedback? Create an issue on [GitHub DevDocs](https://GitHub.com/magento/devdocs/issues/new){:target="_blank"}.
* Have feedback on a specific DevDocs page? Click the **Report an Issue** link at the top right of the page to report on the currently open topic.
* Have a Community code contribution? Create an issue to [request DevDocs content](https://GitHub.com/magento/devdocs/issues/new?template=COMMUNITY_ISSUE_TEMPLATE.md){:target="_blank"}.

## Edit metadata
The Markdown (.md) file's {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} is a set of YAML key-value pairs. The metadata section is located at the top of each file.

```yaml
---
group: install2
title: Continue with your installation
version: 2.1
GitHub_link: install-gde/continue.md
---
```

Refer to the following table for a description of each key-value pair.

<table style="width:100%">
   <colgroup>
      <col width="30%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Key-value pair</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
         <td>layout: default</td>
         <td>Selects the template Jekyll will use to render the .md file into HTML and CSS.</td>
      <tr>
         <td>group: install</td>
         <td>Defines which guide the file belongs to and which left-hand menu collection the file will show up in. What you put here does not affect the top navigation menu, which is controlled by the `_/includes/navigation.html` file.</td>
      </tr>
      <tr>
         <td>title: Install Magento</td>
         <td>Sets the title of the page in the HTML meta and the main title on the page.</td>
      </tr>
      <tr>
         <td>version: 2.1</td>
         <td>Specifies which version(s) of Magento the topic affects. We also use this data to build links to the file on GitHub.</td>
      </tr>
      <tr>
        <td>GitHub_link: install-gde/continue.md</td>
        <td>Specifies the name and location of the source file in the GitHub repository.</td>
      </tr>
   </tbody>
</table>

### Add a Contributor's name to a topic
When a community member contributes an entire topic—or makes substantial improvements to an existing topic—we like to thank them by adding their name (or company name) beneath the topic title and a link to their blog or website.

Thank you for contributing your brilliance to Magento DevDocs!!
