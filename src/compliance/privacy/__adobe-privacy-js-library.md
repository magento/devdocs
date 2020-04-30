---
group: compliance
title: Adobe Privacy JavaScript Library
---

<!-- TODO: Rename this topic without the `__` prefix to publish it when the library integration is ready -->

The [Adobe Privacy JavaScript Library][] is a set of tools to help create a process for accessing and deleting private data.

Magento and Adobe's data tracking services can store private information applicable to privacy regulations such as the [General Data Protection Regulation (GDPR)][] and [California Consumer Privacy Act (CCPA)][].
This library provides a unified set of functions for creating privacy-data requests, sending them to each product's implementations, and gathering the responses.
Use this library to retrieve and remove the data stored in the browser by these data tracking services.

## Installation

Use one of the following methods to download the library file:

-  npm: `npm install @adobe/adobe-privacy`
-  GitHub: <https://github.com/Adobe-Marketing-Cloud/adobe-privacy>

After you have the file, you will need to add it to a custom module or theme installed in your Magento instance.
Follow the instructions described in the [Use custom JavaScript][] topic to accomplish this task.

## Usage

The AdobePrivacy JS Library provides various functions to manage identity data stored in the browser.

`retrieveIdentities()`
: Returns an array of identities from a service along with an array of identities not found in the service

`removeIdentities()`
: Removes identities from the browser and returns an array of identity objects with a `isDeleteClientSide` boolean property to indicate whether the data has been deleted.

`retrieveThenRemoveIdentities()`
: This function is similar to `removeIdentities()` in that it retrieves an array of identities and removes them from the browser.

For more information and examples for using these functions, see the [official library documentation][Adobe Privacy JavaScript Library].

### Initialization

Instantiate a new `AdobePrivacy` object to use the AdobePrivacy JS Library in your implementation code.

```js
var adobePrivacy = new AdobePrivacy({});
```

The constructor accepts a configuration object with parameters during instantiation.
Refer to the [official library documentation][Adobe Privacy JavaScript Library] for a list of these configuration parameters.

[Adobe Privacy JavaScript Library]: https://www.adobe.io/apis/experienceplatform/gdpr/services/allservices.html#!api-specification/markdown/narrative/gdpr/use-cases/adobe-privacy-library.md

[General Data Protection Regulation (GDPR)]: <{{ site.baseurl }}/compliance/privacy/gdpr.html>
[California Consumer Privacy Act (CCPA)]: <{{ site.baseurl }}/compliance/privacy/ccpa.html>
[Use custom JavaScript]: <{{ site.baseurl }}/guides/v2.3/javascript-dev-guide/javascript/custom_js.html>
