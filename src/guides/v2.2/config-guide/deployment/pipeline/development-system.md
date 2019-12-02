---
group: configuration-guide
title: Development System Setup
functional_areas:
  - Configuration
  - Deploy
  - System
  - Setup
---

You can have any number of development systems, provided the following is true of all of them:

*  They all run Magento 2.2 or later
*  All Magento code is under source control in the same repository as the build and production systems
*  Each development system should use either [default mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#default-mode) or [developer mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#developer-mode)
*  It has Magento file system ownership and permissions set as discussed in [Prerequisite for your development, build, and production systems]({{ page.baseurl }}/config-guide/deployment/pipeline/technical-details.html#config-deploy-prereq).
*  Make sure all of the following are _excluded_ from source control:

   *  `vendor` directory (and subdirectories)
   *  `generated` directory (and subdirectories)
   *  `pub/static` directory (and subdirectories)
   *  `app/etc/env.php` file

*  Make sure `app/etc/config.php` is _included_ in source control

If you use Git, Magento's `.gitignore` provides most of the preceding. See the [`.gitignore` reference]({{ page.baseurl }}/config-guide/prod/config-reference-gitignore.html) for more information.

{:.ref-header}
Related topics

[Set up a build system]({{ page.baseurl }}/config-guide/deployment/pipeline/build-system.html)
