---
group: configuration-guide
title: Security.txt
contributor_name: Kalpesh Mehta from Corra
contributor_link: https://partners.magento.com/portal/details/partner/id/70/
functional_areas:
  - Configuration
---

When security vulnerabilities are discovered by researchers, proper reporting channels are often lacking. As a result, some vulnerabilities are not reported. The purpose of the `security.txt` [file format](https://tools.ietf.org/html/draft-foudil-securitytxt-09) is to give security researchers the information they need to report their findings.

Magento merchants can enter their contact information for [security issue reporting](https://docs.magento.com/user-guide/stores/security-issue-reporting.html) from the Magento _Admin_. For developers, the `Magento_Securitytxt` module provides the following functionality:

-  Allows security configurations to be saved from the _Admin_.
-  Contains a router to match application action class for requests to the `.well-known/security.txt` and `.well-known/security.txt.sig` files.
-  Serves the content of the `.well-known/security.txt` and `.well-known/security.txt.sig` files.

A valid `security.txt` file might look like the following:

 ```bash
Contact: mailto:security@example.com
Contact: tel:+1-201-555-0123
Encryption: https://example.com/pgp.asc
Acknowledgement: https://example.com/security/hall-of-fame
Policy: https://example.com/security-policy.html
Signature: https://example.com/.well-known/security.txt.sig
```

For example, a typical `security.txt` file might be found at:
[https://example.com/.well-known/security.txt](https://example.com/.well-known/security.txt)

To create the `security.txt` signature (`security.txt.sig`) file:

```bash
gpg -u KEYID --output security.txt.sig --armor --detach-sig security.txt
```

To verify the signature:

```bash
gpg --verify security.txt.sig security.txt
```
