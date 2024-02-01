!(function (n) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = n();
  else if ("function" == typeof define && define.amd) define([], n);
  else {
    var t;
    "undefined" != typeof window
      ? (t = window)
      : "undefined" != typeof global
      ? (t = global)
      : "undefined" != typeof self && (t = self),
      (t.yargsParser = n());
  }
})(function () {
  return (function n(t, e, r) {
    function o(c, u) {
      if (!e[c]) {
        if (!t[c]) {
          var a = "function" == typeof require && require;
          if (!u && a) return a(c, !0);
          if (i) return i(c, !0);
          var s = new Error("Cannot find module '" + c + "'");
          throw ((s.code = "MODULE_NOT_FOUND"), s);
        }
        var f = (e[c] = { exports: {} });
        t[c][0].call(
          f.exports,
          function (n) {
            var e = t[c][1][n];
            return o(e ? e : n);
          },
          f,
          f.exports,
          n,
          t,
          e,
          r
        );
      }
      return e[c].exports;
    }
    for (
      var i = "function" == typeof require && require, c = 0;
      c < r.length;
      c++
    )
      o(r[c]);
    return o;
  })(
    {
      1: [
        function (n, t, e) {
          "function" == typeof Object.create
            ? (t.exports = function (n, t) {
                (n.super_ = t),
                  (n.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: n,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }));
              })
            : (t.exports = function (n, t) {
                n.super_ = t;
                var e = function () {};
                (e.prototype = t.prototype),
                  (n.prototype = new e()),
                  (n.prototype.constructor = n);
              });
        },
        {},
      ],
      2: [
        function (n, t, e) {
          (function (n) {
            function t(n, t) {
              for (var e = 0, r = n.length - 1; r >= 0; r--) {
                var o = n[r];
                "." === o
                  ? n.splice(r, 1)
                  : ".." === o
                  ? (n.splice(r, 1), e++)
                  : e && (n.splice(r, 1), e--);
              }
              if (t) for (; e--; e) n.unshift("..");
              return n;
            }
            function r(n, t) {
              if (n.filter) return n.filter(t);
              for (var e = [], r = 0; r < n.length; r++)
                t(n[r], r, n) && e.push(n[r]);
              return e;
            }
            var o =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
              i = function (n) {
                return o.exec(n).slice(1);
              };
            (e.resolve = function () {
              for (
                var e = "", o = !1, i = arguments.length - 1;
                i >= -1 && !o;
                i--
              ) {
                var c = i >= 0 ? arguments[i] : n.cwd();
                if ("string" != typeof c)
                  throw new TypeError(
                    "Arguments to path.resolve must be strings"
                  );
                c && ((e = c + "/" + e), (o = "/" === c.charAt(0)));
              }
              return (
                (e = t(
                  r(e.split("/"), function (n) {
                    return !!n;
                  }),
                  !o
                ).join("/")),
                (o ? "/" : "") + e || "."
              );
            }),
              (e.normalize = function (n) {
                var o = e.isAbsolute(n),
                  i = "/" === c(n, -1);
                return (
                  (n = t(
                    r(n.split("/"), function (n) {
                      return !!n;
                    }),
                    !o
                  ).join("/")),
                  n || o || (n = "."),
                  n && i && (n += "/"),
                  (o ? "/" : "") + n
                );
              }),
              (e.isAbsolute = function (n) {
                return "/" === n.charAt(0);
              }),
              (e.join = function () {
                var n = Array.prototype.slice.call(arguments, 0);
                return e.normalize(
                  r(n, function (n, t) {
                    if ("string" != typeof n)
                      throw new TypeError(
                        "Arguments to path.join must be strings"
                      );
                    return n;
                  }).join("/")
                );
              }),
              (e.relative = function (n, t) {
                function r(n) {
                  for (var t = 0; t < n.length && "" === n[t]; t++);
                  for (var e = n.length - 1; e >= 0 && "" === n[e]; e--);
                  return t > e ? [] : n.slice(t, e - t + 1);
                }
                (n = e.resolve(n).substr(1)), (t = e.resolve(t).substr(1));
                for (
                  var o = r(n.split("/")),
                    i = r(t.split("/")),
                    c = Math.min(o.length, i.length),
                    u = c,
                    a = 0;
                  c > a;
                  a++
                )
                  if (o[a] !== i[a]) {
                    u = a;
                    break;
                  }
                for (var s = [], a = u; a < o.length; a++) s.push("..");
                return (s = s.concat(i.slice(u))), s.join("/");
              }),
              (e.sep = "/"),
              (e.delimiter = ":"),
              (e.dirname = function (n) {
                var t = i(n),
                  e = t[0],
                  r = t[1];
                return e || r
                  ? (r && (r = r.substr(0, r.length - 1)), e + r)
                  : ".";
              }),
              (e.basename = function (n, t) {
                var e = i(n)[2];
                return (
                  t &&
                    e.substr(-1 * t.length) === t &&
                    (e = e.substr(0, e.length - t.length)),
                  e
                );
              }),
              (e.extname = function (n) {
                return i(n)[3];
              });
            var c =
              "b" === "ab".substr(-1)
                ? function (n, t, e) {
                    return n.substr(t, e);
                  }
                : function (n, t, e) {
                    return 0 > t && (t = n.length + t), n.substr(t, e);
                  };
          }).call(this, n("_process"));
        },
        { _process: 3 },
      ],
      3: [
        function (n, t, e) {
          function r() {}
          var o = (t.exports = {});
          (o.nextTick = (function () {
            var n = "undefined" != typeof window && window.setImmediate,
              t = "undefined" != typeof window && window.MutationObserver,
              e =
                "undefined" != typeof window &&
                window.postMessage &&
                window.addEventListener;
            if (n)
              return function (n) {
                return window.setImmediate(n);
              };
            var r = [];
            if (t) {
              var o = document.createElement("div"),
                i = new MutationObserver(function () {
                  var n = r.slice();
                  (r.length = 0),
                    n.forEach(function (n) {
                      n();
                    });
                });
              return (
                i.observe(o, { attributes: !0 }),
                function (n) {
                  r.length || o.setAttribute("yes", "no"), r.push(n);
                }
              );
            }
            return e
              ? (window.addEventListener(
                  "message",
                  function (n) {
                    var t = n.source;
                    if (
                      (t === window || null === t) &&
                      "process-tick" === n.data &&
                      (n.stopPropagation(), r.length > 0)
                    ) {
                      var e = r.shift();
                      e();
                    }
                  },
                  !0
                ),
                function (n) {
                  r.push(n), window.postMessage("process-tick", "*");
                })
              : function (n) {
                  setTimeout(n, 0);
                };
          })()),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.on = r),
            (o.addListener = r),
            (o.once = r),
            (o.off = r),
            (o.removeListener = r),
            (o.removeAllListeners = r),
            (o.emit = r),
            (o.binding = function (n) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
              return "/";
            }),
            (o.chdir = function (n) {
              throw new Error("process.chdir is not supported");
            });
        },
        {},
      ],
      4: [
        function (n, t, e) {
          t.exports = function (n) {
            return (
              n &&
              "object" == typeof n &&
              "function" == typeof n.copy &&
              "function" == typeof n.fill &&
              "function" == typeof n.readUInt8
            );
          };
        },
        {},
      ],
      5: [
        function (n, t, e) {
          (function (t, r) {
            function o(n, t) {
              var r = { seen: [], stylize: c };
              return (
                arguments.length >= 3 && (r.depth = arguments[2]),
                arguments.length >= 4 && (r.colors = arguments[3]),
                y(t) ? (r.showHidden = t) : t && e._extend(r, t),
                j(r.showHidden) && (r.showHidden = !1),
                j(r.depth) && (r.depth = 2),
                j(r.colors) && (r.colors = !1),
                j(r.customInspect) && (r.customInspect = !0),
                r.colors && (r.stylize = i),
                a(r, n, r.depth)
              );
            }
            function i(n, t) {
              var e = o.styles[t];
              return e
                ? "[" + o.colors[e][0] + "m" + n + "[" + o.colors[e][1] + "m"
                : n;
            }
            function c(n, t) {
              return n;
            }
            function u(n) {
              var t = {};
              return (
                n.forEach(function (n, e) {
                  t[n] = !0;
                }),
                t
              );
            }
            function a(n, t, r) {
              if (
                n.customInspect &&
                t &&
                z(t.inspect) &&
                t.inspect !== e.inspect &&
                (!t.constructor || t.constructor.prototype !== t)
              ) {
                var o = t.inspect(r, n);
                return m(o) || (o = a(n, o, r)), o;
              }
              var i = s(n, t);
              if (i) return i;
              var c = Object.keys(t),
                y = u(c);
              if (
                (n.showHidden && (c = Object.getOwnPropertyNames(t)),
                A(t) &&
                  (c.indexOf("message") >= 0 || c.indexOf("description") >= 0))
              )
                return f(t);
              if (0 === c.length) {
                if (z(t)) {
                  var d = t.name ? ": " + t.name : "";
                  return n.stylize("[Function" + d + "]", "special");
                }
                if (E(t))
                  return n.stylize(RegExp.prototype.toString.call(t), "regexp");
                if (x(t))
                  return n.stylize(Date.prototype.toString.call(t), "date");
                if (A(t)) return f(t);
              }
              var v = "",
                b = !1,
                w = ["{", "}"];
              if ((h(t) && ((b = !0), (w = ["[", "]"])), z(t))) {
                var j = t.name ? ": " + t.name : "";
                v = " [Function" + j + "]";
              }
              if (
                (E(t) && (v = " " + RegExp.prototype.toString.call(t)),
                x(t) && (v = " " + Date.prototype.toUTCString.call(t)),
                A(t) && (v = " " + f(t)),
                0 === c.length && (!b || 0 == t.length))
              )
                return w[0] + v + w[1];
              if (0 > r)
                return E(t)
                  ? n.stylize(RegExp.prototype.toString.call(t), "regexp")
                  : n.stylize("[Object]", "special");
              n.seen.push(t);
              var O;
              return (
                (O = b
                  ? l(n, t, r, y, c)
                  : c.map(function (e) {
                      return p(n, t, r, y, e, b);
                    })),
                n.seen.pop(),
                g(O, v, w)
              );
            }
            function s(n, t) {
              if (j(t)) return n.stylize("undefined", "undefined");
              if (m(t)) {
                var e =
                  "'" +
                  JSON.stringify(t)
                    .replace(/^"|"$/g, "")
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') +
                  "'";
                return n.stylize(e, "string");
              }
              return b(t)
                ? n.stylize("" + t, "number")
                : y(t)
                ? n.stylize("" + t, "boolean")
                : d(t)
                ? n.stylize("null", "null")
                : void 0;
            }
            function f(n) {
              return "[" + Error.prototype.toString.call(n) + "]";
            }
            function l(n, t, e, r, o) {
              for (var i = [], c = 0, u = t.length; u > c; ++c)
                $(t, String(c))
                  ? i.push(p(n, t, e, r, String(c), !0))
                  : i.push("");
              return (
                o.forEach(function (o) {
                  o.match(/^\d+$/) || i.push(p(n, t, e, r, o, !0));
                }),
                i
              );
            }
            function p(n, t, e, r, o, i) {
              var c, u, s;
              if (
                ((s = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] }),
                s.get
                  ? (u = s.set
                      ? n.stylize("[Getter/Setter]", "special")
                      : n.stylize("[Getter]", "special"))
                  : s.set && (u = n.stylize("[Setter]", "special")),
                $(r, o) || (c = "[" + o + "]"),
                u ||
                  (n.seen.indexOf(s.value) < 0
                    ? ((u = d(e) ? a(n, s.value, null) : a(n, s.value, e - 1)),
                      u.indexOf("\n") > -1 &&
                        (u = i
                          ? u
                              .split("\n")
                              .map(function (n) {
                                return "  " + n;
                              })
                              .join("\n")
                              .substr(2)
                          : "\n" +
                            u
                              .split("\n")
                              .map(function (n) {
                                return "   " + n;
                              })
                              .join("\n")))
                    : (u = n.stylize("[Circular]", "special"))),
                j(c))
              ) {
                if (i && o.match(/^\d+$/)) return u;
                (c = JSON.stringify("" + o)),
                  c.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                    ? ((c = c.substr(1, c.length - 2)),
                      (c = n.stylize(c, "name")))
                    : ((c = c
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'")),
                      (c = n.stylize(c, "string")));
              }
              return c + ": " + u;
            }
            function g(n, t, e) {
              var r = 0,
                o = n.reduce(function (n, t) {
                  return (
                    r++,
                    t.indexOf("\n") >= 0 && r++,
                    n + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                  );
                }, 0);
              return o > 60
                ? e[0] +
                    ("" === t ? "" : t + "\n ") +
                    " " +
                    n.join(",\n  ") +
                    " " +
                    e[1]
                : e[0] + t + " " + n.join(", ") + " " + e[1];
            }
            function h(n) {
              return Array.isArray(n);
            }
            function y(n) {
              return "boolean" == typeof n;
            }
            function d(n) {
              return null === n;
            }
            function v(n) {
              return null == n;
            }
            function b(n) {
              return "number" == typeof n;
            }
            function m(n) {
              return "string" == typeof n;
            }
            function w(n) {
              return "symbol" == typeof n;
            }
            function j(n) {
              return void 0 === n;
            }
            function E(n) {
              return O(n) && "[object RegExp]" === _(n);
            }
            function O(n) {
              return "object" == typeof n && null !== n;
            }
            function x(n) {
              return O(n) && "[object Date]" === _(n);
            }
            function A(n) {
              return O(n) && ("[object Error]" === _(n) || n instanceof Error);
            }
            function z(n) {
              return "function" == typeof n;
            }
            function S(n) {
              return (
                null === n ||
                "boolean" == typeof n ||
                "number" == typeof n ||
                "string" == typeof n ||
                "symbol" == typeof n ||
                "undefined" == typeof n
              );
            }
            function _(n) {
              return Object.prototype.toString.call(n);
            }
            function k(n) {
              return 10 > n ? "0" + n.toString(10) : n.toString(10);
            }
            function N() {
              var n = new Date(),
                t = [
                  k(n.getHours()),
                  k(n.getMinutes()),
                  k(n.getSeconds()),
                ].join(":");
              return [n.getDate(), F[n.getMonth()], t].join(" ");
            }
            function $(n, t) {
              return Object.prototype.hasOwnProperty.call(n, t);
            }
            var D = /%[sdj%]/g;
            (e.format = function (n) {
              if (!m(n)) {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t.push(o(arguments[e]));
                return t.join(" ");
              }
              for (
                var e = 1,
                  r = arguments,
                  i = r.length,
                  c = String(n).replace(D, function (n) {
                    if ("%%" === n) return "%";
                    if (e >= i) return n;
                    switch (n) {
                      case "%s":
                        return String(r[e++]);
                      case "%d":
                        return Number(r[e++]);
                      case "%j":
                        try {
                          return JSON.stringify(r[e++]);
                        } catch (t) {
                          return "[Circular]";
                        }
                      default:
                        return n;
                    }
                  }),
                  u = r[e];
                i > e;
                u = r[++e]
              )
                c += d(u) || !O(u) ? " " + u : " " + o(u);
              return c;
            }),
              (e.deprecate = function (n, o) {
                function i() {
                  if (!c) {
                    if (t.throwDeprecation) throw new Error(o);
                    t.traceDeprecation ? console.trace(o) : console.error(o),
                      (c = !0);
                  }
                  return n.apply(this, arguments);
                }
                if (j(r.process))
                  return function () {
                    return e.deprecate(n, o).apply(this, arguments);
                  };
                if (t.noDeprecation === !0) return n;
                var c = !1;
                return i;
              });
            var C,
              B = {};
            (e.debuglog = function (n) {
              if (
                (j(C) && (C = t.env.NODE_DEBUG || ""),
                (n = n.toUpperCase()),
                !B[n])
              )
                if (new RegExp("\\b" + n + "\\b", "i").test(C)) {
                  var r = t.pid;
                  B[n] = function () {
                    var t = e.format.apply(e, arguments);
                    console.error("%s %d: %s", n, r, t);
                  };
                } else B[n] = function () {};
              return B[n];
            }),
              (e.inspect = o),
              (o.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39],
              }),
              (o.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red",
              }),
              (e.isArray = h),
              (e.isBoolean = y),
              (e.isNull = d),
              (e.isNullOrUndefined = v),
              (e.isNumber = b),
              (e.isString = m),
              (e.isSymbol = w),
              (e.isUndefined = j),
              (e.isRegExp = E),
              (e.isObject = O),
              (e.isDate = x),
              (e.isError = A),
              (e.isFunction = z),
              (e.isPrimitive = S),
              (e.isBuffer = n("./support/isBuffer"));
            var F = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            (e.log = function () {
              console.log("%s - %s", N(), e.format.apply(e, arguments));
            }),
              (e.inherits = n("inherits")),
              (e._extend = function (n, t) {
                if (!t || !O(t)) return n;
                for (var e = Object.keys(t), r = e.length; r--; )
                  n[e[r]] = t[e[r]];
                return n;
              });
          }).call(
            this,
            n("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          );
        },
        { "./support/isBuffer": 4, _process: 3, inherits: 1 },
      ],
      6: [
        function (n, t, e) {
          (function (e) {
            function r(t, r) {
              function c(n, t, e) {
                var r = E(t, L.nargs);
                e.length - (n + 1) < r &&
                  (I = Error(F("Not enough arguments following: %s", t)));
                for (var o = n + 1; r + n + 1 > o; o++) g(t, e[o]);
                return n + r;
              }
              function p(n, t, e) {
                for (var r = n + 1, o = n + 1; o < e.length; o++) {
                  if (/^-/.test(e[o])) {
                    o === r && g(t, A("array"));
                    break;
                  }
                  (n = o), g(t, e[o]);
                }
                return n;
              }
              function g(n, t) {
                if (
                  (x(n),
                  (E(n, L.bools) || E(n, L.counts)) &&
                    "string" == typeof t &&
                    (t = "true" === t),
                  /-/.test(n) &&
                    (!L.aliases[n] || !L.aliases[n].length) &&
                    N["camel-case-expansion"])
                ) {
                  var e = a(n);
                  (L.aliases[n] = [e]), (B[e] = !0);
                }
                var r = t;
                E(n, L.strings) ||
                  (S(t) && (r = Number(t)),
                  _(t) || S(t) || !E(n, L.numbers) || (r = NaN)),
                  E(n, L.counts) && (r = i),
                  E(n, L.normalize) && E(n, L.arrays) && (r = s.normalize(t));
                var o = n.split(".");
                if (
                  (w(M, o, r),
                  L.aliases[n] &&
                    L.aliases[n].forEach(function (n) {
                      (n = n.split(".")), w(M, n, r);
                    }),
                  o.length > 1 &&
                    N["dot-notation"] &&
                    (L.aliases[o[0]] || []).forEach(function (n) {
                      n = n.split(".");
                      var t = [].concat(o);
                      t.shift(), (n = n.concat(t)), w(M, n, r);
                    }),
                  E(n, L.normalize) && !E(n, L.arrays))
                ) {
                  var c = [n].concat(L.aliases[n] || []);
                  c.forEach(function (n) {
                    M.__defineSetter__(n, function (n) {
                      t = s.normalize(n);
                    }),
                      M.__defineGetter__(n, function () {
                        return "string" == typeof t ? s.normalize(t) : t;
                      });
                  });
                }
              }
              function h(t) {
                var r = {};
                b(r, L.aliases, $),
                  Object.keys(L.configs).forEach(function (o) {
                    var i = t[o] || r[o];
                    if (i)
                      try {
                        var c = null,
                          u = s.resolve(e.cwd(), i);
                        if ("function" == typeof L.configs[o]) {
                          try {
                            c = L.configs[o](u);
                          } catch (a) {
                            c = a;
                          }
                          if (c instanceof Error) return void (I = c);
                        } else c = n(u);
                        y(c);
                      } catch (f) {
                        t[o] &&
                          (I = Error(F("Invalid JSON config file: %s", i)));
                      }
                  });
              }
              function y(n, t) {
                Object.keys(n).forEach(function (e) {
                  var r = n[e],
                    o = t ? t + "." + e : e;
                  "[object Object]" === Object.prototype.toString.call(r)
                    ? y(r, o)
                    : (m(M, o.split(".")) && !L.defaulted[o]) || g(o, r);
                });
              }
              function d() {
                "undefined" != typeof D &&
                  D.forEach(function (n) {
                    y(n);
                  });
              }
              function v(n, t) {
                if ("undefined" != typeof C) {
                  var r = "string" == typeof C ? C : "";
                  Object.keys(e.env).forEach(function (o) {
                    if ("" === r || 0 === o.lastIndexOf(r, 0)) {
                      var i = o.split("__").map(function (n, t) {
                        return 0 === t && (n = n.substring(r.length)), a(n);
                      });
                      !((t && L.configs[i.join(".")]) || !t) ||
                        (m(n, i) && !L.defaulted[i.join(".")]) ||
                        g(i.join("."), e.env[o]);
                    }
                  });
                }
              }
              function b(n, t, e) {
                Object.keys(e).forEach(function (r) {
                  m(n, r.split(".")) ||
                    (w(n, r.split("."), e[r]),
                    (t[r] || []).forEach(function (t) {
                      m(n, t.split(".")) || w(n, t.split("."), e[r]);
                    }));
                });
              }
              function m(n, t) {
                var e = n;
                N["dot-notation"] || (t = [t.join(".")]),
                  t.slice(0, -1).forEach(function (n) {
                    e = e[n] || {};
                  });
                var r = t[t.length - 1];
                return "object" != typeof e ? !1 : r in e;
              }
              function w(n, t, e) {
                var r = n;
                N["dot-notation"] || (t = [t.join(".")]),
                  t.slice(0, -1).forEach(function (n) {
                    void 0 === r[n] && (r[n] = {}), (r = r[n]);
                  });
                var o = t[t.length - 1];
                e === i
                  ? (r[o] = i(r[o]))
                  : void 0 === r[o] && E(o, L.arrays)
                  ? (r[o] = Array.isArray(e) ? e : [e])
                  : void 0 === r[o] || E(o, L.bools)
                  ? (r[o] = e)
                  : Array.isArray(r[o])
                  ? r[o].push(e)
                  : (r[o] = [r[o], e]);
              }
              function j() {
                Array.prototype.slice.call(arguments).forEach(function (n) {
                  Object.keys(n || {}).forEach(function (n) {
                    L.aliases[n] ||
                      ((L.aliases[n] = [].concat(k[n] || [])),
                      L.aliases[n].concat(n).forEach(function (t) {
                        if (/-/.test(t) && N["camel-case-expansion"]) {
                          var e = a(t);
                          L.aliases[n].push(e), (B[e] = !0);
                        }
                      }),
                      L.aliases[n].forEach(function (t) {
                        L.aliases[t] = [n].concat(
                          L.aliases[n].filter(function (n) {
                            return t !== n;
                          })
                        );
                      }));
                  });
                });
              }
              function E(n, t) {
                var e = !1,
                  r = [].concat(L.aliases[n] || [], n);
                return (
                  r.forEach(function (n) {
                    t[n] && (e = t[n]);
                  }),
                  e
                );
              }
              function O(n) {
                [].concat(L.aliases[n] || [], n).forEach(function (n) {
                  L.defaulted[n] = !0;
                });
              }
              function x(n) {
                [].concat(L.aliases[n] || [], n).forEach(function (n) {
                  delete L.defaulted[n];
                });
              }
              function A(n) {
                var t = { boolean: !0, string: "", number: void 0, array: [] };
                return t[n];
              }
              function z(n, t) {
                var e = "boolean";
                return (
                  t.strings && t.strings[n]
                    ? (e = "string")
                    : t.numbers && t.numbers[n]
                    ? (e = "number")
                    : t.arrays && t.arrays[n] && (e = "array"),
                  e
                );
              }
              function S(n) {
                return N["parse-numbers"]
                  ? "number" == typeof n
                    ? !0
                    : /^0x[0-9a-f]+$/i.test(n)
                    ? !0
                    : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(n)
                  : !1;
              }
              function _(n) {
                return void 0 === n;
              }
              r || (r = {}), (t = f(t));
              var k = o(r.alias || {}),
                N = u(
                  {},
                  {
                    "short-option-groups": !0,
                    "camel-case-expansion": !0,
                    "dot-notation": !0,
                    "parse-numbers": !0,
                    "boolean-negation": !0,
                  },
                  r.configuration
                ),
                $ = r["default"] || {},
                D = r.configObjects || [],
                C = r.envPrefix,
                B = {},
                F =
                  r.__ ||
                  function (n) {
                    return l.format.apply(
                      l,
                      Array.prototype.slice.call(arguments)
                    );
                  },
                I = null,
                L = {
                  aliases: {},
                  arrays: {},
                  bools: {},
                  strings: {},
                  numbers: {},
                  counts: {},
                  normalize: {},
                  configs: {},
                  defaulted: {},
                  nargs: {},
                };
              []
                .concat(r.array)
                .filter(Boolean)
                .forEach(function (n) {
                  L.arrays[n] = !0;
                }),
                []
                  .concat(r["boolean"])
                  .filter(Boolean)
                  .forEach(function (n) {
                    L.bools[n] = !0;
                  }),
                []
                  .concat(r.string)
                  .filter(Boolean)
                  .forEach(function (n) {
                    L.strings[n] = !0;
                  }),
                []
                  .concat(r.number)
                  .filter(Boolean)
                  .forEach(function (n) {
                    L.numbers[n] = !0;
                  }),
                []
                  .concat(r.count)
                  .filter(Boolean)
                  .forEach(function (n) {
                    L.counts[n] = !0;
                  }),
                []
                  .concat(r.normalize)
                  .filter(Boolean)
                  .forEach(function (n) {
                    L.normalize[n] = !0;
                  }),
                Object.keys(r.narg || {}).forEach(function (n) {
                  L.nargs[n] = r.narg[n];
                }),
                Array.isArray(r.config) || "string" == typeof r.config
                  ? []
                      .concat(r.config)
                      .filter(Boolean)
                      .forEach(function (n) {
                        L.configs[n] = !0;
                      })
                  : Object.keys(r.config || {}).forEach(function (n) {
                      L.configs[n] = r.config[n];
                    }),
                j(r.key, k, r["default"], L.arrays),
                Object.keys($).forEach(function (n) {
                  (L.aliases[n] || []).forEach(function (t) {
                    $[t] = $[n];
                  });
                });
              var M = { _: [] };
              Object.keys(L.bools).forEach(function (n) {
                g(n, n in $ ? $[n] : !1), O(n);
              });
              var U = [];
              -1 !== t.indexOf("--") &&
                ((U = t.slice(t.indexOf("--") + 1)),
                (t = t.slice(0, t.indexOf("--"))));
              for (var P = 0; P < t.length; P++) {
                var G,
                  J,
                  T,
                  R,
                  H,
                  q,
                  Z = t[P];
                if (
                  Z.match(/^--.+=/) ||
                  (!N["short-option-groups"] && Z.match(/^-.+=/))
                )
                  (R = Z.match(/^--?([^=]+)=([\s\S]*)$/)),
                    E(R[1], L.nargs)
                      ? (t.splice(P + 1, 0, R[2]), (P = c(P, R[1], t)))
                      : E(R[1], L.arrays) && t.length > P + 1
                      ? (t.splice(P + 1, 0, R[2]), (P = p(P, R[1], t)))
                      : g(R[1], R[2]);
                else if (Z.match(/^--no-.+/) && N["boolean-negation"])
                  (J = Z.match(/^--no-(.+)/)[1]), g(J, !1);
                else if (
                  Z.match(/^--.+/) ||
                  (!N["short-option-groups"] && Z.match(/^-.+/))
                )
                  (J = Z.match(/^--?(.+)/)[1]),
                    E(J, L.nargs)
                      ? (P = c(P, J, t))
                      : E(J, L.arrays) && t.length > P + 1
                      ? (P = p(P, J, t))
                      : ((H = t[P + 1]),
                        void 0 === H ||
                        H.match(/^-/) ||
                        E(J, L.bools) ||
                        E(J, L.counts)
                          ? /^(true|false)$/.test(H)
                            ? (g(J, H), P++)
                            : g(J, A(z(J, L)))
                          : (g(J, H), P++));
                else if (Z.match(/^-.\..+=/))
                  (R = Z.match(/^-([^=]+)=([\s\S]*)$/)), g(R[1], R[2]);
                else if (Z.match(/^-.\..+/))
                  (H = t[P + 1]),
                    (J = Z.match(/^-(.\..+)/)[1]),
                    void 0 === H ||
                    H.match(/^-/) ||
                    E(J, L.bools) ||
                    E(J, L.counts)
                      ? g(J, A(z(J, L)))
                      : (g(J, H), P++);
                else if (Z.match(/^-[^-]+/)) {
                  (T = Z.slice(1, -1).split("")), (G = !1);
                  for (var W = 0; W < T.length; W++) {
                    if (((H = Z.slice(W + 2)), T[W + 1] && "=" === T[W + 1])) {
                      (q = Z.slice(W + 3)),
                        (J = T[W]),
                        E(J, L.nargs)
                          ? (t.splice(P + 1, 0, q), (P = c(P, J, t)))
                          : E(J, L.arrays) && t.length > P + 1
                          ? (t.splice(P + 1, 0, q), (P = p(P, J, t)))
                          : g(J, q),
                        (G = !0);
                      break;
                    }
                    if ("-" !== H) {
                      if (
                        /[A-Za-z]/.test(T[W]) &&
                        /-?\d+(\.\d*)?(e-?\d+)?$/.test(H)
                      ) {
                        g(T[W], H), (G = !0);
                        break;
                      }
                      if (T[W + 1] && T[W + 1].match(/\W/)) {
                        g(T[W], H), (G = !0);
                        break;
                      }
                      g(T[W], A(z(T[W], L)));
                    } else g(T[W], H);
                  }
                  (J = Z.slice(-1)[0]),
                    G ||
                      "-" === J ||
                      (E(J, L.nargs)
                        ? (P = c(P, J, t))
                        : E(J, L.arrays) && t.length > P + 1
                        ? (P = p(P, J, t))
                        : ((H = t[P + 1]),
                          void 0 === H ||
                          /^(-|--)[^-]/.test(H) ||
                          E(J, L.bools) ||
                          E(J, L.counts)
                            ? /^(true|false)$/.test(H)
                              ? (g(J, H), P++)
                              : g(J, A(z(J, L)))
                            : (g(J, H), P++)));
                } else M._.push(L.strings._ || !S(Z) ? Z : Number(Z));
              }
              return (
                v(M, !0),
                h(M),
                d(),
                v(M, !1),
                b(M, L.aliases, $),
                Object.keys(L.counts).forEach(function (n) {
                  g(n, $[n]);
                }),
                U.forEach(function (n) {
                  M._.push(n);
                }),
                {
                  argv: M,
                  error: I,
                  aliases: L.aliases,
                  newAliases: B,
                  configuration: N,
                }
              );
            }
            function o(n) {
              var t = [],
                e = !0,
                r = {};
              for (
                Object.keys(n).forEach(function (e) {
                  t.push([].concat(n[e], e));
                });
                e;

              ) {
                e = !1;
                for (var o = 0; o < t.length; o++)
                  for (var i = o + 1; i < t.length; i++) {
                    var c = t[o].filter(function (n) {
                      return -1 !== t[i].indexOf(n);
                    });
                    if (c.length) {
                      (t[o] = t[o].concat(t[i])), t.splice(i, 1), (e = !0);
                      break;
                    }
                  }
              }
              return (
                t.forEach(function (n) {
                  (n = n.filter(function (n, t, e) {
                    return e.indexOf(n) === t;
                  })),
                    (r[n.pop()] = n);
                }),
                r
              );
            }
            function i(n) {
              return void 0 !== n ? n + 1 : 0;
            }
            function c(n, t) {
              var e = r(n.slice(), t);
              return e.argv;
            }
            var u = n("lodash.assign"),
              a = n("camelcase"),
              s = n("path"),
              f = n("./lib/tokenize-arg-string"),
              l = n("util");
            (c.detailed = function (n, t) {
              return r(n.slice(), t);
            }),
              (t.exports = c);
          }).call(this, n("_process"));
        },
        {
          "./lib/tokenize-arg-string": 7,
          _process: 3,
          camelcase: 8,
          "lodash.assign": 9,
          path: 2,
          util: 5,
        },
      ],
      7: [
        function (n, t, e) {
          t.exports = function (n) {
            if (Array.isArray(n)) return n;
            for (
              var t = 0, e = null, r = null, o = [], i = 0;
              i < n.length;
              i++
            )
              (e = n.charAt(i)),
                " " !== e || r
                  ? e !== r
                    ? ("'" !== e && '"' !== e) || r
                      ? (o[t] || (o[t] = ""), (o[t] += e))
                      : (r = e)
                    : (r = null)
                  : t++;
            return o;
          };
        },
        {},
      ],
      8: [
        function (n, t, e) {
          "use strict";
          function r(n) {
            for (var t = !1, e = 0; e < n.length; e++) {
              var r = n.charAt(e);
              t && /[a-zA-Z]/.test(r) && r.toUpperCase() === r
                ? ((n = n.substr(0, e) + "-" + n.substr(e)), (t = !1), e++)
                : (t = r.toLowerCase() === r);
            }
            return n;
          }
          t.exports = function () {
            var n = [].map
              .call(arguments, function (n) {
                return n.trim();
              })
              .filter(function (n) {
                return n.length;
              })
              .join("-");
            return n.length
              ? 1 === n.length
                ? n
                : /[_.\- ]+/.test(n)
                ? ((n = r(n)),
                  n
                    .replace(/^[_.\- ]+/, "")
                    .toLowerCase()
                    .replace(/[_.\- ]+(\w|$)/g, function (n, t) {
                      return t.toUpperCase();
                    }))
                : n === n.toUpperCase()
                ? n.toLowerCase()
                : n[0] !== n[0].toLowerCase()
                ? n[0].toLowerCase() + n.slice(1)
                : n
              : "";
          };
        },
        {},
      ],
      9: [
        function (n, t, e) {
          function r(n, t) {
            return (
              (n = "number" == typeof n || w.test(n) ? +n : -1),
              (t = null == t ? v : t),
              n > -1 && n % 1 == 0 && t > n
            );
          }
          function o(n, t, e) {
            var r = n[t];
            (E.call(n, t) && f(r, e) && (void 0 !== e || t in n)) || (n[t] = e);
          }
          function i(n) {
            return function (t) {
              return null == t ? void 0 : t[n];
            };
          }
          function c(n, t, e, r) {
            e || (e = {});
            for (var i = -1, c = t.length; ++i < c; ) {
              var u = t[i],
                a = r ? r(e[u], n[u], u, e, n) : n[u];
              o(e, u, a);
            }
            return e;
          }
          function u(n) {
            return d(function (t, e) {
              var r = -1,
                o = e.length,
                i = o > 1 ? e[o - 1] : void 0,
                c = o > 2 ? e[2] : void 0;
              for (
                i = "function" == typeof i ? (o--, i) : void 0,
                  c && a(e[0], e[1], c) && ((i = 3 > o ? void 0 : i), (o = 1)),
                  t = Object(t);
                ++r < o;

              ) {
                var u = e[r];
                u && n(t, u, r, i);
              }
              return t;
            });
          }
          function a(n, t, e) {
            if (!h(e)) return !1;
            var o = typeof t;
            return (
              "number" == o ? l(e) && r(t, e.length) : "string" == o && t in e
            )
              ? f(e[t], n)
              : !1;
          }
          function s(n) {
            var t = n && n.constructor,
              e = ("function" == typeof t && t.prototype) || j;
            return n === e;
          }
          function f(n, t) {
            return n === t || (n !== n && t !== t);
          }
          function l(n) {
            return null != n && g(z(n)) && !p(n);
          }
          function p(n) {
            var t = h(n) ? O.call(n) : "";
            return t == b || t == m;
          }
          function g(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && v >= n;
          }
          function h(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t);
          }
          var y = n("lodash.keys"),
            d = n("lodash.rest"),
            v = 9007199254740991,
            b = "[object Function]",
            m = "[object GeneratorFunction]",
            w = /^(?:0|[1-9]\d*)$/,
            j = Object.prototype,
            E = j.hasOwnProperty,
            O = j.toString,
            x = j.propertyIsEnumerable,
            A = !x.call({ valueOf: 1 }, "valueOf"),
            z = i("length"),
            S = u(function (n, t) {
              if (A || s(t) || l(t)) return void c(t, y(t), n);
              for (var e in t) E.call(t, e) && o(n, e, t[e]);
            });
          t.exports = S;
        },
        { "lodash.keys": 10, "lodash.rest": 11 },
      ],
      10: [
        function (n, t, e) {
          function r(n, t) {
            for (var e = -1, r = Array(n); ++e < n; ) r[e] = t(e);
            return r;
          }
          function o(n, t) {
            return (
              (n = "number" == typeof n || A.test(n) ? +n : -1),
              (t = null == t ? w : t),
              n > -1 && n % 1 == 0 && t > n
            );
          }
          function i(n, t) {
            return (
              S.call(n, t) || ("object" == typeof n && t in n && null === a(n))
            );
          }
          function c(n) {
            return $(Object(n));
          }
          function u(n) {
            return function (t) {
              return null == t ? void 0 : t[n];
            };
          }
          function a(n) {
            return N(Object(n));
          }
          function s(n) {
            var t = n ? n.length : void 0;
            return y(t) && (C(n) || b(n) || l(n)) ? r(t, String) : null;
          }
          function f(n) {
            var t = n && n.constructor,
              e = ("function" == typeof t && t.prototype) || z;
            return n === e;
          }
          function l(n) {
            return (
              g(n) &&
              S.call(n, "callee") &&
              (!k.call(n, "callee") || _.call(n) == j)
            );
          }
          function p(n) {
            return null != n && y(D(n)) && !h(n);
          }
          function g(n) {
            return v(n) && p(n);
          }
          function h(n) {
            var t = d(n) ? _.call(n) : "";
            return t == E || t == O;
          }
          function y(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && w >= n;
          }
          function d(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t);
          }
          function v(n) {
            return !!n && "object" == typeof n;
          }
          function b(n) {
            return "string" == typeof n || (!C(n) && v(n) && _.call(n) == x);
          }
          function m(n) {
            var t = f(n);
            if (!t && !p(n)) return c(n);
            var e = s(n),
              r = !!e,
              u = e || [],
              a = u.length;
            for (var l in n)
              !i(n, l) ||
                (r && ("length" == l || o(l, a))) ||
                (t && "constructor" == l) ||
                u.push(l);
            return u;
          }
          var w = 9007199254740991,
            j = "[object Arguments]",
            E = "[object Function]",
            O = "[object GeneratorFunction]",
            x = "[object String]",
            A = /^(?:0|[1-9]\d*)$/,
            z = Object.prototype,
            S = z.hasOwnProperty,
            _ = z.toString,
            k = z.propertyIsEnumerable,
            N = Object.getPrototypeOf,
            $ = Object.keys,
            D = u("length"),
            C = Array.isArray;
          t.exports = m;
        },
        {},
      ],
      11: [
        function (n, t, e) {
          function r(n, t, e) {
            var r = e.length;
            switch (r) {
              case 0:
                return n.call(t);
              case 1:
                return n.call(t, e[0]);
              case 2:
                return n.call(t, e[0], e[1]);
              case 3:
                return n.call(t, e[0], e[1], e[2]);
            }
            return n.apply(t, e);
          }
          function o(n, t) {
            if ("function" != typeof n) throw new TypeError(l);
            return (
              (t = A(void 0 === t ? n.length - 1 : s(t), 0)),
              function () {
                for (
                  var e = arguments,
                    o = -1,
                    i = A(e.length - t, 0),
                    c = Array(i);
                  ++o < i;

                )
                  c[o] = e[t + o];
                switch (t) {
                  case 0:
                    return n.call(this, c);
                  case 1:
                    return n.call(this, e[0], c);
                  case 2:
                    return n.call(this, e[0], e[1], c);
                }
                var u = Array(t + 1);
                for (o = -1; ++o < t; ) u[o] = e[o];
                return (u[t] = c), r(n, this, u);
              }
            );
          }
          function i(n) {
            var t = c(n) ? x.call(n) : "";
            return t == y || t == d;
          }
          function c(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t);
          }
          function u(n) {
            return !!n && "object" == typeof n;
          }
          function a(n) {
            return "symbol" == typeof n || (u(n) && x.call(n) == v);
          }
          function s(n) {
            if (!n) return 0 === n ? n : 0;
            if (((n = f(n)), n === p || n === -p)) {
              var t = 0 > n ? -1 : 1;
              return t * g;
            }
            var e = n % 1;
            return n === n ? (e ? n - e : n) : 0;
          }
          function f(n) {
            if ("number" == typeof n) return n;
            if (a(n)) return h;
            if (c(n)) {
              var t = i(n.valueOf) ? n.valueOf() : n;
              n = c(t) ? t + "" : t;
            }
            if ("string" != typeof n) return 0 === n ? n : +n;
            n = n.replace(b, "");
            var e = w.test(n);
            return e || j.test(n)
              ? E(n.slice(2), e ? 2 : 8)
              : m.test(n)
              ? h
              : +n;
          }
          var l = "Expected a function",
            p = 1 / 0,
            g = 1.7976931348623157e308,
            h = NaN,
            y = "[object Function]",
            d = "[object GeneratorFunction]",
            v = "[object Symbol]",
            b = /^\s+|\s+$/g,
            m = /^[-+]0x[0-9a-f]+$/i,
            w = /^0b[01]+$/i,
            j = /^0o[0-7]+$/i,
            E = parseInt,
            O = Object.prototype,
            x = O.toString,
            A = Math.max;
          t.exports = o;
        },
        {},
      ],
    },
    {},
    [6]
  )(6);
});

export default yargsParser;