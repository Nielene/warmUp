document.addEventListener('DOMContentLoaded', ()=> {
  // console.log("hellow");
  let button = document.querySelector('button');
  button.addEventListener('click', () => {
    // debugger
    fireRequest('https://jsonplaceholder.typicode.com/users', displayPeople)

  })
//practice making a promise with async or await // vs .then (could have used it)
  async function fireRequest(url, callback) {
    let result = await axios.get(url);
    callback(result.data)
  }

  // fetch(url)
  // .then(responseObj => {
  //   return responseObj.json();
  // })
  // .then(responseAsJson => {
  //   displayPeople(responseAsJson)
  // })
  // .then()


  function displayPeople(people) {
    // debugger //getting people array!
    people.sort((a,b)=> { //a and b are objects
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1 //see if smaller thing in front// ITEM BEFORE SMALLER
      } else if (nameA > nameB) {
        return 1//item after is bigger//have to flip it
      } else {
        return 0;//both item sare the same
        //this is how sorting works
      }
    })
    // debugger //console: people and it was sorted by name.
    //console: people.length = 10
    //SORTING MUTATES THE ARRAY

    let peopleList = document.createElement('ul')
    people.forEach(personObject=> {
      let li = document.createElement("li");
      li.innerText = personObject.name;
      peopleList.appendChild(li)
    })
    document.body.appendChild(peopleList)
  }

})
