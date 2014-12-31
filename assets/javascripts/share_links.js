(function() {
  Discourse.ShareLink.addTarget('weibo', {
    iconClass: 'fa-weibo',
    generateUrl: function(link, title) {
      return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 370
  });

  Discourse.ShareLink.addTarget('renren', {
    iconClass: 'fa-renren',
    generateUrl: function(link, title) {
      return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

  Discourse.ShareLink.addTarget('wechat', {
    iconClass: 'fa-wechat',
    generateUrl: function(link) {
      return ("http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link));
    },
    shouldOpenInPopup: true,
    popupHeight: 200
  });

})();
