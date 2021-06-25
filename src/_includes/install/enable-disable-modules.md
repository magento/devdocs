Magento enables you to enable or disable currently available modules; in other words, any Magento-provided module or any third-party module that is currently available.

Certain modules have dependencies on other modules, in which case you might not be able to enable or disable a module because it has dependencies on other modules.

In addition, there might be *conflicting* modules that cannot both be enabled at the same time.

Examples:

-  Module A depends on Module B. You cannot disable Module B unless you first disable Module A.

-  Module A depends on Module B, both of which are disabled. You must enable module B before you can enable module A.

-  Module A conflicts with Module B. You can disable Module A and Module B, or you can disable either module but you *cannot* enable Module A and Module B at the same time.

-  Dependencies are declared in the `require` field in Magento's `composer.json` file for each module. Conflicts are declared in the `conflict` field in modules' `composer.json` files. We use that information to build a dependency graph: `A->B` means module A depends on module B.

-  A *dependency chain* is the path from a module to another one. For example, if module A depends on module B and module B depends on module C, then the dependency chain is `A->B->C`.

If you attempt to enable or disable a module that depends on other modules, the dependency graph displays in the error message.

{:.bs-callout-info}
It's possible that module A's `composer.json` declares a conflict with module B but not vice versa.

*Command line [module enable or disable subcommand]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html) only:* To force a module to be enabled or disabled regardless of its dependencies, use the optional `--force` argument.

{:.bs-callout-info}
Using `--force` can disable your Magento store and cause problems accessing the Magento Admin.
