---
layout: default
group: config-guide
subgroup: 13_DBProfiler
title: Configure the database profiler
menu_title: Configure the database profiler
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/db-profiler/db-profiler.md
---

## About the database profiler
The Magento database profiler displays all queries executed on a page, including the time for each query and what parameters were executed.

## Step 1: Modify the deployment configuration
Modify `<your Magento install dir>/app/etc/env.php` to add a reference the [database profiler class]({{ site.mage2000url }}lib/internal/Magento/Framework/DB/Profiler.php){:target="_blank"} under the `db` and `default` arrays as follows:

{% highlight php startinline=true %}
return array (
  ... more ...
  'db' => 
  array (
    ... more ...
    array (
      'default' => 
      array (
        ... more ...
        'profiler' => [
            'class' => '\Magento\Framework\DB\Profiler',
            'enabled' => true,
        ],
      ),
    ),
  ),
);
{% endhighlight %}

## Step 2: Configure the output

{% highlight php startinline=true %}
$bootstrap->run($app); //This should be the last line
//After Than add these
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
{% endhighlight %}
