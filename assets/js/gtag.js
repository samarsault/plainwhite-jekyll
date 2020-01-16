// Copyright 2012 Google Inc. All rights reserved.
(function() {
  var data = {
    resource: {
      version: "1",

      macros: [],
      tags: [],
      predicates: [],
      rules: []
    },
    runtime: []
  };
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var aa,
    ba =
      "function" == typeof Object.create
        ? Object.create
        : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b();
          },
    ca;
  if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
  else {
    var da;
    a: {
      var ea = { Oe: !0 },
        fa = {};
      try {
        fa.__proto__ = ea;
        da = fa.Oe;
        break a;
      } catch (a) {}
      da = !1;
    }
    ca = da
      ? function(a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ia = ca,
    ka = this || self,
    la = /^[\w+/_-]+[=]{0,2}$/,
    ma = null;
  var pa = function() {},
    qa = function(a) {
      return "function" == typeof a;
    },
    f = function(a) {
      return "string" == typeof a;
    },
    ra = function(a) {
      return "number" == typeof a && !isNaN(a);
    },
    ua = function(a) {
      return "[object Array]" == Object.prototype.toString.call(Object(a));
    },
    r = function(a, b) {
      if (Array.prototype.indexOf) {
        var c = a.indexOf(b);
        return "number" == typeof c ? c : -1;
      }
      for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
      return -1;
    },
    va = function(a, b) {
      if (a && ua(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    wa = function(a, b) {
      if (!ra(a) || !ra(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    ya = function(a, b) {
      for (var c = new xa(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    za = function(a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Aa = function(a) {
      return Math.round(Number(a)) || 0;
    },
    Ca = function(a) {
      return "false" == String(a).toLowerCase() ? !1 : !!a;
    },
    Da = function(a) {
      var b = [];
      if (ua(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ea = function(a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Fa = function() {
      return new Date().getTime();
    },
    xa = function() {
      this.prefix = "gtm.";
      this.values = {};
    };
  xa.prototype.set = function(a, b) {
    this.values[this.prefix + a] = b;
  };
  xa.prototype.get = function(a) {
    return this.values[this.prefix + a];
  };
  var Ga = function(a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ha = function(a) {
      var b = !1;
      return function() {
        if (!b)
          try {
            a();
          } catch (c) {}
        b = !0;
      };
    },
    Ia = function(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Ja = function(a) {
      for (var b in a) if (a.hasOwnProperty(b)) return !0;
      return !1;
    },
    Ka = function(a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    La = function(a, b) {
      for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++)
        d = d[e[g]] = {};
      d[e[e.length - 1]] = b;
      return c;
    }; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ma = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Na = function(a) {
      if (null == a) return String(a);
      var b = Ma.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Oa = function(a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Pa = function(a) {
      if (!a || "object" != Na(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Oa(a, "constructor") &&
          !Oa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Oa(a, b);
    },
    C = function(a, b) {
      var c = b || ("array" == Na(a) ? [] : {}),
        d;
      for (d in a)
        if (Oa(a, d)) {
          var e = a[d];
          "array" == Na(e)
            ? ("array" != Na(c[d]) && (c[d] = []), (c[d] = C(e, c[d])))
            : Pa(e)
            ? (Pa(c[d]) || (c[d] = {}), (c[d] = C(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  var ob;
  var pb = [],
    qb = [],
    rb = [],
    sb = [],
    tb = [],
    vb = {},
    wb,
    xb,
    yb,
    zb = function(a, b) {
      var c = {};
      c["function"] = "__" + a;
      for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
      return c;
    },
    Ab = function(a, b) {
      var c = a["function"];
      if (!c) throw Error("Error: No function name given for function call.");
      var d = vb[c],
        e = {},
        g;
      for (g in a)
        a.hasOwnProperty(g) &&
          0 === g.indexOf("vtp_") &&
          (e[void 0 !== d ? g : g.substr(4)] = a[g]);
      return void 0 !== d ? d(e) : ob(c, e, b);
    },
    Cb = function(a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = Bb(a[e], b, c));
      return d;
    },
    Db = function(a) {
      var b = a["function"];
      if (!b) throw "Error: No function name given for function call.";
      var c = vb[b];
      return c ? c.priorityOverride || 0 : 0;
    },
    Bb = function(a, b, c) {
      if (ua(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(Bb(a[e], b, c));
            return d;
          case "macro":
            var g = a[1];
            if (c[g]) return;
            var h = pb[g];
            if (!h || b.Dc(h)) return;
            c[g] = !0;
            try {
              var k = Cb(h, b, c);
              k.vtp_gtmEventId = b.id;
              d = Ab(k, b);
              yb && (d = yb.qf(d, k));
            } catch (y) {
              b.de && b.de(y, Number(g)), (d = !1);
            }
            c[g] = !1;
            return d;
          case "map":
            d = {};
            for (var l = 1; l < a.length; l += 2)
              d[Bb(a[l], b, c)] = Bb(a[l + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var m = !1, n = 1; n < a.length; n++) {
              var q = Bb(a[n], b, c);
              xb && (m = m || q === xb.pb);
              d.push(q);
            }
            return xb && m ? xb.tf(d) : d.join("");
          case "escape":
            d = Bb(a[1], b, c);
            if (xb && ua(a[1]) && "macro" === a[1][0] && xb.ag(a))
              return xb.Ag(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Qa[a[u]] && (d = Qa[a[u]](d));
            return d;
          case "tag":
            var p = a[1];
            if (!sb[p])
              throw Error("Unable to resolve tag reference " + p + ".");
            return (d = {
              Zd: a[2],
              index: p
            });
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t["function"] = a[1];
            var v = Fb(t, b, c),
              w = !!a[4];
            return w || 2 !== v ? w !== (1 === v) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    Fb = function(a, b, c) {
      try {
        return wb(Cb(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    };
  var Gb = (function() {
    var a = function(b) {
      return {
        toString: function() {
          return b;
        }
      };
    };
    return {
      md: a("convert_case_to"),
      nd: a("convert_false_to"),
      od: a("convert_null_to"),
      pd: a("convert_true_to"),
      qd: a("convert_undefined_to"),
      ih: a("debug_mode_metadata"),
      oa: a("function"),
      Ee: a("instance_name"),
      Ge: a("live_only"),
      He: a("malware_disabled"),
      Ie: a("metadata"),
      oh: a("original_vendor_template_id"),
      Je: a("once_per_event"),
      Ad: a("once_per_load"),
      Fd: a("setup_tags"),
      Hd: a("tag_id"),
      Id: a("teardown_tags")
    };
  })();
  var Hb = null,
    Kb = function(a) {
      function b(q) {
        for (var u = 0; u < q.length; u++) d[q[u]] = !0;
      }
      var c = [],
        d = [];
      Hb = Ib(a);
      for (var e = 0; e < qb.length; e++) {
        var g = qb[e],
          h = Jb(g);
        if (h) {
          for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
          b(g.block || []);
        } else null === h && b(g.block || []);
      }
      for (var m = [], n = 0; n < sb.length; n++) c[n] && !d[n] && (m[n] = !0);
      return m;
    },
    Jb = function(a) {
      for (var b = a["if"] || [], c = 0; c < b.length; c++) {
        var d = Hb(b[c]);
        if (0 === d) return !1;
        if (2 === d) return null;
      }
      for (var e = a.unless || [], g = 0; g < e.length; g++) {
        var h = Hb(e[g]);
        if (2 === h) return null;
        if (1 === h) return !1;
      }
      return !0;
    },
    Ib = function(a) {
      var b = [];
      return function(c) {
        void 0 === b[c] && (b[c] = Fb(rb[c], a));
        return b[c];
      };
    }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
  var D = window,
    F = document,
    Zb = navigator,
    $b = F.currentScript && F.currentScript.src,
    ac = function(a, b) {
      var c = D[a];
      D[a] = void 0 === c ? b : c;
      return D[a];
    },
    bc = function(a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function() {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    cc = function(a, b, c) {
      var d = F.createElement("script");
      d.type = "text/javascript";
      d.async = !0;
      d.src = a;
      bc(d, b);
      c && (d.onerror = c);
      var e;
      if (null === ma)
        b: {
          var g = ka.document,
            h = g.querySelector && g.querySelector("script[nonce]");
          if (h) {
            var k = h.nonce || h.getAttribute("nonce");
            if (k && la.test(k)) {
              ma = k;
              break b;
            }
          }
          ma = "";
        }
      e = ma;
      e && d.setAttribute("nonce", e);
      var l = F.getElementsByTagName("script")[0] || F.body || F.head;
      l.parentNode.insertBefore(d, l);
      return d;
    },
    dc = function() {
      if ($b) {
        var a = $b.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    ec = function(a, b) {
      var c = F.createElement("iframe");
      c.height = "0";
      c.width = "0";
      c.style.display = "none";
      c.style.visibility = "hidden";
      var d = (F.body && F.body.lastChild) || F.body || F.head;
      d.parentNode.insertBefore(c, d);
      bc(c, b);
      void 0 !== a && (c.src = a);
      return c;
    },
    fc = function(a, b, c) {
      var d = new Image(1, 1);
      d.onload = function() {
        d.onload = null;
        b && b();
      };
      d.onerror = function() {
        d.onerror = null;
        c && c();
      };
      d.src = a;
      return d;
    },
    gc = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    hc = function(a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    G = function(a) {
      D.setTimeout(a, 0);
    },
    ic = function(a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    jc = function(a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    kc = function(a) {
      var b = F.createElement("div");
      b.innerHTML = "A<div>" + a + "</div>";
      b = b.lastChild;
      for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild));
      return c;
    },
    lc = function(a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var g = a, h = 0; g && h <= c; h++) {
        if (d[String(g.tagName).toLowerCase()]) return g;
        g = g.parentElement;
      }
      return null;
    },
    mc = function(a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    };
  var oc = function(a) {
      return nc ? F.querySelectorAll(a) : null;
    },
    pc = function(a, b) {
      if (!nc) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!F.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    qc = !1;
  if (F.querySelectorAll)
    try {
      var rc = F.querySelectorAll(":root");
      rc && 1 == rc.length && rc[0] == F.documentElement && (qc = !0);
    } catch (a) {}
  var nc = qc;
  var H = {
    na: "_ee",
    fc: "event_callback",
    Pa: "event_timeout",
    D: "gtag.config",
    T: "allow_ad_personalization_signals",
    gc: "restricted_data_processing",
    W: "cookie_expires",
    Oa: "cookie_update",
    xa: "session_duration",
    ba: "user_properties"
  };
  (H.Vc = "page_view"),
    (H.Mf = "user_engagement"),
    (H.la = "purchase"),
    (H.Lc = "refund"),
    (H.wb = "begin_checkout"),
    (H.Ic = "add_to_cart"),
    (H.Jc = "remove_from_cart"),
    (H.kh = "view_cart"),
    (H.Ff = "add_to_wishlist"),
    (H.Tc = "view_item"),
    (H.nh = "present_offer"),
    (H.mh = "click_offer"),
    (H.lh = "click_item_list"),
    (H.ud = "view_item_list"),
    (H.Cf = "add_payment_info"),
    (H.jh = "add_shipping_info"),
    (H.Uf = "allow_custom_scripts"),
    (H.dg = "allow_display_features"),
    (H.kg = "allow_enhanced_conversions"),
    (H.Kd = "enhanced_conversions"),
    (H.xb = "client_id"),
    (H.R = "cookie_domain"),
    (H.yb = "cookie_name"),
    (H.Ba = "cookie_path"),
    (H.fa = "currency"),
    (H.zb = "custom_params"),
    (H.qg = "custom_map"),
    (H.gd = "groups"),
    (H.Ca = "language"),
    (H.og = "country"),
    (H.ph = "non_interaction"),
    (H.Ta = "page_location"),
    (H.Va = "page_referrer"),
    (H.$b = "page_title"),
    (H.Wa = "send_page_view"),
    (H.Da = "send_to"),
    (H.ac = "session_engaged"),
    (H.Db = "session_id"),
    (H.bc = "session_number"),
    (H.Be = "tracking_id"),
    (H.ma = "linker"),
    (H.Qa = "accept_incoming"),
    (H.C = "domains"),
    (H.Sa = "url_position"),
    (H.Ra = "decorate_forms"),
    (H.Pd = "phone_conversion_number"),
    (H.Nd = "phone_conversion_callback"),
    (H.Od = "phone_conversion_css_class"),
    (H.Qd = "phone_conversion_options"),
    (H.ve = "phone_conversion_ids"),
    (H.te = "phone_conversion_country_code"),
    (H.vd = "aw_remarketing"),
    (H.wd = "aw_remarketing_only"),
    (H.Y = "value"),
    (H.we = "quantity"),
    (H.Gg = "affiliation"),
    (H.Xg = "tax"),
    (H.Ug = "shipping"),
    (H.Xc = "list_name"),
    (H.Gd = "checkout_step"),
    (H.Ed = "checkout_option"),
    (H.Hg = "coupon"),
    (H.Og = "promotions"),
    (H.Xa = "transaction_id"),
    (H.Ya = "user_id"),
    (H.za = "conversion_linker"),
    (H.ya = "conversion_cookie_prefix"),
    (H.O = "cookie_prefix"),
    (H.X = "items"),
    (H.Bd = "aw_merchant_id"),
    (H.yd = "aw_feed_country"),
    (H.zd = "aw_feed_language"),
    (H.xd = "discount"),
    (H.Dd = "disable_merchant_reported_purchases"),
    (H.hd = "new_customer"),
    (H.Cd = "customer_lifetime_value"),
    (H.yg = "dc_natural_search"),
    (H.sg = "dc_custom_params"),
    (H.Ce = "trip_type"),
    (H.Ld = "passengers"),
    (H.gh = "method"),
    (H.Ae = "search_term"),
    (H.lg = "content_type"),
    (H.hh = "optimize_id"),
    (H.Zg = "experiments"),
    (H.Cb = "google_signals"),
    (H.fd = "google_tld"),
    (H.Fb = "update"),
    (H.dd = "firebase_id"),
    (H.Ab = "ga_restrict_domain"),
    (H.cd = "event_settings"),
    (H.ye = "screen_name"),
    (H.fh = "_x_19"),
    (H.ah = "_x_20"),
    (H.ka = "transport_url"),
    (H.De = [
      H.T,
      H.gc,
      H.R,
      H.W,
      H.yb,
      H.Ba,
      H.O,
      H.Oa,
      H.zb,
      H.fc,
      H.cd,
      H.Pa,
      H.Ab,
      H.Cb,
      H.fd,
      H.gd,
      H.ma,
      H.Da,
      H.Wa,
      H.xa,
      H.Fb,
      H.ba,
      H.ka
    ]),
    (H.Rd = [H.Ta, H.Va, H.$b, H.Ca, H.ye, H.Ya, H.dd]),
    (H.td = [
      H.Da,
      H.vd,
      H.wd,
      H.zb,
      H.Wa,
      H.Ca,
      H.Y,
      H.fa,
      H.Xa,
      H.Ya,
      H.za,
      H.ya,
      H.O,
      H.Ta,
      H.Va,
      H.Pd,
      H.Nd,
      H.Od,
      H.Qd,
      H.X,
      H.Bd,
      H.yd,
      H.zd,
      H.xd,
      H.Dd,
      H.hd,
      H.Cd,
      H.T,
      H.gc,
      H.Fb,
      H.dd,
      H.Kd,
      H.ka
    ]);
  var Ic = /[A-Z]+/,
    Jc = /\s/,
    Kc = function(a) {
      if (f(a) && ((a = Ea(a)), !Jc.test(a))) {
        var b = a.indexOf("-");
        if (!(0 > b)) {
          var c = a.substring(0, b);
          if (Ic.test(c)) {
            for (
              var d = a.substring(b + 1).split("/"), e = 0;
              e < d.length;
              e++
            )
              if (!d[e]) return;
            return { id: a, prefix: c, containerId: c + "-" + d[0], m: d };
          }
        }
      }
    },
    Mc = function(a) {
      for (var b = {}, c = 0; c < a.length; ++c) {
        var d = Kc(a[c]);
        d && (b[d.id] = d);
      }
      Lc(b);
      var e = [];
      za(b, function(g, h) {
        e.push(h);
      });
      return e;
    };
  function Lc(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.m[1] && b.push(d.containerId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Nc = {},
    Oc = null,
    Pc = Math.random();
  Nc.s = "UA-43449336-1";
  Nc.tb = "181";
  var Qc = {
      __cl: !0,
      __ecl: !0,
      __ehl: !0,
      __evl: !0,
      __fal: !0,
      __fil: !0,
      __fsl: !0,
      __hl: !0,
      __jel: !0,
      __lcl: !0,
      __sdl: !0,
      __tl: !0,
      __ytl: !0,
      __paused: !0,
      __tg: !0
    },
    Rc = "www.googletagmanager.com/gtm.js";
  Rc = "www.googletagmanager.com/gtag/js";
  var Sc = Rc,
    Tc = null,
    Uc = null,
    Vc = null,
    Wc = "//www.googletagmanager.com/a?id=" + Nc.s + "&cv=1",
    Xc = {},
    Yc = {},
    Zc = function() {
      var a = Oc.sequence || 0;
      Oc.sequence = a + 1;
      return a;
    };
  var $c = {},
    I = function(a, b) {
      $c[a] = $c[a] || [];
      $c[a][b] = !0;
    },
    ad = function(a) {
      for (var b = [], c = $c[a] || [], d = 0; d < c.length; d++)
        c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
      for (var e = 0; e < b.length; e++)
        b[
          e
        ] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          b[e] || 0
        );
      return b.join("");
    };
  var cd = function() {
      return (
        "&tc=" +
        sb.filter(function(a) {
          return a;
        }).length
      );
    },
    fd = function() {
      dd || (dd = D.setTimeout(ed, 500));
    },
    ed = function() {
      dd && (D.clearTimeout(dd), (dd = void 0));
      void 0 === gd ||
        (hd[gd] && !id && !jd) ||
        (kd[gd] || ld.cg() || 0 >= md--
          ? (I("GTM", 1), (kd[gd] = !0))
          : (ld.Jg(), fc(nd()), (hd[gd] = !0), (od = pd = jd = id = "")));
    },
    nd = function() {
      var a = gd;
      if (void 0 === a) return "";
      var b = ad("GTM"),
        c = ad("TAGGING");
      return [
        qd,
        hd[a] ? "" : "&es=1",
        rd[a],
        b ? "&u=" + b : "",
        c ? "&ut=" + c : "",
        cd(),
        id,
        jd,
        pd,
        od,
        "&z=0"
      ].join("");
    },
    sd = function() {
      return [Wc, "&v=3&t=t", "&pid=" + wa(), "&rv=" + Nc.tb].join("");
    },
    td = "0.005000" > Math.random(),
    qd = sd(),
    ud = function() {
      qd = sd();
    },
    hd = {},
    id = "",
    jd = "",
    od = "",
    pd = "",
    gd = void 0,
    rd = {},
    kd = {},
    dd = void 0,
    ld = (function(a, b) {
      var c = 0,
        d = 0;
      return {
        cg: function() {
          if (c < a) return !1;
          Fa() - d >= b && (c = 0);
          return c >= a;
        },
        Jg: function() {
          Fa() - d >= b && (c = 0);
          c++;
          d = Fa();
        }
      };
    })(2, 1e3),
    md = 1e3,
    vd = function(a, b) {
      if (td && !kd[a] && gd !== a) {
        ed();
        gd = a;
        od = id = "";
        var c;
        c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
        rd[a] = "&e=" + c + "&eid=" + a;
        fd();
      }
    },
    wd = function(a, b, c) {
      if (td && !kd[a] && b) {
        a !== gd && (ed(), (gd = a));
        var d,
          e = String(b[Gb.oa] || "").replace(/_/g, "");
        0 === e.indexOf("cvt") && (e = "cvt");
        d = e;
        var g = c + d;
        id = id ? id + "." + g : "&tr=" + g;
        fd();
        2022 <= nd().length && ed();
      }
    },
    xd = function(a, b, c) {
      if (td && !kd[a]) {
        a !== gd && (ed(), (gd = a));
        var d = c + b;
        jd = jd ? jd + "." + d : "&epr=" + d;
        fd();
        2022 <= nd().length && ed();
      }
    };
  var yd = {},
    zd = new xa(),
    Ad = {},
    Bd = {},
    Ed = {
      name: "dataLayer",
      set: function(a, b) {
        C(La(a, b), Ad);
        Cd();
      },
      get: function(a) {
        return Dd(a, 2);
      },
      reset: function() {
        zd = new xa();
        Ad = {};
        Cd();
      }
    },
    Dd = function(a, b) {
      if (2 != b) {
        var c = zd.get(a);
        if (td) {
          var d = Fd(a);
          c !== d && I("GTM", 5);
        }
        return c;
      }
      return Fd(a);
    },
    Fd = function(a, b, c) {
      var d = a.split("."),
        e = !1,
        g = void 0;
      var h = function(k, l) {
        for (var m = 0; void 0 !== k && m < d.length; m++) {
          if (null === k) return !1;
          k = k[d[m]];
        }
        return void 0 !== k || 1 < m ? k : l.length ? h(Gd(l.pop()), l) : Hd(d);
      };
      e = !0;
      g = h(Ad.eventModel, [b, c]);
      return e ? g : Hd(d);
    },
    Hd = function(a) {
      for (var b = Ad, c = 0; c < a.length; c++) {
        if (null === b) return !1;
        if (void 0 === b) break;
        b = b[a[c]];
      }
      return b;
    };
  var Gd = function(a) {
      if (a) {
        var b = Hd(["gtag", "targets", a]);
        return Pa(b) ? b : void 0;
      }
    },
    Id = function(a, b) {
      function c(g) {
        g &&
          za(g, function(h) {
            d[h] = null;
          });
      }
      var d = {};
      c(Ad);
      delete d.eventModel;
      c(Gd(a));
      c(Gd(b));
      c(Ad.eventModel);
      var e = [];
      za(d, function(g) {
        e.push(g);
      });
      return e;
    };
  var Jd = function(a, b) {
      Bd.hasOwnProperty(a) || (zd.set(a, b), C(La(a, b), Ad), Cd());
    },
    Cd = function(a) {
      za(Bd, function(b, c) {
        zd.set(b, c);
        C(La(b, void 0), Ad);
        C(La(b, c), Ad);
        a && delete Bd[b];
      });
    },
    Kd = function(a, b, c) {
      yd[a] = yd[a] || {};
      var d = 1 !== c ? Fd(b) : zd.get(b);
      "array" === Na(d) || "object" === Na(d)
        ? (yd[a][b] = C(d))
        : (yd[a][b] = d);
    },
    Ld = function(a, b) {
      if (yd[a]) return yd[a][b];
    };
  var Md = function() {
    var a = !1;
    return a;
  };
  var Q = function(a, b, c, d) {
      return (2 === Nd() || d || "http:" != D.location.protocol ? a : b) + c;
    },
    Nd = function() {
      var a = dc(),
        b;
      if (1 === a)
        a: {
          var c = Sc;
          c = c.toLowerCase();
          for (
            var d = "https://" + c,
              e = "http://" + c,
              g = 1,
              h = F.getElementsByTagName("script"),
              k = 0;
            k < h.length && 100 > k;
            k++
          ) {
            var l = h[k].src;
            if (l) {
              l = l.toLowerCase();
              if (0 === l.indexOf(e)) {
                b = 3;
                break a;
              }
              1 === g && 0 === l.indexOf(d) && (g = 2);
            }
          }
          b = g;
        }
      else b = a;
      return b;
    };
  var Pd = function(a, b, c) {
      if (D[a.functionName]) return b.Mc && G(b.Mc), D[a.functionName];
      var d = Od();
      D[a.functionName] = d;
      if (a.Bb)
        for (var e = 0; e < a.Bb.length; e++) D[a.Bb[e]] = D[a.Bb[e]] || Od();
      a.Lb && void 0 === D[a.Lb] && (D[a.Lb] = c);
      cc(Q("https://", "http://", a.Yc), b.Mc, b.ug);
      return d;
    },
    Od = function() {
      var a = function() {
        a.q = a.q || [];
        a.q.push(arguments);
      };
      return a;
    },
    Qd = {
      functionName: "_googWcmImpl",
      Lb: "_googWcmAk",
      Yc: "www.gstatic.com/wcm/loader.js"
    },
    Rd = {
      functionName: "_gaPhoneImpl",
      Lb: "ga_wpid",
      Yc: "www.gstatic.com/gaphone/loader.js"
    },
    Sd = { ue: "", Le: "1" },
    Td = {
      functionName: "_googCallTrackingImpl",
      Bb: [Rd.functionName, Qd.functionName],
      Yc:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Sd.ue || Sd.Le) +
        ".js"
    },
    Ud = {},
    Vd = function(a, b, c, d) {
      I("GTM", 22);
      if (c) {
        d = d || {};
        var e = Pd(Qd, d, a),
          g = { ak: a, cl: b };
        void 0 === d.da && (g.autoreplace = c);
        e(2, d.da, g, c, 0, new Date(), d.options);
      }
    },
    Wd = function(a, b, c) {
      I("GTM", 23);
      if (b) {
        c = c || {};
        var d = Pd(Rd, c, a),
          e = {};
        void 0 !== c.da ? (e.receiver = c.da) : (e.replace = b);
        e.ga_wpid = a;
        e.destination = b;
        d(2, new Date(), e);
      }
    },
    Xd = function(a, b, c, d) {
      I("GTM", 21);
      if (b && c) {
        d = d || {};
        for (
          var e = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: new Date()
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var h = a[g];
          Ud[h.id] ||
            (h && "AW" === h.prefix && !e.adData && 2 <= h.m.length
              ? ((e.adData = { ak: h.m[0], cl: h.m[1] }), (Ud[h.id] = !0))
              : h &&
                "UA" === h.prefix &&
                !e.gaData &&
                ((e.gaData = { gaWpid: h.containerId }), (Ud[h.id] = !0)));
        }
        (e.gaData || e.adData) && Pd(Td, d)(d.da, e, d.options);
      }
    },
    Yd = function() {
      var a = !1;
      return a;
    },
    Zd = function(a, b) {
      if (a)
        if (Md()) {
        } else {
          if (f(a)) {
            var c = Kc(a);
            if (!c) return;
            a = c;
          }
          var d = function(x) {
              return b ? b.getWithConfig(x) : Fd(x, a.containerId, a.id);
            },
            e = void 0,
            g = !1,
            h = d(H.ve);
          if (h && ua(h)) {
            e = [];
            for (var k = 0; k < h.length; k++) {
              var l = Kc(h[k]);
              l &&
                (e.push(l),
                (a.id === l.id ||
                  (a.id === a.containerId &&
                    a.containerId === l.containerId)) &&
                  (g = !0));
            }
          }
          if (!e || g) {
            var m = d(H.Pd),
              n;
            if (m) {
              ua(m) ? (n = m) : (n = [m]);
              var q = d(H.Nd),
                u = d(H.Od),
                p = d(H.Qd),
                t = d(H.te),
                v = q || u,
                w = 1;
              "UA" !== a.prefix || e || (w = 5);
              for (var y = 0; y < n.length; y++)
                y < w &&
                  (e
                    ? Xd(e, n[y], t, { da: v, options: p })
                    : "AW" === a.prefix && a.m[1]
                    ? Yd()
                      ? Xd([a], n[y], t || "US", { da: v, options: p })
                      : Vd(a.m[0], a.m[1], n[y], { da: v, options: p })
                    : "UA" === a.prefix &&
                      (Yd()
                        ? Xd([a], n[y], t || "US", { da: v })
                        : Wd(a.containerId, n[y], { da: v })));
            }
          }
        }
    };
  var be = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    ce = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes"
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes"
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"]
    },
    de = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes"
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    },
    ee = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
      " "
    );
  var ge = function(a) {
      Yc.pntr = Yc.pntr || ["nonGoogleScripts"];
      Yc.snppx = Yc.snppx || ["nonGoogleScripts"];
      Yc.qpx = Yc.qpx || ["nonGooglePixels"];
      var b = Dd("gtm.whitelist");
      b && I("GTM", 9);
      b = "google gtagfl lcl zone oid op".split(" ");
      var c = b && Ka(Da(b), ce),
        d = Dd("gtm.blacklist");
      d || ((d = Dd("tagTypeBlacklist")) && I("GTM", 3));
      d ? I("GTM", 8) : (d = []);
      fe() &&
        ((d = Da(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= r(Da(d), "google") && I("GTM", 2);
      var e = d && Ka(Da(d), de),
        g = {};
      return function(h) {
        var k = h && h[Gb.oa];
        if (!k || "string" != typeof k) return !0;
        k = k.replace(/^_*/, "");
        if (void 0 !== g[k]) return g[k];
        var l = Yc[k] || [],
          m = a(k, l);
        if (b) {
          var n;
          if ((n = m))
            a: {
              if (0 > r(c, k))
                if (l && 0 < l.length)
                  for (var q = 0; q < l.length; q++) {
                    if (0 > r(c, l[q])) {
                      I("GTM", 11);
                      n = !1;
                      break a;
                    }
                  }
                else {
                  n = !1;
                  break a;
                }
              n = !0;
            }
          m = n;
        }
        var u = !1;
        if (d) {
          var p = 0 <= r(e, k);
          if (p) u = p;
          else {
            var t = ya(e, l || []);
            t && I("GTM", 10);
            u = t;
          }
        }
        var v = !m || u;
        v ||
          !(0 <= r(l, "sandboxedScripts")) ||
          (c && -1 !== r(c, "sandboxedScripts")) ||
          (v = ya(e, ee));
        return (g[k] = v);
      };
    },
    fe = function() {
      return be.test(D.location && D.location.hostname);
    };
  var he = {
    qf: function(a, b) {
      b[Gb.md] &&
        "string" === typeof a &&
        (a = 1 == b[Gb.md] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Gb.od) && null === a && (a = b[Gb.od]);
      b.hasOwnProperty(Gb.qd) && void 0 === a && (a = b[Gb.qd]);
      b.hasOwnProperty(Gb.pd) && !0 === a && (a = b[Gb.pd]);
      b.hasOwnProperty(Gb.nd) && !1 === a && (a = b[Gb.nd]);
      return a;
    }
  };
  var ie = {
      active: !0,
      isWhitelisted: function() {
        return !0;
      }
    },
    je = function(a) {
      var b = Oc.zones;
      !b && a && (b = Oc.zones = a());
      return b;
    };
  var ke = function() {};
  var le = !1,
    me = 0,
    ne = [];
  function oe(a) {
    if (!le) {
      var b = F.createEventObject,
        c = "complete" == F.readyState,
        d = "interactive" == F.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        le = !0;
        for (var e = 0; e < ne.length; e++) G(ne[e]);
      }
      ne.push = function() {
        for (var g = 0; g < arguments.length; g++) G(arguments[g]);
        return 0;
      };
    }
  }
  function pe() {
    if (!le && 140 > me) {
      me++;
      try {
        F.documentElement.doScroll("left"), oe();
      } catch (a) {
        D.setTimeout(pe, 50);
      }
    }
  }
  var qe = function(a) {
    le ? a() : ne.push(a);
  };
  var re = {},
    se = {},
    te = function(a, b, c, d) {
      if (!se[a] || Qc[b] || "__zone" === b) return -1;
      var e = {};
      Pa(d) && (e = C(d, e));
      e.id = c;
      e.status = "timeout";
      return se[a].tags.push(e) - 1;
    },
    ue = function(a, b, c, d) {
      if (se[a]) {
        var e = se[a].tags[b];
        e && ((e.status = c), (e.executionTime = d));
      }
    };
  function ve(a) {
    for (var b = re[a] || [], c = 0; c < b.length; c++) b[c]();
    re[a] = {
      push: function(d) {
        d(Nc.s, se[a]);
      }
    };
  }
  var ye = function(a, b, c) {
      se[a] = { tags: [] };
      qa(b) && we(a, b);
      c &&
        D.setTimeout(function() {
          return ve(a);
        }, Number(c));
      return xe(a);
    },
    we = function(a, b) {
      re[a] = re[a] || [];
      re[a].push(
        Ha(function() {
          return G(function() {
            b(Nc.s, se[a]);
          });
        })
      );
    };
  function xe(a) {
    var b = 0,
      c = 0,
      d = !1;
    return {
      add: function() {
        c++;
        return Ha(function() {
          b++;
          d && b >= c && ve(a);
        });
      },
      Ze: function() {
        d = !0;
        b >= c && ve(a);
      }
    };
  }
  var ze = function() {
    function a(d) {
      return !ra(d) || 0 > d ? 0 : d;
    }
    if (!Oc._li && D.performance && D.performance.timing) {
      var b = D.performance.timing.navigationStart,
        c = ra(Ed.get("gtm.start")) ? Ed.get("gtm.start") : 0;
      Oc._li = { cst: a(c - b), cbt: a(Uc - b) };
    }
  };
  var De = !1,
    Ee = function() {
      return D.GoogleAnalyticsObject && D[D.GoogleAnalyticsObject];
    },
    Fe = !1;
  var Ge = function(a) {
      D.GoogleAnalyticsObject || (D.GoogleAnalyticsObject = a || "ga");
      var b = D.GoogleAnalyticsObject;
      if (D[b]) D.hasOwnProperty(b) || I("GTM", 12);
      else {
        var c = function() {
          c.q = c.q || [];
          c.q.push(arguments);
        };
        c.l = Number(new Date());
        D[b] = c;
      }
      ze();
      return D[b];
    },
    He = function(a, b, c, d) {
      b = String(b)
        .replace(/\s+/g, "")
        .split(",");
      var e = Ee();
      e(a + "require", "linker");
      e(a + "linker:autoLink", b, c, d);
    };
  var Je = function() {},
    Ie = function() {
      return D.GoogleAnalyticsObject || "ga";
    };
  var Le = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  var Me = /:[0-9]+$/,
    Ne = function(a, b, c) {
      for (var d = a.split("&"), e = 0; e < d.length; e++) {
        var g = d[e].split("=");
        if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
          var h = g.slice(1).join("=");
          return c ? h : decodeURIComponent(h).replace(/\+/g, " ");
        }
      }
    },
    Qe = function(a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = Oe(a.protocol) || Oe(D.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : D.location.port) ||
              ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || D.location.hostname)
            .replace(Me, "")
            .toLowerCase());
      var g = b,
        h,
        k = Oe(a.protocol);
      g && (g = String(g).toLowerCase());
      switch (g) {
        case "url_no_fragment":
          h = Pe(a);
          break;
        case "protocol":
          h = k;
          break;
        case "host":
          h = a.hostname.replace(Me, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(h);
            l && l[0] && (h = h.substr(l[0].length));
          }
          break;
        case "port":
          h = String(
            Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || I("TAGGING", 1);
          h = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = h.split("/");
          0 <= r(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
          h = m.join("/");
          break;
        case "query":
          h = a.search.replace("?", "");
          e && (h = Ne(h, e, void 0));
          break;
        case "extension":
          var n = a.pathname.split(".");
          h = 1 < n.length ? n[n.length - 1] : "";
          h = h.split("/")[0];
          break;
        case "fragment":
          h = a.hash.replace("#", "");
          break;
        default:
          h = a && a.href;
      }
      return h;
    },
    Oe = function(a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Pe = function(a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Re = function(a) {
      var b = F.createElement("a");
      a && (b.href = a);
      var c = b.pathname;
      "/" !== c[0] && (a || I("TAGGING", 1), (c = "/" + c));
      var d = b.hostname.replace(Me, "");
      return {
        href: b.href,
        protocol: b.protocol,
        host: b.host,
        hostname: d,
        pathname: c,
        search: b.search,
        hash: b.hash,
        port: b.port
      };
    };
  function We(a, b, c, d) {
    var e = sb[a],
      g = Xe(a, b, c, d);
    if (!g) return null;
    var h = Bb(e[Gb.Fd], c, []);
    if (h && h.length) {
      var k = h[0];
      g = We(
        k.index,
        { B: g, w: 1 === k.Zd ? b.terminate : g, terminate: b.terminate },
        c,
        d
      );
    }
    return g;
  }
  function Xe(a, b, c, d) {
    function e() {
      if (g[Gb.He]) k();
      else {
        var w = Cb(g, c, []),
          y = te(c.id, String(g[Gb.oa]), Number(g[Gb.Hd]), w[Gb.Ie]),
          x = !1;
        w.vtp_gtmOnSuccess = function() {
          if (!x) {
            x = !0;
            var A = Fa() - B;
            wd(c.id, sb[a], "5");
            ue(c.id, y, "success", A);
            h();
          }
        };
        w.vtp_gtmOnFailure = function() {
          if (!x) {
            x = !0;
            var A = Fa() - B;
            wd(c.id, sb[a], "6");
            ue(c.id, y, "failure", A);
            k();
          }
        };
        w.vtp_gtmTagId = g.tag_id;
        w.vtp_gtmEventId = c.id;
        wd(c.id, g, "1");
        var z = function() {
          var A = Fa() - B;
          wd(c.id, g, "7");
          ue(c.id, y, "exception", A);
          x || ((x = !0), k());
        };
        var B = Fa();
        try {
          Ab(w, c);
        } catch (A) {
          z(A);
        }
      }
    }
    var g = sb[a],
      h = b.B,
      k = b.w,
      l = b.terminate;
    if (c.Dc(g)) return null;
    var m = Bb(g[Gb.Id], c, []);
    if (m && m.length) {
      var n = m[0],
        q = We(n.index, { B: h, w: k, terminate: l }, c, d);
      if (!q) return null;
      h = q;
      k = 2 === n.Zd ? l : q;
    }
    if (g[Gb.Ad] || g[Gb.Je]) {
      var u = g[Gb.Ad] ? tb : c.Sg,
        p = h,
        t = k;
      if (!u[a]) {
        e = Ha(e);
        var v = Ye(a, u, e);
        h = v.B;
        k = v.w;
      }
      return function() {
        u[a](p, t);
      };
    }
    return e;
  }
  function Ye(a, b, c) {
    var d = [],
      e = [];
    b[a] = Ze(d, e, c);
    return {
      B: function() {
        b[a] = $e;
        for (var g = 0; g < d.length; g++) d[g]();
      },
      w: function() {
        b[a] = af;
        for (var g = 0; g < e.length; g++) e[g]();
      }
    };
  }
  function Ze(a, b, c) {
    return function(d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function $e(a) {
    a();
  }
  function af(a, b) {
    b();
  }
  var df = function(a, b) {
    for (var c = [], d = 0; d < sb.length; d++)
      if (a.hb[d]) {
        var e = sb[d];
        var g = b.add();
        try {
          var h = We(d, { B: g, w: g, terminate: g }, a, d);
          h ? c.push({ qe: d, ke: Db(e), Bf: h }) : (bf(d, a), g());
        } catch (l) {
          g();
        }
      }
    b.Ze();
    c.sort(cf);
    for (var k = 0; k < c.length; k++) c[k].Bf();
    return 0 < c.length;
  };
  function cf(a, b) {
    var c,
      d = b.ke,
      e = a.ke;
    c = d > e ? 1 : d < e ? -1 : 0;
    var g;
    if (0 !== c) g = c;
    else {
      var h = a.qe,
        k = b.qe;
      g = h > k ? 1 : h < k ? -1 : 0;
    }
    return g;
  }
  function bf(a, b) {
    if (!td) return;
    var c = function(d) {
      var e = b.Dc(sb[d]) ? "3" : "4",
        g = Bb(sb[d][Gb.Fd], b, []);
      g && g.length && c(g[0].index);
      wd(b.id, sb[d], e);
      var h = Bb(sb[d][Gb.Id], b, []);
      h && h.length && c(h[0].index);
    };
    c(a);
  }
  var ef = !1,
    ff = function(a, b, c, d, e) {
      if ("gtm.js" == b) {
        if (ef) return !1;
        ef = !0;
      }
      vd(a, b);
      var g = ye(a, d, e);
      Kd(a, "event", 1);
      Kd(a, "ecommerce", 1);
      Kd(a, "gtm");
      var h = {
        id: a,
        name: b,
        Dc: ge(c),
        hb: [],
        Sg: [],
        de: function() {
          I("GTM", 6);
        }
      };
      h.hb = Kb(h);
      var k = df(h, g);
      if (!k) return k;
      for (var l = 0; l < h.hb.length; l++)
        if (h.hb[l]) {
          var m = sb[l];
          if (m && !Qc[String(m[Gb.oa])]) return !0;
        }
      return !1;
    };
  var gf = function(a, b) {
    var c = zb(a, b);
    sb.push(c);
    return sb.length - 1;
  };
  var hf = /^https?:\/\/www\.googletagmanager\.com/;
  function jf() {
    var a;
    return a;
  }
  function lf(a, b) {}
  function kf(a) {
    0 !== a.indexOf("http://") &&
      0 !== a.indexOf("https://") &&
      (a = "https://" + a);
    "/" === a[a.length - 1] && (a = a.substring(0, a.length - 1));
    return a;
  }
  function mf() {
    var a = !1;
    return a;
  }
  var nf = function() {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.h = {};
      this.globalConfig = {};
      this.B = function() {};
      this.w = function() {};
    },
    of = function(a) {
      var b = new nf();
      b.eventModel = a;
      return b;
    },
    pf = function(a, b) {
      a.targetConfig = b;
      return a;
    },
    qf = function(a, b) {
      a.containerConfig = b;
      return a;
    },
    rf = function(a, b) {
      a.h = b;
      return a;
    },
    sf = function(a, b) {
      a.globalConfig = b;
      return a;
    },
    tf = function(a, b) {
      a.B = b;
      return a;
    },
    uf = function(a, b) {
      a.w = b;
      return a;
    };
  nf.prototype.getWithConfig = function(a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    if (void 0 !== this.h[a]) return this.h[a];
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
  };
  var vf = function(a) {
    function b(e) {
      za(e, function(g) {
        c[g] = null;
      });
    }
    var c = {};
    b(a.eventModel);
    b(a.targetConfig);
    b(a.containerConfig);
    b(a.globalConfig);
    var d = [];
    za(c, function(e) {
      d.push(e);
    });
    return d;
  };
  var wf = {},
    xf = ["G"];
  wf.se = "";
  var yf = wf.se.split(",");
  function zf() {
    var a = Oc;
    return (a.gcq = a.gcq || new Af());
  }
  var Bf = function(a, b, c) {
      zf().register(a, b, c);
    },
    Cf = function(a, b, c, d) {
      zf().push("event", [b, a], c, d);
    },
    Df = function(a, b) {
      zf().push("config", [a], b);
    },
    Ef = {},
    Ff = function() {
      this.status = 1;
      this.containerConfig = {};
      this.targetConfig = {};
      this.i = {};
      this.o = null;
      this.h = !1;
    },
    Gf = function(a, b, c, d, e) {
      this.type = a;
      this.o = b;
      this.M = c || "";
      this.h = d;
      this.i = e;
    },
    Af = function() {
      this.i = {};
      this.o = {};
      this.h = [];
    },
    Hf = function(a, b) {
      var c = Kc(b);
      return (a.i[c.containerId] = a.i[c.containerId] || new Ff());
    },
    If = function(a, b, c, d) {
      if (d.M) {
        var e = Hf(a, d.M),
          g = e.o;
        if (g) {
          var h = C(c),
            k = C(e.targetConfig[d.M]),
            l = C(e.containerConfig),
            m = C(e.i),
            n = C(a.o),
            q = Dd("gtm.uniqueEventId"),
            u = Kc(d.M).prefix,
            p = uf(
              tf(sf(rf(qf(pf(of(h), k), l), m), n), function() {
                xd(q, u, "2");
              }),
              function() {
                xd(q, u, "3");
              }
            );
          try {
            xd(q, u, "1");
            3 === g.length ? g(b, d.o, p) : 4 === g.length && g(d.M, b, d.o, p);
          } catch (t) {
            xd(q, u, "4");
          }
        }
      }
    };
  Af.prototype.register = function(a, b, c) {
    if (3 !== Hf(this, a).status) {
      Hf(this, a).o = b;
      Hf(this, a).status = 3;
      c && (Hf(this, a).i = c);
      var d = Kc(a),
        e = Ef[d.containerId];
      if (void 0 !== e) {
        var g = Oc[d.containerId].bootstrap,
          h = d.prefix.toUpperCase();
        Oc[d.containerId]._spx && (h = h.toLowerCase());
        var k = Dd("gtm.uniqueEventId"),
          l = h,
          m = Fa() - g;
        if (td && !kd[k]) {
          k !== gd && (ed(), (gd = k));
          var n = l + "." + Math.floor(g - e) + "." + Math.floor(m);
          pd = pd ? pd + "," + n : "&cl=" + n;
        }
        delete Ef[d.containerId];
      }
      this.flush();
    }
  };
  Af.prototype.push = function(a, b, c, d) {
    var e = Math.floor(Fa() / 1e3);
    if (c) {
      var g = Kc(c),
        h;
      if ((h = g)) {
        var k;
        if ((k = 1 === Hf(this, c).status))
          a: {
            var l = g.prefix;
            k = !0;
          }
        h = k;
      }
      if (
        h &&
        ((Hf(this, c).status = 2),
        this.push("require", [], g.containerId),
        (Ef[g.containerId] = Fa()),
        !Md())
      ) {
        var m = encodeURIComponent(g.containerId),
          n =
            ("http:" != D.location.protocol ? "https:" : "http:") +
            "//www.googletagmanager.com";
        cc(n + "/gtag/js?id=" + m + "&l=dataLayer&cx=c");
      }
    }
    this.h.push(new Gf(a, e, c, b, d));
    d || this.flush();
  };
  Af.prototype.flush = function(a) {
    for (var b = this; this.h.length; ) {
      var c = this.h[0];
      if (c.i) (c.i = !1), this.h.push(c);
      else
        switch (c.type) {
          case "require":
            if (3 !== Hf(this, c.M).status && !a) return;
            break;
          case "set":
            za(c.h[0], function(l, m) {
              C(La(l, m), b.o);
            });
            break;
          case "config":
            var d = c.h[0],
              e = !!d[H.Fb];
            delete d[H.Fb];
            var g = Hf(this, c.M),
              h = Kc(c.M),
              k = h.containerId === h.id;
            e || (k ? (g.containerConfig = {}) : (g.targetConfig[c.M] = {}));
            (g.h && e) || If(this, H.D, d, c);
            g.h = !0;
            delete d[H.na];
            k ? C(d, g.containerConfig) : C(d, g.targetConfig[c.M]);
            break;
          case "event":
            If(this, c.h[1], c.h[0], c);
        }
      this.h.shift();
    }
  };
  var Jf = function(a, b, c) {
      for (
        var d = [], e = String(b || document.cookie).split(";"), g = 0;
        g < e.length;
        g++
      ) {
        var h = e[g].split("="),
          k = h[0].replace(/^\s*|\s*$/g, "");
        if (k && k == a) {
          var l = h
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          l && c && (l = decodeURIComponent(l));
          d.push(l);
        }
      }
      return d;
    },
    Mf = function(a, b, c, d) {
      var e = Kf(a, d);
      if (1 === e.length) return e[0].id;
      if (0 !== e.length) {
        e = Lf(
          e,
          function(g) {
            return g.Hb;
          },
          b
        );
        if (1 === e.length) return e[0].id;
        e = Lf(
          e,
          function(g) {
            return g.ib;
          },
          c
        );
        return e[0] ? e[0].id : void 0;
      }
    };
  function Nf(a, b, c) {
    var d = document.cookie;
    document.cookie = a;
    var e = document.cookie;
    return d != e || (void 0 != c && 0 <= Jf(b, e).indexOf(c));
  }
  var Rf = function(a, b, c, d, e, g) {
    d = d || "auto";
    var h = { path: c || "/" };
    e && (h.expires = e);
    "none" !== d && (h.domain = d);
    var k;
    a: {
      var l = b,
        m;
      if (void 0 == l) m = a + "=deleted; expires=" + new Date(0).toUTCString();
      else {
        g && (l = encodeURIComponent(l));
        var n = l;
        n && 1200 < n.length && (n = n.substring(0, 1200));
        l = n;
        m = a + "=" + l;
      }
      var q = void 0,
        u = void 0,
        p;
      for (p in h)
        if (h.hasOwnProperty(p)) {
          var t = h[p];
          if (null != t)
            switch (p) {
              case "secure":
                t && (m += "; secure");
                break;
              case "domain":
                q = t;
                break;
              default:
                "path" == p && (u = t),
                  "expires" == p && t instanceof Date && (t = t.toUTCString()),
                  (m += "; " + p + "=" + t);
            }
        }
      if ("auto" === q) {
        for (var v = Of(), w = 0; w < v.length; ++w) {
          var y = "none" != v[w] ? v[w] : void 0;
          if (!Pf(y, u) && Nf(m + (y ? "; domain=" + y : ""), a, l)) {
            k = !0;
            break a;
          }
        }
        k = !1;
      } else
        q && "none" != q && (m += "; domain=" + q),
          (k = !Pf(q, u) && Nf(m, a, l));
    }
    return k;
  };
  function Lf(a, b, c) {
    for (var d = [], e = [], g, h = 0; h < a.length; h++) {
      var k = a[h],
        l = b(k);
      l === c
        ? d.push(k)
        : void 0 === g || l < g
        ? ((e = [k]), (g = l))
        : l === g && e.push(k);
    }
    return 0 < d.length ? d : e;
  }
  function Kf(a, b) {
    for (var c = [], d = Jf(a), e = 0; e < d.length; e++) {
      var g = d[e].split("."),
        h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k &&
          ((k = k.split("-")),
          c.push({ id: g.join("."), Hb: 1 * k[0] || 1, ib: 1 * k[1] || 1 }));
      }
    }
    return c;
  }
  var Sf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Tf = /(^|\.)doubleclick\.net$/i,
    Pf = function(a, b) {
      return Tf.test(document.location.hostname) || ("/" === b && Sf.test(a));
    },
    Of = function() {
      var a = [],
        b = document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = document.location.hostname;
      Tf.test(e) || Sf.test(e) || a.push("none");
      return a;
    };
  var Uf = "".split(/,/),
    Vf = !1;
  var Wf = null,
    Xf = {},
    Yf = {},
    Zf;
  function $f(a, b) {
    var c = { event: a };
    b &&
      ((c.eventModel = C(b)),
      b[H.fc] && (c.eventCallback = b[H.fc]),
      b[H.Pa] && (c.eventTimeout = b[H.Pa]));
    return c;
  }
  var ag = function() {
      Wf = Wf || !Oc.gtagRegistered;
      Oc.gtagRegistered = !0;
      return Wf;
    },
    bg = function(a) {
      if (void 0 === Yf[a.id]) {
        var b;
        switch (a.prefix) {
          case "UA":
            b = gf("gtagua", { trackingId: a.id });
            break;
          case "AW":
            b = gf("gtagaw", { conversionId: a });
            break;
          case "DC":
            b = gf("gtagfl", { targetId: a.id });
            break;
          case "GF":
            b = gf("gtaggf", { conversionId: a });
            break;
          case "G":
            b = gf("get", { trackingId: a.id, isAutoTag: !0 });
            break;
          case "HA":
            b = gf("gtagha", { conversionId: a });
            break;
          case "GP":
            b = gf("gtaggp", { conversionId: a.id });
            break;
          default:
            return;
        }
        if (!Zf) {
          var c = zb("v", { name: "send_to", dataLayerVersion: 2 });
          pb.push(c);
          Zf = ["macro", pb.length - 1];
        }
        var d = { arg0: Zf, arg1: a.id, ignore_case: !1 };
        d[Gb.oa] = "_lc";
        rb.push(d);
        var e = { if: [rb.length - 1], add: [b] };
        e["if"] && (e.add || e.block) && qb.push(e);
        Yf[a.id] = b;
      }
    },
    cg = function(a) {
      za(Xf, function(b, c) {
        var d = r(c, a);
        0 <= d && c.splice(d, 1);
      });
    },
    dg = Ha(function() {}),
    eg = function(a) {
      if (a.containerId !== Nc.s && "G" !== a.prefix) {
        var b;
        switch (a.prefix) {
          case "UA":
            b = 14;
            break;
          case "AW":
            b = 15;
            break;
          case "DC":
            b = 16;
            break;
          default:
            b = 17;
        }
        I("GTM", b);
      }
    };
  var fg = {
      config: function(a) {
        var b = a[2] || {};
        if (2 > a.length || !f(a[1]) || !Pa(b)) return;
        var c = Kc(a[1]);
        if (!c) return;
        cg(c.id);
        var d = c.id,
          e = b[H.gd] || "default";
        e = e.toString().split(",");
        for (var g = 0; g < e.length; g++)
          (Xf[e[g]] = Xf[e[g]] || []), Xf[e[g]].push(d);
        delete b[H.gd];
        C(b);
        if (ag()) {
          if (Vf && -1 !== r(Uf, c.prefix)) {
            "G" === c.prefix && (b[H.na] = !0);
            Df(b, c.id);
            return;
          }
          bg(c);
          eg(c);
        } else dg();
        Jd("gtag.targets." + c.id, void 0);
        Jd("gtag.targets." + c.id, C(b));
        var h = {};
        h[H.Da] = c.id;
        return $f(H.D, h);
      },
      event: function(a) {
        var b = a[1];
        if (f(b) && !(3 < a.length)) {
          var c;
          if (2 < a.length) {
            if (!Pa(a[2]) && void 0 != a[2]) return;
            c = a[2];
          }
          var d = $f(b, c);
          var e;
          var g = c,
            h = Dd("gtag.fields.send_to", 2);
          f(h) ? I("GTM", 37) : (h = H.Da);
          var k = g && g[h];
          void 0 === k && ((k = Dd(h, 2)), void 0 === k && (k = "default"));
          if (f(k) || ua(k)) {
            for (
              var l = k
                  .toString()
                  .replace(/\s+/g, "")
                  .split(","),
                m = [],
                n = 0;
              n < l.length;
              n++
            )
              0 <= l[n].indexOf("-")
                ? m.push(l[n])
                : (m = m.concat(Xf[l[n]] || []));
            e = Mc(m);
          } else e = void 0;
          var q = e;
          if (!q) return;
          var u = ag();
          u || dg();
          for (var p = [], t = 0; u && t < q.length; t++) {
            var v = q[t];
            eg(v);
            if (Vf && -1 !== r(Uf, v.prefix)) {
              var w = C(c);
              "G" === v.prefix && (w[H.na] = !0);
              Cf(b, w, v.id);
            } else bg(v);
            p.push(v.id);
          }
          C(c, { event: b });
          d.eventModel = d.eventModel || {};
          0 < q.length
            ? (d.eventModel[H.Da] = p.join())
            : delete d.eventModel[H.Da];
          return d;
        }
      },
      js: function(a) {
        if (2 == a.length && a[1].getTime)
          return { event: "gtm.js", "gtm.start": a[1].getTime() };
      },
      policy: function(a) {
        3 === a.length && (void 0).xh().h(a[1], a[2]);
      },
      set: function(a) {
        var b;
        2 == a.length && Pa(a[1])
          ? (b = C(a[1]))
          : 3 == a.length &&
            f(a[1]) &&
            ((b = {}),
            Pa(a[2]) || ua(a[2]) ? (b[a[1]] = C(a[2])) : (b[a[1]] = a[2]));
        if (b) {
          if (ag()) {
            var c = C(b);
            zf().push("set", [c]);
          }
          C(b);
          b._clear = !0;
          return b;
        }
      }
    },
    gg = { policy: !0 };
  var hg = function(a, b) {
      var c = a.hide;
      if (c && void 0 !== c[b] && c.end) {
        c[b] = !1;
        var d = !0,
          e;
        for (e in c)
          if (c.hasOwnProperty(e) && !0 === c[e]) {
            d = !1;
            break;
          }
        d && (c.end(), (c.end = null));
      }
    },
    jg = function(a) {
      var b = ig(),
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var wg = function(a) {
    if (vg(a)) return a;
    this.h = a;
  };
  wg.prototype.Jf = function() {
    return this.h;
  };
  var vg = function(a) {
    return !a || "object" !== Na(a) || Pa(a)
      ? !1
      : "getUntrustedUpdateValue" in a;
  };
  wg.prototype.getUntrustedUpdateValue = wg.prototype.Jf;
  var xg = !1,
    yg = [];
  function zg() {
    if (!xg) {
      xg = !0;
      for (var a = 0; a < yg.length; a++) G(yg[a]);
    }
  }
  var Ag = function(a) {
    xg ? G(a) : yg.push(a);
  };
  var Bg = [],
    Cg = !1,
    Dg = function(a) {
      return D["dataLayer"].push(a);
    },
    Eg = function(a) {
      var b = Oc["dataLayer"],
        c = b ? b.subscribers : 1,
        d = 0;
      return function() {
        ++d === c && a();
      };
    };
  function Fg(a) {
    var b = a._clear;
    za(a, function(g, h) {
      "_clear" !== g && (b && Jd(g, void 0), Jd(g, h));
    });
    Tc || (Tc = a["gtm.start"]);
    var c = a.event;
    if (!c) return !1;
    var d = a["gtm.uniqueEventId"];
    d || ((d = Zc()), (a["gtm.uniqueEventId"] = d), Jd("gtm.uniqueEventId", d));
    Vc = c;
    var e = Gg(a);
    Vc = null;
    switch (c) {
      case "gtm.init":
        I("GTM", 19), e && I("GTM", 20);
    }
    return e;
  }
  function Gg(a) {
    var b = a.event,
      c = a["gtm.uniqueEventId"],
      d,
      e = Oc.zones;
    d = e ? e.checkState(Nc.s, c) : ie;
    return d.active
      ? ff(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout)
        ? !0
        : !1
      : !1;
  }
  function Hg() {
    for (var a = !1; !Cg && 0 < Bg.length; ) {
      Cg = !0;
      delete Ad.eventModel;
      Cd();
      var b = Bg.shift();
      if (null != b) {
        var c = vg(b);
        if (c) {
          var d = b;
          b = vg(d) ? d.getUntrustedUpdateValue() : void 0;
          for (
            var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"],
              g = 0;
            g < e.length;
            g++
          ) {
            var h = e[g],
              k = Dd(h, 1);
            if (ua(k) || Pa(k)) k = C(k);
            Bd[h] = k;
          }
        }
        try {
          if (qa(b))
            try {
              b.call(Ed);
            } catch (v) {}
          else if (ua(b)) {
            var l = b;
            if (f(l[0])) {
              var m = l[0].split("."),
                n = m.pop(),
                q = l.slice(1),
                u = Dd(m.join("."), 2);
              if (void 0 !== u && null !== u)
                try {
                  u[n].apply(u, q);
                } catch (v) {}
            }
          } else {
            var p = b;
            if (
              p &&
              ("[object Arguments]" == Object.prototype.toString.call(p) ||
                Object.prototype.hasOwnProperty.call(p, "callee"))
            ) {
              a: {
                if (b.length && f(b[0])) {
                  var t = fg[b[0]];
                  if (t && (!c || !gg[b[0]])) {
                    b = t(b);
                    break a;
                  }
                }
                b = void 0;
              }
              if (!b) {
                Cg = !1;
                continue;
              }
            }
            a = Fg(b) || a;
          }
        } finally {
          c && Cd(!0);
        }
      }
      Cg = !1;
    }
    return !a;
  }
  function Ig() {
    var a = Hg();
    try {
      hg(D["dataLayer"], Nc.s);
    } catch (b) {}
    return a;
  }
  var Kg = function() {
      var a = ac("dataLayer", []),
        b = ac("google_tag_manager", {});
      b = b["dataLayer"] = b["dataLayer"] || {};
      qe(function() {
        b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
      });
      Ag(function() {
        b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
      });
      b.subscribers = (b.subscribers || 0) + 1;
      var c = a.push;
      a.push = function() {
        var d;
        if (0 < Oc.SANDBOXED_JS_SEMAPHORE) {
          d = [];
          for (var e = 0; e < arguments.length; e++)
            d[e] = new wg(arguments[e]);
        } else d = [].slice.call(arguments, 0);
        var g = c.apply(a, d);
        Bg.push.apply(Bg, d);
        if (300 < this.length)
          for (I("GTM", 4); 300 < this.length; ) this.shift();
        var h = "boolean" !== typeof g || g;
        return Hg() && h;
      };
      Bg.push.apply(Bg, a.slice(0));
      Jg() && G(Ig);
    },
    Jg = function() {
      var a = !0;
      return a;
    };
  var Lg = {};
  Lg.pb = new String("undefined");
  var Mg = function(a) {
    this.h = function(b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d] === Lg.pb ? b : a[d]);
      return c.join("");
    };
  };
  Mg.prototype.toString = function() {
    return this.h("undefined");
  };
  Mg.prototype.valueOf = Mg.prototype.toString;
  Lg.Me = Mg;
  Lg.nc = {};
  Lg.tf = function(a) {
    return new Mg(a);
  };
  var Ng = {};
  Lg.Kg = function(a, b) {
    var c = Zc();
    Ng[c] = [a, b];
    return c;
  };
  Lg.Wd = function(a) {
    var b = a ? 0 : 1;
    return function(c) {
      var d = Ng[c];
      if (d && "function" === typeof d[b]) d[b]();
      Ng[c] = void 0;
    };
  };
  Lg.ag = function(a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++)
      (b = b || 8 === a[d]), (c = c || 16 === a[d]);
    return b && c;
  };
  Lg.Ag = function(a) {
    if (a === Lg.pb) return a;
    var b = Zc();
    Lg.nc[b] = a;
    return 'google_tag_manager["' + Nc.s + '"].macro(' + b + ")";
  };
  Lg.ng = function(a, b, c) {
    a instanceof Lg.Me && ((a = a.h(Lg.Kg(b, c))), (b = pa));
    return { Bc: a, B: b };
  };
  var Og = function(a, b, c) {
      function d(g, h) {
        var k = g[h];
        return k;
      }
      var e = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": d(a, "className"),
        "gtm.elementId": a["for"] || ic(a, "id") || "",
        "gtm.elementTarget": a.formTarget || d(a, "target") || ""
      };
      c && (e["gtm.triggers"] = c.join(","));
      e["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        d(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return e;
    },
    Pg = function(a) {
      Oc.hasOwnProperty("autoEventsSettings") || (Oc.autoEventsSettings = {});
      var b = Oc.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    Qg = function(a, b, c) {
      Pg(a)[b] = c;
    },
    Rg = function(a, b, c, d) {
      var e = Pg(a),
        g = Ga(e, b, d);
      e[b] = c(g);
    },
    Sg = function(a, b, c) {
      var d = Pg(a);
      return Ga(d, b, c);
    };
  var Tg = function() {
      for (
        var a = Zb.userAgent + (F.cookie || "") + (F.referrer || ""),
          b = a.length,
          c = D.history.length;
        0 < c;

      )
        a += c-- ^ b++;
      var d = 1,
        e,
        g,
        h;
      if (a)
        for (d = 0, g = a.length - 1; 0 <= g; g--)
          (h = a.charCodeAt(g)),
            (d = ((d << 6) & 268435455) + h + (h << 14)),
            (e = d & 266338304),
            (d = 0 != e ? d ^ (e >> 21) : d);
      return [
        Math.round(2147483647 * Math.random()) ^ (d & 2147483647),
        Math.round(Fa() / 1e3)
      ].join(".");
    },
    Wg = function(a, b, c, d) {
      var e = Ug(b);
      return Mf(a, e, Vg(c), d);
    },
    Xg = function(a, b, c, d) {
      var e = "" + Ug(c),
        g = Vg(d);
      1 < g && (e += "-" + g);
      return [b, e, a].join(".");
    },
    Ug = function(a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Vg = function(a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    };
  var Yg = ["1"],
    Zg = {},
    ch = function(a, b, c, d) {
      var e = $g(a);
      Zg[e] || ah(e, b, c) || (bh(e, Tg(), b, c, d), ah(e, b, c));
    };
  function bh(a, b, c, d, e) {
    var g = Xg(b, "1", d, c);
    Rf(
      a,
      g,
      c,
      d,
      0 == e ? void 0 : new Date(Fa() + 1e3 * (void 0 == e ? 7776e3 : e))
    );
  }
  function ah(a, b, c) {
    var d = Wg(a, b, c, Yg);
    d && (Zg[a] = d);
    return d;
  }
  function $g(a) {
    return (a || "_gcl") + "_au";
  }
  var dh = function() {
    for (
      var a = [],
        b = F.cookie.split(";"),
        c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,
        d = 0;
      d < b.length;
      d++
    ) {
      var e = b[d].match(c);
      e && a.push({ $c: e[1], value: e[2] });
    }
    var g = {};
    if (!a || !a.length) return g;
    for (var h = 0; h < a.length; h++) {
      var k = a[h].value.split(".");
      "1" == k[0] &&
        3 == k.length &&
        k[1] &&
        (g[a[h].$c] || (g[a[h].$c] = []),
        g[a[h].$c].push({ timestamp: k[1], Gf: k[2] }));
    }
    return g;
  };
  function eh() {
    for (var a = fh, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function gh() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var fh, hh;
  function ih(a) {
    fh = fh || gh();
    hh = hh || eh();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        g = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        l = g >> 2,
        m = ((g & 3) << 4) | (h >> 4),
        n = ((h & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (n = 64));
      b.push(fh[l], fh[m], fh[n], fh[q]);
    }
    return b.join("");
  }
  function jh(a) {
    function b(l) {
      for (; d < a.length; ) {
        var m = a.charAt(d++),
          n = hh[m];
        if (null != n) return n;
        if (!/^[\s\xa0]*$/.test(m))
          throw Error("Unknown base64 encoding at char: " + m);
      }
      return l;
    }
    fh = fh || gh();
    hh = hh || eh();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        g = b(0),
        h = b(64),
        k = b(64);
      if (64 === k && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (g >> 4));
      64 != h &&
        ((c += String.fromCharCode(((g << 4) & 240) | (h >> 2))),
        64 != k && (c += String.fromCharCode(((h << 6) & 192) | k)));
    }
  }
  var kh;
  function lh(a, b) {
    if (!a || b === F.location.hostname) return !1;
    for (var c = 0; c < a.length; c++)
      if (a[c] instanceof RegExp) {
        if (a[c].test(b)) return !0;
      } else if (0 <= b.indexOf(a[c])) return !0;
    return !1;
  }
  var ph = function() {
      var a = mh,
        b = nh,
        c = oh(),
        d = function(h) {
          a(h.target || h.srcElement || {});
        },
        e = function(h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        gc(F, "mousedown", d);
        gc(F, "keyup", d);
        gc(F, "submit", e);
        var g = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function() {
          b(this);
          g.call(this);
        };
        c.init = !0;
      }
    },
    oh = function() {
      var a = ac("google_tag_data", {}),
        b = a.gl;
      (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
      return b;
    };
  var qh = /(.*?)\*(.*?)\*(.*)/,
    rh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    sh = /^(?:www\.|m\.|amp\.)+/,
    th = /([^?#]+)(\?[^#]*)?(#.*)?/,
    uh = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
    wh = function(a) {
      var b = [],
        c;
      for (c in a)
        if (a.hasOwnProperty(c)) {
          var d = a[c];
          void 0 !== d &&
            d === d &&
            null !== d &&
            "[object Object]" !== d.toString() &&
            (b.push(c), b.push(ih(String(d))));
        }
      var e = b.join("*");
      return ["1", vh(e), e].join("*");
    },
    vh = function(a, b) {
      var c = [
          window.navigator.userAgent,
          new Date().getTimezoneOffset(),
          window.navigator.userLanguage || window.navigator.language,
          Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
          a
        ].join("*"),
        d;
      if (!(d = kh)) {
        for (var e = Array(256), g = 0; 256 > g; g++) {
          for (var h = g, k = 0; 8 > k; k++)
            h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
          e[g] = h;
        }
        d = e;
      }
      kh = d;
      for (var l = 4294967295, m = 0; m < c.length; m++)
        l = (l >>> 8) ^ kh[(l ^ c.charCodeAt(m)) & 255];
      return ((l ^ -1) >>> 0).toString(36);
    },
    yh = function() {
      return function(a) {
        var b = Re(D.location.href),
          c = b.search.replace("?", ""),
          d = Ne(c, "_gl", !0) || "";
        a.query = xh(d) || {};
        var e = Qe(b, "fragment").match(uh);
        a.fragment = xh((e && e[3]) || "") || {};
      };
    },
    zh = function() {
      var a = yh(),
        b = oh();
      b.data || ((b.data = { query: {}, fragment: {} }), a(b.data));
      var c = {},
        d = b.data;
      d && (Ia(c, d.query), Ia(c, d.fragment));
      return c;
    },
    xh = function(a) {
      var b;
      b = void 0 === b ? 3 : b;
      try {
        if (a) {
          var c;
          a: {
            for (var d = a, e = 0; 3 > e; ++e) {
              var g = qh.exec(d);
              if (g) {
                c = g;
                break a;
              }
              d = decodeURIComponent(d);
            }
            c = void 0;
          }
          var h = c;
          if (h && "1" === h[1]) {
            var k = h[3],
              l;
            a: {
              for (var m = h[2], n = 0; n < b; ++n)
                if (m === vh(k, n)) {
                  l = !0;
                  break a;
                }
              l = !1;
            }
            if (l) {
              for (
                var q = {}, u = k ? k.split("*") : [], p = 0;
                p < u.length;
                p += 2
              )
                q[u[p]] = jh(u[p + 1]);
              return q;
            }
          }
        }
      } catch (t) {}
    };
  function Ah(a, b, c) {
    function d(m) {
      var n = m,
        q = uh.exec(n),
        u = n;
      if (q) {
        var p = q[2],
          t = q[4];
        u = q[1];
        t && (u = u + p + t);
      }
      m = u;
      var v = m.charAt(m.length - 1);
      m && "&" !== v && (m += "&");
      return m + l;
    }
    c = void 0 === c ? !1 : c;
    var e = th.exec(b);
    if (!e) return "";
    var g = e[1],
      h = e[2] || "",
      k = e[3] || "",
      l = "_gl=" + a;
    c ? (k = "#" + d(k.substring(1))) : (h = "?" + d(h.substring(1)));
    return "" + g + h + k;
  }
  function Bh(a, b, c) {
    for (var d = {}, e = {}, g = oh().decorators, h = 0; h < g.length; ++h) {
      var k = g[h];
      (!c || k.forms) &&
        lh(k.domains, b) &&
        (k.fragment ? Ia(e, k.callback()) : Ia(d, k.callback()));
    }
    if (Ja(d)) {
      var l = wh(d);
      if (c) {
        if (a && a.action) {
          var m = (a.method || "").toLowerCase();
          if ("get" === m) {
            for (var n = a.childNodes || [], q = !1, u = 0; u < n.length; u++) {
              var p = n[u];
              if ("_gl" === p.name) {
                p.setAttribute("value", l);
                q = !0;
                break;
              }
            }
            if (!q) {
              var t = F.createElement("input");
              t.setAttribute("type", "hidden");
              t.setAttribute("name", "_gl");
              t.setAttribute("value", l);
              a.appendChild(t);
            }
          } else if ("post" === m) {
            var v = Ah(l, a.action);
            Le.test(v) && (a.action = v);
          }
        }
      } else Ch(l, a, !1);
    }
    if (!c && Ja(e)) {
      var w = wh(e);
      Ch(w, a, !0);
    }
  }
  function Ch(a, b, c) {
    if (b.href) {
      var d = Ah(a, b.href, void 0 === c ? !1 : c);
      Le.test(d) && (b.href = d);
    }
  }
  var mh = function(a) {
      try {
        var b;
        a: {
          for (var c = a, d = 100; c && 0 < d; ) {
            if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
              b = c;
              break a;
            }
            c = c.parentNode;
            d--;
          }
          b = null;
        }
        var e = b;
        if (e) {
          var g = e.protocol;
          ("http:" !== g && "https:" !== g) || Bh(e, e.hostname, !1);
        }
      } catch (h) {}
    },
    nh = function(a) {
      try {
        if (a.action) {
          var b = Qe(Re(a.action), "host");
          Bh(a, b, !0);
        }
      } catch (c) {}
    },
    Dh = function(a, b, c, d) {
      ph();
      var e = {
        callback: a,
        domains: b,
        fragment: "fragment" === c,
        forms: !!d
      };
      oh().decorators.push(e);
    },
    Eh = function() {
      var a = F.location.hostname,
        b = rh.exec(F.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var g = c.split("/"),
          h = g[1];
        e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var k = a.replace(sh, ""),
        l = e.replace(sh, ""),
        m;
      if (!(m = k === l)) {
        var n = "." + l;
        m = k.substring(k.length - n.length, k.length) === n;
      }
      return m;
    },
    Fh = function(a, b) {
      return !1 === a ? !1 : a || b || Eh();
    };
  var Gh = {};
  var Hh = /^\w+$/,
    Ih = /^[\w-]+$/,
    Jh = /^~?[\w-]+$/,
    Kh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp" };
  function Lh(a) {
    return a && "string" == typeof a && a.match(Hh) ? a : "_gcl";
  }
  var Nh = function() {
    var a = Re(D.location.href),
      b = Qe(a, "query", !1, void 0, "gclid"),
      c = Qe(a, "query", !1, void 0, "gclsrc"),
      d = Qe(a, "query", !1, void 0, "dclid");
    if (!b || !c) {
      var e = a.hash.replace("#", "");
      b = b || Ne(e, "gclid", void 0);
      c = c || Ne(e, "gclsrc", void 0);
    }
    return Mh(b, c, d);
  };
  function Mh(a, b, c) {
    var d = {},
      e = function(g, h) {
        d[h] || (d[h] = []);
        d[h].push(g);
      };
    if (void 0 !== a && a.match(Ih))
      switch (b) {
        case void 0:
          e(a, "aw");
          break;
        case "aw.ds":
          e(a, "aw");
          e(a, "dc");
          break;
        case "ds":
          e(a, "dc");
          break;
        case "3p.ds":
          (void 0 == Gh.gtm_3pds ? 0 : Gh.gtm_3pds) && e(a, "dc");
          break;
        case "gf":
          e(a, "gf");
          break;
        case "ha":
          e(a, "ha");
          break;
        case "gp":
          e(a, "gp");
      }
    c && e(c, "dc");
    return d;
  }
  var Ph = function(a) {
    var b = Nh();
    Oh(b, a);
  };
  function Oh(a, b, c) {
    function d(q, u) {
      var p = Qh(q, e);
      p && Rf(p, u, h, g, l, !0);
    }
    b = b || {};
    var e = Lh(b.prefix),
      g = b.domain || "auto",
      h = b.path || "/",
      k = void 0 == b.Ja ? 7776e3 : b.Ja;
    c = c || Fa();
    var l = 0 == k ? void 0 : new Date(c + 1e3 * k),
      m = Math.round(c / 1e3),
      n = function(q) {
        return ["GCL", m, q].join(".");
      };
    a.aw && (!0 === b.Ih ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
    a.dc && d("dc", n(a.dc[0]));
    a.gf && d("gf", n(a.gf[0]));
    a.ha && d("ha", n(a.ha[0]));
    a.gp && d("gp", n(a.gp[0]));
  }
  var Sh = function(a, b, c, d, e) {
      for (var g = zh(), h = Lh(b), k = 0; k < a.length; ++k) {
        var l = a[k];
        if (void 0 !== Kh[l]) {
          var m = Qh(l, h),
            n = g[m];
          if (n) {
            var q = Math.min(Rh(n), Fa()),
              u;
            b: {
              for (var p = q, t = Jf(m, F.cookie), v = 0; v < t.length; ++v)
                if (Rh(t[v]) > p) {
                  u = !0;
                  break b;
                }
              u = !1;
            }
            u ||
              Rf(
                m,
                n,
                c,
                d,
                0 == e ? void 0 : new Date(q + 1e3 * (null == e ? 7776e3 : e)),
                !0
              );
          }
        }
      }
      var w = { prefix: b, path: c, domain: d };
      Oh(Mh(g.gclid, g.gclsrc), w);
    },
    Qh = function(a, b) {
      var c = Kh[a];
      if (void 0 !== c) return b + c;
    },
    Rh = function(a) {
      var b = a.split(".");
      return 3 !== b.length || "GCL" !== b[0] ? 0 : 1e3 * (Number(b[1]) || 0);
    };
  function Th(a) {
    var b = a.split(".");
    if (3 == b.length && "GCL" == b[0] && b[1]) return b[2];
  }
  var Uh = function(a, b, c, d, e) {
      if (ua(b)) {
        var g = Lh(e);
        Dh(
          function() {
            for (var h = {}, k = 0; k < a.length; ++k) {
              var l = Qh(a[k], g);
              if (l) {
                var m = Jf(l, F.cookie);
                m.length && (h[l] = m.sort()[m.length - 1]);
              }
            }
            return h;
          },
          b,
          c,
          d
        );
      }
    },
    Vh = function(a) {
      return a.filter(function(b) {
        return Jh.test(b);
      });
    },
    Wh = function(a, b) {
      for (var c = Lh(b && b.prefix), d = {}, e = 0; e < a.length; e++)
        Kh[a[e]] && (d[a[e]] = Kh[a[e]]);
      za(d, function(g, h) {
        var k = Jf(c + h, F.cookie);
        if (k.length) {
          var l = k[0],
            m = Rh(l),
            n = {};
          n[g] = [Th(l)];
          Oh(n, b, m);
        }
      });
    };
  var Xh = /^\d+\.fls\.doubleclick\.net$/;
  function Yh(a) {
    var b = Re(D.location.href),
      c = Qe(b, "host", !1);
    if (c && c.match(Xh)) {
      var d = Qe(b, "path").split(a + "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0];
    }
  }
  function Zh(a, b) {
    if ("aw" == a || "dc" == a) {
      var c = Yh("gcl" + a);
      if (c) return c.split(".");
    }
    var d = Lh(b);
    if ("_gcl" == d) {
      var e;
      e = Nh()[a] || [];
      if (0 < e.length) return e;
    }
    var g = Qh(a, d),
      h;
    if (g) {
      var k = [];
      if (F.cookie) {
        var l = Jf(g, F.cookie);
        if (l && 0 != l.length) {
          for (var m = 0; m < l.length; m++) {
            var n = Th(l[m]);
            n && -1 === r(k, n) && k.push(n);
          }
          h = Vh(k);
        } else h = k;
      } else h = k;
    } else h = [];
    return h;
  }
  var $h = function() {
      var a = Yh("gac");
      if (a) return decodeURIComponent(a);
      var b = dh(),
        c = [];
      za(b, function(d, e) {
        for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Gf);
        g = Vh(g);
        g.length && c.push(d + ":" + g.join(","));
      });
      return c.join(";");
    },
    ai = function(a, b, c, d, e) {
      ch(b, c, d, e);
      var g = Zg[$g(b)],
        h = Nh().dc || [],
        k = !1;
      if (g && 0 < h.length) {
        var l = (Oc.joined_au = Oc.joined_au || {}),
          m = b || "_gcl";
        if (!l[m])
          for (var n = 0; n < h.length; n++) {
            var q = "https://adservice.google.com/ddm/regclk",
              u = (q = q + "?gclid=" + h[n] + "&auiddc=" + g);
            (Zb.sendBeacon && Zb.sendBeacon(u)) || fc(u);
            k = l[m] = !0;
          }
      }
      null == a && (a = k);
      if (a && g) {
        var p = $g(b),
          t = Zg[p];
        t && bh(p, t, c, d, e);
      }
    };
  var bi;
  if (3 === Nc.tb.length) bi = "g";
  else {
    var ci = "G";
    ci = "g";
    bi = ci;
  }
  var di = {
      "": "n",
      UA: "u",
      AW: "a",
      DC: "d",
      G: "e",
      GF: "f",
      HA: "h",
      GTM: bi,
      OPT: "o"
    },
    ei = function(a) {
      var b = Nc.s.split("-"),
        c = b[0].toUpperCase(),
        d = di[c] || "i",
        e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
        g;
      if (3 === Nc.tb.length) {
        var h = void 0;
        h = h || (Md() ? "s" : "o");
        g = "2" + (h || "w");
      } else g = "";
      return g + d + Nc.tb + e;
    };
  var fi = function(a) {
      return !(void 0 === a || null === a || 0 === (a + "").length);
    },
    gi = function(a, b) {
      var c;
      if (2 === b.V) return a("ord", wa(1e11, 1e13)), !0;
      if (3 === b.V) return a("ord", "1"), a("num", wa(1e11, 1e13)), !0;
      if (4 === b.V) return fi(b.sessionId) && a("ord", b.sessionId), !0;
      if (5 === b.V) c = "1";
      else if (6 === b.V) c = b.Uc;
      else return !1;
      fi(c) && a("qty", c);
      fi(b.Eb) && a("cost", b.Eb);
      fi(b.transactionId) && a("ord", b.transactionId);
      return !0;
    },
    hi = encodeURIComponent,
    ii = function(a, b) {
      function c(n, q, u) {
        g.hasOwnProperty(n) ||
          ((q += ""), (e += ";" + n + "=" + (u ? q : hi(q))));
      }
      var d = a.xc,
        e = a.protocol;
      e += a.Tb
        ? "//" + d + ".fls.doubleclick.net/activityi"
        : "//ad.doubleclick.net/activity";
      e += ";src=" + hi(d) + (";type=" + hi(a.zc)) + (";cat=" + hi(a.$a));
      var g = a.vf || {};
      za(g, function(n, q) {
        e += ";" + hi(n) + "=" + hi(q + "");
      });
      if (gi(c, a)) {
        fi(a.Zb) && c("u", a.Zb);
        fi(a.Yb) && c("tran", a.Yb);
        c("gtm", ei());
        !1 === a.We && c("npa", "1");
        if (a.wc) {
          var h = Zh("dc", a.Ea);
          h && h.length && c("gcldc", h.join("."));
          var k = Zh("aw", a.Ea);
          k && k.length && c("gclaw", k.join("."));
          var l = $h();
          l && c("gac", l);
          ch(a.Ea, void 0, a.rf, a.sf);
          var m = Zg[$g(a.Ea)];
          m && c("auiddc", m);
        }
        fi(a.Pc) && c("prd", a.Pc, !0);
        za(a.bd, function(n, q) {
          c(n, q);
        });
        e += b || "";
        fi(a.Pb) && c("~oref", a.Pb);
        a.Tb ? ec(e + "?", a.B) : fc(e + "?", a.B, a.w);
      } else G(a.w);
    };
  var ji = ["input", "select", "textarea"],
    ki = ["button", "hidden", "image", "reset", "submit"],
    li = function(a) {
      var b = a.tagName.toLowerCase();
      return !va(ji, function(c) {
        return c === b;
      }) ||
        ("input" === b &&
          va(ki, function(c) {
            return c === a.type.toLowerCase();
          }))
        ? !1
        : !0;
    },
    mi = function(a) {
      return a.form
        ? a.form.tagName
          ? a.form
          : F.getElementById(a.form)
        : lc(a, ["form"], 100);
    },
    ni = function(a, b, c) {
      if (!a.elements) return 0;
      for (
        var d = b.getAttribute(c), e = 0, g = 1;
        e < a.elements.length;
        e++
      ) {
        var h = a.elements[e];
        if (li(h)) {
          if (h.getAttribute(c) === d) return g;
          g++;
        }
      }
      return 0;
    };
  var pi = function(a) {
      var b;
      if (a.hasOwnProperty("conversion_data")) b = "conversion_data";
      else if (a.hasOwnProperty("price")) b = "price";
      else return;
      var c = b,
        d = "/pagead/conversion/" + oi(a.conversion_id) + "/?",
        e = oi(JSON.stringify(a[c])),
        g =
          "https://www.googletraveladservices.com/travel/flights/clk" +
          d +
          c +
          "=" +
          e;
      if (a.conversionLinkerEnabled) {
        var h = Zh("gf", a.cookiePrefix);
        if (h && h.length)
          for (var k = 0; k < h.length; k++) g += "&gclgf=" + oi(h[k]);
      }
      fc(g, a.onSuccess, a.onFailure);
    },
    oi = function(a) {
      return null === a || void 0 === a || 0 === String(a).length
        ? ""
        : encodeURIComponent(String(a));
    };
  var qi = !!D.MutationObserver,
    ri = void 0,
    si = function(a) {
      if (!ri) {
        var b = function() {
          var c = F.body;
          if (c)
            if (qi)
              new MutationObserver(function() {
                for (var e = 0; e < ri.length; e++) G(ri[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              gc(c, "DOMNodeInserted", function() {
                d ||
                  ((d = !0),
                  G(function() {
                    d = !1;
                    for (var e = 0; e < ri.length; e++) G(ri[e]);
                  }));
              });
            }
        };
        ri = [];
        F.body ? b() : G(b);
      }
      ri.push(a);
    };
  var Oi = D.clearTimeout,
    Pi = D.setTimeout,
    R = function(a, b, c) {
      if (Md()) {
        b && G(b);
      } else return cc(a, b, c);
    },
    Qi = function() {
      return D.location.href;
    },
    Ri = function(a) {
      return Qe(Re(a), "fragment");
    },
    Si = function(a) {
      return Pe(Re(a));
    },
    W = function(a, b) {
      return Dd(a, b || 2);
    },
    Ti = function(a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Dg(a)))
        : (d = Dg(a));
      return d;
    },
    Ui = function(a, b) {
      D[a] = b;
    },
    X = function(a, b, c) {
      b && (void 0 === D[a] || (c && !D[a])) && (D[a] = b);
      return D[a];
    },
    Vi = function(a, b, c) {
      return Jf(a, b, void 0 === c ? !0 : !!c);
    },
    Wi = function(a, b) {
      if (Md()) {
        b && G(b);
      } else ec(a, b);
    },
    Xi = function(a) {
      return !!Sg(a, "init", !1);
    },
    Yi = function(a) {
      Qg(a, "init", !0);
    },
    Zi = function(a, b) {
      var c = (void 0 === b ? 0 : b) ? "www.googletagmanager.com/gtag/js" : Sc;
      c += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
      R(Q("https://", "http://", c));
    },
    $i = function(a, b) {
      var c = a[b];
      return c;
    };
  var aj = Lg.ng;
  var bj;
  var yj = new xa();
  function zj(a, b) {
    function c(h) {
      var k = Re(h),
        l = Qe(k, "protocol"),
        m = Qe(k, "host", !0),
        n = Qe(k, "port"),
        q = Qe(k, "path")
          .toLowerCase()
          .replace(/\/$/, "");
      if (
        void 0 === l ||
        ("http" == l && "80" == n) ||
        ("https" == l && "443" == n)
      )
        (l = "web"), (n = "default");
      return [l, m, n, q];
    }
    for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
      if (d[g] !== e[g]) return !1;
    return !0;
  }
  function Aj(a) {
    return Bj(a) ? 1 : 0;
  }
  function Bj(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && ua(c)) {
      for (var d = 0; d < c.length; d++)
        if (Aj({ function: a["function"], arg0: b, arg1: c[d] })) return !0;
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var e;
        a: {
          if (b) {
            var g = [
              "matches",
              "webkitMatchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector"
            ];
            try {
              for (var h = 0; h < g.length; h++)
                if (b[g[h]]) {
                  e = b[g[h]](c);
                  break a;
                }
            } catch (v) {}
          }
          e = !1;
        }
        return e;
      case "_ew":
        var k, l;
        k = String(b);
        l = String(c);
        var m = k.length - l.length;
        return 0 <= m && k.indexOf(l, m) == m;
      case "_eq":
        return String(b) == String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        var n;
        n = String(b).split(",");
        return 0 <= r(n, String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var u = a.ignore_case ? "i" : void 0;
        try {
          var p = String(c) + u,
            t = yj.get(p);
          t || ((t = new RegExp(c, u)), yj.set(p, t));
          q = t.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 == String(b).indexOf(String(c));
      case "_um":
        return zj(b, c);
    }
    return !1;
  }
  var Cj = function(a, b) {
    var c = function() {};
    c.prototype = a.prototype;
    var d = new c();
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d;
  };
  var Dj = {},
    Ej = encodeURI,
    Y = encodeURIComponent,
    Fj = fc;
  var Gj = function(a, b) {
    if (!a) return !1;
    var c = Qe(Re(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var g = c.length - e.length;
        0 < g && "." != e.charAt(0) && (g--, (e = "." + e));
        if (0 <= g && c.indexOf(e, g) == g) return !0;
      }
    }
    return !1;
  };
  var Hj = function(a, b, c) {
    for (var d = {}, e = !1, g = 0; a && g < a.length; g++)
      a[g] &&
        a[g].hasOwnProperty(b) &&
        a[g].hasOwnProperty(c) &&
        ((d[a[g][b]] = a[g][c]), (e = !0));
    return e ? d : null;
  };
  Dj.bg = function() {
    var a = !1;
    return a;
  };
  var Uk = function() {
    var a = (D.gaGlobal = D.gaGlobal || {});
    a.hid = a.hid || wa();
    return a.hid;
  };
  var el = window,
    fl = document,
    gl = function(a) {
      var b = el._gaUserPrefs;
      if ((b && b.ioo && b.ioo()) || (a && !0 === el["ga-disable-" + a]))
        return !0;
      try {
        var c = el.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (g) {}
      for (var d = Jf("AMP_TOKEN", fl.cookie, !0), e = 0; e < d.length; e++)
        if ("$OPT_OUT" == d[e]) return !0;
      return fl.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  var jl = function(a) {
    za(a, function(c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[H.ba] || {};
    za(b, function(c) {
      "_" === c.charAt(0) && delete b[c];
    });
  };
  var nl = function(a, b, c) {
      Cf(b, c, a);
    },
    ol = function(a, b, c) {
      Cf(b, c, a, !0);
    },
    ql = function(a, b) {};
  function pl(a, b) {}
  var rl = function(a) {
      var b = lf(a, "/2");
      return b
        ? b
        : -1 === navigator.userAgent.toLowerCase().indexOf("firefox")
        ? Q(
            "https://",
            "http://",
            "www.googleadservices.com/pagead/conversion_async.js"
          )
        : "https://www.google.com/pagead/conversion_async.js";
    },
    sl = !1,
    tl = [],
    ul = ["aw", "dc"],
    vl = function(a) {
      var b = D.google_trackConversion,
        c = a.gtm_onFailure;
      "function" == typeof b ? b(a) || c() : c();
    },
    wl = function() {
      for (; 0 < tl.length; ) vl(tl.shift());
    },
    xl = function(a) {
      if (!sl) {
        sl = !0;
        ze();
        var b = function() {
          wl();
          tl = { push: vl };
        };
        Md()
          ? b()
          : cc(a, b, function() {
              wl();
              sl = !1;
            });
      }
    },
    yl = function(a) {
      if (a) {
        for (var b = [], c = 0; c < a.length; ++c) {
          var d = a[c];
          d &&
            b.push({
              item_id: d.id,
              quantity: d.quantity,
              value: d.price,
              start_date: d.start_date,
              end_date: d.end_date
            });
        }
        return b;
      }
    },
    zl = function(a, b, c, d) {
      var e = Kc(a),
        g = b == H.D,
        h = e.m[0],
        k = e.m[1],
        l = void 0 !== k,
        m = function(V) {
          return d.getWithConfig(V);
        },
        n = !1 !== m(H.za),
        q = m(H.ya) || m(H.O),
        u = m(H.R),
        p = m(H.W),
        t = rl(m(H.ka));
      if (g) {
        var v = m(H.ma) || {};
        if (n) {
          Fh(v[H.Qa], !!v[H.C]) && Sh(ul, q, void 0, u, p);
          var w = { prefix: q, domain: u, Ja: p };
          Ph(w);
          Wh(["aw", "dc"], w);
        }
        v[H.C] && Uh(ul, v[H.C], v[H.Sa], !!v[H.Ra], q);
        var y = !1;
        y ? Zd(e, d) : Zd(e);
      }
      var x = !1 === m(H.vd) || !1 === m(H.Wa);
      if (!g || (!l && !x))
        if ((!0 === m(H.wd) && (l = !1), !1 !== m(H.T) || l)) {
          var z = {
            google_conversion_id: h,
            google_remarketing_only: !l,
            onload_callback: d.B,
            gtm_onFailure: d.w,
            google_conversion_format: "3",
            google_conversion_color: "ffffff",
            google_conversion_domain: "",
            google_conversion_label: k,
            google_conversion_language: m(H.Ca),
            google_conversion_value: m(H.Y),
            google_conversion_currency: m(H.fa),
            google_conversion_order_id: m(H.Xa),
            google_user_id: m(H.Ya),
            google_conversion_page_url: m(H.Ta),
            google_conversion_referrer_url: m(H.Va),
            google_gtm: ei(),
            google_transport_url: lf(m(H.ka), "/")
          };
          Md() &&
            ((z.opt_image_generator = function() {
              return new Image();
            }),
            (z.google_enable_display_cookie_match = !1));
          !1 === m(H.T) && (z.google_allow_ad_personalization_signals = !1);
          z.google_read_gcl_cookie_opt_out = !n;
          n && q && (z.google_gcl_cookie_prefix = q);
          var B = (function() {
            var V = m(H.zb),
              S = { event: b };
            if (ua(V)) {
              I("GTM", 26);
              for (var na = 0; na < V.length; ++na) {
                var ha = V[na],
                  N = m(ha);
                void 0 !== N && (S[ha] = N);
              }
              return S;
            }
            var L = d.eventModel;
            if (!L) return null;
            C(L, S);
            for (var P = 0; P < H.td.length; ++P) delete S[H.td[P]];
            return S;
          })();
          B && (z.google_custom_params = B);
          !l &&
            m(H.X) &&
            (z.google_gtag_event_data = { items: m(H.X), value: m(H.Y) });
          if (l && b == H.la) {
            z.google_conversion_merchant_id = m(H.Bd);
            z.google_basket_feed_country = m(H.yd);
            z.google_basket_feed_language = m(H.zd);
            z.google_basket_discount = m(H.xd);
            z.google_basket_transaction_type = b;
            z.google_disable_merchant_reported_conversions = !0 === m(H.Dd);
            Md() && (z.google_disable_merchant_reported_conversions = !0);
            var A = yl(m(H.X));
            A && (z.google_conversion_items = A);
          }
          var E = function(V, S) {
            void 0 != S &&
              "" !== S &&
              ((z.google_additional_conversion_params =
                z.google_additional_conversion_params || {}),
              (z.google_additional_conversion_params[V] = S));
          };
          l &&
            ("boolean" === typeof m(H.hd) && E("vdnc", m(H.hd)),
            E("vdltv", m(H.Cd)));
          var J = !0;
          J && tl.push(z);
        }
      xl(t);
    };
  var Al = function(a, b, c, d, e, g) {
      var h = { config: a, gtm: ei() };
      c && (ch(d, void 0, e, g), (h.auiddc = Zg[$g(d)]));
      b && (h.loadInsecure = b);
      void 0 === D.__dc_ns_processor && (D.__dc_ns_processor = []);
      D.__dc_ns_processor.push(h);
      cc((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js");
    },
    Bl = function(a, b, c) {
      var d = /^u([1-9]\d?|100)$/,
        e = a.getWithConfig(H.qg) || {},
        g = Id(b, c);
      var h = {},
        k = {};
      if (Pa(e))
        for (var l in e)
          if (e.hasOwnProperty(l) && d.test(l)) {
            var m = e[l];
            f(m) && (h[l] = m);
          }
      for (var n = 0; n < g.length; n++) {
        var q = g[n];
        d.test(q) && (h[q] = q);
      }
      for (var u in h) h.hasOwnProperty(u) && (k[u] = a.getWithConfig(h[u]));
      return k;
    },
    Cl = function(a) {
      function b(l, m, n) {
        void 0 !== n &&
          0 !== (n + "").length &&
          d.push(l + m + ":" + c(n + ""));
      }
      var c = encodeURIComponent,
        d = [],
        e = a(H.X) || [];
      if (ua(e))
        for (var g = 0; g < e.length; g++) {
          var h = e[g],
            k = g + 1;
          b("i", k, h.id);
          b("p", k, h.price);
          b("q", k, h.quantity);
          b("c", k, a(H.og));
          b("l", k, a(H.Ca));
        }
      return d.join("|");
    },
    Dl = function(a) {
      var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
      if (b) {
        var c = {
          standard: 2,
          unique: 3,
          per_session: 4,
          transactions: 5,
          items_sold: 6,
          "": 1
        }[(b[5] || "").toLowerCase()];
        if (c)
          return {
            containerId: "DC-" + b[1],
            M: b[3] ? a : "",
            Qe: b[1],
            Pe: b[3] || "",
            $a: b[4] || "",
            V: c
          };
      }
    },
    Fl = function(a, b, c, d) {
      var e = Dl(a);
      if (e) {
        var g = function(M) {
            return d.getWithConfig(M);
          },
          h = !1 !== g(H.za),
          k = g(H.ya) || g(H.O),
          l = g(H.R),
          m = g(H.W),
          n = g(H.yg),
          q = 3 === Nd();
        if (b === H.D) {
          var u = g(H.ma) || {},
            p = g(H.Oa),
            t = void 0 === p ? !0 : !!p;
          if (h) {
            if (Fh(u[H.Qa], !!u[H.C])) {
              Sh(El, k, void 0, l, m);
            }
            var v = { prefix: k, domain: l, Ja: m };
            Ph(v);
            Wh(El, v);
            ai(t, k, void 0, l, m);
          }
          if (u[H.C]) {
            Uh(El, u[H.C], u[H.Sa], !!u[H.Ra], k);
          }
          if (n && n.exclusion_parameters && n.engines)
            if (Md()) {
            } else Al(n, q, h, k, l, m);
          G(d.B);
        } else {
          var w = {},
            y = g(H.sg);
          if (Pa(y))
            for (var x in y)
              if (y.hasOwnProperty(x)) {
                var z = y[x];
                void 0 !== z && null !== z && (w[x] = z);
              }
          var B = "";
          if (5 === e.V || 6 === e.V) B = Cl(g);
          var A = Bl(d, e.containerId, e.M),
            E = !0 === g(H.Uf);
          if (Md() && E) {
            E = !1;
          }
          var J = {
            $a: e.$a,
            wc: h,
            rf: l,
            sf: m,
            Ea: k,
            Eb: g(H.Y),
            V: e.V,
            vf: w,
            xc: e.Qe,
            zc: e.Pe,
            w: d.w,
            B: d.B,
            Pb: Pe(Re(D.location.href)),
            Pc: B,
            protocol: q ? "http:" : "https:",
            Uc: g(H.we),
            Tb: E,
            sessionId: g(H.Db),
            Yb: void 0,
            transactionId: g(H.Xa),
            Zb: void 0,
            bd: A,
            We: !1 !== g(H.T)
          };
          ii(J);
        }
      } else G(d.w);
    },
    El = ["aw", "dc"];
  var Gl = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
    Il = function(a, b, c, d) {
      var e = function(w) {
          return d.getWithConfig(w);
        },
        g = Kc(a).m[0],
        h = !1 !== e(H.za),
        k = e(H.ya) || e(H.O),
        l = e(H.R),
        m = e(H.W);
      if (b === H.D) {
        if (h) {
          var n = { prefix: k, domain: l, Ja: m };
          Ph(n);
          Wh(["aw", "dc"], n);
        }
        G(d.B);
      } else {
        var q = {
            conversion_id: g,
            onFailure: d.w,
            onSuccess: d.B,
            conversionLinkerEnabled: h,
            cookiePrefix: k
          },
          u = Gl.test(D.location.href);
        if (b !== H.la) G(d.w);
        else {
          var t = {
              partner_id: g,
              trip_type: e(H.Ce),
              total_price: e(H.Y),
              currency: e(H.fa),
              is_direct_booking: u,
              flight_segment: Hl(e(H.X))
            },
            v = e(H.Ld);
          v &&
            "object" === typeof v &&
            ((t.passengers_total = v.total),
            (t.passengers_adult = v.adult),
            (t.passengers_child = v.child),
            (t.passengers_infant_in_seat = v.infant_in_seat),
            (t.passengers_infant_in_lap = v.infant_in_lap));
          q.conversion_data = t;
          pi(q);
        }
      }
    },
    Hl = function(a) {
      if (a) {
        for (var b = [], c = 0, d = 0; d < a.length; ++d) {
          var e = a[d];
          !e ||
            (void 0 !== e.category &&
              "" !== e.category &&
              "FlightSegment" !== e.category) ||
            ((b[c] = {
              cabin: e.travel_class,
              fare_product: e.fare_product,
              booking_code: e.booking_code,
              flight_number: e.flight_number,
              origin: e.origin,
              destination: e.destination,
              departure_date: e.start_date
            }),
            c++);
        }
        return b;
      }
    };
  var Ll = function(a, b, c, d) {
      var e = Kc(a),
        g = !1 !== d.getWithConfig(H.za),
        h = d.getWithConfig(H.ya) || d.getWithConfig(H.O),
        k = d.getWithConfig(H.R),
        l = d.getWithConfig(H.W);
      if (b === H.D) {
        var m = d.getWithConfig(H.ma) || {};
        if (g) {
          Fh(m[H.Qa], !!m[H.C]) && Sh(Jl, h, void 0, k, l);
          var n = { prefix: h, domain: k, Ja: l };
          Ph(n);
          Wh(["aw", "dc"], n);
        }
        if (m[H.C]) {
          Uh(Jl, m[H.C], m[H.Sa], !!m[H.Ra], h);
        }
        G(d.B);
      } else if (b === H.la) {
        var q = d.getWithConfig(H.Xa),
          u = d.getWithConfig(H.Y),
          p = d.getWithConfig(H.fa),
          t = d.getWithConfig(H.X),
          v = {};
        if (f(q) || "number" === typeof q) v.Of = String(q);
        f(p) && (v.Rf = p);
        if (f(u) || "number" === typeof u) v.Tf = v.Nf = String(u);
        if (ua(t) && 0 !== t.length) {
          var w = t[0];
          if (Pa(w)) {
            if (f(w.id) || "number" === typeof w.id) v.Sf = String(w.id);
            f(w.start_date) && (v.Pf = w.start_date);
            f(w.end_date) && (v.Qf = w.end_date);
          }
        }
        var y = e.m[0],
          x = d.B,
          z = d.w;
        /^\d+$/.test(y) ? fc(Kl(y, v, g, h), x, z) : G(z);
      } else G(d.w);
    },
    Kl = function(a, b, c, d) {
      var e = encodeURIComponent(a),
        g = encodeURIComponent(Ml(b)),
        h =
          "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" +
          e +
          "/?data=" +
          g;
      c &&
        (h += Zh("ha", d)
          .map(function(k) {
            return "&gclha=" + encodeURIComponent(k);
          })
          .join(""));
      return h;
    },
    Ml = function(a) {
      function b(d, e) {
        void 0 !== e && c.push(d + "=" + e);
      }
      var c = [];
      b("hct_base_price", a.Nf);
      b("hct_booking_xref", a.Of);
      b("hct_checkin_date", a.Pf);
      b("hct_checkout_date", a.Qf);
      b("hct_currency_code", a.Rf);
      b("hct_partner_hotel_id", a.Sf);
      b("hct_total_price", a.Tf);
      return c.join(";");
    },
    Jl = ["ha"];
  var $l = function(a, b, c, d) {
      var e = "/assets/js/analytics.js",
        g = Ge();
      if (qa(g)) {
        var h = "gtag_" + a.split("-").join("_"),
          k = function(x) {
            var z = [].slice.call(arguments, 0);
            z[0] = h + "." + z[0];
            g.apply(window, z);
          },
          l = function() {
            var x = function(E, J) {
                for (var M = 0; J && M < J.length; M++) k(E, J[M]);
              },
              z = Rl(b, d);
            if (z) {
              var B = z.action;
              if ("impressions" === B) x("ec:addImpression", z.Wf);
              else if ("promo_click" === B || "promo_view" === B) {
                var A = z.Qc;
                x("ec:addPromo", z.Qc);
                A &&
                  0 < A.length &&
                  "promo_click" === B &&
                  k("ec:setAction", B);
              } else x("ec:addProduct", z.Ka), k("ec:setAction", B, z.Za);
            }
          },
          m = function() {
            if (Md()) {
            } else {
              var x = d.getWithConfig(H.hh);
              x &&
                (k("require", x, { dataLayer: "dataLayer" }),
                k("require", "render"));
            }
          },
          n = Sl(a, h, b, d);
        Tl(h, n.Fa) &&
          (g(function() {
            Ee() && Ee().remove(h);
          }),
          (Ul[h] = !1));
        g("create", a, n.Fa);
        (function() {
          var x = d.getWithConfig("custom_map");
          g(function() {
            if (Pa(x)) {
              var z = n.ia,
                B = Ee().getByName(h),
                A;
              for (A in x)
                if (
                  x.hasOwnProperty(A) &&
                  /^(dimension|metric)\d+$/.test(A) &&
                  void 0 != x[A]
                ) {
                  var E = B.get(Vl(x[A]));
                  Wl(z, A, E);
                }
            }
          });
        })();
        (function(x) {
          if (x) {
            var z = {};
            if (Pa(x))
              for (var B in Xl) Xl.hasOwnProperty(B) && Yl(Xl[B], B, x[B], z);
            k("require", "linkid", z);
          }
        })(n.linkAttribution);
        var u = n[H.ma];
        if (u && u[H.C]) {
          var p = u[H.Sa];
          He(
            h + ".",
            u[H.C],
            void 0 === p ? !!u.use_anchor : "fragment" === p,
            !!u[H.Ra]
          );
        }
        var t = function(x, z, B) {
          B && (z = "" + z);
          n.ia[x] = z;
        };
        if (b === H.Vc) m(), k("send", "pageview", n.ia);
        else if (b === H.D) {
          m();
          var v = !1;
          v ? Zd(a, d) : Zd(a);
          0 != n.sendPageView && k("send", "pageview", n.ia);
        } else
          "screen_view" === b
            ? k("send", "screenview", n.ia)
            : "timing_complete" === b
            ? (t("timingCategory", n.eventCategory, !0),
              t("timingVar", n.name, !0),
              t("timingValue", Aa(n.value)),
              void 0 !== n.eventLabel && t("timingLabel", n.eventLabel, !0),
              k("send", "timing", n.ia))
            : "exception" === b
            ? k("send", "exception", n.ia)
            : "optimize.callback" !== b &&
              (0 <=
                r(
                  [
                    H.ud,
                    "select_content",
                    H.Tc,
                    H.Ic,
                    H.Jc,
                    H.wb,
                    "set_checkout_option",
                    H.la,
                    H.Lc,
                    "view_promotion",
                    "checkout_progress"
                  ],
                  b
                ) && (k("require", "ec", "ec.js"), l()),
              t("eventCategory", n.eventCategory, !0),
              t("eventAction", n.eventAction || b, !0),
              void 0 !== n.eventLabel && t("eventLabel", n.eventLabel, !0),
              void 0 !== n.value && t("eventValue", Aa(n.value)),
              k("send", "event", n.ia));
        if (!Zl) {
          Zl = !0;
          ze();
          var w = d.w,
            y = function() {
              Ee().loaded || w();
            };
          Md() ? G(y) : cc(e, y, w);
        }
      } else G(d.w);
    },
    Zl,
    Ul = {},
    am = {
      client_id: 1,
      client_storage: "storage",
      cookie_name: 1,
      cookie_domain: 1,
      cookie_expires: 1,
      cookie_path: 1,
      cookie_update: 1,
      sample_rate: 1,
      site_speed_sample_rate: 1,
      use_amp_client_id: 1,
      store_gac: 1,
      conversion_linker: "storeGac"
    },
    bm = {
      anonymize_ip: 1,
      app_id: 1,
      app_installer_id: 1,
      app_name: 1,
      app_version: 1,
      campaign: {
        name: "campaignName",
        source: "campaignSource",
        medium: "campaignMedium",
        term: "campaignTerm",
        content: "campaignContent",
        id: "campaignId"
      },
      currency: "currencyCode",
      description: "exDescription",
      fatal: "exFatal",
      language: 1,
      non_interaction: 1,
      page_hostname: "hostname",
      page_referrer: "referrer",
      page_path: "page",
      page_location: "location",
      page_title: "title",
      screen_name: 1,
      transport_type: "transport",
      user_id: 1
    },
    cm = {
      content_id: 1,
      event_category: 1,
      event_action: 1,
      event_label: 1,
      link_attribution: 1,
      linker: 1,
      method: 1,
      name: 1,
      send_page_view: 1,
      value: 1
    },
    Xl = {
      cookie_name: 1,
      cookie_expires: "duration",
      levels: 1
    },
    dm = {
      anonymize_ip: 1,
      fatal: 1,
      non_interaction: 1,
      use_amp_client_id: 1,
      send_page_view: 1,
      store_gac: 1,
      conversion_linker: 1
    },
    Yl = function(a, b, c, d) {
      if (void 0 !== c)
        if (
          (dm[b] && (c = Ca(c)),
          "anonymize_ip" !== b || c || (c = void 0),
          1 === a)
        )
          d[Vl(b)] = c;
        else if (f(a)) d[a] = c;
        else
          for (var e in a)
            a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e]);
    },
    Vl = function(a) {
      return a && f(a)
        ? a.replace(/(_[a-z])/g, function(b) {
            return b[1].toUpperCase();
          })
        : a;
    },
    em = function(a) {
      var b = "general";
      0 <=
      r(
        [
          H.Cf,
          H.Ic,
          H.Ff,
          H.wb,
          "checkout_progress",
          H.la,
          H.Lc,
          H.Jc,
          "set_checkout_option"
        ],
        a
      )
        ? (b = "ecommerce")
        : 0 <=
          r(
            "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(
              " "
            ),
            a
          )
        ? (b = "engagement")
        : "exception" === a && (b = "error");
      return b;
    },
    Wl = function(a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c);
    },
    fm = function(a) {
      if (ua(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id,
              g = d.variant;
            void 0 != e && void 0 != g && b.push(String(e) + "." + String(g));
          }
        }
        return 0 < b.length ? b.join("!") : void 0;
      }
    },
    Sl = function(a, b, c, d) {
      var e = function(B) {
          return d.getWithConfig(B);
        },
        g = {},
        h = {},
        k = {},
        l = fm(e(H.Zg));
      l && Wl(h, "exp", l);
      var m = e("custom_map");
      if (Pa(m))
        for (var n in m)
          if (
            m.hasOwnProperty(n) &&
            /^(dimension|metric)\d+$/.test(n) &&
            void 0 != m[n]
          ) {
            var q = e(String(m[n]));
            void 0 !== q && Wl(h, n, q);
          }
      var u = Id(a);
      for (var p = 0; p < u.length; ++p) {
        var t = u[p],
          v = e(t);
        cm.hasOwnProperty(t)
          ? Yl(cm[t], t, v, g)
          : bm.hasOwnProperty(t)
          ? Yl(bm[t], t, v, h)
          : am.hasOwnProperty(t)
          ? Yl(am[t], t, v, k)
          : /^(dimension|metric|content_group)\d+$/.test(t)
          ? Yl(1, t, v, h)
          : t === H.O && 0 > r(u, H.yb) && (k.cookieName = v + "_ga");
      }
      Wl(k, "cookieDomain", "auto");
      Wl(h, "forceSSL", !0);
      Wl(g, "eventCategory", em(c));
      0 <=
        r(
          [
            "view_item",
            "view_item_list",
            "view_promotion",
            "view_search_results"
          ],
          c
        ) && Wl(h, "nonInteraction", !0);
      "login" === c || "sign_up" === c || "share" === c
        ? Wl(g, "eventLabel", e(H.gh))
        : "search" === c || "view_search_results" === c
        ? Wl(g, "eventLabel", e(H.Ae))
        : "select_content" === c && Wl(g, "eventLabel", e(H.lg));
      var w = g[H.ma] || {},
        y = w[H.Qa];
      y || (0 != y && w[H.C])
        ? (k.allowLinker = !0)
        : !1 === y && Wl(k, "useAmpClientId", !1);
      if (!1 === e(H.dg) || !1 === e(H.T)) h.allowAdFeatures = !1;
      !1 === e(H.T) && I("GTM", 27);
      k.name = b;
      h["&gtm"] = ei(!0);
      h.hitCallback = d.B;
      var x = e(H.fh) || Dd("gtag.remote_config." + a + ".url", 2),
        z = e(H.ah) || Dd("gtag.remote_config." + a + ".dualId", 2);
      x && null != $b && (k._x_19 = x);
      z && (k._x_20 = z);
      g.ia = h;
      g.Fa = k;
      return g;
    },
    Rl = function(a, b) {
      function c(v) {
        var w = C(v);
        w.list = v.list_name;
        w.listPosition = v.list_position;
        w.position = v.list_position || v.creative_slot;
        w.creative = v.creative_name;
        return w;
      }
      function d(v) {
        for (var w = [], y = 0; v && y < v.length; y++) v[y] && w.push(c(v[y]));
        return w.length ? w : void 0;
      }
      function e(v) {
        return {
          id: g(H.Xa),
          affiliation: g(H.Gg),
          revenue: g(H.Y),
          tax: g(H.Xg),
          shipping: g(H.Ug),
          coupon: g(H.Hg),
          list: g(H.Xc) || v
        };
      }
      for (
        var g = function(v) {
            return b.getWithConfig(v);
          },
          h = g(H.X),
          k,
          l = 0;
        h && l < h.length && !(k = h[l][H.Xc]);
        l++
      );
      var m = g("custom_map");
      if (Pa(m))
        for (var n = 0; h && n < h.length; ++n) {
          var q = h[n],
            u;
          for (u in m)
            m.hasOwnProperty(u) &&
              /^(dimension|metric)\d+$/.test(u) &&
              void 0 != m[u] &&
              Wl(q, u, q[m[u]]);
        }
      var p = null,
        t = g(H.Og);
      a === H.la || a === H.Lc
        ? (p = { action: a, Za: e(), Ka: d(h) })
        : a === H.Ic
        ? (p = { action: "add", Ka: d(h) })
        : a === H.Jc
        ? (p = { action: "remove", Ka: d(h) })
        : a === H.Tc
        ? (p = { action: "detail", Za: e(k), Ka: d(h) })
        : a === H.ud
        ? (p = { action: "impressions", Wf: d(h) })
        : "view_promotion" === a
        ? (p = { action: "promo_view", Qc: d(t) })
        : "select_content" === a && t && 0 < t.length
        ? (p = { action: "promo_click", Qc: d(t) })
        : "select_content" === a
        ? (p = { action: "click", Za: { list: g(H.Xc) || k }, Ka: d(h) })
        : a === H.wb || "checkout_progress" === a
        ? (p = {
            action: "checkout",
            Ka: d(h),
            Za: { step: a === H.wb ? 1 : g(H.Gd), option: g(H.Ed) }
          })
        : "set_checkout_option" === a &&
          (p = {
            action: "checkout_option",
            Za: { step: g(H.Gd), option: g(H.Ed) }
          });
      p && (p.uh = g(H.fa));
      return p;
    },
    gm = {},
    Tl = function(a, b) {
      var c = gm[a];
      gm[a] = C(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1;
    };
  var Z = { a: {} };

  (Z.a.gtagha = ["google"]),
    (function() {
      var a = !1;
      var b = function(c) {
        var d = c.vtp_conversionId,
          e = Vc,
          g = W("eventModel");
        if (a) {
          Bf(d.id, Ll);
          if (e === H.D) {
            var h = W("gtag.targets." + d.id);
            Df(h, d.id);
          } else Cf(e, g, d.id);
          G(c.vtp_gtmOnSuccess);
        } else {
          var k = uf(tf(of(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
          k.getWithConfig = function(l) {
            return Fd(l, d.containerId, d.id);
          };
          Ll(d.id, e, new Date().getTime(), k);
        }
      };
      Z.__gtagha = b;
      Z.__gtagha.b = "gtagha";
      Z.__gtagha.g = !0;
      Z.__gtagha.priorityOverride = 0;
    })();
  (Z.a.e = ["google"]),
    (function() {
      (function(a) {
        Z.__e = a;
        Z.__e.b = "e";
        Z.__e.g = !0;
        Z.__e.priorityOverride = 0;
      })(function(a) {
        return String(Ld(a.vtp_gtmEventId, "event"));
      });
    })();

  (Z.a.v = ["google"]),
    (function() {
      (function(a) {
        Z.__v = a;
        Z.__v.b = "v";
        Z.__v.g = !0;
        Z.__v.priorityOverride = 0;
      })(function(a) {
        var b = a.vtp_name;
        if (!b || !b.replace) return !1;
        var c = W(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
        return void 0 !== c ? c : a.vtp_defaultValue;
      });
    })();

  (Z.a.gtagaw = ["google"]),
    (function() {
      var a = !1;
      a = !0;
      var b = function(c) {
        var d = c.vtp_conversionId,
          e = void 0 !== d.m[1] ? d.id : void 0,
          g = Vc,
          h = W("eventModel");
        if (a) {
          Bf(c.vtp_conversionId.id, zl);
          if (g === H.D) {
            var k = W("gtag.targets." + d.id);
            Df(k, c.vtp_conversionId.id);
          } else Cf(g, h, d.id);
          G(c.vtp_gtmOnSuccess);
        } else {
          var l = uf(tf(of(h), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
          l.getWithConfig = function(m) {
            return Fd(m, d.containerId, e);
          };
          zl(c.vtp_conversionId.id, g, new Date().getTime(), l);
        }
      };
      Z.__gtagaw = b;
      Z.__gtagaw.b = "gtagaw";
      Z.__gtagaw.g = !0;
      Z.__gtagaw.priorityOverride = 0;
    })();

  (Z.a.get = ["google"]),
    (function() {
      (function(a) {
        Z.__get = a;
        Z.__get.b = "get";
        Z.__get.g = !0;
        Z.__get.priorityOverride = 0;
      })(function(a) {
        if (a.vtp_isAutoTag) {
          var b = String(a.vtp_trackingId),
            c = Vc || "",
            d = {};
          if (c === H.D) {
            var e = W("gtag.targets." + b);
            C(e, d);
            d[H.na] = !0;
            Df(d, b);
          } else {
            var g = W("eventModel");
            C(g, d);
            d[H.na] = !0;
            Cf(c, d, b);
          }
        } else {
          var h = a.vtp_settings;
          (a.vtp_deferrable ? ol : nl)(
            String(h.streamId),
            String(a.vtp_eventName),
            h.eventParameters || {}
          );
        }
        a.vtp_gtmOnSuccess();
      });
    })();

  (Z.a.gtagfl = []),
    (function() {
      function a(d) {
        var e = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(d);
        if (e) return { containerId: "DC-" + e[1], M: e[3] && d };
      }
      var b = !1;
      var c = function(d) {
        var e = d.vtp_targetId,
          g = Vc,
          h = W("eventModel");
        if (b) {
          Bf(e, Fl);
          if (g === H.D) {
            var k = W("gtag.targets." + e);
            Df(k, e);
          } else Cf(g, h, e);
          G(d.vtp_gtmOnSuccess);
        } else {
          var l = a(e);
          if (l) {
            var m = uf(tf(of(h), d.vtp_gtmOnSuccess), d.vtp_gtmOnFailure);
            m.getWithConfig = function(n) {
              return Fd(n, l.containerId, l.M);
            };
            Fl(e, g, new Date().getTime(), m);
          } else G(d.vtp_gtmOnFailure);
        }
      };
      Z.__gtagfl = c;
      Z.__gtagfl.b = "gtagfl";
      Z.__gtagfl.g = !0;
      Z.__gtagfl.priorityOverride = 0;
    })();

  (Z.a.gtaggf = ["google"]),
    (function() {
      var a = !1;
      var b = function(c) {
        var d = c.vtp_conversionId,
          e = Vc,
          g = W("eventModel");
        if (a) {
          Bf(d.id, Il);
          if (e === H.D) {
            var h = W("gtag.targets." + d.id);
            Df(h, d.id);
          } else Cf(e, g, d.id);
          G(c.vtp_gtmOnSuccess);
        } else {
          var k = uf(tf(of(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
          k.getWithConfig = function(l) {
            return Fd(l, d.containerId, d.id);
          };
          Il(d.id, e, new Date().getTime(), k);
        }
      };
      Z.__gtaggf = b;
      Z.__gtaggf.b = "gtaggf";
      Z.__gtaggf.g = !0;
      Z.__gtaggf.priorityOverride = 0;
    })();

  (Z.a.gtagua = ["google"]),
    (function() {
      var a = !1;
      var b = function(c) {
        var d = c.vtp_trackingId,
          e = Vc,
          g = W("eventModel");
        if (a) {
          Bf(d, $l);
          if (e === H.D) {
            var h = W("gtag.targets." + d);
            Df(h, d);
          } else Cf(e, g, d);
          G(c.vtp_gtmOnSuccess);
        } else {
          var k = uf(tf(of(g), c.vtp_gtmOnSuccess), c.vtp_gtmOnFailure);
          k.getWithConfig = function(l) {
            return Fd(l, d, void 0);
          };
          $l(d, e, new Date().getTime(), k);
        }
      };
      Z.__gtagua = b;
      Z.__gtagua.b = "gtagua";
      Z.__gtagua.g = !0;
      Z.__gtagua.priorityOverride = 0;
    })();

  var hm = {};
  (hm.macro = function(a) {
    if (Lg.nc.hasOwnProperty(a)) return Lg.nc[a];
  }),
    (hm.onHtmlSuccess = Lg.Wd(!0)),
    (hm.onHtmlFailure = Lg.Wd(!1));
  hm.dataLayer = Ed;
  hm.callback = function(a) {
    Xc.hasOwnProperty(a) && qa(Xc[a]) && Xc[a]();
    delete Xc[a];
  };
  function im() {
    Oc[Nc.s] = hm;
    Ia(Yc, Z.a);
    xb = xb || Lg;
    yb = he;
  }
  function jm() {
    Gh.gtm_3pds = !0;
    Oc = D.google_tag_manager = D.google_tag_manager || {};
    if (Oc[Nc.s]) {
      var a = Oc.zones;
      a && a.unregisterChild(Nc.s);
    } else {
      for (
        var b = data.resource || {}, c = b.macros || [], d = 0;
        d < c.length;
        d++
      )
        pb.push(c[d]);
      for (var e = b.tags || [], g = 0; g < e.length; g++) sb.push(e[g]);
      for (var h = b.predicates || [], k = 0; k < h.length; k++) rb.push(h[k]);
      for (var l = b.rules || [], m = 0; m < l.length; m++) {
        for (var n = l[m], q = {}, u = 0; u < n.length; u++)
          q[n[u][0]] = Array.prototype.slice.call(n[u], 1);
        qb.push(q);
      }
      vb = Z;
      wb = Aj;
      im();
      Kg();
      le = !1;
      me = 0;
      if (
        ("interactive" == F.readyState && !F.createEventObject) ||
        "complete" == F.readyState
      )
        oe();
      else {
        gc(F, "DOMContentLoaded", oe);
        gc(F, "readystatechange", oe);
        if (F.createEventObject && F.documentElement.doScroll) {
          var p = !0;
          try {
            p = !D.frameElement;
          } catch (y) {}
          p && pe();
        }
        gc(D, "load", oe);
      }
      xg = !1;
      "complete" === F.readyState ? zg() : gc(D, "load", zg);
      a: {
        if (!td) break a;
        D.setInterval(ud, 864e5);
      }
      Uc = new Date().getTime();
      hm.bootstrap = Uc;
    }
  }
  jm();
})();
