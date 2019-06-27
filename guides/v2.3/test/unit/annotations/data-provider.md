---
group: testing
title: Data Provider Annotation
---

A Data Provider allows you to define the test once and run it multiple times with different inputs, for checking multiple use cases.

## Format

```php
/**
 * @dataProvider dataProviderOne
 */
 public function testOne()
 {
    ...
 }

 /**
  * @return array
  */
 public function dataProviderOne()
 {
     return [];
 }
```

For using a data provider you need to follow up the next steps:

1. Create a public method, that returns an array of data sets
1. Add a data provider annotation in the docblock of your test method
1. Pass the data set as arguments to your test method

### Example 1

```php
namespace Vendor\Module;

use PHPUnit\Framework\TestCase;

class ClassToTest extends TestCase
{
  /**
    * @param string $scope
    *
    * @dataProvider dataProviderScopes
    */
  public function testOne(string $scope)
  {
      // Do your magic here
  }

  /**
    * @return array
    */
  public function dataProviderScopes(): array
  {
      return [
          ['default'],
          ['store'],
      ];
  }
}
```

### Example 2

Lets check the following practical example, where we will be checking if an email is valid.

```php
namespace Vendor\Module;

use PHPUnit\Framework\TestCase;

class ClassToTest extends TestCase
{
  /**
    * Testable object
    */
  private $sut;

  ...

  /**
    * Test if the email is valid
    *
    * @param string $email
    * @param bool $result
    *
    * @dataProvider dataProviderEmails
    */
  public function testIsValidEmail(string $email, bool $result)
  {
      $expected = $this->sut->isValidEmail($email);
      $this->assertEquals($expected, $result);
  }

  /**
    * @return array
    */
  public function dataProviderEmails(): array
  {
    return [
      ['first#example.com', false],
      ['second@example', false],
      ['second.example.com', false],
      ['@example.com', false],
      ['@example@example.com', false],
      ['example@example.com', true],
    ];
  }
}
```

Based on our set of data, we expect that only the last email is a valid one.

Instead of having numeric keys, you can also use string keys to name each of the data set, it is easier to find the failing data set.
Check the below example:

```php
/**
 * @return array
 */
public function dataProvider(): array
{
  return [
      'First Data Set' => ['test-1', false],
      'Second Data Set' => ['test-2', false]
  ];
}
```

You can read more about PHPUnit Data Providers [here](https://phpunit.readthedocs.io/en/8.0/writing-tests-for-phpunit.html#data-providers){:target="_blank"}.
