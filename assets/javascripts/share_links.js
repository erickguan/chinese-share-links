(function() {
  Discourse.ShareLink.addTarget('weibo', {
    serviceIcon: '<i class="fa fa-weibo"></i>',
    generateUrl: function(link, title) {
      return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 370
  });

  Discourse.ShareLink.addTarget('renren', {
    serviceIcon: '<i class="fa fa-renren"></i>',
    generateUrl: function(link, title) {
      return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
    },
    shouldOpenInPopup: true,
    popupHeight: 628
  });

  Discourse.ShareLink.addTarget('qzone', {
    serviceIcon: '<i class="fa fa-qq"></i>',
    generateUrl: function(link, title) {
      return ("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(link) + "&desc=" + encodeURIComponent(title) + "&title=" + encodeURIComponent(title) + "&site=" + encodeURIComponent(link));
    },
    shouldOpenInPopup: true,
    popupHeight: 500
  });

})();
