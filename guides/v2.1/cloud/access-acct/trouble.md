---
layout: default
group: cloud
subgroup: 04_setup
title: Troubleshoot deployment
menu_title: Troubleshoot deployment
menu_order: 100
menu_node: 
github_link: cloud/access-acct/trouble.md
---

## Troubleshoot deployment
This topic discusses how to recover if you deployed the Magento application with the incorrect [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html). For example, you might have used the keys for another account or you might have used Magento Community Edition (CE) keys instead of Magento Enterprise Edition (EE) keys.

If you used the incorrect keys, deployment fails; to recover, you must clone the project, add the correct keys to `auth.json`, and push the change to the master branch. Before you begin, make sure you know your Magento EE [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html).

<div class="bs-callout bs-callout-info" id="info">
  <p>In this section, we assume that your project has a <code>master</code> branch only (<code>master</code> is the default branch when you first create a project). </p>
</div>


To redeploy with the correct authentication keys:

1.	Log in to the machine that has your Magento Enterprise Cloud Edition SSH keys.
2.	Log in to the project:

		magento-cloud login
3.	List project IDs:

		magento-cloud project:list
4.	Clone the project:

		magento-cloud project:get <project ID>
5.	Wait for the project to clone.
6.	Change to the project root directory.
7.	Open `auth.json` in a text editor.
8.	Add the correct authentication keys.
9.	Save your changes and exit the text editor.
10.	Commit and merge your changes.

		git add -A
		git commit -m "<description of change>"
		git push origin master
11.	Wait for the deployment to complete.

	Messages indicate whether deployment was successful. You can confirm a successful deployment by going to one of the **Environment routes** displayed on your screen.
