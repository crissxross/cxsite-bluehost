import { CxsitePage } from './app.po';

describe('cxsite App', function() {
  let page: CxsitePage;

  beforeEach(() => {
    page = new CxsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
