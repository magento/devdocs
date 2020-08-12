---
group: cloud-guide
title: Troubleshooting
functional_areas:
  - Cloud
  - Docker
  - Configuration
---

## Elasticsearch

On some Linux systems, when you launch the Docker environment, the Elasticsearch service fails to start and the following error displays:

```terminal
ERROR: [1] bootstrap checks failed
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

To fix the error, run the following `sysctl` command to increase the memory map area allocation.

```bash
sysctl -w vm.max_map_count=262144
```

{:.procedure}
To permanently update the system setting for `vm.max_map_count`:

1. Edit the sysctl configuration file (`etc/sysctl.conf`) and set the required value for the `vm.max_map_count` option.

1. Reboot your system.

1. Run the following command to verify the change.

   ```bash
   sysctl vm.max_map_count
   ```
