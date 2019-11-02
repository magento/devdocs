Components have the following types of versions:

*  Marketing version; in other words, the version the merchant interacts with.

   Your initial version might be 1.0.0 or 2.0.0, for example. You should follow [our versioning policy]({{ page.baseurl }}/extension-dev-guide/versioning) guidelines when setting your version.

*  Composer version; in other words, the version of each module, theme, language package, third-party package, and dependencies.

Using Magento code as an example, {{site.data.var.ce}} marketing version 2.0.0 includes component versions such as 100.0.1, 100.0.2, and so on. These versioning strategy prevents collisions between the marketing version and component versions.
