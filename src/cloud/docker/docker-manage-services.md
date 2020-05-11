---
group: cloud-guide
title: Manage Services
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The Cloud Docker development environment provides various [Services].

## Adding a new version of existing service

The version of a service is determined through the `.magento/services.yml` file. A new version of the existing service can be added by defining `Dockerfile` to the `images` directory of magento-cloud-docker.

{:.procedure}
For certain services such as [elasticsearch], [php], [nginx], [tls], [varnish] the new version can be added as follows:

1. Go to `images` directory of magento-cloud-docker and select the necessary service for which a new version needs to be added.

1. Create a directory by specifying the version of the service.

1. Inside the directory that is created, add a `Dockerfile`, specify the version, and add the other contents such as plugins etc. inside the `Dockerfile`.

1. Add the `docker-entrypoint.sh` and `healthcheck` files if needed.

1. Add the necessary `.conf`, `.ini` files inside etc directory if needed.

1. Run the following command to build the image.

   `build -t test/<service-name>:<service-version>`

[Services]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html
[elasticsearch]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#elasticsearch-container
[php]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#fpm-container
[tls]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#tls-container
[varnish]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#varnish-container
[nginx]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html#web-container
