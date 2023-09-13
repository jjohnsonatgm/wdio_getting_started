import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Validating that something should equal true', async () => {
  it('Should show off toBeFalsy assertion', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    /**
     * This assertion is validating that an element is NOT displayed. The toBeFalsy assertion validates that the promise returned from isDisplayed is false, not true.
     * The test will FAIL if the SomeRandomSelector element is displayed
     */
    expect(await $('button[class*="SomeRandomSelector"]').isDisplayed()).toBeFalsy();
  })
});
