---
group: cloud-guide
title: Synchronizing data in a Docker developer environment
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

When you start Docker with the native file synchronization option, the current working directory maps to the `/app` folder in the containers:

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

## Configure file synchronization

If you do not specify a `--sync-engine` option, the Magento Docker build uses the `native` option.

On macOS or Windows systems, you can configure file synchronization using Mutagen or docker-sync by adding the `--sync-engine="<type>"` option to the `ece-docker build:compose` command.

For example:

```bash
./vendor/bin/ece-docker build:compose --mode="developer" --sync-engine="mutagen"
```

For detailed configuration instructions, see [launch Docker in developer mode].

[launch Docker in developer mode]: {{site.baseurl}}/cloud/docker/docker-mode-developer.html
