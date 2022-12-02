---
group: configuration-guide
title: .gitignore reference
functional_areas:
  - Configuration
  - System
  - Setup
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/files/config-reference-gitignore.html
layout: migrated
---

We include a base `.gitignore` file with the {{site.data.var.ce}} project repository. See [the latest Magento `.gitignore`](https://raw.githubusercontent.com/magento/magento2/2.4/.gitignore) file. If you need to add a file that is in the `.gitignore` list, you can use the -f (force) option when staging a commit:

```bash
git add <path/filename> -f
```