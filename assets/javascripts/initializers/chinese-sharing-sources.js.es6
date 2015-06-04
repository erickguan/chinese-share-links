import Sharing from 'discourse/lib/sharing';

export default {
  name: 'chinese-sharing-sources',

  initialize() {
    Sharing.addSource({
      id: 'weibo',
      faIcon: 'fa-weibo',
      generateUrl(link, title) {
        return "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'renren',
      faIcon: 'fa-renren',
      generateUrl(link, title) {
        return "http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 628
    });

    Sharing.addSource({
      id: 'wechat',
      faIcon: 'fa-weixin',
      generateUrl(link) {
        return "http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link);
      },
      shouldOpenInPopup: true,
      popupHeight: 200
    });
  }
}
