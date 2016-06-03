---
layout: default
group: coding-standards
subgroup: Coding standards
title: jQuery widget coding standard
menu_title: jQuery widget coding standard
menu_order: 4
github_link21: coding-standards/code-standard-jquery-widgets.md
---

<h2 id="fedg_jq-widget-coding-stnd_overview">Overview</h2>
<p>In the Magento system, all jQuery UI widgets and interactions are built on a simple, reusable base&mdash;the <a href="http://jqueryui.com/widget/" target="_blank">jQuery UI Widget Factory</a>. The factory provides a flexible base for building complex, stateful plug-ins with a consistent API. It is designed not only for plug-ins that are part of jQuery UI, but for general usage by developers who want to create object-oriented components without reinventing common infrastructure.</p>
<p>For more information, see the <a href="http://api.jqueryui.com/jQuery.widget/" target="_blank">jQuery Widget API documentation</a>.</p>
<p>This standard is mandatory for Magento core developers and recommended for third-party extension developers. Some parts of Magento code might not comply with the standard, but we are working to gradually improve this.</p>
<p>Use <a href="http://www.ietf.org/rfc/rfc2119.txt" target="_blank">RFC 2119</a> to interpret the "must," "must not," "required," "shall," "shall not," "should," "should not," "recommended," "may," and "optional" keywords.</p>

<h2 id="fedg_jq-widget-coding-stnd_naming">Naming conventions</h2>
<div id="accordion">
   <h3>Widget names must consist of one or more non-abbreviated English words</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>(function($) {
$.widget('mage.accordion', $.ui.accordion, {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
               <td>
                  <pre>(function($) {
   $.widget('mage.ak123', $.ui.accordion, {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Widget names must be formatted in camelCase</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>(function($) {
   $.widget('mage.vdeHistoryToolbar', {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
               <td>
                  <pre>(function($) {
   $.widget('mage.vde_historyToolbar', {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Verbosity is generally encouraged</h3>
   <div>
      <p>Widget names should be as verbose as needed to fully describe their purpose and behavior.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Declaration of the frontend.advancedEventTrigger widget
(function($) {
   "use strict";

   $.widget('mage.advancedEventTrigger', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
               <td>
                  <pre>// Declaration of the ui.button widget
(function($) {
   "use strict";

   $.widget('ui.button', $.ui.button, {
      // ... My custom code ...
   });
}) (jQuery);</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</div>
<h2 id="fedg_widget-coding-stnd_instant">Instantiation and resources</h2>
<!-- <p>You must use the <a href="{{ site.gdeurl21 }}frontend-dev-guide/javascript/js-mage-plugin.html" target="_blank">Mage plug-in</a> to instantiate a widget or define resources for a widget.</p> -->
<div id="accordion2">
   <h3>Additional JavaScript files used as resources by a widget</h3>
   <div>
      <p>Additional JavaScript files used as resources must be dynamically loaded using the <code>$.mage.components()</code> method and must not be included in the <code>&lt;head></code> block.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/9a700d4f220ce06e3bc7.js"></script></pre>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/10019eab65d68b85cbb3.js"></script></pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>You must use <code>$.mage.extend()</code> to extend an existing set of widget resources</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/05f55b091bdf0dbd31ba.js"></script></pre>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/5ebd41ec54beae23b178.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>You must instantiate widgets using the <code>data-mage-init</code> attribute</h3>
   <div>
      <div class="bs-callout bs-callout-info" id="info">
            <p>You can use the <code>.mage()</code> plug-in to instantiate widgets that use callback methods.</p>
      </div>
      <p>Benefits:</p>
      <ul>
         <li>You leverage benefits of <code>$.mage.extend()</code> and <code>$.mage.components()</code></li>
         <li>Using <code>data-mage-init</code> minimizes inline JavaScript code footprint.</li>
         <li>You can modify widget initialization parameters.</li>
      </ul>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Widget initialization using the data-mage-init attribute
&lt;form data-mage-init="{form:[], validation:{ignore:':hidden'}}">&lt;/form></pre>
                  <pre>// Widget initialization using the mage plug-in
&lt;script type="text/javascript">
(function($) {
    $('selector').mage('dialog', {
        close: function(e) {
            $(this).dialog('destroy');
        }
    });
})(jQuery);
&lt;/script></pre>
               </td>
               <td>
                  <pre>// Widget initialization without using the mage plug-in
&lt;script type="text/javascript">
(function($) {
    $('[data-role="form"]')
        .form()
        .validation({
            ignore: ':hidden'
        });
})(jQuery);
&lt;/script></pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Methods and widgets must not be declared using inline JavaScript</h3>
   <div>
      <div class="bs-callout bs-callout-info" id="info">
            <p>You can declare callback methods inline.</p>
      </div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Widget initialization and configuration
$('selector').mage('dialog', {
    close: function(e) {
        $(this).dialog('destroy');
    }
});</pre>
                  <pre>// Widget initialization and binding event handlers
$('selector').mage('dialog').on('dialogclose', {
    $(this).dialog('destroy');
});</pre>
                  <pre>// Extension for widget in a JavaScript file
$.widget('mage.dialog', $.ui.dialog, {
    close: function() {
        this.destroy();
    }
});</pre>
                  <pre>// Extension of widget resources
&lt;script type="text/javascript">
(function($) {
    $.mage
        .extend('dialog', 'dialog',
            '&lt;?php echo $this->getViewFileUrl('Enterprise_\*Module\*::page/js/dialog.js') ?>')
})(jQuery);
</script></pre>
               </td>
               <td>
                  <pre>// Initialization
$('selector').dialog();
$('selector')
    .find('.ui-dialog-titlebar-close')
    .on('click', function() {
        $('selector').dialog('destroy');
    });</pre>
                  </li></ul>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</div>
<h2 id="fedg_widget-coding-stnd_devgde">Development standard</h2>
<div id="accordion3">
   <h3>Widgets should comply with the <a href="http://en.wikipedia.org/wiki/SOLID_(object-oriented_design)" target="_blank">single responsibility principle</a>.</h3>
   <div>
      <p>The responsibilities which are not related to the entity described by the widget should be moved to another widget.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Widget "dialog" that is responsible
// only for opening content in an interactive overlay.
$.widget('mage.dialog', {
    /* ... */
});</pre>
                  <pre>// Widget "validation" that is responsible
// only for validating the form fields.
$.widget('mage.validation', $.ui.sortable, {
    /* ... */
});</pre>
                  <pre>$('selector')
    .mage('dialog')
    .find('form')
    .mage('validation');</pre>
               </td>
               <td>
                  <pre>// Widget named 'dialog' that is
// responsible for opening content in
// an interactive overlay and
// validating the form fields.
$.widget('mage.dialog', {
    /* ... */
    _validateForm: function() {
        /* code which validates the form */
    }
});</pre>
                  <pre>$('selector').mage('dialog')</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>All widget properties that can be used to modify widget's behavior must be located in widget's options.</h3>
   <div>
      <p><strong>Benefit</strong>: Widgets become configurable and reusable.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>//Declaration of the
// backend.dialog widget
		$.widget('mage.dialog', {
    options: {
        modal: false,
        autoOpen: true,
        /* ... */
    },
    /* ... */
});</pre>
                  <pre>// Initializing
$('selector').mage('dialog', {
   modal: true,
   autoOpen: false
});</pre>
               </td>
               <td>
                  <pre>// Declaration of the
// backend.modalDialog and backend.nonModalDialog
// widgets
$.widget('mage.modalDialog', {
    /* ... */
});
$.widget('mage.nonModalDialog', {
    /* ... */
});</pre>
                  <pre>// Initialization
$('selector').mage('modalDialog');
$('selector').mage('nonModalDialog');</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Widget communications must be handled by jQuery events</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// HTML structure
		&lt;body>
    ...
    &lt;button data-mage-init="{button: {event: 'save', target:'[data-role=edit-form]'}}" />
    ...
    &lt;form data-role="edit-form">
        ...
    &lt;/form>
    ...
&lt;/body></pre>
                  <pre>// Declaration of the mage.form widget
$.widget("mage.form," {
    /* ... */
    _create: function() {
        this._bind();
    },
    _bind: function() {
        this._on({
            save: this._submit
        })
    }
    _submit: function(e, data) {
        this._rollback();
        if (false !== this._beforeSubmit(e.type, data)) {
            this.element.trigger('submit', e);
        }
    }
});</pre>
               </td>
               <td>
                  <pre>// HTML structure
&lt;body>
    ...
    &lt;button data-mage-init="{formButton: {}}" />
    ...
    &lt;form data-role="edit-form">
        ...
    &lt;/form>
    ...
&lt;/body></pre>
                  <pre>// Declaration of the mage.button widget
$.widget('mage.formButton', $.ui.button, {
    /* ... */
    _create: function() {
        this._bind();
        this._super();
    },
    _bind: function() {
        this._on({
            click: function() {
                $('[data-role=edit-form]').form('submit');
            }
        });
    }
});</pre>
                  <pre>// Declaration of the mage.form widget
$.widget("mage.form," {
    /* ... */
    _create: function() {
        this._bind();
    }
    submit: function(data) {
        this._rollback();
        if (false !== this._beforeSubmit(e.type, data)) {
            this.element.trigger('submit', e);
        }
    }
});</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>You must use <a href="http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing" target="_blank">DOM event bubbling</a> to perform one-way communication between a child widget and its parent widget</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/0282dcddf7edaee397d1.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/680ebeb53852f9159da1.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/17c95f543f4db511705d.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/7377734ade1d4ee8cdef.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/00e6f6cebc2c09b82081.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/071067a91e8a76edf882.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/04d705c90fcf9e982f26.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/b16371c02db00c1751ed.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Widgets must comply with the Law of Demeter principle</h3>
   <div>
      <p>About the <a href="http://en.wikipedia.org/wiki/Law_of_Demeter" target="_blank">Law of Demeter</a> principle. We recommended against instantiating a widget or calling a widget's methods inside another widget.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/8a8cb05f2ff980849e5a.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/956c8f2cd794e1e4790f.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/b7c41b2f5484070b6cde.js"></script>
                  <script src="https://gist.github.com/xcomSteveJohnson/c80c339f2176973f2947.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/136eaab18300b104b987.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>We recommend you make widgets abstract enough so that they can be used anywhere in your Magento system</h3>
   <div>
      <p>Example: Unlike the <code>mage.topShoppingCart</code> widget, the <code>mage.dropdown widget</code> can be used in many other scenarios.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/efeb0b23c92e8a14797b.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/ddc67dacfb8eedc0a134.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Abstract widgets which can be used shared with non-Magento applications</h3>
   <div>
      <p>Place all such widgets under the <code><your Magento install dir>/pub/lib/[your company]/[author]</code> directory.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>/pub
    /lib
        /magento
            dropdown.js
            validation.js
            dialog.js</pre>
               </td>
               <td>
                  <pre>/pub
    /lib
        /magento
            vde-block.js
            vde-container.js</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Magento product specific widgets</h3>
   <div>
      <p>You must locate all of these under the <code><your Magento install dir>/app/code/&lt;namespace>/&lt;ModuleName>/view/&lt;areaname>/js</code> directory.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>/app
    /code
        /Mage
            /DesignEditor
                /view
                    /frontend
                        /js
                            vde-block.js
                            vde-container.js</pre>
               </td>
               <td>
                  <pre>/pub
    /lib
        /magento
            vde-block.js
            vde-container.js</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</div>
<h2 id="fedg_jquery-widget-coding_arch">Architecture</h2>
<div id="accordion4">
   <h3>Use the underscore prefix only to declare private widget methods</h3>
   <div>
      <p>Widget properties names should not start with underscore because those properties would not be accessible using the jQuery Widget Factory public API.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Declaration of the backend.accordion widget
$.widget('mage.accordion', {
    /* ... */
    _create: function() {
        this.header = this.element.find(this.options.header);
        this.icon = $(this.options.icon).prependTo(this.header);
    }
});</pre>
               </td>
               <td>
                  <pre>// Declaration of the backend.accordion widget
$.widget('mage.accordion', {
    /* ... */
    _create: function() {
        this._header = this.element.find(this.options.header);
        this._icon = $(this.options.icon).prependTo(this._header);
    }
});</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>A widget's element selection should start with <code>this.element</code></h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/1230ea3e189d56ec2e1c.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/8ab943e0c335550cd901.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Widgets must not interact with certain DOM elements</h3>
   <div>
      <p>Widgets must not interact with DOM elements that can be selected with <code>this.element.parent()</code>, <code>this.element.parents('selector')</code>, or <code>this.element.closest('selector')</code>.</p>
      <p>Benefit: Reduced number of widget conflicts because widgets interact only with their child elements.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/5420a2d569a307a444f3.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/dd58dcb56b7a969e3b5c.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>All widget options should have default values</h3>
   <div>
      <p>If there is no default value for an option by design, a <code>null</code> value must be used.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/1b12fde4f36739febb30.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/c970d7568346411fda59.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>All DOM selectors used by a widget must be passed to the widget as options</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/8912e16944ae3c18aca8.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/10634888ebd33b97ccc0.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>If an immediate state change is required, the change must be processed by the <code>_setOption</code> method</h3>
   <div>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/80da4a8a2b45009c409b.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/1bda6a1f11ef807f3b47.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>To call widget methods, you must use the public widget API</h3>
   <div>
      <p>Benefit: The public widget API enables using chaining for widget methods.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <pre>// Call the 'open' method on the menu widget using the public widgets API
$('selector')
    .menu('open')
    .addClass('ui-state-active');</pre>
               </td>
               <td>
                  <pre>// Call the 'open' method on the
// menu widget without using the public
// widgets API
var menuInstance = $('selector').data('menu');
menuInstance.open();
menuInstance.element.addClass('ui-state-active');
	</pre>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>Widget initialization</h3>
   <div>
      <p>Initializing a widget must be handled only if there is a logical action to perform on successive calls to the widget with no arguments.</p>
      <p>The widget factory automatically fires the <code>_create()</code> and <code>_init()</code> methods during initialization, in that order. The widget factory prevents multiple instantiations on the same element, which is why <code>_create()</code> is called only once for each widget instance, whereas <code>_init()</code> is called each time the widget is called without arguments.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/50214ee1333ae3729333.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/12649600c73015db3f21.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   
<h3>When a widget is destroyed, the element should be left exactly like it was before the widget was attached to it</h3>

Common tasks include:
<ul>
<li>Removing or adding of any CSS classes your widget added/removed from the element.</li>
<li>Detaching any elements your widget added to the DOM.</li>
<li>Destroying any widgets that your widget applied to other elements.</li>
</ul>
      <p>Example:</p>
         <div>

      <script src="https://gist.github.com/xcomSteveJohnson/b9e1fb5a78fe88e510db.js"></script>
   </div>
   <h3>All event handlers must be bound by the <code>_bind()</code> method</h3>
   <div>
      <p>Benefit: All widget event handlers are bound in one place (by the <code>_bind</code> method), which makes it easy to find what events the widget reacts on.</p>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/8375d8ac3a4f807e71f5.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/8b512431bd78b1bcb25d.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <h3>You must use the _on() method to bind events</h3>
      <p>Benefits:</p>
      <ul>
<li>Delegation is supported using selectors in the event names; for example, <code>click .foo</code></li>
<li>Maintains proper this context inside the handlers, so it is not necessary to use the <code>$.proxy()</code> method.</li>
<li>Event handlers are automatically namespaced and cleaned up on destruction.</li>
</ul>
      <table>
         <tbody>
            <tr>
               <th>Correct</th>
               <th>Incorrect</th>
            </tr>
            <tr class="even">
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/e9f8dc5c56e84722aa88.js"></script>
               </td>
               <td>
                  <script src="https://gist.github.com/xcomSteveJohnson/7631a95d0476652b9d38.js"></script>
               </td>
            </tr>
         </tbody>
      </table>
</div>
<h4>Related topics</h4>
<ul>
   <li><a href="http://api.jqueryui.com/jQuery.widget" target="_blank">jQuery UI widget documentation</a></li>
   <li><a href="{{ site.gdeurl21 }}frontend-dev-guide/javascript/js-mage-plugin.html">Mage JavaScript plugin<a></li>
</ul>

