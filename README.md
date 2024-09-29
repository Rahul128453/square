

# Description
This React application features a single component that behaves like a recursive quadrant splitter. Initially, the component has a solid background color. When clicked, it splits into four quadrants, each with a different random color. The behavior continues recursively — clicking on any of the quadrants will split that specific quadrant into four smaller quadrants, repeating the process indefinitely.

# Features
Initial Single Color Component: The main component starts as a single square with a solid background color.
Recursive Quadrant Splitting: Clicking on any part of the component splits it into four quadrants. Each quadrant can be clicked and split again into smaller quadrants.
Mouse Click Determines Split Location: The point at which you click determines how the component is divided into four quadrants.
Random Colors: Each time a quadrant splits, the new quadrants are assigned random background colors.
Repeatable Splitting: The process can be repeated multiple times by clicking on any quadrant at any point.

# Code Structure
QuadrantSplitter Component:
The QuadrantSplitter component handles the splitting logic.
It uses the useState hook to track if the component has been split.
Upon clicking, it calculates the position of the click and divides the component into four smaller quadrants, each rendered recursively.
The quadrants' background colors are generated randomly using a helper function.

# Files
src/QuadrantSplitter.js: Contains the main logic for splitting quadrants recursively.
src/App.js: Entry point of the application, rendering the initial QuadrantSplitter component.


# $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ #

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

