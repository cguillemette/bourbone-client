export class BourbonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bourbone-app p')).getText();
  }
}
