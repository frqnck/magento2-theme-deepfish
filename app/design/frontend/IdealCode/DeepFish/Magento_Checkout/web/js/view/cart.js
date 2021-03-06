define([
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function(Component, customerData) {
    'use strict';

    return Component.extend({
        cart: customerData.get('cart'),

        /**
         * Check product in cart
         *
         * @param id
         * @returns {boolean}
         */
        productInCart: function(id) {
            var items = this.cart().items;

            for(var index in items) {
                if(items[index].product_id == id) {
                    return items[index];
                }
            }

            return false;
        }
    });
});
