import React from 'react'

export const MishMash = ({name, childsName, grandChildHairColor}) => {
  return (
    <>
      This sis MISHMASH!
      <br />
      Parent Name: {name}
      <br />
      Child Name: {childsName}
      <br />
      GrandChild Hair Color: {grandChildHairColor}
    </>
  )
}
