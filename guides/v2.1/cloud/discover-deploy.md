---
layout: default
group: cloud
subgroup: 01_welcome
title: Deployment process
menu_title: Deployment process
menu_order: 4
menu_node: 
version: 2.1
github_link21: cloud/discover-deploy.md
---

#### Contents
*	[Deployment process](#cloud-deploy-over)
*	[GitHub and Bitbucket](#cloud-deploy-over-gh)
*	[Project configuration](#cloud-deploy-conf)
*	[Five phases of deployment](#cloud-deploy-over-phase)
*	[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

## Deployment process {#cloud-deploy-over}
Deploying Magento means simply pushing the source code to your Git repository. The Git repository is part of your projects cluster so it is totally isolated from
other clients.

The built-in Git repository is at the same time "just a
normal Git repository" and a very smart piece of software. When you push to it, it will parse the configuration files you committed to your 
repository so it knows what it needs to deploy).

If you are pushing directly to the Magento Enterprise Cloud Edition Git repository, you will see in your terminal
what is happening in real-time. The same information is going to get streamed
in real-time to the Web Interface.

## GitHub and Bitbucket {#cloud-deploy-over-gh}
If you are using external Bitbucket or GitHub repositories, the log
of the operations does not display in the GitHub session. You can still follow what's happening in their interface and in the Magento Enterprise Cloud Edition's Web Interface.

## Project configuration {#cloud-deploy-conf}
What makes it all work is a set of YAML configuration files located in the project root directory. These files define your Magento installation and describe its dependencies. Configuration files specify, for
example, that Magento uses MySQL, some PHP extensions, and Elasticsearch. (These are referred to as *services*.)

## Five phases of deployment {#cloud-deploy-over-phases}
Deployment consists of the following phases:

1.	[Phase 1: Configuration validation](#cloud-deploy-over-phases-conf)
2.	[Phase 2: Build](#cloud-deploy-over-phases-build)
3.	[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)
4.	[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus) 
5.	[Phase 5: Deploy hooks](#cloud-deploy-over-phases-hook)
6.	[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

### Phase 1: Configuration validation {#cloud-deploy-over-phases-conf}
First, the built-in Git server checks the following:

*	Inspects what you sent it. 

	If, for example, you have a
syntax error in a configuration file, our Git server refuses the push.
*	Looks for critical vulnerabilities.

	Refusing to push because the built-in Git server detects a vulnerability is a good thing because it means you 
can't break your production system that easily. 

The built-in Git server diffs not only the code but also the
infrastructure.

Suppose you had a single MySQL database in your cluster. And
now you want two of those, or maybe add an Elasticsearch
instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

### Phase 2: Build {#cloud-deploy-over-phases-build}
We build only what has changed since the last build. This is one of the things that
make Magento Enterprise Cloud Edition so fast in deployment. 

Magento Enterprise Cloud Edition builds containers, in parallel, each server where something changed. If for example you pushed a
PHP `composer.json` file, it will know it needs to go search for the
dependencies, and shuffle things around to create the correct directory
structure. If in your `.magento.app.yaml` file you also specified a
build hook, you can now run whatever scripts you wish.

It is important to note that at this point the cluster has not been
created yet. So you should not try to connect to a database or imagine
anything was daemonized.

But also know that once the application has been built it is going to be
mounted on a read-only file system (you will be able to configure specific
mount points that are going to be read/write). 

This means you cannot FTP to the server and add modules. Instead, you must add code to your environment and push the environment, which builds and deploys it.

### Phase 3: Prepare the slug {#cloud-deploy-over-phases-slug}
The result of the build phase is a read-only file system we refer to as a *slug*. In this phase, we create an archive and put it in permanent storage. The next time
you push code, if a service did not change, you can use a slug from the archive.

It also means that reverting a deployment is basically
instantaneous. 

### Phase 4: Deploy slugs and cluster {#cloud-deploy-over-phases-slugclus}
Now we provision your applications and all the backend services you
need:

*	Mounts each service in its own container
*	Mounts the read-write file system is mounted on a highly available distributed storage grid
*	Configures the network so Magento's services can "see" each other (and only each other)

<div class="bs-callout bs-callout-info" id="info">
  <p>The main file system is <em>read-only</em>. This
is what guarantees we can do deterministic deployments. The read-only file system also dramatically improves your site's security because no process can write to the file system.</p>
</div>

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}
A last step allows you to run a post-deploy script. You can use this for
example to run an anonymization script for deployment on development
environments, clear caches, ping external CI tools, and so on. 

When this
script runs. you already have access to a fully running application.

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}
While the deployment is running, we freeze the incoming traffic at the entry point
so no transactions are lost.

If everything went fine, we are now ready to configure routing so your
web traffic will arrive at your newly created cluster. If something
failed, well then nothing would have happened; the "old cluster" is
still there, so from your users' perspective, nothing changed. 

Neither
failed nor successful deployments result in application downtime.
Because we also route SSH, you can also simply SSH to your cluster, where
you have the same permissions to execute commands as the web server.

#### Related topics
*	[Get started with a project]({{ site.gdeurl21 }}cloud/project/project-start.html)
*	[Get started with an environment]({{ site.gdeurl21 }}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_services.html)
