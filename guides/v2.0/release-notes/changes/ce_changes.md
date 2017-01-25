---
layout: default
group: release-notes
subgroup: 03_BC
title: Magento CE Backward Incompatible Changes
menu_title: Magento CE changes between 2.0.0 and develop
version: 2.0
github_link: release-notes/changes/ce_changes.md
---

This topic provides details about backward incompatible changes made in a [Magento CE mainline][] after the [Magento 2.0.0][] release. The content is auto-generated.

All changes are aggregated into two tables:

- [Class][] that contains backward incompatible changes made to Magento classes
- [Interface][] that contains backward incompatible changes made to the Magento interfaces

where each change is displayed in a separate row in the table, with the following columns:

- **Target** with the name of an affected class or interface
- **What changed** with the description of a backward incompatible change

### 2.0.4 - 2.0.3

No backward incompatible changes

### 2.0.3 - 2.0.2

#### Changes in classes

|Target|What changed|
|---|---|
|`Magento\Framework\Search\Document`|Class was removed.|
|`Magento\Framework\App\Cron::__construct`|[public] Method parameter changed.|
|`Magento\Theme\Setup\InstallData::createThemeResource`|[public] Method has been removed.|

### 2.0.2 - 2.0.1

#### Changes in interfaces

|Target |	What Changed |
|---|---|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getComment`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getCreatedAt`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::setCreatedAt`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getEntityId`| 	[public] Method has been removed.|


### 2.0.1 - 2.0.0

#### Changes in classes

|Target|What changed|
|---|---|
|`Magento\Framework\Search\Document`|Class was removed.|
|`Magento\Framework\App\Cron::__construct`|[public] Method parameter changed.|
|`Magento\Theme\Setup\InstallData::createThemeResource`|[public] Method has been removed.|

#### Changes in interfaces

|Target |	What Changed |
|---|---|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getComment`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getCreatedAt`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::setCreatedAt`| 	[public] Method has been removed.|
|`Magento\Sales\Api\Data\InvoiceCommentInterface::getEntityId`| 	[public] Method has been removed.|

<!-- LINK DEFINITIONS -->

[Magento CE mainline]: https://github.com/magento/magento2
[Magento 2.0.0]: https://github.com/magento/magento2/tree/4cae5d058b7ad877b2ec7d2b6fa0a500f7c16860

[Class]: #class
[Interface]: #interface
