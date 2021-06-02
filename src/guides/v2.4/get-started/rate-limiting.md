---
group: web-api
title: Configure rate limiting
functional_areas:
  - Integration
---

**Rate limiting is now built-in** to Magento APIs to prevent distributed denial-of-service (DDoS) attacks. Web APIs now impose restrictions on the size or number of resources that can be requested by a client/user.

For WebAPI requests a new validation was added to all limit the number of objects that can be given to inputs that represent arrays of objects.
As a concrete example, the endpoint "/guest-carts/{cartId}/collect-totals" contains the input parameter "additionalData->extension_attributes->gift_messages"(https://magento.redoc.ly/2.4.2-customer/tag/guest-cartscartIdcollect-totals#operation/quoteGuestCartTotalManagementV1CollectTotalsPut) which represents a list of gift message information objects. This new validation restricts the allowed number of inputs to this argument to 20. This limit can be changed via di.xml file such as in the the following example which changes the limit to 50:

```xml
<type name="Magento\Framework\Webapi\Validator\EntityArrayValidator">
    <arguments>
        <argument name="complexArrayItemLimit" xsi:type="number">50</argument>
    </arguments>
</type>
```

We have also added validation to the maximum allowed PageSize parameters which control the pagination of various WebApi responses. By default the highest allowed value is 300. This limit can also be changed via di.xml file such as in the following example which changes the limit to 900:

```xml
<type name="Magento\Framework\Webapi\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maximumPageSize" xsi:type="number">900</argument>
    </arguments>
</type>
```

In a related change we have also changed the default minimum WebApi PageSize to 20. This limit can also be changed via di.xml file such as in the following example which changes the limit to 60:

```xml
<type name="Magento\Framework\Webapi\ServiceInputProcessor">
    <arguments>
        <argument name="defaultPageSize" xsi:type="number">60</argument>
    </arguments>
</type>
```

Similarly in GraphQL we have also limited the maximum allowed PageSize parameters in queries to 300 as well. Like with the others this limit can also be changed via di.xml file such as in the following example which changes the limit to 900:

```xml
<type name="Magento\Framework\GraphQl\Query\Resolver\Argument\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maxPageSize" xsi:type="number">900</argument>
    </arguments>
</type>
```

## Admin configuration setting

A new admin setting has been added in order to allow setting the maximum session size allowed in admin and a separate setting for storefront.

The setting can be found in Admin > Store > Configuration > Advanced > System > Security.

This setting is measured by bytes and defaults to 256000 bytes (this is 256kb) and could be set to 0 to disable the feature.

Keep in mind setting the value too low could cause issues.

In admin panel, if you go over allowed max session size, it will throw an error and prompt the user with generic message and log the session size constraint to var/log.

In storefront, if you go over allowed max session size, there is no warnings for the user but will still log the session size constraint to var/log

If you set either of the options to below default 256000, you will see a warning message. If user selects No, it will change the value to 256000.

In the case your admin panel lose access due to the setting the session size too low, please use CLI command "bin/magento config:set system/security/max_session_size_admin 256000" to reset the configuration.