import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const  Search=()=> {
    const{query,setQuery,isError}=useGlobalContext();
    const { loginWithRedirect ,isAuthenticated,logout,user} = useAuth0();
    
    return (
        <>
        <div className='logo-container'>
        <img src='./images/myLogo.png' alt="logo"  className='logo'/>
        <span className="app-title">MOVIE APPLICATION</span></div>
    <section className="search-section">
        <div className='search-container'>
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e)=> e.preventDefault()}>
            <div>
                <input 
                type='text'
                placeholder='Search Here'
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                />
            </div>
        </form>
        <div className='log'>
        <div className="cart-icon">
         <NavLink to='/cart'> <i class="fa-solid fa-cart-shopping"></i></NavLink>
       
        </div>
       
        <div className='user'>{isAuthenticated && <p><span className='welcome'> Welcome<br></br> </span> {user.name}</p>}</div>
            {
                isAuthenticated ?
               
        <div className='logButton spacing'> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button></div>
    :
        <div className='logButton spacing'>  <button onClick={() => loginWithRedirect()}>Log In</button></div>
            }
        </div>
        </div>  
         <div className='card-error'>
            <p>{isError.show && isError.msg}</p>
        </div>
    </section>
  
   </>
  )
}

export default Search