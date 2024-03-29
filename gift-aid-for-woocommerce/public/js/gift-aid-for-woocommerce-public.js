( function( $ ) {
	'use strict';

	$( document ).ready( function() {

		// Get the parent container.
		var parentContainer = '.woocommerce-shipping-fields';

		// Get the container holding our Gift Aid markup.
		var container = '#woocommerce-gift-aid';

		// The country code for the United Kingdom.
		var home = 'GB';

		// When the billing country <select> changes.
		$( '#billing_country' ).on( 'change', function( e ) {

			// Get the currently selected country.
			var country = $( e.target ).find( "option:selected" ).val();

			if ( country !== home && $( container ).length > 0 ) {
				// If the newly selected country isn't GB, and the
				// container exists then remove it.
				$( container ).remove();

			} else if ( country === home && $( container ).length < 1 ) {
				// Fetch and append the container if the country
				// is GB and the container doesn't exist.
				var data = {
					action: 'gift_aid_html', // WP action suffix.
					security: giftaidhtml.giftaid_ajax_security // Nonce string.
				};

				$.post(
					giftaidhtml.ajax_url, // AJAX url for WP.
					data,
					function( response ) {
						if ( response !== 0 ) {
							// Append the response to the parent container.
							$( parentContainer ).append( response );
						}
					}
				);
			}

			return false;
		} );
	} );

} )( jQuery );
