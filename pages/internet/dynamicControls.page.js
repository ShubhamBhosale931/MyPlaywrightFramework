class DynamicControlsPage {
  constructor(page) {
    this.page = page;
    this.checkbox = page.locator('#checkbox input');
    this.removeBtn = page.locator('button', { hasText: 'Remove' });
    this.enableBtn = page.locator('button', { hasText: 'Enable' });
    this.inputField = page.locator('#input-example input');
    this.message = page.locator('#message');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  }

  async removeCheckbox() {
    await this.removeBtn.click();
    await this.message.waitFor();
  }

  async enableInput() {
    await this.enableBtn.click();
    await this.message.waitFor();
  }

  async isInputEnabled() {
    return await this.inputField.isEnabled();
  }
}

module.exports = { DynamicControlsPage };
