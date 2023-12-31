# wdio_getting_started

## Background
The purpose of this minimal repo is to help teach Junior TAE's, GM new hires, or Globant TAE's how to use WebDriverIO. To do this effectively, this repo has been broken into multiple parts:
- configs
- lessons
  - assertions
  - interactions
  - selector-strategies
  - pom
- playground
- utility

### Configs
The purpose of this directory is to hold all the project's configuration files. In this case we have a config to run specific tests and one to run an entire suite of tests. More info can be found on this below in the "How to run" section

More examples of what you could do is create "base" configuration files which can be inherited by other "child" configuration files. This is particularly useful when you have a config for BrowserStack / LambdaTest / Sauce Labs and beyond. It helps cut down on config file complexity and increase code re-usability.

### Assertions
The purpose of this directory is to show off assertions, or expectations that should be ran during your test. The primary use of assertions is to add mini "tests" to your test cases. 

Currently, as of 08/18/2023, the provided sections are:
- toBeTruthy

### Interactions
The purpose of this part is to show off basic page interactions

Currently, as of 08/17/2023, the provided sections are:
- async
- click
- getText
- hoverElement
- waitFors

### POM - Page Object Model
The purpose of this part is to provide an example of what POM looks like with WebDriverIO.

Page Object Model is a method of organizing your code into "pages". This is mainly used for readability purposes. More info can be found here: 
- https://www.browserstack.com/guide/page-object-model-in-selenium
- https://webdriver.io/docs/pageobjects/

### Selector Strategies
The purpose of this part is to show off various selector strategies that are used at Great Minds. This is more-so a collaborative section that should be built out over time when new strategies are figured out

Currently, as of 08/17/2023, the provided sections are:
- attribute
- similar elements

### Playground
The purpose of this part is to provide practice TC's that SIT TAE's have to automate on a daily basis. The list below gets progressively more difficult and lengthy. Order below is easiest -> most difficult.

Currently, as of 08/17/2023, the provided practice TC's are:
- login
- dropdowns
- navigate to planning
- Manage, create teacher and login for the first time
- assign assessment as a teacher
- complete assessment as a student
- navigate through explore -> planning, assign multiple resources and launch an assignment
- create assignment through assign
- launch a livemode presentation

### Utilities
The purpose of this part is more so to provide useful functions that we use everyday on the SIT pod.

## Where you should start
It all depends on how you feel you learn best. 

- Do you learn the best by looking at code that is already put together? Then start with interactions or selector-strategies
- Do you learn the best by practicing code? Then start with the playground exercises and go from there

## Getting Started

### Pre-reqs
The following should be installed on your machine
- NodeJS
- Git

- Clone the repo using GitHub's UI (code button), GitHub's CLI, or a GUI app (such as GitHub's or GitKraken)
  - gh repo clone jjohnsonatgm/wdio_getting_started
- Run npm install from a command line to install all dependencies

### Executing your tests
To execute these tests two configuration files have been provided, located in the /configs directory

- specific.conf.ts -- This configuration file is used to run specific Test Cases, rather than an entire suite
  - The primary difference between this and the wdio.conf is in the mochaOpts object where we're looking for an environment variable on what test you want to run
  - Let's say you want to run the Attribute Selector Strategies test, then the command in your package.json would look like: 
    - npx tsc && SPECIFIC=Attribute node_modules/.bin/wdio configs/specific.conf.ts'
  - If you want to get even more specific and run just the className test case:
    - npx tsc && SPECIFIC=className node_modules/.bin/wdio configs/specific.conf.ts
- wdio.conf.ts -- This configuration file is used to run all of your tests rather than a specific test case
  - You will probably use the specific configuration file more than this one.

From your command line you can execute the scripts provided in the package.json
- npm run all:tests
- npm run specific:test

## Resources
- https://webdriver.io/
- https://webdriver.io/docs/gettingstarted
- https://webdriver.io/docs/api/browser/$ -- Creating selectors
- https://webdriver.io/docs/api/browser/$$ -- Working with a list of similar elements
- https://webdriver.io/docs/api/element/setValue -- Typing
- https://webdriver.io/docs/api/element/waitForClickable -- WaitFor's
