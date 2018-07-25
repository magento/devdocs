---
group: mtf-guide
title: Quick start. See logs for failed tests
version: 2.1
github_link: mtf/mtf_quickstart/mtf_quickstart_logs.md
---

All failed tests are logged in `<magento2_root_dir>/dev/tests/functional/var/log`.

<div class="bs-callout bs-callout-tip">
  <p>This path is set in <code>&lt;magento2&gt;/dev/tests/functional/phpunit.xml</code>, element <code>&lt;env name="basedir" value="&lt;path_to_directory&gt;" /&gt;</code>.</p>
</div>

All Magento errors are logged in `<magento2_root_dir>/var/log`.
