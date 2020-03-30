---
group: software-update-guide
title: Troubleshoot the updater application
functional_areas:
- Upgrade
redirect_to: https://support.magento.com/hc/en-us/articles/360033352071
---

If the updater application is not available, the following message displays in the readiness check:

```terminal
Updater application is not available.
Please, download and install Updater application.
```

To resolve this issue, see if there is a `<magento_root>/update` directory that contains files and subdirectories.
Otherwise, see [Set up the updater]({{ page.baseurl }}/comp-mgr/updater/update-updater.html).
