import React, { useState } from 'react'
import useForm from '../../hooks/useForm';
import getHeroeByName from '../../selectors/getHeroeByName';
import { Alerta } from '../alerta/Alerta';
import { HeroeCard } from '../hero/HeroeCard';
// import { Alerta } from '../../alerta/Alerta';

export const SearchScreen = () => {


  const { handleChange, clearForm, formValues } = useForm({ inputHeroe: '' });
  const { inputHeroe } = formValues
  const [heroes, setHeroes] = useState({ estado: false, data: null })

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputHeroe.length < 2) {
      <Alerta stylo='danger' mensaje='error , debes tener 3 o mas caracteres' />
      setHeroes({ estado: false, data: null })
      return
    }

    const heroe = getHeroeByName(inputHeroe)
    console.log(heroe);
    setHeroes({ estado: true, data: heroe })

    clearForm();
  }

  return (
    <div className='row mt-3'>
      <div className="col-5">
        <h3>Busquedas</h3>
        <hr />
        <h5>Buscar</h5>
        <hr />
        <form id="formulario" className='' onSubmit={handleSubmit}>
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
        {
          heroes.estado ?
            <>
              <h4>Resultados</h4>
              <hr />
            </>
            : ''
        }

        {
          heroes.estado
            ?
            heroes.data.map((hero) => (
              <HeroeCard key={hero.id} {...hero} />
            ))
            : ''
        }
      </div>

    </div>
  )
}
