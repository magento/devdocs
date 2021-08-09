---
group: graphql
title: GraphQL security configuration
---

The Framework `app/etc/di.xml` file uses the `maxPageSize` argument to restrict the maximum page size in queries to 300. To override this default value, create a custom module and provide a new value in the module's [di.xml]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html) file.

The following example changes the limit to `100`:

```xml
<type name="Magento\Framework\GraphQl\Query\Resolver\Argument\Validator\SearchCriteriaValidator">
    <arguments>
        <argument name="maxPageSize" xsi:type="number">100</argument>
    </arguments>
</type>
```

[API security]({{page.baseurl}}/get-started/api-security.html) describes additional arguments that are applicable to web APIs in general.