import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Validating that something should equal true', async () => {
  it('Should show off toBeClickable assertion', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    /**
     * This assertion is validating that a given element is clickable
     * This will FAIL if the element is not clickable
     * An example of where this would be useful is if you are testing a modal that activates a certain button only after the inputs are filled
     */
    expect(await $('button[class*="LoginWithEmail"]')).toBeClickable();
  })
});
