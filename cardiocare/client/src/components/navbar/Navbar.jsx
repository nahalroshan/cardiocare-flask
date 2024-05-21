import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import "./navbar.css";
import { doSignOut } from "../../dbconfig/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const { currentuser } = useAuth();
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <img className="h-18 w-12" src="https://logowik.com/content/uploads/images/hearts-and-love8644.logowik.com.webp" alt="" />
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is CardioCare?</a>
          </p>

          {/* <p><a href="#blog">Library</a></p> */}
        </div>
      </div>
      {!currentuser ? (
        <button
          type="button"
          onClick={() => {
            doSignOut().then(() => {
              navigate("/login");
            });
          }}
        >
          
        </button>
      ) : (
        <>
          <p onClick={() => navigate("/login")}>Sign in</p>
          <button type="button" onClick={() => navigate("/register")}>
            Sign up
          </button>
        </>
      )}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#features">Why CardioCare?</a>
              </p>
              <p>
                <a href="#possibility">Join CardioCare</a>
              </p>
              {/* <p><a href="#blog">Library</a></p> */}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign in
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
