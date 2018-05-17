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
    periodTypes: 'monthly,quarterly,yearly',
    periodTypesSettings: {
      monthly: {
        value: 'monthly', // how the type is called in data file
        label: 'Monthly',
        periodsLimit: 12,
        contributorsLimit: 20
      },
      quarterly: {
        value: 'quoter',
        label: 'Quarterly',
        periodsLimit: 12,
        contributorsLimit: 20
      },
      yearly: {
        value: 'years',
        label: 'Yearly',
        periodsLimit: 5,
        contributorsLimit: 20
      }
    },
    periodsLimit: null, // pass a number is you want to overwrite the limits
    contributorsLimit: null,
    // Class names (recommended to not modify)
    periodSwitcherClass: 'periods',
    periodTypeSwitcherClass: 'period-type-switcher',
    loadingClass: 'loading',
    activeClass: 'active',
    loadedClass: 'loaded',
    hiddenClass: 'hide',
    periodClass: 'contributors-period',
    contributorsListClass: 'contributors-list',
    contributorClass: 'contributor',
    contributorNameClass: 'contributor-name',
    contributorAvatarClass: 'contributor-avatar',
    contributorStatsClass: 'contributor-stats',
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
    this.options = $.extend(true, {}, defaults, options, this.metadata);

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

      var periodContributors = '',
          periodTypesSwitcherOptions = '',
          periodTypesSwitcher = '',
          periodSwitchers = '';

      // Iterate over period types
      var periodTypes = plugin.options.periodTypes.replace(/\s/g, '').toLowerCase().split(',');
      $.each( periodTypes, function ( index, value ) {
        // Strip whitespaces and make lower case
        var periodType = (plugin.options.periodTypesSettings[value]) ? plugin.options.periodTypesSettings[value].value : null;
        // work only if data has needed periods
        if ( data[periodType] && periodType ) {
          var periodTypeSettings = {
            value: periodType,
            label: plugin.options.periodTypesSettings[value].label,
            class: plugin.options.periodClass + (( index != 0 ) ? ' ' + plugin.options.hiddenClass : ''),
            periodsLimit: plugin.options.periodTypesSettings[value].periodsLimit,
            contributorsLimit: ( plugin.options.contributorsLimit ) ? plugin.options.contributorsLimit : plugin.options.periodTypesSettings[value].contributorsLimit,
          }

          periodTypesSwitcherOptions += '<button class="' + ((index == 0) ? plugin.options.activeClass : '') + '" data-period-type="' + periodTypeSettings.value + '">' + periodTypeSettings.label + '</button>';

          var periodTypeObject = plugin.buildContributorsPeriod( data[periodTypeSettings.value], periodTypeSettings );
          periodSwitchers += periodTypeObject.switcher;
          periodContributors += periodTypeObject.contributors;
        }
      });

      // Only show period swither if more that one period type
      if ( periodTypes.length > 1 ) {
        periodTypesSwitcher = '<div class="' + plugin.options.periodTypeSwitcherClass + '">' + periodTypesSwitcherOptions + '</div>';
      }

      var switchers = '<div class="'+ plugin.options.periodSwitcherClass + '">' + periodTypesSwitcher + periodSwitchers + '</div>';

      // Create a jQuery object out of raw html
      var $periodContributors = $( switchers + periodContributors);

      // Assign events
      $periodContributors.find('select')
        .on('change', plugin.handlePeriodChange );

      $periodContributors.find('.' + plugin.options.periodTypeSwitcherClass + ' button' )
        .on('click', plugin.handlePeriodTypeChange);

      // Render the HTML
      plugin.$element.append( $periodContributors );
      plugin.loadImages( plugin.$element.find('img:visible') );
    }

    // Convert data-src to src
    this.loadImages = function ( images ) {
      images.each( function () {
        $(this).attr( 'src', $(this).data('src') );
      })
    }

    // Build contributors for the period type
    this.buildContributorsPeriod = function ( data, periodTypeSettings ) {
      // Reverse and limit the array most recent comes first
      var periods = data.periods.reverse().slice( 0, periodTypeSettings.periodsLimit ),
          periodSwitcher = '',
          periodSwitcherOptions = '',
          periodContributors = '';

      $.each(periods, function (index, value) {
        var period = value,
            periodSettings = {
              periodValue: period.value,
              periodLabel: period.label,
              contributorsLimit: periodTypeSettings.contributorsLimit,
              contributorsListClass: plugin.options.contributorsListClass + ((index != 0) ? ' ' + plugin.options.hiddenClass : ''),
        }
        periodSwitcherOptions += '<option value="' + periodSettings.periodValue + '">' + periodSettings.periodLabel + '</option>';
        periodContributors += plugin.buildContributorsList( data.contributors[ periodSettings.periodValue ], periodSettings );
      });

      // Build the switcher if more than one period
      if ( periods.length > 1 ) {
        periodSwitcher = '<select class="' + periodTypeSettings.class + '" data-period-type="' + periodTypeSettings.value + '">' + periodSwitcherOptions + '</select>';
      }

      periodContributors = '<div class="'+ periodTypeSettings.class + '" data-period-type="' + periodTypeSettings.value + '">' + periodContributors + '</div>';

      return {
        switcher: periodSwitcher,
        contributors: periodContributors,
      }

    }

    // Build an HTML list of contributors from data and settings object
    this.buildContributorsList = function ( contributors, settings ) {
      var output = '';
      contributors = contributors.slice( 0, settings.contributorsLimit );
      $.each(contributors, function (index, value) {
        output += plugin.buildContributor( value );
      });
      return '<div class="'+ settings.contributorsListClass + '" data-period="'+ settings.periodValue +'">' + output + '</div>';
    }

    // Builds contributor html string
    this.buildContributor = function ( contributor ) {
        var name = contributor.name,
            avatar = contributor.avatar,
            url = contributor.user_link;

        // Do not show deleted users
        if (url == 'https://github.com/ghost') {
          return '';
        }

        // Stats
        var accepted = contributor.accepted,
            accepted_url = contributor.accepted_url,
            created = contributor.created,
            created_url = contributor.created_url,
            rejected = contributor.rejected,
            rejected_url = contributor.rejected_url;

        var stats = '<ul class="' + plugin.options.contributorStatsClass + '"><li><span>Accepted</span> <a href="'+ accepted_url +'">' + accepted + '</a></li><li><span>Created</span> <a href="'+ created_url +'">'+ created +'</a></li><li><span>Rejected</span> <a href="'+ rejected_url +'">'+ rejected +'</a></li></ul>';

        return '<div class="' + plugin.options.contributorClass + '"><a href="'+ url +'"><div class="' + plugin.options.contributorAvatarClass + '"><img data-src="'+ avatar + '" alt="' + name + '" /></div><h5 class="' + plugin.options.contributorNameClass + '">' + name + '</h5></a>'+ stats +'</div>';
    }

    // * Events *
    // Handles the change in the period switcher
    this.handlePeriodChange = function ( event ) {
      var value = event.target.value,
          periodType = event.target.getAttribute('data-period-type'),
          $period = plugin.$element.find( '.' + plugin.options.periodClass + '[data-period-type="' + periodType + '"] .' + plugin.options.contributorsListClass );

      // Hide other lists of the same type, show the requested list
      $period.addClass( plugin.options.hiddenClass ).
        filter('[data-period="' + value + '"]')
        .removeClass( plugin.options.hiddenClass );

      plugin.loadImages( $period.find('img:visible') );
    }

    // Handle the change in period type
    this.handlePeriodTypeChange = function ( event ) {
      var value = event.target.getAttribute('data-period-type');

      $(this).addClass( plugin.options.activeClass ).siblings()
        .removeClass( plugin.options.activeClass );

      plugin.$element.
        find( '.' + plugin.options.periodClass )
        .addClass( plugin.options.hiddenClass ).
        filter( '[data-period-type="' + value + '"]' )
        .removeClass( plugin.options.hiddenClass );

      plugin.loadImages( plugin.$element.find('img:visible') );
    }

    // Begin plugin init
    this.init();
  }


  // Initialize the plugin
  Plugin.prototype.init = function () {
    // Begin loading the data
    this.$element.addClass( this.options.loadingClass );
    $.getJSON( this.options.dataUrl, this.onDataLoaded )
      .fail( this.onDataFail );
  }

  // Basic jQuery plugin wrapper
  // Prevents multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if ( !$.data(this, 'plugin_' + pluginName) ) {
        $.data(this, 'plugin_' + pluginName,
          new Plugin( this, options ));
        }
    });
  }


})(jQuery, window, document);// end contributors
