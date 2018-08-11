import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLandingPageTitle() {
    return element(by.css('app-home h1')).getText();
  }

  get1100dLink() {
    return element(by.css('[id="1100d"]')).getText();
  }

  getLoginLink() {
    return element(by.css('[routerlink="/login"]'));
  }

  getLoginPageTitle() {
    return element(by.css('app-login h1')).getText();
  }
}
