import React, { useState } from 'react'
import { NavLink ,NavDropdown } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {


  // NavBar Fixed
  // const[fix,setFix]= useState(false)

  // function setNavFixed()
  // {
  //   if(window.scrollY >=392)
  //   {
  //     setFix(true)
  //   }
  //   else{
  //     setFix(false)
  //   }
  // } 

  // window.addEventListener("scroll",setNavFixed)
    
const Nav = styled.nav`

// .navbar-scroll.fixed{
//   background-color:white;
//   transition: .3s ease-in-out;

// }
.navbar-list {
    display: flex;
    gap: 2.4rem;
    li {
      list-style: none;
      
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 2.0rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
 

`;
  return (
    <Nav>
    <div className="menuIcon">
        <ul className="navbar-list">
            <li>
                <NavLink className="navbar-link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/pricing">Pricing</NavLink>
            </li>

            <li>
                <NavLink className="navbar-link" to="/about">About</NavLink>
            </li>

            <li>
                <NavLink className="navbar-link" to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/signup">SignUp</NavLink>
            </li>
            <li>
                <NavLink className="navbar-link" to="/login">LogIn</NavLink>
            </li>
        </ul>
    </div>
  
    </Nav>
 
  );
};


export default Navbar
