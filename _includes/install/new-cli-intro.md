Magento has one command-line interface that performs both installation and configuration tasks: `<your Magento install dir>/bin/magento`. The new interface performs multiple tasks, including:

-   Installing Magento (and related tasks such as creating or updating the database schema, creating the deployment configuration, and so on).
-   Clearing the cache.
-   Managing indexes, including reindexing.
-   Creating translation dictionaries and translation packages.
-   Generating non-existent classes such as factories and interceptors for plug-ins, generating the dependency injection configuration for the object manager.
-   Deploying static view files.
-   Creating CSS from LESS.

Other benefits:

-   A single command (`php <your Magento install dir>/bin/magento list`) lists all available installation and configuration commands.
-   Consistent user interface based on Symfony.
-   The CLI is extensible so third party developers can "plug in" to it. This has the additional benefit of eliminating users' learning curve.
-   Commands for disabled modules do not display.
