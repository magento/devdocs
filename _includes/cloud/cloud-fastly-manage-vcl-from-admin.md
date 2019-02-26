## Modify the custom VCL snippet

Complete these steps to modify a custom VCL snippet from the 

1.  Navigate to **Stores** > **Configuration** > **Advanced** > **System**.

1.  In the right pane, expand **Full Page Cache** > **Fastly Configuration** > **Custom VCL Snippets**.

    ![Manage custom VCL snippets]

1.  In the _Action_ column, click the settings icon next to the snippet to edit.

{: .bs-callout .bs-callout-warning}
The *Custom VCL snippets* UI option shows only the snippets added through the Admin UI. If custom VCL snippets were added using the Fastly API, [manage them using the API](#manage-vcl).


## Delete the custom VCL snippet

You can delete custom VCL snippet code from your Fastly configuration by uploading an empty version of the snippet from the Admin UI, or delete it completely using the Fastly API.

- Upload an empty version of the snippet file to Fastly to remove the VCL logic from the active VCL version:

	- Edit the snippet and delete the **VCL** snippet content.

	- Save the configuration.

	- Upload the VCL to Fastly to apply your changes.
	
- Use the Fastly API [Delete custom VCL snippet]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html#manage-vclmanage-vcl) operation 
 to delete the snippet completely, or submit a Magento support ticket to request deletion.


[Manage custom VCL snippets]: {{site.baseurl}}/common/images/cloud/cloud-fastly-manage-snippets.png
{: width="650px"}