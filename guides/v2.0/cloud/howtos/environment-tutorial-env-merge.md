---
layout: default
group: cloud
subgroup: 10_howto
title: Tutorial&mdash;Merge and delete an environment
menu_title: Tutorial&mdash;Merge and delete an environment
menu_order: 5
menu_node: 
level3_menu_node: level3child
level3_subgroup: env-tut
github_link: cloud/howtos/environment-tutorial-env-merge.md
redirect_from: guides/v2.0/cloud/env/environment-tutorial-env-merge.html
---

#### Contents
*	[Tutorial&mdash;Merge an environment](#tut-env-merge)
*	[Optionally delete the environment](#tut-env-delete)

## Tutorial&mdash;Merge an environment {#tut-env-merge}
This tutorial shows how to merge changes from an environment to its parent, which in this case is the master branch. You can, for example, merge code, changes to themes, and so on.

You can them optionally delete the environment.

This tutorial shows how to create a sample file and merge it. This tutorial assumes you're already working in an environment; if not, see [ Get started with an environment]({{ site.gdeurl }}cloud/env/environments-start.html#env-start-comm) to create one.

To get started:

{% include cloud/cli-get-started.md %}

To merge an environment:

1.	Add a file named `test.txt` to the environment root directory.

	You can put whatever contents you want; for example, the number `1`
7.	Save your changes and exit the text editor.
8.	Add, commit, and push your change to the environment:

		git add -A
		git commit -m "<commit message>"
		git push origin

9.	Merge with the parent environment:

		magento-cloud environment:merge <environment ID>

	For example,

		magento-cloud environment:merge master

## Optionally delete the environment {#tut-env-delete}
This section discusses how to optionally delete a branch in any of the following ways:

*	Make the branch *inactive* but preserve its contents
*	Delete the branch and its contents

### Make the environment inactive
This section discusses how to make a branch inactive, which means it can't be used and it doesn't count toward your total of eight active branches. The branch's contents are preserved. You can activate it again by making a commit to it.

To make a branch inactive:

1.	Check out the environment if you haven't already done so:

		magento-cloud environment:checkout -e <environment ID>

2.	Delete the environment:

		magento-cloud environment:delete <environment ID>

	For example, to delete the `deleteme` environment:

		magento-cloud environment:delete deleteme

	To delete more than one environment:

		magento-cloud environment:delete <environment ID> <environmentID>

	For additional options, see the command-line help:

		magento-cloud environment:delete --help

3.	Wait for the environment to delete.

#### Related topic
[Tutorial&mdash;Set Magento environment variables]({{ site.gdeurl }}cloud/env/environment-tutorial-set-mage-vars.html)