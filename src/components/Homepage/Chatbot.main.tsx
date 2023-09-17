'use client';
import { useEffect } from 'react';

const BotsonicWidget = () => {
  useEffect(() => {
    (function (w, d, s, o, f, js, fjs) {
      w['botsonic_widget'] = o;
      w[o] =
        w[o] ||
        function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(
      window,
      document,
      'script',
      'Botsonic',
      'https://widget.writesonic.com/CDN/botsonic.min.js'
    );
    Botsonic('init', {
      serviceBaseUrl: 'https://api.botsonic.ai',
      token: 'bf47e39e-e149-4a73-9d63-a73535fb1c03'
    });
  }, []);

  return null;
};

export default BotsonicWidget;
