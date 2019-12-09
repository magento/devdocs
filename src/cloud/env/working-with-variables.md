---
group: cloud-guide
title: Working with variables
functional_areas:
  - Cloud
  - Configuration
---
Environment variables apply to a specific environment or branch. An environment _inherits_ variable definitions from the parent environment. You can override an inherited value by defining the variable specifically for the environment. For example, to set variables for development, define the variable values in the `.magento.env.yaml` file in the Integration environment. All environments branching from the Integration environment inherit those values. Refer to [Build and deploy]({{ site.baseurl }}/cloud/project/magento-env-yaml.html) for details about configuring your environment using the `.magento.env.yaml` file.

The following demonstrates a specific case for preventing a variable from being seen or inherited. You can only specify these options in the CLI. This case does not pertain to all available environment variables. When using the CLI, you must set variables using one of the following methods:

-  **Project-specific variables**—To set the same value for all environments in your project, use the `magento-cloud project:variable:set` command. These variables are available at build and runtime in all environments.
-  **Environment-specific variables**—To set a unique value for a specific environment, use the `magento-cloud variable:set` command. These variables are available at runtime and are inherited by child environments. You should specify the environment in your command using the `-e` option.

 {:.bs-callout-info}
After setting project-specific variables, you must manually redeploy the remote environment for the change to take effect. Push the new commits to trigger a redeploy. Setting environment-specific variables in the Project Web Interface automatically redeploys the environment.

Use the following options to prevent a variable from being seen or inherited:

-  `--inheritable false`—disables inheritance for child environments. This is useful for setting production-only values on the master branch and allowing all other environments to use a project-level variable of the same name.
-  `--sensitive true`—marks the variable as _non-readable_ in the Project Web Interface. You can not view the variable in the user interface; however, you can view the variable from the application container, like any other variable.

```bash
magento-cloud variable:create --name <VARIABLE_NAME> --value <VARIABLE_VALUE> --inheritable false --sensitive true
```
