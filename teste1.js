"use strict"; ! function() {
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (w && w.debug) try {
            console.log.apply(console, t)
        } catch(t) {}
    }
    function e(t, e) {
        var n = !1;
        return function() {
            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
            n || (t.apply(null, r), n = !0, setTimeout((function() {
                n = !1
            }), e))
        }
    }
    function n() {
        var t = S.getFormDataQueue();
        t && r(t)
    }
    function r(e) {
        if (!b && e.email && -1 !== e.email.indexOf("@")) if (e.listId && "0" !== e.listId) {
            b = !0;
            var n = {
                FormValue_ListID: e.listId,
                FormValue_Command: "Subscriber.Add",
                "FormValue_Fields[UpdateifExists]": !0,
                "FormValue_Fields[EmailAddress]": e.email
            };
            w.nameCustomId && e.name && (n["FormValue_Fields[CustomField" + w.nameCustomId + "]"] = e.name),
            w.radioCustomId && e.radio && (n["FormValue_Fields[CustomField" + w.radioCustomId + "]"] = e.radio);
            var r = Object.keys(e.fields) || [];
            r && r.length && v(r).each((function() {
                var t = "FormValue_Fields[CustomField" + this + "]",
                r = e.fields[this];
                "undefined" !== v.typeOf(r) && ("array" === v.typeOf(r) ? v(r).each((function(e, r) {
                    n[t + "[" + r + "]"] = e
                })) : n[t] = r)
            })),
            S.setFormDataQueue(e),
            S.logEvent("sentData", n),
            function(t) {
                var e;
                null !== (e = null == t ? void 0 : t.user) && void 0 !== e && e.email && window.mbtrack && window.mbtrack("trackAccountSync", t)
            } ({
                user: {
                    user_id: "",
                    email: e.email,
                    name: e.name
                }
            }),
            v.ajax({
                type: "POST",
                url: S.getSendUrl(),
                data: n,
                complete: function() {
                    b = !1
                },
                success: function(e) {
                    S.setFormDataQueue(null),
                    t("mlbz enviado", e),
                    S.logEvent("respData", e)
                }
            })
        } else t("Invalid listId. value: '".concat(e.listId, "'"))
    }
    function i(n) {
        var i = (n = n || {}).formSelector || S.getFormSelector(),
        o = e(r, n.throttle);
        v(i).each((function() { ! function(e, n) {
                var r = v(e);
                e = "mbzBind" + w.id;
                var i = r.is("[data-mbz-form]");
                if (r.data(e)) t(r, "bind jÃ¡ aplicado");
                else {
                    r.data(e, !0);
                    var o = {
                        listId: i && r.attr("data-listid") || w.listId,
                        email: null,
                        name: null,
                        radio: null,
                        fields: {}
                    },
                    a = i ? '[data-mbz-input="email"]' : S.getEmailSelector(),
                    c = i ? null : S.getNameSelector(),
                    l = i ? null : S.getRadioSelector();
                    e = i ? null : S.getSubmitSelector();
                    var u = S.getNativeSelector();
                    i = i ? [] : S.getActiveFields() || [];
                    var s = [],
                    d = function(t) {
                        return v(s).each((function() {
                            if (this && "object" == typeof this && this.el) {
                                var e = this.el.val();
                                this.isExtra ? (this.multiple && (e = [], this.el.each((function(t) {
                                    "object" == typeof t && t.checked && e.push(t.value)
                                }))), t.fields[this.name] || null === e || (t.fields[this.name] = e)) : t[this.name] || (t[this.name] = e)
                            }
                        })),
                        t
                    },
                    f = function(e) {
                        if (e) {
                            var n = r.find(e.selector);
                            s.push({
                                name: e.customId,
                                el: n,
                                multiple: e.multiple,
                                isExtra: !0
                            }),
                            n.on("change input", (function() {
                                var r = this.value;
                                e.multiple && (r = [], n.each((function(t) {
                                    "object" == typeof t && t.checked && r.push(t.value)
                                }))),
                                o.fields[e.customId] = r,
                                t(o)
                            }))
                        }
                    };
                    a && (a = r.find(a), s.push({
                        name: "email",
                        el: a
                    }), a.on("change input", (function() {
                        o.email = this.value,
                        t(o)
                    }))),
                    w.nameCustomId && c && (c = r.find(c), s.push({
                        name: "name",
                        el: c
                    }), c.on("change input", (function() {
                        var e = this.value;
                        "true" != e && "false" != e && (o.name = e, t(o))
                    }))),
                    w.radioCustomId && l && (l = r.find(l), s.push({
                        name: "radio",
                        el: l
                    }), l.on("change input", (function() {
                        o.radio = this.value,
                        t(o)
                    }))),
                    e && r.find(e).on("click mouseup", (function() {
                        d(o),
                        t("click", o),
                        n(o)
                    })),
                    v(i).each((function() {
                        f(this)
                    })),
                    (e = r.find(u)).length && e.each((function() {
                        var e = v(this),
                        n = e.attr("data-mbz-custom-id"),
                        i = e.attr("data-mbz-input"),
                        a = !!e.attr("multiple") || "checkbox" === i,
                        c = "email" === i,
                        l = "date" === i || "tel" === i && "**/**/****" === e.attr("data-mbz-mask"),
                        u = '[data-mbz-input][data-mbz-custom-id="' + n + '"]';
                        n && (s.push({
                            name: n,
                            el: a ? r.find(u) : e,
                            multiple: a,
                            isExtra: !0
                        }), e.on("change input", (function() {
                            var e = this.value;
                            c ? o.email = e : (l && e && (e = (e || "").split("/").reverse().join("-")), a && (e = [], r.find(u).each((function(t) {
                                t && "object" == typeof t && t.checked && e.push(t.value)
                            }))), o.fields[n] = e, t(o))
                        })))
                    })),
                    r.on("submit", (function() {
                        d(o),
                        t("submit", o),
                        n(o)
                    }))
                }
            } (this, o)
        }))
    }
    function o() {
        w.popups && "object" == typeof w.popups && (w.popups || {}).active && v.loadScript(h, !0, w.nonce)
    }
    function a() {
        if (w.features && "object" == typeof w.features && w.tid) {
            var e = Object.keys(w.features);
            e.length && ("object" == typeof window.MailbizOnsite ? t("MailbizOnsite already defined") : (window.MailbizOnsite = {
                app_id: w.tid || "",
                features: {},
                baseuri: w.url,
                vendor: "",
                debug: !1
            },
            e.forEach((function(t) {
                var e;
                null !== (e = w.features[t]) && void 0 !== e && e.enabled && C[t] && C[t](w.features[t])
            })), t("Creating global MailbizOnsite", window.MailbizOnsite)))
        }
    }
    function c(e) {
        var n = {
            log: {
                sentData: [],
                respData: []
            },
            api: O,
            popupHomolog: y
        };
        try {
            var r = O,
            i = r.setStorage,
            o = "_".concat(w.id, "_").concat("mbz-hub-c");
            t: {
                var a = z,
                c = s.encode(JSON.stringify(e));
                let t = s.encode(c).split(""),
                n = a.split("");
                a = 0,
                c = "";
                for (let e = 0; e < t.length; e++) {
                    e: {
                        var l = n[a],
                        u = t[e];
                        let r = d.abc.indexOf(l);
                        if (-1 == r) {
                            console.log("Password letter " + l + " not allowed.");
                            var f = null;
                            break e
                        }
                        let i = d.abc.indexOf(u); - 1 != i ? f = ("" + d.abc.substring(r, d.abc.length) + d.abc.substring(0, r)).split("")[i] : (console.log("Password letter " + l + " not allowed."), f = null)
                    }
                    let r = f;
                    if (!r) {
                        var p = null;
                        break t
                    }
                    c += r,
                    a == n.length - 1 ? a = 0 : a++
                }
                p = c
            }
            i.call(r, o, p)
        } catch(e) {
            t("error: ", e)
        }
        v.extend(w, n),
        v.extend(w, e),
        w.ready = !0
    }
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var l, u = {
        exports: {}
    };
    (function(t) {
        function e(t) {
            var e = typeof t;
            return "object" === e && (t ? t instanceof Array && (e = "array") : e = "null"),
            e
        }
        function n() {}
        function r(t, e, r) {
            var o = e.error || n,
            a = e.success || n,
            c = e.complete || n,
            u = function() {
                for (var t = null, e = 0; e < l.length; e++) {
                    try {
                        t = l[e]()
                    } catch(t) {
                        continue
                    }
                    break
                }
                return t
            } ();
            if (u) {
                if (u.open(r ? "POST" : "GET", t, !0), r && (u.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), "object" == typeof r)) try {
                    r = Object.keys(r).map((function(t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(r[t])
                    })).join("&")
                } catch(t) {}
                u.onreadystatechange = function() {
                    4 == u.readyState && (c(), 200 != u.status && 201 != u.status && 304 != u.status ? o(i(u)) : a(i(u)))
                },
                4 != u.readyState && u.send(r)
            }
        }
        function i(t) {
            try {
                return JSON.parse(t.responseText)
            } catch(e) {
                return t.responseText
            }
        }
        function o(t) {
            if ("string" === e(t)) try {
                var n = document.querySelectorAll(t.toString())
            } catch(t) {} else "array" === e(t) ? n = t : "object" === e(t) && (n = [t]);
            return new s(n)
        }
        var a, c, l = [function() {
            return new XMLHttpRequest
        },
        function() {
            return new ActiveXObject("Msxml3.XMLHTTP")
        },
        function() {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        },
        function() {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        },
        function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        },
        function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }],
        u = (a = 0, c = {},
        {
            set: function(t, e) {
                var n = 0;
                void 0 === t.myCustomDataTag && (n = a++, t.myCustomDataTag = n),
                c[n] = e
            },
            get: function(t) {
                return c[t.myCustomDataTag]
            }
        }),
        s = function() {
            function t(t) {
                var n, r;
                this.list = [],
                "object" == typeof t && (this.list = "array" === e(t) || t instanceof NodeList || t.length ? t : [t]),
                this.length = null !== (r = null === (n = this.list) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0
            }
            return t.prototype._applyEach = function(t) {
                for (var e = this.list.length, n = 0; n < e; ++n) {
                    var r = this.list[n];
                    try {
                        t.call(r, r, n)
                    } catch(t) {
                        console.error(t)
                    }
                }
                return this
            },
            t.prototype.each = function(t) {
                return this._applyEach(t)
            },
            t.prototype.closest = function(e) {
                var n = this.first();
                return n ? new t([n.closest(e)]) : new t
            },
            t.prototype.data = function(t, e) {
                var n, r = this.first(),
                i = null !== (n = u.get(r)) && void 0 !== n ? n : {};
                return t || e ? void 0 === e ? i[t] : (i[t] = e, u.set(r, i)) : i
            },
            t.prototype.on = function(t, e) {
                return this._applyEach((function(n) {
                    n && o(t.split(" ")).each((function(t) {
                        n.addEventListener(t, e, !1)
                    }))
                }))
            },
            t.prototype.off = function(t, e) {
                return this._applyEach((function(n) {
                    o(t.split(" ")).each((function(t) {
                        n.removeEventListener(t, e, !1)
                    }))
                }))
            },
            t.prototype.is = function(t) {
                var e = this.first();
                return !! e && e.matches(t)
            },
            t.prototype.find = function(e) {
                var n = this.first();
                return n && n.querySelectorAll && (e = n.querySelectorAll(e)).length ? new t(e) : new t
            },
            t.prototype.hide = function() {
                return this._applyEach((function(t) {
                    t.style.display = "hide"
                }))
            },
            t.prototype.show = function() {
                return this._applyEach((function(t) {
                    t.style.display = "block"
                }))
            },
            t.prototype.hasClass = function(t) {
                var e = this.first();
                return !! (e && e.className && new RegExp("(\\s|^)".concat(t, "(\\s|$)")).test(e.className))
            },
            t.prototype.addClass = function(t) {
                return this._applyEach((function(e) {
                    new RegExp("(^|\\s)".concat(t, "(\\s|$)"), "g").test(e.className) || (e.className = "".concat(e.className, " ").concat(t).replace(/\s+/g, " ").replace(/(^ | $)/g, ""))
                }))
            },
            t.prototype.removeClass = function(t) {
                return this._applyEach((function(e) {
                    var n = new RegExp("(^|\\s)".concat(t, "(\\s|$)"), "g");
                    e.className = e.className.replace(n, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
                }))
            },
            t.prototype.val = function(t) {
                var e = this.first(),
                n = null;
                return e && (t ? e.value = t.toString() : n = e.value),
                n
            },
            t.prototype.first = function() {
                return 0 < this.list.length ? this.list[0] : null
            },
            t.prototype.attr = function(t, e) {
                var n = this.first();
                if (n && n.getAttribute && n.setAttribute) return e ? (n.setAttribute(t, e), this) : n.getAttribute(t)
            },
            t.prototype.append = function(t) {
                var e = this.first();
                if (e) return "string" == typeof t ? e.innerHTML += t.toString() : e.appendChild(t),
                this
            },
            t.prototype.html = function(t) {
                var e = this.first();
                if (e) {
                    var n = e.innerHTML;
                    if (!t) return n;
                    e.innerHTML = t
                }
            },
            t.prototype.outerHtml = function() {
                var t = this.first();
                if (t) return t.outerHTML
            },
            t.prototype.remove = function() {
                var t = this.first();
                t && t.parentNode && t.parentNode.removeChild(t)
            },
            t
        } ();
        o.ready = function(t) {
            if ("loading" === document.readyState) return document.addEventListener("DOMContentLoaded", t);
            t()
        },
        o.extend = function t(e, n) {
            for (var r in  n) {
                var i = n[r];
                i && "[object Object]" === Object.prototype.toString.call(i) ? (e[r] = e[r] || {},
                t(e[r], i)) : e[r] = i
            }
            return e
        },
        o.typeOf = e,
        o.loadScript = function(t, e, n) {
            var r = document,
            i = r.createElement("script");
            r = r.getElementsByTagName("script")[0],
            i.src = t,
            i.async = null == e || e,
            n && (i.nonce = n),
            r.parentNode.insertBefore(i, r)
        },
        o.getQueryParameter = function(t, e) {
            return e || (e = window.location.href),
            t = t.replace(/[\[\]]/g, "\\$&"),
            (t = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e)) ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
        },
        o.ajax = function(t) {
            var n = t.url,
            i = "string" === e(t.type) && "post" === t.type.toLowerCase() ? t.data : null;
            return r(n, t, i)
        },
        t.$constructor = o,
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })(u.exports),
    (l = u.exports) && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") && l.
default;
    var s = {
        _keyStr:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(t) {
            var e = "",
            n = 0;
            for (t = s._utf8_encode(t); n < t.length;) {
                var r = t.charCodeAt(n++),
                i = t.charCodeAt(n++),
                o = t.charCodeAt(n++),
                a = r >> 2;
                r = (3 & r) << 4 | i >> 4;
                var c = (15 & i) << 2 | o >> 6,
                l = 63 & o;
                isNaN(i) ? c = l = 64 : isNaN(o) && (l = 64),
                e = e + this._keyStr.charAt(a) + this._keyStr.charAt(r) + this._keyStr.charAt(c) + this._keyStr.charAt(l)
            }
            return e
        },
        decode: function(t) {
            var e = "",
            n = 0;
            for (t = t.replace(/[^A-Za-z0-9\+\/=]/g, ""); n < t.length;) {
                var r = this._keyStr.indexOf(t.charAt(n++)),
                i = this._keyStr.indexOf(t.charAt(n++)),
                o = this._keyStr.indexOf(t.charAt(n++)),
                a = this._keyStr.indexOf(t.charAt(n++));
                r = r << 2 | i >> 4,
                i = (15 & i) << 4 | o >> 2;
                var c = (3 & o) << 6 | a;
                e += String.fromCharCode(r),
                64 != o && (e += String.fromCharCode(i)),
                64 != a && (e += String.fromCharCode(c))
            }
            return s._utf8_decode(e)
        },
        _utf8_encode: function(t) {
            t = t.replace(/\r\n/g, "\n");
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t.charCodeAt(n);
                128 > r ? e += String.fromCharCode(r) : (127 < r && 2048 > r ? e += String.fromCharCode(r >> 6 | 192) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128)), e += String.fromCharCode(63 & r | 128))
            }
            return e
        },
        _utf8_decode: function(t) {
            for (var e, n, r, i = "", o = 0; o < t.length;) 128 > (r = t.charCodeAt(o)) ? (i += String.fromCharCode(r), o++) : 191 < r && 224 > r ? (e = t.charCodeAt(o + 1), i += String.fromCharCode((31 & r) << 6 | 63 & e), o += 2) : (e = t.charCodeAt(o + 1), n = t.charCodeAt(o + 2), i += String.fromCharCode((15 & r) << 12 | (63 & e) << 6 | 63 & n), o += 3);
            return i
        }
    };
    let d = {
        abc: "abcdefghijklmnopqrstuvwxyz0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    var f = function(t) {
        t && setTimeout(t, 0)
    },
    p = !0 === window.__mbzdev__,
    m = p ? "http://localhost:5001/api/integration/public/": "https://integration-hub.mailclick.me/server/api/integration/public/",
    h = p ? "http://localhost:3000/static/scripts/new-js/popup.min.js": "https://d3eq1zq78ux3cv.cloudfront.net/static/scripts/popup.min.js",
    g = {
        popupHomolog: "mbz-popup",
        skipJsInit: "_mb_js_"
    };
    window._mbz_ = window._mbz_ || {
        $: u.exports.$constructor
    };
    var v = window._mbz_ && window._mbz_.$ ? window._mbz_.$ : null,
    b = !1,
    y = !1,
    S = {},
    w = {
        active: !1,
        integrationStatus: "",
        useFormAction: !1,
        _id: "",
        name: "",
        url: "",
        platform: void 0,
        listId: "",
        sendUrl: "",
        timeout: 0,
        formSelector: "",
        emailSelector: "",
        nameCustomId: "",
        nameCustomSelector: "",
        radioCustomId: null,
        radioCustomSelector: null,
        submitSelector: "",
        extraFields: null,
        createdBy: "",
        createdAt: void 0,
        updatedAt: void 0,
        __v: 0,
        modifiedBy: "",
        jqVersion: "",
        popups: null,
        formAction: void 0,
        debug: void 0,
        log: void 0,
        id: "",
        api: void 0,
        ready: !1,
        onReady: function() {}
    };
    S.throttle = e,
    S.logEvent = function(t, e) {
        w.log && w.log[t] && w.log[t].push(e)
    },
    S.getSettingsUrl = function() {
        if (y || p) {
            var t = y ? "?popup-homolog=true" : "";
            return "".concat(m).concat(w.id).concat(t)
        }
        return "".concat("https://dxyxft75r9rwr.cloudfront.net/i/").concat(w.id, ".json?t='").concat((new Date).getTime())
    },
    S.getFormSelector = function() {
        return w.formSelector || w.platform.formSelector || "form"
    },
    S.getEmailSelector = function() {
        return w.emailSelector || w.platform.emailSelector || '[type="email"], [name$="mail"]'
    },
    S.getNameSelector = function() {
        return w.nameCustomSelector || w.platform.nameSelector || '[placeholder*="ome"], [placeholder*="ame"], [name^="name"], [name^="Name"], [name^="nome"], [name^="Name"]'
    },
    S.getRadioSelector = function() {
        return w.radioCustomSelector || w.platform.radioSelector || '[type="checkbox"], [type="radio"]'
    },
    S.getSubmitSelector = function() {
        return w.submitSelector || w.platform.submitSelector
    },
    S.getNativeSelector = function() {
        return "[data-mbz-input]"
    },
    S.getSendUrl = function() {
        return w.useFormAction && w.formAction && "object" == typeof w.formAction && w.formAction.url ? w.formAction.url : w.sendUrl || "https://news.mailclick.me/subscribe.php"
    },
    S.getTimeout = function() {
        return w.timeout || 1500
    },
    S.getFormDataQueue = function() {
        try {
            var e = w.api.getStorage("mbz-hub-queue");
            return ! (!e || "object" != typeof e || !e.email) && e
        } catch(e) {
            t(e)
        }
        return !1
    },
    S.setFormDataQueue = function(e) {
        e = e || {};
        try {
            return w.api.setStorage("mbz-hub-queue", e),
            !0
        } catch(e) {
            t(e)
        }
        return !1
    },
    S.getActiveFields = function() {
        var t = [];
        return v(w.extraFields || []).each((function() {
            var e = this || {};
            e && e.active && t.push(e)
        })),
        t
    };
    var C = {
        tracker: function(e) {
            t("Starting tracker feature");
            var n = e.data,
            r = n.vendor;
            if (n = void 0 !== (n = n.debug) && n, r) {
                var i = "https://cdn.jsdelivr.net/npm/@mailbiz/onsite-".concat(r, "-vendor");
                window.MailbizOnsite = window.MailbizOnsite,
                window.MailbizOnsite.vendor = r,
                window.MailbizOnsite.debug = n || !1,
                window.MailbizOnsite.features.tracker = {
                    enabled: e.enabled,
                    pagePingDelay: 90,
                    scriptUrl: "https://cdn.jsdelivr.net/npm/@mailbiz/javascript-tracker@latest/dist/tracker.js",
                    apiUrl: "https://collector.mailbiz.one"
                },
                window.MailbizOnsite.features.cartRecovery = {
                    enabled: e.enabled
                },
                i && v.loadScript(i, !0, w.nonce)
            } else t("tracker - Invalid vendor")
        }
    },
    _ = {
        initialized: !1
    },
    O = new function() {
        this.setDebugMode = function(t) {
            w.debug = !!t
        },
        this.helper = S,
        this.log = t,
        this.bindElements = i,
        this.checkIntegration = function() {
            function t(t, e) {
                t && e && t.each((function(t) {
                    t.style.background = e
                }))
            }
            var e = ["#dc679e", "#00ffb5", "#ff006d", "#ff9600", "#7700ff"],
            n = v(S.getFormSelector());
            return n.each((function() { ! function(n) {
                    var r = v(n);
                    n = S.getEmailSelector();
                    var i = S.getNameSelector(),
                    o = S.getRadioSelector(),
                    a = S.getSubmitSelector(),
                    c = S.getActiveFields() || [];
                    n && t(r.find(n), e[0]),
                    w.nameCustomId && i && t(r.find(i), e[1]),
                    w.radioCustomId && o && t(r.find(o), e[2]),
                    a && t(r.find(a), e[3]),
                    v(c).each((function() {
                        t(r.find((this || {}).selector), e[2])
                    })),
                    t(r, e[4])
                } (this)
            })),
            {
                elements: n,
                hasIntegration: !!n.length
            }
        },
        this._mobileCheck = {
            tablet: function() {
                return navigator.userAgent.match(/Tablet|iPad|iPod/i) && 1280 >= window.innerWidth
            },
            all: function() {
                return navigator.userAgent.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i)
            }
        },
        this.getDevice = function() {
            var t = "desktop";
            try {
                this._mobileCheck.all() && (t = this._mobileCheck.tablet() ? "tablet" : "mobile")
            } catch(t) {}
            return t
        },
        this.tryParseJSON = function(t) {
            try {
                return JSON.parse(t || "{}")
            } catch(t) {}
            return t
        },
        this.getStorage = function(e) {
            var n;
            try {
                return (n = localStorage.getItem(e)) ? this.tryParseJSON(n) : n
            } catch(e) {
                return t(e),
                n
            }
        },
        this.setStorage = function(e, n) {
            try {
                return n = "object" == typeof n ? JSON.stringify(n) : n,
                localStorage.setItem(e, n),
                !0
            } catch(e) {
                t(e)
            }
            return !1
        },
        this.onlyNumbers = function(t) {
            return parseInt(t.replace(/\D/g, ""))
        }
    },
    z = "";
    try { ! function() {
            function e() { ! _.initialized && w.active && w.ready && (_.initialized = !0, f(n), f(i), f(o), f(a), w.onReady && "function" == typeof w.onReady && w.onReady(w), v.ready((function() {
                    f(i);
                    var t = S.getTimeout();
                    t && setTimeout((function() {
                        i()
                    }), t)
                })))
            }
            var r, l, u;
            if (!v) return t("Mailbiz - _mbz_ not found");
            if (! (w = window.MailbizIntegration) || "object" != typeof w) return console.warn("Object MailbizIntegration not defined");
            if (w.ready) return t("Mailbiz - hub already initialized");
            if (!w.id) return t("Mailbiz - invalid ID");
            if ("off" === v.getQueryParameter(g.skipJsInit)) return t("Init cancelled due param " + g.skipJsInit);
            "true" === v.getQueryParameter(g.popupHomolog) && (y = !0),
            1 === (null === (r = (null === window || void 0 === window ? void 0 : window.hlgCaller) || {}) || void 0 === r ? void 0 : r.mbz) && (y = !0),
            z = "s2fKLa".concat(w.id).concat((new Date).getUTCMonth(), "QWcZe"),
            r = !0;
            try {
                var p = y ? "" : O.getStorage("_".concat(w.id, "_").concat("mbz-hub-c"));
                if (p) {
                    var m = JSON.parse(s.decode(function(t, e) {
                        e = e.split(""),
                        t = t.split("");
                        let n = 0,
                        r = "";
                        for (let c = 0; c < e.length; c++) {
                            var i = t[n],
                            o = e[c],
                            a = d.abc.indexOf(i);
                            if (-1 != a ? -1 == (o = ("" + d.abc.substring(a, d.abc.length) + (a = d.abc.substring(0, a))).indexOf(o)) ? (console.log("Password letter " + i + " not allowed."), i = null) : i = d.abc.split("")[o] : (console.log("Password letter " + i + " not allowed."), i = null), !i) return null;
                            r += i,
                            n == t.length - 1 ? n = 0 : n++
                        }
                        return s.decode(r)
                    } (z, p)));
                    m && "object" == typeof m && (t("build from cache", m), m.nonce = w.nonce || "", c(m), e(), r = "number" !== v.typeOf(m.exp) || (l = new Date(m.exp).getTime(), u = (new Date).getTime(), !l || !u || 5 < (u - l) / 6e4))
                }
            } catch(l) {
                r = !0
            }
            t("shouldRefreshData", r),
            r && function(e) {
                v.ajax({
                    url: S.getSettingsUrl(),
                    success: function(n) {
                        n && (n.exp = (new Date).getTime(), t("fresh data", n), c(n), e && e())
                    }
                })
            } ((function() {
                e()
            }))
        } ()
    } catch(l) {}
} ();
