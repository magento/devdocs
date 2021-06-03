---
group: web-api
title: API security
functional_areas:
  - Integration
---

This topic describes best practices for [API security](https://owasp.org/www-project-api-security/).

## Rate limiting

Imposing restrictions on the size and number of resources that a user can request through an API can help mitigate denial-of-service (DoS) vulnerabilities. Magento 2.4.3 provides the following built-in API rate limiting:

-  REST requests containing inputs representing a list of entities are limited to a default maximum of 20 entities
-  REST and GraphQL queries that allow paginated results are limited to a default maximum of 300 items per page

{:.bs-callout-info}
In addition, the Admin provides a configuration setting for limiting session sizes for Admin users and storefront visitors.

You can customize the default limits programmatically using [class constructor arguments]({{ page.baseurl }}/extension-dev-guide/build/di-xml-file.html).

### Maximum parameter inputs

The `EntityArrayValidator` class constructor limits the number of objects that can be given to inputs that represent arrays of objects. For example, the `/guest-carts/{cartId}/collect-totals` endpoint contains the input parameter [`additionalData->extension_attributes->gift_messages`](https://magento.redoc.ly/2.4.2-customer/tag/guest-cartscartIdcollect-totals#operation/quoteGuestCartTotalManagementV1CollectTotalsPut), which represents a list of gift message information objects.

The `EntityArrayValidator` class constructor restricts the number of inputs allowed to this parameter. By default, the maximum value is `20`. You can change the default in the `di.xml` file. The following example changes the limit to `50`:

```xml
<type name="Magento\Framework\Webapi\Validator\EntityArrayValidator">
    <arguments>
        <argument name="complexArrayItemLimit" xsi:type="number">50</argument>
    </arguments>
</type>
```

### Maximum page size

The `SearchCriteriaValidator` class constructor limits the maximum page size, which controls the pagination of various web API responses. By default, the maximum value is `300`. You can change the default in the `di.xml` file. The following example changes the limit to `900`:

```xml
<type name="Magento\Framework\Webapi\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maximumPageSize" xsi:type="number">900</argument>
    </arguments>
</type>
```

In GraphQL, the `SearchCriteriaValidator` class constructor limits the maximum page size in queries to `300` by default as well. You can change the default in the `di.xml` file. The following example changes the limit to `900`:

```xml
<type name="Magento\Framework\GraphQl\Query\Resolver\Argument\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maxPageSize" xsi:type="number">900</argument>
    </arguments>
</type>
```

### Minimum page size

The `ServiceInputProcessor` class constructor limits the minimum page size, which controls the pagination of various web API responses. By default, the minimum value is `20`. You can change the default in the `di.xml` file. The following example changes the limit to `60`:

```xml
<type name="Magento\Framework\Webapi\ServiceInputProcessor">
    <arguments>
        <argument name="defaultPageSize" xsi:type="number">60</argument>
    </arguments>
</type>
```

### Maximum session size

Use the following configuration settings to limit the maximum session size for Admin users and storefront visitors:

-  **Max Session Size in Admin**—Limit the maximum sessions size in bytes. Use `0` to disable.
-  **Max Session Size in Storefront**—Limit the maximum sessions size in bytes. Use `0` to disable.

{:.bs-callout-tip}
Both settings are measured in bytes and default to `256000` bytes (or 256KB).

{:.procedure}
To change the default settings:

1. Log in to the Admin.
1. Go to **Admin** > **Store** > **Configuration** > **Advanced** > **System** > **Security**.

   ![Session settings]({{ site.baseurl }}/common/images/session-size-settings.png)

1. Enter new session size(s) in bytes.

   {:.bs-callout-warning}
   Setting the value too low can cause issues. If you set either of the options below the 256000 byte default, you will see a warning message. If you click **No**, Magento will change the value to `256000`.

   ![Session size too low warning]({{ site.baseurl }}/common/images/session-size-too-low.png)

1. Click **Save Config**.

#### Admin session

If you exceed the maximum session size, an error displays and Magento logs the session size constraint to the `var/log` directory.

![Admin session size error]({{ site.baseurl }}/common/images/admin-session-error.png)

If you lose access to the Admin after setting the session size too low, use the CLI to reset the configuration:

```bash
bin/magento config:set system/security/max_session_size_admin 256000
```

#### Storefront session

If you exceed the maximum session size, no error displays but Magento logs the session size constraint to the `var/log` directory.
