import { BeezyCVPage } from './app.po';

describe('beezy-cv App', () => {
  let page: BeezyCVPage;

  beforeEach(() => {
    page = new BeezyCVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
