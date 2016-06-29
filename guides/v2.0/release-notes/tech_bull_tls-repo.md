---
layout: default 
group: release-notes
subgroup: Technical Bulletin
title: Technical Bulletin
menu_title: Transport Layer Security (TLS) 1.1+ requirement for repo.magento.com (June 30, 2016)
menu_node: 
menu_order: 2
version: 2.0
github_link: release-notes/tech_bull_tls-repo.md
---

## Transport Layer Security (TLS) requirement for repo.magento.com
{% include install/tls-repo.md %}

### Solution
The solution to this issue depends on how your operating system packages TLS. See one of the following sections for more information:

*	[Unbuntu](#solution-ubuntu)
*	[CentOS](#solution-centos)
*	[Mac OS](#solution-macos)

#### Ubuntu {#solution-ubuntu}
Make sure you're using [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html){:target="_blank"}. `libcurl` versions 7.34 or later; these versions use TLS 1.2 by default.

To determine your `libcurl` version, enter the following command:

	curl --version

#### CentOS {#solution-centos}
The source of the issue is that the [`libcurl`](https://curl.haxx.se/libcurl/c/CURLOPT_SSLVERSION.html){:target="_blank"} library packaged with CentOS 6.6 and earlier use TLS 1.1 or earlier by default. 

To determine the version of CentOS your server runs, enter the following command:

	cat /etc/*release*

If you're already running CentOS 6.8 or later, no action is necessary. According to the [CentOS 6.8 changelog](https://wiki.centos.org/Manuals/ReleaseNotes/CentOS6.8){:target="_blank"}, "various applications now support TLS 1.2, i.e. OpenLDAP, yum, stunnel, vsftpd, git, postfix and others. Also TLS 1.2 has been enabled by default in various packages".

(CentOS 7 has a newer version of `libcurl` that also defaults to TLS 1.2.)

#### Mac OS {#solution-macos}
Recent updates to the [OS X liip package](http://php-osx.liip.ch){:target="_blank"} should resolve the issue.