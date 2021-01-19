---
group: contributor-guide
title: Pull Request Tests
---

The following topics are included in this guide:

-  [Magento Automated Testing](#magento-automated-testing)
-  [Running tests for a pull request](#run-pull-request-tests)
-  [Related pull requests](#related-pull-requests)

## Magento Automated Testing {#magento-automated-testing}

Magento Automated Testing is a testing infrastructure that allows to run the set of all required Magento Automated Tests against code in Pull Requests. It can be triggered via a comment in a pull request. The running tests are represented both as Pull Request statuses and as Pull Requests checks.

Below there's information about all kinds of tests available currently.

### Semantic Version Checker

Semantic Version Checker is a test that compares the changed code against the mainline and detects levels of code changes. It shows a list of changes grouped by the class (level) of changes (MAJOR, MINOR, PATCH) with explanation of the change (Class was removed, [public] Method implementation changed, [private] Property has been removed etc.) The allowed level is PATCH.
Please see the [Backward Compatibility Development Guide](https://devdocs.magento.com/guides/v2.3/contributor-guide/backward-compatible-development/index.html) for more information

### Functional Tests

Functional Tests are PHPUnit-based tests that check Magento functional behavior from the perspective of a user. They press buttons and links in browser, fill and submit forms, look and check what is displayed in the browser's window like real users.

### Sample Data Tests

Sample Data Tests are functional tests that run on Magento with Sample Data included.

### Unit Tests

Unit tests are PHPUnit-based (for PHP) and Jasmine-based (for JS) tests which check the behavior of single methods of Magento classes. The purpose is to validate that each unit of Magento performs as designed.

### Integration Tests

Integration Tests are PHPUnit-based tests that check the behaviour of group of Magento components. They include three types of tests:

-  Standard Integration tests which check Magento behavior on installed instance.
-  Setup Integration tests which check Magento behavior during the installation process.
-  Integration Integrity tests which check the consistency of installed Magento instance (configuration files, DB schemes etc.)

### WebAPI Tests
WebAPI Tests are functional tests that check the behavior of Magento Web API endpoints. They send requests to endpoints of installed Magento instance and and then check the response received and the state of the instance. Currently they include three kinds of tests:

-  SOAP Web API tests
-  REST Web API tests
-  GraphQL WEB API tests

### Static Tests

Static Tests are set of different checks that analyze each single file of Magento code base separately. Most of them analyze the whole Magento code base whereas some run only against the change set.

### Database Compare

Database Compare is a test which compares DB schema and data between freshly installed Magento instance (from the PR code) and another instance which was upgraded to the PR code from the pre-previous latest minor release Magento version.

### Magento Component Health Index

Magento Component Health Index is a test which analyses Magento code quality and calculates weighted health index (100 is great, lower is worse) per Magento Component (module). The index is calculated based on 3 groups of indicators:

-  General code quality indicators (GCQI). The metrics described [here](http://pdepend.org/documentation/software-metrics/index.html)
-  Magento-specific code quality indicators (MSCQ)
-  Legacy API usage indicators (LAI)

Additional information on Magento Automated Testing can be found on [Magento 2 project wiki](https://github.com/magento/magento2/wiki/Magento-Automated-Testing).

## Running tests for a pull request {#run-pull-request-tests}

Automated tests can be triggered manually with an appropriate comment:

-  `@magento run all tests` - run or re-run all required tests against the PR changes
-  `@magento run <test-build(s)>` - run or re-run specific test build(s)

For example: `@magento run Unit Tests` or `@magento run Unit Tests,Integration Tests`

`<test-build(s)>` is a comma-separated list of build names. Build names can be copied from the Checks section.

## Test results

The build progress and test results are indicated by check runs under the pull request conversation.

Click on the "Details" link to see the results summary and links to corresponding Allure reports.

## Related pull requests {#related-pull-requests}

When the contribution requires changes to more than one repository merged simultaneously, such pull requests should be linked using "Related Pull Requests" description section.

The related pull requests should be specified in the pull request description in the following format:

```lang-none
### Related Pull Requests
https://github.com/<organization>/<repository>/pull/<pull request number>
<links to other realted PRs>
<!-- related pull request placeholder -->
```

When the tests are launched against a pull request that contains links to related pull request in the description the related pull requests branches will be used as a code base for the tests instead of mainline.
Check runs will be updated for each of the related pull requests.

Related pull requests are delivered to magento repositories simultaneously.
