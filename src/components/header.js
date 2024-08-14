import React from 'react'
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header'>
        <Link to="/" className='header-link' id='logo'>Z.tv</Link>
        <div id="right-header-group">
            <Link to="/test" className='header-link'>Test</Link>
            <Link to="/" className='header-link'>Capitalism</Link>
            <Link to="/" className='header-link'>Manifesto</Link>
            <Link to="/" className='header-link'>About</Link>
        </div>    
    </div>
  )
}