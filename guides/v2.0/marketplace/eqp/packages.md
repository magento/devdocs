---
layout: default
group: marketplace-api
title: Packages
version: 2.0
github_link: marketplace/eqp/packages.md
---

Use this resource to initiate and manage all aspects of submitting a package to the [MAgento Extension Quality Program (EQP)](http://docs.magento.com/marketplace/user_guide/extensions/extension-quality-program.html). You can provide all metadata associated with a package—both the technical and the marketing information—in a single step or in several steps using incremental updates.

* **Technical information**—References to code artifacts, such as Magento 1 TGZ files or Composer-compliant Magento 2 ZIP files, version compatibility, and release notes.

* **Marketing information**—Includes package descriptions, image assets for logos and galleries, pricing information, support and installation services offered, and various guides—user, installation, and reference in PDF.

Before submitting a package, you must first [upload your files]({{page.baseurl}}/marketplace/eqp/files.html) and associate the ID returned by the `/rest/v1/files/uploads` endpoint with your package using JSON parameters in the request body.

You can also check package submission status and retrieve reports about technical and marketing issues discovered during the EQP process.

A successful submission results in a package being published on the [Magento Marketplace](https://marketplace.magento.com/).

## Package fields

The following table describes all package object properties:

<div class="bs-callout bs-callout-info" markdown="1">
Both `POST` and `PUT` requests support a batch model where multiple packages can be created or updated.
</div>

|Field/Parameter|Type|Applicable HTTP Command|Description|
|---------------|----|-----------------------|-----------|
|name|string|GET, POST, PUT|The name or title of the package. Duplicate names are not allowed.|
|type|string|GET, POST, PUT|Type of package. Valid values include `extension`, `theme`, or `shared_package`. Shared packages are only applicable for Magento 2 extensions.|
|platform|string|GET, POST, PUT|The Magento platform compatibility of this package. Valid values include  `M1` for MAgento 1 or `M2` for Magento 2.|
|version_compatibility|array|GET, POST, PUT|List of Magento versions that this package supports.|
|sku|string|GET|The SKU generated from metadata in the code artifact.|
|version|string|GET|The package version in the format `major.minor.patch`. For example, `2.5.3`.|
|short_description|string|GET, POST, PUT|The short description for the package.|
|long_description|string|GET, POST, PUT|The long description for the package.|
|release_notes|string|GET, POST, PUT|The release notes for the package submission.|
|is_patch|boolean|GET, POST, PUT|A flag to indicate the submission should follow the [expedited process for patch releases.](https://community.magento.com/t5/Magento-DevBlog/New-Expedited-Marketplace-Submission-Path/ba-p/77303)|
|requested_launch_date|DateTime|POST, PUT|The UTC date and time (`YYYY-MM-DD HH:MM:SS`) when the package should be released to the store. If not supplied, it will be released to the store after all checks have passed.|
|artifact|object|GET, POST, PUT|This is the package code artifact (TGZ file for Magento 1 or ZIP file for Magento 2) that can be referenced in a file upload ID obtained from the Files API.|
|documentation_artifacts|object|GET, POST, PUT|The user, installation, and reference PDF manuals referenced in a file upload ID obtained from the Files API.|
|shared_packages|array|GET, POST, PUT|The list of artifact objects, each a Magento 2 shared package being referenced in a file upload ID obtained from the Files API. Listing it here implies that the seller is enabling  the "access rights" to these shared packages when a buyer purchases it.|
|categories|array|GET, POST, PUT|The list of categories expressed as a `path` for the package. For example, `//Extension//Marketing//SEO/SEM`. Note that the path separator is `//` which allows for a single slash like `SEO/SEM` in the path name. Refer to the [Marketplace Store](https://marketplace.magento.com) for a list of valid categories.|
|media_artifacts|object|GET, POST, PUT|The sub-object that holds the package icon and gallery images referenced in a file upload ID obtained from the Files API.|
|video_urls|array|GET, POST, PUT|The list of video URLs applicable to this package.|
|prices|array|GET, POST, PUT|The list of prices in USD set for this package by edition, and its respective installation price (if any).|
|support_tiers|array|GET, POST, PUT|List of support tiers, each specifying the edition, the monthly period, descriptions, and prices in USD.|
|license_type|string|GET, POST, PUT|License type supported by the package. Refer to [Additional notes](#additional-notes) for a list of valid license types.|
|custom_license_name|string|GET, POST, PUT|The name of the license if `license_type` is set to `custom`.|
|custom_license_url|string|GET, POST, PUT|The URL of the license if `license_type` is set to `custom`.|
|external_services|object|GET, POST, PUT|The list of services—name and URL—that the extension integrates with (if applicable).|
|browser_os_compatibility|object|GET, POST, PUT|The browser and its associated OS compatibilities this package supports. Refer to [Additional notes](#additional-notes) for a list of browsers and OS values.|
|options|object|GET, POST, PUT|A set of options this package supports. Refer to [Additional notes](#additional-notes).|
|submission_id|string|GET, PUT|A globally unique ID assigned to a package when it is submitted in a POST request. All further references to this package using GET or PUT requests can be made supplying this identifier.|
|item_id|string|GET, POST, PUT|A developer-defined unique ID assigned to the package (if available). If it is being supplied, it must be unique for every POST request.|
|action|object|POST, PUT|The action to be taken during a package submission (POST or PUT). Refer to [Package submission](#package-submission).|
|eqp_status|object|GET|The current status of the package in the EQP process. Refer to [Get package details](#get-package-details).|
|offset|integer|GET|In combination with the `limit` parameter, it can be used for paging the collection of packages. Refer to [Get package details](#get-package-details). Default value is 0.|
|limit|integer|GET|Along with offset, it can be used for paging the collection of packages. Default value is 20. Specifying -1 implies unlimited.|
|sort|string|GET|A comma-separated list of fields to sort the list, each field prefixed by `-` for descending order, or `+` for ascending order. Refer to [Get package details](#get-package-details).|
{:.style="table-layout: auto;"}

### Additional Notes

* For required fields in a POST or PUT operations, refer to the `Package Submission` section below.
* The list of valid values for the `license_type` are:
    * `afl`—Academic Free License 3.0 (AFL)
    * `apache`—Apache License 2.0
    * `bsd`—BSD 2-Clause License
    * `gnu-gpl`—GNU General Public License 3.0 (GPL-3.0)
    * `gnu-lgpl`–GNU Lesser General Public License 3.0 (LGPL-3.0)
    * `mit`—MIT License (MIT)
    * `mozilla`—Mozilla Public License 1.1 (MPL-1.1)
    * `osl`—Open Software License 3.0 (OSL-3.0)
    * `custom`—Custom License

* The list of valid values for the `browser_os_compatibility` are:
    * Browsers:
        * `chrome`
        * `firefox`
        * `safari`
        * `opera`
        * `edge`
    * OS:
        * `linux`
        * `mac`
        * `windows`

* The `options` sub-object is a map of key-value pairs with boolean values. The list of valid keys are:
    * `released_with_setup_scripts`
    * `included_service_contracts`
    * `included_external_service_contracts`
    * `support_responsive_design`
    * `custom_implementation_ui`
    * `support_web_api`
    * `support_test_coverage`

## Package submission

```
POST /rest/v1/product/packages
PUT  /rest/v1/product/packages
PUT  /rest/v1/products/packages/:submission_id
```

## Get package details

## Delete a package
