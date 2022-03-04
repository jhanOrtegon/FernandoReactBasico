import React from 'react'
import HeroList from '../hero/HeroList'

export const MarvelScreen = () => {
  return (
    <>
      <h1 className='mt-3'>MarvelScreen 2022</h1>
      <hr />
      <HeroList publisher='Marvel Comics'/>
    </>
  )
}
