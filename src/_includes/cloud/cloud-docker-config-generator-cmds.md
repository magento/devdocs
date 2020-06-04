You use the following commands to generate the Docker configuration files and build your environment.

Action | Command
:----- | :------
Builds the Docker environment in [production mode][mode] by default and verifies configured service versions. | `ece-docker build:compose`
Builds the docker environment in [developer mode][mode]. | `ece-docker build:compose --mode="developer"`
Builds the docker environment in [production mode][mode]. |`ece-docker build:compose --mode="production"`
Convert PHP configuration files to Docker ENV files. | `ece-docker image:generate:php`

For example, the following command starts the Docker configuration generator in developer mode and specifies PHP version 7.2:

```bash
./vendor/bin/ece-docker build:compose --mode="developer" --php 7.2
```

The `ece-docker build:compose` command runs in interactive mode and verifies the configured service versions. To skip interactive mode, use the `-n, --no-interaction` option.

Use the following command to list the {{site.data.var.mcd-prod}} `ece-docker` commands:

```bash
php ./vendor/bin/ece-docker list
```
