---
group: dod
title: DoD - TCO Analysis
---

## Overview

All functional changes must be analysed for the impact on merchant total cost of ownership (TCO) and the results of the analysis should be added to the pull request or issue description to meet the "Definition of Done" (DoD).

The goal of TCO analysis is to identify:

-  If the changes have impact on TCO
-  The value of the impact, that consists of
   -  The level of the change (patch/minor/major)
   -  Potential number of affected extensions/customisations (several/many/most/all)

### Changes that have impact on TCO

Changes can impact total cost of ownership if the extensions or customisations, established processes or integrations within the projects build on Adobe Commerce framework may need to be adjusted to accommodate the changes.

Some changes that have impact on TCO:

-  Result in SVC build failure on pull request
-  JavaScript changes (not covered by SVC build)
   -  Introduced or removed javascript events, classes, methods, properties or parameters
   -  Changed javascript event ordering
-  URL/Request changes
   -  Removed URL paths
   -  Removed or introduced required or optional request parameters
-  CLI commands changes
   -  Introduced or removed/renamed console commands, arguments or return codes
-  Events changes
   -  Removed or added events and their arguments
-  Removing, changing or adding default parameter values for methods
-  Removing or adding traits
-  Changing arguments or return value format of methods
-  Changing topics or consumers in message queue
-  Any layout or block changes
-  Removing or renaming of any files

### Level of change

If the changes may have TCO impact, the level of the change should be identified.
If the backward incompatible change result into SVC build failure - the level of change can be viewed in the SVC build result.
This table lists the levels for the changes that are not currently covered by SVC:

| Cusomization Point                     | Code Change                                                                                                              | Level |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------|-------|
| JavaScript Class (marked with @api)    | New class                                                                                                                | MINOR |
|                                        | New method added                                                                                                         | MINOR |
|                                        | New argument added                                                                                                       | MINOR |
|                                        | Class removed                                                                                                            | MAJOR |
|                                        | Method removed                                                                                                           | MAJOR |
|                                        | Argument removed                                                                                                         | MAJOR |
|                                        | New event                                                                                                                | MINOR |
|                                        | Renamed event                                                                                                            | MAJOR |
|                                        | Removed event                                                                                                            | MAJOR |
|                                        | New event property                                                                                                       | MINOR |
|                                        | Changed event property                                                                                                   | MAJOR |
|                                        | Removed event property                                                                                                   | MAJOR |
|                                        | Changed event ordering                                                                                                   | MAJOR |
| URL Paths (Store-Front and Admin, GET) | Path removed                                                                                                             | MAJOR |
|                                        | Removed/renamed a request parameter                                                                                      | MAJOR |
|                                        | New required request parameter                                                                                           | MAJOR |
|                                        | New optional request parameter                                                                                           | MINOR |
| Console commands and their arguments   | Command removed                                                                                                          | MAJOR |
|                                        | New required argument                                                                                                    | MAJOR |
|                                        | New optional argument                                                                                                    | MINOR |
|                                        | Removed/renamed argument                                                                                                 | MAJOR |
|                                        | New command exit code                                                                                                    | MINOR |
|                                        | New command                                                                                                              | MINOR |
| Events triggered by a component        | Event argument removed                                                                                                   | MAJOR |
|                                        | Event removed                                                                                                            | MAJOR |
|                                        | Event added                                                                                                              | MINOR |
| PHP Interface (marked with @api)       | Method parameter default value removed                                                                                   | MAJOR |
|                                        | Method parameter default value changed                                                                                   | MAJOR |
|                                        | Method parameter default value added                                                                                     | MINOR |
|                                        |                                                                                                                          |       |
| PHP Class (marked with @api)           | Method argument or return value format changed (Example: before - [1, 2, 3], after - ['items' => [1,2,3], 'count' => 3]) | MAJOR |
|                                        | Trait removed                                                                                                            | MAJOR |
| Message queue                          | Topic removed                                                                                                            | MAJOR |
|                                        | Consumer removed                                                                                                         | MINOR |
|                                        | New topic published                                                                                                      | MINOR |
| Layout handles declared by modules     | New layout page handle                                                                                                   | MINOR |
|                                        | New container/block added to handle                                                                                      | MINOR |
|                                        | Removed layout handle                                                                                                    | MAJOR |
| Static view files                      | JS/CSS/LESS file removed/moved                                                                                           | MAJOR |

### Potential number of affected customisations

In order to identify the volume of the impact the usages of the changed code should be detected in the available code/extensions/customisations.

The analysis result should indicate the proportion of reviewed modules to the modules referencing (using) the changed code.

### TCO Analysis result example

The analysis result should indicate all the changes that have TCO impact (or simply state that there is "No TCO impact").

For example, if the non-api "SomeClass::someMethod" was changed and the new required argument was added to the CLI command, the analysis result may look like:

```text
Changes have TCO impact.
Change to SomeClass::someMethod is PATCH level but impacts 5 out of 10 reviewed projects.
Change to CLI command is MAJOR level, it impacts 2 out of 10 reviewed projects.
```

The project in the example above is referring to any Adobe Commerce project with customizations.
The change impacts the project if the project custom code needs to be changed in response to the analyzed change of the core.
