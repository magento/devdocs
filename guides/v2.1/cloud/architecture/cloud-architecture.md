---
group: cloud
title: Magento Commerce (Cloud) architecture
version: 2.1
github_link: cloud/architecture/cloud-architecture.md
functional_areas:
  - Cloud
---
Each plan has a unique architecture to drive your Magento development and deployment process. Both, the Starter plan architecture and the Pro plan architecture, deploy databases, web server, and caching servers across multiple environments for end-to-end testing while supporting continuous integration.

### Starter projects
The [Starter plan architecture]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html) has four environments:

-  **Integration**—The Integration environment provides three testable environments. Each environment includes an active Git branch, database, web server, caching, services, environment variables, and configurations.
-  **Staging**—As code and extensions pass your tests, you can merge your Integration branch to a Staging environment, which becomes your pre-Production testing environment. It includes the `staging` active branch, database, web server, caching, services, environment variables, configurations, and services, such as Fastly and New Relic.
-  **Production**—When code is ready and tested, all code merges to `master` for deployment to the Production live site. This environment includes your active `master` branch, database, web server, caching, third-party services, environment variables, and configurations.
-  **Inactive**—You can have an unlimited number of inactive branches. 

### Pro projects
The [Pro plan architecture]({{ page.baseurl }}/cloud/architecture/pro-architecture.html) has a global master with three environments:

-  **Integration**—The Integration environment provides a testable environment that includes a database, web server, caching, some services, environment variables, and configurations. You can develop, deploy, and test your code before merging to the Staging environment.
    -  _Inactive_—You can have an unlimited number of inactive branches.
-  **Staging**—The Staging environment is for pre-Production testing and includes a database, web server, caching, services, environment variables, configurations, and services, such as Fastly.
-  **Production**—The Production environment includes a three-node, high-availability architecture for your data, services, caching, and store. This is your live, public store environment with environment variables, configurations, and third-party services.

{% include cloud/note-pro-legacy.md %}