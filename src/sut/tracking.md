---
group: software-update-guide
title: Tracking
functional_areas:
  - Upgrade
---

SUT tracking is a small AWS lambda done with GO. The code is available in the [SUT github repository](https://github.com/magento-commerce/safe-upgrade-tool), inside the `sut-tracking` folder.

## SUT tracking develop and deploy

This is a lambda implemented in GOLANG to receive tracking requests from SUT and it is stored in NewRelic.

## Requirements

In order to install the requirements for the SUT tracking execute the following command:

`brew install aws-sam-cli`

Then, run:

`curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" sudo installer -pkg AWSCLIV2.pkg -target /`

## Development

To develop SUT tracking, run:

`sam build sam local start-api`

Then, lambda will run in a `http://127.0.0.1:3000/` environment.

## Deploy

In order to deploy the SUT tracking:

1. Go to [KLAM](https://klam.corp.adobe.com/)
1. Navigate to `CLI` > `Bash`
1. Copy the content and paste it in your console
1. Then, edit the `template.yaml` file and set the `NEW_RELIC_API_KEY` with a valid newrelic api key
1. Finally, deploy SUT tracking by executing one of these commands:

  `sam deploy --guided`
  `sam deploy`

## Delete app

You can delete the SUT tracking by executing the following command:

`aws cloudformation delete-stack --stack-name sut-tracking`
