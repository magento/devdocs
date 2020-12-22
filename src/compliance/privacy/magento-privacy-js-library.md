---
group: compliance
title: Magento Privacy JavaScript Library
---

<!-- TODO: Unpublish this topic and create a topic redirect to the adobe privacy js topic when the adobe privacy library is integrated with Magento -->

The Magento Privacy JavaScript Library is a set of tools to help create a process for accessing and deleting private data collected by Magento.

Magento's data tracking services can store private information applicable to privacy regulations such as the [General Data Protection Regulation (GDPR)][] and [California Consumer Privacy Act (CCPA)][].
This library provides a set of functions for creating privacy-data requests and gathering their responses.
Use this library to retrieve and remove the data stored in the browser by Magento's data tracking services.

{:.bs-callout-info}
If [Cookie Restriction Mode](https://docs.magento.com/m2/ce/user_guide/stores/compliance-cookie-restriction-mode.html) is enabled, Magento does not collect behavioral data until the shopper consents. If Cookie Restriction Mode is disabled, Magento collects behavioral data by default.

## Installation

The Magento Privacy JavaScript Library is available at the following CDN location: `commerce.adobe.net/magentoprivacy.js`

After you have the file, you will need to add it to a custom module or theme installed in your Magento instance.
Follow the instructions described in the [Use custom JavaScript][] topic to accomplish this task.

### Initialization

Import and instantiate a new `MagentoPrivacy` object or use the `window` object to access the Magento Privacy JavaScript functions.

Example using `import`:

```js
import MagentoPrivacy from "./MagentoPrivacy"

const magePriv = new MagentoPrivacy()
```

Example using `window`:

```js
const magePriv = new window.MagentoPrivacy()
```

## Usage

The Magento Privacy JS Library provides various functions to manage identity data stored in the browser.

`retrieveIdentity()`
: Returns a JavaScript promise for an identity object from a service in the browser.

  ```js
  magePriv.retrieveIdentity().then((ids)=>console.log(ids))
  // {"value":"1ccfd8c2-5159-433c-98d7-e937ce3b13f3"}
  ```

`removeIdentity()`
: Removes the identity data from a service in the browser.
  This function returns a JavaScript promise for an identity object with an `isDeleted` boolean property to indicate whether the data has been deleted.

  ```js
  magePriv.removeIdentity().then((ids)=>console.log(ids))
  // {"value":"1ccfd8c2-5159-433c-98d7-e937ce3b13f3","isDeleted":true}
  ```

[General Data Protection Regulation (GDPR)]: <{{ site.baseurl }}/compliance/privacy/gdpr.html>
[California Consumer Privacy Act (CCPA)]: <{{ site.baseurl }}/compliance/privacy/ccpa.html>
[Use custom JavaScript]: <{{ site.baseurl }}/guides/v2.3/javascript-dev-guide/javascript/custom_js.html>
