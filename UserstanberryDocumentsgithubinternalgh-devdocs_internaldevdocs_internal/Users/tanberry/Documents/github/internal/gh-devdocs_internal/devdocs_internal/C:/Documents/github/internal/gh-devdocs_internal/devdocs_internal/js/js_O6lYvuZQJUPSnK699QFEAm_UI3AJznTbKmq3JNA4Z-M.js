/**
* Site Switcher
*/
(function ($) {
  Drupal.behaviors.sidemenu = {
    attach: function (context, settings) {
      $(function() {
        $("#nav-main .menu-trigger").click(function() {
          $(".menu-icon").addClass("invisible");
          $(".menu-label").addClass("invisible");
        });
      });

      var jPM = $.jPanelMenu({
        menu: '#sidemenu',
        trigger: '.menu-trigger',
        direction: 'left',
        closeOnContentClick: true,
        openEasing: 'ease',
        closeEasing: 'ease',
        animate: true,
        duration: 300,
        closeDuration: 300,
        before: function(){$('.jPanelMenu-panel').css('margin-left', '0');},
        beforeOpen: function(){$('.jPanelMenu-panel').css('margin-left', '0').css('left', '260px');$('.nav-main').css('left', '260px');$('#footer-wrap').css('left', '260px');$('.ebay-inc').css('right', '260px');},
        beforeClose: function(){$('.jPanelMenu-panel').css('margin-left', '0').css('left', '0px');;$('.nav-main').css('left', '0px');$('#footer-wrap').css('left', '0px');$('.ebay-inc').css('right', '0');},
        afterOpen: function(){$('.jPanelMenu-panel').css('margin-left', '0').css('left', '260px');;$('.nav-main').css('left', '260px');$('#footer-wrap').css('left', '260px');$('.ebay-inc').css('right', '260px');},
        afterClose: function(){$('.menu-icon').removeClass("invisible");},
        keyboardShortcuts: false,
      });

      jPM.on();

      // Fade Animation
      $('#jPanelMenu-menu .menu li').click(function() {
        $('#jPanelMenu-menu .menu li a').css('opacity', '0.2');
        $('#jPanelMenu-menu .menu li span').css('opacity', '0.2');
        $(this).contents().css('opacity', '1');
        $(this).siblings().css('border-top', '1px solid #31302B');
        $(this).next().css('border-top' , '1px solid #676056')
        var destination = $("a", this).attr('href');
        setTimeout(function() { jPM.close(true); }, 500);
        setTimeout(function() { window.location.href = destination; }, 700);
      });
      $("#jPanelMenu-menu .menu li a").click(function(e) {
        e.preventDefault();
        var destination = $(this).attr('href');
        setTimeout(function() { window.location.href = destination; }, 700);
      });
    }
  };
})(jQuery);

/**
* Menu Icon Animation
*/
(function ($) {
  Drupal.behaviors.menu_trigger = {
    attach: function (context, settings) {
      $(".menu-label").delay(1800).animate({"left": "0px"}, 300).delay(1300).animate({"left": "-100px"}, 300);
    }
  };
})(jQuery);

/**
* Change color for links in global footer for IE8
*/
(function ($) {
  Drupal.behaviors.mageiefixer = {
    attach: function (context, settings) {
      if (jQuery('#magento-sites').length){
        if (jQuery.browser.msie && jQuery.browser.version == "8.0") {
          jQuery("#magento-sites li:nth-child(1) a").css('color','#ef672f');
          jQuery("#magento-sites li:nth-child(2) a").css('color','#25acc3');
          jQuery("#magento-sites li:nth-child(3) a").css('color','#72a0c7');
          jQuery("#magento-sites li:nth-child(4) a").css('color','#cf8854');
          jQuery("#magento-sites li:nth-child(5) a").css('color','#a1bf58');
          jQuery("#magento-sites li:nth-child(6) a").css('color','#5fbdba');
          jQuery("#magento-sites li:nth-child(7) a").css('color','#edb03d');
          jQuery("#magento-sites li:nth-child(8) a").css('color','#57c1e6');
        }
      }
    }
  }
})(jQuery);

/**
* Newsletter
*/
function validateForm() {
  var x = document.forms["mktForm_1006"]["Email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    jQuery('.email-invalid').show();
    return false;
  }
  else {
    jQuery.cookie('mage_drupal_newsletter', 10);
    jQuery('#newsletter').hide();
    jQuery('.email-invalid').hide();
    jQuery('.email-ty').show();
    return true;
  }
}

(function ($) {
  Drupal.behaviors.Newsletter = {
    attach: function (context, settings) {
      if ($('#newsletter').length > 0) {
        if ($.cookie('mage_drupal_newsletter')) {
          $('#newsletter').hide();
          $('.email-ty').hide();
        }
      }
    }
  };
})(jQuery);


// Careers teaser in error console.
(function ($) {
  $(window).load(function() {
    try {
      // Try to only show on stage and production environments.
      if (/mage/.exec(location.hostname)) {
        console.log('          ===\n        =======\n    ====       ====\n  ====           ====\n====               ====\n===     ==   ==     ===\n===    ===   ===    ===\n===    ===   ===    ===\n===    ===   ===    ===\n===    ===   ===    ===   Greetings from\n ==    ===   ===    ==     _____                 _\n       ===   ===          |     |___ ___ ___ ___| |_ ___ \n        ==   ==           | | | | .\'| . | -_|   |  _| . |\n          ===             |_|_|_|__,|_  |___|_|_|_| |___|\n                                    |___|\nIf you\'re looking at this, maybe you should be working for\nus instead! Visit http://www.ebaycareers.com/ today.\n');
      }
    } catch(e) {}
  });
})(jQuery);

(function ($) {
  Drupal.behaviors.respdesign = {
    attach : function() {
        //FAQ section
        $('.view-training .views-field-field-question, .view-certification .views-field-field-question-cert').on('click',function() {
          if(!$(this).hasClass('open')) {
            var parentBlock = $('.view-training, .view-certification'),
                headers = $('.view-training .views-field-field-question, .view-certification .views-field-field-question-cert');
            $(headers).removeClass('open');
            $(parentBlock).find('.views-field-field-answer, .views-field-field-answer-cert').slideUp();
            $(this).addClass('open');
            $(this).parent().find('.views-field-field-answer, .views-field-field-answer-cert').slideDown();
          }
        });
      }
  };
})(jQuery);
;
if (window.jQuery && jQuery.validator) {
    jQuery("#Emailemail_msg").hide().css('opacity', 1);
    jQuery('#mktForm_1006').validate({
        rules: {
            Email: {
                required: true,
                email: true
            },
        },
        errorContainer: jQuery("#Emailemail_msg"),
        errorPlacement: function(error, element) {},});
} else if (window.fValidator) {
    NewsletterValidator = fValidator.extend({
        _msgInject: function(owner, options) {
            var id = owner.getProperty("id") + options.type + "_msg"
            if($(id)) {
                var msgContainer = $(id);
            } else {
                var msgContainer = new Element(this.options.msgContainerTag, {"id": id, "class": this.options.msgClass})
                    .setHTML(options.msg)
                    .setStyle("opacity", 0)
                    .injectAfter(owner);
            }
            

            msgContainer.setStyle('display', 'block').effect("opacity", {
                    duration: 500,
                    transition: Fx.Transitions.linear
                }).start(0, 1);
            owner.cbErr++;
            this._chkStatus(owner, options);
        },

        _msgRemove: function(owner, options, isReset) {
            isReset = isReset || false;
            if($(owner.getProperty("id") + options.type +"_msg")) {
                var el = $(owner.getProperty("id") + options.type +"_msg");
                el.effect("opacity", {
                    duration: 500,
                    transition: Fx.Transitions.linear,
                    onComplete: function() {
                        el.setStyle('display', 'none');
                    }
                }).start(1, 0);

                if(!isReset) {
                    owner.cbErr--;
                    this._chkStatus(owner, options);
                }
            }
        },

    });

    var mktValidator = new NewsletterValidator('mktForm_1006', {
        email: {
            type: "email", 
            re: /^[a-z0-9._%-+]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, 
            msg: "Please enter a valid email address. For example johndoe@domain.com."
        }
    });
};
/**
  *
  * jPanelMenu 1.3.0 (http://jpanelmenu.com)
  * By Anthony Colangelo (http://acolangelo.com)
  *
* */

(function($){
  $.jPanelMenu = function(options) {
    if ( typeof(options) == "undefined" || options == null ) { options = {}; };

    var jP = {
      options: $.extend({
        menu: '#menu',
        trigger: '.menu-trigger',
        excludedPanelContent: 'style, script',

        direction: 'left',
        openPosition: '260px',
        animated: true,
        closeOnContentClick: true,

        keyboardShortcuts: [
          {
            code: 27,
            open: false,
            close: true 
          },
          {
            code: 37,
            open: false,
            close: true 
          },
          {
            code: 39,
            open: true,
            close: true 
          },
          {
            code: 77,
            open: true,
            close: true 
          }
        ],

        duration: 150,
        openDuration: options.duration || 150,
        closeDuration: options.duration || 150,

        easing: 'ease-in-out',
        openEasing: options.easing || 'ease-in-out',
        closeEasing: options.easing || 'ease-in-out',

        before: function(){ },
        beforeOpen: function(){ },
        beforeClose: function(){ },

        after: function(){ },
        afterOpen: function(){ },
        afterClose: function(){ },

        beforeOn: function(){ },
        afterOn: function(){ },

        beforeOff: function(){ },
        afterOff: function(){ }
      },options),

      settings: {
        transitionsSupported: 'WebkitTransition' in document.body.style ||
                    'MozTransition' in document.body.style ||
                    'msTransition' in document.body.style ||
                    'OTransition' in document.body.style ||
                    'Transition' in document.body.style
        ,
        shiftFixedChildren: false,
        panelPosition: 'relative',
        positionUnits: 'px'
      },

      menu: '#jPanelMenu-menu',

      panel: '.jPanelMenu-panel',

      fixedChildren: [],

      timeouts: {},

      clearTimeouts: function() {
        clearTimeout(jP.timeouts.open);
        clearTimeout(jP.timeouts.afterOpen);
        clearTimeout(jP.timeouts.afterClose);
      },

      setPositionUnits: function() {
        var foundUnit = false,
          allowedUnits = ['%','px','em']
        ;

        for ( unitID in allowedUnits ) {
          var unit = allowedUnits[unitID];
          if ( jP.options.openPosition.toString().substr(-unit.length) == unit )
          {
            foundUnit = true;
            jP.settings.positionUnits = unit;
          }
        }

        if ( !foundUnit ) { jP.options.openPosition = parseInt(jP.options.openPosition) + jP.settings.positionUnits }
      },

      checkFixedChildren: function() {
        jP.disableTransitions();

        var defaultPanelStyle = { position: $(jP.panel).css('position') };

        defaultPanelStyle[jP.options.direction] = ($(jP.panel).css(jP.options.direction) == 'auto')?0:$(jP.panel).css(jP.options.direction);

        $(jP.panel).find('> *').each(function(){
          if ( $(this).css('position') == 'fixed' && $(this).css(jP.options.direction) == 'auto' ) { jP.fixedChildren.push(this); }
        });
        
        if ( jP.fixedChildren.length > 0 )
        {
          var newPanelStyle = { position: 'relative' };
          newPanelStyle[jP.options.direction] = '1px';
          jP.setPanelStyle(newPanelStyle);

          if ( parseInt($(jP.fixedChildren[0]).offset().left) == 0 ) { jP.settings.shiftFixedChildren = true; }
        }

        jP.setPanelStyle(defaultPanelStyle);
      },

      setjPanelMenuStyles: function() {
        var bgColor = '#fff';
        var htmlBG = $('html').css('background-color');
        var bodyBG = $('body').css('background-color');

        if ( bodyBG != 'transparent' && bodyBG != "rgba(0, 0, 0, 0)") { bgColor = bodyBG; }
        else if ( htmlBG != 'transparent' && htmlBG != "rgba(0, 0, 0, 0)") { bgColor = htmlBG; }
        else { bgColor = '#fff'; }

        if ( $('#jPanelMenu-style-master').length == 0 )
        {
          $('body').append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+jP.options.direction+':0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;'+jP.options.direction+':0;top:0;z-index:2;width:100%;min-height:100%;background:' + bgColor + '}</style>');
        }
      },

      setMenuState: function(open) {
        var position = (open)?'open':'closed';
        $('body').attr('data-menu-position', position);
      },

      getMenuState: function() {
        return $('body').attr('data-menu-position');
      },

      menuIsOpen: function() {
        if ( jP.getMenuState() == 'open' ) return true;
        else return false;
      },

      setMenuStyle: function(styles) {
        $(jP.menu).css(styles);
      },

      setPanelStyle: function(styles) {
        $(jP.panel).css(styles);
      },

      showMenu: function() {
        jP.setMenuStyle({
          display: 'block'
        });
        jP.setMenuStyle({
          'z-index': '1'
        });
      },

      hideMenu: function() {
        jP.setMenuStyle({
          'z-index': '-1'
        });
        jP.setMenuStyle({
          display: 'none'
        });
      },

      enableTransitions: function(duration, easing) {
        var formattedDuration = duration/1000;
        var formattedEasing = jP.getCSSEasingFunction(easing);
        jP.disableTransitions();
        $('body').append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all ' + formattedDuration + 's ' + formattedEasing + '; -moz-transition: all ' + formattedDuration + 's ' + formattedEasing + '; -o-transition: all ' + formattedDuration + 's ' + formattedEasing + '; transition: all ' + formattedDuration + 's ' + formattedEasing + ';}</style>');
      },

      disableTransitions: function() {
        $('#jPanelMenu-style-transitions').remove();
      },

      enableFixedTransitions: function(selector, id, duration, easing) {
        var formattedDuration = duration/1000;
        var formattedEasing = jP.getCSSEasingFunction(easing);
        jP.disableFixedTransitions(id);
        $('body').append('<style id="jPanelMenu-style-fixed-' + id + '">' + selector + '{-webkit-transition: all ' + formattedDuration + 's ' + formattedEasing + '; -moz-transition: all ' + formattedDuration + 's ' + formattedEasing + '; -o-transition: all ' + formattedDuration + 's ' + formattedEasing + '; transition: all ' + formattedDuration + 's ' + formattedEasing + ';}</style>');
      },

      disableFixedTransitions: function(id) {
        $('#jPanelMenu-style-fixed-' + id).remove();
      },

      getCSSEasingFunction: function(name) {
        switch ( name )
        {
          case 'linear':
            return name;
            break;

          case 'ease':
            return name;
            break;

          case 'ease-in':
            return name;
            break;

          case 'ease-out':
            return name;
            break;

          case 'ease-in-out':
            return name;
            break;

          default:
            return 'ease-in-out';
            break;
        }
      },

      getJSEasingFunction: function(name) {
        switch ( name )
        {
          case 'linear':
            return name;
            break;

          default:
            return 'swing';
            break;
        }
      },

      openMenu: function(animated) {
        if ( typeof(animated) == "undefined" || animated == null ) { animated = jP.options.animated };
        
        jP.clearTimeouts();

        jP.options.before();
        jP.options.beforeOpen();

        jP.setMenuState(true);

        jP.setPanelStyle({ position: 'relative' });
        
        jP.showMenu();

        var animationChecks = {
          none: (!animated)?true:false,
          transitions: (animated && jP.settings.transitionsSupported)?true:false
        };

        if ( animationChecks.transitions || animationChecks.none ) {
          if ( animationChecks.none ) jP.disableTransitions();
          if ( animationChecks.transitions ) jP.enableTransitions(jP.options.openDuration, jP.options.openEasing);

          var newPanelStyle = {};
          newPanelStyle[jP.options.direction] = jP.options.openPosition;
          jP.setPanelStyle(newPanelStyle);

          if ( jP.settings.shiftFixedChildren )
          {
            $(jP.fixedChildren).each(function(){
              var id = $(this).prop("tagName").toLowerCase() + ' ' + $(this).attr('class'),
                selector = id.replace(' ','.'),
                id = id.replace(' ','-')
              ;

              if ( animationChecks.none ) jP.disableFixedTransitions(id);
              if ( animationChecks.transitions ) jP.enableFixedTransitions(selector, id, jP.options.openDuration, jP.options.openEasing);

              var newChildrenStyle = {};
              newChildrenStyle[jP.options.direction] = jP.options.openPosition;
              $(this).css(newChildrenStyle);
            });
          }

          jP.timeouts.afterOpen = setTimeout(function(){
            jP.disableTransitions();
            if ( jP.settings.shiftFixedChildren )
            {
              $(jP.fixedChildren).each(function(){
                var id = $(this).prop("tagName").toLowerCase() + ' ' + $(this).attr('class'),
                  id = id.replace(' ','-')
                ;

                jP.disableFixedTransitions(id);
              });
            }

            jP.options.after();
            jP.options.afterOpen();
            jP.initiateContentClickListeners();
          }, jP.options.openDuration);
        }
        else {
          var formattedEasing = jP.getJSEasingFunction(jP.options.openEasing);

          var animationOptions = {};
          animationOptions[jP.options.direction] = jP.options.openPosition;
          $(jP.panel).stop().animate(animationOptions, jP.options.openDuration, formattedEasing, function(){
            jP.options.after();
            jP.options.afterOpen();
            jP.initiateContentClickListeners();
          });

          if ( jP.settings.shiftFixedChildren )
          {
            $(jP.fixedChildren).each(function(){
              var childrenAnimationOptions = {};
              childrenAnimationOptions[jP.options.direction] = jP.options.openPosition;
              $(this).stop().animate(childrenAnimationOptions, jP.options.openDuration, formattedEasing);
            });
          }
        }
      },

      closeMenu: function(animated) {
        if ( typeof(animated) == "undefined" || animated == null ) { animated = jP.options.animated };

        jP.clearTimeouts();

        jP.options.before();
        jP.options.beforeClose();

        jP.setMenuState(false);

        var animationChecks = {
          none: (!animated)?true:false,
          transitions: (animated && jP.settings.transitionsSupported)?true:false
        };

        if ( animationChecks.transitions || animationChecks.none ) {
          if ( animationChecks.none ) jP.disableTransitions();
          if ( animationChecks.transitions ) jP.enableTransitions(jP.options.closeDuration, jP.options.closeEasing);

          var newPanelStyle = {};
          newPanelStyle[jP.options.direction] = 0 + jP.settings.positionUnits;
          jP.setPanelStyle(newPanelStyle);

          if ( jP.settings.shiftFixedChildren )
          {
            $(jP.fixedChildren).each(function(){
              var id = $(this).prop("tagName").toLowerCase() + ' ' + $(this).attr('class'),
                selector = id.replace(' ','.'),
                id = id.replace(' ','-')
              ;

              if ( animationChecks.none ) jP.disableFixedTransitions(id);
              if ( animationChecks.transitions ) jP.enableFixedTransitions(selector, id, jP.options.closeDuration, jP.options.closeEasing);

              var newChildrenStyle = {};
              newChildrenStyle[jP.options.direction] = 0 + jP.settings.positionUnits;
              $(this).css(newChildrenStyle);
            });
          }

          jP.timeouts.afterClose = setTimeout(function(){
            jP.setPanelStyle({ position: jP.settings.panelPosition });

            jP.disableTransitions();
            if ( jP.settings.shiftFixedChildren )
            {
              $(jP.fixedChildren).each(function(){
                var id = $(this).prop("tagName").toLowerCase() + ' ' + $(this).attr('class'),
                  id = id.replace(' ','-')
                ;

                jP.disableFixedTransitions(id);
              });
            }

            jP.hideMenu();
            jP.options.after();
            jP.options.afterClose();
            jP.destroyContentClickListeners();
          }, jP.options.closeDuration);
        }
        else {
          var formattedEasing = jP.getJSEasingFunction(jP.options.closeEasing);

          var animationOptions = {};
          animationOptions[jP.options.direction] = 0 + jP.settings.positionUnits;
          $(jP.panel).stop().animate(animationOptions, jP.options.closeDuration, formattedEasing, function(){
            jP.setPanelStyle({ position: jP.settings.panelPosition });

            jP.hideMenu();
            jP.options.after();
            jP.options.afterClose();
            jP.destroyContentClickListeners();
          });

          if ( jP.settings.shiftFixedChildren )
          {
            $(jP.fixedChildren).each(function(){
              var childrenAnimationOptions = {};
              childrenAnimationOptions[jP.options.direction] = 0 + jP.settings.positionUnits;
              $(this).stop().animate(childrenAnimationOptions, jP.options.closeDuration, formattedEasing);
            });
          }
        }
      },

      triggerMenu: function(animated) {
        if ( jP.menuIsOpen() ) jP.closeMenu(animated);
        else jP.openMenu(animated);
      },

      initiateClickListeners: function() {
        $(document).on('click',jP.options.trigger,function(){ jP.triggerMenu(jP.options.animated); return false; });
      },

      destroyClickListeners: function() {
        $(document).off('click',jP.options.trigger,null);
      },

      initiateContentClickListeners: function() {
        if ( !jP.options.closeOnContentClick ) return false;

        $(document).on('click',jP.panel,function(e){
          if ( jP.menuIsOpen() ) jP.closeMenu(jP.options.animated);
        });
        
        $(document).on('touchend',jP.panel,function(e){
          if ( jP.menuIsOpen() ) jP.closeMenu(jP.options.animated);
        });
      },

      destroyContentClickListeners: function() {
        if ( !jP.options.closeOnContentClick ) return false;

        $(document).off('click',jP.panel,null);
        $(document).off('touchend',jP.panel,null);
      },

      initiateKeyboardListeners: function() {
        var preventKeyListeners = ['input', 'textarea'];
        $(document).on('keydown',function(e){
          var target = $(e.target),
          prevent = false;
          $.each(preventKeyListeners, function(){
            if (target.is(this.toString())) { prevent = true; }
          });
          if ( prevent ) { return true; }

          for ( mapping in jP.options.keyboardShortcuts ) {
            if ( e.which == jP.options.keyboardShortcuts[mapping].code )
            {
              var key = jP.options.keyboardShortcuts[mapping];

              if ( key.open && key.close ) { jP.triggerMenu(jP.options.animated); }
              else if ( (key.open && !key.close) && !jP.menuIsOpen() ) { jP.openMenu(jP.options.animated); }
              else if ( (!key.open && key.close) && jP.menuIsOpen() ) { jP.closeMenu(jP.options.animated); }

              return false;
            }
          }
        });
      },

      destroyKeyboardListeners: function() {
        $(document).off('keydown',null);
      },

      setupMarkup: function() {
        $('html').addClass('jPanelMenu');
        $('#gl-wrapper > *').not(jP.menu + ', ' + jP.options.excludedPanelContent).wrapAll('<div class="' + jP.panel.replace('.','') + '"/>');
        $(jP.options.menu).clone().attr('id', jP.menu.replace('#','')).insertAfter('#gl-wrapper > ' + jP.panel);
      },

      resetMarkup: function() {
        $('html').removeClass('jPanelMenu');
        $('#gl-wrapper > ' + jP.panel + ' > *').unwrap();
        $(jP.menu).remove();
      },

      init: function() {
        jP.options.beforeOn();

        jP.initiateClickListeners();
        if ( Object.prototype.toString.call(jP.options.keyboardShortcuts) === '[object Array]' ) { jP.initiateKeyboardListeners(); }

        jP.setjPanelMenuStyles();
        jP.setMenuState(false);
        jP.setupMarkup();

        jP.setMenuStyle({ width: jP.options.openPosition });

        jP.checkFixedChildren();
        jP.setPositionUnits();

        jP.closeMenu(false);

        jP.options.afterOn();
      },

      destroy: function() {
        jP.options.beforeOff();

        jP.closeMenu();
        jP.destroyClickListeners();
        if ( Object.prototype.toString.call(jP.options.keyboardShortcuts) === '[object Array]' ) { jP.destroyKeyboardListeners(); }

        jP.resetMarkup();
        var childrenStyles = {};
        childrenStyles[jP.options.direction] = 'auto';
        $(jP.fixedChildren).each(function(){ $(this).css(childrenStyles); });
        jP.fixedChildren = [];

        jP.options.afterOff();
      }
    };

    return {
      on: jP.init,
      off: jP.destroy,
      trigger: jP.triggerMenu,
      open: jP.openMenu,
      close: jP.closeMenu,
      isOpen: jP.menuIsOpen,
      menu: jP.menu,
      getMenu: function() { return $(jP.menu); },
      panel: jP.panel,
      getPanel: function() { return $(jP.panel); }
    };
  };
})(jQuery);;
/**
 * @file
 * Integration file for fancyBox module.
 */

(function($) {
  Drupal.behaviors.fancyBox = {
    attach: function(context, settings) {
      var selectors = ['.fancybox'];

      if (typeof settings.fancybox === 'undefined') {
        settings.fancybox = {};
      }

      if (typeof settings.fancybox.options === 'undefined') {
        settings.fancybox.options = {};
      }

      if (typeof settings.fancybox.callbacks !== 'undefined') {
        $.each(settings.fancybox.callbacks, function(i, cal) {
          settings.fancybox.options[i] = window[cal];
        });
      }

      if (typeof settings.fancybox.helpers !== 'undefined') {
        settings.fancybox.options.helpers = settings.fancybox.helpers;
        delete settings.fancybox.helpers;
      }

      if (typeof settings.fancybox.selectors !== 'undefined') {
        selectors = selectors.concat(settings.fancybox.selectors);
      }

      // Not needed because behaviors are reattached.
      settings.fancybox.options.live = false;

      $(selectors.join(',')).fancybox(settings.fancybox.options);
    }
  };
})(jQuery);
;
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);;
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function ($) {
	"use strict";

	//Shortcut for fancyBox object
	var F = $.fancybox,
		format = function( url, rez, params ) {
			params = params || '';

			if ( $.type( params ) === "object" ) {
				params = $.param(params, true);
			}

			$.each(rez, function(key, value) {
				url = url.replace( '$' + key, value || '' );
			});

			if (params.length) {
				url += ( url.indexOf('?') > 0 ? '&' : '?' ) + params;
			}

			return url;
		};

	//Add helper object
	F.helpers.media = {
		defaults : {
			youtube : {
				matcher : /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
				params  : {
					autoplay    : 1,
					autohide    : 1,
					fs          : 1,
					rel         : 0,
					hd          : 1,
					wmode       : 'opaque',
					enablejsapi : 1
				},
				type : 'iframe',
				url  : '//www.youtube.com/embed/$3'
			},
			vimeo : {
				matcher : /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
				params  : {
					autoplay      : 1,
					hd            : 1,
					show_title    : 1,
					show_byline   : 1,
					show_portrait : 0,
					fullscreen    : 1
				},
				type : 'iframe',
				url  : '//player.vimeo.com/video/$1'
			},
			metacafe : {
				matcher : /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
				params  : {
					autoPlay : 'yes'
				},
				type : 'swf',
				url  : function( rez, params, obj ) {
					obj.swf.flashVars = 'playerVars=' + $.param( params, true );

					return '//www.metacafe.com/fplayer/' + rez[1] + '/.swf';
				}
			},
			dailymotion : {
				matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
				params  : {
					additionalInfos : 0,
					autoStart : 1
				},
				type : 'swf',
				url  : '//www.dailymotion.com/swf/video/$1'
			},
			twitvid : {
				matcher : /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
				params  : {
					autoplay : 0
				},
				type : 'iframe',
				url  : '//www.twitvid.com/embed.php?guid=$1'
			},
			twitpic : {
				matcher : /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
				type : 'image',
				url  : '//twitpic.com/show/full/$1/'
			},
			instagram : {
				matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
				type : 'image',
				url  : '//$1/p/$2/media/?size=l'
			},
			google_maps : {
				matcher : /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
				type : 'iframe',
				url  : function( rez ) {
					return '//maps.google.' + rez[1] + '/' + rez[3] + '' + rez[4] + '&output=' + (rez[4].indexOf('layer=c') > 0 ? 'svembed' : 'embed');
				}
			}
		},

		beforeLoad : function(opts, obj) {
			var url   = obj.href || '',
				type  = false,
				what,
				item,
				rez,
				params;

			for (what in opts) {
				if (opts.hasOwnProperty(what)) {
					item = opts[ what ];
					rez  = url.match( item.matcher );

					if (rez) {
						type   = item.type;
						params = $.extend(true, {}, item.params, obj[ what ] || ($.isPlainObject(opts[ what ]) ? opts[ what ].params : null));

						url = $.type( item.url ) === "function" ? item.url.call( this, rez, params, obj ) : format( item.url, rez, params );

						break;
					}
				}
			}

			if (type) {
				obj.href = url;
				obj.type = type;

				obj.autoHeight = false;
			}
		}
	};

}(jQuery));;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
 /*
 * jQuery UI Selectmenu version 1.3.0
 *
 * Copyright (c) 2009-2010 filament group, http://filamentgroup.com
 * Copyright (c) 2010-2012 Felix Nagel, http://www.felixnagel.com
 * Licensed under the MIT (MIT-LICENSE.txt)
 *
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */

(function($) {

$.widget("ui.selectmenu", {
	options: {
		appendTo: "body",
		typeAhead: 1000,
		style: 'dropdown',
		positionOptions: {
			my: "left top",
			at: "left bottom",
			offset: null
		},
		width: null,
		menuWidth: null,
		handleWidth: 26,
		maxHeight: null,
		icons: null,
		format: null,
		escapeHtml: false,
		bgImage: function() {}
	},

	_create: function() {
		var self = this, o = this.options;

		// set a default id value, generate a new random one if not set by developer
		var selectmenuId = (this.element.attr( 'id' ) || 'ui-selectmenu-' + Math.random().toString( 16 ).slice( 2, 10 )).replace(/(:|\.)/g,'')

		// quick array of button and menu id's
		this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];

		// define safe mouseup for future toggling
		this._safemouseup = true;
		this.isOpen = false;

		// create menu button wrapper
		this.newelement = $( '<a />', {
			'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
			'id' : this.ids[ 1 ],
			'role': 'button',
			'href': '#nogo',
			'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
			'aria-haspopup': true,
			'aria-owns': this.ids[ 2 ]
		});
		this.newelementWrap = $( "<span />" )
			.append( this.newelement )
			.insertAfter( this.element );

		// transfer tabindex
		var tabindex = this.element.attr( 'tabindex' );
		if ( tabindex ) {
			this.newelement.attr( 'tabindex', tabindex );
		}

		// save reference to select in data for ease in calling methods
		this.newelement.data( 'selectelement', this.element );

		// menu icon
		this.selectmenuIcon = $( '<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>' )
			.prependTo( this.newelement );

		// append status span to button
		this.newelement.prepend( '<span class="' + self.widgetBaseClass + '-status" />' );

		// make associated form label trigger focus
		this.element.bind({
			'click.selectmenu':  function( event ) {
				self.newelement.focus();
				event.preventDefault();
			}
		});

		// click toggle for menu visibility
		this.newelement
			.bind('mousedown.selectmenu', function(event) {
				self._toggle(event, true);
				// make sure a click won't open/close instantly
				if (o.style == "popup") {
					self._safemouseup = false;
					setTimeout(function() { self._safemouseup = true; }, 300);
				}
				return false;
			})
			.bind('click.selectmenu', function() {
				return false;
			})
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.ENTER:
						ret = true;
						break;
					case $.ui.keyCode.SPACE:
						self._toggle(event);
						break;
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveSelection(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveSelection(1);
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						break;
					case $.ui.keyCode.PAGE_UP:
					case $.ui.keyCode.HOME:
						self.index(0);
						break;
					case $.ui.keyCode.PAGE_DOWN:
					case $.ui.keyCode.END:
						self.index(self._optionLis.length);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'mouseup');
				}
				return true;
			})
			.bind('mouseover.selectmenu', function() {
				if (!o.disabled) $(this).addClass('ui-state-hover');
			})
			.bind('mouseout.selectmenu', function() {
				if (!o.disabled) $(this).removeClass('ui-state-hover');
			})
			.bind('focus.selectmenu', function() {
				if (!o.disabled) $(this).addClass('ui-state-focus');
			})
			.bind('blur.selectmenu', function() {
				if (!o.disabled) $(this).removeClass('ui-state-focus');
			});

		// document click closes menu
		$(document).bind("mousedown.selectmenu-" + this.ids[0], function(event) {
			if ( self.isOpen ) {
				self.close( event );
			}
		});

		// change event on original selectmenu
		this.element
			.bind("click.selectmenu", function() {
				self._refreshValue();
			})
			// FIXME: newelement can be null under unclear circumstances in IE8
			// TODO not sure if this is still a problem (fnagel 20.03.11)
			.bind("focus.selectmenu", function() {
				if (self.newelement) {
					self.newelement[0].focus();
				}
			});

		// set width when not set via options
		if (!o.width) {
			o.width = this.element.outerWidth();
		}
		// set menu button width
		this.newelement.width(o.width);

		// hide original selectmenu element
		this.element.hide();

		// create menu portion, append to body
		this.list = $( '<ul />', {
			'class': 'ui-widget ui-widget-content',
			'aria-hidden': true,
			'role': 'listbox',
			'aria-labelledby': this.ids[1],
			'id': this.ids[2]
		});
		this.listWrap = $( "<div />", {
			'class': self.widgetBaseClass + '-menu'
		}).append( this.list ).appendTo( o.appendTo );

		// transfer menu click to menu button
		this.list
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveFocus(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveFocus(1);
						break;
					case $.ui.keyCode.HOME:
						self._moveFocus(':first');
						break;
					case $.ui.keyCode.PAGE_UP:
						self._scrollPage('up');
						break;
					case $.ui.keyCode.PAGE_DOWN:
						self._scrollPage('down');
						break;
					case $.ui.keyCode.END:
						self._moveFocus(':last');
						break;
					case $.ui.keyCode.ENTER:
					case $.ui.keyCode.SPACE:
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.ESCAPE:
						self.close(event, true);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'focus');
				}
				return true;
			})
			// this allows for using the scrollbar in an overflowed list
			.bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });

		// needed when window is resized
		$(window).bind( "resize.selectmenu-" + this.ids[0], $.proxy( self.close, this ) );
	},

	_init: function() {
		var self = this, o = this.options;

		// serialize selectmenu element options
		var selectOptionData = [];
		this.element.find('option').each(function() {
			var opt = $(this);
			selectOptionData.push({
				value: opt.attr('value'),
				text: self._formatText(opt.text(), opt),
				selected: opt.attr('selected'),
				disabled: opt.attr('disabled'),
				classes: opt.attr('class'),
				typeahead: opt.attr('typeahead'),
				parentOptGroup: opt.parent('optgroup'),
				bgImage: o.bgImage.call(opt)
			});
		});

		// active state class is only used in popup style
		var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";

		// empty list so we can refresh the selectmenu via selectmenu()
		this.list.html("");

		// write li's
		if (selectOptionData.length) {
			for (var i = 0; i < selectOptionData.length; i++) {
				var thisLiAttr = { role : 'presentation' };
				if ( selectOptionData[ i ].disabled ) {
					thisLiAttr[ 'class' ] = this.namespace + '-state-disabled';
				}
				var thisAAttr = {
					html: selectOptionData[i].text || '&nbsp;',
					href : '#nogo',
					tabindex : -1,
					role : 'option',
					'aria-selected' : false
				};
				if ( selectOptionData[ i ].disabled ) {
					thisAAttr[ 'aria-disabled' ] = selectOptionData[ i ].disabled;
				}
				if ( selectOptionData[ i ].typeahead ) {
					thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
				}
				var thisA = $('<a/>', thisAAttr)
					.bind('focus.selectmenu', function() {
						$(this).parent().mouseover();
					})
					.bind('blur.selectmenu', function() {
						$(this).parent().mouseout();
					});
				var thisLi = $('<li/>', thisLiAttr)
					.append(thisA)
					.data('index', i)
					.addClass(selectOptionData[i].classes)
					.data('optionClasses', selectOptionData[i].classes || '')
					.bind("mouseup.selectmenu", function(event) {
						if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($( event.currentTarget ).parents( "ul>li." + self.widgetBaseClass + "-group " )) ) {
							self.index($(this).data('index'));
							self.select(event);
							self.close(event, true);
						}
						return false;
					})
					.bind("click.selectmenu", function() {
						return false;
					})
					.bind('mouseover.selectmenu', function() {
						// no hover if diabled
						if (!$(this).hasClass(self.namespace + '-state-disabled') && !$(this).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
							self._selectedOptionLi().addClass(activeClass);
							self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
							$(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
						}
					})
					.bind('mouseout.selectmenu', function() {
						if ($(this).is(self._selectedOptionLi())) {
							$(this).addClass(activeClass);
						}
						$(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
					});

				// optgroup or not...
				if ( selectOptionData[i].parentOptGroup.length ) {
					var optGroupName = self.widgetBaseClass + '-group-' + this.element.find( 'optgroup' ).index( selectOptionData[i].parentOptGroup );
					if (this.list.find( 'li.' + optGroupName ).length ) {
						this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
					} else {
						$(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"' ) + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ')
							.appendTo( this.list )
							.find( 'ul' )
							.append( thisLi );
					}
				} else {
					thisLi.appendTo(this.list);
				}

				// append icon if option is specified
				if (o.icons) {
					for (var j in o.icons) {
						if (thisLi.is(o.icons[j].find)) {
							thisLi
								.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon')
								.addClass(self.widgetBaseClass + '-hasIcon');
							var iconClass = o.icons[j].icon || "";
							thisLi
								.find('a:eq(0)')
								.prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
							if (selectOptionData[i].bgImage) {
								thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
							}
						}
					}
				}
			}
		} else {
			$('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
		}
		// we need to set and unset the CSS classes for dropdown and popup style
		var isDropDown = ( o.style == 'dropdown' );
		this.newelement
			.toggleClass( self.widgetBaseClass + '-dropdown', isDropDown )
			.toggleClass( self.widgetBaseClass + '-popup', !isDropDown );
		this.list
			.toggleClass( self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown )
			.toggleClass( self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown )
			// add corners to top and bottom menu items
			.find( 'li:first' )
			.toggleClass( 'ui-corner-top', !isDropDown )
			.end().find( 'li:last' )
			.addClass( 'ui-corner-bottom' );
		this.selectmenuIcon
			.toggleClass( 'ui-icon-triangle-1-s', isDropDown )
			.toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );

		// set menu width to either menuWidth option value, width option value, or select width
		if ( o.style == 'dropdown' ) {
			this.list.width( o.menuWidth ? o.menuWidth : o.width );
		} else {
			this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
		}

		// reset height to auto
		this.list.css( 'height', 'auto' );
		var listH = this.listWrap.height();
		var winH = $( window ).height();
		// calculate default max height
		var maxH = o.maxHeight ? Math.min( o.maxHeight, winH ) : winH / 3;
		if ( listH > maxH ) this.list.height( maxH );

		// save reference to actionable li's (not group label li's)
		this._optionLis = this.list.find( 'li:not(.' + self.widgetBaseClass + '-group)' );

		// transfer disabled state
		if ( this.element.attr( 'disabled' ) ) {
			this.disable();
		} else {
			this.enable();
		}

		// update value
		this._refreshValue();

		// set selected item so movefocus has intial state
		this._selectedOptionLi().addClass(this.widgetBaseClass + '-item-focus');

		// needed when selectmenu is placed at the very bottom / top of the page
		clearTimeout(this.refreshTimeout);
		this.refreshTimeout = window.setTimeout(function () {
			self._refreshPosition();
		}, 200);
	},

	destroy: function() {
		this.element.removeData( this.widgetName )
			.removeClass( this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled' )
			.removeAttr( 'aria-disabled' )
			.unbind( ".selectmenu" );

		$( window ).unbind( ".selectmenu-" + this.ids[0] );
		$( document ).unbind( ".selectmenu-" + this.ids[0] );

		this.newelementWrap.remove();
		this.listWrap.remove();

		// unbind click event and show original select
		this.element
			.unbind(".selectmenu")
			.show();

		// call widget destroy function
		$.Widget.prototype.destroy.apply(this, arguments);
	},

	_typeAhead: function( code, eventType ) {
		var self = this,
			c = String.fromCharCode(code).toLowerCase(),
			matchee = null,
			nextIndex = null;

		// Clear any previous timer if present
		if ( self._typeAhead_timer ) {
			window.clearTimeout( self._typeAhead_timer );
			self._typeAhead_timer = undefined;
		}

		// Store the character typed
		self._typeAhead_chars = (self._typeAhead_chars === undefined ? "" : self._typeAhead_chars).concat(c);

		// Detect if we are in cyciling mode or direct selection mode
		if ( self._typeAhead_chars.length < 2 ||
		     (self._typeAhead_chars.substr(-2, 1) === c && self._typeAhead_cycling) ) {
			self._typeAhead_cycling = true;

			// Match only the first character and loop
			matchee = c;
		}
		else {
			// We won't be cycling anymore until the timer expires
			self._typeAhead_cycling = false;

			// Match all the characters typed
			matchee = self._typeAhead_chars;
		}

		// We need to determine the currently active index, but it depends on
		// the used context: if it's in the element, we want the actual
		// selected index, if it's in the menu, just the focused one
		// I copied this code from _moveSelection() and _moveFocus()
		// respectively --thg2k
		var selectedIndex = (eventType !== 'focus' ?
			this._selectedOptionLi().data('index') :
			this._focusedOptionLi().data('index')) || 0;

		for (var i = 0; i < this._optionLis.length; i++) {
			var thisText = this._optionLis.eq(i).text().substr(0, matchee.length).toLowerCase();

			if ( thisText === matchee ) {
				if ( self._typeAhead_cycling ) {
					if ( nextIndex === null )
						nextIndex = i;

					if ( i > selectedIndex ) {
						nextIndex = i;
						break;
					}
				} else {
					nextIndex = i;
				}
			}
		}

		if ( nextIndex !== null ) {
			// Why using trigger() instead of a direct method to select the
			// index? Because we don't what is the exact action to do, it
			// depends if the user is typing on the element or on the popped
			// up menu
			this._optionLis.eq(nextIndex).find("a").trigger( eventType );
		}

		self._typeAhead_timer = window.setTimeout(function() {
			self._typeAhead_timer = undefined;
			self._typeAhead_chars = undefined;
			self._typeAhead_cycling = undefined;
		}, self.options.typeAhead);
	},

	// returns some usefull information, called by callbacks only
	_uiHash: function() {
		var index = this.index();
		return {
			index: index,
			option: $("option", this.element).get(index),
			value: this.element[0].value
		};
	},

	open: function(event) {
		var self = this, o = this.options;
		if ( self.newelement.attr("aria-disabled") != 'true' ) {
			self._closeOthers(event);
			self.newelement.addClass('ui-state-active');

			self.list.attr('aria-hidden', false);
			self.listWrap.addClass( self.widgetBaseClass + '-open' );

			var selected = this._selectedOptionLi();
			if ( o.style == "dropdown" ) {
				self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
			} else {
				// center overflow and avoid flickering
				this.list
					.css("left", -5000)
					.scrollTop( this.list.scrollTop() + selected.position().top - this.list.outerHeight()/2 + selected.outerHeight()/2 )
					.css("left","auto");
			}

			self._refreshPosition();

			var link = selected.find("a");
			if (link.length) link[0].focus();

			self.isOpen = true;
			self._trigger("open", event, self._uiHash());
		}
	},

	close: function(event, retainFocus) {
		if ( this.newelement.is('.ui-state-active') ) {
			this.newelement
				.removeClass('ui-state-active');
			this.listWrap.removeClass(this.widgetBaseClass + '-open');
			this.list.attr('aria-hidden', true);
			if ( this.options.style == "dropdown" ) {
				this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
			}
			if ( retainFocus ) {
				this.newelement.focus();
			}
			this.isOpen = false;
			this._trigger("close", event, this._uiHash());
		}
	},

	change: function(event) {
		this.element.trigger("change");
		this._trigger("change", event, this._uiHash());
	},

	select: function(event) {
		if (this._disabled(event.currentTarget)) { return false; }
		this._trigger("select", event, this._uiHash());
	},

	widget: function() {
		return this.listWrap.add( this.newelementWrap );
	},

	_closeOthers: function(event) {
		$('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function() {
			$(this).data('selectelement').selectmenu('close', event);
		});
		$('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
	},

	_toggle: function(event, retainFocus) {
		if ( this.isOpen ) {
			this.close(event, retainFocus);
		} else {
			this.open(event);
		}
	},

	_formatText: function(text, opt) {
		if (this.options.format) {
			text = this.options.format(text, opt);
		} else if (this.options.escapeHtml) {
			text = $('<div />').text(text).html();
		}
		return text;
	},

	_selectedIndex: function() {
		return this.element[0].selectedIndex;
	},

	_selectedOptionLi: function() {
		return this._optionLis.eq(this._selectedIndex());
	},

	_focusedOptionLi: function() {
		return this.list.find('.' + this.widgetBaseClass + '-item-focus');
	},

	_moveSelection: function(amt, recIndex) {
		// do nothing if disabled
		if (!this.options.disabled) {
			var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
			// do not loop when using up key

			if (newIndex < 0) {
				newIndex = 0;
			}
			if (newIndex > this._optionLis.size() - 1) {
				newIndex = this._optionLis.size() - 1;
			}
			// Occurs when a full loop has been made
			if (newIndex === recIndex) { return false; }

			if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
				// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
				(amt > 0) ? ++amt : --amt;
				this._moveSelection(amt, newIndex);
			} else {
				this._optionLis.eq(newIndex).trigger('mouseover').trigger('mouseup');
			}
		}
	},

	_moveFocus: function(amt, recIndex) {
		if (!isNaN(amt)) {
			var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
		} else {
			var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
		}

		if (newIndex < 0) {
			newIndex = 0;
		}
		if (newIndex > this._optionLis.size() - 1) {
			newIndex = this._optionLis.size() - 1;
		}

		//Occurs when a full loop has been made
		if (newIndex === recIndex) { return false; }

		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);

		this._focusedOptionLi().find('a:eq(0)').attr('id', '');

		if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
			// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
			(amt > 0) ? ++amt : --amt;
			this._moveFocus(amt, newIndex);
		} else {
			this._optionLis.eq(newIndex).find('a:eq(0)').attr('id',activeID).focus();
		}

		this.list.attr('aria-activedescendant', activeID);
	},

	_scrollPage: function(direction) {
		var numPerPage = Math.floor(this.list.outerHeight() / this._optionLis.first().outerHeight());
		numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
		this._moveFocus(numPerPage);
	},

	_setOption: function(key, value) {
		this.options[key] = value;
		// set
		if (key == 'disabled') {
			if (value) this.close();
			this.element
				.add(this.newelement)
				.add(this.list)[value ? 'addClass' : 'removeClass'](
					this.widgetBaseClass + '-disabled' + ' ' +
					this.namespace + '-state-disabled')
				.attr("aria-disabled", value);
		}
	},

	disable: function(index, type){
			// if options is not provided, call the parents disable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption( 'disabled', true );
			} else {
				if ( type == "optgroup" ) {
					this._disableOptgroup(index);
				} else {
					this._disableOption(index);
				}
			}
	},

	enable: function(index, type) {
			// if options is not provided, call the parents enable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption('disabled', false);
			} else {
				if ( type == "optgroup" ) {
					this._enableOptgroup(index);
				} else {
					this._enableOption(index);
				}
			}
	},

	_disabled: function(elem) {
			return $(elem).hasClass( this.namespace + '-state-disabled' );
	},

	_disableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.addClass(this.namespace + '-state-disabled')
					.find("a").attr("aria-disabled", true);
				this.element.find("option").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.removeClass( this.namespace + '-state-disabled' )
					.find("a").attr("aria-disabled", false);
				this.element.find("option").eq(index).removeAttr("disabled");
			}
	},

	_disableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.addClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", true);
				this.element.find("optgroup").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.removeClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", false);
				this.element.find("optgroup").eq(index).removeAttr("disabled");
			}
	},

	index: function(newIndex) {
		if (arguments.length) {
			if (!this._disabled($(this._optionLis[newIndex])) && newIndex != this._selectedIndex()) {
				this.element[0].selectedIndex = newIndex;
				this._refreshValue();
				this.change();
			} else {
				return false;
			}
		} else {
			return this._selectedIndex();
		}
	},

	value: function(newValue) {
		if (arguments.length && newValue != this.element[0].value) {
			this.element[0].value = newValue;
			this._refreshValue();
			this.change();
		} else {
			return this.element[0].value;
		}
	},

	_refreshValue: function() {
		var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
		// deselect previous
		this.list
			.find('.' + this.widgetBaseClass + '-item-selected')
			.removeClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'false')
			.attr('id', '');
		// select new
		this._selectedOptionLi()
			.addClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'true')
			.attr('id', activeID);

		// toggle any class brought in from option
		var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
		var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
		this.newelement
			.removeClass(currentOptionClasses)
			.data('optionClasses', newOptionClasses)
			.addClass( newOptionClasses )
			.find('.' + this.widgetBaseClass + '-status')
			.html(
				this._selectedOptionLi()
					.find('a:eq(0)')
					.html()
			);

		this.list.attr('aria-activedescendant', activeID);
	},

	_refreshPosition: function() {
		var o = this.options;

		// if its a pop-up we need to calculate the position of the selected li
		if ( o.style == "popup" && !o.positionOptions.offset ) {
			var selected = this._selectedOptionLi();
			var _offset = "0 " + ( this.list.offset().top  - selected.offset().top - ( this.newelement.outerHeight() + selected.outerHeight() ) / 2);
		}
		this.listWrap
			.removeAttr('style')
			.zIndex( this.element.zIndex() + 1 )
			.position({
				// set options for position plugin
				of: o.positionOptions.of || this.newelement,
				my: o.positionOptions.my,
				at: o.positionOptions.at,
				offset: o.positionOptions.offset || _offset,
				collision: o.positionOptions.collision || (o.style == "popup" ? 'fit' :'flip')
			});
	}
});

})(jQuery);;
Drupal.behaviors.selectmenu = {
  attach: function(context, settings) {
    (function ($) {
      var form = null;

      // Select and apply jQuery Selectmenu to whitelisted CSS selectors first.
      $(Drupal.settings.selectmenu.selectmenu_css_whitelist).each(function(context) {
        $(this).selectmenu(Drupal.settings.selectmenu.options).addClass('selectmenu-whitelisted');
      });

      $('select:not(.selectmenu-whitelisted)', context).each(function(context){
        form = $(this).parents('form');
        var apply_selectmenu = true;

        // Skip multi-row selects
        if ($(this).attr('multiple')) {
          apply_selectmenu = false;
        }

        // If this form's ID isn't part of the exception list
        if (!in_array(form.attr('id'), Drupal.settings.selectmenu.form_id_exceptions)) {
          if (Drupal.settings.selectmenu.ignore_system_settings_forms
                      && (form.attr('id'))
                      && (form.attr('id').indexOf('system-') === 0
                            || $(this).parents('body.page-admin').length > 0
                )
            ) {
            apply_selectmenu = false;
          }

          // Check for Overlay forms
          if (Drupal.settings.selectmenu.ignore_overlay_forms) {
            if ($(this).parents('body.overlay').length > 0) {
              apply_selectmenu = false;
            }
          }

          // Check for Node add forms
          if (Drupal.settings.selectmenu.ignore_node_add_forms) {
            if ($(this).parents('body.page-node-add').length > 0) {
              apply_selectmenu = false;
            }
          }

          // If no ignore criteria met, carry out skinning select element
          if (apply_selectmenu && !$(this).hasClass('drupal-selectmenu')) {
            $(this).selectmenu(Drupal.settings.selectmenu.options).addClass('drupal-selectmenu');
          }
        }
      });

      function in_array (needle, haystack, argStrict) {
        // Checks if the given value exists in the array
        //
        // version: 1107.2516
        // discuss at: http://phpjs.org/functions/in_array
        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: vlado houba
        // +   input by: Billy
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
        // *     returns 1: true
        // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
        // *     returns 2: false
        // *     example 3: in_array(1, ['1', '2', '3']);
        // *     returns 3: true
        // *     example 3: in_array(1, ['1', '2', '3'], false);
        // *     returns 3: true
        // *     example 4: in_array(1, ['1', '2', '3'], true);
        // *     returns 4: false
        var key = '',
          strict = !! argStrict;

        if (strict) {
          for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
          }
        } else {
          for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
          }
        }
        return false;
      }
    })(jQuery);
  }
};

(function ($) {
  $(document).ready(function($){

  });
})(jQuery);
;
(function ($) {
    Drupal.behaviors.magentoLargeSlider = {
        attach: function (context, settings) {

            var isBusy = false;
            var thisNumStep = 1;
            var thisStep = 1200;
            var thisSpeed = 600;

            $('.large-slideshow').each(function(){
                var thisLength = $(this).find('.scroll .slide').length;
                var currSection = $(this);
                var currScroll = currSection.find('.scroll');

                currSection.find('.next').click(function(){
                    if(!isBusy){
                        isBusy = true;
                        var elmnts = currScroll.children();
                        for(i=0;i<thisNumStep;i++){
                            currScroll.append($(elmnts[i]).clone());
                        }
                        currScroll.animate({
                            left: '-=' + thisStep
                        }, thisSpeed, function() {
                            for(i=0;i<thisNumStep;i++){
                                $(elmnts[i]).remove();
                            }
                            currScroll.animate({left: '+=' + thisStep}, 0);
                            isBusy = false;
                        });
                    }
                });

                currSection.find('.prev').click(function(){
                    if(!isBusy){
                        isBusy = true;
                        var elmnts = currScroll.children();
                        for(i=thisLength;i>(thisLength - thisNumStep - 1);i--){
                            currScroll.prepend($(elmnts[i]).clone());
                        }
                        currScroll.animate({left: '-=' + thisStep}, 0);
                        currScroll.animate({
                            left: '+=' + thisStep
                        }, thisSpeed, function() {
                            for(i=thisLength;i>(thisLength - thisNumStep - 1);i--){
                                $(elmnts[i]).remove();
                            }
                            isBusy = false;
                        });
                    }
                });
            });

        }
    };
})(jQuery);;
/**
* Allow custom links to fire QuickTabs.
*/
(function ($) {
  Drupal.behaviors.quicktabs_linker = {
    attach: function (context, settings) {
   
      $('.tablink-next').click(function(e) {
        e.preventDefault();
        // Click tab
        var next = $('.quicktabs-tabs li.active').next().find('a');
        if(next.length > 0) {
          next.click();
        }
        else {
          $('.quicktabs-tabs li.last.active').parent().find('.first a').click(); 
        }        
      });
      
      $('.tablink-prev').click(function(e) {
        e.preventDefault();
        // Click tab
        var prev = $('.quicktabs-tabs li.active').prev().find('a');
        if (prev.length > 0) {
          prev.click();
        }
        else {
          $('.quicktabs-tabs li.first.active').parent(":last-child").find('a').click();
        }        
      });
      return false;
    }
  };
})(jQuery);
;
/*******

*** Anchor Slider by Cedric Dugas ***
*** Http://www.position-absolute.com ***
Never have an anchor jumping your content, slide it.

Don't forget to put an id to your anchor !
You can use and modify this script for any project you want, but please leave this comment as credit.
*****/


(function ($) {
  Drupal.behaviors.anchorslide = {
    attach: function (context, settings) {
      $(document).ready(function() {
        $("a.anchorLink").anchorAnimate()
      });

      jQuery.fn.anchorAnimate = function(settings) {
      
        settings = jQuery.extend({
                      speed : 1100
                    }, settings);	
      
        return this.each(function(){
          var caller = this
          $(caller).click(function (event) {	
            event.preventDefault()
            var locationHref = window.location.href
            var elementClick = $(caller).attr("href")
      
            var destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
              window.location.hash = elementClick
            });
            return false;
          })
        });
      }
    }
  }
})(jQuery);;
/**
* FancyBox for Header Large Media Slideshow
*/
(function ($) {
  Drupal.behaviors.Fancybox = {
    attach: function (context, settings) {
      $(".yt_cta").fancybox({
        'padding': 0,
        afterLoad: function() {
          try {
            _bamSC.ytiframetracker();
          } catch(e) {}
        }
      });
    }
  };
})(jQuery);;
