---
group: cloud-guide
subgroup: 170_trouble
title: Testing Store
menu_title: Testing Store
menu_order: 43
menu_node:
   - /guides/v2.3/cloud/access-acct/trouble.html
functional_areas:
  - Cloud
  - Testing
  - Services
---


This topic discusses testing your store prior launching website  in order to properly manage expectation from the provided cluster size and appropriately scale in future upon to the business needs;

In this section, we discusses types of testing that need to be performed prior launching website as well as business objectives and benefits of doing each type of tests and tools;

Out of the box you've been provisioned Cloud environment per estimated parameters of your stove with vanilla magneto.
Any customizations on top can improve or not performance of the final store in conjunction with provided environment;
It is considered as a best practice  to evaluate your store based on the following type of tests:


1. Load 
	A load test is usually conducted to understand the behaviour of the system under a specific expected load. This load can be the expected concurrent number of users on the application performing a specific number of transactions within the set duration. 
	This test will give out the response times of all the important business critical transactions  The database, application server, etc. are also monitored during the test,  this will assist in identifying bottlenecks in the application software and the hardware that the software is installed on.
	
2. Stress 
	Stress testing is normally used to understand the upper limits of capacity within the system. This kind of test is done to determine the system's robustness in terms of extreme load and helps application administrators to determine if the system will perform sufficiently if the current load goes well above the expected maximum.

3. Penetration 
 	Is an authorized simulated cyber attack on a computer system, performed to evaluate the security of the system. The test is performed to identify both weaknesses (also referred to as vulnerabilities), including the potential for unauthorized parties to gain access to the system's features and data.
 Please note for the penetration testing you need to submit the appropriate Support ticket in advance .
 [Submit a support ticket](https://support.magento.com/hc/en-us/articles/360000913794#submit-ticket) article for detailed instructions.

4. Security 
	Use Security Scanner under account.Magento.com
	

	
	
For the Load and Stress testing you can use the following tools
1. Magento Performance toolkit 
-  Generate Data [Magento Performance Toolkit] (https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-perf-data.html)
- Use Jmeter to run scenarios 
2. NewRelic 
3. Blackfire