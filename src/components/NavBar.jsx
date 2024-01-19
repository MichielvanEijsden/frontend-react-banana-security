import React, {useContext, useEffect} from 'react';
import logo from '../assets/banana-01.png';
import { useNavigate, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const navigate = useNavigate();
  const {isAuth,logIn,logOut} = useContext(AuthContext)

  console.log(isAuth)
  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>
      {isAuth === false &&
      <div>

        <button
          type="button"
          onClick={() => navigate('/signin')}
        >
          Log in
        </button>

        <button
          type="button"
          onClick={() => navigate('/signup')}
        >
          Registreren
        </button>
      </div>
      }

      {isAuth === true &&
      <button
      type='button'
      onClick={()=> logOut()}
      >
        log uit
      </button>}
    </nav>
  );
}

export default NavBar;