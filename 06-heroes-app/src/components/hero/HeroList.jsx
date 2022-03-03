import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

const HeroList = ({publisher}) => {

const heroesPublisher = getHeroesByPublisher(publisher);

  return (
    <>
        <ul>
            {
                heroesPublisher.map(({id, superhero}) =>(
                    <li key={id}>
                        {superhero}
                    </li>
                ))
            }
        </ul>   
    </>
  )
}

export default HeroList
