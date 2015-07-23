---
layout: default
group: mtf-guide
subgroup: Quick Start
title: Quick start with the Magento Testing Framework
menu_title: See logs for failed tests
menu_order: 4
github_link: mtf/mtf_quickstart/mtf_quickstart_logs.md
---

<h2 id="mtf_quickstart_logs">See logs for failed tests</h2>

All failed tests are logged in <code>&lt;magento_root&gt;/dev/tests/functional/var/log</code>.

<div class="bs-callout bs-callout-tip">
  <p>This path is set in <code>&lt;magento_root&gt;/dev/tests/functional/phpunit.xml</code>, element <code>&lt;env name="basedir" value="&lt;path_to_directory&gt;" /&gt;</code>.</p>
</div>

All Magento errors are logged in <code>&lt;magento_root&gt;/var/log</code>.