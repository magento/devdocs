<div markdown="1">

#### What is sensitive data? {#sens-data}
Magento uses your encryption key to encrypt the following: 

*	Credit card information
*	User names and passwords specified in the Magento Admin configuration  (for example, logins to payment gateways)
*	CAPTCHA values sent over the network

Magento does *not* encrypt:

*	Administrative and customer user names and passwords (these passwords are hashed)
*	Address
*	Phone number
*	Other types of personally identifiable information except for credit card numbers
