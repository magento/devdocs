---
group: cloud-guide
title: PHP container
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

The PHP-FPM container is based on the [magento/magento-cloud-docker-php][php] image.

-  Port: 9000
-  Read-only volumes:
   -  `/app`
   -  `/app/vendor`
   -  `/app/generated`
   -  `/app/setup`
-  Read/Write volumes:
   -  `/app/var`
   -  `/app/app/etc`
   -  `/app/pub/static`
   -  `/app/pub/media`

### Web container

The web container works with the [PHP-FPM] to serve PHP code, the **DB** image for the local database, and the **Varnish** image to send requests and cache the results.

### Varnish container

The Varnish container is based on the [magento/magento-cloud-docker-varnish][varnish] image. Varnish works on port 80.

### TLS container

The TLS termination proxy container, based on the [magento/magento-cloud-docker-tls][tls] image, facilitates the Varnish SSL termination over HTTPS.

[php]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[PHP-FPM]: https://php-fpm.org
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls