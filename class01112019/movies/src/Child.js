import React from 'react'
import { GrandChild } from './GrandChild'

export const Child = ({name, eyeColor, changeMyName, grandChildName, grandChildNaturalHairColor, grandChildHairColor}) => {

    return (
      <>
      Child Component showing
      <br/>

      Child name: {name + ' , '}
      Child Eye Color: {eyeColor}
      <br/>

      <input name='childsName' type='text' value={name} onChange={changeMyName}/>
      <button onClick={changeMyName}>Change My Name</button>
      <br/>
      <br/>

      <GrandChild
      grandChildName={grandChildName + ' , '}
      grandChildHairColor={grandChildHairColor + ' , '}
      handleChange={changeMyName}/>
      </>
    )


}




//useless class compoent:
// class Child extends React.Component {


// //-----------
// i was wrong about: line 20
//
// <GrandChild
// grandChildName={this.state.name + ' III ' + ' , '}
// grandChildNaturalHairColor={this.state.hairColor + ' , '}
// grandChildHairColor={handleChange}/>
// </>

//-----------------------------------
