---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Security
menu_title: Security
menu_order: 10
menu_node:
version: 2.2
github_link: advanced-reporting/security.md
---

## Magento Advanced Reporting Authorization

We have implemented the button on the Magento Dashboard which allows redirecting users from the Magento Admin panel to Magento Advanced Reporting. In this case, we have to identify users definitely on the Magento Advanced Reporting side. We use the following steps for the authorization scenario:

* Receive OTP

* Direct request

We expect that this API is implemented on the MBI side.

### OTP Receiving Process

HTTP Method: POST

**OTP request:**

```
{
   "token": "fc7bf8e3c68c2c1f8da9b53bfa62e7ff9ffb10f3"
}
```

This token must be received from the MBI service within the Sign-Up step.

**OTP response:**

```
{
   "otp": "7957645e18ad4d5a249e6b658877bde2a77bc4ab"
}
```

OTP must be a unique password to be used for one authorization only. It is preferred that the password is valid for a small period (like 30 seconds).

### Authorization Process

HTTP Method: GET

**Direct request to Magento Advanced Reporting:**

```
https://dashboard.rjmetrics.com/v2/magento/report?otp=7957645e18ad4d5a249e6b658877bde2a77bc4ab
```

On this action, MBI has to initiate a new user session using a standard mechanism, like a cookie.

## Encryption of collected data

This section shows how to save the collected data on a disk without the risk of unauthorized access.

Since MBI can initialize data request within business time to avoid long server load, which is required for data collecting process, collecting data on schedule while downtime is more preferable.

### Data encryption

Collected data is stored in an encrypted archive with files. The archive is encrypted by an OpenSSL toolkit and, as a result, it is protected from unauthorized access. The archive name is `data.tgz`.

For this purpose, the PHP's OpenSSL extension is used: it is required for Magento, especially the `openssl_encrypt()` function. Data is encrypted with the 'AES-256-CBC' method  with a predefined 256-bit password, and generated every time using the `openssl_random_pseudo_bytes()` Initialization Vector.

The password is an SHA-256 hash from the MBI token, which has been received during the Sign-up step.
This process requires RAM usage of 2x of the size of the file to be encrypted. The encryption time is about 1-2 seconds for a file with the size of 500MB.

The encrypted archive is stored in a directory with a unique (each time generated hash) name in the "analytics" subdirectory of the Magento media directory. For example:

```
pub/media/analytics/e87d905d4c0d2982ce1fdfc5464e1869c3c35008f4cbdc1c7429bace1b41df84/data.tgz
```

This allows providing consistent data for the MBI service at all times.

The Initialization Vector and the relative path to the encrypted file are stored in a FileInfo object. Data from the FileInfo object is stored in a Magento database as a flag (with the `analytics_file_info` flag code) and can be restored from the database into the FileInfo object using a FileInfoManager.

### Schedule the data collection

The start time of the data collection process can be set in 'Stores > Configuration > General > Advanced Reporting' section of the Admin panel as the `Time of day to send data` config value.

If the MBI subscription is enabled, data collection is performed every day at the scheduled time.

### Data decryption

Data can be downloaded in an encrypted form, in accordance with the [File downloading for MBI](#file-downloading-for-mbi) process.

Data can be decrypted by MBI with a predefined password and the received Initialization Vector. The password is an SHA-256 hash from the MBI token which has been connected to the current Magento instance.

The Initialization Vector is provided to MBI as a response, in the base64 encoded form.

## Protection of Web API calls against brute-force attacks

To protect Web API calls against brute-force attacks, it is proposed to implement a mechanism of blocking the suspicious IP addresses. The general idea of the mechanism is to temporary block any IP address after a certain number of failed authorization attempts.

### Technology

We assume that the consumers of Web API are applications. In this case, there is no need to count the failed authorization attempts because we do not expect casual input mistakes regularly made by humans. Thus, it is proposed to block IP addresses for 1 hour (time may be discussed) immediately after the first fail.

In terms of Magento, it is proposed to:

* Introduce the described mechanism in the existing WebApi module

* Use plugins for appropriate public methods (needs further investigation) that would detect the failed authorization attempts, blocking IP addresses, and checking whether an IP address is on the black list.

## Summary

Unfortunately, this approach does not provide complete protection against brute-force attacks; still, it can slow down and significantly reduce their efficiency.
