import React from 'react'

export const GrandChild = ({grandChildName, grandChildNaturalHairColor, grandChildHairColor, handleChange}) => {
  return (
    <>
      GrandChild Name: {grandChildName}
      GrandChild Natural Hair Color: {grandChildNaturalHairColor}
      GrandChild New Hair Color: {grandChildHairColor}

      <br />

      <select name="grandChildHairColor" value={grandChildHairColor} onChange={handleChange}>
        <option value='blue'>blue</option>
        <option value='black'>black</option>
        <option value='red'>red</option>
        <option value='brown'>brown</option>
        <option value='grey'>grey</option>
      </select>

    </>
  )
}
