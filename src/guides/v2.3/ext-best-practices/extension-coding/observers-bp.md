---
group: extension-best-practices
subgroup: 02_Extension-Coding
title: Observers Best Practices
menu_title: Observers best practices
menu_order: 4
functional_areas:
  - Standards
---

### Overview
[Observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html) are capable of modifying the behavior of a Magento application because they are dynamically injected into the execution flow. Poorly designed and coded observers can cause issues, instabilities, or otherwise break the application.

We encourage you to follow these best practices aimed towards reducing problems when your observer is executed.

### Best practices

#### Make your observer efficient

Try to keep your observer small and efficient by avoiding complex computations, if possible. This is especially important when your observer is listening to an [event](https://glossary.magento.com/event) that is frequently dispatched. Having complex computations in your observer can slow down application processes.

#### Do not include business logic

Your observer should not contain logic other than what is needed for it to run. Business logic should be encapsulated in other classes that your observer uses.

#### Declare observer in the appropriate scope

Make your observer as specific as it needs to be. Declare your observer in the appropriate area:

| Area | File location | Description |
| --- | --- | --- |
| `global` | `<module-dir>/etc/events.xml` | Observer will be executed in all areas: `adminhtml`, `crontab`, `frontend`, `graphql`, `webapi_rest`, `webapi_soap`. |
| `adminhtml` | `<module-dir>/etc/adminhtml/events.xml` | Observer will be executed in the `adminhtml` area only. |
| `crontab` | `<module-dir>/etc/crontab/events.xml` | Observer will be executed in the `crontab` area only. |
| `frontend` | `<module-dir>/etc/frontend/events.xml` | Observer will be executed in the `frontend` area only. |
| `graphql` | `<module-dir>/etc/graphql/events.xml` | Observer will be executed in the `graphql` area only. |
| `webapi_rest` | `<module-dir>/etc/webapi_rest/events.xml` | Observer will be executed in the `webapi_rest` area only. |
| `webapi_soap` | `<module-dir>/etc/webapi_soap/events.xml` | Observer will be executed in the `webapi_soap` area only. |

{:.bs-callout-info}
It is `NOT RECOMMENDED` to register everything in the `global` area, as the bootstrapping process will become much heavier. For example, the application must run and process additional checks for your observer.

#### Avoid cyclical event loops

Cyclical event loops occur when your observer calls the method of an object that dispatches an event that triggers a chain of events that ends up dispatching that same initial event that executes your observer in a recurring manner. Make sure your observer is not dispatching an event that it immediately listens to or will listen to in the chain of events that follows.

#### Do not rely on invocation order

Your observer should not make assumptions about the order in which it will be invoked nor should it rely on the execution of another observer. Observers listening to the same event may be invoked in any order when that event is dispatched.

### Recommended Reading

*  [Events and Observers]({{ page.baseurl }}/extension-dev-guide/events-and-observers.html)
