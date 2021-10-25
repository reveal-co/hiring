# Reveal Developer Test

This test aims at getting an idea about how candidates fit Reveal's standards in terms of frontend development.

At Reveal, we do not expect you to master everything we do or use - we are looking for people that will understand what we want to do and will have good ideas about how to do it, so please use whatever you want to show us your skills!

## General instructions

Reveal develops a solution that aims at finding companies present in multiple CRMs, to build a bunch of different features for our customers.
In this exercise we will build a web interface listing companies and displaying some of their info.


### Expectations

We expect you to spend 2 to 3 hours on the exercise.
If you could not complete it or if you could not spend that much time on it, 
feel free to send us back what you had time to do. In any case you can join to your code
an explanation of what you did, what is missing, what you would like to improve ...
Once you have finished working on the test, please compress the whole repository and send it to us.

### Getting Started

We use React and Redux for our front end application.
We included a basic React app in the "frontend" directory (using create-react-app) and we also added Redux and React-Redux to the dependencies. We also added React-Router.

Clone this repository on your local machine, go into the frontend directory and run install the app by running:

```bash
yarn install
```

You should then be able to start the server with the command:

```bash
yarn start
```

If you plan on implementing tests, simply run:

```bash
yarn test
```

To load data in the app, you can use the following URLs:

- http://localhost:3000/api/companies-{page}.json
- http://localhost:3000/api/companies/{id}.json

### Mission

1. Make sure that the home page displays a list of companies
   - Use the JSON API as explained in "Getting Started"
   - Table rows should show the company's name and ID
   - Pick the strategy you want to deal with API pagination, but display almost 9000 lines in a page is not a good idea
2. Provide a way to navigate from a row in the list of companies, to a page showing a specific company's details
   - Use the JSON API to get company details from the ID
   - Show as many details as possible
3. Provide a mechanism to hide a company from the list
4. Provide a mechanism to hide a company from the company details page

### Evaluation

The UX is what matters most: the users should understand what the see, and how to interact with the app.
Additionally, we will look the code clarity, modularity and maintainability.

Bonus points:

- implement some tests using jest
- make the actions persistent (when the page is refreshed, the hidden companies remain hidden)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
