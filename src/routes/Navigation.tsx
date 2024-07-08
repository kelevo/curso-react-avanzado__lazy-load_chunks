import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import reactLogo from '../assets/react.svg';

export const Navigation = () => {

  const routeState = ( isActive: boolean ): string => ( isActive ? 'nav-active' : '' );

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={ reactLogo } alt="React loog" />
          <ul>
            {
              routes.map( ({ to, name }) => (
                <li key={ to }>
                  <NavLink 
                    to={ to } 
                    className={({ isActive }) => routeState( isActive ) }
                  >
                    { name } 
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map( ({ path, Component }) => (
              <Route 
                key={ path } 
                path={ path } 
                element={ < Component /> } 
              />
            ))
          }
          <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
