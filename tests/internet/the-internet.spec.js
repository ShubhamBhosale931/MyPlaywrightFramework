import { test, expect } from '@playwright/test';
import { InternetLoginPage } from '../../pages/internet/login.page.js';
import { CheckboxPage } from '../../pages/internet/checkkbox.page.js';
import { AddRemovePage } from '../../pages/internet/addRemove.page.js';
import { DropdownPage } from '../../pages/internet/dropdown.page.js';
import { InputsPage } from '../../pages/internet/inputs.page.js';
import { ContextMenuPage } from '../../pages/internet/contextMenu.page.js';
import { DynamicControlsPage } from '../../pages/internet/dynamicControls.page.js';
import { DynamicLoadingPage } from '../../pages/internet/dynamicLoading.page.js';

import { FramesPage } from '../../pages/internet/frames.page.js';
const path = require('path');
import { FileUploadPage } from '../../pages/internet/fileUpload.page.js';
import { DragDropPage } from '../../pages/internet/dragDrop.page.js';


test('Login Success', async ({ page }) => {
  const login = new InternetLoginPage(page);


 await test.step('Navigate to login page', async () => {
  await login.goto();
  });

   await test.step('Perform login', async () => {
  await login.login('tomsmith', 'SuperSecretPassword!');
  });

  await expect(login.successMsg)
    .toContainText('You logged into a secure area!');
    // .toContainText('afsh');
});

test('checkbox Success', async ({ page }) => {
 // const login = new InternetLoginPage(page);
const checkbox = new CheckboxPage(page);
  await checkbox.goto();
 // await login.login('tomsmith', 'SuperSecretPassword!');

  //await expect(login.successMsg)
   // .toContainText('You logged into a secure area!');

await checkbox.checkFirst();
await checkbox.uncheckSecond();

await checkbox.isFirstChecked();


});

test('Add and Remove Elements', async ({ page }) => {
  const addRemove = new AddRemovePage(page);

  await addRemove.goto();

  await addRemove.clickAdd(3);
  expect(await addRemove.getDeleteCount()).toBe(3);

  await addRemove.deleteFirst();
  expect(await addRemove.getDeleteCount()).toBe(2);
});

test('Select Dropdown Option', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);

  await dropdownPage.goto();

  await dropdownPage.selectOption('1');
  expect(await dropdownPage.getSelectedValue()).toBe('1');

  await dropdownPage.selectOption('2');
  expect(await dropdownPage.getSelectedValue()).toBe('2');
});

test('Enter number in input field', async ({ page }) => {
  const inputsPage = new InputsPage(page);

  await inputsPage.goto();

  await inputsPage.enterValue('123');
  expect(await inputsPage.getValue()).toBe('123');
});

test('Right Click Context Menu', async ({ page }) => {
  const contextPage = new ContextMenuPage(page);

  await contextPage.goto();

  await contextPage.handleAlert();
  await contextPage.rightClickBox();
});

test('Dynamic Controls Test', async ({ page }) => {
  const dynamic = new DynamicControlsPage(page);

  await dynamic.goto();

  await dynamic.removeCheckbox();
  await expect(dynamic.message).toContainText("It's gone!");

  await dynamic.enableInput();
  expect(await dynamic.isInputEnabled()).toBeTruthy();
});
test('Dynamic Loading Test', async ({ page }) => {
  const dynamicLoad = new DynamicLoadingPage(page);

  await dynamicLoad.goto();
  await dynamicLoad.startLoading();
  await dynamicLoad.waitForText();

  expect(await dynamicLoad.getText()).toContain('Hello World!');
});


test('Iframe Text Test', async ({ page }) => {
  const framesPage = new FramesPage(page);

  await framesPage.goto();
  await framesPage.enterTextInIframe('Playwright Rocks');

  expect(await framesPage.getIframeText()).toContain('Playwright Rocks');
});

test('File Upload Test', async ({ page }) => {
  const uploadPage = new FileUploadPage(page);

  await uploadPage.goto();

  const filePath = path.resolve(__dirname, '../../utils/testData.txt');

  await uploadPage.uploadFile(filePath);

  expect(await uploadPage.getUploadedFileName()).toContain('testData.txt');
});

test('Drag and Drop Test', async ({ page }) => {
  const dragPage = new DragDropPage(page);

  await dragPage.goto();
  await dragPage.dragAToB();

  expect(await dragPage.getColumnAText()).toContain('B');
});

test('Count Playwright word in sidebar menu', async ({ page }) => {

  await page.goto('https://playwright.dev/docs/installation');

  // Locate sidebar menu
  const sidebar = page.locator('nav[aria-label="Docs sidebar"]');

  // Get full text content of sidebar
  const sidebarText = await sidebar.innerText();

  // Count occurrences of word "Playwright"
  const matches = sidebarText.match(/Playwright/g);

  const count = matches ? matches.length : 0;

  console.log('Playwright appears:', count, 'times');

});

 test('Valid Login', async ({ page }) => {
 // const BASE_URL = 'https://katalon-demo-cura.herokuapp.com';
 await page.goto('https://katalon-demo-cura.herokuapp.com');
   
 
//await page.pause();
//#btn-make-appointment
     await page.click('#btn-make-appointment');
    //await expect(page.locator('h2')).toHaveText('Make Appointment');
    await page.fill('input[name="username"]', 'John Doe');
    await page.fill('input[name="password"]', 'ThisIsNotAPassword');
    await page.click('button[type="submit"]');



    await page.selectOption('select#combo_facility', {
      label: 'Tokyo CURA Healthcare Center'
    });

    // Readmission checkbox
    await page.check('input#chk_hospotal_readmission');

    // Healthcare program radio button
    await page.check('input[value="Medicare"]');
//await page.pause();
   await page.click('#txt_visit_date');
await page.fill('#txt_visit_date', '11/02/2026');
await page.keyboard.press('Enter');
//await page.keyboard.press('Tab');


    // Comment
    await page.click('textarea#txt_comment');
    await page.fill('textarea#txt_comment', 'This is sample test');

    // Book Appointment button
    await page.click('button[type="submit"]');

    // Verify confirmation
    await expect(page.locator('h2'))
      .toHaveText('Appointment Confirmation');

    await expect(page.locator('#facility'))
      .toContainText('Tokyo CURA Healthcare Center');
       await page.click('a#menu-toggle');

    // Click Logout using text-based locator
    await page.click('a:has-text("Logout")');

    await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/');
  });