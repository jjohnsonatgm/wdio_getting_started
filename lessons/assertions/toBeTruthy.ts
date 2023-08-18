import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Validating that something should equal true', async () => {
  it('Should show off toBeTruthy assertion', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    /**
     * This assertion is comparing the promise returned from isDisplayed and expecting it to be true
     * Basically were validating that the login with email button is displayed...twice lol
     */
    expect(await $('button[class*="LoginWithEmail"]').isDisplayed()).toBeTruthy();
  })
});
