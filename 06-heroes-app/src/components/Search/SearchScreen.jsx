import React, { useMemo } from 'react'
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

  const heroe = useMemo(() => getHeroeByName(q) || false, [q])

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputHeroe}`);
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

      </div>

      <div className="col-7">
        <h4>Resultados</h4>
        <hr />
        {
          q === '' ?
            <Alerta stylo='info' mensaje='busca un heroe' />
            : (!heroe.length) && <Alerta stylo='danger' mensaje='Error, Heroe no Encontrado' />
        }

        {
          heroe.map((hero) => (

            <HeroeCard key={hero.id} {...hero} />

          ))
        }
      </div>

    </div>
  )
}
