---
title: Backward incompatible changes in functional tests
group: mftf
functional_areas:
- Test
---

This reference describes important changes introduced to functional tests in the Magento codebase after the 2.3.0 release. This is in compliance with the [Magento MFTF test versioning and backward compatibility policy][].

<!-- Posting CE data -->
{% assign bic = site.data.codebase.v2_4.mftf.ce.bic.v2_3_0-2_4_0 %}

## {{ site.data.var.ce }} ({{ bic.versions }})

{{ bic.disclaimer }}

{% for content in bic.content %}

### {{ content.type }}

What changed | How Changed
---|---{% for change in content.changes %}
{{ change.what }} | {{ change.how | xml_escape }} {% endfor %}
{% endfor %}

<!-- Posting EE data -->
{% assign bic = site.data.codebase.v2_4.mftf.ee.bic.v2_3_0-2_4_0 %}

## {{ site.data.var.ee }} ({{ bic.versions }})

The {{ site.data.var.ee }} changes include the changes listed in this clause together with {{ site.data.var.ce }} changes.

{{ bic.disclaimer }}

{% for content in bic.content %}

### {{ content.type }}

What changed | How Changed
---|---{% for change in content.changes %}
{{ change.what }} | {{ change.how | xml_escape }} {% endfor %}
{% endfor %}

<!-- Posting B2B data -->
{% assign bic = site.data.codebase.v2_4.mftf.b2b.bic.v1_1_0-1_2_0 %}

## {{ site.data.var.b2b }} only ({{ bic.versions }})

{{ bic.disclaimer }}

{% for content in bic.content %}

### {{ content.type }}

What changed | How Changed
---|---{% for change in content.changes %}
{{ change.what }} | {{ change.how | xml_escape }} {% endfor %}
{% endfor %}

<!-- Link definitions -->
[Magento MFTF test versioning and backward compatibility policy]: https://github.com/magento/architecture/blob/master/design-documents/testing/functional/versioning-and-backward-compatibility-policy.md
