---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Modules
landing-page: Advanced Reporting
menu_title: Modules
menu_order: 1
menu_node:
version: 2.2
github_link: advanced-reporting/modules.md
---

## Module Structure

* Analytics module
  * Provides subscription and restore the subscription procedures
  * Declares the configuration of collected data
  * Processes the data collection
  * Introduces an API for transferring the collected data to the MBI service
  * Provides an Access Control List (ACL)
  * Implements a Configuration page
* CatalogAnalytics
* CustomerAnalytics
  * Configures data definitions for data collection related to the Customer module entities
* QuoteAnalytics
* ReviewAnalytics
* SalesAnalytics:
  * Configures data definitions for data collection related to the Sales module entities
* WishlistAnalytics

    ![Analytics Modules](./images/analytics_modules.png)

## Data Interchange

### Subscription
   
   ![Subscription](./images/signup.png)

### Subscription Update
   
   ![Subscription Update](./images/update.png)

## Request the External Data Definitions (TBD)
   
   ![Request the External Data Definitions(TBD)](./images/definition.png)

## Data Transition
   
   ![Data Transition](./images/data_transition.png)