---
layout: default
group: mftf
title: Actions in the Magento Functional Testing Framework cests
github_link: magento-functional-testing-framework/actions.md
---

This topic contains a reference list of available action type tags available in the MFTF cests.

## Overview

## Principles

## Example

## Available actions

### acceptPopup

[See acceptPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#acceptPopup){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|optional|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnPage

[See amOnPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnPage){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnSubdomain

[See amOnSubdomain docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnSubdomain){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnUrl

[See amOnUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#amOnUrl){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### appendField

[See appendField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#appendField){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### attachFile

[See attachFile docs on codeception.com](http://codeception.com/docs/modules/WebDriver#attachFile){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### cancelPopup

[See cancelPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#cancelPopup){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### checkOption

[See checkOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#checkOption){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### click

[See click docs on codeception.com](http://codeception.com/docs/modules/WebDriver#click){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### clickWithLeftButton

[See clickWithLeftButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithLeftButton){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
x|xs:string|optional|
y|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### clickWithRightButton

[See clickWithRightButton docs on codeception.com](http://codeception.com/docs/modules/WebDriver#clickWithRightButton){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
x|xs:string|optional|
y|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### closeAdminNotification

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### closeTab

[See closeTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#closeTab){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### conditionalClick

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
dependentSelector|xs:string|optional|
visible|xs:boolean|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### createData

Attribute|Type|Use|Default
---|---|---|---
entity|string|required|	
mergeKey|string|required	
remove| boolean|optional|false
before|string|optional|	
after|string|optional|	
storeCode|string|optional|

It can contain one or more child elements `required-entity` optionally.

#### required-entity

Attribute|Type|Use|Default
---|---|---|---
createDataKey|string|required|	
remove|boolean|optional|false
before|string|optional|
after|string|optional|

### deleteData

Attribute|Type|Use|Default
---|---|---|---
createDataKey|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|
storeCode|xs:string|optional|

### dontSee

[See dontSee docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSee){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
selector|xs:string|optional|
selectorArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCheckboxIsChecked

[See dontSeeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCheckboxIsChecked){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCookie

[See dontSeeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCookie){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCurrentUrlEquals

[See dontSeeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlEquals){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCurrentUrlMatches

[See dontSeeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeCurrentUrlMatches){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeElement

[See dontSeeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElement){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeElementInDOM

[See dontSeeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeElementInDOM){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
attributeArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInCurrentUrl

[See dontSeeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInCurrentUrl){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInField

[See dontSeeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInField){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInFormFields

[See dontSeeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInFormFields){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInPageSource

[See dontSeeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInPageSource){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInSource

[See dontSeeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInSource){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInTitle

[See dontSeeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeInTitle){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeJsError

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeLink

[See dontSeeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeLink){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeOptionIsSelected

[See dontSeeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dontSeeOptionIsSelected){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### doubleClick

[See doubleClick docs on codeception.com](http://codeception.com/docs/modules/WebDriver#doubleClick){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dragAndDrop

[See dragAndDrop docs on codeception.com](http://codeception.com/docs/modules/WebDriver#dragAndDrop){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector1|xs:string|optional|
selector2|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### executeInSelenium

[See executeInSelenium docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeInSelenium){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### executeJS

[See executeJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#executeJS){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### fillField

[See fillField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#fillField){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### formatMoney

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
locale|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabAttributeFrom

[See grabAttributeFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabAttributeFrom){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
returnVariable|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabCookie

[See grabCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabCookie){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
parameterArray|xs:string|optional|
returnVariable|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabFromCurrentUrl

[See grabFromCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabFromCurrentUrl){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
returnVariable|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabMultiple

[See grabMultiple docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabMultiple){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
returnVariable|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabPageSource

[See grabPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabPageSource){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
returnVariable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabTextFrom

[See grabTextFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabTextFrom){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
returnVariable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabValueFrom

[See grabValueFrom docs on codeception.com](http://codeception.com/docs/modules/WebDriver#grabValueFrom){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
returnVariable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### loadSessionSnapshot

[See loadSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#loadSessionSnapshot){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
returnVariable|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### loginAsAdmin

Attribute|Type|Use|Default
---|---|---|---
username|xs:string|optional|
password|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### makeScreenshot

[See makeScreenshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#makeScreenshot){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### maximizeWindow

[See maximizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#maximizeWindow){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveBack

[See moveBack docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveBack){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveForward

[See moveForward docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveForward){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveMouseOver

[See moveMouseOver docs on codeception.com](http://codeception.com/docs/modules/WebDriver#moveMouseOver){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
x|xs:string|optional|
y|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### mSetLocale

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
locale|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### mResetLocale

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### openNewTab

[See openNewTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#openNewTab){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### parseFloat

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### pauseExecution

[See pauseExecution docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pauseExecution){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### performOn

[See performOn docs on codeception.com](http://codeception.com/docs/modules/WebDriver#performOn){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### pressKey

[See pressKey docs on codeception.com](http://codeception.com/docs/modules/WebDriver#pressKey){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### reloadPage

[See reloadPage docs on codeception.com](http://codeception.com/docs/modules/WebDriver#reloadPage){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### resetCookie

[See resetCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resetCookie){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### resizeWindow

[See resizeWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#resizeWindow){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
width|xs:string|optional|
height|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### saveSessionSnapshot

[See saveSessionSnapshot docs on codeception.com](http://codeception.com/docs/modules/WebDriver#saveSessionSnapshot){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### scrollTo

[See scrollTo docs on codeception.com](http://codeception.com/docs/modules/WebDriver#scrollTo){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
x|xs:string|optional|
y|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### scrollToTopOfPage

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### searchAndMultiSelectOption

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
parameterArray|xs:string|optional|
requiredAction|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### see

[See see docs on codeception.com](http://codeception.com/docs/modules/WebDriver#see){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
selector|xs:string|optional|
selectorArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCheckboxIsChecked

[See seeCheckboxIsChecked docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCheckboxIsChecked){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCookie

[See seeCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCookie){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCurrentUrlEquals

[See seeCurrentUrlEquals docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlEquals){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCurrentUrlMatches

[See seeCurrentUrlMatches docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeCurrentUrlMatches){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeElement

[See seeElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElement){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeElementInDOM

[See seeElementInDOM docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeElementInDOM){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInCurrentUrl

[See seeInCurrentUrl docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInCurrentUrl){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInField

[See seeInField docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInField){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
selectorArray|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInFormFields

[See seeInFormFields docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInFormFields){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInPageSource

[See seeInPageSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPageSource){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInPopup

[See seeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInPopup){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInSource

[See seeInSource docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInSource){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInTitle

[See seeInTitle docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeInTitle){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeLink

[See seeLink docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeLink){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeNumberOfElements

[See seeNumberOfElements docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeNumberOfElements){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeOptionIsSelected

[See seeOptionIsSelected docs on codeception.com](http://codeception.com/docs/modules/WebDriver#seeOptionIsSelected){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### selectOption

[See selectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#selectOption){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### setCookie

[See setCookie docs on codeception.com](http://codeception.com/docs/modules/WebDriver#setCookie){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
parameterArray|xs:string|optional|
value|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### submitForm

[See submitForm docs on codeception.com](http://codeception.com/docs/modules/WebDriver#submitForm){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
button|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToIFrame

[See switchToIFrame docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToIFrame){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToNextTab

[See switchToNextTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToNextTab){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToPreviousTab

[See switchToPreviousTab docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToPreviousTab){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToWindow

[See switchToWindow docs on codeception.com](http://codeception.com/docs/modules/WebDriver#switchToWindow){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### typeInPopup

[See typeInPopup docs on codeception.com](http://codeception.com/docs/modules/WebDriver#typeInPopup){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### uncheckOption

[See uncheckOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#uncheckOption){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### unselectOption

[See unselectOption docs on codeception.com](http://codeception.com/docs/modules/WebDriver#unselectOption){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
userInput|xs:string|optional|
parameterArray|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### wait

[See wait docs on codeception.com](http://codeception.com/docs/modules/WebDriver#wait){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForAjaxLoad

Attribute|Type|Use|Default
---|---|---|---
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElementChange

[See waitForElementChange docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementChange){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
function|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElement

[See waitForElement docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElement){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElementNotVisible

[See waitForElementNotVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementNotVisible){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElementVisible

[See waitForElementVisible docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForElementVisible){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForJS

[See waitForJS docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForJS){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
function|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForLoadingMaskToDisappear

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForPageLoad

Attribute|Type|Use|Default
---|---|---|---
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForText

[See waitForText docs on codeception.com](http://codeception.com/docs/modules/WebDriver#waitForText){:target='_blank'}

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
time|xs:string|optional|
selector|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|


<!-- Abbreviations -->

*[MFTF]: Magento Functional Testing Framework