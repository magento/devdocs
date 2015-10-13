---
layout: m1x
title: nginx configuration
---

<h2 id="instgde-pre-nginx-install">Install nginx</h2>
We support nginx version 1.7.x. Installing the nginx software is beyond the scope of this guide. You can refer to a resource like the following:

*	<a href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/" target="_blank">nginx wiki</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts" target="_blank">How To Install Nginx on Ubuntu 14.04 LTS (digitalocean)</a>
*	<a href="https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-6-with-yum" target="_blank">How To Install Nginx on CentOS 6 (digitalocean)</a>

<h2 id="inst-pre-nginx-secy">nginx security setting</h2>
<a href="https://www.byte.nl/" target="_blank">Byte.nl</a> recently reported that some misconfigured Magento sites using the nginx web server software are vulnerable to attacks. The misconfiguration allows outside access to Magento cache files. The cache files have predictable names and can contain sensitive information, including Magento database passwords. This information can be used to obtain access to an installation and customer information.

To avoid this issue, you can use <a href="https://gist.github.com/gwillem/cd5ae6845fa33aa0d481" target="_blank">this nginx configuration</a> provided by Willem de Groot.

We also recommend you review the <a href="http://merch.docs.magento.com/ee/user_guide/Magento_Enterprise_Edition_User_Guide.html" target="_blank">Magento Security Best Practices</a>.

Additionally, you can also check your site for other security vulnerabilities at <a href="http://magereport.com" target="_blank">http://magereport.com</a>. This is a Magento community project that is not affiliated with Magento.