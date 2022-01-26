---
group: php-developer-guide
title: Validation Rule List
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

This is a list of availale form validation rules ordered alphabetically.
Each rule contains a short description and a usage example.

### alphanumeric

Letters, numbers, spaces or underscores

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="alphanumeric"/>
...
</form>
```

### credit-card-types

A valid credit card number of a certain type(s) that could be specified as parameters

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'credit-card-types':{'amex':true,'mastercard':true}}"/>
...
</form>
```

Parameters could be: amex, mastercard, visa, dinersclub, enroute, discover, jcb, unknown, all.

### dateITA

Date in Italy, **\d{1,2}\/\d{1,2}\/\d{4}** format, i.e. **4/4/24** or **24/12/21**

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="dateITA"/>
...
</form>
```

* 44/44/40 - **false**
* 12-12-2021 - **false**
* 1/1/2022 - **true**
* 12/10/2022 - **true**

There is a sanity check so dates like `99/12/2021` will be false.

### dateNL

Date in Netherlands, **\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?** format, i.e. 

### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="dateNL"/>
...
</form>
```

There is no sanity check so dates like `33-12-12` will be true.

### datetime-validation

It checks that the field isn't empty

### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="datetime-validation"/>
...
</form>
```

### email2

It checks for a valid email address

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="email2"/>
...
</form>
```

### greater-than-equals-to

It checks for a value of one field being greater than or equal to a value of another field

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" value="" type="text" data-validate="{'greater-than-equals-to':'#field-5'}"/>
   <input name="field-5" id="field-5" title="Field to compare against" type="text" value=""/>
...
</form>
```

It doesn't check for both values to be numeric, so if `field-3` = 5 and `field-5` = 'a', it will silently accept it

### integer

It checks for a field value to be an integer, negative or positive

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="integer"/>
...
</form>
```

### ipv4

It checks for a valid IPv4 address

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="ipv4"/>
...
</form>
```

### ipv6

It checks for a valid IPv4 address

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="ipv6"/>
...
</form>
```

### less-than-equals-to

It checks for a value of one field being less than or equal to a value of another field

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" value="" type="text" data-validate="{'less-than-equals-to':'#field-5'}"/>
   <input name="field-5" id="field-5" title="Field to compare against" type="text" value=""/>
...
</form>
```

It doesn't check for both values to be numeric, so if `field-3` = 10 and `field-5` = '3a', it will silently accept it

### letters-only

It checks for latin A-Z,a-z letters only

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="letters-only"/>
...
</form>
```

### letters-with-basic-punc

It checks for latin letters and punctuation only, regex being `a-z\-.,()'\"\s`

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" class="letters-with-basic-punc"/>
...
</form>
```

### max-words

It checks for no more than predefined number of words. Max number of words should be set as a parameter.

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

It checks for more than predefined number of words. Min number of words should be set as a parameter.

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

It checks for a valid UK mobile number

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'mobileUK':true}"/>
...
</form>
```

* `+447911123456` - **true**
* `44791112` - **false**

### no-marginal-whitespace

It doesn't allow whitespaces at the start or at the end of an input text.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'no-marginal-whitespace':true}"/>
...
</form>
```

### no-whitespace

It doesn't allow whitespaces anywhere in an input text.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'no-whitespace':true}"/>
...
</form>
```

### not-negative-amount

It checks for a non negative number

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'not-negative-amount':true}"/>
...
</form>
```

There is a sanity check, so **0a** will result in a warning.

* `0` - pass
* `2.4`  - pass
* `0a` - fail
* `+2` - fail

### password-not-equal-to-user-name

It checks for a password to not be the same as a predefined string.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'password-not-equal-to-user-name':'username@domain.com'}"/>
...
</form>
```

In the example above, if you enter `username@domain.com` you'll get a warning.

### pattern

It checks input against a predefined regex pattern.

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

It checks for a valid UK phone number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'phoneUK':true}"/>
...
</form>
```

### phoneUS

It checks for a valid US phone number.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'phoneUS':true}"/>
...
</form>
```

### range-words

It checks for a predefined number of words.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'range-words':[2,4]}"/>
...
</form>
```

In the example above, only 2,3 or 4 word input string will not trigger a warning:

* `not used` - pass
* `not` - fail
* `not used before` - pass

### required-dropdown-attribute-entry

It checks for all disabled input fields (with a `required-option` class) within a table tag to be empty. 

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

In the example above it will trigger a warning as `field-1` isn't empty.

### required-entry

It checks for a field to not be empty.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="text" data-validate="{'required-entry':true}"/>
...
</form>
```

### required-file

It checks for a file field to be populated.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="example" id="example" title="Example" value="" type="file" data-validate="{'required-file':true}"/>
...
</form>
```

### required-if-all-sku-empty-and-file-not-loaded

It makes the field required if specified fields and a specified file input are empty.

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

It makes a field required if the dependant field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-if-not-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` isn't empty, `field-3` isn't required.

### required-if-specified

It makes a field required if the dependant field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-if-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` isn't empty, `field-3` is required.

### required-number

It requires a number to be entered. 

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-number':true}"/>
...
</form>
```

This tag is buggy and will accept any non-empty input.

### required-number-if-specified

It makes a field number-required if the dependant field is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'required-number-if-specified':'#field-5'}"/>
 <input name="field-5" id="field-5" type="text"/>
...
</form>
```

If `field-5` isn't empty, `field-3` is required, although any input would work, not only numbers.

### required-text-swatch-entry

It checks for all disabled input fields (with a `required-option` class) within a table tag to be empty. 

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

In the example above it will trigger a warning as `field-1` isn't empty.

### required-visual-swatch-entry

It checks for all disabled input fields (with a `required-option` class) within a table tag to be empty. 

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

In the example above it will trigger a warning as `field-1` isn't empty.

### stripped-min-length

It checks for at least predefined number of characters.

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

It checks for a valid time between 00:00 and 23:59.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'time':true}"/>
...
</form>
```

### time12h

It checks for a valid time between 00:00 am and 12:00 pm.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'time12h':true}"/>
...
</form>
```

The implementation is buggy, for example a valid time `00:31 am` triggers a warning.

### url2

It checks for a valid URL link.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'url2':true}"/>
...
</form>
```

* `http://www.m2.com` - true
* `magento.com` - false

### validate-admin-password

It checks for a valid admin password, it has to be 7 or more chacaters long and it has to have both letters and numbers only.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-admin-password':true}"/>
...
</form>
```

* `admindsdsdsd` - false
* `minsdsdss8` - true

### validate-ajax-error

It checks for an ajax error.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-ajax-error':true}"/>
...
</form>
```

### validate-alpha

It checks for letters (a-z or A-Z) only input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alpha':true}"/>
...
</form>
```

* `jkjkjk` - true
* `dfdfdf1` - false

### validate-alphanum

It checks for letters (a-z or A-Z) or numbers (0-9) only input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alphanum':true}"/>
...
</form>
```

### validate-alphanum-with-spaces

It checks for letters (a-z or A-Z) or numbers (0-9) or spaces only input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
 <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-alphanum-with-spaces':true}"/>
...
</form>
```

### validate-cc-cvn

It checks for a valid credit card identification number.

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

It checks for a valid credit card expiration month. 

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

* `40` - true
* `G` - false

### validate-cc-number

It checks for a valid credit card number based on mod 10.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-number':true}"/>
...
</form>
```

### validate-cc-type

It checks for a credit card number to match a predefined credit card type.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-type':'#field-5'}"/>
  <input name="field-5" id="field-5" type="text" value="AE"/>
...
</form>
```

Field `field-5` holds a credit card type, `AE` stands for American Express.

### validate-cc-type-select

It checks for a credit card type to match a predefined credit card number.

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

It checks for Switch/Solo/Maestro issue number and start date is filled.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-cc-ukss':true}"/>
...
</form>
```

It doesn't do any sanity check except for a field isn't empty.

### validate-clean-url

It checks for a valid URL. Protocal type isn't necessary.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-clean-url':true}"/>
...
</form>
```

* `fsdsd` - false
* `https://www.domain.com` - true
* `http://domain.com` - false
* `www.domain.com` - true
* `domain.com` - false 

### validate-code

It checks for an input that has only letters (a-z or A-Z), numbers (0-9) or underscore (\_), and the first character should be a letter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-code':true}"/>
...
</form>
```

* `1ddf` - false
* `Ad` - true

### validate-cpassword

It checks for a confirmation password to be the same as the password.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="password" id="password" title="Field 3" type="text" data-validate="{'validate-admin-password':true}"/>
   <input name="confirmation" id="confirmation" title="Field 3" type="text" data-validate="{'validate-cpassword':true}"/>
...
</form>
```

It's important to have `password` and `confirmation` IDs for the fields above.

### validate-css-length

It checks for a valid CSS-length (Ex: 100px, 77pt, 20em, .5ex or 50%).

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-css-length':true}"/>
...
</form>
```

### validate-currency-dollar

It checks for a valid US dollar amount, for example $100.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-currency-dollar':true}"/>
...
</form>
```

* `$100` - true
* `200` - true
* `$ 100` - false

### validate-customer-password

It checks for a password to be greater or equal to a predefined number of characters and predefined number of character classes.  Classes of characters: Lower Case, Upper Case, Digits, Special Characters.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-customer-password':true}" data-password-min-length="10" data-password-min-character-sets="2"/>
...
</form>
```

In the example above the password must be 10 or more characters long and have two or more different character classes:

* `dfdfdfdfdfdfdfdfdfdfdfdf` - false
* `dfdfdfdfdfdfdfdfdfdfdfdf1` - true
* `d1$` - false

### validate-data

It checks for an input to have only letters (a-z or A-Z), numbers (0-9) or underscore (\_), and the first character should be a letter.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-data':true}"/>
...
</form>
```

### validate-date

It checks for a valid date against a predefined format.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-date':{'dateFormat':'D Y'}}"/>
...
</form>
```

In the example above:

* `09 09` - true
* `dfdf` - false
* `98-98` - false

### validate-date-au

It checks for a valid date in format: dd/mm/yyyy.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-date-au':true}"/>
...
</form>
```

### validate-date-range

It checks for `From`-`To` date range.

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

It checks for a digits only input.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
  <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-digits':true}"/>
...
</form>
```

* `sdsd` - false
* `34` - true

### validate-digits-range

It checks for a digits only input within a specified range. There are two ways to specify a range. You can specify a negative number as a range limit.

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

It checks for a valid email address.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-email':true}"/>
...
</form>
```

### validate-emails

It checks for a valid email(s) separated (if several) by a comma or a newline or a space.

#### Example

```html
<form class="form" id="my-form" method="post" data-mage-init='{"validation": {}}'>
...
   <input name="field-4" id="field-3" title="Field 3" type="text" data-validate="{'validate-emails':true}"/>
...
</form>
```

* `test@test.com` - true
* `test@test.com,test@test2.com` - true
* `test@test.com - test@test2.com` - false

### validate-emailSender


