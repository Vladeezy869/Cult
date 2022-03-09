import { expect, Page, test} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import * as account from '../../env/account.json'

let page: Page;
let SignInPage: signInPage 

test('Simple SignIn', async ({browser}) => { 
    page = await browser.newPage();
    SignInPage = new signInPage(page);
    await SignInPage.passLogin(account.user.login, account.user.password);
    await page.waitForURL(SignInPage.expectedUrlAfterSignin);
    expect(page.url()).toEqual(SignInPage.expectedUrlAfterSignin);
})