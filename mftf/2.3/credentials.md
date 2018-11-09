---
---

# Credentials

When you test functionality that involves external services such as UPS, FedEx, PayPal, or SignifyD, use the MFTF credentials feature to hide sensitive [data][] like integration tokens and API keys.

## Define sensitive data in `.credentials`

The MFTF creates a sample file for credentials during [initial setup][]: `magento2/dev/tests/acceptance/.credentials.example`.
The file contains an example list of keys for fields that can require credentials.

### Create `.credentials`

To make the MFTF process the file with credentials, change directories to `magento2/dev/tests/acceptance/` and copy `.credentials.example` to `.credentials`.

```bash
cd dev/tests/acceptance/
```

```bash
cp .credentials.example .credentials
```

### Add `.credentials` to `.gitignore`

Verify that the file is excluded from tracking by `.gitignore` (unless you need this behavior):

```bash
git check-ignore .credentials
```

The command outputs the path if the file is excluded:

```terminal
.credentials
```

### Define sensitive data

Open the `.credentials` file, uncomment the fields you want to use, and add your values:

```config
...
# Credentials for the USPS service
carriers_usps_userid=test_user
carriers_usps_password=Lmgxvrq89uPwECeV

# Credentials for the DHL service
#carriers/dhl/id_us=
#carriers/dhl/password_us=
....
```

{: .bs-callout .bs-callout-info }
The `/` symbol is not supported in a key name.

You are free to use any other keys you like, as they are merely the keys to reference from your tests.

```conf
# Credentials for the MyAwesome service
my_awesome_service_token=rRVSVnh3cbDsVG39oTMz4A

# Credentials for the USPS service
carriers_usps_userid=test_user
carriers_usps_password=Lmgxvrq89uPwECeV
....
```

## Use credentials in a test

<!--{% raw %}-->
Access the data defined in the `.credentials` file using the [`fillField`][] action with the `userInput` attribute.
Define the value as a reference to the corresponding key in the credentials file such as `{{_CREDS.my_data_key}}`:

- `_CREDS` is an environment constant pointing to the `.credentials` file
- `my_data_key` is a key in the the `.credentials` file that contains the value to be used in a test step

For example:

```xml
<fillField stepKey="FillApiToken" selector=".api-token" userInput="{{_CREDS.my_data_key}}" />
```

## Implementation details

The generated tests do not contain credentials values.
The MFTF dynamically retrieves, encrypts, and decrypts the sensitive data during test execution.
Decrypted credentials do not appear in the console, error logs, or [test reports][].
The decrypted values are only available in the `.credentials` file.

{: .bs-callout .bs-callout-info }
The MFTF tests delivered with Magento application do not use credentials and do not cover external services, because of sensitivity of the data.

<!--{% endraw %}-->

<!-- Link definitions -->
[`fillField`]: test/actions.html#fillfield
[data]: data.html
[initial setup]: getting-started.html
[test reports]: reporting.html
