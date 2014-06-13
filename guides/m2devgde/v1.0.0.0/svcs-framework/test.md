```php
<route url="/V1/customerAccounts/isEmailAvailable" method="PUT">
        <service class="Magento\Customer\Service\V1\CustomerAccountServiceInterface" method="isEmailAvailable"/>
        <resources>
            <resource ref="Magento_Customer::manage"/>
        </resources>
    </route>
```