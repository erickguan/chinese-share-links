import Sharing from 'discourse/lib/sharing';

export default {
  name: 'it-mjerenje',

  initialize() {
    Sharing.addSource({
      id: 'utroseniSati',
      faIcon: 'fa-check',
      generateUrl(link, title) {
        return "http://erp.rgt.ba/ipPref/Task?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title);
      },
      shouldOpenInPopup: true,
      popupHeight: 480,
      popupWidth: 1120
    });
  }
}
