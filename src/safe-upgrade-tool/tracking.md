---
group: software-update-guide
title: Tracking
functional_areas:
  - Upgrade
---

SUT tracking is a small AWS Lambda function handler written in Go. The code is available in the [SUT github repository](https://github.com/magento-commerce/safe-upgrade-tool), inside the `sut-tracking` directory.

## Develop and deploy

This is a Lambda function handler implemented in GOLANG to receive tracking requests from the SUT and is stored in New Relic.

For more information on New Relic, see [New Relic services]({{ site.baseurl }}/cloud/project/new-relic.html) topic.

## Requirements

In order to install the necessary requirements:

1. Install dependencies for the SUT tracking functionality:

   ```bash
   brew install aws-sam-cli
   ```

1. Install the AWS CLI tool:

   ```bash
   curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" sudo installer -pkg AWSCLIV2.pkg -target /
   ```

### Develop

To develop SUT tracking:

1. Run:

   ```bash
   sam build sam local start-api
   ```

1. Lambda will run on `http://127.0.0.1:3000/`.

### Deploy

In order to deploy the SUT tracking:

1. Go to [KLAM](https://klam.corp.adobe.com/)
1. Navigate to `CLI` > `Bash`.
1. Copy the content and paste it in your console.
1. Edit the `template.yaml` file and set the `NEW_RELIC_API_KEY` value to a valid New Relic API key.
1. Deploy SUT tracking:

   ```bash
   sam deploy --guided
   ```

## Delete app

You can delete the SUT tracking by executing the following command:

```bash
aws cloudformation delete-stack --stack-name sut-tracking
```
