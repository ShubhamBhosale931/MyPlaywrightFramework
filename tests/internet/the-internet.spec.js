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