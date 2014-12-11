---
layout: default
group: install
subgroup: Z_Troubleshooting
title: During installation, Incorrect table definition error
menu_title: During installation, Incorrect table definition error
menu_node: 
menu_order: 6
github_link: install-gde/trouble/tshoot_wrong-mysql.md
---

<h2 id="install-trouble-wrong-mysql">During installation, Incorrect table definition error</h2>

### Details

During the installation, the following message displays: 

	[ERROR] exception 'PDOException' with message 'SQLSTATE[HY000]: General error: 1293 Incorrect table definition; 
	there can be only one TIMESTAMP column with CURRENT_TIMESTAMP in DEFAULT or ON UPDATE clause'

### Solution

You are using an unsupported version of MySQL. We support <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL 5.6</a>. 

