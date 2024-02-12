
import './SearchBox.css'
import { Link } from 'react-router-dom'


const SearchBox = (props) => {
 
 

  return (
   <>
 
<div className="search-container" >
<Link className='NavLink '  to={'/Search'}  >
                    <input type="text" placeholder='Search here any-movie........' className='search-bar'
                    value={props.searchInput}
                      onChange={(e)=>props.setSearchInput(e.target.value)}
                     /> 
                    {/* <i className="search-icon fa-solid fa-magnifying-glass ."></i> */}
                    </Link>
                </div>
                
   </>
  )
}



export {SearchBox}


