---
group: rest
subgroup: A_rest
title: REST APIs (Swagger)
menu_title: REST APIs (Swagger)
menu_order: 2
externalURL: https://devdocs.magento.com/swagger/index_22.html
functional_areas:
  - Integration
---

Magento 2 uses Swagger to automatically generate documentation for its REST API. What's even best - Swagger is shipped with each installed instance of Magento 2 and you can simply visit [MAGENTO 2 BASE URL] /swagger to see the API documentation that is relevant to exactly your site and that will be look like that. 

When you visit [MAGENTO 2 BASE URL] /swagger the services list isn't complete, when compared to the published on the Magento site.

You need to generate API credentials in magento backend, authenticate, and insert token like on the image below: 

Token can be obtained from swagger web interface calling integrationAdminTokenServiceV1 or you can authenticate use curl:

## Generate a full permissions token using curl
<div class="bs-callout bs-callout-tip" markdown="1">
curl -XPOST -H 'Content-Type: application/json' http://your-host/index.php/rest/V1/integration/admin/token -d '{ "username": "yourUsername", "password": "yourPassword" }'
</div>

The returned value then just needs to be pasted into the api_key field and hit apply. We can now start exploring the API endpoints.

## Generate a full permissions token from admin panel

To see the full list of services you can also generate a full permissions token from the admin panel.

1. Log into admin panel
2. Navigate to Systems -> Integrations (under Extensions section)
3. click on "Add a new Integration" Button
4. Fill in the required fields and move to API tab on the left, for "Resource Access" select All
5. Hit save and in the grid view click on Authorize.
6. Grab the Access Token generated (and save the rest of the info, of course).
7. Navigate to /swagger and paste that access token to see the full list of REST services on your site.
