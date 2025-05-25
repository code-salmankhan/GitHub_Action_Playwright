import { type Page, type Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly searchInput: Locator;

    constructor(page: Page){
        this.page = page;
        this.getStartedLink = page.locator('a:has-text("Get started")');
        this.searchInput = page.locator('input[aria-label="Search"]');
    }

    async goto() {
        await this.page.goto('https://playwright.dev')
    }

    async clickGetStarted(){
        await this.getStartedLink.click();
    }

    async search(text: string) {
        await this.searchInput.fill(text);
        await this.searchInput.press('Enter');
    }

}