---
group: cloud-guide
title: Service containers
functional_areas:
  - Cloud
  - Docker
  - Configuration
---
Each service ...

THIS NEEDS MORE CONTENT

Service | Image
------- | -----
**ElasticSearch** | [magento/magento-cloud-docker-elasticsearch][elastic]
**NGINX**         | [magento/magento-cloud-docker-nginx][nginx]
**RabbitMQ**      | [rabbitmq][rabbit]
**Redis**         | [magento/magento-cloud-docker-redis][redis]

## Service versions

{{site.data.var.ece}} references the `.magento.app.yaml` and `.magento/services.yaml` configuration files to determine the services you need. When you start the Docker configuration generator (the `docker:build` command), you can overwrite a service version with the following optional parameters:

| Service       | Key        | Available versions
| ------------- | ---------- | ------------------
| Elasticsearch | `--es`     | 1.7, 2.4, 5.2, 6.5
| MariaDB       | `--db`     | 10.0, 10.1, 10.2
| NGINX         | `--nginx`  | 1.9, latest
| Node          | `--node`   | 6, 8, 10, 11
| PHP           | `--php`    | 7.0, 7.1, 7.2
| RabbitMQ      | `--rmq`    | 3.5, 3.7
| Redis         | `--redis`  | 3.2, 4.0, 5.0

The `docker:build` command runs in interactive mode and verifies the configured service versions. To skip the interactive mode, use the `-n, --no-interaction` option.

For example, the following command starts the Docker configuration generator for the developer mode and specifies the PHP version 7.2:

```bash
./vendor/bin/ece-tools docker:build --mode="developer" --php 7.2
```

[elastic]: https://hub.docker.com/r/magento/magento-cloud-docker-elasticsearch
[nginx]: https://hub.docker.com/r/magento/magento-cloud-docker-nginx
[rabbit]: https://hub.docker.com/_/rabbitmq
[redis]: https://hub.docker.com/r/magento/magento-cloud-docker-redis