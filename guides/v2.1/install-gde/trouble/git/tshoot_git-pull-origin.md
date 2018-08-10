---
group: install_trouble
subgroup: 10_github
title: git pull origin develop fails when updating the Magento software
menu_title: git pull origin develop fails when updating the Magento software
menu_node:
menu_order: 410
version: 2.1
redirect_from:
  - /guides/v1.0/install-gde/trouble/tshoot_git-pull-origin.html
  - /guides/v2.0/install-gde/trouble/tshoot_git-pull-origin.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

One of the steps to updating the Magento 2 software is to update your local repository by running:

	git pull origin develop

The following error might display:

	error: Your local changes to the following files would be overwritten by merge:
	<list of files>

To find which files are subject to being overwritten, either read the message or enter:

	git status

The next section discusses suggested solutions.

### Suggested solutions

Your solution depends on whether or not you intentionally modified files in the Magento 2 file system. See one of the following sections for more information.

#### You intentionally modified files

Manually resolve the conflicts in the usual way. If you're not sure what to do, consult [GitHub help](https://help.github.com/).

#### You didn't intentionally modify any files

Try any of the following:

*	If you're certain you didn't modify any files and you don't mind removing or overwriting the changes in the Magento file system, enter:

		git reset --hard HEAD && git pull origin develop

	After that, continue where you left off with your Magento 2 update.

*	It's possible that a GitHub configuration setting can prevent these errors in the future. By default, GitHub stores content using the operating system-default line ending characters. If you're using Linux but another collaborator committed a change using Windows, GitHub converts the Windows line endings to Linux when you clone or pull. This gives the appearance of a change to files when in fact, no change was made.

	To configure GitHub to ignore line endings, enter the following command in your Git client:

		git config --system core.autocrlf false

	If you use Windows, enter:

		git config --system core.eol LF

	{:.bs-callout .bs-callout-info}
  Magento does <em>not</em> recommend or endorse any particular GitHub configuration settings. The preceding are suggestions only. For more information, consult the [GitHub help](https://help.github.com/).

	Continue where you left off with your Magento 2 update.
