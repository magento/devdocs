---
title: Lifecycle policy
group: release
---

For {{site.data.var.ece}} 2.3 and subsequent releases:

-  Magento will provide quality fixes for a minor release for a minimum of 12 months from the general availability announcement date of the next minor software release.

-  Magento will provide security fixes for a minor release for a minimum of 18 months from the general availability announcement date of the next minor software release.

-  Magento will provide security fixes through patch releases for currently supported minor release versions only. Security fixes will not be backported to previous minor releases, nor to previous patch releases within supported minor releases.

   For example, while 2.3 and 2.4 are currently supported minor releases, security fixes will be released as 2.3.X and 2.4.Y, where X and Y represent the next incremental patch release cumulative of all prior patches. Patch releases will not be released for prior minor releases that have reached end of support (for example, 2.2.Z), or as patches to prior patch releases (for example, 2.3.1.X).

-  Magento will provide quality fixes through patch release for the latest supported minor release version only. Quality fixes will be available as individual patches for all other currently supported minor release versions. Quality fixes will not be backported to other previous minor releases, nor to previous patch releases within supported minor releases.

   For example, while 2.3 and 2.4 are currently supported minor releases, individual patches will be released as 2.3.X and release patches will be released as 2.4.Y, where X and Y represent the next incremental patch release cumulative of all prior patches. Neither patch releases nor individual patches will be released for prior minor releases that have reached end of support (e.g. 2.2.2).

| Release                   | Release Date  | End of Quality Fixes | End of Security Fixes/<br>End of Software Support |
|---------------------------|---------------|----------------------|---------------------------------------------------|
| {{site.data.var.ece}} 2.3 | November 2018 | July 2021            | April 2022<sup>*</sup>                            |
| {{site.data.var.ece}} 2.4 | July 2020     |                      |                                                   |

*<sup>*</sup> The End of Software Support date for {{site.data.vr.ece}} 2.3 has been extended to April 2022 due to impacts from COVID-19.*

See [Magento Software Lifecycle Policy](https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf).
