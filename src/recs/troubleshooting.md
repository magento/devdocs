---
group: product-recommendations
title: Troubleshooting Recommendations
---


If after installing the modules you do not see any recommendations: it's likely that there is no ...module has not had enough time to collect behavorial data...do we have a sense of how long it should take before behavorial data is used (4 hours)...leave it to run 24 hours to allow system to start collection data.

there are backup recommendations served up:
https://wiki.corp.magento.com/pages/viewpage.action?spaceKey=DS&title=Recommendation+type+mapping

if no catalog data is being included in your recommendations, try this:

If Magento cannot find your SaaS environment ID, you will be prompted to specify the ID. To get the ID, email `mailto:magento-product-recs-feedback@adobe.com`. If you do not receive your ID within 3 days, contact us again.

debug network requests

if env id/api keys are invalid, here's how you edit your magento config to make these changes...(link to magento edit config topic)
