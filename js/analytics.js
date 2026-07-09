(function () {
  // Google Analytics 4 の測定ID（G- で始まる文字列）
  // https://analytics.google.com/ でプロパティ作成後、管理 > データストリーム から取得
  var GA_ID = 'G-B32H9LV6XR';

  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return;

  var host = location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  document.head.appendChild(script);
})();
