import { HrbcPage } from './app.po';

describe('hrbc App', () => {
  let page: HrbcPage;

  beforeEach(() => {
    page = new HrbcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
