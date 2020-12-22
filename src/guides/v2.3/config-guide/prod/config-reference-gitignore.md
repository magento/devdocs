---
group: configuration-guide
title: .gitignore reference
functional_areas:
  - Configuration
  - System
  - Setup
---

We include a base `.gitignore` file with the {{site.data.var.ce}} project repository. See [the latest Magento `.gitignore`](https://raw.githubusercontent.com/magento/magento2/2.3/.gitignore) file. If you need to add a file that is in the `.gitignore` list, you can use the -f (force) option when staging a commit:

```bash
git add <path/filename> -f
```
