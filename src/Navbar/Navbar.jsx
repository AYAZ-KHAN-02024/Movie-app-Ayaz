import {  useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import SearchResult from '../SearchResult/SearchResult'
import { SearchBox } from '../SearchBox/SearchBox'




function Navbar() {

    

    const [searchInput, setSearchInput] = useState('')
    const [click, setClicked] = useState(true)
    const [handleClick, setHandleClick] = useState(true)

    const MenuIcon = () => {
        setClicked(!click)
    }



    useEffect(() => {
        const navbar = document.getElementsByClassName("nav")[0];

        if (click == true) {
            navbar.classList.add("display-none")
        }
        else {
            navbar.classList.remove("display-none")
        }
    }, [click])


    return (
        <>
            <div>
                <header>


                    <h2>M-star</h2>
                  
                    <div onClick={() => setHandleClick(true)}>
                   
                        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
            
                        
                    </div>
                   
                    <i className={click == true ? " menu fa fa-bars" : "cross fa fa-times"} onClick={MenuIcon} id='bar'></i>

                    <nav className='nav'>
                        <h3> <NavLink className='NavLink' to="/" onClick={() => setHandleClick(false)}>Home</NavLink></h3>
                        <h3> <NavLink className='NavLink' to="Popular" onClick={() => setHandleClick(false)}>Popular</NavLink></h3>
                        <h3> <NavLink className='NavLink' to="Top-Rated" onClick={() => setHandleClick(false)}>Top Rated</NavLink></h3>
                        <h3> <NavLink className='NavLink' to="Upcoming" onClick={() => setHandleClick(false)}>Upcoming</NavLink></h3>
                        <h3> <NavLink className='NavLink' to="Sign-up" onClick={() => setHandleClick(false)}><i className="fa-solid fa-user" ></i></NavLink></h3>
                    </nav>

                </header>
                
            </div>
           
            {handleClick && <SearchResult searchInput={searchInput} setHandleClick={setHandleClick}/>}
     


        </>
    )
}

export default Navbar

