import React from 'react';

//a functional component. so dont add a state. it is taking in props.
export const MovieDisplay = (props) => {
  // debugger
  // return null
  return (
    <li>
    Title: {props.title}
    <br/>
    Description {props.description}
    <br/>
    <br/>
    </li>

  )
}
//OR: observe props.
// export const MovieDisplay = ({title, description}) => {
//   // debugger
//   // return null
//   return (
//     <li>
//     Title: {title.title}
//     <br/>
//     Description {description.description}
//     </li>
//
//   )
// }
