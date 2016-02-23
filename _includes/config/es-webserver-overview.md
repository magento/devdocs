<div markdown="1">

## Overview of secure web server communication {#es-ws-secure-over}
This topic discusses an example of securing communication between your web server and Elasticsearch using a combination of Secure Sockets Layer (SSL) encryption and <a href="http://tools.ietf.org/html/rfc2617" target="_blank">HTTP Basic</a> authentication. You can optionally configure other types of authentication as well; we provide references for that information.

<div class="bs-callout bs-callout-warning">
    <p>Unless otherwise noted, all commands in this topic must be entered as a user with <code>root</code> privileges.</p>
</div>

### Recommendations
We recommend the following:

*	Your web server uses Secure Sockets Layer (SSL).

	SSL is beyond the scope of this topic; however, we strongly recommend you use a real certificate in production and not a self-signed certificate.
*	Elasticsearch runs on the same host as your web server. Running Elasticsearch and the web server on different hosts is beyond the scope of this topic.

	The advantage of putting Elasticsearch and the web server on the same host is that it makes intercepting encrypted communication impossible.

### More information about SSL
See one of the following resources:

*	Apache

	*	<a href="https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html" target="_blank">Apache 2.4 strong encryption how-to</a>
	*	<a href="https://httpd.apache.org/docs/2.2/en/ssl/" target="_blank">Apache 2.2 SSL/TLS page</a>
	*	<a href="https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04" target="_blank">How To Create a SSL Certificate on Apache for Ubuntu 14.04 (Digitalocean tutorial)</a>
	*	<a href="https://wiki.centos.org/HowTos/Https" target="_blank">Setting up an SSL secured Webserver with CentOS (CentOS wiki)</a>

*	nginx

	*	<a href="https://www.nginx.com/resources/admin-guide/nginx-ssl-termination/" target="_blank">nginx SSL termination</a>
	*	<a href="https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04" target="_blank">How To Create an SSL Certificate on Nginx for Ubuntu 14.04</a>
	*	<a href="https://www.digicert.com/ssl-certificate-installation-nginx.htm" target="_blank">Nginx SSL Certificate Installation (digicert)</a>