---
layout: default
group: marketplace-api
title: Packages
version: 2.1
github_link: marketplace/eqp/packages.md
---

Packages is the resource endpoint to initiate and manage all aspects of the EQP process. During a package submission, all the meta information associated
with a package, both the technical and the marketing information, can be be provided in one step, or in several steps via updates, and later set to initiate
the EQP process.

The technical parts of the submission includes references to the code artifacts (Magento 1 TGZ files, or Magento 2 composer-compliant ZIP files), and associated
information like Magento version compatibilities, and release notes.

The marketing parts of the submission include package descriptions, image assets for logos and galleries, pricing information, support and installation services offered, user, reference, and installation PDF manuals, and so on.

Prior to initiating a package submission, all the files associated with a package as described above, must be first uploaded using the **/rest/v1/files/uploads** endpoint described in the Files section. The file upload ids received during the response must be used to associate these files to the package via its respective request JSON parameters.

The APIs provide here also support retrieving package submission status, and any reports on technical and/or marketing issues discovered during the EQP process.

A successful submission will result in a package being released live to the [Marketplace site](https://marketplace.magento.com/).


## Package Fields



The fields listed here can be parameters in a POST, or PUT request body, and response fields in a GET response body. The column ‘Applicable HTTP Command’ highlights the context here.

Both POST and PUT, support a batch request model where multiple packages can be created or updated.

The following fields/parameters describes an item in a batch request, or response:


|Field/Parameter|Type|Applicable HTTP Command|Description|
|---------------|----|-----------------------|-----------|
|name|string|GET, POST, PUT|The name or title of the package. Duplicate names are not allowed.|
|type|string|GET, POST, PUT|Type of package: valid values here are ‘extension’, ‘theme’, or ‘shared_package’. Shared packages are only applicable for Magento 2 extensions.|
|platform|string|GET, POST, PUT|The Magento platform compatibility of this package: valid values here are ‘M1’ - Magento 1, or ‘M2’ - Magento 2.|
|version_compatibility|array|GET, POST, PUT|List of Magento edition and its associated versions object that this package supports.|
|sku|string|GET|The sku generated from the code artifact meta information.|
|version|string|GET|The package version in the format: major.minor.patch - e.g. “2.5.3”.|
|short_description|string|GET, POST, PUT|The short description for the package.|
|long_description|string|GET, POST, PUT|The long description for the package.|
|release_notes|string|GET, POST, PUT|The release notes for this package submission.|
|is_patch|boolean|GET, POST, PUT|A flag to indicate the submission should follow the [expedited process for patch releases.](https://community.magento.com/t5/Magento-DevBlog/New-Expedited-Marketplace-Submission-Path/ba-p/77303)|
|requested_launch_date|DateTime|POST, PUT|The UTC date and time, in format YYYY-MM-DD HH:MM:SS when the package should be released to the store. If not supplied, it will be released to the store after all the checks have passed.|
|artifact|object|GET, POST, PUT|This is the package code artifact (the TGZ file for Magento 1 or ZIP file for Magento 2) that can be referenced via a file upload id obtained from the Files API.|
|documentation_artifacts|object|GET, POST, PUT|The user, installation and reference PDF manuals referenced via file upload ids obtained from the Files API.|
|shared_packages|array|GET, POST, PUT|The list of artifact objects, each a Magento 2 shared package being referenced via file upload id obtained from the Files API. Listing it here implies that the seller is enabling  the ’access rights’ to these shared packages when a buyer purchases this submitted package.|
|categories|array|GET, POST, PUT|The list of categories expressed as a ‘path’ for this package. An example path can be ‘//Extension//Marketing//SEO/SEM’. Note the path separator is ‘//‘ which allows for a single slash like SEO/SEM in the path names. Valid list of categories can be seen at the [Marketplace Store](https://marketplace.magento.com).|
|media_artifacts|object|GET, POST, PUT|The sub-object that holds the package icon and gallery images referenced via their respective file upload ids obtained from the Files API.|
|video_urls|array|GET, POST, PUT|The list of video urls applicable for this package.|
|prices|array|GET, POST, PUT|The list of prices in US Dollars set for this package by edition, and its respective installation price if any.|
|support_tiers|array|GET, POST, PUT|List of support tiers, each specifying the edition, the monthly period, descriptions and prices in US Dollars.|
|license_type|string|GET, POST, PUT|License type supported by this package - see list of valid license types in the ‘Additional Notes’ below.|
|custom_license_name|string|GET, POST, PUT|The name of the license if ‘license_type’ is set to ‘custom’.|
|custom_license_url|string|GET, POST, PUT|The url of the license if ‘license_type’ is set to ‘custom’.|
|external_services|object|GET, POST, PUT|The list of services (their name and url) that this extension integrates with if applicable.|
|browser_os_compatibility|object|GET, POST, PUT|The browser and its associated OS compatibilities this package supports - see valid list of browsers and its respective os values in the ‘Additional Notes’ below.|
|options|object|GET, POST, PUT|A set of options this package supports - see ‘Additional Notes’ below.|
|submission_id|string|GET, PUT|A globally unique id assigned when a package submission is made via POST. All further references to this package via GET or PUT can be made supplying this identifier.|
|item_id|string|GET, POST, PUT|A developer defined unique id assigned to this package if available. If it is being supplied, it must be unique for every submission via POST.|
|action|object|POST, PUT|The action to be taken during a package submission via POST or PUT. See ‘Package Submission’ section below.|
|eqp_status|object|GET|The current status of the package in the EQP pipeline - see ‘Fetching Package Details’ section below.|
|offset|integer|GET|In combination with the ‘limit’ parameter, it can be used for paging the collection of packages - refer to the ’Fetching Package Details’ section below. Default value is 0.|
|limit|integer|GET|Along with offset, it can be used for paging the collection of packages. Default value is 20. Specifying -1 implies unlimited.|
|sort|string|GET|A comma-separated list of fields to sort the list, each field prefixed by ‘-‘ for descending order, or ‘+’ for ascending order - refer to the ‘Fetching Package Details’ section below.|



### Additional Notes

1. The JSON structure of fields/parameters can be seen in the examples below.
2. For required fields in a POST or PUT operations, refer to the ‘Package Submission’ section below.
3. The list of valid values for the ‘license_type’ are:
   *|License Value|Description|
    |-------------|-----------|
    |afl|Academic Free License 3.0 (AFL)|
    |apache|Apache License 2.0|
    |bsd|BSD 2-Clause License|
    |gnu-gpl|GNU General Public License 3.0 (GPL-3.0)|
    |gnu-lgpl|GNU Lesser General Public License 3.0 (LGPL-3.0)|
    |mit|MIT License (MIT)|
    |mozilla|Mozilla Public License 1.1 (MPL-1.1)|
    |osl|Open Software License 3.0 (OSL-3.0)|
    |custom|Custom License|
4. The list of valid values for the ‘browser_os_compatibility’ are:
   * Browsers:
      * chrome”
      * firefox
      * safari
      * opera
      * edge
   * OS:
      * linux
      * mac
      * windows
   * The JSON structure can be seen in examples below.
5. The ‘options’ sub-object is a map of key-value pairs with value being a boolean. The list of valid keys are:
   * released_with_setup_scripts
   * included_service_contracts
   * included_external_service_contracts
   * support_responsive_design
   * custom_implementation_ui
   * support_web_api
   * support_test_coverage


## Package Submission

```
POST /rest/v1/product/packages
PUT  /rest/v1/product/packages
PUT  /rest/v1/products/packages/:submission_id
```

## Fetching Package Details

## Removing Packages
