---
layout: default
group: cloud
subgroup: 090_configure
title: Configure deployment
menu_title: Configure deployment
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/deploy/configure-deploy.md
functional_areas:
  - Cloud
  - Configuration
  - Deploy
---

After fully configuring your store, you should configure your deployment. This includes specific files to manage builds, deployments, services, and routes. The following information provides files, settings, and options for configuring services for your deployments including environments.

For Starter, you can push these files across all environments.

For Pro, you need to enter a ticket to have these files and settings pushed to Staging and Production environments. You can push these files and settings across all Integration environments.

* [.magento.app.yaml]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html) configures how the Magento application is built and deployed including services, hooks, cron jobs, and more
* [routes.yaml]({{ page.baseurl }}cloud/project/project-conf-files_routes.html) configures how Magento processes an incoming URL for your Integration environment

  * [Caching]({{ page.baseurl }}cloud/project/project-routes-more-cache.html) configuration options for caches set in routes.yaml
  * [Redirect]({{ page.baseurl }}cloud/project/project-routes-more-redir.html) configuration and rules for managing redirections set in routes.yaml
  * [Server side includes]({{ page.baseurl }}cloud/project/project-routes-more-ssi.html) configured set in routes.yaml
* [services.yaml]({{ page.baseurl }}cloud/project/project-conf-files_services.html) configures the services you use in your stores and sites including name, version, and allocated disk space

  * [MySQL service]({{ page.baseurl }}cloud/project/project-conf-files_services-mysql.html) configuration for the database set in services.yaml
  * [Redis service]({{ page.baseurl }}cloud/project/project-conf-files_services-redis.html) configuration for a backend caching solution set in services.yaml
  * [Solr service]({{ page.baseurl }}cloud/project/project-conf-files_services-solr.html) configuration for search engines supported for {{site.data.var.ee}} 2.0 set in services.yaml
  * [Elasticsearch service]({{ page.baseurl }}cloud/project/project-conf-files_services-elastic.html) configuration for searches supported for {{site.data.var.ee}} 2.1 and later set in services.yaml
  * [RabbitMQ]({{ page.baseurl }}cloud/project/project-conf-files_services-rabbit.html) configuration for a messaging broker set in services.yaml
