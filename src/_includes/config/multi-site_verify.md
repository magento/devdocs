Unless you have DNS set up for your stores' URLs, you must add a static route to the host in your `hosts` file:

1. Locate your operating system's [`hosts` file](https://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system).
1. Add the static route in the format:

   ```conf
   <ip address> french.mysite.mg
   <ip address> german.mysite.mg
   ```

1. Go to one of the following URLs in your browser:

   ```http
   http://mysite.mg/admin
   http://french.mysite.mg/frenchstoreview
   http://german.mysite.mg/germanstoreview
   ```

You're done!

 {:.bs-callout-info}

*  Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.
*  Additional tasks are required to set up {{site.data.var.ece}}; for more information, see [Set up multiple Cloud websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html)

### Troubleshooting

*  If your French and German sites return 404s but your Admin loads, make sure you completed [Step 6: Add the store code to the base URL]({{ page.baseurl }}/config-guide/multi-site/ms_websites.html#multi-storecode-baseurl).
*  If all URLs return 404s, make sure you restarted your web server.
*  If the Magento Admin doesn't function properly, make sure you set up your virtual hosts properly.
