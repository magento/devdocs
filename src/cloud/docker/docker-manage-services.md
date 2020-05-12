---
group: cloud-guide
title: Manage configuration for supported services
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The Cloud Docker development environment provides various [Services].

## Adding a new version of existing service

In {{site.data.var.mcd}} package the available service versions are determined by the Docker service images configured in the {{site.data.var.mcd}} `images` directory. You can add a new service version by creating a directory for the version and adding a `Dockerfile` and other files to configure the new version.

{:.procedure}
To add a new service version using a `Dockerfile`:

1. Clone the `{{site.data.var.mcd}}` project to your local environment if necessary.

1. On the command line, change to the directory that contains the existing service version configurations.

   ```bash
      cd magento-cloud-docker/images/<service-name>
   ```

1. Create a directory for the new version.

1. In the new directory, add the `Dockerfile` that contains the image configuration details for the new version. Use the `Dockerfile` for an existing version as a template and add any other required configuration such as supported plugins.

1. Add the `docker-entrypoint.sh` and `healthcheck` files if needed.

1. Add any necessary `.conf` and `.ini` files for the service to the `etc` directory.

1. Run the following command to build the image.

   `docker build -t test/<service-name>:<service-version>`

1. Once the build succeeds, test the changes by specifying the [Docker build sources].

[Services]: https://devdocs.magento.com/cloud/docker/docker-containers-service.html
[Docker build sources]: https://devdocs.magento.com/cloud/docker/docker-extend.html#specify-docker-build-sources