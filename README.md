# General 
Libraries: React & React Router
Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
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
