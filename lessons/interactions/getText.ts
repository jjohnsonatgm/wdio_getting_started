import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Show off how to pull text from the page', async () => {
  it('Should pull the text from the Login button and log to the console what the text fetches', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    const selector = $('button[class*="LoginWithEmail"]');
    const text = await selector.getText();
    console.log(text);
  })
});
