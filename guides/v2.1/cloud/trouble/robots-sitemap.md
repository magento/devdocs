---
group: cloud-guide
title: Add site map and search engine robots
functional_areas:
  - Cloud
  - Configuration
---
An attempt to generate and write the `sitemap.xml` file to the root directory results in the following error:

```
Please make sure that "/" is writable by the web-server.
```

With {{site.data.var.ece}}, you can only write to specific directories, such as `var`, `pub/media`, `pub/static`, or `app/etc`. When you generate the `sitemap.xml` file using the Admin panel, you must specify the `/media/` path.

For version 2.1.11 and later, you do not have to generate a `robots.txt` because it generates on demand and stores the contents in the database. It does not create a file, but you can view the content in your browser with the url: `<domain.your.project>/robots.txt`

This requires ECE-Tools version 2002.0.12 and later with an updated `.magento.app.yaml` file. See an example of these rules in the [magento-cloud repository](https://github.com/magento/magento-cloud/blob/master/.magento.app.yaml#L43-L49).

#### To generate a `sitemap.xml` file in version 2.1.11 and later:

1.  Access the Magento Admin panel.
1.  On the _Marketing_ menu, click **Site Map** in the _SEO & Search_ section.
1.  In the _Site Map_ view, click **Add Sitemap**.
1.  In the _New Site Map_ view, enter the following values:

    -  **Filename**:`sitemap.xml`
    -  **Path**:`/media/`

1.  Click **Save & Generate**. The new site map becomes available in the _Site Map_ grid.
1.  Click the path in the `Link for Google` column.

#### To add content to the `robots.txt` file:

1.  Access the Magento Admin panel.
1.  On the _Stores_ menu, click **Configuration** in the _Settings_ section.
1.  In the _General_ list, click **Design**.
1.  In the _Search Engine Robots_ view, click **Reset to Defaults**. This populates the _Edit custom instruction of robots.txt_ field.
1.  Click **Save Config**.
1.  Verify the file in your browser with the url: `<domain.your.project>/robots.txt`

Your `robots.txt` file appears in the `<magento_root>/app/pub/media/` folder.

{: .bs-callout .bs-callout-info}
For versions earlier than  2.1.10, you must use the `pub/media` path. When you generate the `robots.txt` file using the Magento Admin Panel—Stores > Settings:Configuration > General:Design—it stores the contents in the database and creates an actual file. 

## Rewrite using Fastly VCL snippet
 If you have different domains and you need separate site maps, you can create a VCL to route to the proper sitemap. Generate the `sitemap.xml` file in the Magento Admin panel as described above, then create a custom Fastly VCL snippet to manage the redirect. See [Custom Fastly VCL snippets]({{ page.baseurl }}/cloud/cdn/cloud-vcl-custom-snippets.html).

#### To use a Fastly VCL snippet for redirect:

Create a custom VCL snippet to rewrite the path for `sitemap.xml` to `/media/sitemap.xml` using the `type` and `content` key-value pairs.

```json
{ 
  "name": "sitemapxml_rewrite",
  "dynamic": "0",
  "type": "recv",
  "priority": "90",
  "content": "if ( req.url.path ~ \"^/?sitemap.xml$\" ) { set req.url = \"/media/sitemap.xml\"; }" 
}
```

{% include note.html type="tip" content="When you upgrade from Magento version 2.1 to version 2.2, enter a Support ticket to remove any existing redirects for these files." %}
