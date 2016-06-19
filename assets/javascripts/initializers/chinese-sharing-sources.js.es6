import Sharing from 'discourse/lib/sharing';

export default {
  name: 'it-mjerenje',

  initialize() {
    Sharing.addSource({
      id: 'utroseniSati',
      faIcon: 'fa-weibo',
      generateUrl(link, title) {
        return "http://172.16.0.50:84/utroseniSati?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 400
    });
  }
}
