---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Fixture Repository
menu_order: 2
github_link: mtf/mtf_entities/mtf_fixture-repo.md
---
<h2 id="mtf_repository_overview">Fixture repository overview</h2>

The repository stores pre-defined data for the fixture.
It contain only data sets with fields data that are used in the test.
Repositories are stored in the `Repository` directory in the module to which they belong.
Reference to the repository is placed in fixture XML file in attribute named `repository`.

In this topic you will learn how to create, use and merge a repository.