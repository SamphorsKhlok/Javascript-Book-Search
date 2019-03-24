import { browser, by, element } from 'protractor';
import {el} from '@angular/platform-browser/testing/src/browser_util';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-menu h2')).getText() as Promise<string>;
  }

  getAsideText() {
    return element(by.css('app-books aside h2:nth-child(1)')).getText() as Promise<string>;
  }

  getResetButton() {
    return element(by.id('reset'));
  }

  getFilterInput() {
    return element(by.id('filter'));
  }
  getSortsInput(id) {
    return element(by.id(id));
  }
  getAllResult() {
    return element.all(by.css('app-book'));
  }
  getFirstBookTitle() {
    return element(by.css('app-book:nth-child(1) div div.col-sx-6.col-s-12.col-m-12.col-l-12.bookDetail div:nth-child(1) h3'))
      .getText() as Promise<string>;
  }
}
