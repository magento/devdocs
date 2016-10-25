---
layout: default
group: coding-standards
subgroup: Coding standards
title: Code sniffers
menu_title: PHP code sniffers
menu_order: 3
version: 2.0
github_link: coding-standards/code-standard-sniffers.md
---

## PHP code sniffers

We recommend the consistent use of a <i>code sniffer</i> to enhance the readability of your code and help ensure that it meets Magento code standards.  A code sniffer is a tool that automates the process of identifying code irregularities. Although a sniffer will identify many more inconsistencies and errors than a manual edit, we recommend that you evaluate and make any fixes that your sniffer program identifies.  

Magento recommends the use of <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a>, the most popular code sniffer in use throughout the PHP development community.  PHP_CodeSniffer implements the full PSR4 standard. You can extend PHP_CodeSniffer to include your own rules, too, <a href="https://github.com/magento/magento2/blob/develop/dev/tests/static/framework/Magento/ruleset.xml" target="_blank">as we have</a>. The <a href="https://github.com/magento-ecg/coding-standard" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a> provides specifications that you can use to configure your code sniffer of choice to bring your <i>PHP coding style closer to Magento PHP standards</i>.



### Code standards 

Magento supports the full <a href="http://stackoverflow.com/questions/24868586/what-is-the-difference-between-psr-0-and-psr-4" target="_blank">PSR4</a> standard plus some Magento-specific coding practices. 


The <a href="http://devdocs.magento.com/guides/v2.0/coding-standards/bk-coding-standards.html" target="_blank">Coding standards overview</a> introduces Magento-specific practices for PHP, JavaScript, and JQuery. 





