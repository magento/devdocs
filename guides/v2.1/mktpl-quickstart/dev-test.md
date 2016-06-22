---
layout: default
group: quickstart
subgroup: 02_Dev
title: Test your component
menu_title: Test your component
menu_order: 100
menu_node: 
version: 2.1
github_link: mktpl-quickstart/dev-test.md
---

##{{page.menu_title}}

During development, you should <a href="{{page.baseurl}}extension-dev-guide/test-module.html">test your component</a> thoroughly to make sure it works as expected.

Before you publish your component, you should test installing it using the <a href="{{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html" target="_blank">Magento Component Manager</a> (part of the Magento Admin).

One way to do this follows:

1.	<a href="{{page.baseurl}}extension-dev-guide/package_module.html">Package your component</a> in a GitHub repository that's accessible by the machine on which you run the Magento Admin.
2.	On that machine, create a static route from `https://repo.magento.com` to your GitHub repository.

	To create a static route, add a line similar to the following to your `hosts` file:

		<IP or host name of your GitHub repository> https://repo.magento.com 

3.	<a href="{{page.baseurl}}comp-mgr/compman-main-pg.html#compman-access" target="_blank">Install your component</a> exactly like a merchant.
4.	Verify the component installed properly.
