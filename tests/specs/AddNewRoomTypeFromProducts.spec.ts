import { test, expect, Page} from '@playwright/test';
import signInPage  from '../pages/SignIn.page';
import sideNav from '../pages/SideNav.page';
import roomTypes from '../pages/RoomTypes.page';
import * as account from '../../env/account.json'



let page: Page;
let SignInPage: signInPage 
let SideNav: sideNav;
let RoomTypes: roomTypes;
const randomName = (Math.random() + 1).toString(36).substring(7);
const roomName = 'roomPlaywright' + randomName + 'e2etest';



test.describe('Add New Room Type From Products',  () => {
  test.beforeAll(async ({browser}) => {
      page = await browser.newPage();
      SignInPage = new signInPage(page);
      SideNav = new sideNav(page);
      RoomTypes = new roomTypes(page);
      await SignInPage.passLogin(account.user.login, account.user.password);
  });

  test('create new room', async () => { 
      await SideNav.NavigateToRoomsType();
      await RoomTypes.CreateNewRoom(roomName);
      await expect(page.locator(await RoomTypes.roomName(roomName))).toBeVisible();
  });

  test('verify room creation', async () => { 
      await RoomTypes.SearchRoomByName(roomName);
      await expect(page.locator(await RoomTypes.roomName(roomName))).toBeVisible();
  });

  test('delete room', async () => { 
      await RoomTypes.DeleteRoom(roomName);
  });

  test('should be failed!!!', async () => { 
    await SideNav.NavigateToDashboard(); 
    await SideNav.NavigateToRoomsType();
    await expect(page.locator(await RoomTypes.roomName('fail'))).toBeVisible();
});
});







