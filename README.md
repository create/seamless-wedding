# Justine & Corybill's Wedding Website

### How to run
1. Download code
2. Open command line tool (git bash) and run 'npm install' from project root.
2. In command line tool run 'grunt' command from the project root.  This will automatically build everything and run grunt watch.
3. Start server by running 'nodemon main.js' or 'node main.js'.
4. Go to https://localhost:3000

### Following The code (UI)
1. public/js/app.js is the starting point.  All UI and Angular code will be compiled into this file using browserfiy in the grunt build.
2. app.js requires all of the needed modules which can be found in the modules package.
3. Each angular module will have an index.js file at its root which will be a one stop shop for angular compilation in the module.
4. Grunt file will compile and minify app.js into the bundle.js.

### Following The Code (Server)
1. main.js will start up the node server.
2. All routes will be listened for here and sent to the routes.js for processing in the main module.
3. Each module can have its own server side code if it needs to.