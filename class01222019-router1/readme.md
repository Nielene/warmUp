coreyladovsky [9:55 AM]
@channel WARM UP! Render a component that has a button that toggles between ‘show all pokemon’ and ‘hide all pokemon’. You should use the pokemon api. This should be done with React.


coreyladovsky [10:43 AM]
https://www.youtube.com/watch?v=xvPf-ctQsY0

**// Goals //**

path  / exact path
Link to={}
BrowserRouter
Route
        component
        render

Bonus:
withRouter
Switch

**//**


create-react-app pokemon_toggle
npm start

App.js remove <> that part.
tyepe 'hello' to ensure still working
install axios
npm install axios --save

https://www.youtube.com/watch?v=oeStlwMhmRQ
- not working

coreyladovsky [10:43 AM]
https://www.youtube.com/watch?v=xvPf-ctQsY0
- working


coreyladovsky [12:15 PM]
https://github.com/joinpursuit/intro_to_router

npm install react-router-dom --save
- lets us 'route around'

//---------------------
*BrowserRouter*
*nmp it*
*import it*
in index.js
import { BrowserRouter } from 'react-router-dom';
*wrap App in it*
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

can tell which page we were on based on the url. on just the front end. nothing to do with the back end.
//--------------------------

now go to App.js
import {Router, Link} from 'react-router-dom'
no.
for now , leave Link out. and call Router 'Route'.
*Route* - renders another component. It is a wrapper component. its only job is to render a component.
- High Order Component
- Only renders a component.

//
made a Home and an About in src.

localhost: /about
/           Home  page


//=======================
assignment: (3.15pm lecture)

WithRouter

nmp instatll react-router --save
keep track of our history.


props.match.params.id
props
props.pokemon

will need history.push at some point
