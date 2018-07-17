import { MovieWebsitePage } from './app.po';

describe('movie-website App', function() {
  let page: MovieWebsitePage;

  beforeEach(() => {
    page = new MovieWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
