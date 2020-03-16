---
group: admin-pattern-library
title: Use Default Config
---
In the [Magento Admin](https://glossary.magento.com/magento-admin) some textfields can inherit default values (which have been set in config by the Merchant). A user has the ability to overwrite these default values at the page level. The "Use Default Value" or "Use Configuration Value" controls allow the user to revert an overwritten textfield value to the original default value.

## When to Use

To be used when a text field inherits its value by default.  It can be overridden by the user.   If the user has overridden the default value this control provides a convenient method to recover the original inherited value.

## When Not to Use

When the value of a textfield does not have a default value set.

## Behavior

![](img/defaultconfig_behavior.jpg)

## Style

![](img/defaultconfig_style.jpg)

## Variations

There are two variations. The behavior and style remains the same. The label is changed to identify the origin of this value.

### "Use Default Value"

Value is taken from default scope and user needs to switch to default scope to change the default value

![](img/variation1.jpg)

### "Use Configuration Value"

Value is set in Stores > Store configuration and user has to go there to change the default.

![](img/variation2.jpg)

## Accessibility

User should be able to access this control via their keyboard and it should be legible if the user use voice navigation. Follow this accessibility guideline: [http://www.w3.org/TR/WCAG10-HTML-TECHS/#link](http://www.w3.org/TR/WCAG10-HTML-TECHS/#link)

## Assets

[Download Default Config PSD source]({{ site.downloads }}/defaultconfig.psd).
