import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Validating that something should equal true', async () => {
  it('Should show off toHaveUrlContaining assertion', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    /**
     * This assertion validates that whatever text you are passing as a parameter to the .toHaveUrl method
     * is currently on the page
     * This will FAIL the test if the current URL is not found to match
     */
    expect(browser).toHaveUrl('https://digital.uat.greatminds.dev');

    /**
     * This assertion validates only part of the URL rather than the whole thing
     * This will FAIL the test if the part of the URL is not found in the current URL
     */
    expect(browser).toHaveUrlContaining('.greatminds.org/');
  })
});
