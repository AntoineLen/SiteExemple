




/*
     FILE ARCHIVED ON 5:47:20 Aug 6, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:45:17 Aug 24, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var sc_width = screen.width;
var sc_height = screen.height;
var sc_referer = "" + document.referrer;
try { sc_referer = "" + parent.document.referrer }
catch (ex) { sc_referer = "" + document.referrer }
var sc_unique = 0;
var sc_returning = 0;
var sc_returns = 0;
var sc_error = 0;
var sc_remove = 0;
var sc_cls = -1;
var sc_inv = 0;
var sc_os = "";
var sc_title = "";
var sc_url = "";
var sc_base_dir = "";
var sc_click_dir = "";
var sc_link_back_start = "";
var sc_link_back_end = "";
var sc_security_code = "";
var sc_http_url = "http";
var sc_host = "statcounter.com";
var sc_dc = "c";
var sc_alt_text = "StatCounter - Free Web Tracker and Counter";
var sc_counter_size = "";
var sc_prerendering = 0;
var sc_uuid = "";
var sc_uuid_q = "&u1=za";
var sc_unique_returning = "";
var _statcounter_pending = _statcounter;
var _statcounter = { push: function (args) { } };
if (window.sc_invisible) if (window.sc_invisible == 1) sc_inv = 1;
if (window.sc_click_stat) sc_cls = window.sc_click_stat; sc_doc_loc = "" + document.location;
myRE = new RegExp("^https", "i"); if (sc_doc_loc.match(myRE)) sc_http_url = "https";
if (window.sc_local) sc_base_dir = sc_local;
else {
    if (sc_cls == -1) sc_cls = 1;
    sc_base_dir = sc_http_url + "://" + sc_dc + "." + sc_host + "/"
}
sc_click_dir = sc_base_dir;
if (window.sc_counter_target) sc_base_dir += window.sc_counter_target + "?";
else if (window.sc_text) sc_base_dir += "text.php?";
else sc_base_dir += "t.php?";
if (window.sc_project) {
    if (sc_project == "4135125" || sc_project == "6169619" || sc_project == "6222332" || sc_project == "5106510" || sc_project == "6311399" || sc_project == "6320092" || sc_project == "5291656" || sc_project == "7324465" || sc_project == "6640020" || sc_project == "4629288" || sc_project == "1480088" || sc_project == "2447031")
        if (Math.floor(Math.random() * 6) != 1) sc_remove = 1; sc_base_dir += "sc_project=" + sc_project
}
else if (window.usr)
    sc_base_dir += "usr=" + usr;
else
    sc_error = 1;
if (window.sc_remove_link) {
    sc_link_back_start = ""; sc_link_back_end = ""
}
else {
    sc_link_back_start = '<a class="statcounter" href="/web/20150806054720/http://www.' + sc_host + '" target="_blank">'; sc_link_back_end = "</a>"
}
sc_date = new Date;
sc_time = sc_date.getTime();
sc_time_difference = 36E5;
sc_title = "" + document.title;
sc_url = "" + document.location;
sc_referer = sc_referer.substring(0, 600);
sc_title = sc_title.substring(0, 300);
sc_url = sc_url.substring(0, 300);
sc_referer = escape(sc_referer);
if (encodeURIComponent)
    sc_title = encodeURIComponent(sc_title);
else
    sc_title = escape(sc_title);
sc_url = escape(sc_url);
if (window.sc_security)
    sc_security_code = sc_security;
if (sc_script_num)
    sc_script_num++;
else
    var sc_script_num = 1;
if (typeof _sc_imgs == "undefined")
    var _sc_imgs = {};
var sc_pageview_tag_string = "";
(function (pool, width, chunks, digits) {
    if (sc_remove != 1)
        if (document.webkitVisibilityState != "prerender")
            sc_prerendering = 0;
        else {
            sc_prerendering = 1;
            document.addEventListener("webkitvisibilitychange", function (evt) {
                if (sc_prerendering == 1) {
                    sc_prerendering = 2; sc_write_data()
                }
                else
                    return
            }, false)
        }
    var _sc_project_int = parseInt(sc_project, 10);
    if (window.sc_project && (_sc_project_int == 9560334 || _sc_project_int == 6709687 || _sc_project_int == 9879613 || _sc_project_int == 4124138 || _sc_project_int == 204609 || 9993602 < _sc_project_int &&
        _sc_project_int <= 10056047 || _sc_project_int > 10128785))
        try {
            var startdenom = Math.pow(width, chunks), significance = Math.pow(2, digits), overflow = significance * 2, mask = width - 1;
            var sc_seededrandom;
            var sc_seedrandom = function (seed, use_entropy) {
                var key = [];
                var shortseed = mixkey(flatten(use_entropy ? [seed, tostring(pool)] : 0 in arguments ? seed : autoseed(), 3), key);
                var arc4 = new ARC4(key); mixkey(tostring(arc4.S), pool);
                sc_seededrandom = function () {
                    var n = arc4.g(chunks), d = startdenom, x = 0; while (n < significance) {
                        n = (n + x) * width; d *= width;
                        x = arc4.g(1)
                    } while (n >= overflow) { n /= 2; d /= 2; x >>>= 1 } return (n + x) / d
                }; return shortseed
            };
            function ARC4(key) {
                var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
                if (!keylen) key = [keylen++];
                while (i < width) s[i] = i++;
                for (i = 0; i < width; i++) { s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])]; s[j] = t } (me.g = function (count) {
                    var t, r = 0, i = me.i, j = me.j, s = me.S;
                    while (count--) { t = s[i = mask & i + 1]; r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)] } me.i = i; me.j = j;
                    return r
                })
                    (width)
            }
            function flatten(obj, depth) {
                var result = [], typ = (typeof obj)[0], prop;
                if (depth && typ == "o")
                    for (prop in obj)
                        try {
                            result.push(flatten(obj[prop], depth - 1))
                        }
                        catch (e) { }
                return result.length ? result : typ == "s" ? obj : obj + "\x00"
            }
            function mixkey(seed, key) {
                var stringseed = seed + "", smear, j = 0;
                while (j < stringseed.length) key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
                return tostring(key)
            }
            function autoseed(seed) {
                try {
                    window.crypto.getRandomValues(seed = new Uint8Array(width));
                    return tostring(seed)
                }
                catch (e) {
                    return [+new Date, window, window.navigator.plugins, window.screen, tostring(pool)]
                }
            }
            function tostring(a) {
                return String.fromCharCode.apply(0, a)
            }
            mixkey(Math.random(), pool);
            function createCookie(name, value, domain) {
                var expiration = new Date;
                expiration.setTime(expiration.getTime() + 1E3 * 60 * 60 * 24 * 365 * 2);
                document.cookie = name + "=" + value + "; expires = " + expiration.toGMTString() + "; domain = " + domain + "; path = /"
            }
            function readCookie(name) {
                var nameEQ = name + "=";
                if (document.cookie) {
                    var ca = document.cookie.split(";");
                    for (var i = 0; i < ca.length; i++) {
                        var c = ca[i];
                        while (c.charAt(0) == " ") c = c.substring(1, c.length);
                        if (c.indexOf(nameEQ) == 0)
                            return c.substring(nameEQ.length, c.length)
                    }
                }
                return null
            }
            function removeCookie(name, domain) {
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + domain + "; path=/"
            }
            function detectBrowserFeatures() {
                var browserFeatures = [];
                var i;
                var mimeType;
                var pluginMap =
                {
                    pdf: "application/pdf", qt: "video/quicktime", realp: "audio/x-pn-realaudio-plugin", wma: "application/x-mplayer2", dir: "application/x-director", fla: "application/x-shockwave-flash", java: "application/x-java-vm", gears: "application/x-googlegears",
                    ag: "application/x-silverlight"
                };
                var devicePixelRatio = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
                if (!(new RegExp("MSIE")).test(navigator.userAgent)) {
                    if (navigator.mimeTypes && navigator.mimeTypes.length)
                        for (i in pluginMap)
                            if (Object.prototype.hasOwnProperty.call(pluginMap, i)) {
                                mimeType = navigator.mimeTypes[pluginMap[i]];
                                browserFeatures.push(mimeType && mimeType.enabledPlugin ? "1" : "0")
                            }
                    if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) browserFeatures.push("java"); if (typeof window.GearsFactory === "function") browserFeatures.push("gears")
                }
                browserFeatures.push(screen.width * devicePixelRatio + "x" + screen.height * devicePixelRatio);
                return browserFeatures.join("")
            }
            function generate_uuid() {
                var now = new Date;
                var include_dashes = false;
                var guid_len = 32;
                if (include_dashes)
                    guid_len = 36;
                var time = Math.round(now.getTime() / 1E3) + now.getMilliseconds();
                var seed = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + time; sc_seedrandom(seed);
                var chars = "0123456789ABCDEF".split(""), guid = new Array(guid_len), rnd = 0, r;
                for (var i = 0; i < guid_len; i++)
                    if (include_dashes && (i == 8 || i == 13 || i == 18 || i == 23))
                        guid[i] = "-";
                    else if (i == 12 && !include_dashes || i == 14 && include_dashes) guid[i] = "4";
                    else if (i == 13 && !include_dashes || i == 15 && include_dashes) guid[i] = "F";
                    else {
                        if (rnd <= 2)
                            rnd = 33554432 + sc_seededrandom() * 16777216 | 0; r = rnd & 15; rnd = rnd >> 4; guid[i] = chars[i == 19 ? r & 3 | 8 : r]
                    }
                return guid.join("")
            }
            if (typeof window.sc_first_party_cookie == "undefined")
                var sc_first_party_cookie = 1;
            if (sc_first_party_cookie == 1) {
                if (typeof window.sc_cookie_domain == "undefined")
                    var sc_cookie_domain = window.location.host;
                if (sc_cookie_domain.substring(0, 1) != ".") sc_cookie_domain = "." + sc_cookie_domain;
                var sc_cookie_name = "sc_is_visitor_unique";
                var now_secs = Math.round((new Date).getTime() / 1E3);
                try {
                    var sc_cookie = readCookie(sc_cookie_name)
                }
                catch (e) {
                    var sc_cookie = false; sc_uuid = ".ex"
                }
                var sc_cookie_value = "";
                if (sc_cookie) {
                    removeCookie(sc_cookie_name, sc_cookie_domain);
                    var cookie_string = sc_cookie.substring(2);
                    var cookie_projects = cookie_string.split("-");
                    var tmp_array = new Array;
                    var sc_project_exists = false;
                    for (var i = 0; i < cookie_projects.length; i++) {
                        var cookie_project = cookie_projects[i].split(".");
                        if (cookie_project[0] == sc_project) {
                            sc_project_exists = true;
                            var last_session_time = parseInt(cookie_project[1], 10);
                            if (last_session_time > 1E12) last_session_time = last_session_time / 1E3;
                            if (sc_cookie.substring(0, 2) == "sc") last_session_time -= 60 * 30;
                            var returning_times = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];
                            var returning_values = [];
                            if (cookie_project.length < 5) {
                                var r_30 = parseInt(cookie_project[2], 10);
                                if (isNaN(r_30)) r_30 = 1; returning_values = [r_30, r_30, r_30, r_30, r_30, r_30, r_30, r_30, r_30]; sc_uuid = "." + generate_uuid()
                            }
                            else {
                                sc_uuid = "." + cookie_project[2];
                                if (sc_uuid == ".0") sc_uuid = "." + generate_uuid();
                                for (var ir = 0; ir < returning_times.length; ir++) {
                                    var rval = parseInt(cookie_project[ir + 3], 10);
                                    if (isNaN(rval)) rval = 1; returning_values.push(rval)
                                }
                            }
                            sc_unique_returning += "&jg=" + (now_secs - last_session_time);
                            for (var ir = 0; ir < returning_times.length; ir++)
                                if (now_secs > last_session_time + 60 * returning_times[ir])
                                    returning_values[ir]++; sc_unique_returning += "&rr=" + returning_values.join("."); tmp_array.push(sc_project + "." + now_secs + sc_uuid + "." + returning_values.join("."))
                        }
                        else tmp_array.push(cookie_projects[i])
                    }
                    if (!sc_project_exists) { sc_uuid = "." + generate_uuid(); tmp_array.push(sc_project + "." + now_secs + sc_uuid + ".1.1.1.1.1.1.1.1.1"); sc_unique_returning += "&jg=new&rr=1.1.1.1.1.1.1.1.1" } sc_cookie_value =
                        tmp_array.join("-"); createCookie(sc_cookie_name, "rx" + sc_cookie_value, sc_cookie_domain)
                }
                else if (sc_uuid != ".ex") {
                    sc_uuid = "." + generate_uuid(); sc_cookie_value = sc_project + "." + now_secs + sc_uuid + ".1.1.1.1.1.1.1.1.1";
                    createCookie(sc_cookie_name, "rx" + sc_cookie_value, sc_cookie_domain);
                    if (readCookie(sc_cookie_name))
                        sc_unique_returning += "&jg=new&rr=1.1.1.1.1.1.1.1.1";
                    else
                        sc_uuid = ".na"
                }
                if (sc_uuid != "")
                    sc_uuid_q = "&u1=" + sc_uuid.substring(1)
            }
        }
        catch (e) {
            if (typeof encodeURIComponent != "function") encodeURIComponent = function (s) {
                return escape(s)
            };
            var vDebug = "";
            vDebug += "unique_returning: " + sc_unique_returning + "\n";
            vDebug += "uuid: " + sc_uuid + "\n";
            for (var prop in e)
                vDebug += "property: " + prop + " value: [" + e[prop] + "]\n";
            vDebug += "toString(): " + " value: [" + e.toString() + "]\n";
            var sc_debug_img = new Image;
            sc_debug_img.src = "/web/20150806054720/http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" +
                sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(vDebug);
            sc_unique_returning = "";
            sc_uuid_q = "&u1=f2"
        }
    function hasOwnProperty(obj, prop) {
        var proto = obj.__proto__ || obj.constructor.prototype;
        return prop in obj && (!(prop in proto) || proto[prop] !== obj[prop])
    }
    if (Object.prototype.hasOwnProperty)
        var hasOwnProperty = function (obj, prop) {
            return obj.hasOwnProperty(prop)
        };
    function _sc_strip_tags(input, allowed) {
        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, commentsAndPhpTags = /\x3c!--[\s\S]*?--\x3e|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, "").replace(tags, function ($0, $1) {
            return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
        })
    }
    function _sc_validateTags(tags) {
        var max_tag_count = 5;
        var min_tag_char_length = 1;
        var max_tag_char_length = 30;
        var errors = [];
        if (!(tags.length % 2 == 0))
            errors.push("Every tag must have a name and value.");
        else {
            if (tags.length / 2 > max_tag_count)
                errors.push("No more than " + max_tag_count + " tags can be passed - " + tags.length / 2 + " passed.");
            for (i = 0; i < tags.length; i++) {
                var tagLength = ("" + tags[i]).length;
                if (tagLength < min_tag_char_length || tagLength > max_tag_char_length) errors.push("Tag names and values must be between " + min_tag_char_length + " and " + max_tag_char_length + " characters in length ('" + tags[i] + "' is " + tags[i].length + " characters long).")
            }
            for (i = 0; i < tags.length; i++)
                if (_sc_strip_tags("" + tags[i]) != "" + tags[i]) errors.push("Tag names and values may not contain HTML tags.")
        }
        if (errors.length != 0) {
            for (i = 0; i < errors.length; i++);
            return false
        } return true
    }
    function _sc_sanitiseTags(tags) {
        for (i = 0; i < tags.length; i++)tags[i] = ("" + tags[i]).trim();
        return tags
    }
    if (Object.prototype.toString.call(_statcounter_pending) === "[object Array]") {
        var arrayLength = _statcounter_pending.length;
        if (arrayLength >= 1)
            if (hasOwnProperty(_statcounter_pending[0], "tags")) {
                var tags = [];
                for (var tag in _statcounter_pending[0]["tags"]) {
                    tags[tags.length] = tag;
                    tags[tags.length] = _statcounter_pending[0]["tags"][tag]
                }
                if (_sc_validateTags(tags)) {
                    tags = _sc_sanitiseTags(tags);
                    for (i = 0; i < tags.length; i = i + 2)
                        sc_pageview_tag_string += "&sc_ev_" + encodeURIComponent(tags[i]) + "=" + encodeURIComponent(tags[i + 1])
                }
            }
    }
    sc_base_dir += "&java=1&security=" + sc_security_code + sc_uuid_q;
    var sc_tracking_url = sc_unique_returning + "&resolution=" + sc_width + "&h=" + sc_height + "&camefrom=" + sc_referer + "&u=" + sc_url + "&t=" + sc_title + "&sc_snum=" + sc_script_num + sc_pageview_tag_string;
    if (window.sc_counter_width && window.sc_counter_height) sc_counter_size = ' width="' + sc_counter_width + '" height="' + sc_counter_height + '"';
    if (window.sc_remove_alt) sc_alt_text = "";
    if (sc_error == 1) document.writeln("Code corrupted. Insert fresh copy.");
    else if (sc_remove == 1);
    else sc_write_data();
    function sc_write_data() {
        if (sc_inv == 1 || sc_prerendering == 2) {
            sc_tracking_url += "&p=" + sc_prerendering + "&invisible=1";
            if (window.sc_call) sc_call++;
            else sc_call = 1;
            try {
                if (typeof readCookie !== 'undefined' && readCookie("sc_pending_" + sc_project))
                    removeCookie("sc_pending_" + sc_project, window.location.host)
            }
            catch (e) { }
            if (false)
                try {
                    var pending_str = readCookie("sc_pending_" + sc_project);
                    if (!pending_str)
                        var pending = {};
                    else
                        try {
                            var pending = JSON.parse(decodeURIComponent(pending_str))
                        }
                        catch (ignore) {
                            var pending = {}
                        }
                    var now = (new Date).getTime();
                    pending[now] = sc_tracking_url;
                    pending_str = encodeURIComponent(JSON.stringify(pending));
                    while (pending_str.length > 4E3) {
                        var smallest_gap = false;
                        var smallest_gap_key = false;
                        for (var sg_ts in pending) {
                            var sg_jg = parseInt(pending[sg_ts].search(/jg=\d+/), 10);
                            if (smallest_gap === false || sg_jg < smallest_gap) {
                                smallest_gap = sg_jg; smallest_gap_key = sg_ts
                            }
                        }
                        if (smallest_gap_key === false)
                            break;
                        delete pending[smallest_gap_key];
                        pending_str = encodeURIComponent(JSON.stringify(pending))
                    }
                    createCookie("sc_pending_" + sc_project, pending_str, window.location.host);
                    for (var ts in pending)
                        (function (ts_scoped) {
                            var t_url = pending[ts_scoped];
                            _sc_imgs[sc_call + "." + ts_scoped] = new Image;
                            _sc_imgs[sc_call + "." + ts_scoped].onload = function () {
                                var pending = JSON.parse(decodeURIComponent(readCookie("sc_pending_" + sc_project)));
                                delete pending[ts_scoped];
                                var pending_str = encodeURIComponent(JSON.stringify(pending));
                                if (pending_str == "{}") removeCookie("sc_pending_" + sc_project, window.location.host);
                                else createCookie("sc_pending_" + sc_project, pending_str, window.location.host)
                            };
                            if (ts_scoped != now) t_url += "&pg=" + Math.round((now - ts_scoped) / 1E3); _sc_imgs[sc_call + "." + ts_scoped].src = sc_base_dir + "&sc_random=" + Math.random() + t_url
                        })
                            (parseInt(ts, 10))
                }
                catch (e) {
                    if (typeof encodeURIComponent != "function") encodeURIComponent = function (s) {
                        return escape(s)
                    };
                    var vDebug = "";
                    for (var prop in e) vDebug += "e[" + prop + "]: " + e[prop] + "\n";
                    vDebug += "unique_returning: " + sc_unique_returning + "\n"; vDebug += "uuid: " + sc_uuid + "\n";
                    vDebug += "toString(): " + " value: [" + e.toString() + "]\n";
                    var sc_debug_img = new Image;
                    sc_debug_img.src = "/web/20150806054720/http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=pending%20exception:%20" + encodeURIComponent(vDebug)
                }
            else {
                _sc_imgs[sc_call] = new Image;
                _sc_imgs[sc_call].src = sc_base_dir + "&sc_random=" + Math.random() + sc_tracking_url
            }
        }
        else if (window.sc_text)
            document.writeln("<scr" + 'ipt language="JavaScript"' + " src=" + sc_base_dir + "&sc_random=" + Math.random() + sc_tracking_url + "&p=" + sc_prerendering + "&text=" + sc_text + "></scr" + "ipt>");
        else document.writeln('<span class="statcounter">' + sc_link_back_start + '<img src="' + sc_base_dir + "&sc_random=" + Math.random() + sc_tracking_url + "&p=" + sc_prerendering + '" alt="' + sc_alt_text + '" border="0"' + sc_counter_size + ">" + sc_link_back_end + "</span>")
    }
})
    ([], 256, 6, 52);
if (sc_cls > 0)
    if (clickstat_done != 1) {
        var clickstat_done = 1;
        var clickstat_project = window.sc_project;
        var clickstat_security = window.sc_security_code;
        var dlext = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
        if (typeof window.sc_download_type == "string")
            dlext = window.sc_download_type;
        var ltype = "https?|ftp|telnet|ssh|ssl|mailto|spotify";
        var second = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
        var dl = new RegExp("\\.(" + dlext + ")$", "i");
        var lnk = new RegExp("^(" + ltype + "):", "i");
        var domsec = new RegExp("^(" + second + ")$", "i");
        var host_name = location.host.replace(/^www\./i, "");
        var host_splitted = host_name.split(".");
        var domain = host_splitted.pop();
        var host_split = host_splitted.pop();
        if (domsec.test(host_split)) {
            domain = host_split + "." + domain; host_split = host_splitted.pop()
        }
        domain = host_split + "." + domain;
        var lnklocal_mask = "^https?://(.*)(" + domain + "|webcache.googleusercontent.com)";
        var lnklocal = new RegExp(lnklocal_mask, "i");
        if (document.getElementsByTagName) {
            var anchors = document.getElementsByTagName("a");
            for (var i = 0; i < anchors.length; i++) {
                var anchor = anchors[i];
                if (anchor.onmousedown) {
                    var original_click = anchor.onmousedown;
                    var s = original_click.toString().split("\n").join(" ");
                    var bs = s.indexOf("{");
                    var head = s.substr(0, bs);
                    var ps = head.indexOf("(");
                    var pe = head.indexOf(")");
                    var params = head.substring(ps + 1, pe);
                    var plist = params.split(",");
                    var body = s.substr(bs + 1, s.length - bs - 2);
                    var insert = "sc_clickstat_call(this,'" + sc_click_dir + "');";
                    var final_body = insert + body; var ev_head = "new Function(";
                    var ev_params = ""; var ev_sep = "";
                    for (var sc_i = 0; sc_i < plist.length; sc_i++) {
                        ev_params = ev_sep + "'" + plist[sc_i] + "'"; ev_sep = ","
                    }
                    if (ev_sep == ",") ev_params += ",";
                    var ev_foot = "final_body);";
                    var ev_final = ev_head + ev_params + ev_foot; anchor.onmousedown = eval(ev_final)
                }
                else
                    anchor.onmousedown = new Function("event", "sc_clickstat_call(this,'" + sc_click_dir + "');return true;")
            }
        }

        function sc_none() {
            return
        }

        function sc_delay() {
            if (window.sc_click_stat)
                var d = window.sc_click_stat;
            else
                var d = 0;
            var n = new Date;
            var t = n.getTime() + d;
            while (n.getTime() < t)
                var n = new Date
        }

        function sc_clickstat_call(adata, sc_click_dir) {
            if (adata) {
                var clickmode = 0;
                if (lnk.test(adata))
                    if (lnklocal.test(adata))
                        if (dl.test(adata)) clickmode = 1;
                        else if (window.sc_exit_link_detect && (new RegExp(sc_exit_link_detect, "i")).test(adata)) clickmode = 2;
                        else {
                            if (sc_cls == 2) clickmode = 2
                        }
                    else clickmode = 2;
                if (clickmode != 0) {
                    var sc_link = escape(adata);
                    if (sc_link.length > 0) {
                        if (sc_unique_returning == "")
                            sc_unique_returning = "&jg=&rr=";
                        var sc_req = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + sc_link + "&m=" + clickmode + "&u=" + sc_url + "&t=" + sc_title + "&rand=" + Math.random() + "&u1=" + sc_uuid.substring(1) + sc_unique_returning;
                        var sc_req_image = new Image;
                        sc_req_image.onload = sc_none;
                        sc_req_image.src = sc_req; sc_delay()
                    }
                }
            }
        }

        var sc_gsyn_pattern = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
        var sc_gsyn_pattern2 = "^aswift_[0-9]+$";
        var sc_px;
        var sc_py;

        function sc_adsense_click(sc_data) {
            if (sc_data.src.match(sc_gsyn_pattern))
                var sc_link = escape(sc_data.src);
            else
                var sc_link = escape("Google Adsense " + sc_data.width + "x" + sc_data.height);
            var i = new Image;
            var sc_req = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + sc_link + "&m=2&u=" + sc_url + "&t=" + sc_title + "&rand=" + Math.random(); i.src = sc_req; sc_delay()
        }

        function sc_adsense_init() {
            if (document.all && typeof window.opera == "undefined") {
                var el = document.getElementsByTagName("iframe");
                for (var i = 0; i < el.length; i++)
                    if (el[i].src.match(sc_gsyn_pattern) || el[i].id.match(sc_gsyn_pattern2)) el[i].onfocus = function () { sc_adsense_click(this) }
            }
            else if (typeof window.addEventListener != "undefined") {
                window.addEventListener("unload", sc_exitpage, false);
                window.addEventListener("mousemove", sc_getmouse, true)
            }
        }

        if (typeof window.addEventListener != "undefined")
            window.addEventListener("load", sc_adsense_init, false);

        else if (typeof document.addEventListener != "undefined")
            document.addEventListener("load", sc_adsense_init, false);

        else if (typeof window.attachEvent != "undefined")
            window.attachEvent("onload", sc_adsense_init);

        else if (typeof window.onload == "function") {
            var sc_existing = onload; window.onload = function () {
                sc_existing(); sc_adsense_init()
            }
        }
        else window.onload = sc_adsense_init;

        function sc_getmouse(e) {
            if (typeof e.pageX == "number") {
                sc_px = e.pageX; sc_py = e.pageY
            }
            else if (typeof e.clientX == "number") {
                sc_px = e.clientX; sc_py = e.clientY;
                if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
                    sc_px += document.body.scrollLeft; sc_py += document.body.scrollTop
                }
                else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
                    sc_px += document.documentElement.scrollLeft;
                    sc_py += document.documentElement.scrollTop
                }
            }
        }

        function sc_findy(obj) {
            var y = 0;
            while (obj) {
                y += obj.offsetTop;
                obj = obj.offsetParent
            }
            return y
        }

        function sc_findx(obj) {
            var x = 0;
            while (obj) {
                x += obj.offsetLeft;
                obj = obj.offsetParent
            }
            return x
        }

        function sc_exitpage(e) {
            ad = document.getElementsByTagName("iframe");

            if (typeof sc_px == "undefined")
                return;

            for (var i = 0; i < ad.length; i++) {
                var adLeft = sc_findx(ad[i]);
                var adTop = sc_findy(ad[i]);
                var adW = parseInt(adLeft, 10) + parseInt(ad[i].width, 10) + 15;
                var adH = parseInt(adTop, 10) + parseInt(ad[i].height, 10) + 10;
                var inFrameX = sc_px > adLeft - 10 && sc_px < adW;
                var inFrameY = sc_py > adTop - 10 && sc_py < adH;
                if (inFrameY && inFrameX)
                    if (ad[i].src.match(sc_gsyn_pattern) || ad[i].id.match(sc_gsyn_pattern2))
                        sc_adsense_click(ad[i])
            }
        }
    };