import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/saucedemo/login.page.js';
import { InventoryPage } from '../../pages/saucedemo/inventory.page.js';
import { CheckoutPage } from '../../pages/saucedemo/checkout.page.js';
import { testData } from '../../utils/testData.js';

test('SauceDemo Complete Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
 await login.login(
  testData.saucedemo.username,
  testData.saucedemo.password
);
  await inventory.addAllProducts();
  await expect(inventory.cartBadge).toHaveText('6');

  await inventory.goToCart();
  await checkout.completeCheckout('Shubham', 'Bhosale', '411001');

  await expect(checkout.successHeader)
    .toHaveText('Thank you for your order!');
});
