import React from 'react'
import { Link } from 'react-router-dom'

export default function Screen() {
  return (
    <div className="container">
        <div className="py-4">
            <h1>Inventario Bodega - MoraHerramientas</h1>
        </div>
        <div>
          <div className="row justify-content-around">
            <div className="py-2 col-4 border shadow">
              Directorio
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="my-4 py-2 col-4 border shadow">
              <div className='btn-group-vertical' role="group" aria-label="Vertical button group">
              <Link className='btn btn-primary mt-2' to={'/home'}>Directorio de Contactos</Link>
              <Link className='btn btn-primary mt-1 mb-1' to={'/tools'}>Directorio de Inventario</Link>
              <Link className='btn btn-primary mb-1' to={'/tickets'}>Directorio de Tickets</Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
