//  When loaded, this script finds all link elements that point to the glossary 
//  and applies the glossary-term style
//
//  TODO: Use this script to add pop up functionality when the following issue
//  is resolved: https://github.com/magento/glossary/issues/13

document.querySelectorAll("a").forEach(element => {
  if (element.href.indexOf("glossary.magento.com") > -1) {
    element.className = "glossary-term";
  }
});
