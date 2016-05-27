---
layout: default
group: cloud
subgroup: 50_trouble
title: Resolve issues with a new project
menu_title: Resolve issues with a new project
menu_order: 2
menu_node: 
github_link: cloud/trouble/trouble_proj-startover.md
---

## Resolve issues with a new project
TBD

### Project has no code yet {#cloud-trouble-nocode}
If "project has no code yet"

This covers what happens if you start the wizard, choose wrong option, or click Continue Later.

### Start over with a project {#cloud-trouble-startover}
This covers starting over with a project that has a master branch only.

@stevejwriter: change your code, commit it, and git push --force
8:47
@stevejwriter: there isn’t an automated way to delete all your data
8:47
@stevejwriter: although… you could change your service name(s) and app name(s) (and change back again if you want) - that will ensure all your data disappears
8:48
@stevejwriter: effectively, code is replaced on every git push. Data (static files in the app, mysql DBs, Redis caches etc.) is persistent.

*	[TBD]({{ site.gdeurl }}#.html)
*	[TBD]({{ site.gdeurl }}#.html)
