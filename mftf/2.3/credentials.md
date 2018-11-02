---
---

# Credentials

When you need to use credentials in your tests such as an integration token, you can do it whithout exposing the sensitive data in your XML tests.



1. Why people would need credentials in the MFTF?
    - Credentials are used for when you need to input an integration token or other security credential via a `fillField`.
    - You shouldn't have security tokens checked in to any repo, so storing it in a DATA.xml file is a bad idea
    - Furthermore, if you used data.xml, the Allure Report would show your security token like:
        I fill field "SECURITYTOKEN".
        - Use of {{_CREDS.TOKEN}} turns a `fillField` action into `fillSecretField` which scrubs the allure report.

2. What functionality does the MFTF credentials feauture cover?
    - How to store credentials
        - build:project copies over .credentials.example, copy and remove the `.example`
        - Store new credentials in a new line as `KEY=VALUE`
    - How to use Credentials in test actions
        - In fillField actions, you can reference it as {{_CREDS.KEY}}
        - data.md has info on this, check out "Sensitive Data"

3. How to implement credentials in test design?
    - Credentials should only every be used if you have the need to connect to some external integration for your test
    - Credentials should NOT be used to store stuff like Username/Password in your sandbox test environment; should be limited to tokens and passwords that would propose a security risk.

3. How to setup cerdentials?
    - build:project copies over .credentials.example, copy and remove the `.example`
    - Store new credentials in a new line as
        - KEY=VALUE
    - You CANNOT check in the .credentials file
        - For Magneto Devs, DevOps is still working on the solution of how to store credentials to be used in a build enviroment
        - For outside Devs, they can store the credentials and build their own .credentials file as part of build steps

4. Examples of daily routine tasks using credentials in the MFTF.
    - In my test, I am wanting to test a Payment Method integration. This requires me to add a Payment via the Configuration page in the admin backend.
    - I need to use the credentials to my Sandbox Environment, but I don't want those visible in the Allure Report:
        - <fillField stepKey="FillAPIUsername" selector=".username" userInput="{{_CREDS.PAYMENTUSER}}"/>
        - <fillField stepKey="FillAPIPassword" selector=".password" userInput="{{_CREDS.PAYMENTPASSWORD}}"/>

5. DevOps specific examples.
    - DevOps still doesn't have a full integration for adding your own .credentials.

6. Reference documentation like in https://devdocs.magento.com/guides/v2.2/magento-functional-testing-framework/2.3/configuration.html