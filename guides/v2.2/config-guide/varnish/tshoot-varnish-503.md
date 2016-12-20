---
layout: default
group: config-guide
subgroup: 09_Varnish
title: Troubleshooting 503 errors
menu_title: Troubleshooting 503 errors
menu_order: 500
menu_node:
version: 2.2
github_link: config-guide/varnish/tshoot-varnish-503.md
---

## Backend Fetch Failed errors

If the length of cache tags used by Magento exceed Varnish's default of 8192 characters, you can see HTTP 503 (Backend Fetch Failed) errors in the browser. The errors might display similar to the following:

	Error 503 Backend fetch failed
	Backend fetch failed

To resolve this issue, increase the default value of `http_resp_hdr_len` in your Varnish configuration file as follows:

1.	As a user with `root` privileges, open your Vanish configuration file in a text editor:

	*	CentOS 6: `/etc/sysconfig/varnish`
	*	CentOS 7: `/etc/varnish/varnish.params`
	*	Ubuntu: `/etc/default/varnish`

2.	Search for the `http_resp_hdr_len` parameter.
3.	If the parameter doesn't exist, add it after `thread_pool_max`.
4.	Set `http_resp_hdr_len` to a value equal to the product count of your largest category multiplied by 30. (Each product tag is about 21 characters in length.)

	For example, setting the value to 64000 should work if your largest category has 3,050 products.

	For example:

		-p http_resp_hdr_len=64000 \

	A snippet follows:

		# DAEMON_OPTS is used by the init script.
		DAEMON_OPTS="-a ${VARNISH_LISTEN_ADDRESS}:${VARNISH_LISTEN_PORT} \
             -f ${VARNISH_VCL_CONF} \
             -T ${VARNISH_ADMIN_LISTEN_ADDRESS}:${VARNISH_ADMIN_LISTEN_PORT} \
             -p thread_pool_min=${VARNISH_MIN_THREADS} \
             -p thread_pool_max=${VARNISH_MAX_THREADS} \
             -p http_resp_hdr_len=64000 \
             -S ${VARNISH_SECRET_FILE} \
             -s ${VARNISH_STORAGE}"

## Health check timeouts

If you disable cache management while Varnish is configured as the caching application and while Magento is in developer mode, it might become impossible to log in to Admin.

This situation could happen because the default health check has a `timeout` value of 2 seconds. It could take more than 2 seconds for the health check to collect and merge information on every health check request. If this occurs in 6 out of 10 health checks, the Magento server is consindered unhealthy. Varnish serves stale content when the server is unhealthy.

Because Admin is accessed through Varnish, you cannot log in to Admin to enable cache management (unless Magento becomes healthy again).  However, you can use the following command to enable cache:

`magento setup:cache:enable`

For more information about using the command line, see <a href="{{page.baseurl}}config-guide/cli/config-cli-commands.html">Get started with command-line configuration</a>.
