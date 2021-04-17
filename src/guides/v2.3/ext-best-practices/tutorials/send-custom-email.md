---
group: extension-best-practices
title: Sending Custom Emails
contributor_name: Ziffity
contributor_link: https://www.Ziffity.com/
---

This topic describes how you can send custom emails in Magento. The below example shows how to send custom emails in Magento.

```php
<?php

namespace [Vendor]\[Module]\Helper;

use Magento\Framework\App\Helper\Context;
use Magento\Framework\Mail\Template\TransportBuilder;
use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Framework\Translate\Inline\StateInterface;
use Magento\Store\Model\StoreManagerInterface;

class EmailSender extends AbstractHelper
{
    protected $transportBuilder;
    protected $storeManager;
    protected $inlineTranslation;

    public function __construct(
        Context $context,
        TransportBuilder $transportBuilder,
        StoreManagerInterface $storeManager,
        StateInterface $state
    )
    {
        $this->transportBuilder = $transportBuilder;
        $this->storeManager = $storeManager;
        $this->inlineTranslation = $state;
        parent::__construct($context);
    }

    public function sendEmail()
    {
        $templateId = 'custom_email_template'; // email template id
        $fromEmail = 'customerservice@gmail.com';  // sender Email id
        $fromName = 'Customer Service';             // sender Name
        $toEmail = 'customer@gmail.com'; // receiver Email id

        try {
            $storeId = $this->storeManager->getStore()->getId();

            // template variables
            $templateVars = [
                'msg' => 'test',
                'msg1' => 'test1'
            ];

            $from = ['email' => $fromEmail, 'name' => $fromName];
            $this->inlineTranslation->suspend();

            $storeScope = \Magento\Store\Model\ScopeInterface::SCOPE_STORE;
            $templateOptions = [
                'area' => \Magento\Framework\App\Area::AREA_FRONTEND,
                'store' => $storeId
            ];
            $transport = $this->transportBuilder->setTemplateIdentifier($templateId, $storeScope)
                ->setTemplateOptions($templateOptions)
                ->setTemplateVars($templateVars)
                ->setFrom($from)
                ->addTo($toEmail)
                ->getTransport();
            $transport->sendMessage();
            $this->inlineTranslation->resume();
        } catch (\Exception $e) {
            $this->_logger->info($e->getMessage());
        }
    }
}
```

## Related topics

[Email Templates]({{ page.baseurl }}/frontend-dev-guide/templates/template-email.html)