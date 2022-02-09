---
title: Lifecycle policy
group: release
---

For {{ site.data.var.ee }} 2.4 and subsequent releases:

-  To better streamline our lifecycle policy, Adobe provides quality fixes to the 2.4 release line until the end of support date of the PHP version upon which it is based. A customer can access quality fixes by contacting [{{ site.data.var.ee }} Support]({{ site.baseurl }}/community/support.html) or through the self-serve [Quality Patches Tool]({{ site.baseurl }}/quality-patches/tool.html) if their version is still eligible for quality support. Refer to the table below for the End of Software Support dates for {{ site.data.var.ee }} release lines.

-  Adobe provides security fixes only through the latest patch or security patch release, even if a customer's version is still eligible for quality support. Unlike quality fixes, security fixes cannot be backported to previous minor releases nor to previous patch releases within supported minor releases.

-  For critical security issues, such as zero-day vulnerabilities, Adobe provides [hotfixes](https://support.magento.com/hc/en-us/sections/360003869892-Known-issues-patches-attached-) for all customers on a supported version, even if they are not on the latest patch or security patch release. It is important to note that a hotfix is not a catch-all and will not address all the security issues that would be fixed by upgrading to the latest release.

## End of Software Support

| Release                          | Release Date  | End of Software Support<sup>1</sup> | Dependent PHP Version       |
|----------------------------------|---------------|-------------------------------------|-----------------------------|
| {{site.data.var.ee}} 2.3         | November 2018 | September 8, 2022<sup>2</sup>          | PHP 7.3 and 7.4<sup>3</sup> |
| {{site.data.var.ee}} 2.4.0-2.4.3 | July 2020     | November 2022                       | PHP 7.4                     |
| {{site.data.var.ee}} 2.4.4-2.4.6 | TBA           | November 2024                       | PHP 8.1                     |

<sup>1 End of Software Support includes both end of quality fixes and end of security fixes.</sup><br>
<sup>2 The End of Software Support date for 2.3 has been extended to September 8, 2022 to allow more time for customers to upgrade to the 2.4.4 release that will be generally available on March 8, 2022.</sup><br>
<sup>3 2.3.0-2.3.6 are dependent on PHP 7.3; 2.3.7 is dependent on PHP 7.4.</sup>

{:.bs-callout-info}
See [Software Lifecycle Policy](https://www.adobe.com/content/dam/cc/en/legal/terms/enterprise/pdfs/Adobe-Commerce-Software-Lifecycle-Policy.pdf).

<style type="text/css">
.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-bs27{background-color:#67ac68;text-align:left;vertical-align:top}
.tg .tg-pmnn{background-color:#cd3c3c;text-align:left;vertical-align:top}
.tg .tg-0pky{text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:center;vertical-align:top;font-weight:bold}
.tg .tg-ka61{background-color:#67ac68;border-color:#c0c0c0;text-align:left;vertical-align:top}
</style>

<table class="tg">
<thead style="text-align:center;">
  <tr>
    <th class="tg-0pky" colspan="2"></th>
    <th class="tg-0lax" colspan="4">2022</th>
    <th class="tg-0lax" colspan="4">2023</th>
    <th class="tg-0lax" colspan="4">2024</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky" style="font-weight:bold">Commerce</td>
    <td class="tg-0lax">PHP</td>
    <td class="tg-0lax">Q1</td>
    <td class="tg-0lax">Q2</td>
    <td class="tg-0lax">Q3</td>
    <td class="tg-0lax">Q4</td>
    <td class="tg-0lax">Q1</td>
    <td class="tg-0lax">Q2</td>
    <td class="tg-0lax">Q3</td>
    <td class="tg-0lax">Q4</td>
    <td class="tg-0lax">Q1</td>
    <td class="tg-0lax">Q2</td>
    <td class="tg-0lax">Q3</td>
    <td class="tg-0lax">Q4</td>
  </tr>
  <tr>
    <td class="tg-0pky">2.4.0 - 2.4.3</td>
    <td style="text-align:center">7.4</td>
    <td class="tg-bs27" colspan="3"></td>
    <td class="tg-pmnn">Nov</td>
    <td class="tg-0lax" colspan="8"></td>
  </tr>
  <tr>
    <td class="tg-0pky">2.4.4</td>
    <td rowspan="2" style="text-align:center">8.1</td>
    <td class="tg-0lax"></td>
    <td class="tg-bs27" colspan="10">Mar</td>
    <td class="tg-pmnn" rowspan="2">Nov</td>
  </tr>
  <tr>
    <td class="tg-0pky">2.4.5</td>
    <td class="tg-0lax" colspan="2"></td>
    <td class="tg-ka61" colspan="9">Aug</td>
  </tr>
</tbody>
</table>

## Key

<table>
  <thead>
   <tr>
    <th></th>
    <th></th>
   </tr>
  </thead>
 <tbody>
  <tr>
   <td style="background-color:#67ac68;">Supported</td>
   <td>Version that has been fully tested by Adobe and is supported.</td>
  </tr>
  <tr>
   <td style="background-color:#cd3c3c;">End of Software Support</td>
   <td>Version that has reached End of Software Support.</td>
  </tr>
 </tbody>
</table>
