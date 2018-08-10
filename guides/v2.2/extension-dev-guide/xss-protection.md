---
group: extension-dev-guide
subgroup: Security
title: XSS prevention strategies
menu_title: XSS prevention strategies
menu_order: 1100
version: 2.2
---

### Overview

[Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting){:target="_blank"}, or XSS, is a security vulnerability that can be found in web applications. This vulnerability allows attackers to inject malicious code into a web page viewed by users. Magento {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} developers should be aware of these vulnerabilities to avoid introducing them in their code.

There are mainly three types of XSS vulnerabilities:

* **Persisted XSS** - In this type of vulnerability, the source of unvalidated data comes from the Database or {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}Backend{% endglossarytooltip %} permanent store.
* **Reflected (non-persistent) XSS** - This type of vulnerability occurs when data provided by a web client is used immediately by server-side scripts to parse and display a page to a user without properly sanitizing the request.
* **DOM XSS** - For this vulnerability, the malicious data does not touch the web server. Rather, it is being reflected by the {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} code, fully on the client side.

### Preventing XSS

XSS vulnerabilities can be prevented by always validating and sanitizing both user input and output, i.e., user input should never be trusted. Both the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} language and Magento provides classes and functions to help secure your extension from XSS vulnerabilities.

#### Input Processing

Any data you receive from an external source needs to be validated and sanitized to prevent the storage or execution of malicious code. Input data needs to be validated such that it is within the accepted possible values for that data item. This can vary depending on what that data is used for, but certain field validations can be applied almost universally such as checking for control characters.

#### Output Processing

Output processing involves sanitizing strings that may have come from external data sources before sending it to the browser to be rendered with templates. It is the main method of protecting your extension from XSS attacks.

For more information, see the article on [templates XSS security]({{ page.baseurl }}/frontend-dev-guide/templates/template-security.html){:target="_blank"}.

### Using the Escaper classes

Magento provides the [Escaper](https://github.com/magento/magento2/blob/2.2/lib/internal/Magento/Framework/Escaper.php){:target="_blank"} class for escaping {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} output. This class contains the following useful functions:

* `escapeHtml()` - Used for escaping string inside HTML content.
* `escapeHtmlAttr()` - Used for escaping strings in HTML tag attributes.
* `escapeCss()` - Used for escaping strings inside a {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} context.
* `escapeJs()` - Used for escaping strings inside a JavaScript context.
* `escapeUrl()` - Used for escaping strings that will be used in a {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}.

### Related Topics

* [Templates XSS security]({{ page.baseurl }}/frontend-dev-guide/templates/template-security.html){:target="_blank"}
