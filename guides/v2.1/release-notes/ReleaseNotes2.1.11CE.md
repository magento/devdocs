---
layout: default
group: release-notes
subgroup: 02_rel-notes
title: Magento Open Source 2.1.11 Release Notes
menu_title: Magento Open Source 2.1.11 Release Notes
menu_order: 154
level3_menu_node: level3child
level3_subgroup: ce21-relnotes 
version: 2.1
github_link: release-notes/ReleaseNotes2.1.11CE.md
---

*	TOC
{:toc}


*Patch code and release notes were published on December 5,  2017.*



We are pleased to present Magento Open Source  2.1.11. This release includes important enhancements to your Magento software.


## Highlights

Magento 2.1.10 contains almost 40 security fixes and functional enhancements.  Look for the following highlights in this release:

* Significant reduction in JavaScript-related translation issues. 

* Improvements to how the PayPal Express Checkout payment method processes virtual products. 

* Multiple enhancements to product security. See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information. 

* Forty-four community-submitted bug fixes and multiple pull requests. These pull requests feature improvements in cacheing for configurable products (pull request [9809](https://github.com/magento/magento2/pull/11469)) and enhancements to the URL rewrite mechanism (pull request [10164](https://github.com/magento/magento2/pull/10164)).  

* Support for management of multiple instances in the same crontab. These two new CLI commands (`cron:install` and `cron:remove`) were submitted by community member [adrian-martinez-interactiv4](https://github.com/adrian-martinez-interactiv4). 

## Security enhancements

Magento 2.1.10 includes multiple security enhancements. Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-221-2110-and-2017-security-update) for more information.


## Fixed issues
### Installation, setup, and deployment


### Cache
<!--- 72798 -->*


### Cart and checkout
<!--- 80324 -->*





### Catalog
<!--- 83631 -->*
<!--- 72312 -->*
<!--- 71576 -->*
<!--- 70373 -->*
<!--- 69845 -->*


### Configurable products
<!--- 83313 -->*
<!--- 76185 -->*
<!--- 71185 -->*




### General
<!--- 83646 -->* [GitHub-8591](https://github.com/magento/magento2/issues/8591)
<!--- 82539 -->*
<!--- 82242 -->*
<!--- 75526 -->*
<!--- 72376 -->*
<!--- 72206 -->*
<!--- 71021 -->*
<!--- 70322 -->* [GitHub-9453](https://github.com/magento/magento2/issues/9453)


### Framework
<!--- 80426 -->*
<!--- 70157 -->*



### Import/export
<!--- 82554 -->*
<!--- 69857 -->*
<!--- 69718 -->*


### Order management
<!--- 77969 -->*
<!--- 69512 -->*


### Payment methods
<!--- 83149 -->*
<!--- 82982 -->*
<!--- 82224 -->*
<!--- 72534 -->* [GitHub-10767](https://github.com/magento/magento2/issues/10767)
<!--- 71625 -->*
<!--- 71522 -->*
<!--- 71185 -->*

### Shipping

### Search
<!--- 72246 -->*


#### Elasticsearch



### Staging
<!--- 71669* -->*


### Tax
<!--- 72280 -->* [GitHub-8833](https://github.com/magento/magento2/issues/8833)
<!--- 69716 -->* [GitHub-9669](https://github.com/magento/magento2/issues/9669), [GitHub-8870](https://github.com/magento/magento2/issues/8870), [GitHub-9552](https://github.com/magento/magento2/issues/9552), [GitHub-10029](https://github.com/magento/magento2/issues/10029)


### Translations
<!--- 71591 -->*



### URL rewrites

### Varnish
<!--- 83460 -->*
<!--- 71701 -->* 6609


### Web API framework
<!--- 70498* -->*


### Wishlist
<!--- 70611 -->*


<!--- INTERNAL ONLY  83263 -->

<!--- NOT NEEDED  83760  
 -->

<!--- DUPLICATE -->

<!--- CANCELED 72400 -->


<!--- CANNOT REPRODUCE  83193 75121 -->

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.


<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
     <th>Contributing community member</th>

  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9692" target="_blank">9692</a></td>
    <td>6718</td>
     <td><a href="https://github.com/JTimNolan" target="_blank">JTimNolan</a></td>
  </tr>
<tr>
    <td><a href="https://github.com/magento/magento2/pull/9809" target="_blank">9809</a></td>
    <td>6999</td>
     <td><a href="https://github.com/thlassche" target="_blank">Teun Lassche</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10050" target="_blank">10050</a></td>
    <td>5377, 4170, 6882</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10075" target="_blank">10075</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/alessandroniciforo" target="_blank">alessandroniciforo</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/9718" target="_blank">9718</a></td>
    <td>4731, 7827, 7827</td>
     <td><a href="https://github.com/pixelhed" target="_blank">Andre Flitsch</a></td>
  </tr>

  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10159" target="_blank">10159</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/fernandofauth" target="_blank">Fernando Fauth</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10164" target="_blank">10164</a></td>
    <td>3872, 1980, 4660, 4876, 8264</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10184" target="_blank">10184</a></td>
    <td>1980</td>
     <td><a href="https://github.com/fernandofauth" target="_blank">Fernando Fauth</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10211" target="_blank">10211</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10218" target="_blank">10218</a></td>
    <td>6818</td>
     <td><a href="https://github.com/ajpevers" target="_blank">Anton Evers</a></td>
  </tr>


  <tr>
    <td><a href="https://github.com/magento/magento2/pull/10188" target="_blank">10188</a></td>
    <td>6175</td>
     <td><a href="https://github.com/arshadpkm" target="_blank">Arshad M</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10260" target="_blank">10260</a></td>
    <td>5651</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10282" target="_blank">10282</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/ihor-sviziev" target="_blank">Ihor Sviziev</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10482" target="_blank">10482</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/okorshenko" target="_blank">Oleksii Korshenko</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10569" target="_blank">10569</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/avdb" target="_blank">avdb</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10695" target="_blank">10695</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/bardkalbakk" target="_blank">Bård Kalbakk</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10714" target="_blank">10714</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/WaPoNe" target="_blank">Bård Kalbakk</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10745" target="_blank">10745</a></td>
    <td>4883, 5509, 5820, 5861, 5883, 5995, 6022, 7525, 9967</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10747" target="_blank">10747</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10750" target="_blank">10750</a></td>
    <td>5519, 10206</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10751" target="_blank">10751</a></td>
    <td>4387, 7448</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
<td><a href="https://github.com/magento/magento2/pull/10557" target="_blank">10557</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/lewisvoncken" target="_blank">Mr. Lewis</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10753" target="_blank">10753</a></td>
    <td>3754, 4725, 7569</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10749" target="_blank">10749</a></td>
    <td>5596</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10748" target="_blank">10748</a></td>
    <td>7311, 8574</td>
     <td><a href="https://github.com/hostep" target="_blank">Pieter Hoste</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10934" target="_blank">10934</a></td>
    <td>6081</td>
     <td><a href="https://github.com/Igloczek" target="_blank">Bartek Igielski</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/10929" target="_blank">10929</a></td>
    <td>10510</td>
     <td><a href="https://github.com/szafran89" target="_blank">Paweł Szafrański</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10932" target="_blank">10932</a></td>
    <td>10738</td>
     <td><a href="https://github.com/Januszpl" target="_blank">Janusz Janczy</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11201" target="_blank">11201</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/osrecio" target="_blank">Oscar Recio</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11309" target="_blank">11309</a></td>
    <td>10417</td>
     <td><a href="https://github.com/PieterCappelle" target="_blank">Pieter Cappelle</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11448" target="_blank">11448</a></td>
    <td>10007</td>
     <td><a href="https://github.com/raumatbel" target="_blank">Raul Mateos</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/10975" target="_blank">10975</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/angelo983" target="_blank">angelo983</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11456" target="_blank">11456</a></td>
    <td>10795</td>
     <td><a href="https://github.com/peterjaap" target="_blank">Peter Jaap Blaakmeer</a></td>
  </tr>


<tr>
  <td><a href="https://github.com/magento/magento2/pull/11506" target="_blank">11506</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/mpchadwick" target="_blank">Max Chadwick</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11361" target="_blank">11361</a></td>
    <td>N/A</td>
     <td><a href="https://github.com/adrian-martinez-interactiv4" target="_blank">adrian-martinez-interactiv4</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11386" target="_blank">11386</a></td>
    <td>11207</td>
     <td><a href="https://github.com/JeroenVanLeusden" target="_blank">Jeroen</a></td>
  </tr>

<tr>
  <td><a href="https://github.com/magento/magento2/pull/11469" target="_blank">11469</a></td>
    <td>10231</td>
     <td><a href="https://github.com/mrodespin" target="_blank">Marc Rodriguez</a></td>
  </tr>
  </table>


## System requirements
Our technology stack is built on PHP and MySQL. For more information, see
<a href="{{ page.baseurl }}install-gde/system-requirements.html" target="_blank">System Requirements</a>.


{% include install/releasenotes/ce_install_21.md %}



## Migration toolkits
The <a href="{{ page.baseurl }}migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

An updated version of this toolkit is typically available several days after the patch release.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions and bug reports. 

