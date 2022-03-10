import React from 'react'
import useForm from '../../../hooks/useForm';
// import { Alerta } from '../../alerta/Alerta';

export const SearchScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (inputHeroe.length < 2) {
    //   <Alerta stylo='danger' mensaje='ha ocurrido un error' />
    // }

    clearForm();
  }

  const { handleChange, clearForm, formValues } = useForm({ inputHeroe: '' });
  const { inputHeroe } = formValues

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
    </div>
  )
}
