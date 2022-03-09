import { Page } from "@playwright/test";


export default class RoomTypesPage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    get addNewRoom() {
        return "(//button[contains(text(),'Add new room')])[1]";
    }

    get nameRoomType(){
        return '//input[@name="lang-en"]';
    }

    get description_input(){
        return '(//div[@class="ql-editor ql-blank"])[1]';
    }

    get roomTypeSelection(){
        return "//div[@id='dd-typecodes']";
    }

    get bedRoomType14(){
       return "//span[contains(text(),'14 bed room')]";
    }
    
    get numbersOfRoom(){
        return "//input[@id='amount']";
    }

    get validityPeriod() {
        return "//button[contains(text(),'Add validity period')]"; 
    }

    get saveButton(){
        return "//button[contains(text(),'Save')]";
    }

    get searchInput(){
        return "//input[@placeholder='Search by name/ID']";
    }

    async roomName(name){
        return `//table[@class='w-100']//tbody//tr//td//p[contains(text(), '${name}')]`
    }

    async deleteRoomButton(name){
        return `//td//p[contains(text(),'${name}')]/../../td[7]/button[3]`;
    }

    async CreateNewRoom(name){
        await this.page.locator(this.addNewRoom).click();
        await this.page.locator(this.nameRoomType).fill(name);
        await this.page.locator(this.description_input).fill('description');
        await this.page.locator(this.roomTypeSelection).click();
        await this.page.locator(this.bedRoomType14).click();
        await this.page.locator(this.numbersOfRoom).fill('1');
        await this.page.locator(this.validityPeriod).click();
        await this.page.locator(this.saveButton).click();
    }

    async SearchRoomByName(name){
        await this.page.locator(this.searchInput).fill(name);
    }

    async DeleteRoom(name){
        await this.page.locator(await this.deleteRoomButton(name)).click();
    }
}

 