class InputsPage {
  constructor(page) {
    this.page = page;
    this.inputBox = page.locator('input[type="number"]');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/inputs');
  }

  async enterValue(value) {
    await this.inputBox.fill(value);
  }

  async getValue() {
    return await this.inputBox.inputValue();
  }
}

module.exports = { InputsPage };
