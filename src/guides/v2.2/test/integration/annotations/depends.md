---
group: testing
title: Depends Annotation
---

The `@depends` annotation helps you to define some dependencies between methods.

## Format

```php
/**
 * @depends methodName
 */
```

{:.bs-callout-warning}
Please note that dependencies don't define the order in which the test methods are executed, so you still have to keep to proper order for your methods.

### Example 1

Let's check the following basic example.

```php
/**
 * @return int
 */
public function testOne(): int
{
    $number = 2;
    $this->assertEquals(2, $number);

    return $number;
}

/**
 * @depends testOne
 *
 * @param $number
 */
public function testNumber($number)
{
    $this->assertEquals(2, $number);
}
```

### Example 2

{:.bs-callout-info}
If using multiple dependencies, arguments are passed in the annotations' defined order.

```php
/**
 * @return int
 */
public function testTwo(): int
{
    $number = 2;
    $this->assertEquals(2, $number);

    return $number;
}

/**
 * @return int
 */
public function testOne(): int
{
    $number = 1;
    $this->assertEquals(1, $number);

    return $number;
}

/**
 * @depends testOne
 * @depends testTwo
 *
 * @param $one
 * @param $two
 */
public function testNumber(int $one, int $two)
{
    $this->assertEquals(1, $one);
    $this->assertEquals(2, $two);
}
```

### Example 3

Let's check the following practical example, where we'll be checking the customer email by customer ID.

```php
use Magento\Customer\Api\CustomerRepositoryInterface;
use Magento\Customer\Api\Data\CustomerInterface;
use Magento\TestFramework\Helper\Bootstrap;
...

/**
 * @magentoDataFixture Magento/Customer/_files/customer.php
 */
public function testLoadCustomer(): CustomerInterface
{
    $customerId = 1;
    $objectManager = Bootstrap::getObjectManager();
    $customerRepository = $objectManager->create(CustomerRepositoryInterface::class);

    return $customerRepository->getById($customerId);
}

/**
 * @depends testLoadCustomer
 *
 * @param CustomerInterface $customer
 */
public function testEmail(CustomerInterface $customer)
{
    $this->assertEquals('customer@example.com', $customer->getEmail());
}
```

You can read more about PHPUnit dependency annotation [here](https://phpunit.readthedocs.io/en/8.2/annotations.html#depends){:target="_blank"}.
