# NodeJS
nodejs
# package.json
1. basic information, mandatory file for set up
2. metadata about the project
3. name,description, author, script and dependencies
# package-lock.json
1. dependency locking
2. version consistency
3. improved installation speed (manages dependency installation on flat node_modules structure)
4. describes the exact tree that was generated to allow subsquent installs to have the identical tree (for future devs)
# ExpressJS - unopinionated, minimalist web framework for Node.JS
# npm install express --save
# start the application
1. node server.js
2. update the scripts in package.json file with the command -> execute npm run dev ( based on the script name that we provide)
# nodemon auto restart on the server for the changes.
# npm install --save-dev nodemon