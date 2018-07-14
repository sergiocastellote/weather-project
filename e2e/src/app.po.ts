import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.title-header')).getText();
  }

  changeLanguageToSpanish() {
    return element(by.css('.select-language')).click();
  }

  getLanguageArray() {
    return element.all(by.tagName('option'));
  }

  getCurrentTable() {
    return element(by.id('currentTimeTable'));
  }


}
