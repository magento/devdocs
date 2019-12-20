---
group: configuration-guide
title: Configure the database profiler
contributor_name: Atish Goswami
contributor_link: http://atishgoswami.com
functional_areas:
  - Configuration
  - System
  - Setup
---

## About the database profiler

The Magento database profiler displays all queries executed on a page, including the time for each query and what parameters were executed.

## Step 1: Modify the deployment configuration

Modify `<magento_root>/app/etc/env.php` to add the following reference to the [database profiler class]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/DB/Profiler.php):

```php?start_inline=1
        'profiler' => [
            'class' => '\Magento\Framework\DB\Profiler',
            'enabled' => true,
        ],
```

An example follows:

```php?start_inline=1
 'db' =>
  array (
    'table_prefix' => '',
    'connection' =>
    array (
      'default' =>
      array (
        'host' => 'localhost',
        'dbname' => 'magento',
        'username' => 'magento',
        'password' => 'magento',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
        'profiler' => [
            'class' => '\Magento\Framework\DB\Profiler',
            'enabled' => true,
        ],
      ),
    ),
  ),
  ```

## Step 2: Configure the output

Configure the output in your Magento application boostrap file; this might be `<magento_root>/index.php` or it could be located in a web server virtual host configuration.

The following example displays results in a three-column table:

*  Total time (displays the total amount of time to run all queries on the page)
*  SQL (displays all SQL queries; the row header displays the count of queries)
*  Query Params (displays the parameters for each SQL query)

To configure the output, add the following after the `$bootstrap->run($app);` line in your bootstrap file:

```php?start_inline=1
/** @var \Magento\Framework\App\ResourceConnection $res */
$res = \Magento\Framework\App\ObjectManager::getInstance()->get('Magento\Framework\App\ResourceConnection');
/** @var Magento\Framework\DB\Profiler $profiler */
$profiler = $res->getConnection('read')->getProfiler();
echo "<table cellpadding='0' cellspacing='0' border='1'>";
echo "<tr>";
echo "<th>Time <br/>[Total Time: ".$profiler->getTotalElapsedSecs()." secs]</th>";
echo "<th>SQL [Total: ".$profiler->getTotalNumQueries()." queries]</th>";
echo "<th>Query Params</th>";
echo "</tr>";
foreach ($profiler->getQueryProfiles() as $query) {
    /** @var Zend_Db_Profiler_Query $query*/
    echo '<tr>';
    echo '<td>', number_format(1000 * $query->getElapsedSecs(), 2), 'ms', '</td>';
    echo '<td>', $query->getQuery(), '</td>';
    echo '<td>', json_encode($query->getQueryParams()), '</td>';
    echo '</tr>';
}
echo "</table>";
```

## Step 3: View the results

Go to any page in your [storefront](https://glossary.magento.com/storefront) or [Magento Admin](https://glossary.magento.com/magento-admin) to view the results. A sample follows:

![Sample database profiler results]({{ site.baseurl }}/common/images/config_db-profiler-results.png){:width="800px"}
