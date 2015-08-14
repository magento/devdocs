---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Magento Testing Framework Entities
menu_title: ENTITIES
menu_node: parent
github_link: mtf/mtf_entities.md
---

Magento Testing Framework entities enable you to create and modify functional tests. 
For example, we want to cover with functional tests the process of creation the widget Catalog Category Link.
To do this we have to create <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html">injectable test</a>. As widget functionality is not covered with tests, so we need to create widget <a href="{{site.gdeurl}}/mtf/mtf_entities/mtf_fixture.html">fixture</a>, that is our widget object for testing. Test data that will be applied to widget object we will describe in <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html">repository</a>. We want to automatize creating of Catalog Category Link widget, that requires to have a category. As far creating of new category is out of the scope of our testing, we will use <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html">handlers</a> to prepare it. To understand what blocks and pages we need in our test, we should perform testing manually. Using <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_block.html">blocks</a> and <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_page.html">pages</a> entities we can create and define them. When we have all building blocks for our test we can determine steps of <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html">injectable test</a>. Any testing requires different variations of <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html">data sets</a> and corresponding <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html">constraints</a>. 

Following is a list of all MTF entities.

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html">Fixture</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_overview">Fixture overview</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_create">Create new fixture</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_read">Read and update new fixture</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_repositoy">Add repository to the fixture field</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_source">Add data source to the fixture field</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_merge">Merge fixtures</a>
  - <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture.html#mtf_fixture_extend">Extend fixture</a>
  
  
- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_fixture-repo.html">Fixture Repository</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_handler.html">Handler</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_block.html">Block</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_typified-element.html">Typified element</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_page.html">Page</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_constraint.html">Constraint</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_dataset.html">Data set</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_testcase.html">Test case</a>

- <a href="{{site.gdeurl}}mtf/mtf_entities/mtf_scenariotest.html">Scenario test</a>


