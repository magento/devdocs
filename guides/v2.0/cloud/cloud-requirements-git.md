---
layout: default
group: cloud
subgroup: 02_requirements
title: Git requirements
menu_title: Git requirements
menu_order: 3
menu_node: 
version: 2.0
github_link: cloud/cloud-requirements-git.md
---

This page lists detailed requirements for using Git with Magento Enterprise Cloud Edition.

### Source control with Git {#cloud-require-git}
Any change you make to your Magento Enterprise Cloud Edition project must be committed to a Git repository. You can use either the repository provided with your account or you can use your own private account on GitHub or Bitbucket. For more information, see [Magento Enterprise Cloud Edition repositories]({{page.baseurl}}cloud/before/before-repos.html).

If you don't already have an account, we'll create one for you. However, if you have a GitHub or Bitbucket account and you're already using it in a development workflow, we recommend you use it.

To clone a Magento reference project, you must upload SSH keys to `github.com`.

<div class="bs-callout bs-callout-info" id="info">
  <p>Your project's master branch always uses the provided Git repository. You can use an existing GitHub or Bitbucket account to manage branches of that repository. (Branches are also referred to as <em>environments</em>.</p>
</div>

### Git knowledge
We assume you have a good working knowledge of Git. If not, consult the following resources:

*	[Git documentation](https://git-scm.com/documentation){:target="_blank"}
*	[Git reference](https://git-scm.com/docs){:target="_blank"}
*	[Git tutorial](http://git-scm.com/docs/gittutorial){:target="_blank"}

Before getting started, make sure you have a <a href="https://git-scm.com/downloads" target="_blank">Git client</a> installed on your computer
to be able to interact with Magento Enterprise Cloud Edition.

<div class="bs-callout bs-callout-info" id="info">
  <p>In addition to Git's requirements for <a href="https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html">valid branch names</a>, Magento Enterprise Cloud Edition adds two additional requirements:</p>
  <ul><li>The <code>/</code> character isn't allowed.</li>
  	<li>Branch names must be case-insensitively unique. In other words, if you have a branch named <code>_CaSe_</code>, you cannot create another branch named <code>_case_</code>.</li></ul>
</div>

You must use Secure Shell (SSH) and not HTTPS to connect to the Git repository. For more information, see <a href="https://help.github.com/articles/generating-an-ssh-key" target="_blank">GitHub documentation</a>.
