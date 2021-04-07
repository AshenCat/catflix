# Hi, welcome to the Catflix project!
Catflix is an opensource CMS application using MERN stack.

Since the app is still in the process of development, I'll place the snapshots of the pages here


## Project Dependencies

Front end dependencies:
![Front end dependencies](https://github.com/AshenCat/catflix/blob/master/package.json "Front end dependencies")

backend dependencies:
![Back end dependencies](https://github.com/AshenCat/catflix/blob/master/backend/package.json "Back end dependencies")

Dependencies to be added later:
Socket.io
Multer
Image minify on backend

### Needed files that are not included in the git repo
- Backend
    - https://github.com/AshenCat/catflix/blob/master/backend/config/config.js.sample
- Frontend
    - https://github.com/AshenCat/catflix/blob/master/src/helper/target.js.sample
## Project Features task list

Visitors: people of the internet visiting the site
Users: people who are registered and is using the site

- [x] UI base (landing page, buttons, links, routes) and front end dependencies
- [x] Backend base (mongoose, express, bcrypt) and backend dependencies
- [ ] Visitors are able to login and register
    - [x] Register UI and front end route
    - [x] Register backend API and necessary db query
    - [x] Login UI and front end route
    - [x] Login backend route and db query
    - [x] Backend keeps track of the user session with passport
    - [ ] Forgot password page
- [ ] Users must be able to make changes on their profile
    - [x] View user profile
    - [ ] Edit user profile
- [ ] Visitors must be able to view public content - ONGOING
    - [ ] Users can upvote/downvote contents
    - [ ] Users can comment on a content
- [ ] Logged in users must be able to manage their contents
    - [ ] Backend routes must minify uploaded contents
    - [ ] Users can add a new content
    - [ ] Users can view their content
    - [ ] Users can edit their content
    - [ ] users can delete their content


More to be added after.

## Project issues
If I encounter an error or a bug, I'll put it on https://github.com/AshenCat/catflix/issues. Feel free if you see something sketchy

### Snapshots



- '/' - about to be changed soon
  - ![landing page](https://github.com/AshenCat/catflix/blob/master/readme-media/landing.png "Landing page") 

- '/register'
  - ![register](https://github.com/AshenCat/catflix/blob/master/readme-media/register.png "register page") 

- '/login'
  - ![login](https://github.com/AshenCat/catflix/blob/master/readme-media/login.png "login page") 

- '/profile'
  - ![profile](https://github.com/AshenCat/catflix/blob/master/readme-media/profile.png "profile page") 
