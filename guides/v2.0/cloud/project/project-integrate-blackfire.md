---
layout: default
group: cloud
subgroup: 07_project
title: Blackfire integration
menu_title: Blackfire integration
menu_order: 105
menu_node: 
level3_menu_node: level3child
level3_subgroup: integrate
github_link: cloud/project/project-integrate-blackfire.md
---

#### Contents
*	[Register with Blackfire](#cloud-int-black) 
*	[Enable the Blackfire integration](#cloud-int-black-en)
*	[Verify it's working](#cloud-int-black-verify)
*	[Profile your site](#cloud-int-black-profile)

## Register with Blackfire {#cloud-int-black}
To register with Blackfire:

1.	[Sign up](https://blackfire.io/signup){:target="_blank"} for an account.

	Follow the prompts on your screen to complete the process.
2.	Log in to your Blackfire account.
3.	[Get your credentials](https://blackfire.io/account){:target="_blank"}.
4.	Continue with the next section.
5.	Download the [Chrome](https://chrome.google.com/webstore/detail/blackfire-companion/miefikpgahefdbcgoiicnmpbeeomffld){:target="_blank"} extension.

## Enable the Blackfire integration {#cloud-int-black-en}
We recommend you enable the Blackfire integration in an environment (that is, branch). You can optionally merge the environment with its parent after you know it's working.

To enable Blackfire:

1.	Log in to the server on which your SSH keys are stored.
1.	Log in to your Magento Enterprise Cloud Edition project.

		magento-cloud login
2.	List projects:

		magento-cloud project:list
3.	List environments in the project:

		magento-cloud environment:list -p <project ID>
4.	See what branch you're currently in, if any.

		git branch
5.	If necessary, check out an existing branch:

		magento-cloud environment:checkout <environment ID>

	You can also create a new branch using the `magento-cloud environment:branch` command.
6.	Back up the environment using a snapshot:

		magento-cloud snapshot:create -e <environment ID>
6.	Use a text editor to open `<project root dir>/.magento.app.yaml`.
7.	Add the following to the block that starts with `runtime:`

		runtime:
    	  extensions:
		    - name: blackfire
		      configuration:
		      server_id: "<blackfire Server ID>"
		      server_token: "<blackfire Server token>"
8.	Save your changes to `.magento.app.yaml` and exit the text editor.
9.	Add, commit, and push your changes to the environment:

		git add -A
		git commit -m "<message>"
		git push origin

## Verify it's working {#cloud-int-black-verify}
TBD

## Profile your site {#cloud-int-black-profile}
TBD



#### Related topics
*	[Get started with a project]({{ site.gdeurl }}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html)
