---
group: configuration-guide
title: Example - logging to a custom log file
functional_areas:
  - Configuration
  - System
  - Setup
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `Magento\Framework\Logger` module contains the following handler classes:

| Class | Log file |
| ----- | -------- |
| [Magento\Framework\Logger\Handler\Base]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Logger/Handler/Base.php) | - |
| [Magento\Framework\Logger\Handler\Debug]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Logger/Handler/Debug.php) | `/var/log/debug.log` |
| [Magento\Framework\Logger\Handler\Exception]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Logger/Handler/Exception.php) | `/var/log/exception.log` |
| [Magento\Framework\Logger\Handler\Syslog]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Logger/Handler/Syslog.php) | - |
| [Magento\Framework\Logger\Handler\System]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Logger/Handler/System.php) | `/var/log/system.log` |

You may find them in the `lib/internal/Magento/Framework/Logger/Handler` directory.

{% include config-guide/custom-logger-handler-examples.md %}
