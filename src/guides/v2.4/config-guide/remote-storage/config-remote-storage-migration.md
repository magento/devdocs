---
group: configuration-guide
title: Migrate to remote storage
functional_areas:
  - Configuration
  - Remote Storage
---

To migrate to remote storage, perform next actions:

1. Enable [remote storage] with a selected adapter via CLI

1. Migrate existing media files using command:

```bash
./magento2ce/bin/magento remote-storage:sync
```

<!-- link definitions -->
[remote storage]: {{page.baseurl}}/config-guide/remote-storage/config-remote-storage.html
[nginx image filter module]: http://nginx.org/en/docs/http/ngx_http_image_filter_module.html
[schema image]: {{site.baseurl}}/common/images/config-remote-storage-schema.png
{:width="500px"}
