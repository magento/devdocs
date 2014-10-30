---
layout: howtom2devgde_chapters_fedg 
title: Translation
---
 
<h1 id="fedg-localization">{{ page.title }}</h1>

Tanas:

<div class="bs-callout bs-callout-warning" id="warning">
<img src="{{ site.baseurl }} ../../common/images/icon_important.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>If a module uses the code from another module, it should declare the dependency explicitly.</p></span></div>
  
Mine:

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Not to be confused with <code>Magento\Framework\Filesystem</code>, the <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/App/Filesystem.php" target="_blank">Magento\Framework\App\Filesystem class</a> enables you to get the absolute path to files on the Magento file system similar to the following:</p>
  <pre>
$filesystem = $objectManager->get('Magento\Framework\App\Filesystem');
$absolutePathToVarDirectory = $filesystem->getPath(Filesystem::VAR_DIR);
</pre>
  </span>
  </div>

