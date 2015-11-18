---
layout: default
group: install_trouble
subgroup: Z_Other issues
title: Known issues that affect installation
menu_title: Known issues that affect installation
menu_node: 
menu_order: 30 
github_link: install-gde/trouble/tshoot_install-issues.md
---

<h2 id="known-devbeta-xdebug">Known issue with xdebug</h2>
If you use the optional PHP extension `xdebug`, you can encounter exceptions:

*   During installation 
*   Accessing either the Magento Admin or storefront after a successful installation 

Sample exception:

    Fatal error: Maximum function nesting level of '100' reached, aborting!

To resolve this issue, you can:

*   Disable the `xdebug` extension.
*   Set the value of `xdebug.max_nesting_level` to a value of 200 or more. For more information, see <a href="http://xdebug.org/docs/basic#max_nesting_level" target="_blank">xdebug documentation</a>.

After you change the configuration of or disable `xdebug`, restart Apache:

*   CentOS: `sudo service httpd restart`
*   Ubuntu: `sudo service apache2 restart`


<h2 id="known-devrc-php">Known issue with timezone in certain PHP versions</h2>
This issue affects builds *earlier than* 0.74-beta10 only. If you have a later build, you can ignore this issue.

There is a <a href="https://bugs.php.net/bug.php?id=66985" target="_blank">known PHP issue</a> with versions:

*   5.5.10&ndash;5.5.16
*   5.6.0

This issue prevents users from being able to set their timezones to Greenwich time and several other time zones. 

To work around this issue, after installing the Magento 2 software, edit the following files:

*   `app/code/Magento/Config/Model/Config/Backend/Locale/Timezone.php`
*   `lib/internal/Magento/Framework/Locale/Lists.php`
*   `setup/src/Magento/Setup/Model/Lists.php`

In each file, change the value of `$zones` as follows:

from

    $zones = \DateTimeZone::listIdentifiers(\DateTimeZone::ALL_WITH_BC);

to

    $zones = \DateTimeZone::listIdentifiers(\DateTimeZone::ALL);
