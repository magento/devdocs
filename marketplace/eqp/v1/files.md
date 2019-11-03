---
group: marketplace-api
title: Files
---

Use `files` resources to manage all code artifacts and assets associated with an extension or a theme:

-  Magento 1 tarball (.tgz)
-  Magento 2 ZIP files
-  Image files for logos and galleries
-  Product Icons
-  PDF documents for User Guides, Installation Guides, and Reference Guides

Each file upload receives a unique ID. You must associate these IDs with your submission later using the [packages API](packages.html).

You can associate a file with multiple products. This allows for asset sharing across different packages.
For example, you can share an image file for a gallery with different packages by associating it with the same file upload ID.

All files that you upload are inspected for malware.
We only accept packages for further review if all associated files have passed the malware inspection.

## File uploads

Use this API to upload files, retrieve file upload status, and remove files.

```http
GET /rest/v1/files/uploads/:file_upload_id
POST /rest/v1/files/uploads
```

### Get a file upload

Use the upload ID to retrieve details about a file upload.

```http
GET /rest/v1/files/uploads/:file_upload_id
```

**Parameters**

|Field|Type|Description|
|-----|----|-----------|
|file_upload_id|URL element|The `file_upload_id` string that was returned when uploading or listing the file.|
|offset|int|The `file_upload_id` string that was returned when uploading or listing the file.|
|limit|int|The `file_upload_id` string that was returned when uploading or listing the file.|

Sorting and filtering parameters are currently not available for this endpoint.

If the `file_upload_id` parameter is specified, a single file record will be returned.
If it is omitted, then a batch response will be returned: an array of records for all files uploaded by the current user.

**Request**

```bash
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/files/uploads/dhsiXjdksW17623
```

**Response**

```json
{
    "file_upload_id" : "dhsiXjdksW17623",
    "filename" : "acme_one-click-checkout.zip",
    "content_type" : "application/zip",
    "size" : 182934,
    "malware_status" : "pass",
    "file_hash" : "f53f5db985b8815f1ce6fd4b48a0439a",
    "submission_ids" : [
    ],
    "is_profile_image" : false,
    "url" : "https://static-mp.magento.com/user/45/23/<hash of mag12345>/pub/1c/ee/<full file_hash>/icon.png"
}
```

Response field details:

|Field|Type|Description|
|-----|----|-----------|
|file_upload_id|string|Unique identifier for the file|
|filename|string|The name of the file sent in the request.|
|content_type|string|The mime-type for which the file was uploaded.|
|size|integer|The size of the file in bytes.|
|malware_status|string|Malware check result for this file. Valid values include: `pass`, `fail`, `in-progress`.|
|file_hash|string|Hash of the file; currently md5. Only set if malware_status is `pass`.|
|url|string|The URL from which the file may be downloaded, if applicable.|
|submission_ids|array|The list of package submissions associated with this file, if any.|

The order of fields may differ, and additional fields may also be returned.

### Upload files

Upload files in bulk using the **multipart/form-data** encoding type.
With this approach, binary files can be uploaded without the need for additional encoding, which could otherwise result in an increase in overall upload size.

```http
POST /rest/v1/files/uploads
```

A sample request body of mime type, [multipart/form-data](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2)
with a boundary string of `----------287032381131322` is shown below:

```text
------------287032381131322
Content-Disposition: form-data; name="file[]"; filename="acme_one-click-checkout.zip"
Content-Type: application/zip

<zip file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename="one-click-icon.png"
Content-Type: image/png

<image file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename="acme-logo.png"
Content-Type: image/png

<image file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename="user.pdf"
Content-Type: application/pdf

<pdf file content here....>

------------287032381131322--
```

-  Each part has a header and body.
-  The body of each part is the full contents of the raw file.
-  The header has the following required elements:

|Element|Type|Description|
|-----|--------|-----------|
|Content-Disposition|string|MUST be `form-data`|
|name|string|MUST be `file[]` for all parts.|
|filename|string|Should be the original name of the file.|
|Content-Type|string|Should be the correct mime-type for the file.|

**Request**

If the request body given above was saved into a temporary file at `/tmp/files-payload`,
you may use it in your POST request to upload the files:

```bash
curl -X POST \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: multipart/form-data; boundary=----------287032381131322" \
     --data-binary  @/tmp/files-payload \
     https://developer-api.magento.com/rest/v1/files/uploads
```

**Response**

The above request gives an output similar to:

```json
[
  {
    "filename" : "acme_one-click-checkout.zip",
    "content_type" : "application/zip",
    "size" : 182934,
    "file_upload_id" : "dhsiXjdksW17623"
  },

  {
    "filename" : "one-click-icon.png",
    "content_type" : "image/png",
    "size" : 37492,
    "file_upload_id" : "gAdh628bzXv"
  },

  {
    "filename" : "acme-logo.png",
    "content_type" : "image/png",
    "size" : 6825,
    "file_upload_id" : "fur7284XcgdcV"
  },

  {
    "filename" : "user.pdf",
    "content_type" : "application/pdf",
    "size" : 48392,
    "file_upload_id" : "j47dVbsFgkl"
  }
]
```

{: .bs-callout-info }
The response is the list of files in the same order sent during the upload request.

Each record in the list has the following fields:

|Field|Type|Description|
|-----|----|-----------|
|filename|string|The name of the file sent in the request.|
|content-type|string|The mime-type of the uploaded file.|
|size|integer|The size of the file in bytes.|
|file_upload_id|string|A unique identifier for the file.|

The `file_upload_id` must be tracked for subsequent package submission APIs.
