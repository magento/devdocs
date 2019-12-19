// semver
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else if (typeof exports === 'object')
    exports["semverLite"] = factory();
  else
    root["semverLite"] = factory();
})(this, function() {
  return /******/ (function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/
      if (installedModules[moduleId]) {
        /******/
        return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = installedModules[moduleId] = {
        /******/
        i: moduleId,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/
      module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
      /******/
      if (!__webpack_require__.o(exports, name)) {
        /******/
        Object.defineProperty(exports, name, {
          /******/
          configurable: false,
          /******/
          enumerable: true,
          /******/
          get: getter
          /******/
        });
        /******/
      }
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
      /******/
      var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
      /******/
      __webpack_require__.d(getter, 'a', getter);
      /******/
      return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
  })
  /************************************************************************/
  /******/
  ([
    /* 0 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      var SemverVersion = __webpack_require__(1);

      var semver = {
        version: '0.0.5',
        SemverVersion: SemverVersion,
        validate: function validate(version) {
          return SemverVersion.validate(version);
        },
        compare: function compare(a, b, needCompareBuildVersion) {
          return new SemverVersion(a).compare(new SemverVersion(b), needCompareBuildVersion);
        },
        format: function format(version) {
          return new SemverVersion(version).format();
        },
        instance: function instance(version) {
          return new SemverVersion(version);
        },
        compareMainVersion: function compareMainVersion(a, b) {
          return new SemverVersion(a).compareMainVersion(new SemverVersion(b));
        },
        gt: function gt(a, b, needCompareBuildVersion) {
          var result = this.compare(a, b, needCompareBuildVersion);
          return result === 1;
        },
        gte: function gte(a, b, needCompareBuildVersion) {
          var result = this.compare(a, b, needCompareBuildVersion);
          return result === 1 || result === 0;
        },
        lt: function lt(a, b, needCompareBuildVersion) {
          var result = this.compare(a, b, needCompareBuildVersion);
          return result === -1;
        },
        lte: function lte(a, b, needCompareBuildVersion) {
          var result = this.compare(a, b, needCompareBuildVersion);
          return result === -1 || result === 0;
        },
        equal: function equal(a, b, needCompareBuildVersion) {
          var result = this.compare(a, b, needCompareBuildVersion);
          return result === 0;
        },
        equalMain: function equalMain(a, b) {
          return new SemverVersion(a).mainVersion === new SemverVersion(b).mainVersion;
        },

        // 主版本转成数字类型方便比较
        mainVersionToNumeric: function mainVersionToNumeric(version) {
          var digit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

          var semverVersion = new SemverVersion(version);
          return semverVersion.mainVersionToNumeric(digit);
        }
      };

      module.exports = semver;

      /***/
    }),
    /* 1 */
    /***/
    (function(module, exports, __webpack_require__) {

      "use strict";


      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var MAX_LENGTH = 256;
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

      // 正则标识
      // 数字，禁止纯数字补 0 
      var NUMERIC_IDENTIFIER = '0|[1-9]\\d*';
      // 数字，字母，横线
      var NUMERIC_LETTERS_IDENTIFIER = '[0-9A-Za-z-]*';
      var BUILD_IDENTIFIER = '[0-9A-Za-z-]+';
      // 数字和字母组合，达到禁止纯数字补0的目的
      var NON_NUMERIC_IDENTIFIER = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
      var MAIN_VERSION_IDENTIFIER = '(' + NUMERIC_IDENTIFIER + ')\\.(' + NUMERIC_IDENTIFIER + ')\\.(' + NUMERIC_IDENTIFIER + ')';
      // 先行版本号，由 ASCII 码的英数字和连接号 [0-9A-Za-z-] 组成，
      // 且“禁止 MUST NOT ”留白。数字型的标识符号“禁止 MUST NOT ”在前方补零
      var PRERELEASE_IDENTIFIER = '(?:' + NUMERIC_IDENTIFIER + '|' + NON_NUMERIC_IDENTIFIER + ')';
      var PRERELEASE = '(?:\\-(' + PRERELEASE_IDENTIFIER + '(?:\\.' + PRERELEASE_IDENTIFIER + ')*))';
      // 编译版本号
      var BUILD = '(?:\\+(' + BUILD_IDENTIFIER + '(?:\\.' + BUILD_IDENTIFIER + ')*))';
      var FULL_VERSION_IDENTIFIER = '^v?' + MAIN_VERSION_IDENTIFIER + PRERELEASE + '?' + BUILD + '?$';

      // 根据正则标识实例化正则
      var REGEX_MAIN_VERSION = new RegExp(MAIN_VERSION_IDENTIFIER);
      var REGEX_FULL_VERSION = new RegExp(FULL_VERSION_IDENTIFIER);
      var REGEX_NUMERIC = /^[0-9]+$/;

      var SemverVersion = function() {
        function SemverVersion(version) {
          _classCallCheck(this, SemverVersion);

          if (version instanceof SemverVersion) {
            return version;
          } else if (typeof version !== 'string') {
            throw new TypeError('Invalid Version: ' + version);
          }

          if (version.length > MAX_LENGTH) {
            throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
          }

          if (!(this instanceof SemverVersion)) {
            return new SemverVersion(version);
          }

          var matches = version.trim().match(REGEX_FULL_VERSION);

          this.rawVersion = version;
          this.major = +matches[1];
          this.minor = +matches[2];
          this.patch = +matches[3];

          this._isThrowVersionNumericError(this.major, 'major');
          this._isThrowVersionNumericError(this.minor, 'minor');
          this._isThrowVersionNumericError(this.patch, 'patch');

          if (matches[4]) {
            this.prereleaseArray = matches[4].split('.').map(function(id) {
              if (REGEX_NUMERIC.test(id)) {
                var num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) {
                  return num;
                }
              }
              return id;
            });
          } else {
            this.prereleaseArray = [];
          }

          //this.build = matches[5] ? matches[5].split('.') : [];

          this.prerelease = matches[4];
          this.build = matches[5];
          this.mainVersion = [this.major, this.minor, this.patch].join('.');
          this.version = this.mainVersion + (this.prerelease ? '-' + this.prerelease : '') + (this.build ? '+' + this.build : '');
        }

        _createClass(SemverVersion, [{
          key: '_isThrowVersionNumericError',
          value: function _isThrowVersionNumericError(versionNumber, versionName) {
            if (versionNumber > MAX_SAFE_INTEGER || this.major < 0) {
              throw new TypeError('Invalid ' + versionName + ' version');
            }
          }
        }, {
          key: '_isNumeric',
          value: function _isNumeric(numeric) {
            return REGEX_NUMERIC.test(numeric);
          }
        }, {
          key: '_padNumber',
          value: function _padNumber(num, fill) {
            var length = ('' + num).length;
            return Array(fill > length ? fill - length + 1 || 0 : 0).join(0) + num;
          }
        }, {
          key: 'mainVersionToNumeric',
          value: function mainVersionToNumeric(digit) {
            var numericStr = [this._padNumber(this.major, digit), this._padNumber(this.minor, digit), this._padNumber(this.patch, digit)].join('');
            return parseInt(numericStr);
          }
        }, {
          key: 'compare',
          value: function compare(other) {
            var needCompareBuildVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var otherSemver = other;
            if (!(other instanceof SemverVersion)) {
              otherSemver = new SemverVersion(other);
            }
            var result = this.compareMainVersion(otherSemver) || this.comparePreReleaseVersion(otherSemver);
            if (!result && needCompareBuildVersion) {
              return this.compareBuildVersion(otherSemver);
            } else {
              return result;
            }
          }

          // 比较数字

        }, {
          key: 'compareNumeric',
          value: function compareNumeric(a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
          }
        }, {
          key: 'compareIdentifiers',
          value: function compareIdentifiers(a, b) {
            var aIsNumeric = this._isNumeric(a);
            var bIsNumeric = this._isNumeric(b);
            if (aIsNumeric && bIsNumeric) {
              a = +a;
              b = +b;
            }
            // 字符比数字大
            if (aIsNumeric && !bIsNumeric) {
              return -1;
            } else if (bIsNumeric && !aIsNumeric) {
              return 1;
            } else {
              return this.compareNumeric(a, b);
            }
          }
        }, {
          key: 'compareMainVersion',
          value: function compareMainVersion(otherSemver) {
            return this.compareNumeric(this.major, otherSemver.major) || this.compareNumeric(this.minor, otherSemver.minor) || this.compareNumeric(this.patch, otherSemver.patch);
          }
        }, {
          key: 'comparePreReleaseVersion',
          value: function comparePreReleaseVersion(otherSemver) {
            if (this.prereleaseArray.length && !otherSemver.prereleaseArray.length) {
              return -1;
            } else if (!this.prereleaseArray.length && otherSemver.prereleaseArray.length) {
              return 1;
            } else if (!this.prereleaseArray.length && !otherSemver.prereleaseArray.length) {
              return 0;
            }
            var i = 0;
            do {
              var a = this.prereleaseArray[i];
              var b = otherSemver.prereleaseArray[i];
              if (a === undefined && b === undefined) {
                return 0;
              } else if (b === undefined) {
                return 1;
              } else if (a === undefined) {
                return -1;
              } else if (a === b) {
                continue;
              } else {
                return this.compareIdentifiers(a, b);
              }
            } while (++i);
          }
        }, {
          key: 'compareBuildVersion',
          value: function compareBuildVersion(otherSemver) {
            if (this.build && !otherSemver.build) {
              return 1;
            } else if (!this.build && otherSemver.build) {
              return -1;
            } else {
              return this.compareIdentifiers(this.build, otherSemver.build);
            }
          }
        }], [{
          key: 'validate',
          value: function validate(version) {
            return REGEX_FULL_VERSION.test(version);
          }
        }]);

        return SemverVersion;
      }();

      module.exports = SemverVersion;

      /***/
    })
    /******/
  ]);
});






jQuery.noConflict();
jQuery("#unsupported").hide();
jQuery("#timeline").hide();
jQuery.ajaxSetup({
  async: false
});

google.charts.load('current', {
  'packages': ['timeline']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var container1 = document.getElementById('magentotimeline');
  var chart1 = new google.visualization.Timeline(container1);
  var dataTable1 = new google.visualization.DataTable();

  dataTable1.addColumn({
    type: 'string',
    id: 'Feature'
  });
  dataTable1.addColumn({
    type: 'string',
    id: 'Version'
  });
  dataTable1.addColumn({
    type: 'string',
    id: 'style',
    role: 'style'
  });
  dataTable1.addColumn({
    type: 'date',
    id: 'Start'
  });
  dataTable1.addColumn({
    type: 'date',
    id: 'End'
  });

  var verRows = new Array();

  // TODO - add new version here on release
  var versionsToList = ["2.1", "2.2", "2.2.10", "2.3", "2.3.3", "2.3.4"];
  var versionJSON = {};
  var today = new Date();
  var components = [
    ['PHP', '7.1'],
    ['PHP', '7.2'],
    ['PHP', '7.3'],
    ['Varnish', '4.x'],
    ['Varnish', '6.x'],
    ['Redis', '5.4'],
    ['MariaDB', '10.1'],
    ['MariaDB', '10.2'],
    ['MariaDB', '10.3'],
    ['ElasticSearch', '6.x'],
    ['RabbitMQ', '3.5'],
    ['RabbitMQ', '3.7'],
    ['RabbitMQ', '3.8'],
    ['ECE Tools', '2002.0.22']
  ];

  jQuery.each(versionsToList, function(key, val) {
    jQuery.getJSON("https://raw.githubusercontent.com/piotrekkaminski/magento-version-compatibility/master/magento/" + val + ".json", function(data) {
      versionJSON[val] = data;
      if (data.dateEnd == '') {
        data.dateEnd = "2023-01-01";
      }
      var color = "red";
      if (countCharacters('.', val) == 1) {
        if (today <= new Date(data.dateEnd)) {
          color = "grey";
        } else {
          color = "red";
        }
      } else {
        // merge JSON with parent
        var mergeResult = deepmerge(versionJSON[val.substr(0, 3)], data);
        data = mergeResult;
        versionJSON[val] = data;

        // check if version is less than EOL
        if (today <= new Date(data.dateEnd)) {
    	if(today > new Date(data.dateStart)) {
              color = "green";

          } else {
            color = "red";
          
          }
                  } else {
          color = "red";
        }
      }
      console.log(data);
      verRows.push(['Magento ' + val, '', color, new Date(data.dateStart), new Date(data.dateEnd)]);
    });

  });
  verRows.push(['You should be running', 'Today', 'blue', today, today]);

  dataTable1.addRows(verRows);

  chart1.draw(dataTable1);

  MarkToday('magentotimeline', -1);

  google.visualization.events.addListener(chart1, 'onmouseover', function(obj) {
    MarkToday('magentotimeline', obj.row);
  });

  google.visualization.events.addListener(chart1, 'onmouseout', function(obj) {
    MarkToday('magentotimeline', -1);
  });

  google.visualization.events.addListener(chart1, 'select', function() {
    selection = chart1.getSelection();
    console.log(selection);
    if (selection.length > 0) {
      var verNum = selection[0].row;
      var dataV = versionJSON[versionsToList[verNum]];
      if (today <= new Date(dataV.dateEnd)) {
        jQuery("#timeline").show();
        jQuery("#unsupported").hide();
        dataTable2.removeRows(0, dataTable2.getNumberOfRows());
        console.log("supported version " + versionsToList[verNum]);
        if (dataV.require) {
          if (Object.keys(dataV.require).length) {
            Object.keys(dataV.require).forEach(key => {

              console.log("\n" + key + ": " + dataV.require[key]);
              var compVer = dataV.require[key];
              var comp = key;
              compVer = compVer.replace(/\*/g, "0");
              console.log("semver" + compVer);
              var vmaj = semverLite.instance(compVer).major;
              var vmin = semverLite.instance(compVer).minor;
              console.log("requesting " + comp + "-" + vmaj + "." + vmin + ".json");
              // request component major.minor
              jQuery.getJSON("https://raw.githubusercontent.com/piotrekkaminski/magento-version-compatibility/master/components/" + comp + "-" + vmaj + "." + vmin + ".json", function(dataC) {
                var latest = dataC.latest;
                console.log('latest version is ' + latest);
                var cDateStart = dataC.dateStart;
                var cDateEnd = dataC.dateEnd;
                var cVer = vmaj + "." + vmin;
                // check for latest version
                // request component latest version
                if (latest) {
            	cVer = latest;
                  jQuery.getJSON("https://raw.githubusercontent.com/piotrekkaminski/magento-version-compatibility/master/components/" + comp + "-" + latest + ".json", function(dataCC) {
                    console.log("latest subversion data:");
                    console.log(dataCC);
                    if (dataCC.dateStart) {
                      cDateStart = dataCC.dateStart;
                    }
                    if (dataCC.dateEnd) {
                      cDateEnd = dataCC.dateEnd;
                    }
                  });
                }
                console.log("add row for  " + comp + " "+cVer + " dt: " + cDateStart + "-" + cDateEnd);
                var cColor = "pink";
                 if (today <= new Date(cDateEnd)) {
                    cColor = "green";
                  if(today < new Date(cDateStart)) {
                    cColor = "red";
                  }
                 } else {
                    cColor = "red";
                 }
				dataTable2.addRow([comp, cVer, cColor, new Date(cDateStart), new Date(cDateEnd) ]);
              });



            });
          }



        }
        jQuery.each(components, function(key, val) {
          //	

        });
        dataTable2.addRow(['You should be running', 'Today', 'blue', today, today]);
        chart2.draw(dataTable2);
      } else {
        jQuery("#timeline").hide();
        jQuery("#unsupported").show();
      }

    }
  });


  var container2 = document.getElementById('timeline');
  var chart2 = new google.visualization.Timeline(container2)

  var dataTable2 = new google.visualization.DataTable();

  dataTable2.addColumn({
    type: 'string',
    id: 'Feature'
  });
  dataTable2.addColumn({
    type: 'string',
    id: 'Version'
  });
  dataTable2.addColumn({
    type: 'string',
    id: 'style',
    role: 'style'
  });
  dataTable2.addColumn({
    type: 'date',
    id: 'Start'
  });
  dataTable2.addColumn({
    type: 'date',
    id: 'End'
  });



  //chart2.draw(dataTableTemplate2);




  google.visualization.events.addListener(chart2, 'onmouseover', function(obj) {
    MarkToday('timeline', obj.row);
  });

  google.visualization.events.addListener(chart2, 'onmouseout', function(obj) {
    MarkToday('timeline', -1);
  });
}




function MarkToday(div, filaActual) {

  var altura = 0;
  jQuery('#' + div + ' rect').each(function(index) {
    yValor = parseFloat(jQuery(this).attr('y'));
    xValor = parseFloat(jQuery(this).attr('x'));
    if (yValor == 0 && yValor == 0) {
      altura = parseFloat(jQuery(this).attr('height'))
    };
  });

  jQuery('#' + div + ' text:contains("Today")').css('font-size', '0px').attr('fill', '#A6373C').prev().first().attr('height', altura + 'px').attr('width', '1px').attr('y', '0');

  if (filaActual != -1) {
    if (0 == filaActual)
      jQuery('.google-visualization-tooltip').css('display', 'none');
    else
      jQuery('.google-visualization-tooltip').css('display', 'inline');
  }






}

function countCharacters(char, string) {
  return string.split('').reduce((acc, ch) => ch === char ? acc + 1 : acc, 0)
}

function isMergeableObject(val) {
  var nonNullObject = val && typeof val === 'object'

  return nonNullObject &&
    Object.prototype.toString.call(val) !== '[object RegExp]' &&
    Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
  var clone = optionsArgument && optionsArgument.clone === true
  return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
  var destination = target.slice()
  source.forEach(function(e, i) {
    if (typeof destination[i] === 'undefined') {
      destination[i] = cloneIfNecessary(e, optionsArgument)
    } else if (isMergeableObject(e)) {
      destination[i] = deepmerge(target[i], e, optionsArgument)
    } else if (target.indexOf(e) === -1) {
      destination.push(cloneIfNecessary(e, optionsArgument))
    }
  })
  return destination
}

function mergeObject(target, source, optionsArgument) {
  var destination = {}
  if (isMergeableObject(target)) {
    Object.keys(target).forEach(function(key) {
      destination[key] = cloneIfNecessary(target[key], optionsArgument)
    })
  }
  Object.keys(source).forEach(function(key) {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneIfNecessary(source[key], optionsArgument)
    } else {
      destination[key] = deepmerge(target[key], source[key], optionsArgument)
    }
  })
  return destination
}

function deepmerge(target, source, optionsArgument) {
  var array = Array.isArray(source);
  var options = optionsArgument || {
    arrayMerge: defaultArrayMerge
  }
  var arrayMerge = options.arrayMerge || defaultArrayMerge

  if (array) {
    return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
  } else {
    return mergeObject(target, source, optionsArgument)
  }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
  if (!Array.isArray(array) || array.length < 2) {
    throw new Error('first argument should be an array with at least two elements')
  }

  // we are sure there are at least 2 values, so it is safe to have no initial value
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, optionsArgument)
  })
}
