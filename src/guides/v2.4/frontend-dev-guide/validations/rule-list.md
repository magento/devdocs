---
group: frontend-developer-guide
title: Validation Rule List
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
redirect_to: https://developer.adobe.com/commerce/frontend-core/guide/validations/rule-list/
layout: migrated
---

This is a list of available form validation rules, ordered alphabetically.
Each rule contains a short description and a usage example.

### alphanumeric

Check if the value contains only letters, numbers, spaces or underscores.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="alphanumeric"/>
...
</form>
```

### credit-card-types

A valid credit card number of a certain type(s), that can be specified as parameters.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'credit-card-types':{'amex':true,'mastercard':true}}"/>
...
</form>
```

Possible values are: amex, mastercard, visa, dinersclub, enroute, discover, jcb, unknown, all.

### dateITA

Date in Italy, **\d{1,2}\/\d{1,2}\/\d{4}** format, i.e. **4/4/24** or **24/12/21**.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="dateITA"/>
...
</form>
```

*  `44/44/40` - false
*  `12-12-2021` - false
*  `1/1/2022` - true
*  `12/10/2022` - true

There is a sanity check, so dates such as `99/12/2021` will be false.

### dateNL

Date in Netherlands, **\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?** format.

### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="dateNL"/>
...
</form>
```

There is no sanity check so dates such as `33-12-12` will be true.

### datetime-validation

Checks that the field is not empty.

### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="datetime-validation"/>
...
</form>
```

### email2

Checks for a valid email address.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="email2"/>
...
</form>
```

### greater-than-equals-to

Checks for a value of one field being greater than or equal to a value of another field

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" value="" type="text" data-validate="{'greater-than-equals-to':'#field-5'}"/>
   <input name="field-5" id="field-5" title="Field to compare against" type="text" value=""/>
...
</form>
```

It does not check for both values to be numeric, so if `field-3` = 5 and `field-5` = 'a', it will silently accept it

### integer

Checks for a field value to be an integer, positive or negative.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="integer"/>
...
</form>
```

### ipv4

Checks for a valid IPv4 address.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="ipv4"/>
...
</form>
```

### ipv6

Checks for a valid IPv6 address.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="ipv6"/>
...
</form>
```

### less-than-equals-to

Checks for a value of one field being less than or equal to a value of another field.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" value="" type="text" data-validate="{'less-than-equals-to':'#field-5'}"/>
   <input name="field-5" id="field-5" title="Field to compare against" type="text" value=""/>
...
</form>
```

It does not check for both values to be numeric, so if `field-3` = 10 and `field-5` = '3a', it will silently accept it.

### letters-only

Checks for Latin A-Z,a-z letters only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="letters-only"/>
...
</form>
```

### letters-with-basic-punc

Checks for Latin letters and punctuation only, the regex being `a-z\-.,()'\"\s`.

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="letters-with-basic-punc"/>
...
</form>
```

### max-words

Checks that there are no more than a predefined number of words. Maximum number of words should be set as a parameter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'max-words':4}"/>
...
</form>
```

Here, it accepts no more than 4 words.

### min-words

Checks that there are not less than a predefined number of words. Minimum number of words should be set as a parameter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'min-words':4}"/>
...
</form>
```

Here, it accepts at least 4 words.

### mobileUK

Checks for a valid UK mobile number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'mobileUK':true}"/>
...
</form>
```

*  `+447911123456` - true
*  `44791112` - false

### no-marginal-whitespace

Does not allow whitespaces at the start, or at the end, of an input text.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'no-marginal-whitespace':true}"/>
...
</form>
```

### no-whitespace

Does not allow whitespaces anywhere in an input text.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'no-whitespace':true}"/>
...
</form>
```

### not-negative-amount

Checks for a non-negative number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'not-negative-amount':true}"/>
...
</form>
```

There is a sanity check, so **0a** will result in a warning.

*  `0` - pass
*  `2.4`  - pass
*  `0a` - fail
*  `+2` - fail

### password-not-equal-to-user-name

Checks that a password is not the same as a predefined string.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'password-not-equal-to-user-name':'username@domain.com'}"/>
...
</form>
```

In the example above, if you enter `username@domain.com` you will get a warning.

### pattern

Checks an input against a predefined regex pattern.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'pattern':'[a-z]'}"/>
...
</form>
```

In the example above anything except lowercase letters will trigger a warning.

### phoneUK

Checks for a valid UK phone number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'phoneUK':true}"/>
...
</form>
```

### phoneUS

Checks for a valid US phone number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'phoneUS':true}"/>
...
</form>
```

### range-words

Checks for a predefined number of words.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'range-words':[2,4]}"/>
...
</form>
```

In the example above, only a 2, 3 or 4 word input string will not trigger a warning:

*  `not used` - pass
*  `not` - fail
*  `not used before` - pass

### required-dropdown-attribute-entry

Checks that all disabled input fields (with a `required-option` class) within a table tag are empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
    <table>
       <tbody>
          <tr><th><input type="text" class="required-option" name="field-1" value="t" disabled/></th></tr>
          <tr><th><input type="text" class="required-option" name="field-2"/></th></tr>
          <tr><th><input type="text" class="required-dropdown-attribute-entry" name="field-8"/></th></tr>
       </tbody>
    </table>
    <div class="actions-toolbar">
        <div class="primary">
            <button type="submit" title="Submit" class="action submit primary">
                <span>Submit</span>
            </button>
        </div>
    </div>
</form>
```

In the example above it will trigger a warning as `field-1` is not empty.

### required-entry

Checks that a field is not empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'required-entry':true}"/>
...
</form>
```

### required-file

Checks for a file field to be populated.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="file" data-validate="{'required-file':true}"/>
...
</form>
```

### required-if-all-sku-empty-and-file-not-loaded

Makes the field required if specified fields and a specified file input are empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-3" id="field-3" title="Field 3" type="text" data-validate="{'required-if-all-sku-empty-and-file-not-loaded':{'specifiedId':'#field-5','dataSku': 'data-sku'}}"/>
 <input name="field-5" id="field-5"  type="file"/>
 <input type="text" id="field-6" data-sku=true value=""/>
...
</form>
```

In the example above, a warning is only displayed if all fields are empty.

### required-if-not-specified

Makes a field required if the dependent field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-if-not-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` is not empty, then `field-3` is not required.

### required-if-specified

Makes a field required if the dependent field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-if-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` is not empty, then `field-3` is required.

### required-number

Requires a number to be entered.

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-number':true}"/>
...
</form>
```

Warning : This tag has bugs and will accept any non-empty input.

### required-number-if-specified

Makes a field number required if the dependent field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-number-if-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` is not empty, then `field-3` is required, although any input will work, not just numbers.

### required-text-swatch-entry

Checks that all disabled input fields (with a `required-option` class) within a table tag to be empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
    <table>
       <tbody>
          <tr><th><input type="text" class="required-option" name="field-1" value="t" disabled/></th></tr>
          <tr><th><input type="text" class="required-option" name="field-2"/></th></tr>
          <tr><th><input type="text" class="required-text-swatch-entry" name="field-8"/></th></tr>
       </tbody>
    </table>
    <div class="actions-toolbar">
        <div class="primary">
            <button type="submit" title="Submit" class="action submit primary">
                <span>Submit</span>
            </button>
        </div>
    </div>
</form>
```

In the example above, it will trigger a warning as `field-1` is not empty.

### required-visual-swatch-entry

Checks that all disabled input fields (with a `required-option` class) within a table tag are empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
    <table>
       <tbody>
          <tr><th><input type="text" class="required-option" name="field-1" value="t" disabled/></th></tr>
          <tr><th><input type="text" class="required-option" name="field-2"/></th></tr>
          <tr><th><input type="text" class="required-visual-swatch-entry" name="field-8"/></th></tr>
       </tbody>
    </table>
    <div class="actions-toolbar">
        <div class="primary">
            <button type="submit" title="Submit" class="action submit primary">
                <span>Submit</span>
            </button>
        </div>
    </div>
</form>
```

In the example above it will trigger a warning as `field-1` is not empty.

### stripped-min-length

Checks that there are at least a predefined number of characters in the input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'stripped-min-length':'4'}"/>
...
</form>
```

In the example above, any input less than 4 characters will trigger a warning.

### time

Checks for a valid time between 00:00 and 23:59:59.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'time':true}"/>
...
</form>
```

### time12h

Checks for a valid time between 00:00 am and 12:00 pm. `12:01 pm` and `11:59 pm` values are also valid.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'time12h':true}"/>
...
</form>
```

Warning : The implementation has bugs, for example a valid time `00:31 am` triggers a warning.

### url2

Checks for a valid URL link.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'url2':true}"/>
...
</form>
```

*  `http://www.m2.com` - true
*  `magento.com` - false

### validate-admin-password

Checks for a valid admin password. It must be 7 or more characters long and it has to have letters and numbers only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-admin-password':true}"/>
...
</form>
```

*  `admindsdsdsd` - false
*  `minsdsdss8` - true

### validate-ajax-error

Checks for an AJAX error.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-ajax-error':true}"/>
...
</form>
```

### validate-alpha

Checks for letters (a-z or A-Z) only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alpha':true}"/>
...
</form>
```

*  `jkjkjk` - true
*  `dfdfdf1` - false

### validate-alphanum

Checks for letters (a-z or A-Z) or numbers (0-9) only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alphanum':true}"/>
...
</form>
```

### validate-alphanum-with-spaces

Checks for letters (a-z or A-Z) or numbers (0-9) or spaces only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alphanum-with-spaces':true}"/>
...
</form>
```

### validate-cc-cvn

Checks for a valid credit card identification number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-cvn':'#field-5'}"/>
  <input name="field-5" id="field-5" type="text" value="AE"/>
...
</form>
```

### validate-cc-exp

Checks for a valid credit card expiration month.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-exp':'#field-5'}"/>
  <input name="field-5" id="field-5" type="text" value="2022"/>
...
</form>
```

It interprets input as a month number with year set in a predefined field. Sanity check is limited.

*  `40` - true
*  `G` - false

### validate-cc-number

Checks for a valid credit card number based on mod 10.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-number':true}"/>
...
</form>
```

### validate-cc-type

Checks for a credit card number to match a predefined credit card type.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-type':'#field-5'}"/>
  <input name="field-5" id="field-5" type="text" value="AE"/>
...
</form>
```

Field `field-5` holds a credit card type, possible values are:

*  `SO` - Solo
*  `SM` - Switch/Maestro
*  `VI` - Visa
*  `MC` - MasterCard
*  `AE` - American Express
*  `DI` - Discover
*  `JCB` - JCB (Japan Credit Bureau)
*  `DN` - Diners
*  `UN` - UN
*  `MI` - Maestro International
*  `MD` - Maestro Domestic

### validate-cc-type-select

Checks for a credit card type to match a predefined credit card number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <select name="field-4" id="field-3" title="Field 3" data-validate="{'validate-cc-type-select':'#field-5'}">
   <option value="AE">American Express</option>
   <option value="VI">VISA</option>
   <option value="MC">MasterCard</option>
  </select>
  <input name="field-5" id="field-5" type="text" value="378282246310005"/>
...
</form>
```

### validate-cc-ukss

Checks that the Switch/Solo/Maestro issue number and start date are filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-ukss':true}"/>
...
</form>
```

It does not do any sanity check except that a field is not empty.

### validate-clean-url

Checks for a valid URL. Protocol type is not necessary.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-clean-url':true}"/>
...
</form>
```

*  `fsdsd` - false
*  `https://www.domain.com` - true
*  `http://domain.com` - false
*  `www.domain.com` - true
*  `domain.com` - false

### validate-code

Checks for an input that has only letters (a-z or A-Z), numbers (0-9) or underscore (\_), and the first character should be a letter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-code':true}"/>
...
</form>
```

*  `1ddf` - false
*  `Ad` - true

### validate-cpassword

Checks for a confirmation password to be the same as the password.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="password" id="password" title="Field 3" type="text" data-validate="{'validate-admin-password':true}"/>
   <input name="confirmation" id="confirmation" title="Field 3" type="text" data-validate="{'validate-cpassword':true}"/>
...
</form>
```

It is important to have `password` and `confirmation` IDs for the fields above.

### validate-css-length

Checks for a valid CSS length (Ex: 100px, 77pt, 20em, .5ex or 50%).

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-css-length':true}"/>
...
</form>
```

### validate-currency-dollar

Checks for a valid US dollar amount, for example $100.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-currency-dollar':true}"/>
...
</form>
```

*  `$100` - true
*  `200` - true
*  `$ 100` - false

### validate-customer-password

Checks for a password to be greater or equal to a predefined number of characters and predefined number of character classes.  Classes of characters: Lowercase, Uppercase, Digits, Special Characters.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-customer-password':true}" data-password-min-length="10" data-password-min-character-sets="2"/>
...
</form>
```

In the example above the password must be 10 or more characters long and have two or more different character classes:

*  `dfdfdfdfdfdfdfdfdfdfdfdf` - false
*  `dfdfdfdfdfdfdfdfdfdfdfdf1` - true
*  `d1$` - false

### validate-data

Checks for an input to have only letters (a-z or A-Z), numbers (0-9) or underscore (\_), and the first character should be a letter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-data':true}"/>
...
</form>
```

### validate-date

Checks for a valid date against a predefined format.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-date':{'dateFormat':'D Y'}}"/>
...
</form>
```

In the example above:

*  `09 09` - true
*  `dfdf` - false
*  `98-98` - false

### validate-date-au

Checks for a valid date in the format: dd/mm/yyyy.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-date-au':true}"/>
...
</form>
```

### validate-date-range

Checks for `From`-`To` date range.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" class="validate-date-range date-range-form-to"/>
  <input name="field-5" id="field-5" title="Field 5" type="text" class="validate-date-range date-range-form-from"/>
...
</form>
```

### validate-digits

Checks for a digits only input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-digits':true}"/>
...
</form>
```

*  `sdsd` - false
*  `34` - true

### validate-digits-range

Checks for a digits only input within a specified range. There are two ways to specify a range. You can specify a negative number as a range limit.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-digits-range':'-10--9'}"/>
  <input name="field-5" id="field-5" title="Field 5" type="text" data-validate="{'validate-digits-range':true}" class="digits-range-10-34"/>
...
</form>
```

In the example above, the first range is from `-10` to `-9` and the second range is from `10` to `34`.

### validate-email

Checks for a valid email address.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-email':true}"/>
...
</form>
```

### validate-emails

Checks for a valid email(s) separated (if several) by a comma, newline or a space.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-emails':true}"/>
...
</form>
```

*  `test@test.com` - true
*  `test@test.com,test@test2.com` - true
*  `test@test.com - test@test2.com` - false

### validate-emailSender

Checks for a valid email address although no sanity check is performed, i.e. any input is valid. Regex is `^[\S ]+$`.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-emailSender':true}"/>
...
</form>
```

### validate-fax

Checks for a valid fax number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-fax':true}"/>
...
</form>
```

*  `044-434-3434` - true
*  `111 222-2323` - true
*  `111-12-2323` - false

### validate-forbidden-extensions

Checks that an input (comma separated file extensions) does not have an extension from a predefined list.

### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-forbidden-extensions':true}" data-validation-params="jpg,ddf"/>
...
</form>
```

*  `ddff` - true
*  `jpg,png` - false
*  `ddf` - false

### validate-greater-than-zero

Checks for a number greater than zero. There is a sanity check so `dfdf` input will trigger a warning.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-greater-than-zero':true}"/>
...
</form>
```

*  `r4` - false
*  `3.4` - true
*  `+1.3` - true
*  `0` - false

### validate-identifier

Checks for a valid URL key.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-identifier':true}"/>
...
</form>
```

*  `dfdfdf` - true
*  `hepee.html` - true
*  `fdf$%.html` - false

### validate-item-quantity

Checks for a quantity number to be within `minAllowed` and `maxAllowed` and to be in `qtyIncremenets`.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-item-quantity':{'minAllowed':10,'maxAllowed':200,'qtyIncrements':4}}"/>
...
</form>
```

*  `9` - false
*  `28` - true
*  `29` - false
*  `300` - false

### validate-length

Checks for input length to be within specified limits.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-length':true}" class="minimum-length-2 maximum-length-5"/>
...
</form>
```

In the example above:

*  `f` - false
*  `fa` - true
*  `dfdfdf` - false

### validate-new-password

Checks for input to be 6 or more characters. Leading and trailing spaces are ignored.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-new-password':true}"/>
...
</form>
```

### validate-no-empty

Checks that an input is not empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-no-empty':true}"/>
...
</form>
```

### validate-no-html-tags

Checks that an input does not have HTML tags.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-no-html-tags':true}"/>
...
</form>
```

### validate-no-utf8mb4-characters

Checks that an input does not have characters that would require more than 3 bytes.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-no-utf8mb4-characters':true}"/>
...
</form>
```

### validate-not-negative-number

Checks for non-negative number input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-not-negative-number':true}"/>
...
</form>
```

### validate-not-number-first

Checks that an input does not start with a number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-not-number-first':true}"/>
...
</form>
```

### validate-number

Checks for a valid number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-number':true}"/>
...
</form>
```

### validate-number-range

Checks for a number to be within a specified range.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-number-range':'19-30'}"/>
...
</form>
```

### validate-one-required

It is supposed to check for radio buttons selection but it always returns true. There is possibly a bug in JS files.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="radio" value="1" data-validate="{'validate-one-required':true}"/>
     <input name="field-4" id="field-3" title="Field 3" type="radio" value="2"/>
     <input name="field-4" id="field-6" title="Field 6" type="radio" value="2"/>
   </div>
...
</form>
```

### validate-one-required-by-name

Checks for a radio button selection.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="radio" value="1" data-validate="{'validate-one-required':true}"/>
     <input name="field-4" id="field-3" title="Field 3" type="radio" value="2"/>
     <input name="field-4" id="field-6" title="Field 6" type="radio" value="2"/>
   </div>
...
</form>
```

### validate-optional-datetime

Validates an optional datetime field.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
        <div class="control">
                <select name="options[2][month]" id="options_2_month" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][month]">
                      <option value="">-</option>
                      <option value="1">01</option>/option>
                </select>
                <select name="options[2][day]" id="options_2_day" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][day]">
                       <option value="">-</option><option value="1">01</option><option value="2">02</option>
                </select>
                <select name="options[2][year]" id="options_2_year" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][year]">
                       <option value="">-</option><option value="2022">2022</option>
                </select>
                <input type="hidden" name="validate_datetime_2" class="validate-datetime-2" value="" data-validate="{'validate-optional-datetime':2}">
        </div>
...
</form>
```

### validate-password

Checks for an input to be 6 or more characters long. Leading and trailing spaces are ignored.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-password':true}"/>
   </div>
...
</form>
```

### validate-per-page-value

Checks for an input to be a specified value from a comma separated field.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-per-page-value':true}"/>
     <input name="field-5" id="field-5_values" type="hidden" value="1,3,4,5,6,8"/>
   </div>
...
</form>
```

*  `44` - false
*  `8` - true

### validate-per-page-value-list

Checks for comma separated numbers.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-per-page-value-list':true}"/>
   </div>
...
</form>
```

*  `kjkjdf,dfdf` - false
*  `1` - true
*  `1,3,4,5` - true

### validate-phoneLax

Checks for a valid phone number. Formatting may be lax.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-phoneLax':true}"/>
   </div>
...
</form>
```

### validate-phoneStrict

Checks for a valid phone number with strict formatting.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-phoneStrict':true}"/>
   </div>
...
</form>
```

### validate-range

Checks for an input to be within a specified range.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" class="range-9-20" title="Field 5" type="text" data-validate="{'validate-range':true}"/>
   </div>
...
</form>
```

*  `100` - false
*  `9` - true

### validate-required-datetime

Validates a required datetime field.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
        <div class="control">
                <select name="options[2][month]" id="options_2_month" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][month]">
                      <option value="">-</option>
                      <option value="1">01</option>/option>
                </select>
                <select name="options[2][day]" id="options_2_day" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][day]">
                       <option value="">-</option><option value="1">01</option><option value="2">02</option>
                </select>
                <select name="options[2][year]" id="options_2_year" class="product-custom-option admin__control-select datetime-picker" data-selector="options[2][year]">
                       <option value="">-</option><option value="2022">2022</option>
                </select>
                <input type="hidden" name="validate_datetime_2" class="validate-datetime-2" value="" data-validate="{'validate-required-datetime':2}">
        </div>
...
</form>
```

### validate-select

Checks for a select field to be selected.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
               <select name="field-4" id="field-5"  data-validate="{'validate-select':true}">
                   <option value=""></option>
                   <option value="1">1</option>
                   <option value="2">2</option>
               </select>
   </div>
...
</form>
```

### validate-ssn

Checks for a valid Social Security number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-ssn':true}"/>
   </div>
...
</form>
```

### validate-state

Checks for a valid State/Province.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-state':true}"/>
   </div>
...
</form>
```

### validate-street

Checks for a valid street address. It allows only letters (a-z or A-Z), numbers (0-9), spaces and `#`.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-street':true}"/>
   </div>
...
</form>
```

### validate-url

Checks for a valid URL.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-url':true}"/>
   </div>
...
</form>
```

### validate-xml-identifier

Checks for a valid XML-identifier (Ex: something\_1, block5, id-4).

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-xml-identifier':true}"/>
   </div>
...
</form>
```

### validate-zero-or-greater

Checks that a number is zero or greater in this field.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-zero-or-greater':true}"/>
   </div>
...
</form>
```

### validate-zip-international

Checks for a valid international zip code.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-zip-international':true}"/>
   </div>
...
</form>
```

### validate-zip-us

Checks for a valid US zip code (Ex: 90602 or 90602-1234).

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'validate-zip-us':true}"/>
   </div>
...
</form>
```

### vinUS

Checks for a valid vehicle identification number (VIN).

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'vinUS':true}"/>
   </div>
...
</form>
```

### zip-range

Checks for a zip code to be in the range 902xx-xxxx to 905-xx-xxxx.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <div class="control">
     <input name="field-4" id="field-5" title="Field 5" type="text" data-validate="{'zip-range':true}"/>
   </div>
...
</form>
```
