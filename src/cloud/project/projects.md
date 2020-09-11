---
group: cloud-guide
title: Manage your project
functional_areas:
  - Cloud
---

The {{site.data.var.ece}} *project* includes all code in Git branches, associated environments, and *applications*. Applications have *environments* and *services* that run on them including a database, web server, and caching server.

We provide a Project Web Interface and CLI commands to fully manage all aspects of your project. You have full access to all environments for Starter and Pro environments. You can also use SSH and CLI commands to manage your environments.

To manage your project, environment, and branches, see:

-  [Configure your project]({{ site.baseurl }}/cloud/project/project-webint-basic.html)
-  [Project structure]({{ site.baseurl }}/cloud/project/project-start.html)
-  [Manage user access]({{ site.baseurl }}/cloud/project/user-admin.html)
-  Manage branches with the [Project Web Interface]({{ site.baseurl }}/cloud/project/project-webint-branch.html) or [CLI commands]({{ site.baseurl }}/cloud/env/environments-start.html)
-  [Snapshots and backup management]({{ site.baseurl }}/cloud/project/project-webint-snap.html)

### Project and environment variables {#variables}

The following sections detail more about project and environment variables:

-  [Overview of environment variables]({{ site.baseurl }}/cloud/env/variables-intro.html)
-  [{{site.data.var.ece}} environment variables]({{ site.baseurl }}/cloud/env/variables-cloud.html)
-  [Magento application environment variables]({{ site.baseurl }}/cloud/env/environment-vars_magento.html)
-  [Configuration management]({{ site.baseurl }}/cloud/live/sens-data-over.html)
-  [Example of configuration management]({{ site.baseurl }}/cloud/live/sens-data-initial.html)

### Upgrade and patch {#upgrade}

To upgrade and patch Magento, see:

-  [Upgrade and test Magento Commerce]({{ site.baseurl }}/cloud/project/project-upgrade.html)
-  [Patch and test Magento Commerce]({{ site.baseurl }}/cloud/project/project-patch.html)

## Access the Project Web Interface {#login}

With your {{site.data.var.ece}} account created, you can log into the Project Web Interface at [https://accounts.magento.cloud](https://accounts.magento.cloud).

![Log in to a project]({{ site.baseurl }}/common/images/cloud/cloud_project-login.png){:width="450px"}

## Fastly and New Relic credentials {#integrations}

Your project includes [Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) and [New Relic]({{ site.baseurl }}/cloud/project/new-relic.html). The project details display information for your project plan and important licenses and tokens for these integrations. Only the License Owner has initial access to the credentials and services. You should provide these credentials to technical and developer resources as needed.

-  [Fastly](https://www.fastly.com/) provides content delivery (CDN), image optimization, and security services (DDoS and WAF) for your {{ site.data.var.ece }} projects. See [Get Fastly credentials]({{ site.baseurl }}/cloud/cdn/configure-fastly.html).

-  [New Relic](https://newrelic.com) provides application metrics and performance information for Staging and Production environments.

{:.procedure}
To review your integration tokens, IDs, and more:

1. As the {{site.data.var.ece}} Account Owner, log in to your project.

1. In the upper right corner, click **&lt;your name>** > **Account Settings**.

   ![Go to account settings]({{ site.baseurl }}/common/images/cloud/cloud_acct-settings-option.png){:width="650px"}

1. On your account page, click **View Details** for your project to open general settings and plan details.

   ![View your project details]({{ site.baseurl }}/common/images/cloud/cloud-project-edit-details.png){:width="650px"}

1. On your project details page, scroll to and expand the **New Relic** and **Fastly** sections to review service credentials.

   ![Your New Relic credentials]({{ site.baseurl }}/common/images/cloud/cloud-project-details-new-relic.png)

## Access the project and environments {#project}

When you first login, a list of projects you have access to displays. As an Account Owner, you can only see your company's project. A Magento Solution Partner may see multiple projects for all of the clients they support.

Click on a project to access branches and more. On the page, you will see a hierarchy of environments named by the Git branch.

For **Starter**, you will see a hierarchy of branches starting from Master (Production). Any branches you create display as children from Master. We recommend creating a Staging branch, then branching from that for your Integration development. For more information, see [Starter architecture]({{ site.baseurl }}/cloud/architecture/starter-architecture.html).

![Starter branch hierarchy]({{ site.baseurl }}/common/images/cloud/cloud_project-starter.png)

For **Pro**, you will see a hierarchy of branches starting from Production to Staging to Integration. The ![Enterprise icon]({{ site.baseurl }}/common/images/cloud/cloud_icon-enterprise.png) icon indicates these branches deploy to a dedicated server, used by Staging and Production. Any branches you create display as children from Integration. For more information, see [Pro architecture]({{ site.baseurl }}/cloud/architecture/pro-architecture.html).

![Pro branch hierarchy]({{ site.baseurl }}/common/images/cloud/cloud_project-pro.png)

The following table details the branches for Pro:

| Branch | Environment | Description |
|----------
| (no branch) | Global Master | This "branch" captures global project changes including adding user accounts and variables. **Important:** Do not create branches from or merge to Global Master. |
| `production` | Production | This is a child branch from `master` with a deployment target. You cannot branch from this branch. You merge code from `master` to this branch to launch your site with updated configurations and code. |
| `staging` | Staging | This is a child branch from `master` with a deployment target. You cannot branch from this branch. You merge code from `master` to this branch to test in a pre-production environment. |
| `master` | Integration master | The master branch of the single repository. In the Project Web Interface, this is called Integration. You branch from `master` for your development on your local, generating an environment when you push code. When this code is complete, you merge to `staging` and `production`. |

To access an environment store and admin, select a branch and click **Access Site**. A list of store URLs and SSH command display. Select the URL to view the store in that environment.

![Access your project]({{ site.baseurl }}/common/images/cloud/cloud_project-access.png)

The Pro plan Production and Staging environments include three nodes that you can access using the following links:

-  Load balancer URLs:

   -  `http[s]://<your domain>.c.<project ID>.ent.magento.cloud`
   -  `http[s]://<your staging domain name>.c.<project ID>.ent.magento.cloud`

-  Direct access to one of the three redundant servers:

   -  `http[s]://<your domain>.{1|2|3}.<project ID>.ent.magento.cloud`
   -  `http[s]://<your staging domain name>.{1|2|3}.<project ID>.ent.magento.cloud`

   The production URL is used by the content delivery network (CDN).

If you have inactive Git branches of code, you can toggle displaying the branches in the hierarchy.

![Show or hide inactive branches]({{ site.baseurl }}/common/images/cloud/cloud_show-inactive.png)

## Configure environments {#configure}

You can manage variables and settings for Production, Staging, and Integration environments through this interface, or with CLI commands. Click **Configure environment** to create and manage [*environments*]({{ site.baseurl }}/cloud/env/environments.html), each of which corresponds to a Git branch.

![Access your project]({{ site.baseurl }}/common/images/cloud/cloud_project-env.png){:width="650px"}

This displays the following page, which enables you to configure settings, [variables]({{ site.baseurl }}/cloud/project/magento-app.html), [routes]({{ site.baseurl }}/cloud/project/routes.html), and [users]({{ site.baseurl }}/cloud/project/user-admin.html).

![configure environments]({{ site.baseurl }}/common/images/cloud/cloud_project-conf-env.png){:width="650px"}

### Environment configuration variables

On the *Variables* tab, you can view, create, and manage environment variables for your project. For example, after we add your project to the {{ site.data.var.ece }} Fastly service account, you can view the Fastly API token and service ID credentials as shown in the following example:

![Environment variables fastly credentials]({{ site.baseurl }}/common/images/cloud/cloud-project-web-ui-environment-variables.png){:width="650px"}

You can also [list and review]({{ site.baseurl }}/cloud/before/before-setup-env-2_clone.html) environment variables using the following Magento Cloud CLI command.

```bash
magento-cloud variable:get -e <environment ID>
 ```

## Configure the project

Click ![edit project]({{ site.baseurl }}/common/images/cloud/cloud_edit-project.png) (edit) to display users and deploy keys associated with the project. You can modify access and permissions across the entire project and per environment (or branch). See [Manage user access]({{site.baseurl}}/cloud/project/user-admin.html).

![configure project]({{ site.baseurl }}/common/images/cloud/cloud_project-config.png){:width="650px"}
