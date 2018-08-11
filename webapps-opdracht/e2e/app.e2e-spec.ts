import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Astrophoto gallery App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display landing page', () => {
    page.navigateTo();
    expect(page.getLandingPageTitle()).toEqual('Astrophotography by Michael Verhaeghe');
  });

  it('should display Canon 1100D link', () => {
    page.navigateTo();
    expect(page.get1100dLink()).toEqual('Canon 1100D');
  });

  it('should go to login page', () => {
    page.navigateTo();
    page.getLoginLink().click();
    expect(page.getLoginPageTitle()).toEqual('Log in');
  });
});
