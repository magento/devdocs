---
layout: default
group: cloud
subgroup: 08_setup
title: Set up an environment and install the Magento software locally
menu_title: Set up an environment and install the Magento software locally
menu_order: 60
menu_node: 
version: 2.0
github_link: cloud/access-acct/set-up-env.md
redirect_from: 
  - /guides/v2.0/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/howtos/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.1/cloud/env/environment-tutorial-set-mage-vars.html
  - /guides/v2.0/cloud/access-acct/admin-env-vars.html
  - /guides/v2.1/cloud/access-acct/admin-env-vars.html
---

## Step 1: Set up an environment {#setup-env-setup}
This topic discusses how to clone an environment locally, set up global Git environment variables, and to enable SSH if you haven't done so already.

### Enable SSH to the environment
This is a one-time setup that was covered previously in this guide; skip this section if you've already enabled SSH.

{% collapsible To enable SSH: %}

{% include cloud/enable-ssh.md %}



### Set global Git variables
To set global Git variables required to commit or push to an environment (that is, Git branch), enter the following commands:

	git config --global user.name "<your name>"
	git config --global user.email <your e-mail address>

For more information, see [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup#_first_time){:target="_blank"}

{% endcollapsible %}

### Clone a project and environment {#setenv-clone}

{% collapsible To clone a project and environment: %}

1.	Log in to your local development machine as, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.  Change to the web server or virtual host docroot.
2.	Log in to your project:

		magento-cloud login
3.	List your projects:

		magento-cloud project:list
4.	Clone a project.

		magento-cloud project:get <project ID>

    When prompted for a directory name, enter `magento2`.
4.	Change to the project directory.

	For example, `cd magento2`
4.	List environments in the project:

		magento-cloud environment:list

	<div class="bs-callout bs-callout-info" id="info">
  		<p><code>magento-cloud environment:list</code> displays environment hierarchies whereas <code>git branch</code> displays does not. If you have any nested environments, use <code>magento-cloud environment:list</code>.</p>
	</div>

5.	Fetch origin branches:

		git fetch origin
6.	Pull updated code:

		git pull origin <environment ID>

{% endcollapsible %}

## Step 2: Change the Admin URI, user name, and password in the master branch {#setup-env-adminurl}
This section discusses how to change Magento Admin parameters for security reasons. This must be done only once for a new project.

If your master branch is already configured, skip this section and continue with [Step 3: Clone or branch an environment](#setenv-new-env).

If you're not sure whether or not the master branch has been configured, enter the following command:

    magento-cloud variable:get -e <environment ID>

{% collapsible To change the Admin URI, user name, and administrator password in the master branch: %}

1.  Set the variable values.

        magento-cloud variable:set <name> <value> -e <environment ID>
2.  To set the administrator's user name to `meister_x2U8` in the `master` environment, enter:

        magento-cloud variable:set ADMIN_USERNAME meister_x2U8 -e master
3.  Wait for the project to redeploy.
2.  To set the administrator's password to `admin_A456`, enter:

        magento-cloud variable:set ADMIN_PASSWORD admin_A456 -e master
6.  Wait while the project redeploys.
7.  To set the Admin URI to `magento_A8v10`, enter:

        magento-cloud variable:set ADMIN_URL magento_A8v10 -e master
6.  Wait while the project redeploys.
7.  Log in to the Magento Admin using the values you just changed.

    The simplest way to do that is to use the environment routes that display when you redeploy the `master` branch. An example follows:

        Waiting for the activity ksvciptnzxfto (Steve Johnson added variable ADMIN_URL):
            Building application 'mymagento' (runtime type: php:7.0, tree: 07263ba)
            Slug already built for this tree id, skipping.

        Re-deploying environment k4wtvm7ogzr5s-master.
        Environment configuration:
            mymagento (type: php:7.0, size: S, disk: 2048)
            mysql (type: mysql:10.0, size: S, disk: 2048)
            redis (type: redis:3.0, size: S)
            solr (type: solr:4.10, size: S, disk: 1024)

        Environment routes:
            http://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`
            https://master-k4wtvm7ogzr5s.us.magentosite.cloud/ is served by application `mymagento`

    In the preceding example, go to `http://master-k4wtvm7ogzr5s.us.magentosite.cloud/magento_A8v10` and log in using the user name `meister_x2U8` and password `admin_A456`

{% endcollapsible %}

## Step 3: Set up cron {#setenv-cron}

{% collapsible To set up cron: %}

{% include config/setup-cron.md %}

{% endcollapsible %}

## Step 4: Clone or branch an environment {#setenv-new-env}
Now that you've change the Magento Admin variables, you should create a new environment for your development work; this new environment inherits the variable values from master.

After you create the branch, update project dependencies so you can install the Magento software locally.

{% collapsible To branch a new environment: %}

1.	Do any of the following:

    *   To create a new environment, enter the following command:

            magento-cloud environment:branch <environment name> <parent environment ID>
    *   To check out an existing environment, enter the following command:

            magento-cloud environment:checkout

    For example, to create a new branch named `sprint1` from master, enter

        magento-cloud environment:branch sprint1 master

3.	After the command completes, update dependencies:

		composer --no-ansi --no-interaction install --no-progress --prefer-dist --optimize-autoloader
4.  Create a [snapshot]({{page.baseurl}}cloud/admin/admin-snap.html) of the environment.

        magento-cloud snapshot:create -e <environment ID>

{% endcollapsible %}

## Step 5: Add your authentication keys to auth.json {#setenv-keys}

{% collapsible To get your authentication keys: %}
Before you can upgrade the Magento software or install extensions, you must have authentication keys in the `auth.json` file in the Magento root directory. The Magento Enterprise Cloud Edition account owner has your keys. Contact that person to get them.

The *account owner* is the person who purchased Magento Enterprise Cloud Edition.

When you have your keys, add them to `auth.json`, which has the following contents:

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

{% endcollapsible %}

## Step 6: Set file system permissions and ownership {#setup-env-perms}

{% collapsible To set ownership and permissions before you install the Magento software: %}

1.  Log in to your Magento server as, or switch to, the Magento file system owner.
2.  Enter the following commands in the order shown:

        cd <your Magento install dir>
        find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
        find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
        chown -R :<web server group> .
        chmod u+x bin/magento

{% include install/file-system-perms-twouser_cmds-only.md %}

{% endcollapsible %}

## Step 7: Install the Magento software {#setup-env-install}

{% collapsible To install the Magento software locally: %}

To be able to customize the Magento software on your local machine, you should install it using the following information:

*	Host name or IP address of your machine
*	Admin user name, password, and URI you created earlier

Before you begin, list the environment variables.

	magento-cloud variable:get -e <environment ID>

A sample result follows:

	+----------------+---------------+-----------+------+
	| ID             | Value         | Inherited | JSON |
	+----------------+---------------+-----------+------+
	| ADMIN_PASSWORD | admin_A456    | Yes       | No   |
	| ADMIN_URL      | magento_A8v10 | Yes       | No   |
	| ADMIN_USERNAME | meister_x2U8  | Yes       | No   |
	+----------------+---------------+-----------+------+

#### Related topics
*	[Install the Magento software using the Web Setup Wizard]({{ page.baseurl }}install-gde/install/web/install-web.html)
*	[Install the Magento software using the command line]({{ page.baseurl }}install-gde/install/cli/install-cli.html)

{% endcollapsible %}

#### Next step
[Set up Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html)


