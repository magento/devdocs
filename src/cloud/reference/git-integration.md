---
group: cloud-guide
title: Git
redirect_from:
   - /cloud/project/admin-git-push.html
---

Git is the center of all code management, build, and deployment for your {{site.data.var.ece}} stores and sites. We use Git to provide source control for your code:

*  Git supports branch development that merges upstream (or to a parent branch) before deploying across your environments. Multiple developers can work together on small to large code updates through Git branch management.
*  When you push Git branches, we automatically kick off build and deploy scripts to completely build and verify your code, generate and update a virtual environment, and deploy to the environment for ease of testing.
*  Every active Git branch has an associated environment. We use specific .yaml files in {{site.data.var.ece}} code with your customizations to define environment configurations, services, database, and more.

If you need help understand Git, you can review the following resources:

*  [Git documentation](https://git-scm.com/documentation) and [videos](https://git-scm.com/videos) from the makers of Git
*  [Git cheatsheet](http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf) and [quick guide](http://rogerdudler.github.io/git-guide/) from Roger Dudler
*  [Git video](https://www.youtube.com/watch?v=8KCQe9Pm1kg) with DevForge to understand how people use the repo and commands with a fun story

## Git CLI and clients {#clients}
You can interact with Git using [CLI commands](https://git-scm.com/documentation) or using a Git client. Git provides a [Git client](https://git-scm.com/downloads) option, or you can use other clients such as installed on your computer to be able to interact with {{site.data.var.ece}}.

Not everyone remembers [Git](https://git-scm.com/docs) commands with ease. If you want a Git client, use any client of your choice. Some developers use clients including [GitKraken](https://www.gitkraken.com/) and [SmartGit](https://www.syntevo.com/smartgit/).

## Git branch naming {#requirements}

In addition to Git's requirements for [valid branch names](https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html), {{site.data.var.ece}} adds two additional requirements:

*  The `/` character isn't allowed in a branch name.
*  Branch names are not case-sensitive. Each name must be unique regardless of the case used for each letter. For example, if you have a branch named `Sprint`, you cannot create another branch named `sprint`.

## Git branching {#branching}

For specifics on creating Git branches, see the following topics:

*  [Manage branches with the Project Web Interface]({{ site.baseurl }}/cloud/project/project-webint-branch.html)
*  [Manage branches with the CLI]({{ site.baseurl }}/cloud/env/environments-start.html)

## .gitignore file {#gitignore}
Depending on your {{site.data.var.ece}} version, you may need different information added to or commented out in your `.gitignore` file. Git uses this file to determine which files and directories to ignore, before you make a commit to your branches. A .gitignore file should be committed into your root Magento in the repository, in order to share the ignore rules with any other users that clone the repository.

We include a base `.gitignore` file with the project repository. For a review of the {{site.data.var.ece}} file, see [.gitignore file](https://github.com/magento/magento-cloud/blob/master/.gitignore). You can review the recommended files for your file in the [`.gitignore` reference]({{ site.baseurl }}/guides/v2.3/config-guide/prod/config-reference-gitignore.html).

## Git and SSH {#ssh}

You must use Secure Shell (SSH) and not HTTPS to connect to the Git repository. For more information, see [GitHub documentation](https://help.github.com/articles/generating-an-ssh-key).

When setting up your SSH, review our information at [SSH and sFTP]({{ site.baseurl }}/cloud/env/environments-ssh.html).

## Git integrations {#integrations}

We support using either [GitHub]({{ site.baseurl }}/cloud/integrations/github-integration.html), [Bitbucket]({{ site.baseurl }}/cloud/integrations/bitbucket-integration.html) or [GitLab]({{ site.baseurl }}/cloud/integrations/gitlab-integration.html) integrations for your {{site.data.var.ece}} project.

 {:.bs-callout-info}
To integrate other Git repositories with your {{site.data.var.ece}} project using GitHub, Bitbucket or GitLab deploy keys, refer to [Pull code from a private Git repository]({{ site.baseurl }}/cloud/project/project-webint-branch.html#private).
