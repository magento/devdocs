---
group: configuration-guide
title: Configure Elasticsearch stopwords
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

## What are stopwords? {#stopword-overview}

In general, *stopwords* are a language's most common words that search engines filter out after processing text. Originally, when disk space and memory were extremely limited, every kilobyte saved meant a significant improvement in performance. Therefore, search engines achieved performance gains by ignoring certain words and keeping the index small.

Although we have more storage today, performance is still important. Elasticsearch, like other search engines, still uses stopwords to improve performance.

You must manage your Elasticsearch stopwords using `.csv` files located in the `<magento_root>/vendor/magento/module-elasticsearch/etc/stopwords` directory or the `<magento_root>/app/code/Magento/Elasticsearch/etc/stopwords/` directory, depending on how you installed the Magento software.

For more information about how Elasticsearch uses stopwords, see the following resources:

*  [Stopwords: Performance Versus Precision](https://www.elastic.co/guide/en/elasticsearch/guide/current/stopwords.html){:target="_blank"}
*  [Pros and Cons of Stopwords](https://www.elastic.co/guide/en/elasticsearch/guide/current/pros-cons-stopwords.html){:target="_blank"}
*  [Using Stopwords](https://www.elastic.co/guide/en/elasticsearch/guide/current/using-stopwords.html){:target="_blank"}
*  [Stopwords and Performance](https://www.elastic.co/guide/en/elasticsearch/guide/current/stopwords-performance.html){:target="_blank"}

## Configure stopwords {#config-stopwords}

Elasticsearch stopwords are located in the `<magento_root>/vendor/magento/module-elasticsearch/etc/stopwords` directory. Magento ships with one `.csv` file containing stopwords for our default locales and an additional file, `stopwords.csv`, which has stopwords for any locale that is not represented by another `.csv` file.

The default lifetime for stopwords file [cache](https://glossary.magento.com/cache) is 15 minutes.

See one of the following topics for more information:

*  [Edit stopwords for an existing locale](#config-edit-stopwords)
*  [Create stopwords for a new locale](#config-create-stopwords)
*  [To change the directory from your module](#to-change-directory-stopwords)

### Edit stopwords for an existing locale {#config-edit-stopwords}

To edit stopwords:

1. Log in to your Magento server, or switch to, the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html).
1. Use a text editor to open a stopword file in the `<magento_root>/vendor/magento/module-elasticsearch/etc/stopwords` directory.

   `.csv` files use the naming convention `stopwords_<locale_code>.csv`. For example, the German stopword file is named `stopwords_de_DE.csv`.

1. Add words, remove words, or change words in the file.

   (Each stopword in a file starts on a new line.)

1. Save your changes and exit the text editor.
1. Clean the Magento configuration cache.

   *  Magento Admin: **System** > Tools > **Cache Management**. Select the **Configuration** checkbox and, from the list above it, click **Refresh**. Click **Submit** to complete the action.

   *  Command line: As the Magento file system owner, enter the following command:

      ```bash
      php <magento_root>/bin/magento magento cache:clean config
      ```

1. Check the results by searching for terms on your [storefront](https://glossary.magento.com/storefront).

### Create stopwords for a new locale {#config-create-stopwords}

To add stopwords for a locale:

1. Log in to your Magento server, or switch to, the [Magento file system owner]({{page.baseurl}}/install-gde/prereq/file-sys-perms-over.html).

1. Use a text editor to create a stopword file named `stopwords_<locale_code>.csv` in the `<magento_root>/vendor/magento/module-elasticsearch/etc/stopwords` directory.

   For example, to create stopwords for the Italian locale, name the file `stopwords_it_IT.csv`.

1. In your stopword file, make sure each stopword is on a separate line.
1. Save your changes and exit the text editor.
1. In the same directory, open `esconfig.xml` in a text editor.
1. Add a line to `esconfig.xml` as follows:

   ```xml
   <LOCALE_CODE>stopwords_LOCALE_CODE.csv</LOCALE_CODE>
   ```

   For example, to add an Italian stopword file, add the following line:

   ```xml
   <it_IT>stopwords_it_IT.csv</it_IT>
   ```

1. Save the changes to `esconfig.xml` and exit the text editor.
1. Clean the Magento configuration cache.

   *  Magento Admin: **System** > Tools > **Cache Management**. Select the **Configuration** checkbox and, from the list above it, click **Refresh**. Click **Submit** to complete the action.

   *  Command line: As the Magento file system owner, enter the following command:

      ```bash
      php <magento_root>/bin/magento magento cache:clean config
      ```

1. Check the results by searching for terms on your storefront.

## Change the stopword directory {#config-stopword-dir}

This section discusses how to optionally change the default stopword directory from one of the following:

*  `<magento_root>/vendor/magento/module-elasticsearch/etc/stopwords`
*  `<magento_root>/app/code/Magento/Elasticsearch/etc/stopwords/`

The location depends on how you installed the Magento software. If you cloned the Magento 2 GitHub repository, the path is under `app/code`. If you installed a compressed archive or a metapackage, the path is under `vendor`.

To change the directory:

1. As the Magento file system owner, open the Elasticsearch `di.xml` in a text editor.

   If you cloned the repository, it's located at `app/code/Magento/Elasticsearch/etc/di.xml`

   If you got an archive or the metapackage, it's located at `vendor/magento/module-elasticsearch/etc/di.xml`

1. Change the value of `fileDir` to the desired directory:

   ```xml
   <type name="Magento\Elasticsearch\SearchAdapter\Query\Preprocessor\Stopwords">
       <arguments>
           <argument name="stopwordsDirectory" xsi:type="string">app/code/Magento/Elasticsearch/etc/stopwords</argument>
       </arguments>
   </type>
   ```

Save your changes to `di.xml` and exit the text editor.

## To change the directory from your module {#to-change-directory-stopwords}

1. [Create a new module](https://devdocs.magento.com/guides/v2.3/extension-dev-guide/build/module-file-structure.html){:target="_blank"}
1. In your module `etc/di.xml` add instructions:

   ```xml
   <type name="Magento\Elasticsearch\SearchAdapter\Query\Preprocessor\Stopwords">
       <arguments>
          <argument name="stopwordsModule" xsi:type="string">Your_Module</argument>
          <argument name="stopwordsDirectory" xsi:type="string">stopwords</argument>
       </arguments>
   </type>
   ```

1. In your module, create the directory `etc/stopwords`, with the corresponding `.csv`.

Save your changes to `di.xml` and exit the text editor.
