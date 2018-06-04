---
group: cloud
subgroup: 170_trouble
title: Resolve a broken branch
menu_title: Resolve a broken branch
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/trouble/trouble-broken-branch.md
functional_areas:
  - Cloud
  - Configuration
---

## Resolve issues with broken Git branches
This topic discusses solutions to typical issues you might experience with broken branches. You should have experience with Git [branches and commits](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging){:target="_blank"} to effectively fix your branch. Additional information is linked as needed to help understand Git and {{site.data.var.ece}} builds and deployments.

To review logs, see [Troubleshoot your deployment]({{ page.baseurl }}/cloud/access-acct/trouble.html).

## Issues with installing patches {#patches}
When you push your code, the build and deploy phases begin. Patch and available hotfix installation is part of the process. If you receive errors indicating the patches could not be installed and the build failed, you can run the following command locally to identify any errors:

    git apply <path to patch>

Make note of the errors. These may help determine what fixes are required. We can also help further with those specified errors.

You should apply patches in your local on your Git branch then push to the remote for normal build and deploy scripts to run. For full instructions, see [Patch and test Magento Commerce]({{ page.baseurl }}/cloud/project/project-patch.html).

## Code compile issues {#compile}
If you receive build errors due to compilation of your code, you may have disabled modules that are not correctly enabling for the compile commands.

To enable all modules:

1. Log into your local machine, SSH into your Magento local system.
2. Enter the following CLI commands:

        bin/magento module:enable --all
        bin/magento setup:di:compile

These commands enable all extensions and run the compile part of the build. Verify if you continue to encounter errors or issues.

## Broken build trying to force build using the Magento Cloud CLI {#cli-build}
When we initially provision your project, you receive a cloned `master` branch. You should clone the `master` to your local workspace and create a branch from it to complete all of your development.

When you want to build and deploy the code to the Integration environment, you should not force the build using the Magento Cloud CLI commands to initiate a build command. This can cause the build to break. The command may check for specific variables and settings not in your local but in the remote environment. The automated build process also runs a specific series of scripts and commands when you push your code to your remote Git branch and environment.

For example, when using the Magento Cloud CLI commands, you may have received the error during a build: `E: Error building project: The build hook failed with status code 255. Build aborted`.

If your build broke in this situation, we recommend force resetting the code from the remote and following normal [build and deploy]({{ page.baseurl }}/cloud/live/live-sanity-check.html#push) processes. The branch could have inaccurate files, incomplete steps, that require fully resetting the code and building normally.

1. If you have code commits for your branch, you should move those commits to a new branch. When [resetting your code](https://git-scm.com/docs/git-reset){:target="_blank"} branch, you will lose any and all code commits.

    We recommend using [`git stash`](https://git-scm.com/docs/git-stash){:target="_blank"} to save your current branch. You can pull code from the stash into your reset branch.

    Or you can create a branch of the commits to add the work back after resetting the branch.
2. You will need to locate a specific commit number to reset back to. If you do not include a <commit ID> SHA or ID, the reset will reference the latest commit.

    To get a log of commits, you can use the [`git log`](https://git-scm.com/docs/git-log){:target="_blank"} command for a verbose list of commits to copy an ID:

        git log

    Or use the [`git reflog`](https://git-scm.com/docs/git-reflog){:target="_blank"} command for a list of commit IDs with commit message:

        git reflog
3. Force reset your code branch on your local. This will force return the code to the current remote branch.

        git reset --hard <commit ID>

    <div class="bs-callout bs-callout-warning" markdown="1">
    You will lose committed code, if any. Make sure to backup, stash, or make a new branch to save your code.
    </div>
4. Push code to start a normal build and deploy process. For the full process, see [Build and deploy on local]({{ page.baseurl }}/cloud/live/live-sanity-check.html).

You should have a successful build. At this point, If you have code commits, commit those to the reset branch. Fully test to ensure the changes are correctly working.

#### Related topics
* [First-time local environment setup]({{ page.baseurl }}/cloud/access-acct/first-time-setup.html)
* [Build and deploy on local]({{ page.baseurl }}/cloud/live/live-sanity-check.html)
* [Deployment Process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)
