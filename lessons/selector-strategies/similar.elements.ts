import { waitForPageToBeReady } from '../../utility/useful-functions';

describe('Show off how to work with multiple elements that have the same DOM elements with WDIO', async () => {
  it('Should log into Explore', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');
    await $('button[class*="LoginWithEmail"]').waitForClickable();
    await $('button[class*="LoginWithEmail"]').click();
    await $('#email').waitForDisplayed();
    await $('#email').setValue('sit_em2_teacher1@greatmindsdemo.org');
    await $('#password').setValue('Test@123');
    await $('[aria-label="Log in"]').waitForEnabled();
    await $('[aria-label="Log in"]').click();
    await waitForPageToBeReady('/explore/curricula/grade?', '.curricula-navmenu-button');

    // Notice the double $$ notation here, that signifies an array list of elements
    const modules = await $$('ul[class*="Modules"] li');
    const moduleToClick = 'Counting, Comparison, and Addition';
    await modules[0].waitForClickable();
    for (let i = 0; i < modules.length; i++) {
      const moduleTitle = await modules[i].$('span').getText();
      if (moduleTitle === moduleToClick) {
        await modules[i].$('span').waitForClickable();
        await modules[i].$('span').click();
        break;
      }
    }

    await waitForPageToBeReady('/explore/curricula/grade/module?', '.overview-module-button');
  });
});
