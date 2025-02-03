/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

export default function Navbar({isAuthenticated, handleLogin, handleLogout }) {
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Te-Chomerce</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarColor01" 
          aria-controls="navbarColor01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contactanos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all">Todos los Productos</Link>
            </li>

            {/* Rutas protegidas: solo se muestran si el usuario está autenticado */}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/carrito">Carrito</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
              </>
            )}
          </ul>

          {/* Barra de búsqueda */}
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>

          {/* Botón de inicio/cierre de sesión */}
          {isAuthenticated ? (
            <button className="btn btn-danger ms-2" onClick={handleLogout}>Cerrar Sesión</button>
          ) : (
            <button className="btn btn-success ms-2" onClick={handleLogin}>Ingresar</button>
          )}
        </div>
      </div>
    </nav>
    
    )
}