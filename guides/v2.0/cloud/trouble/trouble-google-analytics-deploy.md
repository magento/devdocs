---
layout: default
group: cloud
subgroup: 170_trouble
title: Resolve issues with Google Analytics during deployment
menu_title: Resolve issues with Google Analytics during deployment
menu_order: 80
menu_node:
version: 2.0
github_link: cloud/trouble/trouble-google-analytics-deploy.md
---

## Resolve issues with Google Analytics during deployment
This topic discusses solutions to typical issues you might experience with Google Analytics during deployments from Integration to Staging to Production.

### Google Analytics disables when deployed to Production
When deploying your code across environments to Production, the build and deploy scripts verify the specific deployed branch. As part of this check, the deploy script may disable Google Analytics.

The deploy script checks the MAGENTO_CLOUD_ENVIRONMENT variable for the string branch name of Master. As a best practice, we recommend deploying from Master branch to your Production environment. If the deploy script verifies the deployed branch is Master, Google Analytics remains enabled. If a different branch is deployed (not Master), the deploy script will disable Google Analytics.

To resolve, deploy from the Master branch to Production. The deploy script will support enabled Google Analytics in Production.
