import { NgrxAppPage } from './app.po';

describe('ngrx-app App', () => {
  let page: NgrxAppPage;

  beforeEach(() => {
    page = new NgrxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
