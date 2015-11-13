# webpack-angular
Angular 1.4 app using Babel and Webpack

##Project Setup
1. Install the WebPack CLI at the system level as follows:
  `npm install -g webpack`
2. Install the local project's NPM packages as follows:
  `npm install`
3. Build the project according to your desired mode as follows:
  * Development Mode = `npm run dev-build`
  * Production Mode = `npm run dist-build`
4. Open index.html in your browser of choice


#Notes:
1. Global filters and directives go into the components directory. 
2. Services, directives, and filters should be included in the module they are used in instead of in the main app.module.js
