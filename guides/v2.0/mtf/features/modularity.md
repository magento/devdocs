---
layout: default
group: mtf-guide
subgroup: 45_Features
title: Modularity in the Functional Testing Framework
menu_title: Modularity
version: 2.0
github_link: mtf/features/modularity.md
---

## About modularity

The Functional Testing Framework (FTF) enables you to follow the principle of modularity as Magento does. Functional tests for each module are collected in separate directory with the name of corresponding module.

![Functional tests modules image]({{site.baseurl}}common/images/mtf_modularity_dirs.png)

Modularity gives the following advantages:

 - You can add and remove Magento modules with no affect to functional tests. For this purpose the FTF has a special structure of functional test, which is split into different [entities].
 - You can use scenarios in functional testing. Test flow in [scenario tests] can be modified.

It is achieved due to the FTF capabilities like:

 - merging that is applicable for [fixture], [data set], [page], [fixture repository]
 - [extending a fixture].


<!-- LINK DEFINITIONS -->

[entities]: {{page.baseurl}}mtf/mtf_entities.html
[scenario tests]: {{page.baseurl}}mtf/mtf_entities/mtf_scenariotest.html
[fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html
[extending a fixture]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend
[data set]: {{page.baseurl}}mtf/mtf_entities/mtf_dataset.html
[page]: {{page.baseurl}}mtf/mtf_entities/mtf_page.html
[fixture repository]: {{page.baseurl}}mtf/mtf_entities/mtf_fixture-repo.html
