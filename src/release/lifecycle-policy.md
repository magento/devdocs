---
title: Lifecycle policy
group: release
redirect_to: https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf
---

For {{site.data.var.ee}} 2.3 and subsequent releases:

-  {{site.data.var.ee}} will provide quality fixes for a minor release for a minimum of 12 months from the general availability announcement date of the next minor software release.

-  {{site.data.var.ee}} will provide security fixes for a minor release for a minimum of 18 months from the general availability announcement date of the next minor software release.

-  {{site.data.var.ee}} will provide security fixes through patch releases for currently supported minor release versions only. Security fixes will not be backported to previous minor releases, nor to previous patch releases within supported minor releases.

   For example, while Adobe will provide security releases to its 2.3 release line until April 2022, customers must upgrade to the latest patch or security patch to access security fixes. When 2.3.7-p1 is released, customers must upgrade to 2.3.7-p1 to adopt the security fixes. The security fixes will not be backported to previous patch releases of the 2.3 release line (2.3.0-2.3.6-p1).

-  To better streamline our lifecycle policy, {{site.data.var.ee}} will provide quality fixes to its 2.4 release line until the end of support date of the PHP version upon which it is based. Refer to the table below for the End of Software Support dates for {{site.data.var.ee}} release lines:

| Release                          | Release Date  | End of Software Support<sup>1</sup> | Dependent PHP Version |
|----------------------------------|---------------|-------------------------------------|-----------------------|
| {{site.data.var.ee}} 2.3         | November 2018 | April 2022<sup>2</sup>              | PHP 7.3 and 7.4<sup>3</sup>               |
| {{site.data.var.ee}} 2.4.0-2.4.3 | July 2020     | November 2022                       | PHP 7.4               |
| {{site.data.var.ee}} 2.4.4-2.4.6 | TBA           | November 2024                       | PHP 8.1               |

<sup>1 End of Software Support includes both end of quality fixes and end of security fixes.</sup><br>
<sup>2 The End of Software Support date for 2.3 has been extended to April 2022 due to impacts from COVID-19.</sup>
<sup>3 2.3.0-2.3.6 are dependent on PHP 7.3; 2.3.7 is dependent on PHP 7.4.</sup>

See [Software Lifecycle Policy](https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf).
