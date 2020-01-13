---
group: cloud-guide
title: Syncing Data in Docker
functional_areas:
  - Cloud
  - Setup
  - Configuration
---
In the Docker environment, the {{site.data.var.ee}} application works only if the Docker containers have access to the {{ site.data.var.ee }} application data. You can provide access  either by directly mapping the current working directory or by using a file synchronization tool.

You must use a file synchronization tool if you are using [Docker Desktop](https://www.docker.com/products/docker-desktop) for Windows or macOS. This tool is required because the filesystem for the Docker containers is inside a Virtual Machine that the Docker Desktop is creating. The application files must be local to the containers.

## Native
The Magento Cloud Docker uses the `/app/` directory inside the containers by default. If you are using Linux native, you can add the `--sync-engine="native` option to the `docker:build` command, which maps the current working directory to the `/app/` directory to eliminate the data synchronization requirement.

```yaml
  fpm:
    volumes:
      - '.:/app'
  build:
    volumes:
      - '.:/app'
  deploy:
    volumes:
      - '.:/app'
  web:
    volumes:
      - '.:/app'
  cron:
    volumes:
      - '.:/app'
```

This configuration eliminates the requirement to use the `magento-sync` volume. You can bring the application up quickly without using the Mutagen or docker-sync applications.

You can configure native file synchronization by specifying the `--sync-engine="native"` on the `docker:build` command.
```bash
./vendor/bin/ece-tools docker:build --mode="developer" --sync-engine="native"
```

## Mutagen
Mutagen is used to sync the application data into the containers. You must configure Mutagen when you build the Docker environment, and the Mutagen service must be running on your host operating system. 
