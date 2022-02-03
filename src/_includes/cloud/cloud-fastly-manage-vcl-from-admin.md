## Modify the custom VCL snippet

1. [Log in]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#admin) to the Admin UI.

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

   ![Manage custom VCL snippets]

1. In the _Action_ column, click the settings icon next to the snippet to edit.

1. After the page reloads, click **Upload VCL to Fastly** in the *Fastly Configuration* section.

1. After the upload completes, refresh the cache according to the notification at the top of the page.

{:.bs-callout-warning}
The *Custom VCL snippets* UI option shows only the snippets added through the Admin UI. You must [manage custom VCL snippets using the Fastly API]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api).

## Delete the custom VCL snippet

1. [Log in]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#admin) to the Admin UI.

1. Click **Stores** > **Settings** > **Configuration** > **Advanced** > **System**.

1. Expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

   ![Manage custom VCL snippets]

1. In the _Action_ column, click the trash icon next to the snippet to delete.

1. On the next modal window, click **DELETE** and activate a new version.

{:.bs-callout-warning}
The *Custom VCL snippets* UI option shows only the snippets added through the Admin UI. You must [manage custom VCL snippets using the Fastly API]({{ site.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-custom-vcl-snippets-using-the-api).

[Manage custom VCL snippets]: {{site.baseurl}}/common/images/cloud/cloud-fastly-manage-snippets.png
{:width="650px"}
