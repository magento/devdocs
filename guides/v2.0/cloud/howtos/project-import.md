---
layout: default
group: cloud
subgroup: 15_howto
title: Import an Existing Project
menu_title: Import an Existing Project
menu_node: 
version: 2.0
github_link: cloud/howtos/project-import.md
---

# Code
What kinds of things will be different in the imported project?
 * composer.json and composer.lock, with additional packages
 * authorization files
 * additional file resources used by 3rd party extensions and libraries.
 * possibly 3rd party extensions and themes not retrieved via composer but located in app/code and app/design

## Git reset

Let's say you want to import your existing codebase into the master branch of your cloud environment. In the same repository create two remote references, one for the remote repository for your cloud server, and the other for the remote repository of the project you want to import. Then use git-reset to push a branch from your existing project onto a branch of the cloud project. In this example, we are going to take code from the "develop" branch of an existing repo, and push it to the "master" branch of our cloud project. The project could be an integration environment, staging, or technically production (although obviously you would not directly import to a live production site). For the purpose of this demonstration, the kind of project you are importing code to does not matter.

```
git clone <cloud project git url> mece-project
cd mece-project


# This will clarify which remote points to which project
git remote rename origin cloud-project


# Add a reference to the project we will import from
git remote add prev-project <git url>


# Here, do 'git checkout -b master' if branch does not exist yet
git checkout master


# Make sure this branch points to where we want to import code to       
git branch -u cloud-project/master


# Reset this branch to contain the code and the commit history of the branch being imported
git reset --hard prev-project/develop

# Push into cloud project, overwriting previous contents and commit history with that of your project
git push -f cloud-project master
```

## Copy project files

There are some Cloud-specific project files that need to be added to a new Cloud project. Go to github.com/magento/magento-cloud, find the branch that corresponds to your Magento version, and copy the following files in from that project.
 * .magento/routes.yaml
 * .magento/services.yaml
 * .magento.app.yaml
 * magento-vars.php

Add and commit the changes to source control. Once done, force push the branch onto the branch that corresponds to the Cloud environment. (Make sure there is no work that has been on that branch that has not been backed up to a different branch. The force push will effectively destroy the previous content of the branch that is being pushed to.)

# Data

Note: these steps all involve destroying existing store data and media from the cloud project in order to import this data from a different project. Before importing another project into the cloud environment, make sure there is no media or store data (such as catalog, customer, or order data) on that environment.

## Import database

### Getting access information

First we need to find some information about the Cloud environment and the database there. We'll need the SSH url, and the name and password of the database for the environment.

#### SSH url

 * For your integration environments (the ones you can manage through the web interface), go the the project management page, select your project on the left hand side, click Access Site, and copy the URL from the "SSH Access" field.
    
 * For staging and production environments, the url will be provided by the Cloud team when your environment is provisioned.
#### Database access

The name of the database can be found in the `$MAGENTO_CLOUD_RELATIONSHIPS` environment variable. Display the variable with the following command. The database name is stored under `databases->path`. The password is found under `databases->password`.

```
echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
```

### Creating a database dump

Create a dump of the database you want to import (from your local or your existing development environment) using mysqldump. You can also compress it, and provide options to prevent your dump from significantly interfering with traffic from a live site. For the purpose of this tutorial we'll call the dump db.sql.gz, but it is a good idea to include the data in the filename to keep things organized if you do multiple dumps.

```
mysqldump -h <db-host> -P <db-port> -p -u <db-user> <db-name> --single-transaction --no-autocommit --quick | gzip > db.sql.gz
```



### Importing the database dump

Now that you have created the dump, move it to the var directory of the application you are importing into:

```
rsync db.sql <ssh url>:var/db.sql
```
SSH into the cloud environment and empty the existing database, if it is populated. If you have done any work you would like to refer to later that's been done in the Cloud environment, then make a backup of that first. Drop and recreate the database.

Now import the dump into the cloud environment's database:
```
gunzip var/db.sql.gz | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' | mysql -h <db-host> -P <db-port> -p -u <db-user> <db-name>
```

### Update environment-specific configurations

You'll need to update the base_url configuration (web/[secure|unsecure]/base_url) for the default configuration scope and for each store view, store, and website scope.

Additionally, in order to be able to decrypt encrypted data from your imported database, copy your encryption from your old `env.php` file into the `env.php` file of your new application. `env.php` contains a nested PHP array storing configuration data. Place the encryption key in the path: `crypt->key`.

If `env.php` does not exist, then create it with the following contents:
```
<?php
return array (
  'crypt' =>
  array (
    'key' => '331724b9bf288722d3da80b56e38b440',
  ),
);
```

### Import media
Now copy over media files inside pub/media. On your existing project, from the application's root directory, create a tarball of media assets (product images, etc) on your existing project.

```
tar -czf media.tgz pub/media
```

Copy the media tarball to the application's var directory on the cloud environment

```
rsync media.tgz <ssh url>:var/media.tgz
```

On the cloud environment, clear existing media files:

```
rm -rf pub/media/*
```

Unpack the media tarball into the pub/media directory:

```
tar -xzf var/media.tgz pub/media
```

### Cleanup
On the cloud environment, flush the cache:

```
bin/magento cache:flush
```
