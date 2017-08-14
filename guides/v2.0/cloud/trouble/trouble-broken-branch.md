---
layout: default
group: cloud
subgroup: 170_trouble
title: Resolve a broken branch
menu_title: Resolve a broken branch
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/trouble/trouble-broken-branch.md
---

## Resolve issues with broken Git branches
This topic discusses solutions to typical issues you might experience with broken branches. You should have experience with Git [branches and commits](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging){:target="_blank"} to effectively fix your branch. Additional information is linked as needed to help understand Git and Magento Commerce (Cloud) builds and deployments.

## Broken build trying to force build using the Magento Cloud CLI {#cli-build}
When we initially provision your project, you receive a cloned `master` branch. You should clone the `master` to your local workspace and create a branch from it to complete all of your development.

When you want to build and deploy the code to the Integration environment, you should not force the build using the Magento Cloud CLI commands to initiate a build command. This can cause the build to break. The command may check for specific variables and settings not in your local but in the remote environment. The automated build process also runs a specific series of scripts and commands when you push your code to your remote Git branch and environment.

If your build broke in this situation, we recommend force resetting the code from the remote and following build and deploy processes. The branch could have inaccurate files, incomplete steps, that require fully resetting the code and building normally.

1. If you have code commits for your branch, you should move those commits to a new branch. When [resetting your code](https://git-scm.com/docs/git-reset){:target="_blank"} branch, you will lose any and all code commits.

  We recommend using [`git stash`](https://git-scm.com/docs/git-stash){:target="_blank"} to save your current branch. You can pull code from the stash into your reset branch.

  Or you can create a branch of the commits to add the work back after resetting the branch.
2. Force reset your code branch on your local. This will force return the code to the current remote branch.

    git reset --hard
3. Push code to start a normal build and deploy process. For the full process, see [Build and deploy on local]({{ page.baseurl }}cloud/live/live-sanity-check.html).

You should have a successful build. At this point, If you have code commits, commit those to the reset branch. Fully test to ensure the changes are correctly working.

#### Related topics
* [First-time development setup]({{ page.baseurl }}cloud/access-acct/first-time-setup.html)
* [Build and deploy on local]({{ page.baseurl }}cloud/live/live-sanity-check.html)
* [Deployment Process]({{ page.baseurl }}cloud/reference/discover-deploy.html)
