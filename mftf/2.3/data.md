---
mftf-release: 2.3.0
redirect_from: /guides/v2.3/magento-functional-testing-framework/2.3/data.html
---

# Input testing data

_This topic was updated due to the {{page.mftf-release}} MFTF release._
{: style="text-align: right"}

The MFTF enables you to specify and use `<data>` entities defined in XML. Default `<data>` entities are provided for use and as templates for entity creation and manipulation.
The following diagram shows the XML structure of an MFTF data object:

{%include_relative img/data-dia.svg%}

## Supply data to test by reference to a data entity

{%raw%}
Test steps requiring `<data>` input in an action, like filling a field with a string, may reference an attribute from a data entity:

```xml
userInput="{{SimpleSubCategory.name}}"
```

In this example:

* `SimpleSubCategory` is an entity name.
* `name` is a `<data>` key of the entity. The corresponding value will be assigned to `userInput` as a result.

### Environmental data

```xml
userInput="{{_ENV.MAGENTO_ADMIN_USERNAME}}"
```

In this example:

* `_ENV` is a reference to the `dev/tests/acceptance/.env` file, where basic environment variables are set.
* `MAGENTO_ADMIN_USERNAME` is a name of an environment variable.
   The corresponding value will be assigned to `userInput` as a result.

### Sensitive data

```xml
userInput="{{_CREDS.my_secret_token}}"
```

In this example:

* `_CREDS` is a constant to reference to the `dev/tests/acceptance/.credentials` file, where sensitive data and secrets are stored for use in a test.
* `MY_SECRET_TOKEN` is the name of a key in the credentials variable.
  The corresponding value of the credential will be assigned to `userInput` as a result.
* The decrypted values are only available in the `.credentials` file in which they are stored.

Learn more in [Credentials][].

## Persist a data entity as a prerequisite of a test {#persist-data}

A test can specify an entity to be persisted (created in the database) so that the test actions could operate on the existing known data.

Example of referencing `data` in a test:

```xml
userInput="$createCustomer.email$"
```

{%endraw%}
In this example:

* `createCustomer` is a step key of the corresponding test step that creates an entity.
* `email` is a data key of the entity.
  The corresponding value will be assigned to `userInput` as a result.

{%
include note.html
type="info"
content='As of MFTF 2.3.6, you no longer need to differentiate between scopes (a test, a hook, or a suite) for persisted data when referencing it in tests.

The MFTF now stores the persisted data and attempts to retrieve it using the combination of `stepKey` and the scope of where it has been called.
The current scope is preferred, then widening to _test > hook > suite_ or _hook > test > suite_.

This emphasizes the practice for the `stepKey` of `createData` to be descriptive and unique, as a duplicated `stepKey` in both a `<test>` and `<before>` prefers the `<test>` data.'
%}

## Use data returned by test actions

{%raw%}
A test can also reference data that was returned as a result of [test actions](./test/actions.html#actions-returning-a-variable), like the action `<grabValueFrom selector="someSelector" stepKey="grabStepKey>`.

Further in the test, the data grabbed by the `someSelector` selector can be referenced using the `stepKey` value. In this case, it is `grabStepKey`.

The following example shows the usage of `grabValueFrom` in testing, where the returned value is used by action's `stepKey`:

```xml
<grabValueFrom selector="someSelector" stepKey="grabStepKey"/>
<fillField selector=".functionalTestSelector" userInput="{$grabStepKey}" stepKey="fillFieldKey1"/>
```

## Hard-coded data input

The data to operate against can be included as literals in a test. Hard-coded data input can be useful in assertions.

See also [Actions](./test/actions.html).

```xml
userInput="We'll email you an order confirmation with details and tracking info."
```

## Format

The format of `<data>` is:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<entities xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:mftf:DataGenerator/etc/dataProfileSchema.xsd">
    <entity name="" type="">
        <data key=""></data>
    </entity>
    <entity name="" type="">
        <data key="" unique=""></data>
        <var key="" entityType="" entityKey=""/>
    </entity>
</entities>
```

## Principles

The following conventions apply to MFTF `<data>`:

* A `<data>` file may contain multiple data entities.
* Camel case is used for `<data>` elements. The name represents the `<data>` type. For example, a file with customer data is `CustomerData.xml`. A file for simple product would be `SimpleProductData.xml`.
* Camel case is used for the entity name.

## Example

Example (`.../Catalog/Data/CategoryData.xml` file):

```xml
<?xml version="1.0" encoding="UTF-8"?>

<entities xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:mftf:DataGenerator/etc/dataProfileSchema.xsd">
    <entity name="_defaultCategory" type="category">
        <data key="name" unique="suffix">simpleCategory</data>
        <data key="name_lwr" unique="suffix">simplecategory</data>
        <data key="is_active">true</data>
    </entity>
    <entity name="SimpleSubCategory" type="category">
        <data key="name" unique="suffix">SimpleSubCategory</data>
        <data key="name_lwr" unique="suffix">simplesubcategory</data>
        <data key="is_active">true</data>
        <data key="include_in_menu">true</data>
    </entity>
</entities>
```

This example declares two `<data>` entities: `_defaultCategory` and `SimpleSubCategory`. They set the data required for [category creation](http://docs.magento.com/m2/ce/user_guide/catalog/category-create.html).

All entities that have the same name will be merged during test generation. Both entities are of the `category` type.

`_defaultCategory` sets three data fields:

* `name` defines the category name as `simpleCategory` with a unique suffix. Example: `simpleCategory598742365`.
* `name_lwr` defines the category name in lowercase format with a unique suffix. Example: `simplecategory697543215`.
* `is_active` sets the enable category to `true`.

`SimpleSubCategory` sets four data fields:

* `name` that defines the category name with a unique suffix. Example: `SimpleSubCategory458712365`.
* `name_lwr` that defines the category name in lowercase format with a unique suffix. Example: `simplesubcategory753698741`.
* `is_active` sets the enable category to `true`.
* `include_in_menu` that sets the include in the menu to `true`.

The following is an example of a call in test:

```xml
<fillField selector="{{AdminCategoryBasicFieldSection.categoryNameInput}}" userInput="{{_defaultCategory.name}}" stepKey="enterCategoryName"/>
```

This action inputs data from the `name` of the `_defaultCategory` entity (for example, `simpleCategory598742365`) into the field with the locator defined in the selector of the `categoryNameInput` element of the `AdminCategoryBasicFieldSection`.

## Reference

### entities {#entities-tag}

`<entities>` is an element that contains all `<entity>`  elements.

### entity {#entity-tag}

`<entity>` is an element that contains `<data>` elements.

Attributes|Type|Use|Description
---|---|---|---
`name`|string|optional|Name of the `<entity>`.
`type`|string|optional|Node containing the exact name of `<entity>` type. Used later to find specific Persistence Layer Model class. `type` in `<data>` can be whatever the user wants; There are no constraints. It is important when persisting data, depending on the `type` given, as it will try to match a metadata definition with the operation being done. Example: A `myCustomer` entity with `type="customer"`, calling `<createData entity="myCustomer"/>`, will try to find a metadata entry with the following attributes: `<operation dataType="customer" type="create">`.

`<entity>` may contain one or more [`<data>`](#data-tag), [`<var>`](#var-tag), [`<required-entities>`](#requiredentity-tag), or [`<array>`](#array-tag) elements in any sequence.

### data {#data-tag}

`<data>` is an element containing a data/value pair.

Attributes|Type|Use|Description
---|---|---|---
`key`|string|optional|Key attribute of data/value pair.
`unique`|enum: `"prefix"`, `"suffix"`|optional|Add suite or test wide unique sequence as "prefix" or "suffix" to the data value if specified.

### var {#var-tag}

`<var>` is an element that can be used to grab a key value from another entity. For example, when creating a customer with the `<createData>` action, the server responds with the auto-incremented ID of that customer. Use `<var>` to access that ID and use it in another data entity.

Attributes|Type|Use|Description
---|---|---|---
`key`|string|optional|Key attribute of this entity to assign a value to.
`entityType`|string|optional|Type attribute of referenced entity.
`entityKey`|string|optional|Key attribute of the referenced entity from which to get a value.
`unique`|--|--|*This attribute hasn't been implemented yet.*

### requiredEntity {#requiredentity-tag}

`<requiredEntity>` is an element that specifies the parent/child relationship between complex types.

Example: You have customer address info. To specify that relationship:

```xml
<entity name="CustomerEntity" type="customer">
    ...
    <requiredEntity type="address">AddressEntity</requiredEntity>
    ...
</entity>
```

Attributes|Type|Use|Description
---|---|---|---
`type`|string|optional|Type attribute of `<requiredEntity>`.

### array {#array-tag}

`<array>` is an element that contains a reference to an array of values.

Example:

```xml
<entity name="AddressEntity" type="address">
    ...
    <array key="street">
        <item>7700 W Parmer Ln</item>
        <item>Bld D</item>
    </array>
    ...
</entity>
```

Attributes|Type|Use|Description
---|---|---|---
`key`|string|required|Key attribute of this entity in which to assign a value.

`<array>` may contain [`<item>`](#item-tag) elements.

### item {#item-tag}

`<item>` is an individual piece of data to be passed in as part of the parent `<array>` type.

{%endraw%}
