---
layout: default
group: mrg
subgroup: Enterprise Edition
title: Module Reference Guide
menu_title: Staging
menu_order: 2
version: 2.1


github_link: mrg/ee/Staging.md
---

![Magento EE logo]({{site.baseurl}}common/images/ee-only_large.png)

<h2>Contents</h2>

* TOC
{:toc}

## Magento_Staging module

## Overview

The Magento_Staging module enables you to work with the future [campaigns](#campaign) in Magento EE.

With the Magento_Staging module you can:

- Manage future campaigns
    - Using the Staging Dashboard in Admin
    - Using APIs
- Preview a future campaign in Admin

Moreover, the Magento_Staging module is a framework for other [staging](#staging) modules. It declares basic scenarios over the content, while other staging modules perform them. (You can recognize a staging modules by name, each ends with “Staging” and starts with a name of a module, which it extends. For example, Magento_CatalogStaging module extends functionality of Magento_Catalog module.)

You can work with the following entities out of the box:

- Product
- Category
- Catalog Price Rule
- Shopping Cart Price Rule
- CMS Block
- CMS Page

And you can extend the list adding your own extension modules.

## Glossary

<a name="campaign"><b>campaign</b></a>
: a set of two or more scheduled updates with the same name and time period

<a name="temporary-campaign"><b>temporary campaign</b></a>
: a set of two or more temporary updates with the same name and time period

<a name="permanent-campaign"><b>permanent campaign</b></a>
: a set of two or more permanent updates with the same name and time period

<a name="staging"><b>staging</b></a>
: a set of functionality that enables you to schedule the store changes in Magento database. You can configure the particular state of the database to be applied in the future

<a name="scheduled-update"><b>scheduled update</b></a>, <a name="update"><b>update</b></a>
: scheduled change of a Magento store entity

<a name="permanent-update"><b>permanent update</b></a>
: scheduled update that has start date and doesn’t have end date

<a name="temporary-update"><b>temporary update</b></a>
: scheduled update that has a start date and an end date

## Dashboard

The Magento_Staging module creates a GUI dashboard of campaigns in Admin (*Content &gt; Staging Dashboard*).

### Usage

The dashboard shows campaigns as a timeline and a grid. Both views represent the same set of [campaign](#campaign) attributes:

- Name of campaign
- Status of campaign
- Number of included store objects (updates) in the campaign
- Start time
- End time
- [campaign](#campaign) description

Available actions:

- Preview, which enable you to see how a store will look during the campaign.
- Edit, which you can use to change the [campaign](#campaign) attribute values. Also, the Edit page shows you grids of all  [staging](#staging) categories with included objects.

### Customization

You can customize a grid using the standard grid settings located above the grid or by directly manipulating the corresponding UI components.

#### Timeline/Grid view UI components

You can manipulate the timeline view and the grid view of a dashboard in the `app\code\Magento\Staging\view\adminhtml\ui_component\staging_update_grid.xml` configuration file as a [simple grid](devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html) with the following custom settings:

- in `listingToolbar`
    - `template` declares a legend for a timeline, which is an overloading template that provides a grid/timeline view switcher.
    - `updateTypes` declares a path to a Status column, which provides data for a legend.
- in `columns`
    - `component` declares a timeline component, which extends listing.
    - `recordTmpl` declares an overloading template for timeline records.
    - `detailsTmpl` declares a template for a tooltip component, which provides [campaign](#campaign) details.
- in `column name="status"`
    - `component` extends selection column, sets a CSS class specified in a value.
    - `updateTypesMap` declares an array that contains bound classes and values that indicate which CSS class must be applied. Depending on the `value` (obtained from backend), a CSS class from the `className` is applied to a stripe with update.

[Learn more details about the timeline dashboard.](http://devdocs.magento.com/guides/v2.1/pattern-library/staging-patterns/TimelineDashboard/Timeline-Dashboard.html)

## Manage future campaigns

### Campaigns

A [campaign](#campaign) enables you to manage entities' updates with the same start and end dates. A campaign has name and description.

#### Create a campaign

You can create a [campaign](#campaign) from the dashboard using the **Create a campaign** button. Also, a campaign is created immediately after you created a new  [scheduled update](#scheduled-update) for a store object. Later, when you want to add another updates to this campaign you can simply assign them to it.

#### View a campaign

You can view campaigns on the dashboard (**Admin** &gt; **Content** &gt; **Staging** &gt; **Dashboard**). When you click on a campaign, a pop-up window with general campaign information is displayed:

- Name
- Status
- Start
- End
- Number of included objects (entities)
- List presenting how many objects of each type is assigned to the campaign

Also, staged entity displays the campaigns it has been assigned to. In preview mode, you can select a campaign from the list of campaigns.

#### Preview a campaign

You can preview scheduled elements on storefront (as if it were live website) in order to make sure that all planned updates are correct before publishing.

Staging preview enables you to use the following functionality:

- View a store on certain future date and time with all corresponding updates applied
- View and manage a timeline with all future campaigns
- Change a website and a store view
- Add product to cart and proceed with checkout till "Submit Order" step

Note that you cannot create an order in a preview mode, use layered navigation and search.

#### Edit a campaign

To edit a [campaign](#campaign), open the campaign and click the **View/Edit** button.

A form contains **General** field set with the following fields:

- Name (required)
- Description
- Start Time (required)
- End Time

When you edit these fields, you change them for all entities assigned to the campaign.

The lower expandable list in the form represent types of [staging](#staging) entities:

- Catalog Price Rules
- Shopping Cart Price Rules
- Categories
- CMS Pages
- Products
- CMS Blocks

Each one is a grid of corresponding entities assigned to the campaign.

#### Remove a campaign
Only empty [campaign](#campaign) can be deleted, that is performed by the cron. In other words, if you delete all updates from the campaign, it will be deleted automatically according to the cron settings.

### Update

The [scheduled updates](#scheduled-update) functionality is implemented in [staging](#staging) modules. The Magento_Staging module only distributes to other staging modules a Schedule Update form and a grid of future campaigns.

#### Create an update

You can schedule an update of Magento entity to be used in future. It is applicable for:

- Products
- Categories
- Content
    - Blocks
    - Pages

- Marketing
    - Catalog Price Rules
    - Cart Price Rules

To schedule an update, open an edit form for the one of these entities and click the **Schedule New Update** button. In the Schedule Update form, you can set:

- Update Name (required)
- Description
- Start Date (required)
- End Date

When you save an update, a new [campaign](#campaign) is created with the name from the **Update Name** field and with dates you specified. If you leave the **End Date** field empty, Magento creates a [permanent campaign](#permanent-campaign) starting from the Start Date. If both dates are set, it is a [temporary campaign](#temporary-campaign).

There are several rules validating updates intersection:

1.  Update can be created only in the future. You cannot create an update in a past.

2.  Temporary updates cannot intersect with each other. For example, if you have an update for the "New Brand Snowboard" product from December 23 till December 26, a period of another update for "New Brand Snowboard" cannot intersect the period from December 23 till December 26. In other words, one entity cannot have more than one [temporary update](#temporary-update) scheduled to the same time.

3.  Permanent update cannot start during temporary update. For example, if you have an update for the "New Brand Snowboard" product from December 23 till December 26, you cannot create [permanent update](#permanent-update) starting during this period of time.

#### View/Edit/Copy an update

When you create an update for a Magento entity, a timeline appears in the Scheduled Changes block of the Edit form of that entity. The timeline shows the start dates and the names of campaigns in which the entity has updates. You can view, edit or preview the entity in each campaign.

**View/Edit** option opens the Schedule Update form where you can add changes or just view the current state of the update. Also, this form is accessible from the Campaign Edit form.

An update can be edited or assigned to another campaign. When you assign an update to another campaign, you actually create a copy of this update in the [campaign](#campaign).

#### Preview an update

If you click Preview in front of [campaign](#campaign) on the Scheduled Changes block or on the Schedule Update form of the Magento entity, you'll see how it looks on storefront with all update changes applied.

#### Remove an update

Any update can be removed from campaign. **Remove this update** button is available on the Schedule Update form of an entity. Also you can use the **Delete update** button in an entity related grid (campaign edit page).

The options of how you can remove an update:

- Save as a new update
- Move to Another Campaign
- Delete the Update

## Preview mode

In this mode, the Magento_Staging module builds a view of a store for a specific future date. You can surf the storefront, add products to the cart, go to checkout, apply gift certificates and discounts, order shipment. Payment methods and placing an order are not available in a preview mode.

### Different websites

Preview mode is also available for a multi website store. Switching between different website views is available in scope of Admin domain. Server builds a view of an open page only using its scheduled parameters. (Without redirection to another domain.)

NOTE All websites must use the same type of the protocol: HTTP or HTTPS. You cannot mix HTTP and HTTPS websites.
NOTE **Product in Websites** tab is inactive in the Schedule Update form and cannot be edit.

### Share a link to preview

You can generate  a preview link and share it. Anyone with access to Admin can open the shared preview.

## Installation details

Staging cannot be disabled during web installation.

The Staging modules cannot be removed or disabled after they were installed.

## Module dependencies

You can find the list of modules that have dependencies on the Magento_Staging module in the `require` section of the `composer.json` file. The file is located in the root directory of the module.

## Extension points

Extension points enable extension developers to interact with the Magento_Staging module. For more information about the Magento extension mechanism, see [Magento plug-ins](http://devdocs.magento.com/guides/v2.1/extension-dev-guide/plugins.html).

### Public APIs

You can use public APIs from the [`magento2ee/app/code/Magento/Staging/Api`](https://github.corp.magento.com/magento2/magento2ee/tree/develop/app/code/Magento/Staging/Api)

### UI components

You can extend the UI components in the `view/adminhtml/ui_component` directory. For more information, see [UI Listing/Grid Component](http://devdocs.magento.com/guides/v2.1/ui-components/ui-listing-grid.html).

### Layouts

You can extend and override layouts in the `view/adminhtml/layout` directory. For more information about layouts, see the [Layout documentation](http://devdocs.magento.com/guides/v2.1/frontend-dev-guide/layouts/layout-overview.html).

## Additional information

You can track [backward incompatible changes made in a Magento EE mainline after the Magento 2.0 release](http://devdocs.magento.com/guides/v2.0/release-notes/changes/ee_changes.html).

### cron options

cron group configuration can be set in `etc/crontab.xml`.

-   `staging_apply_version` – each period of time checks in a table of updates if any [campaign](#campaign) has been started and if yes, it applies all [scheduled updates](#scheduled-update) for the campaign.

-   `staging_remove_updates` – each period of time checks if a campaign contains any update, and if it is empty, deletes the campaign.

-   `staging_synchronize_entities_period` – each period of time checks if start or end dates of a campaign have been changed. If it finds any changes, it applies same changes to all updates dependent from the campaign.

[Learn how to configure and run cron in Magento.](http://devdocs.magento.com/guides/v2.1/config-guide/cli/config-cli-subcommands-cron.html)

### Indexes and indexing modes

When update is applied, the indexer handles it according to the actual indexing mode. In a preview mode, indexing is not applied. Data is loaded for the open page only.

[Learn more about indexing in Magento.](http://devdocs.magento.com/guides/v2.1/mrg/indexing.html)

### Data migration

The Magento_Staging module uses the `\Magento\Staging\Setup\BasicSetup` class during installation. This class changes database schema and migrates data.

#### Migration of attributes with range

Each update attribute that contains a time range is synchronized with dates of campaign. Attributes with time range are removed from the UI.
