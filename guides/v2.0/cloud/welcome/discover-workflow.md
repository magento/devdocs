---
layout: default
group: cloud
subgroup: 010_welcome
title: Pro develop and deploy workflow
menu_title: Pro develop and deploy workflow
menu_order: 35
menu_node:
version: 2.0
github_link: cloud/welcome/discover-workflow.md
---

Everything in {{site.data.var.ece}} is Git-driven. Your [project]({{ page.baseurl }}cloud/project/projects.html) is a Master Git branch cloned from a Magento 2 repository. Every active Git branch has an associated full environment. Depending on your {{site.data.var.ece}} plan subscription, your deployment workflow may differ.

The general workflow for all development and deployment includes:

* Push code to the remote Git branch
* Build and deploy processes run
* The environments updated with code, services, and configurations

The Pro plan gives you a large Integration environment for your development across eight active branches, a Staging environment, and a Production environment. For full details, see [Pro architecture]({{ page.baseurl }}cloud/reference/discover-arch.html).

The following figure shows how it works at a high level:

![High-level view of Pro architecture flow]({{ site.baseurl }}common/images/cloud_pro-branch-architecture.png)

You can manage all of Integration environments directly through the [Project Web Interface]({{ page.baseurl }}cloud/project/project-webint-basic.html). Access and manage all Integration, Staging, and Production environments  through the store and Admin panel using provided URLs and using SSH and the [Magento Cloud command-line]({{ page.baseurl }}cloud/reference/cli-ref-topic.html).

### Pro environments and branches {#env-branches}
For your environments, we recommend deploying and testing following a Development > Staging > Production workflow. The Integration environment acts as your extensive testing area for custom code, extensions, and 3rd party integrations. Deploying and testing in Staging gives you near-Production features and additional services including Fastly. Integration and Staging environments are only accessible by user accounts with strict access via SSH and URLs. These enviornments are not public facing. Finally, Production is your live, public environment.

For your branches, you can follow any methodology. One example follows an agile methodology such as scrum to create [branches for every sprint]({{page.baseurl}}cloud/env/environments.html#cloud-env-work).

From each sprint, you can have branches for every user story. All the stories become testable. You can continually merge to the sprint branch and validate that on a continuous basis. When the sprint ends, there is no testing bottleneck, and you can just merge to master and put the whole sprint into production.

For detailed information, see [Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html).

## Development workflow {#development}
Development and deployment on Pro plans begins with your initial project. You create your project with the "blank site", which is a {{site.data.var.ece}} template code repo with a fully prepared store. This creates a `master` branch of Git code in your Integration environment.

The full process involves:

* [Clone and branch](#clone-branch) from Master to local for development
* [Develop code](#dev-code) and install extensions locally in a branch
* [Configure](#configure-store) your store settings
* [Generate configuration](#config-management) management files
* [Push code](#push-code) and configuration to build and deploy to an Integration environment

![Develop and deploy workflow]({{ site.baseurl }}common/images/cloud_workflow-pro.png)

You also have a few optional steps to help develop and test your code and store data:

* [Install sample data](#sample-data) to your store
* [Pull production store data](#prod-data) down to environments

This process assumes you would have your [local developer workspace]({{page.baseurl}}cloud/access-acct/first-time-setup.html) set up. Feel free to read over this process even if your local isn't ready.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The following information assumes you have provisioned Staging and Production environments.
</div>

### Clone and branch {#clone-branch}
When you created your project, a `master` branch was cloned using the {{site.data.var.ece}} Git repository. To start branching and working with code, you will need to clone the `master` to your local.

The format of the Git clone command is:

    git fetch magento
    git pull magento <environment ID>

You can create a developer branch from `master`, which is an active branch in Integration. Anytime you need to develop custom code, add extensions, integrate with a 3rd party service, work in a develop branch. You will have up to seven active Git branches available. When you create and push your branch, a full environment is automatically available to test your code.

When you [set up your local]({{page.baseurl}}cloud/access-acct/first-time-setup.html) developer environment, we walk-through the software and tools you should install, including Git and the Magento Cloud CLI (a bit more robust than Git).

The format of the Git branch command is:

    git checkout <branch name>

The format of the Magento Cloud CLI branch command is:

    magento-cloud environment:branch <environment name> <parent environment ID>


![Branch from Master]({{ site.baseurl }}common/images/cloud_workflow-pro-branching.png)

### Develop code {#dev-code}
It's the time you have been waiting for...writing code. Using this base branch of {{site.data.var.ece}} code, you can start installing extensions, configuring extension settings and your store options, creating multi-sites and stores, adding themes, and much more.

We recommend using a branching strategy with your development work. Using one branch to do all of your work all at once might make testing difficult. For example, you could follow continuous integration and sprint methodologies to work:

* Add a few extensions and configure them with your first branch
* Push this code, test, and merge to Staging then Production
* Fully configure your store, services in `services.yaml`, and add a theme
* Push this code, test, and merge to Staging then Production
* Integrate with a 3rd party service
* Push this code, test, and merge to Staging then Production

And so on until you have your store fully built, configured, and ready to go live. But keep reading, we have even better options for your store and code configuration!

![Develop code and push to deploy]({{ site.baseurl }}common/images/cloud_workflow-pro-push-code.png)

### Configure store {#configure-store}
At any time, you should start configuring your store. For the best information on configurations, we recommend reviewing {{site.data.var.<ee>}} and your extension documentation. Here are some links and ideas to help you get kickstarted:

* [Basic configuration](http://docs.magento.com/m2/ee/user_guide/configuration/configuration-basic.html){:target="_blank"} for store admin access, name, languages, currencies, branding, sites, store views and more
* [Theme](http://docs.magento.com/m2/ee/user_guide/design/design-theme.html){:target="_blank"} for your look and feel of the site and stores including CSS and layouts
* [System configuration](http://docs.magento.com/m2/ee/user_guide/system/system.html){:target="_blank"} for roles, tools, notifications, and your encryption key for your database
* Extension settings using their documentation

Beyond just store settings, you can further configure multiple sites and stores, configured services, and more. For details, see [Configure Magento Commerce]({{ page.baseurl }}cloud/configure/configuration-overview.html).

Now you need to get these settings into your code. We have a helpful command to do this, keep reading.

### Generate configuration management files {#config-management}
If you are familiar with Magento, you may be concerned about how to get your configuration settings from your database in development to Staging and Production. Previously, you had to copy down on paper or Excel all of your configuration settings to enter them manually in another environment. Or you may have dumped your database and push that data to another environment.

{{site.data.var.ece}} provides a set of two [Configuration Management]({{ page.baseurl }}cloud/live/sens-data-over.html) commands that export configuration settings from your environment into a file. These commands are only available for {{site.data.var.ece}} 2.1.4 and later.

* `php bin/magento magento-cloud:scd-dump`: Recommended. Exports only the configuration settings you have entered or modified from defaults into a configuration file.
* `php bin/magento app:config:dump`: Exports every configuration setting, including modified and default, into a configuration file.

The generated file is located in `app/etc/`:

* For 2.1.4 and later: `config.app.php`
* For 2.2 and later: `config.php`

You will add this file to your branch repository and include it with every push. We provide details on how to manage this file and setting.

**Important notes** on Configuration Management:

* Any configuration setting included in the file is locked from editing, or read-only, in the deployed environment. This is one reason we recommend using scd-dump.

  For example, we will have you install a module for Fastly in your development environment. You will only configure this module in Staging and Production. Using `scd-dump` keeps those default fields editable.
* This file can be long depending on the size of your deployment. The `scd-dump` command generates a far small file than `app:config:dump`.

![Generate configuration management file]({{ site.baseurl }}common/images/cloud_workflow-pro-config-mgmt.png)

An additional feature of this command is part of {{site.data.var.ece}} 2.2. Any values determined to be sensitive data, like sandbox credentials for a PayPal module, will be generated into another configuration file called `env.php` in `app/etc/`. This file remains in the exact environment it is created without traveling with your code. You will not add this file to your code repository.

![Environment variables generate]({{ site.baseurl }}common/images/cloud_workflow-pro-env-variables.png)

### Push code and test {#push-code}
At this point, you should have a developed code branch with a configuration file (`config.app.php` or `config.php`) ready to push and test.

Everytime you push code from your local environment, a series of build and deploy scripts run. These scripts generate new Magento code and deploys it to the remote environment. For example, if you are pushing a development branch from your local to the remote Git branch, a matching environment updates services, code, and static content.

You can directly access this environment with a store URL, Magento Admin URL, and SSH to enter any needed CLI commands. These environments include a web server, database, and configured services.

For more information, see [Deployment workflow](#deploy).

### Optional: Install sample data {#sample-data}
If you need some example data when developing your store, you can install our sample data. This data simulates an active Magento store, including customers, products, and other data. This sample data works best with a "blank site" {{site.data.var.ece}} template installation when creating your project.

We recommend installing sample data in your local Integration and development branches and environments. If you use this data in Staging or Production, make sure to clear out the information and products before going live.

For instructions, see [Install optional sample data]({{page.baseurl}}cloud/howtos/sample-data.html).

![Install optional sample data]({{ site.baseurl }}common/images/cloud_workflow-sample-data.png)

### Optional: Pull production data {#prod-data}
We recommend adding all of your products, catalogs, site content, and so on (not configurations) directly in Production. Why in Production? By adding this data in Production, you immediately update prices, coupons, inventory stock, strategize your sales and future offerings, and much more for your customers. This data does not include extension configurations. You will set those in your development branch on your local.

As you develop features, add extensions, and design themes, having real data to work with is helpful. At any time, you can create a database dump from Production and push that to your Staging environment, and other development environments as you like.

To learn more about database dumps, see [Snapshots and Backup management]({{page.baseurl}}cloud/project/project-webint-snap.html#db-dump).

![Pull and sanitize production data]({{ site.baseurl }}common/images/cloud_workflow-pro-data-code-process.png)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Prior to pushing the data to another environment, you should consider sanitizing your data. You have a couple of options including how you dump your database or developing a script to scrub out customer data.
</div>

<div class="bs-callout bs-callout-warning" markdown="1">
Important: We don't recommend pushing a database from a development or Staging environment. This data will overwrite your Production, live data including sales, orders, new and updated customers, and much more.
</div>

## Deployment workflow {#deploy}
As we detailed in the architecture information, {{site.data.var.ece}} is Git driven. Deploying {{site.data.var.ece}} is part of your Git push processes for branches.

When you push branched code from your local to the remote Git branch, a series of build and deploy scripts begin.

Build scripts:

* Your site on the target environment continue running during a build
* Check and run {{site.data.var.ece}} patches and hotfixes
* Compile your code with a build and deploy log
* Check for Configuration Management, if there static content deploy occurs during this phase
* Create or use a slug of unchanged code to speed up the process
* Provision all backend services and applications

Deploy scripts:

* Puts your site on the target environment in Maintenance mode
* Deploys static content if not completed during Build
* Installs or updates {{site.data.var.ece}}
* Configure routing for traffic

When fully completed, your store comes back online, live, with all of your updated code and configurations.

To learn more, see [Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html).

### Push to Staging and test {#staging}
You should always push all of your code in iterations to your Staging environment for full testing. The first time you use this environment, you will need to configure a few services including [Fastly]({{page.baseurl}}cloud/basic-information/cloud-fastly.html), [Blackfire Profiler]({{page.baseurl}}cloud/project/project-integrate-blackfire.html), and [New Relic APM]({{page.baseurl}}cloud/project/new-relic.html). We also recommend configuring payment gateways, shipping, notifications, and other vital services with sandbox or testing credentials.

Staging is a pre-production environment, providing all services and settings as close to Production as possible. Thoroughly test every service, verify your performance testing tools, perform UAT testing as an administrator and customers, until you feel your store is ready for Production.

To learn more, see [Deploy your store]({{page.baseurl}}cloud/live/stage-prod-live.html).

### Push to Master / Production {#pro}
When ready to start launching or to push iterations of code live, push to Production. Treat configuration and testing of Production much as your Staging environment. The important difference in this environment is using live credentials. The moment you go live and launch, customers must be able to complete purchases and administrators should be able to manage your live store.

To learn more, see [Deploy your store]({{page.baseurl}}cloud/live/stage-prod-live.html).

### Go live {#go-live}
We provide a clear walk-through for going live and launching. It requires more steps than pressing a button. But when complete, your store can serve up products in your customized theme for sale immediately.

To learn more, check out [Go live and launch]({{page.baseurl}}cloud/live/live.html).

## Continuous integration {#continuous-integration}
Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates.

{{site.data.var.ece}} environments support continous integration for constant updates. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

* Create development branches with future features and changes
* Test the code in your development environments
* Deploy and test in Staging
* Deploy to Production

For more information, see [Continuous integration]({{page.baseurl}}cloud/deploy/continuous-deployment.html).

#### Related topics
*	[First-time development setup]({{page.baseurl}}cloud/access-acct/first-time-setup.html)
*	[Pro architecture]({{page.baseurl}}cloud/reference/discover-arch.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
