---
layout: default
group: mtf-guide
subgroup: D_Entities
title: Entities of the Magento Testing Framework
menu_title: Data set
menu_order: 8
github_link: mtf/mtf_entities/mtf_dataset.md
---

<h2 id="mtf_dataset_overview">Data set overview</h2>
Data sets are used for filling test forms with prepared data.
A data set can have several variations.
Each variation has constraints that are checked at the end of the test flow.

This topic shows how to prepare data for the test.

<h2 id="mtf_dataset_structure">Data set structure</h2>
First, let's take a look at `CreateSimpleProductEntityTest.xml` file for test. This file is responsible for filling simple product form with prepared data. 

<p><img src="{{ site.baseurl }}common/images/Dataset_mapping.png"></p> 

<h4>Data set has the following structure:</h4>

1. Data sets should be saved as a `.xml` file applying `dev/tests/functional/vendor/magento/mtf/etc/variations.xsd` schema.

2. The first node after root in the data set - testCase must have attribute name as `testname`, `summary` as short description of test and `ticketId` as test ID.

3. TestCase node has child variations which present a data set. Variation has one required attribute name - unique name which presents data set name and some options (method and firstConstraint which present first constraint in order). Variation contains data and constraint nodes.

4. Data node attribute name can be formed using next strategy (product/data/name):
    
    product - entity name ($product is the variable that will be used in the test)

    data - required intermediate value for all fixtures
    
    name - name of the field

    For example, field name is responsible for filling name input of the form. Field sku - for     filling sku input of the form. Field price is an array and it is filling price input of the form.

5. Field `tax_class_id` is data source of the simple product fixture. It is followed by the name `dataSet` (`product/data/tax_class_id/dataSet`).

6. Field `custom_options` is preset of the simple product fixture. Some data can be taken out into separate "preset". It is following by the name `preset` (`product/data/custom_options/preset`). It is responsible for filling custom options in Custom Options tab in this example. The difference between `dataSet` and `preset` is that `dataSet` is used for fields which represent another entity (tax class, category and so on) and `preset` is just a bundle of some data like custom options and tier prices.

7. Nodes `constraint` stand for constraints/asserts of each variation. `Constraints` have optional next and prev attributes to choose order. In our example above we have two constraints for a variation.

8. Variation should contain only data that is required for its flow and can contain `summary` as short description of test and `ticketId` as test ID.

9. Data with name `tag` can be used to customize test suite run.

<h2 id="mtf_dataset_howto">How to add data set to a test</h2>
To create a data set for Create simple product test:

1. Create .xml file with the same name as the test: `CreateSimpleProductEntityTest.xml` within TestCase directory.

2. Put data with different variations for your test into `CreateSimpleProductEntityTest.xml` file. As a result you'll have the following structure:

<p><img src="{{ site.baseurl }}common/images/Data set2.png"></p> 
