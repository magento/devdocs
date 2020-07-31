---
group: mftf
title: MFTF functional test reference
functional_areas:
- Test
---

<style>
.mftf-dl {
  margin-bottom: 2.5em;
}
dl dt{
  font-weight:400;
}
</style>

The Magento Functional Testing Framework runs tests on every module within Magento. These files are stored within each Module folder in the Magento repo.
This page lists all those tests so that developers can have a good sense of what is covered.

## {{ site.data.var.ce }}

{% assign functional_tests = site.data.codebase.v2_4.mftf.ce.functional-tests  %}

{% include mftf/functional-tests-template.md %}

## {{ site.data.var.ee }} specific

{% assign functional_tests = site.data.codebase.v2_4.mftf.ee.functional-tests  %}

{% include mftf/functional-tests-template.md %}

## {{ site.data.var.b2b }} specific

{% assign functional_tests = site.data.codebase.v2_4.mftf.b2b.functional-tests  %}

{% include mftf/functional-tests-template.md %}
