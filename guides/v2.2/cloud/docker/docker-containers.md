---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Docker repository][docker-repo]contains build information for the following Docker containers.

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

[docker-repo]: https://github.com/magento/magento-cloud-docker