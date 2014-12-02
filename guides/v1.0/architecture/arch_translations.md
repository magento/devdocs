---
layout: default
group: dev-guide
subgroup: Architecture
title: Translation Packs
menu_title: Translation Packs
menu_order: 5
github_link: architecture/arch_translations.md
---

<h2 id="m2arch-translations-overview">Overview</h2>
<!--
Modify below text; this is from topic that will stay in the dev guide. (https://wiki.magento.com/display/MAGE2DOC/Overview+of+Translation+in+Magento+2?src=search)
 -->

Magento can present the user interface in different languages without modifying the actual application source code. It translates the system messages, error messages, and labels for display in the UI. Some messages may be displayed in logs for a system administrator or a developer—those don't need to be translated. By convention, in the source code, the labels and system messages for UI are expressed in English (en_US).

To replace these phrases with alternatives in different languages when the source code is interpreted, Magento has a layer of indirection. It allows for translation by providing dictionary files that contain phrases from en_US translated into a different language. The dictionary packages in other languages either ship with Magento code out of the box or are provided by the community.

The business user might need to customize the result. See <a href="{{ site.gdeurl }}architecture/behavior/xlate.html">Translation</a>.

<!--
<h2 id="m2arch-related">Related topics</h2>
* aaa
* bbb
* ccc
 -->

