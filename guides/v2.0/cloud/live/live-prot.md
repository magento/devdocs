---
layout: default
group: cloud
subgroup: 20_live
title: Protective block
menu_title: Protective block
menu_order: 100
menu_node: 
github_link: cloud/live/live-prot.md
---

## Protective block
Magento Enterprise Cloud Edition has a protective blocking
feature that, under certain circumstances, restricts access to web sites
with security vulnerabilities. We use this partial blocking method to
prevent exploitation of known security vulnerabilities.

## Security block
Outdated software often contains exploits we protect against by partially blocking
access to these sites.

## How the protective block works
Magento Enterprise Cloud Edition maintains a database of signatures of
known security vulnerabilities in open-source software that are commonly
deployed on our infrastructure. The security check analyzes only known
vulnerabilities in open-source projects; it cannot examine customizations written by
Magento Enterprise Cloud Edition customers.

We analyze the code of your application:

-   When you push new code to Git
-   When new vulnerabilities are added to our database

If a critical vulnerability is detected in your application,
Magento Enterprise Cloud Edition rejects the Git push.

We run two types of blocks:

*	For development web sites, we run complete blocks.

	The error message accompanying `git push` provides detailed information about the vulnerability.

*	For production web sites, we run a "partial block" that allows the site
to stay mostly online. 

	Depending on the nature of the vulnerability,
parts of a request, such as a query string, cookies or any additional
headers, might be removed from GET requests. All other requests may be
blocked entirely&mdash;this could apply to logging in, form submission, or
product checkout.

Unblocking is automated upon resolution of the security risk. The block
is removed soon after you apply a security upgrade and removes
the vulnerability.

## Opt out of the protective block
The protective block is there to protect you against known vulnerabilities
in the software you deploy on Magento Enterprise Cloud Edition.

However, you can opt out of the protective block by adding the following to [`.magento.app.yaml`]({{ site.gdeurl }}cloud/project/project-conf-files_magento-app.html):

    preflight:
       enabled: false

You can also explicitly opt-out of some specific check as follows:

    preflight:
       enabled: true
       ignore_rules: [ "drupal:SA-CORE-2014-005" ]