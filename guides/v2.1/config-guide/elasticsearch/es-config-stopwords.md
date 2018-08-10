---
group: config-guide
subgroup: 14_Elastic
title: Configure Elasticsearch stopwords
menu_title: Configure Elasticsearch stopwords
menu_order: 10
menu_node:
version: 2.1
ee_only: True
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

#### Contents

*	[What are stopwords?](#stopword-overview)
*	[Configure stopwords](#config-stopwords)
*	[Change the stopword directory](#config-stopword-dir)

## What are stopwords? {#stopword-overview}

In general, *stopwords* are a language's most common words that search engines filter out after processing text. Originally, when disk space and memory were extremely limited, every kilobyte saved meant a significant improvement in performance. Therefore, search engines achieved performance gains by ignoring certain words and keeping the index small.

Although we have more storage today, performance is still important. Elasticsearch, like other search engines, still use stopwords to improve performance.

You must manage your Elasticsearch stopwords using `.csv` files located in the `<your Magento install dir>/vendor/magento/module-elasticsearch/etc/stopwords` directory or the `<your Magento install dir>/app/code/Magento/Elasticsearch/etc/stopwords/` directory, depending on how you installed the Magento software.

For more information about how Elasticsearch uses stopwords, see the following resources:

*	<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/stopwords.html" target="_blank">Stopwords: Performance Versus Precision</a>
*	<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/pros-cons-stopwords.html" target="_blank">Pros and Cons of Stopwords</a>
*	<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/using-stopwords.html" target="_blank">Using Stopwords</a>
*	<a href="https://www.elastic.co/guide/en/elasticsearch/guide/current/stopwords-performance.html" target="_blank">Stopwords and Performance</a>

## Configure stopwords {#config-stopwords}

Elasticsearch stopwords are located in the `<your Magento install dir>/vendor/magento/module-elasticsearch/etc/stopwords` directory. Magento ships with one `.csv` file containing stopwords for our default locales and an additional file, `stopwords.csv`, which has stopwords for any locale that is not represented by another `.csv` file.

The default lifetime for stopwords file {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} is 15 minutes.

See one of the following topics for more information:

*	[Edit stopwords for an existing locale](#config-edit-stopwords)
*	[Create stopwords for a new locale](#config-create-stopwords)

### Edit stopwords for an existing locale {#config-edit-stopwords}

To edit stopwords:

1.	Log in to your Magento server, or switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner).
2.	Use a text editor to open a stopword file in the `<your Magento install dir>/vendor/magento/module-elasticsearch/etc/stopwords` directory.

	`.csv` files use the naming convention `stopwords_<locale_code>.csv`. For example, the German stopword file is named `stopwords_de_DE.csv`.
3.	Add words, remove words, or change words in the file.

	(Each stopword in a file starts on a new line.)
4.	Save your changes and exit the text editor.
5.	Clean the Magento configuration cache.

	*	Magento Admin: **System** > Tools > **Cache Management**. Select the **Configuration** checkbox and, from the list above it, click **Refresh**. Click **Submit** to complete the action.

	*	Command line: As the Magento file system owner, enter the following command:

			php <your Magento install dir>/bin/magento magento cache:clean config
6.	Check the results by searching for terms on your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.x

### Create stopwords for a new locale {#config-create-stopwords}

To add stopwords for a locale:

1.	Log in to your Magento server, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner).
2.	Use a text editor to create a stopword file named `stopwords_<locale_code>.csv` in the `<your Magento install dir>/vendor/magento/module-elasticsearch/etc/stopwords` directory.

	For example, to create stopwords for the Italian locale, name the file `stopwords_it_IT.csv`.

3.	In your stopword file, make sure each stopword is on a separate line.
4.	Save your changes and exit the text editor.
5.	In the same directory, open `esconfig.xml` in a text editor.
6.	Add a line to `esconfig.xml` as follows:

	    <LOCALE_CODE>stopwords_LOCALE_CODE.csv</LOCALE_CODE>

    For example, to add an Italian stopword file, add the following line:

	    <it_IT>stopwords_it_IT.csv</it_IT>
7.	Save the changes to `esconfig.xml` and exit the text editor.
8.	Clean the Magento configuration cache.

	*	Magento Admin: **System** > Tools > **Cache Management**. Select the **Configuration** checkbox and, from the list above it, click **Refresh**. Click **Submit** to complete the action.

	*	Command line: As the Magento file system owner, enter the following command:

			php <your Magento install dir>/bin/magento magento cache:clean config
9.	Check the results by searching for terms on your storefront.

## Change the stopword directory {#config-stopword-dir}

This section discusses how to optionally change the default stopword directory from one of the following:

*	`<your Magento install dir>/vendor/magento/module-elasticsearch/etc/stopwords`
*	`<your Magento install dir>/app/code/Magento/Elasticsearch/etc/stopwords/`

The location depends on how you installed the Magento software. If you cloned the Magento 2 GitHub repository, the path is under `app/code`. If you installed a compressed archive or a metapackage, the path is under `vendor`.

To change the directory:

1.	As the Magento file system owner, open the Elasticsearch `di.xml` in a text editor.

	If you cloned the repository, it's located at `app/code/Magento/Elasticsearch/etc/di.xml`

	If you got an archive or the metapackage, it's located at `vendor/magento/module-elasticsearch/etc/di.xml`

2.	Change the value of `fileDir` to the desired directory:

{% highlight xml %}

<type name="Magento\Elasticsearch\SearchAdapter\Query\Preprocessor\Stopwords">
    <arguments>
        <argument name="fileDir" xsi:type="string">app/code/Magento/Elasticsearch/etc/stopwords</argument>
    </arguments>
</type>
{% endhighlight %}

Save your changes to `di.xml` and exit the text editor.
