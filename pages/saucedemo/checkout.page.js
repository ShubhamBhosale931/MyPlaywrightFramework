export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successHeader = page.locator('[data-test="complete-header"]');
  }

  async completeCheckout(first, last, zip) {
    await this.checkoutBtn.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(zip);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}
