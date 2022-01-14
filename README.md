# VERTRICAL CODING CHALLENGE APPROACH 

Welcome recruiters. You can find a functional version of the web app at http://ec2-3-88-109-250.compute-1.amazonaws.com/
i deployed by using an EC2 AWS instance.

To locally run the project, feel free to clone the project, run npm install and npm start!
I posted in other repository the back end if you want to try it (however it is a running server in AWS) https://github.com/gasanchez10/Vertrical . If you want to try it out locally. Just clone it, install the dependencies and run node server.js

### 1. SEARCH FIELD AND BUTTON 

As you can see. The front is a simple implementation. You can type CAR names and trigger the search by using enter or clicking!

### 2. Backend Using Node

I set up a MongoDB short DB Containing 20 entries of cars (Title, Photo URL, short description and description). 
My Node server uses a mongoose connection and queries by title in the db using the api 'Search'. The search is basically a SQL LIKE Query migrated version to Mongo and generate good enough results in JSON format. You can type a brand and it will show up to 3 results. 

## 3. Object Search

Once you search a brand, lets say Volvo (got mazda bmw mitsubishi and so on in the db), you will get a few cards matching the flexbox styling as a result!
Click on the title and re route the app (React router) to /Car , get detailed information and go back ! (Thanks god could get it with no reducers XD)

## 4. Testing structure

Set up rendering tests and lookforcarmethod test! Further development must be done for real tests using jsx components with jest!

Im happy to learn from you guys and improve my skills!