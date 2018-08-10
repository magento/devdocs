---
group: pattern
title: Image Uploader
version: 2.1
---
The Image uploader provides the ability for users to upload a single image, or group of images, to the application, most commonly images associated with Products (during the Product Creation process). These images may serve as thumbnail images, detailed Product images, images to within a product gallery, etc.

## When to Use

When it is desirable to allow users to upload a single image or multiple images for display within the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} or on the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}Storefront{% endglossarytooltip %}.

## When Not to Use

This pattern should be used specifically to upload images, and not to upload documents such as PDFs, WordDocs, Spreadsheets, etc. Please refer to the "File Upload" pattern.

## Variations

1. Upload Single Image
2. Upload Multiple Images
3. Upload Video Content

## Behavior

**Uploading via Browser**

The Image Uploader allows the user to browse for images to upload to the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} application. This can accommodate single or multiple image upload. To initiate this behavior the user clicking on the "Upload Image" link (target area). The user then proceeds to select the desired images via the browser, using SHIFT + click or ALT/COMMAND + click to select multiple image files.

![](img/image-uploader-browse.jpg)

**Uploading via Drag and Drop**

The user may also upload images (single or multiple) by dragging the desired images onto the Image Upload target area.

![](img/image-uploader-drag.jpg)

**Uploading Video Content**

To upload a video to the Magento Admin application the user taps the "Add Video" button.

![](img/image-uploader-video-button.jpg)

![](img/image-uploader-video-uploaded.jpg.jpg)

A video settings panel is revealed that allows the user to provide the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} location of the video, write a description and upload a preview image for the video. The user taps the "Save" button to upload the information.

![](img/image-uploader-video-panel.jpg)

Once the video information is saved, the video settings panel closes and the user is returned to the image uploader (section) where the video preview image now appear.

![](img/image-uploader-video-panel.jpg)

NOTE: Currently Magento 2 does not allow Drag and Drop for Video Content.

**Drag to Arrange Order**

The order in which images are displayed can be arranged by dragging the image or video to the desired position.
![](img/image-uploader-arrange.jpg">

**Image Settings**

In some areas of the Magento Admin application uploaded images my have additional settings that effect the display of these images on the Storefront (e.g. Product Creation). These settings can be accessed via the "gear" icon found on the image thumbnail.

![](img/image-uploader-settings.jpg)

**Deleting an Image**

Likewise, an image may be removed from the Magento Admin application by tapping the "trashcan" icon.

![](img/image-uploader-delete.jpg)

## Dimensions

![](img/multi-image-uploader-style.jpg)

## Accessibility

To initiate the uploader, the buttons should follow button accessibility guidelines: [http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-graphical-buttons](http://www.w3.org/TR/WCAG10-HTML-TECHS/#forms-graphical-buttons)

In the browser upload window, standard behavior should be kept.

## Assets

[Download Image Uploader PSD source](src/Image_Video_Uploader.psd).
