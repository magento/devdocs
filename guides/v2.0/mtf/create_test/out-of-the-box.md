---
layout: default
group: mtf-guide
subgroup: 40_Approach
title: Create a test in the Functional Testing Framework
menu_title: Out-of-the-box test
menu_order: 1
version: 2.0
github_link: mtf/create_test/out-of-the-box.md
---

The out-of-the-box tests are the ready to use functional tests developed by Magento. You can find them in the `<magento2_root_dir>/dev/tests/functional` directory.

### Coverage {#coverage}

Test coverage of the out-of-the-box test depends on a module which it belongs to. The out-of-the-box tests cover the basic functionality of the Magento application. In general, they cover the CRUD functionality for all basic entities (CRUD is an abbreviation for "create", "read", "update", "delete" actions). The most important modules are covered better.

### Usage {#oob-usage}

You can use out-of-the-box tests in:

- Regression testing, to check that new changes don't break existing Magento functionality
    
- Sanity testing, to check the basic functionality after any Magento changes were made
    
- Acceptance testing: 
    - in combination with your own tests
    - to test a new feature, to check that feature works and it doesn't break functionality of the Magento application (all other tests passed)
 
### How to use {#how-to-use}

See [Run the test][] topic.

<!-- LINK DEFINITIONS -->

[Run the test]: {{page.baseurl}}mtf/mtf_quickstart/mtf_quickstart_runtest.html
