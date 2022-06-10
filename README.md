Browser: Chrome
Libraries: React & React Router
Files:
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
