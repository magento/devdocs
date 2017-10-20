---
layout: default
group: mftf
title: Cest actions
github_link: magento-functional-testing-framework/commands/cest.md
---

## Actions

### acceptPopup

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|optional|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnPage

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnSubdomain

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### amOnUrl

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### appendField

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

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### checkOption

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### click

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCookie

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

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeCurrentUrlMatches

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeElement

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeElementInDOM

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

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInField

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInPageSource

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInSource

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dontSeeInTitle

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### dragAndDrop

Attribute|Type|Use|Default
---|---|---|---
selector1|xs:string|optional|
selector2|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### executeInSelenium

Attribute|Type|Use|Default
---|---|---|---
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### executeJS

Attribute|Type|Use|Default
---|---|---|---
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### fillField

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

Attribute|Type|Use|Default
---|---|---|---
returnVariable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabTextFrom

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
returnVariable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### grabValueFrom

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

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### maximizeWindow

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveBack

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveForward

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### moveMouseOver

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

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### performOn

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
function|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### pressKey

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

Attribute|Type|Use|Default
---|---|---|---
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### resetCookie

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

Attribute|Type|Use|Default
---|---|---|---
width|xs:string|optional|
height|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### saveSessionSnapshot

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### scrollTo

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCookie

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

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeCurrentUrlMatches

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeElement

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInCurrentUrl

Attribute|Type|Use|Default
---|---|---|---
url|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInField

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
parameterArray|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInPageSource

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInPopup

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInSource

Attribute|Type|Use|Default
---|---|---|---
html|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeInTitle

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### seeLink

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

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToPreviousTab

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### switchToWindow

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### typeInPopup

Attribute|Type|Use|Default
---|---|---|---
userInput|xs:string|optional|
variable|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### uncheckOption

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### unselectOption

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

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElementNotVisible

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForElementVisible

Attribute|Type|Use|Default
---|---|---|---
selector|xs:string|optional|
time|xs:string|optional|
mergeKey|xs:string|required|
remove|xs:boolean|optional|false
before|xs:string|optional|
after|xs:string|optional|

### waitForJS

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


[`dontSeeInCurrentUrl`]
[`seeElementInDOM`]