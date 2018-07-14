import { AppPage } from './app.po';
// import { element } from '../../node_modules/protractor';
import { by, element, browser, protractor } from 'protractor';
import { EMLINK } from 'constants';

var origFn = browser.driver.controlFlow().execute;

// to execute more slowly
browser.driver.controlFlow().execute = function () {
  var args = arguments;
  origFn.call(browser.driver.controlFlow(), function () {
    return protractor.promise.delayed(300);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.waitForAngularEnabled(false);
  });

  it('initial language is english', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Developed with');
  });

  it('change language to spanish', () => {
    page.changeLanguageToSpanish().then(result => {
      page.getLanguageArray().then(options => {
        options[1].click().then(result => {
          expect(page.getParagraphText()).toContain('Desarrollado con');
        });
      })
    });

  });

  it('show current temperatures', () => {
    expect(page.getCurrentTable().isDisplayed());
  });

});


