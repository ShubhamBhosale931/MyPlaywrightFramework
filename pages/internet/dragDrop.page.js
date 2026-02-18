class DragDropPage {
  constructor(page) {
    this.page = page;
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  }

  async dragAToB() {
    await this.columnA.dragTo(this.columnB);
  }

  async getColumnAText() {
    return await this.columnA.textContent();
  }
}

module.exports = { DragDropPage };
