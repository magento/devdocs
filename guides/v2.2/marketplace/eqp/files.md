---
group: marketplace-api
title: Files
---

Use `files` resources to manage all code artifacts and assets associated with an extension or a theme:

* Magento 1 tarball (.tgz)
* Magento 2 ZIP files
* Image files for logos and galleries
* Product Icons
* PDF documents for User Guides, Installation Guides, and Reference Guides

Each file upload receives a unique ID. You must associate these IDs with your submission later using the [packages API]({{ page.baseurl }}/marketplace/eqp/packages.html).

You can associate a file with multiple products. This allows for asset sharing across different packages. For example, you can share an image file for a gallery with different packages by associating it with the same file upload ID.

All files that you upload are inspected for malware. We only accept packages if all of its associated files have passed the malware inspection.

## File uploads

Use this API to upload files, retrieve file upload status, and remove files.

```
GET /rest/v1/files/uploads/:file_upload_id
POST /rest/v1/files/uploads
DELETE /rest/v1/files/uploads/:file_upload_id
```

### Get a file upload

Use the upload ID to retrieve details about a file upload.

```
GET /rest/v1/files/uploads/:file_upload_id
```

**Request**

```shell
curl -X GET \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/files/uploads/dhsiXjdksW17623
```

**Response**

```json
{
    "file_upload_id" : "dhsiXjdksW17623",
    "filename" : “acme_one-click-checkout.zip”,
    "content_type" : "application/zip",
    "size" : 182934,
    "malware_status" : "pass’,
    “file_hash” : “f53f5db985b8815f1ce6fd4b48a0439a”,
    “submission_ids” : [
    ],
    “is_profile_image” : false
}
```

Details on the response fields:

|Field|Type|Description|
|-----|----|-----------|
|filename|string|The name of the file sent in the request.|
|content-type|string|The mime-type of the uploaded file.|
|size|integer|The size of the file in bytes.|
|malware_status|string|Indicates the malware check result for this file. Valid values include `pass`, `fail`, and, `in-progress`.|
|file_hash|string|Hash of the file; currently using md5.|
|submission_ids|array|The list of package submissions associated with this file.|
{:.style="table-layout: auto;"}

### Upload files

You upload files in bulk upload using the **multipart/form-data** encoding type. With this approach, binary files can be uploaded without the need for additional encoding, which can result in an increase in overall upload size.

```
POST /rest/v1/files/uploads
```

A sample request body of mime type, [multipart/form-data](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2) with a boundary string of `----------287032381131322`
is shown below:

```shell
------------287032381131322
Content-Disposition: form-data; name="file[]"; filename=“acme_one-click-checkout.zip"
Content-Type: application/zip

<zip file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename=“one-click-icon.png"
Content-Type: image/png

<image file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename=“acme-logo.png"
Content-Type: image/png

<image file content here.....>

------------287032381131322
Content-Disposition: form-data; name="file[]"; filename="user.pdf"
Content-Type: application/pdf

<pdf file content here....>

------------287032381131322--
```

* Each part has a header and body with `Content-Disposition` header always set to `form-data`.
* The `name` value must be set to `file[]` for all parts.
* The original filename must be supplied in the `filename` parameter.
* The `Content-Type` header must be set to the appropriate mime-type for the file.
* The body of each part is the full contents of the raw file.

For example, if you save the previous request body is saved to a temporary file at `/tmp/files-payload`, you can use it in your POST request to upload the file:

**Request**

```shell
curl -X POST \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: multipart/form-data; boundary=----------287032381131322" \
     --data-binary  @/tmp/files-payload \
     https://developer-api.magento.com/rest/v1/files/uploads
```

**Response**

```json
[
  {
    "filename" : “acme_one-click-checkout.zip”,
    "content_type" : "application/zip",
    "size" : 182934,
    "file_upload_id" : “dhsiXjdksW17623”
  },

  {
    "filename" : “one-click-icon.png”,
    "content_type" : "image/png",
    "size" : 37492,
    "file_upload_id" : “gAdh628bzXv”
  },

  {
    "filename" : “acme-logo.png”,
    "content_type" : "image/png",
    "size" : 6825,
    "file_upload_id" : “fur7284XcgdcV”
  },

  {
    "filename" : “user.pdf”,
    "content_type" : "application/pdf",
    "size" : 48392,
    "file_upload_id" : “j47dVbsFgkl”
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
{:.style="table-layout: auto;"}

The `file_upload_id` must be tracked for subsequent package submission APIs.

### Delete an uploaded file

You can only dissociate files from packages that have not been published on the Magento Marketplace. Removing a file without the optional `submission_ids` parameter disassociates it from all linked packages. If no packages are associated with a file, it will be removed.

```
DELETE /rest/v1/files/uploads/:file_upload_id
```

Available parameters:

|Parameter|Type|Required|Description|
|---------|----|--------|-----------|
|submission_ids|array|no|A list of submission IDs to disassociate the file from the specified package.|
{:.style="table-layout: auto;"}

**Request**

```shell
curl -X DELETE \
     -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     https://developer-api.magento.com/rest/v1/files/uploads/fur7284XcgdcV
```

**Response**

```json
[
  {
      “submission_id” : “ad6834ffec”,
      “code” : 200,
      “message” : “Success”
  },

  {
      “submission_id” : “3684dafecb”,
      “code” : 200,
      “message” : “Success”
  },

  {
      “submission_id” : “7ffcdea458”,
      “code” : 1500
      “message” : “Package live in store”
  }
]
```

* The API returns a batch response for each item, which includes a `code` and `message`.
* A 200 OK HTTP response code indicates a successful upload.
* Any non-200 HTTP response code indicates an error.
* If no packages are associated with a file, the API returns an empty list and the file is removed.
