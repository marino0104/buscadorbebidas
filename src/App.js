import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/ListaRecetas';
import ModalPRovider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalPRovider>
          <Header />
          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalPRovider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
