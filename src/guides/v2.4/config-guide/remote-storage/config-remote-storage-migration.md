---
group: configuration-guide
title: Migrate to remote storage
functional_areas:
  - Configuration
  - Remote Storage
---

{:.procedure}
To migrate existing media files to the remote storage:

1. Enable [remote storage] for a specific adapter using the CLI.

1. Migrate existing media files.

   ```bash
   ./magento2ce/bin/magento remote-storage:sync
   ```

<!-- link definitions -->
[remote storage]: {{page.baseurl}}/config-guide/remote-storage/config-remote-storage.html
