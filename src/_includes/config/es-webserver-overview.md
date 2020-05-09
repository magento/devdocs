## Overview of secure web server communication {#es-ws-secure-over}

This topic discusses an example of securing communication between your web server and Elasticsearch using a combination of Transport Layer Security (TLS) encryption and [HTTP basic authentication](http://tools.ietf.org/html/rfc2617). You can optionally configure other types of authentication as well; we provide references for that information.

(An older term, Secure Sockets Layer (SSL), is frequently used interchangeably with TLS. In this topic, we refer to *TLS*.)

{:.bs-callout-warning}
Unless otherwise noted, all commands in this topic must be entered as a user with `root` privileges.

### Recommendations

We recommend the following:

*  Your web server uses TLS.

   TLS is beyond the scope of this topic; however, we strongly recommend you use a real certificate in production and not a self-signed certificate.

*  Elasticsearch runs on the same host as a web server. Running Elasticsearch and the web server on different hosts is beyond the scope of this topic.

   The advantage of putting Elasticsearch and the web server on the same host is that it makes intercepting encrypted communication impossible. The Elasticsearch web server does not have to be the same as the Magento web server; for example, Magento can run Apache and Elasticsearch can run nginx.
   If Elasticsearch is exposed to the public web, you should configure authentication. If your Elasticsearch instance is protected within your network, this may not be necessary. Work with your hosting provider to determine which security measures you should implement to protect your instance.

### More information about TLS

See one of the following resources:

*  Apache

   *  [Apache 2.4 strong encryption how-to](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)
   *  [How To Create a SSL Certificate on Apache for Ubuntu 14.04 (Digitalocean tutorial)](https://www.digitalocean.com/community/tutorials/how-to-create-a-ssl-certificate-on-apache-for-ubuntu-14-04)
   *  [Setting up an SSL secured Webserver with CentOS (CentOS wiki)](https://wiki.centos.org/HowTos/Https)

*  Nginx

   *  [Nginx SSL termination](https://www.nginx.com/resources/admin-guide/nginx-ssl-termination/)
   *  [How To Create an SSL Certificate on Nginx for Ubuntu 14.04 (Digitalocean tutorial)](https://www.digitalocean.com/community/tutorials/how-to-create-an-ssl-certificate-on-nginx-for-ubuntu-14-04)
   *  [Nginx SSL Certificate Installation (digicert)](https://www.digicert.com/ssl-certificate-installation-nginx.htm)
