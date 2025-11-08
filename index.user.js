// ==UserScript==
// @name         Mecabricks - Tweet link to embed
// @namespace    http://tampermonkey.net/
// @version      2025-11-08
// @description  Replaces twitter.com links with embeds on Mecabricks. Also tries to fix the embed on the homepage
// @author       susstevedev
// @match        https://*.mecabricks.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://platform.twitter.com/widgets.js
// ==/UserScript==

(function() {
    'use strict';

    const WINDOW_URL = window.location.href
    if(WINDOW_URL.includes('forum')) {
        const posts = document.querySelectorAll('.post .message-wrapper > .text');
        console.log(posts);

        posts.forEach(p => {
            console.log(p);

            p.querySelectorAll('a[href*="twitter.com"]').forEach(a => {
                const url = a.href;
                a.outerHTML = `<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;
            });
        });
    } else {
        const twtwrapper = document.querySelector('#superglobal #twitter-wrapper #twitter-timeline');
        twtwrapper.innerHTML = `<a class="twitter-timeline" href="https://twitter.com/Mecabricks?ref_src=twsrc%5Etfw">Tweets by Mecabricks</a>`;
        const renderedtl = document.querySelector("#superglobal #twitter-wrapper #twitter-timeline .twitter-timeline.twitter-timeline-rendered");
    }
})();
