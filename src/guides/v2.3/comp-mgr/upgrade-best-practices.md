---
group: software-update-guide
title: Upgrade best practices
functional_areas:
  - Upgrade
---

This topic lists the actions you should take to manage the complexity of upgrading Magento Open Source and {{site.data.var.ee}}. Your team should be thinking about upgrades from the moment your project development starts and continue through each release. By following these best practices, the upgrade process will be much easier, faster, and cheaper.

{:.bs-callout-tip}
These recommendations are based on best practices supported by evidence for its impact and effectiveness from partners, merchants, Adobe experts, and the community.

## What impacts an upgrade?

It is important to understand the variables that determine the complexity of an upgrade. You must consider these variables at the beginning of each project--not just when is time to upgrade. The development of a project is key to ensure future upgrades will be smooth and that you will be able to control the required effort to complete them.

The level of effort to upgrade your {{site.data.var.ee}} instance depends upon these factors:

*  **How you have built your site?** The amount of custom work and the number of installed 3rd-party modules strongly affects the complexity of an upgrade. The quality of the custom work and modules also can also determine whether an upgrade will go smoothly.

*  **Are you skipping multiple releases?** Skipping releases will makes the next upgrade more complex, upgrading from consequent versions will make the process easier and cheaper.

*  **What type of upgrade are you performing?** An upgrade to a minor release (from 2.3.x to 2.4.0, for example) is more extensive than an upgrade between patch releases (such as from 2.4.2 to 2.4.3). Security upgrades are the easiest type to implement.

## What should an upgrade cost?

This is the question you should be asking yourself and your team when starting a project. If your project is running already, then how much are upgrades costing you? Is this the regular upgrade cost expected for {{site.data.var.ee}}?

The upgrade cost may vary significantly from project to project, based on the variables that impact upgrades, as described previously. Based on our experience, you should plan for upgrades to take the following amounts of time:

Upgrade type | Hours
--- | ---
Security upgrades | 16 - 24
Patch release upgrades | 20 - 50
Minor | 500 - 600

Do not skip an upgrade. Upgrading every release this will help you to have a shorter upgrade-to-upgrade delivery time.

## Best practices for planning upgrades

If you are working on a project that is already in production, upgrades are an opportunity for you to improve the quality of your code and customizations and optimize future upgrades. The time you invest today will be time saved in the long term.

If you manage multiple stores, the best approach is to have a base store with the main features and customizations you normally use. Use this store as your testing store for completing an upgrade and then do it on others. This will give you the flexibility to reuse customized modules for different stores and simplify upgrades across projects.

If your project is live, we suggest you run an audit on it to determine its quality, and how you can improve it to make your upgrades more efficient.

### Developing with upgrades in mind

From the moment you start working on a project, you should consider how future upgrades will be impacted by your current work. Always follow Adobe Commerce development best practices as described here:

*  [Development best practices]({{page.baseurl}}/ext-best-practices/bk-ext-best-practices.html)
*  [Coding standards]({{page.baseurl}}/coding-standards/bk-coding-standards.html)

Begin adopting the Adobe Commerce Extensibility platform, if you haven't done so already. The platform allows you to efficiently customize processes, integrate systems, and deploy new capabilities while maintaining SaaS-like upgradeability. Its features include:

*  **UI Extensibility**. Extend and evolve your storefront independently of your backend and middleware using [PWA Studio](https://magento.github.io/pwa-studio/).

*  **API Extensibility**. Use [GraphQL]({{page.baseurl}}graphql/index.html) to extend Web API layer by evolving the graph data model and executing lambda functions directly from the graph layer.

*  **Adobe I/O middleware and services**. Connect your systems with {{site.data.var.ee}} using Adobe's middleware and a suite of app connections built on [Adobe I/O](https://www.adobe.io/). In addition,you can extend core platform capabilities by overwriting the default behavior with your own business logic that runs on Adobe I/O.

### Planning upgrades

As we continually expand the capabilities of {{site.data.var.ee}}, it is critical that you develop on the latest available release and define an upgrade strategy into your project plans. Doing so helps you remain secure, compliant, and up-to-date on the latest enhancements that allow you to grow sales faster, operate more effectively, and stay ahead of your competition now and into the future.

To help you plan and budget for upgrades you should monitor our [Release schedule]({{site.baseurl}}/release), you should plan upgrade tasks within your team's backlog ahead of time. Aim to complete this work with GA.

*  Use the pre-release version to learn about each new release. Pre-release is General Availability code that is available to {{site.data.var.ee}} merchants and all partners two weeks before General Availability. If you have multiple stores, use the pre-release on your base store and verify that your custom modules and themes are compatible with it.

*  Review the [Upgrade plan checklist](https://support.magento.com/hc/en-us/articles/360057968951) for {{site.data.var.ee}} to help you plan for your upgrade.

*  Plan for upgrades at the beginning of the year. You will need to book a budget and resources to complete each upgrade. Use the upgrade cost estimation described above as a guide. Remember, the upgrade effort might vary significantly from project to project. Use your experiences and knowledge to make a plan as accurate as possible.

*  If your upgrades are taking more effort than what we describe here, we recommend you audit your project and make adjustments to your environment reduce the long-term maintenance.

### Performing upgrades

Upgrades should be done on regular basis, and under a predefined budget. We recommend scheduling pre-approved upgrades at the beginning of the year to ensure upgrades are planned and completed on time.

Assess the work to be done for upgrading:

*  Review the [release notes]({{page.baseurl}}/release-notes/bk-release-notes.html) to understand the scope and impact of the new version.

*  Use the [Upgrade Compatibility Tool]({{site.url}}/upgrade-compatibility-tool/introduction.html) to identify potential problems that must be fixed in your custom code before attempting to upgrade to a newer version.

*  If you are using 3rd-party extensions, validate their compatibility with the target version you are planning to upgrade to.

### Post-upgrade testing

Testing is the phase of an upgrade that requires more time. As a result, this process should be as automated as possible. You can benefit from using the core testing tools. The [Application Testing Guide]({{page.baseurl}}.test/testing.html) provides details.

Use staging to test and validate your upgrade before moving to production.

Make use of a **maintenance page**. Preparing this page in advance allows you to communicate with your customers, notifying them that work happening in the background. This page should be visible for a few minutes, but in case of a problem, you might need to use it longer. Having the appropriate content and design for your maintenance page will give your users a good experience even when your store is not available.  
