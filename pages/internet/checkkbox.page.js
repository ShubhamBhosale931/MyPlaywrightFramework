export class CheckboxPage {
  constructor(page) {
    this.page = page;
    this.checkbox1 = page.locator('#checkboxes input').nth(0);
    this.checkbox2 = page.locator('#checkboxes input').nth(1);
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
  }

  async checkFirst() {
    if (!(await this.checkbox1.isChecked())) {
      await this.checkbox1.check();
    }
  }

  async uncheckSecond() {
    if (await this.checkbox2.isChecked()) {
      await this.checkbox2.uncheck();
    }
  }

  async isFirstChecked() {
    return await this.checkbox1.isChecked();
  }
}

    //  module.exports = { CheckboxPage };
