---
group: cloud
title: Blackfire Profiler
version: 2.0
github_link: cloud/project/project-integrate-blackfire.md
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[Blackfire Profiler](https://blackfire.io/profiler){:target="_blank"} helps you locate and investigate performance issues in your environment at the code-level. it creates a performance profile by tracking every PHP call and method and SQL queries performed by your code. Blackfire digs deeper providing granular performance analytics. You can activate and use Blackfire Profiler in all of your environments, especially helpful in Staging and Production.

This information helps you get Blackfire installed on your local, integrated into Integration, and running your first profile.

For full details on integrations, also review [Blackfire’s complete Magento Commerce (Cloud)](https://support.blackfire.io/blackfire-on-magento-cloud){:target="_blank"} guide. They also include a number of [incredible resources](#resources) to get you started.

Blackfire includes the following [environments](https://blackfire.io/docs/reference-guide/environments){:target="_blank"} through their site:

* `Magento Cloud (<your instance reference>)` - Integration and Development
* `Magento Cloud (<your instance reference>)` - Staging
* `Magento Cloud (<your instance reference>)` - Production

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For Pro plans, you need to enter a Support ticket with your Blackfire credentials to get Staging and Production configured with Blackfire. We'll help you get Blackfire configured in those environments.
</div>

## Get your Blackfire credentials {#cloud-int-black}
The Project Owner is the account owner. This account's e-mail address is used as part of the credentials for access to Blackfire for your project. Only the Project Owner credentials can be used to integrate Blackfire with {{site.data.var.ece}} and to log into the Blackfire site. An invitation email is sent to the Project Owner's e-mail address to complete activation.

For information on setting up the account on Blackfire, see [Accessing your Blackfire account as a Magento Cloud user](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-1-accessing-your-blackfire-account-as-a-magento-cloud-user){:target="_blank"}. You can also access your Blackfire license key through [project details]({{ page.baseurl }}/cloud/project/projects.html#integrations).

## Add collaborator accounts {#collaborators}
After you have accessed your Blackfire account, you can [add additional collaborator accounts](http://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-2-adding-collaborators-to-the-blackfire-environments){:target="_blank"}.

We recommend adding at least one account through Blackfire to manage all access, integrations, and usage of the tool. We also recommend promoting one of the added members to Admin, to manage all Blackfire access and integrations.

1. Using the Project Owner Blackfire credentials, log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select an environment.
3. Select the Settings tab.
4. Enter an e-mail address and click Add Member.
5. For one account, click the menu by Revoke and select **Promote as an admin**.

	![Promote an admin]({{ site.baseurl }}/common/images/cloud_blackfire-member.png)

## Enable Blackfire on your local {#cloud-int-black-en}
You need to install and configure Blackfire on your local workspace with your working {{site.data.var.ece}} installation. You don't need to run these installations directly on the hosted environments, only on your local.

We recommend using their installation guide to walk you through the process:

1. Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select the Integration environment in the **Current Environment** list.
3. Select the Settings tab.
4. Scroll to the bottom and locate the Server ID and Server Token for the environment. You will need these values for the instructions.
5. Open [this guide](https://blackfire.io/docs/up-and-running/installation){:target="_blank"}, select the Operating System, and follow the instructions.

## Integrate Blackfire in Integration {#dev}
We recommend enabling Blackfire in all of your environments including Integration. To integrate, you begin in the Blackfire site. For full details, see [their guide.](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-3-configure-the-server-credentials-the-integration-with-magento-cloud){:target="_blank"}. You can integrate with Pro's Integration environment and Starter's development branches.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For Starter plans, pushing your code and `.magento.app.yaml` file to Staging and Master branches updates those environments directly. You can directly add Blackfire to those environments the way you do with development.
</div>

These instructions assume you have fully set up your [local workspace]({{ page.baseurl }}/cloud/before/before-workspace.html).

1. Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
2. Select the Integration and Development environment in the **Current Environment** list.
3. Select the Builds tab. In the Builds side panel, click the info icon next to Magento Cloud. This opens a list of commands you will need to execute in order to enable the Blackfire integration.

	![Click info icon]({{ site.baseurl }}/common/images/cloud_blackfire-builds.png)

	A page like the following opens with additional steps to complete the integration. The marked out content is your Project ID.

	![Blackfire Magento Cloud integration]({{ site.baseurl }}/common/images/cloud_blackfire-integration.png)

The following sections include instructions for completing this list of integration tasks. You can keep this page open to follow and copy information directly.

* [Add Blackfire to .magento.app.yaml](#magentoappyaml)
* [Add project variables](#variables)
* [Add Blackfire integration to the project](#integration)
* [Add a default route](#route)
* [Save changes in Blackfire](#save)

### Add Blackfire to .magento.app.yaml {#magentoappyaml}
By default, the Blackfire module is included in the `.magento.app.yaml` file as part of your Git branch.

The following instructions provide additional instructions if the module is not added to `.magento.app.yaml`. To enable and integrate Blackfire into your code, you will modify the `.magento.app.yaml` file, push the file into your remote Git branch, merge, and deploy across all environments.

* For Starter, merging your Git branch across all environments adds the module.
* For Pro, you need to enter a Support ticket to have `.magento.app.yaml` updated to Staging and Production.

We recommend working in a branch and creating a snapshot prior to installing. If you have a branch already created, you can skip down to the steps for modifying the `.magento.app.yaml` file. If you need instructions creating a branch, complete the following:

1.  Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1.  List projects:

	```bash
	magento-cloud project:list
	```

1.  List environments in the project:

	```bash
	magento-cloud environment:list -p <project ID>
	```

1.  See what branch you're currently on, if any.

	```bash
	git branch
	```

1.  If necessary, check out an existing branch:

	```bash
	magento-cloud environment:checkout <environment ID>
	```

	You can also create a new branch using the `magento-cloud environment:branch` command.
1.  Back up the environment using a snapshot:

	```bash
	magento-cloud snapshot:create -e <environment ID>
	```

Next, modify the `.magento.app.yaml` file:

1.	Use a text editor to locate and edit `<project root dir>/.magento.app.yaml` in your branch.
2.	Enter `- name: blackfire` in the `extensions` block under `runtime`.

	```yaml
	runtime:
		extensions:
		- mcrypt
		- redis
		- xsl
		- json
		- blackfire
	```
3.	Save your changes to `.magento.app.yaml` and exit the text editor.
4.	Add, commit, and push your changes to the environment:

	```bash
	git add -A
	git commit -m "<message>"
	git push origin
	```

	If errors display during deployment, open `.magento.app.yaml` and check the syntax. Check indentation and spelling and try again.

### Add project variables {#variables}
Add project variables for Blackfire for the server ID and token. You can add these using the Magento Cloud CLI or the Project Web Interface. The following instructions walk through adding them using CLI commands.

1.  Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1.  Copy the commands from step 3 on the Blackfire Magento Cloud integration page.
1.  Paste and enter the commands in the Magento Cloud CLI. Since you are already in your project, remove the `--project='<Project ID>'` content from the command. The commands include the Project ID and Blackfire server ID and token. The commands may look like the following:

	```bash
	magento-cloud project:variable:set env:BLACKFIRE_SERVER_ID <Blackfire Server ID>
	magento-cloud project:variable:set env:BLACKFIRE_SERVER_TOKEN <Blackfire Server Token>
	```

### Add Blackfire integration to the project {#integration}
Using the Magento Cloud CLI, you will enter an integration command to connect Blackfire with the project. This command requires using an account with super user access. Make sure your Cloud Project account has the [super user option]({{ page.baseurl }}/cloud/project/user-admin.html#cloud-user-webinterface) in the Project through the Project Web Interface.

1.  Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1. Copy and enter the integration commands from the Blackfire Magento Cloud integration page.

	```bash
	magento-cloud integration:add \
	--project='<Project ID>' \
	--type=webhook \
	--url='<Blackfire provided URL>'
	```

1. A series of requests display for the command. To accept default values, hit enter for the questions. If you receive a permission error, make sure you have super user access for the {{site.data.var.ece}} project. Either request your permission be upgraded or have someone else who is an admin run this command.

### Add a default route {#route}
If you do not have a default route specified in `routes.yaml`, or want to define which route to use instead of the default route, you will add it to Blackfire and `routes.yaml`.

Add route information on the Blackfire Magento Cloud integration page:

1. Locate step 5 and enter the default route. It should look like `https://example.com/` or `http://*.{default}/`. If you leave this field blank, we will try the following keys in this order: `https://{default}/`, `https://www.{default}/`, `http://{default}/`, `http://www.{default}/`.
2. If you use a wildcard `*` in step 5 for the default rote, you need to enter a resolved value for the `*` value in step 6. Otherwise, leave step 6 empty. For example, if you specified the route key `https://*.{default}` in step 5, you would need you to specify a route placeholder in step 6.

If adding a route to Blackfire, make sure to add the default route to `routes.yaml`:

1.	Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1.	List projects:

	```bash
	magento-cloud project:list
	```

1.	List environments in the project:

	```bash
	magento-cloud environment:list -p <project ID>
	```

1.	See what branch you're currently in, if any.

	```bash
	git branch
	```

1.	If necessary, check out an existing branch:

	```bash
	magento-cloud environment:checkout <environment ID>
	```

	You can also create a new branch using the `magento-cloud environment:branch` command.

1.	Back up the environment using a snapshot:

	```bash
	magento-cloud snapshot:create -e <environment ID>
	```

1.	Use a text editor to locate and edit `<project root dir>/magento/routes.yaml` in your branch.
1.	Add the route the file. For details, see [`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html). Here's an example:

	```yaml
	"http://{default}/":
	type: upstream
	upstream: "blackfire:php"
	```

1.	Save your changes to `routes.yaml` and exit the text editor. It should look like `https://example.com/` or `http://*.{default}/`.
If you leave this field blank, we will try the following keys in this order: `https://{default}/`, `https://www.{default}/`, `http://{default}/`, `http://www.{default}/`.
1.	Add, commit, and push your changes to the environment:

	```bash
	git add -A
	git commit -m "<message>"
	git push origin
	```

	If errors display during deployment, open `routes.yaml` and check the syntax. Check indentation and spelling and try again.

### Save changes in Blackfire {#save}
With all integrations entered on the Blackfire Magento Cloud integration page, click Save. All integration settings save to your Blackfire account with saved integrations and connections with changes entered to your {{site.data.var.ece}} project. Continue to the next section to begin profiling your store to verify the integration.

## Profile your store {#profile}
To verify Blackfire works, you have a couple options: a browser extension or using the CLI. For extensive CLI profiling options and better understanding the profiles, see [Blackfire's resources](#resources).

<div class="bs-callout bs-callout-info" markdown="1">
You can only use the CLI in your local development environment.
</div>

To profile using the browser:

1. Install the Blackfire browser extension in [Chrome](https://blackfire.io/docs/integrations/chrome#installing-the-companion){:target="_blank"} or [Firefox](https://blackfire.io/docs/integrations/firefox#installing-the-companion){:target="_blank"}. A new Blackfire icon displays in your browser next to the address location. If you don't see it, you may need to display the bar.
2. Visit the store or site URL for your specific environment. For example, access the URL for your Integration environment. If you need this URL, you can find it through the Project Web Site. Select the environment branch and copy the link from the Access section.
3. Click the Blackfire icon to profile. For Compare with, select No Reference.

	![Start profiling]({{ site.baseurl }}/common/images/cloud_blackfire.png)
4. Click **Profile** to start.

To profile using the CLI:

1.  Open a terminal.
1.  [Checkout a branch]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html#branch) in your local environment.
1.	Run the profiler:

	```bash
	php --ri blackfire
	```

	A sample result follows:

	```bash
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
	```

## Blackfire resources {#resources}
Blackfire provides great information to better profile and investigate the results on their documentation site. Check out some resources:

*	[Profiling HTTP requests](https://blackfire.io/docs/cookbooks/profiling-http){:target="_blank"}
*	[Profiling CLI commands](https://blackfire.io/docs/cookbooks/profiling-cli){:target="_blank"}
*	[Writing Tests](https://blackfire.io/docs/cookbooks/tests){:target="_blank"}
*	[Writing scenarios](https://blackfire.io/docs/cookbooks/scenarios){:target="_blank"}
*	[Reference Guide](https://blackfire.io/docs/reference-guide/index){:target="_blank"} to really understand what you profile
