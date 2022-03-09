import { Page } from "@playwright/test";


export default class SideNav {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    get products(){
        return "//span[contains(text(),'Products')]";
    }

    get roomsType(){
        return "//span[contains(text(),'Room types')]";
    }

    get dashboard(){
        return "//span[contains(text(),'Dashboard')]";
    }

    async NavigateToRoomsType(){
        await this.page.locator(this.products).click();
        await this.page.locator(this.roomsType).click();
    }

    async NavigateToDashboard(){
        await this.page.locator(this.dashboard).click();
    }
}
