<div markdown="1">

Unless you have DNS set up for your stores' URLs, you must add a static route to the host in your `hosts` file:

1.  Locate your operating system's [`hosts` file](https://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system){:target="_blank"}.
2.  Add the static route in the format:

        <ip address> french.mysite.mg
        <ip address> german.mysite.mg
3.  Go to one of the following URLs in your browser:

        http://mysite.mg/admin
        http://french.mysite.mg/frenchstoreview
        http://german.mysite.mg/germanstoreview

You're done!

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Additional tasks might be required to deploy multiple websites in a hosted environment; check with your hosting provider for more information.</li>
    <li>Additional tasks are required to set up Magento Enterprise Cloud Edition; for more information, see <a href="{{ page.baseurl }}cloud/project/project-multi-sites.html">Set up multiple Cloud websites or stores</a></li></ul>
</div>

### Troubleshooting
*	If your French and German sites return 404s but your Admin loads, make sure you completed [Step 6: Add the store code to the base URL]({{ page.baseurl }}config-guide/multi-site/ms_websites.html#multi-storecode-baseurl).
*	If all URLs return 404s, make sure you restarted your web server.
*	If the Magento Admin doesn't function properly, make sure you set up your virtual hosts properly.

