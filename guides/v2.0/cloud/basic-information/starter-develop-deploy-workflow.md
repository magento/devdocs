---
group: cloud
subgroup: 010_welcome
title: Starter develop and deploy workflow
menu_title: Starter develop and deploy workflow
menu_order: 25
menu_node:
version: 2.0
github_link: cloud/basic-information/starter-develop-deploy-workflow.md
functional_areas:
  - Cloud
---

Everything in {{site.data.var.ece}} is Git-driven. Your [project]({{ page.baseurl }}/cloud/project/projects.html) is a Master Git branch cloned from a Magento 2 repository. Every active Git branch has an associated full environment. Depending on your {{site.data.var.ece}} plan subscription, your deployment workflow may differ.

The general workflow for all development and deployment includes:

* Push code to the remote Git branch
* Build and deploy processes run
* The environments updated with code, services, and configurations

The Starter plan gives you four active environments, including a `master` environment for your Production server. You have the option to use the remaining three active branches any way you want.

We **recommend creating a Staging branch** for fully testing your code, extensions, integrations, and data as a near-production environment. This branch includes all services and features of your Production environment. The remaining branches you can create from `staging` and use for all development, easily merging work up through `staging` then `master`.

Every active environment gives you the Magento and branch code installed and deployed, configurable services, and a database. Only the Production and Staging environments have full services including Fastly and New Relic.

The following diagram details the branch and environment relationships:

![High-level view of Starter project]({{ site.baseurl }}/common/images/cloud_arch-starter.png)

You can manage all of your environments including Production and Staging directly through the [Project Web Interface]({{ page.baseurl }}/cloud/project/project-webint-basic.html), through the store and Admin panel using provided URLs, and using SSH and the [Magento Cloud command-line]({{ page.baseurl }}/cloud/reference/cli-ref-topic.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The following workflow and examples uses a Production, Staging, and Integration architecture.
</div>

## Starter environments and branches {#env-branches}
For your environments, we recommend deploying and testing following a Development > Staging > Production workflow.

* Production environment (live site) is your `master` Git branch with an associated full environment with all services
* Staging environment is a Git branch we recommend you create called `staging`, to receive full services matching Production
* Integration environments include two active branches we recommend created from `staging`

For your branches, you can follow any methodology. One example follows an agile methodology such as scrum to create [branches for every sprint]({{ page.baseurl }}/cloud/env/environments.html).

From each sprint, you can have branches for every user story. All the stories become testable. You can continually merge to the sprint branch and validate that on a continuous basis. When the sprint ends, there is no testing bottleneck, and you can just merge to master and put the whole sprint into production.

For detailed information, see [Starter architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html).

## Development workflow {#development}
Development and deployment on Starter plans begins with your initial project. You create your project with the "blank site", which is a {{site.data.var.ece}} template code repo with a fully prepared store. This creates a `master` branch of Git code in your Production environment.

The full process involves:

* [Clone and branch](#clone-branch) from Master for Staging and development branches
* [Develop code](#dev-code) and install extensions locally in a branch
* [Configure](#configure-store) your store and extension settings
* [Generate configuration](#config-management) management files
* [Push code](#push-code) and configuration to build and deploy to an environment

![Develop and deploy workflow]({{ site.baseurl }}/common/images/cloud_workflow-starter.png)

You also have a few optional steps to help develop and test your code and store data:

* [Install sample data](#sample-data) to your store
* [Pull production store data](#prod-data) down to environments

This process assumes you would have your [local developer workspace]({{ page.baseurl }}/cloud/access-acct/first-time-setup.html) set up. Feel free to read over this process even if your local isn't ready.

### Clone and branch {#clone-branch}
When you created your project, a `master` branch was cloned using the {{site.data.var.ece}} Git repository. To start branching and working with code, you will need to clone the `master` to your local.

The format of the Git clone command is:

    git fetch origin
    git pull origin <environment ID>

The first time you start working in branches for your Starter project, you need to create a Staging branch. This sets up a Staging environment with a code branch matching the Production `master` branch and environment.

Next, create branches from `staging` to develop code, add extensions, and configure 3rd party integrations. Anytime you need to develop custom code, add extensions, integrate with a 3rd party service, work in a develop branch created from `staging`. You will have four active Integration environments available. When you push your an active branch of Git code, one of these Integration environments automatically deploys your code to test.

We walk you through the process when you [set up your local]({{ page.baseurl }}/cloud/access-acct/first-time-setup.html).

The format of the Git branch command is:

    git checkout <branch name>

The format of the Magento Cloud CLI branch command is:

    magento-cloud environment:branch <environment name> <parent environment ID>


![Branch from Master]({{ site.baseurl }}/common/images/cloud_workflow-branching.png)

### Develop code {#dev-code}
It's the time you have been waiting for...writing code. Using this base branch of {{site.data.var.ece}} code, you can start installing extensions, developing custom code, adding themes, and much more.

We recommend using a branching strategy with your development work. Using one branch to do all of your work all at once might make testing difficult. For example, you could follow continuous integration and sprint methodologies to work:

* Add a few extensions and configure them with your first branch
* Push this code, test, and merge to Staging then Production
* Fully configure your services in `services.yaml` and add a theme
* Push this code, test, and merge to Staging then Production
* Integrate with a 3rd party service
* Push this code, test, and merge to Staging then Production

And so on until you have your store fully built, configured, and ready to go live. But keep reading, we have even better options for your store and code configuration!

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Do not complete any configurations on your local yet.
</div>

![Develop code and push to deploy]({{ site.baseurl }}/common/images/cloud_workflow-push-code.png)

### Configure store {#configure-store}
When you are ready to configure your store, have all code pushed to your Integration environment and access the Magento Admin. You should fully configure all store settings in the Integration environment Admin, not on your local. If you need the URL, see the Project Web Interface. The Store Admin URL is located on the branch page.

For the best information on configurations, we recommend reviewing {{site.data.var.ee}} and your extension documentation. Here are some links and ideas to help you get kickstarted:

* [Best practices for store configuration]({{ page.baseurl }}/cloud/configure/configure-best-practices.html) for specific best practices in the cloud
* [Basic configuration](http://docs.magento.com/m2/ee/user_guide/configuration/configuration-basic.html){:target="\_blank"} for store admin access, name, languages, currencies, branding, sites, store views and more
* [Theme](http://docs.magento.com/m2/ee/user_guide/design/design-theme.html){:target="\_blank"} for your look and feel of the site and stores including CSS and layouts
* [System configuration](http://docs.magento.com/m2/ee/user_guide/system/system.html){:target="\_blank"} for roles, tools, notifications, and your encryption key for your database
* Extension settings using their documentation

Beyond just store settings, you can further configure multiple sites and stores, configured services, and more. For details, see [Configure Magento Commerce]({{ page.baseurl }}/cloud/configure/configuration-overview.html).

Now you need to get these settings into your code. We have a helpful command to do this, keep reading.

### Generate configuration management files {#config-management}
If you are familiar with Magento, you may be concerned about how to get your configuration settings from your database in development to Staging and Production. Previously, you had to copy down on paper or a file all of your configuration settings to enter them manually in another environment. Or you may have dumped your database and push that data to another environment.

{{site.data.var.ece}} provides a set of two [Configuration Management](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html) commands that export configuration settings from your environment into a file. These commands are only available for **{{site.data.var.ece}} 2.1.4 and later** (not 2.2).

* `php bin/magento magento-cloud:scd-dump`: Recommended. Exports only the configuration settings you have entered or modified from defaults into a configuration file.
* `php bin/magento app:config:dump`: Exports every configuration setting, including modified and default, into a configuration file.

The generated file is located in `app/etc/`:

* For 2.1.4 and later: `config.local.php`
* For 2.2 and later: `config.php`

You will generate the file in the Integration environment where you configured Magento. We walk you through the process of generating the file, adding it to your Git branch, and deploying it.

**Important notes** on Configuration Management:

* Any configuration setting included in the file is locked from editing, or read-only, in the deployed environment. This is one reason we recommend using `scd-dump`.

  For example, we will have you install a module for Fastly in your development environment. You will only configure this module in Staging and Production. Using `scd-dump` keeps those default fields editable.
* This file can be long depending on the size of your deployment. The `scd-dump` command generates a far small file than `app:config:dump`.

![Generate configuration management file]({{ site.baseurl }}/common/images/cloud_workflow-config-mgmt.png)

An additional feature of this command is part of {{site.data.var.ece}} 2.2. Any values determined to be sensitive data, like sandbox credentials for a PayPal module, will be generated into another configuration file called `env.php` in `app/etc/`. This file remains in the exact environment it is created without traveling with your code. You will not add this file to your code repository. You can also create environment variables with CLI commands in all {{site.data.var.ece}} versions.

![Environment variables generate]({{ site.baseurl }}/common/images/cloud_workflow-env-variables.png)

For more information, see [Configuration Management](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html).

### Push code and test {#push-code}
At this point, you should have a developed code branch with a configuration file (`config.local.php` or `config.php`) ready to test.

Everytime you push code from your local environment, a series of build and deploy scripts run. These scripts generate new Magento code and deploy it to the remote environment. For example, if you are pushing a development branch from your local to the remote Git branch, a matching environment updates services, code, and static content.

You can directly access this environment with a store URL, Magento Admin URL, and SSH. These environments include a web server, database, and configured services. When ready, you can start deploying and testing in Staging.

For more information, see [Deployment workflow](#deploy).

### Optional: Install sample data {#sample-data}
If you need some example data when developing your store, you can install our sample data. This data simulates an active Magento store, including customers, products, and other data. This sample data works best with a "blank site" {{site.data.var.ece}} template installation when creating your project.

We recommend installing sample data in your local installation and Integration environments. If you use this data in Staging or Production, make sure to clear out the information and products before going live.

For instructions, see [Install optional sample data]({{ page.baseurl }}/cloud/howtos/sample-data.html).

![Install optional sample data]({{ site.baseurl }}/common/images/cloud_workflow-sample-data.png)

### Optional: Pull production data {#prod-data}
We recommend adding all of your products, catalogs, site content, and so on (not configurations) directly in Production. By adding this data in Production, you immediately update prices, coupons, inventory stock, strategize your sales and future offerings, and much more for your customers. This data does not include extension configurations. You will set those in your development branch on your local.

As you develop features, add extensions, and design themes, having real data to work with is helpful. At any time, you can create a database dump from Production and push that to your Staging environment, and possibly Integration environments as you like.

{% include cloud/data-collection.md %}

![Pull and sanitize production data]({{ site.baseurl }}/common/images/cloud_workflow-data-code-process.png)

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Prior to pushing the data to another environment, you should consider sanitizing your data. You have a couple of options including [using support utilities]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-spt-util.html) or developing a script to scrub out customer data.
</div>

<div class="bs-callout bs-callout-warning" markdown="1">
Important: We don't recommend pushing a database from an Integration or Staging environment. This data will overwrite your Production live data including sales, orders, new and updated customers, and much more.
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

To learn more, see [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html).

### Push to Staging and test {#staging}
You should always push all of your code in iterations to your Staging environment for full testing. The first time you use this environment, you will need to configure a few services including [Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html), [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html), and [New Relic APM]({{ page.baseurl }}/cloud/project/new-relic.html). We also recommend configuring payment gateways, shipping, notifications, and other vital services with sandbox or testing credentials.

Staging is a pre-production environment, providing all services and settings as close to Production as possible. Thoroughly test every service, verify your performance testing tools, perform UAT testing as an administrator and customers, until you feel your store is ready for Production.

To learn more, see [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

### Push to Master / Production {#pro}
When you push to the `master` branch, you are pushing to Production. Treat configuration and testing of Production much as your Staging environment. The important difference in this environment is using live credentials. The moment you go live and launch, customers must be able to complete purchases and administrators should be able to manage your live store.

To learn more, see [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

### Go live {#go-live}
We provide a clear walk-through for going live and launching. It requires more steps than pressing a button. But when complete, your store can serve up products in your customized theme for sale immediately.

To learn more, check out [Go live and launch]({{ page.baseurl }}/cloud/live/live.html).

## Continuous integration {#continuous-integration}
Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates.

{{site.data.var.ece}} environments support continuous integration for constant updates. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

* Create development branches with future features and changes
* Test the code in your development environments
* Deploy and test in Staging
* Deploy to Production

For more information, see [Continuous integration]({{ page.baseurl }}/cloud/deploy/continuous-deployment.html).

#### Related topics
*	[First-time local environment setup]({{ page.baseurl }}/cloud/access-acct/first-time-setup.html)
*	[Starter architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html)
*	[Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html)
