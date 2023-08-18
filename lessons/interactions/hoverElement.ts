import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Show off how to hover elements', async () => {
  it('Should hover the login with email button, then the login with site code button', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    // moveTo is used for hovering
    await $('button[class*="LoginWithEmail"]').moveTo();
    await $('button[class*="LoginWithSitecode"]').moveTo();
  });
});
