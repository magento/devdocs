---
group: graphql
title: pickupLocations query
---

Use `pickupLocations` query to receive a list of available pickup locations.

The `pickupLocations` query supports the following types of filters. You can specify multiple filters in a query.

*  Area Filtering
*  Attributes Filtering (by country/postcode/region/city/street/name/pickup location code)

{:.bs-callout-info}
Search by SKU assignment intersection is not supported in the GraphQl query.

The query supports pagination and sorting (including sorting by distance if Area Filtering was applied).

The query returns `PickupLocations` object which contains information about pagination and list of `PickupLocation` items.

## Syntax

```graphql
pickupLocations (area: AreaInput filters: PickupLocationFilterInput sort: PickupLocationSortInput pageSize: Int currentPage: Int): PickupLocations
```

## Example usage

The following query returns the closest pickup location to `Austin` with limitation in 1500 KM.
Because `pageSize` is set to 1 and distance by `distance` is applied, result will return the most closest pickup location.

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

All attributes are optional. If no filters are provided, the query will return a list of pickup locations, assigned to the Sales Channel which is used by the store.

Attribute | Data type | Description
--- | --- | ---
`area` | [AreaInput](#AreaInput) | Perform search by location using radius and search term.
`filters` | [PickupLocationFilterInput](#PickupLocationFilterInput) | Apply filters by attributes.
`sort` | [PickupLocationSortInput](#PickupLocationSortInput) | Specifies which attribute to sort on, and whether to return the results in ascending or descending order.
`pageSize` | Int | The maximum number of pickup locations to return at once. The attribute is optional. The default value is 20.
`currentPage` | Int | Specifies which page of results to return. The default value is 1.

### AreaInput object {#AreaInput}

Use the `AreaInput` to apply filtration by distance. All attributes are required.

Attribute | Data type | Description
--- | --- | ---
`radius` | Int! | The radius for the search in KM.
`search_term` | String! | The country code where search must be performed. Required parameter together with region, city, or postcode. Example of search term with country code `Austin:US`.

### PickupLocationFilterInput object {#PickupLocationFilterInput}

Use the `PickupLocationFilterInput` to apply filtration by Pickup Location attributes. See [FilterTypeInput]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl/etc/schema.graphqls#L50).

Attribute | Data type | Description
--- | --- | ---
`name` | FilterTypeInput | Filter by pickup location name.
`pickup_location_code` | FilterTypeInput | Filter by pickup location code.
`country_id` | FilterTypeInput | Filter by country.
`postcode` | FilterTypeInput | Filter by postcode.
`region` | FilterTypeInput | Filter by region.
`region_id` | FilterTypeInput | Filter by region id.
`city` | FilterTypeInput | Filter by city.
`street` | FilterTypeInput | Filter by street.

### PickupLocationSortInput object {#PickupLocationSortInput}

`PickupLocationSortInput` provides possibility to sort result by Pickup Location attributes. See [SortEnum]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl/etc/schema.graphqls#L88)

Attribute | Data type | Description
--- | --- | ---
`name` | SortEnum | The pickup location name. Customer uses this to identify the pickup location.
`pickup_location_code` | SortEnum | A code assigned to pickup location to identify the source.
`distance` | SortEnum | Distance to the address, requested by distance filter. Applicable only with distance filter. If the distance sort order is present, all other sort orders will be ignored.
`country_id` | SortEnum | Id of the country in two letters.
`region` | SortEnum | Name of the region.
`region_id` | SortEnum | Id of the region.
`city` | SortEnum | City where the pickup location is placed.
`street` | SortEnum | Street where the pickup location is placed.
`postcode` | SortEnum | Postcode where the pickup location is placed.
`pickup_location_code` | SortEnum | Filter by the pickup location code.
`longitude` | SortEnum | Geographic longitude where the pickup location is placed.
`latitude` | SortEnum | Geographic latitude where the pickup location is placed.
`email` | SortEnum | Contact email of the pickup location.
`fax` | SortEnum | Contact fax of the pickup location.
`phone` | SortEnum | Contact phone number of the pickup location.
`contact_name` | SortEnum | Name of the contact person.
`description` | SortEnum | Description of the pickup location.

### PickupLocations object

Top level object returned in a pickup locations search.

Attribute | Data type | Description
--- | --- | ---
`items` | [[PickupLocation]](#PickupLocation) | An array of pickup locations that match the specific search request.
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | An object that includes the page_info and currentPage values specified in the query.
`total_count` | Int | The number of products returned.

### PickupLocation object {#PickupLocation}

Defines Pickup Location information.

Attribute | Data type | Description
--- | --- | ---
`pickup_location_code` | String | Source Code, assigned to Pickup Location.
`name` | String | Pickup Location name.
`email` | String | Pickup Location email.
`fax` | String | Pickup Location fax.
`contact_name` | String | Pickup Location contact person name.
`description` | String | Pickup Location description.
`latitude` | Float | Geographic latitude where pickup location is placed.
`longitude` | Float | Geographic longitude where pickup location is placed.
`country_id` | String | Id of the country in two letters.
`region_id` | Int | Id of the region.
`region` | String | Name of the region.
`city` | String | City where pickup location is placed.
`street` | String | Street where pickup location is placed.
`postcode` | String | Postcode where pickup location is placed.
`phone` | String | Contact phone number of the pickup location.

### SearchResultPageInfo object {#SearchResultPageInfo}

Attribute | Data type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return.
`page_size` | Int | Specifies the maximum number of items to return.
`total_pages` | Int | Total pages.