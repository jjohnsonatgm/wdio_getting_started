import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Example Click Interactions', async () => {
  it('Should show off how to click an element', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
    await $('button[class*="LoginWithEmail"]').click();
  });

  it('Should show off how to double click an element', async () => {
    await $('#email').waitForDisplayed();
    await $('#email').setValue('BingoBongo@gmail.com');
    await $('#password').setValue('BingoBongo@gmail.com');
    await $('[aria-label="Log in"]').waitForEnabled();
    await $('[aria-label="Log in"]').doubleClick();
  });
});
