import { MaterialLayoutPage } from './app.po';

describe('material-layout App', () => {
  let page: MaterialLayoutPage;

  beforeEach(() => {
    page = new MaterialLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
