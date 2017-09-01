---
layout: default
group:
subgroup:
title: The 10,000 ft overview
menu_title: 10,000 ft overview
menu_order:
menu_node:
version: 2.0
github_link: cloud/welcome/10000-ft-overview.md
---

## What's this?

The goal of this page is to give you a high-level map of the cloud offering: what are the moving parts, how do they work, and what are your modes of interacting with them. On other pages, you'll find more in-depth discussion into specifics: right now, we just want to get you oriented.

## What should I know about before reading this article? Or using ECE?

* Git
* {% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %}
* SSH
* MySQL (including command-line interation)
* Basic linux shell usage

## What kinds of ECE are there?

When you sign up for ECE you will get access to two kinds of environments: one is termed the "integration environment" and the other is the "enterprise environment". Your staging and production servers will be enterprise environments, while you can have up to six different integration environments. The integration environments are designed for experimentation and user acceptance testing - they are lightweight servers that are easy to manage by `magento-cloud`, [a custom command-line tool]({{page.baseurl}}cloud/before/before-workspace-cli.html), as well as a web-based GUI. The enterprise environments are heavy-duty but can only be managed directly through the regular command-line tools like `git` and `ssh` -- not the `magento-cloud` tool.

## What are the moving parts?

### Git repo

Enterprise Cloud Edition is a solution for hosting your Magento code on the Cloud. The source code for your site is stored in a private git repository, and that's how you make changes to your site's codebase. When you push commits to this repository, a set of hooks get called that handle deployment activities.

On your integration environment, there is just one repository: every branch of that repository corresponds to an actual running container for a Magento instance based on the codebase in that branch. The name of the branch matches the name of the environment.

For your two enterprise environments, staging and production, you have one repository each and the `master` branch corresponds to the running environment: that is, every node of the VM cluster will have the codebase contained in the `master` branch. Other branches on these repos will not correspond to running environments.

### Where does the code first come from?

You can start off with ECE in two ways - start your project based on a code template and make new commits on top of that with whatever changes you need, or import your existing project (as long as it is structured properly -- more on that below). Either way involves basic `git` operations to pull code from _some_ remote repository into your dedicated ECE repository.

#### Pull from template

We keep a template of an ECE project [on github](https://github.com/magento/magento-cloud/). This template contains the latest version of Magento, retrieved via composer. Since the official way to download Magento for use in actual websites is to download the code with composer, the template comes with a ready-made `composer.json` file and up-to-date `composer.lock` file, and these establish the dependencies to download the Magento source code as well as a few other packages that are required for ECE specifically.

When your project is created for the first time you will have the option to create it from a template, and choosing this option will pull from our template repo into your branch.

#### Import your own project

You can at any time import your existing codebase using git. [See the project import article]({{page.baseurl}}cloud/access-acct/first-time-setup_import-import.html) for information on importing your existing codebase, and how to make sure it's well-structured.

### What about Composer?

You can add dependencies on Magento extensions and other {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} libraries using composer. You must also depend on a package called `magento/magento-cloud-metapackage` in order to download both the Magento codebase and also other packages that are specific to ECE (like deployment scripts).

### How do things get deployed?

When you push to the git repository for your project, the environment will get deployed or re-deployed to accomodate the new changes. For instance, say you added a new module: in order for the site to work, `bin/magento setup:upgrade` will need to be run. Or, if this is the first deployment, then `bin/magento setup:install` will need to be run. There are several other commands that go into the deployment flow, but _you don't need to run them manually_, because the build and deploy hooks will take care of that automatically. For more information about the composer packages that contain those hooks, see [this article on Composer Integration]({{page.baseurl}}cloud/reference/cloud-composer.html).

#### Default hooks

There are two kinds of hooks that run at different points in time: `build` and `deploy` hooks.

`build` hooks run while the raw codebase is being formed: there is no access to a database or a redis {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} while these hooks run. These hooks run on a machine that is separate from your webserver: once the codebase is prepared by running all of the build hooks, the entire folder gets copied onto the machine that your site is served from, in read-only form.

`deploy` hooks run after the read-only code slug is prepared, and this hook runs on the actual machine where the {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} web server will serve your site. These hooks can access the database, redis, etc., and so are used for making non-code-related changes to the application.

The default hooks are as follows:

 * `php bin/magento magento-cloud:build` - this is a build hook. It handles applying any patches you might have provided
 * `php vendor/magento/magento-cloud-configuration/pre-deploy.php` - this is a deploy hook that clears the cache and marshals files around to enable the next deploy hook, which depends on Magento's console frmaework, to be able to run correctly.
 * `php bin/magento magento-cloud:deploy` - this deploy hook installs or updates the application, and updates config values whenever they change (such as DB connection details).

#### Adding more hooks

Above are the three hooks that run by default, but you can add your own. In integration environments, you can declaratively change them by editing `.magento.app.yaml` in the project root and committing the change to git. Just add the command you want to run to `hooks->build` or `hooks->deploy`. For the enterprise environment, submit a support ticket describing the command you want to run as the hook, and whether it is for the build or deploy hook phase.

### How do I SSH into the environment?

[Here is the SSH guide.]({{page.baseurl}}cloud/env/environments-ssh.html).
