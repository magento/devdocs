---
group: php-developer-guide
title: URL Library
contributor_name: Adarsh Manickam
contributor_link: https://github.com/drpayyne
---

## Overview

This URL library provides numerous utilities to work with URLs. Some of the most useful URL utilities are described below.

## URL Utilities

### Encoder

The [`Magento\Framework\Url\EncoderInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Url/EncoderInterface.php){:target="_blank"} provides a method to `encode` the URL provided to it into a base64 format and also escapes the special charaters described in the table below.

|Special Character|Encoded Value|
|--- |--- |
| `+` | `-` |
| `/` | `_` |
| `=` | `,` |

### Decoder

The [`Magento\Framework\Url\DecoderInterface`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/Url/DecoderInterface.php){:target="_blank"} provides a method to `decode` the base64 encoded URL provided to it and also decodes the special characters described in the table below.

|Special Character|Decoded Value|
|--- |--- |
| `-` | `+` |
| `_` | `/` |
| `,` | `=` |

## Usage

Declare `SerializerInterface` as a [constructor dependency]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) to get an instance of a serializer class.

```php
use Magento\Framework\Url\DecoderInterface;
use Magento\Framework\Url\EncoderInterface;

/**
 * @var EncoderInterface
 */
private $encoder;

/**
 * @var DecoderInterface
 */
private $decoder;

/**
  * QuickCartTaxInput constructor.
  *
  * @param EncoderInterface $encoder
  * @param DecoderInterface $decoder
  */
public function __construct(
    EncoderInterface $encoder,
    DecoderInterface $decoder
) {
  $this->encoder = $encoder;
  $this->decoder = $decoder;
}

/**
 * Encodes URL to base64 format and escapes special characters.
 *
 * @param string $url
 *
 * @return string
 */
public function encodeURL($url): string
{
  return $this->encoder->encode($url);
}

/**
 * Decodes URL from base64 format and special characters.
 *
 * @param string $encodedUrl
 *
 * @return string
 */
public function decodeURL($encodedUrl): string
{
  return $this->decoder->decode($encodedUrl);
}
```
