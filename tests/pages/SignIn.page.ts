import { test, expect, Page } from '@playwright/test';
import * as env from '../../env/env.json'

export default class SignInPage {
        private page: Page;
        constructor(page: Page) {
          this.page = page;
        }
    
    public get email_input(){
       return '[name="email"]';
    }

    public get password_input(){
        return '[name="password"]';
    }

    public get submit_button(){
        return "//button[(@type = 'submit')]";
    }    

    public get expectedUrlAfterSignin(){
        return "https://admin.cultbooking.com/dashboard";
    }
    
    async passLogin(login: string, password: string) {
        await this.page.goto(env.SIGN_IN);
        await this.page.locator(this.email_input).fill(login);
        await this.page.locator(this.password_input).fill(password);
        await this.page.locator(this.submit_button).first().click();
    }
}

