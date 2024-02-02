## Step 1: Create React App

1.  Create a new TypeScript React project:

    > npx create-react-app react-chrome-ext --template typescript cd
    > react-chrome-ext

2.  Clean up unnecessary files:

    - Delete unwanted files to achieve the desired folder structure.

3.  Update App.tsx:

    - Replace content with a basic Hello World component.

4.  Update index.tsx:

    - Create a root element in the DOM and append the app to it.

5.  Add minimal CSS in App.css:

    - Style the App and container elements.

## Step 2: Add Webpack

1.  Install necessary dependencies:

    > npm install --save-dev webpack webpack-cli copy-webpack-plugin
    > css-loader html-webpack-plugin ts-node

2.  Create webpack.config.js in the root directory and add the configuration.
3.  Update package.json with build and watch scripts:

    >      "scripts": {
    >       "build": "webpack --config webpack.config.js",
    >       "watch": "webpack -w --config webpack.config.js"
    >     }

## Step 3: Add the Manifest file

1.  Create manifest.json in the root directory and add the following content.

## Step 4: Build the App

1.  Run the build command:

    > npm run build

## Step 5: Load the extension

1.  Open Chrome and navigate to chrome://extensions.
2.  Click "Load unpacked" and select the dist directory in your project.
3.  Test the extension by reloading the Extensions page and clicking the extension icon.
