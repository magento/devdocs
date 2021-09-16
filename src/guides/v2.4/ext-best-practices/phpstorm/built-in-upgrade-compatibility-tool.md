---
group: extension-best-practices
title: The built-in Upgrade Compatibility Tool (MVP)
functional_areas:
- Standards
---

The built-in Upgrade Compatibility Tool aims to achieve the same issues coverage as original Adobe Commerce [Upgrade Compatibility Tool]({{site.baseurl}}/upgrade-compatibility-tool/introduction.html).
There are issues that covered by this MVP version:

| Code | Name |
| ----- | ------ |
| 1131 | extending from @deprecated class |
| 1132 | importing @deprecated class |
| 1332 | importing @deprecated interface |
| 1134 | using @deprecated class |
| 1334 | using @deprecated interface |
| 1234 | using @deprecated constant |
| 1534 | using @deprecated property |
| 1235 | overriding @deprecated constant |
| 1535 | overriding @deprecated property |
| 1337 | inherited from @deprecated interface |
| 1338 | implemented @deprecated interface |
| 1439 | call @deprecated method |

Complete list of inspections that are already available in the original tool can be found by the [following link]({{site.baseurl}}/upgrade-compatibility-tool/errors.html).

This feature can be used in three different ways from the user's point of view:

*  run compatibility inspections in a [run tool window](https://www.jetbrains.com/help/idea/run-tool-window.html) with the familiar output as in the original Adobe Commerce [Upgrade Compatibility Tool]({{site.baseurl}}/upgrade-compatibility-tool/introduction.html)
*  run inspections in a real time in the files that are opened in the editor (default)
*  [run inspections manually](https://www.jetbrains.com/help/idea/running-inspections.html) through the user interface on the selected scope of files (default)

It was developed with an aim to use IntelliJ IDEA in most effective way. So, inspections that are running during
the code analysis can alternatively be enabled in the [inspections settings](https://www.jetbrains.com/help/idea/code-inspection.html)
`Preferences -> Editor -> Inspections -> UCT`:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-inspections-settings.png)

It allows you to see the problematic code just in real time without running it intentionally during code writing or even files visiting.
**The result of the real time inspection is most suitable for using during development to be always compatible with the future versions**:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-inspections-highlighting.png)

The second cool IntelliJ IDEA tool under which we adapted our code by reusing **Inspections** feature of it is running inspections through special action
`Code -> Inspect Code` or just open context menu under target directory to allow IntelliJ IDEA populates path to analyse for you automatically:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/run-inspect-code-from-context-menu.png)

By calling **Inspect Code** action from the context menu we have Inspection Scope populated for us automatically.
The last thing to configure here is **Inspection Profile**.
By default, here will be the **Project Default** profile with all inspections that are not connected to our goal.

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-intellij-idea-based-analysis-configuration.png)

So you can just create new profile with the only UCT inspections enabled (more about that [read here](https://www.jetbrains.com/help/idea/customizing-profiles.html)):

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-inspections-profile.png)

For this inspection type you don't need to have UCT inspections enabled for your project.
**The result of this inspection is most suitable for code refactoring during problematic code elimination**:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-analysis-through-intellj-idea-inspect-code-action.png)

**The most powerful inspection type is the execution of compatibility inspections in a [run tool window](https://www.jetbrains.com/help/idea/run-tool-window.html) with the familiar output as in the original Adobe Commerce [Upgrade Compatibility Tool]({{site.baseurl}}/upgrade-compatibility-tool/introduction.html)**.

**Advantages from using this one:**

*  all problems gathered in one place
*  there are navigations to the problem files, stored report in a json format, link to the web page with detailed description of all the error codes
*  this report can be easily used from the merchant, management or agencies sides
*  there is a complexity score that helps compare the upgrade complexity from practice side for agencies

Before using it you should configure the built-in UCT in the similar way as the CLI Run Configuration.
All fields are described above in the Upgrade Compatibility Tool Run Configuration section and even more detailed
in the [official documentation]({{site.baseurl}}/upgrade-compatibility-tool/run.html).
Go to the UCT configuration dialog `Tools -> Configure The Upgrade Compatibility Tool` and configure it as needed:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/uct-settings.png)

Right after that you can run this tool in any time you need that `Tools -> Run The Upgrade Compatibility Tool`:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/run-the-built-in-uct-min.gif)

For this inspection type you don't need to have UCT inspections enabled for your project, but it is more comfortable to see visually the problems in the file
after navigating to it.

**Keep in mind**, that for all inspection types the target Magento version (coming version) is configured
in the built-in UCT configuration dialog `Tools -> Configure The Upgrade Compatibility Tool`.
This also applicable for other selected configurations on the screenshot below:

![]({{site.baseurl}}/common/images/phpstorm/built-in-uct/shared-configurations-for-all-inspection-types.png)
