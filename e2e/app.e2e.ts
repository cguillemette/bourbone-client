import { BourbonePage } from './app.po';

describe('bourbone App', function() {
  let page: BourbonePage;

  beforeEach(() => {
    page = new BourbonePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
  });
});
