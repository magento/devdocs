
/**
 * ELIXON TOC
 * Project Homepage: http://www.webdevelopers.eu/jquery/toc
 *
 * LICENSE
 *   Commercial
 *
 * USAGE
 *    $(el).toc([ARG [, ARG]]);
 *
 * ARG can be
 * - jQuery selector selecting the headers
 * - jQuery object containing headers
 * - labeler funcion that returns the header title
 * - template name (format: TEMPLATE.NAME[:FEATURE1[:FEATURE2[...]]] )
 * - offset
 * - level mapping: ex. ["h1, a.header", "h2", "h3", ".example"] (if jQuery selector or object is missing this is used)
 *
 *
 * Examples
 *    $('ul.toc').toc('h2, h3, h4, h5, h6', '#contentBody');
 *    $('div.toc').toc('h2:not(.noTOC), h3:not(.noTOC)');
 *
 * CSS
 * .tocActive - placed on active link and active item
 * .tocActiveParent - placed on active items that are ancestors of .tocActive
 *
 * @project    Elixon CMS, http://www.webdevelopers.eu/
 * @package    JQuery
 * @subpackage TOC
 * @author     Daniel Sevcik <sevcik@webdevelopers.eu>
 * @version    2.1
 * @copyright  2010 Daniel Sevcik
 * @since      2010-11-25T22:15:19+0100
 * @revision   $Revision: 4616 $
 * @access     public
 */
(function($) {
	var scrolling=false;

	jQuery.easing.easeJTOC=function (e,n,t,a,r){
		return a*((n=n/r-1)*n*n*n*n+1)+t;
	};

	var getLevel=function($node, levels) {
		for (var i=0; i < levels.length; i++) {
			if ($node.is(levels[i])) return i+1;
		}
		// Not defined - try to grep the number from H1, H2, ... tag name.
		var node=$node.get(0);
		return parseInt((node.localName || node.tagName || node.nodeName).replace(/[^1-6]/g, '')) || 1;
	};

	var mkId=function(str) {
		var id=strToClass(str),
			c=1,
			ret=id;

		while($('#'+ret).length) {
			ret=id + c++;
		}

		return ret;
	};

	function strToClass(str) {
		var parts=$.trim((str + "").replace(/[^a-z0-9]+/gi, ' ')).split(/ +/);
		var className=(parts[0] || "").toLowerCase();
		for (var i=1; i < parts.length; i++) {
			className+=parts[i].charAt(0).toUpperCase() + parts[i].substr(1);
		}
		return className || "cname";
	}

	function roll($link, opts, callback) {
		var href=$link.attr('href');
		var $target=$(href);

		if (!$target.length) return true;

		var top=$target.offset().top - Math.min(opts.offset, ($(window).height() - opts.offset) / 2);

		activate($link.closest(".toc"), $link, opts);
		$('html, body')
			.stop()
			.animate({'scrollTop': top}, Math.min(Math.abs($(window).scrollTop() - top), 2000), 'easeJTOC', function() {
				callback();
				$('body').trigger('scroll');
			});

		return false;
	};


	function hl($root, $headers, opts) {
		var topMin=-1,
			winHeight=$(window).height() - opts.offset,
			winMin=$(window).scrollTop() + Math.min(opts.offset, winHeight / 2) - 15,
			winMax=winMin + winHeight * 0.5,
			$el=$();

		$.each($headers.get().reverse(), function() {
			var $this=$(this);
			var curr=$this.offset();

			// console.log($root, this,
			// 'if ((', curr.top <= winMin && curr.top > topMin, ') || (', curr.top >= winMin, ' && ', curr.top < winMax, ' && ( ', topMin < winMin, ' || ', topMin > curr.top, '))) = ',
			//			((curr.top <= winMin && curr.top > topMin) || (curr.top >= winMin && curr.top < winMax && (topMin < winMin || topMin > curr.top)))
			//			);
			if ((curr.top <= winMin && curr.top > topMin) || (curr.top >= winMin && curr.top < winMax && (topMin < winMin || topMin > curr.top))) {
				topMin=curr.top;
				$el=$this;
			}
		});

		var $active=$('.tocLink[href="#' + $el.attr('id') + '"]', $root);
		activate($root, $active, opts);

		return $active;
	}

	function activate($root, $active, opts) {
		if ($active.is('.tocSelected')) {
			return;
		}

		$('.tocSelected', $root).removeClass('tocSelected');
		$active.addClass('tocSelected');

		if (!$('.toc', $root).is('.nohiliteFeat')) {
			opts.templateDef.hilite.call($root.get(0), $active, opts);
		}

		if (typeof opts.callback == 'function') {
			opts.callback.call($root.get(0), $active);
		}
	}

	function nextTOC($item, $list, $currTemplate, opts) {
		var $replaceTo;

		if (!$item || !$item.length) return;

		if (!$list.length) { // no children
			$('.tocSub', $item).addClass("noChildren");
			$('.tocLevel', $item).remove();
			return;
		}

		$replaceTo=$item.is(".tocSub") ? $item : $(".tocSub", $item)
			.not($(".tocItem .tocSub, .tocItem.tocSub", $item)); // not inside nested .tocItem
		if ($replaceTo.length) { // append to .tocSub
			$replaceTo.addClass('hasChildren');
			$replaceTo=$('<div></div>').appendTo($replaceTo);
		} else { // Replace .tocLevel
			$replaceTo=$(".tocLevel", $item);
			$replaceTo.parent().addClass('hasChildren');
		}

		if (!$replaceTo.length) return;

		var $template=$(".tocItem .tocLevel", $currTemplate)
			.not($('.tocItem .tocItem .tocLevel', $currTemplate));
		if (!$template.length) {
			$template=$currTemplate;
		};

		var $toc=mkTOC($list, $template, opts);
		if ($toc) {
			$replaceTo.replaceWith($toc);
		}
	}

	function mkTOC($list, $template, opts) {
		if (!$list.length) return null;

		$template.addClass('tocLevel'); // unify - optional class
		var $level=$template.clone(true, true);

		// Template
		var $itemTmpl=$('.tocItem', $level).not($('.tocItem .tocItem', $level));
		var level=getLevel($list.first(), opts.tocLevels); // level of the first item
		var descend=[];
		var $item=false;

		$list.each(function(k, v) {
			if (getLevel($(this), opts.tocLevels) > level) {
				descend.push(this);
				return;
			}

			if (!$(this).attr('id')) {
				$(this).attr('id', mkId($(this).text()));
			}

			nextTOC($item, $(descend), $template, opts);
			descend=[];
			$item=$itemTmpl.clone(true, true);

			// Link
			var $link=($item.is(".tocLink") ? $item : $('.tocLink', $item).not($(".tocItem .tocLink", $item)))
				.not($(".tocItem .tocLink", $item));
			$link.attr('href', '#'+$(this).attr('id'));

			// Label
			var $label=($item.is(".tocLabel") ? $item : $('.tocLabel', $item).not($(".tocItem .tocLabel", $item)));
			$label.text(opts.labeler.call(this, {position: k + 1, label: $label, levelElements: $list, opts: opts}));

			$itemTmpl.before($item);
		});
		nextTOC($item, $(descend), $template, opts);

		$itemTmpl.remove();
		return $level;
	};

	$.fn.toc=function() {
		var opts=$.extend({}, $.fn.toc.defaults);
		for (var i=0; i < arguments.length; i++) {
			var arg=arguments[i];

			switch(typeof arg) {
			case "number":
				opts.offset=parseInt(arg);
				break;
			case "function":
				opts.labeler=arg;
				break;
			case "string":
				// TEMPLATE.NAME:FEATURE1:FEATURE2
				var parts=arg.split(':');
				if ($.fn.toc.templates[parts[0]]) {
					opts.template=parts.shift();
					opts.className+=" "+(parts.length ? parts.join("Feat ") + "Feat" : "");
					break;
				} else if ($.isNumeric(arg)) {
					opts.offset=parseInt(arg);
					break;
				}
				// nobreak;
			case "object":
				if ($.isArray(arg)) {
					opts.tocLevels=arg;
				} else if ($.isPlainObject(arg)) {
					$.extend(opts, arg);
				} else {
					opts.headers=$(arg);
					if (!opts.headers.length) {
						console && console.log && (console.err || console.warn || console.log)("TOC: No headers selected! Invalid header selector: " + arg);
						return;
					}
				}
			};
		}

		// Template: TEMPLATE.NAME:FEATURE1:FEATURE2
		opts.templateDef=(
			$.fn.toc.templates[opts.template]
				||
				$.fn.toc.templates["default"]
		);

		// Resolve aliases and defaults
		for (var k in $.fn.toc.templates["default"]) {
			switch (typeof opts.templateDef[k]) {
			case "string":
				while ($.fn.toc.templates[opts.templateDef[k]]) { // alias
					opts.templateDef[k]=$.fn.toc.templates[opts.templateDef[k]][k];
				}
				break;
			case "undefined":
				opts.templateDef[k]=$.fn.toc.templates["default"][k];
				break;
			}
		}

		// Defaults
		if (!opts.headers) opts.headers=$(opts.tocLevels.join(', '));

		// Do
		this.each(function() {
			var $toc=mkTOC(opts.headers, $(opts.templateDef.layout), opts);
			var $root=$(this);

			// remove .tocContainer
			$('.tocContainer', $toc).contents().unwrap();

			$root.append($toc.addClass('toc ' + ' ' + opts.className + ' ' + opts.templateDef.className));
			opts.templateDef.cleanup.call($toc.get(0));

			// Hooks
			$('.tocLink', $root)
				.on('click', function() {
					scrolling=true;
					return roll($(this), opts, function() {scrolling=false;});
				});

			var timeout=0;
			$(window).on('scroll', function() {
				if (!scrolling && !timeout) {
					var $this=$(this);
					timeout=setTimeout(function() {
						var $active=hl($root, opts.headers, opts);
						timeout=0;
					}, 200);
				}
			});

			hl($root, opts.headers, opts);
		});
		return this;
	};

	$.fn.toc.defaults={
		headers: undefined,
		callback: undefined,
		labeler: function(info) {
			return $(this).text();
		},
		template: 'default',
		offset: 8,
		tocLevels: ["h1", "h2", "h3", "h4", "h5", "h6"],
		className: "",

		// Internal
		templateDef: undefined
	};

	$.fn.toc.templates={
		// .tocLevel (optional) top-level container for each level. If
		// not present then the root element is considered
		// .tocLevel. It will get duplicated into item's .tocSub for
		// each next level. .tocLevel can be nested in .tocItem and
		// contains 2nd level template. If so and there is no next level
		// then .tocLevel will be removed.
		//
		// .tocItem item template - other items will be placed as
		// following siblings.
		//
		// .tocLink clickable element pointing to section.
		//
		// .tocLabel element to append text label to
		//
		// .tocItem.tocSub, .tocItem .tocSub (optional) element to
		// append next level to. If there is no .tocItem .tocLevel and
		// no .tocSub then only one level allowed.
		//
		// .tocContainer element will get removed at the end.
		//
		'default': {
			className: 'tocNumDec tmplDefault',
			layout: '<ol>' +
				'  <li class="tocItem tocSub">' +
				'    <a href="#" class="tocLabel tocLink">…</a>' +
				'  </li>' +
				'</ol>',
			hilite: function($active, opts) {
				$('.tocActive, .tocActiveParent', this).removeClass('tocActive tocActiveParent');
				$active
					.addClass('tocActive')
					.closest('.tocItem')
					.addClass('tocActive')
					.parentsUntil('.toc', '.tocItem')
					.addClass('tocActiveParent');
			},
			cleanup: function() { return; }
		},
		'modern': {
			className: 'tmplDefault tmplModern'
		},
		'elegant': {
			className: 'tmplDefault tmplElegant'
		},
		'simple': {
			className: 'tmplSimple'
		},
		'bootstrap3.dropdown': {
			className: 'tmplBSDropdown',
			layout: '<div class="dropdown">' +
				'  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">' +
				'    <li class="tocItem" role="presentation"><a role="menuitem" tabindex="-1" href="#" class="tocLabel tocLink">…</a></li>' +
				'  </ul>' +
				'</div>',
			hilite: function($active, opts) {
				$('.active', this).removeClass('active');
				$active.closest('li').addClass('active');

				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
			}
		},
		'bootstrap3.buttons': {
			className: 'tmpl',
			layout: '<div class="tocContainer"><div class="btn-group tocItem">' +
				'    <button type="button" class="btn btn-default tocLabel tocLink">…</button>' +
				'    <div class="tocContainer tocLevel">' +
				'      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>' +
				'      <ul class="dropdown-menu" role="menu">' +
				'         <li class="tocItem"><a href="#" class="tocLabel tocLink">…</a></li>' +
				'      </ul>' +
				'    </div>' +
				'</div></div>',
			hilite: function($active, opts) {
				$('.active', this).removeClass('active');
				$active.closest('li').addClass('active');
				$active.closest('.btn-group').find('> button').addClass('active');

				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
			}
		},
		'bootstrap3.pills': {
			className: 'nav nav-pills',
			layout: '<ul><li class="tocItem"><a class="tocLink tocLabel" href="#">Home</a></li></ul>',
			hilite: 'bootstrap3.dropdown'
		},
		'bootstrap3.pills.stacked': {
			className: 'nav nav-pills nav-stacked',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.pills.justified': {
			className: 'nav nav-pills nav-justified',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.pager': {
			className: 'pager',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.list': {
			className: 'list-group',
			layout: '<ul><li class="tocItem list-group-item tocLink tocLabel"></li></ul>',
			hilite: 'bootstrap3.dropdown'
		},
		'bootstrap3.navbar': {
			className: 'nav navbar-nav',
			hilite: function($active, opts) {
				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
				$('.active', this).removeClass('active');
				$active.closest('.toc').find(".tocActive, .tocActiveParent").addClass('active');
			},
			layout: '<ul class="nav navbar-nav">' +
				'  <li class="dropdown tocItem">' +
				'    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown"><span class="tocLabel tocLink">Dropdown</span> <b class="caret"></b></a>' +
				'    <ul class="dropdown-menu tocLevel">' +
				'      <li class="tocItem"><a href="#" class="tocLink tocLabel">Action</a></li>' +
				'    </ul>' +
				'  </li>' +
				'</ul>',
			cleanup: function() {
				var $root=$(this);
				$("> li:not(:has(ul))", $root).each(function() {
					$(this)
						.removeClass("dropdown")
						.find("a")
						.removeAttr("class")
						.removeAttr("data-toggle")
						.find(".caret")
						.remove();
				});
			}
		}
	};

	// Elements
	$(function() {
		$('*[toctemplate], *[tocfroom]').each(function() {
			var $this=$(this);
			$this.toc($this.attr('toctemplate'), $this.attr('tocfrom'), $this.attr('tocoffset'));
		});
	});

	// www.webdevelopers.eu compatibility code
	var licNum="WX-XXXXXX-XXXXXX";
	if (location.protocol.match(/^http/) && !location.hostname.match(/^[0-9.]+$/) && licNum.match(/^W3/)) { // All Trial License Numbers start with 'W3'
		// Parse the Trial serial number into a Javascript date
		var dateStr=licNum.replace(/^W3-(..)(..)(..)-(..)(..)(..)$/, "20$1-$2-$3T$4:$5:$6Z");
		var dlDate=new Date(dateStr);

		// Expired?
		if (dlDate.getTime() &&  dlDate.getTime() + 30 * 24 * 3600000 < (new Date).getTime()) {
			if (confirm('Would you like to obtain a full version of jQuery Elixon TOC?')) {
				window.location="http://www.webdevelopers.eu/jquery/toc/buy?trial=expired";
			}
		}
	}

=======
/**
 * ELIXON TOC
 * Project Homepage: http://www.webdevelopers.eu/jquery/toc
 *
 * LICENSE
 *   Commercial
 *
 * USAGE
 *    $(el).toc([ARG [, ARG]]);
 *
 * ARG can be
 * - jQuery selector selecting the headers
 * - jQuery object containing headers
 * - labeler funcion that returns the header title
 * - template name (format: TEMPLATE.NAME[:FEATURE1[:FEATURE2[...]]] )
 * - offset
 * - level mapping: ex. ["h1, a.header", "h2", "h3", ".example"] (if jQuery selector or object is missing this is used)
 *
 *
 * Examples
 *    $('ul.toc').toc('h2, h3, h4, h5, h6', '#contentBody');
 *    $('div.toc').toc('h2:not(.noTOC), h3:not(.noTOC)');
 *
 * CSS
 * .tocActive - placed on active link and active item
 * .tocActiveParent - placed on active items that are ancestors of .tocActive
 *
 * @project    Elixon CMS, http://www.webdevelopers.eu/
 * @package    JQuery
 * @subpackage TOC
 * @author     Daniel Sevcik <sevcik@webdevelopers.eu>
 * @version    2.1
 * @copyright  2010 Daniel Sevcik
 * @since      2010-11-25T22:15:19+0100
 * @revision   $Revision: 4616 $
 * @access     public
 */
(function($) {
	var scrolling=false;

	jQuery.easing.easeJTOC=function (e,n,t,a,r){
		return a*((n=n/r-1)*n*n*n*n+1)+t;
	};

	var getLevel=function($node, levels) {
		for (var i=0; i < levels.length; i++) {
			if ($node.is(levels[i])) return i+1;
		}
		// Not defined - try to grep the number from H1, H2, ... tag name.
		var node=$node.get(0);
		return parseInt((node.localName || node.tagName || node.nodeName).replace(/[^1-6]/g, '')) || 1;
	};

	var mkId=function(str) {
		var id=strToClass(str),
			c=1,
			ret=id;

		while($('#'+ret).length) {
			ret=id + c++;
		}

		return ret;
	};

	function strToClass(str) {
		var parts=$.trim((str + "").replace(/[^a-z0-9]+/gi, ' ')).split(/ +/);
		var className=(parts[0] || "").toLowerCase();
		for (var i=1; i < parts.length; i++) {
			className+=parts[i].charAt(0).toUpperCase() + parts[i].substr(1);
		}
		return className || "cname";
	}

	function roll($link, opts, callback) {
		var href=$link.attr('href');
		var $target=$(href);

		if (!$target.length) return true;

		var top=$target.offset().top - Math.min(opts.offset, ($(window).height() - opts.offset) / 2);

		activate($link.closest(".toc"), $link, opts);
		$('html, body')
			.stop()
			.animate({'scrollTop': top}, Math.min(Math.abs($(window).scrollTop() - top), 2000), 'easeJTOC', function() {
				callback();
				$('body').trigger('scroll');
			});

		return false;
	};


	function hl($root, $headers, opts) {
		var topMin=-1,
			winHeight=$(window).height() - opts.offset,
			winMin=$(window).scrollTop() + Math.min(opts.offset, winHeight / 2) - 15,
			winMax=winMin + winHeight * 0.5,
			$el=$();

		$.each($headers.get().reverse(), function() {
			var $this=$(this);
			var curr=$this.offset();

			// console.log($root, this,
			// 'if ((', curr.top <= winMin && curr.top > topMin, ') || (', curr.top >= winMin, ' && ', curr.top < winMax, ' && ( ', topMin < winMin, ' || ', topMin > curr.top, '))) = ',
			//			((curr.top <= winMin && curr.top > topMin) || (curr.top >= winMin && curr.top < winMax && (topMin < winMin || topMin > curr.top)))
			//			);
			if ((curr.top <= winMin && curr.top > topMin) || (curr.top >= winMin && curr.top < winMax && (topMin < winMin || topMin > curr.top))) {
				topMin=curr.top;
				$el=$this;
			}
		});

		var $active=$('.tocLink[href="#' + $el.attr('id') + '"]', $root);
		activate($root, $active, opts);

		return $active;
	}

	function activate($root, $active, opts) {
		if ($active.is('.tocSelected')) {
			return;
		}

		$('.tocSelected', $root).removeClass('tocSelected');
		$active.addClass('tocSelected');

		if (!$('.toc', $root).is('.nohiliteFeat')) {
			opts.templateDef.hilite.call($root.get(0), $active, opts);
		}

		if (typeof opts.callback == 'function') {
			opts.callback.call($root.get(0), $active);
		}
	}

	function nextTOC($item, $list, $currTemplate, opts) {
		var $replaceTo;

		if (!$item || !$item.length) return;

		if (!$list.length) { // no children
			$('.tocSub', $item).addClass("noChildren");
			$('.tocLevel', $item).remove();
			return;
		}

		$replaceTo=$item.is(".tocSub") ? $item : $(".tocSub", $item)
			.not($(".tocItem .tocSub, .tocItem.tocSub", $item)); // not inside nested .tocItem
		if ($replaceTo.length) { // append to .tocSub
			$replaceTo.addClass('hasChildren');
			$replaceTo=$('<div></div>').appendTo($replaceTo);
		} else { // Replace .tocLevel
			$replaceTo=$(".tocLevel", $item);
			$replaceTo.parent().addClass('hasChildren');
		}

		if (!$replaceTo.length) return;

		var $template=$(".tocItem .tocLevel", $currTemplate)
			.not($('.tocItem .tocItem .tocLevel', $currTemplate));
		if (!$template.length) {
			$template=$currTemplate;
		};

		var $toc=mkTOC($list, $template, opts);
		if ($toc) {
			$replaceTo.replaceWith($toc);
		}
	}

	function mkTOC($list, $template, opts) {
		if (!$list.length) return null;

		$template.addClass('tocLevel'); // unify - optional class
		var $level=$template.clone(true, true);

		// Template
		var $itemTmpl=$('.tocItem', $level).not($('.tocItem .tocItem', $level));
		var level=getLevel($list.first(), opts.tocLevels); // level of the first item
		var descend=[];
		var $item=false;

		$list.each(function(k, v) {
			if (getLevel($(this), opts.tocLevels) > level) {
				descend.push(this);
				return;
			}

			if (!$(this).attr('id')) {
				$(this).attr('id', mkId($(this).text()));
			}

			nextTOC($item, $(descend), $template, opts);
			descend=[];
			$item=$itemTmpl.clone(true, true);

			// Link
			var $link=($item.is(".tocLink") ? $item : $('.tocLink', $item).not($(".tocItem .tocLink", $item)))
				.not($(".tocItem .tocLink", $item));
			$link.attr('href', '#'+$(this).attr('id'));

			// Label
			var $label=($item.is(".tocLabel") ? $item : $('.tocLabel', $item).not($(".tocItem .tocLabel", $item)));
			$label.text(opts.labeler.call(this, {position: k + 1, label: $label, levelElements: $list, opts: opts}));

			$itemTmpl.before($item);
		});
		nextTOC($item, $(descend), $template, opts);

		$itemTmpl.remove();
		return $level;
	};

	$.fn.toc=function() {
		var opts=$.extend({}, $.fn.toc.defaults);
		for (var i=0; i < arguments.length; i++) {
			var arg=arguments[i];

			switch(typeof arg) {
			case "number":
				opts.offset=parseInt(arg);
				break;
			case "function":
				opts.labeler=arg;
				break;
			case "string":
				// TEMPLATE.NAME:FEATURE1:FEATURE2
				var parts=arg.split(':');
				if ($.fn.toc.templates[parts[0]]) {
					opts.template=parts.shift();
					opts.className+=" "+(parts.length ? parts.join("Feat ") + "Feat" : "");
					break;
				} else if ($.isNumeric(arg)) {
					opts.offset=parseInt(arg);
					break;
				}
				// nobreak;
			case "object":
				if ($.isArray(arg)) {
					opts.tocLevels=arg;
				} else if ($.isPlainObject(arg)) {
					$.extend(opts, arg);
				} else {
					opts.headers=$(arg);
					if (!opts.headers.length) {
						console && console.log && (console.err || console.warn || console.log)("TOC: No headers selected! Invalid header selector: " + arg);
						return;
					}
				}
			};
		}

		// Template: TEMPLATE.NAME:FEATURE1:FEATURE2
		opts.templateDef=(
			$.fn.toc.templates[opts.template]
				||
				$.fn.toc.templates["default"]
		);

		// Resolve aliases and defaults
		for (var k in $.fn.toc.templates["default"]) {
			switch (typeof opts.templateDef[k]) {
			case "string":
				while ($.fn.toc.templates[opts.templateDef[k]]) { // alias
					opts.templateDef[k]=$.fn.toc.templates[opts.templateDef[k]][k];
				}
				break;
			case "undefined":
				opts.templateDef[k]=$.fn.toc.templates["default"][k];
				break;
			}
		}

		// Defaults
		if (!opts.headers) opts.headers=$(opts.tocLevels.join(', '));

		// Do
		this.each(function() {
			var $toc=mkTOC(opts.headers, $(opts.templateDef.layout), opts);
			var $root=$(this);

			// remove .tocContainer
			$('.tocContainer', $toc).contents().unwrap();

			$root.append($toc.addClass('toc ' + ' ' + opts.className + ' ' + opts.templateDef.className));
			opts.templateDef.cleanup.call($toc.get(0));

			// Hooks
			$('.tocLink', $root)
				.on('click', function() {
					scrolling=true;
					return roll($(this), opts, function() {scrolling=false;});
				});

			var timeout=0;
			$(window).on('scroll', function() {
				if (!scrolling && !timeout) {
					var $this=$(this);
					timeout=setTimeout(function() {
						var $active=hl($root, opts.headers, opts);
						timeout=0;
					}, 200);
				}
			});

			hl($root, opts.headers, opts);
		});
		return this;
	};

	$.fn.toc.defaults={
		headers: undefined,
		callback: undefined,
		labeler: function(info) {
			return $(this).text();
		},
		template: 'default',
		offset: 8,
		tocLevels: ["h1", "h2", "h3", "h4", "h5", "h6"],
		className: "",

		// Internal
		templateDef: undefined
	};

	$.fn.toc.templates={
		// .tocLevel (optional) top-level container for each level. If
		// not present then the root element is considered
		// .tocLevel. It will get duplicated into item's .tocSub for
		// each next level. .tocLevel can be nested in .tocItem and
		// contains 2nd level template. If so and there is no next level
		// then .tocLevel will be removed.
		//
		// .tocItem item template - other items will be placed as
		// following siblings.
		//
		// .tocLink clickable element pointing to section.
		//
		// .tocLabel element to append text label to
		//
		// .tocItem.tocSub, .tocItem .tocSub (optional) element to
		// append next level to. If there is no .tocItem .tocLevel and
		// no .tocSub then only one level allowed.
		//
		// .tocContainer element will get removed at the end.
		//
		'default': {
			className: 'tocNumDec tmplDefault',
			layout: '<ol>' +
				'  <li class="tocItem tocSub">' +
				'    <a href="#" class="tocLabel tocLink">…</a>' +
				'  </li>' +
				'</ol>',
			hilite: function($active, opts) {
				$('.tocActive, .tocActiveParent', this).removeClass('tocActive tocActiveParent');
				$active
					.addClass('tocActive')
					.closest('.tocItem')
					.addClass('tocActive')
					.parentsUntil('.toc', '.tocItem')
					.addClass('tocActiveParent');
			},
			cleanup: function() { return; }
		},
		'modern': {
			className: 'tmplDefault tmplModern'
		},
		'elegant': {
			className: 'tmplDefault tmplElegant'
		},
		'simple': {
			className: 'tmplSimple'
		},
		'bootstrap3.dropdown': {
			className: 'tmplBSDropdown',
			layout: '<div class="dropdown">' +
				'  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">' +
				'    <li class="tocItem" role="presentation"><a role="menuitem" tabindex="-1" href="#" class="tocLabel tocLink">…</a></li>' +
				'  </ul>' +
				'</div>',
			hilite: function($active, opts) {
				$('.active', this).removeClass('active');
				$active.closest('li').addClass('active');

				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
			}
		},
		'bootstrap3.buttons': {
			className: 'tmpl',
			layout: '<div class="tocContainer"><div class="btn-group tocItem">' +
				'    <button type="button" class="btn btn-default tocLabel tocLink">…</button>' +
				'    <div class="tocContainer tocLevel">' +
				'      <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>' +
				'      <ul class="dropdown-menu" role="menu">' +
				'         <li class="tocItem"><a href="#" class="tocLabel tocLink">…</a></li>' +
				'      </ul>' +
				'    </div>' +
				'</div></div>',
			hilite: function($active, opts) {
				$('.active', this).removeClass('active');
				$active.closest('li').addClass('active');
				$active.closest('.btn-group').find('> button').addClass('active');

				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
			}
		},
		'bootstrap3.pills': {
			className: 'nav nav-pills',
			layout: '<ul><li class="tocItem"><a class="tocLink tocLabel" href="#">Home</a></li></ul>',
			hilite: 'bootstrap3.dropdown'
		},
		'bootstrap3.pills.stacked': {
			className: 'nav nav-pills nav-stacked',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.pills.justified': {
			className: 'nav nav-pills nav-justified',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.pager': {
			className: 'pager',
			layout: 'bootstrap3.pills',
			hilite: 'bootstrap3.pills'
		},
		'bootstrap3.list': {
			className: 'list-group',
			layout: '<ul><li class="tocItem list-group-item tocLink tocLabel"></li></ul>',
			hilite: 'bootstrap3.dropdown'
		},
		'bootstrap3.navbar': {
			className: 'nav navbar-nav',
			hilite: function($active, opts) {
				$.fn.toc.templates["default"].hilite.call(this, $active, opts);
				$('.active', this).removeClass('active');
				$active.closest('.toc').find(".tocActive, .tocActiveParent").addClass('active');
			},
			layout: '<ul class="nav navbar-nav">' +
				'  <li class="dropdown tocItem">' +
				'    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown"><span class="tocLabel tocLink">Dropdown</span> <b class="caret"></b></a>' +
				'    <ul class="dropdown-menu tocLevel">' +
				'      <li class="tocItem"><a href="#" class="tocLink tocLabel">Action</a></li>' +
				'    </ul>' +
				'  </li>' +
				'</ul>',
			cleanup: function() {
				var $root=$(this);
				$("> li:not(:has(ul))", $root).each(function() {
					$(this)
						.removeClass("dropdown")
						.find("a")
						.removeAttr("class")
						.removeAttr("data-toggle")
						.find(".caret")
						.remove();
				});
			}
		}
	};

	// Elements
	$(function() {
		$('*[toctemplate], *[tocfroom]').each(function() {
			var $this=$(this);
			$this.toc($this.attr('toctemplate'), $this.attr('tocfrom'), $this.attr('tocoffset'));
		});
	});

	// www.webdevelopers.eu compatibility code
	var licNum="WX-XXXXXX-XXXXXX";
	if (location.protocol.match(/^http/) && !location.hostname.match(/^[0-9.]+$/) && licNum.match(/^W3/)) { // All Trial License Numbers start with 'W3'
		// Parse the Trial serial number into a Javascript date
		var dateStr=licNum.replace(/^W3-(..)(..)(..)-(..)(..)(..)$/, "20$1-$2-$3T$4:$5:$6Z");
		var dlDate=new Date(dateStr);

		// Expired?
		if (dlDate.getTime() &&  dlDate.getTime() + 30 * 24 * 3600000 < (new Date).getTime()) {
			if (confirm('Would you like to obtain a full version of jQuery Elixon TOC?')) {
				window.location="http://www.webdevelopers.eu/jquery/toc/buy?trial=expired";
			}
		}
	}

})(jQuery);