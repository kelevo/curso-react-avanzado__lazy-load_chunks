import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import reactLogo from '../assets/react.svg'
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

export const Navigation = () => {

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ reactLogo } alt="React loog" />
          <ul>
            <li>
              <NavLink 
                to="/" 
                className={ ({ isActive }) => isActive ? 'nav-active' : '' }
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/lazy2" 
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Lazy2
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/lazy3" 
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Lazy3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={ <ShoppingPage /> } />
            <Route path="lazy2" element={ <p>LazyPage2</p> } />
            <Route path="lazy3" element={ <p>LazyPage3</p> } />

            <Route path="/*"    element={<Navigate to="/lazy1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
