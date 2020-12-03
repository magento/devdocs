---
group: software-update-guide
title: Track the safe upgrade tool
functional_areas:
  - Upgrade
---

SUT tracking is a small AWS lambda done with GO. The code is available in the [SUT github repository](https://github.com/magento-commerce/safe-upgrade-tool), inside the `sut-tracking` folder.

## SUT tracking develop and deploy

This is a lambda implemented in GOLANG to receive tracking requests from SUT https://github.com/magento-commerce/safe-upgrade-tool and store it in NewRelic.

## Requirements
### ASW Sam Cli
```
brew install aws-sam-cli
```
### ASW Cli
```
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```
## Development
```
sam build
sam local start-api
```
Lambda will run in http://127.0.0.1:3000/ 

## Deploy
- Go to KLAM https://klam.corp.adobe.com/ 
- Go to CLI > Bash -> Copy content and paste in the console
- Edit template.yaml and set NEW_RELIC_API_KEY with a valid new relic api key.
- Deploy:
```
sam deploy --guided
```
OR
```
sam deploy
```

## Delete app
```
 aws cloudformation delete-stack --stack-name sut-tracking
```
