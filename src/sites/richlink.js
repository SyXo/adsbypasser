// ==UserScript==
// @match          http://richlink.com/app/webscr?cmd=_click&key=*
// ==/UserScript==


$.register({
  rule: {
    host: /^richlink\.com$/,
  },
  ready: function () {
    'use strict';

    var f = $('frameset');
    f = f.onload.toString();
    f = f.match(/url=([^&]+)/);
    if (f) {
      f = decodeURIComponent(f[1]);
    } else {
      f = $('frame[name=site]');
      f = f.src;
    }
    $.redirect(f);
  },
});


// ex: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;
