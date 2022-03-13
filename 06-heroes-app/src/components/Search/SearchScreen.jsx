import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import getHeroeByName from '../../selectors/getHeroeByName';
import { Alerta } from '../alerta/Alerta';
import { HeroeCard } from '../hero/HeroeCard';
import queryString from "query-string";

export const SearchScreen = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { q = '' } = queryString.parse(location.search)
  const { handleChange, formValues } = useForm({ inputHeroe: q });
  const { inputHeroe } = formValues
  const heroe = getHeroeByName(inputHeroe) || false
  const [hero, setHero] = useState(heroe)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputHeroe}`);
    setHero(heroe)
  }

  return (
    <div className='row mt-3'>
      <div className="col-5">
        <h3>Busquedas</h3>
        <hr />
        <h5>Buscar</h5>
        <hr />
        <form id="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            className='form-control'
            name='inputHeroe'
            placeholder='Buscar un Heroe'
            autoComplete='off'
            onChange={handleChange}
            value={inputHeroe}
          />
          <button
            type='submit'
            className='btn btn-outline-dark w-100 mt-2'
          >
            Buscar...
          </button>

        </form>
        {
          !hero[0] ?
            <Alerta stylo='danger' mensaje='Error, Heroe no Encontrado' />
            : ''
        }
      </div>

      <div className="col-7">
        <h4>Resultados</h4>
        <hr />
        {
          hero
            ?
            hero.map((hero) => (

              <HeroeCard key={hero.id} {...hero} />

            )) : ''
        }
      </div>

    </div>
  )
}
