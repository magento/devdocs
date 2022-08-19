## Regional IP addresses

The following tables list the incoming and outgoing IP addresses used by {{site.data.var.ece}} [Integration environments]({{ site.baseurl }}/cloud/architecture/pro-architecture.html#cloud-arch-int). These IP addresses are stable, but might change. We always notify customers before making any IP address changes.

You can use the `ping` command to retrieve the incoming IP address:

```bash
ping integration-abcd123-abcd78910.us-3.magentosite.cloud
```

Sample response:

```console
PING integration-abcd123-abcd78910.us-3.magentosite.cloud (34.210.133.187): 56 data bytes
Request timeout for icmp_seq 0
Request timeout for icmp_seq 1
Request timeout for icmp_seq 2
```

If you have a corporate firewall that blocks outgoing SSH connections, you can add the inbound IP addresses to your allowlist.

### AWS regions

Region | Incoming                                          | Outgoing                                        | Description
+----- | +------------------------------------------------ | +---------------------------------------------- | +--------------------------------------
AP-3   | 52.65.39.201<br>52.65.10.202<br>52.65.30.37       | 52.65.143.178<br>13.54.80.197<br>52.62.224.4    | AWS ap-southest-2 Asia Pacific (Sydney)
AP-4   | 52.62.196.61<br>13.210.31.51<br>13.237.92.5       | 52.65.118.228<br>13.210.220.64<br>52.62.40.194  | AWS ap-southeast-2 Asia Pacific (Sydney)
EU     | 52.209.44.44<br>52.209.23.96<br>52.51.117.101     | 52.51.163.159<br>52.209.44.60<br>52.208.156.247 | AWS eu-west-1 EU (Ireland)
EU-3   | 34.240.75.192<br>34.251.110.37<br>52.19.113.35    | 34.240.57.142<br>52.16.140.48<br>52.209.134.55  | AWS eu-west-1 EU (Ireland)
EU-5   | 35.157.81.88<br>3.122.198.131<br>52.28.102.195    | 3.121.163.221<br>3.121.79.229<br>18.197.3.230   | AWS eu-central-1 EU (Frankfurt)
EU-6   | 35.181.23.47<br>35.181.24.165<br>35.180.237.48    | 52.47.155.26<br>35.181.0.157<br>35.181.12.15    | AWS eu-west-3 EU (Paris)
US     | 52.200.159.23<br>52.200.159.125<br>52.200.160.5   | 52.200.155.111<br>52.200.149.44<br>50.17.163.75 | AWS us-east-1 US East (N.Virginia)
US-3   | 34.210.133.187<br>34.214.72.239<br>34.215.10.85   | 34.210.166.180<br>34.215.83.92<br>34.213.20.158 | AWS us-west-2 US West (Oregon)
US-5   | 50.112.160.58<br>54.213.195.223<br>35.163.170.185 | 54.70.238.217<br>52.88.113.98<br>52.36.188.230  | AWS us-west-2 US West (Oregon)

### Azure regions

Region          | Incoming                                          | Outgoing                                         | Description
+-------------- | +------------------------------------------------ | +----------------------------------------------- | +---------------
US-A1           | 20.186.27.68<br>20.186.58.163<br>20.186.113.8     | 20.186.58.163<br>20.186.27.68<br>20.186.113.8    | Azure eastus2
AZ-WESTEUROPE-1 | 50.112.160.58<br>54.213.195.223<br>35.163.170.185 | 104.45.78.98<br>51.105.168.218<br>51.105.163.143 | Azure westeurope
