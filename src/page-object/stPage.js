import { test } from "@playwright/test";

export class StPage {
  constructor(page) {
    this.page = page;
    this.createButton = page.getByTestId("create-button");
  }
}
