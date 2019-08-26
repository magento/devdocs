---
group: release-notes
title: Magento Shipping Release Notes
---
*Code and release notes updated on May 2, 2018.*

The release information in this section describes changes to the Magento Shipping extension bundled with Magento 2.2.2.  Fixes and enhancements are listed by availability date.

See the [Magento Commerce 2.2.2 Release Notes]({{ page.baseurl }}/release-notes/ReleaseNotes2.2.2CE.html) and [Magento Commerce 2.2.4 Release Notes]({{ page.baseurl }}/release-notes/ReleaseNotes2.2.4CE.html) for a comprehensive discussion of 2.2.2 and 2.2.4 fixes and enhancements.

## Changes effective September 18, 2018 (Magento 2.2.6)

Here are the enhancements available as of September 18, 2018:

### Enhancements

* The **Click & Collect** feature offers merchants the ability to:

	* Provide Click & Collect as a shipping option to customers, enabling them to directly collect shipments from designated source locations/stores

	* Configure source locations available for Click & Collect pick-ups

Consumers can also select Click & Collect locations during check-out. This feature is supported by workflows and notifications for Click & Collect pick up, packing, and collection.

* **Batch Processing** provides merchants with the ability to

	* Process multiple orders in one batch

	* Specify and modify packages, experiences, and add-ons for orders assigned to a batch

	* Book shipments for a batch

	* Generate documentation for individual shipments as well as all shipments within a batch

## Changes effective May 2, 2018 (Magento 2.2.4)

Here are the enhancements and  fixes available as of May 2, 2018:

### Enhancements

* Provided validation to prevent merchants from indicating that the  package maximum weight greater that the actual package being shipped.

* Added international fields to shipment details.

* Added  tool-tips to inform users about the Locations, Carriers and Packages pages.

* Truncated long carrier nickname on Shipping Partners page.

* Improved appearance of  navigation buttons on carrier connection page.

* Provided ad-hoc Return labels with return shipment tracking. This features builds on `Magento_Rma`.

### Fixes

Resolution of the following issues:

* Incompatibility with Internet Explorer 11.x.

* Magento checkout price not respecting set currency in Portal.

* Currency conversion issues.

* Duplicated navigation menu during carrier connection.

## Changes effective January 22, 2018

Here are the enhancements and fixes available as of January 22, 2018:

### Enhancements

* Added a tutorial for activating Magento Shipping.

* Redesigned the Shipping Experience Rules page so that it displays the rule execution sequence.

* Added alphanumeric validation to the Huxloe Hermes carrier tab. (Huxloe Hermes)

* Improved the functionality of the label converter. (Huxloe Hermes)

* Improved the error messages for the PickUpAvailability endpoint. (FedEx)

* Improved the general quality of all error messages. (UPS)

* Improved the validation of customer API keys during configuration.  (UK Mail)

### Fixes

The fixes described here are categorized by shipping carrier.

#### Australia Post

* Fixed an issue with the error thrown if Export Category is **commercial** when the shipment isn't dutiable. Previously, the error thrown did not correctly address the issue.

#### FedEx

* Changed the default signature option to DIRECT for all services.

#### UPS

* Resolved a UI issue with validation so that users do not need to enter State or Province when connecting to UPS with a United Kingdom  address.

#### DHL Express

* Updated the pickup error response from DHL. Previously, this response was inaccurate.

* Updated the `getCompanyName` and `getOrganisationName` validation functions to check only for company name and organization name respectively.

* Updated the validation process for company name and organization name used on the DHL Express Connect page.

* Updated the currency fields in the `cn23` template for customs declaration forms to match other documents and labels.

* Changed the default display of the `quantityUnit` field. The default value is now zero, and this field is left blank.

#### Huxloe Hermes

* Increased the duration of the response timeout from 10 to 20 seconds.

* Fixed lint program.

* Improved the functionality of the label converter.

* Upgraded to local time zones for booking, pickup, and tracking times.

## Changes effective January 5, 2018

Here are the enhancements and fixes available as of January 5, 2018:

### Enhancements

* Added automated billing subscription redirection for billing

* Improved error handling for Australia Post

### Fixes

#### Billing
* Fixed issue with billing metric calculations and capture

#### Tracking

* Fixed issue with tracking capture and display

#### Portal

* Fixed issue with redirection on log-out

* Fixed issue that prevented the consistent saving of qualification rules

#### Australia Post

* Corrected incorrect service names

#### UK Mail

* Removed restrictions on mandatory county information

#### FedEx
* Removed unsupported freight services from list of available services

* Changed orientation of labels from landscape to portrait

* Corrected MPS handling in completion

* Implemented sensible defaults for FedEx

#### Configuration

* Set FedEx  to 'Upcoming' carrier.

#### USPS

* Updated label size to A6 default in PNG.

