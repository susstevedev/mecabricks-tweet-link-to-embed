// ==UserScript==
// @name         Mecabricks - Tweet link to embed
// @namespace    http://tampermonkey.net/
// @version      2025-11-04
// @description  Replaces twitter.com links with embeds on Mecabricks
// @author       susstevedev
// @match        https://*.mecabricks.com/*/forum/topic/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://platform.twitter.com/widgets.js
// ==/UserScript==

(function() {
    'use strict';
  
    const posts = document.querySelectorAll('.post .message-wrapper > .text');
    console.log(posts);

    posts.forEach(p => {
        console.log(p);

        p.querySelectorAll('a[href*="twitter.com"]').forEach(a => {
            const url = a.href;
            a.outerHTML = `<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;
        });
    });
})();
