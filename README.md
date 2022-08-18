# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Please update ApiHelpers.js file with your API keys from [https://openweathermap.org/api](OpenWeathermap)
For testing purpose , API Key is attached as part of the email.
### `const API_KEY= ''`

# Key Wins with this Task
Since because of time restrictions and busy schedule of current project work, i could develop the application to satisfy all of the requirements . But It still requires some futher enchancements .
1. Displayed current weather based on device location ( Must allow location service for browsers).
2. Forcast for 5 days have been displayed.
3. Users can switch between the units (Metric by default)
4. Search based on city names have been achieved.
5. User can clear off the box and current weather location will be displayed.
6. Unit testing is done for most of the components .


# Testing 
Application was tested on Mac and windows with different screen resolutions . It also tested with Mobile simulators using Chrome dev tools. Also, Tested with Chrome, Edge browsers.  

Unit test using React Testing library (Jest) has been done for components. I have used snapshot testing , Since enzymes we not supported with latest versions of react.
# Future enchancements planned to achieve  
1. Current functionality searches location based on city names, But some citiesnames could be part of different countries .
--- Solution Planned : Either provide a user a model/ drop down to select from the search list of cities.

2. Data forecast returned from the API ( Drawback of Free API), contains data for 5 days of 3hours interval. So mapping everything will be a challenging job, unless if we are displaying a slider to show hourly data.
--- Solution Planned : Either we can add a new feature (Slider), where we can display hourly forcast for that particular day. Or Use a API that provides day to day forcast Data.

3. UI could be made more interactive with Material UI / Latest CSS frameworks.
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
