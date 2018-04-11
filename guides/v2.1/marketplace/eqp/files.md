---
layout: default
group: marketplace-api
title: Files
version: 2.1
github_link: marketplace/eqp/files.md
---

The files endpoint provides a mechanism to manage code artifacts, and assets associated with a package. Examples of such artifacts, and assets are:

* Magento 1 tarball (tgz), or Magento 2 ZIP files
* Company logo image files
* Product Icons
* Product image files needed for the gallery
* PDF documents for user and installation guides, and reference manuals


Before a package is setup for submission, all its associated files must be uploaded first, then its corresponding *upload ids* must be noted from the response, and
later included in their respective package submission API request payloads. This way, the association is set up between a package and its files as described above.

All uploaded files are inspected for malware detection, and given a file upload id, its malware status can be determined. A package submission will only be accepted if
all its associated files have passed the malware checks.

## File Uploads

~~~~~~
POST /rest/v1/files/uploads
GET /rest/v1/files/uploads/:file_upload_id
DELETE /rest/v1/files/uploads/:file_upload_id
~~~~~~

The aforesaid APIs’ provide the ability to upload, retrieve the status, and remove files.

### POST /rest/v1/files/uploads

Bulk upload of files is possible via **multipart/form-data** type. With this approach, binary files can be uploaded without the need for additional encoding which can result
in increasing overall upload side.

A sample request body of mime type, [multipart/form-data](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2) with a boundary string of ’----------287032381131322’
is shown below:

{% highlight shell %}
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
{% endhighlight %}

Notes:

1. Each part has a header and body with Content-Disposition header always set to ‘form-data’. 
2. The ‘name’ value must be set to ‘file[]’ for all the parts.
3. The original filename must be supplied in the ‘filename’ parameter.
4. The ‘Content-Type’ header must be set to the appropriate mime-type for the given file.
5. The body of each part is the full contents of the raw file.

For illustration purposes, if the above request body is saved in a temporary file at ‘/tmp/files-payload’, here is a curl example with request and response:

**Request**

{% highlight shell %}
curl -H 'Authorization: Bearer baGXoStRuR9VCDFQGZNzgNqbqu5WUwlr.cAxZJ9m22Le7' \
     -H "Content-Type: multipart/form-data; boundary=----------287032381131322" \ 
     --data-binary  @/tmp/files-payload \
     https://developer-api.magento.com/rest/v1/files/uploads  
{% endhighlight %}

**Response**

{% highlight json %}
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
{% endhighlight %}

Notes:

1. The response is the list of files in the same order sent during the upload request.

2. Each record in the list has the following fields:

|Field|Type|Description|
|-----|----|-----------|
|filename|string|The name of the file sent in the request|
|content-type|string|The mime-type of the uploaded file|
|size|integer|The size of the file in bytes|
|file_upload_id|string|A unique identifier for the file|

The ‘file_upload_id’ must be tracked for subsequent package submission APIs.


