---
title: Versioning Policy for MFTF
---

This documemt describes the versioning policy for the Magento Functional Testing Framework (MFTF), including the version numbering schema.

## Backward Compatibility

Backwards compatibility is when a test undergoes changes, but achieves the same results as before and remains compatible with potential test customizations.

Different types of changes that are backwards compatible:

- **Test Flow change (Test/ActionGroup)** - A backwards compatible modification of a test flow would not diminish the original set of actions in the test.
Some modifications may change an action's sequence or behavior, but still allows an extension to achieve the same test results without changing the test extension.
- **Test Entity change (Data/Section/Page/Metadata)** - Adding new values or updating a `value` of existing entities which do **NOT** require updates to the test.
- **Test Annotation change** - Annotations can be changed and are considered backward compatible changes.
However, removing or changing a `<group />` annotation is considered a backward incompatible change.
- Changes which delete and/or rename (Test/Action Group/Data/Metadata/Page/Section/Action)'s id attribute are considered as a backward incompatible change. Changing a reference to a data entity is considered a backward incompatible change.

## Find your MFTF version number

To find the version of MFTF that you are using, run the Magento CLI command:

```bash
cd <magento_root>/
vendor/bin/mftf --version
```

## Versioning Policy

MFTF versioning policy follows [Semantic Versioning](https://semver.org/) guidelines.

### 3-component version numbers

    X.Y.Z
    | | |
    | | +-- Backward Compatible changes (Patch release - bug fixes)
    | +---- Backward Compatible changes (Minor release - new tests)
    +------ Backward Incompatible changes (Major release)

### Z release - patch

  Patch version **Z** MUST be incremented if only backward compatible changes to tests are introduced.
  For example, a fix which aims to resolve test flakiness might:

- Update an unreliable selector.
- Add a wait for an element.
- Update a data entity value.
  
### Y release - minor

  Minor version **Y** MUST be incremented if a new, backward compatible test or test entity is introduced.
  It MUST be incremented if any test or test entity is marked as deprecated.
  It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.

### X release - major

  Major version **X** MUST be incremented if any backwards incompatible changes are introduced to a test or test entity.
  It MAY include minor and patch level changes. Patch and minor version MUST be reset to 0 when major version is incremented.

## Incompatible entity attribute changes

Changing any of the following attributes will cause a backward incompatible change.

### Test entity
  
  |xPath|Attribute|
  |---|---|
  |`/tests/test`|name|
  |`/tests/test/<ACTION> ⃰`|stepKey|
  |`/tests/test/before/<ACTION> ⃰`|stepKey|
  |`/tests/test/after/<ACTION> ⃰`|stepKey|

### Action Group entity

  |xPath|Attribute|
  |---|---|
  |`/actionGroups/actionGroup`|name|
  |`/actionGroups/actionGroup/arguments/argument`|name|
  |`/actionGroups/actionGroup/<ACTION> ⃰`|stepKey|

### Data entity
  
  |xPath|Attribute|
  |---|---|
  |`/entities/entity`|name|
  |`/entities/entity/data`|key|
  |`/entities/entity/array`|key|
  |`/entities/entity/var`|key|
  |`/entities/entity/requiredEntity`|type|

### Metadata entity
  
  |xPath|Attribute|
  |---|---|
  |`/operations/operation`|name|
  |`/operations/operation/field`|key|
  |`/operations/operation(/object)+`|key|
  |`/operations/operation(/object)+/field`|key|
  |`/operations/operation(/object)+/array`|key|
  |`/operations/operation/array`|key|
  |`/operations/operation/array/object`|key|
  
### Page entity

  |xPath|Attribute|
  |---|---|
  |`/pages/page`|name|
  |`/pages/page/section`|name|
  
### Section entity

  |xPath|Attribute|
  |---|---|
  |`/sections/section`|name|
  |`/sections/section/element`|name|

### Actions

 acceptPopup, actionGroup, amOnPage, amOnSubdomain, amOnUrl, appendField, assertArrayHasKey, assertArrayIsSorted, assertArrayNotHasKey, assertArraySubset, assertArraySubset, assertContains, assertCount, assertElementContainsAttribute, assertEmpty, assertEquals, assertFalse, assertFileExists, assertFileNotExists, assertGreaterOrEquals, assertGreaterThan, assertGreaterThanOrEqual, assertInstanceOf, assertInternalType, assertIsEmpty, assertLessOrEquals, assertLessThan, assertLessThanOrEqual, assertNotContains, assertNotEmpty, assertNotEquals, assertNotInstanceOf, assertNotNull, assertNotRegExp, assertNotSame, assertNull, assertRegExp, assertSame, assertStringStartsNotWith, assertStringStartsWith, assertTrue, attachFile, cancelPopup, checkOption, clearField, click, clickWithLeftButton, clickWithRightButton, closeAdminNotification, closeTab, comment, conditionalClick, createData, deleteData, dontSee, dontSee, dontSeeCheckboxIsChecked, dontSeeCookie, dontSeeCurrentUrlEquals, dontSeeCurrentUrlMatches, dontSeeElement, dontSeeElementInDOM, dontSeeFullUrlEquals, dontSeeFullUrlMatches, dontSeeInCurrentUrl, dontSeeInField, dontSeeInFormFields, dontSeeInFullUrl, dontSeeInPageSource, dontSeeInSource, dontSeeInTitle, dontSeeJsError, dontSeeLink, dontSeeOptionIsSelected, doubleClick, dragAndDrop, entity, executeInSelenium, executeJS, expectException, fail, fillField, formatMoney, generateDate, getData, grabAttributeFrom, grabCookie, grabFromCurrentUrl, grabFromFullUrl, grabMultiple, grabPageSource, grabTextFrom, grabValueFrom, loadSessionSnapshot, loginAsAdmin, magentoCLI, makeScreenshot, maximizeWindow, moveBack, moveForward, moveMouseOver, mResetLocale, mSetLocale, openNewTab, parseFloat, pauseExecution, performOn, pressKey, reloadPage, resetCookie, resizeWindow, saveSessionSnapshot, scrollTo, scrollToTopOfPage, searchAndMultiSelectOption, see, seeCheckboxIsChecked, seeCookie, seeCurrentUrlEquals, seeCurrentUrlMatches, seeElement, seeElementInDOM, seeFullUrlEquals, seeFullUrlMatches, seeInCurrentUrl, seeInField, seeInFormFields, seeInFullUrl, seeInPageSource, seeInPopup, seeInSource, seeInTitle, seeLink, seeNumberOfElements, seeOptionIsSelected, selectOption, setCookie, submitForm, submitForm, switchToIFrame, switchToNextTab, switchToPreviousTab, switchToWindow, typeInPopup, uncheckOption, unselectOption, updateData, wait, waitForAjaxLoad, waitForElement, waitForElementChange, waitForElementNotVisible, waitForElementVisible, waitForJS, waitForLoadingMaskToDisappear, waitForPageLoad, waitForText
