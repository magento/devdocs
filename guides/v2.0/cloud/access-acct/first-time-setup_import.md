---
layout: default
group: cloud
subgroup: 08_setup
title: Import an existing Magento project
menu_title: Import an existing Magento project
menu_order: 75
menu_node: 
version: 2.0
github_link: cloud/access-acct/first-time-setup_import.md
---
 
This topic discusses how to can start your Magento Enterprise Cloud Edition project from an existing Magento Enterprise Edition (EE) installation. 

## Prerequisites
Before you continue, make sure you have done all of the following:

*   Your existing Magento EE code must be in Git. 

    If not, you must add it to Git before continuing.
*   Complete the tasks discussed in [Set up a Magento workspace]({{page.baseurl}}cloud/before/before-workspace.html).

This is our recommended workflow:

1.  Create a new, empty Magento Enterprise Cloud Edition project from a template.

    This new project has files and directories specific to Magento Enterprise Cloud Edition.
2.  Replace the contents of this project with your code.

    This replaces not only Magento code but static and compiled assets as well.
3.  Import your Magento database into your Magento Enterprise Cloud Edition project.
4.  TBD

{% include cloud/new-project-from-template.md %}

--- DALES TOPIC BELOW THIS LINE ---

## Import files and Magento code
This section discusses how to import code from your existing Magento EE project to your Magento Enterprise Cloud Edition's Git repository `master` branch.

<div class="bs-callout bs-callout-warning" id="warning" markdown="1">
The procedure discussed in this topic replaces your new Magento Enterprise Cloud Edition project with the contents of your existing Magento installation. Any data, websites, stores, and so on will be lost.

Before you continue, make sure there is nothing in your Magento Enterprise Cloud Edition project you want to keep.
</div>

Following is a summary of the process:

1.  In your Cloud Git repository, create a Git remote reference to the Git repo in which your Magento EE code is located.
2.  Push code from your existing Git repository to the Cloud Git repository.
3.  Merge your existing `composer.json` with the Cloud `composer.json`.

    Your existing `composer.json` contains references to third-party libraries, extensions, and other code you'll need to preserve in Magento Enterprise Cloud Edition.

### Step 1: Create a remote Git reference {#cloud-import-ref}
This section discusses how to create a remote Git reference from your Cloud Git repository to the repository in which your Magento EE installation is located.

Before you continue, make sure you know the SSH or HTTPS URL for your Magento EE installation Git repository.

To create a remote Git reference:

1.  Log in to your local Cloud development machine as, or switch to, the Magento file system owner.
2.  Make a copy of `composer.json` so it doesn't get overwritten.

        cp composer.json composer.json.cloud
3.  Rename your Cloud Git remote from `origin` to `cloud-project` to make it clear which repository is which:

        git remote rename origin cloud-project
4.  Add a remote upstream for your existing Magento EE installation:

        git remote add prev-project <git url>
5.  Confirm what you've done so far.

        git remote -v

    Results are displayed as follows.

        cloud-project   ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (fetch)
        cloud-project   ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (push)
        magento ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (fetch)
        magento ikyyrqvlgnrai@git.us.magento.cloud:ikyykimjgnrao.git (push)
        prev-project    git@github.com:mygitusername/myeereponame.git (fetch)
        prev-project    git@github.com:mygitusername/myeereponame.git (push)
6.  Make sure you're on the Cloud project `master` branch.

        magento-cloud environment:checkout master
7.  Make sure this `master` branch is set up to import code to the Cloud project.

        git branch -u cloud-project/master

### Step 2: Import your Magento EE code to your Cloud project {#cloud-import-imp}
Before you continue, make sure you've completed all tasks discussed in the preceding section.

To import your Magento EE code to Cloud:

1.  Fetch the Magento EE branch.

        git fetch prev-project
2.  Reset your Cloud `master` branch to contain the code and the commit history of your Magento EE branch:

        git reset --hard prev-project <branch name>
3.  Push code from your Magento EE project to your Magento Enterprise Cloud Edition project, overwriting the previous contents and commit history with that of your project:

        git push -f cloud-project master

### Step 3: Merge your `composer.json` {#cloud-import-composer}
TBD



Let's say you want to import your existing codebase into the master branch of your cloud environment. In the same repository create two remote references, one for the remote repository for your cloud server, and the other for the remote repository of the project you want to import. Then use git-reset to push a branch from your existing project onto a branch of the cloud project. 

In this example, we are going to take code from the "develop" branch of an existing repo, and push it to the "master" branch of our cloud project. The project could be an integration environment, staging, or technically production (although obviously you would not directly import to a live production site). For the purpose of this demonstration, the kind of project you are importing code to does not matter.







https://github.com/magento-cloud/magento-cloud-template/blob/master/README.md

What kinds of things will be different in the imported project?

*   `composer.json` and `composer.lock`, with additional packages
*   Additional file resources used by third party extensions and libraries
*   Any third party extensions and themes that you installed without using Composer

    Those themes and extensions are located in the `app/code` and `app/design` directories



## Git reset



## Copy project files

There are some Cloud-specific project files that need to be added to a new Cloud project. Go to github.com/magento/magento-cloud, find the branch that corresponds to your Magento version, and copy the following files in from that project.

 * `.magento/routes.yaml`
 * `.magento/services.yaml`
 * `.magento.app.yaml`
 * `magento-vars.php`

Add and commit the changes to source control. Once done, force push the branch onto the branch that corresponds to the Cloud environment. (Make sure there is no work that has been on that branch that has not been backed up to a different branch. The force push will effectively destroy the previous content of the branch that is being pushed to.)

# Data



## Import database

### Getting access information

First we need to find some information about the Cloud environment and the database there. We'll need the SSH url, and the name and password of the database for the environment.

#### SSH url

 * For your integration environments (the ones you can manage through the web interface), go the the project management page, select your project on the left hand side, click Access Site, and copy the URL from the "SSH Access" field.
    
 * For staging and production environments, the url will be provided by the Cloud team when your environment is provisioned.
#### Database access

The name of the database can be found in the `$MAGENTO_CLOUD_RELATIONSHIPS` environment variable. Display the variable with the following command. The database name is stored under `databases->path`. The password is found under `databases->password`.

  echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp

### Creating a database dump

Create a dump of the database you want to import (from your local or your existing development environment) using mysqldump. You can also compress it, and provide options to prevent your dump from significantly interfering with traffic from a live site. For the purpose of this tutorial we'll call the dump db.sql.gz, but it is a good idea to include the data in the filename to keep things organized if you do multiple dumps.

  mysqldump -h <db-host> -P <db-port> -p -u <db-user> <db-name> --single-transaction --no-autocommit --quick | gzip > db.sql.gz

### Importing the database dump

Now that you have created the dump, move it to the var directory of the application you are importing into:

  rsync db.sql <ssh url>:var/db.sql

SSH into the cloud environment and empty the existing database, if it is populated. If you have done any work you would like to refer to later that's been done in the Cloud environment, then make a backup of that first. Drop and recreate the database.

Now import the dump into the cloud environment's database:

  gunzip var/db.sql.gz | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | mysql -h <db-host> -P <db-port> -p -u <db-user> <db-name>

### Update environment-specific configurations

You'll need to update the base_url configuration (web/[secure|unsecure]/base_url) for the default configuration scope and for each store view, store, and website scope.

Additionally, in order to be able to decrypt encrypted data from your imported database, copy your encryption from your old `env.php` file into the `env.php` file of your new application. `env.php` contains a nested PHP array storing configuration data. Place the encryption key in the path: `crypt->key`.

If `env.php` does not exist, create it with the following contents:

{% highlight php startinline=true %}
return array (
  'crypt' =>
  array (
    'key' => '331724b9bf288722d3da80b56e38b440',
  ),
);
{% endhighlight %}

### Import media
Now copy over media files inside pub/media. On your existing project, from the application's root directory, create a tarball of media assets (product images, etc) on your existing project.

  tar -czf media.tgz pub/media

Copy the media tarball to the application's var directory on the cloud environment

  rsync media.tgz <ssh url>:var/media.tgz

On the cloud environment, clear existing media files:

  rm -rf pub/media/*

Unpack the media tarball into the pub/media directory:

  tar -xzf var/media.tgz pub/media

### Cleanup
On the cloud environment, flush the cache:

  bin/magento cache:flush



--- EXISTING TOPIC BELOW THIS LINE TBD ---

## Before you push your imported project {#cloud-import-before}
Before you push your Magento project code, you *must* add `auth.json` to the project root directory and you *should* add configuration files as well.

### Add `auth.json`
Because the Composer repository that contains Magento Enterprise Cloud Edition requires authentication, you must add a file named `auth.json` to your project's root directory. This file contains your authentication keys. Without `auth.json`, the Magento software won't download.

Add `auth.json`, replacing the sample values with your public and private keys.

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

### Configuration files
Magento Enterprise Cloud Edition enables you to specify information like the Magento docroot, details about services (like the database, Redis, and so on), and routes in `yaml` files.

These files must be created before you push to your repository for Magento to be properly deployed.

<!-- https://docs.platform.sh/drupal_migrate/guides/configuration/drupal_application.html 
  https://docs.platform.sh/drupal_migrate/guides/type/php/drupal/migrate/import-database.html
  https://docs.platform.sh/drupal_migrate/guides/type/php/drupal/migrate/import-files.html -->

#### More information

*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)

#### Next steps
* [Set up an environment]({{ page.baseurl }}cloud/access-acct/set-up-env.html)
* [Set Magento Admin environment variables]({{ page.baseurl }}cloud/access-acct/set-up-env.html)
