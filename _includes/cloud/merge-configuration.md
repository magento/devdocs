By default, the deployment process overwrites all settings in the `env.php` file; however, you can choose to merge one or more values for a service configuration without overwriting all of the values.

Set the `_merge` option to one of the following:

-  `true`—**Merge** the configured service values with the environment variable values.
-  `false`—**Overwrite** the configured service values with the environment variable values.
