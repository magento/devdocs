---
group: software-update-guide
title: Run Configuration
ee_only: True
redirect_from:
  - /safe-upgrade-tool/run-configuration.html
functional_areas:
  - Upgrade
---

The Upgrade Compatibility Tool project Run Configuration
Run Configurations are used to run internal and external processes from within IntelliJ Platform based products. To get familiar with the concept of a Run Configuration refer Run/Debug Configuration section of IntelliJ IDEA Web Help.

The Upgrade Compatibility Tool Run Configuration is a GUI for the Upgrade Compatibility Tool.

The UCT Run Configuration provides the ability to configure UCT installed for the project via composer. If the UCT was installed separately (outside the project), such UCT executable can also be chosen in the dedicated Run Configuration. In the case when the UCT was not found in the current project, the corresponding message is shown with the link that provides the ability to download and install the UCT for the current project. Be aware, that the UCT is an Adobe Commerce feature, so to install it you should have your Adobe Commerce license key.

The UCT Run Configuration template can be found in the Run/Debug configurations dialog -> Add New Configuration -> Upgrade Compatibility Tool: