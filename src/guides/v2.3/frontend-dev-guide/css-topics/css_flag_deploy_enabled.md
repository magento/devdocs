---
group: frontend-developer-guide
title: Trigger flag deploy styles for only enabled modules
functional_areas:
  - Frontend
---

## What is in this topic {#practice_over}

This topic features a step-by-step illustration of how to change a flag trigger magento process css styles.

## Changing flag trigger deploy static contents

1. Add inside to app/etc/env.php or app/etc/config.php. Add following line to the top array

```php
return [
'static_content_only_enabled_modules' => true,
//...other lines
]
```

This meaning magento only deploy static content styles from enabled module to final css files (styles-l.css, styles-m.css). If set value to false magento will always deploy all styles no matter modules enabled or disabled!


2. After modify php file. Make sure re-run setup upgrade for update config flag 


```bash
php bin/magento setup:upgrade
```

or

```bash
php bin/magento app:config:import
```

Now re-run deploy static content as normally if need

```bash
php bin/magento setup:static-content:deploy en_US
```

Ensure you replace en_US with the appropriate locale code if your store uses a different language