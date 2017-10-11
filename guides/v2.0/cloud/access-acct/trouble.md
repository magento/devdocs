---
layout: default
group: cloud
subgroup: 170_trouble
title: Troubleshoot deployment
menu_title: Troubleshoot deployment
menu_order: 3
menu_node:
version: 2.0
github_link: cloud/access-acct/trouble.md
---

This topic discusses how to recover if you deployed the Magento application with the incorrect [Magento authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html). For example, you might have used the keys for another account or you might have used Magento Community Edition (CE) keys instead of Magento Enterprise Edition (EE) keys.

If you used the incorrect keys, deployment fails. To recover, you must clone the project, add the correct keys to `auth.json`, and push the change to the master branch.

<div class="bs-callout bs-callout-info" id="info">
  <p>In this section, we assume that your project has a <code>master</code> branch only (<code>master</code> is the default branch when you first create a project). </p>
</div>

To redeploy with the correct authentication keys:

1.	Log in to the machine that has your {{site.data.var.ece}} SSH keys.
2.	Log in to the project:

		magento-cloud login
3.	If you need to clone a project:

    1.	List project IDs:

  		  magento-cloud project:list

    2.	Clone the project:

  		  magento-cloud project:get <project ID>

    3.	Wait for the project to clone.
4.	Create a branch to update code with the name `auth`:

      magento-cloud environment:branch auth master
5.	Change to the project root directory.
6.	Open `auth.json` in a text editor.

    {% highlight json %}
    {
       "http-basic": {
          "repo.magento.com": {
             "username": "<your public key>",
             "password": "<your private key>"
          }
       }
    }
    {% endhighlight %}

7.	Add the correct authentication keys.
8.	Save your changes and exit the text editor.
9.	Commit and merge your changes.

		git add -A
		git commit -m "<description of change>"
		git push origin master
10.	Wait for the deployment to complete.

Messages indicate whether deployment was successful. You can confirm a successful deployment by going to one of the **Environment routes** displayed on your screen.
