---
layout: default
group: cloud
title: Blackfire.io for Magento Cloud
version: 2.1
github_link: cloud/project/project-integrate-blackfire.md
functional_areas:
  - Cloud
  - Integration
  - Setup
  - Services
---

[Blackfire.io for Magento Cloud](https://blackfire.io/magento){:target="_blank"} is a PHP profiler and automated performance testing tool that can be used in the development Integration, Staging, and Production environments. It enables you to locate and investigate performance issues in your environment at the code level and creates a performance profile by tracking every PHP call, method, and SQL query performed by your code. Blackfire digs deeper to provide granular performance analytics.

In addition, it profiles your code automatically and notifies you whenever your code does not comply with best practices for Magento 2 code performance management. For a high level overview and demo of Blackfire, review the videos in the [Introduction to Blackfire.io for Magento Cloud](https://support.blackfire.io/blackfire-on-magento-cloud/introduction-to-blackfireio-on-magento-cloud){:target="_blank"}.

For full details on integrations, also review [Configuring Blackfire on Magento Cloud](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/configuring-blackfire-on-magento-cloud){:target="_blank"}.

Blackfire includes the following [environments](https://blackfire.io/docs/reference-guide/environments){:target="_blank"} through their site:

-  `Magento Cloud (<your instance reference>)`—Integration and Development
-  `Magento Cloud (<your instance reference>)`—Staging
-  `Magento Cloud (<your instance reference>)`—Production

{% include note.html type="info" content="For Pro, you must enter a Support ticket with your Blackfire credentials to configure your Staging and Production environments with Blackfire." %}

## Get your Blackfire credentials
The Project Owner is the account owner, and their e-mail address is part of the credentials required for accessing Blackfire for your project. You can only use the Project Owner credentials to integrate Blackfire with {{site.data.var.ece}} and to log in to the Blackfire website. An invitation email is sent to the Project Owner's e-mail address to complete activation.

For information on setting up an account on Blackfire, see [Accessing your Blackfire account as a Magento Cloud user](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-1-accessing-your-blackfire-account-as-a-magento-cloud-user){:target="_blank"}. You can access your Blackfire license key through [project details]({{page.baseurl}}/cloud/project/projects.html#integrations).

## Add collaborator accounts {#collaborators}
After you access your Blackfire account, you can [add additional collaborator accounts](http://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-2-adding-collaborators-to-the-blackfire-environments){:target="_blank"}.

We recommend adding at least one account through Blackfire to manage all access, integrations, and usage of the tool. We also recommend promoting one of the added members to Admin, to manage all Blackfire access and integrations.

1.  Using your Project Owner Blackfire credentials, log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
1.  Navigate to the _Environments_ tab and select an environment.
1.  Click the **Settings** tab.
1.  Enter an e-mail address and click **Add Member**.
1.  In the _Revoke_ drop-down list of an account, click **Promote as an admin**.

	![Promote an admin]({{ site.baseurl}}/common/images/cloud_blackfire-member.png)

## Enable Blackfire on local workspace
You need to install and configure Blackfire on your local workspace with your working {{site.data.var.ece}} installation. You do _not_ need to run these installations directly on the hosted environments; only on your local.

We recommend using the Blackfire installation guide to walk you through the process:

1.  Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
1.  Navigate to the _Environments_ tab and select the **Integration** environment.
1.  Click the **Settings** tab.
1.  Scroll to the bottom and locate the _Server ID_ and _Server Token_ for the environment. You need these values for the instructions.
1.  Open the [Blackfire installation guide](https://blackfire.io/docs/up-and-running/installation){:target="_blank"}, select the Operating System, and follow the instructions.

## Integrate Blackfire {#dev}
We recommend enabling Blackfire in all of your active environments, including the Integration environment. See [Configure the server credentials & the integration with Magento Cloud](https://support.blackfire.io/blackfire-on-magento-cloud/getting-started/step-3-configure-the-server-credentials-the-integration-with-magento-cloud){:target="_blank"}. You can integrate with the Pro Integration environment and Starter development branches.

{% include note.html type="info" content="For Starter plans, pushing your code and `.magento.app.yaml` file to the Staging and Master branches updates those environments directly. You can directly add Blackfire to those environments the way you do with development." %}

These instructions assume you have set up your [local workspace]({{page.baseurl}}/cloud/before/before-workspace.html).

1.  Log in to [Blackfire](https://blackfire.io/login){:target="_blank"}.
1.  Navigate to the _Environments_ tab and select the **Integration** environment.
1.  Click the **Builds** tab.
1.  Click the info icon next to Magento Cloud.

	![Click info icon]({{ site.baseurl}}/common/images/cloud_blackfire-builds.png)

1.  In the _Magento Cloud Integration_ page, follow the additional steps to complete the integration. The redacted content is the **Project ID**.

	![Blackfire Magento Cloud integration]({{ site.baseurl}}/common/images/cloud_blackfire-integration.png)

The following sections include instructions for completing this list of integration tasks.

-  [Add Blackfire to .magento.app.yaml](#magentoappyaml)
-  [Add project variables](#variables)
-  [Add Blackfire integration to the project](#integration)
-  [Add a default route](#route)
-  [Save changes in Blackfire](#save)

### Add Blackfire to .magento.app.yaml {#magentoappyaml}
By default, the `.magento.app.yaml` file includes the Blackfire module. If the module is not present, use the following instructions to update your `.magento.app.yaml` file, push the updated file to your remote branch, merge, and deploy across all environments.

-  For Starter, merging your Git branch across all environments adds the module.
-  For Pro (legacy), you need to enter a Support ticket to have `.magento.app.yaml` updated to Staging and Production.

We recommend working in a branch and creating a snapshot prior to installing. If you have a branch already created, you can skip down to the steps for modifying the `.magento.app.yaml` file. If you need instructions creating a branch, complete the following:

1.  Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1.  List projects.

	```bash
	magento-cloud project:list
	```

1.  List environments in the project.

	```bash
	magento-cloud environment:list -p <project_ID>
	```

1.  Verify current branch.

	```bash
	git branch
	```

1.  If necessary, check out an existing branch.

	```bash
	magento-cloud environment:checkout <environment_ID>
	```

	You can also create a new branch using the `magento-cloud environment:branch` command.
1.  Back up the environment using a snapshot.

	```bash
	magento-cloud snapshot:create -e <environment_ID>
	```

#### Next, modify the `.magento.app.yaml` file:

1.  Use a text editor to locate and edit `<project root dir>/.magento.app.yaml` in your branch.
1.  Enter `- name: blackfire` in the `extensions` block under `runtime`.

    ```
	# .magento.app.yaml
	runtime:
		extensions:
		- mcrypt
		- redis
		- xsl
		- json
		- blackfire
	```
1.  Save your changes to `.magento.app.yaml` and exit the text editor.
1.  Add, commit, and push your changes to the environment.

    ```bash
	git add -A
	git commit -m "<message>"
	git push origin
	```

	If errors display during deployment, open the `.magento.app.yaml` file and check the syntax, such as indentation and spelling, and try again.

### Add project variables {#variables}
Add project variables for Blackfire for the server ID and token. You can add these using the Magento Cloud CLI or the Project Web Interface. The following instructions walk through adding them using CLI commands.

1.  Open a terminal and navigate to your {{site.data.var.ece}} project.
1.  Copy the commands from step 3 on the Blackfire _Magento Cloud Integration_ page.
1.  Paste and enter the commands in the Magento Cloud CLI. Since you are already in your project, remove the `--project='<Project ID>'` content from the command. The commands include the Project ID and Blackfire server ID and token, similar to the following:

    ```bash
    magento-cloud project:variable:set env:BLACKFIRE_SERVER_ID <Blackfire Server ID>
    ```

    ```bash
    magento-cloud project:variable:set env:BLACKFIRE_SERVER_TOKEN <Blackfire Server Token>
	```

### Add Blackfire integration to the project {#integration}
Using the Magento Cloud CLI, you will enter an integration command to connect Blackfire with the project. This command requires using an account with super user access. Make sure your Cloud Project account has the [super user option]({{page.baseurl}}/cloud/project/user-admin.html#cloud-user-webinterface) in the Project through the Project Web Interface.

1.  Open a terminal and navigate to your {{site.data.var.ece}} project.
1.  Copy and enter the integration commands from the Blackfire _Magento Cloud Integration_ page.

	```bash
	magento-cloud integration:add \
	--project='<Project ID>' \
	--type=webhook \
	--url='<Blackfire provided URL>'
	```

1.  A series of requests display for the command. To accept default values, hit enter for the questions. If you receive a permission error, make sure you have super user access for the {{site.data.var.ece}} project. Either request your permission be upgraded or have someone else who is an admin run this command.

### Add a default route {#route}
If you do not have a default route specified in the `routes.yaml` file, or want to define which route to use instead of the default route, add it to Blackfire and `routes.yaml`.

#### To add route information on the Blackfire _Magento Cloud Integration_ page:

1.  Locate step 5 and enter the default route. It should look like `https://example.com/` or `http://*.{default}/`. If you leave this field blank, we will try the following keys in this order: `https://{default}/`, `https://www.{default}/`, `http://{default}/`, `http://www.{default}/`.
1.  If you use a wildcard `*` in step 5 for the default route, you need to enter a resolved value for the `*` value in step 6. Otherwise, leave step 6 empty. For example, if you specified the route key `https://*.{default}` in step 5, you need to specify a route placeholder in step 6.

#### To add the default route to `routes.yaml`:

1.  Log in to your {{site.data.var.ece}} project.

	```bash
	magento-cloud login
	```

1.  List projects.

	```bash
	magento-cloud project:list
	```

1.  List environments in the project.

	```bash
	magento-cloud environment:list -p <project_ID>
	```

1.  Verify current branch.

	```bash
	git branch
	```

1.  If necessary, check out an existing branch.

	```bash
	magento-cloud environment:checkout <environment_ID>
	```

1.  Back up the environment using a snapshot.

	```bash
	magento-cloud snapshot:create -e <environment_ID>
	```

1.  Use a text editor to locate and edit `<project root dir>/magento/routes.yaml` in your branch.
1.  Add the route the file. See [Configure routes]({{page.baseurl}}/cloud/project/project-conf-files_routes.html).

	```
	"http://{default}/":
	type: upstream
	upstream: "blackfire:php"
	```

1.  Save your changes to `routes.yaml` and exit the text editor. It should look like `https://example.com/` or `http://*.{default}/`.
    If you leave this field blank, we try the following keys in this order: `https://{default}/`, `https://www.{default}/`, `http://{default}/`, `http://www.{default}/`.
1.  Add, commit, and push your changes to the environment.

	```bash
	git add -A
	git commit -m "<message>"
	git push origin
	```

	If errors display during deployment, open `routes.yaml` and check the syntax. Check indentation and spelling and try again.

### Save changes in Blackfire {#save}
With all integrations entered on the Blackfire Magento Cloud integration page, click Save. All integration settings save to your Blackfire account with saved integrations and connections with changes entered to your {{site.data.var.ece}} project. Continue to the next section to begin profiling your store to verify the integration.

## Profile your store {#profile}
You can verify that Blackfire works using a browser extension or the CLI. For extensive CLI profiling options and better understanding the profiles, see [Blackfire resources](#blackfire-resources).

{% include note.html type="info" content="You can only use the CLI in your local development environment." %}

#### To profile using the browser:

1.  Install the Blackfire browser extension in [Chrome](https://blackfire.io/docs/integrations/chrome#installing-the-companion){:target="_blank"} or [Firefox](https://blackfire.io/docs/integrations/firefox#installing-the-companion){:target="_blank"}. A Blackfire icon displays in your browser next to the address location. If you do not see it, you may need to display the bar.
1.  Visit the store or site URL for your specific environment, such as the URL for your Integration environment. If you need this URL, you can find it through the Project Web Interface. Select the environment branch and copy the link from the _Access_ section.
1.  Click the Blackfire icon.

	![Start profiling]({{ site.baseurl}}/common/images/cloud_blackfire.png)

1.  Click **Profile** to start.

    Note: The browser extension also enables you to profile all requests while you browse. For more information about this, see [Blackfire resources](#blackfire-resources).

#### To profile using the CLI:

1.  Open a terminal and navigate to your {{site.data.var.ece}} project.
1.  Checkout an active Integration branch.
1.  Run the profiler.

    ```
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

## Automate performance testing
After completing the [Blackfire Integration](#dev), you can define events for the Staging and Production environments that enable Blackfire to execute polling requests automatically. An event example is whenever a commit deploys in the Integration environment, or when activating the integration between Blackfire and New Relic.

By simply defining a set of key requests for Blackfire to profile— `/home`, `/checkout`, `/checkout/payment`—Blackfire can notify you if your code complies with established [code performance recommendations](https://blackfire.io/docs/reference-guide/recommendations){:target="_blank"}. The following is a sample build report with recommendations:

![Blackfire build report]({{ site.baseurl}}/common/images/cloud_blackfire-recommendations.png)

### Writing your first automated tests and scenarios
You can easily write tests and scenarios for Blackfire to execute. Create a `.blackfire.yml` file and store it at your project root directory.

Try adding the following scenarios in the file:

```
    # .blackfire.yml
    scenarios:
        Home:
            - /index.php

        Product list:
            - /index.php/women/tops-women/jackets-women.html

        Checkout:
            - /index.php/checkout

        Payment:
            - /index.php/checkout/payment
```

See the Blackfire documentation on how to write [tests](https://blackfire.io/docs/cookbooks/tests) and [scenarios](https://blackfire.io/docs/cookbooks/scenarios).

### Running your tests automatically
Once you create and deploy your `.blackfire.yml` file, you can enable Blackfire to run your tests automatically in various ways:

-  **Automated builds on Integration**—Whenever you push code on an Integration branch, Blackfire automatically runs your tests. You can receive a notification of the results in various ways, such as a commit status level when using GitHub or Bitbucket. See Blackfire notifications.
-   **Automated builds using a webhook**—Blackfire offers a very flexible way to start builds using a webhook, which can target any endpoint. See [Start building a webhook](https://blackfire.io/docs/reference-guide/builds-and-integrations#start-build-using-a-webhook){:target="_blank"}.
-   **Automated builds with the Blackfire/New Relic integration**—Blackfire and New Relic are very complementary. New Relic monitors the overall traffic performance, and Blackfire profiles much deeper into the PHP code. See [What is the difference between Blackfire and New Relic](https://support.blackfire.io/questions-about-blackfire/what-is-blackfire/what-is-the-difference-between-blackfire-and-new-relic-and-other-apms){:target="_blank"}. You can configure New Relic to fire Blackfire builds whenever relevant. See [New Relic](https://blackfire.io/docs/integrations/new-relic){:target="_blank"}.

### Blackfire notifications
When you configure at least one way of triggering builds with Blackfire, you can be notified whenever a build report is available. Blackfire supports an integration with Slack, GitHub, BitBucket, email, and more. See [Scenario notification channels](https://blackfire.io/docs/reference-guide/notification-channels){:target="_blank"}.

## Blackfire resources
Blackfire provides great information to better profile and investigate the results on their documentation site:

-   [Profiling HTTP requests](https://blackfire.io/docs/cookbooks/profiling-http){:target="_blank"}
-   [Profiling CLI commands](https://blackfire.io/docs/cookbooks/profiling-cli){:target="_blank"}
-   [Profile all requests while you browse](https://blog.blackfire.io/profile-all-requests.html){:target="_blank"}
-   [Writing Tests](https://blackfire.io/docs/cookbooks/tests){:target="_blank"}
-   [Writing scenarios](https://blackfire.io/docs/cookbooks/scenarios){:target="_blank"}
-   [Reference Guide](https://blackfire.io/docs/reference-guide/index){:target="_blank"}
