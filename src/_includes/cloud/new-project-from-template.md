1. Access your account. You can open the email you received from Adobe (accounts@magento.cloud) and click the _Access your project now_ link. Or you can log in to [your {{site.data.var.ee}} account](https://accounts.magento.cloud).
1. Click the _This project has no code yet_ link next to the Project name.

   ![Project without code]({{ site.baseurl }}/common/images/cloud_project_empty.png)

1. Enter a name for the project.

   ![Project name]({{ site.baseurl }}/common/images/cloud_project_name.png)

1. Click **Create a blank site from a template** and click **Continue**. We recommend starting with the {{site.data.var.ee}} template as your initial project option. If you have an existing deployment, you can later import code, extensions, themes, and data after fully deploying this base code.

   ![Create a site using the sample project]({{ site.baseurl }}/common/images/cloud_project_template.png){:width="650px"}

1. When prompted, enter your {{site.data.var.ee}} [authentication keys]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html) in the provided fields. You created these keys earlier in the Commerce Marketplace. Enter the private and public keys and click **Finish**.

   ![Enter your authentication keys]({{ site.baseurl }}/common/images/cloud-project-magento-auth-creds.png){:width="650px"}

   The keys are added to the `auth.json` file in the repository `master` branch, required for all created branches and deployments.

1. Wait a few minutes while the project deploys. A status of _Pending_ displays until completed, similar to the following:

   ![Your sample project]({{ site.baseurl }}/common/images/cloud_project_template2.png){:width="650px"}

1. After the project deploys, **Success** displays next to the name of your project.
