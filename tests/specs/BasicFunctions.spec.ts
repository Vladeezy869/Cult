import { expect, Page, test, BrowserContext} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json'
import mainPage from '../pages/MainPage.page'

let page: Page;
let SignInPage: signInPage;
let MainPage: mainPage;

test.beforeAll(async ({browser})=>{
    page = await browser.newPage();
    SignInPage = new signInPage(page);
    MainPage = new mainPage(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
})

// test('Check language drop-down', async () => { 
//     await MainPage.clickLangButton();
//     expect(page.locator(MainPage.languageDropDownList)).toBeVisible();
// })

// test('Check Settings widget', async () => { 
//     await MainPage.clickSettingsButton();
//     expect(page.locator(MainPage.dashboardSettingsWidget)).toBeVisible();
// })

test('Check Download PDF button', async ({browser}) => { 
    expect(page.locator(MainPage.downloadPDFButton)).toBeEnabled();
    const context = await browser.newContext();
    const [pdfPage] = await Promise.all([
        context.waitForEvent('page'),
        await MainPage.clickDownloadPDFButton()
      ])

      await pdfPage.waitForLoadState();
      await expect(pdfPage).toHaveURL(MainPage.dashboardPdfUrl);
})