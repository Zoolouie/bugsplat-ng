[![BugSplat](https://s3.amazonaws.com/bugsplat-public/npm/header.png)](https://www.bugsplat.com)
# my-angular-4-crasher
The my-angular-4-crasher sample demonstrates how to use BugSplat's [npm package](https://www.npmjs.com/package/bugsplat-ng4) to track  errors in your Angular 4 application. Follow these steps to get started:
1. Clone this repository or download the zip from the releases tab
2. Open terminal or command prompt in this project's root directory
3. npm install && npm run start
4. Click any of the crash buttons to test the BugSplat integration
5. Click the link that appears to view the crash on the BugSplat website
6. When prompted to log in, use the username "Fred" and password "Flintstone"

You may get an error "resolving symbol values statically" when running step 3. This appears to be a bug in the angular-cli. As a workaround, leave the script running and save a file in the project. This will trigger the angular-cli to rebuild which will clear the error.

In order to see typescript function names and line numbers in your stack traces you will need to upload js map files for each released version of your product (coming soon!).

For more information about getting started with Angular 4 check out the [Angular 4 Docs](https://angular.io/docs).

For additional help using BugSplat, check out the [documentation](http://www.bugsplat.com/documents/) on our website or email support(at)bugsplat.com if you have any questions.

Good luck!
© BugSplat Software
[Web](https://www.bugsplat.com) | [Twitter](https://twitter.com/BugSplatCo) | [Facebook](https://www.facebook.com/bugsplatsoftware/)