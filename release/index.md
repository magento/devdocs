---
layout: full-width
title: Magento product release information
redirect_from: 
  - /availability.html
  - /availability
---

Magento releases security and functional patches for each supported release line of {{site.data.var.ee}} every quarter.

The following guidelines apply to patch releases:

- All supported versions receive security fixes.
- Older versions receive fewer functional fixes
- Changes that could break extensions or code compatibility should be avoided. For example, code written for 2.2.0 should still work on 2.2.7.
- We reserve the right to implement major changes or release additional patches or hotfixes to address major security issues. On the module level, these are mostly PATCH level changes, sometimes MINOR level changes.
- Patches may include new features as long as they are not expected to break other code. The new feature can be included in the core code or as an extension, like Page Builder.

Magento releases a large (minor version change – 2.2.0 -> 2.3.0) update about once a year.

The following guidelines apply to minor releases:

- Breaking changes are possible; code written for 2.2.x may no longer work with 2.3.x. For example, minor releases can introduce support for major system requirements and dependencies, like PHP.
- Module versions can vary. For example, some module changes are introduced in a new patch whereas others are introduced in a major release.
- Minor release can include new features that may require additional work from partners during upgrade to ensure compatibility.

{:.bs-callout .bs-callout-info}
See [Magento Software Lifecycle Policy] and [Versioning].

## Product availability

| Product                                         | Availability                                                                                                                                                           | How to get it                                                                                                                |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **{{site.data.var.ee}} 2.3.0 GA**               | Available now                                                                                                                                                          | [Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html)                                                |
| **{{site.data.var.ee}} 2.3.1 GA**               | Available March 2019                                                                                                                                                   | [Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html)                                                |
| **{{site.data.var.ece}} Tools (aka ECE-Tools)** | Available now                                                                                                                                                          | [Composer](https://devdocs.magento.com/guides/v2.3/cloud/project/ece-tools-update.html)                                      |
| **PWA Studio**                                  | Available now including support for {{site.data.var.ece}}                                                                                                              | [Documentation](https://magento-research.github.io/pwa-studio/) and [GitHub](https://github.com/magento-research/pwa-studio) |
| **Magento Shipping**                            | Available now                                                                                                                                                          | Merchants on Magento 2.2.2+ can use the [onboarding process](https://account.magento.com/shipping/onboarding/start)          |
| **Page Builder**                                | Early adoption program is now closed. GA expected in March 2019 with 2.3.1 GA                                                                                          | Bundled with Magento Commerce 2.3.x                                                                                          |
| **Amazon Sales Channel**                        | Early access closed<br><br>Regional availability expected in first half of 2019 (US, Canada, Mexico)<br><br>EMEA and APAC availability expected in second half of 2019 | N/A<br><br>Magento Marketplace                                                                                               |
| **Google Ad Channel**                           | Early access TBD<br><br>General availability expected in first half of 2019                                                                                            | TBD<br><br>Magento Marketplace                                                                                               |

## Support and compatibility

The following table shows whether a Magento product or extension is supported by—or compatible with—a version of {{site.data.var.ee}}.

[**Editorial note:** Reusing existing icons as placeholders; not intended to be final.]

- {:.new} **Supported**—Define "supported"
- {:.fix} **Compatible**—Define "compatible"

<table>
  <tbody>
    <tr>
      <td class="blank"></td>
      <!-- <th style="text-align:center">{{site.data.var.ee}}</th> -->
      <th style="text-align:center">2.3.0</th>
      <th style="text-align:center">2.3.1</th>
      <th style="text-align:center">2.3.2</th>
      <th style="text-align:center">2.3.3</th>
    </tr>
    <tr>
      <td colspan="5"><strong>Amazon Sales Channel</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">1.0.0</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Google Ad Channel</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">1.0.0</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Business Intelligence</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">x.x.x</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Magento Shipping</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">x.x.x</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Multi Source Inventory</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">1.1.0</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Order Management</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">1.230</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>Page Builder</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">1.0.0</td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/new.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
    <tr>
      <td colspan="5"><strong>PWA Studio</strong></td>
    </tr>
    <tr>
      <td style="text-align:right">2.0.0</td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
      <td style="text-align:center"><img src="/i/icons/fix.svg"></td>
    </tr>
  </tbody>
</table>

<!-- Link definitiona -->

[Versioning]: https://devdocs.magento.com/guides/v2.3/extension-dev-guide/versioning/
[Magento Software Lifecycle Policy]: https://magento.com/sites/default/files/magento-software-lifecycle-policy.pdf