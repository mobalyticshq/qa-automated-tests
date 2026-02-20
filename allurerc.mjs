import { defineConfig } from 'allure';

export default defineConfig({
  name: 'Allure Report 3',
  output: './allure-report',
  historyPath: './allure-history.jsonl',
  plugins: {
    awesome: {
      options: {
        singleFile: false,
        reportLanguage: 'en',
        groupBy: ['module', 'parentSuite', 'suite', 'subSuite'],
      },
    },
    log: {
      options: {
        groupBy: 'none',
      },
    },
  },
});
