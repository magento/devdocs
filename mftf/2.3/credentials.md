---
---

# Credentials

When you test functionality that involves external services such as UPS, FedEx, PayPal, SignifyD, use the MFTF credentials feature to hide sensitive data like integration tokens, API keys, etc.

## Define sensitive data in `.credentials`

The MFTF creates a sample file for credentials during [initial setup]: `magento2/dev/tests/acceptance/.credentials.example`.
The file contains a list of fields for credentials you may need.

To make the file with credentials visible for the MFTF, copy the `.credentials.example` to ``.credentials` while you are in the `<magento root>/dev/tests/acceptance/` directory:

```bash
cd dev/tests/acceptance/
```

```bash
cp .credentials.example .credentials
```

Verify whether the file is excluded from tracking by `.gitignore` (unless you need this behavior):

```bash
git check-ignore .credentials
```

The command outputs the path if the file is excluded:

```terminal
.credentials
```

Open the file, uncomment the fields you want to use, and add your values:

```config
carriers/usps/userid=test_user
carriers/usps/password=Lmgxvrq89uPwECeV

#carriers_dhl_id_us=
#carriers_dhl_password_us=
....
```

## Use credentials in test

Access data defined in the `.credentials` file using the [`fillField` ][] action with the `userInput` attribute defined in the `{{_CREDS.<your data key>}}` format.
For example:

```xml
<fillField stepKey="FillAPIUsername" selector=".username" userInput="{{_CREDS.PAYMENTUSER}}"/>
<fillField stepKey="FillAPIPassword" selector=".password" userInput="{{_CREDS.PAYMENTPASSWORD}}"/>
```


When you need to use credentials in your tests such as integration token, you can do it without exposing the sensitive data in your XML tests.

The MFTF enables you to store credentials for external services in the `.credentials` file which is 
The template file is `.credentials.example`.



1. When do I need people would need credentials in the MFTF?
    - Credentials are used for when you need to input an integration token or other security credential via a `fillField`.
    - You shouldn't have security tokens checked in to any repo, so storing it in a DATA.xml file is a bad idea
    - Furthermore, if you used data.xml, the Allure Report would show your security token like:
        I fill field "SECURITYTOKEN".
        - Use of {{_CREDS.TOKEN}} turns a `fillField` action into `fillSecretField` which scrubs the allure report.

2. What functionality does the MFTF credentials feature cover?
    - How to store credentials
        - build:project copies over .credentials.example, copy and remove the `.example`
        - Store new credentials in a new line as `KEY=VALUE`
    - How to use Credentials in test actions
        - In fillField actions, you can reference it as {{_CREDS.KEY}}
        - data.md has info on this, check out "Sensitive Data"

3. How to implement credentials in test design?
    - Credentials should only every be used if you have the need to connect to some external integration for your test
    - Credentials should NOT be used to store stuff like Username/Password in your sandbox test environment; should be limited to tokens and passwords that would propose a security risk.

4. How to setup credentials?
    - build:project copies over .credentials.example, copy and remove the `.example`
    - Store new credentials in a new line as
        - KEY=VALUE
    - You CANNOT check in the .credentials file
        - For Magneto Devs, DevOps is still working on the solution of how to store credentials to be used in a build enviroment
        - For outside Devs, they can store the credentials and build their own .credentials file as part of build steps

5. Examples of daily routine tasks using credentials in the MFTF.
    - In my test, I am wanting to test a Payment Method integration. This requires me to add a Payment via the Configuration page in the admin backend.
    - I need to use the credentials to my Sandbox Environment, but I don't want those visible in the Allure Report:
        - <fillField stepKey="FillAPIUsername" selector=".username" userInput="{{_CREDS.PAYMENTUSER}}"/>
        - <fillField stepKey="FillAPIPassword" selector=".password" userInput="{{_CREDS.PAYMENTPASSWORD}}"/>
  