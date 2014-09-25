# Seamless Wedding Website
#### Easy to set up, configure, and deploy.
![Alt text](/public/images/screenshot.png?raw=true "Screenshot")
## www.pyke.us

### How to run
1. Download code and cd into the project.
2. Open command line tool (git bash or linux commandline) and run 'npm install' from project root.
2. In command line tool run 'grunt' command from the project root.  This will automatically build everything and run grunt watch, which updates bundle.js and other code from the modules. (It may be necessary to install grunt-cli globally with 'sudo npm install -g grunt-cli')
3. Make sure you have mongodb installed. http://docs.mongodb.org/manual/installation/
4. Run 'mongod --dbpath db/' to start the Rsvp database, which will build database files in db/.
5. Start server by running 'node main.js', and it should say that it connected to the database.
6. Go to https://localhost:5000 or https://127.0.0.1:5000

###Production
1. Change the environment to production and use port 80.

### Following The code (UI)
1. public/js/app.js is the starting point.  All UI and Angular code will be compiled into this file using browserfiy in the grunt build.
2. app.js requires all of the needed modules which can be found in the modules package.
3. Each angular module will have an index.js file at its root which will be a one stop shop for angular compilation in the module.
4. Grunt file will compile and minify app.js into the bundle.js.

### Following The Code (Server)
1. main.js will start up the node server.
2. All routes will be listened for here and sent to the routes.js for processing in the main module.
3. Each module can have its own server side code if it needs to.

### Following The Code (db)
1. db/db.js holds the controls for the mongodb.
2. Add an Rsvp by posting to `/add/rsvp/`
3. Get all Rsvp messages by getting `/get/rsvps/` (used on the Registry page for the Guestbook)
4. Read Rsvp information at /get/rsvpinfo/ with a secret GET parameter.

### Stylus
1. Stylus files are compiled with grunt into the main.css file at public/css/main.css
2. Stylus files with names ending with "Media" are explicitly for mobile phones and will capture any screen up to 800px.

### TODO
1. Fill ceremony page with appropriate content
2. Design config file

### Future Plans
After setting up this website properly for Mackenzie and Jonathan, I plan to take personalized information out into a config file in order to make it easier for anyone to personalize this website for their special ceremony.
