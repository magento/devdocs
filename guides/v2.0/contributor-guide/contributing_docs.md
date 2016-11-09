---
layout: default
group: contributor
subgroup: contributor
title: DevDocs Contributions
menu_title: DevDocs Contributions
menu_order: 1
menu_node: parent
contributor_name: Staffan Palopää from Vaimo
contributor_link: http://www.vaimo.com/
version: 2.0
github_link: contributor-guide/contributing_docs.md
redirect_from: guides/v2.0/extension-dev-guide/Contribute_edg.md
---

The following topics are included in the Guide:

* <a href="#contribute">DevDocs contributions</a>

* <a href="#requirements">Contribution guidelines</a>

* <a href="#fork">Fork a repository</a>

* <a href="#pull_request">Create a pull request</a>

* <a href="#report">Report an issue</a>

* <a href="#edit">Edit metadata</a>


<h2 id="contribute">DevDocs contributions</h2>

What's your area of expertise? Please share your knowledge with us! Contributions can take the form of completely new topics, changes and edits to existing documentation, or just good suggestions.

We have a <a href="{{page.baseurl}}contributor-guide/basic_template.html" target="_blank">template</a> to make getting started easy. You can get a copy of the <a href="https://github.com/magento/devdocs/blob/develop/guides/v2.0/contributor-guide/basic_template.md">.md file  on Github</a>.

The language we use in our documentation is [Markdown](http://daringfireball.net/projects/markdown/){:target="_blank"}, which is a simple markup language that gets converted to HTML using [Kramdown](http://kramdown.gettalong.org/syntax.html){:target="_blank"}. 

We also have a <a href="{{page.baseurl}}contributor-guide/contributing_docs_suggested_topics.html" target="_blank">list of suggested topics</a>, if you want to peruse and pick one that appeals to you.

If you write and contribute a full topic, we'll put your name (or company's name) at the top of the page, right under the title, and link it to your blog or website! And you'll get your face and bio in the <a href="{{page.baseurl}}howdoi/howdoi_bios.html">ring of honor</a> as one of our featured contributors.

Use the <a href="#fork">fork</a> & <a href="#pull_request">pull</a> model to contribute to the Magento 2 DevDocs.
This contribution model means that contributors maintain their own copy of the forked codebase (which can be easily synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

The Magento DevDocs team reviews all issues and contributions submitted by the community. During the review we might require clarifications from the contributor. If you know what you want to write about, but you aren't sure where within our multiple documents the topic should go, we can help you with the "info architecture" part.

<div class="bs-callout bs-callout-info" id="info">
<p>Please refer to <a href="http://www.magento.com/legaldocuments/mca">Magento Contributor Agreement</a> for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms. </p>
</div>

<h2 id="requirements">Contribution guidelines</h2>


1. Some common writing guidelines include:
    * Define what the goal of your topic is: what exactly do you want to teach the reader?
    * Make the title of your topic reflect the content.
    * Keep your sentences concise, and try to separate conceptual information from procedural steps.
    * Remember to use active voice (not passive), write in the present tense, and use a friendly tone in second person (for example, "You can now view the output...")
    * Use Notes and even Warnings to alert readers to particularly important details.
    * Use cross-references to other topics if it is appropriate. We can help you with that syntax too, and the template has an example.

2. Focus on the content and on creating useful information for your fellow Magento developers and community members, but do please take a few editorial passes at your work before submitting your topic and look for typos, formatting errors, or sentences that need clarifying.
3. Familiarize yourself with the existing documentation; taking a look at what is already there will help you decide where your topic best fits and if there are other topics to which you might want to add cross-references in your topic.
4. First, check the <a href="https://github.com/magento/devdocs/pulls" target="_blank">existing PRs</a> and make sure you are not duplicating others’ work!
5. For large contributions or changes that include multiple files, please <a href="https://github.com/magento/devdocs/issues" target="_blank">open an issue</a> and discuss first. This may prevent duplicate or unnecessary effort, and the DevDocs team can help find the best home for your new topics.

<h2 id="fork">Fork a repository</h2>
To fork a repository on Github, do the following:

1. Create or log in to your developemnt environment account on GitHub.

2. Navigate to the <a href="https://github.com/magento/devdocs" target="_blank">DevDocs repository</a>.

3. Click **Fork** at the top right.

4. Clone the repo into your development environment and then start writing and committing your changes. Optionally create a branch first if you plan to work on mulitple changes.

5. You can build this site using Jekyll by following the <a href="https://github.com/magento/devdocs/blob/develop/README.md" target="_blank">instructions in our README</a>.

### Update the fork with the latest changes {#sync}
As community and Magento writers' changes are merged to the repository, your fork becames outdated and pull requests might result in conflicts. To see if your fork is outdated, open the fork page in GitHub and if at the top the message `This branch is <number> commits behind magento:2.0.` displays, it means your fork must be updated.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.github.com/articles/syncing-a-fork){:target="_blank"}. Make sure to update from the correct branch!

There is also a possibility to use the GitHub interface to do that. This is referred to as a *reverse pull request*. This method has the downside of inserting unnecessary information into fork commit history. On your fork GitHub page, click **New pull request**. You should see the following message:

    There isn’t anything to compare.
    magento:2.0 is up to date with all commits from <your fork>:2.0. Try switching the base for your comparison.

Click the base link and then click **Create pull request**. Provide a descriptive name for your pull request in the provided field.

Scroll to the bottom of the page and click **Merge pull request**, then click **Confirm Merge**.

<h2 id="pull_request">Create a pull request</h2>

To create a pull request do the following:

1. Push your changes to your forked repository on GitHub.

2. In your forked repository, click **New pull request**.

3. Be sure to create the pull request to the correct branch (the base). Our branches are numbered (2.0, 2.1, and so on). We don't accept PRs to other branches, like gh-pages.

4. Review the changes, then click **Create pull request**. Fill out the form, and click **Create pull request** again to submit the PR&mdash;that’s it!

After submitting your PR, you can head over to the DevDocs repository’s <a href="https://github.com/magento/devdocs/pulls" target="_blank">Pull Requests panel</a> to see your PR along with the others. The DevDocs team will review your contribution, and get back with you if we have any questions. Once the final content is ready, we will merge your PR into the repo, and your work will be published to the repo and to <a href="https://github.com/magento/devdocs" target="_blank">devdocs.magento.com</a>. If you write a whole topic, or make substantial contributions to an existing topic, we will add your name right below the title, linked to your blog or site!

<h2 id="report">Report an issue</h2>
If you find a typo or erroneous information in Magento DevDocs, you can either fix it with a PR (as described above) or you can simply report it by creating an issue in the DevDocs repository.

<div class="bs-callout bs-callout-info" id="info">
  <p>Before creating an issue, please check the <a href="https://github.com/magento/devdocs/issues" target="_blank"> existing issues</a> to make sure that the issue wasn't already reported.
</p>
</div>

To add an issue:

1. In the <a href="https://github.com/magento/devdocs/issues" target="_blank">DevDocs repository's Issues panel</a>, click  **New issue**  on the right.
2. Fill in the Title and issue description.
3. Click **Submit new issue**.

<h2 id="report">Edit metadata</h2>  
The .md (Markdown) file's metadata is a set of key-value pairs (where the key is before the : and the value is after). The metadata section is located in the beginning of the file.

### Example:
    ---
    layout: default
    group: install2
    subgroup: Z_continue
    title: Continue with your installation
    menu_title: Continue with your installation
    menu_node: parent
    menu_order: 1
    version: 2.0
github_link: install-gde/continue.md
    ---	

### Definitions
Refer to the following table for a description of each key value pair in the metadata section of the .md file.

<table style="width:100%">
   <colgroup>
      <col width="30%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Metadata Example</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
         <td>layout: default</td>
         <td>Selects the template Jekyll will use to render the .md file into HTML&CSS.</td>
      </tr>
      <tr>
         <td>group: install2</td>
         <td>Defines what book the file belongs to, that is, which left hand menu collection the file will show up in. Note that what you put here doesn't affect the horizontal menu. That is controlled by _/includes/navigation.html.</td>
      </tr>
      <tr>
         <td>subgroup: Z_continue</td>
         <td>Defines what "chapter" or "subgroup" the file belongs to. Add the name of the subgroup here in each file that you want to collect into that subgroup.</td>
      </tr>
      <tr>
         <td>title: Continue with your installation</td>
         <td>Sets the title of the page in the HTML meta and the main title on the page.</td>
      </tr>
      <tr>
         <td>menu_title: Continue with your installation</td>
         <td>Sets the title as it appears in the menu.</td>
      </tr>
       <tr>
         <td>menu_node: parent</td>
         <td>If set to parent, makes the file the link off of the subgroup header.</td>
      </tr>
       <tr>
         <td>menu_order: 1</td>
         <td>Sets the order files display. But not the order that subgroups appear in. 
         
<!--
You can order where each file appears in the list by changing its menu_order number. Subgroups, by default, will show up in alphabetical order. To get your own order instead of alphabetical, create a file for each subgroup header: introduction.md, prepare.md, build,md, etc. In the metadata section for each of the files set menu_node: parent.

They still show up in alphabetical order, based on subgroup's name. Now change the name of subgroup to get the order you need using the alphabet. When you set menu_node to parent, the displayed name will be taken from menu_title instead of from subgroup. So, if you want Introduction to show up first and Prepare to show up second, set subgroup in introduction.md to for example 1_introduction and then set subgroup in prepare.md to 2_prepare. That is, just follow an alphanumeric order to get the order you want. Then set menu_title to the name you want displayed. Then, for each file you want to attach to that subgroup, you just give it that subgroup name. In those files, leave menu_node empty or omit it.
-->
         </td>
      </tr>
       <tr>
         <td>version: 2.0
github_link: install-gde/continue.md</td>
         <td>Gives you the name and location of the source file in github.</td>
      </tr>
   </tbody>
</table>

### How to add a Contributor's name to a topic
When a community member contributes an entire topic, or makes substantial improvements to an existing topic, we like to thank them by adding their name (or company name) right beneath the title of the topic, and link that name to their blog or web site.

In the metadata secion at the top of the file, just add these two entries:
 
* contributor_name: \<name_of_contributor\>
* contributor_link: \<link_to_contributors_site_or_blog\>


<h2 id="Thanks">Thank you so much for adding your brilliance to the Magento DevDocs!! </h2>
