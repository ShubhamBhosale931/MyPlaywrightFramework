class DynamicLoadingPage {
  constructor(page) {
    this.page = page;
    this.startBtn = page.locator('#start button');
    this.finishText = page.locator('#finish h4');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  }

  async startLoading() {
    await this.startBtn.click();
  }

  async waitForText() {
    await this.finishText.waitFor();
  }

  async getText() {
    return await this.finishText.textContent();
  }
}

module.exports = { DynamicLoadingPage };
