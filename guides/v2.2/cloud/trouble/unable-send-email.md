---
contributor_name: Atwix
contributor_link: https://www.atwix.com/
group: cloud-guide
title: Unable to send mail: Unknown error
functional_areas:
  - Cloud
  - Deploy
---

[Zend\Mail\Transport\Sendmail](https://github.com/zendframework/zend-mail/blob/master/src/Transport/Sendmail.php#L305) returns `Unable to send mail: Unknown error` error when [sendmail](https://glossary.magento.com/sendmail) is not configured.

The reason is an empty `host` option in the `/etc/msmtprc` configuration file:

```
defaults
syslog on
timeout off

account platform
host
from

account default : platform 
```

To solve this issue:
1. Enable "Outgoing emails" option in the Cloud admin.

    !["Outgoing emails" option]({{ page.baseurl }}/cloud/trouble/images/outgoing-emails.png)

1. Do a full redeploy
