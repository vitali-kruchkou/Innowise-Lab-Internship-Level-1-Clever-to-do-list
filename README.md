# Innowise Lab Internship: Level 1: Clever to-do list

This project was created with React and Firebase.

[Demo](https://vitali-kruchkou.github.io/Innowise-Lab-Internship-Level-1-Clever-to-do-list/)

## Available Scripts

1. Clone the develop branch.

`$ git clone https://github.com/vitali-kruchkou/Innowise-Lab-Internship-Level-1-Clever-to-do-list -b develop`

2. Go to the directory

`$ cd Innowise-Lab-Internship-Level-1-Clever-to-do-list`

3. Install the npm modules

`$ npm install`

4. **For working locally add .env file with firebase API keys.**

Create .env file by type

`REACT_APP_API_KEY=your API key`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!

## Architecture solution

### Component folder

Component folder usually contains 1 files: .jsx; there files and the folder are named with component name (f.e.
PageContent /
PageContent.jsx
)

## Database snapshot
.
└──todos
    └──todosId
        └──todo
    	    ├──day
            ├──description
			├──done
            ├──title
            └──userId
└──users
	└──userId
		├──displayName
		└──email

## Application stack

List of packages I used for this app

### React-router-dom

Used to add routing

### Styled components

Used for style components

### React--hot-toast

Use to add Toast messages

### React-horizontal-scrolling-menu

Use to add scroll into calendar

### Date-fns

Used to format date

## Folders structure
    └──src                            #Main folder for source code
        ├──firebase                   #Contains firebase init script
        ├──modules                    #Contains the main component of the application
            ├──Authentication         #Contains the main components for authorization
            ├──PasswordReset          #Password reset component
            ├──SignIn                 #Sign In component
            ├──SignUp                 #Sign Up component
            └──Authentication.jsx
        └──Todos                      #Contains the main component for a to-do list
            ├──AddTodo                #Add todo component
            ├──Calendar               #Calendar component
            ├──EditTodo               #Edit todo component
            ├──ListTodo               #List todo component
            ├──ProfilePage            #Profile page component
            └──Todo.jsx   
        ├──providers                  #Folder for context  
        ├──routes                     #Routing files  
        └──index.js

## Styling

We use styled-components and ant design to work with styles in our application;

## Code formatting

This project contains .prettierrc file and .eslintrc.js file; it describes rules for Prettier code formatter and ESlint; according to these rules we are able to keep Code formatting the same for every project developer;
