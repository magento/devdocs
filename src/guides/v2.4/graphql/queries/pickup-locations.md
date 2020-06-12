---
group: graphql
title: pickupLocations query
contributor_name: Oleksandr Kravchuk
contributor_link: https://github.com/swnsma
---

Use the `pickupLocations` query to retrieve a list of available pickup locations.

The `pickupLocations` query supports the following types of filters.

*  Area filters allow you to specify a location and a radius to find all locations within that radius.
*  Attribute filters allow you to return locations within a specified country, postal code, region, city, street, street, name, and pickup location code.

You can specify multiple filters in a query.

{:.bs-callout-info}
The `pickupLocations` query does not support searching by SKU assignment intersections.

The query supports pagination and sorting (including sorting by distance if area filtering was applied).

The query returns a `PickupLocations` object, which contains information about pagination and list of `PickupLocation` items.

## Syntax

```graphql
pickupLocations (area: AreaInput filters: PickupLocationFilterInput sort: PickupLocationSortInput pageSize: Int currentPage: Int): PickupLocations
```

## Example usage

The following query returns the closest pickup location to `Austin` with limitation in 1500 KM.
Because `pageSize` is set to 1 and distance by `distance` is applied, result will return the closest pickup location.

**Request:**

```graphql
{
  pickupLocations(
    area:{
      radius: 1500
      search_term: "Austin:US"
    }
    pageSize: 1
    currentPage: 1
    sort: {distance: ASC}
  ) {
    items {
      pickup_location_code
      name
      email
      fax
      description
      latitude
      longitude
      country_id
      region_id
      region
      city
      street
      postcode
      phone
    },
    total_count
    page_info {
      page_size
      current_page
      total_pages
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "pickupLocations": {
      "items": [
        {
          "pickup_location_code": "txspeqs",
          "name": "Sport Equipment Store",
          "email": "sales@company.com",
          "fax": null,
          "description": "Sport Equipment Store description",
          "latitude": 29.7543,
          "longitude": -95.3609,
          "country_id": "US",
          "region_id": 57,
          "region": "Texas",
          "city": "Houston",
          "street": "4631 Airport Blvd #125",
          "postcode": "77010",
          "phone": "(555) 555-5555"
        }
      ],
      "total_count": 1,
      "page_info": {
        "page_size": 1,
        "current_page": 1,
        "total_pages": 1
      }
    }
  }
}
```

## Input attributes

All top-level attributes are optional. If no filters are provided, the query returns a list of pickup locations, assigned to the Sales Channel that is used by the store.

Attribute | Data type | Description
--- | --- | ---
`area` | [AreaInput](#AreaInput) | Performs a search by location using a specified radius and search term
`filters` | [PickupLocationFilterInput](#PickupLocationFilterInput) | Applies filters by attributes
`sort` | [PickupLocationSortInput](#PickupLocationSortInput) | Specifies which attribute to sort on, and whether to return the results in ascending or descending order.
`pageSize` | Int | The maximum number of pickup locations to return at once. The attribute is optional. The default value is 20.
`currentPage` | Int | Specifies which page of results to return. The default value is 1.

### AreaInput object {#AreaInput}

Use the `AreaInput` to apply filtration by distance. All attributes are required.

Attribute | Data type | Description
--- | --- | ---
`radius` | Int! | The radius to the search, in kilometers.
`search_term` | String! | A combination of either the region, city, or postcode, a colon, and the country code. This value determines the location to use as the center of the search radius.  For example, `Austin:US`.

### PickupLocationFilterInput object {#PickupLocationFilterInput}

Use the `PickupLocationFilterInput` to filter by pickup location attributes. See [FilterTypeInput]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl/etc/schema.graphqls#L50).

Attribute | Data type | Description
--- | --- | ---
`city` | FilterTypeInput | Filter by city
`country_id` | FilterTypeInput | Filter by country
`name` | FilterTypeInput | Filter by pickup location name
`pickup_location_code` | FilterTypeInput | Filter by pickup location code
`postcode` | FilterTypeInput | Filter by postcode
`region` | FilterTypeInput | Filter by region
`region_id` | FilterTypeInput | Filter by region ID
`street` | FilterTypeInput | Filter by street

### PickupLocationSortInput object {#PickupLocationSortInput}

`PickupLocationSortInput` provides the ability to sort results by pickup location attributes. See [SortEnum]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl/etc/schema.graphqls#L88)

Attribute | Data type | Description
--- | --- | ---
`city` | SortEnum | City of the pickup location
`contact_name` | SortEnum | Name of the contact person
`country_id` | SortEnum | The two-letter country ID
`description` | SortEnum | Description of the pickup location
`distance` | SortEnum | Distance to the address, requested by distance filter. Applicable only with the distance filter. If the distance sort order is present, all other sort orders will be ignored
`email` | SortEnum | Contact email of the pickup location
`fax` | SortEnum | Fax number of the pickup location
`latitude` | SortEnum | Geographic latitude of the pickup location
`longitude` | SortEnum | Geographic longitude of the pickup location
`name` | SortEnum | The pickup location name. The customer uses this to identify the pickup location
`pickup_location_code` | SortEnum | A code assigned to pickup location to identify the source
`phone` | SortEnum | Contact phone number of the pickup location
`postcode` | SortEnum | Postal code of the pickup location
`region` | SortEnum | Name of the region
`region_id` | SortEnum | ID of the region
`street` | SortEnum | Street of the pickup location

### PickupLocations object

`PickupLocations` is the top-level object returned in a pickup locations search.

Attribute | Data type | Description
--- | --- | ---
`items` | [[PickupLocation]](#PickupLocation) | An array of pickup locations that match the specific search request
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | An object that includes the page_info and currentPage values specified in the query
`total_count` | Int | The number of products returned

### PickupLocation object {#PickupLocation}

Defines Pickup Location information.

Attribute | Data type | Description
--- | --- | ---
`city` | String | City of the pickup location
`contact_name` | String | The contact person at the pickup location
`country_id` | String | The two-letter country ID
`description` | String | A description of the pickup location
`email` | String | The email of the pickup location
`fax` | String | The fax number of the pickup location
`latitude` | Float | Geographic latitude of the pickup location
`longitude` | Float | Geographic longitude of the pickup location
`name` | String | Name of the pickup location
`phone` | String | The phone number of the pickup location
`pickup_location_code` | String | Source Code assigned to the pickup location
`postcode` | String | Postal code of the pickup location
`region` | String | Region name of the pickup location
`region_id` | Int | ID of the region
`street` | String | Street of the pickup location

### SearchResultPageInfo object {#SearchResultPageInfo}

Attribute | Data type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Total pages
