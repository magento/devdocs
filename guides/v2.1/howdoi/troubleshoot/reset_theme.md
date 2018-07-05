---
group: howdoi
subgroup: Troubleshooting
title: Reset the theme to default
menu_title: Reset the theme to default
menu_order: 1
version: 2.1
github_link: howdoi/troubleshoot/reset_theme.md
functional_areas:
  - Theme
---

## Reset the store theme to default using DB

If you need to reset the store theme, but cannot access the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel, you can reset it in the database by doing the following:

1. Use a database tool such as [phpMyAdmin]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpmyadmin) or access the DB manually from the command line to execute the following SQL query: 
```
UPDATE core_config_data SET value=NULL WHERE path='design/theme/theme_id'
```

2. Clear the `pub/static/frontend`, `var/view_preprocessing`, `var/cache`, `var/page_cache` directories. 

This way there will be no {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} set on the {% glossarytooltip ca5a9ff1-8182-4fc4-a34b-9b3f831dbf3f %}store view{% endglossarytooltip %} level, and when you reload the store front pages, the default Luma theme will be applied.

### Related topics:

- [Clear directories during development]({{ page.baseurl }}/howdoi/php/php_clear-dirs.html)


