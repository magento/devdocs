---
layout: default
group: howdoi
subgroup: Troubleshooting
title: Reset the theme to default
menu_title: Reset the theme to default
menu_order: 1
version: 2.0
github_link: howdoi/troubleshoot/reset_theme.md
---

## Reset the store theme to default using DB

If you need to reset the store theme, but cannot access the Admin panel, you can reset it in the database by doing the following:

1. Use a database tool such as [phpMyAdmin]({{page.baseurl}}/install-gde/prereq/optional.html#install-optional-phpmyadmin) or access the DB manually from the command line to execute the following SQL query: 
```
UPDATE core_config_data SET value=NULL WHERE path='design/theme/theme_id'
```

2. Clear the `pub/static/frontend`, `var/view_preprocessing`, `var/cache`, `var/page_cache` directories. 

This way there will be no theme set on the store view level, and when you reload the store front pages, the default Luma theme will be applied.

### Related topics:

- [Clear directories during development]({{page.baseurl}}howdoi/php/php_clear-dirs.html)


