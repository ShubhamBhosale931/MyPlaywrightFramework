class AddRemovePage {
  constructor(page) {
    this.page = page;
    this.addButton = page.locator('button[onclick="addElement()"]');
    this.deleteButtons = page.locator('.added-manually');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  }

  async clickAdd(times = 1) {
    for (let i = 0; i < times; i++) {
      await this.addButton.click();
    }
  }

  async getDeleteCount() {
    return await this.deleteButtons.count();
  }

  async deleteFirst() {
    await this.deleteButtons.first().click();
  }
}

module.exports = { AddRemovePage };
