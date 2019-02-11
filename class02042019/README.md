coreyladovsky [9:54 AM]
@channel WARM UP! Implement an Instagram backend. There should be a *users table*, a *photos table* and a *comments table*. Create the following, *getAllUsers*, *getAllPhotos*, *getAllPhotosForOneUser*, *getAllCommentsForOnePhoto*, *createANewUser*, *createANewComment*. This is with Express, Pg-promise and SQL. Feel free to write an additional seed file that users the faker npm.

coreyladovsky [12:55 PM]
https://github.com/joinpursuit/latergram

coreyladovsky [11:09 AM]
https://www.youtube.com/watch?v=cvBg-rZXneY
YouTubeCorey Ladovsky
Instalater Part 1

//-------------- START OF BACKEND: ------------

Express Application Generator (website):
  <!-- npm install express-generator -->
npm install express-generator -g
express backend
cd backend
npm Express
npm install
npm start
psql -f db/latergram.sql        
  // see in PSequel
  // creates the database if it doesn't exist adn creates the tables.
  //sets up the database

npm install pg-promise faker --save     
  //get lots of faked data
  <!-- console.log('USERS', users, 'PHOTOS', photos); --> :
node db/seed.js         
  // see in terminal
  // seeds actual (INSERT INTO) data
  // seeding the data./ filling up the table with the INSERTS


nodemon bin/www   
  -- wasnt seeing things in browser. was a spelling error. reinstalled nodemon globally (npm install -g nodemon)
  -- to see on browser teh GET
  -- go to postman to see the POST.


(A route in photos:  photos/photo_id/comments)
photo_id = from the params
user  = current user
body = when they type it. submitted when they submit the form.

Users
- id
- name
- email

Photos
- id
- user_id
- url

Comments
- id
- user_id
- photo_id
- body

FollowerS
- Followed-id
- Following_id

Likes
- id
- photo_id
- user_id


minimum viable product (MVP?)

if going to clone something, probably not going to have everything.


PSQL -F DB/LATERGRAM.SQL
psql -f db/latergram.sql


faker - npm package that generates massive amount of data.

npm install faker
npm install pg-promise faker --save

https://www.npmjs.com/package/faker


let username = faker.name.firstName();
let username = faker.name.findName();

INSERT INTO species(name, is_mammal) VALUES ('Dolphin',true),('Moray Eel',false),('Tiger Shark',false),('Orca Whale',true),('Moon Jelly',false);

|('|Corey|', '|Pursuit|')

node db/seed.

open PSequel


npm start

nodemon

photos/user/id
users/id/photos

postman

photos/photo_id/comments

// ---------- END OF BACK END --------- //
// ---------- START OF FRONT END --------- //

*/* last thing in his terminal was   : node db/seed.js :  
*NEXT*: cd into the main file (cd ..) so you can see backend_express already listed (ls)
*NOW*: create-react-app frontend
*FACT*: create-react-app always runs on 3000
*FACT 2*: backend (Express) runs on port 3000 (bin/www: line 15 defines port as 3000) and in 2nd terminal tab: *nodemon bin/www* : is running.
*NEXT*: WE CAN CHANGE the port the *EXPRESS* runs on in the backend
  -- go to bin/www - change to port 3001
so react app can run on 3000 without issue

*NEXT* TO REFRESH: in the tab that has  : nodemon bin/www :  running, kill it (ctrl + C) and retype :  nodemon bin/www  : and re-run.
-- refresh browser and postman under port 3001 to see all Express seeded data.

*/* the terminal tab that last ran  : node db/seed.js : is no longer needed. use that to run the *frontend REACT* stuff:

*NEXT* cd frontend_react
*THEN* npm start

*SO* two browser windows are now running:
-- one called *:  localhost:3000  :* running the *REACT*
-- the other called *: localhost:3001/comments :* running *EXPRESS* .

**DOING THE AXIOS CALL IN FRONT END**
can use : localhost:3001 : (from what EXPRESS is on) or instead:
could set up a proxy in *frontend's package.json*:
-- after array close bracket of "browserlist", put a comma, new line and "proxy": "http://localhost:3001"

```json
{
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "proxy": "http://localhost:3001"

}
```
--- save it.
--- go back to App.js (frontend still).
--
```js
componentDidMount () {
  axios.get('/users')
  .then(res => {
    debugger
  })
}
```

--- restart REACT server : npm start :  

in the console, when debugger happens automatically, go with:
- *res* and click into *data* then click into *users*
- *res.data.users*
- *res.data.comments*

to POST:
```js
axios.post ('link for users', {a BODY}, )
```

```js
componentDidMount () {
  axios.post('/users', {username: 'reed', email: 'bigGains@hotmail.lrc'})
  .then(res => {
    debugger
  })
}
```

```js
axios.post('/users', {username: this.state.formUsername, email: this.state.formEmail})

```


SEE ALSO REED'S GITHUB ASSIGNMENT EXAMPLE.


//
