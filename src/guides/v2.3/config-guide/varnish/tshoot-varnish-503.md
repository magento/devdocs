---
group: configuration-guide
title: Troubleshooting 503 errors
functional_areas:
  - Configuration
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360034631211
---

## Backend Fetch Failed errors

If the length of [cache](https://glossary.magento.com/cache) tags used by Magento exceed Varnish's default of 8192 bytes, you can see HTTP 503 (Backend Fetch Failed) errors in the browser. The errors might display similar to the following:

```terminal
Error 503 Backend fetch failed
Backend fetch failed
```

To resolve this issue, increase the default value of the `http_resp_hdr_len` parameter in your Varnish configuration file. The `http_resp_hdr_len` parameter specifies the max header length _within_ the total default response size of 323768 bytes.

{:.bs-callout-info}
If the `http_resp_hdr_len` value exceeds 32K, you must also increase the default response size using the `http_resp_size` parameter.

1. As a user with `root` privileges, open your Vanish configuration file in a text editor:

   *  CentOS 6: `/etc/sysconfig/varnish`
   *  CentOS 7: `/etc/varnish/varnish.params`
   *  Debian: `/etc/default/varnish`
   *  Ubuntu: `/etc/default/varnish`

1. Search for the `http_resp_hdr_len` parameter.
1. If the parameter doesn't exist, add it after `thread_pool_max`.
1. Set `http_resp_hdr_len` to a value equal to the product count of your largest [category](https://glossary.magento.com/category) multiplied by 21. (Each product tag is about 21 characters in length.)

   For example, setting the value to 65536 bytes should work if your largest category has 3,000 products.

   For example:

   ```conf
   -p http_resp_hdr_len=65536 \
   ```

1. Set the `http_resp_size` to a value that accommodates the increased response header length.

   For example, using the sum of the increased header length and default response size is a good starting point (e.g., 65536 + 32768 = 98304):

   ```conf
   -p http_resp_size=98304 \
   ```

   A snippet follows:

   ```conf
   # DAEMON_OPTS is used by the init script.
   DAEMON_OPTS="-a ${VARNISH_LISTEN_ADDRESS}:${VARNISH_LISTEN_PORT} \
             -f ${VARNISH_VCL_CONF} \
             -T ${VARNISH_ADMIN_LISTEN_ADDRESS}:${VARNISH_ADMIN_LISTEN_PORT} \
             -p thread_pool_min=${VARNISH_MIN_THREADS} \
             -p thread_pool_max=${VARNISH_MAX_THREADS} \
             -p http_resp_hdr_len=65536 \
             -p http_resp_size=98304 \
       -p workspace_backend=98304 \
             -S ${VARNISH_SECRET_FILE} \
             -s ${VARNISH_STORAGE}"
   ```

## Health check timeouts

If you disable the cache while Varnish is configured as the caching application and while Magento is in developer mode, it might become impossible to log in to the [Admin](https://glossary.magento.com/admin).

This situation could happen because the default health check has a `timeout` value of 2 seconds. It could take more than 2 seconds for the health check to collect and merge information on every health check request. If this occurs in 6 out of 10 health checks, the Magento server is considered unhealthy. Varnish serves stale content when the server is unhealthy.

Because Admin is accessed through Varnish, you cannot log in to Admin to enable caching (unless Magento becomes healthy again).  However, you can use the following command to enable cache:

```bash
bin/magento cache:enable
```

For more information about using the command line, see [Get started with command-line configuration]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands.html).
