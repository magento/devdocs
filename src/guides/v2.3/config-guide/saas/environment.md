---
group: configuration-guide
title: Connecting SaaS Services to Magento
functional_areas:
  - Configuration
  - System
  - Setup
---

Magento allows you to link your Magento store to a SaaS service through the Admin UI. By configuring and managing SaaS Environments, you can connect to services such as Product Recommendations.

This topic describes how to create and manage your SaaS projects and environments so you can connect to these SaaS Services.

## Introduction

When you create a Magento account, you are entitled to one MageID. The owner of the MageID can generate a Magento API key, which is necessary to unlock the SaaS services within Magento. Once that API key is generated, the systems integrator or development team can create and manage the SaaS environments on behalf of the license holder. Each MageID can have one SaaS project and within that SaaS project you can have zero or more SaaS environments depending on the type of Magento license you have:

-  **Commerce** - One production environment; two testing environments

-  **Open Source** - One production environment; no testing environments

## Create SaaS Environment ID

To create a SaaS Environment ID, request the Magento API key from the Magento license holder for your store.

1. In the Magento Admin, choose **Stores** > Settings > **Configuration** > **Services** > **Magento Services**.

1. In the **API Keys** section, paste your key value into the **Production Api Key** field regardless of whether you are in a production environment or non-production environment.

1. Click **Save Config**.

   When you save, if there are any SaaS projects associated with your API key, those projects will appear in the the **SaaS Project** field located in the **SaaS Environment** section.

1. If there are not any SaaS projects created, click the **Request New Project** to display the **Project Name** field and enter a name for your SaaS project.

   Magento creates a SaaS project and as many SaaS environments you are entitled to.

1. Select the **SaaS Environment** to use for the current configuration of your Magento store.

To change the SaaS project or environment names, click the **Rename this Project** or **Rename this Environment** respectively.
