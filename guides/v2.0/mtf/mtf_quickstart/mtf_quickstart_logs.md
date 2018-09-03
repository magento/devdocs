---
group: mtf-guide
title: Quick start. See logs for failed tests
---

All failed tests are logged in `<magento2_root_dir>/dev/tests/functional/var/log`.

<div class="bs-callout bs-callout-tip" markdown="1">
This path is set in `<magento2>/dev/tests/functional/phpunit.xml`, element `<env name="basedir" value="<path_to_directory>" />`.
</div>

All Magento errors are logged in `<magento2_root_dir>/var/log`.
