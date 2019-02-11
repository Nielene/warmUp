coreyladovsky [9:50 AM]
@channel WARM UP! Convert this unit4Solution to use redux: https://github.com/joinpursuit/unit4Solution (edited)

coreyladovsky [10:53 AM]
https://www.youtube.com/watch?v=5FUGxaAnmTk
YouTubeCorey Ladovsky
Unit 4 Solution With Redux

//=================================

- mkdir folder inside class02112019 with identical name as what is to be cloned ('unit4Solution').
- git clone https://github.com/Nielene/unit4Solution.git in that empty folder;
- cd into the cloned folder. and ls to see all the files.
- npm install   to get React to work.
- npm install redux react-redux redux-thunk redux-logger

- in index. make a store:
import { createStore } from 'redux'
let store = createStore(rootReducer)

- make reducers folder inside

- then npm start


//===========

- create store;
  - make reduce
  - make action
    - connect with provide
    - connects in container

//------------

form
  state = { username: '', email: ''}

onSubmit ...

//-------------

thunk - asyn action creators
OwnProps
Normalized State:
  {
    People: {
      12: { id: 12, name: Corey },
      44: { id: 44, name: Reed },
      10: { id: 10, name: Elle }
    }
  }

//=================
