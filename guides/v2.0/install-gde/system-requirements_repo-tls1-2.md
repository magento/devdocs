---
layout: default
group: install_pre
subgroup: Getting Started
title: TLS 1.2 requirement for repo.magento.com
menu_title: TLS 1.2 requirement for repo.magento.com
menu_node: 
menu_order: 102
level3_menu_node: level3child
level3_subgroup: tls
version: 2.0
github_link: install-gde/system-requirements_repo-tls1-2.md
---

## TLS 1.2 requirement for repo.magento.com
The Magento software and component repository, `repo.magento.com`, recently started requiring Transport Layer Security (TLS) 1.2 for added security.

### Symptoms
If you have an earlier version of TLS, you'll see the errors discussed in this section.

#### Downloading a Magento metapackage
The following error displays if you attempt to run `composer create-project` to get a Magento metapackage:

	[Composer\Downloader\TransportException]                                           
	The "https://repo.magento.com/packages.json" file could not be downloaded: Failed  
	to enable crypto                                                                  
	failed to open stream: operation failed  

### Using the Web Setup Wizard
Actions like saving your authentication credentials fail with the following error:

![SSL connect error]({{ site.baseurl }}common/images/install_ssl-connect-error.png)

### Solution
The solution to this issue depends on how your operating system packages TLS. See one of the following sections for more information:

*	[CentOS](#solution-centos)
*	[Mac OS](#solution-macos)

#### CentOS {#solution-centos}
The source of the issue is your version of [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html){:target="_blank"}. `libcurl` versions earlier than 7.34 use TLS 1.1 or earlier by default. 

To determine the version of `libcurl` you're running, enter the following command on the server that processes PayPal transactions:

	curl --version

If you're already running version 7.34 or later, no action is necessary.

If the version is earlier than 7.34, upgrade your server to CentOS 6.8 or later. CentOS 6.8 has a `libcurl` version that defaults to TLS 1.2. CentOS 7 has a newer version of `libcurl` that also defaults to TLS 1.2.

#### Mac OS {#solution-macos}
Recent updates to the [OS X liip package](http://php-osx.liip.ch){:target="_blank"} should resolve the issue.