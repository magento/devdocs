In Magento version 2.2, we introduce a new way to deploy to production with minimal downtime. We refer to this as _pipeline deployment_ because the deployment process occurs on different systems.

We also provide the ability to maintain consistent configurations for all pipeline deployment systems. It's a simple but powerful model that enables you to separate ordinary configuration settings from either system-specific settings (like host and port) or sensitive settings (such as names and passwords).

## Reduced downtime deployment

Because you deploy static assets and compile code on a machine separate from your production system, you minimize downtime. Downtime on your production system is limited to the amount of time required to transfer static files and compiled code to the server.

## Deployment systems

We use the following terms to describe the systems involved with deployment.

Development system
: Machine on which developers work to customize code; and install extensions, themes, and language packages from Magento Marketplace. In addition, you make all configuration changes on your development system. You can have many development systems.

Build system
: One system on which you deploy static assets and compile code for your production system. Because you build these assets on a system not in production, your production system's downtime is minimized.

Your build system does not have to have Magento installed on it. It needs only the Magento code but no database connection is required. Also, your build system doesn't need to be a physically separate server.

Staging system
: _Optional_. You can optionally set up a staging system to use for final testing of all integrated code, including User Acceptance Testing (UAT). Set up a staging system the same way you set up a production system. Except for the fact that staging is not your live store and doesn't process orders from customers, it's identical to production.

Production system

: Your live store. You should make minimal direct configuration changes here, and certainly nothing that has not been tested on a Staging instance. If possible, make configuration changes with [Data Patches]({{page.baseurl}}/extension-dev-guide/declarative-schema/data-patches.html) that have been tested on a Staging/Development instance.
