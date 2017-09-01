---
layout: default
group: cloud
subgroup: 160_deploy
title: Continuous deployment
menu_title: Continuous deployment
menu_order: 15
menu_node:
version: 2.0
github_link: cloud/deploy/continuous-deployment.md
---
TBD - document continuous deployment information
[Continuous Integration Best Practices](https://www.google.com/search?q=Continuous+Integration+Best+Practices){:target="_blank"}

Following your branching and development methodologies, you can easily develop new features, configure changes, and add extensions to continuously develop and deploy updates.

Both Starter and Pro plan environments support continous integration for constant updates. This workflow supports releases multiple times a day or on a set schedule according to your business needs.

* Create development branches with future features and changes
* Test the code in your development environments
* Deploy and test in Staging
* Deploy to Production

To follow continuous integration best practices, we recommend replicating your Production environment data into the Staging environment. Feel free to run scripts for sanitizing data to remove important data (such as customer information) in Staging. With Integration code and Production data in your Staging environment, you can [fully test]({{page.baseurl}}cloud/live/stage-prod-test.html) modifications with full services (Fastly, New Relic, Blackfire, and more) without affecting your live store and customers.
