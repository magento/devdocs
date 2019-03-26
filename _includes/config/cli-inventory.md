#### To import geocodes for offline calculation

Enter the following command with a space-separated list of [ISO-3166 alpha2 country codes](https://www.geonames.org/countries/):

```bash
bin/magento inventory-geonames:import <country code> <country code> ...
```

For example:

```bash
bin/magento inventory-geonames:import us ca gb de
```

The system downloads and imports the geocodes data to your database, then displays the message  `Importing <country code>: OK`.
