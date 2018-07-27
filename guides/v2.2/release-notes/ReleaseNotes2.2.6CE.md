---
layout: default
group: release-notes
title: Magento Open Source 2.2.6 Release Notes
version: 2.2
github_link: release-notes/ReleaseNotes2.2.6CE.md
---
*Patch code and release notes published on  2018.* 

This release includes multiple enhancements to product security plus bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.5-and-2.1.14-security-update) for a comprehensive discussion of these issues.


## Highlights

Look for the following highlights in this release:


Looking for more information on these new features as well as many others? Check out [Magento 2.2.x Developer Documentation](http://devdocs.magento.com/guides/v2.2/) and the [Magento Open Source User Guide](http://docs.magento.com/m2/ce/user_guide/getting-started.html).

### Core code highlights
This release includes significant performance improvements to the core Magento code: 





### Community contribution highlights
Highlights of community contributions include  fixes that improve checkout flow and the sorting of simple products:



<!-- MAGETWO-88237 -->  * Magento no longer permits you to re-run an already running cron job. *Fix submitted by [Paavo Pokkinen](https://github.com/paveq) in pull request 12497*. [GitHub-10650](https://github.com/magento/magento2/issues/10650)


## Fixes
In addition to security enhancements, this release contains the following functional fixes. 



### Installation, setup, and deployment





### Bundle products




### Catalog



### CMS content



### Configurable products




### Frameworks


### General



### Import/export


### Indexing


### Orders



### Payment methods



### Performance


### Search


### Shipping
<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can find Magento Shipping-specific release notes in [Magento Shipping Release Notes]({{page.baseurl}}/release-notes/ReleaseNotesMagentoShipping2.2.x.html).
</div>


### Swagger


### Swatches


### Testing


### URL rewrites



### Vertex


### Visual Merchandiser





## Known Issues




## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. 

old table


### Individual contributor contributions
The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

<table>
  <tr>
    <th>Pull request</th>
    <th>Related GitHub issue</th>
    <th>Contributing community member</th>
  </tr>


<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/15929">15929</a></td>
    <td>15205, 15245</td>
    <td><a target="_blank" href="https://github.com/fmarangi">Francesco Marangi</a></td>
  </tr>


  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13956">13956</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/koenner01">Koen V.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13878">13878</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13769" target="_blank">13769</a></td>
    <td><a target="_blank" href="https://github.com/pawcioma">pawcioma</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13943">13943</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12405" target="_blank">12405</a>, <a href="https://github.com/magento/magento2/issues/12421" target="_blank">12421</a></td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13855">13855</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13804" target="_blank">13804</a></td>
    <td><a target="_blank" href="https://github.com/ankurvr">Ankur Raiyani</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14011">14011</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/chedaroo">Richard Jesudason</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14013">14013</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sandermangel">Sander Mangel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13977">13977</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/hostep">Pieter Hoste</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13607">13607</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13385" target="_blank">13385</a></td>
    <td><a target="_blank" href="https://github.com/shyamranpara">Shyam Ranpara</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a></td>
    <td><a target="_blank" href="https://github.com/enriquei4">enriquei4</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
    <td><a target="_blank" href="https://github.com/pradeep-wagento">pradeep-wagento</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14044">14044</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/avstudnitz">Andreas von Studnitz</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12929">12929</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10559" target="_blank">10559</a></td>
    <td><a target="_blank" href="https://github.com/srenon">Renon Stewart</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13884">13884</a></td>
    <td><a href="https://github.com/magento/magento2/issues/5463" target="_blank">5463</a></td>
    <td><a target="_blank" href="https://github.com/k4emic">Mads Nielsen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13894">13894</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/evgk">evgk</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13989">13989</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13988" target="_blank">13988</a></td>
    <td><a target="_blank" href="https://github.com/krzksz">Mateusz Krzeszowiak</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14029">14029</a></td>
    <td><a href="https://github.com/magento/magento2/issues/4919" target="_blank">4919</a></td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14042">14042</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RomaKis">Roman K.</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/jasperzeinstra">jasperzeinstra</a></td>
  </tr>

   <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14083">14083</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/RandeKnight">RandeKnight</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
    <td><a target="_blank" href="https://github.com/Frodigo">Marcin Kwiatkowski</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14121">14121</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14010" target="_blank">14010</a></td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14041">14041</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/KarlDeux">Carlos Lizaga</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14136">14136</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ccasciotti">Cristiano Casciotti</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14154">14154</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/nfourteen">nfourteen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14189">14189</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/EliasZ">Elias</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/11707">11707</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/gwharton">gwharton</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14156">14156</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/aschrammel">Andreas Schrammel</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JeroenVanLeusden">Jeroen</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14091">14091</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14138" target="_blank">14138</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

  <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
    <td><a target="_blank" href="https://github.com/brideo">Nathan McBride</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13716">13716</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13704" target="_blank">13704</a></td>
    <td><a target="_blank" href="https://github.com/alepane21">Alessandro Pagnin</a></td>
  </tr>

 <tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/cstergianos">cstergianos</a></td>
 </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14303">14303</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13992" target="_blank">13992</a></td>
    <td><a target="_blank" href="https://github.com/cream-julian">cream-julian</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a></td>
    <td><a target="_blank" href="https://github.com/crisdiaz">cristina-diaz</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14358">14358</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/mageprince">Prince Patel</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13414">13414</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/VincentMarmiesse">Vincent Marmiesse</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14308">14308</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
    <td><a target="_blank" href="https://github.com/swnsma">Oleksandr Kravchuk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P.</a></td>  
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14361">14361</a></td>
    <td><a href="https://github.com/magento/magento2/issues/11930" target="_blank">11930</a>, <a href="https://github.com/magento/magento2/issues/10700" target="_blank">10700</a> </td>
    <td><a target="_blank" href="https://github.com/xtremeperf">Doug</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14060">14060</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
    <td><a target="_blank" href="https://github.com/osrecio">Oscar Recio</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14325">14325</a></td>
    <td><a href="https://github.com/magento/magento2/issues/7816" target="_blank">7816</a>, <a href="https://github.com/magento/magento2/issues/12852" target="_blank">12852</a></td>
    <td><a target="_blank" href="https://github.com/mikewhitby">Mike Whitby</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>
    <td><a target="_blank" href="https://github.com/paveq">Paavo Pokkinen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14288">14288</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tdgroot">Timon de Groot</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14385">14385</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13716" target="_blank">13716</a></td>
    <td><a target="_blank" href="https://github.com/orlangur">Vlad Veselov</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
    <td><a target="_blank" href="https://github.com/ArjenMiedema">Arjen Miedema</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14350">14350</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14249" target="_blank">14249</a></td>
    <td><a target="_blank" href="https://github.com/cdiacon">Calin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14403">14403</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/edie-pasek">edie-pasek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14440">14440</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Yogeshks">Yogesh Suhagiya</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13942">13942</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13582" target="_blank">13582</a></td>
    <td><a target="_blank" href="https://github.com/bordeo">Alex</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14293">14293</a></td>
    <td><a href="https://github.com/magento/magento2/issues/8837" target="_blank">8837</a></td>
    <td><a target="_blank" href="https://github.com/KravetsAndriy">Andriy Kravets</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14439">14439</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/sanderjongsma">Sander Jongsma</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14445">14445</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14455">14455</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/adrian-martinez-interactiv4">Adrian Martinez</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14466">14466</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/NamrataChangani">NamrataChangani</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/JDavidVR">David</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a></td>
    <td><a target="_blank" href="https://github.com/afirlejczyk">afirlejczyk</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/simpleadm">Sergey P</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14498">14498</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Karlasa">Karla Saaremäe</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14504">14504</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/quisse">Tommy Quissens</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13629">13629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Corefix">Theis Corfixen</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13831">13831</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/irs">Vadim Kusakin</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2ce/pull/14176">14176</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14049" target="_blank">14049</a></td>
    <td><a target="_blank" href="https://github.com/joost-florijn-kega">joost-florijn-kega</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14319">14319</a></td>
    <td><a href="https://github.com/magento/magento2/issues/6879" target="_blank">6879</a></td>
    <td><a target="_blank" href="https://github.com/MateuszChrapek">MateuszChrapek</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/Coderimus">Alexander Shkurko</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13950" target="_blank">13950</a></td>
    <td><a target="_blank" href="https://github.com/nuzil">nuzil</a></td>
  </tr>

<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/tkotosz">Tibor Kotosz</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14599">14599</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14572" target="_blank">14572</a></td>
    <td><a target="_blank" href="https://github.com/PierreLeMaguer">Pierre LeMaguer</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13016">13016</a></td>
    <td><a href="https://github.com/magento/magento2/issues/9666" target="_blank">9666</a>, <a href="https://github.com/magento/magento2/issues/12323" target="_blank">12323</a></td>
    <td><a target="_blank" href="https://github.com/rossmc">Ross</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14048">14048</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14035" target="_blank">14035</a></td>
    <td><a target="_blank" href="https://github.com/kamilszewczyk">Kamil Szewczyk</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14629">14629</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/AnshuMishra17">AnshuMishra17</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14635">14635</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14465" target="_blank">14465</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14668">14668</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/surya07081995">Suraj kumar prasad </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14678">14678</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/strell">Roman Strelenko </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14681">14681</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13652" target="_blank">13652</a></td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev </a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14688">14688</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/net32">Isaias</a></td>
  </tr>
<tr>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14696">14696</a></td>
    <td>N/A</td>
    <td><a target="_blank" href="https://github.com/ihor-sviziev">Ihor Sviziev</a></td>
  </tr>

 
</table>

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available). 

<table>
  <tr>
    <th>Contributing Partner</th>
    <th>Pull Request</th>
    <th>Related GitHub issue</th>
  </tr>

<tr>
    <td>Balance Internet</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14128">14128</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14109" target="_blank">14109</a></td>
  </tr>

<tr>
    <td>Comwrap</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14559">14559</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13691">13691</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13556" target="_blank">13556</a></td>
  </tr>

<tr>
    <td>Convert</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14457">14457</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/13807">13807</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14347">14347</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13808">13808</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>Divante</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14360">14360</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14105">14105</a></td>
    <td><a href="https://github.com/magento/magento2/issues/13010" target="_blank">13010</a>, <a href="https://github.com/magento/magento2/issues/13820" target="_blank">13820</a></td>
  </tr>

  <tr>
    <td>H&O</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13653">13653</a></td>
    <td>N/A</td>
  </tr>

  <tr>
    <td>Interactiv4</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14452">14452</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14299">14299</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14317">14317</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14306">14306</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13717">13717</a>,<a target="_blank" href="https://github.com/magento/magento2/pull/11376">11376</a> </td>
    <td><a href="https://github.com/magento/magento2/issues/13117" target="_blank">13117</a>, <a href="https://github.com/magento/magento2/issues/14089" target="_blank">14089</a>, <a href="https://github.com/magento/magento2/issues/7428" target="_blank">7428</a>, <a href="https://github.com/magento/magento2/issues/14072" target="_blank">14072</a></td>
  </tr>

<tr>
    <td>Inviqa</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14552">14552</a></td>
    <td>N/A</td>
  </tr>

<tr>
    <td>ISM eCompany</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14327">14327</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10057" target="_blank">10057</a></td>
  </tr>


  <tr>
    <td>MediaCT</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14309">14309</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14062">14062</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14230">14230</a></td>
    <td><a href="https://github.com/magento/magento2/issues/14307" target="_blank">14307</a></td>
  </tr>

<tr>
    <td>Something Digital</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13898">13898</a></td>
    <td><a href="https://github.com/magento/magento2/issues/12792" target="_blank">12792</a>, <a href="https://github.com/magento/magento2/issues/13778" target="_blank">13778</a></td>
  </tr>


  <tr>
    <td>Vaimo</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/13257">13257</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13173">13173</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14026">14026</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14030">14030</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14028">14028</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14106">14106</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12893">12893</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14388">14388</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/12497">12497</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/14447">14447</a></td>
    <td><a href="https://github.com/magento/magento2/issues/10650" target="_blank">10650</a></td>

  </tr>

<tr>
    <td>Wagento</td>
    <td><a target="_blank" href="https://github.com/magento/magento2/pull/14473">14473</a>, <a target="_blank" href="https://github.com/magento/magento2/pull/13024">13024</a></td>
    <td><a href="https://github.com/magento/magento2/issues/3483" target="_blank">3483</a></td>
  </tr>



</table>


### System requirements
Our technology stack is built on PHP and MySQL. For details, see [Technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements-tech.html)


### Installation and upgrade instructions
See [How to get the Magento software](http://devdocs.magento.com/guides/v2.2/install-gde/bk-install-guide.html) for complete installation and upgrade information.



## Migration toolkits
The <a href="{{ page.baseurl }}/migration/migration-migrate.html" target="_blank">Data Migration Tool</a> helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  <a href="{{ page.baseurl }}/migration/migration-tool-install.html" target="_blank">Install the Data Migration Tool</a>. Consider exploring or contributing to the <a href="https://github.com/magento/data-migration-tool" target="_blank"> Magento Data Migration repository</a>.

The <a href="https://github.com/magento/code-migration" target="_blank">Code Migration Toolkit</a> helps transfer existing Magento 1.x store extensions and customizations to Magento 2.2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
