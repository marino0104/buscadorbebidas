import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: '',
    categoria: ''
  });
  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsulta } = useContext(RecetasContext);
  const obtenerDatosReceta = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  return (
    <form
      className='col-12'
      onSubmit={e => {
        e.preventDefault();
        buscarRecetas(busqueda);
        guardarConsulta(true);
      }}
    >
      <fieldset className='text-center'>
        <legend>bebidas por categoria o ingrediente</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            className='form-control'
            type='text'
            name='nombre'
            placeholder='buscar por ingrediente...'
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='categoria'
            onChange={obtenerDatosReceta}
          >
            <option value=''>-- seleccione --</option>
            {categorias.map(cat => (
              <option key={cat.strCategory} value={cat.strCategory}>
                {cat.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            value='Buscar recetas'
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
