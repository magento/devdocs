(function($) {
  Drupal.behaviors.marketo_ma = {
    attach: function(context, settings) {
      if (typeof settings.marketo_ma !== 'undefined' && settings.marketo_ma.track) {
        jQuery.ajax({
          url: document.location.protocol + settings.marketo_ma.library,
          dataType: 'script',
          cache: true,
          success: function() {
            Munchkin.init(settings.marketo_ma.key);
            if (typeof settings.marketo_ma.actions !== 'undefined') {
              jQuery.each(settings.marketo_ma.actions, function() {
                Drupal.behaviors.marketo_ma.marketoMunchkinFunction(this.action, this.data, this.hash);
              });
            }
          }
        });
      }
    },
    marketoMunchkinFunction: function(leadType, data, hash) {
      mktoMunchkinFunction(leadType, data, hash);
    }
  };

})(jQuery);
;
