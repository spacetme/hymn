"format register";

System.register("~/shims/react", [], function($__export) {
  "use strict";
  var __moduleName = "~/shims/react";
  function require(path) {
    return $traceurRuntime.require("~/shims/react", path);
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', window.React);
    }
  };
});



System.register("lib/run", [], function($__export) {
  "use strict";
  var __moduleName = "lib/run";
  function require(path) {
    return $traceurRuntime.require("lib/run", path);
  }
  function run(promise) {
    promise.catch((function(e) {
      return console.error(e.stack);
    }));
  }
  $__export("default", run);
  return {
    setters: [],
    execute: function() {
    }
  };
});



(function() {
function define(){};  define.amd = {};
(function(global, factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  var arr = [];
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var support = {};
  var document = window.document,
      version = "2.1.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    selector: "",
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this);
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function(callback, args) {
      return jQuery.each(this, callback, args);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor(null);
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
    },
    isPlainObject: function(obj) {
      if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
        return false;
      }
      return true;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      var script,
          indirect = eval;
      code = jQuery.trim(code);
      if (code) {
        if (code.indexOf("use strict") === 1) {
          script = document.createElement("script");
          script.text = code;
          document.head.appendChild(script).parentNode.removeChild(script);
        } else {
          indirect(code);
        }
      }
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback, args) {
      var value,
          i = 0,
          length = obj.length,
          isArray = isArraylike(obj);
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var value,
          i = 0,
          length = elems.length,
          isArray = isArraylike(elems),
          ret = [];
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArraylike(obj) {
    var length = obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + -(new Date()),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        strundefined = typeof undefined,
        MAX_NEGATIVE = 1 << 31,
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = arr.indexOf || function(elem) {
          var i = 0,
              len = this.length;
          for (; i < len; i++) {
            if (this[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        identifier = characterEncoding.replace("w", "w#"),
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + characterEncoding + ")"),
          "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
          "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        rescape = /'|\\/g,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        };
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var match,
          elem,
          m,
          nodeType,
          i,
          groups,
          old,
          nid,
          newContext,
          newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }
      context = context || document;
      results = results || [];
      if (!selector || typeof selector !== "string") {
        return results;
      }
      if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
        return [];
      }
      if (documentIsHTML && !seed) {
        if ((match = rquickExpr.exec(selector))) {
          if ((m = match[1])) {
            if (nodeType === 9) {
              elem = context.getElementById(m);
              if (elem && elem.parentNode) {
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, context.getElementsByTagName(selector));
            return results;
          } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
            push.apply(results, context.getElementsByClassName(m));
            return results;
          }
        }
        if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
          nid = old = expando;
          newContext = context;
          newSelector = nodeType === 9 && selector;
          if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
            groups = tokenize(selector);
            if ((old = context.getAttribute("id"))) {
              nid = old.replace(rescape, "\\$&");
            } else {
              context.setAttribute("id", nid);
            }
            nid = "[id='" + nid + "'] ";
            i = groups.length;
            while (i--) {
              groups[i] = nid + toSelector(groups[i]);
            }
            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            newSelector = groups.join(",");
          }
          if (newSelector) {
            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {} finally {
              if (!old) {
                context.removeAttribute("id");
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement("div");
      try {
        return !!fn(div);
      } catch (e) {
        return false;
      } finally {
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
        div = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = attrs.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== strundefined && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          doc = node ? node.ownerDocument || node : preferredDoc,
          parent = doc.defaultView;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = doc.documentElement;
      documentIsHTML = !isXML(doc);
      if (parent && parent !== parent.top) {
        if (parent.addEventListener) {
          parent.addEventListener("unload", function() {
            setDocument();
          }, false);
        } else if (parent.attachEvent) {
          parent.attachEvent("onunload", function() {
            setDocument();
          });
        }
      }
      support.attributes = assert(function(div) {
        div.className = "i";
        return !div.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(div) {
        div.appendChild(doc.createComment(""));
        return !div.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function(div) {
        div.innerHTML = "<div class='a'></div><div class='a i'></div>";
        div.firstChild.className = "i";
        return div.getElementsByClassName("i").length === 2;
      });
      support.getById = assert(function(div) {
        docElem.appendChild(div).id = expando;
        return !doc.getElementsByName || !doc.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== strundefined && documentIsHTML) {
            var m = context.getElementById(id);
            return m && m.parentNode ? [m] : [];
          }
        };
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
      } else {
        delete Expr.find["ID"];
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== strundefined) {
          return context.getElementsByTagName(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(doc.querySelectorAll))) {
        assert(function(div) {
          div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
          if (div.querySelectorAll("[msallowclip^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!div.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!div.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
        });
        assert(function(div) {
          var input = doc.createElement("input");
          input.setAttribute("type", "hidden");
          div.appendChild(input).setAttribute("name", "D");
          if (div.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (!div.querySelectorAll(":enabled").length) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          div.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(div) {
          support.disconnectedMatch = matches.call(div, "div");
          matches.call(div, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return doc;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                outerCache,
                node,
                diff,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                diff = cache[1];
              } else {
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf.call(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": function(elem) {
          return elem.disabled === false;
        },
        "disabled": function(elem) {
          return elem.disabled === true;
        },
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function(elem, context, xml) {
        var oldCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                outerCache[dir] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            return (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context !== document && context;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(div1) {
      return div1.compareDocumentPosition(document.createElement("div")) & 1;
    });
    if (!assert(function(div) {
      div.innerHTML = "<a href='#'></a>";
      return div.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(div) {
      div.innerHTML = "<input/>";
      div.firstChild.setAttribute("value", "");
      return div.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(div) {
      return div.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }
      qualifier = jQuery.filter(qualifier, elements);
    }
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) >= 0) !== not;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          len = this.length,
          ret = [],
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = jQuery.fn.init = function(selector, context) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem && elem.parentNode) {
                this.length = 1;
                this[0] = elem;
              }
              this.context = document;
              this.selector = selector;
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || rootjQuery).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this.context = this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
        }
        if (selector.selector !== undefined) {
          this.selector = selector.selector;
          this.context = selector.context;
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.extend({
    dir: function(elem, dir, until) {
      var matched = [],
          truncate = until !== undefined;
      while ((elem = elem[dir]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    },
    sibling: function(n, elem) {
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }
      return matched;
    }
  });
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
            matched.push(cur);
            break;
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.unique(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnotwhite = (/\S+/g);
  var optionsCache = {};
  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);
    var memory,
        fired,
        firing,
        firingStart,
        firingLength,
        firingIndex,
        list = [],
        stack = !options.once && [],
        fire = function(data) {
          memory = options.memory && data;
          fired = true;
          firingIndex = firingStart || 0;
          firingStart = 0;
          firingLength = list.length;
          firing = true;
          for (; list && firingIndex < firingLength; firingIndex++) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false;
              break;
            }
          }
          firing = false;
          if (list) {
            if (stack) {
              if (stack.length) {
                fire(stack.shift());
              }
            } else if (memory) {
              list = [];
            } else {
              self.disable();
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              var start = list.length;
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  var type = jQuery.type(arg);
                  if (type === "function") {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && type !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (firing) {
                firingLength = list.length;
              } else if (memory) {
                firingStart = start;
                fire(memory);
              }
            }
            return this;
          },
          remove: function() {
            if (list) {
              jQuery.each(arguments, function(_, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (firing) {
                    if (index <= firingLength) {
                      firingLength--;
                    }
                    if (index <= firingIndex) {
                      firingIndex--;
                    }
                  }
                }
              });
            }
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
          },
          empty: function() {
            list = [];
            firingLength = 0;
            return this;
          },
          disable: function() {
            list = stack = memory = undefined;
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            stack = undefined;
            if (!memory) {
              self.disable();
            }
            return this;
          },
          locked: function() {
            return !stack;
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              if (firing) {
                stack.push(args);
              } else {
                fire(args);
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            then: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                    } else {
                      newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(subordinate) {
      var i = 0,
          resolveValues = slice.call(arguments),
          length = resolveValues.length,
          remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
          deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
          updateFunc = function(i, contexts, values) {
            return function(value) {
              contexts[i] = this;
              values[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (values === progressValues) {
                deferred.notifyWith(contexts, values);
              } else if (!(--remaining)) {
                deferred.resolveWith(contexts, values);
              }
            };
          },
          progressValues,
          progressContexts,
          resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  var readyList;
  jQuery.fn.ready = function(fn) {
    jQuery.ready.promise().done(fn);
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed, false);
    window.removeEventListener("load", completed, false);
    jQuery.ready();
  }
  jQuery.ready.promise = function(obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === "complete") {
        setTimeout(jQuery.ready);
      } else {
        document.addEventListener("DOMContentLoaded", completed, false);
        window.addEventListener("load", completed, false);
      }
    }
    return readyList.promise(obj);
  };
  jQuery.ready.promise();
  var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
  };
  jQuery.acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    Object.defineProperty(this.cache = {}, 0, {get: function() {
        return {};
      }});
    this.expando = jQuery.expando + Math.random();
  }
  Data.uid = 1;
  Data.accepts = jQuery.acceptData;
  Data.prototype = {
    key: function(owner) {
      if (!Data.accepts(owner)) {
        return 0;
      }
      var descriptor = {},
          unlock = owner[this.expando];
      if (!unlock) {
        unlock = Data.uid++;
        try {
          descriptor[this.expando] = {value: unlock};
          Object.defineProperties(owner, descriptor);
        } catch (e) {
          descriptor[this.expando] = unlock;
          jQuery.extend(owner, descriptor);
        }
      }
      if (!this.cache[unlock]) {
        this.cache[unlock] = {};
      }
      return unlock;
    },
    set: function(owner, data, value) {
      var prop,
          unlock = this.key(owner),
          cache = this.cache[unlock];
      if (typeof data === "string") {
        cache[data] = value;
      } else {
        if (jQuery.isEmptyObject(cache)) {
          jQuery.extend(this.cache[unlock], data);
        } else {
          for (prop in data) {
            cache[prop] = data[prop];
          }
        }
      }
      return cache;
    },
    get: function(owner, key) {
      var cache = this.cache[this.key(owner)];
      return key === undefined ? cache : cache[key];
    },
    access: function(owner, key, value) {
      var stored;
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        stored = this.get(owner, key);
        return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          name,
          camel,
          unlock = this.key(owner),
          cache = this.cache[unlock];
      if (key === undefined) {
        this.cache[unlock] = {};
      } else {
        if (jQuery.isArray(key)) {
          name = key.concat(key.map(jQuery.camelCase));
        } else {
          camel = jQuery.camelCase(key);
          if (key in cache) {
            name = [key, camel];
          } else {
            name = camel;
            name = name in cache ? [name] : (name.match(rnotwhite) || []);
          }
        }
        i = name.length;
        while (i--) {
          delete cache[name[i]];
        }
      }
    },
    hasData: function(owner) {
      return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
    },
    discard: function(owner) {
      if (owner[this.expando]) {
        delete this.cache[owner[this.expando]];
      }
    }
  };
  var data_priv = new Data();
  var data_user = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {}
        data_user.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return data_user.hasData(elem) || data_priv.hasData(elem);
    },
    data: function(elem, name, data) {
      return data_user.access(elem, name, data);
    },
    removeData: function(elem, name) {
      data_user.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return data_priv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      data_priv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = data_user.get(elem);
          if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            data_priv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          data_user.set(this, key);
        });
      }
      return access(this, function(value) {
        var data,
            camelKey = jQuery.camelCase(key);
        if (elem && value === undefined) {
          data = data_user.get(elem, key);
          if (data !== undefined) {
            return data;
          }
          data = data_user.get(elem, camelKey);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, camelKey, undefined);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        this.each(function() {
          var data = data_user.get(this, camelKey);
          data_user.set(this, camelKey, value);
          if (key.indexOf("-") !== -1 && data !== undefined) {
            data_user.set(this, key, value);
          }
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        data_user.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = data_priv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = data_priv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return data_priv.get(elem, key) || data_priv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          data_priv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = data_priv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHidden = function(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var strundefined = typeof undefined;
  support.focusinBubbles = "onfocusin" in window;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = data_priv.hasData(elem) && data_priv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        data_priv.remove(elem, "events");
      }
    },
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") >= 0) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function(event) {
      event = jQuery.event.fix(event);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (data_priv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          matches,
          sel,
          handleObj,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.disabled !== true || event.type !== "click") {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(event, original) {
        var eventDoc,
            doc,
            body,
            button = original.button;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }
        return event;
      }
    },
    fix: function(event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    },
    simulate: function(type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true,
        originalEvent: {}
      });
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && e.preventDefault) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && e.stopPropagation) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  if (!support.focusinBubbles) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = data_priv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          data_priv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = data_priv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            data_priv.remove(doc, fix);
          } else {
            data_priv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on: function(types, selector, data, fn, one) {
      var origFn,
          type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          fn = data;
          data = undefined;
        } else {
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }
      if (one === 1) {
        origFn = fn;
        fn = function(event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return this.each(function() {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function(types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (data_priv.hasData(src)) {
      pdataOld = data_priv.access(src);
      pdataCur = data_priv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (data_user.hasData(src)) {
      udataOld = data_user.access(src);
      udataCur = jQuery.extend({}, udataOld);
      data_user.set(dest, udataCur);
    }
  }
  function getAll(context, tag) {
    var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  jQuery.extend({
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    buildFragment: function(elems, context, scripts, selection) {
      var elem,
          tmp,
          tag,
          wrap,
          contains,
          j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;
      for (; i < l; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i = 0;
      while ((elem = nodes[i++])) {
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }
        contains = jQuery.contains(elem.ownerDocument, elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (contains) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while ((elem = tmp[j++])) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          key,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (jQuery.acceptData(elem)) {
          key = elem[data_priv.expando];
          if (key && (data = data_priv.cache[key])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (data_priv.cache[key]) {
              delete data_priv.cache[key];
            }
          }
        }
        delete data_user.cache[elem[data_user.expando]];
      }
    }
  });
  jQuery.fn.extend({
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return this.domManip(arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return this.domManip(arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return this.domManip(arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove: function(selector, keepData) {
      var elem,
          elems = selector ? jQuery.filter(selector, this) : this,
          i = 0;
      for (; (elem = elems[i]) != null; i++) {
        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }
        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }
      return this;
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, "<$1></$2>");
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var arg = arguments[0];
      this.domManip(arguments, function(elem) {
        arg = this.parentNode;
        jQuery.cleanData(getAll(this));
        if (arg) {
          arg.replaceChild(elem, this);
        }
      });
      return arg && (arg.length || arg.nodeType) ? this : this.remove();
    },
    detach: function(selector) {
      return this.remove(selector, true);
    },
    domManip: function(args, callback) {
      args = concat.apply([], args);
      var fragment,
          first,
          scripts,
          hasScripts,
          node,
          doc,
          i = 0,
          l = this.length,
          set = this,
          iNoClone = l - 1,
          value = args[0],
          isFunction = jQuery.isFunction(value);
      if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
        return this.each(function(index) {
          var self = set.eq(index);
          if (isFunction) {
            args[0] = value.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }
      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i < l; i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(this[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src) {
                  if (jQuery._evalUrl) {
                    jQuery._evalUrl(node.src);
                  }
                } else {
                  jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                }
              }
            }
          }
        }
      }
      return this;
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var iframe,
      elemdisplay = {};
  function actualDisplay(name, doc) {
    var style,
        elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
    elem.detach();
    return display;
  }
  function defaultDisplay(nodeName) {
    var doc = document,
        display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === "none" || !display) {
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
        doc = iframe[0].contentDocument;
        doc.write();
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
  };
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
    }
    if (computed) {
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  (function() {
    var pixelPositionVal,
        boxSizingReliableVal,
        docElem = document.documentElement,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
    container.appendChild(div);
    function computePixelPositionAndBoxSizingReliable() {
      div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
      div.innerHTML = "";
      docElem.appendChild(container);
      var divStyle = window.getComputedStyle(div, null);
      pixelPositionVal = divStyle.top !== "1%";
      boxSizingReliableVal = divStyle.width === "4px";
      docElem.removeChild(container);
    }
    if (window.getComputedStyle) {
      jQuery.extend(support, {
        pixelPosition: function() {
          computePixelPositionAndBoxSizingReliable();
          return pixelPositionVal;
        },
        boxSizingReliable: function() {
          if (boxSizingReliableVal == null) {
            computePixelPositionAndBoxSizingReliable();
          }
          return boxSizingReliableVal;
        },
        reliableMarginRight: function() {
          var ret,
              marginDiv = div.appendChild(document.createElement("div"));
          marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
          marginDiv.style.marginRight = marginDiv.style.width = "0";
          div.style.width = "1px";
          docElem.appendChild(container);
          ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);
          docElem.removeChild(container);
          return ret;
        }
      });
    }
  })();
  jQuery.swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        origName = name,
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
        val = 0;
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true,
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  function showHide(elements, show) {
    var display,
        elem,
        hidden,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = data_priv.get(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);
        if (display !== "none" || !hidden) {
          data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }
    return elements;
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += "px";
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
      }
    };
  });
  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
    if (computed) {
      return jQuery.swap(elem, {"display": "inline-block"}, curCSS, [elem, "marginRight"]);
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || "swing";
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = {"*": [function(prop, value) {
          var tween = this.createTween(prop, value),
              target = tween.cur(),
              parts = rfxnum.exec(value),
              unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
              start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
              scale = 1,
              maxIterations = 20;
          if (start && start[3] !== unit) {
            unit = unit || start[3];
            parts = parts || [];
            start = +target || 1;
            do {
              scale = scale || ".5";
              start = start / scale;
              jQuery.style(tween.elem, prop, start + unit);
            } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
          }
          if (parts) {
            start = tween.start = +start || +target || 0;
            tween.unit = unit;
            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
          }
          return tween;
        }]};
  function createFxNow() {
    setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (tweeners[prop] || []).concat(tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = data_priv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      display = jQuery.css(elem, "display");
      checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
        style.display = "inline-block";
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      } else {
        display = undefined;
      }
    }
    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = data_priv.access(elem, "fxshow", {});
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function() {
          jQuery(elem).hide();
        });
      }
      anim.done(function() {
        var prop;
        data_priv.remove(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {specialEasing: {}}, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.split(" ");
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function(callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || data_priv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = data_priv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = data_priv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = setTimeout(next, time);
      hooks.stop = function() {
        clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var nodeHook,
      boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var hooks,
          ret,
          nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === strundefined) {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + "");
          return value;
        }
      } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        ret = jQuery.find.attr(elem, name);
        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function(elem, value) {
      var name,
          propName,
          i = 0,
          attrNames = value && value.match(rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;
          if (jQuery.expr.match.bool.test(name)) {
            elem[propName] = false;
          }
          elem.removeAttribute(name);
        }
      }
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}}
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle;
      if (!isXML) {
        handle = attrHandle[name];
        attrHandle[name] = ret;
        ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
        attrHandle[name] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function(elem, name, value) {
      var ret,
          hooks,
          notxml,
          nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem[name] = value);
      } else {
        return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
      }
    },
    propHooks: {tabIndex: {get: function(elem) {
          return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
        }}}
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      }};
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  var rclass = /[\t\r\n\f]/g;
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = typeof value === "string" && value,
          i = 0,
          len = this.length;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = jQuery.trim(cur);
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          proceed = arguments.length === 0 || typeof value === "string" && value,
          i = 0,
          len = this.length;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = value ? jQuery.trim(cur) : "";
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function() {
        if (type === "string") {
          var className,
              i = 0,
              self = jQuery(this),
              classNames = value.match(rnotwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (type === strundefined || type === "boolean") {
          if (this.className) {
            data_priv.set(this, "__className__", this.className);
          }
          this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
        }
      });
    },
    hasClass: function(selector) {
      var className = " " + selector + " ",
          i = 0,
          l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : jQuery.trim(jQuery.text(elem));
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one" || index < 0,
              values = one ? null : [],
              max = one ? index + 1 : options.length,
              i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if ((option.selected = jQuery.inArray(option.value, values) >= 0)) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseJSON = function(data) {
    return JSON.parse(data + "");
  };
  jQuery.parseXML = function(data) {
    var xml,
        tmp;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      tmp = new DOMParser();
      xml = tmp.parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var ajaxLocParts,
      ajaxLocation,
      rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*");
  try {
    ajaxLocation = location.href;
  } catch (e) {
    ajaxLocation = document.createElement("a");
    ajaxLocation.href = "";
    ajaxLocation = ajaxLocation.href;
  }
  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": jQuery.parseJSON,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          parts,
          fireGlobals,
          i,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          state = 0,
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (state === 2) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return state === 2 ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              var lname = name.toLowerCase();
              if (!state) {
                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (!state) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (state < 2) {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                } else {
                  jqXHR.always(map[jqXHR.status]);
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  jQuery.expr.filters.hidden = function(elem) {
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
  };
  jQuery.expr.filters.visible = function(elem) {
    return !jQuery.expr.filters.hidden(elem);
  };
  var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, value) {
          value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&").replace(r20, "+");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };
  var xhrId = 0,
      xhrCallbacks = {},
      xhrSuccessStatus = {
        0: 200,
        1223: 204
      },
      xhrSupported = jQuery.ajaxSettings.xhr();
  if (window.ActiveXObject) {
    jQuery(window).on("unload", function() {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key]();
      }
    });
  }
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr(),
              id = ++xhrId;
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                delete xhrCallbacks[id];
                callback = xhr.onload = xhr.onerror = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  complete(xhr.status, xhr.statusText);
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {text: xhr.responseText} : undefined, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          xhr.onerror = callback("error");
          callback = xhrCallbacks[id] = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /(?:java|ecma)script/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            async: true,
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        window[callbackName] = overwritten;
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;
    var parsed = rsingleTag.exec(data),
        scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = jQuery.buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  var _load = jQuery.fn.load;
  jQuery.fn.load = function(url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off >= 0) {
      selector = jQuery.trim(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type,
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).complete(callback && function(jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }
    return this;
  };
  jQuery.expr.filters.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  var docElem = window.document.documentElement;
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          elem = this[0],
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      if (!doc) {
        return;
      }
      docElem = doc.documentElement;
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }
      if (typeof elem.getBoundingClientRect !== strundefined) {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent || docElem;
        while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  jQuery.fn.size = function() {
    return this.length;
  };
  jQuery.fn.andSelf = jQuery.fn.addBack;
  if (typeof define === "function" && define.amd) {
    System.register("github:components/jquery@2.1.1/jquery", [], false, function(__require, __exports, __module) {
      return (function() {
        return jQuery;
      }).call(this);
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (typeof noGlobal === strundefined) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
}));


})();
System.register("~/audio", [], function($__export) {
  "use strict";
  var __moduleName = "~/audio";
  function require(path) {
    return $traceurRuntime.require("~/audio", path);
  }
  var AudioContext,
      context;
  function pipeFrom(from) {
    return function(to) {
      var $__1;
      for (var rest = [],
          $__0 = 1; $__0 < arguments.length; $__0++)
        rest[$__0 - 1] = arguments[$__0];
      ($__1 = from).connect.apply($__1, $traceurRuntime.spread([to], rest));
      return pipeFrom(to);
    };
  }
  function pipe(node) {
    return pipeFrom(node);
  }
  function time() {
    return context.currentTime;
  }
  $__export("pipe", pipe);
  $__export("time", time);
  return {
    setters: [],
    execute: function() {
      AudioContext = window.AudioContext || window.webkitAudioContext;
      context = $__export("context", new AudioContext());
      $__export('default', context);
    }
  };
});



System.register("~/midi/note", [], function($__export) {
  "use strict";
  var __moduleName = "~/midi/note";
  function require(path) {
    return $traceurRuntime.require("~/midi/note", path);
  }
  function mtof(m) {
    return Math.pow(2, (m - 69) / 12) * 440;
  }
  $__export("mtof", mtof);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("~/metrics", [], function($__export) {
  "use strict";
  var __moduleName = "~/metrics";
  function require(path) {
    return $traceurRuntime.require("~/metrics", path);
  }
  function x(time) {
    return time / 1000 * 64;
  }
  function time(x) {
    return x * 1000 / 64;
  }
  function y(note) {
    return (96 - note) * 5;
  }
  $__export("x", x);
  $__export("time", time);
  $__export("y", y);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("~/task", ["jquery"], function($__export) {
  "use strict";
  var __moduleName = "~/task";
  function require(path) {
    return $traceurRuntime.require("~/task", path);
  }
  var $;
  function task(name, promise) {
    var el = $("<div class=\"task\">\n                <div class=\"task--progress-container\">\n                  <div class=\"task--progress\" style=\"width: 0%\"></div>\n                </div>\n                <div class=\"task--text\"></div>\n              </div>").appendTo('#progress');
    el.find('.task--text').html(name);
    promise.then(function() {
      el.find('.task--progress').width('100%');
      setTimeout(function() {
        el.remove();
      }, 100);
    });
    return promise;
  }
  $__export("default", task);
  return {
    setters: [function(m) {
      $ = m.default;
    }],
    execute: function() {
    }
  };
});



System.register("~/config", [], function($__export) {
  "use strict";
  var __moduleName = "~/config";
  function require(path) {
    return $traceurRuntime.require("~/config", path);
  }
  var AUDIO_DELAY;
  return {
    setters: [],
    execute: function() {
      AUDIO_DELAY = $__export("AUDIO_DELAY", 100);
    }
  };
});



System.register("lib/io", ["js-yaml"], function($__export) {
  "use strict";
  var __moduleName = "lib/io";
  function require(path) {
    return $traceurRuntime.require("lib/io", path);
  }
  var yaml;
  function loadFile(url) {
    var responseType = arguments[1] !== (void 0) ? arguments[1] : 'arraybuffer';
    return new Promise(function(resolve, reject) {
      var xh = new XMLHttpRequest();
      xh.open('GET', url, true);
      xh.onload = function() {
        resolve(xh.response);
      };
      xh.onerror = function() {
        reject(new Error(("Error: " + xh.status)));
      };
      xh.responseType = responseType;
      xh.send();
    });
  }
  function loadYaml(url) {
    return loadFile(url, 'text').then(function(text) {
      return yaml.safeLoad(text);
    });
  }
  $__export("loadFile", loadFile);
  $__export("loadYaml", loadYaml);
  return {
    setters: [function(m) {
      yaml = m.default;
    }],
    execute: function() {
    }
  };
});



System.register("~/views/lyrics", ["react", "ramda"], function($__export) {
  "use strict";
  var __moduleName = "~/views/lyrics";
  function require(path) {
    return $traceurRuntime.require("~/views/lyrics", path);
  }
  var React,
      R,
      C,
      ColumnView,
      process;
  return {
    setters: [function(m) {
      React = m.default;
    }, function(m) {
      R = m.default;
    }],
    execute: function() {
      C = (function(tag, className, opts) {
        var $__4;
        for (var blah = [],
            $__1 = 3; $__1 < arguments.length; $__1++)
          blah[$__1 - 3] = arguments[$__1];
        return ($__4 = React).createElement.apply($__4, $traceurRuntime.spread([tag, Object.assign({className: className}, opts)], blah));
      });
      ColumnView = React.createClass({
        render: function() {
          var $__0 = this;
          var main = this.props.main ? ' is-main' : '';
          return C('div', 'lyrics-display--column' + main, {}, C('ul', 'tabs', {}, this.props.tabs.map((function(tab) {
            return C('li', $__0.active(tab) ? 'is-active' : '', {
              key: tab.title,
              onClick: (function(e) {
                return $__0.selectTab(tab);
              }),
              tabIndex: 0
            }, tab.title);
          }))), C('div', 'lyrics-display--content', {}, C('pre', 'lyrics-data', {}, this.state.activeTab.content)));
        },
        getInitialState: function() {
          return {activeTab: this.props.tabs[0]};
        },
        active: function(tab) {
          return tab == this.state.activeTab;
        },
        selectTab: function(tab) {
          this.setState({activeTab: tab});
        }
      });
      process = R.pipe(R.toPairs, R.map((function($__2) {
        var $__3 = $__2,
            title = $__3[0],
            content = $__3[1];
        return ({
          title: title,
          content: content
        });
      })), R.partition((function(tab) {
        return tab.title.match(/^\d+$/);
      })));
      $__export('default', React.createClass({
        render: function() {
          var data = process(this.getData());
          var children = [React.createElement(ColumnView, {
            tabs: data[0],
            key: 0,
            main: true
          })];
          if (data[1].length > 0) {
            children.push(React.createElement(ColumnView, {
              tabs: data[1],
              key: 1,
              main: false
            }));
          }
          return React.createElement('div', {className: 'lyrics-display'}, children);
        },
        getInitialState: function() {
          return {lang: 'th'};
        },
        getData: function() {
          return this.props.data[this.state.lang];
        },
        renderNotes: function() {
          var $__0 = this;
          var application = this.props.application;
          var notes = application.notes;
          return notes.map((function(note, index) {
            return $__0.renderNote(note, index);
          }));
        },
        renderNote: function(note, index) {
          var application = this.props.application;
          var player = application.player;
          var focus = note.channel === application.options.channel;
          var active = false;
          var score = focus ? application.scores.get(note) : undefined;
          var time = player.time();
          if (time !== undefined && time >= note.time)
            active = true;
          return React.createElement(NoteView, {
            note: note,
            key: index,
            player: player,
            focus: focus,
            active: active,
            score: score
          });
        }
      }));
    }
  };
});



System.register("lib/evolve", ["ramda"], function($__export) {
  "use strict";
  var __moduleName = "lib/evolve";
  function require(path) {
    return $traceurRuntime.require("lib/evolve", path);
  }
  var ramda,
      mixin,
      mapObj,
      curry;
  return {
    setters: [function(m) {
      ramda = m.default;
    }],
    execute: function() {
      var $__0;
      (($__0 = ramda, mixin = $__0.mixin, mapObj = $__0.mapObj, curry = $__0.curry, $__0));
      $__export('default', curry(function evolve(object, transformations) {
        return mixin(object, mapObj.idx((function(f, k) {
          return f(object[k]);
        }), transformations));
      }));
    }
  };
});



System.register("~/views/note", ["react", "../metrics"], function($__export) {
  "use strict";
  var __moduleName = "~/views/note";
  function require(path) {
    return $traceurRuntime.require("~/views/note", path);
  }
  var React,
      Metrics;
  return {
    setters: [function(m) {
      React = m.default;
    }, function(m) {
      Metrics = m;
    }],
    execute: function() {
      $__export('default', React.createClass({
        render: function() {
          return React.createElement('div', {
            className: this.classes(),
            style: this.style(this.props.note),
            'data-channel': this.props.note.channel,
            'data-time': this.props.note.time
          });
        },
        classes: function() {
          var out = ['note'];
          var time = this.props.player.time();
          if (this.props.focus) {
            out.push('is-focus');
          }
          if (this.props.active) {
            out.push('is-active');
          }
          return out.join(' ');
        },
        style: function(note) {
          var left = Metrics.x(note.time);
          var top = Metrics.y(note.note);
          var width = Metrics.x(note.endTime) - Metrics.x(note.time);
          var color = this.getColor();
          return {
            left: left,
            top: top,
            width: width,
            backgroundColor: color
          };
        },
        getColor: function() {
          var color = '';
          var score = this.props.score;
          if (score !== undefined) {
            var r = 1,
                g = 0;
            var c = (function(v) {
              return Math.round(v * 255);
            });
            if (score < 0.5) {
              g = score / 0.5;
            } else {
              g = 1;
              r = (1 - score) * 2;
            }
            color = 'rgb(' + c(r) + ',' + c(g) + ',0)';
          }
          return color;
        }
      }));
    }
  };
});



(function() {
function define(){};  define.amd = {};
System.register("github:components/jquery@2.1.1", ["github:components/jquery@2.1.1/jquery"], false, function(__require, __exports, __module) {
  return (function(main) {
    return main;
  }).call(this, __require('github:components/jquery@2.1.1/jquery'));
});


})();
System.register("~/microphone", ["co", "lib/run", "./audio", "ramda", "jquery", "./midi/note", "./metrics", "./task"], function($__export) {
  "use strict";
  var __moduleName = "~/microphone";
  function require(path) {
    return $traceurRuntime.require("~/microphone", path);
  }
  var co,
      run,
      pipe,
      context,
      R,
      $,
      mtof,
      Metrics,
      task,
      note,
      NAME;
  function request() {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      navigator.getUserMedia({audio: true}, resolve, reject);
    });
  }
  function nextFrame() {
    return new Promise((function(resolve) {
      return requestAnimationFrame((function() {
        return resolve(true);
      }));
    }));
  }
  function text(midi) {
    return (NAME[midi % 12] + (Math.floor(midi / 12) - 1));
  }
  function start() {
    run(co($traceurRuntime.initGeneratorFunction(function $__1() {
      var $__0,
          microphone,
          streamSource,
          analyser,
          lp,
          hp,
          bin,
          array,
          highest,
          max,
          maxTotal,
          i,
          midi,
          total,
          frequency,
          harmonic,
          $__2,
          $__3;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return task('Requesting microphone', request());
            case 2:
              microphone = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              streamSource = context.createMediaStreamSource(microphone);
              analyser = Object.assign(context.createAnalyser(), {fftSize: 2048});
              lp = Object.assign(context.createBiquadFilter(), {type: 'lowpass'});
              lp.frequency.value = 3400;
              hp = Object.assign(context.createBiquadFilter(), {type: 'highpass'});
              hp.frequency.value = 85;
              bin = (function(freq) {
                return Math.floor(freq / (context.sampleRate / 2) * analyser.frequencyBinCount);
              });
              pipe(streamSource)(hp)(lp)(analyser);
              array = new Uint8Array(analyser.frequencyBinCount);
              highest = 0;
              $ctx.state = 15;
              break;
            case 15:
              $__2 = nextFrame();
              $ctx.state = 10;
              break;
            case 10:
              $ctx.state = 6;
              return $__2;
            case 6:
              $__3 = $ctx.sent;
              $ctx.state = 8;
              break;
            case 8:
              $ctx.state = ($__3) ? 11 : -2;
              break;
            case 11:
              analyser.getByteFrequencyData(array);
              highest = ($__0 = Math).max.apply($__0, $traceurRuntime.spread([highest], array));
              max = -1;
              maxTotal = -1;
              for (i = 5 * 21; i <= 5 * 96; i++) {
                midi = i / 5;
                total = 0;
                frequency = mtof(midi);
                for (harmonic = 1; harmonic <= 8; harmonic++) {
                  total += array[bin(frequency * harmonic)] / harmonic;
                }
                if (total > maxTotal) {
                  maxTotal = total;
                  max = midi;
                }
              }
              $('#sing').css('top', Metrics.y(max));
              $('#sing-text').text(text(Math.ceil(max)));
              $__export("note", note = max);
              $ctx.state = 15;
              break;
            default:
              return $ctx.end();
          }
      }, $__1, this);
    })));
  }
  $__export("start", start);
  return {
    setters: [function(m) {
      co = m.default;
    }, function(m) {
      run = m.default;
    }, function(m) {
      pipe = m.pipe;
      context = m.context;
    }, function(m) {
      R = m.default;
    }, function(m) {
      $ = m.default;
    }, function(m) {
      mtof = m.mtof;
    }, function(m) {
      Metrics = m;
    }, function(m) {
      task = m.default;
    }],
    execute: function() {
      note = $__export("note", 0);
      NAME = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    }
  };
});



System.register("~/lyrics", ["react", "./views/lyrics"], function($__export) {
  "use strict";
  var __moduleName = "~/lyrics";
  function require(path) {
    return $traceurRuntime.require("~/lyrics", path);
  }
  var React,
      LyricsView;
  function display(data) {
    React.render(React.createElement(LyricsView, {data: data}), document.querySelector('#lyrics'));
  }
  $__export("display", display);
  return {
    setters: [function(m) {
      React = m.default;
    }, function(m) {
      LyricsView = m.default;
    }],
    execute: function() {
    }
  };
});



System.register("app/lib/notes", ["ramda", "lib/evolve"], function($__export) {
  "use strict";
  var __moduleName = "app/lib/notes";
  function require(path) {
    return $traceurRuntime.require("app/lib/notes", path);
  }
  var ramda,
      assoc,
      pick,
      omit,
      append,
      evolve,
      emptyBuilder;
  function handleEvent(builder, event) {
    if (event.velocity > 0) {
      return evolve(builder, {active: assoc(noteId(event), event)});
    } else {
      var id = noteId(event);
      if (builder.active[id]) {
        var start = builder.active[id];
        return evolve(builder, {
          active: omit([id]),
          notes: append(createNote(start, event))
        });
      }
    }
  }
  function noteId($__0) {
    var $__1 = $__0,
        channel = $__1.channel,
        note = $__1.note;
    return (channel + ":" + note);
  }
  function createNote(start, finish) {
    var $__0 = start,
        time = $__0.time,
        position = $__0.position,
        channel = $__0.channel,
        note = $__0.note;
    var $__1 = finish,
        endTime = $__1.time,
        endPosition = $__1.position;
    return {
      time: time,
      endTime: endTime,
      position: position,
      endPosition: endPosition,
      channel: channel,
      note: note
    };
  }
  $__export("handleEvent", handleEvent);
  return {
    setters: [function(m) {
      ramda = m.default;
    }, function(m) {
      evolve = m.default;
    }],
    execute: function() {
      var $__0;
      (($__0 = ramda, assoc = $__0.assoc, pick = $__0.pick, omit = $__0.omit, append = $__0.append, $__0));
      emptyBuilder = $__export("emptyBuilder", {
        notes: [],
        active: {}
      });
    }
  };
});



System.register("~/views/notes", ["react", "./note"], function($__export) {
  "use strict";
  var __moduleName = "~/views/notes";
  function require(path) {
    return $traceurRuntime.require("~/views/notes", path);
  }
  var React,
      NoteView;
  return {
    setters: [function(m) {
      React = m.default;
    }, function(m) {
      NoteView = m.default;
    }],
    execute: function() {
      $__export('default', React.createClass({
        render: function() {
          return React.createElement('div', {className: 'notes'}, this.renderNotes());
        },
        renderNotes: function() {
          var $__0 = this;
          var application = this.props.application;
          var notes = application.notes;
          return notes.map((function(note, index) {
            return $__0.renderNote(note, index);
          }));
        },
        renderNote: function(note, index) {
          var application = this.props.application;
          var player = application.player;
          var focus = note.channel === application.options.channel;
          var active = false;
          var score = focus ? application.scores.get(note) : undefined;
          var time = player.time();
          if (time !== undefined && time >= note.time)
            active = true;
          return React.createElement(NoteView, {
            note: note,
            key: index,
            player: player,
            focus: focus,
            active: active,
            score: score
          });
        }
      }));
    }
  };
});



System.register("~/models/song", ["npm:midievents", "app/lib/notes"], function($__export) {
  "use strict";
  var __moduleName = "~/models/song";
  function require(path) {
    return $traceurRuntime.require("~/models/song", path);
  }
  var MIDIEvents,
      emptyBuilder,
      handleEvent,
      NOTE_ON,
      NOTE_OFF,
      TIME_SIGNATURE;
  function getNotes(midi) {
    var events = midi.getEvents();
    var position = 0;
    var builder = emptyBuilder;
    for (var $__0 = events[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      var event = $__1.value;
      {
        var $__2 = event,
            delta = $__2.delta,
            time = $__2.playTime,
            subtype = $__2.subtype,
            param1 = $__2.param1,
            param2 = $__2.param2,
            channel = $__2.channel;
        position += delta;
        if (subtype == NOTE_ON && param2 > 0) {
          builder = handleEvent(builder, {
            time: time,
            position: position,
            channel: channel,
            note: param1,
            velocity: param2
          });
        } else if (subtype == NOTE_ON || subtype == NOTE_OFF) {
          builder = handleEvent(builder, {
            time: time,
            position: position,
            channel: channel,
            note: param1,
            velocity: 0
          });
        }
      }
    }
    return builder.notes;
  }
  function create(midi) {
    return {
      ppqn: midi.header.getTicksPerBeat(),
      notes: getNotes(midi)
    };
  }
  $__export("create", create);
  return {
    setters: [function(m) {
      MIDIEvents = m.default;
    }, function(m) {
      emptyBuilder = m.emptyBuilder;
      handleEvent = m.handleEvent;
    }],
    execute: function() {
      var $__2;
      (($__2 = MIDIEvents, NOTE_ON = $__2.EVENT_MIDI_NOTE_ON, NOTE_OFF = $__2.EVENT_MIDI_NOTE_OFF, TIME_SIGNATURE = $__2.EVENT_META_TIME_SIGNATURE, $__2));
    }
  };
});



System.register("~/player", ["ramda", "./audio", "heap", "lib/run", "co", "./midi/note", "eventemitter3"], function($__export) {
  "use strict";
  var __moduleName = "~/player";
  function require(path) {
    return $traceurRuntime.require("~/player", path);
  }
  var R,
      context,
      pipe,
      currentTime,
      Heap,
      run,
      co,
      mtof,
      EventEmitter,
      sortNotes,
      getChannels,
      Synth,
      Voice,
      PlayInstance;
  function wait(ms) {
    return new Promise((function(resolve) {
      return setTimeout((function() {
        return resolve(true);
      }), ms);
    }));
  }
  return {
    setters: [function(m) {
      R = m.default;
    }, function(m) {
      context = m.context;
      pipe = m.pipe;
      currentTime = m.time;
    }, function(m) {
      Heap = m.default;
    }, function(m) {
      run = m.default;
    }, function(m) {
      co = m.default;
    }, function(m) {
      mtof = m.mtof;
    }, function(m) {
      EventEmitter = m.default;
    }],
    execute: function() {
      sortNotes = R.sortBy(R.prop('startTime'));
      getChannels = R.pipe(R.map(R.prop('channel')), R.uniq);
      Synth = (function() {
        var Synth = function Synth() {
          this.voices = {};
        };
        return ($traceurRuntime.createClass)(Synth, {voice: function(n) {
            return this.voices[n] || (this.voices[n] = new Voice(n));
          }}, {});
      }());
      Voice = (function() {
        var Voice = function Voice(channel) {
          var oscilator = context.createOscillator();
          oscilator.type = 'square';
          oscilator.frequency.value = 440;
          var gain = context.createGain();
          gain.gain.value = 0.0;
          oscilator.start(audio.currentTime);
          var volume = context.createGain();
          volume.gain.value = channel == 3 ? 0 : 0.1;
          pipe(oscilator)(gain)(volume)(context.destination);
          this.osc = oscilator;
          this.gain = gain;
          this._volume = volume;
          this.noteId = 0;
        };
        return ($traceurRuntime.createClass)(Voice, {
          get volume() {
            return this._volume.gain.value;
          },
          set volume(volume) {
            this._volume.gain.value = volume;
          },
          start: function(note, time) {
            var $__0 = this;
            var id = ++this.noteId;
            this.gain.gain.cancelScheduledValues(time);
            this.gain.gain.setValueAtTime(1, time);
            this.gain.gain.exponentialRampToValueAtTime(0.5, time + 0.25);
            this.osc.frequency.setValueAtTime(mtof(note), time);
            return (function(stopTime) {
              if (id != $__0.noteId)
                return;
              $__0.gain.gain.cancelScheduledValues(stopTime);
              $__0.gain.gain.setValueAtTime($__0.gain.gain.value, stopTime);
              $__0.gain.gain.linearRampToValueAtTime(0, stopTime + 0.1);
            });
          },
          stop: function() {
            this.gain.gain.cancelScheduledValues(0);
            this.gain.gain.value = 0;
          }
        }, {});
      }());
      PlayInstance = (function() {
        var PlayInstance = function PlayInstance($__4) {
          var $__5 = $__4,
              player = $__5.player,
              notes = $__5.notes,
              start = $__5.start,
              options = $__5.options;
          var $__0 = this;
          this.stopped = false;
          this.player = player;
          this.options = options;
          this.channels = R.fromPairs(R.map((function(ch) {
            return [ch, $__0.voice(ch)];
          }), getChannels(notes)));
          this.queue = this._getInitialQueue(notes);
          this.startAudioTime = currentTime() * 1000;
          this.startNoteTime = start;
          this.play();
        };
        return ($traceurRuntime.createClass)(PlayInstance, {
          voice: function(ch) {
            var voice = this.player.synth.voice(ch);
            var volume = 0.2;
            if (ch == this.options.channel) {
              volume = 0;
            }
            voice.volume = volume;
            return voice;
          },
          _getInitialQueue: function(notes) {
            var $__0 = this;
            var events = R.map((function(note) {
              return {
                time: note.time,
                f: (function(t) {
                  return $__0.start(note, t);
                })
              };
            }), notes);
            var queue = new Heap((function(a, b) {
              return a.time - b.time;
            }));
            for (var $__2 = events[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              var event = $__3.value;
              queue.push(event);
            }
            return queue;
          },
          time: function() {
            return currentTime() * 1000 - this.startAudioTime + this.startNoteTime;
          },
          play: function() {
            run(co($traceurRuntime.initGeneratorFunction(function $__6() {
              var time,
                  event,
                  audioTime;
              return $traceurRuntime.createGeneratorInstance(function($ctx) {
                while (true)
                  switch ($ctx.state) {
                    case 0:
                      $ctx.state = (!this.stopped && !this.queue.empty()) ? 5 : -2;
                      break;
                    case 5:
                      time = this.time() + 300;
                      while (!this.queue.empty() && time >= this.queue.peek().time) {
                        event = this.queue.pop();
                        audioTime = Math.max((event.time - this.startNoteTime + this.startAudioTime) / 1000, currentTime());
                        event.f(audioTime);
                      }
                      this.player.emit('time', this.time());
                      $ctx.state = 6;
                      break;
                    case 6:
                      $ctx.state = 2;
                      return wait(1000 / 60);
                    case 2:
                      $ctx.maybeThrow();
                      $ctx.state = 0;
                      break;
                    default:
                      return $ctx.end();
                  }
              }, $__6, this);
            }).bind(this)));
          },
          stop: function() {
            this.stopped = true;
            for (var $__2 = R.values(this.channels)[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              var channel = $__3.value;
              {
                channel.stop();
              }
            }
          },
          start: function(note, audioTime) {
            var stop = this.channels[note.channel].start(note.note, audioTime);
            this.queue.push({
              time: note.endTime - 33,
              f: (function(t) {
                return stop(t);
              })
            });
          }
        }, {});
      }());
      $__export('default', (function($__super) {
        var Player = function Player() {
          this.synth = new Synth();
        };
        return ($traceurRuntime.createClass)(Player, {
          time: function() {
            return this.playing ? this.playing.time() : undefined;
          },
          stop: function() {
            if (this.playing) {
              this.playing.stop();
              this.playing = null;
            }
          },
          play: function(notes, start, options) {
            this.stop();
            notes = R.reject((function(note) {
              return note.endTime < start;
            }), notes);
            this.playing = new PlayInstance({
              player: this,
              notes: notes,
              start: start,
              options: options
            });
          }
        }, {}, $__super);
      }(EventEmitter)));
    }
  };
});



System.register("~/application", ["eventemitter3", "./player", "ramda", "./microphone", "./config"], function($__export) {
  "use strict";
  var __moduleName = "~/application";
  function require(path) {
    return $traceurRuntime.require("~/application", path);
  }
  var EventEmitter,
      Player,
      R,
      Microphone,
      Config;
  return {
    setters: [function(m) {
      EventEmitter = m.default;
    }, function(m) {
      Player = m.default;
    }, function(m) {
      R = m.default;
    }, function(m) {
      Microphone = m;
    }, function(m) {
      Config = m;
    }],
    execute: function() {
      $__export('default', (function($__super) {
        var Application = function Application() {
          var $__0 = this;
          this.song = undefined;
          this.options = {channel: 0};
          this.player = new Player();
          this.player.on('time', (function(pos) {
            return $__0.update(pos);
          }));
          this.scores = new Map();
        };
        return ($traceurRuntime.createClass)(Application, {
          get song() {
            return this._song;
          },
          set song(song) {
            this._song = song;
            this.emit('update');
          },
          setOptions: function(options) {
            this.options = R.mixin(this.options, options);
            this.emit('update');
          },
          get notes() {
            return this._song ? this._song.notes : [];
          },
          update: function(time) {
            if (!this.song)
              return;
            for (var $__2 = this.song.notes[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              var note = $__3.value;
              {
                if (time >= note.time && time < note.endTime + Config.AUDIO_DELAY) {
                  if (Microphone.note) {
                    var deviation = Math.max(0, Math.abs(Microphone.note - note.note) - 0.25);
                    var score = Math.exp(-deviation / 2);
                    var oldScore = this.scores.get(note) || 0;
                    this.scores.set(note, Math.max(oldScore, score));
                  }
                }
              }
            }
            this.emit('update');
          },
          play: function(start) {
            if (!this.song)
              return;
            this.player.play(this.song.notes, start, this.options);
            this.scores = new Map();
          },
          stop: function() {
            this.player.stop();
          },
          get playing() {
            return !!this.player.playing;
          }
        }, {}, $__super);
      }(EventEmitter)));
    }
  };
});



System.register("~/index", ["midifile", "co", "react", "lib/run", "js-yaml", "jquery", "./application", "./task", "lib/io", "./lyrics", "./models/song", "./metrics", "./microphone", "./views/notes"], function($__export) {
  "use strict";
  var __moduleName = "~/index";
  function require(path) {
    return $traceurRuntime.require("~/index", path);
  }
  var MIDIFile,
      co,
      React,
      run,
      yaml,
      $,
      Application,
      task,
      IO,
      Lyrics,
      Song,
      Metrics,
      Microphone,
      NotesView,
      loadMidi,
      loadMetadata,
      initializeApplication,
      selectSong;
  function render(application) {
    React.render(React.createElement(NotesView, {application: application}), document.querySelector('#notes'));
    var time = application.player.time();
    if (time !== undefined) {
      $('#notes-scroll').each(function() {
        this.scrollLeft = Metrics.x(time) - this.offsetWidth / 4;
      });
    }
  }
  function songlistWaitClick($songlist) {
    return new Promise(function(resolve) {
      $songlist.on('click', '[data-song]', function() {
        var x = $(this).attr('data-song');
        history.pushState({}, '', '?f=' + x);
        resolve(x);
      });
    });
  }
  return {
    setters: [function(m) {
      MIDIFile = m.default;
    }, function(m) {
      co = m.default;
    }, function(m) {
      React = m.default;
    }, function(m) {
      run = m.default;
    }, function(m) {
      yaml = m.default;
    }, function(m) {
      $ = m.default;
    }, function(m) {
      Application = m.default;
    }, function(m) {
      task = m.default;
    }, function(m) {
      IO = m;
    }, function(m) {
      Lyrics = m;
    }, function(m) {
      Song = m;
    }, function(m) {
      Metrics = m;
    }, function(m) {
      Microphone = m;
    }, function(m) {
      NotesView = m.default;
    }],
    execute: function() {
      loadMidi = co.wrap($traceurRuntime.initGeneratorFunction(function $__2(fileName, application) {
        var buffer,
            midi,
            song;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = 2;
                return task(("Loading " + fileName), IO.loadFile(fileName));
              case 2:
                buffer = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                midi = new MIDIFile(buffer);
                song = Song.create(midi);
                application.song = song;
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__2, this);
      }));
      loadMetadata = co.wrap($traceurRuntime.initGeneratorFunction(function $__3(fileName, application) {
        var yaml;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = 2;
                return task(("Loading " + fileName), IO.loadYaml(fileName));
              case 2:
                yaml = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                Lyrics.display(yaml.lyrics);
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__3, this);
      }));
      initializeApplication = co.wrap($traceurRuntime.initGeneratorFunction(function $__4(application) {
        function doRender() {
          render(application);
        }
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                Microphone.start();
                application.on('update', doRender);
                doRender();
                $('#notes-scroll').on('click', '.note', function(event) {
                  if (application.playing)
                    return true;
                  var channel = +this.dataset.channel;
                  if (application.options.channel === channel) {
                    var time = +this.dataset.time;
                    application.play(time);
                  } else {
                    application.setOptions({channel: channel});
                  }
                  return false;
                });
                $('#notes-scroll').on('click', function(event) {
                  if (application.playing) {
                    application.stop();
                  } else {
                    var x = event.clientX - this.getBoundingClientRect().left + this.scrollLeft;
                    var time = Metrics.time(x);
                    application.play(time);
                  }
                });
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__4, this);
      }));
      selectSong = co.wrap($traceurRuntime.initGeneratorFunction(function $__5() {
        var $welcome,
            yaml,
            $songlist,
            $ul,
            $__0,
            $__1,
            song,
            result;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $welcome = $('#welcome').show();
                $ctx.state = 12;
                break;
              case 12:
                $ctx.state = 2;
                return IO.loadYaml('./hymns/index.yml');
              case 2:
                yaml = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                $songlist = $('#songlist');
                $songlist.find('.js-songlist-loading').hide();
                $ul = $('<ul class="song-list"></ul>').appendTo($songlist);
                for ($__0 = yaml[$traceurRuntime.toProperty(Symbol.iterator)](); !($__1 = $__0.next()).done; ) {
                  song = $__1.value;
                  {
                    $('<a href="javascript://"></a>').text(song.name).attr('data-song', song.id).appendTo($('<li></li>').appendTo($ul));
                  }
                }
                $ctx.state = 14;
                break;
              case 14:
                $ctx.state = 6;
                return songlistWaitClick($songlist);
              case 6:
                result = $ctx.sent;
                $ctx.state = 8;
                break;
              case 8:
                $welcome.hide();
                $ctx.state = 16;
                break;
              case 16:
                $ctx.returnValue = result;
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__5, this);
      }));
      run(co($traceurRuntime.initGeneratorFunction(function $__6() {
        var application,
            m,
            song,
            baseName,
            midiName,
            metadataName,
            $__7,
            $__8,
            $__9,
            $__10;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $('#app-loading').hide();
                application = new Application();
                m = location.search.match(/f=([^&]+)/);
                $ctx.state = 17;
                break;
              case 17:
                $ctx.state = (m) ? 9 : 5;
                break;
              case 9:
                $__7 = m[1];
                $__10 = $__7;
                $ctx.state = 10;
                break;
              case 5:
                $__8 = selectSong();
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return $__8;
              case 2:
                $__9 = $ctx.sent;
                $ctx.state = 4;
                break;
              case 4:
                $__10 = $__9;
                $ctx.state = 10;
                break;
              case 10:
                song = $__10;
                $ctx.state = 13;
                break;
              case 13:
                baseName = './hymns/' + song;
                midiName = baseName + '.mid';
                metadataName = baseName + '.yml';
                window.onpopstate = (function() {
                  return location.reload();
                });
                $ctx.state = 19;
                break;
              case 19:
                $ctx.returnValue = Promise.all([loadMidi(midiName, application), loadMetadata(metadataName), initializeApplication(application)]);
                $ctx.state = -2;
                break;
              default:
                return $ctx.end();
            }
        }, $__6, this);
      })));
    }
  };
});



System.register("npm:midifile@0.2.0/src/MIDIFileHeader", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midifile@0.2.0/src/MIDIFileHeader.js";
  var __dirname = "jspm_packages/npm/midifile@0.2.0/src";
function MIDIFileHeader(buffer, strictMode) {
  if (!buffer) {
    var a = new Uint8Array(MIDIFileHeader.HEADER_LENGTH);
    a[0] = 0x4D;
    a[1] = 0x54;
    a[2] = 0x68;
    a[3] = 0x64;
    a[4] = 0x00;
    a[5] = 0x00;
    a[6] = 0x00;
    a[7] = 0x06;
    a[8] = 0x00;
    a[9] = 0x01;
    a[10] = 0x00;
    a[11] = 0x01;
    a[12] = 0x00;
    a[13] = 0xC0;
    this.datas = new DataView(a.buffer, 0, MIDIFileHeader.HEADER_LENGTH);
  } else {
    if (!(buffer instanceof ArrayBuffer))
      throw Error('Invalid buffer received.');
    this.datas = new DataView(buffer, 0, MIDIFileHeader.HEADER_LENGTH);
    if (!('M' === String.fromCharCode(this.datas.getUint8(0)) && 'T' === String.fromCharCode(this.datas.getUint8(1)) && 'h' === String.fromCharCode(this.datas.getUint8(2)) && 'd' === String.fromCharCode(this.datas.getUint8(3)))) {
      throw new Error('Invalid MIDIFileHeader : MThd prefix not found');
    }
    if (6 !== this.datas.getUint32(4)) {
      throw new Error('Invalid MIDIFileHeader : Chunk length must be 6');
    }
  }
}
MIDIFileHeader.HEADER_LENGTH = 14;
MIDIFileHeader.FRAMES_PER_SECONDS = 1;
MIDIFileHeader.TICKS_PER_BEAT = 2;
MIDIFileHeader.prototype.getFormat = function() {
  var format = this.datas.getUint16(8);
  if (0 !== format && 1 !== format && 2 !== format) {
    throw new Error('Invalid MIDI file : MIDI format (' + format + '),' + ' format can be 0, 1 or 2 only.');
  }
  return format;
};
MIDIFileHeader.prototype.setFormat = function(format) {
  var format = this.datas.getUint16(8);
  if (0 !== format && 1 !== format && 2 !== format) {
    throw new Error('Invalid MIDI format given (' + format + '),' + ' format can be 0, 1 or 2 only.');
  }
  return format;
};
MIDIFileHeader.prototype.getTracksCount = function() {
  return this.datas.getUint16(10);
};
MIDIFileHeader.prototype.setTracksCount = function(n) {
  return this.datas.setUint16(10, n);
};
MIDIFileHeader.prototype.getTickResolution = function(tempo) {
  if (this.datas.getUint16(12) & 0x8000) {
    return 1000000 / (this.getSMPTEFrames() * this.getTicksPerFrame());
  } else {
    tempo = tempo || 500000;
    return tempo / this.getTicksPerBeat();
  }
};
MIDIFileHeader.prototype.getTimeDivision = function() {
  if (this.datas.getUint16(12) & 0x8000) {
    return MIDIFileHeader.FRAMES_PER_SECONDS;
  }
  return MIDIFileHeader.TICKS_PER_BEAT;
};
MIDIFileHeader.prototype.getTicksPerBeat = function() {
  var divisionWord = this.datas.getUint16(12);
  if (divisionWord & 0x8000) {
    throw new Error('Time division is not expressed as ticks per beat.');
  }
  return divisionWord;
};
MIDIFileHeader.prototype.setTicksPerBeat = function(ticksPerBeat) {
  this.datas.setUint16(12, ticksPerBeat & 0x7FFF);
};
MIDIFileHeader.prototype.getSMPTEFrames = function() {
  var divisionWord = this.datas.getUint16(12),
      smpteFrames;
  if (!(divisionWord & 0x8000)) {
    throw new Error('Time division is not expressed as frames per seconds.');
  }
  smpteFrames = divisionWord & 0x7F00;
  if (smpteFrames != 24 && smpteFrames != 25 && smpteFrames != 29 && smpteFrames != 30) {
    throw new Error('Invalid SMPTE frames value (' + smpteFrames + ').');
  }
  return (29 === smpteFrames ? 29.97 : smpteFrames);
};
MIDIFileHeader.prototype.getTicksPerFrame = function() {
  var divisionWord = this.datas.getUint16(12);
  if (!(divisionWord & 0x8000)) {
    throw new Error('Time division is not expressed as frames per seconds.');
  }
  return divisionWord & 0x00FF;
};
MIDIFileHeader.prototype.setSMTPEDivision = function(smpteFrames, ticksPerFrame) {
  if (smpteFrames != 24 && smpteFrames != 25 && smpteFrames != 29.97 && smpteFrames != 29 && smpteFrames != 30) {
    throw new Error('Invalid SMPTE frames value given (' + smpteFrames + ').');
  }
  if (smpteFrames == 29.97)
    smpteFrames = 29;
  if (ticksPerFrame < 0 || ticksPerFrame > 0xFF) {
    throw new Error('Invalid ticks per frame value given (' + smpteFrames + ').');
  }
  this.datas.setUint8(12, 0x80 | smpteFrames);
  this.datas.setUint8(13, ticksPerFrame);
};
module.exports = MIDIFileHeader;



  global.define = __define;
  return module.exports;
});

System.register("npm:base64-js@0.0.7/lib/b64", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/base64-js@0.0.7/lib/b64.js";
  var __dirname = "jspm_packages/npm/base64-js@0.0.7/lib";
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
;
(function(exports) {
  'use strict';
  var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
  var PLUS = '+'.charCodeAt(0);
  var SLASH = '/'.charCodeAt(0);
  var NUMBER = '0'.charCodeAt(0);
  var LOWER = 'a'.charCodeAt(0);
  var UPPER = 'A'.charCodeAt(0);
  function decode(elt) {
    var code = elt.charCodeAt(0);
    if (code === PLUS)
      return 62;
    if (code === SLASH)
      return 63;
    if (code < NUMBER)
      return -1;
    if (code < NUMBER + 10)
      return code - NUMBER + 26 + 26;
    if (code < UPPER + 26)
      return code - UPPER;
    if (code < LOWER + 26)
      return code - LOWER + 26;
  }
  function b64ToByteArray(b64) {
    var i,
        j,
        l,
        tmp,
        placeHolders,
        arr;
    if (b64.length % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4');
    }
    var len = b64.length;
    placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
    arr = new Arr(b64.length * 3 / 4 - placeHolders);
    l = placeHolders > 0 ? b64.length - 4 : b64.length;
    var L = 0;
    function push(v) {
      arr[L++] = v;
    }
    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
      push((tmp & 0xFF0000) >> 16);
      push((tmp & 0xFF00) >> 8);
      push(tmp & 0xFF);
    }
    if (placeHolders === 2) {
      tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
      push(tmp & 0xFF);
    } else if (placeHolders === 1) {
      tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
      push((tmp >> 8) & 0xFF);
      push(tmp & 0xFF);
    }
    return arr;
  }
  function uint8ToBase64(uint8) {
    var i,
        extraBytes = uint8.length % 3,
        output = "",
        temp,
        length;
    function encode(num) {
      return lookup.charAt(num);
    }
    function tripletToBase64(num) {
      return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
    }
    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
      temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output += tripletToBase64(temp);
    }
    switch (extraBytes) {
      case 1:
        temp = uint8[uint8.length - 1];
        output += encode(temp >> 2);
        output += encode((temp << 4) & 0x3F);
        output += '==';
        break;
      case 2:
        temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
        output += encode(temp >> 10);
        output += encode((temp >> 4) & 0x3F);
        output += encode((temp << 2) & 0x3F);
        output += '=';
        break;
    }
    return output;
  }
  exports.toByteArray = b64ToByteArray;
  exports.fromByteArray = uint8ToBase64;
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports));



  global.define = __define;
  return module.exports;
});

System.register("npm:ieee754@1.1.4/index", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/ieee754@1.1.4/index.js";
  var __dirname = "jspm_packages/npm/ieee754@1.1.4";
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e,
      m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];
  i += d;
  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8)
    ;
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e,
      m,
      c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
  value = Math.abs(value);
  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8)
    ;
  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8)
    ;
  buffer[offset + i - d] |= s * 128;
};



  global.define = __define;
  return module.exports;
});

System.register("npm:midievents@0.1.0/src/MIDIEvents", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midievents@0.1.0/src/MIDIEvents.js";
  var __dirname = "jspm_packages/npm/midievents@0.1.0/src";
function MIDIEvents() {
  throw new Error('MIDIEvents function not intended to be run.');
}
MIDIEvents.EVENT_META = 0xFF;
MIDIEvents.EVENT_SYSEX = 0xF0;
MIDIEvents.EVENT_DIVSYSEX = 0xF7;
MIDIEvents.EVENT_MIDI = 0x8;
MIDIEvents.EVENT_META_SEQUENCE_NUMBER = 0x00, MIDIEvents.EVENT_META_TEXT = 0x01, MIDIEvents.EVENT_META_COPYRIGHT_NOTICE = 0x02, MIDIEvents.EVENT_META_TRACK_NAME = 0x03, MIDIEvents.EVENT_META_INSTRUMENT_NAME = 0x04, MIDIEvents.EVENT_META_LYRICS = 0x05, MIDIEvents.EVENT_META_MARKER = 0x06, MIDIEvents.EVENT_META_CUE_POINT = 0x07, MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX = 0x20, MIDIEvents.EVENT_META_END_OF_TRACK = 0x2F, MIDIEvents.EVENT_META_SET_TEMPO = 0x51, MIDIEvents.EVENT_META_SMTPE_OFFSET = 0x54, MIDIEvents.EVENT_META_TIME_SIGNATURE = 0x58, MIDIEvents.EVENT_META_KEY_SIGNATURE = 0x59, MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC = 0x7F;
MIDIEvents.EVENT_MIDI_NOTE_OFF = 0x8, MIDIEvents.EVENT_MIDI_NOTE_ON = 0x9, MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH = 0xA, MIDIEvents.EVENT_MIDI_CONTROLLER = 0xB, MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE = 0xC, MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH = 0xD, MIDIEvents.EVENT_MIDI_PITCH_BEND = 0xE;
MIDIEvents.MIDI_1PARAM_EVENTS = [MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE, MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH];
MIDIEvents.MIDI_2PARAMS_EVENTS = [MIDIEvents.EVENT_MIDI_NOTE_OFF, MIDIEvents.EVENT_MIDI_NOTE_ON, MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH, MIDIEvents.EVENT_MIDI_CONTROLLER, MIDIEvents.EVENT_MIDI_PITCH_BEND];
MIDIEvents.createParser = function(stream, startAt, strictMode) {
  if (stream instanceof DataView) {
    stream = {
      'position': startAt || 0,
      'buffer': stream,
      'readUint8': function() {
        return this.buffer.getUint8(this.position++);
      },
      'readUint16': function() {
        var v = this.buffer.getUint16(this.position);
        this.position = this.position + 2;
        return v;
      },
      'readUint32': function() {
        var v = this.buffer.getUint16(this.position);
        this.position = this.position + 2;
        return v;
      },
      'readVarInt': function() {
        var v = 0,
            i = 0;
        while (i++ < 4) {
          var b = this.readUint8();
          if (b & 0x80) {
            v += (b & 0x7f);
            v <<= 7;
          } else {
            return v + b;
          }
        }
        throw new Error('0x' + this.position.toString(16) + ': Variable integer' + ' length cannot exceed 4 bytes');
      },
      'readBytes': function(l) {
        var bytes = [];
        for (l; l > 0; l--) {
          bytes.push(this.readUint8());
        }
        return bytes;
      },
      'pos': function() {
        return '0x' + (this.buffer.byteOffset + this.position).toString(16);
      },
      'end': function(l) {
        return this.position === this.buffer.byteLength;
      }
    };
    startAt = 0;
  }
  if (startAt > 0) {
    while (startAt--)
      stream.readUint8();
  }
  var deltaTime,
      eventTypeByte,
      lastEventTypeByte,
      event,
      MIDIEventType,
      MIDIEventChannel,
      MIDIEventParam1,
      MIDIEventParam2;
  return {'next': function() {
      if (stream.end())
        return null;
      event = {
        'index': stream.pos(),
        'delta': stream.readVarInt()
      };
      eventTypeByte = stream.readUint8();
      if ((eventTypeByte & 0xF0) == 0xF0) {
        if (eventTypeByte == MIDIEvents.EVENT_META) {
          event.type = MIDIEvents.EVENT_META;
          event.subtype = stream.readUint8();
          event.length = stream.readVarInt();
          switch (event.subtype) {
            case MIDIEvents.EVENT_META_SEQUENCE_NUMBER:
              if (strictMode && 2 !== event.length)
                throw new Error(stream.pos() + ' Bad metaevent length.');
              event.msb = stream.readUint8();
              event.lsb = stream.readUint8();
              return event;
              break;
            case MIDIEvents.EVENT_META_TEXT:
            case MIDIEvents.EVENT_META_COPYRIGHT_NOTICE:
            case MIDIEvents.EVENT_META_TRACK_NAME:
            case MIDIEvents.EVENT_META_INSTRUMENT_NAME:
            case MIDIEvents.EVENT_META_LYRICS:
            case MIDIEvents.EVENT_META_MARKER:
            case MIDIEvents.EVENT_META_CUE_POINT:
              event.data = stream.readBytes(event.length);
              return event;
              break;
            case MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX:
              if (strictMode && 1 !== event.length)
                throw new Error(stream.pos() + ' Bad metaevent length.');
              event.prefix = stream.readUint8();
              return event;
              break;
            case MIDIEvents.EVENT_META_END_OF_TRACK:
              if (strictMode && 0 !== event.length)
                throw new Error(stream.pos() + ' Bad metaevent length.');
              return event;
              break;
            case MIDIEvents.EVENT_META_SET_TEMPO:
              if (strictMode && 3 !== event.length) {
                throw new Error(stream.pos() + ' Tempo meta event length must' + ' be 3.');
              }
              event.tempo = ((stream.readUint8() << 16) + (stream.readUint8() << 8) + stream.readUint8());
              event.tempoBPM = 60000000 / event.tempo;
              return event;
              break;
            case MIDIEvents.EVENT_META_SMTPE_OFFSET:
              if (strictMode && 5 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.hour = stream.readUint8();
              if (strictMode && event.hour > 23) {
                throw new Error(stream.pos() + ' SMTPE offset hour value must' + ' be part of 0-23.');
              }
              event.minutes = stream.readUint8();
              if (strictMode && event.minutes > 59) {
                throw new Error(stream.pos() + ' SMTPE offset minutes value' + ' must be part of 0-59.');
              }
              event.seconds = stream.readUint8();
              if (strictMode && event.seconds > 59) {
                throw new Error(stream.pos() + ' SMTPE offset seconds value' + ' must be part of 0-59.');
              }
              event.frames = stream.readUint8();
              if (strictMode && event.frames > 30) {
                throw new Error(stream.pos() + ' SMTPE offset frames value must' + ' be part of 0-30.');
              }
              event.subframes = stream.readUint8();
              if (strictMode && event.subframes > 99) {
                throw new Error(stream.pos() + ' SMTPE offset subframes value' + ' must be part of 0-99.');
              }
              return event;
              break;
            case MIDIEvents.EVENT_META_KEY_SIGNATURE:
              if (strictMode && 2 !== event.length) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.key = stream.readUint8();
              if (strictMode && (event.key < -7 || event.key > 7)) {
                throw new Error(stream.pos() + ' Bad metaevent length.');
              }
              event.scale = stream.readUint8();
              if (strictMode && event.scale !== 0 && event.scale !== 1) {
                throw new Error(stream.pos() + ' Key signature scale value must' + ' be 0 or 1.');
              }
              return event;
              break;
            case MIDIEvents.EVENT_META_TIME_SIGNATURE:
              if (strictMode && 4 !== event.length)
                throw new Error(stream.pos() + ' Bad metaevent length.');
              event.data = stream.readBytes(event.length);
              return event;
              break;
            case MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC:
              event.data = stream.readBytes(event.length);
              return event;
              break;
            default:
              if (strictMode)
                throw new Error(stream.pos() + ' Unknown meta event type ' + '(' + event.subtype.toString(16) + ').');
              event.data = stream.readBytes(event.length);
              return event;
              break;
          }
        } else if (eventTypeByte == MIDIEvents.EVENT_SYSEX || eventTypeByte == MIDIEvents.EVENT_DIVSYSEX) {
          event.type = eventTypeByte;
          event.length = stream.readVarInt();
          event.data = stream.readBytes(event.length);
          return event;
        } else {
          if (strictMode)
            throw new Error(stream.pos() + ' Unknown event type ' + eventTypeByte.toString(16) + ', Delta: ' + event.delta + '.');
          event.type = eventTypeByte;
          event.badsubtype = stream.readVarInt();
          event.length = stream.readUint8();
          event.data = stream.readBytes(event.length);
          return event;
        }
      } else {
        if ((eventTypeByte & 0x80) == 0) {
          if (!(MIDIEventType))
            throw new Error(stream.pos() + ' Running status without previous event');
          MIDIEventParam1 = eventTypeByte;
        } else {
          MIDIEventType = eventTypeByte >> 4;
          MIDIEventChannel = eventTypeByte & 0x0F;
          MIDIEventParam1 = stream.readUint8();
        }
        event.type = MIDIEvents.EVENT_MIDI;
        event.subtype = MIDIEventType;
        event.channel = MIDIEventChannel;
        event.param1 = MIDIEventParam1;
        switch (MIDIEventType) {
          case MIDIEvents.EVENT_MIDI_NOTE_OFF:
            event.param2 = stream.readUint8();
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_NOTE_ON:
            var velocity = stream.readUint8();
            if (!velocity) {
              event.subtype = MIDIEvents.EVENT_MIDI_NOTE_OFF;
              event.param2 = 127;
            } else {
              event.param2 = velocity;
            }
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_NOTE_AFTERTOUCH:
            event.param2 = stream.readUint8();
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_CONTROLLER:
            event.param2 = stream.readUint8();
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_PROGRAM_CHANGE:
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_CHANNEL_AFTERTOUCH:
            return event;
            break;
          case MIDIEvents.EVENT_MIDI_PITCH_BEND:
            event.param2 = stream.readUint8();
            return event;
            break;
          default:
            if (strictMode)
              throw new Error(stream.pos() + ' Unknown MIDI event type ' + '(' + MIDIEventType.toString(16) + ').');
            return event;
            break;
        }
      }
    }};
};
MIDIEvents.writeToTrack = function(events, destination) {
  var index = 0;
  for (var i = 0,
      j = events.length; i < j; i++) {
    if (events[i].delta >>> 28) {
      throw Error('Event #' + i + ': Maximum delta time value reached (' + events[i].delta + '/134217728 max)');
    }
    if (events[i].delta >>> 21) {
      destination[index++] = ((events[i].delta >>> 21) & 0x7F) | 0x80;
    }
    if (events[i].delta >>> 14) {
      destination[index++] = ((events[i].delta >>> 14) & 0x7F) | 0x80;
    }
    if (events[i].delta >>> 7) {
      destination[index++] = ((events[i].delta >>> 7) & 0x7F) | 0x80;
    }
    destination[index++] = (events[i].delta & 0x7F);
    if (events[i].type === MIDIEvents.EVENT_MIDI) {
      destination[index++] = (events[i].subtype << 4) + events[i].channel;
      destination[index++] = events[i].param1;
      if (-1 !== MIDIEvents.MIDI_2PARAMS_EVENTS.indexOf(events[i].subtype)) {
        destination[index++] = events[i].param2;
      }
    } else {
      destination[index++] = events[i].type;
      if (events[i].type === MIDIEvents.EVENT_META) {
        destination[index++] = events[i].subtype;
      }
      if (events[i].length >>> 28) {
        throw Error('Event #' + i + ': Maximum length reached (' + events[i].length + '/134217728 max)');
      }
      if (events[i].length >>> 21) {
        destination[index++] = ((events[i].length >>> 21) & 0x7F) | 0x80;
      }
      if (events[i].length >>> 14) {
        destination[index++] = ((events[i].length >>> 14) & 0x7F) | 0x80;
      }
      if (events[i].length >>> 7) {
        destination[index++] = ((events[i].length >>> 7) & 0x7F) | 0x80;
      }
      destination[index++] = (events[i].length & 0x7F);
      if (events[i].type === MIDIEvents.EVENT_META) {
        switch (events[i].subtype) {
          case MIDIEvents.EVENT_META_SEQUENCE_NUMBER:
            destination[index++] = events[i].msb;
            destination[index++] = events[i].lsb;
            break;
          case MIDIEvents.EVENT_META_TEXT:
          case MIDIEvents.EVENT_META_COPYRIGHT_NOTICE:
          case MIDIEvents.EVENT_META_TRACK_NAME:
          case MIDIEvents.EVENT_META_INSTRUMENT_NAME:
          case MIDIEvents.EVENT_META_LYRICS:
          case MIDIEvents.EVENT_META_MARKER:
          case MIDIEvents.EVENT_META_CUE_POINT:
            for (var k = 0,
                l = events[i].length; k < l; k++) {
              destination[index++] = events[i].data[k];
            }
            break;
          case MIDIEvents.EVENT_META_MIDI_CHANNEL_PREFIX:
            destination[index++] = events[i].prefix;
            return event;
            break;
          case MIDIEvents.EVENT_META_END_OF_TRACK:
            break;
          case MIDIEvents.EVENT_META_SET_TEMPO:
            destination[index++] = (events[i].tempo >> 16);
            destination[index++] = (events[i].tempo >> 8) & 0xFF;
            destination[index++] = events[i].tempo & 0xFF;
            break;
          case MIDIEvents.EVENT_META_SMTPE_OFFSET:
            if (strictMode && event.hour > 23) {
              throw new Error('Event #' + i + ': SMTPE offset hour value must be' + ' part of 0-23.');
            }
            destination[index++] = events[i].hour;
            if (strictMode && event.minutes > 59) {
              throw new Error('Event #' + i + ': SMTPE offset minutes value must' + ' be part of 0-59.');
            }
            destination[index++] = events[i].minutes;
            if (strictMode && event.seconds > 59) {
              throw new Error('Event #' + i + ': SMTPE offset seconds value must' + ' be part of 0-59.');
            }
            destination[index++] = events[i].seconds;
            if (strictMode && event.frames > 30) {
              throw new Error('Event #' + i + ': SMTPE offset frames amount must' + ' be part of 0-30.');
            }
            destination[index++] = events[i].frames;
            if (strictMode && event.subframes > 99) {
              throw new Error('Event #' + i + ': SMTPE offset subframes amount' + ' must be part of 0-99.');
            }
            destination[index++] = events[i].subframes;
            return event;
            break;
          case MIDIEvents.EVENT_META_KEY_SIGNATURE:
            if ('number' != typeof events[i].key || events[i].key < -7 || events[i].scale > 7) {
              throw new Error('Event #' + i + ':The key signature key must be' + ' between -7 and 7');
            }
            if ('number' != typeof events[i].scale || events[i].scale < 0 || events[i].scale > 1) {
              throw new Error('Event #' + i + ':The key signature scale must be' + ' 0 or 1');
            }
            destination[index++] = events[i].key;
            destination[index++] = events[i].scale;
            break;
          case MIDIEvents.EVENT_META_TIME_SIGNATURE:
          case MIDIEvents.EVENT_META_SEQUENCER_SPECIFIC:
          default:
            for (var k = 0,
                l = events[i].length; k < l; k++) {
              destination[index++] = events[i].data[k];
            }
            break;
        }
      } else {
        for (var k = 0,
            l = events[i].length; k < l; k++) {
          destination[index++] = events[i].data[k];
        }
      }
    }
  }
};
MIDIEvents.getRequiredBufferLength = function(events) {
  var bufferLength = 0,
      event;
  for (var i = 0,
      j = events.length; i < j; i++) {
    bufferLength += (events[i].delta >>> 21 ? 4 : (events[i].delta >>> 14 ? 3 : (events[i].delta >>> 7 ? 2 : 1)));
    if (events[i].type === MIDIEvents.EVENT_MIDI) {
      bufferLength++;
      bufferLength++;
      if (-1 !== MIDIEvents.MIDI_2PARAMS_EVENTS.indexOf(events[i].subtype)) {
        bufferLength++;
      }
    } else {
      bufferLength++;
      if (events[i].type === MIDIEvents.EVENT_META) {
        bufferLength++;
      }
      bufferLength += (events[i].length >>> 21 ? 4 : (events[i].length >>> 14 ? 3 : (events[i].length >>> 7 ? 2 : 1)));
      bufferLength += events[i].length;
    }
  }
  return bufferLength;
};
module.exports = MIDIEvents;



  global.define = __define;
  return module.exports;
});

System.register("npm:string.fromcodepoint@0.2.1/fromcodepoint", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/string.fromcodepoint@0.2.1/fromcodepoint.js";
  var __dirname = "jspm_packages/npm/string.fromcodepoint@0.2.1";
"format cjs";
if (!String.fromCodePoint) {
  (function() {
    var defineProperty = (function() {
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    }());
    var stringFromCharCode = String.fromCharCode;
    var floor = Math.floor;
    var fromCodePoint = function(_) {
      var MAX_SIZE = 0x4000;
      var codeUnits = [];
      var highSurrogate;
      var lowSurrogate;
      var index = -1;
      var length = arguments.length;
      if (!length) {
        return '';
      }
      var result = '';
      while (++index < length) {
        var codePoint = Number(arguments[index]);
        if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
          throw RangeError('Invalid code point: ' + codePoint);
        }
        if (codePoint <= 0xFFFF) {
          codeUnits.push(codePoint);
        } else {
          codePoint -= 0x10000;
          highSurrogate = (codePoint >> 10) + 0xD800;
          lowSurrogate = (codePoint % 0x400) + 0xDC00;
          codeUnits.push(highSurrogate, lowSurrogate);
        }
        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
          result += stringFromCharCode.apply(null, codeUnits);
          codeUnits.length = 0;
        }
      }
      return result;
    };
    if (defineProperty) {
      defineProperty(String, 'fromCodePoint', {
        'value': fromCodePoint,
        'configurable': true,
        'writable': true
      });
    } else {
      String.fromCodePoint = fromCodePoint;
    }
  }());
}



  global.define = __define;
  return module.exports;
});

System.register("npm:string.prototype.codepointat@0.2.0/codepointat", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/string.prototype.codepointat@0.2.0/codepointat.js";
  var __dirname = "jspm_packages/npm/string.prototype.codepointat@0.2.0";
"format cjs";
if (!String.prototype.codePointAt) {
  (function() {
    'use strict';
    var defineProperty = (function() {
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      var index = position ? Number(position) : 0;
      if (index != index) {
        index = 0;
      }
      if (index < 0 || index >= size) {
        return undefined;
      }
      var first = string.charCodeAt(index);
      var second;
      if (first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}



  global.define = __define;
  return module.exports;
});

System.register("npm:co@4.0.1/index", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/co@4.0.1/index.js";
  var __dirname = "jspm_packages/npm/co@4.0.1";
var slice = Array.prototype.slice;
module.exports = co['default'] = co.co = co;
co.wrap = function(fn) {
  return function() {
    return co.call(this, fn.apply(this, arguments));
  };
};
function co(gen) {
  var ctx = this;
  if (typeof gen === 'function')
    gen = gen.call(this);
  return onFulfilled();
  function onFulfilled(res) {
    var ret;
    try {
      ret = gen.next(res);
    } catch (e) {
      return Promise.reject(e);
    }
    return next(ret);
  }
  function onRejected(err) {
    var ret;
    try {
      ret = gen.throw(err);
    } catch (e) {
      return Promise.reject(e);
    }
    return next(ret);
  }
  function next(ret) {
    if (ret.done)
      return Promise.resolve(ret.value);
    var value = toPromise.call(ctx, ret.value);
    if (value && isPromise(value))
      return value.then(onFulfilled, onRejected);
    return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, ' + 'but the following object was passed: "' + String(ret.value) + '"'));
  }
}
function toPromise(obj) {
  if (!obj)
    return obj;
  if (isPromise(obj))
    return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj))
    return co.call(this, obj);
  if ('function' == typeof obj)
    return thunkToPromise.call(this, obj);
  if (Array.isArray(obj))
    return arrayToPromise.call(this, obj);
  if (isObject(obj))
    return objectToPromise.call(this, obj);
  return obj;
}
function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function(resolve, reject) {
    fn.call(ctx, function(err, res) {
      if (err)
        return reject(err);
      if (arguments.length > 2)
        res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}
function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}
function objectToPromise(obj) {
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise))
      defer(promise, key);
    else
      results[key] = obj[key];
  }
  return Promise.all(promises).then(function() {
    return results;
  });
  function defer(promise, key) {
    results[key] = undefined;
    promises.push(promise.then(function(res) {
      results[key] = res;
    }));
  }
}
function isPromise(obj) {
  return 'function' == typeof obj.then;
}
function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  return constructor && 'GeneratorFunction' == constructor.name;
}
function isObject(val) {
  return Object == val.constructor;
}



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/common", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/common.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
function isNothing(subject) {
  return (undefined === subject) || (null === subject);
}
function isObject(subject) {
  return ('object' === typeof subject) && (null !== subject);
}
function toArray(sequence) {
  if (Array.isArray(sequence)) {
    return sequence;
  } else if (isNothing(sequence)) {
    return [];
  } else {
    return [sequence];
  }
}
function extend(target, source) {
  var index,
      length,
      key,
      sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = '',
      cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return (0 === number) && (Number.NEGATIVE_INFINITY === 1 / number);
}
module.exports.isNothing = isNothing;
module.exports.isObject = isObject;
module.exports.toArray = toArray;
module.exports.repeat = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend = extend;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/exception", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/exception.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
function YAMLException(reason, mark) {
  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = this.toString(false);
}
YAMLException.prototype.toString = function toString(compact) {
  var result;
  result = 'JS-YAML: ' + (this.reason || '(unknown reason)');
  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }
  return result;
};
module.exports = YAMLException;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/mark", ["./common"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/mark.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
var common = require('./common');
function Mark(name, buffer, position, line, column) {
  this.name = name;
  this.buffer = buffer;
  this.position = position;
  this.line = line;
  this.column = column;
}
Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head,
      start,
      tail,
      end,
      snippet;
  if (!this.buffer) {
    return null;
  }
  indent = indent || 4;
  maxLength = maxLength || 75;
  head = '';
  start = this.position;
  while (start > 0 && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1))) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }
  tail = '';
  end = this.position;
  while (end < this.buffer.length && -1 === '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end))) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }
  snippet = this.buffer.slice(start, end);
  return common.repeat(' ', indent) + head + snippet + tail + '\n' + common.repeat(' ', indent + this.position - start + head.length) + '^';
};
Mark.prototype.toString = function toString(compact) {
  var snippet,
      where = '';
  if (this.name) {
    where += 'in "' + this.name + '" ';
  }
  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);
  if (!compact) {
    snippet = this.getSnippet();
    if (snippet) {
      where += ':\n' + snippet;
    }
  }
  return where;
};
module.exports = Mark;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type", ["./exception"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
var YAMLException = require('./exception');
var TYPE_CONSTRUCTOR_OPTIONS = ['kind', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'defaultStyle', 'styleAliases'];
var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping'];
function compileStyleAliases(map) {
  var result = {};
  if (null !== map) {
    Object.keys(map).forEach(function(style) {
      map[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (-1 === TYPE_CONSTRUCTOR_OPTIONS.indexOf(name)) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.tag = tag;
  this.kind = options['kind'] || null;
  this.resolve = options['resolve'] || function() {
    return true;
  };
  this.construct = options['construct'] || function(data) {
    return data;
  };
  this.instanceOf = options['instanceOf'] || null;
  this.predicate = options['predicate'] || null;
  this.represent = options['represent'] || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);
  if (-1 === YAML_NODE_KINDS.indexOf(this.kind)) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
module.exports = Type;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/str", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/str.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:str', {kind: 'scalar'});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/seq", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/seq.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:seq', {kind: 'sequence'});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/map", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/map.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
module.exports = new Type('tag:yaml.org,2002:map', {kind: 'mapping'});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/null", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/null.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
function resolveYamlNull(data) {
  var max = data.length;
  return (max === 1 && data === '~') || (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return null === object;
}
module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return '~';
    },
    lowercase: function() {
      return 'null';
    },
    uppercase: function() {
      return 'NULL';
    },
    camelcase: function() {
      return 'Null';
    }
  },
  defaultStyle: 'lowercase'
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/bool", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/bool.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
function resolveYamlBoolean(data) {
  var max = data.length;
  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) || (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}
function constructYamlBoolean(data) {
  return data === 'true' || data === 'True' || data === 'TRUE';
}
function isBoolean(object) {
  return '[object Boolean]' === Object.prototype.toString.call(object);
}
module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? 'true' : 'false';
    },
    uppercase: function(object) {
      return object ? 'TRUE' : 'FALSE';
    },
    camelcase: function(object) {
      return object ? 'True' : 'False';
    }
  },
  defaultStyle: 'lowercase'
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/int", ["../common","../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/int.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var common = require('../common');
var Type = require('../type');
function isHexCode(c) {
  return ((0x30 <= c) && (c <= 0x39)) || ((0x41 <= c) && (c <= 0x46)) || ((0x61 <= c) && (c <= 0x66));
}
function isOctCode(c) {
  return ((0x30 <= c) && (c <= 0x37));
}
function isDecCode(c) {
  return ((0x30 <= c) && (c <= 0x39));
}
function resolveYamlInteger(data) {
  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;
  if (!max) {
    return false;
  }
  ch = data[index];
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }
  if (ch === '0') {
    if (index + 1 === max) {
      return true;
    }
    ch = data[++index];
    if (ch === 'b') {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') {
          continue;
        }
        if (ch !== '0' && ch !== '1') {
          return false;
        }
        hasDigits = true;
      }
      return hasDigits;
    }
    if (ch === 'x') {
      index++;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') {
          continue;
        }
        if (!isHexCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      return hasDigits;
    }
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') {
        continue;
      }
      if (!isOctCode(data.charCodeAt(index))) {
        return false;
      }
      hasDigits = true;
    }
    return hasDigits;
  }
  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') {
      continue;
    }
    if (ch === ':') {
      break;
    }
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits) {
    return false;
  }
  if (ch !== ':') {
    return true;
  }
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}
function constructYamlInteger(data) {
  var value = data,
      sign = 1,
      ch,
      base,
      digits = [];
  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }
  ch = value[0];
  if (ch === '-' || ch === '+') {
    if (ch === '-') {
      sign = -1;
    }
    value = value.slice(1);
    ch = value[0];
  }
  if ('0' === value) {
    return 0;
  }
  if (ch === '0') {
    if (value[1] === 'b') {
      return sign * parseInt(value.slice(2), 2);
    }
    if (value[1] === 'x') {
      return sign * parseInt(value, 16);
    }
    return sign * parseInt(value, 8);
  }
  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function(v) {
      digits.unshift(parseInt(v, 10));
    });
    value = 0;
    base = 1;
    digits.forEach(function(d) {
      value += (d * base);
      base *= 60;
    });
    return sign * value;
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return ('[object Number]' === Object.prototype.toString.call(object)) && (0 === object % 1 && !common.isNegativeZero(object));
}
module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(object) {
      return '0b' + object.toString(2);
    },
    octal: function(object) {
      return '0' + object.toString(8);
    },
    decimal: function(object) {
      return object.toString(10);
    },
    hexadecimal: function(object) {
      return '0x' + object.toString(16).toUpperCase();
    }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary: [2, 'bin'],
    octal: [8, 'oct'],
    decimal: [10, 'dec'],
    hexadecimal: [16, 'hex']
  }
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/float", ["../common","../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/float.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var common = require('../common');
var Type = require('../type');
var YAML_FLOAT_PATTERN = new RegExp('^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?' + '|\\.[0-9_]+(?:[eE][-+][0-9]+)?' + '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' + '|[-+]?\\.(?:inf|Inf|INF)' + '|\\.(?:nan|NaN|NAN))$');
function resolveYamlFloat(data) {
  var value,
      sign,
      base,
      digits;
  if (!YAML_FLOAT_PATTERN.test(data)) {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value,
      sign,
      base,
      digits;
  value = data.replace(/_/g, '').toLowerCase();
  sign = '-' === value[0] ? -1 : 1;
  digits = [];
  if (0 <= '+-'.indexOf(value[0])) {
    value = value.slice(1);
  }
  if ('.inf' === value) {
    return (1 === sign) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if ('.nan' === value) {
    return NaN;
  } else if (0 <= value.indexOf(':')) {
    value.split(':').forEach(function(v) {
      digits.unshift(parseFloat(v, 10));
    });
    value = 0.0;
    base = 1;
    digits.forEach(function(d) {
      value += d * base;
      base *= 60;
    });
    return sign * value;
  } else {
    return sign * parseFloat(value, 10);
  }
}
function representYamlFloat(object, style) {
  if (isNaN(object)) {
    switch (style) {
      case 'lowercase':
        return '.nan';
      case 'uppercase':
        return '.NAN';
      case 'camelcase':
        return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '.inf';
      case 'uppercase':
        return '.INF';
      case 'camelcase':
        return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '-.inf';
      case 'uppercase':
        return '-.INF';
      case 'camelcase':
        return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  } else {
    return object.toString(10);
  }
}
function isFloat(object) {
  return ('[object Number]' === Object.prototype.toString.call(object)) && (0 !== object % 1 || common.isNegativeZero(object));
}
module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/timestamp", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/timestamp.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9]?)' + '-([0-9][0-9]?)' + '(?:(?:[Tt]|[ \\t]+)' + '([0-9][0-9]?)' + ':([0-9][0-9])' + ':([0-9][0-9])' + '(?:\\.([0-9]*))?' + '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + '(?::([0-9][0-9]))?))?)?$');
function resolveYamlTimestamp(data) {
  var match,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fraction = 0,
      delta = null,
      tz_hour,
      tz_minute,
      date;
  match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (null === match) {
    return false;
  }
  return true;
}
function constructYamlTimestamp(data) {
  var match,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fraction = 0,
      delta = null,
      tz_hour,
      tz_minute,
      date;
  match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (null === match) {
    throw new Error('Date resolve error');
  }
  year = +(match[1]);
  month = +(match[2]) - 1;
  day = +(match[3]);
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += '0';
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000;
    if ('-' === match[9]) {
      delta = -delta;
    }
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) {
    date.setTime(date.getTime() - delta);
  }
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/merge", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/merge.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
function resolveYamlMerge(data) {
  return '<<' === data;
}
module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/binary", ["github:jspm/nodelibs@0.0.7/buffer","../type","github:jspm/nodelibs@0.0.7/buffer"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/binary.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
(function(Buffer) {
  'use strict';
  var NodeBuffer = require("github:jspm/nodelibs@0.0.7/buffer").Buffer;
  var Type = require("../type");
  var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';
  function resolveYamlBinary(data) {
    var code,
        idx,
        bitlen = 0,
        len = 0,
        max = data.length,
        map = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      code = map.indexOf(data.charAt(idx));
      if (code > 64) {
        continue;
      }
      if (code < 0) {
        return false;
      }
      bitlen += 6;
    }
    return (bitlen % 8) === 0;
  }
  function constructYamlBinary(data) {
    var code,
        idx,
        tailbits,
        input = data.replace(/[\r\n=]/g, ''),
        max = input.length,
        map = BASE64_MAP,
        bits = 0,
        result = [];
    for (idx = 0; idx < max; idx++) {
      if ((idx % 4 === 0) && idx) {
        result.push((bits >> 16) & 0xFF);
        result.push((bits >> 8) & 0xFF);
        result.push(bits & 0xFF);
      }
      bits = (bits << 6) | map.indexOf(input.charAt(idx));
    }
    tailbits = (max % 4) * 6;
    if (tailbits === 0) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    } else if (tailbits === 18) {
      result.push((bits >> 10) & 0xFF);
      result.push((bits >> 2) & 0xFF);
    } else if (tailbits === 12) {
      result.push((bits >> 4) & 0xFF);
    }
    if (NodeBuffer) {
      return new NodeBuffer(result);
    }
    return result;
  }
  function representYamlBinary(object) {
    var result = '',
        bits = 0,
        idx,
        tail,
        max = object.length,
        map = BASE64_MAP;
    for (idx = 0; idx < max; idx++) {
      if ((idx % 3 === 0) && idx) {
        result += map[(bits >> 18) & 0x3F];
        result += map[(bits >> 12) & 0x3F];
        result += map[(bits >> 6) & 0x3F];
        result += map[bits & 0x3F];
      }
      bits = (bits << 8) + object[idx];
    }
    tail = max % 3;
    if (tail === 0) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    } else if (tail === 2) {
      result += map[(bits >> 10) & 0x3F];
      result += map[(bits >> 4) & 0x3F];
      result += map[(bits << 2) & 0x3F];
      result += map[64];
    } else if (tail === 1) {
      result += map[(bits >> 2) & 0x3F];
      result += map[(bits << 4) & 0x3F];
      result += map[64];
      result += map[64];
    }
    return result;
  }
  function isBinary(object) {
    return NodeBuffer && NodeBuffer.isBuffer(object);
  }
  module.exports = new Type('tag:yaml.org,2002:binary', {
    kind: 'scalar',
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
  });
})(require("github:jspm/nodelibs@0.0.7/buffer").Buffer);



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/omap", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/omap.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;
function resolveYamlOmap(data) {
  var objectKeys = [],
      index,
      length,
      pair,
      pairKey,
      pairHasKey,
      object = data;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if ('[object Object]' !== _toString.call(pair)) {
      return false;
    }
    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) {
          pairHasKey = true;
        } else {
          return false;
        }
      }
    }
    if (!pairHasKey) {
      return false;
    }
    if (-1 === objectKeys.indexOf(pairKey)) {
      objectKeys.push(pairKey);
    } else {
      return false;
    }
  }
  return true;
}
module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/pairs", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/pairs.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
var _toString = Object.prototype.toString;
function resolveYamlPairs(data) {
  var index,
      length,
      pair,
      keys,
      result,
      object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if ('[object Object]' !== _toString.call(pair)) {
      return false;
    }
    keys = Object.keys(pair);
    if (1 !== keys.length) {
      return false;
    }
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  var index,
      length,
      pair,
      keys,
      result,
      object = data;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/set", ["../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/set.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type";
'use strict';
var Type = require('../type');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  var key,
      object = data;
  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (null !== object[key]) {
        return false;
      }
    }
  }
  return true;
}
module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/js/undefined", ["../../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js/undefined.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js";
'use strict';
var Type = require('../../type');
function resolveJavascriptUndefined() {
  return true;
}
function constructJavascriptUndefined() {
  return undefined;
}
function representJavascriptUndefined() {
  return '';
}
function isUndefined(object) {
  return 'undefined' === typeof object;
}
module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/js/regexp", ["../../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js/regexp.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js";
'use strict';
var Type = require('../../type');
function resolveJavascriptRegExp(data) {
  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = '';
  if ('/' === regexp[0]) {
    if (tail) {
      modifiers = tail[1];
    }
    if (modifiers.length > 3) {
      return false;
    }
    if (regexp[regexp.length - modifiers.length - 1] !== '/') {
      return false;
    }
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }
  try {
    var dummy = new RegExp(regexp, modifiers);
    return true;
  } catch (error) {
    return false;
  }
}
function constructJavascriptRegExp(data) {
  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = '';
  if ('/' === regexp[0]) {
    if (tail) {
      modifiers = tail[1];
    }
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }
  return new RegExp(regexp, modifiers);
}
function representJavascriptRegExp(object) {
  var result = '/' + object.source + '/';
  if (object.global) {
    result += 'g';
  }
  if (object.multiline) {
    result += 'm';
  }
  if (object.ignoreCase) {
    result += 'i';
  }
  return result;
}
function isRegExp(object) {
  return '[object RegExp]' === Object.prototype.toString.call(object);
}
module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});



  global.define = __define;
  return module.exports;
});

System.register("npm:esprima@1.0.4/esprima", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/esprima@1.0.4/esprima.js";
  var __dirname = "jspm_packages/npm/esprima@1.0.4";
"format cjs";
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports);
  } else {
    factory((root.esprima = {}));
  }
}(this, function(exports) {
  'use strict';
  var Token,
      TokenName,
      Syntax,
      PropertyKind,
      Messages,
      Regex,
      source,
      strict,
      index,
      lineNumber,
      lineStart,
      length,
      buffer,
      state,
      extra;
  Token = {
    BooleanLiteral: 1,
    EOF: 2,
    Identifier: 3,
    Keyword: 4,
    NullLiteral: 5,
    NumericLiteral: 6,
    Punctuator: 7,
    StringLiteral: 8
  };
  TokenName = {};
  TokenName[Token.BooleanLiteral] = 'Boolean';
  TokenName[Token.EOF] = '<end>';
  TokenName[Token.Identifier] = 'Identifier';
  TokenName[Token.Keyword] = 'Keyword';
  TokenName[Token.NullLiteral] = 'Null';
  TokenName[Token.NumericLiteral] = 'Numeric';
  TokenName[Token.Punctuator] = 'Punctuator';
  TokenName[Token.StringLiteral] = 'String';
  Syntax = {
    AssignmentExpression: 'AssignmentExpression',
    ArrayExpression: 'ArrayExpression',
    BlockStatement: 'BlockStatement',
    BinaryExpression: 'BinaryExpression',
    BreakStatement: 'BreakStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ConditionalExpression: 'ConditionalExpression',
    ContinueStatement: 'ContinueStatement',
    DoWhileStatement: 'DoWhileStatement',
    DebuggerStatement: 'DebuggerStatement',
    EmptyStatement: 'EmptyStatement',
    ExpressionStatement: 'ExpressionStatement',
    ForStatement: 'ForStatement',
    ForInStatement: 'ForInStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    Literal: 'Literal',
    LabeledStatement: 'LabeledStatement',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    NewExpression: 'NewExpression',
    ObjectExpression: 'ObjectExpression',
    Program: 'Program',
    Property: 'Property',
    ReturnStatement: 'ReturnStatement',
    SequenceExpression: 'SequenceExpression',
    SwitchStatement: 'SwitchStatement',
    SwitchCase: 'SwitchCase',
    ThisExpression: 'ThisExpression',
    ThrowStatement: 'ThrowStatement',
    TryStatement: 'TryStatement',
    UnaryExpression: 'UnaryExpression',
    UpdateExpression: 'UpdateExpression',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    WhileStatement: 'WhileStatement',
    WithStatement: 'WithStatement'
  };
  PropertyKind = {
    Data: 1,
    Get: 2,
    Set: 4
  };
  Messages = {
    UnexpectedToken: 'Unexpected token %0',
    UnexpectedNumber: 'Unexpected number',
    UnexpectedString: 'Unexpected string',
    UnexpectedIdentifier: 'Unexpected identifier',
    UnexpectedReserved: 'Unexpected reserved word',
    UnexpectedEOS: 'Unexpected end of input',
    NewlineAfterThrow: 'Illegal newline after throw',
    InvalidRegExp: 'Invalid regular expression',
    UnterminatedRegExp: 'Invalid regular expression: missing /',
    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
    NoCatchOrFinally: 'Missing catch or finally after try',
    UnknownLabel: 'Undefined label \'%0\'',
    Redeclaration: '%0 \'%1\' has already been declared',
    IllegalContinue: 'Illegal continue statement',
    IllegalBreak: 'Illegal break statement',
    IllegalReturn: 'Illegal return statement',
    StrictModeWith: 'Strict mode code may not include a with statement',
    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
    StrictDuplicateProperty: 'Duplicate data property in object literal not allowed in strict mode',
    AccessorDataProperty: 'Object literal may not have data and accessor property with the same name',
    AccessorGetSet: 'Object literal may not have multiple get/set accessors with the same name',
    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
    StrictReservedWord: 'Use of future reserved word in strict mode'
  };
  Regex = {
    NonAsciiIdentifierStart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]'),
    NonAsciiIdentifierPart: new RegExp('[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]')
  };
  function assert(condition, message) {
    if (!condition) {
      throw new Error('ASSERT: ' + message);
    }
  }
  function sliceSource(from, to) {
    return source.slice(from, to);
  }
  if (typeof'esprima'[0] === 'undefined') {
    sliceSource = function sliceArraySource(from, to) {
      return source.slice(from, to).join('');
    };
  }
  function isDecimalDigit(ch) {
    return '0123456789'.indexOf(ch) >= 0;
  }
  function isHexDigit(ch) {
    return '0123456789abcdefABCDEF'.indexOf(ch) >= 0;
  }
  function isOctalDigit(ch) {
    return '01234567'.indexOf(ch) >= 0;
  }
  function isWhiteSpace(ch) {
    return (ch === ' ') || (ch === '\u0009') || (ch === '\u000B') || (ch === '\u000C') || (ch === '\u00A0') || (ch.charCodeAt(0) >= 0x1680 && '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\uFEFF'.indexOf(ch) >= 0);
  }
  function isLineTerminator(ch) {
    return (ch === '\n' || ch === '\r' || ch === '\u2028' || ch === '\u2029');
  }
  function isIdentifierStart(ch) {
    return (ch === '$') || (ch === '_') || (ch === '\\') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ((ch.charCodeAt(0) >= 0x80) && Regex.NonAsciiIdentifierStart.test(ch));
  }
  function isIdentifierPart(ch) {
    return (ch === '$') || (ch === '_') || (ch === '\\') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || ((ch >= '0') && (ch <= '9')) || ((ch.charCodeAt(0) >= 0x80) && Regex.NonAsciiIdentifierPart.test(ch));
  }
  function isFutureReservedWord(id) {
    switch (id) {
      case 'class':
      case 'enum':
      case 'export':
      case 'extends':
      case 'import':
      case 'super':
        return true;
    }
    return false;
  }
  function isStrictModeReservedWord(id) {
    switch (id) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'yield':
      case 'let':
        return true;
    }
    return false;
  }
  function isRestrictedWord(id) {
    return id === 'eval' || id === 'arguments';
  }
  function isKeyword(id) {
    var keyword = false;
    switch (id.length) {
      case 2:
        keyword = (id === 'if') || (id === 'in') || (id === 'do');
        break;
      case 3:
        keyword = (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
        break;
      case 4:
        keyword = (id === 'this') || (id === 'else') || (id === 'case') || (id === 'void') || (id === 'with');
        break;
      case 5:
        keyword = (id === 'while') || (id === 'break') || (id === 'catch') || (id === 'throw');
        break;
      case 6:
        keyword = (id === 'return') || (id === 'typeof') || (id === 'delete') || (id === 'switch');
        break;
      case 7:
        keyword = (id === 'default') || (id === 'finally');
        break;
      case 8:
        keyword = (id === 'function') || (id === 'continue') || (id === 'debugger');
        break;
      case 10:
        keyword = (id === 'instanceof');
        break;
    }
    if (keyword) {
      return true;
    }
    switch (id) {
      case 'const':
        return true;
      case 'yield':
      case 'let':
        return true;
    }
    if (strict && isStrictModeReservedWord(id)) {
      return true;
    }
    return isFutureReservedWord(id);
  }
  function skipComment() {
    var ch,
        blockComment,
        lineComment;
    blockComment = false;
    lineComment = false;
    while (index < length) {
      ch = source[index];
      if (lineComment) {
        ch = source[index++];
        if (isLineTerminator(ch)) {
          lineComment = false;
          if (ch === '\r' && source[index] === '\n') {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
        }
      } else if (blockComment) {
        if (isLineTerminator(ch)) {
          if (ch === '\r' && source[index + 1] === '\n') {
            ++index;
          }
          ++lineNumber;
          ++index;
          lineStart = index;
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else {
          ch = source[index++];
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
          if (ch === '*') {
            ch = source[index];
            if (ch === '/') {
              ++index;
              blockComment = false;
            }
          }
        }
      } else if (ch === '/') {
        ch = source[index + 1];
        if (ch === '/') {
          index += 2;
          lineComment = true;
        } else if (ch === '*') {
          index += 2;
          blockComment = true;
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else {
          break;
        }
      } else if (isWhiteSpace(ch)) {
        ++index;
      } else if (isLineTerminator(ch)) {
        ++index;
        if (ch === '\r' && source[index] === '\n') {
          ++index;
        }
        ++lineNumber;
        lineStart = index;
      } else {
        break;
      }
    }
  }
  function scanHexEscape(prefix) {
    var i,
        len,
        ch,
        code = 0;
    len = (prefix === 'u') ? 4 : 2;
    for (i = 0; i < len; ++i) {
      if (index < length && isHexDigit(source[index])) {
        ch = source[index++];
        code = code * 16 + '0123456789abcdef'.indexOf(ch.toLowerCase());
      } else {
        return '';
      }
    }
    return String.fromCharCode(code);
  }
  function scanIdentifier() {
    var ch,
        start,
        id,
        restore;
    ch = source[index];
    if (!isIdentifierStart(ch)) {
      return;
    }
    start = index;
    if (ch === '\\') {
      ++index;
      if (source[index] !== 'u') {
        return;
      }
      ++index;
      restore = index;
      ch = scanHexEscape('u');
      if (ch) {
        if (ch === '\\' || !isIdentifierStart(ch)) {
          return;
        }
        id = ch;
      } else {
        index = restore;
        id = 'u';
      }
    } else {
      id = source[index++];
    }
    while (index < length) {
      ch = source[index];
      if (!isIdentifierPart(ch)) {
        break;
      }
      if (ch === '\\') {
        ++index;
        if (source[index] !== 'u') {
          return;
        }
        ++index;
        restore = index;
        ch = scanHexEscape('u');
        if (ch) {
          if (ch === '\\' || !isIdentifierPart(ch)) {
            return;
          }
          id += ch;
        } else {
          index = restore;
          id += 'u';
        }
      } else {
        id += source[index++];
      }
    }
    if (id.length === 1) {
      return {
        type: Token.Identifier,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (isKeyword(id)) {
      return {
        type: Token.Keyword,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (id === 'null') {
      return {
        type: Token.NullLiteral,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (id === 'true' || id === 'false') {
      return {
        type: Token.BooleanLiteral,
        value: id,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    return {
      type: Token.Identifier,
      value: id,
      lineNumber: lineNumber,
      lineStart: lineStart,
      range: [start, index]
    };
  }
  function scanPunctuator() {
    var start = index,
        ch1 = source[index],
        ch2,
        ch3,
        ch4;
    if (ch1 === ';' || ch1 === '{' || ch1 === '}') {
      ++index;
      return {
        type: Token.Punctuator,
        value: ch1,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch1 === ',' || ch1 === '(' || ch1 === ')') {
      ++index;
      return {
        type: Token.Punctuator,
        value: ch1,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    ch2 = source[index + 1];
    if (ch1 === '.' && !isDecimalDigit(ch2)) {
      return {
        type: Token.Punctuator,
        value: source[index++],
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    ch3 = source[index + 2];
    ch4 = source[index + 3];
    if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
      if (ch4 === '=') {
        index += 4;
        return {
          type: Token.Punctuator,
          value: '>>>=',
          lineNumber: lineNumber,
          lineStart: lineStart,
          range: [start, index]
        };
      }
    }
    if (ch1 === '=' && ch2 === '=' && ch3 === '=') {
      index += 3;
      return {
        type: Token.Punctuator,
        value: '===',
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch1 === '!' && ch2 === '=' && ch3 === '=') {
      index += 3;
      return {
        type: Token.Punctuator,
        value: '!==',
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch1 === '>' && ch2 === '>' && ch3 === '>') {
      index += 3;
      return {
        type: Token.Punctuator,
        value: '>>>',
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch1 === '<' && ch2 === '<' && ch3 === '=') {
      index += 3;
      return {
        type: Token.Punctuator,
        value: '<<=',
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch1 === '>' && ch2 === '>' && ch3 === '=') {
      index += 3;
      return {
        type: Token.Punctuator,
        value: '>>=',
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
    if (ch2 === '=') {
      if ('<>=!+-*%&|^/'.indexOf(ch1) >= 0) {
        index += 2;
        return {
          type: Token.Punctuator,
          value: ch1 + ch2,
          lineNumber: lineNumber,
          lineStart: lineStart,
          range: [start, index]
        };
      }
    }
    if (ch1 === ch2 && ('+-<>&|'.indexOf(ch1) >= 0)) {
      if ('+-<>&|'.indexOf(ch2) >= 0) {
        index += 2;
        return {
          type: Token.Punctuator,
          value: ch1 + ch2,
          lineNumber: lineNumber,
          lineStart: lineStart,
          range: [start, index]
        };
      }
    }
    if ('[]<>+-*%&|^!~?:=/'.indexOf(ch1) >= 0) {
      return {
        type: Token.Punctuator,
        value: source[index++],
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [start, index]
      };
    }
  }
  function scanNumericLiteral() {
    var number,
        start,
        ch;
    ch = source[index];
    assert(isDecimalDigit(ch) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
    start = index;
    number = '';
    if (ch !== '.') {
      number = source[index++];
      ch = source[index];
      if (number === '0') {
        if (ch === 'x' || ch === 'X') {
          number += source[index++];
          while (index < length) {
            ch = source[index];
            if (!isHexDigit(ch)) {
              break;
            }
            number += source[index++];
          }
          if (number.length <= 2) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
          if (index < length) {
            ch = source[index];
            if (isIdentifierStart(ch)) {
              throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
          }
          return {
            type: Token.NumericLiteral,
            value: parseInt(number, 16),
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
          };
        } else if (isOctalDigit(ch)) {
          number += source[index++];
          while (index < length) {
            ch = source[index];
            if (!isOctalDigit(ch)) {
              break;
            }
            number += source[index++];
          }
          if (index < length) {
            ch = source[index];
            if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
              throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
            }
          }
          return {
            type: Token.NumericLiteral,
            value: parseInt(number, 8),
            octal: true,
            lineNumber: lineNumber,
            lineStart: lineStart,
            range: [start, index]
          };
        }
        if (isDecimalDigit(ch)) {
          throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
        }
      }
      while (index < length) {
        ch = source[index];
        if (!isDecimalDigit(ch)) {
          break;
        }
        number += source[index++];
      }
    }
    if (ch === '.') {
      number += source[index++];
      while (index < length) {
        ch = source[index];
        if (!isDecimalDigit(ch)) {
          break;
        }
        number += source[index++];
      }
    }
    if (ch === 'e' || ch === 'E') {
      number += source[index++];
      ch = source[index];
      if (ch === '+' || ch === '-') {
        number += source[index++];
      }
      ch = source[index];
      if (isDecimalDigit(ch)) {
        number += source[index++];
        while (index < length) {
          ch = source[index];
          if (!isDecimalDigit(ch)) {
            break;
          }
          number += source[index++];
        }
      } else {
        ch = 'character ' + ch;
        if (index >= length) {
          ch = '<end>';
        }
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
    }
    if (index < length) {
      ch = source[index];
      if (isIdentifierStart(ch)) {
        throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
      }
    }
    return {
      type: Token.NumericLiteral,
      value: parseFloat(number),
      lineNumber: lineNumber,
      lineStart: lineStart,
      range: [start, index]
    };
  }
  function scanStringLiteral() {
    var str = '',
        quote,
        start,
        ch,
        code,
        unescaped,
        restore,
        octal = false;
    quote = source[index];
    assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
    start = index;
    ++index;
    while (index < length) {
      ch = source[index++];
      if (ch === quote) {
        quote = '';
        break;
      } else if (ch === '\\') {
        ch = source[index++];
        if (!isLineTerminator(ch)) {
          switch (ch) {
            case 'n':
              str += '\n';
              break;
            case 'r':
              str += '\r';
              break;
            case 't':
              str += '\t';
              break;
            case 'u':
            case 'x':
              restore = index;
              unescaped = scanHexEscape(ch);
              if (unescaped) {
                str += unescaped;
              } else {
                index = restore;
                str += ch;
              }
              break;
            case 'b':
              str += '\b';
              break;
            case 'f':
              str += '\f';
              break;
            case 'v':
              str += '\x0B';
              break;
            default:
              if (isOctalDigit(ch)) {
                code = '01234567'.indexOf(ch);
                if (code !== 0) {
                  octal = true;
                }
                if (index < length && isOctalDigit(source[index])) {
                  octal = true;
                  code = code * 8 + '01234567'.indexOf(source[index++]);
                  if ('0123'.indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
                    code = code * 8 + '01234567'.indexOf(source[index++]);
                  }
                }
                str += String.fromCharCode(code);
              } else {
                str += ch;
              }
              break;
          }
        } else {
          ++lineNumber;
          if (ch === '\r' && source[index] === '\n') {
            ++index;
          }
        }
      } else if (isLineTerminator(ch)) {
        break;
      } else {
        str += ch;
      }
    }
    if (quote !== '') {
      throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
    }
    return {
      type: Token.StringLiteral,
      value: str,
      octal: octal,
      lineNumber: lineNumber,
      lineStart: lineStart,
      range: [start, index]
    };
  }
  function scanRegExp() {
    var str,
        ch,
        start,
        pattern,
        flags,
        value,
        classMarker = false,
        restore,
        terminated = false;
    buffer = null;
    skipComment();
    start = index;
    ch = source[index];
    assert(ch === '/', 'Regular expression literal must start with a slash');
    str = source[index++];
    while (index < length) {
      ch = source[index++];
      str += ch;
      if (ch === '\\') {
        ch = source[index++];
        if (isLineTerminator(ch)) {
          throwError({}, Messages.UnterminatedRegExp);
        }
        str += ch;
      } else if (classMarker) {
        if (ch === ']') {
          classMarker = false;
        }
      } else {
        if (ch === '/') {
          terminated = true;
          break;
        } else if (ch === '[') {
          classMarker = true;
        } else if (isLineTerminator(ch)) {
          throwError({}, Messages.UnterminatedRegExp);
        }
      }
    }
    if (!terminated) {
      throwError({}, Messages.UnterminatedRegExp);
    }
    pattern = str.substr(1, str.length - 2);
    flags = '';
    while (index < length) {
      ch = source[index];
      if (!isIdentifierPart(ch)) {
        break;
      }
      ++index;
      if (ch === '\\' && index < length) {
        ch = source[index];
        if (ch === 'u') {
          ++index;
          restore = index;
          ch = scanHexEscape('u');
          if (ch) {
            flags += ch;
            str += '\\u';
            for (; restore < index; ++restore) {
              str += source[restore];
            }
          } else {
            index = restore;
            flags += 'u';
            str += '\\u';
          }
        } else {
          str += '\\';
        }
      } else {
        flags += ch;
        str += ch;
      }
    }
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      throwError({}, Messages.InvalidRegExp);
    }
    return {
      literal: str,
      value: value,
      range: [start, index]
    };
  }
  function isIdentifierName(token) {
    return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
  }
  function advance() {
    var ch,
        token;
    skipComment();
    if (index >= length) {
      return {
        type: Token.EOF,
        lineNumber: lineNumber,
        lineStart: lineStart,
        range: [index, index]
      };
    }
    token = scanPunctuator();
    if (typeof token !== 'undefined') {
      return token;
    }
    ch = source[index];
    if (ch === '\'' || ch === '"') {
      return scanStringLiteral();
    }
    if (ch === '.' || isDecimalDigit(ch)) {
      return scanNumericLiteral();
    }
    token = scanIdentifier();
    if (typeof token !== 'undefined') {
      return token;
    }
    throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
  }
  function lex() {
    var token;
    if (buffer) {
      index = buffer.range[1];
      lineNumber = buffer.lineNumber;
      lineStart = buffer.lineStart;
      token = buffer;
      buffer = null;
      return token;
    }
    buffer = null;
    return advance();
  }
  function lookahead() {
    var pos,
        line,
        start;
    if (buffer !== null) {
      return buffer;
    }
    pos = index;
    line = lineNumber;
    start = lineStart;
    buffer = advance();
    index = pos;
    lineNumber = line;
    lineStart = start;
    return buffer;
  }
  function peekLineTerminator() {
    var pos,
        line,
        start,
        found;
    pos = index;
    line = lineNumber;
    start = lineStart;
    skipComment();
    found = lineNumber !== line;
    index = pos;
    lineNumber = line;
    lineStart = start;
    return found;
  }
  function throwError(token, messageFormat) {
    var error,
        args = Array.prototype.slice.call(arguments, 2),
        msg = messageFormat.replace(/%(\d)/g, function(whole, index) {
          return args[index] || '';
        });
    if (typeof token.lineNumber === 'number') {
      error = new Error('Line ' + token.lineNumber + ': ' + msg);
      error.index = token.range[0];
      error.lineNumber = token.lineNumber;
      error.column = token.range[0] - lineStart + 1;
    } else {
      error = new Error('Line ' + lineNumber + ': ' + msg);
      error.index = index;
      error.lineNumber = lineNumber;
      error.column = index - lineStart + 1;
    }
    throw error;
  }
  function throwErrorTolerant() {
    try {
      throwError.apply(null, arguments);
    } catch (e) {
      if (extra.errors) {
        extra.errors.push(e);
      } else {
        throw e;
      }
    }
  }
  function throwUnexpected(token) {
    if (token.type === Token.EOF) {
      throwError(token, Messages.UnexpectedEOS);
    }
    if (token.type === Token.NumericLiteral) {
      throwError(token, Messages.UnexpectedNumber);
    }
    if (token.type === Token.StringLiteral) {
      throwError(token, Messages.UnexpectedString);
    }
    if (token.type === Token.Identifier) {
      throwError(token, Messages.UnexpectedIdentifier);
    }
    if (token.type === Token.Keyword) {
      if (isFutureReservedWord(token.value)) {
        throwError(token, Messages.UnexpectedReserved);
      } else if (strict && isStrictModeReservedWord(token.value)) {
        throwErrorTolerant(token, Messages.StrictReservedWord);
        return;
      }
      throwError(token, Messages.UnexpectedToken, token.value);
    }
    throwError(token, Messages.UnexpectedToken, token.value);
  }
  function expect(value) {
    var token = lex();
    if (token.type !== Token.Punctuator || token.value !== value) {
      throwUnexpected(token);
    }
  }
  function expectKeyword(keyword) {
    var token = lex();
    if (token.type !== Token.Keyword || token.value !== keyword) {
      throwUnexpected(token);
    }
  }
  function match(value) {
    var token = lookahead();
    return token.type === Token.Punctuator && token.value === value;
  }
  function matchKeyword(keyword) {
    var token = lookahead();
    return token.type === Token.Keyword && token.value === keyword;
  }
  function matchAssign() {
    var token = lookahead(),
        op = token.value;
    if (token.type !== Token.Punctuator) {
      return false;
    }
    return op === '=' || op === '*=' || op === '/=' || op === '%=' || op === '+=' || op === '-=' || op === '<<=' || op === '>>=' || op === '>>>=' || op === '&=' || op === '^=' || op === '|=';
  }
  function consumeSemicolon() {
    var token,
        line;
    if (source[index] === ';') {
      lex();
      return;
    }
    line = lineNumber;
    skipComment();
    if (lineNumber !== line) {
      return;
    }
    if (match(';')) {
      lex();
      return;
    }
    token = lookahead();
    if (token.type !== Token.EOF && !match('}')) {
      throwUnexpected(token);
    }
  }
  function isLeftHandSide(expr) {
    return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
  }
  function parseArrayInitialiser() {
    var elements = [];
    expect('[');
    while (!match(']')) {
      if (match(',')) {
        lex();
        elements.push(null);
      } else {
        elements.push(parseAssignmentExpression());
        if (!match(']')) {
          expect(',');
        }
      }
    }
    expect(']');
    return {
      type: Syntax.ArrayExpression,
      elements: elements
    };
  }
  function parsePropertyFunction(param, first) {
    var previousStrict,
        body;
    previousStrict = strict;
    body = parseFunctionSourceElements();
    if (first && strict && isRestrictedWord(param[0].name)) {
      throwErrorTolerant(first, Messages.StrictParamName);
    }
    strict = previousStrict;
    return {
      type: Syntax.FunctionExpression,
      id: null,
      params: param,
      defaults: [],
      body: body,
      rest: null,
      generator: false,
      expression: false
    };
  }
  function parseObjectPropertyKey() {
    var token = lex();
    if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
      if (strict && token.octal) {
        throwErrorTolerant(token, Messages.StrictOctalLiteral);
      }
      return createLiteral(token);
    }
    return {
      type: Syntax.Identifier,
      name: token.value
    };
  }
  function parseObjectProperty() {
    var token,
        key,
        id,
        param;
    token = lookahead();
    if (token.type === Token.Identifier) {
      id = parseObjectPropertyKey();
      if (token.value === 'get' && !match(':')) {
        key = parseObjectPropertyKey();
        expect('(');
        expect(')');
        return {
          type: Syntax.Property,
          key: key,
          value: parsePropertyFunction([]),
          kind: 'get'
        };
      } else if (token.value === 'set' && !match(':')) {
        key = parseObjectPropertyKey();
        expect('(');
        token = lookahead();
        if (token.type !== Token.Identifier) {
          expect(')');
          throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
          return {
            type: Syntax.Property,
            key: key,
            value: parsePropertyFunction([]),
            kind: 'set'
          };
        } else {
          param = [parseVariableIdentifier()];
          expect(')');
          return {
            type: Syntax.Property,
            key: key,
            value: parsePropertyFunction(param, token),
            kind: 'set'
          };
        }
      } else {
        expect(':');
        return {
          type: Syntax.Property,
          key: id,
          value: parseAssignmentExpression(),
          kind: 'init'
        };
      }
    } else if (token.type === Token.EOF || token.type === Token.Punctuator) {
      throwUnexpected(token);
    } else {
      key = parseObjectPropertyKey();
      expect(':');
      return {
        type: Syntax.Property,
        key: key,
        value: parseAssignmentExpression(),
        kind: 'init'
      };
    }
  }
  function parseObjectInitialiser() {
    var properties = [],
        property,
        name,
        kind,
        map = {},
        toString = String;
    expect('{');
    while (!match('}')) {
      property = parseObjectProperty();
      if (property.key.type === Syntax.Identifier) {
        name = property.key.name;
      } else {
        name = toString(property.key.value);
      }
      kind = (property.kind === 'init') ? PropertyKind.Data : (property.kind === 'get') ? PropertyKind.Get : PropertyKind.Set;
      if (Object.prototype.hasOwnProperty.call(map, name)) {
        if (map[name] === PropertyKind.Data) {
          if (strict && kind === PropertyKind.Data) {
            throwErrorTolerant({}, Messages.StrictDuplicateProperty);
          } else if (kind !== PropertyKind.Data) {
            throwErrorTolerant({}, Messages.AccessorDataProperty);
          }
        } else {
          if (kind === PropertyKind.Data) {
            throwErrorTolerant({}, Messages.AccessorDataProperty);
          } else if (map[name] & kind) {
            throwErrorTolerant({}, Messages.AccessorGetSet);
          }
        }
        map[name] |= kind;
      } else {
        map[name] = kind;
      }
      properties.push(property);
      if (!match('}')) {
        expect(',');
      }
    }
    expect('}');
    return {
      type: Syntax.ObjectExpression,
      properties: properties
    };
  }
  function parseGroupExpression() {
    var expr;
    expect('(');
    expr = parseExpression();
    expect(')');
    return expr;
  }
  function parsePrimaryExpression() {
    var token = lookahead(),
        type = token.type;
    if (type === Token.Identifier) {
      return {
        type: Syntax.Identifier,
        name: lex().value
      };
    }
    if (type === Token.StringLiteral || type === Token.NumericLiteral) {
      if (strict && token.octal) {
        throwErrorTolerant(token, Messages.StrictOctalLiteral);
      }
      return createLiteral(lex());
    }
    if (type === Token.Keyword) {
      if (matchKeyword('this')) {
        lex();
        return {type: Syntax.ThisExpression};
      }
      if (matchKeyword('function')) {
        return parseFunctionExpression();
      }
    }
    if (type === Token.BooleanLiteral) {
      lex();
      token.value = (token.value === 'true');
      return createLiteral(token);
    }
    if (type === Token.NullLiteral) {
      lex();
      token.value = null;
      return createLiteral(token);
    }
    if (match('[')) {
      return parseArrayInitialiser();
    }
    if (match('{')) {
      return parseObjectInitialiser();
    }
    if (match('(')) {
      return parseGroupExpression();
    }
    if (match('/') || match('/=')) {
      return createLiteral(scanRegExp());
    }
    return throwUnexpected(lex());
  }
  function parseArguments() {
    var args = [];
    expect('(');
    if (!match(')')) {
      while (index < length) {
        args.push(parseAssignmentExpression());
        if (match(')')) {
          break;
        }
        expect(',');
      }
    }
    expect(')');
    return args;
  }
  function parseNonComputedProperty() {
    var token = lex();
    if (!isIdentifierName(token)) {
      throwUnexpected(token);
    }
    return {
      type: Syntax.Identifier,
      name: token.value
    };
  }
  function parseNonComputedMember() {
    expect('.');
    return parseNonComputedProperty();
  }
  function parseComputedMember() {
    var expr;
    expect('[');
    expr = parseExpression();
    expect(']');
    return expr;
  }
  function parseNewExpression() {
    var expr;
    expectKeyword('new');
    expr = {
      type: Syntax.NewExpression,
      callee: parseLeftHandSideExpression(),
      'arguments': []
    };
    if (match('(')) {
      expr['arguments'] = parseArguments();
    }
    return expr;
  }
  function parseLeftHandSideExpressionAllowCall() {
    var expr;
    expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
    while (match('.') || match('[') || match('(')) {
      if (match('(')) {
        expr = {
          type: Syntax.CallExpression,
          callee: expr,
          'arguments': parseArguments()
        };
      } else if (match('[')) {
        expr = {
          type: Syntax.MemberExpression,
          computed: true,
          object: expr,
          property: parseComputedMember()
        };
      } else {
        expr = {
          type: Syntax.MemberExpression,
          computed: false,
          object: expr,
          property: parseNonComputedMember()
        };
      }
    }
    return expr;
  }
  function parseLeftHandSideExpression() {
    var expr;
    expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
    while (match('.') || match('[')) {
      if (match('[')) {
        expr = {
          type: Syntax.MemberExpression,
          computed: true,
          object: expr,
          property: parseComputedMember()
        };
      } else {
        expr = {
          type: Syntax.MemberExpression,
          computed: false,
          object: expr,
          property: parseNonComputedMember()
        };
      }
    }
    return expr;
  }
  function parsePostfixExpression() {
    var expr = parseLeftHandSideExpressionAllowCall(),
        token;
    token = lookahead();
    if (token.type !== Token.Punctuator) {
      return expr;
    }
    if ((match('++') || match('--')) && !peekLineTerminator()) {
      if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
        throwErrorTolerant({}, Messages.StrictLHSPostfix);
      }
      if (!isLeftHandSide(expr)) {
        throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
      }
      expr = {
        type: Syntax.UpdateExpression,
        operator: lex().value,
        argument: expr,
        prefix: false
      };
    }
    return expr;
  }
  function parseUnaryExpression() {
    var token,
        expr;
    token = lookahead();
    if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
      return parsePostfixExpression();
    }
    if (match('++') || match('--')) {
      token = lex();
      expr = parseUnaryExpression();
      if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
        throwErrorTolerant({}, Messages.StrictLHSPrefix);
      }
      if (!isLeftHandSide(expr)) {
        throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
      }
      expr = {
        type: Syntax.UpdateExpression,
        operator: token.value,
        argument: expr,
        prefix: true
      };
      return expr;
    }
    if (match('+') || match('-') || match('~') || match('!')) {
      expr = {
        type: Syntax.UnaryExpression,
        operator: lex().value,
        argument: parseUnaryExpression(),
        prefix: true
      };
      return expr;
    }
    if (matchKeyword('delete') || matchKeyword('void') || matchKeyword('typeof')) {
      expr = {
        type: Syntax.UnaryExpression,
        operator: lex().value,
        argument: parseUnaryExpression(),
        prefix: true
      };
      if (strict && expr.operator === 'delete' && expr.argument.type === Syntax.Identifier) {
        throwErrorTolerant({}, Messages.StrictDelete);
      }
      return expr;
    }
    return parsePostfixExpression();
  }
  function parseMultiplicativeExpression() {
    var expr = parseUnaryExpression();
    while (match('*') || match('/') || match('%')) {
      expr = {
        type: Syntax.BinaryExpression,
        operator: lex().value,
        left: expr,
        right: parseUnaryExpression()
      };
    }
    return expr;
  }
  function parseAdditiveExpression() {
    var expr = parseMultiplicativeExpression();
    while (match('+') || match('-')) {
      expr = {
        type: Syntax.BinaryExpression,
        operator: lex().value,
        left: expr,
        right: parseMultiplicativeExpression()
      };
    }
    return expr;
  }
  function parseShiftExpression() {
    var expr = parseAdditiveExpression();
    while (match('<<') || match('>>') || match('>>>')) {
      expr = {
        type: Syntax.BinaryExpression,
        operator: lex().value,
        left: expr,
        right: parseAdditiveExpression()
      };
    }
    return expr;
  }
  function parseRelationalExpression() {
    var expr,
        previousAllowIn;
    previousAllowIn = state.allowIn;
    state.allowIn = true;
    expr = parseShiftExpression();
    while (match('<') || match('>') || match('<=') || match('>=') || (previousAllowIn && matchKeyword('in')) || matchKeyword('instanceof')) {
      expr = {
        type: Syntax.BinaryExpression,
        operator: lex().value,
        left: expr,
        right: parseShiftExpression()
      };
    }
    state.allowIn = previousAllowIn;
    return expr;
  }
  function parseEqualityExpression() {
    var expr = parseRelationalExpression();
    while (match('==') || match('!=') || match('===') || match('!==')) {
      expr = {
        type: Syntax.BinaryExpression,
        operator: lex().value,
        left: expr,
        right: parseRelationalExpression()
      };
    }
    return expr;
  }
  function parseBitwiseANDExpression() {
    var expr = parseEqualityExpression();
    while (match('&')) {
      lex();
      expr = {
        type: Syntax.BinaryExpression,
        operator: '&',
        left: expr,
        right: parseEqualityExpression()
      };
    }
    return expr;
  }
  function parseBitwiseXORExpression() {
    var expr = parseBitwiseANDExpression();
    while (match('^')) {
      lex();
      expr = {
        type: Syntax.BinaryExpression,
        operator: '^',
        left: expr,
        right: parseBitwiseANDExpression()
      };
    }
    return expr;
  }
  function parseBitwiseORExpression() {
    var expr = parseBitwiseXORExpression();
    while (match('|')) {
      lex();
      expr = {
        type: Syntax.BinaryExpression,
        operator: '|',
        left: expr,
        right: parseBitwiseXORExpression()
      };
    }
    return expr;
  }
  function parseLogicalANDExpression() {
    var expr = parseBitwiseORExpression();
    while (match('&&')) {
      lex();
      expr = {
        type: Syntax.LogicalExpression,
        operator: '&&',
        left: expr,
        right: parseBitwiseORExpression()
      };
    }
    return expr;
  }
  function parseLogicalORExpression() {
    var expr = parseLogicalANDExpression();
    while (match('||')) {
      lex();
      expr = {
        type: Syntax.LogicalExpression,
        operator: '||',
        left: expr,
        right: parseLogicalANDExpression()
      };
    }
    return expr;
  }
  function parseConditionalExpression() {
    var expr,
        previousAllowIn,
        consequent;
    expr = parseLogicalORExpression();
    if (match('?')) {
      lex();
      previousAllowIn = state.allowIn;
      state.allowIn = true;
      consequent = parseAssignmentExpression();
      state.allowIn = previousAllowIn;
      expect(':');
      expr = {
        type: Syntax.ConditionalExpression,
        test: expr,
        consequent: consequent,
        alternate: parseAssignmentExpression()
      };
    }
    return expr;
  }
  function parseAssignmentExpression() {
    var token,
        expr;
    token = lookahead();
    expr = parseConditionalExpression();
    if (matchAssign()) {
      if (!isLeftHandSide(expr)) {
        throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
      }
      if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
        throwErrorTolerant(token, Messages.StrictLHSAssignment);
      }
      expr = {
        type: Syntax.AssignmentExpression,
        operator: lex().value,
        left: expr,
        right: parseAssignmentExpression()
      };
    }
    return expr;
  }
  function parseExpression() {
    var expr = parseAssignmentExpression();
    if (match(',')) {
      expr = {
        type: Syntax.SequenceExpression,
        expressions: [expr]
      };
      while (index < length) {
        if (!match(',')) {
          break;
        }
        lex();
        expr.expressions.push(parseAssignmentExpression());
      }
    }
    return expr;
  }
  function parseStatementList() {
    var list = [],
        statement;
    while (index < length) {
      if (match('}')) {
        break;
      }
      statement = parseSourceElement();
      if (typeof statement === 'undefined') {
        break;
      }
      list.push(statement);
    }
    return list;
  }
  function parseBlock() {
    var block;
    expect('{');
    block = parseStatementList();
    expect('}');
    return {
      type: Syntax.BlockStatement,
      body: block
    };
  }
  function parseVariableIdentifier() {
    var token = lex();
    if (token.type !== Token.Identifier) {
      throwUnexpected(token);
    }
    return {
      type: Syntax.Identifier,
      name: token.value
    };
  }
  function parseVariableDeclaration(kind) {
    var id = parseVariableIdentifier(),
        init = null;
    if (strict && isRestrictedWord(id.name)) {
      throwErrorTolerant({}, Messages.StrictVarName);
    }
    if (kind === 'const') {
      expect('=');
      init = parseAssignmentExpression();
    } else if (match('=')) {
      lex();
      init = parseAssignmentExpression();
    }
    return {
      type: Syntax.VariableDeclarator,
      id: id,
      init: init
    };
  }
  function parseVariableDeclarationList(kind) {
    var list = [];
    do {
      list.push(parseVariableDeclaration(kind));
      if (!match(',')) {
        break;
      }
      lex();
    } while (index < length);
    return list;
  }
  function parseVariableStatement() {
    var declarations;
    expectKeyword('var');
    declarations = parseVariableDeclarationList();
    consumeSemicolon();
    return {
      type: Syntax.VariableDeclaration,
      declarations: declarations,
      kind: 'var'
    };
  }
  function parseConstLetDeclaration(kind) {
    var declarations;
    expectKeyword(kind);
    declarations = parseVariableDeclarationList(kind);
    consumeSemicolon();
    return {
      type: Syntax.VariableDeclaration,
      declarations: declarations,
      kind: kind
    };
  }
  function parseEmptyStatement() {
    expect(';');
    return {type: Syntax.EmptyStatement};
  }
  function parseExpressionStatement() {
    var expr = parseExpression();
    consumeSemicolon();
    return {
      type: Syntax.ExpressionStatement,
      expression: expr
    };
  }
  function parseIfStatement() {
    var test,
        consequent,
        alternate;
    expectKeyword('if');
    expect('(');
    test = parseExpression();
    expect(')');
    consequent = parseStatement();
    if (matchKeyword('else')) {
      lex();
      alternate = parseStatement();
    } else {
      alternate = null;
    }
    return {
      type: Syntax.IfStatement,
      test: test,
      consequent: consequent,
      alternate: alternate
    };
  }
  function parseDoWhileStatement() {
    var body,
        test,
        oldInIteration;
    expectKeyword('do');
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    expectKeyword('while');
    expect('(');
    test = parseExpression();
    expect(')');
    if (match(';')) {
      lex();
    }
    return {
      type: Syntax.DoWhileStatement,
      body: body,
      test: test
    };
  }
  function parseWhileStatement() {
    var test,
        body,
        oldInIteration;
    expectKeyword('while');
    expect('(');
    test = parseExpression();
    expect(')');
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    return {
      type: Syntax.WhileStatement,
      test: test,
      body: body
    };
  }
  function parseForVariableDeclaration() {
    var token = lex();
    return {
      type: Syntax.VariableDeclaration,
      declarations: parseVariableDeclarationList(),
      kind: token.value
    };
  }
  function parseForStatement() {
    var init,
        test,
        update,
        left,
        right,
        body,
        oldInIteration;
    init = test = update = null;
    expectKeyword('for');
    expect('(');
    if (match(';')) {
      lex();
    } else {
      if (matchKeyword('var') || matchKeyword('let')) {
        state.allowIn = false;
        init = parseForVariableDeclaration();
        state.allowIn = true;
        if (init.declarations.length === 1 && matchKeyword('in')) {
          lex();
          left = init;
          right = parseExpression();
          init = null;
        }
      } else {
        state.allowIn = false;
        init = parseExpression();
        state.allowIn = true;
        if (matchKeyword('in')) {
          if (!isLeftHandSide(init)) {
            throwErrorTolerant({}, Messages.InvalidLHSInForIn);
          }
          lex();
          left = init;
          right = parseExpression();
          init = null;
        }
      }
      if (typeof left === 'undefined') {
        expect(';');
      }
    }
    if (typeof left === 'undefined') {
      if (!match(';')) {
        test = parseExpression();
      }
      expect(';');
      if (!match(')')) {
        update = parseExpression();
      }
    }
    expect(')');
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    if (typeof left === 'undefined') {
      return {
        type: Syntax.ForStatement,
        init: init,
        test: test,
        update: update,
        body: body
      };
    }
    return {
      type: Syntax.ForInStatement,
      left: left,
      right: right,
      body: body,
      each: false
    };
  }
  function parseContinueStatement() {
    var token,
        label = null;
    expectKeyword('continue');
    if (source[index] === ';') {
      lex();
      if (!state.inIteration) {
        throwError({}, Messages.IllegalContinue);
      }
      return {
        type: Syntax.ContinueStatement,
        label: null
      };
    }
    if (peekLineTerminator()) {
      if (!state.inIteration) {
        throwError({}, Messages.IllegalContinue);
      }
      return {
        type: Syntax.ContinueStatement,
        label: null
      };
    }
    token = lookahead();
    if (token.type === Token.Identifier) {
      label = parseVariableIdentifier();
      if (!Object.prototype.hasOwnProperty.call(state.labelSet, label.name)) {
        throwError({}, Messages.UnknownLabel, label.name);
      }
    }
    consumeSemicolon();
    if (label === null && !state.inIteration) {
      throwError({}, Messages.IllegalContinue);
    }
    return {
      type: Syntax.ContinueStatement,
      label: label
    };
  }
  function parseBreakStatement() {
    var token,
        label = null;
    expectKeyword('break');
    if (source[index] === ';') {
      lex();
      if (!(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
      }
      return {
        type: Syntax.BreakStatement,
        label: null
      };
    }
    if (peekLineTerminator()) {
      if (!(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
      }
      return {
        type: Syntax.BreakStatement,
        label: null
      };
    }
    token = lookahead();
    if (token.type === Token.Identifier) {
      label = parseVariableIdentifier();
      if (!Object.prototype.hasOwnProperty.call(state.labelSet, label.name)) {
        throwError({}, Messages.UnknownLabel, label.name);
      }
    }
    consumeSemicolon();
    if (label === null && !(state.inIteration || state.inSwitch)) {
      throwError({}, Messages.IllegalBreak);
    }
    return {
      type: Syntax.BreakStatement,
      label: label
    };
  }
  function parseReturnStatement() {
    var token,
        argument = null;
    expectKeyword('return');
    if (!state.inFunctionBody) {
      throwErrorTolerant({}, Messages.IllegalReturn);
    }
    if (source[index] === ' ') {
      if (isIdentifierStart(source[index + 1])) {
        argument = parseExpression();
        consumeSemicolon();
        return {
          type: Syntax.ReturnStatement,
          argument: argument
        };
      }
    }
    if (peekLineTerminator()) {
      return {
        type: Syntax.ReturnStatement,
        argument: null
      };
    }
    if (!match(';')) {
      token = lookahead();
      if (!match('}') && token.type !== Token.EOF) {
        argument = parseExpression();
      }
    }
    consumeSemicolon();
    return {
      type: Syntax.ReturnStatement,
      argument: argument
    };
  }
  function parseWithStatement() {
    var object,
        body;
    if (strict) {
      throwErrorTolerant({}, Messages.StrictModeWith);
    }
    expectKeyword('with');
    expect('(');
    object = parseExpression();
    expect(')');
    body = parseStatement();
    return {
      type: Syntax.WithStatement,
      object: object,
      body: body
    };
  }
  function parseSwitchCase() {
    var test,
        consequent = [],
        statement;
    if (matchKeyword('default')) {
      lex();
      test = null;
    } else {
      expectKeyword('case');
      test = parseExpression();
    }
    expect(':');
    while (index < length) {
      if (match('}') || matchKeyword('default') || matchKeyword('case')) {
        break;
      }
      statement = parseStatement();
      if (typeof statement === 'undefined') {
        break;
      }
      consequent.push(statement);
    }
    return {
      type: Syntax.SwitchCase,
      test: test,
      consequent: consequent
    };
  }
  function parseSwitchStatement() {
    var discriminant,
        cases,
        clause,
        oldInSwitch,
        defaultFound;
    expectKeyword('switch');
    expect('(');
    discriminant = parseExpression();
    expect(')');
    expect('{');
    cases = [];
    if (match('}')) {
      lex();
      return {
        type: Syntax.SwitchStatement,
        discriminant: discriminant,
        cases: cases
      };
    }
    oldInSwitch = state.inSwitch;
    state.inSwitch = true;
    defaultFound = false;
    while (index < length) {
      if (match('}')) {
        break;
      }
      clause = parseSwitchCase();
      if (clause.test === null) {
        if (defaultFound) {
          throwError({}, Messages.MultipleDefaultsInSwitch);
        }
        defaultFound = true;
      }
      cases.push(clause);
    }
    state.inSwitch = oldInSwitch;
    expect('}');
    return {
      type: Syntax.SwitchStatement,
      discriminant: discriminant,
      cases: cases
    };
  }
  function parseThrowStatement() {
    var argument;
    expectKeyword('throw');
    if (peekLineTerminator()) {
      throwError({}, Messages.NewlineAfterThrow);
    }
    argument = parseExpression();
    consumeSemicolon();
    return {
      type: Syntax.ThrowStatement,
      argument: argument
    };
  }
  function parseCatchClause() {
    var param;
    expectKeyword('catch');
    expect('(');
    if (match(')')) {
      throwUnexpected(lookahead());
    }
    param = parseVariableIdentifier();
    if (strict && isRestrictedWord(param.name)) {
      throwErrorTolerant({}, Messages.StrictCatchVariable);
    }
    expect(')');
    return {
      type: Syntax.CatchClause,
      param: param,
      body: parseBlock()
    };
  }
  function parseTryStatement() {
    var block,
        handlers = [],
        finalizer = null;
    expectKeyword('try');
    block = parseBlock();
    if (matchKeyword('catch')) {
      handlers.push(parseCatchClause());
    }
    if (matchKeyword('finally')) {
      lex();
      finalizer = parseBlock();
    }
    if (handlers.length === 0 && !finalizer) {
      throwError({}, Messages.NoCatchOrFinally);
    }
    return {
      type: Syntax.TryStatement,
      block: block,
      guardedHandlers: [],
      handlers: handlers,
      finalizer: finalizer
    };
  }
  function parseDebuggerStatement() {
    expectKeyword('debugger');
    consumeSemicolon();
    return {type: Syntax.DebuggerStatement};
  }
  function parseStatement() {
    var token = lookahead(),
        expr,
        labeledBody;
    if (token.type === Token.EOF) {
      throwUnexpected(token);
    }
    if (token.type === Token.Punctuator) {
      switch (token.value) {
        case ';':
          return parseEmptyStatement();
        case '{':
          return parseBlock();
        case '(':
          return parseExpressionStatement();
        default:
          break;
      }
    }
    if (token.type === Token.Keyword) {
      switch (token.value) {
        case 'break':
          return parseBreakStatement();
        case 'continue':
          return parseContinueStatement();
        case 'debugger':
          return parseDebuggerStatement();
        case 'do':
          return parseDoWhileStatement();
        case 'for':
          return parseForStatement();
        case 'function':
          return parseFunctionDeclaration();
        case 'if':
          return parseIfStatement();
        case 'return':
          return parseReturnStatement();
        case 'switch':
          return parseSwitchStatement();
        case 'throw':
          return parseThrowStatement();
        case 'try':
          return parseTryStatement();
        case 'var':
          return parseVariableStatement();
        case 'while':
          return parseWhileStatement();
        case 'with':
          return parseWithStatement();
        default:
          break;
      }
    }
    expr = parseExpression();
    if ((expr.type === Syntax.Identifier) && match(':')) {
      lex();
      if (Object.prototype.hasOwnProperty.call(state.labelSet, expr.name)) {
        throwError({}, Messages.Redeclaration, 'Label', expr.name);
      }
      state.labelSet[expr.name] = true;
      labeledBody = parseStatement();
      delete state.labelSet[expr.name];
      return {
        type: Syntax.LabeledStatement,
        label: expr,
        body: labeledBody
      };
    }
    consumeSemicolon();
    return {
      type: Syntax.ExpressionStatement,
      expression: expr
    };
  }
  function parseFunctionSourceElements() {
    var sourceElement,
        sourceElements = [],
        token,
        directive,
        firstRestricted,
        oldLabelSet,
        oldInIteration,
        oldInSwitch,
        oldInFunctionBody;
    expect('{');
    while (index < length) {
      token = lookahead();
      if (token.type !== Token.StringLiteral) {
        break;
      }
      sourceElement = parseSourceElement();
      sourceElements.push(sourceElement);
      if (sourceElement.expression.type !== Syntax.Literal) {
        break;
      }
      directive = sliceSource(token.range[0] + 1, token.range[1] - 1);
      if (directive === 'use strict') {
        strict = true;
        if (firstRestricted) {
          throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
        }
      } else {
        if (!firstRestricted && token.octal) {
          firstRestricted = token;
        }
      }
    }
    oldLabelSet = state.labelSet;
    oldInIteration = state.inIteration;
    oldInSwitch = state.inSwitch;
    oldInFunctionBody = state.inFunctionBody;
    state.labelSet = {};
    state.inIteration = false;
    state.inSwitch = false;
    state.inFunctionBody = true;
    while (index < length) {
      if (match('}')) {
        break;
      }
      sourceElement = parseSourceElement();
      if (typeof sourceElement === 'undefined') {
        break;
      }
      sourceElements.push(sourceElement);
    }
    expect('}');
    state.labelSet = oldLabelSet;
    state.inIteration = oldInIteration;
    state.inSwitch = oldInSwitch;
    state.inFunctionBody = oldInFunctionBody;
    return {
      type: Syntax.BlockStatement,
      body: sourceElements
    };
  }
  function parseFunctionDeclaration() {
    var id,
        param,
        params = [],
        body,
        token,
        stricted,
        firstRestricted,
        message,
        previousStrict,
        paramSet;
    expectKeyword('function');
    token = lookahead();
    id = parseVariableIdentifier();
    if (strict) {
      if (isRestrictedWord(token.value)) {
        throwErrorTolerant(token, Messages.StrictFunctionName);
      }
    } else {
      if (isRestrictedWord(token.value)) {
        firstRestricted = token;
        message = Messages.StrictFunctionName;
      } else if (isStrictModeReservedWord(token.value)) {
        firstRestricted = token;
        message = Messages.StrictReservedWord;
      }
    }
    expect('(');
    if (!match(')')) {
      paramSet = {};
      while (index < length) {
        token = lookahead();
        param = parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            stricted = token;
            message = Messages.StrictParamName;
          }
          if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
            stricted = token;
            message = Messages.StrictParamDupe;
          }
        } else if (!firstRestricted) {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictParamName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          } else if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
            firstRestricted = token;
            message = Messages.StrictParamDupe;
          }
        }
        params.push(param);
        paramSet[param.name] = true;
        if (match(')')) {
          break;
        }
        expect(',');
      }
    }
    expect(')');
    previousStrict = strict;
    body = parseFunctionSourceElements();
    if (strict && firstRestricted) {
      throwError(firstRestricted, message);
    }
    if (strict && stricted) {
      throwErrorTolerant(stricted, message);
    }
    strict = previousStrict;
    return {
      type: Syntax.FunctionDeclaration,
      id: id,
      params: params,
      defaults: [],
      body: body,
      rest: null,
      generator: false,
      expression: false
    };
  }
  function parseFunctionExpression() {
    var token,
        id = null,
        stricted,
        firstRestricted,
        message,
        param,
        params = [],
        body,
        previousStrict,
        paramSet;
    expectKeyword('function');
    if (!match('(')) {
      token = lookahead();
      id = parseVariableIdentifier();
      if (strict) {
        if (isRestrictedWord(token.value)) {
          throwErrorTolerant(token, Messages.StrictFunctionName);
        }
      } else {
        if (isRestrictedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictFunctionName;
        } else if (isStrictModeReservedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictReservedWord;
        }
      }
    }
    expect('(');
    if (!match(')')) {
      paramSet = {};
      while (index < length) {
        token = lookahead();
        param = parseVariableIdentifier();
        if (strict) {
          if (isRestrictedWord(token.value)) {
            stricted = token;
            message = Messages.StrictParamName;
          }
          if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
            stricted = token;
            message = Messages.StrictParamDupe;
          }
        } else if (!firstRestricted) {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictParamName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          } else if (Object.prototype.hasOwnProperty.call(paramSet, token.value)) {
            firstRestricted = token;
            message = Messages.StrictParamDupe;
          }
        }
        params.push(param);
        paramSet[param.name] = true;
        if (match(')')) {
          break;
        }
        expect(',');
      }
    }
    expect(')');
    previousStrict = strict;
    body = parseFunctionSourceElements();
    if (strict && firstRestricted) {
      throwError(firstRestricted, message);
    }
    if (strict && stricted) {
      throwErrorTolerant(stricted, message);
    }
    strict = previousStrict;
    return {
      type: Syntax.FunctionExpression,
      id: id,
      params: params,
      defaults: [],
      body: body,
      rest: null,
      generator: false,
      expression: false
    };
  }
  function parseSourceElement() {
    var token = lookahead();
    if (token.type === Token.Keyword) {
      switch (token.value) {
        case 'const':
        case 'let':
          return parseConstLetDeclaration(token.value);
        case 'function':
          return parseFunctionDeclaration();
        default:
          return parseStatement();
      }
    }
    if (token.type !== Token.EOF) {
      return parseStatement();
    }
  }
  function parseSourceElements() {
    var sourceElement,
        sourceElements = [],
        token,
        directive,
        firstRestricted;
    while (index < length) {
      token = lookahead();
      if (token.type !== Token.StringLiteral) {
        break;
      }
      sourceElement = parseSourceElement();
      sourceElements.push(sourceElement);
      if (sourceElement.expression.type !== Syntax.Literal) {
        break;
      }
      directive = sliceSource(token.range[0] + 1, token.range[1] - 1);
      if (directive === 'use strict') {
        strict = true;
        if (firstRestricted) {
          throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
        }
      } else {
        if (!firstRestricted && token.octal) {
          firstRestricted = token;
        }
      }
    }
    while (index < length) {
      sourceElement = parseSourceElement();
      if (typeof sourceElement === 'undefined') {
        break;
      }
      sourceElements.push(sourceElement);
    }
    return sourceElements;
  }
  function parseProgram() {
    var program;
    strict = false;
    program = {
      type: Syntax.Program,
      body: parseSourceElements()
    };
    return program;
  }
  function addComment(type, value, start, end, loc) {
    assert(typeof start === 'number', 'Comment must have valid position');
    if (extra.comments.length > 0) {
      if (extra.comments[extra.comments.length - 1].range[1] > start) {
        return;
      }
    }
    extra.comments.push({
      type: type,
      value: value,
      range: [start, end],
      loc: loc
    });
  }
  function scanComment() {
    var comment,
        ch,
        loc,
        start,
        blockComment,
        lineComment;
    comment = '';
    blockComment = false;
    lineComment = false;
    while (index < length) {
      ch = source[index];
      if (lineComment) {
        ch = source[index++];
        if (isLineTerminator(ch)) {
          loc.end = {
            line: lineNumber,
            column: index - lineStart - 1
          };
          lineComment = false;
          addComment('Line', comment, start, index - 1, loc);
          if (ch === '\r' && source[index] === '\n') {
            ++index;
          }
          ++lineNumber;
          lineStart = index;
          comment = '';
        } else if (index >= length) {
          lineComment = false;
          comment += ch;
          loc.end = {
            line: lineNumber,
            column: length - lineStart
          };
          addComment('Line', comment, start, length, loc);
        } else {
          comment += ch;
        }
      } else if (blockComment) {
        if (isLineTerminator(ch)) {
          if (ch === '\r' && source[index + 1] === '\n') {
            ++index;
            comment += '\r\n';
          } else {
            comment += ch;
          }
          ++lineNumber;
          ++index;
          lineStart = index;
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else {
          ch = source[index++];
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
          comment += ch;
          if (ch === '*') {
            ch = source[index];
            if (ch === '/') {
              comment = comment.substr(0, comment.length - 1);
              blockComment = false;
              ++index;
              loc.end = {
                line: lineNumber,
                column: index - lineStart
              };
              addComment('Block', comment, start, index, loc);
              comment = '';
            }
          }
        }
      } else if (ch === '/') {
        ch = source[index + 1];
        if (ch === '/') {
          loc = {start: {
              line: lineNumber,
              column: index - lineStart
            }};
          start = index;
          index += 2;
          lineComment = true;
          if (index >= length) {
            loc.end = {
              line: lineNumber,
              column: index - lineStart
            };
            lineComment = false;
            addComment('Line', comment, start, index, loc);
          }
        } else if (ch === '*') {
          start = index;
          index += 2;
          blockComment = true;
          loc = {start: {
              line: lineNumber,
              column: index - lineStart - 2
            }};
          if (index >= length) {
            throwError({}, Messages.UnexpectedToken, 'ILLEGAL');
          }
        } else {
          break;
        }
      } else if (isWhiteSpace(ch)) {
        ++index;
      } else if (isLineTerminator(ch)) {
        ++index;
        if (ch === '\r' && source[index] === '\n') {
          ++index;
        }
        ++lineNumber;
        lineStart = index;
      } else {
        break;
      }
    }
  }
  function filterCommentLocation() {
    var i,
        entry,
        comment,
        comments = [];
    for (i = 0; i < extra.comments.length; ++i) {
      entry = extra.comments[i];
      comment = {
        type: entry.type,
        value: entry.value
      };
      if (extra.range) {
        comment.range = entry.range;
      }
      if (extra.loc) {
        comment.loc = entry.loc;
      }
      comments.push(comment);
    }
    extra.comments = comments;
  }
  function collectToken() {
    var start,
        loc,
        token,
        range,
        value;
    skipComment();
    start = index;
    loc = {start: {
        line: lineNumber,
        column: index - lineStart
      }};
    token = extra.advance();
    loc.end = {
      line: lineNumber,
      column: index - lineStart
    };
    if (token.type !== Token.EOF) {
      range = [token.range[0], token.range[1]];
      value = sliceSource(token.range[0], token.range[1]);
      extra.tokens.push({
        type: TokenName[token.type],
        value: value,
        range: range,
        loc: loc
      });
    }
    return token;
  }
  function collectRegex() {
    var pos,
        loc,
        regex,
        token;
    skipComment();
    pos = index;
    loc = {start: {
        line: lineNumber,
        column: index - lineStart
      }};
    regex = extra.scanRegExp();
    loc.end = {
      line: lineNumber,
      column: index - lineStart
    };
    if (extra.tokens.length > 0) {
      token = extra.tokens[extra.tokens.length - 1];
      if (token.range[0] === pos && token.type === 'Punctuator') {
        if (token.value === '/' || token.value === '/=') {
          extra.tokens.pop();
        }
      }
    }
    extra.tokens.push({
      type: 'RegularExpression',
      value: regex.literal,
      range: [pos, index],
      loc: loc
    });
    return regex;
  }
  function filterTokenLocation() {
    var i,
        entry,
        token,
        tokens = [];
    for (i = 0; i < extra.tokens.length; ++i) {
      entry = extra.tokens[i];
      token = {
        type: entry.type,
        value: entry.value
      };
      if (extra.range) {
        token.range = entry.range;
      }
      if (extra.loc) {
        token.loc = entry.loc;
      }
      tokens.push(token);
    }
    extra.tokens = tokens;
  }
  function createLiteral(token) {
    return {
      type: Syntax.Literal,
      value: token.value
    };
  }
  function createRawLiteral(token) {
    return {
      type: Syntax.Literal,
      value: token.value,
      raw: sliceSource(token.range[0], token.range[1])
    };
  }
  function createLocationMarker() {
    var marker = {};
    marker.range = [index, index];
    marker.loc = {
      start: {
        line: lineNumber,
        column: index - lineStart
      },
      end: {
        line: lineNumber,
        column: index - lineStart
      }
    };
    marker.end = function() {
      this.range[1] = index;
      this.loc.end.line = lineNumber;
      this.loc.end.column = index - lineStart;
    };
    marker.applyGroup = function(node) {
      if (extra.range) {
        node.groupRange = [this.range[0], this.range[1]];
      }
      if (extra.loc) {
        node.groupLoc = {
          start: {
            line: this.loc.start.line,
            column: this.loc.start.column
          },
          end: {
            line: this.loc.end.line,
            column: this.loc.end.column
          }
        };
      }
    };
    marker.apply = function(node) {
      if (extra.range) {
        node.range = [this.range[0], this.range[1]];
      }
      if (extra.loc) {
        node.loc = {
          start: {
            line: this.loc.start.line,
            column: this.loc.start.column
          },
          end: {
            line: this.loc.end.line,
            column: this.loc.end.column
          }
        };
      }
    };
    return marker;
  }
  function trackGroupExpression() {
    var marker,
        expr;
    skipComment();
    marker = createLocationMarker();
    expect('(');
    expr = parseExpression();
    expect(')');
    marker.end();
    marker.applyGroup(expr);
    return expr;
  }
  function trackLeftHandSideExpression() {
    var marker,
        expr;
    skipComment();
    marker = createLocationMarker();
    expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
    while (match('.') || match('[')) {
      if (match('[')) {
        expr = {
          type: Syntax.MemberExpression,
          computed: true,
          object: expr,
          property: parseComputedMember()
        };
        marker.end();
        marker.apply(expr);
      } else {
        expr = {
          type: Syntax.MemberExpression,
          computed: false,
          object: expr,
          property: parseNonComputedMember()
        };
        marker.end();
        marker.apply(expr);
      }
    }
    return expr;
  }
  function trackLeftHandSideExpressionAllowCall() {
    var marker,
        expr;
    skipComment();
    marker = createLocationMarker();
    expr = matchKeyword('new') ? parseNewExpression() : parsePrimaryExpression();
    while (match('.') || match('[') || match('(')) {
      if (match('(')) {
        expr = {
          type: Syntax.CallExpression,
          callee: expr,
          'arguments': parseArguments()
        };
        marker.end();
        marker.apply(expr);
      } else if (match('[')) {
        expr = {
          type: Syntax.MemberExpression,
          computed: true,
          object: expr,
          property: parseComputedMember()
        };
        marker.end();
        marker.apply(expr);
      } else {
        expr = {
          type: Syntax.MemberExpression,
          computed: false,
          object: expr,
          property: parseNonComputedMember()
        };
        marker.end();
        marker.apply(expr);
      }
    }
    return expr;
  }
  function filterGroup(node) {
    var n,
        i,
        entry;
    n = (Object.prototype.toString.apply(node) === '[object Array]') ? [] : {};
    for (i in node) {
      if (node.hasOwnProperty(i) && i !== 'groupRange' && i !== 'groupLoc') {
        entry = node[i];
        if (entry === null || typeof entry !== 'object' || entry instanceof RegExp) {
          n[i] = entry;
        } else {
          n[i] = filterGroup(entry);
        }
      }
    }
    return n;
  }
  function wrapTrackingFunction(range, loc) {
    return function(parseFunction) {
      function isBinary(node) {
        return node.type === Syntax.LogicalExpression || node.type === Syntax.BinaryExpression;
      }
      function visit(node) {
        var start,
            end;
        if (isBinary(node.left)) {
          visit(node.left);
        }
        if (isBinary(node.right)) {
          visit(node.right);
        }
        if (range) {
          if (node.left.groupRange || node.right.groupRange) {
            start = node.left.groupRange ? node.left.groupRange[0] : node.left.range[0];
            end = node.right.groupRange ? node.right.groupRange[1] : node.right.range[1];
            node.range = [start, end];
          } else if (typeof node.range === 'undefined') {
            start = node.left.range[0];
            end = node.right.range[1];
            node.range = [start, end];
          }
        }
        if (loc) {
          if (node.left.groupLoc || node.right.groupLoc) {
            start = node.left.groupLoc ? node.left.groupLoc.start : node.left.loc.start;
            end = node.right.groupLoc ? node.right.groupLoc.end : node.right.loc.end;
            node.loc = {
              start: start,
              end: end
            };
          } else if (typeof node.loc === 'undefined') {
            node.loc = {
              start: node.left.loc.start,
              end: node.right.loc.end
            };
          }
        }
      }
      return function() {
        var marker,
            node;
        skipComment();
        marker = createLocationMarker();
        node = parseFunction.apply(null, arguments);
        marker.end();
        if (range && typeof node.range === 'undefined') {
          marker.apply(node);
        }
        if (loc && typeof node.loc === 'undefined') {
          marker.apply(node);
        }
        if (isBinary(node)) {
          visit(node);
        }
        return node;
      };
    };
  }
  function patch() {
    var wrapTracking;
    if (extra.comments) {
      extra.skipComment = skipComment;
      skipComment = scanComment;
    }
    if (extra.raw) {
      extra.createLiteral = createLiteral;
      createLiteral = createRawLiteral;
    }
    if (extra.range || extra.loc) {
      extra.parseGroupExpression = parseGroupExpression;
      extra.parseLeftHandSideExpression = parseLeftHandSideExpression;
      extra.parseLeftHandSideExpressionAllowCall = parseLeftHandSideExpressionAllowCall;
      parseGroupExpression = trackGroupExpression;
      parseLeftHandSideExpression = trackLeftHandSideExpression;
      parseLeftHandSideExpressionAllowCall = trackLeftHandSideExpressionAllowCall;
      wrapTracking = wrapTrackingFunction(extra.range, extra.loc);
      extra.parseAdditiveExpression = parseAdditiveExpression;
      extra.parseAssignmentExpression = parseAssignmentExpression;
      extra.parseBitwiseANDExpression = parseBitwiseANDExpression;
      extra.parseBitwiseORExpression = parseBitwiseORExpression;
      extra.parseBitwiseXORExpression = parseBitwiseXORExpression;
      extra.parseBlock = parseBlock;
      extra.parseFunctionSourceElements = parseFunctionSourceElements;
      extra.parseCatchClause = parseCatchClause;
      extra.parseComputedMember = parseComputedMember;
      extra.parseConditionalExpression = parseConditionalExpression;
      extra.parseConstLetDeclaration = parseConstLetDeclaration;
      extra.parseEqualityExpression = parseEqualityExpression;
      extra.parseExpression = parseExpression;
      extra.parseForVariableDeclaration = parseForVariableDeclaration;
      extra.parseFunctionDeclaration = parseFunctionDeclaration;
      extra.parseFunctionExpression = parseFunctionExpression;
      extra.parseLogicalANDExpression = parseLogicalANDExpression;
      extra.parseLogicalORExpression = parseLogicalORExpression;
      extra.parseMultiplicativeExpression = parseMultiplicativeExpression;
      extra.parseNewExpression = parseNewExpression;
      extra.parseNonComputedProperty = parseNonComputedProperty;
      extra.parseObjectProperty = parseObjectProperty;
      extra.parseObjectPropertyKey = parseObjectPropertyKey;
      extra.parsePostfixExpression = parsePostfixExpression;
      extra.parsePrimaryExpression = parsePrimaryExpression;
      extra.parseProgram = parseProgram;
      extra.parsePropertyFunction = parsePropertyFunction;
      extra.parseRelationalExpression = parseRelationalExpression;
      extra.parseStatement = parseStatement;
      extra.parseShiftExpression = parseShiftExpression;
      extra.parseSwitchCase = parseSwitchCase;
      extra.parseUnaryExpression = parseUnaryExpression;
      extra.parseVariableDeclaration = parseVariableDeclaration;
      extra.parseVariableIdentifier = parseVariableIdentifier;
      parseAdditiveExpression = wrapTracking(extra.parseAdditiveExpression);
      parseAssignmentExpression = wrapTracking(extra.parseAssignmentExpression);
      parseBitwiseANDExpression = wrapTracking(extra.parseBitwiseANDExpression);
      parseBitwiseORExpression = wrapTracking(extra.parseBitwiseORExpression);
      parseBitwiseXORExpression = wrapTracking(extra.parseBitwiseXORExpression);
      parseBlock = wrapTracking(extra.parseBlock);
      parseFunctionSourceElements = wrapTracking(extra.parseFunctionSourceElements);
      parseCatchClause = wrapTracking(extra.parseCatchClause);
      parseComputedMember = wrapTracking(extra.parseComputedMember);
      parseConditionalExpression = wrapTracking(extra.parseConditionalExpression);
      parseConstLetDeclaration = wrapTracking(extra.parseConstLetDeclaration);
      parseEqualityExpression = wrapTracking(extra.parseEqualityExpression);
      parseExpression = wrapTracking(extra.parseExpression);
      parseForVariableDeclaration = wrapTracking(extra.parseForVariableDeclaration);
      parseFunctionDeclaration = wrapTracking(extra.parseFunctionDeclaration);
      parseFunctionExpression = wrapTracking(extra.parseFunctionExpression);
      parseLeftHandSideExpression = wrapTracking(parseLeftHandSideExpression);
      parseLogicalANDExpression = wrapTracking(extra.parseLogicalANDExpression);
      parseLogicalORExpression = wrapTracking(extra.parseLogicalORExpression);
      parseMultiplicativeExpression = wrapTracking(extra.parseMultiplicativeExpression);
      parseNewExpression = wrapTracking(extra.parseNewExpression);
      parseNonComputedProperty = wrapTracking(extra.parseNonComputedProperty);
      parseObjectProperty = wrapTracking(extra.parseObjectProperty);
      parseObjectPropertyKey = wrapTracking(extra.parseObjectPropertyKey);
      parsePostfixExpression = wrapTracking(extra.parsePostfixExpression);
      parsePrimaryExpression = wrapTracking(extra.parsePrimaryExpression);
      parseProgram = wrapTracking(extra.parseProgram);
      parsePropertyFunction = wrapTracking(extra.parsePropertyFunction);
      parseRelationalExpression = wrapTracking(extra.parseRelationalExpression);
      parseStatement = wrapTracking(extra.parseStatement);
      parseShiftExpression = wrapTracking(extra.parseShiftExpression);
      parseSwitchCase = wrapTracking(extra.parseSwitchCase);
      parseUnaryExpression = wrapTracking(extra.parseUnaryExpression);
      parseVariableDeclaration = wrapTracking(extra.parseVariableDeclaration);
      parseVariableIdentifier = wrapTracking(extra.parseVariableIdentifier);
    }
    if (typeof extra.tokens !== 'undefined') {
      extra.advance = advance;
      extra.scanRegExp = scanRegExp;
      advance = collectToken;
      scanRegExp = collectRegex;
    }
  }
  function unpatch() {
    if (typeof extra.skipComment === 'function') {
      skipComment = extra.skipComment;
    }
    if (extra.raw) {
      createLiteral = extra.createLiteral;
    }
    if (extra.range || extra.loc) {
      parseAdditiveExpression = extra.parseAdditiveExpression;
      parseAssignmentExpression = extra.parseAssignmentExpression;
      parseBitwiseANDExpression = extra.parseBitwiseANDExpression;
      parseBitwiseORExpression = extra.parseBitwiseORExpression;
      parseBitwiseXORExpression = extra.parseBitwiseXORExpression;
      parseBlock = extra.parseBlock;
      parseFunctionSourceElements = extra.parseFunctionSourceElements;
      parseCatchClause = extra.parseCatchClause;
      parseComputedMember = extra.parseComputedMember;
      parseConditionalExpression = extra.parseConditionalExpression;
      parseConstLetDeclaration = extra.parseConstLetDeclaration;
      parseEqualityExpression = extra.parseEqualityExpression;
      parseExpression = extra.parseExpression;
      parseForVariableDeclaration = extra.parseForVariableDeclaration;
      parseFunctionDeclaration = extra.parseFunctionDeclaration;
      parseFunctionExpression = extra.parseFunctionExpression;
      parseGroupExpression = extra.parseGroupExpression;
      parseLeftHandSideExpression = extra.parseLeftHandSideExpression;
      parseLeftHandSideExpressionAllowCall = extra.parseLeftHandSideExpressionAllowCall;
      parseLogicalANDExpression = extra.parseLogicalANDExpression;
      parseLogicalORExpression = extra.parseLogicalORExpression;
      parseMultiplicativeExpression = extra.parseMultiplicativeExpression;
      parseNewExpression = extra.parseNewExpression;
      parseNonComputedProperty = extra.parseNonComputedProperty;
      parseObjectProperty = extra.parseObjectProperty;
      parseObjectPropertyKey = extra.parseObjectPropertyKey;
      parsePrimaryExpression = extra.parsePrimaryExpression;
      parsePostfixExpression = extra.parsePostfixExpression;
      parseProgram = extra.parseProgram;
      parsePropertyFunction = extra.parsePropertyFunction;
      parseRelationalExpression = extra.parseRelationalExpression;
      parseStatement = extra.parseStatement;
      parseShiftExpression = extra.parseShiftExpression;
      parseSwitchCase = extra.parseSwitchCase;
      parseUnaryExpression = extra.parseUnaryExpression;
      parseVariableDeclaration = extra.parseVariableDeclaration;
      parseVariableIdentifier = extra.parseVariableIdentifier;
    }
    if (typeof extra.scanRegExp === 'function') {
      advance = extra.advance;
      scanRegExp = extra.scanRegExp;
    }
  }
  function stringToArray(str) {
    var length = str.length,
        result = [],
        i;
    for (i = 0; i < length; ++i) {
      result[i] = str.charAt(i);
    }
    return result;
  }
  function parse(code, options) {
    var program,
        toString;
    toString = String;
    if (typeof code !== 'string' && !(code instanceof String)) {
      code = toString(code);
    }
    source = code;
    index = 0;
    lineNumber = (source.length > 0) ? 1 : 0;
    lineStart = 0;
    length = source.length;
    buffer = null;
    state = {
      allowIn: true,
      labelSet: {},
      inFunctionBody: false,
      inIteration: false,
      inSwitch: false
    };
    extra = {};
    if (typeof options !== 'undefined') {
      extra.range = (typeof options.range === 'boolean') && options.range;
      extra.loc = (typeof options.loc === 'boolean') && options.loc;
      extra.raw = (typeof options.raw === 'boolean') && options.raw;
      if (typeof options.tokens === 'boolean' && options.tokens) {
        extra.tokens = [];
      }
      if (typeof options.comment === 'boolean' && options.comment) {
        extra.comments = [];
      }
      if (typeof options.tolerant === 'boolean' && options.tolerant) {
        extra.errors = [];
      }
    }
    if (length > 0) {
      if (typeof source[0] === 'undefined') {
        if (code instanceof String) {
          source = code.valueOf();
        }
        if (typeof source[0] === 'undefined') {
          source = stringToArray(code);
        }
      }
    }
    patch();
    try {
      program = parseProgram();
      if (typeof extra.comments !== 'undefined') {
        filterCommentLocation();
        program.comments = extra.comments;
      }
      if (typeof extra.tokens !== 'undefined') {
        filterTokenLocation();
        program.tokens = extra.tokens;
      }
      if (typeof extra.errors !== 'undefined') {
        program.errors = extra.errors;
      }
      if (extra.range || extra.loc) {
        program.body = filterGroup(program.body);
      }
    } catch (e) {
      throw e;
    } finally {
      unpatch();
      extra = {};
    }
    return program;
  }
  exports.version = '1.0.4';
  exports.parse = parse;
  exports.Syntax = (function() {
    var name,
        types = {};
    if (typeof Object.create === 'function') {
      types = Object.create(null);
    }
    for (name in Syntax) {
      if (Syntax.hasOwnProperty(name)) {
        types[name] = Syntax[name];
      }
    }
    if (typeof Object.freeze === 'function') {
      Object.freeze(types);
    }
    return types;
  }());
}));



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/dumper", ["./common","./exception","./schema/default_full","./schema/default_safe"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/dumper.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
var common = require('./common');
var YAMLException = require('./exception');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 0x09;
var CHAR_LINE_FEED = 0x0A;
var CHAR_CARRIAGE_RETURN = 0x0D;
var CHAR_SPACE = 0x20;
var CHAR_EXCLAMATION = 0x21;
var CHAR_DOUBLE_QUOTE = 0x22;
var CHAR_SHARP = 0x23;
var CHAR_PERCENT = 0x25;
var CHAR_AMPERSAND = 0x26;
var CHAR_SINGLE_QUOTE = 0x27;
var CHAR_ASTERISK = 0x2A;
var CHAR_COMMA = 0x2C;
var CHAR_MINUS = 0x2D;
var CHAR_COLON = 0x3A;
var CHAR_GREATER_THAN = 0x3E;
var CHAR_QUESTION = 0x3F;
var CHAR_COMMERCIAL_AT = 0x40;
var CHAR_LEFT_SQUARE_BRACKET = 0x5B;
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D;
var CHAR_GRAVE_ACCENT = 0x60;
var CHAR_LEFT_CURLY_BRACKET = 0x7B;
var CHAR_VERTICAL_LINE = 0x7C;
var CHAR_RIGHT_CURLY_BRACKET = 0x7D;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';
var DEPRECATED_BOOLEANS_SYNTAX = ['y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON', 'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'];
function compileStyleMap(schema, map) {
  var result,
      keys,
      index,
      length,
      tag,
      style,
      type;
  if (null === map) {
    return {};
  }
  result = {};
  keys = Object.keys(map);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);
    if ('!!' === tag.slice(0, 2)) {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap[tag];
    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string,
      handle,
      length;
  string = character.toString(16).toUpperCase();
  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }
  return '\\' + handle + common.repeat('0', length - string.length) + string;
}
function State(options) {
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent = Math.max(1, (options['indent'] || 2));
  this.skipInvalid = options['skipInvalid'] || false;
  this.flowLevel = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = '';
  this.duplicates = [];
  this.usedDuplicates = null;
}
function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}
function testImplicitResolving(state, str) {
  var index,
      length,
      type;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];
    if (type.resolve(str)) {
      return true;
    }
  }
  return false;
}
function writeScalar(state, object) {
  var isQuoted,
      checkpoint,
      position,
      length,
      character,
      first;
  state.dump = '';
  isQuoted = false;
  checkpoint = 0;
  first = object.charCodeAt(0) || 0;
  if (-1 !== DEPRECATED_BOOLEANS_SYNTAX.indexOf(object)) {
    isQuoted = true;
  } else if (0 === object.length) {
    isQuoted = true;
  } else if (CHAR_SPACE === first || CHAR_SPACE === object.charCodeAt(object.length - 1)) {
    isQuoted = true;
  } else if (CHAR_MINUS === first || CHAR_QUESTION === first) {
    isQuoted = true;
  }
  for (position = 0, length = object.length; position < length; position += 1) {
    character = object.charCodeAt(position);
    if (!isQuoted) {
      if (CHAR_TAB === character || CHAR_LINE_FEED === character || CHAR_CARRIAGE_RETURN === character || CHAR_COMMA === character || CHAR_LEFT_SQUARE_BRACKET === character || CHAR_RIGHT_SQUARE_BRACKET === character || CHAR_LEFT_CURLY_BRACKET === character || CHAR_RIGHT_CURLY_BRACKET === character || CHAR_SHARP === character || CHAR_AMPERSAND === character || CHAR_ASTERISK === character || CHAR_EXCLAMATION === character || CHAR_VERTICAL_LINE === character || CHAR_GREATER_THAN === character || CHAR_SINGLE_QUOTE === character || CHAR_DOUBLE_QUOTE === character || CHAR_PERCENT === character || CHAR_COMMERCIAL_AT === character || CHAR_COLON === character || CHAR_GRAVE_ACCENT === character) {
        isQuoted = true;
      }
    }
    if (ESCAPE_SEQUENCES[character] || !((0x00020 <= character && character <= 0x00007E) || (0x00085 === character) || (0x000A0 <= character && character <= 0x00D7FF) || (0x0E000 <= character && character <= 0x00FFFD) || (0x10000 <= character && character <= 0x10FFFF))) {
      state.dump += object.slice(checkpoint, position);
      state.dump += ESCAPE_SEQUENCES[character] || encodeHex(character);
      checkpoint = position + 1;
      isQuoted = true;
    }
  }
  if (checkpoint < position) {
    state.dump += object.slice(checkpoint, position);
  }
  if (!isQuoted && testImplicitResolving(state, state.dump)) {
    isQuoted = true;
  }
  if (isQuoted) {
    state.dump = '"' + state.dump + '"';
  }
}
function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag = state.tag,
      index,
      length;
  for (index = 0, length = object.length; index < length; index += 1) {
    if (writeNode(state, level, object[index], false, false)) {
      if (0 !== index) {
        _result += ', ';
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = '[' + _result + ']';
}
function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      index,
      length;
  for (index = 0, length = object.length; index < length; index += 1) {
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || 0 !== index) {
        _result += generateNextLine(state, level);
      }
      _result += '- ' + state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || '[]';
}
function writeFlowMapping(state, level, object) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';
    if (0 !== index) {
      pairBuffer += ', ';
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024) {
      pairBuffer += '? ';
    }
    pairBuffer += state.dump + ': ';
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = '{' + _result + '}';
}
function writeBlockMapping(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';
    if (!compact || 0 !== index) {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (!writeNode(state, level + 1, objectKey, true, true)) {
      continue;
    }
    explicitPair = (null !== state.tag && '?' !== state.tag) || (state.dump && state.dump.length > 1024);
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || '{}';
}
function detectType(state, object, explicit) {
  var _result,
      typeList,
      index,
      length,
      type,
      style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];
    if ((type.instanceOf || type.predicate) && (!type.instanceOf || (('object' === typeof object) && (object instanceof type.instanceOf))) && (!type.predicate || type.predicate(object))) {
      state.tag = explicit ? type.tag : '?';
      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;
        if ('[object Function]' === _toString.call(type.represent)) {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type = _toString.call(state.dump);
  if (block) {
    block = (0 > state.flowLevel || state.flowLevel > level);
  }
  if ((null !== state.tag && '?' !== state.tag) || (2 !== state.indent && level > 0)) {
    compact = false;
  }
  var objectOrArray = '[object Object]' === type || '[object Array]' === type,
      duplicateIndex,
      duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if ('[object Object]' === type) {
      if (block && (0 !== Object.keys(state.dump).length)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + (0 === level ? '\n' : '') + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if ('[object Array]' === type) {
      if (block && (0 !== state.dump.length)) {
        writeBlockSequence(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + (0 === level ? '\n' : '') + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if ('[object String]' === type) {
      if ('?' !== state.tag) {
        writeScalar(state, state.dump);
      }
    } else if (state.skipInvalid) {
      return false;
    } else {
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }
    if (null !== state.tag && '?' !== state.tag) {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var type = _toString.call(object),
      objectKeyList,
      index,
      length;
  if (null !== object && 'object' === typeof object) {
    index = objects.indexOf(object);
    if (-1 !== index) {
      if (-1 === duplicatesIndexes.indexOf(index)) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump(input, options) {
  options = options || {};
  var state = new State(options);
  getDuplicateReferences(input, state);
  if (writeNode(state, 0, input, true, true)) {
    return state.dump + '\n';
  } else {
    return '';
  }
}
function safeDump(input, options) {
  return dump(input, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
}
module.exports.dump = dump;
module.exports.safeDump = safeDump;



  global.define = __define;
  return module.exports;
});

System.register("npm:eventemitter3@0.1.6/index", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/eventemitter3@0.1.6/index.js";
  var __dirname = "jspm_packages/npm/eventemitter3@0.1.6";
'use strict';
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}
function EventEmitter() {}
EventEmitter.prototype._events = undefined;
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event])
    return [];
  if (this._events[event].fn)
    return [this._events[event].fn];
  for (var i = 0,
      l = this._events[event].length,
      ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }
  return ee;
};
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event])
    return false;
  var listeners = this._events[event],
      len = arguments.length,
      args,
      i;
  if ('function' === typeof listeners.fn) {
    if (listeners.once)
      this.removeListener(event, listeners.fn, true);
    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;
      case 2:
        return listeners.fn.call(listeners.context, a1), true;
      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;
      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }
    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }
    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;
    for (i = 0; i < length; i++) {
      if (listeners[i].once)
        this.removeListener(event, listeners[i].fn, true);
      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);
          break;
        case 2:
          listeners[i].fn.call(listeners[i].context, a1);
          break;
        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);
          break;
        default:
          if (!args)
            for (j = 1, args = new Array(len - 1); j < len; j++) {
              args[j - 1] = arguments[j];
            }
          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }
  return true;
};
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);
  if (!this._events)
    this._events = {};
  if (!this._events[event])
    this._events[event] = listener;
  else {
    if (!this._events[event].fn)
      this._events[event].push(listener);
    else
      this._events[event] = [this._events[event], listener];
  }
  return this;
};
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);
  if (!this._events)
    this._events = {};
  if (!this._events[event])
    this._events[event] = listener;
  else {
    if (!this._events[event].fn)
      this._events[event].push(listener);
    else
      this._events[event] = [this._events[event], listener];
  }
  return this;
};
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event])
    return this;
  var listeners = this._events[event],
      events = [];
  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn)
      for (var i = 0,
          length = listeners.length; i < length; i++) {
        if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
          events.push(listeners[i]);
        }
      }
  }
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }
  return this;
};
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events)
    return this;
  if (event)
    delete this._events[event];
  else
    this._events = {};
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.EventEmitter2 = EventEmitter;
EventEmitter.EventEmitter3 = EventEmitter;
module.exports = EventEmitter;



  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs@0.0.7/process/index", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/jspm/nodelibs@0.0.7/process/index.js";
  var __dirname = "jspm_packages/github/jspm/nodelibs@0.0.7/process";
"format cjs";
function noop() {}
var process = module.exports = {};
process.nextTick = function() {
  var e = "undefined" != typeof window && window.setImmediate,
      t = "undefined" != typeof window && window.postMessage && window.addEventListener;
  if (e)
    return function(e) {
      return window.setImmediate(e);
    };
  if (t) {
    var r = [];
    return window.addEventListener("message", function(e) {
      var t = e.source;
      if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), r.length > 0)) {
        var n = r.shift();
        n();
      }
    }, !0), function(e) {
      r.push(e), window.postMessage("process-tick", "*");
    };
  }
  return function(e) {
    setTimeout(e, 0);
  };
}(), process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.binding = function() {
  throw new Error("process.binding is not supported");
}, process.cwd = function() {
  return "/";
}, process.chdir = function() {
  throw new Error("process.chdir is not supported");
};



  global.define = __define;
  return module.exports;
});

System.register("npm:heap@0.2.5/lib/heap", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/heap@0.2.5/lib/heap.js";
  var __dirname = "jspm_packages/npm/heap@0.2.5/lib";
(function() {
  var Heap,
      defaultCmp,
      floor,
      heapify,
      heappop,
      heappush,
      heappushpop,
      heapreplace,
      insort,
      min,
      nlargest,
      nsmallest,
      updateItem,
      _siftdown,
      _siftup;
  floor = Math.floor, min = Math.min;
  defaultCmp = function(x, y) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  };
  insort = function(a, x, lo, hi, cmp) {
    var mid;
    if (lo == null) {
      lo = 0;
    }
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (lo < 0) {
      throw new Error('lo must be non-negative');
    }
    if (hi == null) {
      hi = a.length;
    }
    while (lo < hi) {
      mid = floor((lo + hi) / 2);
      if (cmp(x, a[mid]) < 0) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return ([].splice.apply(a, [lo, lo - lo].concat(x)), x);
  };
  heappush = function(array, item, cmp) {
    if (cmp == null) {
      cmp = defaultCmp;
    }
    array.push(item);
    return _siftdown(array, 0, array.length - 1, cmp);
  };
  heappop = function(array, cmp) {
    var lastelt,
        returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    lastelt = array.pop();
    if (array.length) {
      returnitem = array[0];
      array[0] = lastelt;
      _siftup(array, 0, cmp);
    } else {
      returnitem = lastelt;
    }
    return returnitem;
  };
  heapreplace = function(array, item, cmp) {
    var returnitem;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    returnitem = array[0];
    array[0] = item;
    _siftup(array, 0, cmp);
    return returnitem;
  };
  heappushpop = function(array, item, cmp) {
    var _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (array.length && cmp(array[0], item) < 0) {
      _ref = [array[0], item], item = _ref[0], array[0] = _ref[1];
      _siftup(array, 0, cmp);
    }
    return item;
  };
  heapify = function(array, cmp) {
    var i,
        _i,
        _j,
        _len,
        _ref,
        _ref1,
        _results,
        _results1;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    _ref1 = (function() {
      _results1 = [];
      for (var _j = 0,
          _ref = floor(array.length / 2); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j--) {
        _results1.push(_j);
      }
      return _results1;
    }).apply(this).reverse();
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      i = _ref1[_i];
      _results.push(_siftup(array, i, cmp));
    }
    return _results;
  };
  updateItem = function(array, item, cmp) {
    var pos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    pos = array.indexOf(item);
    if (pos === -1) {
      return;
    }
    _siftdown(array, 0, pos, cmp);
    return _siftup(array, pos, cmp);
  };
  nlargest = function(array, n, cmp) {
    var elem,
        result,
        _i,
        _len,
        _ref;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    result = array.slice(0, n);
    if (!result.length) {
      return result;
    }
    heapify(result, cmp);
    _ref = array.slice(n);
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      elem = _ref[_i];
      heappushpop(result, elem, cmp);
    }
    return result.sort(cmp).reverse();
  };
  nsmallest = function(array, n, cmp) {
    var elem,
        i,
        los,
        result,
        _i,
        _j,
        _len,
        _ref,
        _ref1,
        _results;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    if (n * 10 <= array.length) {
      result = array.slice(0, n).sort(cmp);
      if (!result.length) {
        return result;
      }
      los = result[result.length - 1];
      _ref = array.slice(n);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elem = _ref[_i];
        if (cmp(elem, los) < 0) {
          insort(result, elem, 0, null, cmp);
          result.pop();
          los = result[result.length - 1];
        }
      }
      return result;
    }
    heapify(array, cmp);
    _results = [];
    for (i = _j = 0, _ref1 = min(n, array.length); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      _results.push(heappop(array, cmp));
    }
    return _results;
  };
  _siftdown = function(array, startpos, pos, cmp) {
    var newitem,
        parent,
        parentpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    newitem = array[pos];
    while (pos > startpos) {
      parentpos = (pos - 1) >> 1;
      parent = array[parentpos];
      if (cmp(newitem, parent) < 0) {
        array[pos] = parent;
        pos = parentpos;
        continue;
      }
      break;
    }
    return array[pos] = newitem;
  };
  _siftup = function(array, pos, cmp) {
    var childpos,
        endpos,
        newitem,
        rightpos,
        startpos;
    if (cmp == null) {
      cmp = defaultCmp;
    }
    endpos = array.length;
    startpos = pos;
    newitem = array[pos];
    childpos = 2 * pos + 1;
    while (childpos < endpos) {
      rightpos = childpos + 1;
      if (rightpos < endpos && !(cmp(array[childpos], array[rightpos]) < 0)) {
        childpos = rightpos;
      }
      array[pos] = array[childpos];
      pos = childpos;
      childpos = 2 * pos + 1;
    }
    array[pos] = newitem;
    return _siftdown(array, startpos, pos, cmp);
  };
  Heap = (function() {
    Heap.push = heappush;
    Heap.pop = heappop;
    Heap.replace = heapreplace;
    Heap.pushpop = heappushpop;
    Heap.heapify = heapify;
    Heap.updateItem = updateItem;
    Heap.nlargest = nlargest;
    Heap.nsmallest = nsmallest;
    function Heap(cmp) {
      this.cmp = cmp != null ? cmp : defaultCmp;
      this.nodes = [];
    }
    Heap.prototype.push = function(x) {
      return heappush(this.nodes, x, this.cmp);
    };
    Heap.prototype.pop = function() {
      return heappop(this.nodes, this.cmp);
    };
    Heap.prototype.peek = function() {
      return this.nodes[0];
    };
    Heap.prototype.contains = function(x) {
      return this.nodes.indexOf(x) !== -1;
    };
    Heap.prototype.replace = function(x) {
      return heapreplace(this.nodes, x, this.cmp);
    };
    Heap.prototype.pushpop = function(x) {
      return heappushpop(this.nodes, x, this.cmp);
    };
    Heap.prototype.heapify = function() {
      return heapify(this.nodes, this.cmp);
    };
    Heap.prototype.updateItem = function(x) {
      return updateItem(this.nodes, x, this.cmp);
    };
    Heap.prototype.clear = function() {
      return this.nodes = [];
    };
    Heap.prototype.empty = function() {
      return this.nodes.length === 0;
    };
    Heap.prototype.size = function() {
      return this.nodes.length;
    };
    Heap.prototype.clone = function() {
      var heap;
      heap = new Heap();
      heap.nodes = this.nodes.slice(0);
      return heap;
    };
    Heap.prototype.toArray = function() {
      return this.nodes.slice(0);
    };
    Heap.prototype.insert = Heap.prototype.push;
    Heap.prototype.top = Heap.prototype.peek;
    Heap.prototype.front = Heap.prototype.peek;
    Heap.prototype.has = Heap.prototype.contains;
    Heap.prototype.copy = Heap.prototype.clone;
    return Heap;
  })();
  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Heap;
  } else {
    window.Heap = Heap;
  }
}).call(this);



  global.define = __define;
  return module.exports;
});

System.register("npm:base64-js@0.0.7", ["npm:base64-js@0.0.7/lib/b64"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/base64-js@0.0.7.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:base64-js@0.0.7/lib/b64");



  global.define = __define;
  return module.exports;
});

System.register("npm:ieee754@1.1.4", ["npm:ieee754@1.1.4/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/ieee754@1.1.4.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:ieee754@1.1.4/index");



  global.define = __define;
  return module.exports;
});

System.register("npm:midievents@0.1.0", ["npm:midievents@0.1.0/src/MIDIEvents"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midievents@0.1.0.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:midievents@0.1.0/src/MIDIEvents");



  global.define = __define;
  return module.exports;
});

System.register("npm:string.fromcodepoint@0.2.1", ["npm:string.fromcodepoint@0.2.1/fromcodepoint"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/string.fromcodepoint@0.2.1.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:string.fromcodepoint@0.2.1/fromcodepoint");



  global.define = __define;
  return module.exports;
});

System.register("npm:string.prototype.codepointat@0.2.0", ["npm:string.prototype.codepointat@0.2.0/codepointat"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/string.prototype.codepointat@0.2.0.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:string.prototype.codepointat@0.2.0/codepointat");



  global.define = __define;
  return module.exports;
});

System.register("npm:co@4.0.1", ["npm:co@4.0.1/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/co@4.0.1.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:co@4.0.1/index");



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema", ["./common","./exception","./type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
var common = require('./common');
var YAMLException = require('./exception');
var Type = require('./type');
function compileList(schema, name, result) {
  var exclude = [];
  schema.include.forEach(function(includedSchema) {
    result = compileList(includedSchema, name, result);
  });
  schema[name].forEach(function(currentType) {
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag) {
        exclude.push(previousIndex);
      }
    });
    result.push(currentType);
  });
  return result.filter(function(type, index) {
    return -1 === exclude.indexOf(index);
  });
}
function compileMap() {
  var result = {},
      index,
      length;
  function collectType(type) {
    result[type.tag] = type;
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema(definition) {
  this.include = definition.include || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];
  this.implicit.forEach(function(type) {
    if (type.loadKind && 'scalar' !== type.loadKind) {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });
  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema.DEFAULT = null;
Schema.create = function createSchema() {
  var schemas,
      types;
  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;
    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;
    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }
  schemas = common.toArray(schemas);
  types = common.toArray(types);
  if (!schemas.every(function(schema) {
    return schema instanceof Schema;
  })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }
  if (!types.every(function(type) {
    return type instanceof Type;
  })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }
  return new Schema({
    include: schemas,
    explicit: types
  });
};
module.exports = Schema;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema/failsafe", ["../schema","../type/str","../type/seq","../type/map"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema/failsafe.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema";
'use strict';
var Schema = require('../schema');
module.exports = new Schema({explicit: [require('../type/str'), require('../type/seq'), require('../type/map')]});



  global.define = __define;
  return module.exports;
});

System.register("npm:esprima@1.0.4", ["npm:esprima@1.0.4/esprima"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/esprima@1.0.4.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:esprima@1.0.4/esprima");



  global.define = __define;
  return module.exports;
});

System.register("npm:eventemitter3@0.1.6", ["npm:eventemitter3@0.1.6/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/eventemitter3@0.1.6.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:eventemitter3@0.1.6/index");



  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs@0.0.7/process", ["./process/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/jspm/nodelibs@0.0.7/process.js";
  var __dirname = "jspm_packages/github/jspm/nodelibs@0.0.7";
"format cjs";
module.exports = System._nodeRequire ? System._nodeRequire("process") : require("./process/index");



  global.define = __define;
  return module.exports;
});

System.register("npm:heap@0.2.5/index", ["./lib/heap"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/heap@0.2.5/index.js";
  var __dirname = "jspm_packages/npm/heap@0.2.5";
module.exports = require('./lib/heap');



  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs@0.0.7/buffer/index", ["base64-js","ieee754"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/jspm/nodelibs@0.0.7/buffer/index.js";
  var __dirname = "jspm_packages/github/jspm/nodelibs@0.0.7/buffer";
"format cjs";
function Buffer(e, t, r) {
  if (!(this instanceof Buffer))
    return new Buffer(e, t, r);
  var n = typeof e;
  if ("base64" === t && "string" === n)
    for (e = stringtrim(e); e.length % 4 !== 0; )
      e += "=";
  var i;
  if ("number" === n)
    i = coerce(e);
  else if ("string" === n)
    i = Buffer.byteLength(e, t);
  else {
    if ("object" !== n)
      throw new Error("First argument needs to be a number, array or string.");
    i = coerce(e.length);
  }
  var s;
  Buffer._useTypedArrays ? s = augment(new Uint8Array(i)) : (s = this, s.length = i, s._isBuffer = !0);
  var a;
  if (Buffer._useTypedArrays && "function" == typeof Uint8Array && e instanceof Uint8Array)
    s._set(e);
  else if (isArrayish(e))
    for (a = 0; i > a; a++)
      s[a] = Buffer.isBuffer(e) ? e.readUInt8(a) : e[a];
  else if ("string" === n)
    s.write(e, 0, t);
  else if ("number" === n && !Buffer._useTypedArrays && !r)
    for (a = 0; i > a; a++)
      s[a] = 0;
  return s;
}
function _hexWrite(e, t, r, n) {
  r = Number(r) || 0;
  var i = e.length - r;
  n ? (n = Number(n), n > i && (n = i)) : n = i;
  var s = t.length;
  assert(s % 2 === 0, "Invalid hex string"), n > s / 2 && (n = s / 2);
  for (var a = 0; n > a; a++) {
    var o = parseInt(t.substr(2 * a, 2), 16);
    assert(!isNaN(o), "Invalid hex string"), e[r + a] = o;
  }
  return Buffer._charsWritten = 2 * a, a;
}
function _utf8Write(e, t, r, n) {
  var i = Buffer._charsWritten = blitBuffer(utf8ToBytes(t), e, r, n);
  return i;
}
function _asciiWrite(e, t, r, n) {
  var i = Buffer._charsWritten = blitBuffer(asciiToBytes(t), e, r, n);
  return i;
}
function _binaryWrite(e, t, r, n) {
  return _asciiWrite(e, t, r, n);
}
function _base64Write(e, t, r, n) {
  var i = Buffer._charsWritten = blitBuffer(base64ToBytes(t), e, r, n);
  return i;
}
function _utf16leWrite(e, t, r, n) {
  var i = Buffer._charsWritten = blitBuffer(utf16leToBytes(t), e, r, n);
  return i;
}
function _base64Slice(e, t, r) {
  return base64.fromByteArray(0 === t && r === e.length ? e : e.slice(t, r));
}
function _utf8Slice(e, t, r) {
  var n = "",
      i = "";
  r = Math.min(e.length, r);
  for (var s = t; r > s; s++)
    e[s] <= 127 ? (n += decodeUtf8Char(i) + String.fromCharCode(e[s]), i = "") : i += "%" + e[s].toString(16);
  return n + decodeUtf8Char(i);
}
function _asciiSlice(e, t, r) {
  var n = "";
  r = Math.min(e.length, r);
  for (var i = t; r > i; i++)
    n += String.fromCharCode(e[i]);
  return n;
}
function _binarySlice(e, t, r) {
  return _asciiSlice(e, t, r);
}
function _hexSlice(e, t, r) {
  var n = e.length;
  (!t || 0 > t) && (t = 0), (!r || 0 > r || r > n) && (r = n);
  for (var i = "",
      s = t; r > s; s++)
    i += toHex(e[s]);
  return i;
}
function _utf16leSlice(e, t, r) {
  for (var n = e.slice(t, r),
      i = "",
      s = 0; s < n.length; s += 2)
    i += String.fromCharCode(n[s] + 256 * n[s + 1]);
  return i;
}
function _readUInt16(e, t, r, n) {
  n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(void 0 !== t && null !== t, "missing offset"), assert(t + 1 < e.length, "Trying to read beyond buffer length"));
  var i = e.length;
  if (!(t >= i)) {
    var s;
    return r ? (s = e[t], i > t + 1 && (s |= e[t + 1] << 8)) : (s = e[t] << 8, i > t + 1 && (s |= e[t + 1])), s;
  }
}
function _readUInt32(e, t, r, n) {
  n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(void 0 !== t && null !== t, "missing offset"), assert(t + 3 < e.length, "Trying to read beyond buffer length"));
  var i = e.length;
  if (!(t >= i)) {
    var s;
    return r ? (i > t + 2 && (s = e[t + 2] << 16), i > t + 1 && (s |= e[t + 1] << 8), s |= e[t], i > t + 3 && (s += e[t + 3] << 24 >>> 0)) : (i > t + 1 && (s = e[t + 1] << 16), i > t + 2 && (s |= e[t + 2] << 8), i > t + 3 && (s |= e[t + 3]), s += e[t] << 24 >>> 0), s;
  }
}
function _readInt16(e, t, r, n) {
  n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(void 0 !== t && null !== t, "missing offset"), assert(t + 1 < e.length, "Trying to read beyond buffer length"));
  var i = e.length;
  if (!(t >= i)) {
    var s = _readUInt16(e, t, r, !0),
        a = 32768 & s;
    return a ? -1 * (65535 - s + 1) : s;
  }
}
function _readInt32(e, t, r, n) {
  n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(void 0 !== t && null !== t, "missing offset"), assert(t + 3 < e.length, "Trying to read beyond buffer length"));
  var i = e.length;
  if (!(t >= i)) {
    var s = _readUInt32(e, t, r, !0),
        a = 2147483648 & s;
    return a ? -1 * (4294967295 - s + 1) : s;
  }
}
function _readFloat(e, t, r, n) {
  return n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(t + 3 < e.length, "Trying to read beyond buffer length")), ieee754.read(e, t, r, 23, 4);
}
function _readDouble(e, t, r, n) {
  return n || (assert("boolean" == typeof r, "missing or invalid endian"), assert(t + 7 < e.length, "Trying to read beyond buffer length")), ieee754.read(e, t, r, 52, 8);
}
function _writeUInt16(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 1 < e.length, "trying to write beyond buffer length"), verifuint(t, 65535));
  var s = e.length;
  if (!(r >= s))
    for (var a = 0,
        o = Math.min(s - r, 2); o > a; a++)
      e[r + a] = (t & 255 << 8 * (n ? a : 1 - a)) >>> 8 * (n ? a : 1 - a);
}
function _writeUInt32(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 3 < e.length, "trying to write beyond buffer length"), verifuint(t, 4294967295));
  var s = e.length;
  if (!(r >= s))
    for (var a = 0,
        o = Math.min(s - r, 4); o > a; a++)
      e[r + a] = t >>> 8 * (n ? a : 3 - a) & 255;
}
function _writeInt16(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 1 < e.length, "Trying to write beyond buffer length"), verifsint(t, 32767, -32768));
  var s = e.length;
  r >= s || (t >= 0 ? _writeUInt16(e, t, r, n, i) : _writeUInt16(e, 65535 + t + 1, r, n, i));
}
function _writeInt32(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 3 < e.length, "Trying to write beyond buffer length"), verifsint(t, 2147483647, -2147483648));
  var s = e.length;
  r >= s || (t >= 0 ? _writeUInt32(e, t, r, n, i) : _writeUInt32(e, 4294967295 + t + 1, r, n, i));
}
function _writeFloat(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 3 < e.length, "Trying to write beyond buffer length"), verifIEEE754(t, 3.4028234663852886e38, -3.4028234663852886e38));
  var s = e.length;
  r >= s || ieee754.write(e, t, r, n, 23, 4);
}
function _writeDouble(e, t, r, n, i) {
  i || (assert(void 0 !== t && null !== t, "missing value"), assert("boolean" == typeof n, "missing or invalid endian"), assert(void 0 !== r && null !== r, "missing offset"), assert(r + 7 < e.length, "Trying to write beyond buffer length"), verifIEEE754(t, 1.7976931348623157e308, -1.7976931348623157e308));
  var s = e.length;
  r >= s || ieee754.write(e, t, r, n, 52, 8);
}
function stringtrim(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function augment(e) {
  return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = BP.get, e.set = BP.set, e.write = BP.write, e.toString = BP.toString, e.toLocaleString = BP.toString, e.toJSON = BP.toJSON, e.copy = BP.copy, e.slice = BP.slice, e.readUInt8 = BP.readUInt8, e.readUInt16LE = BP.readUInt16LE, e.readUInt16BE = BP.readUInt16BE, e.readUInt32LE = BP.readUInt32LE, e.readUInt32BE = BP.readUInt32BE, e.readInt8 = BP.readInt8, e.readInt16LE = BP.readInt16LE, e.readInt16BE = BP.readInt16BE, e.readInt32LE = BP.readInt32LE, e.readInt32BE = BP.readInt32BE, e.readFloatLE = BP.readFloatLE, e.readFloatBE = BP.readFloatBE, e.readDoubleLE = BP.readDoubleLE, e.readDoubleBE = BP.readDoubleBE, e.writeUInt8 = BP.writeUInt8, e.writeUInt16LE = BP.writeUInt16LE, e.writeUInt16BE = BP.writeUInt16BE, e.writeUInt32LE = BP.writeUInt32LE, e.writeUInt32BE = BP.writeUInt32BE, e.writeInt8 = BP.writeInt8, e.writeInt16LE = BP.writeInt16LE, e.writeInt16BE = BP.writeInt16BE, e.writeInt32LE = BP.writeInt32LE, e.writeInt32BE = BP.writeInt32BE, e.writeFloatLE = BP.writeFloatLE, e.writeFloatBE = BP.writeFloatBE, e.writeDoubleLE = BP.writeDoubleLE, e.writeDoubleBE = BP.writeDoubleBE, e.fill = BP.fill, e.inspect = BP.inspect, e.toArrayBuffer = BP.toArrayBuffer, e;
}
function clamp(e, t, r) {
  return "number" != typeof e ? r : (e = ~~e, e >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0));
}
function coerce(e) {
  return e = ~~Math.ceil(+e), 0 > e ? 0 : e;
}
function isArray(e) {
  return (Array.isArray || function(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  })(e);
}
function isArrayish(e) {
  return isArray(e) || Buffer.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length;
}
function toHex(e) {
  return 16 > e ? "0" + e.toString(16) : e.toString(16);
}
function utf8ToBytes(e) {
  for (var t = [],
      r = 0; r < e.length; r++) {
    var n = e.charCodeAt(r);
    if (127 >= n)
      t.push(e.charCodeAt(r));
    else {
      var i = r;
      n >= 55296 && 57343 >= n && r++;
      for (var s = encodeURIComponent(e.slice(i, r + 1)).substr(1).split("%"),
          a = 0; a < s.length; a++)
        t.push(parseInt(s[a], 16));
    }
  }
  return t;
}
function asciiToBytes(e) {
  for (var t = [],
      r = 0; r < e.length; r++)
    t.push(255 & e.charCodeAt(r));
  return t;
}
function utf16leToBytes(e) {
  for (var t,
      r,
      n,
      i = [],
      s = 0; s < e.length; s++)
    t = e.charCodeAt(s), r = t >> 8, n = t % 256, i.push(n), i.push(r);
  return i;
}
function base64ToBytes(e) {
  return base64.toByteArray(e);
}
function blitBuffer(e, t, r, n) {
  for (var i = 0; n > i && !(i + r >= t.length || i >= e.length); i++)
    t[i + r] = e[i];
  return i;
}
function decodeUtf8Char(e) {
  try {
    return decodeURIComponent(e);
  } catch (t) {
    return String.fromCharCode(65533);
  }
}
function verifuint(e, t) {
  assert("number" == typeof e, "cannot write a non-number as a number"), assert(e >= 0, "specified a negative value for writing an unsigned value"), assert(t >= e, "value is larger than maximum value for type"), assert(Math.floor(e) === e, "value has a fractional component");
}
function verifsint(e, t, r) {
  assert("number" == typeof e, "cannot write a non-number as a number"), assert(t >= e, "value larger than maximum allowed value"), assert(e >= r, "value smaller than minimum allowed value"), assert(Math.floor(e) === e, "value has a fractional component");
}
function verifIEEE754(e, t, r) {
  assert("number" == typeof e, "cannot write a non-number as a number"), assert(t >= e, "value larger than maximum allowed value"), assert(e >= r, "value smaller than minimum allowed value");
}
function assert(e, t) {
  if (!e)
    throw new Error(t || "Failed assertion");
}
var base64 = require("base64-js"),
    ieee754 = require("ieee754");
exports.Buffer = Buffer, exports.SlowBuffer = Buffer, exports.INSPECT_MAX_BYTES = 50, Buffer.poolSize = 8192, Buffer._useTypedArrays = function() {
  if ("undefined" == typeof Uint8Array || "undefined" == typeof ArrayBuffer)
    return !1;
  try {
    var e = new Uint8Array(0);
    return e.foo = function() {
      return 42;
    }, 42 === e.foo() && "function" == typeof e.subarray;
  } catch (t) {
    return !1;
  }
}(), Buffer.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "raw":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
}, Buffer.isBuffer = function(e) {
  return !(null === e || void 0 === e || !e._isBuffer);
}, Buffer.byteLength = function(e, t) {
  var r;
  switch (e += "", t || "utf8") {
    case "hex":
      r = e.length / 2;
      break;
    case "utf8":
    case "utf-8":
      r = utf8ToBytes(e).length;
      break;
    case "ascii":
    case "binary":
    case "raw":
      r = e.length;
      break;
    case "base64":
      r = base64ToBytes(e).length;
      break;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      r = 2 * e.length;
      break;
    default:
      throw new Error("Unknown encoding");
  }
  return r;
}, Buffer.concat = function(e, t) {
  if (assert(isArray(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length)
    return new Buffer(0);
  if (1 === e.length)
    return e[0];
  var r;
  if ("number" != typeof t)
    for (t = 0, r = 0; r < e.length; r++)
      t += e[r].length;
  var n = new Buffer(t),
      i = 0;
  for (r = 0; r < e.length; r++) {
    var s = e[r];
    s.copy(n, i), i += s.length;
  }
  return n;
}, Buffer.prototype.write = function(e, t, r, n) {
  if (isFinite(t))
    isFinite(r) || (n = r, r = void 0);
  else {
    var i = n;
    n = t, t = r, r = i;
  }
  t = Number(t) || 0;
  var s = this.length - t;
  r ? (r = Number(r), r > s && (r = s)) : r = s, n = String(n || "utf8").toLowerCase();
  var a;
  switch (n) {
    case "hex":
      a = _hexWrite(this, e, t, r);
      break;
    case "utf8":
    case "utf-8":
      a = _utf8Write(this, e, t, r);
      break;
    case "ascii":
      a = _asciiWrite(this, e, t, r);
      break;
    case "binary":
      a = _binaryWrite(this, e, t, r);
      break;
    case "base64":
      a = _base64Write(this, e, t, r);
      break;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      a = _utf16leWrite(this, e, t, r);
      break;
    default:
      throw new Error("Unknown encoding");
  }
  return a;
}, Buffer.prototype.toString = function(e, t, r) {
  var n = this;
  if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, r = void 0 !== r ? Number(r) : r = n.length, r === t)
    return "";
  var i;
  switch (e) {
    case "hex":
      i = _hexSlice(n, t, r);
      break;
    case "utf8":
    case "utf-8":
      i = _utf8Slice(n, t, r);
      break;
    case "ascii":
      i = _asciiSlice(n, t, r);
      break;
    case "binary":
      i = _binarySlice(n, t, r);
      break;
    case "base64":
      i = _base64Slice(n, t, r);
      break;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      i = _utf16leSlice(n, t, r);
      break;
    default:
      throw new Error("Unknown encoding");
  }
  return i;
}, Buffer.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
}, Buffer.prototype.copy = function(e, t, r, n) {
  var i = this;
  if (r || (r = 0), n || 0 === n || (n = this.length), t || (t = 0), n !== r && 0 !== e.length && 0 !== i.length) {
    assert(n >= r, "sourceEnd < sourceStart"), assert(t >= 0 && t < e.length, "targetStart out of bounds"), assert(r >= 0 && r < i.length, "sourceStart out of bounds"), assert(n >= 0 && n <= i.length, "sourceEnd out of bounds"), n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
    for (var s = 0; n - r > s; s++)
      e[s + t] = this[s + r];
  }
}, Buffer.prototype.slice = function(e, t) {
  var r = this.length;
  if (e = clamp(e, r, 0), t = clamp(t, r, r), Buffer._useTypedArrays)
    return augment(this.subarray(e, t));
  for (var n = t - e,
      i = new Buffer(n, void 0, !0),
      s = 0; n > s; s++)
    i[s] = this[s + e];
  return i;
}, Buffer.prototype.get = function(e) {
  return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
}, Buffer.prototype.set = function(e, t) {
  return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
}, Buffer.prototype.readUInt8 = function(e, t) {
  return t || (assert(void 0 !== e && null !== e, "missing offset"), assert(e < this.length, "Trying to read beyond buffer length")), e >= this.length ? void 0 : this[e];
}, Buffer.prototype.readUInt16LE = function(e, t) {
  return _readUInt16(this, e, !0, t);
}, Buffer.prototype.readUInt16BE = function(e, t) {
  return _readUInt16(this, e, !1, t);
}, Buffer.prototype.readUInt32LE = function(e, t) {
  return _readUInt32(this, e, !0, t);
}, Buffer.prototype.readUInt32BE = function(e, t) {
  return _readUInt32(this, e, !1, t);
}, Buffer.prototype.readInt8 = function(e, t) {
  if (t || (assert(void 0 !== e && null !== e, "missing offset"), assert(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
    var r = 128 & this[e];
    return r ? -1 * (255 - this[e] + 1) : this[e];
  }
}, Buffer.prototype.readInt16LE = function(e, t) {
  return _readInt16(this, e, !0, t);
}, Buffer.prototype.readInt16BE = function(e, t) {
  return _readInt16(this, e, !1, t);
}, Buffer.prototype.readInt32LE = function(e, t) {
  return _readInt32(this, e, !0, t);
}, Buffer.prototype.readInt32BE = function(e, t) {
  return _readInt32(this, e, !1, t);
}, Buffer.prototype.readFloatLE = function(e, t) {
  return _readFloat(this, e, !0, t);
}, Buffer.prototype.readFloatBE = function(e, t) {
  return _readFloat(this, e, !1, t);
}, Buffer.prototype.readDoubleLE = function(e, t) {
  return _readDouble(this, e, !0, t);
}, Buffer.prototype.readDoubleBE = function(e, t) {
  return _readDouble(this, e, !1, t);
}, Buffer.prototype.writeUInt8 = function(e, t, r) {
  r || (assert(void 0 !== e && null !== e, "missing value"), assert(void 0 !== t && null !== t, "missing offset"), assert(t < this.length, "trying to write beyond buffer length"), verifuint(e, 255)), t >= this.length || (this[t] = e);
}, Buffer.prototype.writeUInt16LE = function(e, t, r) {
  _writeUInt16(this, e, t, !0, r);
}, Buffer.prototype.writeUInt16BE = function(e, t, r) {
  _writeUInt16(this, e, t, !1, r);
}, Buffer.prototype.writeUInt32LE = function(e, t, r) {
  _writeUInt32(this, e, t, !0, r);
}, Buffer.prototype.writeUInt32BE = function(e, t, r) {
  _writeUInt32(this, e, t, !1, r);
}, Buffer.prototype.writeInt8 = function(e, t, r) {
  r || (assert(void 0 !== e && null !== e, "missing value"), assert(void 0 !== t && null !== t, "missing offset"), assert(t < this.length, "Trying to write beyond buffer length"), verifsint(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, r) : this.writeUInt8(255 + e + 1, t, r));
}, Buffer.prototype.writeInt16LE = function(e, t, r) {
  _writeInt16(this, e, t, !0, r);
}, Buffer.prototype.writeInt16BE = function(e, t, r) {
  _writeInt16(this, e, t, !1, r);
}, Buffer.prototype.writeInt32LE = function(e, t, r) {
  _writeInt32(this, e, t, !0, r);
}, Buffer.prototype.writeInt32BE = function(e, t, r) {
  _writeInt32(this, e, t, !1, r);
}, Buffer.prototype.writeFloatLE = function(e, t, r) {
  _writeFloat(this, e, t, !0, r);
}, Buffer.prototype.writeFloatBE = function(e, t, r) {
  _writeFloat(this, e, t, !1, r);
}, Buffer.prototype.writeDoubleLE = function(e, t, r) {
  _writeDouble(this, e, t, !0, r);
}, Buffer.prototype.writeDoubleBE = function(e, t, r) {
  _writeDouble(this, e, t, !1, r);
}, Buffer.prototype.fill = function(e, t, r) {
  if (e || (e = 0), t || (t = 0), r || (r = this.length), "string" == typeof e && (e = e.charCodeAt(0)), assert("number" == typeof e && !isNaN(e), "value is not a number"), assert(r >= t, "end < start"), r !== t && 0 !== this.length) {
    assert(t >= 0 && t < this.length, "start out of bounds"), assert(r >= 0 && r <= this.length, "end out of bounds");
    for (var n = t; r > n; n++)
      this[n] = e;
  }
}, Buffer.prototype.inspect = function() {
  for (var e = [],
      t = this.length,
      r = 0; t > r; r++)
    if (e[r] = toHex(this[r]), r === exports.INSPECT_MAX_BYTES) {
      e[r + 1] = "...";
      break;
    }
  return "<Buffer " + e.join(" ") + ">";
}, Buffer.prototype.toArrayBuffer = function() {
  if ("function" == typeof Uint8Array) {
    if (Buffer._useTypedArrays)
      return new Buffer(this).buffer;
    for (var e = new Uint8Array(this.length),
        t = 0,
        r = e.length; r > t; t += 1)
      e[t] = this[t];
    return e.buffer;
  }
  throw new Error("Buffer.toArrayBuffer not supported in this browser");
};
var BP = Buffer.prototype;



  global.define = __define;
  return module.exports;
});

System.register("npm:utf-8@0.1.2/src/UTF8", ["string.fromcodepoint","string.prototype.codepointat"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/utf-8@0.1.2/src/UTF8.js";
  var __dirname = "jspm_packages/npm/utf-8@0.1.2/src";
if (module.require) {
  require('string.fromcodepoint');
  require('string.prototype.codepointat');
}
var UTF8 = {
  'isNotUTF8': function(bytes, byteOffset, byteLength) {
    try {
      UTF8.getStringFromBytes(bytes, byteOffset, byteLength, true);
    } catch (e) {
      return true;
    }
    return false;
  },
  'getCharLength': function(theByte) {
    if (0xF0 == (theByte & 0xF0)) {
      return 4;
    } else if (0xE0 == (theByte & 0xE0)) {
      return 3;
    } else if (0xC0 == (theByte & 0xC0)) {
      return 2;
    } else if (theByte == (theByte & 0x7F)) {
      return 1;
    }
    return 0;
  },
  'getCharCode': function(bytes, byteOffset, charLength) {
    var charCode = 0,
        mask = '';
    byteOffset = byteOffset || 0;
    charLength = charLength || UTF8.getCharLength(bytes[byteOffset]);
    if (charLength == 0) {
      throw new Error(bytes[byteOffset].toString(2) + ' is not a significative' + ' byte (offset:' + byteOffset + ').');
    }
    if (1 === charLength) {
      return bytes[byteOffset];
    }
    mask = '00000000'.slice(0, charLength) + 1 + '00000000'.slice(charLength + 1);
    if (bytes[byteOffset] & (parseInt(mask, 2))) {
      throw Error('Index ' + byteOffset + ': A ' + charLength + ' bytes' + ' encoded char' + ' cannot encode the ' + (charLength + 1) + 'th rank bit to 1.');
    }
    mask = '0000'.slice(0, charLength + 1) + '11111111'.slice(charLength + 1);
    charCode += (bytes[byteOffset] & parseInt(mask, 2)) << ((--charLength) * 6);
    while (charLength) {
      if (0x80 !== (bytes[byteOffset + 1] & 0x80) || 0x40 === (bytes[byteOffset + 1] & 0x40)) {
        throw Error('Index ' + (byteOffset + 1) + ': Next bytes of encoded char' + ' must begin with a "10" bit sequence.');
      }
      charCode += ((bytes[++byteOffset] & 0x3F) << ((--charLength) * 6));
    }
    return charCode;
  },
  'getStringFromBytes': function(bytes, byteOffset, byteLength, strict) {
    var charLength,
        chars = [];
    byteOffset = byteOffset | 0;
    byteLength = ('number' === typeof byteLength ? byteLength : bytes.byteLength || bytes.length);
    for (; byteOffset < byteLength; byteOffset++) {
      charLength = UTF8.getCharLength(bytes[byteOffset]);
      if (byteOffset + charLength > byteLength) {
        if (strict) {
          throw Error('Index ' + byteOffset + ': Found a ' + charLength + ' bytes encoded char declaration but only ' + (byteLength - byteOffset) + ' bytes are available.');
        }
      } else {
        chars.push(String.fromCodePoint(UTF8.getCharCode(bytes, byteOffset, charLength, strict)));
      }
      byteOffset += charLength - 1;
    }
    return chars.join('');
  },
  'getBytesForCharCode': function(charCode) {
    if (charCode < 128) {
      return 1;
    } else if (charCode < 2048) {
      return 2;
    } else if (charCode < 65536) {
      return 3;
    } else if (charCode < 2097152) {
      return 4;
    }
    throw new Error('CharCode ' + charCode + ' cannot be encoded with UTF8.');
  },
  'setBytesFromCharCode': function(charCode, bytes, byteOffset, neededBytes) {
    charCode = charCode | 0;
    bytes = bytes || [];
    byteOffset = byteOffset | 0;
    neededBytes = neededBytes || UTF8.getBytesForCharCode(charCode);
    if (1 == neededBytes) {
      bytes[byteOffset] = charCode;
    } else {
      bytes[byteOffset++] = (parseInt('1111'.slice(0, neededBytes), 2) << 8 - neededBytes) + (charCode >>> ((--neededBytes) * 6));
      for (; neededBytes > 0; ) {
        bytes[byteOffset++] = ((charCode >>> ((--neededBytes) * 6)) & 0x3F) | 0x80;
      }
    }
    return bytes;
  },
  'setBytesFromString': function(string, bytes, byteOffset, byteLength, strict) {
    string = string || '';
    bytes = bytes || [];
    byteOffset = byteOffset | 0;
    byteLength = ('number' === typeof byteLength ? byteLength : bytes.byteLength || Infinity);
    for (var i = 0,
        j = string.length; i < j; i++) {
      var neededBytes = UTF8.getBytesForCharCode(string[i].codePointAt(0));
      if (strict && byteOffset + neededBytes > byteLength) {
        throw new Error('Not enought bytes to encode the char "' + string[i] + '" at the offset "' + byteOffset + '".');
      }
      UTF8.setBytesFromCharCode(string[i].codePointAt(0), bytes, byteOffset, neededBytes, strict);
      byteOffset += neededBytes;
    }
    return bytes;
  }
};
if ('undefined' !== typeof module) {
  module.exports = UTF8;
}



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema/json", ["../schema","./failsafe","../type/null","../type/bool","../type/int","../type/float"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema/json.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema";
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
  include: [require('./failsafe')],
  implicit: [require('../type/null'), require('../type/bool'), require('../type/int'), require('../type/float')]
});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/type/js/function", ["esprima","../../type"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js/function.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/type/js";
'use strict';
var esprima;
try {
  esprima = require('esprima');
} catch (_) {
  if (typeof window !== 'undefined') {
    esprima = window.esprima;
  }
}
var Type = require('../../type');
function resolveJavascriptFunction(data) {
  try {
    var source = '(' + data + ')',
        ast = esprima.parse(source, {range: true}),
        params = [],
        body;
    if ('Program' !== ast.type || 1 !== ast.body.length || 'ExpressionStatement' !== ast.body[0].type || 'FunctionExpression' !== ast.body[0].expression.type) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
function constructJavascriptFunction(data) {
  var source = '(' + data + ')',
      ast = esprima.parse(source, {range: true}),
      params = [],
      body;
  if ('Program' !== ast.type || 1 !== ast.body.length || 'ExpressionStatement' !== ast.body[0].type || 'FunctionExpression' !== ast.body[0].expression.type) {
    throw new Error('Failed to resolve function');
  }
  ast.body[0].expression.params.forEach(function(param) {
    params.push(param.name);
  });
  body = ast.body[0].expression.body.range;
  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}
function representJavascriptFunction(object) {
  return object.toString();
}
function isFunction(object) {
  return '[object Function]' === Object.prototype.toString.call(object);
}
module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});



  global.define = __define;
  return module.exports;
});

System.register("npm:ramda@0.8.0/ramda", ["github:jspm/nodelibs@0.0.7/process"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/ramda@0.8.0/ramda.js";
  var __dirname = "jspm_packages/npm/ramda@0.8.0";
"format cjs";
(function(process) {
  (function(factory) {
    if (typeof exports === 'object') {
      module.exports = factory(this);
    } else if (typeof define === 'function' && define.amd) {
      define(factory);
    } else {
      this.R = factory(this);
    }
  }(function() {
    'use strict';
    var R = {version: '0.8.0'};
    function _noArgsException() {
      return new TypeError('Function called with no arguments');
    }
    function _slice(args, from, to) {
      switch (arguments.length) {
        case 0:
          throw _noArgsException();
        case 1:
          return _slice(args, 0, args.length);
        case 2:
          return _slice(args, from, args.length);
        default:
          var length = Math.max(0, to - from),
              list = new Array(length),
              idx = -1;
          while (++idx < length) {
            list[idx] = args[from + idx];
          }
          return list;
      }
    }
    function _concat(set1, set2) {
      set1 = set1 || [];
      set2 = set2 || [];
      var idx;
      var len1 = set1.length;
      var len2 = set2.length;
      var result = new Array(len1 + len2);
      idx = -1;
      while (++idx < len1) {
        result[idx] = set1[idx];
      }
      idx = -1;
      while (++idx < len2) {
        result[len1 + idx] = set2[idx];
      }
      return result;
    }
    var toString = Object.prototype.toString;
    var _isArray = Array.isArray || function isArray(val) {
      return val != null && val.length >= 0 && toString.call(val) === '[object Array]';
    };
    var isArrayLike = R.isArrayLike = function isArrayLike(x) {
      if (_isArray(x)) {
        return true;
      }
      if (!x) {
        return false;
      }
      if (typeof x !== 'object') {
        return false;
      }
      if (x instanceof String) {
        return false;
      }
      if (x.nodeType === 1) {
        return !!x.length;
      }
      if (x.length === 0) {
        return true;
      }
      if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
      }
      return false;
    };
    function _curry2(fn) {
      return function(a, b) {
        switch (arguments.length) {
          case 0:
            throw _noArgsException();
          case 1:
            return function(b) {
              return fn(a, b);
            };
          default:
            return fn(a, b);
        }
      };
    }
    function _curry3(fn) {
      return function(a, b, c) {
        switch (arguments.length) {
          case 0:
            throw _noArgsException();
          case 1:
            return _curry2(function(b, c) {
              return fn(a, b, c);
            });
          case 2:
            return function(c) {
              return fn(a, b, c);
            };
          default:
            return fn(a, b, c);
        }
      };
    }
    var __;
    try {
      Object.defineProperty(R, '__', {
        writable: false,
        value: __
      });
    } catch (e) {
      R.__ = __;
    }
    var op = R.op = function op(fn) {
      var length = fn.length;
      if (length !== 2) {
        throw new Error('Expected binary function.');
      }
      return function _op(a, b) {
        switch (arguments.length) {
          case 0:
            throw _noArgsException();
          case 1:
            return a === __ ? binary(flip(_op)) : unary(lPartial(fn, a));
          default:
            return a === __ ? unary(rPartial(fn, b)) : fn(a, b);
        }
      };
    };
    var curryN = R.curryN = function curryN(length, fn) {
      return (function recurry(args) {
        return arity(Math.max(length - (args && args.length || 0), 0), function() {
          if (arguments.length === 0) {
            throw _noArgsException();
          }
          var newArgs = _concat(args, arguments);
          if (newArgs.length >= length) {
            return fn.apply(this, newArgs);
          } else {
            return recurry(newArgs);
          }
        });
      }([]));
    };
    var curry = R.curry = function curry(fn) {
      return curryN(fn.length, fn);
    };
    var flip = R.flip = function flip(fn) {
      return function(a, b) {
        switch (arguments.length) {
          case 0:
            throw _noArgsException();
          case 1:
            return function(b) {
              return fn.apply(this, [b, a].concat(_slice(arguments, 1)));
            };
          default:
            return fn.apply(this, _concat([b, a], _slice(arguments, 2)));
        }
      };
    };
    function _hasMethod(methodName, obj) {
      return obj != null && !_isArray(obj) && typeof obj[methodName] === 'function';
    }
    function _checkForMethod(methodname, fn) {
      return function(a, b, c) {
        var length = arguments.length;
        var obj = arguments[length - 1],
            callBound = obj && !_isArray(obj) && typeof obj[methodname] === 'function';
        switch (arguments.length) {
          case 0:
            return fn();
          case 1:
            return callBound ? obj[methodname]() : fn(a);
          case 2:
            return callBound ? obj[methodname](a) : fn(a, b);
          case 3:
            return callBound ? obj[methodname](a, b) : fn(a, b, c);
        }
      };
    }
    var nAry = R.nAry = function(n, fn) {
      switch (n) {
        case 0:
          return function() {
            return fn.call(this);
          };
        case 1:
          return function(a0) {
            return fn.call(this, a0);
          };
        case 2:
          return function(a0, a1) {
            return fn.call(this, a0, a1);
          };
        case 3:
          return function(a0, a1, a2) {
            return fn.call(this, a0, a1, a2);
          };
        case 4:
          return function(a0, a1, a2, a3) {
            return fn.call(this, a0, a1, a2, a3);
          };
        case 5:
          return function(a0, a1, a2, a3, a4) {
            return fn.call(this, a0, a1, a2, a3, a4);
          };
        case 6:
          return function(a0, a1, a2, a3, a4, a5) {
            return fn.call(this, a0, a1, a2, a3, a4, a5);
          };
        case 7:
          return function(a0, a1, a2, a3, a4, a5, a6) {
            return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
          };
        case 8:
          return function(a0, a1, a2, a3, a4, a5, a6, a7) {
            return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
          };
        case 9:
          return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
          };
        case 10:
          return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
          };
        default:
          return fn;
      }
    };
    var unary = R.unary = function unary(fn) {
      return nAry(1, fn);
    };
    var binary = R.binary = function binary(fn) {
      return nAry(2, fn);
    };
    var arity = R.arity = function(n, fn) {
      switch (n) {
        case 0:
          return function() {
            return fn.apply(this, arguments);
          };
        case 1:
          return function(a0) {
            void a0;
            return fn.apply(this, arguments);
          };
        case 2:
          return function(a0, a1) {
            void a1;
            return fn.apply(this, arguments);
          };
        case 3:
          return function(a0, a1, a2) {
            void a2;
            return fn.apply(this, arguments);
          };
        case 4:
          return function(a0, a1, a2, a3) {
            void a3;
            return fn.apply(this, arguments);
          };
        case 5:
          return function(a0, a1, a2, a3, a4) {
            void a4;
            return fn.apply(this, arguments);
          };
        case 6:
          return function(a0, a1, a2, a3, a4, a5) {
            void a5;
            return fn.apply(this, arguments);
          };
        case 7:
          return function(a0, a1, a2, a3, a4, a5, a6) {
            void a6;
            return fn.apply(this, arguments);
          };
        case 8:
          return function(a0, a1, a2, a3, a4, a5, a6, a7) {
            void a7;
            return fn.apply(this, arguments);
          };
        case 9:
          return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
            void a8;
            return fn.apply(this, arguments);
          };
        case 10:
          return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
            void a9;
            return fn.apply(this, arguments);
          };
        default:
          return fn;
      }
    };
    var invokerN = R.invokerN = function invokerN(arity, method) {
      var initialArgs = _slice(arguments, 2);
      var len = arity - initialArgs.length;
      return curryN(len + 1, function() {
        var target = arguments[len];
        var args = initialArgs.concat(_slice(arguments, 0, len));
        return target[method].apply(target, args);
      });
    };
    var useWith = R.useWith = function useWith(fn) {
      var transformers = _slice(arguments, 1);
      var tlen = transformers.length;
      return curry(arity(tlen, function() {
        var args = [],
            idx = -1;
        while (++idx < tlen) {
          args.push(transformers[idx](arguments[idx]));
        }
        return fn.apply(this, args.concat(_slice(arguments, tlen)));
      }));
    };
    function forEach(fn, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len) {
        fn(list[idx]);
      }
      return list;
    }
    R.forEach = _curry2(forEach);
    R.forEach.idx = _curry2(function forEachIdx(fn, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len) {
        fn(list[idx], idx, list);
      }
      return list;
    });
    var clone = R.clone = function clone(list) {
      return _slice(list);
    };
    R.cloneDeep = function cloneDeep(value) {
      return _baseCopy(value, [], []);
    };
    function _baseCopy(value, refFrom, refTo) {
      switch (value && toString.call(value)) {
        case '[object Object]':
          return _copyObj(value, {}, refFrom, refTo);
        case '[object Array]':
          return _copyObj(value, [], refFrom, refTo);
        case '[object Function]':
          return value;
        case '[object Date]':
          return new Date(value);
        default:
          return value;
      }
    }
    function _copyObj(value, copiedValue, refFrom, refTo) {
      var len = refFrom.length;
      var idx = -1;
      while (++idx < len) {
        if (value === refFrom[idx]) {
          return refTo[idx];
        }
      }
      refFrom.push(value);
      refTo.push(copiedValue);
      for (var key in value) {
        copiedValue[key] = _baseCopy(value[key], refFrom, refTo);
      }
      return copiedValue;
    }
    var isEmpty = R.isEmpty = function isEmpty(val) {
      return val == null || val.length === 0;
    };
    function _prepend(el, list) {
      return _concat([el], list);
    }
    var prepend = R.prepend = _curry2(_prepend);
    R.cons = prepend;
    R.prependTo = flip(_prepend);
    var nth = R.nth = _curry2(function nth(n, list) {
      return n < 0 ? list[list.length + n] : list[n];
    });
    var head = R.head = nth(0);
    R.car = head;
    R.last = nth(-1);
    var tail = R.tail = _checkForMethod('tail', function(list) {
      return _slice(list, 1);
    });
    R.cdr = tail;
    function _append(el, list) {
      return _concat(list, [el]);
    }
    var append = R.append = _curry2(_append);
    R.push = append;
    R.appendTo = flip(_append);
    R.concat = _curry2(function(set1, set2) {
      if (_isArray(set2)) {
        return _concat(set1, set2);
      } else if (_hasMethod('concat', set1)) {
        return set1.concat(set2);
      } else {
        throw new TypeError("can't concat " + typeof set1);
      }
    });
    var identity = R.identity = function identity(x) {
      return x;
    };
    R.I = identity;
    R.argN = function argN(n) {
      return function() {
        return arguments[n];
      };
    };
    var times = R.times = _curry2(function times(fn, n) {
      var list = new Array(n);
      var idx = -1;
      while (++idx < n) {
        list[idx] = fn(idx);
      }
      return list;
    });
    R.repeatN = _curry2(function repeatN(value, n) {
      return times(always(value), n);
    });
    R.apply = _curry2(function apply(fn, args) {
      return fn.apply(this, args);
    });
    R.unapply = function unapply(fn) {
      if (arguments.length === 0) {
        throw _noArgsException();
      }
      return function() {
        return fn(_slice(arguments));
      };
    };
    function _compose(f, g) {
      return function() {
        return f.call(this, g.apply(this, arguments));
      };
    }
    function _pCompose(f, g) {
      return function() {
        var context = this;
        var value = g.apply(this, arguments);
        if (_isThennable(value)) {
          return value.then(function(result) {
            return f.call(context, result);
          });
        } else {
          return f.call(this, value);
        }
      };
    }
    function _isThennable(value) {
      return (value != null) && (value === Object(value)) && value.then && typeof value.then === 'function';
    }
    function _createComposer(composeFunction) {
      return function() {
        switch (arguments.length) {
          case 0:
            throw _noArgsException();
          case 1:
            return arguments[0];
          default:
            var idx = arguments.length - 1,
                fn = arguments[idx],
                length = fn.length;
            while (idx--) {
              fn = composeFunction(arguments[idx], fn);
            }
            return arity(length, fn);
        }
      };
    }
    var compose = R.compose = _createComposer(_compose);
    var pCompose = R.pCompose = _createComposer(_pCompose);
    R.pipe = function pipe() {
      return compose.apply(this, reverse(arguments));
    };
    R.pPipe = function pPipe() {
      return pCompose.apply(this, reverse(arguments));
    };
    function _createPartialApplicator(concat) {
      return function(fn) {
        var args = _slice(arguments, 1);
        return arity(Math.max(0, fn.length - args.length), function() {
          return fn.apply(this, concat(args, arguments));
        });
      };
    }
    var lPartial = R.lPartial = _createPartialApplicator(_concat);
    var rPartial = R.rPartial = _createPartialApplicator(flip(_concat));
    R.memoize = function memoize(fn) {
      if (!fn.length) {
        return once(fn);
      }
      var cache = {};
      return function() {
        if (!arguments.length) {
          return;
        }
        var position = reduce(function(cache, arg) {
          return cache[arg] || (cache[arg] = {});
        }, cache, _slice(arguments, 0, arguments.length - 1));
        var arg = arguments[arguments.length - 1];
        return (position[arg] || (position[arg] = fn.apply(this, arguments)));
      };
    };
    var once = R.once = function once(fn) {
      var called = false,
          result;
      return function() {
        if (called) {
          return result;
        }
        called = true;
        result = fn.apply(this, arguments);
        return result;
      };
    };
    R.wrap = function wrap(fn, wrapper) {
      return arity(fn.length, function() {
        return wrapper.apply(this, _concat([fn], arguments));
      });
    };
    var constructN = R.constructN = _curry2(function constructN(n, Fn) {
      var f = function() {
        var Temp = function() {},
            inst,
            ret;
        Temp.prototype = Fn.prototype;
        inst = new Temp();
        ret = Fn.apply(inst, arguments);
        return Object(ret) === ret ? ret : inst;
      };
      return n > 1 ? curry(nAry(n, f)) : f;
    });
    R.construct = function construct(Fn) {
      return constructN(Fn.length, Fn);
    };
    R.converge = function(after) {
      var fns = _slice(arguments, 1);
      return function() {
        var args = arguments;
        return after.apply(this, _map(function(fn) {
          return fn.apply(this, args);
        }, fns));
      };
    };
    var reduce = R.reduce = _curry3(function reduce(fn, acc, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len) {
        acc = fn(acc, list[idx]);
      }
      return acc;
    });
    R.foldl = reduce;
    R.reduce.idx = _curry3(function reduceIdx(fn, acc, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len) {
        acc = fn(acc, list[idx], idx, list);
      }
      return acc;
    });
    R.foldl.idx = reduce.idx;
    var reduceRight = R.reduceRight = _curry3(_checkForMethod('reduceRight', function reduceRight(fn, acc, list) {
      var idx = list.length;
      while (idx--) {
        acc = fn(acc, list[idx]);
      }
      return acc;
    }));
    R.foldr = reduceRight;
    R.reduceRight.idx = _curry3(function reduceRightIdx(fn, acc, list) {
      var idx = list.length;
      while (idx--) {
        acc = fn(acc, list[idx], idx, list);
      }
      return acc;
    });
    R.foldr.idx = reduceRight.idx;
    R.unfoldr = _curry2(function unfoldr(fn, seed) {
      var pair = fn(seed);
      var result = [];
      while (pair && pair.length) {
        result.push(pair[0]);
        pair = fn(pair[1]);
      }
      return result;
    });
    function _map(fn, list) {
      var idx = -1,
          len = list.length,
          result = new Array(len);
      while (++idx < len) {
        result[idx] = fn(list[idx]);
      }
      return result;
    }
    var map = R.map = _curry2(_checkForMethod('map', _map));
    R.map.idx = _curry2(function mapIdx(fn, list) {
      var idx = -1,
          len = list.length,
          result = new Array(len);
      while (++idx < len) {
        result[idx] = fn(list[idx], idx, list);
      }
      return result;
    });
    R.mapObj = _curry2(function mapObject(fn, obj) {
      return reduce(function(acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
      }, {}, keys(obj));
    });
    R.mapObj.idx = _curry2(function mapObjectIdx(fn, obj) {
      return reduce(function(acc, key) {
        acc[key] = fn(obj[key], key, obj);
        return acc;
      }, {}, keys(obj));
    });
    R.scanl = _curry3(function scanl(fn, acc, list) {
      var idx = 0,
          len = list.length + 1,
          result = new Array(len);
      result[idx] = acc;
      while (++idx < len) {
        acc = fn(acc, list[idx - 1]);
        result[idx] = acc;
      }
      return result;
    });
    var liftN = R.liftN = _curry2(function liftN(arity, fn) {
      var lifted = curryN(arity, fn);
      if (arguments.length === 0) {
        throw _noArgsException();
      }
      return curryN(arity, function() {
        return reduce(ap, _map(lifted, arguments[0]), _slice(arguments, 1));
      });
    });
    R.lift = function lift(fn) {
      if (arguments.length === 0) {
        throw _noArgsException();
      }
      return liftN(fn.length, fn);
    };
    var ap = R.ap = _curry2(function ap(fns, vs) {
      return _hasMethod('ap', fns) ? fns.ap(vs) : reduce(function(acc, fn) {
        return _concat(acc, _map(fn, vs));
      }, [], fns);
    });
    R.of = function of(x, container) {
      return (_hasMethod('of', container)) ? container.of(x) : [x];
    };
    R.empty = function empty(x) {
      return (_hasMethod('empty', x)) ? x.empty() : [];
    };
    R.chain = _curry2(_checkForMethod('chain', function chain(f, list) {
      return unnest(_map(f, list));
    }));
    var commuteMap = R.commuteMap = _curry3(function commuteMap(fn, of, list) {
      function consF(acc, ftor) {
        return ap(map(append, fn(ftor)), acc);
      }
      return reduce(consF, of([]), list);
    });
    R.commute = commuteMap(map(identity));
    var size = R.size = function size(list) {
      return list.length;
    };
    R.length = size;
    function _filter(fn, list) {
      var idx = -1,
          len = list.length,
          result = [];
      while (++idx < len) {
        if (fn(list[idx])) {
          result.push(list[idx]);
        }
      }
      return result;
    }
    R.filter = _curry2(_checkForMethod('filter', _filter));
    function filterIdx(fn, list) {
      var idx = -1,
          len = list.length,
          result = [];
      while (++idx < len) {
        if (fn(list[idx], idx, list)) {
          result.push(list[idx]);
        }
      }
      return result;
    }
    R.filter.idx = _curry2(filterIdx);
    var reject = function reject(fn, list) {
      return _filter(not(fn), list);
    };
    R.reject = _curry2(reject);
    R.reject.idx = _curry2(function rejectIdx(fn, list) {
      return filterIdx(not(fn), list);
    });
    R.takeWhile = _curry2(_checkForMethod('takeWhile', function(fn, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len && fn(list[idx])) {}
      return _slice(list, 0, idx);
    }));
    R.take = _curry2(_checkForMethod('take', function(n, list) {
      return _slice(list, 0, Math.min(n, list.length));
    }));
    R.skipUntil = _curry2(function skipUntil(fn, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len && !fn(list[idx])) {}
      return _slice(list, idx);
    });
    R.skip = _curry2(_checkForMethod('skip', function skip(n, list) {
      if (n < list.length) {
        return _slice(list, n);
      } else {
        return [];
      }
    }));
    R.find = _curry2(function find(fn, list) {
      var idx = -1;
      var len = list.length;
      while (++idx < len) {
        if (fn(list[idx])) {
          return list[idx];
        }
      }
    });
    R.findIndex = _curry2(function findIndex(fn, list) {
      var idx = -1;
      var len = list.length;
      while (++idx < len) {
        if (fn(list[idx])) {
          return idx;
        }
      }
      return -1;
    });
    R.findLast = _curry2(function findLast(fn, list) {
      var idx = list.length;
      while (idx--) {
        if (fn(list[idx])) {
          return list[idx];
        }
      }
    });
    R.findLastIndex = _curry2(function findLastIndex(fn, list) {
      var idx = list.length;
      while (idx--) {
        if (fn(list[idx])) {
          return idx;
        }
      }
      return -1;
    });
    function every(fn, list) {
      var idx = -1;
      while (++idx < list.length) {
        if (!fn(list[idx])) {
          return false;
        }
      }
      return true;
    }
    R.every = _curry2(every);
    function some(fn, list) {
      var idx = -1;
      while (++idx < list.length) {
        if (fn(list[idx])) {
          return true;
        }
      }
      return false;
    }
    R.some = _curry2(some);
    function _indexOf(list, item, from) {
      var idx = 0,
          len = list.length;
      if (typeof from == 'number') {
        idx = from < 0 ? Math.max(0, len + from) : from;
      }
      while (idx < len) {
        if (list[idx] === item) {
          return idx;
        }
        ++idx;
      }
      return -1;
    }
    function _lastIndexOf(list, item, from) {
      var idx = list.length;
      if (typeof from == 'number') {
        idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
      }
      while (--idx >= 0) {
        if (list[idx] === item) {
          return idx;
        }
      }
      return -1;
    }
    R.indexOf = _curry2(function indexOf(target, list) {
      return _indexOf(list, target);
    });
    R.indexOf.from = _curry3(function indexOfFrom(target, fromIdx, list) {
      return _indexOf(list, target, fromIdx);
    });
    R.lastIndexOf = _curry2(function lastIndexOf(target, list) {
      return _lastIndexOf(list, target);
    });
    R.lastIndexOf.from = _curry3(function lastIndexOfFrom(target, fromIdx, list) {
      return _lastIndexOf(list, target, fromIdx);
    });
    function _contains(a, list) {
      return _indexOf(list, a) >= 0;
    }
    R.contains = _curry2(_contains);
    function _containsWith(pred, x, list) {
      var idx = -1,
          len = list.length;
      while (++idx < len) {
        if (pred(x, list[idx])) {
          return true;
        }
      }
      return false;
    }
    var containsWith = R.containsWith = _curry3(_containsWith);
    var uniq = R.uniq = function uniq(list) {
      var idx = -1,
          len = list.length;
      var result = [],
          item;
      while (++idx < len) {
        item = list[idx];
        if (!_contains(item, result)) {
          result.push(item);
        }
      }
      return result;
    };
    R.isSet = function isSet(list) {
      var len = list.length;
      var idx = -1;
      while (++idx < len) {
        if (_indexOf(list, list[idx], idx + 1) >= 0) {
          return false;
        }
      }
      return true;
    };
    var uniqWith = R.uniqWith = _curry2(function uniqWith(pred, list) {
      var idx = -1,
          len = list.length;
      var result = [],
          item;
      while (++idx < len) {
        item = list[idx];
        if (!_containsWith(pred, item, result)) {
          result.push(item);
        }
      }
      return result;
    });
    var pluck = R.pluck = _curry2(function pluck(p, list) {
      return _map(prop(p), list);
    });
    function _makeFlat(recursive) {
      return function flatt(list) {
        var value,
            result = [],
            idx = -1,
            j,
            ilen = list.length,
            jlen;
        while (++idx < ilen) {
          if (isArrayLike(list[idx])) {
            value = (recursive) ? flatt(list[idx]) : list[idx];
            j = -1;
            jlen = value.length;
            while (++j < jlen) {
              result.push(value[j]);
            }
          } else {
            result.push(list[idx]);
          }
        }
        return result;
      };
    }
    R.flatten = _makeFlat(true);
    var unnest = R.unnest = _makeFlat(false);
    R.zipWith = _curry3(function zipWith(fn, a, b) {
      var rv = [],
          idx = -1,
          len = Math.min(a.length, b.length);
      while (++idx < len) {
        rv[idx] = fn(a[idx], b[idx]);
      }
      return rv;
    });
    R.zip = _curry2(function zip(a, b) {
      var rv = [];
      var idx = -1;
      var len = Math.min(a.length, b.length);
      while (++idx < len) {
        rv[idx] = [a[idx], b[idx]];
      }
      return rv;
    });
    R.zipObj = _curry2(function zipObj(keys, values) {
      var idx = -1,
          len = keys.length,
          out = {};
      while (++idx < len) {
        out[keys[idx]] = values[idx];
      }
      return out;
    });
    var fromPairs = R.fromPairs = function fromPairs(pairs) {
      var idx = -1,
          len = pairs.length,
          out = {};
      while (++idx < len) {
        if (_isArray(pairs[idx]) && pairs[idx].length) {
          out[pairs[idx][0]] = pairs[idx][1];
        }
      }
      return out;
    };
    var createMapEntry = R.createMapEntry = _curry2(function(key, val) {
      var obj = {};
      obj[key] = val;
      return obj;
    });
    R.lens = _curry2(function lens(get, set) {
      var lns = function(a) {
        return get(a);
      };
      lns.set = set;
      lns.map = function(fn, a) {
        return set(fn(get(a)), a);
      };
      return lns;
    });
    R.xprod = _curry2(function xprod(a, b) {
      if (isEmpty(a) || isEmpty(b)) {
        return [];
      }
      var idx = -1;
      var ilen = a.length;
      var j;
      var jlen = b.length;
      var result = [];
      while (++idx < ilen) {
        j = -1;
        while (++j < jlen) {
          result.push([a[idx], b[j]]);
        }
      }
      return result;
    });
    var reverse = R.reverse = function reverse(list) {
      var idx = -1,
          length = list.length;
      var pointer = length;
      var result = new Array(length);
      while (++idx < length) {
        result[--pointer] = list[idx];
      }
      return result;
    };
    R.range = _curry2(function range(from, to) {
      if (from >= to) {
        return [];
      }
      var idx = 0,
          result = new Array(Math.floor(to) - Math.ceil(from));
      while (from < to) {
        result[idx++] = from++;
      }
      return result;
    });
    R.join = invokerN(1, 'join');
    R.slice = invokerN(2, 'slice');
    R.slice.from = _curry2(function(a, xs) {
      return xs.slice(a, xs.length);
    });
    R.remove = _curry3(function remove(start, count, list) {
      return _concat(_slice(list, 0, Math.min(start, list.length)), _slice(list, Math.min(list.length, start + count)));
    });
    R.insert = _curry3(function insert(idx, elt, list) {
      idx = idx < list.length && idx >= 0 ? idx : list.length;
      return _concat(_append(elt, _slice(list, 0, idx)), _slice(list, idx));
    });
    R.insert.all = _curry3(function insertAll(idx, elts, list) {
      idx = idx < list.length && idx >= 0 ? idx : list.length;
      return _concat(_concat(_slice(list, 0, idx), elts), _slice(list, idx));
    });
    var comparator = R.comparator = function comparator(pred) {
      return function(a, b) {
        return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
      };
    };
    R.sort = _curry2(function sort(comparator, list) {
      return clone(list).sort(comparator);
    });
    var groupBy = R.groupBy = _curry2(function groupBy(fn, list) {
      return reduce(function(acc, elt) {
        var key = fn(elt);
        acc[key] = _append(elt, acc[key] || (acc[key] = []));
        return acc;
      }, {}, list);
    });
    R.partition = _curry2(function partition(pred, list) {
      return reduce(function(acc, elt) {
        acc[pred(elt) ? 0 : 1].push(elt);
        return acc;
      }, [[], []], list);
    });
    R.tap = _curry2(function tap(fn, x) {
      fn(x);
      return x;
    });
    R.eq = _curry2(function eq(a, b) {
      return a === b;
    });
    var prop = R.prop = function prop(p, obj) {
      switch (arguments.length) {
        case 0:
          throw _noArgsException();
        case 1:
          return function _prop(obj) {
            return obj[p];
          };
      }
      return obj[p];
    };
    R.get = prop;
    R.propOf = flip(prop);
    R.props = _curry2(function props(ps, obj) {
      var len = ps.length,
          out = new Array(len),
          idx = -1;
      while (++idx < len) {
        out[idx] = obj[ps[idx]];
      }
      return out;
    });
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    R.propOr = _curry3(function propOr(p, val, obj) {
      return _hasOwnProperty.call(obj, p) ? obj[p] : val;
    });
    R.has = _curry2(function(prop, obj) {
      return _hasOwnProperty.call(obj, prop);
    });
    R.hasIn = _curry2(function(prop, obj) {
      return prop in obj;
    });
    R.func = function func(funcName, obj) {
      switch (arguments.length) {
        case 0:
          throw _noArgsException();
        case 1:
          return function(obj) {
            return obj[funcName].apply(obj, _slice(arguments, 1));
          };
        default:
          return obj[funcName].apply(obj, _slice(arguments, 2));
      }
    };
    var always = R.always = function always(val) {
      return function() {
        return val;
      };
    };
    R.bind = _curry2(function bind(fn, thisObj) {
      return function() {
        return fn.apply(thisObj, arguments);
      };
    });
    var keys = R.keys = (function() {
      var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
      var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
      return function keys(obj) {
        if (Object(obj) !== obj) {
          return [];
        }
        if (Object.keys) {
          return Object.keys(obj);
        }
        var prop,
            ks = [],
            nIdx;
        for (prop in obj) {
          if (_hasOwnProperty.call(obj, prop)) {
            ks.push(prop);
          }
        }
        if (hasEnumBug) {
          nIdx = nonEnumerableProps.length;
          while (nIdx--) {
            prop = nonEnumerableProps[nIdx];
            if (_hasOwnProperty.call(obj, prop) && !_contains(prop, ks)) {
              ks.push(prop);
            }
          }
        }
        return ks;
      };
    }());
    var keysIn = R.keysIn = function keysIn(obj) {
      var prop,
          ks = [];
      for (prop in obj) {
        ks.push(prop);
      }
      return ks;
    };
    function _pairWith(fn) {
      return function(obj) {
        return _map(function(key) {
          return [key, obj[key]];
        }, fn(obj));
      };
    }
    R.toPairs = _pairWith(keys);
    R.toPairsIn = _pairWith(keysIn);
    R.values = function values(obj) {
      var props = keys(obj);
      var len = props.length;
      var vals = new Array(len);
      var idx = -1;
      while (++idx < len) {
        vals[idx] = obj[props[idx]];
      }
      return vals;
    };
    R.valuesIn = function valuesIn(obj) {
      var prop,
          vs = [];
      for (prop in obj) {
        vs.push(obj[prop]);
      }
      return vs;
    };
    function _pickBy(test, obj) {
      var copy = {};
      var prop;
      var props = keysIn(obj);
      var len = props.length;
      var idx = -1;
      while (++idx < len) {
        prop = props[idx];
        if (test(obj[prop], prop, obj)) {
          copy[prop] = obj[prop];
        }
      }
      return copy;
    }
    R.pick = _curry2(function pick(names, obj) {
      return _pickBy(function(val, key) {
        return _contains(key, names);
      }, obj);
    });
    R.omit = _curry2(function omit(names, obj) {
      return _pickBy(function(val, key) {
        return !_contains(key, names);
      }, obj);
    });
    R.pickBy = _curry2(_pickBy);
    function _pickAll(names, obj) {
      var copy = {};
      forEach(function(name) {
        copy[name] = obj[name];
      }, names);
      return copy;
    }
    var pickAll = R.pickAll = _curry2(_pickAll);
    function _extend(destination, other) {
      var props = keys(other),
          idx = -1,
          length = props.length;
      while (++idx < length) {
        destination[props[idx]] = other[props[idx]];
      }
      return destination;
    }
    R.mixin = _curry2(function mixin(a, b) {
      return _extend(_extend({}, a), b);
    });
    R.cloneObj = function(obj) {
      return _extend({}, obj);
    };
    R.eqProps = _curry3(function eqProps(prop, obj1, obj2) {
      return obj1[prop] === obj2[prop];
    });
    function _satisfiesSpec(spec, parsedSpec, testObj) {
      if (spec === testObj) {
        return true;
      }
      if (testObj == null) {
        return false;
      }
      parsedSpec.fn = parsedSpec.fn || [];
      parsedSpec.obj = parsedSpec.obj || [];
      var key,
          val,
          idx = -1,
          fnLen = parsedSpec.fn.length,
          j = -1,
          objLen = parsedSpec.obj.length;
      while (++idx < fnLen) {
        key = parsedSpec.fn[idx];
        val = spec[key];
        if (!(key in testObj)) {
          return false;
        }
        if (!val(testObj[key], testObj)) {
          return false;
        }
      }
      while (++j < objLen) {
        key = parsedSpec.obj[j];
        if (spec[key] !== testObj[key]) {
          return false;
        }
      }
      return true;
    }
    R.where = function where(spec, testObj) {
      var parsedSpec = groupBy(function(key) {
        return typeof spec[key] === 'function' ? 'fn' : 'obj';
      }, keys(spec));
      switch (arguments.length) {
        case 0:
          throw _noArgsException();
        case 1:
          return function(testObj) {
            return _satisfiesSpec(spec, parsedSpec, testObj);
          };
      }
      return _satisfiesSpec(spec, parsedSpec, testObj);
    };
    var assoc = R.assoc = _curry3(function(prop, val, obj) {
      return _extend(fromPairs(_map(function(key) {
        return [key, obj[key]];
      }, keysIn(obj))), createMapEntry(prop, val));
    });
    R.assocPath = (function() {
      var setParts = function(parts, val, obj) {
        if (parts.length === 1) {
          return assoc(parts[0], val, obj);
        }
        var current = obj[parts[0]];
        return assoc(parts[0], setParts(_slice(parts, 1), val, is(Object, current) ? current : {}), obj);
      };
      return function(path, val, obj) {
        var length = arguments.length;
        if (length === 0) {
          throw _noArgsException();
        }
        var parts = split('.', path);
        var fn = _curry2(function(val, obj) {
          return setParts(parts, val, obj);
        });
        switch (length) {
          case 1:
            return fn;
          case 2:
            return fn(val);
          default:
            return fn(val, obj);
        }
      };
    }());
    R.installTo = function(obj) {
      return _extend(obj, R);
    };
    var is = R.is = _curry2(function is(Ctor, val) {
      return val != null && val.constructor === Ctor || val instanceof Ctor;
    });
    R.type = function type(val) {
      return val === null ? 'Null' : val === undefined ? 'Undefined' : toString.call(val).slice(8, -1);
    };
    R.alwaysZero = always(0);
    R.alwaysFalse = always(false);
    R.alwaysTrue = always(true);
    R.and = _curry2(function and(f, g) {
      return function _and() {
        return f.apply(this, arguments) && g.apply(this, arguments);
      };
    });
    R.or = _curry2(function or(f, g) {
      return function _or() {
        return f.apply(this, arguments) || g.apply(this, arguments);
      };
    });
    var not = R.not = function not(f) {
      return function() {
        return !f.apply(this, arguments);
      };
    };
    function _predicateWrap(predPicker) {
      return function(preds) {
        var predIterator = function() {
          var args = arguments;
          return predPicker(function(predicate) {
            return predicate.apply(null, args);
          }, preds);
        };
        return arguments.length > 1 ? predIterator.apply(null, _slice(arguments, 1)) : arity(max(pluck('length', preds)), predIterator);
      };
    }
    R.allPredicates = _predicateWrap(every);
    R.anyPredicates = _predicateWrap(some);
    var ifElse = R.ifElse = _curry3(function ifElse(condition, onTrue, onFalse) {
      return function _ifElse() {
        return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
      };
    });
    R['if'] = ifElse;
    R.cond = function cond() {
      var pairs = arguments;
      return function() {
        var idx = -1;
        while (++idx < pairs.length) {
          if (pairs[idx][0].apply(this, arguments)) {
            return pairs[idx][1].apply(this, arguments);
          }
        }
      };
    };
    function _add(a, b) {
      return a + b;
    }
    R.add = _curry2(_add);
    function _multiply(a, b) {
      return a * b;
    }
    R.multiply = _curry2(_multiply);
    R.subtract = op(function subtract(a, b) {
      return a - b;
    });
    R.divide = op(function divide(a, b) {
      return a / b;
    });
    R.modulo = op(function modulo(a, b) {
      return a % b;
    });
    var _isInteger = Number.isInteger || function isInteger(n) {
      return (n << 0) === n;
    };
    R.mathMod = op(function mathMod(m, p) {
      if (!_isInteger(m)) {
        return NaN;
      }
      if (!_isInteger(p) || p < 1) {
        return NaN;
      }
      return ((m % p) + p) % p;
    });
    R.sum = reduce(_add, 0);
    R.product = reduce(_multiply, 1);
    function lt(a, b) {
      return a < b;
    }
    R.lt = op(lt);
    R.lte = op(function lte(a, b) {
      return a <= b;
    });
    function gt(a, b) {
      return a > b;
    }
    R.gt = op(gt);
    R.gte = op(function gte(a, b) {
      return a >= b;
    });
    function _createMaxMin(comparator, initialVal) {
      return function(list) {
        if (arguments.length === 0) {
          throw _noArgsException();
        }
        var idx = -1,
            winner = initialVal,
            computed;
        while (++idx < list.length) {
          computed = +list[idx];
          if (comparator(computed, winner)) {
            winner = computed;
          }
        }
        return winner;
      };
    }
    function _createMaxMinBy(comparator) {
      return function(valueComputer, list) {
        if (!(list && list.length > 0)) {
          return;
        }
        var idx = 0,
            winner = list[idx],
            computedWinner = valueComputer(winner),
            computedCurrent;
        while (++idx < list.length) {
          computedCurrent = valueComputer(list[idx]);
          if (comparator(computedCurrent, computedWinner)) {
            computedWinner = computedCurrent;
            winner = list[idx];
          }
        }
        return winner;
      };
    }
    var max = R.max = _createMaxMin(gt, -Infinity);
    R.maxBy = _curry2(_createMaxMinBy(gt));
    R.min = _createMaxMin(lt, Infinity);
    R.minBy = _curry2(_createMaxMinBy(lt));
    var substring = R.substring = invokerN(2, 'substring');
    R.substringFrom = flip(substring)(void 0);
    R.substringTo = substring(0);
    R.charAt = invokerN(1, 'charAt');
    R.charCodeAt = invokerN(1, 'charCodeAt');
    R.match = invokerN(1, 'match');
    R.replace = _curry3(function replace(regex, replacement, str) {
      return str.replace(regex, replacement);
    });
    R.strIndexOf = _curry2(function strIndexOf(c, str) {
      return str.indexOf(c);
    });
    R.strLastIndexOf = _curry2(function(c, str) {
      return str.lastIndexOf(c);
    });
    R.toUpperCase = invokerN(0, 'toUpperCase');
    R.toLowerCase = invokerN(0, 'toLowerCase');
    R.trim = (function() {
      var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' + '\u2029\uFEFF';
      var zeroWidth = '\u200b';
      var hasProtoTrim = (typeof String.prototype.trim === 'function');
      if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
        return function trim(str) {
          var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
          var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
          return str.replace(beginRx, '').replace(endRx, '');
        };
      } else {
        return function trim(str) {
          return str.trim();
        };
      }
    }());
    var split = R.split = invokerN(1, 'split');
    function _path(paths, obj) {
      var idx = -1,
          length = paths.length,
          val;
      if (obj == null) {
        return;
      }
      val = obj;
      while (val != null && ++idx < length) {
        val = val[paths[idx]];
      }
      return val;
    }
    var pathOn = R.pathOn = _curry3(function pathOn(sep, str, obj) {
      return _path(str.split(sep), obj);
    });
    R.path = pathOn('.');
    R.pathEq = _curry3(function(path, val, obj) {
      return _path(path.split('.'), obj) === val;
    });
    R.project = useWith(_map, pickAll, identity);
    R.propEq = _curry3(function propEq(name, val, obj) {
      return obj[name] === val;
    });
    R.union = compose(uniq, _concat);
    R.unionWith = _curry3(function unionWith(pred, list1, list2) {
      return uniqWith(pred, _concat(list1, list2));
    });
    R.difference = _curry2(function difference(first, second) {
      var out = [];
      var idx = -1;
      var firstLen = first.length;
      while (++idx < firstLen) {
        if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
          out.push(first[idx]);
        }
      }
      return out;
    });
    R.differenceWith = _curry3(function differenceWith(pred, first, second) {
      var out = [];
      var idx = -1;
      var firstLen = first.length;
      var containsPred = containsWith(pred);
      while (++idx < firstLen) {
        if (!containsPred(first[idx], second) && !containsPred(first[idx], out)) {
          out.push(first[idx]);
        }
      }
      return out;
    });
    R.intersection = _curry2(function intersection(list1, list2) {
      return uniq(_filter(flip(_contains)(list1), list2));
    });
    R.intersectionWith = _curry3(function intersectionWith(pred, list1, list2) {
      var results = [],
          idx = -1;
      while (++idx < list1.length) {
        if (_containsWith(pred, list1[idx], list2)) {
          results[results.length] = list1[idx];
        }
      }
      return uniqWith(pred, results);
    });
    function _keyValue(fn, list) {
      return _map(function(item) {
        return {
          key: fn(item),
          val: item
        };
      }, list);
    }
    var _compareKeys = comparator(function(a, b) {
      return a.key < b.key;
    });
    R.sortBy = _curry2(function sortBy(fn, list) {
      return pluck('val', _keyValue(fn, list).sort(_compareKeys));
    });
    R.countBy = _curry2(function countBy(fn, list) {
      return reduce(function(counts, obj) {
        counts[obj.key] = (counts[obj.key] || 0) + 1;
        return counts;
      }, {}, _keyValue(fn, list));
    });
    function _functionsWith(fn) {
      return function(obj) {
        return _filter(function(key) {
          return typeof obj[key] === 'function';
        }, fn(obj));
      };
    }
    R.functions = _functionsWith(keys);
    R.functionsIn = _functionsWith(keysIn);
    return R;
  }));
})(require("github:jspm/nodelibs@0.0.7/process"));



  global.define = __define;
  return module.exports;
});

System.register("npm:heap@0.2.5", ["npm:heap@0.2.5/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/heap@0.2.5.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:heap@0.2.5/index");



  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs@0.0.7/buffer", ["./buffer/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/github/jspm/nodelibs@0.0.7/buffer.js";
  var __dirname = "jspm_packages/github/jspm/nodelibs@0.0.7";
"format cjs";
module.exports = System._nodeRequire ? System._nodeRequire("buffer") : require("./buffer/index");



  global.define = __define;
  return module.exports;
});

System.register("npm:utf-8@0.1.2", ["npm:utf-8@0.1.2/src/UTF8"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/utf-8@0.1.2.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:utf-8@0.1.2/src/UTF8");



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema/core", ["../schema","./json"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema/core.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema";
'use strict';
var Schema = require('../schema');
module.exports = new Schema({include: [require('./json')]});



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema/default_full", ["../schema","./default_safe","../type/js/undefined","../type/js/regexp","../type/js/function"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema/default_full.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema";
'use strict';
var Schema = require('../schema');
module.exports = Schema.DEFAULT = new Schema({
  include: [require('./default_safe')],
  explicit: [require('../type/js/undefined'), require('../type/js/regexp'), require('../type/js/function')]
});



  global.define = __define;
  return module.exports;
});

System.register("npm:ramda@0.8.0", ["npm:ramda@0.8.0/ramda"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/ramda@0.8.0.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:ramda@0.8.0/ramda");



  global.define = __define;
  return module.exports;
});

System.register("npm:midifile@0.2.0/src/MIDIFileTrack", ["github:jspm/nodelibs@0.0.7/buffer"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midifile@0.2.0/src/MIDIFileTrack.js";
  var __dirname = "jspm_packages/npm/midifile@0.2.0/src";
(function(Buffer) {
  function MIDIFileTrack(buffer, start, strictMode) {
    if (!buffer) {
      var a = new Uint8Array(12);
      a[0] = 0x4D;
      a[1] = 0x54;
      a[2] = 0x72;
      a[3] = 0x6B;
      a[4] = 0x00;
      a[5] = 0x00;
      a[6] = 0x00;
      a[7] = 0x04;
      a[8] = 0x00;
      a[9] = 0xFF;
      a[10] = 0x2F;
      a[11] = 0x00;
      this.datas = new DataView(a.buffer, 0, MIDIFileTrack.HDR_LENGTH + 4);
    } else {
      if (!(buffer instanceof ArrayBuffer))
        throw Error('Invalid buffer received.');
      if (buffer.byteLength - start < 12) {
        throw Error('Invalid MIDIFileTrack (0x' + start.toString(16) + ') :' + ' Buffer length must size at least 12bytes');
      }
      this.datas = new DataView(buffer, start, MIDIFileTrack.HDR_LENGTH);
      if (!('M' === String.fromCharCode(this.datas.getUint8(0)) && 'T' === String.fromCharCode(this.datas.getUint8(1)) && 'r' === String.fromCharCode(this.datas.getUint8(2)) && 'k' === String.fromCharCode(this.datas.getUint8(3)))) {
        throw Error('Invalid MIDIFileTrack (0x' + start.toString(16) + ') :' + ' MTrk prefix not found');
      }
      var trackLength = this.getTrackLength();
      if (buffer.byteLength - start < trackLength) {
        throw Error('Invalid MIDIFileTrack (0x' + start.toString(16) + ') :' + ' The track size exceed the buffer length.');
      }
      this.datas = new DataView(buffer, start, MIDIFileTrack.HDR_LENGTH + trackLength);
      if (!(0xFF === this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + trackLength - 3) && 0x2F === this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + trackLength - 2) && 0x00 === this.datas.getUint8(MIDIFileTrack.HDR_LENGTH + trackLength - 1))) {
        throw Error('Invalid MIDIFileTrack (0x' + start.toString(16) + ') :' + ' No track end event found at the expected index' + ' (' + (MIDIFileTrack.HDR_LENGTH + trackLength - 1).toString(16) + ').');
      }
    }
  }
  MIDIFileTrack.HDR_LENGTH = 8;
  MIDIFileTrack.prototype.getTrackLength = function() {
    return this.datas.getUint32(4);
  };
  MIDIFileTrack.prototype.setTrackLength = function(trackLength) {
    return this.datas.setUint32(trackLength);
  };
  MIDIFileTrack.prototype.getTrackContent = function() {
    return new DataView(this.datas.buffer, this.datas.byteOffset + MIDIFileTrack.HDR_LENGTH, this.datas.byteLength - MIDIFileTrack.HDR_LENGTH);
  };
  MIDIFileTrack.prototype.setTrackContent = function(dataView) {
    var trackLength = dataView.byteLength - dataView.byteOffset;
    if (trackLength < 4) {
      throw Error('Invalid track length, must size at least 4bytes');
    }
    this.datas = new DataView(new Uint8Array(MIDIFileTrack.HDR_LENGTH + trackLength).buffer);
    this.datas.setUint8(0, 0x4D);
    this.datas.setUint8(1, 0x54);
    this.datas.setUint8(2, 0x72);
    this.datas.setUint8(3, 0x6B);
    this.datas.setUint32(4, trackLength);
    var origin = new Uint8Array(dataView.buffer, dataView.byteOffset, dataView.byteLength),
        destination = new Uint8Array(this.datas.buffer, MIDIFileTrack.HDR_LENGTH, trackLength);
    for (var i = 0,
        j = origin.length; i < j; i++) {
      destination[i] = origin[i];
    }
  };
  module.exports = MIDIFileTrack;
})(require("github:jspm/nodelibs@0.0.7/buffer").Buffer);



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/schema/default_safe", ["../schema","./core","../type/timestamp","../type/merge","../type/binary","../type/omap","../type/pairs","../type/set"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema/default_safe.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/schema";
'use strict';
var Schema = require('../schema');
module.exports = new Schema({
  include: [require('./core')],
  implicit: [require('../type/timestamp'), require('../type/merge')],
  explicit: [require('../type/binary'), require('../type/omap'), require('../type/pairs'), require('../type/set')]
});



  global.define = __define;
  return module.exports;
});

System.register("npm:midifile@0.2.0/src/MIDIFile", ["./MIDIFileHeader","./MIDIFileTrack","midievents","utf-8"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midifile@0.2.0/src/MIDIFile.js";
  var __dirname = "jspm_packages/npm/midifile@0.2.0/src";
var MIDIFileHeader = require('./MIDIFileHeader'),
    MIDIFileTrack = require('./MIDIFileTrack'),
    MIDIEvents = require('midievents'),
    UTF8 = require('utf-8');
;
function MIDIFile(buffer, strictMode) {
  if (!buffer) {
    this.header = new MIDIFileHeader();
    this.tracks = [new MIDIFileTrack()];
  } else {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Invalid buffer received.');
    }
    if (buffer.byteLength < 25) {
      throw new Error('A buffer of a valid MIDI file must have, at least, a' + ' size of 25bytes.');
    }
    this.header = new MIDIFileHeader(buffer, strictMode);
    this.tracks = [];
    var track;
    var curIndex = 14;
    for (var i = 0,
        j = this.header.getTracksCount(); i < j; i++) {
      if (strictMode && curIndex >= buffer.byteLength - 1) {
        throw new Error('Couldn\'t find datas corresponding to the track #' + i + '.');
      }
      var track = new MIDIFileTrack(buffer, curIndex, strictMode);
      this.tracks.push(track);
      curIndex += track.getTrackLength() + 8;
    }
    if (strictMode && curIndex != buffer.byteLength) {
      throw new Error('It seems that the buffer contains too much datas.');
    }
  }
}
MIDIFile.prototype.getEvents = function(type, subtype) {
  var events,
      event,
      playTime = 0,
      filteredEvents = [],
      format = this.header.getFormat(),
      tickResolution = this.header.getTickResolution();
  if (1 !== format || 1 === this.tracks.length) {
    for (var i = 0,
        j = this.tracks.length; i < j; i++) {
      playTime = (2 == format && playTime ? playTime : 0);
      events = new MIDIEvents.createParser(this.tracks[i].getTrackContent(), 0, false);
      while (event = events.next()) {
        playTime += (event.delta ? (event.delta * tickResolution) / 1000 : 0);
        if (event.type === MIDIEvents.EVENT_META) {
          if (event.subtype === MIDIEvents.EVENT_META_SET_TEMPO) {
            tickResolution = this.header.getTickResolution(event.tempo);
          }
        }
        if (((!type) || event.type === type) && ((!subtype) || (event.subtype && event.subtype === type))) {
          event.playTime = playTime;
          filteredEvents.push(event);
        }
      }
    }
  } else {
    var trackParsers = [],
        smallestDelta = -1,
        i,
        j;
    for (i = 0, j = this.tracks.length; i < j; i++) {
      trackParsers[i] = {};
      trackParsers[i].parser = new MIDIEvents.createParser(this.tracks[i].getTrackContent(), 0, false);
      trackParsers[i].curEvent = trackParsers[i].parser.next();
    }
    do {
      smallestDelta = -1;
      for (i = 0, j = trackParsers.length; i < j; i++) {
        if (trackParsers[i].curEvent) {
          if (-1 === smallestDelta || trackParsers[i].curEvent.delta < trackParsers[smallestDelta].curEvent.delta) {
            smallestDelta = i;
          }
        }
      }
      if (-1 !== smallestDelta) {
        for (i = 0, j = trackParsers.length; i < j; i++) {
          if (i !== smallestDelta && trackParsers[i].curEvent) {
            trackParsers[i].curEvent.delta -= trackParsers[smallestDelta].curEvent.delta;
          }
        }
        event = trackParsers[smallestDelta].curEvent;
        playTime += (event.delta ? (event.delta * tickResolution) / 1000 : 0);
        if (event.type === MIDIEvents.EVENT_META) {
          if (event.subtype === MIDIEvents.EVENT_META_SET_TEMPO) {
            tickResolution = this.header.getTickResolution(event.tempo);
          }
        }
        if (((!type) || event.type === type) && ((!subtype) || (event.subtype && event.subtype === type))) {
          event.playTime = playTime;
          event.track = smallestDelta;
          filteredEvents.push(event);
        }
        trackParsers[smallestDelta].curEvent = trackParsers[smallestDelta].parser.next();
      }
    } while (-1 !== smallestDelta);
  }
  return filteredEvents;
};
MIDIFile.prototype.getMidiEvents = function() {
  return this.getEvents(MIDIEvents.EVENT_MIDI);
};
MIDIFile.prototype.getLyrics = function() {
  var events = this.getEvents(MIDIEvents.EVENT_META),
      texts = [],
      lyrics = [],
      event,
      karaoke = -1,
      format = this.header.getFormat();
  for (var i = 0,
      j = events.length; i < j; i++) {
    event = events[i];
    if (event.subtype === MIDIEvents.EVENT_META_LYRICS) {
      lyrics.push(event);
    } else if (event.subtype === MIDIEvents.EVENT_META_TEXT) {
      if ('@' === String.fromCharCode(event.data[0])) {
        if ('T' === String.fromCharCode(event.data[1])) {} else if ('I' === String.fromCharCode(event.data[1])) {} else if ('L' === String.fromCharCode(event.data[1])) {}
      } else if (0 === event.data.map(function(c) {
        return String.fromCharCode(c);
      }).join('').indexOf('words')) {
        texts.length = 0;
      } else {
        if (0 !== event.playTime) {
          texts.push(event);
        }
      }
    }
  }
  if (lyrics.length > 2) {
    texts = lyrics;
  } else if (!texts.length) {
    texts = [];
  }
  try {
    texts.forEach(function(event) {
      event.text = UTF8.getStringFromBytes(event.data, 0, event.length, true);
    });
  } catch (e) {
    texts.forEach(function(event) {
      event.text = event.data.map(function(c) {
        return String.fromCharCode(c);
      }).join('');
    });
  }
  return texts;
};
MIDIFile.prototype.getTrackEvents = function(index) {
  var event,
      events = [],
      parser;
  if (index > this.tracks.length || index < 0) {
    throw Error('Invalid track index (' + index + ')');
  }
  parser = new MIDIEvents.createParser(this.tracks[index].getTrackContent(), 0, false);
  event = parser.next();
  do {
    events.push(event);
    event = parser.next();
  } while (event);
  return events;
};
MIDIFile.prototype.setTrackEvents = function(index, events) {
  var bufferLength,
      destination;
  if (index > this.tracks.length || index < 0) {
    throw Error('Invalid track index (' + index + ')');
  }
  if ((!events) || (!events.length)) {
    throw Error('A track must contain at least one event, none given.');
  }
  bufferLength = MIDIEvents.getRequiredBufferLength(events);
  destination = new Uint8Array(bufferLength);
  MIDIEvents.writeToTrack(events, destination);
  this.tracks[index].setTrackContent(destination);
};
MIDIFile.prototype.deleteTrack = function(index) {
  if (index > this.tracks.length || index < 0) {
    throw Error('Invalid track index (' + index + ')');
  }
  this.tracks.splice(index, 1);
  this.header.setTracksCount(this.tracks.length);
};
MIDIFile.prototype.addTrack = function(index) {
  if (index > this.tracks.length || index < 0) {
    throw Error('Invalid track index (' + index + ')');
  }
  var track = new MIDIFileTrack();
  if (index == this.tracks.length) {
    this.tracks.push(track);
  } else {
    this.tracks.splice(index, 0, track);
  }
  this.header.setTracksCount(this.tracks.length);
};
MIDIFile.prototype.getContent = function() {
  var bufferLength,
      destination,
      origin,
      lastOffset = 0;
  bufferLength = MIDIFileHeader.HEADER_LENGTH;
  for (var i = 0,
      j = this.tracks.length; i < j; i++) {
    bufferLength += this.tracks[i].getTrackLength() + 8;
  }
  destination = new Uint8Array(bufferLength);
  origin = new Uint8Array(this.header.datas.buffer, this.header.datas.byteOffset, MIDIFileHeader.HEADER_LENGTH);
  for (var i = 0,
      j = MIDIFileHeader.HEADER_LENGTH; i < j; i++) {
    destination[i] = origin[i];
  }
  for (var k = 0,
      l = this.tracks.length; k < l; k++) {
    origin = new Uint8Array(this.tracks[k].datas.buffer, this.tracks[k].datas.byteOffset, this.tracks[k].datas.byteLength);
    for (var m = 0,
        n = this.tracks[k].datas.byteLength; m < n; m++) {
      destination[i++] = origin[m];
    }
  }
  return destination.buffer;
};
MIDIFile.Header = MIDIFileHeader;
MIDIFile.Track = MIDIFileTrack;
module.exports = MIDIFile;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml/loader", ["./common","./exception","./mark","./schema/default_safe","./schema/default_full"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml/loader.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml";
'use strict';
var common = require('./common');
var YAMLException = require('./exception');
var Mark = require('./mark');
var DEFAULT_SAFE_SCHEMA = require('./schema/default_safe');
var DEFAULT_FULL_SCHEMA = require('./schema/default_full');
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uD800-\uDFFF\uFFFE\uFFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function is_EOL(c) {
  return (c === 0x0A) || (c === 0x0D);
}
function is_WHITE_SPACE(c) {
  return (c === 0x09) || (c === 0x20);
}
function is_WS_OR_EOL(c) {
  return (c === 0x09) || (c === 0x20) || (c === 0x0A) || (c === 0x0D);
}
function is_FLOW_INDICATOR(c) {
  return 0x2C === c || 0x5B === c || 0x5D === c || 0x7B === c || 0x7D === c;
}
function fromHexCode(c) {
  var lc;
  if ((0x30 <= c) && (c <= 0x39)) {
    return c - 0x30;
  }
  lc = c | 0x20;
  if ((0x61 <= lc) && (lc <= 0x66)) {
    return lc - 0x61 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 0x78) {
    return 2;
  }
  if (c === 0x75) {
    return 4;
  }
  if (c === 0x55) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if ((0x30 <= c) && (c <= 0x39)) {
    return c - 0x30;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return (c === 0x30) ? '\x00' : (c === 0x61) ? '\x07' : (c === 0x62) ? '\x08' : (c === 0x74) ? '\x09' : (c === 0x09) ? '\x09' : (c === 0x6E) ? '\x0A' : (c === 0x76) ? '\x0B' : (c === 0x66) ? '\x0C' : (c === 0x72) ? '\x0D' : (c === 0x65) ? '\x1B' : (c === 0x20) ? ' ' : (c === 0x22) ? '\x22' : (c === 0x2F) ? '/' : (c === 0x5C) ? '\x5C' : (c === 0x4E) ? '\x85' : (c === 0x5F) ? '\xA0' : (c === 0x4C) ? '\u2028' : (c === 0x50) ? '\u2029' : '';
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State(input, options) {
  this.input = input;
  this.filename = options['filename'] || null;
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy = options['legacy'] || false;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.documents = [];
}
function generateError(state, message) {
  return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  var error = generateError(state, message);
  if (state.onWarning) {
    state.onWarning.call(null, error);
  } else {
    throw error;
  }
}
var directiveHandlers = {
  'YAML': function handleYamlDirective(state, name, args) {
    var match,
        major,
        minor;
    if (null !== state.version) {
      throwError(state, 'duplication of %YAML directive');
    }
    if (1 !== args.length) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (null === match) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (1 !== major) {
      throwError(state, 'unacceptable YAML version of the document');
    }
    state.version = args[0];
    state.checkLineBreaks = (minor < 2);
    if (1 !== minor && 2 !== minor) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },
  'TAG': function handleTagDirective(state, name, args) {
    var handle,
        prefix;
    if (2 !== args.length) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }
    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position,
      _length,
      _character,
      _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(0x09 === _character || 0x20 <= _character && _character <= 0x10FFFF)) {
          throwError(state, 'expected valid JSON character');
        }
      }
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source) {
  var sourceKeys,
      key,
      index,
      quantity;
  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
    }
  }
}
function storeMappingPair(state, _result, keyTag, keyNode, valueNode) {
  var index,
      quantity;
  keyNode = String(keyNode);
  if (null === _result) {
    _result = {};
  }
  if ('tag:yaml.org,2002:merge' === keyTag) {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index]);
      }
    } else {
      mergeMappings(state, _result, valueNode);
    }
  } else {
    _result[keyNode] = valueNode;
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (0x0A === ch) {
    state.position++;
  } else if (0x0D === ch) {
    state.position++;
    if (0x0A === state.input.charCodeAt(state.position)) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }
  state.line += 1;
  state.lineStart = state.position;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);
  while (0 !== ch) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && 0x23 === ch) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A && ch !== 0x0D && 0 !== ch);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (0x20 === ch) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.lineIndent < checkIndent) {
        throwWarning(state, 'deficient indentation');
      }
    } else {
      break;
    }
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position,
      ch;
  ch = state.input.charCodeAt(_position);
  if ((0x2D === ch || 0x2E === ch) && state.input.charCodeAt(_position + 1) === ch && state.input.charCodeAt(_position + 2) === ch) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (1 === count) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || 0x23 === ch || 0x26 === ch || 0x2A === ch || 0x21 === ch || 0x7C === ch || 0x3E === ch || 0x27 === ch || 0x22 === ch || 0x25 === ch || 0x40 === ch || 0x60 === ch) {
    return false;
  }
  if (0x3F === ch || 0x2D === ch) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (0 !== ch) {
    if (0x3A === ch) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (0x23 === ch) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  } else {
    state.kind = _kind;
    state.result = _result;
    return false;
  }
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart,
      captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (0x27 !== ch) {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;
  while (0 !== (ch = state.input.charCodeAt(state.position))) {
    if (0x27 === ch) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (0x27 === ch) {
        captureStart = captureEnd = state.position;
        state.position++;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      tmpEsc,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (0x22 !== ch) {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;
  while (0 !== (ch = state.input.charCodeAt(state.position))) {
    if (0x22 === ch) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (0x5C === ch) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }
        state.result += String.fromCharCode(hexResult);
        state.position++;
      } else {
        throwError(state, 'unknown escape sequence');
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag = state.tag,
      _result,
      _anchor = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      keyNode,
      keyTag,
      valueNode,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 0x5B) {
    terminator = 0x5D;
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B) {
    terminator = 0x7D;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (null !== state.anchor) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (0 !== ch) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (0x3F === ch) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && 0x3A === ch) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (0x2C === ch) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, 'unexpected end of the stream within a flow collection');
}
function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping = CHOMPING_CLIP,
      detectedIndent = false,
      textIndent = nodeIndent,
      emptyLines = 0,
      atMoreIndented = false,
      tmp,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 0x7C) {
    folding = false;
  } else if (ch === 0x3E) {
    folding = true;
  } else {
    return false;
  }
  state.kind = 'scalar';
  state.result = '';
  while (0 !== ch) {
    ch = state.input.charCodeAt(++state.position);
    if (0x2B === ch || 0x2D === ch) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (0x2B === ch) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (0x23 === ch) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && (0 !== ch));
    }
  }
  while (0 !== ch) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && (0x20 === ch)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (detectedIndent) {
          state.result += '\n';
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat('\n', emptyLines + 1);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);
      } else if (0 === emptyLines) {
        if (detectedIndent) {
          state.result += ' ';
        }
      } else {
        state.result += common.repeat('\n', emptyLines);
      }
    } else {
      if (detectedIndent) {
        state.result += common.repeat('\n', emptyLines + 1);
      } else {
        state.result += common.repeat('\n', emptyLines);
      }
    }
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && (0 !== ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = [],
      following,
      detected = false,
      ch;
  if (null !== state.anchor) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (0 !== ch) {
    if (0x2D !== ch) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && (0 !== ch)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  } else {
    return false;
  }
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = {},
      keyTag = null,
      keyNode = null,
      valueNode = null,
      atExplicitKey = false,
      detected = false,
      ch;
  if (null !== state.anchor) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (0 !== ch) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((0x3F === ch || 0x3A === ch) && is_WS_OR_EOL(following)) {
      if (0x3F === ch) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed');
      }
      state.position += 1;
      ch = following;
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (0x3A === ch) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    } else {
      break;
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, keyTag, keyNode, valueNode);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if (state.lineIndent > nodeIndent && (0 !== ch)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, keyTag, keyNode, null);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed = false,
      tagHandle,
      tagName,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (0x21 !== ch) {
    return false;
  }
  if (null !== state.tag) {
    throwError(state, 'duplication of a tag property');
  }
  ch = state.input.charCodeAt(++state.position);
  if (0x3C === ch) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (0x21 === ch) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = '!';
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (0 !== ch && 0x3E !== ch);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (0 !== ch && !is_WS_OR_EOL(ch)) {
      if (0x21 === ch) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if ('!' === tagHandle) {
    state.tag = '!' + tagName;
  } else if ('!!' === tagHandle) {
    state.tag = 'tag:yaml.org,2002:' + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (0x26 !== ch) {
    return false;
  }
  if (null !== state.anchor) {
    throwError(state, 'duplication of an anchor property');
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position,
      alias,
      len = state.length,
      input = state.input,
      ch;
  ch = state.input.charCodeAt(state.position);
  if (0x2A !== ch) {
    return false;
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }
  alias = state.input.slice(_position, state.position);
  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      atNewLine = false,
      isIndented = true,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent,
      _result;
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent === parentIndent) {
        isIndented = false;
      } else if (state.lineIndent > parentIndent) {
        isIndented = true;
      } else {
        return false;
      }
    }
  }
  if (isIndented) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        if (state.lineIndent > parentIndent) {
          isIndented = true;
          allowBlockCollections = allowBlockStyles;
        } else if (state.lineIndent === parentIndent) {
          isIndented = false;
          allowBlockCollections = allowBlockStyles;
        } else {
          return true;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (isIndented || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (isIndented) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (null !== state.tag || null !== state.anchor) {
            throwError(state, 'alias node should not have any properties');
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (null === state.tag) {
            state.tag = '?';
          }
        }
        if (null !== state.anchor) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (null !== state.tag && '!' !== state.tag) {
    if ('?' === state.tag) {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex];
        if (type.resolve(state.result)) {
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (null !== state.anchor) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap, state.tag)) {
      type = state.typeMap[state.tag];
      if (null !== state.result && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }
      if (!type.resolve(state.result)) {
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (null !== state.anchor) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwWarning(state, 'unknown tag !<' + state.tag + '>');
    }
  }
  return null !== state.tag || null !== state.anchor || hasContent;
}
function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};
  while (0 !== (ch = state.input.charCodeAt(state.position))) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || 0x25 !== ch) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (0 !== ch && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }
    while (0 !== ch) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (0x23 === ch) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (0 !== ch && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) {
        break;
      }
      _position = state.position;
      while (0 !== ch && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (0 !== ch) {
      readLineBreak(state);
    }
    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (0 === state.lineIndent && 0x2D === state.input.charCodeAt(state.position) && 0x2D === state.input.charCodeAt(state.position + 1) && 0x2D === state.input.charCodeAt(state.position + 2)) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (0x2E === state.input.charCodeAt(state.position)) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (0 !== input.length && 0x0A !== input.charCodeAt(input.length - 1) && 0x0D !== input.charCodeAt(input.length - 1)) {
    input += '\n';
  }
  var state = new State(input, options);
  if (PATTERN_NON_PRINTABLE.test(state.input)) {
    throwError(state, 'the stream contains non-printable characters');
  }
  state.input += '\0';
  while (0x20 === state.input.charCodeAt(state.position)) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < (state.length - 1)) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options),
      index,
      length;
  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load(input, options) {
  var documents = loadDocuments(input, options),
      index,
      length;
  if (0 === documents.length) {
    return undefined;
  } else if (1 === documents.length) {
    return documents[0];
  } else {
    throw new YAMLException('expected a single document in the stream, but found more');
  }
}
function safeLoadAll(input, output, options) {
  loadAll(input, output, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
}
function safeLoad(input, options) {
  return load(input, common.extend({schema: DEFAULT_SAFE_SCHEMA}, options));
}
module.exports.loadAll = loadAll;
module.exports.load = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad = safeLoad;



  global.define = __define;
  return module.exports;
});

System.register("npm:midifile@0.2.0", ["npm:midifile@0.2.0/src/MIDIFile"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/midifile@0.2.0.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:midifile@0.2.0/src/MIDIFile");



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/lib/js-yaml", ["./js-yaml/loader","./js-yaml/dumper","./js-yaml/type","./js-yaml/schema","./js-yaml/schema/failsafe","./js-yaml/schema/json","./js-yaml/schema/core","./js-yaml/schema/default_safe","./js-yaml/schema/default_full","./js-yaml/exception","./js-yaml/schema/failsafe","./js-yaml/schema/default_safe","./js-yaml/schema/default_full"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/lib/js-yaml.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3/lib";
'use strict';
var loader = require('./js-yaml/loader');
var dumper = require('./js-yaml/dumper');
function deprecated(name) {
  return function() {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}
module.exports.Type = require('./js-yaml/type');
module.exports.Schema = require('./js-yaml/schema');
module.exports.FAILSAFE_SCHEMA = require('./js-yaml/schema/failsafe');
module.exports.JSON_SCHEMA = require('./js-yaml/schema/json');
module.exports.CORE_SCHEMA = require('./js-yaml/schema/core');
module.exports.DEFAULT_SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_FULL_SCHEMA = require('./js-yaml/schema/default_full');
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = require('./js-yaml/exception');
module.exports.MINIMAL_SCHEMA = require('./js-yaml/schema/failsafe');
module.exports.SAFE_SCHEMA = require('./js-yaml/schema/default_safe');
module.exports.DEFAULT_SCHEMA = require('./js-yaml/schema/default_full');
module.exports.scan = deprecated('scan');
module.exports.parse = deprecated('parse');
module.exports.compose = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3/index", ["./lib/js-yaml"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3/index.js";
  var __dirname = "jspm_packages/npm/js-yaml@3.2.3";
'use strict';
var yaml = require("./lib/js-yaml");
module.exports = yaml;



  global.define = __define;
  return module.exports;
});

System.register("npm:js-yaml@3.2.3", ["npm:js-yaml@3.2.3/index"], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "jspm_packages/npm/js-yaml@3.2.3.js";
  var __dirname = "jspm_packages/npm";
module.exports = require("npm:js-yaml@3.2.3/index");



  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=build.js.map