---
layout: default
group: arch-guide
subgroup: Architecture
title: Translation packages
menu_title: Translation packages
menu_order: 5
github_link: architecture/arch_translations.md
---

<h2 id="m2arch-translations-overview">Overview</h2>

Magento can present the user interface (UI) in different languages without modifying the actual application source code. It translates the system messages, error messages, and labels for display in the UI. Some messages may be displayed in logs for a system administrator or a developer—those don't need to be translated. By convention, in the source code, the labels and system messages for the UI are expressed in English (`en_US`).

To replace these phrases with alternatives in different languages when the source code is interpreted, Magento has a layer of indirection. It allows for translation by providing dictionary files that contain phrases from `en_US` translated into a different language. The dictionary packages in other languages either ship with Magento code out-of-the-box or are provided by the community.

For more information, refer to <a href="{{ site.gdeurl }}architecture/modules/xlate.html">Translation packages</a>.

<h2 id="m2arch-related">Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/arch_asmodsys.html">Magento as a modular system</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_intro.html">Modules</a>
* <a href="{{ site.gdeurl }}architecture/arch_libraries.html">Libraries</a>
* <a href="{{ site.gdeurl }}architecture/arch_themes.html">Themes</a>



