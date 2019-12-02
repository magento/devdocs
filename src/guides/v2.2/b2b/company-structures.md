---
group: b2b-developer-guide
title: Manage company structures
ee_only: true
functional_areas:
  - B2B
  - Integration
---

{{site.data.var.b2b}} allows company users to be assigned to company teams and hierarchies.

## Manage company teams

Company teams allow you to group company users by location, job responsibilities, or any criteria you choose. You can assign individual company users to a team with the company hierarchy endpoints.

**Service name:**

`companyTeamRepositoryV1`

**REST Endpoints:**

```terminal
POST /V1/team/:companyId
PUT /V1/team/:teamId
GET /V1/team/:teamId
DELETE /V1/team/:teamId
GET /V1/team/
```

**Company team parameters:**

Name | Description | Format | Requirements
--- | --- | --- | ---
id | System-generated team ID | integer | Not applicable for create operations.
name | The displayed name of the team | string | Required to create or update a team.
description | An optional description of the team. | string | Optional

### Create a team

A newly-created team is placed under Company Admin in the company hierarchy.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/team/2`

**Payload:**

```json
{
  "team": {
    "name": "Western District",
    "description": "Buyers from the California office"
  }
}
```

**Response:**

The team ID, such as `4`.

### Update a team

You can only change the name or description of a team.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/team/4`

**Payload:**

```json
{
  "team": {
    "id": 4,
    "name": "Western Region"
  }
}
```

**Response:**

`true`, indicating the request was successful

### Return all information about a team

The `GET` call returns the team `id`, `name`, and `description`.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/team/4`

**Payload:**

Not applicable

**Response:**

```json
{
  "id": 4,
  "name": "Western Region",
  "description": "Buyers from the California office"
}
```

### Delete a team

You cannot delete a team if members are assigned to it.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/team/4`

**Payload:**

Not applicable

**Response:**

An empty array

### Search for a team

The following query returns information about all teams (`team_id` &ge; `0`)

See [Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html) for information about constructing a search query.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/team?searchCriteria[filter_groups][0][filters][0][field]=team_id&searchCriteria[filter_groups][0][filters][0][value]=0&searchCriteria[filter_groups][0][filters][0][condition_type]=gteq`

**Payload:**

Not applicable

**Response:**
{% collapsible Show code sample %}

```json
{
    "items": [
        {
            "id": 1,
            "name": "West",
            "description": "California office"
        },
        {
            "id": 2,
            "name": "East",
            "description": "New York office"
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "team_id",
                        "value": "0",
                        "condition_type": "gteq"
                    }
                ]
            }
        ]
    },
    "total_count": 2
}
```

{% endcollapsible %}

## Company hierarchies

In the B2B storefront, a buyer can view the company structure represented as a hierarchy tree. The tree can display multiple levels of company subdivisions (teams) as well as company users. The company hierarchy can have any number of items and levels.

You can use REST endpoints to retrieve the current structure and move teams and buyers within the hierarchy. You cannot delete teams or buyers.

**Service name:**

`companyHierarchyV1`

**REST Endpoints:**

```terminal
GET /V1/hierarchy/:id
PUT /V1/hierarchy/move/:id
```

### Return all information about the company hierarchy

In the following example, the following company hierarchy has already been established:

```terminal
Admin (structure_id = 2)
|-- East (team, structure_id = 8)
|   |-- Bryce Martin (customer, structure_id = 4)
|   |-- Melanie Shaw (customer, structure_id = 3)
|
|-- West (team, structure_id = 7)
|   |-- Marcus Thomas (customer, structure_id = 6)
|   |-- Teresa Gomez (customer, structure_id = 5)
```

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/hierarchy/2`

**Payload:**

Not applicable

**Response:**

{% collapsible Show code sample %}

```json
[
  {
    "structure_id": 6,
    "entity_id": 7,
    "entity_type": "customer",
    "structure_parent_id": 7
  },
  {
    "structure_id": 5,
    "entity_id": 6,
    "entity_type": "customer",
    "structure_parent_id": 7
  },
  {
    "structure_id": 7,
    "entity_id": 1,
    "entity_type": "team",
    "structure_parent_id": 2
  },
  {
    "structure_id": 3,
    "entity_id": 4,
    "entity_type": "customer",
    "structure_parent_id": 8
  },
  {
    "structure_id": 4,
    "entity_id": 5,
    "entity_type": "customer",
    "structure_parent_id": 8
  },
  {
    "structure_id": 8,
    "entity_id": 2,
    "entity_type": "team",
    "structure_parent_id": 2
  },
  {
    "structure_id": 2,
    "entity_id": 3,
    "entity_type": "customer",
    "structure_parent_id": 0
  }
```

{% endcollapsible %}

### Assign a new parent to teams and company users

The following example moves Bryce Martin (`structure_id = 4`) to the West team (`structure_id = 7`)

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/hierarchy/move/5`

**Payload:**

```json
{
  "newParentId": 7
}
```

**Response:**

`[]` (an empty array)

## Related information

*  [Integrate with the Company module]({{ page.baseurl }}/b2b/company.html)
*  [Manage company objects]({{ page.baseurl }}/b2b/company-object.html)
*  [Manage company users]({{ page.baseurl }}/b2b/company-users.html)
*  [Manage company roles]({{ page.baseurl }}/b2b/roles.html)
