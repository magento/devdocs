---
group: release-notes
title: Magento Commerce 2.3.5 Release Notes
---

* Patch code and release notes published on *
  
Magento Commerce 2.3.5 offers significant platform upgrades, substantial security changes, and performance improvements.

This release includes over  functional fixes to the core product and  over  security enhancements. It includes resolution of over contributions by our community members. These community contributions range from minor clean-up of core code to significant enhancements to Inventory Management and GraphQL.

## Security-only patch available

Merchants can now install time-sensitive security fixes without applying the hundreds of functional fixes and enhancements that a full quarterly release (for example, Magento 2.3.4) provides. Patch 2.3.4.1 (Composer package 2.3.4-p1) is a security-only patch that provides fixes for vulnerabilities that have been identified in our previous quarterly release, Magento 2.3.5 All hot fixes that were  applied to the 2.3.4 release are included in this security-only patch. (A *hot fix* provides a fix to a released version of Magento that addresses a specific problem or bug.) For general information about security-only patches, see the Magento DevBlog post [Introducing the New Security-only Patch Release](https://community.magento.com/t5/Magento-DevBlog/Introducing-the-New-Security-only-Patch-Release/ba-p/141287). For instructions on downloading and applying security-only patches (including patch 2.3.-p1), see [Install Magento using Composer](https://devdocs.magento.com/guides/v2.3/install-gde/composer.html). Security-only patches include only security bug fixes, not the additional security enhancements that are included in the full patch.

With this quarterly release, we’ve changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento (APSB20-02)](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

## Other release information

Although code for these features is bundled with quarterly releases of the Magento core code, several of these projects (for example, Page Builder, Inventory Management, and Progressive Web Applications (PWA) Studio) are also released independently. Bug fixes for these projects are documented in the separate, project-specific release information that is available in the documentation for each project.

## Highlights

Look for the following highlights in this release:

### Substantial security enhancements

This release includes the following security enhancements:

#### Over 30 security enhancements that help close cross-site scripting (XSS) and remote code execution (RCE) vulnerabilities

No confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions. Most of these issues require that an attacker first obtains access to the Admin. As a result, we remind you to take all necessary steps to protect your Admin, including but not limited to these efforts: IP whitelisting, [two-factor authentication](https://devdocs.magento.com/guides/v2.3/security/two-factor-authentication.html), use of a VPN, the use of a unique location rather than `/admin`, and good password hygiene. See [Security updates available for Magento | APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html) for a discussion of these fixed issues. All known exploitable security issues fixed in this release (2.3.5) have been ported to  1.14.4.5 and 1.9.4.5, as appropriate.

With the 2.3.4 release, we changed how we describe these security issues.  Individual issues are no longer described in the Magento Security Center. Instead, these issues are documented in an Adobe Security bulletin. Please see [Security updates available for Magento  APSB20-02](https://helpx.adobe.com/security/products/magento/apsb20-02.html).

#### Security enhancements and fixes to core code

Additional security enhancements include:

{:.bs-callout-info}
Starting with the release of Magento Commerce 2.3.2, Magento will assign and publish indexed Common Vulnerabilities and Exposures (CVE) numbers with each security bug reported to us by external parties. This allows users of Magento Commerce to more easily identify unaddressed vulnerabilities in their deployment.

### Platform upgrades

The following platform upgrades help enhance website security and PCI compliance.

### Performance boosts

Merchants and customers will see performance improvements as a result of these enhancements:

### Infrastructure improvements

This release contains  enhancements to core quality, which improve the quality of the Framework and these modules:  catalog, sales, PayPal, Elasticsearch, import, CMS, and B2B.

### Merchant tool enhancements

### Page Builder

Page Builder enhancements for this release include:

### Inventory Management

Inventory Management enhancements for this release include:

See [Inventory Management release notes](https://devdocs.magento.com/guides/v2.3/inventory/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### GraphQL

This release includes improved GraphQL coverage for search, layered navigation, cart functionality. The following mutations/queries are available:

See [Release notes](https://devdocs.magento.com/guides/v2.3/graphql/release-notes.html) for a more detailed discussion of recent GraphQL bug fixes.

### PWA Studio

For information on these enhancements plus other improvements, see [PWA Studio releases](https://github.com/magento/pwa-studio/releases)

### dotdigital

### Google Shopping ads Channel

[Google Shopping ads Channel Release Notes](https://devdocs.magento.com/extensions/google-shopping-ads/release-notes/)  describes all changes to this feature for Magento 2.3.x.

### B2B

### Vendor-developed extension enhancements

This release of Magento includes extensions developed by third-party vendors. It includes both quality and UX improvements to these extensions.

#### Klarna

## Fixed issues

We have fixed hundreds of issues in the Magento 2.3.5 core code.

### Installation, upgrade, deployment

<!--- MC-29795-->

<!--- ENGCOM-6339-->

### AdminGWS

### Adobe stock integration

<!--- ENGCOM-6323-->

*  Image previews now close as expected when you navigate to a new page of search returns when searching Adobe Stock images. *Fix submitted by Serhiy Zhovnir in pull request [25719](https://github.com/magento/magento2/pull/25719)*. [GitHub-723](https://github.com/magento/magento2/issues/723)

<!--- ENGCOM-6285-->

*  Image details are now hidden when you click on the image in the search result list. *Fix submitted by Nazar Klovanych in pull request [25566](https://github.com/magento/magento2/pull/25566)*. [GitHub-690](https://github.com/magento/magento2/issues/690)

<!--- ENGCOM-6331-->

*  You can now use keyboard arrow keys to navigate to the next image in the preview. *Fix submitted by Adarsh Manickam in pull request [25611](https://github.com/magento/magento2/pull/25611)*. [GitHub-691](https://github.com/magento/magento2/issues/691)

### Analytics

### Backend

### Bundle products

<!--- MC-29938-->

<!--- MC-23215-->

<!--- MC-22632-->

<!--- MC-29209-->

<!--- MC-29598-->

<!--- MC-22741-->

### B2B

<!--- MC-30049-->

<!--- MC-30280-->

<!--- MC-18048-->

<!--- MC-29594-->

<!--- MC-29915-->

<!--- MC-22856-->

[GitHub-25484](https://github.com/magento/magento2/issues/25484)

<!--- MC-22684-->

<!--- MC-22948-->

<!--- MC-29984-->

<!--- MC-30113-->

<!--- MC-29050-->

<!--- MC-29870-->

<!--- MC-22875-->

### Cache

<!--- MC-23055-->

### Cart and checkout

<!--- MC-23261-->

<!--- MC-30254-->

<!--- MC-19515-->

[GitHub-24206](https://github.com/magento/magento2/issues/24206)

### Catalog

<!--- MC-29651-->

<!--- MC-30067-->

<!--- MC-18470-->

[GitHub-23833](https://github.com/magento/magento2/issues/23833)

<!--- MC-23193-->

<!--- MC-29876-->

<!--- MC-29652-->

<!--- MC-30213-->

<!--- MC-21948-->

<!--- MC-29865-->

<!--- MC-30114-->

<!--- MC-30050-->

<!--- MC-30582-->

<!--- MC-29519-->

<!--- MC-29022-->

### CatalogInventory

<!--- MC-21821-->

[GitHub-22274](https://github.com/magento/magento2/issues/22274)

### Catalog price rule

<!--- MC-29144-->

<!--- MC-29902-->


### Catalog rule

<!--- MC-19646-->

### Catalog widget

<!--- MC-30249-->

<!--- MC-29166-->

<!--- MC-23252-->


### Cleanup and simple code refactoring

<!--- ENGCOM-6348-->

*  Corrected misalignment of the **View Details** label for configurable products in the order summary of the checkout workflow . *Fix submitted by Max Fickers in pull request [25785](https://github.com/magento/magento2/pull/25785)*. [GitHub-20463](https://github.com/magento/magento2/issues/20463)

<!--- ENGCOM-6336-->

*  Added a `margin-bottom` value to the static CMS block widget in the Checkout/Cart Summary of the checkout workflow in  the Luma and Blank themes. *Fix submitted by Fabricio Sobral in pull request [25729](https://github.com/magento/magento2/pull/25729)*. [GitHub-25703](https://github.com/magento/magento2/issues/25703)

<!--- ENGCOM-6290-->

*  Added a margin between the checkbox and icon when choosing a category when assigning a condition to a new Cart Price rule.  *Fix submitted by Eden Duong in pull request [25597](https://github.com/magento/magento2/pull/25597)*. [GitHub-25596](https://github.com/magento/magento2/issues/25596)

<!--- ENGCOM-6249-->

*  Rating stars no longer overlays the product over which your mouse hovers on the category page. *Fix submitted by Kajal Solanki in pull request [25524](https://github.com/magento/magento2/pull/25524)*. [GitHub-25517](https://github.com/magento/magento2/issues/25517)

<!--- ENGCOM-6180-->

* Corrected misalignment of the calendar icon inside the textbook on the Add Design Change page. *Fix submitted by magudelo62 in pull request [25309](https://github.com/magento/magento2/pull/25309)*. [GitHub-20379](https://github.com/magento/magento2/issues/20379)


### CMS content

<!--- MC-30093-->

<!--- MC-22927-->ee only


### Command-line interface (CLI commands)

### Configurable products

<!--- MC-22732-->

<!--- MC-18057-->

<!--- ENGCOM-6349-->

### Cron

<!--- ENGCOM-6253-->

*  `bin/magento cron:run -v` no longer fails when the database name exceeds 64 characters but instead creates a shorter name. *Fix submitted by Vasil Pashovski in pull request [25472](https://github.com/magento/magento2/pull/25472)*. [GitHub-22240](https://github.com/magento/magento2/issues/22240)

<!--- MC-22819-->


### Customer

<!--- MC-17259-->

[GitHub-23128](https://github.com/magento/magento2/issues/23128)

<!--- MC-29789-->

### Customer segment ee only

<!--- MC-19235-->

<!--- MC-29429-->

<!--- MC-30443-->

### Custom customer attributes

<!--- MC-30689-->


### Database media storage

### Declarative schema

<!--- MC-17545-->

### Downloadable products

### Dynamic block (formerly banner)

### EAV

<!--- MC-30487-->

### Email

<!--- MC-22163-->

[GitHub-25068](https://github.com/magento/magento2/issues/25068)

<!--- MC-21868-->

[GitHub-25076](https://github.com/magento/magento2/issues/25076)


### Frameworks

<!--- MC-20533-->

<!--- MC-29290-->

<!--- MC-29033-->

<!--- MC-30296-->

<!--- MC-17563-->

[GitHub-22909](https://github.com/magento/magento2/issues/22909)

### JavaScript framework

<!--- MC-19435-->

<!--- MC-19141-->

<!--- ENGCOM-6382-->

*  Added a check to confirm that a file belongs to the current base URL before setting the `.min.js` suffix. Previously, when you installed a CDN file using  `require-config.js`, and your store was in production mode, the JavaScript path was changed during compilation, and Magento displayed a 404 error.

<!--- ENGCOM-6288-->

*  JavaScript errors no longer occur on the shopping cart/minicart page when the cart contains a configurable product. *Fix submitted by Ihor Sviziev in pull request [25606](https://github.com/magento/magento2/pull/25606)*. [GitHub-25601](https://github.com/magento/magento2/issues/25601)

### General fixes

<!--- MC-22935-->ee only


<!--- MC-22911-->ee only

<!--- MC-22972-->

<!--- MC-29261-->

<!--- MC-30091-->

<!--- MC-29994-->

<!--- MC-30261-->

<!--- MC-30109-->

<!--- MC-30461-->

<!--- MC-29111--> ee only

<!--- ENGCOM-6308-->

*  The `.fotorama__thumb__arr`  arrows adjacent to the thumbnail images on the product gallery now work as expected. *Fix submitted by Alexey Rakitin in pull request [25666](https://github.com/magento/magento2/pull/25666)*. [GitHub-25652](https://github.com/magento/magento2/issues/25652)

<!--- ENGCOM-6345-->

<!--- ENGCOM-6215-->

*  You can now accurately manipulate a zoomed image using your mouse. Previously. the magnified area was incorrectly offset. *Fix submitted by Mateusz Krzeszowiak in pull request [25358](https://github.com/magento/magento2/pull/25358)*. [GitHub-25027](https://github.com/magento/magento2/issues/25027)

<!--- ENGCOM-6203-->

LESS styling for the `Magento_Contact` and `Magento_Cms` modules has been moved to the correct `design` directory. This change brings these modules into alignment with the organization of other modules, none of which include any LESS styling. *Fix submitted by Paweł Tylek in pull request [25355](https://github.com/magento/magento2/pull/25355)*. [GitHub-25276](https://github.com/magento/magento2/issues/25276)*  

### Gift cards

<!--- MC-30365--> ee only


### Gift wrapping ee only

<!--- MC-29005-->

<!--- MC-29784-->

### Google Tag Manager ee only

<!--- MC-29503-->

<!--- MC-30669-->

### Image

### Import/export

<!--- MC-29361-->

<!--- MC-30321-->

<!--- MC-30066-->

<!--- MC-30285-->

<!--- MC-21727-->

<!--- MC-29874-->

<!--- MC-29952-->

<!--- MC-29376-->

<!--- MC-29792-->

<!--- MC-30649-->

<!--- MC-30438-->

<!--- MC-29009-->

<!--- ENGCOM-6213-->

*  You can now successfully import a product that does not have a `store_view_code` value. Previously, Magento displayed an error when you tried to import the product. *Fix submitted by Mahesh Singh in pull request [25080](https://github.com/magento/magento2/pull/25080)*. [GitHub-25069](https://github.com/magento/magento2/issues/25069)

### Index

<!--- ENGCOM-6188-->

<!--- MC-22008-->


### Infrastructure

<!--- ENGCOM-6240-->

*  Corrected the argument type of the email address constructor. *Fix submitted by Karyna Tsymbal in pull request [25485](https://github.com/magento/magento2/pull/25485)*. [GitHub-25434](https://github.com/magento/magento2/issues/25434)

<!--- ENGCOM-6347-->

<!--- ENGCOM-6256-->

*  The condition of the shipping method title output in `Magento_Checkout/js/view/summary/shipping` has been corrected. *Fix submitted by Andrii Beziazychnyi in pull request [25530](https://github.com/magento/magento2/pull/25530)*. [GitHub-25529](https://github.com/magento/magento2/issues/25529)

### Inventory

<!--- MC-23216-->

<!--- MC-30099-->

<!--- MC-29177-->

### Layered navigation


### Logging

<!--- MC-29230-->ee only

<!--- MC-29312-->ee only

<!--- MC-29615-->ee only

<!--- MC-30548-->ee only

### Media storage

### Newsletter

<!--- MC-23192-->

### Orders

### Payment methods

<!--- MC-29082-->

<!--- MC-29919-->

<!--- MC-18714-->

[GitHub-23934](https://github.com/magento/magento2/issues/23934)

<!--- MC-30497-->

<!--- MC-30550-->


### Performance

### Reports

### Reviews

<!--- MC-29327-->

### Return Merchandise Authorizations (RMA)

<!--- MC-22995-->

<!--- MC-30068-->

<!--- MC-22754-->

<!--- MC-30214-->

<!--- MC-21729-->


### Rewards

### Sales

<!--- MC-30116-->ee only

<!--- MC-23029-->

<!--- MC-29722-->

<!--- MC-29206-->

### Sales Rule

<!--- MC-19941-->

[GitHub-24526](https://github.com/magento/magento2/issues/24526)

<!--- MC-30268-->

### Search

<!--- MC-23113-->

<!--- MC-30183-->

<!--- MC-29920-->

<!--- MC-30117-->

<!--- MC-29530-->

### Shipping

<!--- MC-29180-->

<!--- MC-29279-->ee only

<!--- MC-23093-->

<!--- MC-28956-->

<!--- MC-30239-->

<!--- ENGCOM-6183-->

*  Support for Columbia regions has been added, and these regions are now available from the shipping and billing country dropdown menus in the checkout workflow.  *Fix submitted by magudelo62 in pull request [25313](https://github.com/magento/magento2/pull/25313)*. [GitHub-25312](https://github.com/magento/magento2/issues/25312)

### Sitemap

<!--- MC-21860-->

[GitHub-24946](https://github.com/magento/magento2/issues/24946)

<!--- MC-29287-->

### Staging

### Store

<!--- MC-23000-->

<!--- MC-22567-->

### Swagger

<!--- ENGCOM-6307-->

### Swatches

<!--- MC-30269-->

### Target Rule ee only

<!--- MC-23194-->

<!--- MC-23084-->

### Tax

<!--- MC-22931-->

<!--- MC-29099-->

### Testing

<!--- MC-22926-->

<!--- MC-23067-->

### Theme

<!--- MC-29750-->

<!--- MC-30476-->

### Translation and locales

<!--- MC-23224-->


### UI

<!--- MC-23219-->

<!--- MC-29747-->

<!--- MC-23211-->

<!--- ENGCOM-6222-->

*  You can now scroll as expected to the top of the Admin Import page. *Fix submitted by Torben Höhn in pull request [25419](https://github.com/magento/magento2/pull/25419)*. [GitHub-6682](https://github.com/magento/magento2/issues/6682)

<!--- ENGCOM-6261-->

*  Watermark size now remains consistent with the image to which it's been applied when you resize the image. *Fix submitted by KrielkipNL in pull request [25528](https://github.com/magento/magento2/pull/25528)*. [GitHub-23515](https://github.com/magento/magento2/issues/23515), [GitHub-25528](https://github.com/magento/magento2/issues/25528)

<!--- ENGCOM-6223-->

*  Magento now correctly renders the **Read more ...** page element that is associated with a product that has an `additionalOption` value that exceeds 55 characters on the storefront shipment and invoice pages. Previously, these option values were escaped. *Fix submitted by Torben Höhn in pull request [25418](https://github.com/magento/magento2/pull/25418)*. [GitHub-25050](https://github.com/magento/magento2/issues/25050)

<!--- ENGCOM-6233-->

*  Corrected position of the wishlist item delete button on the category page. *Fix submitted by Paweł Tylek in pull request [25380](https://github.com/magento/magento2/pull/25380)*. [GitHub-21190](https://github.com/magento/magento2/issues/21190)

<!--- ENGCOM-6282-->

*  Magento now displays a **N/A** where needed  on the product compare list page. Previously, the field for an attribute that was not relevant for the seclude product was left blank. *Fix submitted by Paweł Tylek in pull request [25585](https://github.com/magento/magento2/pull/25585)*. [GitHub-25008](https://github.com/magento/magento2/issues/25008)

<!--- ENGCOM-6295-->

*  Magento now displays the dropdown icon as expected when you click **Load template** during the creation of a new email template from the Admin. *Fix submitted by Adarsh Manickam in pull request [25629](https://github.com/magento/magento2/pull/25629)*. [GitHub-24840](https://github.com/magento/magento2/issues/24840)

<!--- ENGCOM-6298-->

*  Magento now retains the correct aspect ration when a store icon is resized for mobile display. *Fix submitted by Fabricio Sobral in pull request [25623](https://github.com/magento/magento2/pull/25623)*. [GitHub-25043](https://github.com/magento/magento2/issues/25043)

<!--- ENGCOM-6291-->

*  The focus function on the fourth level of a multi-level navigation menu now works consistently. *Fix submitted by Fabricio Sobral in pull request [25613](https://github.com/magento/magento2/pull/25613)*. [GitHub-25589](https://github.com/magento/magento2/issues/25589)

<!--- ENGCOM-6304-->

*  Magento now displays the correct error message  in the confirmation popup dialog when you delete a customer group. *Fix submitted by Eden Duong in pull request [25662](https://github.com/magento/magento2/pull/25662)*. [GitHub-25661](https://github.com/magento/magento2/issues/25661)

<!--- ENGCOM-6268-->

*  Accordion widgets placed in tab widgets now work as intended. Previously, when you clicked on the accordion widget, the tab closed. *Fix submitted by Paweł Tylek in pull request [25515](https://github.com/magento/magento2/pull/25515)*. [GitHub-22819](https://github.com/magento/magento2/issues/22819)

<!--- ENGCOM-6321-->

*  Corrected the CSS-defined color for the **Minimum Quantity allowed in Shopping Cart** field of the **Admin** > **Store** > **Configuration** > **Inventory** page.  *Fix submitted by Eden Duong in pull request [25648](https://github.com/magento/magento2/pull/25648)*. [GitHub-25647](https://github.com/magento/magento2/issues/25647)

<!--- ENGCOM-6371-->

*  

### URL rewrites

<!--- MC-22606-->

### Visual Merchandiser

### Web API framework

<!--- MC-29838-->

<!--- MC-15101-->

### Wishlist

<!--- MC-29981-->

<!--- MC-30137-->ee only


### WYSIWYG

<!--- ENGCOM-6310-->

<!--- ENGCOM-6272-->

*  Magento can now successfully display two or more WYSIWYG editors on a catalog product edit page. Previously, only one working editor was displayed. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-18548](https://github.com/magento/magento2/issues/18548)

<!--- ENGCOM-6272-->

*  The WYSIWYG editor no longer hangs indefinitely when you try to upload an image from the Admin. Previously, the image upload popup window hung until you refreshed the page. *Fix submitted by Nazar Klovanych in pull request [25556](https://github.com/magento/magento2/pull/25556)*. [GitHub-23966](https://github.com/magento/magento2/issues/23966)

## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release. Check out the following ways you can learn about the community contributions to our current releases:

*  If a community member has provided a fix for this release, we identify the fix in the Fixed Issue section of these notes with the phrase, "*Fix provided by community member*".

*  The Magento Community Engineering team [Magento Contributors](https://magento.com/magento-contributors) maintains a list of top contributing individuals and partners by month, quarter, and year. From that Contributors page, you can follow links to their merged PRs on GitHub.

### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).

{% include release-notes/engcomm-2-3-5-partner.md %}

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the external pull requests, the GitHub issue number associated with it (if available), and the community member who contributed the pull request.

{% include release-notes/engcomm-2-3-5-issues.md %}

### System requirements

Our technology stack is built on PHP and MySQL. For more information, see [System Requirements]({{site.baseurl}}/system-requirements.html).

### Installation and upgrade instructions

You can install {{site.data.var.ee}} 2.3.4  using Composer.

## Migration tool kits

The Data Migration Tool helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see [Install the Data Migration Tool]({{page.baseurl}}/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.
