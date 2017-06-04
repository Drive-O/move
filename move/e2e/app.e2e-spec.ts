import { MovePage } from './app.po';

describe('move App', function() {
  let page: MovePage;

  beforeEach(() => {
    page = new MovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
