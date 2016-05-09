---
layout: default
group: contributor
subgroup: Contributor Guide
title: DevDocs Contributions
menu_title: DevDocs Contributions
menu_order: 1
menu_node: parent
contributor_name: Staffan Palopää from Vaimo
contributor_link: http://www.vaimo.com/
github_link: contributor-guide/contributing_docs.md
redirect_from: guides/v2.0/extension-dev-guide/Contribute_edg.md
---


The following topics are included in the Guide:

* <a href="#contribute">DevDocs contributions</a>

* <a href="#requirements">Contribution guidelines</a>

* <a href="#fork">Fork a repository</a>

* <a href="#pull_request">Create a pull request</a>

* <a href="#report">Report an issue</a>

<!--
<a href="#labels">Labels applied by the DevDocs team</a>
-->


<h2 id="contribute">DevDocs contributions</h2>

What's your area of expertise? Please share your knowledge with us! Contributions can take the form of completely new topics, changes and edits to existing documentation, or just good suggestions.

We have a <a href="{{ site.gdeurl }}contributor-guide/basic_template.html" target="_blank">template</a> to make getting started easy. You can get a copy of the <a href="https://github.com/magento/devdocs/blob/2.0/guides/v2.0/contributor-guide/basic_template.md">.md file  on Github</a>.

The language we use in our documentation is [Markdown](http://daringfireball.net/projects/markdown/){:target="_blank"}, which is a simple markup language that gets converted to HTML using [Kramdown](http://kramdown.gettalong.org/syntax.html){:target="_blank"}. 

We also have a <a href="{{ site.gdeurl }}contributor-guide/contributing_docs_suggested_topics.html" target="_blank">list of suggested topics</a>, if you want to peruse and pick one that appeals to you.

If you write and contribute a full topic, we'll put your name (or company's name) at the top of the page, right under the title, and link it to your blog or website! And you'll get your face and bio in the <a href="{{ site.gdeurl }}howdoi/howdoi_bios.html">ring of honor</a> as one of our featured contributors.

Use the <a href="#fork">fork</a> & <a href="#pull_request">pull</a> model to contribute to the Magento 2 DevDocs.
This contribution model means that contributors maintain their own copy of the forked codebase (which can be easily synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

The Magento DevDocs team reviews all issues and contributions submitted by the community. During the review we might require clarifications from the contributor. If you know what you want to write about, but you aren't sure where within our multiple documents the topic should go, we can help you with the "info architecture" part.

<!--
Often when the Magento DevDocs team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like status or who is working the issue. If you're ever curious what the different labels mean, see the <a href="#labels">table</a> below for an explanation of each one.
-->

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

5. You can build this site using Jekyll by following the <a href="https://github.com/magento/devdocs/blob/2.0/README.md" target="_blank">instructions in our README</a>.

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

<!--
<h2 id="labels">Labels applied by the Magento team</h2>

Refer to the following table for a description of each label. These labels are applied by the Magento development team to community contributed issues and pull requests, to communicate status, impact, or which team is working on it.

<table style="width:100%">
   <colgroup>
      <col width="30%">
      <col width="70%">
   </colgroup>
   <thead>
      <tr style="background-color:lightgray">
         <th>Label image</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
      <th>Issue Type</th>
      <th> </th>
</tr>
         <td><img src="{{ site.baseurl }}common/images/github_bug.png" alt="the Bug button"/></td>
         <td>An error, flaw, or failure in an existing feature that produces unexpected results.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}common/images/github_featureRequest.png" alt="the Feature Request button"/></td>
         <td>A community request to introduce a new feature in Magento.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}common/images/github_improvement.png" alt="the Improvement button"/></td>
         <td>A request to enhance existing functionality.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}common/images/github_question.png" alt="the Question button"/></td>
         <td>An inquiry about existing functionality.</td>
      </tr>
      <tr>
      <th>Domains Impacted</th>

</tr>
      <tr>
         <td><img src="{{ site.baseurl }}common/images/github_MX.png" alt="the MX button"/></td>
         <td>Affects Merchant Experience.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_CS.png" alt="the CS button"/></td>
         <td>Affects Commerce Services.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_PS.png" alt="the PS button"/></td>
         <td>Affects Platform Services.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_DOC.png" alt="the Doc button"/></td>
         <td>Affects Documentation domain.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}common/images/github_PROD.png" alt="the PROD button"/></td>
         <td>Affects the Product team (mostly feature requests or business logic change).</td>
      </tr>
 <tr>
         <td><img src="{{ site.baseurl }}common/images/github_TECH.png" alt="the Tech button"/></td>
         <td>Affects Architect Group (mostly to make decisions around technology changes).</td>
      </tr>

   <tr>
      <th>Pull Request Resolution Status</th>

</tr>

       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_accept.png" alt="the Accept button"/></td>
         <td>The pull request has been accepted and will be merged into mainline code.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_reject.png" alt="the Reject button"/></td>
         <td>The pull request has been rejected and will not be merged into mainline code.  Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution.</td>
      </tr>
      <tr>
      <th>Issue Resolution Status</th>

</tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/gitHub_acknowledged.png" alt="the Acknowledged button"/></td>
         <td>The Magento Team has validated the issue and an internal ticket has been created.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_inProgress.png" alt="the In progress button"/></td>
         <td>The internal ticket is currently in progress, fix is scheduled to be delivered.</td>
      </tr>
       <tr>
         <td><img src="{{ site.baseurl }}common/images/github_needsUpdate.png" alt="the Needs update button"/></td>
         <td>The Magento Team needs additional information from the reporter to properly prioritize and process the issue or pull request.</td>
      </tr>

   </tbody>
</table>
-->

<h2 id="Thanks">Thank you so much for adding your brilliance to the Magento DevDocs!! </h2>
