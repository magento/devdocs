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

## EQP Review Steps

When a package is submitted, the following review steps are done:

1. *technical* - This is where all the automated tests are performed.
   1. At the end of the automated tests, it also involves a manual QA step.
2. *marketing* - The manual review of all marketing content that needs to be published to the [Marketplace Store](https://marketplace.magento.com/).

Both the review steps will now occur in parallel, and if both stages are successful, the package is ready to be published to the store.

Review failures at any step may involve iterations to fix the appropriate issues till they are resolved.


## Package Fields



The fields listed here can be parameters in a POST, or PUT request body, and response fields in a GET response body. The column ‘Applicable HTTP Command’ highlights the context here.

Both POST and PUT, support a batch request model where multiple packages can be created or updated.

The following fields/parameters describes an item in a batch request, or response:


|Field/Parameter|Type|Applicable HTTP Command|EQP Kind|Description|
|---------------|----|-----------------------|--------|-----------|
|name|string|GET, POST, PUT|marketing|The name or title of the package. Duplicate names are not allowed.|
|type|string|GET, POST, PUT|technical|Type of package: valid values here are ‘extension’, ‘theme’, or ‘shared_package’. Shared packages are only applicable for Magento 2 extensions.|
|platform|string|GET, POST, PUT|technical|The Magento platform compatibility of this package: valid values here are ‘M1’ - Magento 1, or ‘M2’ - Magento 2.|
|version_compatibility|array|GET, POST, PUT|technical|List of Magento edition and its associated versions object that this package supports.|
|sku|string|GET|-|The sku generated from the code artifact meta information.|
|version|string|GET||The package version in the format: major.minor.patch - e.g. “2.5.3”.|
|short_description|string|GET, POST, PUT|marketing|The short description for the package.|
|long_description|string|GET, POST, PUT|marketing|The long description for the package.|
|release_notes|string|GET, POST, PUT|technical|The release notes for this package submission.|
|is_patch|boolean|GET, POST, PUT|technical|A flag to indicate the submission should follow the [expedited process for patch releases.](https://community.magento.com/t5/Magento-DevBlog/New-Expedited-Marketplace-Submission-Path/ba-p/77303)|
|requested_launch_date|DateTime|POST, PUT|marketing|The UTC date and time, in format YYYY-MM-DD HH:MM:SS when the package should be released to the store. If not supplied, it will be released to the store after all the checks have passed.|
|artifact|object|GET, POST, PUT|technical|This is the package code artifact (the TGZ file for Magento 1 or ZIP file for Magento 2) that can be referenced via a file upload id obtained from the Files API.|
|documentation_artifacts|object|GET, POST, PUT|technical, marketing|The user, installation and reference PDF manuals referenced via file upload ids obtained from the Files API.|
|shared_packages|array|GET, POST, PUT|technical|The list of artifact objects, each a Magento 2 shared package being referenced via file upload id obtained from the Files API. Listing it here implies that the seller is enabling  the ’access rights’ to these shared packages when a buyer purchases this submitted package.|
|categories|array|GET, POST, PUT|marketing|The list of categories expressed as a ‘path’ for this package. An example path can be ‘//Extension//Marketing//SEO/SEM’. Note the path separator is ‘//‘ which allows for a single slash like SEO/SEM in the path names. Valid list of categories can be seen at the [Marketplace Store](https://marketplace.magento.com).|
|media_artifacts|object|GET, POST, PUT|marketing|The sub-object that holds the package icon, gallery images and video urls referenced via their respective file upload ids obtained from the Files API.|
|prices|array|GET, POST, PUT|marketing|The list of prices in US Dollars set for this package by edition, and its respective installation price if any.|
|support_tiers|array|GET, POST, PUT|marketing|List of support tiers, each specifying the edition, the monthly period, descriptions and prices in US Dollars.|
|license_type|string|GET, POST, PUT|marketing|License type supported by this package - see list of valid license types in the ‘Additional Notes’ below.|
|custom_license_name|string|GET, POST, PUT|marketing|The name of the license if ‘license_type’ is set to ‘custom’.|
|custom_license_url|string|GET, POST, PUT|marketing|The url of the license if ‘license_type’ is set to ‘custom’.|
|external_services|object|GET, POST, PUT|marketing|The list of services (their name and url) that this extension integrates with if applicable.|
|browser_os_compatibility|object|GET, POST, PUT|marketing|The browser and its associated OS compatibilities this package supports - refer to ‘Object Details’ below.|
|options|object|GET, POST, PUT|marketing|A set of options this package supports - refer to ‘Object Details’ below.|
|submission_id|string|GET, PUT||A globally unique id assigned when a package submission is made via POST. All further references to this package via GET or PUT can be made supplying this identifier.|
|item_id|string|GET, POST, PUT||A developer defined unique id assigned to this package if available. If it is being supplied, it must be unique for every submission via POST.|
|action|object|POST, PUT||The action to be taken during a package submission via POST or PUT. Refer to ‘Object Details’ below.|
|eqp_status|object|GET||The current status of the package in the EQP pipeline - refer to ‘Object Details’ below.|
|offset|integer|GET||In combination with the ‘limit’ parameter, it can be used for paging the collection of packages - refer to the ’Fetching Package Details’ section below. Default value is 0.|
|limit|integer|GET||Along with offset, it can be used for paging the collection of packages. Default value is 20. Specifying -1 implies unlimited.|
|sort|string|GET||A comma-separated list of fields to sort the list, each field prefixed by ‘-‘ for descending order, or ‘+’ for ascending order - refer to the ‘Fetching Package Details’ section below.|



### Additional Notes

1. For required fields in a POST or PUT operations, refer to the ‘Package Submission’ section below.
2. The EQP Kind column indicates which part of the EQP pipeline will need to use or review the field values.
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


#### Object Details

{% collapsible JSON Structure%}

Listing the JSON structure of objects described above:

##### version_compatibility

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

##### artifact

```json
"artifact" : {
  "file_upload_id" : "dhsiXjdksW17623"
}
```

##### document_artifacts

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


##### media_artifacts


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

The **video_urls** above are optional.

##### prices

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

##### support_tiers

Up to 3 tiers per edition (CE, EE) can be supported:

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

##### browser_os_compatibility

Sample structure for a package supporting only chrome and firefox:

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

1. The list of valid values here are:
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

##### options

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


##### action

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


##### eqp_status

```json
"eqp_status" :  {
  "overall" : "in_progress",    
  "technical" : "draft",     
  "marketing" : "approved"

}
```

1. The **overall** value indicates where  in the EQP pipeline the package resides.
2. Additional details are provided in the two main EQP areas:
   2.1 **technical** - It provides the current technical status.
   2.2 **marketing** - It provides the current marketing status.

###### Overall Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The submission is in the draft state, not yet submitted to the EQP process.|
|in_progress|string|The submission is in the EQP pipeline - refer to the ‘technical’ and ‘marketing’ status to get more details.|
|approved|string|The submission has been approved and pending release to the store.|
|released_to_store|string|The submission is approved and currently live in store.|
|developer_removed_from_store|string|The developer has removed the package from the store.|
|admin_removed_from_store|string|EQP admin has removed the package from the store.|


###### Technical Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The package has not been submitted to the technical EQP pipeline.|
|in_automation|string|The package has been submitted to the technical side, going through some automated tests.|
|awaiting_manual_qa|string|The package has passed all the automated tests, and currently in the manual QA queue.|
|in_manual_qa|string|The package is currently undergoing manual QA.|
|approved|string|The package has passed all the technical tests.|
|rejected|string|The package has failed automation tests or manual QA.|
|recalled|string|The developer has recalled the package from the technical pipeline.|

###### Marketing Status

|Value|Type|Description|
|-----|----|-----------|
|draft|string|The package has not been submitted for marketing review.|
|awaiting_marketing_review|string|The package has been submitted to the marketing review queue.|
|in_marketing_review|string|The package is currently undergoing marketing review.|
|approved|string|The package has passed all the marketing review process.|
|rejected|string|The package has failed on the marketing review process.|
|recalled|string|The developer has recalled the package from the marketing review pipeline.|



{% endcollapsible %}


## Package Submissions

```
POST /rest/v1/product/packages
PUT  /rest/v1/product/packages
PUT  /rest/v1/products/packages/:submission_id
```

### New submissions

A new package submission can be done in either of the following ways:

1. A single POST call supplying all the required fields and explicitly indicating submit for technical and marketing review via the ‘action’ parameter.
2. A series of calls typically in the following order:
   1. A single POST call with minimum required fields with ‘action’ set to draft mode in either ’technical’, ‘marketing’ or both: 
      1. This accepts the new package and saves it on the Developer Portal end for further updates.
      2. It will return a unique **submission_id** for PUT operations. 
   2. One or more PUT calls with ‘action’ set to ‘draft’ in ‘technical’, ‘marketing’ or both.
   3. A last PUT call indicating submit for ‘technical’, ‘marketing’ or both.

There might be other variations, but essentially the ‘technical’ (automated EQP tests) and ‘marketing’ (

During the PUT calls in draft mode, one or more parameters can be update with no checks on required parameters.  

When the ‘action’ is set to publish, it will do the validation to ensure all the required parameters are available on the Developer Portal end to initiate the EQP process.



<div class="bs-callout bs-callout-info" markdown="1">
* All the action fields are optional, so if not supplied, the ‘draft’ value for their respective key is assumed.
* During POST or PUT, if an ‘action’ parameter is not supplied it is assumed to be in ‘draft’ mode - i.e. save the parameter values supplied in the payload.
</div>


Here is a POST request payload example with all the required parameters and ready for both technical and marketing submission:

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

As both POST and PUT can take batch requests, a single submission above should be still be sent as an array with one item.

Assuming the aforesaid payload is saved in some file, `/tmp/one-click-submission-1.0.0.json`, the following curl illustrates the package submission process:

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
* The API returns a HTTP 200 batch response listing items in the same order as it was provided in the request.
* Each item has a ‘code’ and ‘message indicating if was successful or not:
   * Any non-200 code implies an error with the message providing more details on the error.
* A unique **submission_id** is returned for each successful item which must be used for any GET, PUT or DELETE methods.
* Any non-200 HTTP response code indicates an error for the entire batch request.
* The other fields should be self-explanatory.
</div>

### Updating Package Submissions

The PUT method can be used to update packages in the following states:

* The package is in draft mode in either technical or marketing, or both.
* The package has been rejected in either technical or marketing, or both:
   * This allows for fixes to the issues identified.
* The package is released in store, and it can be removed by the developer.
* The package was removed from the store by the developer, and it can be re-published.
* The package can be recalled while in the EQP pipeline.
* After released in store, only marketing information can be updated which will put it in the marketing review:
   * The package will continue to be live in store, and after the marketing approval, the updated fields will be published to the store.

Other than recall, a package cannot be modified during the EQP process. 

Doing updates on several packages via a batch request is very similar to the POST version above. The only difference is to supply **submission_id** for each item obtained from the POST call.

The PUT method also allows for updating a single package via submission_id as shown in the curl example below:

**Request**

```shell
curl -X PUT \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: application/json” \
     -d { “action” : { “overall” : “publish”} } \
     https://developer-api.magento.com/rest/v1/products/packages/f4eacd72be
```

The HTTP response code will indicate success or failure.

### Required Parameters for submission.

If the **action** parameter indicates ‘submit’ value for technical, or marketing or both, the required parameters are listed below by their respective parallel EQP pipelines:

#### Technical

|Parameter|Comments|
----------|--------|
|type||
|platform||
|version_compatibilty||
|release_notes||
|artifact||
|documentation_artifacts|At least the ‘user’ guide must be supplied.|

#### Marketing
|Parameter|Comments|
|---------|---------|
|name||
|short_description||
|long_description||
|documentation_artifacts||
|categories||
|media_artifacts|The icon, and at least one image in the gallery is required. The video urls are optional.|
|license_type||
|custom_license_name|Only if license_type is ‘custom’.|
|custom_license_url|Only if license_type is ‘custom’.|
|submission_id|For PUT commands.|




## Fetching Package Details

## Removing Packages
