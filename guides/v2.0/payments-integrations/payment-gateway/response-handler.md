---
layout: default
group: payments-integrations
subgroup: p_gateway
title: Response Handler
menu_title: 
menu_node: 
menu_order: 20
version: 2.0
github_link: payments-integrations/payment-gateway/response-handler.md
---

## Response Handler

Response handler processes Gateway response. Typically it requires one of the following actions:

<p class="q">Does it perform these actions</p>

- Order status needs to be modified
- There is something to save in Magento for a particular transaction response
- Email needs to be sent

By its nature, Handler is supposed to modify state basing on the payment gateway response. This defines the basic Handler interface signature.  

<p class="q">whose state. A: order state</p>

{% highlight php startinline=1 %}
interface HandlerInterface
{
    /**
     * Handles response
     *
     * @param array $handlingSubject
     * @param array $response
     * @return void
     */
    public function handle(array $handlingSubject, array $response);
}
{% endhighlight %}


### Useful implementations

* `\Magento\Payment\Gateway\Response\HandlerChain` - may be used as a basic container of response handlers, handling different parts.

### Example

Example of a simple response handler is shown below

{% highlight php startinline=1 %}
class PayPalDetailsHandler implements HandlerInterface
{
    const PAYMENT_ID = 'paymentId';

    const PAYER_EMAIL = 'payerEmail';

    /**
     * @var SubjectReader
     */
    private $subjectReader;

    /**
     * Constructor
     *
     * @param SubjectReader $subjectReader
     */
    public function __construct(SubjectReader $subjectReader)
    {
        $this->subjectReader = $subjectReader;
    }

    /**
     * @inheritdoc
     */
    public function handle(array $handlingSubject, array $response)
    {
        $paymentDO = $this->subjectReader->readPayment($handlingSubject);

        /** @var \Braintree\Transaction $transaction */
        $transaction = $this->subjectReader->readTransaction($response);

        /** @var OrderPaymentInterface $payment */
        $payment = $paymentDO->getPayment();

        $payPal = $this->subjectReader->readPayPal($transaction);
        $payment->setAdditionalInformation(self::PAYMENT_ID, $payPal[self::PAYMENT_ID]);
        $payment->setAdditionalInformation(self::PAYER_EMAIL, $payPal[self::PAYER_EMAIL]);
    }
}
{% endhighlight %}