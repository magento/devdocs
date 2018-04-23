

/*!
 * contributorsList jQuery plugin
 * Author: ybannykh@magento.com
 * Gets the JSON file from EngCom database and creates a filterable list
 * of contributors.
 * Sample usage:
 * $('#elem').contributorsList({ contributorsLimit: '3'});
 * Options can be also passed from the html data attributes:
 * <div id="elem" data-plugin-options='{"contributorsLimit": 3}'>
*/
;(function( $, window, document, undefined ) {

  var pluginName = 'contributorsList';
  var defaults = {
    dataUrl: 'https://s3.amazonaws.com/public.magento.com/devdocs-contributors.js',
    periodTypes: 'monthly,quoter,years',
    periodTypesSettings: {
      monthly: {
        label: 'Monthly',
        periodsLimit: 12,
        contributorsLimit: 5
      },
      quoter: {
        label: 'Quarterly',
        periodsLimit: 12,
        contributorsLimit: 5
      },
      years: {
        label: 'Yearly',
        periodsLimit: 5,
        contributorsLimit: 5
      }
    },
    periodsLimit: 12,
    contributorsLimit: 50,
    // Class names (recommended to not modify)
    periodSwitcherClass: 'periods',
    loadingClass: 'loading',
    loadedClass: 'loaded',
    hiddenClass: 'hide',
    periodClass: 'contributors-period',
    contributorsListClass: 'contributors-list',
  };

  // The actual plugin constructor
  function Plugin( element, options ) {
    var plugin = this;
    this.element = element;
    this.$element = $(element);
    this._defaults = defaults;
    this._name = pluginName;
    // Get data from html (to extend the defaults with data attributes)
    this.metadata = this.$element.data();

    // Extend defaults with options passed: data-attributes, options, defaults
    this.options = $.extend({}, defaults, options, this.metadata);


    // * Plugin methods *

    // Handle failed load. Removes the loading class so the contributors block becomes invisible
    this.onDataFail = function (data) {
      plugin.$element.removeClass(plugin.options.loadingClass);
    }

    // Handle dataload
    this.onDataLoaded = function (data) {
      // Change element classes
      plugin.$element
        .removeClass(plugin.options.loadingClass)
        .addClass(plugin.options.loadedClass);

      // See what periods requested from options, and build UI for each one
      var periodContributors = '';
      var periodTypesSwitcherOptions = '',
        periodTypesSwitcher = '';

      // Iterate over period types
      var periodTypes = plugin.options.periodTypes.split(',');
      $.each( periodTypes, function ( index, value ) {
        // Strip whitespaces and make lower case
        var periodType = value.replace(/\s/g, '').toLowerCase();
        // work only if data has needed periods
        if ( data[periodType] ) {
          var periodTypeSettings = {
            periodType: periodType,
            periodTypeLabel: plugin.options.periodTypesSettings[periodType].label,
            periodTypeClass: plugin.options.periodClass + (( index != 0 ) ? ' ' + plugin.options.hiddenClass : ''),
            periodsLimit: plugin.options.periodTypesSettings[periodType].periodsLimit,
            contributorsLimit: plugin.options.periodTypesSettings[periodType].contributorsLimit,
          }

          periodTypesSwitcherOptions += '<a class="btn" href="#' + periodTypeSettings.periodType + '">' + periodTypeSettings.periodTypeLabel + '</a>';
          periodContributors += plugin.buildContributorsPeriod( data[periodType], periodTypeSettings );
        }
      });

      // Only show period swither if more that one period type
      if ( periodTypes.length > 1 ) {
        periodTypesSwitcher = '<div class="period-type-switcher">' + periodTypesSwitcherOptions + '</div>';
      }

      // Create a jQuery object out of raw html
      var $periodContributors = $( periodTypesSwitcher + periodContributors);
      // Assign events
      $periodContributors.find('select').on('change', plugin.handlePeriodChange );
      // Render the HTML
      plugin.$element.append( $periodContributors );
    }


    // Build contributors for the period type
    this.buildContributorsPeriod = function ( contributorsPeriod, periodTypeSettings ) {
      // Reverse and limit the array most recent comes first
      var periods = contributorsPeriod.periods.reverse().slice( 0, periodTypeSettings.periodsLimit );

      var periodSwitcher = '',
          periodSwitcherOptions = '',
          periodContributors = '';

      $.each(periods, function (index, value) {
        var period = value;
        var periodSettings = {
          periodValue: period.value,
          periodLabel: period.label,
          contributorsLimit: periodTypeSettings.contributorsLimit,
          contributorsListClass: plugin.options.contributorsListClass + ((index != 0) ? ' ' + plugin.options.hiddenClass : ''),
        }
        periodSwitcherOptions += '<option value="' + periodSettings.periodValue + '">' + periodSettings.periodLabel + '</option>';
        periodContributors += plugin.buildContributorsList( contributorsPeriod.contributors[ periodSettings.periodValue ], periodSettings );
      });

      // Build the switcher if more than one period
      if ( periods.length > 1 ) {
        periodSwitcher = '<div class="' + plugin.options.periodSwitcherClass + '"><select data-period-type="' + periodTypeSettings.periodType + '">' + periodSwitcherOptions + '</select></div>';
      }

      return '<div class="'+ periodTypeSettings.periodTypeClass + '" data-period-type="' + periodTypeSettings.periodType + '">' + periodSwitcher + periodContributors + '</div>';
    }

    // Build an HTML list of contributors from data and settings object
    this.buildContributorsList = function ( contributors, settings ) {
      var output = '';
      contributors = contributors.slice( 0, settings.contributorsLimit );
      $.each(contributors, function (index, value) {
        output += plugin.buildContributor( value );
      });
      return '<div class="'+ settings.contributorsListClass + '" data-period="'+ settings.periodValue +'" data-period-type="'+ settings.periodType +'">' + output + '</div>';
    }

    // Builds contributor html string (most performant way of inserting the html)
    this.buildContributor = function ( contributor ) {
        var name = contributor.name;
        var avatar = contributor.avatar;
        var url = contributor.user_link;
        // Stats
        var accepted = contributor.accepted;
        var accepted_url = contributor.accepted_url;
        var created = contributor.created;
        var created_url = contributor.created_url;
        var rejected = contributor.rejected;
        var rejected_url = contributor.rejected_url;

        var stats = '<ul class="contributor-stats"><li class="accepted"><span class="title">Accepted</span> <a href="'+ accepted_url +'">' + accepted + '</a></li><li class="created"><span class="title">Created</span> <a href="'+ created_url +'">'+ created +'</a></li><li class="rejected"><span class="title">Rejected</span> <a href="'+ rejected_url +'">'+ rejected +'</a></li></ul>';

        return '<div class="contributor"><a href="'+ url +'"><div class="avatar"><img src="'+ avatar + '" /></div><h5 class="name">' + name + '</h5></a>'+ stats +'</div>';
    };

    // * Events *
    // Handles the change in the period switcher
    this.handlePeriodChange = function ( event ) {
      var value = event.target.value;
      var periodType = event.target.getAttribute('data-period-type');
      // Hide other lists of the same type, show the requested list
      plugin.$element.
        find( '.' + plugin.options.periodClass + '[data-period-type="' + periodType + '"] .' + plugin.options.contributorsListClass )
        .addClass( plugin.options.hiddenClass ).
        filter('[data-period="' + value + '"]')
        .removeClass( plugin.options.hiddenClass );
    }

    // Handle the change in period type
    this.handlePeriodTypeChange = function ( event ) {
      var value = event.target.value;
      plugin.$element.
        find( '.' + plugin.options.periodClass)
        .addClass( plugin.options.hiddenClass ).
        filter('[data-period-type="' + value + '"]')
        .removeClass( plugin.options.hiddenClass );
    }

    // Begin plugin init
    this.init();
  }


  // Initialize the plugin
  Plugin.prototype.init = function () {
    // Begin loading the data
    this.$element.addClass(this.options.loadingClass);
    $.getJSON( this.options.dataUrl, this.onDataLoaded )
      .fail( this.onDataFail );
  };

  // Basic jQuery plugin wrapper
  // Prevents multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new Plugin( this, options ));
        }
      });
   }


})(jQuery, window, document);// end contributors
