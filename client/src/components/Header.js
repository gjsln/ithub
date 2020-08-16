import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='site-navbar py-1' role='banner'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-6 col-xl-3'>
              <h1 className='mb-0'>
                <a href='index.html' className='text-black h2 mb-0'>
                  IT <strong>Hubstaff Talent</strong>
                </a>
              </h1>
            </div>

            <div className='col-10 col-xl-9 d-none d-xl-block'>
              <nav className='site-navigation text-right' role='navigation'>
                <ul className='site-menu js-clone-nav mr-auto d-none d-lg-block'>
                  <li className='active'>
                    <a href='index.html'>How It Works</a>
                  </li>
                  <li className='has-children'>
                    <a href='index.html'>Browse</a>
                    <ul className='dropdown'>
                      <li>
                        <a href='index.html'>SubMenu</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='index.html'>Search</a>
                  </li>
                  <li className='has-children'>
                    <a href='index.html'>My Account</a>
                    <ul className='dropdown'>
                      <li>
                        <a href='index.html'>User Name</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
