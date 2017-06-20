---
layout: default
group: b2b
subgroup: 10_REST
title: Manage company structures
menu_title: Manage company structures
menu_order: 15
version: 2.2
ee_only: true
level3_menu_node: level3child
level3_subgroup: company
github_link: b2b/company-structures.md
---

B2B allows company users to be assigned to company teams and hierarchies.

## Manage company teams

Company teams allow you to group company users by location, job responsibilities, or any criteria you choose. You can assign individual company users to a team with the company hierarchy endpoints.

**Service name**

`companyTeamRepositoryV1`

**REST Endpoints**

{% highlight json %}
POST /V1/team/:companyId
PUT /V1/team/:teamId
GET /V1/team/:teamId
DELETE /V1/team/:teamId
GET /V1/team/
{% endhighlight %}


**Company team parameters**

Name | Description | Format | Requirements
--- | --- | --- | ---
id | System-generated team ID | integer | Not applicable for create operations.
name | The displayed name of the team | string | Required to create or update a team.
description | An optional description of the team. | string | Optional

### Create a team

A newly-created team is placed under Company Admin in the company hierarchy.

**Sample Usage**

`POST /V1/team/2`

**Payload**

{% highlight json %}
{
  "team": {
    "name": "Western District",
    "description": "Buyers from the California office"
  }
}
{% endhighlight %}

**Response**

The team ID, such as `4`.

### Update a team

You can only change the name or description of a team.

**Sample Usage**

`PUT /V1/team/4`

**Payload**

{% highlight json %}
{
  "team": {
  	"id": 4,
    "name": "Western Region"
  }
}
{% endhighlight %}

**Response**

`true`, indicating the request was successful

### Return all information about a team

The `GET` call returns the team `id`, `name`, and `description`.

**Sample Usage**

`GET /V1/team/4`

**Payload**

Not applicable

**Response**

{% highlight json %}
{
  "id": 4,
  "name": "Western Region",
  "description": "Buyers from the California office"
}
{% endhighlight %}

### Delete a team

You cannot delete a team if members are assigned to it.

**Sample Usage**

`Delete /V1/team/4`

**Payload**

Not applicable

**Response**

An empty array

### Search for a team

See [Search using REST APIs]({{page.baseurl}}howdoi/webapi/search-criteria.html) for information about constructing a query using the `GET  /V1/team/` endpoint.

## Company hierarchies

{% highlight json %}
GET /V1/hierarchy/:id
PUT /V1/hierarchy/move/:id
{% endhighlight %}

### Return all information about the company hierarchy

`GET /V1/heirarchy/:id`

In the following example, there are three teams and nine customers. The customer with `entity_id` of `5` (and `structure_id` of `2` is the Company Admin. All other entities have a `structure_parent_id` of `2`, indicating no additional hierarchies have been set.

**Response**

{% highlight json %}
[
  {
    "structure_id": 16,
    "entity_id": 5,
    "entity_type": "team",
    "structure_parent_id": 2
  },
  {
    "structure_id": 7,
    "entity_id": 3,
    "entity_type": "team",
    "structure_parent_id": 2
  },
  {
    "structure_id": 15,
    "entity_id": 4,
    "entity_type": "team",
    "structure_parent_id": 2
  },
  {
    "structure_id": 13,
    "entity_id": 18,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 14,
    "entity_id": 19,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 12,
    "entity_id": 17,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 11,
    "entity_id": 16,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 10,
    "entity_id": 15,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 9,
    "entity_id": 14,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 8,
    "entity_id": 13,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 3,
    "entity_id": 12,
    "entity_type": "customer",
    "structure_parent_id": 2
  },
  {
    "structure_id": 2,
    "entity_id": 5,
    "entity_type": "customer",
    "structure_parent_id": 0
  }
]
{% endhighlight %}

### Assign a new parent to teams and company users

`PUT /V1/hierarchy/move/15`
{
  "newParentId": 7
}

`PUT /V1/hierarchy/move/16`

{
  "newParentId": 7
}

`PUT /V1/hierarchy/move/8`
{
  "newParentId": 15
}

`PUT /V1/hierarchy/move/9`
{
  "newParentId": 16
}

## Related information

* [Integrate with the Company module]({{page.baseurl}}b2b/company.html)
* [Manage company objects]({{page.baseurl}}b2b/company-object.html)
* [Manage company users]({{page.baseurl}}b2b/company-users.html)
* [Manage company roles]({{page.baseurl}}b2b/roles.html)
