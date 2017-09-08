---
layout: default
group: cloud
subgroup: 020_tech
title: Blackfire Profiler
menu_title: Blackfire Profiler
menu_order: 25
menu_node:
version: 2.0
github_link: cloud/project/project-integrate-blackfire.md
---

[Blackfire Profiler](https://blackfire.io/profiler){:target="_blank"} helps you locate and investigate performance issues in your environment at the code-level. it creates a performance profile by tracking every PHP call and method and SQL queries performed by your code. Blackfire digs deeper providing granular performance analytics. You can activate and use Blackfire Profiler in all of your environments, especially helpful in Staging and Production.

This information helps you get Blackfire installed on your local, integrated into Integration, and running your first profile.

For full details on integrations, also review [Blackfire’s complete Magento Commerce (Cloud)](https://support.blackfire.io/blackfire-on-magento-cloud){:target="_blank"} guide. They also include a number of [incredible resources](#resources) to get you started.

Blackfire includes the following [environments](https://blackfire.io/docs/reference-guide/environments){:target="_blank"} through their site:

* `Magento Cloud (<Project ID>)` - Dev: This is your Integration environments
* `Magento Cloud (<Project ID>)` - Test: This is your Staging environment
* `Magento Cloud (<Project ID>)` - Prod: This is your Production environment

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For Pro plans, you need to enter a Support ticket with your Blackfire credentials to get Staging and Production configured with Blackfire. We'll help you get Blackfire configured in those environments.
</div>

## Get your Blackfire credentials {#cloud-int-black}
The Project Owner is the account owner. This account's e-mail address is used as part of the credentials for access to Blackfire for your project. Only the Project Owner credentials can be used to integrate Blackfire with {{site.data.var.ece}} and to log into the Blackfire site. An invitiation email is sent to the Project Owner's e-mail address to complete activation.

For information on setting up the account on Blackfire, see [Accessing your Blackfire account as a Magento Cloud user](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-1-accessing-your-blackfire-account-as-a-magento-cloud-user){:target="_blank"}.

## Add collaborator accounts {#collaborators}
After you have accessed your Blackfire account, you can [add additional collaborator accounts](http://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-2-adding-collaborators-to-the-blackfire-environments){:target="_blank"}.

We recommend adding at least one account through Blackfire to manage all access, integrations, and usage of the tool. We also recommend promoting one of the added members to Admin, to manage all Blackfire access and integrations.

1. Using the Project Owner Blackfire credentials, log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select an environment.
3. Select the Settings tab.
4. Enter an e-mail address and click Add Member.
5. For one account, click the menu by Revoke and select **Promote as an admin**.

	![Promote an admin]({{ site.baseurl }}common/images/cloud_blackfire-member.png)

## Enable Blackfire on your local {#cloud-int-black-en}
You need to install and configure Blackfire on your local workspace with your working {{site.data.var.ece}} installation. You don't need to run these installations directly on the hosted environments, only on your local.

We recommend using their installation guide to walk you through the process:

1. Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select the Integration environment in the **Current Environment** list.
3. Select the Settings tab.
4. Scroll to the bottom and locate the Server ID and Server Token for the environment. You will need these values for the instructions.
5. Open [this guide](https://blackfire.io/docs/up-and-running/installation){:target="_blank"}, select the Operating System, and follow the instructions.

## Integrate Blackfire in development {#dev}
We recommend enabling Blackfire in all of your environments including Integration. To integrate, you begin in the Blackfire site. For full details, see [their guide.](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-3-configure-the-server-credentials-the-integration-with-magento-cloud){:target="_blank"}. You can integrate with Pro's Integration environment and Starter's development branches.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For Starter plans, pushing your code and `.magento.app.yaml` file to Staging and Master branches updates those environments directly. You can directly add Blackfire to those environments the way you do with development.
</div>

These instructions assume you have fully set up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html).

1. Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select the Integration and Development environment in the **Current Environment** list.
3. Select the Builds tab. In the Builds side panel, click the info icon next to Magento Cloud. This opens a list of commands you will need to execute in order to enable the Blackfire integration.

	![Promote an admin]({{ site.baseurl }}common/images/cloud_blackfire-builds.png)

To enable and integrate Blackfire into your code, you will modify the `.magento.app.yaml` file. You can push these settings into your remote Git branch, merge, and deploy across all environments including Staging and Production.

We recommend working in a branch and creating a snapshot prior to installing.

1.	SSH into your local Magento workspace.
2.	Log in to your {{site.data.var.ece}} project.

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

Next, modify the `.magento.app.yaml` file:

1.	Use a text editor to locate and edit `<project root dir>/.magento.app.yaml` in your branch.
2.	Add the following values to the `extensions` block under `runtime:`

		    - name: blackfire
		      configuration:
		         server_id: "<blackfire Server ID>"
		         server_token: "<blackfire Server token>"

	Change `<blackfire Server ID>` and `<blackfire Server token>` to the values from your Blackfire account.

	For example:

		runtime:
    	  extensions:
    	    - mcrypt
		    - redis
		    - xsl
		    - json
		    - name: blackfire
		      configuration:
		         server_id: "<blackfire Server ID>"
		         server_token: "<blackfire Server token>"
3.	Save your changes to `.magento.app.yaml` and exit the text editor.
4.	Add, commit, and push your changes to the environment:

		git add -A
		git commit -m "<message>"
		git push origin

	If errors display during deployment, open `.magento.app.yaml` and check the syntax. Check indentation and spelling and try again.

## Profile your store {#profile}
To verify Blackfire works, you have a couple options: a browser extension or using the CLI. For extensive CLI profiling options and better understanding the profiles, see [Blackfire's resources](#resources).

To profile using the browser:

1. Install the Blackfire browser extension in [Chrome](https://blackfire.io/docs/integrations/chrome#installing-the-companion){:target="_blank"} or [Firefox](https://blackfire.io/docs/integrations/firefox#installing-the-companion){:target="_blank"}. A new Blackfire icon displays in your browser next to the address location. If you don't see it, you may need to display the bar.
2. Visit the store or site URL for your specific environment. For example, access the URL for your Integration environment. If you need this URL, you can find it through the Project Web Site. Select the environment branch and copy the link from the Access section.
3. Click the Blackfire icon to profile. For Compare with, select No Reference.

	![Start profiling]({{ site.baseurl }}common/images/cloud_blackfire.png)
4. Click Profile to start.

To profile using the CLI:

1.	SSH into the development or Integration environment. If you need the SSH command, ou can find it through the Project Web Site. Select the environment branch and copy the SSH command from the Access section. Enter the SSH command in a terminal.
6.	Enter the following command:

		php --ri blackfire

	A sample result follows:

		blackfire

		Blackfire => enabled
		Blackfire => 1.10.3
		Timing measurement => cgt
		Num of CPU => 8
		Profiling heap memory => 0 Kb
		Main instance trigger mode => HTTP header triggered
		Main instance => enabled

        Main instance info
		Output stream => file
		Signature validated => no
		EnvId validated => no
		Fully decoded => no

		Directive => Local Value => Master Value
		blackfire.agent_socket => tcp://blackfire.platform.sh:8307 => tcp://blackfire.platform.sh:8307
		blackfire.agent_timeout => 10 => 10
		blackfire.env_id => no value => no value
		blackfire.env_token => no value => no value
		blackfire.log_level => 1 => 1
		blackfire.log_file => no value => no value

## Blackfire resources {#resources}
Blackfire provides great information to better profile and investigate the results on their documentation site. Check out some resources:

*	[Profiling HTTP requests](https://blackfire.io/docs/cookbooks/profiling-http){:target="_blank"}
*	[Profiling CLI commands](https://blackfire.io/docs/cookbooks/profiling-cli){:target="_blank"}
*	[Writing Tests](https://blackfire.io/docs/cookbooks/tests){:target="_blank"}
*	[Writing scenarios](https://blackfire.io/docs/cookbooks/scenarios){:target="_blank"}
*	[Reference Guide](https://blackfire.io/docs/reference-guide/index){:target="_blank"} to really understand what you profile

#### Related topics
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
