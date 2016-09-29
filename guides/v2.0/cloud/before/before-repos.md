---
layout: default
group: cloud
subgroup: 02_before
title: Magento Enterprise Cloud Edition repositories
menu_title: Magento Enterprise Cloud Edition repositories
menu_order: 4
menu_node: 
version: 2.0
github_link: cloud/before/before-repos.md
---

## Magento Enterprise Cloud Edition repositories {#cloud-repos}
We use Git to manage your environments (branches) and to deploy them to branch-specific web sites as well as to your production site. Thus, you can use your already-established Git workflow with Magento Enterprise Cloud Edition or you can create a new workflow.

Magento Enterprise Cloud Edition provides a Git server. This server is always available and it's used to deploy the `master` branch to your production site. However, this Git server lacks the GitHub interface and it's not very well suited for use with a development team.

Especially if you already have a GitHub repository and workflows for code review and testing, we recommend you integrate Magento Enterprise Cloud Edition with an existing private GitHub or Bitbucket repository. This repository must be dedicated to Magento; don't share it with other applications (unless you deploy those applications with Magento).

Don't have a GitHub or Bitbucket repository? See the [GitHub](https://help.github.com/articles/create-a-repo){:target="_blank"} or [Bitbucket](https://confluence.atlassian.com/bitbucket/create-a-git-repository-759857290.html){:target="_blank"} documentation for more information.

#### Next step
[Set up a Magento workspace]({{page.baseurl}}cloud/before/before-workspace.html)


