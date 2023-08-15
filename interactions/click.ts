import { waitForPageToBeReady } from '../utility/useful-functions';

describe('Example Click Interactions', async () => {
  await browser.url('https://digital.uat.greatminds.dev/');
  await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');
});
