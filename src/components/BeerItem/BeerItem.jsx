import React from 'react'
import './BeerItem.css';

const BeerItem = ({ title, ibu, tags}) => {
  return (
    <div className="app__typebeer-beeritem">
     <span>  {title} </span>  |  {ibu} | {tags}
        
        </div>
  )
}

export default BeerItem