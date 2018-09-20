---
group: inventory
title: Inventory management architecture
---

Magento 2 is a highly modular system that allows 3rd-party developers to extend and customize the system on many levels. As a result, you can replace or add any component (module) without affecting the rest of the system. Replaceability (interchangeability) was one of the main reasons behind introducing Service Layer in Magento 2, as utilizing service contracts and providing extension over them, 3rd party developers could enhance out-of-the-box business logic or replace one without breaking the system and other extensions relying on these contracts.

In Magento 2, a set of interfaces in a module's `Api` directory typically define the service contracts, including the APIs and their implementations. A module interface expresses the elements (entity interfaces and services to manipulate them) that the module require. These elements represent a gateway for communication with other modules. The implementation contains the working business logic that corresponds to the elements declared in the interface.

(not sure what to do with the next paragraph)

By placing service contracts (APIs), implementations, and UI code in the same module, we combine different layers of the system in the scope of one component. So that there could be different scenarios and reasons for extension/customization which would affect different layers of the system, for example, to customize UI 3rd party dev would still need to customize the same module as if he would like to substitute implementation for out-of the-box business logic. Even if a developer needs to provide fully custom own UI - he/she would still end up having out-of-the-box UI in the module, it's just not possible not to have it in the codebase, even if developer no need it at all (i.e. usage Magento in a headless way).


## Desirable state of modularity

Implementing a good modular architecture means having a loose coupling between components of the system, reducing dependencies on components that are not needed for a particular deployment. To allow modules to be swapped out, we we have designed the Inventory Management modules to follow the [single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) (SRP). Each module has responsibility over a single part of the functionality, and all of its services are narrowly aligned with that responsibility.

Applying SRP to module responsibilities while taking into account the multi-layered architecture of Magento, we end-up having independent modules responsible for:

* Service contract APIs
* Implementation of the business logic for APIs
* User interface. It makes sense to segregate AdminUI and FrontendUI, as it's possible to have two different stacks of technology:
  - AdminUI (using UI components)
  - FrontendUI (using [PWA](https://magento-research.github.io/pwa-studio/) studio stack of technology React/Redux)

Now, instead of creating one module that covers a specialized business domain, we create up to four modules, each one responsible for a dedicated layer of the system to provide high granularity for customizations. For example, in the standard Magento architecture, the `InventorySales` module would have contained all the APIs, business logic, and UI definitions. Now, these responsibilities are defined in the `InventorySales`, `InventorySalesAdminUI`, `InventorySalesApi`, and `InventorySalesFrontendUI` modules.

This approach implies additional code limitations in the modules:

* All modules should depend on the API module. Implementations could be easily swapped via `di.xml`.
* API modules should contain web API tests. These tests cover API endpoints agnostically to the implementation details. Example: `InventoryApi\Tests\Api\*`
* Only UI modules should contain MFTF tests, because these tests cover the interaction between the user and the UI. Example: `InventoryCatalogAdminUi\Test\Mftf\*`.

## Headless and standard installations

Many merchants have installed a headless version of Magento. These merchants have integrated Magento with external Enterprise Resource Planning (ERP) software, and they often consider the ERP software to be the "source of truth" for processes like order processing and inventory tracking. The ERP provides its own UI for managing information and processes. Attempting to use the Magento UI to manage the same things would be excessive and would lead to sophisticated bi-directional synchronization of all changed data.

Because of the modular architecture of the Magento Inventory Management, a merchant can easily disable the UI, because That's easy to do that having dedicated modules responsible for Admin and Frontend UI.

### Dependencies in a headless installation

In headless installations, Magento Inventory Management is dependent on the following Magento 2.3 modules:

* BundleProduct
* Catalog
* CatalogInventory (legacy)
* ConfigurableProduct
* EAV
* GroupedProduct
* ImportExport
* Sales
* Store

### Dependencies in a standard installation

For non-headless installations, Magento Inventory Management has the  will have additional dependencies on:

* Backend
* BundleProduct
* Catalog
* CatalogInventory (legacy)
* ConfigurableProduct
* Directory
* EAV
* GroupedProduct
* ImportExport
* Reports
* Sales
* Shipping
* Store
* UI
