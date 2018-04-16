---
layout: default
group: marketplace-api
title: Packages
version: 2.1
github_link: marketplace/eqp/packages.md
---

Use this resource to initiate and manage all aspects of submitting a package to the [MAgento Extension Quality Program (EQP)](http://docs.magento.com/marketplace/user_guide/extensions/extension-quality-program.html). You can provide all metadata associated with a package—both the technical and the marketing information—in a single step or in several steps using incremental updates.

* **Technical information**—References to code artifacts, such as Magento 1 TGZ files or Composer-compliant Magento 2 ZIP files, version compatibility, and release notes.

* **Marketing information**—Includes package descriptions, image assets for logos and galleries, pricing information, support and installation services offered, and various guides—user, installation, and reference in PDF.

Before submitting a package, you must first [upload your files]({{page.baseurl}}/marketplace/eqp/files.html) and associate the ID returned by the `/rest/v1/files/uploads` endpoint with your package using JSON parameters in the request body.

You can also check package submission status and retrieve reports about technical and marketing issues discovered during the EQP process.

A successful submission results in a package being published on the [Magento Marketplace](https://marketplace.magento.com/).

## EQP review process

The EQP process inlcudes two steps:

1. **Technical**—This is where we preform all automated testing. This step also involves manual testing after all automated test run.
2. **Marketing**—This is where we manually review all marketing content associated with your package before you can publish it on the Magento Marketplace.

Both review steps occur in parallel when you submit a package. If both steps are successful, the package can be published to the Magento Marketplace. If there is a failure, you can iteratively fix issues until they are resolved.

## Package fields

The following table describes all package object properties:

<div class="bs-callout bs-callout-info" markdown="1">
Both `POST` and `PUT` requests support a batch model where multiple packages can be created or updated.
</div>

|Field/Parameter|Type|Applicable HTTP Command|EQP Kind|Description|
|---------------|----|-----------------------|--------|-----------|
|name|string|GET, POST, PUT|marketing|The name or title of the package. Duplicate names are not allowed.|
|type|string|GET, POST, PUT|technical|Type of package. Valid values include `extension`, `theme`, or `shared_package`. Shared packages are only applicable for Magento 2 extensions.|
|platform|string|GET, POST, PUT|technical|The Magento platform compatibility of this package. Valid values include  `M1` for MAgento 1 or `M2` for Magento 2.|
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
|media_artifacts|object|GET, POST, PUT|marketing|The sub-object that holds the package icon and gallery images referenced in a file upload ID obtained from the Files API.|
|prices|array|GET, POST, PUT|marketing|The list of prices in USD set for this package by edition, and its respective installation price (if any).|
|support_tiers|array|GET, POST, PUT|marketing|List of support tiers, each specifying the edition, the monthly period, descriptions, and prices in USD.|
|license_type|string|GET, POST, PUT|marketing|License type supported by the package. Refer to [Additional notes](#additional-notes) for a list of valid license types.|
|custom_license_name|string|GET, POST, PUT|marketing|The name of the license if `license_type` is set to `custom`.|
|custom_license_url|string|GET, POST, PUT|marketing|The URL of the license if `license_type` is set to `custom`.|
|external_services|object|GET, POST, PUT|marketing|The list of services—name and URL—that the extension integrates with (if applicable).|
|browser_os_compatibility|object|GET, POST, PUT|marketing|The browser and its associated OS compatibilities this package supports. Refer to [Additional notes](#additional-notes) for a list of browsers and OS values.|
|options|object|GET, POST, PUT|marketing|A set of options this package supports. Refer to [Additional notes](#additional-notes).|
|submission_id|string|GET, PUT|-|A globally unique ID assigned to a package when it is submitted in a POST request. All further references to this package using GET or PUT requests can be made supplying this identifier.|
|item_id|string|GET, POST, PUT|-|A developer-defined unique ID assigned to the package (if available). If it is being supplied, it must be unique for every POST request.|
|action|object|POST, PUT|-|The action to be taken during a package submission (POST or PUT). Refer to [Package submission](#package-submission).|
|eqp_status|object|GET|-|The current status of the package in the EQP process. Refer to [Get package details](#get-package-details).|
|offset|integer|GET|-|In combination with the `limit` parameter, it can be used for paging the collection of packages. Refer to [Get package details](#get-package-details). Default value is 0.|
|limit|integer|GET|-|Along with offset, it can be used for paging the collection of packages. Default value is 20. Specifying -1 implies unlimited.|
|sort|string|GET|-|A comma-separated list of fields to sort the list, each field prefixed by `-` for descending order, or `+` for ascending order. Refer to [Get package details](#get-package-details).|
{:.style="table-layout: auto;"}

### Additional notes

* For required fields in a POST or PUT operation, refer to the [Package submissions](#package-submission) section.
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
    "https-hw3b//www.youtube.com/watch?v=l33T2-YC4tk",
    "https-hw3b//www.youtube.com/watch?v=682p52tFcmY"
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

Up to three tiers per edition (`CE` and `EE`) can be supported:

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
PUT  /rest/v1/products/packages
PUT  /rest/v1/products/packages/:submission_id
PUT /rest/v1/products/packages/:item_id
```

### Submit a package

A new package submission can be done in either of the following ways:

1. A single POST request with all required fields set and explicitly indicating submission for technical and marketing review using the `action` parameter.
2. A series of requests, typically in the following order:
   1. A single POST request with the minimum required fields set and `action` set to `draft` in either `technical`, `marketing`, or both:
      1. This accepts the new package and saves it on the Developer Portal for further updates.
      2. It will return a unique `submission_id` for PUT operations.
   2. One or more PUT requests with `action` set to `draft` in `technical`, `marketing`, or both.
   3. A final PUT request indicating submission for `technical`, `marketing`, or both.

You can update one or more parameters in `draft` mode, but the API does not check for validation errors.

When the `action` field is set to `publish`, the API validates fields to ensure all required parameters are available on the Developer Portal to initiate the EQP process.

<div class="bs-callout bs-callout-info" markdown="1">
All `action` fields are optional. If not specified, `draft` is the default value.
</div>

The following example shows a POST request with all required parameters set for both technical and marketing submissions:

```json
[
  {
    "action" : {
      "technical" : "submit",
      "marketing" : "submit"
    },
    "type" : "extension",
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

Since both POST and PUT can accept batch requests, a single submission should be still be sent as an array with one item.

If you cave the request body to a file, for example, `/tmp/one-click-submission-1.0.0.json`, the following example shows the package submission process:

**Request**

```shell
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: application/json” \
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

<div class="bs-callout bs-callout-info" markdown="1">
* The API returns a HTTP 200 batch response listing items in the same order as they were provided in the request.
* Each item contains a `code` and `message` indicating success or failure. Any non-200 code indicates an error. Refer to the message for more details.
* A unique `submission_id` is returned for each successful item, which must be used for any GET, PUT, or DELETE methods.
* Optionally, if a user-defined `item_id` was supplied during the POST, the response will echo back the same `item_id` for each item in the batch. The resource can be retrieved via GET using the `item_id`.
* Any non-200 HTTP response code indicates an error for the entire batch request.
</div>

### Update a package

The PUT method can be used to update packages in the following states:

* The package is in draft mode for the technical or marketing review; or both.
* The package has been rejected in either the technical or marketing review; or both. You to fix these issues and re-submit the package.
* The package has been released to the Magento Marketplace.
* The package was removed from the store by the developer and needs to be re-published.
* The package can be recalled while in the EQP pipeline.
* After released to the Magento Marketplace, only marketing information can be updated, which will put it in the marketing review. The package will continue to be live on the marketplace, and after the marketing approval, the updated fields will be published to the store.

Other than recall, a package cannot be modified during the EQP process.

Updating several packages in a batch request is similar to the POST version above. The only difference is to supply `submission_id` for each item obtained from the POST request.

The PUT method also allows for updating a single package with `submission_id` as shown in the following example:

**Request**

```shell
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: application/json” \
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

*  `skus`—This allows to retrieve all versions of a particular package sku. Additional `version` filter is available to retrieve a specific sku and version.
* `item_id`: This allows to retrieve package details via a user-defined unique `item_id` per submission if supplied during the POST call.

Retrieving all package details (every version of every package submitted) is possible via the following basic endpoints:

```
GET /rest/v1/products/packages
GET /rest/v1/products/packages/skus
GET /rest/v1/products/packages/items
```

Detailed EQP status report of a package can be obtained via the following status endpoints:

```
GET /rest/v1/products/packages/:submission_id/status
GET /rest/v1/products/packages/sku/:url_encoded_sku/status
GET /rest/v1/products/packages/item/:item_id/status
```

Here is a curl example listing all packages belonging to a user:

**Request**

```shell
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages
```

**Response**

```json
```

### Get EQP status details

As seen above, this particular submission had a failure on the technical track of the EQP process. A more detailed report can be obtained via a status call:

***Request**

```shell
```

***Response**

```json
```

## Delete a package

```
DELETE /rest/v1/products/packages/:submission_id
DELETE /rest/v1/products/packages/:item_id
```

Deleting a package can only be done via **submission_id** or **item_id** as it is a risky operation, hence no batch deletes will be provided.

A sample curl call is shown below:

**Request**

```curl
curl -X DELETE \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/products/packages/6fd7eaacbc
```

A 200 HTTP Response code will indicate success of the operation.
