class ContextMenuPage {
  constructor(page) {
    this.page = page;
    this.box = page.locator('#hot-spot');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/context_menu');
  }

  async rightClickBox() {
    await this.box.click({ button: 'right' });
  }

  async handleAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });
  }
}

module.exports = { ContextMenuPage };
