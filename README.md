# Salesforce Malana 3
 - Sean Terry
 - sean.m.terry@gmail.com
 - Browser: Chrome
 - Libraries: React & React Router
 - Files:
    - index.js
    - App.js
        - Header.js: Title and nav links
        - Home.js: Main landing page for blog entries; made of 2 components
            - SideBar.js: Contains the user profile (currently static; future would pull from api upon log in) and list of blog entries
            - Posts.js: Wrapper component that maps over blog post data, calling Post.js to present it
                - Post.js: Presentational component for each blog entry; contains edit and delete icons
        - NewPost.js: Component to create a new blog entry
        - EditPost.js: Component to edit an existing blog entry


# Create React App
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
