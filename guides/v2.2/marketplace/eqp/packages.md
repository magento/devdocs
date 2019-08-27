---
group: marketplace-api
title: Packages
---

Use this resource to initiate and manage all aspects of submitting a package to the [Magento Extension Quality Program (EQP)](http://docs.magento.com/marketplace/user_guide/extensions/extension-quality-program.html). You can provide all metadata associated with a package—both the technical and the marketing information—in a single step or in several steps using incremental updates.

* **Technical information**—References to code artifacts, such as Magento 1 TGZ files or Composer-compliant Magento 2 ZIP files, version compatibility, and release notes.

* **Marketing information**—Includes package descriptions, image assets for logos and galleries, pricing information, support and installation services offered, and various guides—user, installation, and reference in PDF.

Before submitting a package, you must first [upload your files]({{ page.baseurl }}/marketplace/eqp/files.html) and associate the ID returned by the `/rest/v1/files/uploads` endpoint with your package using JSON parameters in the request body.

You can also check package submission status and retrieve reports about technical and marketing issues discovered during the EQP process.

A successful submission results in a package being published on the [Magento Marketplace](https://marketplace.magento.com/).

## EQP review process

The EQP review process includes two steps:

* In **technical review**, we perform all automated testing. This step also involves manual testing after all automated tests run.
* In **marketing review**, we manually review all marketing content associated with your package before you can publish it on the Magento Marketplace.

These review steps occur in parallel when you submit a package. If both steps are successful, the package can be published to the Magento Marketplace. If there is a failure, you can iteratively fix issues until they are resolved.

## Package fields

The following table describes all package object properties:

{: .bs-callout-info }
Both `POST` and `PUT` requests support a batch model where multiple packages can be created or updated.

|Field/Parameter|Type|Applicable HTTP Command|EQP Review Type|Description|
|---------------|----|-----------------------|--------|-----------|
|name|string|GET, POST, PUT|marketing|The name or title of the package. Duplicate names are not allowed.|
|type|string|GET, POST, PUT|technical|Type of package. Valid values include `extension`, `theme`, `shared_package` or `all`. Shared packages are only applicable for Magento 2 extensions. Default is `all`|
|platform|string|GET, POST, PUT|technical|The Magento platform compatibility of this package. Valid values include  `M1` for Magento 1 or `M2` for Magento 2.|
|version_compatibility|array|GET, POST, PUT|technical|List of Magento versions that this package supports.|
|sku|string|GET|-|The SKU generated from metadata in the code artifact.|
|version|string|GET|-|The package version in the format `major.minor.patch`. For example, `2.5.3`.|
|short_description|string|GET, POST, PUT|marketing|The short description for the package.|
|long_description|string|GET, POST, PUT|marketing|The long description for the package.|
|release_notes|string|GET, POST, PUT|technical|The release notes for the package submission.|
|is_patch|boolean|GET, POST, PUT|technical|A flag to indicate the submission should follow the [expedited process for patch releases.](https://community.magento.com/t5/Magento-DevBlog/New-Expedited-Marketplace-Submission-Path/ba-p/77303)|
|requested_launch_date|DateTime|POST, PUT|marketing|The UTC date and time (`YYYY-MM-DD HH:MM:SS`) when the package should be released to the store. If not supplied, it will be released to the store after all checks have passed.|
|artifact|object|GET, POST, PUT|technical|This is the package code artifact (TGZ file for Magento 1 or ZIP file for Magento 2) that can be referenced in a file upload ID obtained from the Files API.|
|documentation_artifacts|object|GET, POST, PUT|marketing, technical|The user, installation, and reference PDF manuals referenced in a file upload ID obtained from the Files API.|
|shared_packages|array|GET, POST, PUT|technical|The list of artifact objects, each a Magento 2 shared package being referenced in a file upload ID obtained from the Files API. Listing it here implies that the seller is enabling  the "access rights" to these shared packages when a buyer purchases it.|
|categories|array|GET, POST, PUT|marketing|The list of categories expressed as a `path` for the package. For example, `//Extension//Marketing//SEO/SEM`. Note that the path separator is `//` which allows for a single slash like `SEO/SEM` in the path name. Refer to the [Marketplace Store](https://marketplace.magento.com) for a list of valid categories.|
|media_artifacts|object|GET, POST, PUT|marketing|The sub-object that holds the package icon, gallery images, and optional video URLs referenced in a file upload ID obtained from the Files API.|
|prices|array|GET, POST, PUT|marketing|The list of prices in USD set for this package by edition, and its respective installation price (if any).|
|support_tiers|array|GET, POST, PUT|marketing|List of support tiers, each specifying the edition, the monthly period, descriptions, and prices in USD.|
|license_type|string|GET, POST, PUT|marketing|License type supported by the package. Refer to [Additional notes](#additional-notes) for a list of valid license types.|
|custom_license_name|string|GET, POST, PUT|marketing|The name of the license if `license_type` is set to `custom`.|
|custom_license_url|string|GET, POST, PUT|marketing|The URL of the license if `license_type` is set to `custom`.|
|external_services|object|GET, POST, PUT|marketing|The list of services—name and URL—that the extension integrates with (if applicable).|
|browser_os_compatibility|object|GET, POST, PUT|marketing|The browser and its associated OS capabilities this package supports. Refer to [Additional notes](#additional-notes) for a list of browsers and OS values.|
|options|object|GET, POST, PUT|marketing|A set of options this package supports. Refer to [Additional notes](#additional-notes).|
|submission_id|string|GET, PUT|-|A globally unique ID assigned to a package when it is submitted in a POST request. All further references to this package using GET or PUT requests can be made supplying this identifier.|
|item_id|string|GET, POST, PUT|-|A developer-defined unique ID assigned to the package (if available). If it is being supplied, it must be unique for every POST request.|
|action|object|POST, PUT|-|The action to be taken during a package submission (POST or PUT). Refer to [Package submission](#package-submissions).|
|eqp_status|object|GET|-|The current status of the package in the EQP process. Refer to [Get package details](#get-package-details).|
|offset|integer|GET|-|In combination with the `limit` parameter, it can be used for paging the collection of packages. Refer to [Get package details](#get-package-details). Default value is 0.|
|limit|integer|GET|-|Along with `offset`, it can be used for paging the collection of packages. Default value is 20. Specifying -1 implies unlimited.|
|sort|string|GET|-|A comma-separated list of fields to sort the list, each field prefixed by `-` for descending order, or `+` for ascending order. Refer to [Get package details](#get-package-details).|
|created_time|DateTime|GET|-|The UTC date and time (`YYYY-MM-DD HH:MM:SS`) the package was first submitted.|
|modified_time|DateTime|GET|-|The UTC date and time (`YYYY-MM-DD HH:MM:SS`) the package was last updated.|
{:.style="table-layout: auto;"}

### Additional notes

* For required fields in a POST or PUT operation, refer to the [Package submissions](#package-submissions) section.
* The EQP Kind column indicates which part of the EQP pipeline will need to use or review the field values.
* The list of valid values for `license_type` are:
    * `afl`—Academic Free License 3.0 (AFL)
    * `apache`—Apache License 2.0
    * `bsd`—BSD 2-Clause License
    * `gnu-gpl`—GNU General Public License 3.0 (GPL-3.0)
    * `gnu-lgpl`–GNU Lesser General Public License 3.0 (LGPL-3.0)
    * `mit`—MIT License (MIT)
    * `mozilla`—Mozilla Public License 1.1 (MPL-1.1)
    * `osl`—Open Software License 3.0 (OSL-3.0)
    * `custom`—Custom License

### Object details

{% collapsible JSON Structure%}

Listing the JSON structure of objects described above:

#### version_compatibility

Assuming a Magento 2 package:

```json
"version_compatibility" : [
  {
    "edition" : "CE",
    "versions" : [“2.0”, ”2.1”, "2.2"]
  },
  {
    "edition" : "EE",
    "versions" : [“2.0”,”2.1”, "2.2"]
  }
]
```

#### artifact

```json
"artifact" : {
  "file_upload_id" : "dhsiXjdksW17623"
}
```

#### document_artifacts

```json
"documentation_artifacts" : {
  "user" : {
    "file_upload_id" : "j47dVbsFgkl"
  },
  "installation" : {
    "file_upload_id" : "d67E82hVb20"
  },
  "reference" : {
    "file_upload_id" : "9Rb5yQh7dfA"
  }
}
```

#### shared_packages

```json
“shared_packages” : [
  {
    “artifact” : {
      “file_upload_id” : “sfRh72Mx9d”
    }
  },
  {
    “artifact” : {
      “file_upload_id” : “Gh893dCxak”
    }
  }
]
```

#### media_artifacts

```json
"media_artifacts" : {
  "icon_image" : {
    "file_upload_id" : "gAdh628bzXv"
  },
  "gallery_images" : [
    {
      "file_upload_id" : "hj739djXvT"
    },
    {
      "file_upload_id" : "9Dfg73482E"
    },
    {
      "file_upload_id" : "J87bdueDjxM"
    },
    {
      "file_upload_id" : "Vhke71093Z4"
    },
    {
      "file_upload_id" : "Gh8273Cx78Q"
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
  }
]
```

#### support_tiers

Up to three tiers per edition (`CE` (Open Source) and `EE` (Commerce)) can be supported:

```json
“suppport_tiers” : [
  {
    “tier” : 1,
    “edition” : “CE”,
    "monthly_period" : 1,
    "short_description" : “<Short description goes here.>”,
    “long_description” “ “<Long description goes here.>”,
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 25.00
      }
    ]

  },
  {
    “tier” : 1,
    “edition” : “EE”,
    "monthly_period" : 1,
    "short_description" : “<Short description goes here.>”,
    “long_description” “ “<Long description goes here.>”,
    "prices" : [
      {
        "currency_code" : "USD",
        "price" : 50.00
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
    "mac" : [ “39”, "44”],
    "windows" : [“43”, "44”],
    "linux" : [“43”, "44”]
  },
  "firefox" : {
    "mac" : [ "40”, "41”],
    "windows" : [“40”, “41”],
    "linux" : [“40”, “41”]
  }
}
```

The list of valid values for the `browser_os_compatibility` are:
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

#### options

Additional options that apply this package can be provided if applicable:

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

#### action

During EQP process, it can take the following fields:

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

Once a package is published to the store, it can have the following field:

```json
“action” : {
  “overall” : “publish”
}
```

|Value|Type|Description|
|-----|----|-----------|
|publish|string|Re-publishes the package to the store if it was removed from it earlier by the developer.|
|remove|string|Removes the package from the store.|

#### eqp_status

```json
"eqp_status" :  {
  "overall" : "in_progress",
  "technical" : "draft",
  "marketing" : "approved"

}
```

* The *overall* value indicates where the package is in the EQP pipeline.
* Additional details are provided in the two main EQP areas:
  * **technical**—Provides the current technical status.
  * **marketing**—Provides the current marketing status.

###### Overall Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The submission is in the draft state, not yet submitted to the EQP process.|
|in_progress|string|The submission is in the EQP pipeline. Refer to the `technical` and `marketing` status for more details.|
|approved|string|The submission has been approved and pending release to the store.|
|released_to_store|string|The submission has been approved and is currently live on store.|
|developer_removed_from_store|string|The developer has removed the package from the store.|
|admin_removed_from_store|string|The EQP admin has removed the package from the store.|

###### Technical Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The package has not been submitted for technical review.|
|in_automation|string|The package has been submitted for technical review and is currently undergoing automated testing.|
|awaiting_manual_qa|string|The package has passed all automated tests and is currently in the manual test queue.|
|in_manual_qa|string|The package is currently undergoing manual testing.|
|approved|string|The package has passed all tests.|
|rejected|string|The package has failed automation or manual tests.|
|recalled|string|The developer has recalled the package.|

###### Marketing Status

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

```
POST /rest/v1/products/packages
PUT /rest/v1/products/packages
PUT /rest/v1/products/packages/:submission_id
PUT /rest/v1/products/packages/:item_id
```

### Submit a package

You can submit a package in either of the following ways:

* A single POST request with all required fields set. You must explicitly indicate that you are for technical and marketing review using the `action` parameter.
* A series of requests, typically in the following order:
   1. A single POST request with the minimum required fields set and `action` set to `draft` in either `technical`, `marketing`, or both. This request accepts the new package and saves it on the Developer Portal for further updates. It returns a unique `submission_id` for subsequent PUT operations.
   2. One or more PUT requests in which you configure the package parameters. In these requests, set `action` to `draft` in `technical`, `marketing`, or both.
   3. A final PUT request indicating submission for `technical`, `marketing`, or both.

You can update one or more parameters in `draft` mode, but the API does not check for validation errors.

When the `action` field is set to `publish`, the API validates fields to ensure all required parameters are available on the Developer Portal to initiate the EQP process.

{: .bs-callout-info }
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
        "versions" : ["2.1", "2.2"]
      },
      {
        "edition" : "EE",
        "versions" : ["2.1", "2.2"]
      }
    ],
    "name" : "One Click Checkout",
    "short_description" : "<Short description here>",
    "long_description" : "<Long description here>",
    "release_notes" : "<Release notes here>",
    "artifact" : {
      "file_upload_id" : "dhsiXjdksW17623"
    },
    "documentation_artifacts" : {
      "user" : {
        "file_upload_id" : "j47dVbsFgkl"
      },
      "installation" : {
        "file_upload_id" : "d67E82hVb20"
      },
      "reference" : {
        "file_upload_id" : "9Rb5yQh7dfA"
      }
    },
    "media_artifacts" : {
      "icon_image" : {
        "file_upload_id" : "gAdh628bzXv"
      },
      "gallery_images" : [
        {
          "file_upload_id" : "hj739djXvT"
        },
        {
          "file_upload_id" : "9Dfg73482E"
        },
        {
          "file_upload_id" : "J87bdueDjxM"
        },
        {
          "file_upload_id" : "Vhke71093Z4"
        },
        {
          "file_upload_id" : "Gh8273Cx78Q"
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
      }
    ],
    "license_type" : "bsd"
  }
]
```

Since the API accepts batch requests for both POST and PUT operations, send a single submission as an array with one item.

If you save the request body to a file, for example, `/tmp/one-click-submission-1.0.0.json`, the following example shows the package submission process:

**Request**

```shell
curl -X POST \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     --data-binary  @/tmp/one-click-submission-1.0.0.json \
     https://developer-api.magento.com/rest/v1/products/packages
```

**Response**

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
    "created_at": "2018-04-23 16:00:00",
    "modified_at": "2018-02-23 16:00:00"
  }
]
```

* The API returns a HTTP 200 batch response listing items in the same order as they were provided in the request.
* Each item contains a `code` and `message` indicating success or failure. Any non-200 code indicates an error. Refer to the message for more details.
* A unique `submission_id` is returned for each successful item, which must be used for any GET, PUT, or DELETE methods.
* Optionally, if a user-defined `item_id` was supplied during the POST, the response will echo back the same `item_id` for each item in the batch. The resource can be retrieved via GET using the `item_id`.
* Any non-200 HTTP response code indicates an error for the entire batch request.

### Update a package

The PUT method can be used to update packages in the following states:

* The package is in draft mode for the technical or marketing review; or both.
* The package has been rejected in either the technical or marketing review; or both. You must fix these issues and re-submit the package.
* The package has been released to the Magento Marketplace.
* The package was removed from the store by the developer and needs to be re-published.
* The package can be recalled while in the EQP pipeline.
* After a package has been released to the Magento Marketplace, you can update marketing information only. Changing marketing information causes the package to be placed in marketing review. The package continues to be live on the marketplace, and after the marketing approval, the updated fields will be published to the store.

You cannot modify a package during the EQP process, except to recall the package.

Updating several packages in a batch request is similar to the POST version above. The only difference is to supply `submission_id` for each item obtained from the POST request.

The PUT method also allows for updating a single package with `submission_id` as shown in the following example:

**Request**

```shell
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H 'Content-Type: application/json' \
     -d { “action” : { “overall” : “publish”} } \
     https://developer-api.magento.com/rest/v1/products/packages/f4eacd72be
```

The HTTP response code will indicate success or failure.

#### Required parameters

If the **action** parameter indicates `submit` value for technical, or marketing or both, the required parameters are listed below by their respective parallel EQP pipelines:

##### Technical

|Parameter|Comments|
----------|--------|
|type||
|platform||
|version_compatibilty||
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

```
GET /rest/v1/products/packages
GET /rest/v1/products/packages/:submission_id
GET /rest/v1/products/packages/skus
GET /rest/v1/products/packages/skus/:url_encoded_sku
GET /rest/v1/products/packages/items
GET /rest/v1/products/packages/items/:item_id
GET /rest/v1/products/packages/:submission_id/status
GET /rest/v1/products/packages/sku/:url_encoded_sku/status
GET /rest/v1/products/packages/item/:item_id/status
```

There are various ways to retrieve package details, most of which are convenient alternatives to the typical way using `submission_id` for a specific package submission. The data returned is the same for the primary and the secondary ways.

The alternative ways provided are:

*  `skus`: Retrieves all versions of a particular package sku. An additional `version` filter is available to retrieve a specific sku and version.
* `item_id`: Retrieves package details by specifying a user-defined unique `item_id` if one was supplied during the POST call.

The following basic endpoints retrieve all package details (every version of every package submitted):

```
GET /rest/v1/products/packages
GET /rest/v1/products/packages/skus
GET /rest/v1/products/packages/items
```

The following status endpoints provide a detailed EQP status report of a packages:

```
GET /rest/v1/products/packages/:submission_id/status
GET /rest/v1/products/packages/sku/:url_encoded_sku/status
GET /rest/v1/products/packages/item/:item_id/status
```

This sample call lists all packages belonging to a user:

**Request**

```shell
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages
```

**Response**

```json
[
  {
    "submission_id" : "f4eacd72be",
    "type" : "extension",
    "platform" : "M2",
    "version_compatibility" : [
      {
        "edition" : "CE",
        "versions" : ["2.1", "2.2"]
      },
      {
        "edition" : "EE",
        "versions" : ["2.1", "2.2"]
      }
    ],
    "name" : "One Click Checkout",
    "short_description" : "<Short description here>",
    "long_description" : "<Long description here>",
    "sku" : "acme/one-click-checkout",
    "version" : "1.1.5",
    "release_notes" : "<Release notes here>",
    "artifact" : {
      "file_upload_id" : "dhsiXjdksW17623",
      "filename" : "acme_one-click-checkout.zip",
      "content_type" : "application/zip",
      "size" : 182934,
      "malware_status" : "pass",
      "file_hash" : "f53f5db985b8815f1ce6fd4b48a0439a"
    },
    "documentation_artifacts" : {
      "user" : {
        "file_upload_id" : "j47dVbsFgkl",
        "filename" : "user.pdf",
        "content_type" : "application/pdf",
        "size" : 48392,
        "malware_status" : "pass",
        "file_hash" : "7f99e16a20457859fc0c86b5676a62ca"
      },
      "installation" : {
        "file_upload_id" : "d67E82hVb20",
        "filename" : "installation.pdf",
        "content_type" : "application/pdf",
        "size" : 34876,
        "malware_status" : "pass",
        "file_hash" : "94392b98f02c56083995d23f02e460ab"
      },
      "reference" : {
        "file_upload_id" : "9Rb5yQh7dfA",
        "filename" : "reference.pdf",
        "content_type" : "application/pdf",
        "size" : 23845,
        "malware_status" : "pass",
        "file_hash" : "ec78ded664c71d80acf0e29f5dbafe2b"
      }
    },
    "media_artifacts" : {
      "icon_image" : {
        "file_upload_id" : "gAdh628bzXv",
        "filename" : "one-click-icon.png",
        "content_type" : "image/png",
        "size" : 37492,
        "malware_status" : "pass",
        "file_hash" : "dd0d04057cd1420afb76d6afa838d394"
      },
      "gallery_images" : [
        {
          "file_upload_id" : "hj739djXvT",
          "filename" : "acme-logo.png",
          "content_type" : "image/png",
          "size" : 23947,
          "malware_status" : "pass",
          "file_hash" : "515f2eaf3cd4e43c32fda89a004306aa"
        },
        {
          "file_upload_id" : "9Dfg73482E",
          "filename" : "catalog_demo.png",
          "content_type" : "image/png",
          "size" : 37492,
          "malware_status" : "pass",
          "file_hash" : "8da78313887fdc3d2506f39c46ccde4e"
        },
        {
          "file_upload_id" : "J87bdueDjxM",
          "filename" : "cart-demo.png",
          "content_type" : "image/png",
          "size" : 38023,
          "malware_status" : "pass",
          "file_hash" : "30b6fef138e1433e6f8ff23a45b2fbb9"
        },
        {
          "file_upload_id" : "Vhke71093Z4",
          "filename" : "click-demo.png",
          "content_type" : "image/png",
          "size" : 48293,
          "malware_status" : "pass",
          "file_hash" : "0ced4d071dddc6e354acfa11f56a56f1"
        },
        {
          "file_upload_id" : "Gh8273Cx78Q",
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
      }
    ],
    "license_type" : "bsd",
    "eqp_status" :  {
      "overall" : "in_progress",
      "technical" : "rejected",
      "marketing" : "approved"
    },
    "created_time" : "2018-04-23 16:00:00",
    "modified_time" : "2018-04-23 17:53:22"
  }
]
```

* The previous example shows one product only, but an array of products can be returned.
* The `sku` and version will be determined from the code artifact (M1 tarball or M2 zip file) meta-information (M1 `packages.xml` or M2 `composer.json`), once it passes the malware checks.
* The code, documentation, and media artifact files have additional info indicating meta-information on these files, including their current malware status.
* The `eqp_status` field will indicate the current state of the package in the EQP process.

### Get EQP status details

In the previous example, submission `f4eacd72be` failed. Specify the submission_id query parameter to get a more detailed report:

**Request**

```shell
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages/f4eacd72be/status
```

**Response**

```json
{
  "code" : "fail",
  "technical" : {
    "code" : "fail",
    "results" : [
      {
        "tool" : "phpcs",
        "reports" : [
          {
            "platform" : "M2",
            "edition" : "CE",
            "version" : "2.1.12",
            "php_version" : "7.1.16",
            "status" : "pass",
            "details" : {
            }
          }
        ]
      },
      {
        "tool" : "compile",
        "reports" : [
          {
            "platform" : "M2",
            "edition" : "CE",
            "version" : "2.2.3",
            "php_version" : "7.1.16",
            "status" : "fail",
            "details" : {
              "output" : "<output bin/magento deploy:mode:set production here >"
            }
          }
        ]

      }
    ]
  },
  "marketing" : {
    "code" : "pass",
    "results" : [
    ]
  }
}
```

* Technical reports include the Magento edition, version, and PHP version used to run tests.
* The top-level `code` indicates the overall result, which can be `pass`, `fail`, or `in_progress`.
* Each EQP review step, `technical` and `marketing` have their own overall status indicated by the `code` value, which can be `pass`, `fail` or `in_progress`.
* The `results` list contains details for each tool and their respective outcome via the `status` field, which can be `pass` or `fail`.

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
|created_time|date match, allows range|
|modified_time|date match, allows range|

A sample cURL request filtering all `themes` sorted by `platform` in ascending order and `created_time` in descending order:

**Request**

```curl
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages?type=theme&sort=+platform,-created_time
```

**Response**

A list of theme packages can be returned in the same way as described in [Get package details](#get-package-details).

## Delete a package

You can delete a package only if you specify a `submission_id` or `item_id` as a query parameter. Deleting a package is risky operation, and as a result, you cannot delete them in a batch.

```
DELETE /rest/v1/products/packages/:submission_id
DELETE /rest/v1/products/packages/items/:item_id
```

The following example deletes the package with `submission_id` `6fd7eaacbc`:

**Request**

```curl
curl -X DELETE \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages/6fd7eaacbc
```

A 200 HTTP Response code indicates a successful operation.
