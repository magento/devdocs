---
group: release-notes
title: Magento Open Source 2.1.16 Release Notes
---

*	TOC
{:toc}


*Release notes published November 28 and last updated on December 10,2018.*


We are pleased to present Magento Open Source 2.1.16. This release includes  multiple enhancements to product security plus  bug fixes and enhancements. Check out the many community-contributed fixes!

Although this release includes these security enhancements, no confirmed attacks related to these issues have occurred to date. However, certain vulnerabilities can potentially be exploited to access customer information or take over administrator sessions, so we recommend that you upgrade your Magento software to the latest version as soon as possible.

See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for a comprehensive discussion of these issues. All exploitable security issues fixed in this release (2.1.16) have been ported to 2.2.7, 1.14.4.0, and 1.9.4.0, as appropriate. 


## Apply patch PRODSECBUG-2198 to address critical SQL injection vulnerability

A SQL injection vulnerability has been identified in 2.1.x Magento code. To quickly protect your store from this vulnerability, you'll need to install patch PRODSECBUG-2198 as well as upgrade to Magento 2.1.17.  See the description of  PRODSECBUG-2198  in the  [Magento Security Center](https://magento.com/security/patches/magento-2.3.1-2.2.8-and-2.1.17-security-update) for information on this vulnerability. 
 
Follow these steps to download and apply this patch:

1. Access the Downloads page [here](https://magento.com/tech-resources/download#download2288).

2. Select the Git-based option from **Select your format**.

4. Download the patch and upload to a specific directory in your Magento installation such as `m2-hotfixes` (confirm  that the directory is not accessible publicly).

5. From your project root, apply the patch.  `git apply ./m2-hotfixes/<patch-file-name>`.

6. Refresh the cache from the Admin (**System** > **Cache Management**).



## Highlights

Magento 2.1.16 contains over 30 security fixes and enhancements. See [Magento Security Center](https://magento.com/security/patches/magento-2.2.7-and-2.1.16-security-update) for more information.


<!--- MAGETWO-92836 -->* Magento 2.1.16 now provides support for PHP 7.1. 

<!--- MAGETWO-94435 -->* The Magento UPS module has been updated to support new UPS API endpoints.

## Fixed issues

In addition to security enhancements, this release contains the following functional fixes. 


### Installation, deployment, configuration

<!---MAGETWO-94174 -->* Magento backup functionality is no longer enabled by default, and the code has been deprecated. See [Back up and roll back the file system, media, and database](https://devdocs.magento.com/guides/v2.1/install-gde/install/cli/install-cli-backup.html) for more information on backup strategies. 


<!--- ENGCOM-2784 -->* You can now save configuration values to the database without assigning parameters for scope ID and type when using default scope. *Fix submitted by [Prince Patel](https://github.com/mageprince) in pull request [17083](https://github.com/magento/magento2/pull/17083)*. 

### Catalog

<!--- ENGCOM-2750 -->* Magento now maintains product image roles as expected after upgrade. Previously, image roles randomly disappeared from product pages after upgrade. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17553](https://github.com/magento/magento2/pull/17553)*. [GitHub-10687](https://github.com/magento/magento2/issues/10687)

<!--- ENGCOM-2827 -->* The custom attribute group name on customer and product pages can now be translated. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17684](https://github.com/magento/magento2/pull/17684)*. 

<!--- ENGCOM-2877 -->* The `setterName` method is now correctly set. *Fix submitted by [insanityinside](https://github.com/insanityinside) in pull request [17774](https://github.com/magento/magento2/pull/17774)*. 

<!--- ENGCOM-2913 -->*  `setterName` in `app/code/Magento/Catalog/Model/ProductLink/Repository.php` now implements `SimpleDataObjectConverter::snakeCaseToUpperCamelCase`. *Fix submitted by [insanityinside](https://github.com/insanityinside) in pull request [17883](https://github.com/magento/magento2/pull/17883)*. 

<!--- ENGCOM-2795 -->* You can now save a title for a product from the **Product** > **Customizable Options** page. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [17609](https://github.com/magento/magento2/pull/17609)*. [GitHub-6305](https://github.com/magento/magento2/issues/6305)


### Cleanup and minor code refactoring 

<!--- ENGCOM-2652 -->* Minor CSS issues in `lib/internal/Magento/Framework/View/Test/Unit/Url/_files/sourceImport.css` have been fixed. *Fix submitted by [Arnoud Beekman](https://github.com/arnoudhgz) in pull request [17366](https://github.com/magento/magento2/pull/17366)*. 


### EAV

<!--- ENGCOM-2707 -->*  The Product Attribute Repository’s incorrect return values have been replaced with values that now adhere to `Magento\Catalog\Api\ProductAttributeRepositoryInterface` (extends `Magento\Framework\Api\MetadataServiceInterface`) as expected. *Fix submitted by [julianvdrielen](https://github.com/julianvdrielen) in pull request [15688](https://github.com/magento/magento2/pull/15688)*. [GitHub-4803](https://github.com/magento/magento2/issues/4803)



### Email

<!--- MAGETWO-82598 -->* Magento now supports the new top-level address domains identified in the [IANA list](https://data.iana.org/TLD/tlds-alpha-by-domain.txt). *Fix submitted by [Alessandro](https://github.com/elachino) in pull request [11576](https://github.com/magento/magento2/pull/11576)*. [GitHub-4547](https://github.com/magento/magento2/issues/4547)






### Framework

<!--- ENGCOM-2706 -->* Parent theme image height settings (specified in `view.xml`) no longer override the height settings assigned to individual images. *Fix submitted by [Tommy Quissens](https://github.com/quisse) in pull request [17439](https://github.com/magento/magento2/pull/17439)*. [GitHub-12250](https://github.com/magento/magento2/issues/12250)

<!--- ENGCOM-2324 -->* Coupon codes now work as expected for users logged in through the web API. *Fix submitted by [Vishal Gelani](https://github.com/gelanivishal) in pull request [16782](https://github.com/magento/magento2/pull/16782)*. [GitHub-14056](https://github.com/magento/magento2/issues/14056)




### General


<!--- ENGCOM-2805 -->* When editing an Admin user role, Magento now displays the Customer Groups section under the **Customers** section as expected. Previously, Magento displayed the Customer Groups section under the **Stores** > **Other settings** section. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [17629](https://github.com/magento/magento2/pull/17629)*. [GitHub-16499](https://github.com/magento/magento2/issues/16499)


<!--- ENGCOM-2975 -->* The dropdown menu of available countries that is accessible throughout both the storefront and Admin is now populated as expected. *Fix submitted by [Nilesh Lokhande](https://github.com/nilesh2jcommerce) in pull request [17194](https://github.com/magento/magento2/pull/17194)*. [GitHub-2146](https://github.com/magento/magento2/issues/2146)




### Infrastructure

<!--- MAGETWO-92836 -->* Magento 2.1.16 now provides support for PHP 7.1. 


<!--- ENGCOM-2730 -->* You can now use REST to add a configurable product to a shopping cart without creating a duplicate product entry. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17476](https://github.com/magento/magento2/pull/17476)*.  [GitHub-15028](https://github.com/magento/magento2/issues/15028)

<!--- ENGCOM-2696 -->* The sidebars for the wishlist on the catalog, my account, and checkout pages now render special characters correctly. Previously, the browser displayed `&trade;` instead of rendered special characters on these pages. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17422](https://github.com/magento/magento2/pull/17422)*.



### Password

<!--- ENGCOM-2653 -->* The password reset strength meter that Magento displays when a customer resets a password now works as expected. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [17290](https://github.com/magento/magento2/pull/17290)*. [GitHub-13429](https://github.com/magento/magento2/issues/13429)

### Reports

<!--- ENGCOM-2764 -->* The Year-to-date dropdown accessed from **Stores** > **Settings** > **Configuration** > **General** > **Reports** > **Dashboard** > **Year-To-Date Starts** now displays a numerical list that ranges from 01 to 12 as expected. *Fix submitted by [Ronak Patel](https://github.com/ronak2ram) in pull request [17496](https://github.com/magento/magento2/pull/17496)*. [GitHub-17289](https://github.com/magento/magento2/issues/17289)


### Review

<!--- ENGCOM-2806 -->* Magento now displays a `404 page not found` error when a customer tries to navigate to a product review that is not accessible. Previously. Magento displayed a PHP error code. *Fix submitted by [Pratik Oza](https://github.com/mage2pratik) in pull request [17632](https://github.com/magento/magento2/pull/17632)*. [GitHub-13102](https://github.com/magento/magento2/issues/13102)





###  Sales

<!--- ENGCOM-2933 -->* When you define an extension attribute for the `OrderInterface` with a join table, the specified attribute code value is now returned as expected in REST calls. Previously, the JSON response did not contain `some_id` in the extension attributes property. *Fix submitted by [Sam Butler Thompson](https://github.com/Scarraban) in pull request [16169](https://github.com/magento/magento2/pull/16169)*. [GitHub-8035](https://github.com/magento/magento2/issues/8035)

<!--- ENGCOM-2691 -->* The `Magento\Sales\Block\Adminhtml\Order\Totalbar` class and totalbar template files have been deprecated. These components were formerly included but never implemented in the invoice create and credit memo create layout files. *Fix submitted by [Danny Verkade](https://github.com/dverkade) in pull request [17413](https://github.com/magento/magento2/pull/17413)*. [GitHub-16653](https://github.com/magento/magento2/issues/16653), [GitHub-16655](https://github.com/magento/magento2/issues/16655)



### Shipping

<!--- MAGETWO-94435 -->*  The Magento UPS module has been updated to support new UPS API endpoints.

<!--- ENGCOM-2325 -->* Multishipping checkout now works as expected. Previously, Magento displayed the `Shipping address is not set`  error message  when checking out an order with multiple addresses. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [16783](https://github.com/magento/magento2/pull/16783)*. [GitHub-16555](https://github.com/magento/magento2/issues/16555)




### Store

<!--- ENGCOM-2627 -->*  The `$product->getUrlInStore()` method now returns more compact URLs. *Fix submitted by [Burlacu Vasilii](https://github.com/vasilii-b) in pull request [16310](https://github.com/magento/magento2/pull/16310)*. [GitHub-16273](https://github.com/magento/magento2/issues/16273)


### Testing

<!--- ENGCOM-2844 -->*  `\Magento\Cms\Model\Block` is now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17682](https://github.com/magento/magento2/pull/17682)*.

<!--- ENGCOM-2889 -->*  The `\Magento\Catalog\Test\Unit\Cron\AvailabilityCheckerTest` and `\Magento\Catalog\Test\Unit\Cron\DeleteOutdatedPriceValuesTest` classes are now covered by unit tests. *Fix submitted by [Jignesh Baldha](https://github.com/jignesh-baldha) in pull request [17606](https://github.com/magento/magento2/pull/17606)*.

<!--- ENGCOM-2909 -->*  The `\Magento\Search\Model\SynonymAnalyzer` and `\Magento\Search\Model\SynonymAnalyzer` classes are now covered by unit tests. *Fix submitted by [Zebra](https://github.com/furseyev) in pull request [17839](https://github.com/magento/magento2/pull/17839)*.

<!--- ENGCOM-2928 -->*  `\Magento\Sales\Model\Validator` is now covered by unit tests. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17940](https://github.com/magento/magento2/pull/17940)*.




### Theme

<!--- ENGCOM-2917 -->* Magento now displays the wishlist icon on the shopping cart in mobile view. *Fix submitted by [Hitesh](https://github.com/hitesh-wagento) in pull request [17912](https://github.com/magento/magento2/pull/17912)*. [GitHub-17851](https://github.com/magento/magento2/issues/17851)





### UI

<!--- ENGCOM-2825 -->* The JavaScript validation rule used to validate AM/PM time settings now works as expected when JavaScript is minified. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17689](https://github.com/magento/magento2/pull/17689)*. [GitHub-17648](https://github.com/magento/magento2/issues/17648)

<!--- ENGCOM-2835 -->* The message list component message type now has a message type of success. Previously, this type was always error when the parameters property was specified. *Fix submitted by [Dmytro Cheshun](https://github.com/dmytro-ch) in pull request [17702](https://github.com/magento/magento2/pull/17702)*. [GitHub-17700](https://github.com/magento/magento2/issues/17700)

<!--- ENGCOM-2898 -->* `.png` images from the GD2 image library that have transparent backgrounds now retain their  transparent backgrounds after upload. Previously, these transparent backgrounds were rendered black when you displayed these images after upload. *Fix submitted by [Eduard Chitoraga](https://github.com/eduard13) in pull request [17855](https://github.com/magento/magento2/pull/17855)*. [GitHub-14248](https://github.com/magento/magento2/issues/14248)



## Community contributions

We are grateful to the wider Magento community and would like to acknowledge their contributions to this release.

### Individual contributor contributions

The following table identifies contributions from our community members. This table lists the community member who contributed the pull request, the external pull request, and the GitHub issue number associated with the pull request (if available).

{% include release-notes/engcom-2-1-16.md %}


### Partner contributions

The following table highlights contributions made by Partners. This table lists the Partner who contributed the pull request, the external pull request, and the GitHub issue number associated with it (if available).


{% include release-notes/engcom-2-1-16.md %}



## System requirements

Our technology stack is built on PHP and MySQL. For more information, see <a href="{{ site.baseurl }}/guides/v2.1/install-gde/system-requirements.html" target="_blank">System Requirements</a>.


## Installation

See [How to get the Magento software]({{ site.baseurl }}/guides/v2.1/install-gde/bk-install-guide.html) for comprehensive information about Magento 2.1.x installation and setup. 


## Migration toolkits 

The Magento [Data Migration Tool]({{ site.baseurl }}/guides/v2.1/migration/bk-migration-guide.html) helps transfer existing Magento 1.x store data to Magento 2.x. This command-line interface includes verification, progress tracking, logging, and testing functions. For installation instructions, see  [Install Data Migration Tool]({{ site.baseurl }}/guides/v2.1/migration/migration-tool-install.html). Consider exploring or contributing to the [Magento Data Migration repository](https://github.com/magento/data-migration-tool).

An updated version of this toolkit is typically available several days after the patch release.

The [Code Migration Toolkit](https://github.com/magento/code-migration) helps transfer existing Magento 1.x store extensions and customizations to Magento 2.0.x. The command-line interface includes scripts for converting Magento 1.x modules and layouts.

## Credits
Dear community members, thank you for your suggestions,  bug reports, and code contributions. 


