---
layout: default
group: coding-standards
subgroup: Coding standards
title: Code sniffers
menu_title: Code sniffers
menu_order: 3
version: 2.0
github_link: coding-standards/code-standard-sniffers.md
---

## PHP code sniffers

We recommend the consistent use of a <i>code sniffer</i> to enhance the readability of your code and help ensure that it meets Magento code standards.  Although a sniffer will identify many more inconsistencies and errors than a manual edit, we recommend that you manually evaluate and make any fixes that your sniffer program has identified.  


Magento provides the <a href="https://github.com/magento-ecg/coding-standard.xml" target="_blank">ECG Magento PHP Code Sniffer Coding Standard</a>
for PHP developers. Use these specifications to configure your code sniffer of choice to bring your <i>PHP coding style closer to Magento PHP standards</i>. 


There are many open-source code sniffers that can enhance the readability of your code. Although Magento does not specifically recommend alternative sniffers, many community members use <a href="http://pear.php.net/manual/en/package.php.php-codesniffer.faq.php" target="_blank">PHP_CodeSniffer</a> to identify PHP syntax errors. It incorporates the same syntax-checking tools that are included in `composer.json` plus more extensive stylistic checks. 
















