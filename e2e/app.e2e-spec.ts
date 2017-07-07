import { BindcomponentPage } from './app.po';

describe('bindcomponent App', () => {
  let page: BindcomponentPage;

  beforeEach(() => {
    page = new BindcomponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
