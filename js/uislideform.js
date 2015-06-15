/**
 * uislideform.js v1.0.0
 *
 */
var emailValue = '';
var searchValue = '';
( function( window ) {
    'use strict';
    !(window.addEventListener || !window.Element || !(function () {
        function addToPrototype(name, method) {
            Window.prototype[name] = HTMLDocument.prototype[name] = Element.prototype[name] = method;
        }

        var registry = [];

        addToPrototype("addEventListener", function (type, listener) {
            var target = this;

            registry.unshift({
                __listener: function (event) {
                    event.currentTarget = target;
                    event.pageX = event.clientX + document.documentElement.scrollLeft;
                    event.pageY = event.clientY + document.documentElement.scrollTop;
                    event.preventDefault = function () {
                        event.returnValue = false
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.stopPropagation = function () {
                        event.cancelBubble = true
                    };
                    event.relatedTarget = event.fromElement || null;
                    event.target = event.srcElement || target;
                    event.timeStamp = +new Date;

                    listener.call(target, event);
                },
                listener: listener,
                target: target,
                type: type
            });

            this.attachEvent("on" + type, registry[0].__listener);
        });

        addToPrototype("removeEventListener", function (type, listener) {
            for (var index = 0, length = registry.length; index < length; ++index) {
                if (registry[index].target == this && registry[index].type == type && registry[index].listener == listener) {
                    return this.detachEvent("on" + type, registry.splice(index, 1)[0].__listener);
                }
            }
        });

        addToPrototype("dispatchEvent", function (eventObject) {
            try {
                return this.fireEvent("on" + eventObject.type, eventObject);
            } catch (error) {
                for (var index = 0, length = registry.length; index < length; ++index) {
                    if (registry[index].target == this && registry[index].type == eventObject.type) {
                        registry[index].call(this, eventObject);
                    }
                }
            }
        });
    })());

    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    !(String.prototype.trim || !(String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }));

    function UISlideform( el, options ) {
        this.el = el;
        if (typeof options != 'undefined' && options == 'email') {
            this.inputEl = el.querySelector( 'form > input.sb-email-input' );
        } else {
            this.inputEl = el.querySelector( 'form > input.sb-search-input' );
        }
        this._initEvents(options);
    }

    UISlideform.prototype = {
        _initEvents : function(options) {
            var self = this;
            var initSearchFn = function (ev) {
                ev.stopPropagation();
                // trim its value
                self.inputEl.value = self.inputEl.value.trim();
                if (options == 'email') {
                    if (!classie.has(self.el, 'sb-email-open')) { // open it
                        jQuery('#news-email').attr('placeholder', 'Email Address');
                        ev.preventDefault();
                        self.open(options);
                        jQuery('#news-email').fadeIn('slow');
                    }
                    else if (classie.has(self.el, 'sb-email-open') && /^\s*$/.test(self.inputEl.value) && jQuery('#news-email').attr('placeholder') == '') { // close it
                        ev.preventDefault();
                        jQuery('#news-email').attr('placeholder', '');
                        self.close(options);
                        jQuery('#news-email').fadeOut('slow');
                    }
                } else {
                    if (!classie.has(self.el, 'sb-search-open')) { // open it
                        ev.preventDefault();
                        self.open(options);
                        jQuery('#search').show();
                    }
                    else if (classie.has(self.el, 'sb-search-open') && /^\s*$/.test(self.inputEl.value)) { // close it
                        ev.preventDefault();
                        self.close(options);
                        jQuery('#search').hide();
                    }
                }
            };

            this.el.addEventListener( 'click', initSearchFn );
            this.el.addEventListener( 'touchstart', initSearchFn );
            this.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); });
            this.inputEl.addEventListener( 'touchstart', function( ev ) { ev.stopPropagation(); } );
        },
        open : function(options) {
            var self = this;
            if (options == 'email') {
                if (this.inputEl.value == '' || this.inputEl.value == 'Email Address'){
                    if (emailValue != '') {
                        this.inputEl.value = emailValue;
                    }
                }
                classie.add( this.el, 'sb-email-open' );
            } else {
                if (this.inputEl.value == '' || this.inputEl.value == 'Search Magento Enterprise'){
                    if (searchValue != '') {
                        this.inputEl.value = searchValue;
                    }
                }
                classie.add( this.el, 'sb-search-open' );
            }
            var bodyFn = function( ev ) {
                self.close(options);
                this.removeEventListener( 'click', bodyFn );
                this.removeEventListener( 'touchstart', bodyFn );
            };
            document.addEventListener( 'click', bodyFn );
            document.addEventListener( 'touchstart', bodyFn );
        },
        close : function(options) {
            this.inputEl.blur();
            if (options == 'email') {
                emailValue = this.inputEl.value;
                classie.remove( this.el, 'sb-email-open' );
                jQuery('#news-email').attr('placeholder', '');
                if (jQuery('#news-email').hasClass('ie_check') == false) {
                    jQuery('#news-email').val('');
                }
                jQuery('#news-email').fadeOut('slow');
                jQuery('#news-emailemail_msg').fadeOut('slow');
            } else {
                searchValue = this.inputEl.value;
                classie.remove( this.el, 'sb-search-open' );
                if (jQuery('#search').hasClass('ie_check') == false) {
                    jQuery('#search').val('');
                }
                jQuery('#search').fadeOut('fast');
            }
        }
    };

// add to global namespace
    window.UISlideform = UISlideform;
} )( window );