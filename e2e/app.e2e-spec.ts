import { NgYoutubePage } from './app.po';

describe('ng-youtube App', () => {
  let page: NgYoutubePage;

  beforeEach(() => {
    page = new NgYoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
