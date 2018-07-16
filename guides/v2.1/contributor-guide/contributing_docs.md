---
group: contributor
title: DevDocs Contributions
contributor_name: Staffan Palopää from Vaimo
contributor_link: http://www.vaimo.com/
version: 2.1
github_link: contributor-guide/contributing_docs.md
redirect_from: /guides/v2.0/extension-dev-guide/Contribute_edg.md
---

Share your knowledge with the community by contributing to Magento DevDocs! You can contribute by creating an issue or pull request (PR) on our [devdocs](https://github.com/magento/devdocs){:target="\_blank"} Github repository. We welcome all types of contributions; from minor typo fixes to new topics.

Magento's team of technical writers reviews all issues and pull requests on a regular basis, and we do our best to address all issues as soon as possible. Working through the backlog takes time, though, so we appreciate your patience.

<div class="bs-callout bs-callout-tip" id="tip" markdown="1">
If you are not sure where to start contributing, you can review our list of [suggested topics]({{ page.baseurl }}/contributor-guide/contributing_docs_suggested.html).
</div>

If you write and contribute a full topic, we will put your name (or company's name) at the top of the page, right under the title, and link it to your blog or website! We will also add your picture and a link to your Github account on the <a href="{{ page.baseurl }}/contributor-guide/quarterly-contributors.html#top-recent-contributors">Top recent contributors</a> page.

## Contribution guidelines
We use [Markdown](http://daringfireball.net/projects/markdown/){:target="\_blank"} to write our documentation, which is a simple markup language that we convert to HTML using [Kramdown](http://kramdown.gettalong.org/syntax.html){:target="\_blank"}. We have a <a href="{{ page.baseurl }}/contributor-guide/templates/basic_template.html" target="\_blank">template</a> to make getting started easy.

{% include note.html type="info" content="Refer to the [Magento Contributor Agreement](http://www.magento.com/legaldocuments/mca) for detailed information about licensing. All contributors are required to submit a click-through form to agree to the terms." %}

1.  First, check [existing pull requests](https://github.com/magento/devdocs/pulls){:target=\_blank"} and make sure you are not duplicating work!

1.  For large contributions or changes that include multiple files, [open an issue](https://github.com/magento/devdocs/issues){:target="\_blank"} and discuss it with us first. This may prevent duplicate or unnecessary effort.

1.  Familiarize yourself with the existing documentation; taking a look at what is already there will help you decide where your topic best fits. The DevDocs team can also help find the best home for your new topics.

1.  Focus on the content and on creating useful information for your fellow Magento developers and community members. Don't forget to review your work for typos, formatting errors, or sentences that need clarifying before opening a pull request.

1.  Use the following guidelines to help you with the writing process:

    -   Define the goal of your topic. What exactly do you want to teach the reader?
    -   Make the title of your topic reflect the content.
    -   Keep your sentences concise and try to separate conceptual information from procedural steps.
    -   Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person. For example, _"You can now view the output..."_.
    -   Use notes to alert readers about important details.
    -   Use cross-references to other topics if appropriate. We can help you with the syntax if it is not clear. The template provides an example you can use.

## Fork and clone a repository {#fork}
Use the [fork](#fork) and [pull](#create-a-pull-request) model to contribute to Magento DevDocs. This model requires you to keep your forked repository in sync with the upstream repository. You submit pull requests to _pull_ a set of changes from your forked repository to the upstream repository.

To fork the devdocs repository on Github, do the following:

1.  Create or log in to your development environment account on GitHub.

1.  Navigate to the <a href="https://github.com/magento/devdocs" target="\_blank">DevDocs repository</a>.

1.  Click **Fork** at the top right.

1.  Clone the repository into your development environment and then start writing and committing your changes. Optionally, create a branch first if you plan to work on multiple changes.

1.  Build the devdocs site locally using Jekyll by following the instructions in our [README](https://github.com/magento/devdocs/blob/develop/README.md){:target="\_blank"}.

## Update your fork {#sync}
As we merge changes with the upstream repository, your fork becomes outdated and pull requests might result in merge conflicts. To see if your fork is outdated, open the fork page in GitHub. If you see the following message at the top of the page, you must update your fork: `This branch is <number> commits behind develop`.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.github.com/articles/syncing-a-fork){:target="\_blank"}. Make sure to update from the correct branch!

It is also possible to use the GitHub interface to update your fork. This is referred to as a *reverse pull request*. This method has the downside of inserting unnecessary information into fork commit history.

1.  Go to your forked repository GitHub page, click **New pull request**. You should see the following message:

        There isn’t anything to compare.
        magento:2.0 is up to date with all commits from <your fork>:2.0. Try switching the base for your comparison.

1.  Click the base link and then click **Create pull request**.

1.  Enter a name for your pull request.

1.  Scroll to the bottom of the page and click **Merge pull request**.

1.  Click **Confirm Merge**.

## Create a pull request
To create a pull request do the following:

1.  Push your changes to your forked repository on GitHub.

1.  In your forked repository, click **New pull request**.

1.  Be sure to create the pull request on the `develop` branch. We do not accept pull requests on other branches, like `gh-pages`.

1.  Review the changes, then click **Create pull request**.

1.  Fill out the form, and click **Create pull request** again to submit the pull request&mdash;that’s it!

## Report an issue
If you find a typo or erroneous information in Magento DevDocs, you can either fix it with a pull request (as described above) or you can report it by creating an issue in the DevDocs Github repository.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Check the [existing issues](https://github.com/magento/devdocs/issues){:target} on Github to see if someone has already reported the issue.
</div>

All topics on this site contain a link to the Issues panel on Github, which makes it easy to report issues on specific topics. Click the **Give us feedback** link at the top left of the page to open an issue for that page.

## Edit metadata  
The Markdown (.md) file's {% glossarytooltip 3f0f2ef1-ad38-41c6-bd1e-390daaa71d76 %}metadata{% endglossarytooltip %} is a set of YAML key-value pairs. The metadata section is located at the top of each file.

```yaml
---
group: install2
title: Continue with your installation
version: 2.1
github_link: install-gde/continue.md
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
         <td>Selects the template Jekyll will use to render the .md file into HTML&CSS.</td>
      <tr>
         <td>group: install</td>
         <td>Defines which guide the file belongs to, that is, which left-hand menu collection the file will show up in. Note that what you put here does not affect the top navigation menu. That is controlled by the `_/includes/navigation.html` file.</td>
      </tr>
      <tr>
         <td>title: Install Magento</td>
         <td>Sets the title of the page in the HTML meta and the main title on the page.</td>
      </tr>
      <tr>
         <td>version: 2.0</td>
         <td>Specifies which version(s) of Magento the topic affects. We also use this data to build links to the file on Github.</td>
      </tr>
      <tr>
        <td>github_link: install-gde/continue.md</td>
        <td>Specifies the name and location of the source file in the Github repository.</td>
      </tr>
   </tbody>
</table>

#### Add a Contributor's name to a topic
When a community member contributes an entire topic—or makes substantial improvements to an existing topic—we like to thank them by adding their name (or company name) beneath the topic title and a link to their blog or web site.

In the metadata section at the top of the file, add these two entries:

```yaml
contributor_name: <name_of_contributor>
contributor_link: <link_to_contributors_site_or_blog>
```

Thank you for contributing your brilliance to Magento DevDocs!!
