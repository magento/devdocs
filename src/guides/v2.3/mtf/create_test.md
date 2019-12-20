---
group: functional-testing-framework-guide
title: Create a test in the Functional Testing Framework
---

The Magento testing framework (FTF) works with functional tests only. Functional tests check that an application meets business requirements. These requirements usually are collected in the functional specifications that describe expected behavior of the application.

Tests usually cover functionality of a business [entity](https://glossary.magento.com/entity). A goal is to find discrepancies between expected and real behavior of the product.
Magento provides functional tests in the `<magento2_root_dir>/dev/tests/functional/` directory. In this guide, we call them [out-of-the-box tests][out-of-the-box test]. You can use them to test the default Magento functionality. Also, you can create a test [extending from the out-of-the-box test][], or [create your own functional tests][].

{:.ref-header}
Related topics

[Out-of-the-box test][out-of-the-box test]

[New functional test: Theory][]

[New functional test: Practice][]

<!-- LINK DEFINITIONS -->

[out-of-the-box test]: {{ page.baseurl }}/mtf/create_test/out-of-the-box.html
[extending from the out-of-the-box test]: {{ page.baseurl }}/mtf/create_test/new_test.html#extending-oob-test
[create your own functional tests]: {{ page.baseurl }}/mtf/create_test/new_test.html#create-test
[New functional test: Theory]: {{ page.baseurl }}/mtf/create_test/new_test.html
[New functional test: Practice]: {{ page.baseurl }}/mtf/create_test/create_new_test.html
