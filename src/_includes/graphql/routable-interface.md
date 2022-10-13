The `RoutableInterface` returns the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`redirect_code` | Int! | Contains 0 when there is no redirect error. A value of 301 indicates the URL of the requested resource has been changed permanently, while a value of 302 indicates a temporary redirect
`relative_url` | String | The internal relative URL. If the specified URL is a redirect, the query returns the redirected URL, not the original
`type` | UrlRewriteEntityTypeEnum | One of PRODUCT, CATEGORY, or CMS_PAGE
