import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <div className="row">
            <NavLink exact to='/' activeClassName='active'>
                    <img src="https://www.aba-liga.com/images/aba_logo_250x150.png" className='front-logo'></img>

                </NavLink>
                <NavLink exact to='/Articles/CreateArticle' activeClassName='active' className='publish-button'>
                    Publish Article
               </NavLink>
               
                <NavLink exact to ='/Teams' activeClassName='active' className='publish-button'>
                    Teams
               </NavLink>
            
           
               </div>

        </nav>
    )
}


export default Nav