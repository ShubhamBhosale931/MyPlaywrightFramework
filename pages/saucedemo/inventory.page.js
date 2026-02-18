export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addAllProducts() {
    while (await this.addToCartButtons.count() > 0) {
      await this.addToCartButtons.first().click();
    }
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
