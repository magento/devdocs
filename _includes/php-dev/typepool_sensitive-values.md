<div markdown="1">

To specify either a system-specific or sensitive configuration value, add a reference to [`Magento\Config\Model\Config\TypePool`]({{ site.mage2200url }}app/code/Magento/Config/Model/Config/TypePool.php){:target="_blank"} to `di.xml` as follows:

{% highlight php startinline=true %}
<type name="Magento\Config\Model\Config\TypePool">
   <arguments>
      <argument name="{sensitive|environment}" xsi:type="array">
         <item name="<config path>" xsi:type="string">1</item>
      </argument>
   </arguments>
</type>
{% endhighlight %}

where `<argument name="{sensitive|environment}` specifies the type of value: either sensitive or system-specific.

and `<config path>` is a `/`-delimited string that uniquely identifies this configuration setting.

<div class="bs-callout bs-callout-info" id="merging-info" markdown="1">
The same configuration setting can be both sensitive and system-specific.
</div>

### Sensitive setting
An example of a sensitive setting follows:

{% highlight php startinline=true %}
<type name="Magento\Config\Model\Config\TypePool">
   <arguments>
      <argument name="sensitive" xsi:type="array">
         <item name="payment/test/password" xsi:type="string">1</item>
      </argument>
   </arguments>
</type>
{% endhighlight %}

After specifying the sensitive setting, use the following commands to verify it:

    php bin/magento cache:clean
    php bin/magento app:config:dump

A message similar to the following is displayed:

    The configuration file doesn't contain sensitive data for security reasons. Sensitive data can be stored in the following environment variables:
    CONFIG__DEFAULT__PAYMENT__TEST__PASWORD for payment/test/password
    Done.

### System-specific settings
Like sensitive settings, system-specific settings are written to `app/etc/env.php` only.

A configuration example follows:

{% highlight php startinline=true %}
<type name="Magento\Config\Model\Config\TypePool">
   <arguments>
      <argument name="environemnt" xsi:type="array">
         <item name="<config path>" xsi:type="string">1</item>
      </argument>
   </arguments>
</type>
{% endhighlight %}