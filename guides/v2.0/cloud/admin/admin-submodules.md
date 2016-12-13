---
layout: default
group: 
subgroup: 30_admin
title: Reuse code across projects with Git submodules
menu_title: Reuse code across projects with Git submodules
menu_order: 200
menu_node: 
version: 2.0
github_link: cloud/admin/admin-submodules.md
---

[Git *submodules*](https://git-scm.com/book/en/v2/Git-Tools-Submodules){:target="_blank"} provide an easy way to reuse code in multiple projects. Git submodules are typically
listed in a `.gitmodules` file at the root of your Git repository. When you push to your project, 
Magento Enterprise Cloud Edition clones the submodules automatically.

Here is an example of a `.gitmodules` file:

	[submodule "app/Oro"]
		path = src/Oro
		url = https://github.com/orocrm/platform.git
	[submodule "src/OroPackages/src/Oro/Bundle/EntitySerializedFieldsBundle"]
		path = src/OroPackages/src/Oro/Bundle/EntitySerializedFieldsBundle
		url = https:/github.com/orocrm/OroEntitySerializedFieldsBundle.git
	[submodule "src/OroB2B"]
		path = src/OroB2B
		url = https://github.com/orocommerce/orocommerce.git

When you run `git push`, messages similar to the following display:

	Validating submodules.
	  Updated submodule git://github.com/orocommerce/orocommerce: 4 references updated.
	  Updated submodule git://github.com/orocrm/platform: 229 references updated.
	  Updated submodule git://github.com/orocrm/OroEntitySerializedFieldsBundle: 11 references updated.

## Error validating submodules
The following error displays if you access a Git URL like `git@github.com:...` because no SSH key is present in the repository referenced by the submodule:

	Validating submodules.
	  Found unresolvable links, updating submodules.

	E: Error validating submodules in tree:
	    - /src/Oro: Exception: commit 03567c6 not found.

	   This might be due to the following errors fetching submodules:
	    - git@github.com:orocommerce/orocommerce.git: HangupException: The remote server unexpectedly closed the connection.

To resolve the issue, edit `.gitmodules` and replace `git@github.com:...` URLs with HTTPS URLs in the format: `https://github.com/...`.

#### Related topic
[Set up multiple applications]({{page.baseurl}}cloud/project/project-conf-multi.html#cloud-multi-app-submod)


