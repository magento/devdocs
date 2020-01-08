## Clean the caches instead of disabling

Many developers tend to disable all caches on their developer instances.
We recommend only cleaning caches, without disabling all caches.
Magento runs more efficiently when you [clean the caches][] instead of disabling them completely.
Most types of caches are rarely invalidated during development.

If you [disable the caches][], we recommend only disabling Page and Block caches in development instances.
Remember to enable all caches during testing.

## Commands to avoid in the development mode

In the development mode, do not run commands for compilation, code generation and static content deployment.
These commands were built for use in production mode only.

**Do not run** production commands in development mode:

*  ```bash
   bin/magento setup:di:compile
   ```

   `setup:di:compile` generates auto-generated classes and optimized configuration caches.
   In development mode, Magento performs the generation on-demand; you do not need to run it.
   If you modified a signature of a class and need to re-generate its auto-generated factories/proxies/interceptors, remove those classes or the _generated_ folder.

*  ```bash
   bin/magento setup:static-content:deploy
   ```

   `setup:static-content:deploy` deploys static content for a store.
   In development mode, Magento performs it on-demand; you do not need to run it.

## Normal page load time on a virtual machine

If you develop on a VM and it takes longer than 2 seconds to load a Magento page, review your environment settings.

<!-- Link definitions -->

[clean the caches]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean
[disable the caches]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-en
