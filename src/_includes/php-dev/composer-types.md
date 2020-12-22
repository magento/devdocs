The following table discusses the component types that Magento Marketplace supports. The composer `type` column in the following table specifies the value of the `type` field you must add to `composer.json` for that type of component.

|Friendly name|composer.json type|Description|
|--- |--- |--- |
|Metapackage|metapackage|Technically, a Composer package type, not a Magento component type. A metapackage consists of only a `composer.json` file that specifies a list of components and their dependencies. For example, both {{site.data.var.ce}} and {{site.data.var.ee}} are metapackages.|
|Module|magento2-module|Code that modifies Magento application behavior. You can upload a single module to the Magento Marketplace or your module can be dependent on some parent package.|
|Theme|magento2-theme|Code that modifies the look and feel of the storefront or Magento Admin.|
|Language package|magento2-language|Translations for the storefront or Admin.|
|Library|magento2-library|Support for libraries located in `lib/internal` instead of in the `vendor` directory.|
|Component|magento2-component|The package formed of the files that must be located in root (index.php, .htaccess, etc). This includes `dev/tests` and `setup` as well for now.|
