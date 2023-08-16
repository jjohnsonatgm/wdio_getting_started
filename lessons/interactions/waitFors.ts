describe('Show off how to use WebDriverIO "waitFors" so  you can wait for the page to be in a ready state before moving on', async () => {
  it('Should show off how to use wait for clickable', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await $('button[class*="LoginWithEmail"]').waitForClickable();
    await $('button[class*="LoginWithEmail"]').click();
  });

  it('Should show off how to use wait for displayed', async () => {
    await $('#email').waitForDisplayed();
    await $('#email').setValue('BingoBongo@gmail.com');
    await $('#password').setValue('BingoBongo@gmail.com');
  });

  it('Should show off how to use wait for enabled', async () => {
    await $('[aria-label="Log in"]').waitForEnabled();
    await $('[aria-label="Log in"]').click();
  });
});
