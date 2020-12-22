---
group: marketplace-api
title: Packages
---

Use this resource to initiate and manage all aspects of submitting a package to the
[Marketplace Extension Quality Program (EQP)]({{ site.baseurl }}/marketplace/sellers/extension-quality-program.html).
You can provide all metadata associated with a package, both the technical and the marketing information, in a single step, or in several steps, using incremental updates.

*  **Technical information** - References to code artifacts, such as Composer-compliant Magento 2 ZIP files, version compatibility, and release notes.

*  **Marketing information** - Includes package descriptions, images for icons and galleries, pricing information, support and installation services offered, and various guides (user, installation, and reference) in PDF.

Before submitting a package, you must first [upload your files](files.html) and associate the ID returned by the
`/rest/v1/files/uploads` endpoint with your package using JSON parameters in the request body.

You can also check package submission status and retrieve [testing information](test-results.html) from the technical and marketing reviews.

A successful submission results in a package being published to the [Magento Marketplace](https://marketplace.magento.com/).

## EQP review process

The EQP review process includes two steps:

*  In **technical review**, we perform all automated testing. This step also involves manual testing after all automated tests run.
*  In **marketing review**, we manually review all marketing content associated with your package before you can publish it on the Magento Marketplace.

These review steps occur in parallel when you submit a package.
If both steps are successful, the package can be published to the Magento Marketplace.
If there is a failure, you can iteratively fix issues until they are resolved.

## Package fields

The following table describes all package object properties.
Unknown and readonly properties will be ignored in submissions.

 {:.bs-callout-info}
Both `POST` and `PUT` requests support a batch model where multiple packages can be created or updated.

|Field/Parameter|Type|HTTP Commands|Review Type|Filter|Description|Valid values|
|---------------|----|-------------|-----------|------|-----------|------------|
|action|object|POST, PUT|-|no|The actions to be taken towards technical or marketing review during a package POST or PUT submission.|See [Object Details](#object-details)|
|action.overall|string|POST, PUT|-|no|General actions to be taken.|`remove`(...from store), `cancel` (abandon this version)|
|action.technical|string|POST, PUT|-|no|Actions to be taken towards technical review.|`draft` (default), `submit` (...to review), `recall` (...from review)|
|action.marketing|string|POST, PUT|-|no|The actions to be taken towards marketing review.|`draft` (default), `submit` (...to review), `recall` (...from review)|
|actions_now_available|string|GET, POST, PUT|-|no|The list of values currently valid in the `action` field for this package|Comma-separated list.|
|artifact|object|GET, POST, PUT|technical|no|This is the package code artifact (ZIP file for Magento 2) associated with this version.|See [Object Details](#object-details)|
|artifact.file_upload_id|string|GET, POST, PUT|technical|no|The only writable field of this sub-object, used to associate a file with this package version.|Unique file upload ID obtained from the Files API.|
|artifact.filename|string|GET, POST, PUT|technical|no|The filename given when uploading the file.|Any valid filename|
|artifact.content_type|string|GET, POST, PUT|-|no|The mime-type given when uploading the file.|Any valid mime-type|
|artifact.url|string|GET, POST, PUT|-|no|The link to download the file, if applicable|A URL|
|artifact.size|int|GET, POST, PUT|-|no|The size of the file in bytes|Any int|
|artifact.file_hash|string|GET, POST, PUT|-|no|Hash of the file|A hash: currently MD5|
|artifact.malware_status|string|GET, POST, PUT|-|no|Status of the malware check on the file.|`pass`, `fail`, `in-progress`|
|browsers|object|GET, POST, PUT|marketing|no|Shorthand form of `browser_os_compatibility`.|See [Object Details](#object-details)|
|browser_os_compatibility|object|GET, POST, PUT|marketing|no|The browser and its associated OS capabilities this package supports.|See [Object Details](#object-details)|
|categories|array|GET, POST, PUT|marketing|no|1-3 categories, all from the same main category, expressed as a `path` for the package. For example, `//Extension//Marketing//SEO/SEM`. Note that the path separator is `//` which allows for a single slash like `SEO/SEM` in the path name.|Refer to the [Marketplace Store](https://marketplace.magento.com) for the current list of categories.|
|created_at|DateTime|GET|-|yes|The UTC date and time the package was first submitted.|`YYYY-MM-DD HH:MM:SS`|
|custom_license_name|substring|GET, POST, PUT|technical|yes|The name of the license, only required if `license_type` is set to `custom`.|Your license name|
|custom_license_url|substring|GET, POST, PUT|technical|yes|The URL of the license, only required if `license_type` is set to `custom`.|Any URL|
|documentation_artifacts|object|GET, POST, PUT|both|no|The user, installation, and reference PDF manuals. At least one required for extensions, but not for shared packages.|See [Object Details](#object-details)|
|documentation_artifacts.user.file_upload_id|string|GET, POST, PUT|both|no|The user manual PDF|Unique file upload ID obtained from the Files API.|
|documentation_artifacts.installation.file_upload_id|string|GET, POST, PUT|both|no|The installation manual PDF|Unique file upload ID obtained from the Files API.|
|documentation_artifacts.reference.file_upload_id|string|GET, POST, PUT|both|no|The reference manual PDF|Unique file upload ID obtained from the Files API.|
|eqp_status|object|GET, POST, PUT|-|no|Sub-object describing the current status of the package in the EQP review process.|See [Object Details](#object-details)|
|eqp_status.overall|string|GET, POST, PUT|-|yes|The current status of the package in the overall EQP process.|`draft`, `in_progress`, `approved`, `released_to_store`, `developer_removed_from_store`, `admin_removed_from_store`, `canceled_by_developer`,  `canceled_by_admin`|
|eqp_status.marketing|string|GET, POST, PUT|-|yes|The current status of the package in the EQP marketing review process.|`draft`, `awaiting_marketing_review`, `in_marketing_review`, `approved`, `approved_with_modifications_pending`, `recalled`, `rejected`|
|eqp_status.technical|string|GET, POST, PUT|-|yes|The current status of the package in the EQP technical review process.|`draft`, `in_automation`, `awaiting_manual_qa`, `in_manual_qa`, `approved`, `recalled`, `rejected`|
|external_services|object|GET, POST, PUT|marketing|no|The list of services that the extension integrates with.|A sub-object|
|external_services.is_saas|boolean|GET, POST, PUT|marketing|no|Whether this integration is a gateway to a SaaS service.|`true`, `false`|
|external_services.items|string|GET, POST, PUT|marketing|no|Description of the site(s) integrated with.|An array. Only zero or one items are currently supported.|
|external_services.items[0].name|string|GET, POST, PUT|marketing|no|The name of the integrated site.|A name.|
|external_services.items[0].url|string|GET, POST, PUT|marketing|no|The URL of the integrated site.|A valid URL.|
|external_services.items[0].owner|string|GET, POST, PUT|marketing|no|Who owns the service.|`self`, `3rd_party`, `unknown`|
|external_services.items[0].pay_to|string|GET, POST, PUT|marketing|no|Who the |`self`, `3rd_party`, `both`, `none`, `unknown`|
|item_id|substring|GET, POST, PUT|-|yes|A developer-defined unique ID assigned to the package (if available).|If supplied, must be unique for every POST request.|
|latest_launch_date|DateTime|GET|-|yes|The UTC date and time this version of the package was last released to the store.|`YYYY-MM-DD HH:MM:SS`|
|launch_on_approval|boolean|GET, POST, PUT|marketing|no|Whether to publish to the store as soon as all tests are passed. Effectively, sets requested_launch_date to a point in the past.|`true`, `false`|
|license_type|string|GET, POST, PUT|technical|yes|License type supported by the package.|See [Additional notes](#additional-notes) for a list of valid license types.|
|limit|integer|GET|-|no|Along with `offset`, used for paging the collection of packages.|Positive integer, or -1 for unlimited. Default is 20.|
|long_description|substring|GET, POST, PUT|marketing|yes|The long description for the package.|Any string.|
|max_version_launched|object|GET, POST, PUT|marketing|no|Sub-object that describes the highest version of this package that has been released to the store.|Contains fields `submission_id`, `version`, `eqp_status`, with the same meanings as the similarly named fields in this table.|
|media_artifacts|object|GET, POST, PUT|marketing|no|The sub-object that holds the package icon, gallery images, and optional video URLs.|Sub-object with 0-3 fields.|
|media_artifacts.icon_image|object|GET, POST, PUT|marketing|no|The sub-object that holds the package icon.|Same structure as the `artifacts` field in this object.|
|media_artifacts.gallery_images|array|GET, POST, PUT|marketing|no|Array of sub-objects describing the gallery images. Not required for shared packages.|Each array element has the same structure as the `artifacts` field in this object.|
|media_artifacts.video_urls|array|GET, POST, PUT|marketing|no|A list of Youtube video URLs listed in order of appearance in the gallery.|Array of Youtube URLs.|
|marketing_options|object|GET, POST, PUT|marketing|no|A set of marketing options this package supports.|See [Additional notes](#additional-notes).|
|modified_at|DateTime|GET|-|yes|The UTC date and time the package was last updated.|`YYYY-MM-DD HH:MM:SS`|
|name|substring|GET, POST, PUT|marketing|yes|The name or title of the package.|Short free text. Duplicate names are not allowed.|
|original_launch_date|DateTime|GET|-|yes|The UTC date and time this version of the package was first released to the store.|`YYYY-MM-DD HH:MM:SS`|
|offset|integer|GET|-|no|In combination with the `limit` parameter, it can be used for paging the collection of packages.|See [Get package details](#get-package-details). Default value is 0.|
|platform|string|GET, POST, PUT|technical|yes|The Magento platform compatibility of this package.|`M2`|
|prices|array|GET, POST, PUT|marketing|no|The list of prices in USD set for this package by edition, and the respective installation prices (if any). Editions must match `version_compatibility`.|Array of sub-objects.|
|prices[N].currency_code|string|GET, POST, PUT|marketing|no|The currency code for this price|Currently only `USD`|
|prices[N].edition|string|GET, POST, PUT|marketing|no|The Magento edition for this price|`CE`, `EE`, `ECE`|
|prices[N].price|number|GET, POST, PUT|marketing|no|The value for the purchase price of this package|A number, with up to two decimal places, eg 123.45|
|prices[N].installation_price|string|GET, POST, PUT|marketing|no|The value for the installation price of this package|A number, with up to two decimal places, eg 123.45|
|prices[N].currency_code|string|GET, POST, PUT|marketing|no|The currency code for this price|Currently only `USD`|
|priority|string|GET, POST, PUT|-|no|The priority for this submission|`high`, `medium`, `low`|
|process_as_patch|boolean|GET, POST, PUT|technical|yes|A flag to indicate the submission should follow the [expedited process for patch releases.](https://community.magento.com/t5/Magento-DevBlog/New-Expedited-Marketplace-Submission-Path/ba-p/77303)|`true`, `false`|
|release_notes|substring|GET, POST, PUT|technical|yes|The release notes for the package submission.|Free text|
|requested_launch_date|DateTime|POST, PUT|marketing|yes|When the package should be released to the store. If not supplied, it will be released to the store after all checks have passed.|`YYYY-MM-DD HH:MM:SS`|
|shared_packages|array|GET, POST, PUT|technical|no|The list of artifact objects. Listing here enables the "access rights" to these shared packages when a buyer purchases this package.|Each shared package is specified by file_upload_id, or sku and version. See [Object Details](#object-details)|
|shared_packages[N].artifact.file_upload_id|string|GET, POST, PUT|both|no|The shared package file|Unique file upload ID obtained from the Files API.|
|shared_packages[N].artifact.sku|string|GET, POST, PUT|both|no|The shared package file|Unique file upload ID obtained from the Files API.|
|shared_packages[N].artifact.version|string|GET, POST, PUT|both|no|The shared package file|Unique file upload ID obtained from the Files API.|
|short_description|substring|GET, POST, PUT|marketing|yes|The short description for the package.|Short free text|
|sku|substring|GET|-|yes|The SKU generated from metadata in the code artifact.|A SKU|
|stability|string|GET, POST, PUT|marketing|yes|The version's build stability|`stable`, `beta`|
|sort|string|GET|-|no|A comma-separated list of fields to sort the list, each field prefixed by `-` for descending order, or `+` for ascending order.|See [Get package details](#get-package-details).|
|submission_id|substring|GET, PUT|-|yes|A globally unique ID assigned to a package when it is submitted in a POST request. All further references to this package using GET or PUT requests can be made supplying this identifier.|A generated string|
|support_tiers|array|GET, POST, PUT|marketing|no|List of up to three support tiers per edition|See [Object Details](#object-details)|
|support_tiers[N].tier|int|GET, POST, PUT|marketing|no|Which of the three support tiers (numbered 0-2 or 1-3)|`0`, `1`, `2`, `3`|
|support_tiers[N].edition|string|GET, POST, PUT|marketing|no|Which Magento edition this support is for|`CE`, `EE`, `ECE`|
|support_tiers[N].monthly_period|int|GET, POST, PUT|marketing|no|How many months the support lasts.|`1`, `3`, `6`, `9`, `12`|
|support_tiers[N].prices|array|GET, POST, PUT|marketing|no|Array of prices for this support level|An array of one item per currency code.|
|support_tiers[N].prices[0].currency_code|array|GET, POST, PUT|marketing|no|The currency code for this price|Currently only `USD` is supported.|
|support_tiers[N].prices[0].price|array|GET, POST, PUT|marketing|no|The cost of this support level|A number, with up to two decimal places, eg 123.45|
|technical_options|object|GET, POST, PUT|marketing|no|A set of technical options this package supports.|See [Additional notes](#additional-notes).|
|type|string|GET, POST, PUT|technical|yes|Type of package.|`extension`, `theme`, `shared_package` or `all` (default).|
|version_compatibility|array|GET, POST, PUT|technical|no|List of Magento versions that this package supports. Must match the editions in `prices`|Array of objects|
|version_compatibility[N].edition|string|GET, POST, PUT|technical|no|Magento edition for the accompanying versions list|`M2`|
|version_compatibility[N].versions|array|GET, POST, PUT|technical|no|List of Magento versions that this package supports in the given edition.|Array of version strings, eg ["2.3","2.4"]
|version|substring|GET|-|yes|The version of this package.|`major.minor.patch`, eg `2.5.3`.|

### Additional notes

*  For required fields in a POST or PUT operation, see the [Required Parameters](#required-parameters) section.
*  The `Review Type` column indicates which part of the EQP review pipeline reviews the field values.
*  The `Filter` column indicates whether a field can be used for filtering and sorting in GET requests.
*  The `Type` column value "substring" means a string which, when filtered, searches for a substring match rather than an exact match.
*  The list of valid values for `license_type` are:
   *  `afl`—Academic Free License 3.0 (AFL)
   *  `apache`—Apache License 2.0
   *  `bsd`—BSD 2-Clause License
   *  `gnu-gpl`—GNU General Public License 3.0 (GPL-3.0)
   *  `gnu-lgpl`–GNU Lesser General Public License 3.0 (LGPL-3.0)
   *  `mit`—MIT License (MIT)
   *  `mozilla`—Mozilla Public License 1.1 (MPL-1.1)
   *  `osl`—Open Software License 3.0 (OSL-3.0)
   *  `custom`—Custom License

### Object details

{% collapsible JSON Structure %}

Listing the JSON structure of objects described above:

#### version_compatibility

For a new Magento 2 package:

```json
"version_compatibility" : [
  {
    "edition" : "CE",
    "versions" : ["2.3", "2.4"]
  },
  {
    "edition" : "EE",
    "versions" : ["2.4"]
  },
  {
    "edition" : "ECE",
    "versions" : ["2.4"]
  }
]
```

#### artifact

```json
"artifact" : {
  "file_upload_id" : "5c11e656057b42.97931218.5"
}
```

#### documentation_artifacts

```json
"documentation_artifacts" : {
  "user" : {
    "file_upload_id" : "5c644d97bb7c41.37505716.6"
  },
  "installation" : {
    "file_upload_id" : "5c644daf21fee4.39102137.2"
  },
  "reference" : {
    "file_upload_id" : "5c644f4dcb1900.18508194.9"
  }
}

```

#### shared_packages

```json
"shared_packages" : [
  {
    "artifact" : {
      "file_upload_id" : "5c648b986aabc6.62305048.2"
    }
  },
  {
    "artifact" : {
      "file_upload_id" : "5c648b986a70c0.11666567.3"
    }
  }
]
```

#### media_artifacts

```json
"media_artifacts" : {
  "icon_image" : {
    "file_upload_id" : "5c129cd41ba478.65767699.1"
  },
  "gallery_images" : [
    {
      "file_upload_id" : "5c644fa344e5d7.04253635.8"
    },
    {
      "file_upload_id" : "5c648b98446065.77844389.4"
    },
    {
      "file_upload_id" : "5c648b984d0228.21794482.7"
    },
    {
      "file_upload_id" : "5c648b98698ed0.64632056.3"
    },
    {
      "file_upload_id" : "5c648b986a3d98.83415858.0"
    }
  ],
  "video_urls" : [
    "https://www.youtube.com/watch?v=l33T2-YC4tk",
    "https://www.youtube.com/watch?v=682p52tFcmY"
  ]
}
```

The **video_urls** property is optional.

#### prices

```json
"prices" : [
  {
    "edition" : "CE",
    "currency_code" : "USD",
    "price" : 15.50
  },
  {
    "edition" : "EE",
    "currency_code" : "USD",
    "price" : 45.00,
    "installation_price" : 0.00
  },
  {
    "edition" : "ECE",
    "currency_code" : "USD",
    "price" : 60.00,
    "installation_price" : 0.00
  }
]
```

#### support_tiers

Up to three tiers per edition (`CE` (Open Source), `EE` (Commerce), `ECE` (Cloud)) can be supported:

```json
"support_tiers" : [
  {
    "tier" : 1,
    "edition" : "CE",
    "monthly_period" : 1,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 25.00
      }
    ]
  },
  {
    "tier" : 2,
    "edition" : "CE",
    "monthly_period" : 3,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 75.00
      }
    ]
  },
  {
    "tier" : 3,
    "edition" : "CE",
    "monthly_period" : 6,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 100.00
      }
    ]
  },

  {
    "tier" : 1,
    "edition" : "EE",
    "monthly_period" : 1,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 50.00
      }
    ]
  },
  {
    "tier" : 2,
    "edition" : "EE",
    "monthly_period" : 9,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 60.00
      }
    ]
  },
  {
    "tier" : 3,
    "edition" : "EE",
    "monthly_period" : 12,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 70.00
      }
    ]
  },

  {
    "tier" : 1,
    "edition" : "ECE",
    "monthly_period" : 1,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 45.00
      }
    ]
  },
  {
    "tier" : 2,
    "edition" : "ECE",
    "monthly_period" : 6,
    "short_description" : "<Short description goes here.>",
    "long_description" : "<Long description goes here.>",
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 60.00
      }
    ]
  }
]
```

#### browser_os_compatibility

Sample structure for a package supporting only Chrome and Firefox:

```json
"browser_os_compatibility" : {
  "chrome" : {
    "mac" : [ "39", "44"],
    "windows" : ["43", "44"],
    "linux" : ["43", "44"]
  },
  "firefox" : {
    "mac" : [ "40", "41"],
    "windows" : ["40", "41"],
    "linux" : ["40", "41"]
  }
}
```

The list of valid values for the `browser_os_compatibility` are:

*  Browsers:
   *  `chrome`
   *  `firefox`
   *  `safari`
   *  `opera`
   *  `edge`

*  OS:
   *  `linux`
   *  `mac`
   *  `windows`

#### browsers

A simplified way to specify browser compatibility: it is assumed that each browser listed is compatible on all platforms.
If `browser_os_compatibility` is also present, this field is ignored.
Otherwise, if present, this field overwrites all previously stored compatibility rules for this package version.
The list of valid browsers is the same as for `browser_os_compatibility`.

```json
"browsers" : [
  "chrome",
  "firefox"
]
```

#### marketing_options

Additional marketing options that apply to this package can be provided if applicable.
While this information is not currently used, it may become searchable for buyers in the future,
so is potentially worth filling out if relevant:

```json
"options" : {
  "released_with_setup_scripts"         : true,
  "included_service_contracts"          : false,
  "included_external_service_contracts" : true,
  "support_responsive_design"           : true,
  "custom_implementation_ui"            : true,
  "support_web_api"                     : true,
  "support_test_coverage"               : false
}
```

#### technical_options

Additional technical options that apply to this package can be provided if applicable.
These options are relevant to the technical review:

```json
"options" : {
  "page_builder_new_content_type"          : true,
  "page_builder_extends_content_type"      : false,
  "page_builder_used_for_content_creation" : true
}
```

#### action

During the EQP process, it can take the following fields to control the parallel technical and marketing review flows:

```json
"action" : {
  "technical" : "submit",
  "marketing" : "submit"
}
```

|Technical/Marketing Field Value|Type|Description|
|-------------------------------|----|-----------|
|draft|string|Save the supplied parameter values but take no further action.|
|submit|string|Submit to the EQP process.|
|recall|string|Recall the earlier submission from the EQP process.|

Once a package has been published to the store, this takes the following field:

```json
{
    "action" : {
      "overall" : "remove"
    }
}
```

|Value|Type|Description|
|-----|----|-----------|
|remove|string|Removes the package from the store.|

 {:.bs-callout-info}
There is no way to directly re-publish a product to the store.
Send the "submit" action for the marketing content to re-publish the product.

#### eqp_status

```json
"eqp_status" :  {
  "overall" : "in_progress",
  "technical" : "draft",
  "marketing" : "approved"
}
```

*  The *overall* value indicates where the package is in the EQP pipeline.
*  Additional details are provided in the two main EQP areas:
   *  **technical** - Provides the current technical status.
   *  **marketing** - Provides the current marketing status.

##### Overall Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The submission is in the draft state, not yet submitted to the EQP process.|
|in_progress|string|The submission is in the EQP pipeline. Refer to the `technical` and `marketing` status for more details.|
|approved|string|The submission has been approved and pending release to the store.|
|released_to_store|string|The submission has been approved and is currently live on store.|
|developer_removed_from_store|string|The developer has removed the package from the store.|
|admin_removed_from_store|string|The EQP admin has removed the package from the store.|

##### Technical Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The package has not been submitted for technical review.|
|in_automation|string|The package has been submitted for technical review and is currently undergoing automated testing.|
|awaiting_manual_qa|string|The package has passed all automated tests and is currently in the manual test queue.|
|in_manual_qa|string|The package is currently undergoing manual testing.|
|approved|string|The package has passed all tests.|
|rejected|string|The package has failed automation or manual tests.|
|recalled|string|The developer has recalled the package.|

##### Marketing Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The package has not been submitted for marketing review.|
|awaiting_marketing_review|string|The package has been submitted to the marketing review queue.|
|in_marketing_review|string|The package is currently undergoing marketing review.|
|approved|string|The package has passed the marketing review process.|
|rejected|string|The package has failed the marketing review process.|
|recalled|string|The developer has recalled the package.|

{% endcollapsible %}

## Package submissions

```http
POST /rest/v1/products/packages
PUT /rest/v1/products/packages
PUT /rest/v1/products/packages/:submission_id
PUT /rest/v1/products/packages/:item_id
```

### Submit a package

You can submit a package in either of the following ways:

*  A single POST request with all required fields set. You must explicitly indicate that you are submitting for technical and marketing review using the `action` parameter.
*  A series of requests, typically in the following order:
   1. A single POST request with the minimum required fields set and `action` set to `draft` in either `technical`, `marketing`, or both. This request accepts the new package and saves it on the Developer Portal for further updates. It returns a unique `submission_id` for subsequent PUT operations.
   1. One or more PUT requests in which you configure the package parameters. In these requests, set `action` to `draft` in `technical`, `marketing`, or both.
   1. A final PUT request indicating submission for `technical`, `marketing`, or both.

You can update one or more parameters in `draft` mode.
In this mode, the API checks only for basic type-validation issues.

When the `action` field is set to `submit`, the API validates fields to ensure all
required parameters are available on the Developer Portal to initiate the EQP process,
and that parameters which depend upon each other match up correctly.

 {:.bs-callout-info}
All `action` fields are optional. If not specified, `draft` is the default value.

The following example shows a POST request with all required parameters set for both technical and marketing submissions:

```json
[
  {
    "action" : {
      "technical" : "submit",
      "marketing" : "submit"
    },
    "type" : "extension",
    "platform" : "M2",
    "version_compatibility" : [
      {
        "edition" : "CE",
        "versions" : ["2.3", "2.4"]
      },
      {
        "edition" : "EE",
        "versions" : ["2.3", "2.4"]
      },
      {
        "edition" : "ECE",
        "versions" : ["2.3", "2.4"]
      }
    ],
    "name" : "One Click Checkout",
    "short_description" : "<Short description here>",
    "long_description" : "<Long description here>",
    "release_notes" : "<Release notes here>",
    "artifact" : {
      "file_upload_id" : "5c11e656057b42.97931218.5"
    },
    "documentation_artifacts" : {
      "user" : {
        "file_upload_id" : "5c644d97bb7c41.37505716.6"
      },
      "installation" : {
        "file_upload_id" : "5c644daf21fee4.39102137.2"
      },
      "reference" : {
        "file_upload_id" : "5c644f4dcb1900.18508194.9"
      }
    },
    "media_artifacts" : {
      "icon_image" : {
        "file_upload_id" : "5c129cd41ba478.65767699.1"
      },
      "gallery_images" : [
        {
          "file_upload_id" : "5c644fa344e5d7.04253635.8"
        },
        {
          "file_upload_id" : "5c648b98446065.77844389.4"
        },
        {
          "file_upload_id" : "5c648b984d0228.21794482.7"
        },
        {
          "file_upload_id" : "5c648b98698ed0.64632056.3"
        },
        {
          "file_upload_id" : "5c648b986a3d98.83415858.0"
        }
      ],
      "video_urls" : [
        "https://www.youtube.com/watch?v=l33T2-YC4tk",
        "https://www.youtube.com/watch?v=682p52tFcmY"
      ]
    },
    "categories" : [
      "//Extensions//Payments & Security//Checkout Enhancements"
    ],
    "prices" : [
      {
        "edition" : "CE",
        "currency_code" : "USD",
        "price" : 15.50
      },
      {
        "edition" : "EE",
        "currency_code" : "USD",
        "price" : 45.00,
        "installation_price" : 0.00
      },
      {
        "edition" : "ECE",
        "currency_code" : "USD",
        "price" : 30.00,
        "installation_price" : 0.00
      }
    ],
    "license_type" : "bsd"
  }
]
```

Since the API accepts batch requests for both POST and PUT operations,
single submissions must be sent as an array containing one item.

If you save the request body to a file, for example, `/tmp/one-click-submission-1.0.0.json`,
the following example shows the package submission process:

**Request:**

```bash
curl -X POST \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     --data-binary  @/tmp/one-click-submission-1.0.0.json \
     https://developer-stg-api.magento.com/rest/v1/products/packages
```

**Response:**

```json
[
  {
    "code": 200,
    "message": "Success",
    "submission_id": "f4eacd72be",
    "eqp_status": {
      "overall": "in_progress",
      "technical": "in_automation",
      "marketing": "awaiting_marketing_review"
    },
    "created_at": "2020-04-17 16:00:00",
    "modified_at": "2020-04-17 16:00:00"
  }
]
```

*  The API returns a HTTP 200 batch response listing items in the same order as they were provided in the request.
*  Each item contains a `code` and `message` indicating success or failure. Any non-200 code indicates an error.
   Refer to the message for more details.
*  A unique `submission_id` is returned for each successful item, which must be used for any subsequent GET or PUT methods.
*  Optionally, if a user-defined `item_id` was supplied during the POST,
   the response will echo back the same `item_id` for each item in the batch.
   The resource can be retrieved via GET using the `item_id`.
*  Any non-200 HTTP response code indicates an error for the entire batch request. See [handling errors](handling-errors.html).

### Update a package

The PUT method can be used to update packages in the following states:

*  The package is in draft mode for the technical or marketing review; or both.
*  The package has been rejected in either the technical or marketing review; or both.
   You must fix these issues and re-submit the package.
*  The package has been released to the Magento Marketplace.
*  The package was removed from Magento Marketplace by the developer and needs to be re-published.
*  The package can be recalled while in the EQP pipeline.
*  After a package has been released to the Magento Marketplace, you can update marketing information only.
   Changing marketing information causes the package to be placed in marketing review.
   The package continues to be live on the marketplace, and after the marketing approval,
   the updated fields will be published to the store.

You cannot modify a package during the EQP process, except to recall the package.

Updating several packages in a batch request is similar to the POST version above.
The only difference is to supply `submission_id` for each item obtained from the POST request.

The PUT method also allows for updating a single package with `submission_id` as shown in the following example:

**Request:**

```bash
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     -d '{ "action" : { "marketing" : "submit"} }' \
     https://developer-stg-api.magento.com/rest/v1/products/packages/f4eacd72be
```

The HTTP response code will indicate success or failure.

#### Required parameters

If the **action** parameter gives a `submit` value for technical, marketing or both,
the required parameters are listed below by their respective parallel EQP pipelines:

##### Technical

|Parameter|Comments|
----------|--------|
|type||
|platform||
|version_compatibility||
|release_notes||
|artifact||
|documentation_artifacts|At least the `user` guide must be supplied.|

##### Marketing

|Parameter|Comments|
|---------|---------|
|name||
|short_description||
|long_description||
|documentation_artifacts||
|categories||
|media_artifacts|The icon, and at least one image in the gallery is required. The video urls are optional.|
|license_type||
|custom_license_name|Only if license_type is `custom`.|
|custom_license_url|Only if license_type is `custom`.|
|submission_id|For PUT commands.|

##### Submission in several steps

As described earlier, a submission can also be done in several steps in draft mode, followed by the action to `submit` for technical and/or `marketing` review. In such cases, the first
POST request in draft mode can be done with a minimal set of parameters:

|Parameter|Comments|
|---------|--------|
|type|
|platform|
|name||
|short_description||
|long_description||

With the returned  `submission_id`, the remaining required parameters can be supplied using a PUT request in draft mode, and/or with an `action` to submit to either technical or marketing review; or both.

## Get package details

```http
GET /rest/v1/products/packages
GET /rest/v1/products/packages/:submission_id
GET /rest/v1/products/packages/skus
GET /rest/v1/products/packages/skus/:url_encoded_sku
GET /rest/v1/products/packages/items
GET /rest/v1/products/packages/items/:item_id
```

There are various ways to retrieve package details, most of which are convenient alternatives to the typical way using `submission_id` for a specific package submission. The data returned is the same for the primary and the secondary ways.

The alternative ways provided are:

*  `skus`: Retrieves all versions of a particular package sku. An additional `version` filter is available to retrieve a specific sku and version.
*  `item_id`: Retrieves package details by specifying a user-defined unique `item_id` if one was supplied during the POST call.

The following basic endpoints retrieve all package details (every version of every package submitted):

```http
GET /rest/v1/products/packages
GET /rest/v1/products/packages/skus
GET /rest/v1/products/packages/items
```

This sample call lists all packages belonging to a user:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/products/packages
```

**Response:**

```json
[
  {
    "submission_id" : "f4eacd72be",
    "type" : "extension",
    "platform" : "M2",
    "version_compatibility" : [
      {
        "edition" : "CE",
        "versions" : ["2.3", "2.4"]
      },
      {
        "edition" : "EE",
        "versions" : ["2.3", "2.4"]
      },
      {
        "edition" : "ECE",
        "versions" : ["2.3", "2.4"]
      }
    ],
    "name" : "One Click Checkout",
    "short_description" : "<Short description here>",
    "long_description" : "<Long description here>",
    "sku" : "acme/one-click-checkout",
    "version" : "1.1.5",
    "release_notes" : "<Release notes here>",
    "artifact" : {
      "file_upload_id" : "5c11e656057b42.97931218.5",
      "filename" : "acme_one-click-checkout.zip",
      "content_type" : "application/zip",
      "size" : 182934,
      "malware_status" : "pass",
      "file_hash" : "f53f5db985b8815f1ce6fd4b48a0439a"
    },
    "documentation_artifacts" : {
      "user" : {
        "file_upload_id" : "5c644d97bb7c41.37505716.6",
        "filename" : "user.pdf",
        "content_type" : "application/pdf",
        "size" : 48392,
        "malware_status" : "pass",
        "file_hash" : "7f99e16a20457859fc0c86b5676a62ca"
      },
      "installation" : {
        "file_upload_id" : "5c644daf21fee4.39102137.2",
        "filename" : "installation.pdf",
        "content_type" : "application/pdf",
        "size" : 34876,
        "malware_status" : "pass",
        "file_hash" : "94392b98f02c56083995d23f02e460ab"
      },
      "reference" : {
        "file_upload_id" : "5c644f4dcb1900.18508194.9",
        "filename" : "reference.pdf",
        "content_type" : "application/pdf",
        "size" : 23845,
        "malware_status" : "pass",
        "file_hash" : "ec78ded664c71d80acf0e29f5dbafe2b"
      }
    },
    "media_artifacts" : {
      "icon_image" : {
        "file_upload_id" : "5c129cd41ba478.65767699.1",
        "filename" : "icon.png",
        "content_type" : "image/png",
        "size" : 37492,
        "malware_status" : "pass",
        "file_hash" : "dd0d04057cd1420afb76d6afa838d394"
      },
      "gallery_images" : [
        {
          "file_upload_id" : "5c644fa344e5d7.04253635.8",
          "filename" : "acme-logo.png",
          "content_type" : "image/png",
          "size" : 23947,
          "malware_status" : "pass",
          "file_hash" : "515f2eaf3cd4e43c32fda89a004306aa"
        },
        {
          "file_upload_id" : "5c648b98446065.77844389.4",
          "filename" : "catalog_demo.png",
          "content_type" : "image/png",
          "size" : 37492,
          "malware_status" : "pass",
          "file_hash" : "8da78313887fdc3d2506f39c46ccde4e"
        },
        {
          "file_upload_id" : "5c648b984d0228.21794482.7",
          "filename" : "cart-demo.png",
          "content_type" : "image/png",
          "size" : 38023,
          "malware_status" : "pass",
          "file_hash" : "30b6fef138e1433e6f8ff23a45b2fbb9"
        },
        {
          "file_upload_id" : "5c648b98698ed0.64632056.3",
          "filename" : "click-demo.png",
          "content_type" : "image/png",
          "size" : 48293,
          "malware_status" : "pass",
          "file_hash" : "0ced4d071dddc6e354acfa11f56a56f1"
        },
        {
          "file_upload_id" : "5c648b986a3d98.83415858.0",
          "filename" : "click-success.png",
          "content_type" : "image/png",
          "size" : 39482,
          "malware_status" : "pass",
          "file_hash" : "dfa3183472cc265a5510be1da0fe444c"
        }
      ],
      "video_urls" : [
        "https://www.youtube.com/watch?v=l33T2-YC4tk",
        "https://www.youtube.com/watch?v=682p52tFcmY"
      ]
    },
    "categories" : [
      "//Extensions//Payments & Security//Checkout Enhancements"
    ],
    "prices" : [
      {
        "edition" : "CE",
        "currency_code" : "USD",
        "price" : 15.50
      },
      {
        "edition" : "EE",
        "currency_code" : "USD",
        "price" : 45.00,
        "installation_price" : 0.00
      },
      {
        "edition" : "ECE",
        "currency_code" : "USD",
        "price" : 30.00,
        "installation_price" : 0.00
      }
    ],
    "license_type" : "bsd",
    "eqp_status" :  {
      "overall" : "in_progress",
      "technical" : "rejected",
      "marketing" : "approved"
    },
    "created_at": "2020-04-17 16:00:00",
    "modified_at": "2020-04-17 22:00:00"
  }
]
```

<!-- M1: tar ball ... packages.xml -->

*  The previous example shows one product only, but an array of products can be returned.
*  The `sku` and version will be determined from the code artifact (M2 zip file) meta-information (M2 `composer.json`), once it passes the malware checks.
*  The code, documentation, and media artifact files have additional info indicating meta-information on these files, including their current malware status.
*  The `eqp_status` field will indicate the current state of the package in the EQP process.

To get additional details about the results of EQP testing, see [EQP Test Reports](test-results.html)

### Sorting and Filtering

The following fields enable both sorting and filtering support. Refer to the [Package fields](#package-fields) section above for valid values for certain fields):

|Field|Comments|
|-----|--------|
|type|Exact string match|
|platform|Exact string match|
|item_id|Sub-string match|
|submission_id|Sub-string match|
|sku|Sub-string match|
|version|Sub-string match|
|name|Sub-string match|
|short_description|Sub-string match|
|long_description|Sub-string match|
|release_notes|Sub-string match|
|is_patch|Exact match|
|license_type|Exact string match|
|custom_license_name|Sub-string match|
|custom_license_url|Sub-string match|
|requested_launch_date|date match, allows range|
|created_at|date match, allows range|
|modified_at|date match, allows range|

A sample cURL request filtering all `themes` sorted by `platform` in ascending order and `created_at` in descending order:

**Request:**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-stg-api.magento.com/rest/v1/products/packages?type=theme&sort=+platform,-created_at
```

**Response:**

A list of theme packages can be returned in the same way as described in [Get package details](#get-package-details).
