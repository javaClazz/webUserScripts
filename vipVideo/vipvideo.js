// ==UserScript==
// @name        各站VIP视频播放插件
// @namespace   undefined
// @version     1.0.0
// @description 各站VIP视频播放插件
// @author      Anyvone
// @encoding    utf-8
// @match       *://v.youku.com/*
// @match       *://*.iqiyi.com/*
// @match       *://*.le.com/*
// @match       *://*.mgtv.com/*
// @match       *://*.tudou.com/*
// @mathc       *://*.pptv.com/*
// @mathc       *://*.qq.com/*
// @run-at 		document-end
// ==/UserScript==


var host = window.location.host;
var path = window.location.pathname;
var inq = '<iframe width="100%" height="400px" frameborder="0" scrolling="no" name="myframe" id="myframe" src="http://api.obest.net/v/?url=';
var inh = '"></iframe>';
if (host.indexOf("youku.com") > 0) {
    if (path.indexOf("id_")) {
        var video = "http://v.youku.com" + path;
        if (document.getElementById("playerBox")) {
            document.getElementById("playerBox").innerHTML = inq + video + inh;
        }
    }
} //优酷
else if (host.indexOf("iqiyi.com") > 0) {
    if (path.indexOf("v_")) {
        var video = "http://www.iqiyi.com" + path;
        var input = document.getElementsByTagName("div");
        for (i = 0; i < input.length; i++) {
            if (input[i].getAttribute("class") == "videoArea") {
                input[i].innerHTML = inq + video + inh;
            }
        }
    }
} //爱奇艺
else if (host.indexOf("le.com") > 0) {
    if (path.indexOf("vplay")) {
        var video = "http://www.le.com" + path;
        if (document.getElementById("fla_box_con")) {
            document.getElementById("fla_box_con").innerHTML = inq + video + inh;
        }
    }
} //乐视
else if (host.indexOf("mgtv.com") > 0) {
    if (path.indexOf("b/")) {
        var video = "http://www.mgtv.com" + path;
        if (document.getElementById("mgtv-player-wrap")) {
            document.getElementById("mgtv-player-wrap").innerHTML = inq + video + inh;
				console.log('真实视频地址：' + video);
        }
    }
} //芒果
else if (host.indexOf("tudou.com") > 0) {
    if (path.indexOf("v/")) {
        var video = "http://video.tudou.com" + path;
        var input = document.getElementsByTagName("div");
        for (i = 0; i < input.length; i++) {
            if (input[i].getAttribute("class") == "td-playbox") {
                input[i].innerHTML = inq + video + inh;
            }
        }
    }
} //土豆
else if (host.indexOf("pptv.com") > 0) {
    if (path.indexOf("show/")) {
        var video = "http://v.pptv.com" + path;
        if (document.getElementById("pptv_playpage_box")) {
            document.getElementById("pptv_playpage_box").innerHTML = inq + video + inh;
        }
    }
} //PPTV
else if (host.indexOf("qq.com") > 0) {
    if (path.indexOf("cover/")) {
        var video = "https://v.qq.com" + path;
        if (document.getElementById("mod_player")) {
            if (confirm("目前腾讯全站启用https，部分视频无法内嵌播放，点击确定到新窗口播放，点击取消在源站观看")) {
                document.getElementById("mod_player").innerHTML = "";
                window.open("http://api.obest.net/v/?url=" + video);
            } else {}
        }
    }
} //QQ