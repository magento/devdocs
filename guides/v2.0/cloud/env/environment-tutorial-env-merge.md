---
layout: default
group: cloud
subgroup: 08_env
title: Tutorial&mdash;Merge an environment
menu_title: Tutorial&mdash;Merge an environment
menu_order: 105
menu_node: 
level3_menu_node: level3child
level3_subgroup: env-tut
github_link: cloud/env/environment-tutorial-env-merge.md
---

## Tutorial&mdash;Merge an environment
This tutorial shows how to merge changes from an environment to its parent, which in this case is the master branch. You can, for example, merge code, changes to themes, and so on.

This tutorial shows how to create a sample file and merge it. This tutorial assumes you're already working in an environment; if not, see [ Get started with an environment]({{ site.gdeurl }}cloud/env/environments-start.html#env-start-comm) to create one.

To merge an environment:

1.	Log in to the machine on which your Magento Enterprise Cloud Edition SSH key is stored.
2.	Log in to the project:

		magento-cloud login
3.	List projects:

		magento-cloud project:list
4.	Change to a project directory.
4.	List environments in the project:

		magento-cloud environment:list
5.	Check out an environment:

		magento-cloud environment:checkout <environment ID>
6.	Add a file named `test.txt` to the environment root directory.

	You can put whatever contents you want; for example, the number `1`
7.	Save your changes and exit the text editor.
8.	Add, commit, and push your change to the environment:

		git add -A
		git commit -m "<commit message>"
		git push origin
9.	Merge with the parent environment:

		magento-cloud environment:merge <environment ID>

#### Related topic
[Tutorial&mdash;Set Magento environment variables]({{ site.gdeurl }}cloud/env/environment-tutorial-set-mage-vars.html)