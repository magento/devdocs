---
group: cloud-guide
title: Syncing Data in Docker
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

Application data needs to be present in the containers for the application to be able to work. This can be done either by directly mapping the current working directory or through a file synchronization tool. 

A file synchronization tool is required if you are using [Docker Desktop](https://www.docker.com/products/docker-desktop) for Windows or Mac. This is because the filesystem for the docker containers is inside a Virtual Machine that the Docker Desktop is creating. The application files need to be local to the containers. 


## Native
The Magento Cloud Docker by default uses the /app/ directory inside the containers. If you are using linux native you can map the current working directory to /app/ and not need any data syncing at all.

```
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

Doing this effectively removes the requirement of using the magento-sync volume. This brings the application up very quickly, and removes the requirement for Mutagen.

This can be configured during the docker:build command as follows:
```
./vendor/bin/ece-tools docker:build --mode="developer" --sync-engine="native"
```


## Mutagen
Mutagen is used to sync the application data into the containers. It needs to be configured at build time and it also requires the mutagen service to be running in your host os. 



