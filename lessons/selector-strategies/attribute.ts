import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Attribute Selector Strategies', async () => {
  it('Should show how to search by className', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await waitForPageToBeReady('/', 'button[class*="LoginWithEmail"]');

    const selector = $('button[class*="LandingLoginstyled__StyledLoginWithEmailOption"]');
    await selector.click();
  });

  it('Should show how to search by additional attributes, such as "aria - labels"', async () => {
    const selector = $('[aria-label="Email"]');
    await selector.setValue('BingoBongo@gmail.comgo');
  });

  it('Should show how to search by ID attributes', async () => {
    const selector = $('#password');
    await selector.setValue('Test@123');
  });

  it('Should show how to search by wildcard', async () => {
    const selector = $('button[class*="ContinueButton"]');
    await selector.waitForClickable();
  });

  it('Should show how to search by the $ selector strategy, or starting from the end of a class or attribute', async () => {
    const fullSelector = $('button[aria-label="Log in"]');
    const endOfAttributeSelector = $('[aria-label$="in"]');
  });
});
