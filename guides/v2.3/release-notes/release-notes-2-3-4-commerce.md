---
group: release-notes
title: Magento Commerce 2.3.4 Release Notes
---

*Patch code and release notes published , 201920*

Magento Commerce 2.3.4 offers significant platform upgrades, substantial security changes, and PSD2-compliant core payment methods.

This release includes over 170 functional fixes to the core product and  over 75 security enhancements. It includes over 200 contributions from our community members. These contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

{% include install/pre-release.md %}

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.3) provides. Patch 2.3.2.1 (Composer package 2.3.2-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.2.  For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.2-p1), see [Install Magento using Composer](https://devdocs-beta.magento.com/guides/v2.3/install-gde/composer.html#get-the-metapackage).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in separate, project-specific release information which is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:




#### Security enhancements and fixes to core code

*  **75 security enhancements**  that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities as well as other security issues. No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Magento Security Center](https://magento.com/security/patches/magento-2.3.3-2.2.10-security-update) for a comprehensive discussion of these issues. All known exploitable security issues fixed in this release (2.3.3) have been ported to 2.2.10, 1.14.4.3, and 1.9.4.3, as appropriate.

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades


### Performance boosts



### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules:  Here are some additional core enhancements:


### Merchant tool enhancements


### Page Builder

Page Builder enhancements for this release include:


### Inventory Management enhancements

*  Fixes to multiple  bugs. See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html).

### GraphQL

Expanded GraphQL functionality and improved coverage for PayPal payment integrations, gift cards, and store credit features. Added mutations and queries that support these tasks:


See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

 For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases).

### Google Shopping ads Channel

 [Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### Magento Shipping


### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. 

#### Amazon Pay


#### dotdigital



#### Klarna



See [Klarna](https://docs.magento.com/m2/ee/user_guide/payment/klarna.html).

#### Vertex


<!--- BUNDLE--->


#### Yotpo



## Backward-incompatible Changes



## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.3 core code.


### Installation, upgrade, deployment

<!--- MC-19749-->

<!--- MC-20135-->

<!--- ENGCOM-5619-->
*Fix submitted by Alexander Taranovsky in pull request [23848](https://github.com/magento/magento2/pull/23848)*. [GitHub-23847](https://github.com/magento/magento2/issues/23847)

<!--- ENGCOM-5582-->
*Fix submitted by Ihor Sviziev in pull request [22886](https://github.com/magento/magento2/pull/22886)*. [GitHub-22880](https://github.com/magento/magento2/issues/22880)

<!--- ENGCOM-6059-->
*Fix submitted by Ivan Koliadynskyy in pull request [24959](https://github.com/magento/magento2/pull/24959)*. [GitHub-23577](https://github.com/magento/magento2/issues/23577)

<!--- ENGCOM-6040-->
* Magento no longer disables the cache when you run `composer update`. *Fix submitted by adrian-martinez-interactiv4 in pull request [24892](https://github.com/magento/magento2/pull/24892)*. [GitHub-17634](https://github.com/magento/magento2/issues/17634)


### AdminGWS

<!--- MC-18702-->

### Analytics

<!--- ENGCOM-5978-->
*Fix submitted by Adarsh Manickam in pull request [24773](https://github.com/magento/magento2/pull/24773)*. [GitHub-24708](https://github.com/magento/magento2/issues/24708)



### Backend

<!--- MC-20622-->

### Banner

<!--- MC-13951-->

### Bundle products

<!--- MC-19438-->

<!--- MC-18963-->

<!--- ENGCOM-5534-->
* Bundle products now show the correct price when bundle options include only one multiple select option. *Fix submitted by Rani Priya in pull request [23902](https://github.com/magento/magento2/pull/23902)*. [GitHub-23886](https://github.com/magento/magento2/issues/23886)

<!--- ENGCOM-5773-->
*Fix submitted by Arushi Bansal in pull request [24077](https://github.com/magento/magento2/pull/24077)*. [GitHub-23890](https://github.com/magento/magento2/issues/23890)

<!--- ENGCOM-5953-->
*Fix submitted by Pieter Hoste in pull request [24703](https://github.com/magento/magento2/pull/24703)*. [GitHub-13126](https://github.com/magento/magento2/issues/13126), [GitHub-14112](https://github.com/magento/magento2/issues/14112)


### B2B

<!--- MC-17824-->

<!--- MC-19915-->

<!--- MC-17007-->

<!--- MC-19185-->

<!--- MC-19914-->

<!--- MC-19396-->

<!--- MC-17332-->

<!--- MC-17193-->

<!--- MC-17803-->

<!--- MC-19650-->

<!--- MC-20117-->

<!--- MC-19837-->

<!--- MC-19836-->

<!--- MC-20212-->

<!--- MC-17627-->

<!--- MC-21876-->

<!--- MC-21459-->

<!--- MC-21462-->

<!--- MC-21662-->


### Cache

<!--- MC-19712-->



### Cart and checkout

<!--- MC-18918-->

<!--- MC-19053-->

<!--- MC-99490-->

<!--- MC-19152-->

<!--- MC-19637-->

<!--- MC-19271-->

<!--- MC-19894-->

<!--- MC-15507-->

<!--- MC-17469-->

<!--- MC-17493-->

<!--- MC-21756-->

<!--- ENGCOM-5525-->
 *Fix submitted by Denis Kopylov in pull request [23871](https://github.com/magento/magento2/pull/23871)*. [GitHub-23863](https://github.com/magento/magento2/issues/23863)

<!--- ENGCOM-5513-->
 *Fix submitted by Eden Duong in pull request [23896](https://github.com/magento/magento2/pull/23896)*. [GitHub-23895](https://github.com/magento/magento2/issues/23895)

<!--- ENGCOM-5511-->
* Magento now displays correct product quantities on the Items Ordered  tab of the order page when the price includes a decimal value.  *Fix submitted by Eden Duong in pull request [23943](https://github.com/magento/magento2/pull/23943)*. [GitHub-23940](https://github.com/magento/magento2/issues/23940)

<!--- ENGCOM-5454-->
*Fix submitted by kcnariya in pull request [23983](https://github.com/magento/magento2/pull/23983)*. [GitHub-23982](https://github.com/magento/magento2/issues/23982)

<!--- ENGCOM-5521-->
*Fix submitted by Eden Duong in pull request [23839](https://github.com/magento/magento2/pull/23839)*. [GitHub-18685](https://github.com/magento/magento2/issues/18685)

<!--- ENGCOM-5685-->
*Fix submitted by Rani Priya in pull request [24240](https://github.com/magento/magento2/pull/24240)*. [GitHub-24239](https://github.com/magento/magento2/issues/24239)

<!--- ENGCOM-5710-->
*Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24307](https://github.com/magento/magento2/issues/24307)

<!--- ENGCOM-5649-->
*Fix submitted by Ravi Chandra in pull request [22478](https://github.com/magento/magento2/pull/22478)*. [GitHub-11292](https://github.com/magento/magento2/issues/11292)

<!--- ENGCOM-5732-->
*Fix submitted by Geeta Modi in pull request [24254](https://github.com/magento/magento2/pull/24254)*. [GitHub-21450](https://github.com/magento/magento2/issues/21450)

<!--- ENGCOM-5779-->
*Fix submitted by Shankar Konar in pull request [24451](https://github.com/magento/magento2/pull/24451)*. [GitHub-24441](https://github.com/magento/magento2/issues/24441)

<!--- ENGCOM-5790-->
*Fix submitted by Gustavo Vicente Dauer in pull request [24380](https://github.com/magento/magento2/pull/24380)*. [GitHub-24366](https://github.com/magento/magento2/issues/24366)

<!--- ENGCOM-5811-->
*Fix submitted by Rani Priya in pull request [24510](https://github.com/magento/magento2/pull/24510)*. [GitHub-24509](https://github.com/magento/magento2/issues/24509)

<!--- ENGCOM-5752-->
*Fix submitted by Sunil in pull request [24411](https://github.com/magento/magento2/pull/24411)*. [GitHub-24409](https://github.com/magento/magento2/issues/24409)

<!--- ENGCOM-5807-->
*Fix submitted by Eden Duong in pull request [24499](https://github.com/magento/magento2/pull/24499)*. [GitHub-21499](https://github.com/magento/magento2/issues/21499), [GitHub-24491](https://github.com/magento/magento2/issues/24491)

<!--- ENGCOM-5837-->
*Fix submitted by Rani Priya in pull request [24580](https://github.com/magento/magento2/pull/24580)*. [GitHub-24579](https://github.com/magento/magento2/issues/24579)

<!--- ENGCOM-5926-->
*Fix submitted by Max Souza in pull request [24595](https://github.com/magento/magento2/pull/24595)*. [GitHub-3594](https://github.com/magento/magento2/issues/3594)

<!--- ENGCOM-6149-->
* Magento now displays the **Update** and **Delete** buttons as expected in the minicart in mobile view. Previously, these buttons overlapped. *Fix submitted by Adarsh Manickam in pull request [25206](https://github.com/magento/magento2/pull/25206)*. [GitHub-25137](https://github.com/magento/magento2/issues/25137)

<!--- ENGCOM-6072-->
*Fix submitted by Eden Duong in pull request [25037](https://github.com/magento/magento2/pull/25037)*. [GitHub-25036](https://github.com/magento/magento2/issues/25036)

<!--- ENGCOM-6151-->
*Fix submitted by Ivan Koliadynskyy in pull request [24862](https://github.com/magento/magento2/pull/24862)*. [GitHub-24808](https://github.com/magento/magento2/issues/24808)


### Cart Price rules



### Catalog

<!--- MC-19737-->

<!--- MC-19398-->

<!--- MC-19090-->

<!--- MC-17251-->

<!--- MC-19872-->

<!--- MC-19916-->

<!--- MC-20409-->

<!--- MC-19713-->

<!--- MAGETWO-45666-->

<!--- MC-17606-->
gh 23319

<!--- MAGETWO-51891-->

<!--- MC-15341-->

<!--- MC-16650-->

<!--- MAGETWO-98748-->

<!--- MC-19706-->

<!--- MC-19652-->

<!--- MC-18784-->
gh 23951

<!--- MC-15391-->

<!--- MC-16455-->

<!--- MC-19607-->

<!--- MC-20490-->

<!--- MAGETWO-65232-->

<!--- ENGCOM-5679-->
*Fix submitted by Eden Duong in pull request [24242](https://github.com/magento/magento2/pull/24242)*. [GitHub-24241](https://github.com/magento/magento2/issues/24241)

<!--- ENGCOM-6065-->
*Fix submitted by Mahesh Singh in pull request [24973](https://github.com/magento/magento2/pull/24973)*. [GitHub-24964](https://github.com/magento/magento2/issues/24964)



### CatalogInventory

<!--- MC-17524-->


### Catalog rule

<!--- MC-10974-->


### Cleanup and simple code refactoring



<!--- ENGCOM-5549-->
* The **Are you sure you want to delete this category?** message is now translatable. *Fix submitted by Eden Duong in pull request [24039](https://github.com/magento/magento2/pull/24039)*. [GitHub-24038](https://github.com/magento/magento2/issues/24038)

<!--- ENGCOM-5609-->
*Fix submitted by Eden Duong in pull request [24119](https://github.com/magento/magento2/pull/24119)*. [GitHub-24118](https://github.com/magento/magento2/issues/24118)

<!--- ENGCOM-5632-->
*Fix submitted by Sunil in pull request [23716](https://github.com/magento/magento2/pull/23716)*. [GitHub-23706](https://github.com/magento/magento2/issues/23706)

<!--- ENGCOM-5686-->
*Fix submitted by KrielkipNL in pull request [24252](https://github.com/magento/magento2/pull/24252)*. [GitHub-24251](https://github.com/magento/magento2/issues/24251)

<!--- ENGCOM-5684-->
*Fix submitted by Rani Priya in pull request [24237](https://github.com/magento/magento2/pull/24237)*. [GitHub-24236](https://github.com/magento/magento2/issues/24236)

<!--- ENGCOM-5792-->
*Fix submitted by Nagamaiah333 in pull request [24359](https://github.com/magento/magento2/pull/24359)*. [GitHub-24152](https://github.com/magento/magento2/issues/24152)

<!--- ENGCOM-5784-->
*Fix submitted by Eden Duong in pull request [24449](https://github.com/magento/magento2/pull/24449)*. [GitHub-24440](https://github.com/magento/magento2/issues/24440)

<!--- ENGCOM-5935-->
*Fix submitted by Vinicius Rafael Dziuba in pull request [24602](https://github.com/magento/magento2/pull/24602)*. [GitHub-24511](https://github.com/magento/magento2/issues/24511)

<!--- ENGCOM-5968-->
*Fix submitted by Adarsh Manickam in pull request [24761](https://github.com/magento/magento2/pull/24761)*. [GitHub-24740](https://github.com/magento/magento2/issues/24740)

<!--- ENGCOM-5981-->
*Fix submitted by Adarsh Manickam in pull request [24804](https://github.com/magento/magento2/pull/24804)*. [GitHub-24803](https://github.com/magento/magento2/issues/24803)

<!--- ENGCOM-6033-->
*Fix submitted by Brent Robert in pull request [24907](https://github.com/magento/magento2/pull/24907)*. [GitHub-24903](https://github.com/magento/magento2/issues/24903)

<!--- ENGCOM-6114-->
*Fix submitted by Gaurav Agarwal in pull request [25022](https://github.com/magento/magento2/pull/25022)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6145-->
*Fix submitted by Shubham Sharma in pull request [25200](https://github.com/magento/magento2/pull/25200)*. [GitHub-20502](https://github.com/magento/magento2/issues/20502)

<!--- ENGCOM-6157-->
*Fix submitted by Arvinda Kumar in pull request [25241](https://github.com/magento/magento2/pull/25241)*. [GitHub-25240](https://github.com/magento/magento2/issues/25240)

<!--- ENGCOM-5550-->
* Duplicate labels in the Admin **Sales** > **Transactions** Payment Method table have been removed. *Fix submitted by Eden Duong in pull request [24041](https://github.com/magento/magento2/pull/24041)*. [GitHub-24040](https://github.com/magento/magento2/issues/24040)


### CMS content

<!--- MC-20709-->

<!--- MC-18997--> ee only

<!--- MC-19944-->

<!--- ENGCOM-5487-->
* You can now save CMS blocks with no content.  *Fix submitted by Eden Duong in pull request [23801](https://github.com/magento/magento2/pull/23801)*. [GitHub-23800](https://github.com/magento/magento2/issues/23800)

### Command-line interface (CLI commands)

<!--- ENGCOM-5955-->
*Fix submitted by Pavel Bystritsky in pull request [24734](https://github.com/magento/magento2/pull/24734)*. [GitHub-24678](https://github.com/magento/magento2/issues/24678), [GitHub-24043](https://github.com/magento/magento2/issues/24043)

<!--- ENGCOM-5970-->
*Fix submitted by Ivan Koliadynskyy in pull request [24755](https://github.com/magento/magento2/pull/24755)*. [GitHub-13218](https://github.com/magento/magento2/issues/13218)


### Configurable products

<!--- MC-18810-->

<!--- MC-18847-->

<!--- MC-20225-->

<!--- MC-19689-->

<!--- ENGCOM-5937-->
*Fix submitted by federeggiani in pull request [24659](https://github.com/magento/magento2/pull/24659)*. [GitHub-14240](https://github.com/magento/magento2/issues/14240)

<!--- ENGCOM-6015-->
*Fix submitted by Laura Folco in pull request [24875](https://github.com/magento/magento2/pull/24875)*. [GitHub-24483](https://github.com/magento/magento2/issues/24483)


### Coupon



### Cron

<!--- ENGCOM-5717-->
*Fix submitted by Alexander Taranovsky in pull request [24187](https://github.com/magento/magento2/pull/24187)*. [GitHub-10040](https://github.com/magento/magento2/issues/10040), [GitHub-24186](https://github.com/magento/magento2/issues/24186)

<!--- ENGCOM-5934-->
*Fix submitted by Bruno Roeder in pull request [24590](https://github.com/magento/magento2/pull/24590)*. [GitHub-23846](https://github.com/magento/magento2/issues/23846)


### Customer

<!--- MC-19824--> ee only

<!--- MC-19016-->

<!--- MC-18935-->

<!--- MC-19302--> ee only

<!--- MC-19440-->

<!--- MC-17201-->

<!--- ENGCOM-5842-->
*Fix submitted by Lucas Calazans in pull request [24597](https://github.com/magento/magento2/pull/24597)*. [GitHub-23460](https://github.com/magento/magento2/issues/23460)

<!--- ENGCOM-6057-->
*Fix submitted by Tiago de Oliveira Castro Teixeira Pinto in pull request [24588](https://github.com/magento/magento2/pull/24588)*. [GitHub-22692](https://github.com/magento/magento2/issues/22692)

<!--- ENGCOM-6147-->

*Fix submitted by Christos Stergianos in pull request [25184](https://github.com/magento/magento2/pull/25184)*. [GitHub-21592](https://github.com/magento/magento2/issues/21592)



### Custom customer attributes

<!--- MC-19696-->
ee only

<!--- MAGETWO-99838-->


### Database media storage

<!--- ENGCOM-5498-->
*Fix submitted by gwharton in pull request [23913](https://github.com/magento/magento2/pull/23913)*. [GitHub-23911](https://github.com/magento/magento2/issues/23911)

<!--- ENGCOM-5573-->
*Fix submitted by Wharton in pull request [24088](https://github.com/magento/magento2/pull/24088)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

### Declarative schema

<!--- ENGCOM-6166-->
*Fix submitted by korostii in pull request [25265](https://github.com/magento/magento2/pull/25265)*. [GitHub-23031](https://github.com/magento/magento2/issues/23031)


### Directory



### Downloadable products

<!--- ENGCOM-5865-->
*Fix submitted by Rani Priya in pull request [24634](https://github.com/magento/magento2/pull/24634)*. [GitHub-24633](https://github.com/magento/magento2/issues/24633)

<!--- ENGCOM-6047-->
*Fix submitted by Adarsh Manickam in pull request [24800](https://github.com/magento/magento2/pull/24800)*. [GitHub-24785](https://github.com/magento/magento2/issues/24785)



### Dynamic block

<!--- MC-19851-->

<!--- MC-19000-->





### EAV

<!--- MC-19777-->

<!--- MC-18701-->

<!--- MC-19623-->

<!--- ENGCOM-5618-->
*Fix submitted by Eden Duong in pull request [23690](https://github.com/magento/magento2/pull/23690)*. [GitHub-23634](https://github.com/magento/magento2/issues/23634)

<!--- ENGCOM-5956-->
*Fix submitted by Artem Voloznov in pull request [24720](https://github.com/magento/magento2/pull/24720)*. [GitHub-24718](https://github.com/magento/magento2/issues/24718)

<!--- ENGCOM-5977-->
*Fix submitted by KaushikChavda in pull request [24582](https://github.com/magento/magento2/pull/24582)*. [GitHub-24581](https://github.com/magento/magento2/issues/24581)

<!--- ENGCOM-5367-->
*Fix submitted by Thomas Klein in pull request [23452](https://github.com/magento/magento2/pull/23452)*. [GitHub-23451](https://github.com/magento/magento2/issues/23451)


### Email

<!--- ENGCOM-5571-->
*Fix submitted by Eden Duong in pull request [23684](https://github.com/magento/magento2/pull/23684)*. [GitHub-23646](https://github.com/magento/magento2/issues/23646)

<!--- ENGCOM-5626-->
*Fix submitted by Eden Duong in pull request [24138](https://github.com/magento/magento2/pull/24138)*. [GitHub-24137](https://github.com/magento/magento2/issues/24137)

<!--- ENGCOM-5710-->
*Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24312](https://github.com/magento/magento2/issues/24312)

<!--- ENGCOM-5971-->
*Fix submitted by Roman Kis in pull request [24783](https://github.com/magento/magento2/pull/24783)*. [GitHub-23295](https://github.com/magento/magento2/issues/23295)

<!--- ENGCOM-6034-->
*Fix submitted by elvinristi in pull request [24906](https://github.com/magento/magento2/pull/24906)*. [GitHub-24902](https://github.com/magento/magento2/issues/24902)


### Frameworks

<!--- MC-19701-->

<!--- MAGETWO-99401-->

<!--- MC-19250-->

<!--- MC-18193-->

<!--- MC-21481-->


#### JavaScript framework

<!--- ENGCOM-5815-->
*Fix submitted by Pieter Hoste in pull request [24506](https://github.com/magento/magento2/pull/24506)*. [GitHub-4506](https://github.com/magento/magento2/issues/4506), [GitHub-13558](https://github.com/magento/magento2/issues/13558), [GitHub-14357](https://github.com/magento/magento2/issues/14357)

<!--- ENGCOM-5994-->
*Fix submitted by Bartłomiej Szubert in pull request [24833](https://github.com/magento/magento2/pull/24833)*. [GitHub-22747](https://github.com/magento/magento2/issues/22747)


### General fixes

<!--- MC-19904-->

<!--- MC-19791-->

<!--- ENGCOM-5468-->
*Fix submitted by Eden Duong in pull request [23781](https://github.com/magento/magento2/pull/23781)*. [GitHub-23778](https://github.com/magento/magento2/issues/23778)

<!--- ENGCOM-5468-->
*Fix submitted by Eden Duong in pull request [23781](https://github.com/magento/magento2/pull/23781)*. [GitHub-23778](https://github.com/magento/magento2/issues/23778)

<!--- ENGCOM-5572-->
*Fix submitted by Eden Duong in pull request [24079](https://github.com/magento/magento2/pull/24079)*. [GitHub-24058](https://github.com/magento/magento2/issues/24058)

<!--- ENGCOM-5528-->
*Fix submitted by Eden Duong in pull request [23925](https://github.com/magento/magento2/pull/23925)*. [GitHub-23924](https://github.com/magento/magento2/issues/23924)

<!--- ENGCOM-5538-->
*Fix submitted by Eden Duong in pull request [23985](https://github.com/magento/magento2/pull/23985)*. [GitHub-23984](https://github.com/magento/magento2/issues/23984)

<!--- ENGCOM-5531-->
*Fix submitted by Eden Duong in pull request [23954](https://github.com/magento/magento2/pull/23954)*. [GitHub-23953](https://github.com/magento/magento2/issues/23953)

<!--- ENGCOM-5577-->
*Fix submitted by Eden Duong in pull request [24000](https://github.com/magento/magento2/pull/24000)*. [GitHub-23999](https://github.com/magento/magento2/issues/23999)

<!--- ENGCOM-5594-->
*Fix submitted by Pieter Hoste in pull request [24001](https://github.com/magento/magento2/pull/24001)*. [GitHub-23619](https://github.com/magento/magento2/issues/23619)

<!--- ENGCOM-5559-->
*Fix submitted by Renon Stewart in pull request [24054](https://github.com/magento/magento2/pull/24054)*. [GitHub-22338](https://github.com/magento/magento2/issues/22338)

<!--- ENGCOM-5631-->
*Fix submitted by Sergey Solo in pull request [23918](https://github.com/magento/magento2/pull/23918)*. [GitHub-5901](https://github.com/magento/magento2/issues/5901)

<!--- ENGCOM-5638-->
*Fix submitted by Eden Duong in pull request [24083](https://github.com/magento/magento2/pull/24083)*. [GitHub-24082](https://github.com/magento/magento2/issues/24082)

<!--- ENGCOM-5655-->
*Fix submitted by Eden Duong in pull request [24165](https://github.com/magento/magento2/pull/24165)*. [GitHub-24164](https://github.com/magento/magento2/issues/24164)

<!--- ENGCOM-5661-->
*Fix submitted by Eden Duong in pull request [24170](https://github.com/magento/magento2/pull/24170)*. [GitHub-24169](https://github.com/magento/magento2/issues/24169)

<!--- ENGCOM-5659-->
*Fix submitted by Eden Duong in pull request [24173](https://github.com/magento/magento2/pull/24173)*. [GitHub-24172](https://github.com/magento/magento2/issues/24172)

<!--- ENGCOM-5672-->
*Fix submitted by Eden Duong in pull request [24205](https://github.com/magento/magento2/pull/24205)*. [GitHub-24204](https://github.com/magento/magento2/issues/24204)

<!--- ENGCOM-5592-->
*Fix submitted by Ihor Sviziev in pull request [23325](https://github.com/magento/magento2/pull/23325)*. [GitHub-23324](https://github.com/magento/magento2/issues/23324)

<!--- ENGCOM-5682-->
*Fix submitted by Eden Duong in pull request [24249](https://github.com/magento/magento2/pull/24249)*. [GitHub-24248](https://github.com/magento/magento2/issues/24248)

<!--- ENGCOM-5704-->
*Fix submitted by Eden Duong in pull request [24294](https://github.com/magento/magento2/pull/24294)*. [GitHub-24293](https://github.com/magento/magento2/issues/24293)

<!--- ENGCOM-5733-->
*Fix submitted by Alexander Taranovsky in pull request [24331](https://github.com/magento/magento2/pull/24331)*. [GitHub-24330](https://github.com/magento/magento2/issues/24330)

<!--- ENGCOM-5739-->
*Fix submitted by ochnygosch in pull request [24367](https://github.com/magento/magento2/pull/24367)*. [GitHub-24362](https://github.com/magento/magento2/issues/24362)

<!--- ENGCOM-5761-->
*Fix submitted by Sergey Solo in pull request [24336](https://github.com/magento/magento2/pull/24336)*. [GitHub-2228](https://github.com/magento/magento2/issues/2228)

<!--- ENGCOM-5762-->
*Fix submitted by Eden Duong in pull request [24397](https://github.com/magento/magento2/pull/24397)*. [GitHub-24387](https://github.com/magento/magento2/issues/24387)

<!--- ENGCOM-5131-->
*Fix submitted by Maksym Novik in pull request [21424](https://github.com/magento/magento2/pull/21424)*. [GitHub-16852](https://github.com/magento/magento2/issues/16852)

<!--- ENGCOM-5805-->
*Fix submitted by Ashutosh Srivastva in pull request [24502](https://github.com/magento/magento2/pull/24502)*. [GitHub-24410](https://github.com/magento/magento2/issues/24410)

<!--- ENGCOM-5746-->
*Fix submitted by Denis Solovyov in pull request [24392](https://github.com/magento/magento2/pull/24392)*. [GitHub-24329](https://github.com/magento/magento2/issues/24329)

<!--- ENGCOM-5840-->
*Fix submitted by Alexandre Thurow in pull request [24589](https://github.com/magento/magento2/pull/24589)*. [GitHub-23473](https://github.com/magento/magento2/issues/23473)

<!--- ENGCOM-5863-->
*Fix submitted by Rani Priya in pull request [24431](https://github.com/magento/magento2/pull/24431)*. [GitHub-24430](https://github.com/magento/magento2/issues/24430)

<!--- ENGCOM-5909-->
*Fix submitted by Yurii in pull request [24661](https://github.com/magento/magento2/pull/24661)*. [GitHub-24646](https://github.com/magento/magento2/issues/24646)

<!--- ENGCOM-5640-->
*Fix submitted by Jamie Saunders in pull request [23827](https://github.com/magento/magento2/pull/23827)*. [GitHub-23824](https://github.com/magento/magento2/issues/23824)

<!--- ENGCOM-6043-->
*Fix submitted by Bartłomiej Szubert in pull request [24927](https://github.com/magento/magento2/pull/24927)*. [GitHub-24710](https://github.com/magento/magento2/issues/24710)

<!--- ENGCOM-5738-->
*Fix submitted by Oleksii Lisovyi in pull request [24345](https://github.com/magento/magento2/pull/24345)*. [GitHub-12560](https://github.com/magento/magento2/issues/12560)

<!--- ENGCOM-6158-->
*Fix submitted by Mateusz Krzeszowiak in pull request [25233](https://github.com/magento/magento2/pull/25233)*. [GitHub-25231](https://github.com/magento/magento2/issues/25231)


### Gift card

<!--- MC-16375-->

<!--- MC-17542-->
ee only

### Gift registry


### Gift wrapping

<!--- MC-18005-->


### Google Tag Manager

<!--- ENGCOM-4731-->
*Fix submitted by Raul E Watson in pull request [14](https://github.com/magento/partners-magento2ee/pull/14)*. [GitHub-20164](https://github.com/magento/magento2/issues/20164)



### Image

<!--- ENGCOM-5569-->
*Fix submitted by Sunil in pull request [23533](https://github.com/magento/magento2/pull/23533)*. [GitHub-23516](https://github.com/magento/magento2/issues/23516)

<!--- ENGCOM-5635-->
*Fix submitted by Burlacu Vasilii in pull request [21798](https://github.com/magento/magento2/pull/21798)*. [GitHub-5023](https://github.com/magento/magento2/issues/5023)

<!--- ENGCOM-5639-->
*Fix submitted by Sergey Solo in pull request [23820](https://github.com/magento/magento2/pull/23820)*. [GitHub-3993](https://github.com/magento/magento2/issues/3993)


### Import/export

<!--- MC-20112-->

<!--- MC-20229-->

<!--- MC-19661-->

<!--- MC-18710-->

<!--- MC-19399-->

<!--- MC-18815-->

<!--- MC-70803-->

<!--- MC-15256-->

<!--- ENGCOM-5574-->
*Fix submitted by Eden Duong in pull request [24008](https://github.com/magento/magento2/pull/24008)*. [GitHub-24007](https://github.com/magento/magento2/issues/24007)

<!--- ENGCOM-5799 5751-->
*Fix submitted by Alexander Taranovsky in pull request [24420](https://github.com/magento/magento2/pull/24420)*. [GitHub-5246](https://github.com/magento/magento2/issues/5246), 

<!--- ENGCOM-5702-->
*Fix submitted by kristiancharb in pull request [24053](https://github.com/magento/magento2/pull/24053)*. [GitHub-23042](https://github.com/magento/magento2/issues/23042)

<!--- ENGCOM-5860-->
*Fix submitted by Eden Duong in pull request [24643](https://github.com/magento/magento2/pull/24643)*. [GitHub-24642](https://github.com/magento/magento2/issues/24642)

<!--- ENGCOM-5992-->
*Fix submitted by Mahesh Singh in pull request [24831](https://github.com/magento/magento2/pull/24831)*. [GitHub-24722](https://github.com/magento/magento2/issues/24722)

<!--- ENGCOM-6116-->
*Fix submitted by Eden Duong in pull request [25102](https://github.com/magento/magento2/pull/25102)*. [GitHub-25101](https://github.com/magento/magento2/issues/25101)

<!--- ENGCOM-6079-->
*Fix submitted by Alexander Lukyanov in pull request [24969](https://github.com/magento/magento2/pull/24969)*. [GitHub-23465](https://github.com/magento/magento2/issues/23465)




### Index

<!--- MC-18833-->

<!--- MC-21897-->

<!--- ENGCOM-5624-->
*Fix submitted by Diego Cabrejas in pull request [23300](https://github.com/magento/magento2/pull/23300)*. [GitHub-22769](https://github.com/magento/magento2/issues/22769)

<!--- ENGCOM-5910-->
*Fix submitted by Bruce in pull request [24415](https://github.com/magento/magento2/pull/24415)*. [GitHub-24414](https://github.com/magento/magento2/issues/24414)



### Infrastructure

<!--- MC-18190-->

<!--- ENGCOM-5539-->
*Fix submitted by Will Palmer in pull request [23988](https://github.com/magento/magento2/pull/23988)*. [GitHub-23987](https://github.com/magento/magento2/issues/23987)

<!--- ENGCOM-5540-->
* File permissions for non-executable files in GitHub have been changed from 755 to 664 where appropriate. *Fix submitted by Pieter Hoste in pull request [24005](https://github.com/magento/magento2/pull/24005)*. [GitHub-1453](https://github.com/magento/magento2/issues/1453)

<!--- ENGCOM-5634-->
*Fix submitted by Eden Duong in pull request [23693](https://github.com/magento/magento2/pull/23693)*. [GitHub-23359](https://github.com/magento/magento2/issues/23359)

<!--- ENGCOM-5683-->
*Fix submitted by semajeg in pull request [23369](https://github.com/magento/magento2/pull/23369)*. [GitHub-16382](https://github.com/magento/magento2/issues/16382)

<!--- ENGCOM-5554-->
*Fix submitted by David Verholen in pull request [24030](https://github.com/magento/magento2/pull/24030)*. [GitHub-24025](https://github.com/magento/magento2/issues/24025)

<!--- ENGCOM-5757-->
*Fix submitted by Thomas Klein in pull request [24405](https://github.com/magento/magento2/pull/24405)*. [GitHub-12371](https://github.com/magento/magento2/issues/12371)

<!--- ENGCOM-6044-->
* An incorrect Bool return type for the `setIsActive()` method in `Salesrule Module RuleInterface.php` has been corrected to RuleInterface. *Fix submitted by Bartłomiej Szubert in pull request [24814](https://github.com/magento/magento2/pull/24814)*. [GitHub-13278](https://github.com/magento/magento2/issues/13278)

<!--- ENGCOM-6119-->
*Fix submitted by Alexandr Skrashuk in pull request [25055](https://github.com/magento/magento2/pull/25055)*. [GitHub-24726](https://github.com/magento/magento2/issues/24726)

<!--- ENGCOM-6186-->
*Fix submitted by Cristian Sanclemente in pull request [25317](https://github.com/magento/magento2/pull/25317)*. [GitHub-23920](https://github.com/magento/magento2/issues/23920)


### Inventory

<!--- MC-17916-->

<!--- MC-19640-->

<!--- MC-19414-->

<!--- MC-19743-->

<!--- MC-20504-->

### Layered navigation

<!--- ENGCOM-5802-->
*Fix submitted by Mahesh Singh in pull request [24497](https://github.com/magento/magento2/pull/24497)*. [GitHub-24031](https://github.com/magento/magento2/issues/24031)



### Media storage

<!--- MC-19156-->

### Newsletter

<!--- MC-17948-->

<!--- MC-15237-->

<!--- ENGCOM-5555-->
*Fix submitted by KrielkipNL in pull request [24028](https://github.com/magento/magento2/pull/24028)*. [GitHub-24027](https://github.com/magento/magento2/issues/24027)

<!--- ENGCOM-5530-->
*Fix submitted by Eden Duong in pull request [23737](https://github.com/magento/magento2/pull/23737)*. [GitHub-23729](https://github.com/magento/magento2/issues/23729)

<!--- ENGCOM-6144-->
* Magento now displays empty **Customer First Name** and **Customer Last Name** fields on the Admin **Marketing** > **Newsletter Subscribers** page. Previously, these fields contained the unexpected string `—`. *Fix submitted by Eden Duong in pull request [25058](https://github.com/magento/magento2/pull/25058)*. [GitHub-25057](https://github.com/magento/magento2/issues/25057)

<!--- ENGCOM-6148-->
Corrected alignment of the Newsletter label and associated checkbox on the Admin customer edit page. *Fix submitted by Arvinda Kumar in pull request [25208](https://github.com/magento/magento2/pull/25208)*. [GitHub-25207](https://github.com/magento/magento2/issues/25207)


### Orders

<!--- ENGCOM-5529-->
 *Fix submitted by Eden Duong in pull request [23817](https://github.com/magento/magento2/pull/23817)*. [GitHub-23805](https://github.com/magento/magento2/issues/23805)

<!--- ENGCOM-5591-->
*Fix submitted by Artem Voloznov in pull request [24049](https://github.com/magento/magento2/pull/24049)*. [GitHub-24012](https://github.com/magento/magento2/issues/24012)

<!--- ENGCOM-5475-->
*Fix submitted by Pavel Bystritsky in pull request [20577](https://github.com/magento/magento2/pull/20577)*. [GitHub-19230](https://github.com/magento/magento2/issues/19230)

<!--- ENGCOM-5552-->
*Fix submitted by Eden Duong in pull request [24016](https://github.com/magento/magento2/pull/24016)*. [GitHub-24015](https://github.com/magento/magento2/issues/24015)

<!--- ENGCOM-5995-->
*Fix submitted by Adarsh Manickam in pull request [24845](https://github.com/magento/magento2/pull/24845)*. [GitHub-24779](https://github.com/magento/magento2/issues/24779)

<!--- ENGCOM-6036-->
*Fix submitted by Adarsh Manickam in pull request [24913](https://github.com/magento/magento2/pull/24913)*. [GitHub-12855](https://github.com/magento/magento2/issues/12855)

<!--- ENGCOM-6039-->
*Fix submitted by Sergiy Vasiutynskyi in pull request [24746](https://github.com/magento/magento2/pull/24746)*. [GitHub-23627](https://github.com/magento/magento2/issues/23627)

<!--- ENGCOM-6112-->
*Fix submitted by Eden Duong in pull request [25085](https://github.com/magento/magento2/pull/25085)*. [GitHub-25072](https://github.com/magento/magento2/issues/25072)


### Page Builder

<!--- MC-18071-->


### Payment methods

<!--- MC-19008-->

<!--- MC-18783-->

<!--- MC-19735-->

<!--- MC-19274-->

<!--- MC-19296-->

<!--- MC-19538-->

<!--- MC-18365-->

<!--- MC-18194-->

<!--- MC-19114-->

<!--- MC-15140-->

<!--- MC-19542-->

<!--- MC-19917-->

<!--- MC-21467-->

<!--- ENGCOM-5630-->
*Fix submitted by Oleksii Lisovyi in pull request [24121](https://github.com/magento/magento2/pull/24121)*. [GitHub-22525](https://github.com/magento/magento2/issues/22525),[GitHub-22528](https://github.com/magento/magento2/issues/22528)

<!--- ENGCOM-5710-->
*Fix submitted by Eden Duong in pull request [24313](https://github.com/magento/magento2/pull/24313)*. [GitHub-24302](https://github.com/magento/magento2/issues/24302), [GitHub-24304](https://github.com/magento/magento2/issues/24304)

<!--- ENGCOM-5804-->
*Fix submitted by prabhatrawat-webkul in pull request [24501](https://github.com/magento/magento2/pull/24501)*. [GitHub-23205](https://github.com/magento/magento2/issues/23205)

<!--- ENGCOM-5849-->
*Fix submitted by Anton in pull request [24622](https://github.com/magento/magento2/pull/24622)*. [GitHub-24618](https://github.com/magento/magento2/issues/24618)

<!--- ENGCOM-5925-->
*Fix submitted by yupik in pull request [24694](https://github.com/magento/magento2/pull/24694)*. [GitHub-23880](https://github.com/magento/magento2/issues/23880)


### Performance

<!--- MC-19249-->

<!--- MC-20173-->


### Pricing



### Reports

<!--- ENGCOM-5590-->
*Fix submitted by Eden Duong in pull request [24104](https://github.com/magento/magento2/pull/24104)*. [GitHub-24102](https://github.com/magento/magento2/issues/24102)

<!--- ENGCOM-5832-->
*Fix submitted by Mathew Beane in pull request [24559](https://github.com/magento/magento2/pull/24559)*. [GitHub-24588](https://github.com/magento/magento2/issues/24588)

<!--- ENGCOM-6104-->
*Fix submitted by Eden Duong in pull request [25034](https://github.com/magento/magento2/pull/25034)*. [GitHub-25033](https://github.com/magento/magento2/issues/25033)


### Reviews

<!--- MC-17630-->

<!--- ENGCOM-5737-->
*Fix submitted by Shankar Konar in pull request [24318](https://github.com/magento/magento2/pull/24318)*. [GitHub-23990](https://github.com/magento/magento2/issues/23990)

<!--- ENGCOM-5774-->
*Fix submitted by Eden Duong in pull request [24399](https://github.com/magento/magento2/pull/24399)*. [GitHub-24310](https://github.com/magento/magento2/issues/24310)

<!--- ENGCOM-6113-->
*Fix submitted by Gaurav Agarwal in pull request [25051](https://github.com/magento/magento2/pull/25051)*. [GitHub-25039](https://github.com/magento/magento2/issues/25039)



### Return Merchandise Authorizations (RMA)

<!--- MC-19769-->

<!--- MC-19762-->

<!--- MC-17939-->

<!--- MC-19857-->

<!--- MC-19258-->

<!--- MC-19433-->


### Reward ee only

<!--- MC-19017--> 

<!--- MC-19428-->

<!--- MC-19189-->

<!--- MC-19430-->


### Sales

<!--- MC-17925-->

<!--- MC-19400-->

<!--- MC-19303-->

<!--- MC-19798-->

<!--- MC-21699-->

<!--- MAGETWO-67450-->

<!--- ENGCOM-5516-->
 *Fix submitted by kcnariya in pull request [23898](https://github.com/magento/magento2/pull/23898)*. [GitHub-23897](https://github.com/magento/magento2/issues/23897)



### SalesRule

<!--- MAGETWO-96379-->

<!--- MC-19260-->

<!--- MC-19941-->

gh  24526

<!--- MC-19716-->

<!--- MC-19238-->


### Search


<!--- MC-20381-->

<!--- MC-19906-->

<!--- MC-17947-->

<!--- MC-19849-->

<!--- MC-19537-->

<!--- MC-19197-->

<!--- MC-19527-->

<!--- MC-20213-->

<!--- MC-17524-->

<!--- MC-20250-->

<!--- MC-21808-->

<!--- ENGCOM-5587-->
*Fix submitted by Eden Duong in pull request [24101](https://github.com/magento/magento2/pull/24101)*. [GitHub-24100](https://github.com/magento/magento2/issues/24100)

<!--- ENGCOM-5596-->
*Fix submitted by Eden Duong in pull request [23687](https://github.com/magento/magento2/pull/23687)*. [GitHub-23557](https://github.com/magento/magento2/issues/23557)

<!--- ENGCOM-5597-->
* Searching on categories from the New Product page now works as expected when you enter a search string that does not match an existing category. Previously, Magento displayed incorrect results instead of indicating zero search results. *Fix submitted by Eden Duong in pull request [23698](https://github.com/magento/magento2/pull/23698)*. [GitHub-23697](https://github.com/magento/magento2/issues/23697)

<!--- ENGCOM-5662-->
*Fix submitted by Ronak Parmar in pull request [23059](https://github.com/magento/magento2/pull/23059)*. [GitHub-23055](https://github.com/magento/magento2/issues/23055)

<!--- ENGCOM-6106-->
*Fix submitted by Pavel Bystritsky in pull request [24974](https://github.com/magento/magento2/pull/24974)*. [GitHub-24781](https://github.com/magento/magento2/issues/24781)


### Shipping

<!--- MC-18366-->

<!--- MC-16684-->

<!--- MC-19105-->

<!--- MC-18519-->

<!--- MC-18215-->

<!--- MAGETWO-99043-->

<!--- ENGCOM-5215-->
* The code for offline shipping methods has been optimized to remove redundant carrier codes. *Fix submitted by Alexander Taranovsky in pull request [23144](https://github.com/magento/magento2/pull/23144)*. [GitHub-23143](https://github.com/magento/magento2/issues/23143)

<!--- ENGCOM-5691-->
*Fix submitted by wbeltranc in pull request [24265](https://github.com/magento/magento2/pull/24265)*. [GitHub-19853](https://github.com/magento/magento2/issues/19853)

<!--- ENGCOM-5674-->
 *Fix submitted by Eden Duong in pull request [24213](https://github.com/magento/magento2/pull/24213)*. [GitHub-24212](https://github.com/magento/magento2/issues/24212)

<!--- ENGCOM-5703-->
*Fix submitted by Eden Duong in pull request [24296](https://github.com/magento/magento2/pull/24296)*. [GitHub-24295](https://github.com/magento/magento2/issues/24295)

<!--- ENGCOM-5748-->
*Fix submitted by Eden Duong in pull request [24403](https://github.com/magento/magento2/pull/24403)*. [GitHub-24402](https://github.com/magento/magento2/issues/24402)

<!--- ENGCOM-5993-->
*Fix submitted by Max Souza in pull request [24827](https://github.com/magento/magento2/pull/24827)*. [GitHub-24701](https://github.com/magento/magento2/issues/24701)



### Sitemap

<!--- ENGCOM-5801-->
*Fix submitted by Bartłomiej Szubert in pull request [24482](https://github.com/magento/magento2/pull/24482)*. [GitHub-21610](https://github.com/magento/magento2/issues/21610)

<!--- ENGCOM-5844-->
*Fix submitted by Krzysztof Daniel in pull request [24605](https://github.com/magento/magento2/pull/24605)*. [GitHub-4511](https://github.com/magento/magento2/issues/4511), [GitHub-4511](https://github.com/magento/magento2/issues/5321), [GitHub-24484](https://github.com/magento/magento2/issues/24484)

<!--- ENGCOM-5917-->
*Fix submitted by Hailong in pull request [24675](https://github.com/magento/magento2/pull/24675)*. [GitHub-24623](https://github.com/magento/magento2/issues/24623)



### Staging

<!--- MC-19407-->

<!--- MC-18731-->

<!--- MC-19270-->

<!--- MC-19765-->

<!--- MC-19951-->

<!--- MC-17653-->

<!--- MC-19013-->

### Store

<!--- MC-20394-->

<!--- MC-19306-->

<!--- MC-19585-->

### Swagger

<!--- ENGCOM-5853-->
*Fix submitted by Oleksandr Kravchuk in pull request [24627](https://github.com/magento/magento2/pull/24627)*. [GitHub-24626](https://github.com/magento/magento2/issues/24626)


### Swatches

<!--- MC-19739-->

<!--- MC-19669-->

<!--- MC-19683-->

<!--- ENGCOM-5716-->
*Fix submitted by Rani Priya in pull request [24308](https://github.com/magento/magento2/pull/24308)*. [GitHub-24306](https://github.com/magento/magento2/issues/24306)



### Target Rule ee only

<!--- MC-21900-->


### Tax

<!--- MC-17014-->

<!--- ENGCOM-5545-->
*Fix submitted by Eden Duong in pull request [23968](https://github.com/magento/magento2/pull/23968)*. [GitHub-23967](https://github.com/magento/magento2/issues/23967)


<!--- ENGCOM-5558-->
 *Fix submitted by Eden Duong in pull request [23739](https://github.com/magento/magento2/pull/23739)*. [GitHub-23738](https://github.com/magento/magento2/issues/23738)

<!--- ENGCOM-6004-->
*Fix submitted by Bruno Roeder in pull request [24737](https://github.com/magento/magento2/pull/24737)*. [GitHub-23116](https://github.com/magento/magento2/issues/23116)


### Templates



### Testing

<!--- MC-19064-->ask Misha

<!--- ENGCOM-5940-->
*Fix submitted by Yurii in pull request [24291](https://github.com/magento/magento2/pull/24291)*. [GitHub-23279](https://github.com/magento/magento2/issues/23279)



### Translation and locales

<!--- MC-20118-->

<!--- ENGCOM-5663-->
*Fix submitted by Bartłomiej Szubert in pull request [24179](https://github.com/magento/magento2/pull/24179)*. [GitHub-22956](https://github.com/magento/magento2/issues/22956)

<!--- ENGCOM-5972-->
*Fix submitted by Bartłomiej Szubert in pull request [22293](https://github.com/magento/magento2/pull/22293)*. [GitHub-12256](https://github.com/magento/magento2/issues/12256), [GitHub-13263](https://github.com/magento/magento2/issues/13263)




### UI

<!--- MC-18348-->

<!--- MC-20108-->

<!--- MC-18763-->

<!--- MC-19866-->

<!--- ENGCOM-5536-->
*Fix submitted by Nick de Kleijn in pull request [23884](https://github.com/magento/magento2/pull/23884)*. [GitHub-23877](https://github.com/magento/magento2/issues/23877)


<!--- ENGCOM-5533-->
* The tax amount in  sales order emails is now displayed before the row that displays the order’s grand total. *Fix submitted by Nazar Klovanych in pull request [23406](https://github.com/magento/magento2/pull/23406)*. [GitHub-21768](https://github.com/magento/magento2/issues/21768)

<!--- ENGCOM-5570-->
*Fix submitted by Arushi Bansal in pull request [24013](https://github.com/magento/magento2/pull/24013)*. [GitHub-23977](https://github.com/magento/magento2/issues/23977)

<!--- ENGCOM-5459-->
*Fix submitted by Syed Imtiyaz Hasan in pull request [23699](https://github.com/magento/magento2/pull/23699)*. [GitHub-23575](https://github.com/magento/magento2/issues/23575)

<!--- ENGCOM-5535-->
 *Fix submitted by Eden Duong in pull request [23747](https://github.com/magento/magento2/pull/23747)*. [GitHub-23746](https://github.com/magento/magento2/issues/23746)

<!--- ENGCOM-5586-->
* A missing header label has been  added to the Admin **System** > **Integrations** table. *Fix submitted by Eden Duong in pull request [24097](https://github.com/magento/magento2/pull/24097)*. [GitHub-24096](https://github.com/magento/magento2/issues/24096)

<!--- ENGCOM-5585-->
*Fix submitted by Eden Duong in pull request [24099](https://github.com/magento/magento2/pull/24099)*. [GitHub-24098](https://github.com/magento/magento2/issues/24098)

<!--- ENGCOM-5608-->
*Fix submitted by Eden Duong in pull request [24078](https://github.com/magento/magento2/pull/24078)*. [GitHub-24068](https://github.com/magento/magento2/issues/24068)

<!--- ENGCOM-5524-->
*Fix submitted by Andreas Schrammel in pull request [13580](https://github.com/magento/magento2/pull/13580)*. [GitHub-11657](https://github.com/magento/magento2/issues/11657)

<!--- ENGCOM-5643-->
*Fix submitted by Shankar Konar in pull request [23774](https://github.com/magento/magento2/pull/23774)*. [GitHub-23705](https://github.com/magento/magento2/issues/23705)

<!--- ENGCOM-5589-->
*Fix submitted by Eden Duong in pull request [24106](https://github.com/magento/magento2/pull/24106)*. [GitHub-24105](https://github.com/magento/magento2/issues/24105)

<!--- ENGCOM-5627-->
*Fix submitted by Eden Duong in pull request [24140](https://github.com/magento/magento2/pull/24140)*. [GitHub-24139](https://github.com/magento/magento2/issues/24139)

<!--- ENGCOM-5607-->
*Fix submitted by gwharton in pull request [24114](https://github.com/magento/magento2/pull/24114)*. [GitHub-22867](https://github.com/magento/magento2/issues/22867)

<!--- ENGCOM-5647-->
*Fix submitted by Eden Duong in pull request [24155](https://github.com/magento/magento2/pull/24155)*. [GitHub-24154](https://github.com/magento/magento2/issues/24154)

<!--- ENGCOM-5647-->
*Fix submitted by Eden Duong in pull request [24163](https://github.com/magento/magento2/pull/24163)*. [GitHub-24162](https://github.com/magento/magento2/issues/24162)

<!--- ENGCOM-5665-->
*Fix submitted by Eden Duong in pull request [24163](https://github.com/magento/magento2/pull/24163)*. [GitHub-24162](https://github.com/magento/magento2/issues/24162)

<!--- ENGCOM-5614-->
*Fix submitted by Burlacu Vasilii in pull request [20765](https://github.com/magento/magento2/pull/20765)*. [GitHub-20764](https://github.com/magento/magento2/issues/20764)

<!--- ENGCOM-5695-->
*Fix submitted by Sudheer Kumar Gajjala in pull request [24211](https://github.com/magento/magento2/pull/24211)*. [GitHub-24210](https://github.com/magento/magento2/issues/24210)

<!--- ENGCOM-5644-->
*Fix submitted by Eden Duong in pull request [24148](https://github.com/magento/magento2/pull/24148)*. [GitHub-24147](https://github.com/magento/magento2/issues/24147)

<!--- ENGCOM-5747-->
*Fix submitted by Rani Priya in pull request [24396](https://github.com/magento/magento2/pull/24396)*. [GitHub-24395](https://github.com/magento/magento2/issues/24395)

<!--- ENGCOM-5194-->
*Fix submitted by lateNIGHT in pull request [22123](https://github.com/magento/magento2/pull/22123)*. [GitHub-22490](https://github.com/magento/magento2/issues/22490)

<!--- ENGCOM-5782-->
*Fix submitted by Sunil in pull request [24160](https://github.com/magento/magento2/pull/24160)*. [GitHub-23567](https://github.com/magento/magento2/issues/23567)

<!--- ENGCOM-5823-->
*Fix submitted by Eduard Chitoraga in pull request [24538](https://github.com/magento/magento2/pull/24538)*. [GitHub-24537](https://github.com/magento/magento2/issues/24537)

<!--- ENGCOM-5958-->
*Fix submitted by Eden Duong in pull request [24741](https://github.com/magento/magento2/pull/24741)*. [GitHub-24739](https://github.com/magento/magento2/issues/24739)

<!--- ENGCOM-6019-->
*Fix submitted by Brent Robert in pull request [24881](https://github.com/magento/magento2/pull/24881)*. [GitHub-23754](https://github.com/magento/magento2/issues/23754)

<!--- ENGCOM-6011-->
*Fix submitted by Bruno Roeder in pull request [24832](https://github.com/magento/magento2/pull/24832)*. [GitHub-22169](https://github.com/magento/magento2/issues/22169), [GitHub-24721](https://github.com/magento/magento2/issues/24721)

<!--- ENGCOM-6012-->
*Fix submitted by MaxRomanov4669 in pull request [24817](https://github.com/magento/magento2/pull/24817)*. [GitHub-24452](https://github.com/magento/magento2/issues/24452)

<!--- ENGCOM-6060-->
*Fix submitted by Eduard Chitoraga in pull request [24818](https://github.com/magento/magento2/pull/24818)*. [GitHub-24745](https://github.com/magento/magento2/issues/24745)

<!--- ENGCOM-6070-->
*Fix submitted by Anuj Gupta in pull request [25015](https://github.com/magento/magento2/pull/25015)*. [GitHub-24652](https://github.com/magento/magento2/issues/24652)

<!--- ENGCOM-6136-->
*Fix submitted by Mahesh Singh in pull request [25176](https://github.com/magento/magento2/pull/25176)*. [GitHub-23170](https://github.com/magento/magento2/issues/23170)

<!--- ENGCOM-6122-->
*Fix submitted by Adarsh Manickam in pull request [25149](https://github.com/magento/magento2/pull/25149)*. [GitHub-25135](https://github.com/magento/magento2/issues/25135)

<!--- ENGCOM-6123-->
*Fix submitted by Adarsh Manickam in pull request [25145](https://github.com/magento/magento2/pull/25145)*. [GitHub-25144](https://github.com/magento/magento2/issues/25144)

<!--- ENGCOM-6117-->
*Fix submitted by Eden Duong in pull request [25109](https://github.com/magento/magento2/pull/25109)*. [GitHub-25108](https://github.com/magento/magento2/issues/25108)

<!--- ENGCOM-6134-->
* The **Get Video Information** button on the **Product** > **Images and Videos** > **Add Video** now responds as expected. *Fix submitted by Eduard Chitoraga in pull request [25090](https://github.com/magento/magento2/pull/25090)*. [GitHub-25088](https://github.com/magento/magento2/issues/25088)

<!--- ENGCOM-6152-->
*Fix submitted by Rahul Mahto in pull request [25168](https://github.com/magento/magento2/pull/25168)*. [GitHub-25167](https://github.com/magento/magento2/issues/25167)



### URL rewrites

<!--- MC-18561-->

<!--- MC-19213--> ee only

<!--- MC-18368-->

<!--- MC-21737-->

<!--- MAGETWO-69825-->

<!--- ENGCOM-5446-->
*Fix submitted by Stanislav Ilnytskyi in pull request [23430](https://github.com/magento/magento2/pull/23430)*. [GitHub-23429](https://github.com/magento/magento2/issues/23429)


### Vertex



### Visual Merchandiser ee only

<!--- MC-20404-->

<!--- MC-18672-->

<!--- MC-21033-->


### Web API framework

<!--- MC-19432-->

<!--- MAGETWO-70885-->

<!--- ENGCOM-5610-->
*Fix submitted by Oleksandr Kravchuk in pull request [24117](https://github.com/magento/magento2/pull/24117)*. [GitHub-24116](https://github.com/magento/magento2/issues/24116)

<!--- ENGCOM-5821-->
*Fix submitted by Eden Duong in pull request [24519](https://github.com/magento/magento2/pull/24519)*. [GitHub-24518](https://github.com/magento/magento2/issues/24518)

<!--- ENGCOM-5987-->
*Fix submitted by Ivan Koliadynskyy in pull request [24769](https://github.com/magento/magento2/pull/24769)*. [GitHub-24716](https://github.com/magento/magento2/issues/24716)


### Widget

<!--- MC-18763-->

### Wishlist

<!--- MC-20139-->

<!--- MC-19950-->

<!--- MC-19060-->

<!--- MC-18196-->

<!--- ENGCOM-5715-->
*Fix submitted by Rani Priya in pull request [24320](https://github.com/magento/magento2/pull/24320)*. [GitHub-24319](https://github.com/magento/magento2/issues/24319)

<!--- ENGCOM-5760-->
*Fix submitted by Rus0 in pull request [24300](https://github.com/magento/magento2/pull/24300)*. [GitHub-21519](https://github.com/magento/magento2/issues/21519)



### WYSIWYG

<!--- MC-19602-->

<!--- MC-17574-->

<!--- MC-18709-->

<!--- MC-19062-->

<!--- ENGCOM-5727-->
*Fix submitted by Pavel Bystritsky in pull request [24333](https://github.com/magento/magento2/pull/24333)*. [GitHub-23966](https://github.com/magento/magento2/issues/23966)


## Community contributions

 We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-4-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-4-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/magento-system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.4  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
