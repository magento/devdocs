---
group: cloud-guide
title: Configure Docker environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
redirect_from:
  - /cloud/reference/docker-universal-config.html
---

Magento Cloud Docker can be used separately from Magento Cloud sine version `1.1`. It supports both Magento Open Source and Magento Commerce `2.1.16` and higher.

## Installation

You can install Cloud Docker by adding the specific dependency to your project's `composer.json` file:

```json
{
  "require-dev": {
    "magento/magento-cloud-docker": "^1.1"
  }
}
```

Or by running CLI command

```bash
composer require --dev "magento/magento-cloud-docker:^1.1"
```

## Configuration

Magento Cloud Docker supports few configurations:

- Magento Cloud configuration files (`.magento.app.yaml` and `.magento/services.yaml`)
- Standalone configuration file `.magento.docker.yaml`

For more information about configuration for Magento Cloud Docker - navigate to [Cloud Docker with Magento Cloud][docker-reference]

### Standalone configuration

Magento Cloud Docker uses `.magento.docker.yaml` configuration file to provision a Docker environment.
This configuration describes the state of Cloud Docker environment, including provisioned services, volumes and variables.

```yaml
services: [] # List of services
variables: [] # List of environment variables
hooks: [] # List of available hooks
mounts: [] #l List of available mounts
```

#### Services

This section describes the required services. You can find list of available services [here][services]
Service definition consists of service name and  properties:

| Name    | Description         | Type   | Is required |
| ------- | ------------------- | ------ | ----------  |
| version | The service version | string | Yes         |
| enabled | The service state   | bool   | No          |

```yaml
services:
  php:
    version: "7.2"
    enabled: true
```

- If `enabled` property is not set, it will be set to `true` by default

#### PHP service

This service has additional properties.

| Name        | Description                     | Type | Is required |
| ----------- | ------------------------------- | ---  | ----------- |
| extensions  |                                 |      |             |
| -- enabled  | The list of enabled extensions  | list | No          |
| -- disabled | The list of disabled extensions | list | No          |

```yaml
services:
  php:
    version: "7.2"
    extensions:
      enabled:
        - xsl
      disabled:
        - opcache
```

- If `extensions.enabled` is not provided, PHP will be run with version-specific default extensions.

#### Cron service

This service enables the cron service with possible jobs configuration.

| Name         | Description                             | Type   | Is required |
| ------------ | --------------------------------------- | ------ | ----------- |
| jobs         |                                         | list   | Yes         |
| -- name      | The list of enabled extensions          | string | Yes         |
| --- schedule | The schedule in cron time string format | string | Yes         |
| --- command  | The command relative to project's root  | string | Yes         |

```yaml
services:
  cron:
    jobs:
      run:
        schedule: "* * * * *"
        command: "php bin/magento cron:run"
```

### Hooks

The Hooks section represents different hooks which consists of the name and commandline.

```yaml
hooks:
  build: |
    set -e
    php ./vendor/bin/ece-tools run scenario/build/generate.xml
    php ./vendor/bin/ece-tools run scenario/build/transfer.xml
  deploy: |
    php ./vendor/bin/ece-tools run scenario/deploy.xml
  post_deploy: |
    php ./vendor/bin/ece-tools run scenario/post-deploy.xml
```

### Variables

The Variables  section consists of different variables which may be passed to all containers in once:

```yaml
variables:
  DUMMY_VARIABLE: "some value"
  DUMMY_ARRAY_VARIABLE:
    TEST_VALUE: "value"
    TEST_VALUE2: 2
```

- Array variables will be encoded with `json+base64` encodings

### Mounts

The Mounts section consists of name and parameters for named mounts.

| Name         | Description                   | Type    | Is required |
| ------------ | ----------------------------- | ------  | ----------- |
| path         | The relative path in project  | string  | Yes         |

```yaml
mounts:
  var:
    path: "var"
  app-etc:
    path: "app/etc"
  pub-media:
    path: "pub/media"
  pub-static:
    path: "pub/static"
```

## Fully custom configuration

You can fully override the file configuration by using command `build:custom:compose`

   ```bash
   ./vendor/bin/ece-docker build:custom:compose '{"name":"magento","system":{"mode":"production","host":"magento2.docker","port":"80"},"services":{"php":{"version":"7.2","enabled":true,"extensions":{"enabled":["xsl"]}},"mysql":{"version":"10.0","enabled":true}},"hooks":{"build":"\nset -e\nphp .\/vendor\/bin\/ece-tools run scenario\/build\/generate.xml\nphp .\/vendor\/bin\/ece-tools run scenario\/build\/transfer.xml\n","deploy":"php .\/vendor\/bin\/ece-tools run scenario\/deploy.xml","post_deploy":"php .\/vendor\/bin\/ece-tools run scenario\/post-deploy.xml"},"mounts":{"var":{"path":"var"},"app-etc":{"path":"app\/etc"},"pub-media":{"path":"pub\/media"},"pub-static":{"path":"pub\/static"}}}' 
   ```

This command accepts next arguments:

-  **source** — The JSON pre-formatted string with descition of required configuration.
Is a JSON representation of `.magento-docker.yaml` configuration file.

[docker-reference]: {{site.baseurl}}/cloud/docker/docker-quick-reference.html
[services]: {{site.baseurl}}/cloud/docker/docker-containers.html
