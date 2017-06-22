---
layout: default
group: release-notes
subgroup: Magento 2.2.0 Pre-Release Candidate
title: Submit PRs on Magento 2.2.0 Pre-Release Candidate 
menu_title: Submit PRs on Magento 2.2.0 Pre-Release Candidate
menu_order: 5
level3_menu_node: 
level3_subgroup: 
version: 2.2
github_link: pre-release/submit-PRs.md
---



### Get started creating a Pull Request (PR)

Before you submit a pull request, make sure you first:

1.	Request permission to the Magento 2.2.0 Pre-Release Candidate repositories for which you want to create a pull request. You must provide Magento with a list of the GitHub account names that will require access to these repositories. Please contact us via email: engcom@magento.com

2.	Prepare your code repositories by forking the repository for which you want to create a pull request. Here's a list of all available codebases and their associated repository:

•	Magento 2 CE  (https://github.com/magento-partners/magento2ce)
•	Magento 2 EE (https://github.com/magento-partners/magento2ee)
•	Magento 2 B2B  (https://github.com/magento-partners/magento2b2b)


### How to submit a PR

Here's an overview of how to create a Pull Request for the Magento 2.2.0 Pre-Release Candidate repositories. 

1.	Create a new feature branch or bug fix branch, and give it a helpful name that describes the fix or feature you're submitting (for example: **fix-for-url-rewrites**).

2.	Work on your code, then submit a pull request. When your code is ready for delivery, create a pull request to the base repository or several pull requests to different repositories (for example, `yourfork/magento2ce : fix-for-url-rewrites --> magento-partners/magento2ce : develop`).  

Note: A fix for the EE/B2B codebase might also require changes to the CE codebase. In this case, you must create two pull requests (one for the CE and another for the EE repositories) and link them in the PR description. 

3.	Wait until the Community Engineering Team has reviewed and approved your proposed changes.

4.	Address any issues raised by testing, if necessary. After all Travis builds have successfully passed, the Community Engineering Team will merge your pull request(s).


## Questions?
For any questions related to the Partners Contributions to the Magento, please contact Magento Community Engineering team engcom@magento.com.


## More information 

Don't want to submit a PR but would like to provide feedback? Submit an issue [here](https://github.com/magento/magento2/issues).




