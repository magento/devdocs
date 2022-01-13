---
group: cloud-guide
title: Mailazy
functional_areas:
  - Cloud
  - Setup
  - Services
---


## So, How do I begin?

Before you can start using the API, you need to do the following:

1. Create a [Mailazy account](https://app.mailazy.com/signup).

2. Or [login](https://app.mailazy.com/login) using an existing account.

3. Once after signing up, you'll be taken through onboarding process which consists following verification processes

      - Email Verification ( Enter the OTP that you recieved via mail )
      - Domain Verification
      - Enter the domain that you own
	  
	  ```terminal
		mz.example.com IN CNAME <rendom_id.mailazy.net>
		m1._domainkey.example.com IN CNAME <m1.domainkey.rendom_id.mailazy.net>
		m2._domainkey.example.com IN CNAME <m2.domainkey.rendom_id.mailazy.net>
		```

      - Add CNAME records to your DNS provider

>Sometimes it take upto 24 hours to reflect the DNS changes. you might skip for now and verify later. You may also refer to domain verify guide [here](https://mailazy.com/docs/guide/verify-domain/)

> If you see a warning regarding the account activation, you account will soon get activated once it is verified through a automated process, the process looks up for your domain repuatation and spam factors.

4. After completing all due processes you are now ready to send your first mail
