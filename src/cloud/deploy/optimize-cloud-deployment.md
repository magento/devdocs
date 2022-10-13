---
group: cloud-guide
title: Optimize cloud deployment
functional_areas:
  - Cloud
  - Deploy
  - SCD
---

Site performance can suffer during the deployment process. The length of time a site is in maintenance mode when deploying to a production site depends on many factors, such as environment configuration and the amount of content a site contains. The first best practice for optimizing your Cloud deployment is to [upgrade to use `{{site.data.var.ct}}`]({{ site.baseurl }}/cloud/project/ece-tools-upgrade-project.html) to benefit from the package features, such as commands to create a backup of the database and verify environment configuration.

The following topics can help you to better understand how to optimize the deployment process:

-  [Cloud deployment process]({{ site.baseurl }}/cloud/deploy/cloud-deployment-process.html)
    There are three phases in the Cloud deployment process, and you can use the strengths and weaknesses of each phase to your advantage.

-  [Zero downtime deployment]({{ site.baseurl }}/cloud/deploy/reduce-downtime.html)
    Understand what happens during deployment and how to reduce the amount of downtime your store experiences during an update to the Production environment.

-  [Static content deployment]({{ site.baseurl }}/cloud/deploy/static-content-deployment.html)
    The best way to optimize your Cloud deployment is to control how and when to generate static content.

-  [Smart wizards]({{ site.baseurl }}/cloud/deploy/smart-wizards.html)
    The `{{site.data.var.ct}}` package provides the smart wizard commands to quickly evaluate your project configuration.
