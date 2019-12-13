---
group: cloud-guide
title: Docker container architecture
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

The [Magento Cloud Docker repository][docker-repo] contains build information for the following Docker containers.

-  **[Database container]**—Information about accessing the MariaDB container and managing db dumps.
-  **[CLI containers]**—List of containers that support CLI tools for build, deploy, and cron management.
-  **[Web containers]**—List of containers that facilitate file management and deployment of your store, such as TLS, Varnish and Web.

![Docker architecture]

This is a placeholder graphic!!!!

## Sharing data between host machine and container

You can share files easily between your machine and a Docker container by placing the files in the `.docker/mnt` directory. You can find the files in the `/mnt` directory the next time you build and start the Docker environment using the `docker-compose up` command.

## Service versions

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator (the `docker:build` command), you can override a default service version with the following optional parameters:

| Service       | Key        | Available versions | Docker image
| ------------- | ---------- | ------------------ | -------------
| Elasticsearch | `--es`     | 1.7, 2.4, 5.2, 6.5 | [magento/magento-cloud-docker-elasticsearch][elastic]
| MariaDB       | `--db`     | 10.0, 10.1, 10.2   | [mariadb]
| NGINX         | `--nginx`  | 1.9, latest        | [magento/magento-cloud-docker-nginx][nginx]
| Node          | `--node`   | 6, 8, 10, 11       | [node]
| PHP           | `--php`    | 7.0, 7.1, 7.2      | [magentp/magento-cloud-docker-php][php-image]
| RabbitMQ      | `--rmq`    | 3.5, 3.7           | [rabbitmq]
| Redis         | `--redis`  | 3.2, 4.0, 5.0      | [magento/magento-cloud-docker-redis][redis]

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip the interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator for the developer mode and specifies the PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

[Docker architecture]: {{ site.baseurl }}/common/images/cloud/docker-topology.png
[Database container]: {{page.baseurl}}/cloud/docker/docker-database.html
[CLI containers]: {{page.baseurl}}/cloud/docker/docker-cli.html
[Web containers]: {{page.baseurl}}/cloud/docker/docker-php.html
[docker-repo]: https://github.com/magento/magento-cloud-docker
[elastic]: https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch
[mariadb]: https://hub.docker.com/_/mariadb
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[node]: https://hub.docker.com/_/node/]
[rabbitmq]: https://hub.docker.com/_/rabbitmq
[php-image]: https://hub.docker.com/r/magento/magento-cloud-docker-php
[redis]: https://hub.docker.com/r/magento/magento-cloud-docker-redis
[tls]: https://hub.docker.com/r/magento/magento-cloud-docker-tls
[varnish]: https://hub.docker.com/r/magento/magento-cloud-docker-varnish