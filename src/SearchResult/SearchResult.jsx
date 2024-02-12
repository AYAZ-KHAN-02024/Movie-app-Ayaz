
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SearchResult.css'




const SearchResult = (props) => {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        if (props.searchInput)
        fetch(`https://www.omdbapi.com/?s=${props.searchInput}&apikey=263d22d8`)
            .then((response) => response.json(),
            )
            .then((data) => {
                setMovies(data.Search)

            })
            .catch((er)=>{
                console.log(er,'some error at searchResult 23 jsx')
            })
            .finally(() => {
                
            })

    }, [props.searchInput]);


  



    return (<>
        <div className="PopularCard-main  search-results" >
            {movies && movies.map((value, index) => {
                return (

                    <div className='PopularCards' key={index} onClick={() => { props.setHandleClick(false) }}>


                        <NavLink to={`movie/search/${value ? value.imdbID : ""}`} className='Navlink'>
                            <img src={`${value ? value.Poster : ""}`} alt="" />

                            <div className='popular-card-datails' >
                                <h2 >{value ? value.Title : ""}</h2>
                                <h4 >{value ? value.Year : ""}</h4>
                                
                            </div>

                        </NavLink>


                    </div>

                )

            })}


        </div>

</>
    )
}

export default SearchResult



