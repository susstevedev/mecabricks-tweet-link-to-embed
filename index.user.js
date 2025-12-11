// ==UserScript==
// @name         Mecabricks - Tweet link to embed
// @namespace    http://tampermonkey.net/
// @version      2025-12-09
// @description  Replaces twitter.com links with embeds on Mecabricks. Also tries to fix the embed on the homepage.
// @author       susstevedev
// @match        https://*.mecabricks.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://platform.twitter.com/widgets.js
// ==/UserScript==

(function() {
    'use strict';

    function parse_links(p) {
        if(!p.querySelector('blockquote[class*="twitter-tweet"]')) {
            p.querySelectorAll('a[href*="twitter.com"]').forEach(a => {
                const url = a.href;
                a.outerHTML = `<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;
            });

            p.querySelectorAll('a[href*="x.com"]').forEach(a => {
                const url = a.href;
                a.outerHTML = `<blockquote class="twitter-tweet"><a href="${url}"></a></blockquote>`;
            });
        }
    }

    const WINDOW_URL = window.location.href

    //const observer = new MutationObserver(function(mutationsList, observer) {
        if(WINDOW_URL.includes('forum')) {
            const posts = document.querySelectorAll('.post .message-wrapper > .text');
            console.log(posts);

            posts.forEach(p => {
                console.log(p);
                parse_links(p);
            });
        } else if(WINDOW_URL.includes('messages')) {
            const messages = document.querySelectorAll('#conversation-messages .item .content');
            console.log(messages);

            messages.forEach(p => {
                console.log(p);
                parse_links(p);

                const messageUsernames = document.querySelector('#conversations-list');
                messageUsernames.addEventListener('click', parse_links(p));
            });
        } else {
            const twtwrapper = document.querySelector('#superglobal #twitter-wrapper #twitter-timeline');
            twtwrapper.innerHTML = `<a class="twitter-timeline" href="https://twitter.com/Mecabricks?ref_src=twsrc%5Etfw">Tweets by Mecabricks</a>`;
            const renderedtl = document.querySelector("#superglobal #twitter-wrapper #twitter-timeline .twitter-timeline.twitter-timeline-rendered");
        }
    //});

    //observer.observe(document.body, { childList: true, subtree: true });

    /*setTimeout(() => {
        observer.observe(document.body, { childList: true, subtree: true });
    }, 1000);*/
})();
