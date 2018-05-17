---
group: config-guide
subgroup: 09_Varnish
title: Troubleshooting 503 (Backend Fetch Failed) errors
menu_title: Troubleshooting 503 (Backend Fetch Failed) errors
menu_order: 500
menu_node:
version: 2.0
github_link: config-guide/varnish/tshoot-varnish-503.md
functional_areas:
  - Configuration
  - System
  - Setup
---

If the length of {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} tags used by Magento exceed Varnish's default of 8192 bytes, you can see HTTP 503 (Backend Fetch Failed) errors in the browser. The errors might display similar to the following:

	Error 503 Backend fetch failed
	Backend fetch failed

To resolve this issue, increase the default value of the `http_resp_hdr_len` parameter in your Varnish configuration file. The `http_resp_hdr_len` parameter specifies the max header length _within_ the total default response size of 32768 bytes.

<div class="bs-callout bs-callout-info" id="info">
	If the <code>http_resp_hdr_len</code> value exceeds 32768 bytes, you must also increase the default response size using the <code>http_resp_size</code> parameter.
</div>

1.	As a user with `root` privileges, open your Vanish configuration file in a text editor:

	*	CentOS 6: `/etc/sysconfig/varnish`
	*	CentOS 7: `/etc/varnish/varnish.params`
	*	Debian: `/etc/default/varnish`
	*	Ubuntu: `/etc/default/varnish`

2.	Search for the `http_resp_hdr_len` parameter.
3.	If the parameter doesn't exist, add it after `thread_pool_max`.
4.	Set `http_resp_hdr_len` to a value equal to the product count of your largest {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} multiplied by 21. (Each product tag is about 21 characters in length.)

	For example, setting the value to 65536 bytes should work if your largest category has 3,000 products:

		-p http_resp_hdr_len=65536 \

5.  Set the `http_resp_size` to a value that accommodates the increased response header length.

	For example, using the sum of the increased header length and default response size is a good starting point (e.g., 65536 + 32768 = 98304):

		-p http_resp_size=98304 \

	A snippet follows:

		# DAEMON_OPTS is used by the init script.
		DAEMON_OPTS="-a ${VARNISH_LISTEN_ADDRESS}:${VARNISH_LISTEN_PORT} \
             -f ${VARNISH_VCL_CONF} \
             -T ${VARNISH_ADMIN_LISTEN_ADDRESS}:${VARNISH_ADMIN_LISTEN_PORT} \
             -p thread_pool_min=${VARNISH_MIN_THREADS} \
             -p thread_pool_max=${VARNISH_MAX_THREADS} \
             -p http_resp_hdr_len=65536 \
             -p http_resp_size=98304 \
             -S ${VARNISH_SECRET_FILE} \
             -s ${VARNISH_STORAGE}"
