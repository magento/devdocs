---
group: contributor
subgroup: contributor
title: Code Contributions
menu_title: Code Contributions
menu_order: 1
menu_node: parent
version: 2.0
github_link: contributor-guide/contributing.md
redirect_from: /guides/v1.0/contributor-guide/contributing.html
---

The following topics are included in this guide:

* <a href="#contribute">Contribute to Magento 2 code</a>

* <a href="#question">Questions or enhancement requests?</a>

* <a href="#requirements">Contribution requirements</a>

* <a href="#fork">Fork a repository</a>

* <a href="#pull_request">Create a pull request</a>

* <a href="#report">Report an issue</a>

* <a href="#triage">Help triage issues</a>

* <a href="#labels">Labels applied by the Community Engineering Team</a>

<h2 id="contribute">Contribute to Magento 2 code</h2>

Use the <a href="#fork">fork</a> and <a href="#pull_request">pull</a> model to contribute to the Magento 2 codebase.
This contribution model allows contributors to maintain their own copy of the forked codebase (which can be easily synced with the main copy). The forked repository is then used to submit a request to the base repository to *pull* a set of changes (hence the phrase *pull request*).

Contributions can take the form of new components or features, changes to existing features, tests, documentation (such as developer guides, user guides, examples, or specifications), bug fixes, optimizations, or just good suggestions.


The Community Engineering Team reviews all issues and contributions submitted by the community developers. During the review we might require clarifications from the contributor. If there is no response from the contributor in two weeks (14 days) time, the issue is closed.

Often when the Community Engineering Team works on reviewing the suggested changes, we will add a label to the issue to indicate certain information, like the status or who is working the issue. If you're ever curious what the different labels mean, see the <a href="#labels">table</a> below for an explanation of each one.

<div class="bs-callout bs-callout-info" id="info">
<p>Please refer to <a href="http://www.magento.com/legaldocuments/mca">Magento Contributor Agreement</a> for detailed information about the License Agreement. All contributors are required to submit a click-through form to agree to the terms. </p>
</div>

<h2 id="question">Questions or enhancement requests?</h2>

We use this repository (the Magento 2 GitHub repository) to capture code and documentation issues. We recommend that you post all questions to a question-and-answer site, such as <a href="https://magento.stackexchange.com/" target="_blank">Stack Exchange </a> and the <a href="https://community.magento.com/" target="_blank">Magento Forums</a>, where Magento community members can quickly provide recommendations and advice.

Submit feature requests or enhancement suggestions to the new <a href="https://community.magento.com/t5/Magento-2-Feature-Requests-and/idb-p/feature-requests" target="_blank">Magento 2 Feature Requests and Improvements forum</a> (see details <a href="https://community.magento.com/t5/News-Announcements/Improvements-to-GitHub-Management/m-p/44572#M96" target="_blank">here</a>).


<h2 id="requirements">Contribution requirements</h2>

1. Contributions must adhere to <a href="{{ page.baseurl }}/coding-standards/bk-coding-standards.html" target="_blank">Magento coding standards</a>.
2. Refer to the Magento development team's <a href="{{ page.baseurl }}/contributor-guide/contributing_dod.html">Definition of Done</a>. We use these guidelines internally to ensure that we deliver well-tested, well-documented, and solid code. We encourage you to use this as well!
2. Pull requests (PRs) must be accompanied by a meaningful description of their purpose. Comprehensive descriptions increase the chances that a pull request is merged quickly and without additional clarification requests.
3. Commits must be accompanied by meaningful commit messages.
4. PRs that include bug fixes must be accompanied by a step-by-step description of how to reproduce the bug.
3. PRs that include new logic or new features must be submitted along with:
  * Unit/integration test coverage (we will be releasing more information about writing test coverage in the near future).
  * Proposed <a href="{{ page.baseurl }}/contributor-guide/contributing_docs.html" target="_blank">documentation</a> updates. <a href="{{ site.baseurl }}/" target="_blank">Documentation</a> contributions can be submitted <a href="https://github.com/magento/devdocs" target="_blank">here</a>.
4. For large features or changes, please <a href="https://github.com/magento/magento2/issues" target="_blank">open an issue</a> and discuss it with us first. This may prevent duplicate or unnecessary effort, and it may gain you some additional contributors.
5. To report a bug, please <a href="https://github.com/magento/magento2/issues" target="_blank">open an issue</a>, and follow these <a href="https://github.com/magento/magento2/wiki/Issue-reporting-guidelines">guidelines about bugfix issues</a>.

5. All automated tests must pass successfully (all builds on <a href="https://travis-ci.org/magento/magento2" target="_blank">Travis CI</a> must be green).

<h2 id="fork">Fork a repository</h2>
To fork a repository on Github:

1. Create or log in to your account on GitHub.
2. Navigate to the <a href="https://github.com/magento/magento2" target="_blank">Magento 2 repository</a>.
3. Click **Fork** at the top right: <br><img src="{{ site.baseurl }}/common/images/fork.png" alt="fork a repository">

4. Clone the repo into your development environment and start playing.

### Update the fork with the latest changes {#sync}
As community and Magento writers' changes are merged to the repository, your fork becomes outdated and pull requests might result in conflicts. To see if your fork is outdated, open the fork page in GitHub and if a `This branch is NUMBER commits behind magento:2.2-develop.` message is displayed at the top of the page. If so, your fork must be updated.

There are two ways to update your fork. The typical way is discussed in [GitHub documentation](https://help.github.com/articles/syncing-a-fork){:target="_blank"}. Make sure to update from the correct branch!

You can also use the GitHub interface to update forks, referred to as a *reverse pull request*. Though this method does have a downside: it inserts unnecessary information into your fork commit history.

1. On your fork GitHub page, click **New pull request**. You should see the following message:

   ```There isn’t anything to compare.
   magento:2.2-develop is up to date with all commits from <your fork>:2.2-develop. Try switching the base for your comparison.```

2. Click the base link and then click **Create pull request**.
3. Provide a descriptive name for your pull request in the provided field.
4. Scroll to the bottom of the page and click **Merge pull request**, then click **Confirm Merge**.

Check out this video to see the process in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/mJDCL0uzIpY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<h2 id="pull_request">Create a pull request</h2>

First, check the <a href="https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr" target="_blank">existing PRs</a> and make sure you are not duplicating others’ work.

To create a pull request: 

1. Create a feature branch for your changes and push those changes to the copy of your repository on GitHub. This is the best way to organize and even update your PR.
2. In your repository, click **Pull requests** on the right, and then click **New pull request**. <br><img src="{{ site.baseurl }}/common/images/pr.png" target="_blank">
3. Ensure that you are creating a PR to the one of following  branches: `magento:2.3-develop`, `magento:2.2-develop` or `magento:2.1-develop` branch. We accept PRs to these branches only.
4. Review the changes, then click **Create pull request**. Fill out the form, and click **Create pull request** again to submit the PR&mdash;that’s it!


After submitting your PR, you can head over to the Magento 2 repository’s <a href="https://github.com/magento/magento2/pulls?q=is%3Aopen+is%3Apr" target="_blank">Pull Requests panel</a> to see your PR. Your PR undergoes automated testing, and if it passes, the Community Engineering Team considers it for inclusion in the Magento 2 core. If some tests fail, please make the corresponding corrections in your code.

<h2 id="report">Report an issue</h2>
If you find a bug in Magento 2 code, you can report it by creating an issue in the Magento 2 repository.

Before creating an issue:

 1. Read the [issue reporting guidelines](https://github.com/magento/magento2/wiki/Issue-reporting-guidelines) to learn how to create an issue that can be processed in a timely manner.
 2. Check the <a href="{{ site.baseurl }}/">documentation</a> to make sure the behavior you are reporting is really a bug, not a feature.
 3. Check the <a href="https://github.com/magento/magento2/issues" target="_blank"> existing issues</a> to make sure you are not duplicating somebody's work.


To add an issue:

1. In the Magento 2 public repository, click the **Issues** link on the right. <br><img src="{{ site.baseurl }}/common/images/issues.png" alt="the Issues link at the right"/>
2. Click **New issue**.<br><img src="{{ site.baseurl }}/common/images/new_issue.png" alt="the New Issue button"/>
3. Fill in the Title and Issue description.
4. Click **Submit new issue**.

<h2 id="triage">Help triage issues <a href="https://www.codetriage.com/magento/magento2" target="_blank"><img src="https://www.codetriage.com/magento/magento2/badges/users.svg" /></a></h2>

In addition to contributing code, you can help to triage issues. This can include reproducing bug reports or asking for vital information, such as affected versions or instructions to reproduce bugs. If you would like to start triaging issues, one easy way to get started is to <a href="https://www.codetriage.com/magento/magento2" target="_blank">subscribe to Magento on CodeTriage</a>.

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
        <th colspan="2">Pull Request Resolution Status</th>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_accept.png" alt="the Accept button"/></td>
         <td>The pull request has been accepted and will be merged into mainline code.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_rejected.png" alt="the Reject button"/></td>
         <td>The pull request has been rejected and will not be merged into mainline code. Possible reasons can include but are not limited to: issue has already been fixed in another code contribution, or there is an issue with the code contribution.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_needs_update.png" alt="the needs update button"/></td>
         <td>The Community Engineering Team needs additional information from the reporter to properly prioritize and process the pull request.</td>
      </tr>
      <tr>
        <th colspan="2">Issue Resolution Status</th>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_G1_Passed.png" alt="G1 Passed"/></td>
         <td>Automatic verification of the issue description successfully passed. Minimum required information is provided (Preconditions, Steps to Reproduce, Actual Result, Expected Result).</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_G1_Failed.png" alt="G1 Failed"/></td>
         <td>Automatic verification of the issue description failed. Minimum required information is not provided (Preconditions, Steps to Reproduce, Actual Result, Expected Result).</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_G2_Passed.png" alt="G2 Passed"/></td>
         <td>The Community Engineering Team has confirmed that this issue contains the minimum required information to reproduce.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_G3_Passed.png" alt="G3 Passed"/></td>
         <td>The Community Engineering Team has validated and confirmed the issue.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Reproduced_on_20x.png" alt="Reproduced on 2.0.x"/></td>
         <td>The Community Engineering Team reproduced the issue on latest 2.0.x release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Reproduced_on_21x.png" alt="Reproduced on 2.1.x"/></td>
         <td>The Community Engineering Team reproduced the issue on latest 2.1.x release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Reproduced_on_22x.png" alt="Reproduced on 2.2.x"/></td>
         <td>The Community Engineering Team reproduced the issue on latest 2.2.x release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Reproduced_on_23x.png" alt="Reproduced on 2.3.x"/></td>
         <td>The Community Engineering Team reproduced the issue on latest 2.3.x release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Fixed_in_20x.png" alt="Fixed in 2.0.x"/></td>
         <td>The issues has been fixed in one of the 2.0.x releases or in 2.0-develop branch and will be available with upcoming patch release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Fixed_in_21x.png" alt="Fixed in 2.1.x"/></td>
         <td>The issues has been fixed in one of the 2.1.x releases or in 2.1-develop branch and will be available with upcoming patch release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Fixed_in_22x.png" alt="Fixed in 2.2.x"/></td>
         <td>The issues has been fixed in one of the 2.2.x releases or in 2.2-develop branch and will be available with upcoming patch release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Fixed_in_23x.png" alt="Fixed in 2.3.x"/></td>
         <td>The issues has been fixed in one of the 2.3.x releases or in 2.3-develop branch and will be available with upcoming patch release.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/gitHub_acknowledged.png" alt="the acknowledged button"/></td>
         <td>The Community Engineering Team has created internal ticket.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_needs_update.png" alt="the needs update button"/></td>
         <td>The Community Engineering Team needs additional information from the reporter to properly prioritize and process the issue.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_Cannot_Reproduce.png" alt="Can Not Reproduce"/></td>
         <td>The Community Engineering Team can not reproduced the issue following steps to reproduce.</td>
      </tr>
      <tr>
         <td><img src="{{ site.baseurl }}/common/images/github_non-issue.png" alt="Non Issue"/></td>
         <td>A described behavior in the issue description is valid and shouldn't be changed in Magento code base.</td>
      </tr>
   </tbody>
</table>
