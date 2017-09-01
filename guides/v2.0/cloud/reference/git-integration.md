---
layout: default
group: 
subgroup:
title: How Cloud Uses Git
menu_title: How Cloud Uses Git
menu_node:
menu_order:
version: 2.0
github_link: cloud/reference/git-integration.md
---
### Git knowledge
We assume you have a good working knowledge of Git. If not, consult the following resources:

*	[Git documentation](https://git-scm.com/documentation){:target="_blank"}
*	[Git reference](https://git-scm.com/docs){:target="_blank"}
*	[Git tutorial](http://git-scm.com/docs/gittutorial){:target="_blank"}

Before getting started, make sure you have a <a href="https://git-scm.com/downloads" target="_blank">Git client</a> installed on your computer to be able to interact with Magento Commerce.

<div class="bs-callout bs-callout-info" id="info">
  <p>In addition to Git's requirements for <a href="https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html">valid branch names</a>, Magento Commerce adds two additional requirements:</p>
  <ul><li>The <code>/</code> character isn't allowed.</li>
  	<li>Branch names must be case-insensitively unique. In other words, if you have a branch named <code>_CaSe_</code>, you cannot create another branch named <code>_case_</code>.</li></ul>
</div>

You must use Secure Shell (SSH) and not HTTPS to connect to the Git repository. For more information, see <a href="https://help.github.com/articles/generating-an-ssh-key" target="_blank">GitHub documentation</a>.
