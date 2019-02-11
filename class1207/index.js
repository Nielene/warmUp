document.addEventListener('DOMContentLoaded', ()=> {

  let display = document.querySelector('.display');
  let button = document.querySelector('.button');

  button.addEventListener('click', (event)=> {
    accessArrays(choice)
  })


  function accessArrays(choice){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {

      console.log(res);
      // arrays = res.data;
      // arrays.forEach(element => {
      //   let p = document.createElement('p')
      //   p.innerText = "hello"
      // })
      //
      // display.innerHTML = p;
    })
  }





})
