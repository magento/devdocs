---
layout: default
group: contributor
subgroup: Contributor Guide
title: Contribute to Magento 2
menu_title: Contribute to Magento 2
menu_order: 1
menu_node: parent
github_link: contributor-guide/contributing.md
redirect_from: /guides/v1.0/contributor-guide/contributing.html
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: contributing.md owned by core -->
<!-- References are to this topic itself, http://devdocs.magento.com/guides/v1.0/contributor-guide/contributing.html#fork, contributing.html#pull_request -->


The following topics are included in the Guide:

* <a href="#contribute">Contribute to Magento 2 code</a>

* <a href="#requirements">Contribution requirements</a>

* <a href="#fork">Fork a repository</a>

* <a href="#pull_request">Create a pull request</a>

* <a href="#report">Report an issue</a>

* <a href="#labels">Labels applied by the Magento team</a>


<h2 id="contribute">Contribute to Magento 2 code</h2>

Use the <a href="#fork">fork</a> & <a href="#pull_request">pull</a> model to contribute to the Magento 2 codebase.
This contribution model means that contributors maintain their own copy of the forked codebase (which can easily be synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions.

The Magento 2 development team reviews all issues and contributions submitted by the community of developers in a first-in, first-out basis. During the review we might require clarifications from the contributor. If there is no response from the contributor for two weeks, the issue is closed.

Often when the Magento 2 team works on reviewing the suggested changes, we will add a label to the issue to indicate to our internal team certain information, like status or who is working the issue. If you're ever curious what the different labels mean, see the <a href="#labels">table</a> below for an explanation of each one.

<div class="bs-callout bs-callout-info" id="info">
<p>Please refer to <a href="http://www.magento.com/legaldocuments/mca">Magento Contributor Agreement</a> for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms. </p>
</div>

<h2 id="requirements">Contribution requirements</h2>

1. Contributions must adhere to <a href="{{ site.gdeurl }}coding-standards/bk-coding-standards.html" target="_blank">Magento coding standards</a>.
2. Refer to the Magento development team's <a href="{{ site.gdeurl }}/contributor-guide/contributing_dod.html">Definition of Done</a>. We use these guidelines internally to ensure that we deliver well-tested, well-documented, solid code, and we encourage you to as well!
2. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
3. Commits must be accompanied by meaningful commit messages.
4. PRs that include bug fixing must be accompanied by a step-by-step description of how to reproduce the bug.
3. PRs that include new logic or new features must be submitted along with:
	* Unit/integration test coverage (we will be releasing more information on writing test coverage in the near future).
	* Proposed <a href="{{ site.baseurl }}" target="_blank">documentation</a> update. Documentation contributions can be submitted <a href="https://github.com/magento/devdocs" target="_blank">here</a>.
4. For large features or changes, please <a href="https://github.com/magento/magento2/issues" target="_blank">open an issue</a> and discuss first. This may prevent duplicate or unnecessary effort, and it may gain you some additional contributors.
5. To report a bug, please <a href="https://github.com/magento/magento2/issues" target="_blank">open an issue</a>, and follow these <a href="https://github.com/magento/magento2/wiki/Issue-reporting-guidelines">guidelines about bugfix issues</a>.

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

<h2 id="report">Report an issue</h2>
If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

**Note**: Before creating an issue, please do the following:

 1. Check the <a href="{{ site.baseurl }}">documentation</a> to make sure the behavior you are reporting is really a bug, not a feature.
 2. Check the <a href="https://github.com/magento/magento2/issues" target="_blank"> existing issues</a> to make sure you are not duplicating somebody's work.

To add an issue:

1. In the Magento 2 public repository, click the **Issues** link on the right. <br><img src="{{ site.baseurl }}common/images/issues.png" alt="the Issues link at the right"/>
2. Click **New issue**.<br><img src="{{ site.baseurl }}common/images/new_issue.png" alt="the New Issue button"/>
3. Fill in the Title and issue description.
4. Click **Submit new issue**.

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


