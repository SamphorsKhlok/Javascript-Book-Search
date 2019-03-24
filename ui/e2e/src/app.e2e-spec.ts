import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Javascript Books', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Javascript Books');
  });

  it('should display Sort and Filter as part of Books Component', () => {
    page.navigateTo();
    expect(page.getAsideText()).toEqual('Sort by');
  });

  it('sort by (pages) default should be (JavaScript Enlightenment) be the first', () => {
    page.navigateTo();
    expect(page.getFirstBookTitle()).toContain('JavaScript Enlightenment');
  });

  it('sort by (release date) should be (JavaScript: The Good Parts) be the first', () => {
    page.navigateTo();
    page.getSortsInput('releaseDate').click();
    expect(page.getFirstBookTitle()).toContain('JavaScript: The Good Parts');
  });

  it('sort by (author) should be (JavaScript: The Good Parts) be the first', () => {
    page.navigateTo();
    page.getSortsInput('author').click();
    expect(page.getFirstBookTitle()).toContain('JavaScript: The Good Parts');
  });

  it('page filter for 0 pages', () => {
    page.navigateTo();
    const filter = page.getFilterInput();
    filter.sendKeys('0');
    expect(page.getAllResult().count()).toBe(6);
  });
  it('page filter for 200 pages', () => {
    page.navigateTo();
    const filter = page.getFilterInput();
    filter.sendKeys('200');
    expect(page.getAllResult().count()).toBe(4);
  });
  it('page filter for 600 pages', () => {
    page.navigateTo();
    const filter = page.getFilterInput();
    filter.sendKeys('600');
    expect(page.getAllResult().count()).toBe(0);
  });
  it('sort by releaseDate and filter for 200 pages, then reset', () => {
    page.navigateTo();
    page.getSortsInput('releaseDate').click();
    const filter = page.getFilterInput();
    filter.sendKeys('200');
    page.getResetButton().click();
    expect(page.getFirstBookTitle()).toContain('JavaScript Enlightenment');
    expect(page.getAllResult().count()).toBe(6);
  });
  it('sort by releaseDate and filter for 200 pages', () => {
    page.navigateTo();
    const filter = page.getFilterInput();
    filter.sendKeys('200');
    page.getSortsInput('releaseDate').click();
    expect(page.getFirstBookTitle()).toContain('JavaScript: The Definitive Guide');
    expect(page.getAllResult().count()).toBe(4);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
