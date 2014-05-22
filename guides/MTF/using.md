# Using the Magento Test Framework (MTF)

This page discusses how to use the MTF.

## Contents

*	[Introduction](#introduction)
*	[Prerequisites](#prerequisites)
*	[Tips for Creating Your Tests](#tips-for-creating-your-tests)
*	[Starting Selenium](#starting-selenium)
*	[Starting the Tests](#starting-the-tests)

## Introduction

This page discusses how to use the MTF to use the following in your tests:

*	Fixtures: Create context or preconditions for your tests.
*	Handlers: Transfer the preconditions from the fixtures.
*	Constraints: Make sure your tests attained the intended results.
*	Isolation management and strategies: Verify your tests are accurate by isolating a test, case, or suite.
*	Page and block objects: Create pages and blocks for the user interface (UI) testing

In this guide, the term _group_ means a collection of entities (tests, fixtures, pages, blocks, constraints, or handlers) that all belong to the same logical Magento module. MTF groups should have the same names as the corresponding modules in Magento code. An entity can use the entities from other modules.

## Prerequisites

*	Install and configure the MTF as discussed in [Installing and Configuring the Magento Test Framework (MTF)](install.md).
*	Make sure your Magento 2 code is up-to-date.
*	Update Composer dependencies

	Whenever code changes in Magento 2, there is a chance that the MTF vendor code had to be updated. Although rare, changes in Object Manager for example could cause an update to be required.

	Do this by running `composer update` from `dev/tests/functional`
	
## Tips for Creating Your Tests

We recommend the following:

1.	Create a group and corresponding directories for your test.
2.	Create a fixture and a handler for transferring a fixture.
3.	Create the necessary blocks and pages for a test.
4.	Create the constraints and data sets based on these constraints.
5.	Optionally create isolation scripts and specify your isolation strategy. 
6.	Write a test.


## Starting Selenium

Start Selenium (which should have been downloaded for you by Composer). Selenium can be found under the `dev/tests/functional/vendor/netwing/selenium-server-standalone` directory.

Example of starting Selenium:

```
java -jar vendor/netwing/selenium-server-standalone/selenium-server-standalone-2.39.0.jar
```

## Starting the Tests

Start your tests using PHPUnit. This can be done using your IDE or the command line.

Example using the command line:

```
cd dev/tests/functional
phpunit
```