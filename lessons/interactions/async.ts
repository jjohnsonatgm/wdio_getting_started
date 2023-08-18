/**
 * Throughout the lessons and examples you will see words like "async" or "await"
 * JS / TS is built off of "promises." A promise means that the next step, line of code, or process will not
 * kick off until the previous one has signaled that it is done
 * Luckily this process is now relatively simple to set up and doesn't require many Promise keyword statements.
 * the "async" keyword is how you signify that a function returns a promise
 * the "await" keyword is how you slow a test down and make sure that each step is run in a specific order.
 * If we did not await certain functions, such as clicking on elements then we run the risk of having a race condition inside our tests which could have adverse side effects (sounds kinda like a doctor prescribing medication)
 * This process is best explained by walking through the waitForPageToBeReady function located in /utility/useful-functions.ts
 * To save time I've copy pasta'd the code in the below it Mocha statement
 */
import { getCurrentPageUrl } from '../../utility/useful-functions';

describe('Explaining the asynchronous process of WebDriverIO', async () => {
  it('Should explain the async process of WDIO', async () => {
    await browser.url('https://digital.uat.greatminds.dev/');

    // This code signifies that the test will wait until the browser signifies the document has loaded completely + ALL endpoints have returned
    // The browser will check repeatedly for 60 seconds, as shown by the "timeout" key / value pair
    // If at the 20th second our test receives a document.readyState === 'complete' then the extra 40 seconds will be ignored and the Promise will return with a true
    // If at 60 seconds the document.readyState !== 'complete' then the test will fail and we will receive a timeout error message = "begone ye who enter, for these waters are incomplete!"
    await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
      timeout: 60 * 1000, // 60 seconds
      timeoutMsg: 'Begone ye who enter, for these waters are incomplete!',
    });

    // This code signifies that we should wait until the currentPageUrl includes a provided string
    // This code will repeat similarly to the above waitUntil for 60 seconds
    // If at any point the URL includes what you provide in the "includes" method then the promise will return and the loop will quit early.
    await browser.waitUntil(
      async () => {
        const currUrl = await getCurrentPageUrl();
        if (currUrl.includes('/')) return true;
      },
      {
        timeout: 60 * 1000,
        timeoutMsg: 'URL not matching',
      }
    );

    // Sometimes you need a little explicit pause in your life. Use when needed, but not often.
    // This will pause your test for 5 seconds
    await browser.pause(5000);
  });
});
