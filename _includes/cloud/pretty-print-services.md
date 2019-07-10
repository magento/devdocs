#### To verify information used for configurations and settings:

1.  Use SSH to log in to the remote environment.

1.  Create `pretty-print` of all relationships for services and configuration data for that environment.

    ```bash
    php -r 'print_r(json_decode(base64_decode($_ENV["MAGENTO_CLOUD_RELATIONSHIPS"])));'
    ```
