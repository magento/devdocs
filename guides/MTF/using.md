# Using the Magento Test Framework (MTF)

This page discusses how to use the MTF.

## Prerequisites

*	Install and configure the MTF as discussed in [Installing and Configuring the Magento Test Framework (MTF)](install.md).
*	Make sure your Magento 2 code is up-to-date.
*	Update Composer dependencies

	Whenever code changes in Magento 2, there is a chance that the MTF vendor code had to be updated. Although rare, changes in Object Manager for example could cause an update to be required.

	Do this by running `composer update` from `dev/tests/functional`

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