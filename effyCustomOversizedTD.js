// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://s14.trott.pw/pinocchio/geppetto.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function GM_addStyle(css) {
  const style = document.getElementById("GM_addStyleBy8626") || (function() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = "GM_addStyleBy8626";
    document.head.appendChild(style);
    return style;
  })();
  const sheet = style.sheet;
  sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

//demo :
GM_addStyle("td {    padding: 0.35em !important;}");


const sheet = document.getElementById("GM_addStyleBy8626").sheet,
  rules = (sheet.rules || sheet.cssRules);

    console.log("Ciao Effy");


})();
