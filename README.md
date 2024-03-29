# Gift Aid for WooCommerce

A plugin for WooCommerce that empowers donors to elect to reclaim Gift Aid at the checkout.

## Description

If you're a charitable organisation based in the UK using WooCommerce to accept donations, it is highly likely that you need to provide your donors with the option to reclaim [Gift Aid](https://www.gov.uk/donating-to-charity/gift-aid) so that you can claim an extra 25p for every £1 they give.

Gift Aid for WooCommerce removes the need for any bespoke development to add this feature. Once installed, the plugin offers the following functionality:

- A new section is added to the checkout with a customisable Gift Aid explanation and accompanying checkbox empowering the donor to reclaim Gift Aid on their donation.
- Gift Aid markup is inserted via AJAX if the user switches from a non-UK country to the UK.
- If the donor elects to reclaim Gift Aid, confirmation of this will be added to both the order confirmation/thank you page and to the order confirmation email.
- Configurable settings added to the *Products* tab in the WooCommerce settings:
    - Checkbox to enable/disable the feature
    - Label for the checkbox e.g. 'Click here to reclaim Gift Aid'
    - Heading field for the Gift Aid section at the checkout (optional, defaults to 'Reclaim Gift Aid')
    - Description field to explain Gift Aid to the donor so that they can make a choice.
- Gift Aid column added to the *Orders* screen with a simple Yes/No to reflect the donor's choice.
- The donor's Gift Aid choice will be added to the order details section of the *Edit Order* screen.
- A Gift Aid column containing a simple Yes/No will be added automatically to CSV files exported using the WooCommerce [Order/Customer CSV Export](http://www.woothemes.com/products/ordercustomer-csv-export/) plugin, as long as the 'Default' export setting is selected.

Gift Aid for WooCommerce is also fully translatable in both the admin area and on the front-end.

![Example of the Gift Aid plugin in use](gift-aid.png?raw=true)

## Requirements

Gift Aid for WooCommerce requires at least WooCommerce 2.2.3 to function correctly.

## Installation

1. Upload the `gift-aid-for-woocommerce` folder to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Configure the plugin in the 'Products' tab of the WooCommerce settings

## Known Issues

Due to the fact that WooCommerce core is missing the ability to use the `woocommerce_get_settings_` filter to add settings to either the *checkout* or *tax* tabs we're having to put them in the *Products* tab for now. 

Adding a dedicated tab just for this plugin's settings is overkill, so it's unlikely that this particular workaround will be implemented in the meantime.

Any future update to the plugin that changes the tab in which the settings can be found will have no impact on your saved settings or any of the advertised functionality.

## Changelog

**1.2.0** - *30.12.2015*
- Refactored to comply with WordPress.org repo rules.

**1.1.0** - *16.11.2015*
- Gift Aid markup inserted via AJAX if switching to the UK from another country.

**1.0.0** - *14.09.2015*
- First stable release.

## Roadmap

**1.3.0** - *~Jan 2016*
- Add a new section in WooCommerce->Reports with data providing a summary of total Gift Aid reclaimed over the specified time period.

**1.4.0** - *~Feb 2016*
- Add a dashboard widget to show the data made available in 1.3.0.

