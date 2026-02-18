import { defineConfig, devices } from '@playwright/test';

const ENV = process.env.TEST_ENV || 'dev';

const ENV_CONFIG = {
  dev: {
    baseURL: 'https://www.saucedemo.com/',
  },
  qa: {
    baseURL: 'https://www.saucedemo.com/', // replace with QA URL later
  }
};


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,  // 🔥 allow tests in same file to run parallel
  workers: 4,           
   reporter: [
    ['list'],
    ['allure-playwright']
    
  ],
  

  use: {
    baseURL: ENV_CONFIG[ENV].baseURL,
    headless: false,
    launchOptions: {
      slowMo: 1000,
    }
    
  },
  

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
    },
  ],
});
