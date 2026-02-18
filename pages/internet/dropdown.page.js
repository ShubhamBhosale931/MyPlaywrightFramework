class DropdownPage {
  constructor(page) {
    this.page = page;
    this.dropdown = page.locator('#dropdown');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption(value) {
    await this.dropdown.selectOption(value);
  }

  async getSelectedValue() {
    return await this.dropdown.inputValue();
  }
}

module.exports = { DropdownPage };
