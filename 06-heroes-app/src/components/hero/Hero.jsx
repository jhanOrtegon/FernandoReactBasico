import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';

export const Hero = () => {

  const { heroId } = useParams();
  const objHero = getHeroesById(heroId)

  if (!objHero) {
    return <Navigate to={'/'} />
  }
  console.log(objHero);
  return (
    <div>
      <h1>{heroId}</h1>
    </div>

  )
}
