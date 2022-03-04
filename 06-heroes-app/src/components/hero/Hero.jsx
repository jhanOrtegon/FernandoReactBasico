import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';

export const Hero = () => {

  const { heroId } = useParams();
  const objHero = getHeroesById(heroId)
  const navigate = useNavigate();

  if (!objHero) {
    return <Navigate to={'/'} />
  }


  const imgPath = `/assets/imgs/${heroId}.jpg`;
  const handleReturn = () => {
    navigate(-1);
  }
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={imgPath} alt={objHero.superhero} className='img-thumbnail h-75 w-100 p-2' />
      </div>

      <div className="col-8">
        <h3>{objHero.superhero}</h3>
        <ul className='list-group'>
          <li className='list-group-item'><b>Alter ego:</b>{objHero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{objHero.publisher}</li>
          <li className='list-group-item'><b>First Appearance:</b>{objHero.first_appearance}</li>
        </ul>
        <h5 className='mt-2'>Characteres</h5>
        <p>{objHero.characters}</p>
        <button
          className='btn btn-outline-dark'
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>

  )
}
