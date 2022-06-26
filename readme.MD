## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible

We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------|
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:

1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.
  Why do you think that was done, what are the advantages / disadvantages?
  * <b>My Answer</b>
    * <b>Advantages:</b>
      * By keeping each component in a separate file the code is more reusable as each component can be used stand alone on other projects.
      * It is easier for a new developer to understand what the individual components are and how they fit together.
      * Seperating components into different files allows for lazy loading of components. This can be achieved via dynamic imports and can improve load performance while saving system resources.
      * Writing tests for specific components is easier if the components are saved in individual files and folders.
      * A huge monolithic code will become difficult to read and understand.
      * It is easier to track changes to specific components if they are in seperate files

    * <b>Disadvantages:</b>
      * It is initially more time consuming to set up the folder structure for the components and make sure all the components are correctly imported
      * In smaller apps it may make the app structure more complicated than it needs to be



2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*
* <b>My Answer</b>
  * Test cases are missing from the app. Tests should be written to ensure that as the app is developed, new features do not break existing features.
While very time consuming to right, tests will reduce manual testing of the app and will save development time and improve quality in the long run.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?
* <b>My Answer</b>
  * Redux is a standalone JavaScript library often used with React to act as a central store of state. Having a single store of state creates a single source of the truth and allows us to know exactly what the state of each component is at any given time.

4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
Thinking of a production application, what issues do you see with this code? *List as many as you like*
* <b>My Answer</b>
  * N/A I am applying for the Integration Engineer role.

### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
* <b>My Answer</b>
  * Please see app-standalone for my version
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
* <b>My Answer</b>
  * In app-standalone
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.
* <b>My Answer</b>
  * added some basic tests to Game and LeagueTable components

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience.
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it.
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.
