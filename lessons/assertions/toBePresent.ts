import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Validating that something should equal true', async () => {
  it('Should show off toBePresent assertion', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    /**
     * This assertion is validating that the login with email button is present
     * The test will FAIL if the login with email button is NOT present
     */
    expect(await $('button[class*="LoginWithEmail"]')).toBePresent();
  })
});
