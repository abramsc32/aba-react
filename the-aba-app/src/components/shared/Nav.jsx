import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <div className="row">
                <NavLink exact to='/' activeClassName='active'>
                    ABA
                </NavLink>
               <NavLink exact to ='/Teams' activeClassName='active'>
                    Teams
               </NavLink>
               <NavLink exact to='/Articles' activeClassName='active'>
                    News Articles
               </NavLink>
               <NavLink exact to='/Articles/CreateArticle' activeClassName='active'>
                    Publish Article
               </NavLink>

            </div>
        </nav>
    )
}


export default Nav