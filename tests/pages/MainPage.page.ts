import { Page } from "@playwright/test";


export default class MainPage {
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    get languageButton(){
        return "#__BVID__806__BV_toggle_";
    }

    get languageDropDownList(){
        return "//ul[@class='dropdown-menu show']";
    }

    get dashboardSettingsButton(){
        return "//button[@class='btn-setting']";
    }

    get dashboardSettingsWidget(){
        return "//div[@class='page-widget-status']";
    }

    get downloadPDFButton(){
        return "//a[@class='btn download-btn btn-primary rounded-pill']";
    }

    get dashboardPdfUrl(){
        return "http://odpr.cultdata.com//odpr/mkbufoxajhedtlinzwqr/2022-03-09_Online_Distribution_Performance_Report_42300.pdf";
    }
    async clickLangButton(){
        await this.page.locator(this.languageButton).first().click();
    }

    async clickSettingsButton(){
        await this.page.locator(this.dashboardSettingsButton).first().click();
    }

    async clickDownloadPDFButton(){
        await this.page.locator(this.downloadPDFButton).first().click();
    }

    async checkDownload(){
        const [ download ] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.locator(this.downloadPDFButton).click(),
          ]);
          const path = await download.path();
    }


}