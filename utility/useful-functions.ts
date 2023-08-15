export const getCurrentPageUrl = async () => {
  return browser.execute(() => document.location.href.toString());
}

export const waitForPageToBeReady = async (url: string, locator?: string, timeout?: number) => {
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
    timeout: 60 * 1000, // 60 seconds
    timeoutMsg: 'Begone ye who enter, for these waters are incomplete!',
  });
  await browser.waitUntil(
    async () => {
      const currUrl = await getCurrentPageUrl();
      if (currUrl.includes(url)) return true;
    },
    {
      timeout: 60 * 1000,
      timeoutMsg: 'URL not matching',
    }
  );
  if (locator !== undefined && locator !== '') {
    await $(locator).waitForClickable();
  }
  // Sometimes you need a little explicit pause in your life. Use when needed, but not often.
  if (timeout !== undefined) {
    await browser.pause(timeout);
  }
}

export const waitForElement = async (locator: string, timeout?: number) => {
  await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'), {
    timeout: 60 * 1000, // 60 seconds
    timeoutMsg: 'Begone ye who enter, for these waters are incomplete!',
  });
  await $(locator).waitForClickable();
  await $(locator).waitForDisplayed();
  if (timeout !== undefined) {
    await browser.pause(timeout);
  }
}
