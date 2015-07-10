---
layout: default
group: mtf-guide
subgroup: B. Installation
title: Install Magento Testing Framework
menu_title: Perform installation
menu_order: 2
github_link: guides/v1.0/mtf/mtf_install.md
---
<h2 id="mtf_install_pre">Perform installation</h2>

For installing of the Magento Testing Framework you need [Composer][] to be installed. [Composer][] downloads and installs libraries mentioned in <code>&lt;magento_root&gt;/dev/tests/functional/composer.json</code>.

1. Open your terminal.
1. Change working directory to <code>&lt;magento_root&gt;/dev/tests/functional/</code>.
1. Enter <code>composer install</code>.

<div class="bs-callout bs-callout-info" id="info">
  <p>If command failed, may be <a href="https://getcomposer.org">Composer</a> hasn't been installed globally. To run it locally put <code>composer.phar</code> into folder where <code>composer.json</code> file is located (that is, <code>&lt;magento_root&gt;/dev/tests/functional/</code>).<br/>
Enter <code>php composer.phar install</code>.</p>
</div>

That's it!






 

[Composer]: https://getcomposer.org/
[Bash]: https://www.gnu.org/software/bash/