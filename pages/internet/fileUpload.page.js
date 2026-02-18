class FileUploadPage {
  constructor(page) {
    this.page = page;
    this.fileInput = page.locator('#file-upload');
    this.uploadBtn = page.locator('#file-submit');
    this.uploadedText = page.locator('#uploaded-files');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
    await this.uploadBtn.click();
  }

  async getUploadedFileName() {
    return await this.uploadedText.textContent();
  }
}

module.exports = { FileUploadPage };
