// ==UserScript==
// @name        秒拍视频播放助手v1版
// @namespace   undefined
// @version     1.0.0
// @description 秒拍视频自动播放
// @author      Anyvone
// @match       *://*.miaopai.com/show/*
// @require     https://code.jquery.com/jquery-latest.js
// @updateURL   https://github.com/javaClazz/webUserScripts/miaopai/miaopaiAutoplay.user.js
// @downloadURL https://github.com/javaClazz/webUserScripts/miaopai/miaopaiAutoplay.user.js
// @run-at 		document-start
// @grant       unsafeWindow
// @grant       GM_setClipboard
// @grant       GM_xmlhttpRequest
// ==/UserScript==
console.log("hello, my lord!");
var _embed;
var _setTimeout = window.setTimeout;

_setTimeout(_check4Init, 1000);

function _check4Init () {
	_embed = $("embed")[0];

	if ( !_embed ) {
		console.log("dom tree has not rendered yet! I will retry after 1s, my lord!");
		_setTimeout(_check4Init, 1000);
		return;
	}

	_initWork();
}

function _initWork () {
	console.log( _embed );
}