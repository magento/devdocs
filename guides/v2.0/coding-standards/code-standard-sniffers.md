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

We recommend the consistent use of a <i>code sniffer</i> to enhance the readability of your code and help ensure that it meets Magento code standards.  Although a sniffer will identify many more inconsistencies and errors than a manual edit, we recommend that you evaluate and make any fixes that your sniffer program identifies.  

### Magento provides

Here are the sniffing tools that Magento provides: 

* <a href="https://github.com/magento-ecg/coding-standard" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>
for PHP developers who use a code sniffer in their development process. Use these specifications to configure your code sniffer of choice to bring your <i>PHP coding style closer to Magento PHP standards</i>. 

* <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a>, which implements the full PSR2 standard. You can extend PHP_CodeSniffer to include your own rules, <a href="https://github.com/magento/magento2/blob/develop/dev/tests/static/framework/Magento/ruleset.xml" target="_blank">as we have</a>.

















