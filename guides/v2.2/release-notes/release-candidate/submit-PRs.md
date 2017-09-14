---
layout: default
group: release-notes
subgroup: 2.2.0 Release Candidate
title: Submit PRs for the Release Candidate
menu_title: Submit PRs for the Release Candidate
menu_order: 4000
level3_menu_node:
level3_subgroup:
version: 2.2
github_link: release-notes/release-candidate/submit-PRs.md
---

We welcome code contributions in the form of pull requests to the Magento GitHub code repositories.

### Get started creating a Pull Request (PR)

Before you submit a pull request, make sure you first:

1.	Request permission to the Magento 2.2.0 Release Candidate repositories for which you want to create a pull request.  You must provide Magento with a list of the GitHub account names that will require access to these repositories. Please contact us via email: `engcom@magento.com`.

2.	Prepare your code repositories by forking the repository for which you want to create a pull request. Here's a list of the available repositores for 2.2.0 Pre-Release Candidate:

<table>
  <tr>
    <th><b>Magento edition</b></th>
    <th><b>Location</b></th>
    <th><b>Availability</b></th>
  </tr>

<tr>
    <td><b>Magento CE</b></td>
    <td>https://github.com/magento/magento2</td>
    <td>Publicly available already</td>
</tr>

<tr>
    <td><b>Magento EE</b></td>
    <td>https://github.com/magento/magento2ee</td>
    <td>Available after contract has been signed</td>
</tr>

<tr>
    <td><b>Magento B2B</b></td>
    <td>https://github.com/magento/magento2b2b</td>
    <td>Available after contract has been signed</td>
</tr>

</table>

### How to submit a PR

Here's an overview of how to create a Pull Request for the Magento 2.2.0 Release Candidate repositories. 

1.	Create a new feature branch or bug fix branch, and give it a helpful name that describes the fix or feature you're submitting (for example: **fix-for-url-rewrites**).

2.	Work on your code, then submit a pull request. When your code is ready for delivery, create a pull request to the base repository or several pull requests to different repositories (for example, `yourfork/magento2ce : fix-for-url-rewrites --> magento-partners/magento2ce : develop`).  

3.	Wait until the Community Engineering Team has reviewed and approved your proposed changes.

4.	Address any issues raised by testing, if necessary. After all Travis builds have successfully passed, the Community Engineering Team will merge your pull request(s).


<div class="bs-callout bs-callout-info" id="info" markdown="1">
A fix for the EE/B2B codebase might also require changes to the CE codebase. In this case, you must create two pull requests (one for the CE and another for the EE repositories) and link them in the PR description.
</div>


## Questions?

For any questions related to  Partner Contributions to the Magento codebase, please contact the Magento Community Engineering team at `engcom@magento.com`.


## More information

Don't want to submit a PR but would like to provide feedback? Submit an issue [here](https://github.com/magento/magento2/issues).
