/* eslint-disable */
/* spell-checker: disable */
export default function ald(M) {
    function n(n) {
        this.app = n;
    }

    function t(t) {
        O = t, this.aldstat = new n(this), y("app", "launch");
    }

    function o(n) {
        if (O = n, C = n.query.ald_share_src, F = n.query.aldsrc || "", j = n.query.ald_share_src, U = Date.now(), A = Date.now(), !tn) {
            I = "" + Date.now() + Math.floor(1e7 * Math.random()), E = !1;
            try {
                wx.setStorageSync("ald_ifo", !1);
            } catch (n) { }
        }
        tn = !1, 0 !== b && Date.now() - b > 3e5 && (T = "" + Date.now() + Math.floor(1e7 * Math.random()), A = Date.now()), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
            shareTicket: n.shareTicket,
            success: function (n) {
                G = n, _("event", "ald_share_click", JSON.stringify(n));
            },
        }) : n.query.ald_share_src && _("event", "ald_share_click", 1), "" === K && wx.getSetting({
            withCredentials: !0,
            success: function (n) {
                if (n.authSetting["scope.userInfo"]) {
                    wx.getUserInfo({
                        withCredentials: !0,
                        success: function (n) {
                            const t = p();
                            K = n, t.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), d(t);
                        },
                    });
                }
            },
        }), y("app", "show");
    }

    function e() {
        b = Date.now(), "" === K && wx.getSetting({
            success: function (n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !0,
                    success: function (n) {
                        K = n, q = g(n.userInfo.avatarUrl.split("/"));
                        const t = p();
                        t.ufo = w(n), d(t);
                    },
                });
            },
        }), y("app", "hide");
    }

    function a(n) {
        J++ , _("event", "ald_error_message", n);
    }

    function r(n) {
        X = n;
    }

    function i() {
        z = this.route, Y = Date.now(), $ = 0, Z = 0;
    }

    function s() {
        S("page", "hide"), Q = this.route;
    }

    function c() {
        S("page", "unload"), Q = this.route;
    }

    function u() {
        $++;
    }

    function l() {
        Z++;
    }

    function f(n) {
        let t = v(n.path),
            o = {};
        for (var e in O.query) { "ald_share_src" === e && (o[e] = O.query[e]); }
        let a = "";
        if (a = n.path.indexOf("?") == -1 ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", "" !== t) { for (var e in t) { o[e] = t[e]; } }
        o.ald_share_src ? o.ald_share_src.indexOf(N) == -1 && o.ald_share_src.length < 200 && (o.ald_share_src = o.ald_share_src + "," + N) : o.ald_share_src = N;
        for (const r in o) { r.indexOf("ald") == -1 && (a += r + "=" + o[r] + "&"); }
        return n.path = a + "ald_share_src=" + o.ald_share_src, _("event", "ald_share_status", n), n;
    }

    function h() {
        function n() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        return n() + n() + n() + n() + n() + n() + n() + n();
    }

    function d(n) {
        var t = n,
            o = 0,
            e = 0,
            a = function (r) {
                e++ , r ? (n = {}, n.et = Date.now(), n.at = I, n.uu = N, n.v = P, n.ak = t.ak, n.life = t.life, n.ev = t.ev, n.err = "err", n.status = o) : (H++ , n.at = I, n.et = Date.now(), n.uu = N, n.v = P, n.ak = M.app_key, n.wsr = O, n.oifo = E, n.rq_c = H), wx.request({
                    url: "https://" + R + ".aldwx.com/d.html",
                    data: n,
                    header: {
                        AldStat: "MiniApp-Stat",
                        waid: M.appid || "",
                        wst: M.appsecret || "",
                        se: L || "",
                        op: k || "",
                        img: q,
                    },
                    method: "GET",
                    success: function (n) {
                        o = n.statusCode, 200 != n.statusCode && e <= 3 && a("errorsend");
                    },
                    fail: function () {
                        e <= 3 && a("errorsend");
                    },
                });
            };
        a();
    }

    function p() {
        const n = {};
        for (const t in V) { n[t] = V[t]; }
        return n;
    }

    function g(n) {
        for (var t = "", o = 0; o < n.length; o++) { n[o].length > t.length && (t = n[o]); }
        return t;
    }

    function w(n) {
        const t = {};
        for (const o in n) { "rawData" != o && "errMsg" != o && (t[o] = n[o]); }
        return t;
    }

    function v(n) {
        if (n.indexOf("?") == -1) { return ""; }
        const t = {};
        return n.split("?")[1].split("&").forEach(function (n) {
            const o = n.split("=")[1];
            t[n.split("=")[0]] = o;
        }), t;
    }

    function y(n, t) {
        const o = p();
        o.ev = n, o.life = t, o.ec = J, o.st = B, F && (o.qr = F, o.sr = F), C && (o.usr = C), "launch" !== t && (o.ahs = T), "hide" === t && (o.hdr = Date.now() - A, o.dr = Date.now() - U, o.ifo = !!E), d(o);
    }

    function S(n, t) {
        const o = p();
        o.ev = n, o.st = Date.now(), o.life = t, o.pp = z, o.pc = Q, o.dr = Date.now() - B, o.ndr = Date.now() - Y, o.rc = $, o.bc = Z, o.ahs = T, X && "{}" != JSON.stringify(X) && (o.ag = X), F && (o.qr = F, o.sr = F), C && (o.usr = C), W || (nn = z, W = !0, o.ifp = W, o.fp = z), d(o);
    }

    function _(n, t, o) {
        const e = p();
        e.ev = n, e.tp = t, e.st = B, o && (e.ct = o), d(e);
    }

    function m(n, t, o) {
        if (n[t]) {
            const e = n[t];
            n[t] = function (n) {
                o.call(this, n, t), e.call(this, n);
            };
        } else {
            n[t] = function (n) {
                o.call(this, n, t);
            };
        }
    }

    function D(n) {
        const r = {};
        for (const i in n) { "onLaunch" !== i && "onShow" !== i && "onHide" !== i && "onError" !== i && "onPageNotFound" !== i && "onUnlaunch" !== i && (r[i] = n[i]); }
        r.onLaunch = function (o) {
            t.call(this, o), "function" == typeof n.onLaunch && n.onLaunch.call(this, o);
        }, r.onShow = function (t) {
            o.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t);
        }, r.onHide = function () {
            e.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this);
        }, r.onError = function (t) {
            a.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t);
        }, r.onUnlaunch = function () {
            n.onUnlaunch && "function" == typeof n.onUnlaunch && n.onUnlaunch.call(this);
        }, r.onPageNotFound = function (t) {
            n.onPageNotFound && "function" == typeof n.onPageNotFound && n.onPageNotFound.call(this, t);
        }, App(r);
    }

    function x(n) {
        const t = {};
        for (const o in n) { "onLoad" !== o && "onReady" !== o && "onShow" !== o && "onHide" !== o && "onUnload" !== o && "onPullDownRefresh" !== o && "onReachBottom" !== o && "onShareAppMessage" !== o && "onPageScroll" !== o && "onTabItemTap" !== o && (t[o] = n[o]); }
        t.onLoad = function (t) {
            r.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t);
        }, t.onShow = function (t) {
            i.call(this), "function" == typeof n.onShow && n.onShow.call(this, t);
        }, t.onHide = function (t) {
            s.call(this), "function" == typeof n.onHide && n.onHide.call(this, t);
        }, t.onUnload = function (t) {
            c.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t);
        }, t.onReady = function (t) {
            n.onReady && "function" == typeof n.onReady && n.onReady.call(this, t);
        }, t.onReachBottom = function (t) {
            l(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t);
        }, t.onPullDownRefresh = function (t) {
            u(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t);
        }, t.onPageScroll = function (t) {
            n.onPageScroll && "function" == typeof n.onPageScroll && n.onPageScroll.call(this, t);
        }, t.onTabItemTap = function (t) {
            n.onTabItemTap && "function" == typeof n.onTabItemTap && n.onTabItemTap.call(this, t);
        }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function (t) {
            let o = n.onShareAppMessage.call(this, t);
            return void 0 === o ? (o = {}, o.path = this.route) : void 0 === o.path && (o.path = this.route), f.call(this, o);
        }), Page(t);
    }
    var P = "7.0.0",
        R = "log",
        I = "" + Date.now() + Math.floor(1e7 * Math.random()),
        T = "" + Date.now() + Math.floor(1e7 * Math.random()),
        A = "",
        U = 0,
        b = 0,
        L = "",
        k = "",
        q = "",
        H = 0,
        O = "",
        E = "",
        N = function () {
            let n = "";
            try {
                n = wx.getStorageSync("aldstat_uuid");
            } catch (t) {
                n = "uuid_getstoragesync";
            }
            if (n) { E = !1; }
            else {
                n = h(), E = !0;
                try {
                    wx.setStorageSync("aldstat_uuid", n), wx.setStorageSync("ald_ifo", !0);
                } catch (n) {
                    wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
                }
            }
            return n;
        }(),
        B = Date.now(),
        C = "",
        F = "",
        j = "",
        J = 0,
        G = "",
        K = "",
        V = {},
        W = !1,
        z = "",
        Q = "",
        X = "",
        Y = "",
        Z = 0,
        $ = 0,
        nn = "",
        tn = !0;
    ! function () {
        wx.request({
            url: "https://" + R + ".aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat",
            },
            method: "GET",
            success: function (n) {
                200 === n.statusCode && (n.data.version != P && console.warn("您的SDK不是最新版本，请尽快升级！"), n.data.warn && console.warn(n.data.warn), n.data.error && console.error(n.data.error));
            },
        });
    }();
    try {
        const on = wx.getSystemInfoSync();
        V.br = on.brand, V.pm = on.model, V.pr = on.pixelRatio, V.ww = on.windowWidth, V.wh = on.windowHeight, V.lang = on.language, V.wv = on.version, V.wvv = on.platform, V.wsdk = on.SDKVersion, V.sv = on.system;
    } catch (n) { }
    wx.getNetworkType({
        success: function (n) {
            V.nt = n.networkType;
        },
    }), wx.getSetting({
        success: function (n) {
            n.authSetting["scope.userLocation"] ? wx.getLocation({
                type: "wgs84",
                success: function (n) {
                    V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
                },
            }) : M.getLocation && wx.getLocation({
                type: "wgs84",
                success: function (n) {
                    V.lat = n.latitude, V.lng = n.longitude, V.spd = n.speed;
                },
            });
        },
    }), n.prototype.debug = function (n) {
        _("debug", "0", n);
    }, n.prototype.warn = function (n) {
        _("warn", "1", n);
    }, n.prototype.sendEvent = function (n, t) {
        if ("" !== n && "string" == typeof n && n.length <= 255) {
            if ("string" == typeof t && t.length <= 255) { _("event", n, t); }
            else if ("object" == typeof t) {
                if (JSON.stringify(t).length >= 255) { return void console.error("自定义事件参数不能超过255个字符"); }
                _("event", n, JSON.stringify(t));
            } else { void 0 === t ? _("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); }
        }
        else { console.error("事件名称必须为String类型且不能超过255个字符"); }
    }, n.prototype.sendSession = function (n) {
        if ("" === n || !n) { return void console.error("请传入从后台获取的session_key"); }
        if ("" === M.appid || "" === M.appsecret) { return void console.error("请在配置文件中填写小程序的appid和appsecret！"); }
        L = n;
        const t = p();
        t.st = Date.now(), t.tp = "session", t.ct = "session", t.ev = "event", "" === K ? wx.getSetting({
            success: function (n) {
                n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function (n) {
                        t.ufo = w(n), q = g(n.userInfo.avatarUrl.split("/")), "" !== G && (t.gid = G), d(t);
                    },
                }) : "" !== G ? (t.gid = G, d(t)) : console.warn("用户未授权");
            },
        }) : (t.ufo = K, "" !== G && (t.gid = G), d(t));
    }, n.prototype.sendOpenid = function (n) {
        if ("" === n || !n) { return void console.error("openID不能为空"); }
        k = n;
        const t = p();
        t.st = Date.now(), t.tp = "openid", t.ev = "event", t.ct = "openid", d(t);
    };
    return M.plugin ? {
        App: D,
        Page: x,
    } : function (n) {
        ! function () {
            let n = App,
                h = Page;
            App = function (r) {
                m(r, "onLaunch", t), m(r, "onShow", o), m(r, "onHide", e), m(r, "onError", a), n(r);
            }, Page = function (n) {
                const t = n.onShareAppMessage;
                m(n, "onLoad", r), m(n, "onUnload", c), m(n, "onShow", i), m(n, "onHide", s), m(n, "onReachBottom", l), m(n, "onPullDownRefresh", u), void 0 !== t && null !== t && (n.onShareAppMessage = function (n) {
                    if (void 0 !== t) {
                        let o = t.call(this, n);
                        return void 0 === o ? (o = {}, o.path = this.route) : void 0 === o.path && (o.path = this.route), f(o);
                    }
                }), h(n);
            };
        }();
    }();
}