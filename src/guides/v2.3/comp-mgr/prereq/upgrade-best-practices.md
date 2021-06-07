---
group: software-update-guide
title: Upgrade best practices
functional_areas:
  - Upgrade
---

Upgrades should be easy and recurrent. By following these best practices, the upgrade process will be much easier, faster, and cheaper.

This guide lists clear actions you should take to make sure the complexity of upgrades is managed by your team from the moment your project development starts until you complete regular upgrades.

Recommendations are based on best practices supported by evidence for its impact and effectiveness from partners, merchants, Adobe experts, and the community.

## What impacts an upgrade?

It is important to understand which variables impact an upgrade. This should be taking into account from the beginning of a project and not only when is time to upgrade. The development of a project is key to ensure future upgrades will be smooth and you will be able to control the required effort to complete them.

The level of effort to upgrade your Adobe Commerce instance depends upon:

*  How you have built your site and its level of customization. It strongly depends on how much custom work and/or third-party modules are installed on the shop and the quality of it.

*  How big of a jump it would be in Adobe Commerce version. Skipping versions will make the next upgrade more complex, upgrading from consequent versions will make the process easier and cheaper.

*  The type of upgrade, whether it is a security, minor or major upgrade.

## What should an upgrade cost?

This is the question you should be asking yourself and your team when starting a project. If your project is running already, then how much are upgrades costing you? Is this the regular upgrade cost expected for Adobe Commerce?

The upgrade cost may vary significantly from project to project based on the variables that impact upgrades, as described previously. But we can tell you based on our wide experience what you should aim for upgrades to cost for each level:

Security upgrades: 16 - 24 hours
Minor upgrades: 20 - 50 hours
Major: 100 - 150 hours

## Upgrade Best Practices Guide

### The development cycle

*  From the moment you start working on a project, you should know how upgrades will work and how your job, at this starting point, will impact future upgrades. Make sure you follow Adobe Commerce development best practices as described here:
   *  Development best practices
   *  Coding standards
*  Adobe Commerce Extensibility allows you to efficiently customize processes, integrate systems, and deploy new capabilities while maintaining SaaS-like upgradeability.

   Watch Adobe Summit 2021 session "Extending Magento Commerce with Adobe I/O" (presentation pdf, video).

*  If you are working on a project that is already in production, upgrades are an opportunity for you to improve the quality of your code and customizations and optimize future upgrades, the time you invest today will be time saved in the long term.

If not possible to use out of the box functionalities:
Make a clever selection of a third party extension to fulfill your feature gap. We recommend using extensions from our Marketplace as all extensions available here have passed an extensive technical and marketing review. Our Extension Quality Program (EQP) combines Magento expertise, development guidelines, and verification tools to ensure that all extensions on our Marketplace meet our coding standards and best practices.

For in-house development make sure you ALWAYS follow Adobe Commerce development best practices.
If you manage multiple stores the best approach is to have a base store with the main features and customizations you normally use. Use this store as your testing store for completing an upgrade and then do it on others. This will give you the flexibility to reuse customized modules for different stores and simplify upgrades across projects.
If your project is live, we suggest you run an audit on it to determine its quality, and how you can improve it to make your upgrades more efficient.

### The planning cycle

As we continually expand the market-leading capabilities of Adobe Commerce, it is critical that you develop on the latest available release and define an upgrade strategy into your project plans. Doing so helps you remain secure, compliant, and up-to-date on the latest enhancements that allow you to grow sales faster, operate more effectively, and stay ahead of your competition now and into the future. To help you plan and budget for upgrades you should monitor our [Release schedule]({{site.baseurl}}/release), you should plan upgrade tasks within your team's backlog ahead of time. Aim to complete this work with GA.

*  Plan for upgrades at the beginning of the year. You will need to book a budget and resources to complete each upgrade. Use the upgrade cost estimation described above as a guide. Remember, the upgrade effort might vary significantly from project to project. Use your experiences and knowledge to make a plan as accurate as possible.

*  If your upgrades are taking more effort than what we described in this document, we recommend you audit your project and make clever investments to reduce it following this guide.
Review the Upgrade plan checklist for Adobe Commerce to help you plan for your upgrade.

### Upgrade your store

Assess the work to be done for upgrading.

*  Use pre-release to learn about the next version. Pre-release is General Availability code that is available to Adobe Commerce merchants and all partners two weeks before General Availability. If you have multiple stores use pre-release on your base store and verify that your custom modules and themes are compatible with it.

*  If you are using 3rd party extensions, validate their compatibility with the target version you are planning to upgrade to.

*  Use the [Upgrade Compatibility Tool]({{site.url}}/upgrade-compatibility-tool/introduction.html) to identify potential problems that must be fixed in your custom code before attempting to upgrade to a newer version.

*  Keep an eye on the [release notes]({{page.baseurl}}/release-notes/bk-release-notes.html) to understand the scope and impact of the new version.

Upgrades should be done on regular basis, and under a predefined budget, our recommendation is to have pre-approved upgrades at the beginning of the year to ensure upgrades are planned and completed on time.

### Testing

Automate testing. Testing is the phase of an upgrade that requires more time, this process should be as automated as possible, in order to do so, you can benefit from using Adobe Commerce testing tools, all details can be found on this guide.

Use staging to test and validate your upgrade before moving to production.

Make use of a maintenance page, having this page prepared in advance will allow you to show your users there is work happening in the background, this should take just a few minutes but in case of a problem, you might need to use it longer. Having the appropriate content and design for your maintenance page will give your users a good experience even when your store is not available.  

### DO NOT SKIP AN UPGRADE, this will help you to have a shorter upgrade-to-upgrade delivery time.