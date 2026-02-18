class FramesPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/iframe');
  }

 async enterTextInIframe(text) {
  const frame = this.page.frameLocator('#mce_0_ifr');
  const body = frame.locator('#tinymce');

  await body.waitFor();

  // Remove readonly attribute
  await body.evaluate(el => {
    el.setAttribute('contenteditable', 'true');
  });

  await body.fill(text);
}



  async getIframeText() {
    const frame = this.page.frameLocator('#mce_0_ifr');
    return await frame.locator('#tinymce').textContent();
  }
}

module.exports = { FramesPage };
